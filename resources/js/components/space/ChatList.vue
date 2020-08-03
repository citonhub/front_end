<template>

 
 <v-app class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


   
     
      <div style="overflow-y:auto; overflow-x:hidden;position:absolute;left:0; width:100%; height:100%;">
        

      <div class="col-12 py-0 my-0" >


         <div class="row my-0 py-0 px-2 "  >

              <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('project')" >
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                         <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Projects</span>
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click="createProject"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>

               <v-slide-y-transition>

              
              <div class="col-12 py-1 my-0 mx-0" v-if="this.$root.showProject">
                <div  v-if="channelProject != null">
                    <div class="row my-0 my-0 px-0"  v-if="channelProject.length != 0">

                    <v-card tile flat class="col-12 py-1 px-0 my-1" @click="showProjectLink(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in channelProject"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                           <span style="height:38px; width:38px; " class=" py-2 px-2">

                              <v-icon color="#35747e" class="">mdi-plus-network-outline</v-icon>
                           </span>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{space.title}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          
                    </div>
                </div>
             </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">No Project found</span>
              
            </div>
                </div>
                

                 <div v-else  class="row my-0 py-0 px-1 ">
            <div class="col-12 py-0 my-0">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

             <div class="col-12 py-0 my-0">
   
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
             </v-slide-y-transition>

            
             <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('channel')" >
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                         <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Channels</span>
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click="createChannel('Channel')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>
              <v-slide-y-transition>

              
              <div class="col-12 py-1 my-0 mx-0" v-if="this.$root.showChannel">
                <div  v-if="channelSpace != null">
                    <div class="row my-0 my-0 px-0"  v-if="channelSpace.length != 0">

                    <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in channelSpace"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{space.name}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
             </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">No Channel found</span>
              
            </div>
                </div>
                

                 <div v-else  class="row my-0 py-0 px-1 ">
            <div class="col-12 py-0 my-0">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

             <div class="col-12 py-0 my-0">
   
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
             </v-slide-y-transition>



                <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('team')" >
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                         <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Teams</span>
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click="createChannel('Team')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>
             <v-slide-y-transition>
              <div class="col-12 py-1 my-0 mx-0"  v-if="this.$root.showTeams">
                 <div  v-if="teamSpace != null">
                 <div class="row my-0 my-0 px-0"  v-if="teamSpace.length != 0">
                    <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in teamSpace"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{space.name}}</span>
                    </div>
                    <div     class="py-0 my-0 d-flex col-2" style="align-items:center;">
                         <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
             </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
              <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">No Team found</span>
              
            </div>
                 </div>
                       <div v-else  class="row my-0 py-0 px-1 ">
            <div class="col-12 py-0 my-0">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

             <div class="col-12 py-0 my-0">
   
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
              </v-slide-y-transition>

                <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('direct')" >
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                         <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Direct Messages</span>
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893"><v-icon></v-icon></v-btn>
                    </div>
                 </div>
                </div>
             <v-slide-y-transition>
              <div class="col-12 py-1 my-0 mx-0"   v-if="this.$root.showDirect">
                  <div  v-if="channelDirect != null">
                    <div class="row my-0 my-0 px-0"  v-if="channelDirect.length != 0">

                    <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in channelDirect"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.userInfo.background_color" :src="space.userInfo.image_name == null ? 'imgs/usernew.png' : '/imgs/profile/'+ space.userInfo.image_name +'.' + space.userInfo.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{space.userInfo.name}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
             </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">No Direct Messages</span>
              
            </div>
                </div>

                <div v-else  class="row my-0 py-0 px-1 ">
            <div class="col-12 py-0 my-0">
   
           <div class="row py-0 my-0 px-1">
            
          <div class="col-12 py-1 my-0">
           <v-skeleton-loader
          class=" "
           
          type="list-item-avatar"
          ></v-skeleton-loader>
          </div>

          

         </div>


            </div>

             <div class="col-12 py-0 my-0">
   
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
              </v-slide-y-transition>
              
               
              
             <div class="my-5 py-5 col-12" style="padding-top:120px !important;">

             </div>
            
         </div>

        
         
      </div>
         </div>

     
         </div>
     
      <span style="position:absolute; top:76%; left:3%; z-index:12345665786; background:rgba(38, 82, 89,0.7); border:1px solid transparent; border-radius:7px;" class=" px-1 py-1 d-md-none d-inline-block text-center">
          <img src="imgs/coin.svg" height="22" >
          <span class="coin"  style="font-size:13px;">{{this.$root.authProfile.coin}}</span>

     </span>

