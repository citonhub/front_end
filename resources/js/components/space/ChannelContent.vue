<template>
    <div style="background:#F3FFFC; position:absolute; height:100%; width:100%; overflow-y:hidden;left:0; overflow-x:hidden; border-right:1px solid #e6e6e6;" >

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
       <span style="color:gray; font-size:12px; font-family:BodyText;"  class="d-block"> {{ $t('space.no_messages') }}</span>
              
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



 <div  @click="closeUserInfoBoard"   v-if="this.$root.showUserInfo" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
    
       <div @click.stop="preventCloseBoard" style="position:absolute; height:auto; width:90%; bottom:5%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">
  

          <v-card  
      style="border-radius:20px;"
       height="auto"
         
       class="pt-2 pb-0 col-12 col-lg-8 offset-lg-2"
  >
   <div class="row py-0 my-0"  v-if="this.$root.userBasicInfo.length != 0" >

     <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">

         <div class="text-center">


                    <span class=" px-1 d-block" style="color: #2d626c; font-size:12px;">{{ $t('profile.connections') }}</span>


                  <span class=" px-1 d-block" style="color: #2d626c; font-size:12px; font-family:HeaderText;">{{this.$root.userBasicInfo.connections}}</span>

             

              </div>

             
     </div>

      <div class="col-4 d-flex py-0 my-0" style="align-items:center; justify-content:center;">

        <div>
           <v-img  @click="viewFullImage()"
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
      {{ $t('space.channels') }}
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
       {{ $t('space.projects') }}
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
       {{ $t('space.teams') }}
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

                   <div class="col-6 text-center py-0 px-0" v-if="this.$root.userBasicInfo.user_connected == true">
                    <v-btn  rounded color="#ffffff" small @click.stop="viewProfile"><span style="font-size:12px; color:#1e4348; font-family:HeaderText;  text-transform:capitalize;">  {{ $t('general.profile') }}</span></v-btn>
                  </div>

                  <div class="col-6 text-center py-0 px-0" v-if="this.$root.userBasicInfo.user_connected == false">
                    <v-btn  rounded color="#ffffff" :loading="connectionLoading" small @click.stop="connectToUser"><span style="font-size:12px; color:#1e4348; font-family:HeaderText;  text-transform:capitalize;">{{ $t('general.connect') }}</span></v-btn>
                  </div>

                   <div class="col-6 text-center py-0 px-0" v-if="this.$root.userBasicInfo.user_connected == 'connected'">
                    <v-btn  rounded color="#ffffff" small  ><span style="font-size:12px; color:#1e4348; font-family:HeaderText;  text-transform:capitalize;">{{ $t('general.connected') }}</span></v-btn>
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

     

      <div v-if="this.$root.liveIsOn" @click="closeLiveBoard" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; left:0%; top:%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
    




       <div  @click.stop="preventCloseBoard" style="position:absolute; height:auto; width:90%; top:45%; left:5%; overflow-y:hidden; " class="mx-auto pb-2">


        <div class="col-12 text-center"    v-if="this.$root.connectingToSocket == true">

           <div v-if="this.$root.roomNotExist && this.$root.roomCheckingInitaited">

               <div class="py-2">
          <v-progress-circular indeterminate color="#3E8893"></v-progress-circular>
           </div>

              <div>
          <span style="font-size:14px; color:white;">{{ $t('space.wait_for_admin') }}</span>
           </div>

           


           </div>
            
            <div v-if="!this.$root.roomNotExist">

               <div class="py-2">
          <v-progress-circular indeterminate color="#3E8893"></v-progress-circular>
           </div>

           <div>
          <span style="font-size:14px; color:white;">{{ $t('general.connecting') }}...</span>
           </div>

            </div>
          

         
        </div>

        <div class="col-12 text-center"    v-if="this.$root.connectingToSocket == 'disconnected'">

           <div>

               <div class="py-2">
          <v-progress-circular indeterminate color="#3E8893"></v-progress-circular>
           </div>

              <div>
          <span style="font-size:14px; color:white;">{{ $t('space.disconnected_info') }}</span>
           </div>

           


           </div>
            
          

         
        </div>


  

          <v-card  
       v-if="this.$root.connectingToSocket == false"
       class="col-12 col-lg-8 offset-lg-2 py-1 px-1"
  >
    <v-card
      color="#3E8893"
      
      class="px-1 py-2"
    >

    <div class="col-12 py-0 my-0">

      <div class="row py-0 my-0">

         

        <div style="color:white; font-size:13px; font-family:HeaderText;" class="col-7 py-0 my-1 px-1"> 
         
             <v-icon color="#ffffff"  >mdi-close mdi-18px</v-icon>
     
      {{ $t('space.active_members') }} <span class="ml-1 py-1 px-1" 
        style="color:#ffffff; ">({{ this.$root.allAudioParticipant.length + 1 }})</span></div>

      <div class="col-5 py-0 my-0 text-right">
       
        <div>
           <v-btn x-small color="#ffffff" @click="closeConnections" v-if="!this.$root.connectingToSocket && !this.$root.userIsReconnecting">
        <span style="color:#265259; font-size:10px;font-family:HeaderText; ">{{ $t('space.leave') }}</span>
      </v-btn>


      <span style="font-size:12px; color:white;" v-if="this.$root.connectingToSocket && !this.$root.userIsReconnecting">
        {{ $t('general.connecting') }}...
      </span>
      <span v-if="this.$root.userIsReconnecting" style="font-size:12px; color:white;"  >
       {{ $t('general.reconnecting') }}...
      </span>
        </div>
        
      </div>

      </div>

      

    </div>

      

     

     
    
     
    </v-card>
    <v-list  class="pb-3 scrollerStyle" style=" height:220px;width:100%; overflow-y:auto;">

      <v-list-item
       style="border-bottom:1px solid #c5c5c5;"
      >
        <v-list-item-avatar>
          <v-img :src="this.$root.authProfile.image_name == null ? '/imgs/usernew.png' : '/imgs/profile/' + this.$root.authProfile.image_name + '.' + this.$root.authProfile.image_extension"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title  style="font-size:12px;">{{ this.$root.authProfile.username }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon >
          
           <v-btn icon @click="muteAudio" v-if="!this.$root.localAudioMuted">

             <v-icon color="#3E8893">mdi-microphone </v-icon>

             

           </v-btn>
            <v-btn icon @click="unmuteAudio" v-else>

              
        <v-icon >mdi-microphone-off </v-icon>
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
          
          <div style="position:relative; height:40px; width:40px; background:#666666; 
               border:1px solid transparent; border-radius:50%;" v-if="user[0].speaking == false"
        class="outerbox d-flex">     
   <div :style="'width:' + user[0].volume + '%; height:' + user[0].volume  +'%;'"
     class="innerBoxnewFade">
  
     </div>
     </div>

     <div style="position:relative; height:40px; width:40px; background:#35747e; 
               border:1px solid transparent; border-radius:50%;" v-else
        class="outerbox d-flex">     
   <div :style="'width:' + animateVolume + '%; height:' + animateVolume  +'%;'"
     class="innerBoxnew">
  
     </div>
     </div>
         
        </v-list-item-icon>
      </v-list-item>

      <div class="col-12 py-1 my-0 text-center" v-if="this.$root.allAudioParticipant.length == 0 && !this.$root.connectingToSocket">
      <span style="font-size:12px; color:gray;">{{ $t('general.check_members') }}...</span>
      </div>



      
     
       


      
    </v-list>

    
  </v-card>


       </div>
        

      </div>



       <div    v-if="this.$root.showAdminOptions" @click="that.$root.showAdminOptions = false" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ">
           <div  @click.stop="that.$root.showAdminOptions = true" style="position:absolute; height:auto; width:90%; top:30%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">

             <v-card style="border-radius:10px;"
       height="auto"
      
       class="py-2 px-1" >

             <div class="text-center">
               <h6>Administrators</h6>
             </div>
           
             <v-card tile flat  @click.stop="makeUserMaster(admin)" :color="admin.master_user ? '#b7dbe1': '#ffffff'" class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" v-for="(admin, index) in this.$root.adminMembers" 
             :key="index">
        <span style="font-size:13px;" v-if="!checkIfUser(admin.user_id)">{{admin.username}}</span>
         <span style="font-size:13px;" v-else>You</span>
            </v-card>
            
           

             </v-card>

           </div>
         </div>


        <div class="col-12 py-0 my-0 text-center"  v-if="this.$root.Messages == null && this.errorLoadingMessage == true" style="position:absolute; width:100%; height:100%; overflow-y:auto; overflow-x:hidden; padding-top:60px !important;padding-bottom:150px !important;">

           <div style="color:gray; font-size:12px;" class="mb-2">{{ $t('space.error_message_load') }}</div>

           <v-btn fab color="#3E8893" small @click="fetchMessages"> <v-icon color="#ffffff">mdi-reload</v-icon> </v-btn>
       
         
       </div>
      

         <div   class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-0 my-0 px-0 fixed-bottom " style="z-index:66; " >
                <div class="px-2" v-if="this.$root.showRootReply">

                  <div class=" py-2 px-2  text-left mb-1"  style="background:#3E8893; border:1px solid transparent; border-radius:8px;" >

                     <div class="col-12 py-1 px-1  text-right" v-if="this.$root.replyMessage.type == null">
                  <span class="msgTextReplynew text-left d-block" style="color:white;" v-html="shortenContent(this.$root.replyMessage.content ,50)" ></span>
                 
              </div>

               <div class="col-12 py-1 px-1  text-right" v-if="this.$root.replyMessage.type == 'action'">
                  <span class="msgTextReplynew text-left d-block" style="color:white;" v-html="shortenContent(this.$root.replyMessage.content ,50)" ></span>
                 
              </div>
              
                 <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'image'">
                     <div class="col-3 py-0 my-0">
                   <v-img width="50" :src="'/imgs/space/' + this.$root.replyMessage.image[0].image_name  + '.' + this.$root.replyMessage.image[0].image_extension" class="d-inline-block "> 

                 </v-img>
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReplynew" style="color:white;">{{this.$root.replyMessage.image.length}} Images</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">
                 
                     </div>
                  </div>


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'project'">
                     <div class="col-3 py-0 my-0">
                <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-plus-network-outline mdi-18px</v-icon></span>
                
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReplynew" style="color:white;">{{shortenContent(this.$root.replyMessage.project.title ,30)}}</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">
                 
                     </div>
                  </div>


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'video'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-video mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ shortenContent(this.$root.replyMessage.video.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'audio'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-music mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ shortenContent(this.$root.replyMessage.audio.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0"  v-if="this.$root.replyMessage.type == 'file'"> 
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ shortenContent(this.$root.replyMessage.file.display_name ,30)}}</span>
                     </div>
                     
                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'code'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ this.$root.replyMessage.code.name + '.' + languageExtensions(this.$root.replyMessage.code.language_type)}}</span>
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
       
        <span style="position:absolute; top:74%; left:2%; z-index:98757;"  class="d-md-none d-inline-block" v-if="scrollPosition >= 1500 && !this.$root.showMsgDelete">
          <span
               
                v-if="!this.$root.showRootReply"
                 @click="scrollToBottom"
                class="d-block"
                style="background:#3E8893; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff"> mdi-chevron-double-down</v-icon>
              </span>
     </span>

      <span style="position:absolute; top:85%; left:2%;  z-index:98757;" class="d-none d-md-inline-block" v-if="scrollPosition >= 1500 && !this.$root.showMsgDelete">
          <span
              
               @click="scrollToBottom"
                class="d-block"
                 v-if="!this.$root.showRootReply"
                 style="background:#3E8893; padding:3px; border:1px solid transparent; border-radius:50%; color:white;"
              >
                <v-icon color="#ffffff">mdi-chevron-double-down</v-icon>
              </span>
     </span>

      
       <span style="position:fixed; top:73%; right:3%; z-index:98757;"  class="d-md-none d-inline-block">
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


 <span style="position:fixed; top:73%; left:3%; z-index:999998757;"  class="d-md-none d-inline-block" v-if="this.$root.showMsgDelete">
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

      <span style="position:absolute; top:73%; left:3%;  z-index:999998757;" class="d-none d-md-inline-block" v-if="this.$root.showMsgDelete">
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
          that:this,
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
           flexSize:80,
           animateVolume:30,
          typing:false,
          connectionLoading:false,
          channel:null,
          audioMuted: false,
          unsentMessagesPresent: false,
          errorLoadingMessage:false,
          loadingJoin:false,
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

         this.$root.typing = false;
       
       this.$root.chatisOpen = true;
       
         this.$root.closeNotification(this.$route.params.spaceId);
       this.fetchMessages();

       if(this.$root.projectData.length != 0){
              
              this.$root.localChannel = [];
             window.Echo.leave('panel.' + this.$root.projectData.project_slug);

          }
          
       

      
       
       this.makeSpaceConnetion();
       this.$root.forceListReload = false;

       this.resendMessages();

        

       this.animateVolumeControl();

         if(this.$root.reloadSpaceInfo){

        this.fetchSpaceInfo();

      }


     
       
      
    },
    methods:{
       checkIfUser:function(userId){
            if(userId == this.$root.user_temp_id){
                return true;
            }else{
              return false;
            }
            
         },
         checkIfisOwner: function(){

           let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{
   
             return members.user_id == this.$root.user_temp_id;
           });

           
           if(userMemberData.length != 0){

             return userMemberData[0].is_admin;

           }else{
              return false
           }
         
       },
     
         autoMakeuserMaster:function(){
                     
                     
   

            if(this.checkIfisOwner()){
           
             
           
           let master = this.$root.selectedSpaceMembers.filter((member)=>{
               
              return member.master_user == true;

            });
        
      

            
            let userMember = this.$root.selectedSpaceMembers.filter((member)=>{
               
              return member.user_id == this.$root.user_temp_id;

            });

            if(master.length == 0){

              

               this.makeUserMaster(userMember[0]);

            }
           

            }

         },
          makeUserMaster: function(member){


        axios.post( '/make-user-master',{
           memberId: member.memberId,
           space_id: this.$route.params.spaceId
         })
      .then(response => {
      
      if (response.status == 200) {

          this.$root.adminMembers.forEach((member)=>{
            
             member.master_user = false;

          });
        
          this.$root.adminMembers.map((member)=>{
           if(member.memberId == response.data){

             member.master_user = true;

           }
         })

          this.$root.selectedSpaceMembers.forEach((member)=>{
            
             member.master_user = false;

          });

          this.$root.selectedSpaceMembers.map((member)=>{
           if(member.memberId == response.data){

             member.master_user = true;

           }
         })

         
    

        this.liveChanges(response.data,'new_master');
      }
       
     
     })
     .catch(error => {

       
    
     }) 

      },
       liveChanges:function(data,action) {

      
      let channel =  window.Echo.join('space.' + this.$route.params.spaceId);
   
      

         channel.whisper('liveCoding', {
          data:data,
            action: action,
            spaceId: this.$route.params.spaceId
        });


       

         
     
          
        },
       fetchSpaceInfo: function(){

            axios.get( '/fetch-space-info-'+ this.$route.params.spaceId)
   .then(response => {
   
   if (response.status == 200) {

    

       this.$root.selectedSpace = response.data;

        if(this.$root.ChatList[0] != undefined){

           this.$root.ChatList[1].map((chat)=>{
          
           if(chat.space_id == this.$route.params.spaceId){

              chat.name = this.$root.selectedSpace.name;

               chat.background_color = this.$root.selectedSpace.background_color;

                chat.image_name = this.$root.selectedSpace.image_name;

                 chat.image_extension = this.$root.selectedSpace.image_extension;

           }


           });

          this.$root.ChatList[2].map((chat)=>{


             if(chat.space_id == this.$route.params.spaceId){

              chat.name = this.$root.selectedSpace.name;

               chat.background_color = this.$root.selectedSpace.background_color;

                chat.image_name = this.$root.selectedSpace.image_name;

                 chat.image_extension = this.$root.selectedSpace.image_extension;

           }

          })

       this.$root.LocalStore('ChatListNew' + this.$root.username,this.$root.ChatList);

        }

       this.$root.reloadSpaceInfo = false;
  }
    
  
  })
  .catch(error => {
 
  }) 

 
        },
      animateVolumeControl: function(){
         
         let volumeInterval = null;

         volumeInterval = setInterval(() => {
            

            if(!this.$root.chatisOpen){
                clearInterval(volumeInterval);
            }else{

               if(this.$root.audioconnection != null){
                  
                  if(this.animateVolume == 90){
                      this.animateVolume = 30;
                  }else{
                    this.animateVolume += 15;
                  }
               }
            }

           
         }, 300);
      },
      
       checkIfMaster: function(){
     
      let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{
   
             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

             return userMemberData[0].master_user;

           }else{
              return false
           }


      },
      resendMessages:function(){
        
       
          
          let resendInterval = null;

          resendInterval = setInterval(() => {
             
             

              let unsentMsg = this.$root.getLocalStore('unsentnew' + this.$route.params.spaceId  + this.$root.username );

         unsentMsg.then((result)=>{

           if(result != null){

            let finalResult = JSON.parse(result);
              
                

                if(finalResult.length == 0){

                  this.unsentMessagesPresent = false;

                }else{
                  
                this.unsentMessagesPresent = true;

                  if(!this.$root.sendingMessage){
                      for (let index = 0; index < finalResult.length; index++) {

                      if(this.$route.params.spaceId == finalResult[index].space_id){
                  
                      
                        
                         this.$root.sendTextMessage(finalResult[index]);
                        
  
                      }
 
                        }

                  }

                  
                
                 
                }

              
               

           }else{

             this.unsentMessagesPresent = false;
           }


          
        
         });

        if(!this.$root.chatisOpen){

          clearInterval(resendInterval);

         }

         }, 5000);

      },
     
      connectToUser:function(){
           this.connectionLoading = true;
         axios.get( '/connect-user-'+ this.$root.userBasicInfo.userData.username)
      .then(response => {
      
      if (response.status == 200) {
          
          
          
             
          this.$root.userBasicInfo.user_connected = 'connected';
            this.connectionLoading = false;
          
          
     }
       
     
     })
     .catch(error => {
    
     }) 

      },
       viewFullImage:function(){
              let imageData = this.$root.userBasicInfo;
            this.$root.fullImageViewer = true;
            this.$root.fullImageColor = imageData.background_color;
            this.$root.imageViewPath = 'imgs/profile/' + imageData.image_name + '.' + imageData.image_extension;
             this.$root.showChatBottom = false;
        },
      closeUserInfoBoard: function(){

          this.$root.showUserInfo = false;

          this.$root.userBasicInfo = [];
        
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
           
          axios.post( '/create-space',{
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
           
            this.$root.LocalStore('ChatListNew' + this.$root.username,this.$root.ChatList);
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
         this.$root.localAudioMuted = true;

      },
      unmuteAudio: function(){

   var localStream = this.$root.audioconnection.attachStreams[0];
            localStream.unmute('audio');
         
    this.$root.localAudioMuted = false;
      },
      muteUserAudio:function(userId){
      
       
      },
      unMuteUserAudio:function(userId){
     

       
      },
      closeConnections:function(){

        let _this = this;

         if(this.$root.audioconnection != undefined){

         
          
        

        // disconnect with all users
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
        this.$root.remoteCode = false;
         this.$root.remoteScreen = false;
          this.$root.remoteAudio= false;
          this.$root.connectingToSocket = false;
          this.$root.allAudioParticipant = [];
          this.$root.roomNotExist =false;
          this.$root.localAudioMuted = false;
        this.$root.roomCheckingInitaited = false;
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
      

         axios.get( '/fetch-profile-'+ this.$root.username)
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

            

          }
      },
    
      makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
       showCodeBox: function(){
           this.$root.showChatBottom = false;
          this.$root.codeFromChat = false;
             this.$root.showCodeBox = true;
             this.$router.push({ path: '/code-viewer'});

              

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

      
            
           
             this.$root.channel =   window.Echo.join('space.' + this.$route.params.spaceId)
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

               

            
                

                 if(!this.$root.checkIfMessageExist(e.data)){

                     this.$root.returnedMessages.push(e.data); 
                 this.$root.Messages.push(e.data);

                this.$root.pushDataToLocal(e.data);

                this.$root.updateSpaceTracker(e.data.space_id);

                this.$root.sortChatList();

                  this.scrollToBottom(); 

                  this.$root.clearUnreadMessageRemote(e.data.message_id);

                 }
              
               
               

            }
                        
            })
            .listenForWhisper('typing', (e) => {
              
                
              this.$root.typinguser = e.user;
               this.$root.typing = e.typing;
               this.$root.typingSpace = e.spaceId;
                
              
              
                 })
              .listenForWhisper('liveCoding', (e) => {

                 
                 if(this.$route.params.spaceId == e.spaceId){


                   

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


            window.Echo.connector.socket.on('connect', ()=>{
                    _this.isConnected = true
                })

            window.Echo.connector.socket.on('disconnect', ()=> {
                    _this.isConnected = false
                })

            window.Echo.connector.socket.on('reconnecting', function(attemptNumber){
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

       let unreadStoredMsg = _this.$root.getLocalStore('unread' + _this.$route.params.spaceId  + _this.$root.username);

           unreadStoredMsg.then((result)=>{

              let finalResultUnread = JSON.parse(result);

              if(_this.$root.sendingMessage == false){

                 _this.periodicUpdate(finalResultUnread);

              }
           });
           
          
        }

        

      },
      getMemberUpdates: function(spaceId){


      axios.get( '/fetch-space-members-' + spaceId )
      .then(response => {
      
      if (response.status == 200) {
        
     
       this.$root.selectedSpaceMembers = response.data;

        
     }
       
     
     })
     .catch(error => {
    
     }) 


      },
      periodicUpdate: function(result){

         if(this.$root.ChatList.length == 0){


           this.showAlert(5000,'Loading new messages')

         }

         

         
           
          axios.post( '/check-for-unread-messages-clean',{
                spaceId: this.$route.params.spaceId,
                existingMsg: result,
                localMessageCount:  this.$root.returnedMessages.length,
                 device_id: this.$root.userDeviceId
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
          

        
            
            }

          })
          .catch(error => {

            
             
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
         
          
          this.showAlert(2000,'loading messages...')

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

           this.showAlert(4000,'loading messages...')

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

          axios.get( '/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
          
    
           
      if( response.data[1].space_id == this.$route.params.spaceId ){


        
         
         

           let unsentMsg = this.$root.getLocalStore('unsentnew' + this.$root.selectedSpace  + this.$root.username );

            unsentMsg.then((result)=>{

           if(result != null){

            let finalResult = JSON.parse(result);
              
                

                if(finalResult.length > 0){

                  

                }else{
                   this.$root.LocalStore(this.$route.params.spaceId + this.$root.username,response.data);

           this.$root.LocalStore('unread' + this.$route.params.spaceId + this.$root.username,[]);

            let returnedData = this.handleResults(response.data[0]);
                }

              
               

           }else{

               this.$root.LocalStore(this.$route.params.spaceId + this.$root.username,response.data);
 
         this.$root.LocalStore('unread' + this.$route.params.spaceId + this.$root.username,[]);

         let returnedData = this.handleResults(response.data[0]);
           }


          
        
         });
       
         
       

           

        

     
        
       
       
       
      
        
      


      }
         
       
          
   
       
     }
       
     
     })
     .catch(error => {
    
     }) 


     },
     
      fetchMessages: function(){
        
          this.$root.Messages = null;
          this.errorLoadingMessage = false;
           
         if(this.$root.checkauthroot == 'auth'){
           

           this.$root.markSpaceRead(this.$route.params.spaceId);


            this.$root.TrackLastSubSpace = [];


          let storedMsg = this.$root.getLocalStore(this.$route.params.spaceId + this.$root.username);

          
           
                
            storedMsg.then((result)=>{

              
               
                
               if(result != null ){
                


               
               let finalResult = JSON.parse(result);

            this.$root.spaceFullData = finalResult;

           

               let returnedData = this.handleResults(finalResult[0]);
        
       this.Messages = returnedData;
       this.$root.Messages = returnedData;

        this.$root.selectedSpace  = [];

       
        this.generateUnreadMessage();
        
           this.$root.selectedSpace = finalResult[1];

              if(finalResult[1].type == 'SubSpace'){

                 
                 let generalSpace = finalResult[1].gen_space;
                 
                  
                    this.$root.selectedGenSpaceType = finalResult[1].gen_space.type;

                  generalSpace.space_id =  finalResult[1].space_id;

                  generalSpace.type = finalResult[1].type;



                generalSpace.general_spaceId = finalResult[1].general_spaceId;




              let subSpaceData = finalResult[1].sub_space_data;
                 

                  

             this.$root.selectedSubSpaceName = finalResult[1].name;

             this.$root.selectedSubSpaceType = subSpaceData.type;

             

               generalSpace.sub_spaces = finalResult[1].sub_spaces;

              

               this.$root.selectedSpace = generalSpace;


               

               



              }

           this.$root.TrackLastSubSpace.push(  this.$root.selectedSpace.general_spaceId, this.$route.params.spaceId);

              
        
        
               
               
           
      

       this.$root.selectedSpaceMembers = finalResult[2];

           this.autoMakeuserMaster();

       setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)

        
           
          


             let unreadStoredMsg = this.$root.getLocalStore('unread' + this.$route.params.spaceId  + this.$root.username);

           unreadStoredMsg.then((result)=>{

              let finalResultUnread = JSON.parse(result);

              if(this.$root.sendingMessage == false){

                 this.periodicUpdate(finalResultUnread);

              }
              
           });

            let unsentStoredMsg = this.$root.getLocalStore('unsentnew' + this.$route.params.spaceId  + this.$root.username);

           unsentStoredMsg.then((result)=>{

              let finalResultunsent = JSON.parse(result);

              if(finalResultunsent != null){

                if(finalResultunsent.length == 0){

               this.updateLocalStorage();

              }

              }else{
                 this.updateLocalStorage();

              }
              
              
              
           });

    
          
             
              
                
               }else{
                  
                    axios.get( '/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {
           

           


     if( response.data[1].space_id == this.$route.params.spaceId ){
     
       this.$root.spaceFullData = response.data;
         
       
         
      

      this.$root.LocalStore(this.$route.params.spaceId  + this.$root.username,response.data);

      this.$root.LocalStore('unread' + this.$route.params.spaceId  + this.$root.username,[]);

       let returnedData = this.handleResults(response.data[0]);
        
       this.Messages = returnedData;
       this.$root.Messages = returnedData;

      
        
     


               this.$root.selectedSpace = response.data[1];

              if(response.data[1].type == 'SubSpace'){

                 
                 let generalSpace = response.data[1].gen_space;
                 
                  
                    this.$root.selectedGenSpaceType = response.data[1].gen_space.type;

                  generalSpace.space_id =  response.data[1].space_id;

                  generalSpace.type = response.data[1].type;

                  generalSpace.general_spaceId = response.data[1].general_spaceId;



               

              let subSpaceData = response.data[1].sub_space_data;
                 

                  

             this.$root.selectedSubSpaceName = response.data[1].name;

             this.$root.selectedSubSpaceType = subSpaceData.type;

             

               generalSpace.sub_spaces = response.data[1].sub_spaces;

              

               this.$root.selectedSpace = generalSpace;


             



              }

      this.$root.TrackLastSubSpace.push(  this.$root.selectedSpace.general_spaceId, this.$route.params.spaceId);

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


             if(this.$root.selectedSpace.general_spaceId != undefined){

        this.getMemberUpdates(this.$root.selectedSpace.general_spaceId);

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

          if(language == 'VUE'){
          return 'vue';
         }

          if(language == 'MD'){
          return 'md';
         }

          if(language == 'PYTHON(3.8.1)'){
           return 'py';
         }

         if(language == 'PYTHON For ML(3.7.7)'){
           return 'py';
         }

         if(language == 'PYTHON(2.7.17)'){
           return 'py';
         }
          if(language == 'PHP'){
            return 'php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           return 'js';
         }

          if(language == 'JAVASCRIPT'){
           return 'js';
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
          if(language == 'KOTLIN'){
         return 'kt';
         }
          if(language == 'FOTRAN'){
          return 'for';
         }
          if(language == 'PERL'){
           return 'pl';
         }
          if(language == 'R'){
            return 'r';
         }
         if(language == 'GO'){
            return 'go';
         }
         if(language == 'HASKELL'){
           return 'hs';
         }
          if(language == 'RUBY'){
            return 'rb';
         }
         if(language == 'LUA'){
           
             return 'lua';

         }
         if(language == 'PASCAL'){

             return 'pas';
         }
         if(language == 'RUST'){

             return 'rs';
         }
         if(language == 'SCALA'){
           
              return 'scala';

         }
         if(language == 'SWIFT'){

               return 'swift';

         }
         if(language  == 'TYPESCRIPT'){

             return 'ts';

         }

      },
  
  },

}
</script>
<style>
.msgTextnew2{
  font-size: 13px;
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
.msgTextReplynew{
  font-size: 13px;
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

.innerBoxnew{
 border:1px solid transparent;
  border-radius:50%;
  background: #6fb8c3;
  position: absolute;

  
  
  
}

.innerBoxnewFade{
   border:1px solid transparent;
  border-radius:50%;
  background: #bfbfbf;
  position: absolute;
}
.outerbox{
  display:-webkit-flex;
  align-items:center;
  justify-content:center;
}

</style>