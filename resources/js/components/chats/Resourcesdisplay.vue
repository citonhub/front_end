<template>
    <div style="background:transparent;height:100%:">
   <div class="col-12 py-1 my-0">
    <div class="row">
        <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky; background:white; cursor:pointer; top:0%; align-items:center;">
            <div class=" col-2 px-1 py-0">
              <v-btn icon @click.stop="goBack">
                      <v-icon>las la-arrow-left</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 px-0 d-flex flex-row" style="align-items:center;">

                   <div class="col-6 py-1 d-flex" :style="selectedTab == 'playlists' ? 'align-items:center; justify-content:center;border-bottom:3px solid #3C87CD' : 'align-items:center; justify-content:center;border-bottom:1px solid #c5c5c5'"  @click="showPlaylist">
                     <span  style="font-size:14px; font-family:MediumFont;">Playlists</span>
               </div>

               <div class="col-6 py-1 d-flex" :style="selectedTab == 'resources' ? 'align-items:center; justify-content:center;border-bottom:3px solid #3C87CD' : 'align-items:center; justify-content:center;border-bottom:1px solid #c5c5c5'" @click="showResources">
             <span  style="font-size:14px; font-family:MediumFont;">Resources</span>
               </div>
          </div>

          <div class=" col-2 px-1 py-0">
              
            </div>
              
              
        </div>



      
      <div style="background:transparent;font-family:BodyFont; " class="col-12 py-1 my-0" >
       
       <!--navigation-->

    <playlist v-if="toggle"></playlist>

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
toggle:true,
selectedTab:'playlists',
  }
},
 mounted(){
    
    setTimeout(() => {
        this.checkResourceType();
    }, 1000);
   
 },
methods:{
  checkResourceType: function(){
      if(this.$router.currentRoute.path.indexOf('playlists') >= 0){
                
               this.selectedTab = 'playlists';

               this.toggle=true;
            

            }

         if(this.$router.currentRoute.path.indexOf('resources') >= 0){
                
               this.selectedTab = 'resources';

               this.toggle=false;
            

            }
  },
  changeRoute:function(type){
    
          this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id + '/'  + type });
          this.checkResourceType();
  },
    goBack:function(){
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

             this.$root.chatComponent.innerSideBarContent = '';
            
            this.$root.chatComponent.innerSideBarContent = '';
       
        },
  showPlaylist(){
this.toggle=true;
this.selectedTab = 'playlists';
  },
  showResources(){
    this.toggle=false;
    this.selectedTab = 'resources';
  },
  
}
}
</script>
<style scoped>

</style>