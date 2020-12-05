<template>
<div>
 
 <!-- large screen container -->
   <v-card class="d-lg-block col-lg-8  offset-lg-3 px-0 d-none  py-0" style="position:fixed; left:0; top:10%; height:85%;background:white;">
      <div class="col-12 py-1 my-0 fixed-top" style="position:sticky; top:-3%; width:100%;border-bottom:2px solid #3C87CD; border-radius:0px; background:white; z-index:99999999999;">
        <div class="row py-0 my-0">
           <div class="col-2 py-0 my-0 text-left">
           <v-btn icon><v-icon style="font-size:25px;">las la-arrow-left</v-icon> </v-btn>
           </div>
            <div class="col-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
                <div style="font-family:MediumFont; font-size:13px;" >Project title 1 </div>
           </div>
            <div class="col-2 py-0 my-0 text-right">
           <v-btn icon><v-icon style="font-size:25px;">las la-cog</v-icon> </v-btn>
           </div>
        </div>
      </div>
      <div class="col-12 py-1 px-0" style="position:absolute;width:100%;height:100%; top:0; ">
         <!-- side bar -->
          
          <div class="col-lg-3 scroller" style="position:absolute;height:100%; background:#ffffff; top:0; border-right:1px solid #c5c5c5; padding-top:30px; overflow-y:auto; overflow-x:hidden;">
           
             <panel-side></panel-side>
       
          </div>
         <!-- ends -->

   <!-- panel viewer -->

      <div  class="col-lg-9 offset-lg-3 px-0 py-0"  style="position:absolute;height:94%; background:#F3F8FC; top:6%;">
       
         <router-view></router-view>

         </div>

   <!-- ends -->
       
      </div>
   </v-card>

   <!-- ends -->
  
  <!-- small and medium screen -->
    
     <div class="d-lg-none col-12   px-0 d-block  py-0" style="position:fixed; left:0; top:0%; height:100%;background:white; z-index:999999999999;">

      <div class="col-12 py-0 fixed-top" style="position:fixed;width:100%;border-bottom:2px solid #3C87CD; border-radius:0px; background:white; z-index:99999999999;">
        <div class="row py-1 my-0">
           <div class="col-2 py-0 my-0 text-left">
           <v-btn icon><v-icon style="font-size:25px;">las la-arrow-left</v-icon> </v-btn>
           </div>
            <div class="col-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
                <div style="font-family:MediumFont; font-size:13px;" >Project title 1 </div>
           </div>
            <div class="col-2 py-0 my-0 text-right">
           <v-btn icon><v-icon style="font-size:25px;">las la-cog</v-icon> </v-btn>
           </div>

        </div>
            <div class="d-md-none d-block">
                  <div class="row" style="background:#F3F8FC ">
                  <div class="col-2  py-0 " >
                       <v-btn icon @click="showSideBar = true" ><v-icon style="font-size:20px;">las la-bars</v-icon> </v-btn>
                  </div>

                  <div class="col-10 scroller py-1 " style="overflow-x:auto; white-space:nowrap;">
                      <v-chip  close small  outlined color="#3C87CD">index.html </v-chip>  

                  </div>

                </div>
            </div>
               
              
      </div>

      <div class="col-12 py-1 px-0" style="position:absolute;width:100%;height:100%; background:white;">
         <!-- side bar -->
          
          <div class="col-md-3 scroller d-md-block d-none" style="position:absolute;height:98%; background:#ffffff; border-right:1px solid #c5c5c5; top:0; padding-top:30px; overflow-y:auto; overflow-x:hidden;">
           
             <panel-side></panel-side>
       
          </div>


          <v-slide-x-transition>
   <div class="col-12 d-md-none  py-0 px-0" style="position:fixed; width:100%; top:0; height:100%; background: rgba(27, 27, 30, 0.32);z-index:9999999999999;" @click="showSideBar = false" v-if="showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 pt-2 scroller" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden; "  @click.stop="showSideBar = true">
         <panel-side></panel-side>
     </div>

   </div>

 </div>
 </v-slide-x-transition>

         <!-- ends -->

   <!-- panel viewer -->

      <div  class="col-md-9 offset-md-3 "  style=" position:absolute;height:95%; background:#F3F8FC; top:5%;">
       
       <router-view></router-view>

         </div>

   <!-- ends -->
       
      </div>
   </div>

  <!-- ends -->
</div>
  
</template>

<script>
  const panelSide = () => import(
    /* webpackChunkName: "panel-side?v=0.19" */ './PanelSide.vue'
  );

 export default {
    data () {
      return {
        showSideBar:false
      }
    },
    components: {
        panelSide
    }
  }
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 6px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>