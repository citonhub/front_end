<?php
namespace App\traits;
use Illuminate\Support\Facades\Config;
use Intervention\Image\Facades\Image;
use Illuminate\Http\UploadedFile;

use Illuminate\Support\Facades\File;
trait ManageFiles
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
        File::delete("/var/www/citonhub/public" .
            $modelImage->image_name . '.' .
            $modelImage->image_extension);
    }
    Private function deleteThumbnail($modelImage, $destination)
    {
        File::delete("/var/www/citonhub/public" . $this->thumbPrefix .
            $modelImage->image_name . '.' .
            $modelImage->image_extension);
    }
    private function getUploadedFile($request)
    {
      return  $file = $request->image;
    }
    private function makeImageAndThumbnail()
    {
        //create instance of image from temp upload
        $image = Image::make($this->file->getRealPath());
        //save image with thumbnail
        $image->save("/var/www/citonhub/public" . $this->destinationFolder
            . $this->imageName
            . '.'
            . $this->extension)
            ->resize($this->thumbWidth, $this->thumbHeight)
            // ->greyscale()
            ->save("/var/www/citonhub/public" . $this->destinationThumbnail
                . $this->thumbPrefix
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