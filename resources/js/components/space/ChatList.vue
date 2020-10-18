<template>

 
 <v-app class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="
 border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


   
     
      <div style="overflow-y:hidden; overflow-x:hidden;position:absolute;left:0; width:100%; height:100%;">
        

      <div class="col-12 py-0 my-0" >


         <div class="row my-0 py-0 px-2 "  >

               
                <div class="col-12 py-0 px-0 my-1 mb-2" @click="showTab('project')"  style="cursor:pointer;">
                 
                 <div class="row py-0 my-0 px-2">
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                          
                    </div>
                       <div class="py-1 my-0 d-flex col-8" style="align-items:center;justify-content:center;background:#c9e4e8;">
                         
      
      <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.projects') }}</span>
            
       
                         
                    </div>
                    <div class="py-1 my-0 text-right col-2" style="background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click="createProject"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>

              

              
              <div class="col-12 py-1 my-0 mx-0 project" v-if="this.$root.showProject" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;" >
                <div  v-if="channelProject != null">
                    <div class="row my-0 my-0 px-0"  v-if="channelProject.length != 0">

                    <v-card tile flat class="col-12  py-1 px-0 my-1" @click="showProjectLink(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in channelProject"
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
                         <span class="titleText">{{shortenContent(space.title,24)}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          
                    </div>
                </div>
                </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">{{ $t('trends.no_projects') }}</span>
              
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
            v-if="generateTotalUnread(this.$root.ChatList[2]) > 0 && this.$root.checkauthroot == 'auth'"
          :content="generateTotalUnread(this.$root.ChatList[2])"
        >
      
      <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.channels') }}</span>
            
        </v-badge>

        <span   v-if="generateTotalUnread(this.$root.ChatList[2]) <= 0 && this.$root.checkauthroot == 'auth'" style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.channels') }}</span>

         <v-badge
          color="#36848C"

            v-if="this.$root.checkauthroot == 'noauth'"
          content="1"
        >
      
      <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.channels') }}</span>
            
        </v-badge>
                         
                        
                    </div>
                    <div class="py-1 my-0 text-right  col-2" style="background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click.stop="createChannel('Channel')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>
             

              
              <div class="col-12 py-1 my-0 mx-0 channelSpace" v-if="this.$root.showChannel" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;" >
                <div  v-if="channelSpace != null">
                    <div class="row my-0 my-0 px-0"  v-if="channelSpace.length != 0">

                    <v-card tile flat class="col-12  py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in this.$root.ChatList[2]"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7 px-1" style="align-items:center;">
                         <span class="titleText">{{ shortenContent(space.name,19)}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
             </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">{{ $t('trend.no_channel') }}</span>
              
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
            v-if="generateTotalUnread(this.$root.ChatList[1]) > 0"
          :content="generateTotalUnread(this.$root.ChatList[1])"
        >
      
      <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.teams') }}</span>
            
        </v-badge>

         <span  v-else style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.teams') }}</span>
                         
                    </div>
                    <div class="py-1 my-0 text-right  col-2" style="background:#c9e4e8;">
                           <v-btn icon color="#3E8893" @click.stop="createChannel('Team')"><v-icon>mdi-plus-circle-outline mdi-18px</v-icon></v-btn>
                    </div>
                 </div>

             </div>
            
              <div class="col-12 py-1 my-0 mx-0 teamSpace"  v-if="this.$root.showTeams" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;"  >
                 <div  v-if="teamSpace != null">
                 <div class="row my-0 my-0 px-0"  v-if="teamSpace.length != 0">
                    <v-card tile flat class="col-12  py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in this.$root.ChatList[1]"
                      :key="index">
                <div class="row py-0 my-0 px-0">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.background_color" :src="space.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ space.image_name +'.' + space.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7 px-1" style="align-items:center;">
                         <span class="titleText">{{ shortenContent(space.name,24)}}</span>
                    </div>
                    <div     class="py-0 my-0 d-flex col-2" style="align-items:center;">
                         <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
             </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
              <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">{{ $t('space.no_team') }}</span>
              
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
            v-if="generateTotalUnread(this.$root.ChatList[4]) > 0"
          :content="generateTotalUnread(this.$root.ChatList[4])"
        >
      
       <span  style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.direct_messages') }}</span>
            
        </v-badge>

         <span  v-else style="font-size:13px; color:#1e4148; font-weight:bolder;font-family:HeaderText;">{{ $t('space.direct_messages') }}</span>
                        
                    </div>
                    <div class="py-1 my-0 d-flex col-2" style="align-items:center;justify-content:center;background:#c9e4e8;">
                           <v-btn icon color="#3E8893"><v-icon></v-icon></v-btn>
                    </div>
                 </div>
                </div>
            
              <div class="col-12 py-1 my-0 mx-0 directSpace"   v-if="this.$root.showDirect" style="max-height:230px; height:auto; overflow-x:hidden; overflow-y:auto;" >
                  <div  v-if="channelDirect != null">
                    <div class="row my-0 my-0 px-0"  v-if="channelDirect.length != 0">

                    <v-card tile flat class="col-12 py-1 px-0 my-0" @click="showSpace(space)" color="#ffffff" style="border-bottom:1px solid #5fb0b9;" v-for="(space,index) in  this.$root.ChatList[4]"
                      :key="index">
                <div class="row py-0 my-0 px-0" v-if="space.userInfo != null">
                    <div class="py-0 my-0 d-flex col-3" style="align-items:center;justify-content:center; ">
                        <div class="py-1">
                          <v-img  :background-color="space.userInfo.background_color" :src="space.userInfo.image_name == null ? 'imgs/usernew.png' : '/imgs/profile/'+ space.userInfo.image_name +'.' + space.userInfo.image_extension " height="38" width="38" class="avatarImg"></v-img>
                        </div>    
                    </div>
                     <div class="py-0 my-0 d-flex col-7 px-1" style="align-items:center;">
                         <span class="titleText">{{  shortenContent(space.userInfo.username,24)}}</span>
                    </div>
                    <div class="py-0 my-0 d-flex col-2" style="align-items:center;">
                          <span class="messagesBadges" v-if="space.unread != 0"><span style="padding:2px;">{{ space.unread }}</span></span>
                    </div>
                </div>
                </v-card>
                 </div>

                 <div v-else class="col-12 my-2 py-0 px-0 mx-1 text-center" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block"> {{ $t('space.no_direct_messages') }}</span>
              
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
     
      <span style="position:absolute; top:71%; left:3%; z-index:12345665786; background:rgba(38, 82, 89,0.7); border:1px solid transparent; border-radius:7px;" class=" px-1 py-1 d-md-none d-inline-block text-center">
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

         this.$root.showShare = false;

      this.closeConnections();
        this.$root.checkIfUserIsLoggedIn('space');
        
       
       this.$root.codeEditorArray = [];
       this.$root.returnedMessages = [];
       this.$root.messageStoreTop = [];
       this.$root.messageStore = [];
       this.$root.sharePage = false;
       this.$root.showUserInfo = false;
       this.$root.selectedSpaceMembers = [];

       this.$root.typing = false;
      
      this.$root.forcePanelReload= false;

     
       this.$root.Messages = null;
       this.$root.codeEditorArray = [];
       this.$root.showRootReply = false;
       
         if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
              window.Echo.leave('panel.' + this.$root.projectData.project_slug);
             this.$root.projectData = [];

          }

        if(this.$root.selectedSpace.length != 0){

           window.Echo.leave('space.' + this.$root.selectedSpace.space_id);

        }

       

       
        
       this.fetchChatList();
        this.$root.chatisOpen = false;
         this.$root.codeBoxOpened = false;
       this.$root.SpaceUsers = [];
         this.$root.selectedSpace = [];
     
       this.$root.manualFetchUnread();
      
      this.$root.updateSpaceMessages();
      this.$root.checkUnread(true);
    

       
        

     
       
    },
    methods:{
       
        generateTotalUnread: function(array){

           let result = 0;

            if(array != undefined){

              array.forEach((chat)=>{
             
             result += chat.unread
             
          })

          return result;

            }else{
               return 0;
            }

          

        },
       closeConnections:function(){
          let _this = this;

         if(this.$root.audioconnection != undefined){

         
          
     this.$root.audioconnection.getAllParticipants().forEach(function(pid) {
        _this.$root.audioconnection.disconnectWith(pid);
    });

    // stop all local cameras
    this.$root.audioconnection.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });

    // close socket.io connection
   this.$root.audioconnection.closeSocket();


           
         }

          if(this.$root.connection != undefined){


             // disconnect with all users
    this.$root.connection.getAllParticipants().forEach(function(pid) {
        _this.$root.connection.disconnectWith(pid);
    });

    // stop all local cameras
    this.$root.connection.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });


          this.$root.connection.closeSocket();
          }
       

        this.$root.connection = undefined;
        this.$root.audioconnection = undefined;

        this.$root.screenSharingOn = false;
        this.$root.liveIsOn = false;
        this.$root.showVideoScreen = false;
        this.$root.liveInitiated = false;

         

        this.$root.presentRoomId = null;
        this.$root.remoteLiveHappening = false;

         this.$root.remoteLiveHappening = false;
        this.$root.remoteCode = false;
         this.$root.remoteScreen = false;
          this.$root.remoteAudio= false;
            this.$root.allAudioParticipant = [];
             this.$root.roomNotExist = false;
              this.$root.roomCheckingInitaited = false;

              this.$root.localAudioMuted = false;
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
       
     sortbyDate: function(arrayValue){

         arrayValue.sort(function(a, b){ 
      
        return new Date(b.created) - new Date(a.created); 
    }); 

     return arrayValue;
        
     },
    updateSpace: function(){

  axios.get('/fetch-user-spaces')
      .then(response => {
      
      if (response.status == 200) {

          
        
         this.$root.ChatList = response.data;

           this.$root.LocalStore('ChatListNew' + this.$root.username,response.data);
    
         this.$root.sortChatList();

          this.$root.ChatList[3].data =  this.$root.ChatList[3].data.concat(this.$root.ChatList[5]);
        
         this.personalSpace = this.$root.ChatList[0];
        this.teamSpace = this.$root.ChatList[1];
        this.channelSpace = this.$root.ChatList[2];
        this.channelProject = this.sortbyDate(this.$root.ChatList[3].data); 
        this.channelDirect = this.$root.ChatList[4];
        
         
         this.fetchSpaceUpdate = false;
       

     }
       
     
     })
     .catch(error => {
       
       
     })

    },
       showSpace:function(space){

             if(this.$root.TrackLastSubSpace.length != 0 && space.space_id == this.$root.TrackLastSubSpace[0]){
                 
                  this.$router.push({ path: '/space/'  +  this.$root.TrackLastSubSpace[1]  +  '/channel/content' + '/user' });

                     return;

             }else{

               

                this.$root.selectedSpace = space;

                this.$router.push({ path: '/space/'  +  space.space_id  +  '/channel/content' + '/user' });

             }
         

        
          
         
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

             if( this.$root.ChatList.length == 0 ){


                let storedChat = this.$root.getLocalStore('ChatListNew'+ this.$root.username);

            storedChat.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);

                   this.$root.ChatList = finalResult;

                    if(this.$root.ChatList[3] != undefined){

                       this.$root.sortChatList();

             this.personalSpace = this.$root.ChatList[0];
           this.teamSpace = this.$root.ChatList[1];
          this.channelSpace = this.$root.ChatList[2];

           if(this.$root.ChatList[3] != undefined){

              this.channelProject = this.sortbyDate(this.$root.ChatList[3].data); 

           }else{
               this.channelProject = [];
           }
       
        this.channelDirect = this.$root.ChatList[4];
         this.channelSuggestions = this.$root.ChatList[5];

         this.$root.checkUnread(true);
          
        this.$root.SpaceWithoutChannel = this.$root.ChatList;
         
          this.updateSpace();

                    }else{

              
                
             axios.get('/fetch-user-spaces')
      .then(response => {
      
      if (response.status == 200) {

        this.$root.ChatList = response.data;

           this.$root.LocalStore('ChatListNew' + this.$root.username,response.data);

         this.$root.sortChatList();

            this.$root.ChatList[3].data =  this.$root.ChatList[3].data.concat(this.$root.ChatList[5]);
        
         this.personalSpace = this.$root.ChatList[0];
        this.teamSpace = this.$root.ChatList[1];
        this.channelSpace = this.$root.ChatList[2];
        this.channelProject = this.sortbyDate(this.$root.ChatList[3].data); 
        this.channelDirect = this.$root.ChatList[4];
      

        

           this.$root.checkUnread(true);
          
        this.$root.SpaceWithoutChannel = response.data;
         
         
       

     }
       
     
     })
     .catch(error => {
       
      
     }) 
                    

                      

                    }
                  
                     

        

                 }else{
            
           
           
             axios.get('/fetch-user-spaces')
      .then(response => {
      
      if (response.status == 200) {

        this.$root.ChatList = response.data;

           this.$root.LocalStore('ChatListNew' + this.$root.username,response.data);

         this.$root.sortChatList();

            this.$root.ChatList[3].data =  this.$root.ChatList[3].data.concat(this.$root.ChatList[5]);
        
         this.personalSpace = this.$root.ChatList[0];
        this.teamSpace = this.$root.ChatList[1];
        this.channelSpace = this.$root.ChatList[2];
        this.channelProject = this.sortbyDate(this.$root.ChatList[3].data); 
        this.channelDirect = this.$root.ChatList[4];
         

        

          this.$root.checkUnread(true);
          
        this.$root.SpaceWithoutChannel = response.data;
         
         
       

     }
       
     
     })
     .catch(error => {
       
      
     }) 

                 }
            })

             }else{

              this.$root.sortChatList();
           this.$root.ChatList[3].data =  this.$root.ChatList[3].data.concat(this.$root.ChatList[5]);
                this.personalSpace = this.$root.ChatList[0];
           this.teamSpace = this.$root.ChatList[1];
          this.channelSpace = this.$root.ChatList[2];
        this.channelProject =  this.sortbyDate(this.$root.ChatList[3].data); 
        this.channelDirect = this.$root.ChatList[4];
        

           this.$root.checkUnread(true);

         

          
        this.$root.SpaceWithoutChannel = this.$root.ChatList;

         let storedChat = this.$root.getLocalStore('ChatListNew'+ this.$root.username);

         storedChat.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);

                   this.$root.ChatList = finalResult;

                    this.$root.sortChatList();

                    this.$root.checkUnread(true);
                

                 }
            })

            this.updateSpace();
        
             }
            
        
         
          }

        
       },
        shortenContent: function(content,limit){
             if(content != undefined){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
             
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