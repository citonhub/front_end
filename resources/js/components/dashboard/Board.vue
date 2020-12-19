<template>
<div class="fixed-layout">
 

   <div style="width:100%; height:auto; overflow-y:hidden; overflow-x:hidden; ">
 
 <!-- side bar -->

 <!-- large and medium screens -->
  <v-card class="d-none col-lg-2  d-lg-block"  style="z-index:99999999;border-radius:0px; align-items:center; background:white; justify-content:center; position:fixed; height:100%; top:0%;">
    
   <sidebar></sidebar>

  </v-card>

 <!-- ends -->

 <!-- side bar for medium and small screens -->

 <v-slide-x-transition>
   <div class="col-12 d-lg-none d-block py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:999999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <sidebar></sidebar>
     </div>

   </div>

 </div>
 </v-slide-x-transition>


 <!-- ends -->
    
<!-- Main board -->
<div class=" col-lg-10  offset-lg-2 "  style="z-index:999; background:#F5F5FB;  align-items:center; justify-content:center; position:fixed; height:100%; top:0%;">

    <!-- top bar component -->
    
     <topbar></topbar>

     <!-- ends -->


      <div class="col-12 mt-lg-2 py-0 pb-3 px-0 scroller" style="position:absolute; top:10%; left:0%; height:90%; overflow-y:auto; overflow-x:hidden; ">
      <!-- entry point for vue router -->
      <router-view></router-view>
      <!-- ends -->
     </div>
     
   
   

  </div>


     <!-- floating button hub for medium and small screen -->

     <v-btn medium fab color="#3C87CD" class="d-lg-none"  v-if="that.$root.showMobileHub" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

         <span style="font-family:MediumFont; font-size:12px;color:white; text-transform:capitalize;"> Hub</span>
         
     </v-btn>

     <!-- ends -->
     
<!-- ends -->
     
   </div>

</div>
  
</template>

<script>
 export default {
    data () {
      return {
       showSideBar:false,
       searchType:'',
       that:this
      }
    },
    mounted(){
      this.$root.boardComponent = this;
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
