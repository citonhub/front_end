<template>
     <v-app style="background:transparent; font-family:BodyText;">
        <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" style="background:#a5d2d9;">
          <trend-top></trend-top> 
      </div>
      <div class="col-12 my-1 px-1 text-center py-0">
           <v-text-field
              style="font-size:13px;"
              v-model="query"
               @keydown="queryChannel"
             :loading="loading"
             placeholder="Find connections" 
             dense
             color="#4495a2"
             ></v-text-field>
       </div>
      </div>

       

      
        
        <div class="col-12 py-0 my-0">
          
          <div class="row my-0 py-0 px-2" v-if="connections != null">

               <v-card tile flat class="col-12 py-2 px-2" style="border-bottom:1px solid #5fb0b9;" v-for="(user, index) in connections" :key="index">
               <div class="row py-0 my-0 px-0">
                
                    <div class="py-0 my-0 d-flex col-9" style="align-items:center;" >
                         <div :style="imageStyle(35,user)" @click="viewUser(user)"
                  class="d-inline-block mr-2" >

                  </div>
                        <div @click="viewUser(user)">
                       <span class=" d-block" style="font-size:13px; color:#26535a;">{{ shortenContent(user.name,30)}} </span>
                         <span class=" d-block" style="font-size:11px; color:#595959;"> @{{user.username}}</span>
                        </div>
                        
                    </div>

                    <div class="py-0 my-0 text-center col-3" >
                     <v-btn x-small color="#3E8893" v-if="!user.user_connected" @click="connectToUser(user)" rounded><span style="font-size:10px; color:white;text-transform:capitalize;">connect</span></v-btn>

                      <v-btn x-small color="#3E8893" v-else disabled rounded><span style="font-size:10px; color:white;text-transform:capitalize;">connected</span></v-btn>
                    </div>
                <div class="col-12 py-0 " v-if="user.about != null && user.about != '<p></p>'">
                    <span style="font-size:12px; color:#737373;" v-html="shortenContent(user.about,110)">
                      
                    </span>
                </div>

                   
                </div>
              </v-card>
           
            <div v-if="connections.length == 0" class="text-center col-12">
           <span style="color:gray; font-size:12px;">No Connection found</span>
                </div>  

             <div class="col-12 py-5 my-5">

             </div>

          </div>

           <div class="row my-0 py-0 px-1" v-else>

                <div class="col-12 py-0 px-1 my-0">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>
                <div class="col-12 py-0 px-1 my-0">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

             <div class="col-12 py-0 px-1 my-0">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

           </div>
           
        </div>
        
              
  


      
         </div>
        </div>
     </v-app>
</template>
<script>



export default {
    data(){
        return{
         connections:null,
          query:'',
         loading:false
         
        }
    },
     components: {
   
  },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchConnection();
       
       
    },
    methods:{
       queryChannel:function(){
     
       setTimeout(()=>{
         
         this.fetchConnection();
       },500);
    },
     
       goBack() {

          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
         shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
        connectToUser: function(user){

            this.connections.map((connection)=>{

              if(connection.tempId == user.tempId){
                 connection.user_connected = true;
              }
            
          });

              if(this.$root.checkauthroot == 'auth'){
                
                axios.get('/connect-user-'+ user.username)
      .then(response => {
      
      if (response.status == 200) {
          
         
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
         fetchConnection: function(){
             this.loading = true;
           axios.get('/fetch-trend-connections/'  + this.query )
      .then(response => {
      
      if (response.status == 200) {
        
       this.connections = response.data;
          this.loading = false;
     }
       
     
     })
     .catch(error => {
    
     }) 

        },
        viewUser: function(user){
        this.$root.pageloader = true;
        window.location = '/view-profile#/profile/activities/'+ user.username;
    },
         imageStyle:function(dimension,user){
      

      if(user.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = user.image_name + '.' + user.image_extension;
          styleString += 'background-color:'+ user.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
      }
       
         }
      
  },
}
</script>
<style>

</style>