<template>
    <div style="background:#F3FFFC; position:absolute; height:100%; width:100%; overflow-y:hidden;left:0; overflow-x:hidden; " >

       <div v-if="this.$root.Messages != null">
      
     

     <div id="messageContainer" 
      v-if="this.$root.Messages.length != 0"
      v-on:scroll="handlePushMessage()"
       class="col-12 py-2 px-2" 
     
        style="position:absolute; width:100%; height:100%; overflow-y:auto;  overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;">  

        <channel-messages :sources="this.$root.Messages"  :username="this.$root.username"></channel-messages>

        <div class="col-12 py-4" id="messagebottomDiv">
          </div>      
    </div> 


      <div v-show="this.$root.Messages.length == 0" class="col-12 my-2 py-0 px-0 mx-1 text-center"  style="position:absolute; width:100%; height:100%; overflow-y:auto; overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;" >
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block">No message found</span>
              
         </div>


       </div>
       

     <div class="col-12 py-0 my-0"  v-if="this.$root.Messages == null && this.errorLoadingMessage == false" style="position:absolute; width:100%; height:100%; overflow-y:auto; overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;">

         <div class="row py-0 my-0 px-1">
            
     <div class="col-8 py-1 my-0">
       <v-skeleton-loader
      class=" "
     
      type="sentences"
    ></v-skeleton-loader>
     </div>
         </div>


        <div class="row py-0 my-0 px-1">
            
     <div class="col-8 offset-4 py-1 my-0">
       <v-skeleton-loader
      class=" "
       
      type="sentences"
    ></v-skeleton-loader>
     </div>
         </div>

          <div class="row py-0 my-0 px-1">
            
     <div class="col-8 py-1 my-0">
       <v-skeleton-loader
      class=" "
       
      type="sentences"
    ></v-skeleton-loader>
     </div>
         </div>

       

         
      </div>



 <div  @click="closeUserInfoBoard"   v-if="this.$root.showUserInfo" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2 my-0 px-0 d-flex ">
    
       <div @click.stop="preventCloseBoard" style="position:absolute; height:auto; width:90%; top:10%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">
  

          <v-card  
      style="border-radius:10px;"
       height="auto"
      
       class="pt-2 px-1"
  >
   <div class="row py-0 my-0"  v-if="this.$root.userBasicInfo.length != 0" >

     <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">

         <div class="text-center">


                    <span class=" px-1 d-block" style="color: #2d626c; font-size:12px;">Connections</span>


                  <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.connections}}</span>

             

              </div>

             
     </div>

      <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">

        <div>
           <v-img  @click="viewFullImage(this.$root.userBasicInfo)"
                   :style="this.$root.userBasicInfo.background_color != null ?  'background-color:'   + this.$root.userBasicInfo.background_color + ';' : 'background-color:#ffffff;'" 
                   :src="this.$root.userBasicInfo.image_name != null ? 'imgs/profile/' + this.$root.userBasicInfo.image_name + '.' + this.$root.userBasicInfo.image_extension : 'imgs/usernew.png'" height="90" width="90" class="avatarImg" style="border:3px solid #3E8893;border-radius:50%;"></v-img>

                   

     </div>

    </div>


      <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">
              <div class="text-center">
                  <img src="imgs/coins.png" height="30"  class="d-block" > 
                  <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.coins}}</span>

              

              </div>

     </div>

      <div class="col-12 d-flex py-0 my-1" style="align-items:center; justify-content:center;">
              <div class="text-center">
                
                  <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.userData.name}}</span>

                   <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; ">@{{this.$root.userBasicInfo.userData.username}}</span>

              

              </div>
          </div>

      
       <div class="col-12 py-0 my-0" >
              <div class="row my-0 py-0">
                
                  <div class="col-4 text-center d-flex py-0 my-1" style="align-items:center; justify-content:center;">

                     <div>
               <v-chip
      small
      label
       class="d-block"
     style="color:#ffffff;background:#3E8893; font-size:11px;"
      >
      Channels
      </v-chip>  

       <span class=" px-1 d-block py-1" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.channels}}</span>
                     </div>
                      
                  

                  </div>
                  
                   <div class="col-4 text-center d-flex py-0 my-1" style="align-items:center; justify-content:center;">
               

               <div>
         <v-chip
      small
       class="d-block"
      label
     style="color:#ffffff;background:#3E8893; font-size:11px;"
      >
      Projects
      </v-chip>  

      <span class=" px-1 d-block py-1" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.projects}}</span>
               </div>
                      

                  </div>

                   <div class="col-4 text-center d-flex py-0 my-1" style="align-items:center; justify-content:center;">

                      <div>
                        
                          <v-chip
      small
      class="d-block"
      label
     style="color:#ffffff;background:#3E8893; font-size:11px;"
      >
      Teams
      </v-chip>  

      <span class=" px-1 d-block py-1" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.teams}}</span>
                      </div>

                     

                  </div>

              </div>

     </div>


      <div class="col-12  py-2 my-1 mb-0 pb-2"  style="background:#4497a2; border:1px solid #4497a2; border-radius:18px ;" >
              <div class="row py-0 my-0">
                
                  <div class="col-6 text-center py-0 px-0">
                    <v-btn  rounded color="#ffffff" small :loading="loadingMessage" @click.stop="messageSpace" ><span style="font-size:12px; font-family:HeaderText; color:#1e4348; text-transform:capitalize;">Message</span></v-btn>
                  </div>

                   <div class="col-6 text-center py-0 px-0">
                    <v-btn  rounded color="#ffffff" small @click.stop="viewProfile"><span style="font-size:12px; color:#1e4348; font-family:HeaderText;  text-transform:capitalize;">Profile</span></v-btn>
                  </div>
                 

              </div>
          </div>

    

      

   </div>




   <div class="row py-0 my-0" v-else >
       
        <v-skeleton-loader
           class="mx-auto my-2 col-12"
           height="90"
           width="100%"
          
         type="image"
          ></v-skeleton-loader>

          <div class="col-12 text-center">
              <span class=" px-1 d-block" style="color: #2d626c; font-size:12px;">{{ this.$root.infoLoaderText}}</span>
          </div>
        </div>


  

    

    
    
    

  </v-card>


       </div>
        

      </div>

     

      <div v-if="this.$root.liveIsOn" @click="closeLiveBoard" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; left:0%; top:%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-2 my-0 px-0 d-flex ">
    
       <div  @click.stop="preventCloseBoard" style="position:absolute; height:auto; width:90%; top:42%; left:5%; overflow-y:hidden; " class="mx-auto pb-2">
  

          <v-card  
    
  >
    <v-card
      color="#3E8893"
      
      class="px-1 py-2"
    >

    <div class="col-12 py-0 my-0">

      <div class="row py-0 my-0">

         

        <div style="color:white; font-size:13px; font-family:HeaderText;" class="col-8 py-0 my-1 px-1"> 
         
             <v-icon color="#ffffff"  @click="closeboard">mdi-close mdi-18px</v-icon>
     
      Active Members <span class="ml-1 py-1 px-1" 
        style="color:#ffffff; ">({{ this.$root.allAudioParticipant.length + 1 }})</span></div>

      <div class="col-4 py-0 my-0 text-right">
        <div v-if="this.$root.remoteLiveHappening && this.$root.connectingToSocket">

            <v-btn x-small color="#ffffff" @click="initaiteAudioConf" >
        <span style="color:#265259; font-size:10px;font-family:HeaderText; ">Join</span>
      </v-btn>
            
        </div>
        <div v-else>
           <v-btn x-small color="#ffffff" @click="closeConnections" v-if="!this.$root.connectingToSocket">
        <span style="color:#265259; font-size:10px;font-family:HeaderText; ">Leave</span>
      </v-btn>


      <span style="font-size:12px; color:white;" v-else>
        Connecting...
      </span>
        </div>
        
      </div>

      </div>

      

    </div>

      

     

     
    
     
    </v-card>
    <v-list  class="pb-3 scrollerStyle" style=" height:250px;width:100%; overflow-y:auto;">

      <v-list-item
       style="border-bottom:1px solid #c5c5c5;"
      >
        <v-list-item-avatar>
          <v-img :src="this.$root.userBasicInfo.image_name == null ? '/imgs/usernew.png' : '/imgs/profile/' + this.$root.userBasicInfo.image_name + '.' + this.$root.userBasicInfo.image_extension"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title  style="font-size:12px;">{{ this.$root.userBasicInfo.username }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon >
           <v-btn icon @click="muteAudio" v-if="!this.$root.localAudioMuted">

              <v-icon color="#3E8893">mdi-microphone</v-icon>

           </v-btn>
            <v-btn icon @click="unmuteAudio" v-else>

              <v-icon>mdi-microphone </v-icon>

           </v-btn>
         
        </v-list-item-icon>
      </v-list-item>

       <v-list-item v-for="(user,index) in this.$root.allAudioParticipant" :key="index"
       style="border-bottom:1px solid #c5c5c5;"
      >
        <v-list-item-avatar>
          <v-img :src="user[0].profile.image_name == null ? '/imgs/usernew.png' : '/imgs/profile/' + user[0].profile.image_name + '.' + user[0].profile.image_extension"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title  style="font-size:12px;">{{ user[0].profile.username }} </v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon >
         <v-btn icon @click="muteUserAudio(user[1])" v-if="!user[0].muted">

              <v-icon color="#3E8893">mdi-microphone</v-icon>

           </v-btn>
            <v-btn icon @click="unMuteUserAudio(user[1])" v-else>

              <v-icon>mdi-microphone </v-icon>

           </v-btn>
         
        </v-list-item-icon>
      </v-list-item>
     
       


      
    </v-list>
  </v-card>


       </div>
        

      </div>


        <div class="col-12 py-0 my-0 text-center"  v-if="this.$root.Messages == null && this.errorLoadingMessage == true" style="position:absolute; width:100%; height:100%; overflow-y:auto; overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;">

           <div style="color:gray; font-size:12px;" class="mb-2">Unable to load messages</div>

           <v-btn fab color="#3E8893" small @click="fetchMessages"> <v-icon color="#ffffff">mdi-reload</v-icon> </v-btn>
       
         
       </div>
      

         <div   class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0 fixed-bottom " style="z-index:66;" >
                <div class="px-2" v-if="this.$root.showRootReply">

                  <div class=" py-2 px-2  text-left mb-1"  style="background:#3E8893; border:1px solid transparent; border-radius:8px;" >

                     <div class="col-12 py-1 px-1  text-right" v-if="this.$root.replyMessage.type == null">
                  <span class="msgTextReply text-left d-block" style="color:white;" v-html="shortenContent(this.$root.replyMessage.content ,50)" ></span>
                 
              </div>

               <div class="col-12 py-1 px-1  text-right" v-if="this.$root.replyMessage.type == 'action'">
                  <span class="msgTextReply text-left d-block" style="color:white;" v-html="shortenContent(this.$root.replyMessage.content ,50)" ></span>
                 
              </div>
              
                 <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'image'">
                     <div class="col-3 py-0 my-0">
                   <v-img width="50" :src="'/imgs/space/' + this.$root.replyMessage.image[0].image_name  + '.' + this.$root.replyMessage.image[0].image_extension" class="d-inline-block "> 

                 </v-img>
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReply" style="color:white;">{{this.$root.replyMessage.image.length}} Images</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">
                 
                     </div>
                  </div>


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'project'">
                     <div class="col-3 py-0 my-0">
                <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-plus-network-outline mdi-18px</v-icon></span>
                
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReply" style="color:white;">{{shortenContent(this.$root.replyMessage.project.title ,30)}}</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">
                 
                     </div>
                  </div>


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'video'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-video mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ shortenContent(this.$root.replyMessage.video.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'audio'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-music mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ shortenContent(this.$root.replyMessage.audio.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0"  v-if="this.$root.replyMessage.type == 'file'"> 
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ shortenContent(this.$root.replyMessage.file.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'code'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply" style="color:white;">{{ this.$root.replyMessage.code.name + '.' + languageExtensions(this.$root.replyMessage.code.language_type)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block " style="color:white;">{{this.$root.replyMessage.username}}</span>
              </div>
                  <div style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon @click="closeReply"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                </div>

           
            <div  style="background:#ffffff;" class="px-2 py-1">
          <channel-bottom ref="channelBottom"></channel-bottom>
        </div>
         </div>
         
         
      
      <div v-if="this.$root.ShowButton">
       
        <span style="position:absolute; top:74%; left:2%; z-index:999998757;"  class="d-md-none d-inline-block" v-if="scrollPosition >= 1500 && !this.$root.showMsgDelete">
          <span
               
                v-if="!this.$root.showRootReply"
                 @click="scrollToBottom"
                class="d-block"
                style="background:#3E8893; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff"> mdi-chevron-double-down</v-icon>
              </span>
     </span>

      <span style="position:absolute; top:85%; left:2%;  z-index:999998757;" class="d-none d-md-inline-block" v-if="scrollPosition >= 1500 && !this.$root.showMsgDelete">
          <span
              
               @click="scrollToBottom"
                class="d-block"
                 v-if="!this.$root.showRootReply"
                 style="background:#3E8893; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff">mdi-chevron-double-down</v-icon>
              </span>
     </span>

      
       <span style="position:absolute; top:74%; right:3%; z-index:98757;"  class="d-md-none d-inline-block">
          <v-btn
                color="#3E8893"
                small
                v-if="!this.$root.showRootReply"
                 @click="showCodeBox"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:85%; right:3%;  z-index:98757;" class="d-none d-md-inline-block">
          <v-btn
                color="#3E8893"
                small
               @click="showCodeBox"
                class="d-block"
                 v-if="!this.$root.showRootReply"
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
              </v-btn>
     </span>


 <span style="position:absolute; top:74%; left:3%; z-index:999998757;"  class="d-md-none d-inline-block" v-if="this.$root.showMsgDelete">
          <v-btn
                color="#3E8893"
                x-small
               
                 @click="deleteMessage"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-delete mdi-18px</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:85%; left:3%;  z-index:999998757;" class="d-none d-md-inline-block" v-if="this.$root.showMsgDelete">
          <v-btn
                color="#3E8893"
                x-small
              @click="deleteMessage"
                class="d-block"
                
                fab
              >
                <v-icon color="#ffffff">mdi-delete mdi-18px</v-icon>
              </v-btn>
     </span>


      </div>
       
      

    </div>
</template>
<script>




export default {
    data(){
        return{
          file:'audio/audio.mp3',
          videoUrl:'videos/post_video_y800o6u10xxz50c.mp4',
          videoImage:'videos/videoshow.jpg',
          backgroundVideo:'#c5c5c5',
          playerId2:'playerId2',
          Filename:'Index.html',
          viewerType:'',
          messageInitialLimit:30,
          messagePerLoad:10,
          newMessagesLoading:false,
          playerId1:'playerId1',
          messageid:'',
          messageFinished:false,
          returnedMessages:[],
          Codelanguage_type:'HTML',
          Messages:this.$root.Messages,
          Codecontent:'<p>Hello HTML</p>',
          oldLoading:false,
          typinguser:'',
          scrollHeightContainer:[],
          scrollPosition:0,
          startPosition:0,
          messageStore: [],
         
          messageStoreTop:[],
          endPosition:0,
           containerScrollPosition:0,
           isConnected:true,
           loadingMessage: false,
           showUserInfo:false,
          typing:false,
          channel:null,
          audioMuted: false,
          errorLoadingMessage:false,
          imageArray:[
            {
              image_name: 'imgproj',
              image_extension:'jpeg',
              background_color:'#c5c5c5'
            },
            {
              image_name: 'imgproj1',
              image_extension:'jpeg',
              background_color:'#c5c5c5'
            },
          ]
          
        }
    },
     components: {
   
  },
    mounted(){
       this.$root.showTabs=false;
       this.$root.showHeader = false;
        this.$root.checkIfUserIsLoggedIn('space');
        this.$root.initialPushMangerReg();
       
       this.$root.chatisOpen = true;
       
         this.$root.closeNotification(this.$route.params.spaceId);
       this.fetchMessages();

       if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
             Echo.leave('panel.' + this.$root.projectData.project_slug);

          }
          
       

      
       
       this.makeSpaceConnetion();
       this.$root.forceListReload = false;
      
       
    },
    methods:{
       viewFullImage:function(imageData){
            
            this.$root.fullImageViewer = true;
            this.$root.fullImageColor = imageData.background_color;
            this.$root.imageViewPath = 'imgs/space/' + imageData.image_name + '.' + imageData.image_extension;
             this.$root.showChatBottom = false;
        },
      closeUserInfoBoard: function(){

          this.$root.showUserInfo = false;
        
      },
      viewProfile: function(){
        

        this.$root.pageloader = true;
        window.location = '/view-profile#/profile/channels/'+ this.$root.selectedMember.username;
         
      },
       messageSpace: function(){


          this.loadingMessage = true;

          let member = this.$root.selectedMember;

        if(member.username == this.$root.username){
          return;
        }

        if(member.direct_present){
         
         this.$root.Messages = null;
        this.$root.selectedSpace = [];

        this.$root.forceListReload = true;
      
      this.$root.ChatList = [];
          this.$router.push({ path: '/space/'  +  member.space_id  +  '/channel/content' + '/user' });

          this.$root.showUserInfo = false;

           this.fetchMessages();


          return;
      
        }
        if(this.loading){
            return;
        }

        this.loading = true;
           
          axios.post('/create-space',{
                name: '',
                limit: 2,
                memberId: member.id,
                type: 'Direct'
                  })
          .then(response => {
             
             if (response.status == 200) {

               this.$root.Messages = null;
        this.$root.selectedSpace = [];


         this.$root.showUserInfo = false;

         if(this.$root.ChatList.length != 0){
           this.$root.ChatList[4].unshift(response.data);
           
            this.$root.LocalStore('ChatList' + this.$root.username,this.$root.ChatList);
        this.$root.forceListReload = true;
         }
       
         

               this.$router.push({ path: '/space/'  +  response.data.space_id  +  '/channel/content' + '/user' });

               this.fetchMessages();
                         
            }

          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);

               this.loadingMessage = false;

             
          })

      },
      closeLiveBoard: function(){
      this.$root.liveIsOn = false;
      },
      preventCloseBoard: function(){

      },
      
       initaiteAudioConf: function(){

            this.$root.liveIsOn = true;

    if(this.$root.audioconnection == undefined){

        this.$root.setAudioConnection();

         this.$root.checkAudioRoomState();

          this.$root.sendLiveSignal();

            this.$root.screenSharingOn = true;
          
    }else{
       this.$root.screenSharingOn = true; 
        this.$root.checkAudioRoomState();
    }

        
        },
      closeboard:function(){

        this.$root.liveIsOn = false;

      },
      deleteMessage:function(){
       this.$root.deleteMessage(this.$root.messageIdToDelete)
      },
       showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

    },
    muteAudio:function(){

         
         var localStream = this.$root.audioconnection.attachStreams[0];
           localStream.mute('audio');

           this.audioMuted = true;


      },
      unmuteAudio: function(){

          var localStream = this.$root.audioconnection.attachStreams[0];
           localStream.unmute('audio');

           this.audioMuted = false;

      },
      muteUserAudio:function(userId){
      
       
      },
      unMuteUserAudio:function(userId){
     

       
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
        this.$root.remoteCode = false;
         this.$root.remoteScreen = false;
          this.$root.remoteAudio= false;
      },
    hideAlert:function(){
      this.$root.AlertRoot = false;
    },
       activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'space_content';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
         this.$root.boardContent = 'Hello';
         this.$root.boardBtnLabel = 'Okay Got It';

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
      generateUnreadMessage: function(){
          if(this.$root.selectedSpace.unread != 0 && this.$root.selectedSpace.unread != undefined){
             let newUnreadMsg = {
             content: 'You have ' + this.$root.selectedSpace.unread + ' unread messages',
        created_at: moment().subtract(1,'hours'),
         message_id: this.makeUUID(),
        type:'unread', 
             };
          let msgCount = this.$root.Messages.length;

           let msgIndex = msgCount - this.$root.selectedSpace.unread;

            this.$root.Messages.splice(msgIndex,0,newUnreadMsg);

             this.$root.markSpaceRead(this.$route.params.spaceId);

          }
      },
    
      makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
       showCodeBox: function(){
           this.$root.showChatBottom = false;
             this.$root.showCodeBox = true;
        },
         closeReply:function(){
        this.$root.showRootReply = false;
        this.$root.replyMessage = [];
        this.$root.is_reply = false;
        },
        
      scrollToMessage: function(messageid){
           
             this.$root.Messages.map((message)=>{
                if(message.message_id == messageid){
                  message.tagged = true;
                }
             });

             setTimeout(()=>{
               
                this.$root.Messages.map((message)=>{
                if(message.message_id == messageid){
                  message.tagged = false;
                }
             });

             },2000)
             
          
         setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#message' + messageid);
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)
      
        

      },
      scrollToBottom:function(){

         this.$root.scrollerControlHandler();
        
         setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)
      

      },
       showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

    },
      makeSpaceConnetion: function(){
        
     
         if(this.$root.channel == null){

      
            
           
             this.$root.channel =   Echo.join('space.' + this.$route.params.spaceId)
      .here((users) => {

         
        
      this.$root.SpaceUsers = users;

       

    })
    .joining((user) => {

       
    

    this.$root.SpaceUsers.push(user);

   
    
    })
    .leaving((user) => {
       let newList = this.$root.SpaceUsers.filter((eachuser)=>{
           return eachuser.id != user.id
       });
    this.$root.SpaceUsers = newList;

    
     
    
    })
    .listen('.SpaceChannel',(e) => {
             
            if(e.actionType == 'new-message'){

               

              
 
                this.$root.returnedMessages.push(e.data); 
                 this.$root.Messages.push(e.data);

                this.$root.pushDataToLocal(e.data);

                this.$root.updateSpaceTracker(e.data.space_id);

                this.$root.sortChatList();

                  this.scrollToBottom(); 
               
               

            }
                        
            })
            .listenForWhisper('typing', (e) => {
              
                
              this.$root.typinguser = e.user;
               this.$root.typing = e.typing;
               this.$root.typingSpace = e.spaceId;
                
              
              setTimeout(() => {
                 
                 this.$root.typing = false;
                 
                 }, 1500);
                 })
              .listenForWhisper('liveCoding', (e) => {

                if(e.spaceId == this.$route.params.spaceId){


                   if(e.action == 'typing'){

                    this.$root.FullcodeContent = e.data;

                 }

                  if(e.action == 'codeChange'){

                    this.$root.fullCodeLanguage = e.data;

                 }
                 
                 if(e.action == 'codeRun'){

                   this.$root.liveShowCode = false;

                   this.$root.CodeResult = e.data;

                 }

                 if(e.action == 'returnToCode'){
                  
                  this.$root.liveShowCode = true;

                 }

                  if(e.action == 'liveIsOn'){

                     this.$root.remoteLiveHappening = true;

                      if(e.data == 'audio'){

                     this.$root.remoteAudio = true;

                      }
                      if(e.data == 'screen'){

                         this.$root.remoteScreen = true;

                      }
                      if(e.data == 'code'){
    
                        this.$root.remoteCode  = true;
                      }

                  }

                  if(e.action == 'liveIsOff'){

                    this.$root.remoteLiveHappening = false;

                  }

                }
              
                
               
                
              
             
                 });

         }
         
   
      },
      checkForUnreadMessagesDisconnected:function(){
        
        

       
          let _this = this;

        let interval = setInterval(check,5000);

        
        function check() {


            Echo.connector.socket.on('connect', ()=>{
                    _this.isConnected = true
                })

            Echo.connector.socket.on('disconnect', ()=> {
                    _this.isConnected = false
                })

            Echo.connector.socket.on('reconnecting', function(attemptNumber){
                 _this.isConnected = false
              });
            

          
     
         

          if(_this.isConnected == false && _this.$root.chatisOpen){

                if(_this.$root.chatisOpen){

            
                 
               
                   
                   
                 }else{
                  clearInterval(interval);
                 }
               

              }else{
                 
                
                return;
              }

       let unreadStoredMsg = _this.$root.getLocalStore('unread' + _this.$route.params.spaceId);

           unreadStoredMsg.then((result)=>{

              let finalResultUnread = JSON.parse(result);

              if(_this.$root.sendingMessage == false){

                 _this.periodicUpdate(finalResultUnread);

              }
           });
           
          
        }

        

      },
      periodicUpdate: function(result){

         this.$root.sendingMessage = true;
           
          axios.post('/check-for-unread-messages-clean',{
                spaceId: this.$route.params.spaceId,
                existingMsg: result,
                localMessageCount:  this.$root.returnedMessages.length
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {

                
                if(response.data[0].length > 0){

                 
           
             for (let index = 0; index < response.data[0].length; index++) {
               
            
                  
                  this.$root.returnedMessages.push(response.data[0][index]);
                   this.$root.Messages.push(response.data[0][index]);
                  this.$root.pushDataToLocal(response.data[0][index]);

                  this.scrollToBottom();

                  
              
                }


             }
          

          this.$root.sendingMessage = false;
            
            }

          })
          .catch(error => {

            this.$root.sendingMessage = false;
             
          })

      },
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },

      handleResults(messageArray){

        
          


          this.$root.returnedMessages = messageArray;
          
          let MsgLenght = messageArray.length;

         
             let startCount = MsgLenght - this.$root.messageInitialLimit;

             if(startCount <= 0){
               startCount = 0;
             }

             
  
          let sliedMsg = this.$root.returnedMessages.slice(startCount,MsgLenght);

         
         this.$root.messageStoreTop = this.$root.returnedMessages.slice(0,startCount);

         var finalMessage = sliedMsg;

         
         
         return finalMessage;
          
      },

      handlePushMessage: function(){

       
           

        var container = document.querySelector('#messageContainer');

         let scrollPosition = container.scrollTop;

          let containerScrollHeigthFixed = container.scrollHeight;

         this.scrollPosition = containerScrollHeigthFixed - scrollPosition;

        
       
        
        if(scrollPosition <= 5 && this.$root.messageStoreTop.length != 0){

          
          if(scrollPosition == 0){
           container.scrollTop = 100;
         }
            

           
             
               this.newMessagesLoading = true;
         
          
          this.showAlert(5000,'loading messages...')

           let loadingArray = [];


           if(this.$root.messageStoreTop.length < this.messagePerLoad){
             
              loadingArray = new Array(this.$root.messageStoreTop.length);



           }else{
             
               loadingArray = new Array(this.messagePerLoad);

           }
            
          
             
             for (let index = 0; index < loadingArray.length; index++) {
               
                 let arrayPoppedLoader =  this.$root.messageStoreTop.pop();
                  
                  this.$root.Messages.unshift(arrayPoppedLoader);
             }
             

           
               if(this.$root.Messages[21] != undefined){
                      var elementId = this.$root.Messages[21].message_id;
                  
                    var element =  document.querySelector('#message' + elementId);
            
             if(this.$root.messageStoreTop.length < this.messagePerLoad){

             }else{

                 var top = element.offsetTop - 200;

             }
             
            

               let NumberToRemove = 0;

              if(this.$root.Messages.length < this.$root.messageInitialLimit){
                  NumberToRemove = 10; 
              }
              if(this.$root.Messages.length > this.$root.messageInitialLimit){
                 NumberToRemove = this.$root.Messages.length - this.$root.messageInitialLimit;
              }

            
             let NumberArray =  new Array(NumberToRemove);

             for (let index = 0; index < NumberArray.length; index++) {
               
                 let arrayPopped =  this.$root.Messages.pop();
                  
                  this.$root.messageStore.unshift(arrayPopped);
             }

             container.scrollTop = top;

            

          
          
         
                    
               }

 
        }

     let containerScrollHeigth = container.scrollHeight;
         
        
         
           
        if((scrollPosition > (containerScrollHeigth - 1000)) && this.$root.messageStore.length != 0 ){
         
         container.scrollTop = containerScrollHeigth - 1300;

           this.showAlert(10000,'loading messages...')

             let NumberArrayBottom = [];


           if( this.$root.messageStore.length < this.messagePerLoad){
             
              NumberArrayBottom = new Array( this.$root.messageStore.length);



           }else{
             
               NumberArrayBottom = new Array(this.messagePerLoad);

           }

             for (let index = 0; index < NumberArrayBottom.length; index++) {
               
                 let arrayPopped =  this.$root.messageStore.shift();
                  
                  this.$root.Messages.push(arrayPopped);
             }


              

             for (let index = 0; index < NumberArrayBottom.length; index++) {
               
                 let arrayPoppedTop =  this.$root.Messages.shift();
                  
                  this.$root.messageStoreTop.push(arrayPoppedTop);
             }
             
             

              
              }
        
        },
     updateLocalStorage: function(){

          axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
          

           
      if( response.data[1].space_id == this.$route.params.spaceId ){
        
          this.$root.spaceFullData = response.data;
         
       
         
      

      this.$root.LocalStore(this.$route.params.spaceId,response.data);

      this.$root.LocalStore('unread' + this.$route.params.spaceId,[]);

       let returnedData = this.handleResults(response.data[0]);
        
       
       
       
      
        
       this.$root.selectedSpace = response.data[1];

       this.$root.selectedSpaceMembers = response.data[2];


      }
         
       
          
   
       
     }
       
     
     })
     .catch(error => {
    
     }) 


     },
      fetchUnreadMessages: function(result){
           
            this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = 'loading new messages...';

           axios.post('/check-for-unread-messages',{
                spaceId: this.$route.params.spaceId,
                existingMsg: result,
                localMessageCount:  this.$root.returnedMessages.length
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {

                
                if(response.data[0].length > 0){

                 
           
             for (let index = 0; index < response.data[0].length; index++) {
               
            
                  
                  this.$root.returnedMessages.push(response.data[0][index]);
                   this.$root.Messages.push(response.data[0][index]);
                  this.$root.pushDataToLocal(response.data[0][index]);

                  this.scrollToBottom();
              
                }


                  this.generateUnreadMessage();
               
               

              
             }

            
                 this.updateLocalStorage();
              

               this.$root.selectedSpace = response.data[3];

               this.$root.selectedSpaceMembers = response.data[2];

             this.$root.spaceFullData[0] = this.$root.returnedMessages;
             this.$root.spaceFullData[1] = response.data[3];
             this.$root.spaceFullData[2] = response.data[2];

              let fullData = [];
                    fullData.push(this.$root.spaceFullData[0]);
                fullData.push(this.$root.spaceFullData[1]);

                 let thirdData = [];
                    
                    thirdData.push(this.$root.spaceFullData[2][0])

                fullData.push(thirdData);

               


             this.$root.LocalStore(this.$route.params.spaceId,fullData);
            

       



            
            }


              
           this.$root.AlertRoot = false;
           
            
          })
          .catch(error => {
              this.$root.AlertRoot = false;
          })

      },
      fetchMessages: function(){

         if(this.$root.checkauthroot == 'auth'){


          let storedMsg = this.$root.getLocalStore(this.$route.params.spaceId);

          
           
                
            storedMsg.then((result)=>{

              
               
                
               if(result != null ){
                


               
               let finalResult = JSON.parse(result);

            this.$root.spaceFullData = finalResult;

           

               let returnedData = this.handleResults(finalResult[0]);
        
       this.Messages = returnedData;
       this.$root.Messages = returnedData;

       
       
     
        
       this.$root.selectedSpace = finalResult[1];

       this.$root.selectedSpaceMembers = finalResult[2];

       setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)

         let unreadStoredMsg = this.$root.getLocalStore('unread' + this.$route.params.spaceId);

           unreadStoredMsg.then((result)=>{

              let finalResultUnread = JSON.parse(result);

              if(this.$root.sendingMessage == false){

                this.fetchUnreadMessages(finalResultUnread);

              }
               
             

           });
           
            
              
                
               }else{
                  
                    axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
           

            this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = 'loading messages...';


     if( response.data[1].space_id == this.$route.params.spaceId ){
     
       this.$root.spaceFullData = response.data;
         
       
         
      

      this.$root.LocalStore(this.$route.params.spaceId,response.data);

      this.$root.LocalStore('unread' + this.$route.params.spaceId,[]);

       let returnedData = this.handleResults(response.data[0]);
        
       this.Messages = returnedData;
       this.$root.Messages = returnedData;

      
        
       this.$root.selectedSpace = response.data[1];

       this.$root.selectedSpaceMembers = response.data[2];

       setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)


     }
         
       
      this.$root.AlertRoot = false;
          
   
       
     }
       
     
     })
     .catch(error => {

       this.errorLoadingMessage = true;
    
     }) 

               }
                });
           
          
           


         }

        
      this.checkForUnreadMessagesDisconnected();
       
        },
       
         showMoreHandler(message){
           if(message.showReply){
              message.showReply = false;
           }else{
              this.$root.Messages.map((message)=>{
                 message.showReply = false;
              });
               
             message.showReply = true;
           }
        },
      replyMsg: function(message){
          this.$root.replyMessage = message;
           this.$root.is_reply = true;
          this.$root.showRootReply = true;

           message.showReply = false;
         
      },
       
        checkOwner: function(message_user_id){
            if(this.$root.user_temp_id == message_user_id){
              return true;
            }else{
              return false;
            }

        },
        shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
         checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

            var aWeekAgo = moment().subtract(7,'days');

            if (moment(realTimeHour) >= aWeekAgo) {
              return moment(realTimeHour).format("h:mm a");
            }else{
               return moment(realTimeHour).format("h:mm a");
            }
      },
      covertDate: function(date){
           var realTimeHour = moment(date).format('l');

          
               
            if(moment().format('l') == realTimeHour){
                 return 'Today';
            }
             if(moment().subtract(1,'days').format('l') == realTimeHour){
                 return 'Yesterday';
            }
           
               return moment(realTimeHour).format("MMMM Do");
      },
       languageExtensions: function(language){
        if(language == 'HTML'){
           return 'html';
         }
         if(language == 'CSS'){
            return 'css';
         }
          if(language == 'PYTHON'){
           return 'py';
         }
          if(language == 'PHP'){
           return 'php';
         }
          if(language == 'JAVASCRIPT'){
           return 'js';
         }
          if(language == 'VUEJS'){
           return 'vue';
         }
          if(language == 'SQL'){
           return 'sql';
         }
          if(language == 'C'){
           return 'c';
         }
          if(language == 'C++'){
           return 'cpp';
         }
          if(language == 'JAVA'){
           return 'java';
         }
          if(language == 'C#'){
           return 'cs';
         }
          if(language == 'ERLANG'){
          return 'erl';
         }
          if(language == 'COFFEESCRIPT'){
           return 'coffee';
         }
          if(language == 'LIVESCRIPT'){
           return 'ls';
         }
         if(language == 'DJANGO'){
           return 'py';
         }
          if(language == 'KOTLIN'){
           return 'kt';
         }
          if(language == 'FOTRAN'){
           return 'for';
         }
          if(language == 'MARKDOWN'){
          return 'md';
         }
          if(language == 'PERL'){
          return 'pl';
         }
          if(language == 'R'){
           return 'r';
         }
          if(language == 'RUBY'){
           return 'rb';
         }
      }
  
  },

}
</script>
<style>
.msgText{
  font-size: 12px;
  color: #4d4d4d;
}
.label{
  color: #737373;
  font-size: 10px;
}
.tagged{
  background:white;
  border:2px solid transparent;
  border-radius: 8px;
}
.taggedOthers{
  background:#ACF8E9;
  border:2px solid transparent;
  border-radius: 8px;
}
.msgTextReply{
  font-size: 11px;
  color: #4d4d4d;
}

.imgLabel{
  font-size: 11px;
  color: #4d4d4d;
}
.DateBadge{
  background-color: #3E8893;
  border:1px solid transparent;
  border-radius:10px;
}

  #messageContainer::-webkit-scrollbar {
  width: 5px;
}
 
#messageContainer::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.8);
  border:1px solid transparent;
  border-radius:6px;
}
 
#messageContainer::-webkit-scrollbar-thumb {
  background-color: #6fb8c3;
  outline: 1px solid #6fb8c3;
  border:1px solid transparent;
   border-radius:6px;
}

</style>