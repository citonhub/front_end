<template>
     <div class="row py-1 my-0 px-1" style="cursor:pointer;" >

        <div style="position:absolute;top:120%; right:1%; z-index:2;" class="d-none d-md-block" v-if="showLiveInfo">
                    <info-dialog :buttonText="'Ok'" :content="liveCodingContent" :type="'infotop'"  :next="'subSpace'"></info-dialog>
                      </div>

                      <div style="position:absolute;top:120%; right:2%; z-index:2;" class="d-md-none d-block" v-if="showLiveInfo">
                    <info-dialog :buttonText="'Ok'" :content="liveCodingContent" :type="'infotop'" :next="'subSpace'" ></info-dialog>
                      </div>


                     <div style="position:absolute;top:120%; right:17%; z-index:2;" class="d-none d-md-block" v-if="showSubSpaceInfo">
                    <info-dialog :buttonText="'Ok'" :content="subChannelContent" :type="'infotop'"  :next="'customizeSpace'"></info-dialog>
                      </div>

                      <div style="position:absolute;top:120%; right:17%; z-index:2;" class="d-md-none d-block" v-if="showSubSpaceInfo">
                    <info-dialog :buttonText="'Ok'" :content="subChannelContent" :type="'infotop'" :next="'customizeSpace'" ></info-dialog>
                      </div>



                     <div style="position:absolute;top:120%; right:45%; z-index:2;" class="d-none d-md-block" v-if="showCustomizerInfo">
                    <info-dialog :buttonText="'Ok'" :content="customizeContent" :type="'infotop'"  :next="'finalTop'"></info-dialog>
                      </div>

                      <div style="position:absolute;top:120%; right:40%; z-index:2;" class="d-md-none d-block" v-if="showCustomizerInfo">
                    <info-dialog :buttonText="'Ok'" :content="customizeContent" :type="'infotop'" :next="'finalTop'" ></info-dialog>
                      </div>


         <div class="col-1 py-0 my-0 d-flex" style="align-items:center; justify-content:center;">
               <v-btn icon @click.stop="goBack"><v-icon color="white">mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-2 py-0 my-0 d-flex" style="align-items:center; justify-content:center;" >
            <div v-if="this.$root.selectedSpace.type != 'Direct'">
                
                <v-img v-if="this.$root.selectedSpace.type == 'Personal'" :background-color="this.$root.selectedSpace.background_color" :src="this.$root.selectedSpace.image_name == null ? 'imgs/usernew.png' : '/imgs/space/'+ this.$root.selectedSpace.image_name +'.' + this.$root.selectedSpace.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>
                <v-img v-else :background-color="this.$root.selectedSpace.background_color" :src="this.$root.selectedSpace.image_name == null ? 'imgs/team.png' : '/imgs/space/'+ this.$root.selectedSpace.image_name +'.' + this.$root.selectedSpace.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>

            </div> 
            <div v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'">
                
                <v-img  :background-color="this.$root.selectedSpace.userInfo.background_color" :src="this.$root.selectedSpace.userInfo.image_name == null ? 'imgs/usernew.png' : '/imgs/profile/'+ this.$root.selectedSpace.userInfo.image_name +'.' + this.$root.selectedSpace.userInfo.image_extension " height="36" width="36" class="avatarImg"  style="border:2px solid white;"></v-img>
                

            </div>  
         </div>
         <div class="col-6 py-0 my-0 pt-1 text-center"  @click="showSpaceInfo">
           <div>
              
               <span class="TitleTextNew d-none d-md-block" style="font-size:14px;" v-if="this.$root.selectedSpace.type != 'Direct'"> {{shortenContent(this.$root.selectedSpace.name,32)}}</span>
              <span class="TitleTextNew d-none d-md-block" style="font-size:14px;" v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'" @click.stop="viewUser()">{{shortenContent(this.$root.selectedSpace.userInfo.username,32)}}</span>

               <span class="TitleTextNew d-md-none d-block" v-if="this.$root.selectedSpace.type != 'Direct'"> {{shortenContent(this.$root.selectedSpace.name,16)}}</span>
              <span class="TitleTextNew d-md-none d-block" v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'" @click.stop="viewUser()">{{shortenContent(this.$root.selectedSpace.userInfo.username,16)}}</span>


               <span class="typingText d-block" v-if="this.$root.typing && (this.$root.typingSpace == this.$root.selectedSpace.space_id)">{{this.$root.typinguser}} is typing... </span>
                <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpace.type != 'SubSpace' && this.$root.selectedSpaceMembers.length > 1">{{this.$root.selectedSpaceMembers.length}}  {{ $t('space.members') }} , {{generateOnlineUsers()}}  {{ $t('space.Online') }}</span>

          <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type == 'SubSpace' ">
            
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Public'" color="#ffffff"   class="d-inline-block" style="font-size:12px;">mdi-pound </v-icon>
            <v-icon v-if="this.$root.selectedSubSpaceType == 'Private'" color="#ffffff"  class="d-inline-block" style="font-size:12px;"> mdi-lock </v-icon>
            <span class="px-1">  {{shortenContent(this.$root.selectedSubSpaceName,25)}}</span>
          </span>

           <span class="typingText d-block" v-if="this.$root.typing && this.$root.selectedSpace.type == 'SubSpace' && (this.$root.typingSpace == this.$root.selectedSpace.space_id) ">
            
              {{this.$root.typinguser}} is typing... 
            
          </span>

              <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type == 'Direct' && checkIfOnline(this.$root.selectedSpace.userInfo.id)">{{ $t('space.Online') }}</span>
                 
           </div>
             
         </div>

          <div class="col-1 py-0 my-0 px-0 text-right"  style="" v-if="this.$root.selectedSpace.type != 'Direct'">
               
               <v-btn icon @click="subSpaceBoard"><v-icon color="#ffffff">mdi-pound</v-icon></v-btn>
              
         </div>

          <div class="col-1 py-0 my-0 px-0 text-right"  v-else>
               
               
              
         </div>

         
          <div class="col-2 py-0 my-0 px-0 text-right"  style="" >
              <v-menu bottom left
                transition="slide-y-transition" dense
               
               z-index="9899996969696" tile>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                
                v-bind="attrs"
                v-on="on"
              >
              <v-badge
               dot
               v-if="($data._this.$root.remoteLiveHappening && $data._this.$root.remoteCode) || ($data._this.$root.remoteLiveHappening && $data._this.$root.remoteScreen) || ($data._this.$root.remoteLiveHappening && $data._this.$root.remoteAudio)"
                color="red">
               <v-icon>mdi-television-play</v-icon>
              </v-badge>

              <v-icon v-else >mdi-television-play</v-icon>
                
              </v-btn>
            </template>

           <v-card tile flat class="py-2 text-left px-4" style="width:auto;  background:white;" @click="liveCoding()">
              
              <v-badge
               dot
               v-if="$data._this.$root.remoteLiveHappening && $data._this.$root.remoteCode"
                color="red">
               <v-icon>mdi-monitor-dashboard mdi-18px</v-icon>
              </v-badge>
              
              <v-icon v-else>mdi-monitor-dashboard mdi-18px</v-icon>
              
               <span style="font-size:12px;"><span v-if="checkIfMaster()" >{{ $t('general.start') }}</span><span v-else >{{ $t('general.join') }}</span> {{ $t('space.live_coding') }}</span>


           </v-card>
           <v-card  tile flat class="py-2 text-left px-4" style="width:auto; background:white;" @click="screenSharing()">
             


              <v-badge
               dot
               v-if="$data._this.$root.remoteLiveHappening && $data._this.$root.remoteScreen"
                color="red">
               <v-icon>mdi-monitor-cellphone mdi-18px</v-icon>
              </v-badge>
              
              <v-icon v-else>mdi-monitor-cellphone mdi-18px</v-icon>


             <span style="font-size:12px;"><span v-if="checkIfMaster()" >{{ $t('general.start') }}</span><span v-else >{{ $t('general.join') }}</span> {{ $t('space.screen_sharing') }}</span>
           </v-card>
            <v-card  tile flat class="py-2 text-left px-4" style="width:auto; background:white;" @click="initaiteAudioConf()">
                 

                   <v-badge
               dot
               v-if="$data._this.$root.remoteLiveHappening && $data._this.$root.remoteAudio"
                color="red">
               <v-icon>mdi-microphone mdi-18px</v-icon>
              </v-badge>
              
              <v-icon v-else>mdi-microphone mdi-18px</v-icon>
            
             
             
              <span style="font-size:12px;"><span v-if="checkIfMaster()" >{{ $t('general.start') }}</span><span v-else >{{ $t('general.join') }}</span> {{ $t('space.voice_chat') }}</span>
           </v-card>


            <v-card  tile flat class="py-2 text-left px-4" style="width:auto; background:white;" @click="showAdminUsers()" v-if="checkIfisOwner()">
                 

                  
              <v-icon>mdi-account-cog mdi-18px</v-icon>
            
             
             
              <span style="font-size:12px;">{{ $t('space.admin') }}</span>
           </v-card>
           
          </v-menu>
              
         </div>
        
        
 
         <div  class="col-12 " style=" position:absolute;top:100%; z-index:99899898999988;" v-show="this.$root.showVideoScreen">

               <div style="height:auto;align-items:center;justify-content:center; " class="d-flex col-12 col-md-8 offset-md-2  col-lg-8 offset-lg-2" >

                  <div  id="videos-container" class="mb-3"></div>


                     <div  id="audios-container" class="mb-3" v-show="false"></div>

               </div>
              
         </div>
      </div>

