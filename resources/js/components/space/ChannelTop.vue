<template>
     <div class="row py-1 my-0 px-1" style="cursor:pointer;" >
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
              
               <span class="TitleText d-block" v-if="this.$root.selectedSpace.type != 'Direct'"> {{shortenContent(this.$root.selectedSpace.name,22)}}</span>
              <span class="TitleText d-block" v-if="this.$root.selectedSpace.userInfo != undefined && this.$root.selectedSpace.type == 'Direct'" @click.stop="viewUser()">{{shortenContent(this.$root.selectedSpace.userInfo.username,22)}}</span>
               <span class="typingText d-block" v-if="this.$root.typing && (this.$root.typingSpace == this.$root.selectedSpace.space_id)">{{this.$root.typinguser}} is typing... </span>
                <span class="typingText d-block" v-if="!this.$root.typing && this.$root.selectedSpace.type != 'Direct' && this.$root.selectedSpaceMembers.length > 1">{{this.$root.selectedSpaceMembers.length}} Members</span>

           </div>
             
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
               v-if="remoteLiveHappening"
                color="red">
               <v-icon>mdi-monitor-screenshot</v-icon>
              </v-badge>

              <v-icon v-else >mdi-monitor-screenshot</v-icon>
                
              </v-btn>
            </template>

           <v-card tile flat class="py-2 text-left px-4" style="width:auto;  background:white;" @click.stop="liveCoding()">
              
              <v-badge
               dot
               v-if="remoteLiveHappening && remoteCode"
                color="red">
               <v-icon>mdi-monitor-dashboard mdi-18px</v-icon>
              </v-badge>
              
              <v-icon v-else>mdi-monitor-dashboard mdi-18px</v-icon>
              
               <span style="font-size:12px;">Live Coding</span>


           </v-card>
           <v-card  tile flat class="py-2 text-left px-4" style="width:auto; background:white;" @click.stop="screenSharing()">
             


              <v-badge
               dot
               v-if="remoteLiveHappening && remoteScreen"
                color="red">
               <v-icon>mdi-monitor-cellphone mdi-18px</v-icon>
              </v-badge>
              
              <v-icon v-else>mdi-monitor-cellphone mdi-18px</v-icon>


             <span style="font-size:12px;">Share Your Screen</span>
           </v-card>
            <v-card  tile flat class="py-2 text-left px-4" style="width:auto; background:white;" @click.stop="initaiteAudioConf()">
                 

                   <v-badge
               dot
               v-if="remoteLiveHappening && remoteAudio"
                color="red">
               <v-icon>mdi-microphone mdi-18px</v-icon>
              </v-badge>
              
              <v-icon v-else>mdi-microphone mdi-18px</v-icon>
            
             
             
              <span style="font-size:12px;">Live Audio</span>
           </v-card>
           
          </v-menu>
              
         </div>
        
         <div class="col-1 py-0 my-0 px-0 text-right"  style="" >
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
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

           <v-card  v-if="this.$root.selectedSpace.type ==  'Team'" tile flat class="py-2 text-center px-4" style="width:140px;  background:white;" @click="channelProjects">
             <span style="font-size:12px;">Projects</span>
           </v-card>
           <v-card  tile flat class="py-2 text-center px-4" style="width:140px; background:white;" @click="channelResources">
             <span style="font-size:12px;">Media</span>
           </v-card>
          </v-menu>
              
         </div>
 
         <div  class="col-12 " style=" position:absolute;top:100%; " v-show="this.$root.showVideoScreen">

               <div style="height:auto; width:100%;align-items:center;justify-content:center; " class="d-flex" >

                  <div  id="videos-container" class="mb-3"></div>
                 
                 


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

        }
    },
     components: {
   
  },
    mounted(){
             this.checkIfRemoteLive();
    },
    methods:{
      checkIfRemoteLive: function(){

           let interval = setInterval(checkSignal,2000);

      let _this = this;

        function checkSignal(){

          

              _this.remoteLiveHappening = _this.$root.remoteLiveHappening;
            _this.remoteCode = _this.$root.remoteCode;
          _this.remoteScreen= _this.$root.remoteScreen;
          _this.remoteAudio= _this.$root.remoteAudio;
            
           
              
         
         
        }

        },
       goBack() {
            this.$router.push({ path: '/space/chat-list'});
        
        },
        
        liveCoding:function(){
           
           this.$root.codeIsLive = true;
            this.$root.showChatBottom = false;
             this.$root.showCodeBox = true;

              this.$root.remoteLiveHappening = true;
        this.$root.remoteCode = true;
       
            
             this.$root.sendLiveSignal('code');

              this.$root.liveIsOn = true;
             
             this.initaiteAudioConf();
        },
        screenSharing: function(){

           if(this.$root.connection == undefined){


             this.$root.setSreenShareConnection();

             this.$root.remoteLiveHappening = true;

             this.$root.remoteScreen = true;

          
          this.$root.checkScreenRoomState();

          this.$root.showVideoScreen = true;

           this.$root.sendLiveSignal('screen');

          this.$root.screenSharingOn = true;
          
          this.$root.liveIsOn = true;

           if(this.$root.audioconnection == undefined){
             this.$root.setAudioConnection();
              this.$root.checkAudioRoomState();
           }

           }else{
             
             this.$root.screenSharingOn = true; 
             this.$root.checkScreenRoomState();
           }

          


        },
        initaiteAudioConf: function(){

            this.$root.remoteLiveHappening = true;

            this.$root.remoteAudio = true;

            this.$root.liveIsOn = true;

    if(this.$root.audioconnection == undefined){

        this.$root.setAudioConnection();

         this.$root.checkAudioRoomState();

          this.$root.sendLiveSignal('audio');

            this.$root.screenSharingOn = true;
          
    }else{

       this.$root.screenSharingOn = true; 

        this.$root.checkAudioRoomState();
        
    }

        
        },
       
      
        
        channelProjects: function(){
              
             this.$router.push({ path: '/space/'  + this.$route.params.spaceId + '/channel/projects' });

            
        },
        channelResources:function(){
        this.$router.push({ path: '/space/'  + this.$route.params.spaceId + '/channel/resources' });
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
.TitleText{
    color: white;
    font-size: 12px;
}
.typingText{
    font-size: 10px;
    color: white;
}
</style>