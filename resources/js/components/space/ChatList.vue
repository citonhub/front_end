<template>

 
 <v-app class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


   
     
      <div style="overflow-y:hidden; overflow-x:hidden;position:absolute;left:0; width:100%; height:100%;">
        

      <div class="col-12 py-0 my-0" >


         <div class="row my-0 py-0 px-2 "  >

               
                <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('project')"  style="cursor:pointer;">
                 
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

              

              
              <div class="col-12 py-1 my-0 mx-0 project" v-if="this.$root.showProject" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;" >
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
             

            
             <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('channel')" style="cursor:pointer;" >
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          <v-badge
          color="#36848C"
            v-if="this.$root.channelUnread > 0 && this.$root.checkauthroot == 'auth'"
          :content="this.$root.channelUnread"
        >
      
      <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Channels</span>
            
        </v-badge>

        <span   v-if="this.$root.channelUnread <= 0 && this.$root.checkauthroot == 'auth'" style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Channels</span>

         <v-badge
          color="#36848C"

            v-if="this.$root.checkauthroot == 'noauth'"
          content="1"
        >
      
      <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Channels</span>
            
        </v-badge>
                         
                        
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click.stop="createChannel('Channel')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>
             

              
              <div class="col-12 py-1 my-0 mx-0 channelSpace" v-if="this.$root.showChannel" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;" >
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
             



                <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('team')" style="cursor:pointer;">
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          <v-badge
          color="#36848C"
            v-if="this.$root.teamUnread > 0"
          :content="this.$root.teamUnread"
        >
      
      <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Teams</span>
            
        </v-badge>

         <span  v-else style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Teams</span>
                         
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click.stop="createChannel('Team')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>
            
              <div class="col-12 py-1 my-0 mx-0 teamSpace"  v-if="this.$root.showTeams" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;"  >
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
              

                <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('direct')" style="cursor:pointer;">
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          <v-badge
          color="#36848C"
            v-if="this.$root.directUnread > 0"
          :content="this.$root.directUnread"
        >
      
       <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Direct Messages</span>
            
        </v-badge>

         <span  v-else style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">Direct Messages</span>
                        
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893"><v-icon></v-icon></v-btn>
                    </div>
                 </div>
                </div>
            
              <div class="col-12 py-1 my-0 mx-0 directSpace"   v-if="this.$root.showDirect" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;" >
                  <div  v-if="channelDirect != null">
                    <div class="row my-0 my-0 px-0"  v-if="channelDirect.length != 0">

                    <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in channelDirect"
                      :key="index">
                <div class="row py-0 my-0 px-0" v-if="space.userInfo != null">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.userInfo.background_color" :src="space.userInfo.image_name == null ? 'imgs/usernew.png' : '/imgs/profile/'+ space.userInfo.image_name +'.' + space.userInfo.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7" style="align-items:center;">
                         <span class="titleText">{{space.userInfo.username}}</span>
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
       channelSuggestions:null,
       channelDirect: null,
       showProject:true,
       fetchSpaceUpdate: true,
      }
    },
    mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = true;
       this.$root.channel = null;

      this.closeConnections();
        this.$root.checkIfUserIsLoggedIn('space');
        
       
       this.$root.codeEditorArray = [];
       this.$root.returnedMessages = [];
       this.$root.messageStoreTop = [];
       this.$root.messageStore = [];
       this.$root.sharePage = false;
       this.$root.showUserInfo = false;
       this.$root.selectedSpaceMembers = [];


     
       this.$root.Messages = null;
       this.$root.codeEditorArray = [];
       this.$root.showRootReply = false;
       
         if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
             Echo.leave('panel.' + this.$root.projectData.project_slug);
             this.$root.projectData = [];

          }

       Echo.leave('space.' + this.$root.selectedSpace.space_id);

     

       
        
       this.fetchChatList();
        this.$root.chatisOpen = false;
         this.$root.codeBoxOpened = false;
       this.$root.SpaceUsers = [];
         this.$root.selectedSpace = [];
       this.trackUser();
      this.$root.checkUnread(true);
       this.updateSpaceMessages();
     
       
    },
    methods:{
        updateSpaceMessages: function(){

           let interval = null;

           interval = setInterval(()=>{

             this.$root.checkUnread(false);
          
               
               if(this.$root.makeRecallSpace){

                  this.$root.makeRecallSpace = false;

     axios.get('/check-for-new-space-messages')
      .then(response => {
      
      if (response.status == 200) {

         let returnData = response.data;

         returnData.forEach(space => {

          

             if( this.$root.selectedSpace.space_id != space.space_id){


                  let storedMsg = this.$root.getLocalStore(space.space_id  + this.$root.username);
            
             storedMsg.then((result)=>{

              
                   
               if(result != null){
                
                let parsedResult = JSON.parse(result);

                let MessagesFull = parsedResult;

                let newMessages = space.new_messages;
                     
                    
                  

                 newMessages.forEach((messages)=>{

                   MessagesFull[0].push(messages);

                     this.$root.LocalStore(space.space_id  + this.$root.username,MessagesFull);

                    let unreadStoredMsg = this.$root.getLocalStore('unread' + space.space_id + this.$root.username);

            unreadStoredMsg.then((result)=>{

              let finalResultUnread = JSON.parse(result);

               finalResultUnread.push(messages)

              
               
              this.$root.LocalStore('unread' + space.space_id + this.$root.username,finalResultUnread);
               
                 
               

               });

                 });

                  
               }else{


       
                
               this.$root.LocalStore('unread' + space.space_id + this.$root.username,returnData);


                  let parsedResult = JSON.parse(result);

                let MessagesFull = parsedResult;

                let newMessages = space.new_messages;
                     
                    
                    


                 newMessages.forEach((messages)=>{

                  

                   

                    let unreadStoredMsg = this.$root.getLocalStore('unread' + space.space_id + this.$root.username);

            unreadStoredMsg.then((result)=>{

               if(result != null){

                  
              let finalResultUnread = JSON.parse(result);

               finalResultUnread.push(messages)

              
               
              this.$root.LocalStore('unread' + space.space_id + this.$root.username,finalResultUnread);
               

               }

                 
               

               });

                 });


               }
             });

             }else{


                let storedMsg = this.$root.getLocalStore(space.space_id  + this.$root.username);
            
             storedMsg.then((result)=>{

              
                   
               if(result != null){
                
                let parsedResult = JSON.parse(result);

                let MessagesFull = parsedResult;

                let newMessages = space.new_messages;
                     
                    
                  

                 newMessages.forEach((messages)=>{

                   MessagesFull[0].push(messages);

                     this.$root.LocalStore(space.space_id  + this.$root.username,MessagesFull);

                     this.$root.Messages.push(messages);

                      this.$root.sortChatList();

                  this.$root.scrollToBottom(); 

                  this.$root.updateSpaceTracker(space.space_id);

                  

                 });

                  
               }
             });
               

             }
            
        
            this.$root.updateSpaceTracker(space.space_id);
          
           
         });

     if(this.fetchSpaceUpdate){
      this.updateSpace();
          }
           
        this.$root.makeRecallSpace = true;

            
 
       

     }
       
     
     })
     .catch(error => {
       
        this.$root.makeRecallSpace = true;
     })

               }
         
           },3000);

        },
       
       closeConnections:function(){
          if(this.$root.audioconnection != undefined){

          
           
        this.$root.audioconnection.closeSocket();
         
            
          }

          if(this.$root.connection != undefined){
          this.$root.connection.closeSocket();
          }
       

        this.$root.connection = undefined;
        this.$root.audioconnection = undefined;

        this.$root.screenSharingOn = false;
        this.$root.liveIsOn = false;
        this.$root.showVideoScreen = false;
        this.$root.liveInitiated = false;
        this.$root.remoteLiveHappening = false;

         this.$root.remoteLiveHappening = false;
        this.$root.remoteCode = false;
         this.$root.remoteScreen = false;
          this.$root.remoteAudio= false;
            this.$root.allAudioParticipant = [];
      },
      showTab: function(type){
        this.$root.checkIfUserIsLoggedIn('space');
        
         if(type == 'project'){
           
              this.$root.showProject ? this.$root.showProject = false : this.$root.showProject = true;
              this.$root.showDirect = false;
              this.$root.showTeams = false;
              this.$root.showChannel = false;
              this.$root.showSuggetions = false;

         }
         if(type == 'direct'){
              this.$root.showDirect ? this.$root.showDirect = false : this.$root.showDirect = true;

              this.$root.showProject = false;
              this.$root.showTeams = false;
              this.$root.showChannel = false;
              this.$root.showSuggetions = false;
         }
         if(type == 'team'){
              this.$root.showTeams ? this.$root.showTeams = false : this.$root.showTeams = true;

               this.$root.showProject = false;
              this.$root.showDirect = false;
              this.$root.showChannel = false;
              this.$root.showSuggetions = false;
         }
         if(type == 'channel'){

              this.$root.showChannel ? this.$root.showChannel = false : this.$root.showChannel = true

               this.$root.showProject = false;
              this.$root.showDirect = false;
              this.$root.showTeams = false;
              this.$root.showSuggetions = false;
         }
         if(type == 'suggestions'){
             this.$root.showSuggetions ? this.$root.showSuggetions = false : this.$root.showSuggetions = true

               this.$root.showProject = false;
              this.$root.showDirect = false;
              this.$root.showTeams = false;
              this.$root.showChannel = false;
         }
      },
         activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'chat_list';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              
               
          }else{
             
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

    updateSpace: function(){

  axios.get('/fetch-user-spaces')
      .then(response => {
      
      if (response.status == 200) {

          

        this.$root.LocalStore('ChatList' + this.$root.username,response.data);

         this.fetchSpaceUpdate = false;
        
        
         
         
       

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
         this.$root.fromChatList = true;
           this.$router.push({ path: '/' + project.project_slug +'/panel' });
       },
       createChannel:function(type){
           this.$router.push({ path: '/space/' + type + '/create' });
       },
       createProject:function(){
           this.$router.push({ path: '/space/create-project' });
       },
       fetchChatList: function(){

          if(this.$root.checkauthroot == 'auth'){
             let storedChat = this.$root.getLocalStore('ChatList'+ this.$root.username);

            storedChat.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);

                   this.$root.ChatList = finalResult;
                  
                      this.$root.sortChatList();

             this.personalSpace = this.$root.ChatList[0];
           this.teamSpace = this.$root.ChatList[1];
          this.channelSpace = this.$root.ChatList[2];
        this.channelProject = this.$root.ChatList[3].data;
        this.channelDirect = this.$root.ChatList[4];
         this.channelSuggestions = this.$root.ChatList[5];

         this.$root.checkUnread();
          
        this.$root.SpaceWithoutChannel = this.$root.ChatList;

        

                 }else{
            
             this.teamSpace = null;
        this.channelSpace = null;
           
             axios.get('/fetch-user-spaces')
      .then(response => {
      
      if (response.status == 200) {

        this.$root.ChatList = response.data;

           this.$root.LocalStore('ChatList' + this.$root.username,response.data);

         this.$root.sortChatList();
        
         this.personalSpace = this.$root.ChatList[0];
        this.teamSpace = this.$root.ChatList[1];
        this.channelSpace = this.$root.ChatList[2];
        this.channelProject = this.$root.ChatList[3].data;
        this.channelDirect = this.$root.ChatList[4];
         this.channelSuggestions = this.$root.ChatList[5];

        

         this.$root.checkUnread();
          
        this.$root.SpaceWithoutChannel = response.data;
         
         
       

     }
       
     
     })
     .catch(error => {
       
      
     }) 

                 }
            })
        
         
          }

        
       },
     
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


  .teamSpace::-webkit-scrollbar, .directSpace::-webkit-scrollbar, .channelSpace::-webkit-scrollbar, .project::-webkit-scrollbar {
  width: 5px;
}
 
.teamSpace::-webkit-scrollbar-track,.directSpace::-webkit-scrollbar-track,.channelSpace::-webkit-scrollbar-track,.project::-webkit-scrollbar-track {
 box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.8);
  border:1px solid transparent;
  border-radius:6px;
}
 
.teamSpace::-webkit-scrollbar-thumb, .directSpace::-webkit-scrollbar-thumb, .channelSpace::-webkit-scrollbar-thumb, .project::-webkit-scrollbar-thumb {
   background-color: #6fb8c3;
  outline: 1px solid #6fb8c3;
  border:1px solid transparent;
   border-radius:6px;
}


</style>