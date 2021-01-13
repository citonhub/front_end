<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">
 
 <!-- side bar -->

 <!-- large and medium screens -->
  <v-card class="d-none col-lg-2  d-lg-block"  style="z-index:999;border-radius:0px; align-items:center; background:white; justify-content:center; position:fixed; height:100%; top:0%;">
    
   <side-bar></side-bar>

  </v-card>

 <!-- ends -->

 <!-- side bar for medium and small screens -->

 <v-slide-x-transition>
   <div class="col-12 d-lg-none d-block py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <side-bar></side-bar>
     </div>

   </div>

 </div>
 </v-slide-x-transition>


 <!-- ends -->

 <!-- image cropper -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showImageCropper">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

     <div class=" col-lg-6  pt-2 col-md-8  d-flex flex-column" style="background:white;height:100%;" >

       <div class="text-center d-flex flex-row" style="align-items:center;">
          
          <div class="col-2 px-1 py-1 text-left">
          <v-btn icon @click="closeCropper"><v-icon>mdi mdi-close</v-icon> </v-btn> 
          </div>
         
          <div class="text-center col-8 py-1" style="width:100%;">
            <h6>Crop Image</h6>
          </div>

           <div class="col-2 px-1 py-1">
          
          </div>
       </div>
        <image-cropper-board></image-cropper-board>
     </div>

   </div>

 </div>


 <!-- ends -->


  <!-- share  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showInvitation = false" v-if="this.$root.showInvitation">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

   

      
      <invitation :infoText="this.$root.infoText"
                                   :extraInfo="this.$root.extraInfo" :fromChat="false" :alertComponent="this.$root.alertComponent"></invitation>
   

   </div>

 </div>


 <!-- ends -->
    
<!-- Main board -->
<div class=" col-lg-10  offset-lg-2 "  style="z-index:999999; background:#F5F5FB;  align-items:center; justify-content:center; position:fixed; height:100%; top:0%;">

    <!-- top bar component -->
    
     <top-bar></top-bar>

     <!-- ends -->
  
      <div class="col-12 py-0 pb-3 px-0 mt-md-5" style="position:absolute; background:#F5F5FB; left:0%; top:0%;  height:100%;overflow-y:hidden; overflow-x:hidden; ">
      <!-- entry point for vue router -->
      <router-view></router-view>
      <!-- ends -->
     </div>
     
   
   

  </div>


    
     
<!-- ends -->
     
   </div>

</div>
  
</template>

<script>

const ImageCropperBoard = () => import(
    /* webpackChunkName: "imageCropperBoard" */ './ImageCropper.vue'
  );

     const Invitation = () => import(
    /* webpackChunkName: "Invitation" */ '../chats/invitation.vue'
  );

  const TopBar = () => import(
    /* webpackChunkName: "TopBarBoard" */ './TopBar.vue'
  );

   const SideBar = () => import(
    /* webpackChunkName: "SideBar" */ './sideBar.vue'
  );

 export default {
    data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this
      }
    },
    components:{
     ImageCropperBoard,
     Invitation,
     TopBar,
     SideBar
    },
    mounted(){
      this.$root.boardComponent = this;
    },
    methods:{
      closeCropper:function(){
        this.$root.showImageCropper = false;
         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
  .fixed-layout{
    position: fixed;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
   
  }
.scroller::-webkit-scrollbar {
  width: 6px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  
</style>
