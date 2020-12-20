<template>
<div>
 
 
  
  <!-- small and medium and large screen -->
    
     <div class="col-12   px-0 d-block  py-0" style="position:fixed; left:0; height:100%; top:0%; background:white; z-index:99999999999999999999;">

      <div class="col-12 py-0 fixed-top" style="position:fixed;width:100%;border-bottom:2px solid #3C87CD; border-radius:0px; background:white; z-index:9999999999999999999;">
        <div class="row py-1 my-0">
           <div class="col-2 py-0 my-0 text-left">
           <v-btn @click="closePanel()" icon><v-icon style="font-size:25px;">las la-times</v-icon> </v-btn>
           </div>
            <div class="col-8 py-0 my-0 d-flex" style="align-items:center;justify-content:center;">
                <div style="font-family:MediumFont; font-size:13px;" >Project title 1 </div>
           </div>
            <div class="col-2 py-0 my-0 text-right">
           <v-btn icon @click="openSettings()"><v-icon style="font-size:25px;">las la-cog</v-icon> </v-btn>
           </div>

        </div>
            <div class="d-md-none d-block" >
                  <div class="row" style="background:#F3F8FC ">
                  <div class="col-2  py-0 " >
                       <v-btn icon @click="showSideBar = true" ><v-icon style="font-size:20px;">las la-bars</v-icon> </v-btn>
                  </div>

                  <div class="col-10 scroller py-1 " style="overflow-x:auto; white-space:nowrap;" v-if="this.$router.currentRoute.path.indexOf('editor') >= 0">
                      <v-chip  close small  outlined color="#3C87CD">index.html </v-chip>  

                  </div>

                </div>
            </div>
               
              
      </div>

      <div class="col-12 py-1 px-0" style="position:absolute;width:100%;height:100%; background:white;">
         <!-- side bar -->
          
          <div class="col-lg-2 col-md-4  scroller d-md-block d-none" style="position:absolute;height:98%; background:#ffffff; border-right:1px solid #c5c5c5; top:0; padding-top:30px; overflow-y:auto; overflow-x:hidden;">
           
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

      <div  class=" col-lg-10 offset-lg-2  col-md-8 offset-md-4 "  style=" position:absolute;height:95%; background:#F3F8FC; top:5%;">
       
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
    /* webpackChunkName: "panel-side" */ './PanelSide.vue'
  );

 export default {
    data () {
      return {
        showSideBar:false
      }
    },
    components: {
        panelSide 
    },

    methods:{
      closePanel() {
         this.$router.push({ path: '/board/projects/list' });
      },

      openSettings(){
        this.$router.push({ path: '/board/projects/panel/set-panel' });
      }
    }
  }
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 6px;
}

 
.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid darkgrey;
}
</style>