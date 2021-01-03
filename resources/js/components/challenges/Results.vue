<template>
    <div>
        
           <!-- challenge result large screens-->

           <div style="position:fixed;height:88%;left:0;top:10%;z-index:9999999999999999;overflow-y:auto;" class="col-lg-10 offset-lg-2 py-0 px-0">

                 <div class="col-lg-10 offset-lg-1 pt-0 pb-1 mb-0 col-md-10 offset-md-1 px-0 d-md-flex flex-column d-none py-0 px-0" 
              style="position:absolute; left:0%; top:0%; height:98%; overflow-x:hidden; overflow-y:hidden; background:#ffffff;border:1px solid #c5c5c5; border-radius:6px; z-index:9999999999;">

              <panel-loader></panel-loader>


           </div>

           </div>

              <!-- challenge result smaller screen-->

           <div class="col-12 pt-0 pb-1 mb-0 px-0 d-md-none flex-column d-flex py-0 px-0" 
              style="position:fixed; left:0%; top:0%; height:100%; overflow-x:hidden; overflow-y:hidden; background:#ffffff; z-index:9999999999999999;">

              <panel-loader></panel-loader>


           </div>

           <!-- ends -->

         

           <!-- ends -->

    </div>
</template>
<script>
 const PanelLoader = () => import(
    /* webpackChunkName: "PanelLoaderChallenge" */ './PanelLoader.vue'
  );

export default {
    data(){
        return{
            that:this
        }
    },
     components:{
   PanelLoader
    },

  
}
</script>
<style scoped>

</style>