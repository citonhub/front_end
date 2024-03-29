<?php
namespace App\traits;
use Illuminate\Support\Facades\Config;
use Intervention\Image\Facades\Image;
use Illuminate\Http\UploadedFile;

use Illuminate\Support\Facades\File;
trait ManagesImages
{
    public $destinationFolder;
    public $destinationThumbnail;
    public $extension;
    public $file;
    public $imageDefaults;
    public $imageName;
    public $imagePath;
    public $thumbHeight;
    public $thumbPrefix;
    public $thumbnailPath;
    public $thumbWidth;
     public $imgHeight;
    public $imgWidth;
    /**
     * @param $modelImage
     * hand in the model
     */
    private function deleteExistingImages($modelImage)
    {
         // delete old images before saving new
        $this->deleteImage($modelImage, $this->destinationFolder);
        $this->deleteThumbnail($modelImage, $this->destinationThumbnail);
    }
    Private function deleteImage($modelImage, $destination)
    {
        File::delete("/var/www/citonhubnew/public" .
            $modelImage->image_name . '.' .
            $modelImage->image_extension);
    }
    Private function deleteThumbnail($modelImage, $destination)
    {
        File::delete("/var/www/citonhubnew/public" . $this->thumbPrefix .
            $modelImage->image_name . '.' .
            $modelImage->image_extension);
    }
    private function getUploadedFile($file)
    {
      return  $file ;
    }
    private function makeImageAndThumbnail()
    {
        //create instance of image from temp upload
        $image = Image::make($this->file->getRealPath());
        //save image with thumbnail
        $image->
         resize($this->imgWidth,$this->imgHeight)
         ->save("/var/www/citonhubnew/public" . $this->destinationFolder
            . $this->imageName
            . '.'
            . $this->extension);
                
    }
    /**
     * @return bool
     */
    private function newFileIsUploaded($filename)
    {
        return !empty(Input::file($filename));
    }
    private function saveImageFiles(UploadedFile $file, $model)
    {
        $this->setImageFile($file);
        $this->setFileAttributes($model);
        $this->makeImageAndThumbnail();
    }
    private function setImageDefaultsFromConfig($imageTypeKey)
    {
        $imageType = 'image-defaults.' . $imageTypeKey;
        $this->imageDefaults = Config::get($imageType);
        $this->setImageProperties();
    }
    private function setFileAttributes($model)
    {
        $this->imageName = $model->image_name;
        $this->extension = $model->image_extension;
    }
    private function setImageProperties()
    {
        foreach ($this->imageDefaults as $propertyName => $propertyValue){
        if ( property_exists( $this , $propertyName) ){
            $this->$propertyName = $propertyValue;
        }
        }
    }
    private function setImageFile(UploadedFile $file)
    {
        $this->file = $file;
    }
}