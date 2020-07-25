<template>
       <div style="position:absolute; height:100%;  overflow-y:auto;left:0;top:0%;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0"> 

         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-1 py-0 my-0 text-left px-1" >
           <v-btn icon color="#3E8893" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
         </div>
         
         <router-link :to="'/profile/connections/' + this.$route.params.username"  class="col-5 py-0 my-0 d-flex" style="border-bottom:2px solid #3E8893; align-items:center;justify-content:center;">
          <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Connections</span>
         </router-link>
         <router-link :to="'/profile/connected/' + this.$route.params.username" class="col-5 py-0 my-0 d-flex" style="border-bottom:2px solid #c9e4e8; align-items:center;justify-content:center;">
          <span  style="font-size:12px; color:#3E8893; font-weight:bolder;font-family:HeaderText;">Connected</span>
         </router-link>
         <div class="col-1 py-0 my-0 text-right px-1"  >
          
         </div>
         </div>
         </div>

         <div class="col-12 py-0 my-0"  style="width:100%; height:90%; background:white; overflow-y:auto;" >
         <div class="row my-0 py-0">
         
           
           <div class="col-12 py-1 my-0" v-for="(user,index) in connections" :key="index">
               <v-card class="py-1 px-2" flat tile style="border-bottom:1px solid #c5c5c5;" @click="showProfile(user)">
                    <div class="row py-0 my-0">
                          <div class="col-2 d-flex" style="align-items:center; justify-content:center;">
                                <div :style="imageStyle(35,user)"  
                               class="d-inline-block" >

                               </div>
                          </div>
                          <div class="col-6 d-flex" style="align-items:center;">
                               <div>
                                   <span style="font-size:13px;font-family:HeaderText;" class="d-block "><b>{{ user.name }}</b></span>
                         <span style="font-size:11px;font-family:HeaderText;color:gray;" class="d-block "><b>@{{ user.username }}</b></span>
                               </div>
                        
                         
                          </div>
                          <div class="col-4 d-flex" style="align-items:center; justify-content:center;">
                <v-btn x-small v-if="user.user_connected" 
                   rounded color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;">Connected</v-btn> 

                <v-btn x-small v-else :loading="loading"
                   rounded color="#3E8893" style="font-size:10px;color:white;text-transform:capitalize;" @click.stop="connectToUser(user)">Connect</v-btn> 
                          </div>
                
                    </div>
               </v-card>
           </div>
            

           
        
         </div>
         </div>


       </div>
</template>
<script>
export default {
     data(){
        return{
        
          connections:[],
          loading:false,
        }
    },
     components: {
   
  },
    mounted(){
      this.fetchConnection();
      this.$root.checkIfUserIsLoggedIn('profile');
    },
    methods:{
       goBack() {
        this.$router.push({ path: '/profile/activities/' + this.$route.params.username });
        
        },
        connectToUser: function(user){
              if(this.$root.checkauthroot == 'auth'){
                 this.loading = true;
                axios.get('/connect-user-'+ user.username)
      .then(response => {
      
      if (response.status == 200) {
          
          this.loading = false;
          this.connections.map((connection)=>{

              if(connection.tempId == user.tempId){
                 connection.user_connected = true;
              }
            
          });
          
     }
       
     
     })
     .catch(error => {
    
     }) 
              }
        },
        showProfile:function(user){
            
            this.$root.pageloader = true;
          window.location = '/view-profile#/profile/activities/'+ user.username;
           
        },
       
       fetchConnection: function(){
          
           axios.get('/fetch-connections' )
      .then(response => {
      
      if (response.status == 200) {
        
       this.connections = response.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
     imageStyle:function(dimension,post){
      

      if(post.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = post.image_name + '.' + post.image_extension;
          styleString += 'background-color:'+ post.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
      }

      

  },
  
  },
}
</script>
<style>
.documentIcon{
    background: #dbedf0;
    border:1px solid #dbedf0;
    border-radius:50%;
}
.documentTitle{
  font-size: 12px;
  color: #3E8893;
}

.documentSize{
  font-size: 10px;
  color: #a6a6a6;
}
</style>