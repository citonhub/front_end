<template>
    <div>
        <div class="d-flex flex-row">
             <div class="col-6  py-1 px-2">
                <span style="font-size:14px;color:white;font-family:HeaderFont;">Crop Image</span>
             </div>
              <div class="col-6 px-2 py-1 text-right">
                 <v-btn small rounded color="#3C87CD"  @click="goBack" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Crop</span> 
           </v-btn>
             </div>
          
        </div>
        <div style="position:absolute;height:80%;left:0;top:7%;" class="col-lg-10 offset-lg-1">

               <image-cropper :img="this.imagepath" :componentType="cropType" :stencilProps="cropProp" class=" d-flex col-12 " ref="cropper"
      style="align-items:center; justify-content:center;height:100%;" ></image-cropper>

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
      this.$root.showTabs=true;
       this.$root.showHeader = false;
    },
    methods:{
      
  
    goBack() {
          
          this.$refs.cropper.crop();

       if(this.$root.currentImage == 'image1'){
            
            
           this.$root.imagepath1 = this.$refs.cropper.image;
           this.$root.imageCanvas1 = this.$refs.cropper.canvas;
           this.$root.imageHeight1 = this.$refs.cropper.coordinates.height;
           this.$root.imageWidth1 = this.$refs.cropper.coordinates.width;

      }
       if(this.$root.currentImage == 'image2'){
          
          this.$root.imagepath2 = this.$refs.cropper.image
          this.$root.imageCanvas2 = this.$refs.cropper.canvas;
          this.$root.imageHeight2 = this.$refs.cropper.coordinates.height;
           this.$root.imageWidth2 = this.$refs.cropper.coordinates.width;
      }
       if(this.$root.currentImage == 'image3'){
          
          this.$root.imagepath3 = this.$refs.cropper.image
          this.$root.imageCanvas3 = this.$refs.cropper.canvas;
          this.$root.imageHeight3 = this.$refs.cropper.coordinates.height;
           this.$root.imageWidth3 = this.$refs.cropper.coordinates.width;
      }
       if(this.$root.currentImage == 'image4'){
          
          this.$root.imagepath4 = this.$refs.cropper.image
          this.$root.imageCanvas4 = this.$refs.cropper.canvas;
          this.$root.imageHeight4 = this.$refs.cropper.coordinates.height;
           this.$root.imageWidth4 = this.$refs.cropper.coordinates.width;
      }

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    },
   
}
</script>
<style scoped>

</style>