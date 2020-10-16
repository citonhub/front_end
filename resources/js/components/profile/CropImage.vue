<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6;position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Crop Image</span>
         </div>
         <div class="col-2 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="py-1 my-0" style="position:absolute; top:5%; height:100%;width:100%; left:0; overflow-y:auto; overflow-x:hidden; ">
        
      <image-cropper :img="this.$root.imagepath" :componentType="cropType" :stencilProps="cropProp" class=" d-flex col-12 " ref="cropper"
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
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       
    },
    methods:{
       goBack() {

           this.$refs.cropper.crop();
            this.$root.croppedImage = null;
            this.$root.imageExist = false;
           this.$root.croppedImage = this.$refs.cropper.image;
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
<style>
.editor-style> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 4px;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.is-active{
    border-color: #dbedf0;
    border-style: solid;
    border-width: 1px;
}
 /* *:focus {
    outline: none;
}  */

.preview{
   border: solid 3px #3E8893;
   height:200px;
   width:200px;
}
</style>