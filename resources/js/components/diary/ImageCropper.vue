<template>
    <div class="d-flex px-2 flex-column py-2"  style="height:90%;weight:100%;left:0%;">
        
        <div style="height:100%;">

               <image-cropper :img="this.imagepath" :componentType="cropType" :stencilProps="cropProp" class=" d-flex col-12 " ref="cropper"
      style="align-items:center; justify-content:center;height:100%;" ></image-cropper>

        </div>

        <div class="d-flex flex-row">
            
              <div class="col-12 px-2 py-1 text-center">
                 <v-btn small rounded color="#3C87CD"  @click="goBack" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Crop</span> 
           </v-btn>
             </div>
          
        </div>
    </div>
</template>
<script>

const ImageCropper = () => import(
    /* webpackChunkName: "ImageCropperMain" */ './ImageCropperMain.vue'
  );
export default {
    data(){
        return{
          imagepath:'',
           cropType:'rectangle-stencil',
           cropProp:{
               
         
           }
     
       
        }
    },
    components: {
   ImageCropper
  },
   mounted(){

       if(this.$root.currentImage == 'image1'){
          
          this.imagepath = this.$root.imagepath1;
      }
       if(this.$root.currentImage == 'image2'){
          
          this.imagepath = this.$root.imagepath2;
      }
       if(this.$root.currentImage == 'image3'){
          
          this.imagepath = this.$root.imagepath3;
      }
       if(this.$root.currentImage == 'image4'){
          
          this.imagepath = this.$root.imagepath4;
      }
     
       
    },
    methods:{

         goBack() {
          
          this.$refs.cropper.crop();

       if(this.$root.currentImage == 'image1'){
            
            
           this.$root.imagepath1 = this.$refs.cropper.image;
           this.$root.imageCanvas1 = this.$refs.cropper.canvas;
           this.$root.addDiaryContentComponent.imageHeight1 = this.$refs.cropper.coordinates.height;
            this.$root.addDiaryContentComponent.imageWidth1 = this.$refs.cropper.coordinates.width;

      }
       if(this.$root.currentImage == 'image2'){
          
          this.$root.imagepath2 = this.$refs.cropper.image
          this.$root.imageCanvas2 = this.$refs.cropper.canvas;
           this.$root.addDiaryContentComponent.imageHeight2 = this.$refs.cropper.coordinates.height;
            this.$root.addDiaryContentComponent.imageWidth2 = this.$refs.cropper.coordinates.width;
      }
       if(this.$root.currentImage == 'image3'){
          
          this.$root.imagepath3 = this.$refs.cropper.image
          this.$root.imageCanvas3 = this.$refs.cropper.canvas;
           this.$root.addDiaryContentComponent.imageHeight3 = this.$refs.cropper.coordinates.height;
            this.$root.addDiaryContentComponent.imageWidth3 = this.$refs.cropper.coordinates.width;
      }
       if(this.$root.currentImage == 'image4'){
          
          this.$root.imagepath4 = this.$refs.cropper.image
          this.$root.imageCanvas4 = this.$refs.cropper.canvas;
           this.$root.addDiaryContentComponent.imageHeight4 = this.$refs.cropper.coordinates.height;
            this.$root.addDiaryContentComponent.imageWidth4 = this.$refs.cropper.coordinates.width;
      }

       this.$root.addDiaryContentComponent.image1 = this.$root.imagepath1,
        this.$root.addDiaryContentComponent.image2 = this.$root.imagepath2,
        this.$root.addDiaryContentComponent.image3 = this.$root.imagepath3,
        this.$root.addDiaryContentComponent.image4 = this.$root.imagepath4,

          
       this.$root.showImageCropperDiary = false;
        },
       
    },
   
}
</script>
<style scoped>

</style>