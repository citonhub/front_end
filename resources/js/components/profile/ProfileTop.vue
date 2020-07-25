<template>
    <div>
        <div class="col-12 py-1 my-0 " style="border-bottom:2px solid #3E8893; "  >
               <div class="row py-0 my-0">
               <div class="col-4 d-flex my-0 py-0" style="align-items:center; justify-content:center;">
              <div>
                  <img src="imgs/coins.png" height="30"  > 
                  <span class="friendCount px-1" v-if="this.$root.profileDetails != null">{{this.$root.profileDetails.coin}}</span>

               <v-skeleton-loader v-else class="mt-2" type="text"></v-skeleton-loader>

              </div>
         </div>
         <div class="col-4 d-flex my-0 py-0" style="align-items:center; justify-content:center;">
            <div>
                  <v-img v-if="this.$root.profileDetails != null"
                   :style="this.$root.profileDetails.background_color != null ?  'background-color:'   + this.$root.profileDetails.background_color + ';' : 'background-color:#ffffff;'" 
                   :src="this.$root.profileDetails.image_name != null ? 'imgs/profile/' + this.$root.profileDetails.image_name + '.' + this.$root.profileDetails.image_extension : 'imgs/usernew.png'" height="90" width="90" class="avatarImg" style="border:3px solid #3E8893;border-radius:50%;"></v-img>

                    <v-skeleton-loader
           class="mx-auto mt-2"
           height="90"
           width="90"
           v-else
         type="image"
          ></v-skeleton-loader>
              </div>
         </div>
         <div class="col-4 d-flex my-0 py-0" style="align-items:center; justify-content:center;">
            <div>
              <v-btn @click="showNotification" icon><v-icon color="#3E8893">mdi-bell-outline</v-icon></v-btn>
                  
              </div>
         </div>

          <div class="col-4 d-flex my-0 py-0" style="align-items:center; justify-content:center;" @click="showConnections">
                 <div  class="text-center">
                   <span class="friends d-block">Connections</span>
                    <span class="friendCount d-block" v-if="this.$root.profileDetails != null">{{this.$root.profileDetails.connections}}</span>
                    <v-skeleton-loader v-else class="mt-2" type="text"></v-skeleton-loader>
                 </div>
         </div>
         <div class="col-4 d-flex my-0 py-1 px-0" style="align-items:center; justify-content:center;">
             <div class="text-center">
                 <span class="TitleName d-block " v-if="this.$root.profileDetails != null">{{this.$root.profileDetails.name}}</span>
                  <v-skeleton-loader v-else class="mt-2 mx-auto" width="80" type="text"></v-skeleton-loader>
                    <span class="userName d-block " v-if="this.$root.profileDetails != null">@{{this.$root.profileDetails.username}}</span>
                    <v-skeleton-loader v-else class="mt-1 mx-auto" width="60" type="text"></v-skeleton-loader>
              </div>

         </div>
         <div class="col-4 d-flex my-0 py-0" style="align-items:center; justify-content:center;" v-if="this.$root.profileDetails != null">
           
              <v-btn x-small v-if="this.$root.checkauthroot == 'auth' && this.$root.username == this.$root.profileDetails.username " rounded color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;" @click="editProfile">edit profile</v-btn>
              
     <v-btn x-small :loading="loading"  v-if="!this.$root.profileDetails.connected && this.$root.username != this.$root.profileDetails.username" rounded color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;" @click="connect">Connect</v-btn>

      <v-btn x-small   v-if="this.$root.profileDetails.connected && this.$root.username != this.$root.profileDetails.username" rounded color="#3E8893" style="font-size:10px; color:white;text-transform:capitalize;" >Connected</v-btn>     
             
             

             
         </div>

          <v-skeleton-loader v-else class="mt-1 mx-auto"  type="button"></v-skeleton-loader>
        
               </div>
          
      </div>
      <div class="py-0 px-2  py-1 my-0" style="position:absolute;z-index:20;background:#a5d2d9;border-bottom:2px solid #4495a2; left:0;   left:0; width:100%;  ">
           <div class="col-12 my-0 px-0 py-0">
              <div class="row py-0 my-0">
              
        <router-link  :to="'/profile/activities/' + this.$route.params.username" class="col-3 py-0 my-0 text-center">
            <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
         
      small
      label
     
     :style="$router.currentRoute.path.indexOf('activities') >= 0 ? 'color:#ffffff;background:#3E8893; font-size:11px;' : 'color:#204346;background:#ffffff; font-size:11px;' "
      >
      Activities
      </v-chip>  
        </router-link>
         

 <router-link :to="'/profile/projects/' + this.$route.params.username" class="col-3 py-0 my-0 text-center">
     <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
        
      small
      label
      :style="$router.currentRoute.path.indexOf('projects') >= 0  ? 'color:#ffffff;background:#3E8893; font-size:11px;' : 'color:#204346;background:#ffffff; font-size:11px;' "
      >
      Projects
      </v-chip>  
 </router-link>
      

      <router-link  :to="'/profile/teams/' + this.$route.params.username" class="col-3 py-0 my-0 text-center">
        <v-chip
      class="ma-1 ml-0 px-2  d-inline-block"
      
      small
      label
     :style="$router.currentRoute.path.indexOf('teams') >= 0 ? 'color:#ffffff;background:#3E8893;font-size:11px;' : 'color:#204346;background:#ffffff;font-size:11px;' "
      >
      Teams
      </v-chip>
 </router-link>
     

    
<router-link  :to="'/profile/about/' + this.$route.params.username" class="col-3 py-0 my-0 text-center">
       <v-chip
      class="ma-1 ml-0 px-2 d-inline-block"
    
      small
      label
      :style="$router.currentRoute.path.indexOf('about') >= 0  ? 'color:#ffffff;background:#3E8893;font-size:11px;' : 'color:#204346;background:#ffffff;font-size:11px;' "
      >
      About
      </v-chip>  
 </router-link>
      
              </div>
           </div>

     </div>
    </div>
</template>
<script>
export default {
     data () {
      return {
       loading:false,
      }
    },
    methods:{
         editProfile:function(){
               this.$router.push({ path: '/edit' });
         },
         showConnections:function(){
         if(this.$root.checkauthroot == 'auth' && this.$root.username == this.$root.profileDetails.username){
            this.$router.push({ path: '/profile/connections/' + this.$route.params.username  });
         }else{
              return;
         }
         },
         showNotification:function(){
          this.$router.push({ path: '/notifications'});
         },
         connect:function(){
              this.$root.checkIfUserIsLoggedIn('profile');
              if(this.$root.checkauthroot == 'auth'){
                 this.loading = true;
                axios.get('/connect-user-'+ this.$route.params.username)
      .then(response => {
      
      if (response.status == 200) {
          
          this.loading = false;
          this.$root.profileDetails.connected = true;
          
     }
       
     
     })
     .catch(error => {
    
     }) 
              }
            
         }
    }
}
</script>
<style>
.TitleName{
     font-size: 11px;
     color:rgb(38, 82, 89);
  }

  .userName{
    font-size: 11px;
     color:#4495a2;
  }
  .friends{
    font-size: 12px;
     color:#737373;
  }

  .friendCount{
    font-size:13px;
    color: rgb(38, 82, 89);
  }
</style>