<span style="position:absolute; top:84%; left:5%; z-index:12345665786; background:rgba(38, 82, 89,0.7); border:1px solid transparent; border-radius:7px;" class=" px-1 py-1 d-none d-md-inline-block text-center">
          <img src="imgs/coin.svg" height="22" >
          <span class="coin"  style="font-size:13px;">{{this.$root.authProfile.coin}}</span>

     </span>

 </v-app>
  

</template>
<script>
export default {
     data () {
      return {
       showmore:false,
       showTeams:true,
       showDirect:true,
       personalSpace:[],
       teamSpace:null,
       channelProject:null,
       channelSpace:null,
       showChannel:true,
       channelDirect: null,
       showProject:true,
      }
    },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.$root.channel = null;

       this.$root.checkIfUserIsLoggedIn('space');
       this.$root.returnedMessages = [];
       this.$root.messageStoreTop = [];
       this.$root.messageStore = [];
       this.$root.Messages = null;
       this.$root.codeEditorArray = [];
       
         if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
             Echo.leave('panel.' + this.$root.projectData.project_slug);
             this.$root.projectData = [];

          }

       Echo.leave('space.' + this.$root.selectedSpace.space_id);

        this.$root.selectedSpace.unread = 0;

       
        
       this.fetchChatList();
       this.trackUser();
    },
    methods:{
      showTab: function(type){
         if(type == 'project'){
              this.$root.showProject ? this.$root.showProject = false : this.$root.showProject = true
         }
         if(type == 'direct'){
              this.$root.showDirect ? this.$root.showDirect = false : this.$root.showDirect = true
         }
         if(type == 'team'){
              this.$root.showTeams ? this.$root.showTeams = false : this.$root.showTeams = true
         }
         if(type == 'channel'){
              this.$root.showChannel ? this.$root.showChannel = false : this.$root.showChannel = true
         }
      },
         activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'chat_list';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Hey '+ this.$root.username + '😃.Create new channels to interact with your friends on CitonHub or new teams to work on projects 👩‍💻 with your friends';
         this.$root.boardBtnLabel = 'Okay,Got It';

              }
               
          }
        
         
      },
        trackUser: function(){
      

         axios.get('/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

        this.activateBot();
  }
    
  
  })
  .catch(error => {
 
  }) 

      
   },
       showSpace:function(space){
          this.$root.selectedSpace = space;

        
          
         this.$router.push({ path: '/space/'  +  space.space_id  +  '/channel/content' + '/user' });
       },
       showProjectLink: function(project){
           this.$router.push({ path: '/' + project.project_slug +'/panel' });
       },
       createChannel:function(type){
           this.$router.push({ path: '/space/' + type + '/create' });
       },
       createProject:function(){
           this.$router.push({ path: '/space/create-project' });
       },
       fetchChatList: function(){
         if(this.$root.ChatList.length != 0 && !this.$root.forceListReload){

        this.personalSpace = this.$root.ChatList[0];
        this.teamSpace = this.$root.ChatList[1];
        this.channelSpace = this.$root.ChatList[2];
        this.channelProject = this.$root.ChatList[3].data;
        this.channelDirect = this.$root.ChatList[4];
          
        this.$root.SpaceWithoutChannel = this.$root.ChatList;
    
         }else{

            this.teamSpace = null;
        this.channelSpace = null;
           
             axios.get('/fetch-user-spaces')
      .then(response => {
      
      if (response.status == 200) {
        
         this.channelProject = response.data[3].data;
         this.personalSpace =  response.data[0];
        this.teamSpace =  response.data[1];
        this.channelSpace =  response.data[2];
        this.channelDirect = response.data[4];
          
        this.$root.SpaceWithoutChannel = response.data;
         this.$root.ChatList = response.data;
         
       

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
.titleText{
    font-size:13px; 
    font-family:HeaderText; 
    color:#173236;
}
.avatarImg{
  border-radius:50%;
  border: 3px solid #3E8893;
}
.messagesBadges{
    
    color: #ffffff;
    background: #3e868e;
    font-size: 11px;
    font-family: HeaderText;
    font-weight: bolder;
    border:2px solid #3e868e;
    border-radius:50%;
}
 .coin{
  font-size: 10px;
  font-weight: bolder;
  font-family:HeaderText;
  color: white;
}
</style>