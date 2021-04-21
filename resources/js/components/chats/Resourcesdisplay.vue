<template>
    <div style="background:transparent;height:100%:">
   <div class="col-12 py-1 my-0">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 px-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 d-flex">
             <span @click="showResources" style="font-size:14px; font-family:MediumFont;">Resources</span>
                  <span @click=" showPlaylist" class="ml-4" style="font-size:14px; font-family:MediumFont;">Playlists</span>
          </div>
              
              
        </div>



      
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0" >
       
       <!--navigation-->

<playlist v-if="toggle" style="height:100%;"></playlist>

<resources v-else ></resources>

       <!--nav ends-->
        </div>

       <!-- ends -->

       
        
     

    </div>
   </div>

  </div>
</template>
<script>

const playlist = () => import(/* webpackChunkName: "playlist" */ './playlists');
const resources = () => import(/* webpackChunkName: "resource" */ './resources');
export default {
  components:{
    playlist,
    resources
    
  },
data(){
  return{
toggle:true
  }
},
methods:{
  showPlaylist(){
this.toggle=true;
  },
  showResources(){
    this.toggle=false;
  },
  
}
}
</script>
<style scoped>

</style>