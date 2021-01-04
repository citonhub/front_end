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
           imagepath:this.$root.imagepath,
           cropType:'rectangle-stencil',
           cropProp:{
                handlers: {},
	   	movable: true,
         scalable: false,
         aspectRatio: 1,
         
           }
        }
    },
    components: {
   ImageCropper
  },
   mounted(){

     
     
       
    },
    methods:{

         goBack() {

           this.$refs.cropper.crop();
            this.$root.croppedImage = null;
          
           this.$root.croppedImage = this.$refs.cropper.image;

             this.$root.showImageCropper = false

        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        crophandler:function(){

        },
        defaultSize() {
			return {
				width: 400,
				height: 400,
         };
        
      },
      
  
  
    },
   
}
</script>
<style scoped>

</style>