</template>
<script>
export default {
     data(){
        return{
          connection: undefined,
          audioconnection:undefined,
          showScreen:false,
          remoteLiveHappening: this.$root.remoteLiveHappening,
          remoteCode: this.$root.remoteCode,
          remoteScreen: this.$root.remoteScreen,
          remoteAudio: this.$root.remoteAudio,
          liveCodingContent:'Join a live coding session or share your screen with everyone',
          subChannelContent:'Organize chats and contents by creating sub-channels or sub-teams',
          showLiveInfo:false,
          showSubSpaceInfo:false,
          customizeContent:'Click here to customize your channel or team and invite members',
          showCustomizerInfo:false,
          _this: this
        }
    },
     components: {
   
      },
    mounted(){

      this.$root.remoteLiveHappening = false;

      this.$root.channelTopComponent = this;
             
    },
    methods:{
       generateOnlineUsers: function(){
          let onlineUserList = [];

          this.$root.selectedSpaceMembers.forEach(member => {
             
             let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == member.user_id;
             })

             if(userData.length != 0){
               onlineUserList.push(userData[0])
             }
           
            
          });
        
        return onlineUserList.length;
       },
        generateOnlineUsersList: function(){
          let onlineUserList = [];

          this.$root.selectedSpaceMembers.forEach(member => {
             
             let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == member.user_id;
             })

             if(userData.length != 0){
               onlineUserList.push(userData[0])
             }
           
            
          });
        
        return onlineUserList;
       },
      checkIfOnline: function(user_id){

          let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == user_id;
             })
          
         if(userData.length == 0){

            return false

         }else{

           return true
         }

      },
       showAdminUsers:function(){

        
         
         this.$root.showAdminOptions = true;
         this.$root.adminMembers = this.$root.selectedSpaceMembers.filter((member)=>{
           return member.is_admin == true;
         });
         

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
     
       goBack() {
            this.$router.push({ path: '/space/chat-list'});
        
        },
        
        liveCoding:function(){
           
           this.$root.codeIsLive = true;
            this.$root.showChatBottom = false;
            this.$root.showCodeBox = true;
             this.$router.push({ path: '/code-viewer'});

              this.$root.remoteLiveHappening = true;
        this.$root.remoteCode = true;
       
            
             this.$root.sendLiveSignal('code');

              this.$root.liveIsOn = true;

               this.$root.remoteAudio = true;

               if(this.$root.audioconnection == undefined){

             this.$root.setAudioConnection();
               if(this.checkIfMaster()){

                  this.$root.checkAudioRoomState(true);

               }else{
                  this.$root.checkAudioRoomState(false);
               }
             
           }

            
             
            
        },
        screenSharing: function(){

           if(this.$root.connection == undefined){


             this.$root.setSreenShareConnection();

             this.$root.remoteLiveHappening = true;

             this.$root.remoteScreen = true;

          
         

           if(this.checkIfMaster()){

                  this.$root.checkScreenRoomState(true);
                  
                 

               }else{
                  this.$root.checkScreenRoomState(false);
                   
               }

          this.$root.showVideoScreen = true;

           this.$root.sendLiveSignal('screen');

          this.$root.screenSharingOn = true;
          
          this.$root.liveIsOn = true;
          

          

           }else{
             
             this.$root.screenSharingOn = true; 

             this.$root.remoteLiveHappening = true;
            
             this.$root.showVideoScreen = true;

           this.$root.sendLiveSignal('screen');

             this.$root.remoteScreen = true;
               this.$root.liveIsOn = true;

            
           }

          this.initaiteAudioConf();
 

        },
        initaiteAudioConf: function(){

            this.$root.remoteLiveHappening = true;

            this.$root.remoteAudio = true;

            this.$root.liveIsOn = true;

    if(this.$root.audioconnection == undefined){

        this.$root.setAudioConnection();
        this.$root.setDataConnection();

          if(this.checkIfMaster()){

                  this.$root.checkAudioRoomState(true);

               }else{
                  this.$root.checkAudioRoomState(false);
               }
               

          this.$root.sendLiveSignal('audio');

            this.$root.screenSharingOn = true;
          
    }else{

         this.$root.sendLiveSignal('audio');

       this.$root.screenSharingOn = true; 

      
        
    }

    

        
        },
       
        subSpaceBoard: function(){
     

          this.$router.push({ path: '/space/' + this.$route.params.spaceId +   '/channel/sub/' + this.$root.selectedSpace.type });
          

        },
      
        showSpaceInfo:function(){
           if(this.$root.selectedSpace.type == 'Direct'){
              return;
           };
        this.$router.push({ path: '/space/' + this.$route.params.spaceId +   '/channel/board' });
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
        viewUser: function(){
        this.$root.pageloader = true;
        window.location = '/view-profile#/profile/channels/'+ this.$root.selectedSpace.userInfo.username;
    },
  
  },
}
</script>
<style>
.TitleTextNew{
    color: white;
    font-size: 13px;
}
.typingText{
    font-size: 10px;
    color: white;
}
</style>