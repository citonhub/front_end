<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class=" col-lg-6 offset-lg-3 py-0 px-0 my-0" style=" border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Edit Image</span>
         </div>
         <div class="col-4 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

       <div class="py-1 my-0" style="position:absolute; top:5%; height:100%;width:100%; left:0; overflow-y:auto; overflow-x:hidden; ">
        
      <image-cropper :img="this.imagepath" :componentType="cropType" :stencilProps="cropProp" class=" d-flex col-12 " ref="cropper"
      style="align-items:center; justify-content:center; height:80%;" ></image-cropper>
        
              
        </div>

        <div class="d-flex" style="position:fixed;left:0; bottom:10%;width:100%;height:auto;align-items:center;justify-content:center;">
                   
                      <v-btn x-small  rounded color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;" @click="goBack"  > done</v-btn>
         </div>

         </div>
       </div>
     </v-app>
</template>
<script>


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
       this.$root.showHeader = true;
    },
    methods:{
        showHome: function(){
      this.$router.push({ path: '/' });
   },
  
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
<style>

</style>