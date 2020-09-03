<template>
     <div class="row py-1 my-0 px-1" >
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
                <v-icon>mdi-monitor-screenshot</v-icon>
              </v-btn>
            </template>

           <v-card tile flat class="py-2 text-left px-4" style="width:auto;  background:white;" @click="liveCoding">
              <v-icon>mdi-monitor-dashboard mdi-18px</v-icon> <span style="font-size:12px;">Live Coding</span>
           </v-card>
           <v-card  tile flat class="py-2 text-left px-4" style="width:auto; background:white;" @click="screenSharing">
             <v-icon>mdi-monitor-cellphone mdi-18px</v-icon> <span style="font-size:12px;">Share Your Screen</span>
           </v-card>
            <v-card  tile flat class="py-2 text-left px-4" style="width:auto; background:white;" @click="initaiteAudioConf">
             <v-icon>mdi-microphone mdi-18px</v-icon> <span style="font-size:12px;">Audio Conference</span>
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
        }
    },
     components: {
   
  },
    mounted(){
     
    },
    methods:{
       goBack() {
            this.$router.push({ path: '/space/chat-list'});
        
        },
        liveCoding:function(){
           
           this.$root.codeIsLive = true;
            this.$root.showChatBottom = false;
             this.$root.showCodeBox = true;
             this.initaiteAudioConf();
        },
        screenSharing: function(){

           if(this.$root.connection == undefined){


             this.setSreenShareConnection();

          
          this.checkScreenRoomState();

          this.$root.showVideoScreen = true;

          this.$root.screenSharingOn = true;
          
          this.$root.showUserBoard = true;

           if(this.$root.audioconnection == undefined){
             this.setAudioConnection();
              this.checkAudioRoomState();
           }

           }

          


        },
        initaiteAudioConf: function(){

    if(this.$root.audioconnection == undefined){

        this.setAudioConnection();

         this.checkAudioRoomState();

            this.$root.screenSharingOn = true;
          
          this.$root.showUserBoard = true;

    }
        
        },
        getAllConnectedUsers(){

           let checkUserInterval = null;

           checkUserInterval = setInterval(()=>{

            
      if(this.$root.audioconnection == undefined){
       
       clearInterval(checkUserInterval);
      }else{

          let fullUsers = [];

this.$root.audioconnection.getAllParticipants().forEach((remoteUserId) => {
	var user = this.$root.audioconnection.peers[remoteUserId];
	   
      fullUsers.push([user.extra,user.userid]);

});  
   this.$root.allAudioParticipant = fullUsers;

     
     this.$root.allAudioParticipant.forEach((user)=>{
        user[0].muted = false;
     });


      }
      
         

          }, 2000);

         


        },
         openScreenRoom: function(){    
         
           
        let _this = this;
      
     this.$root.connection.open('screen' + this.$route.params.spaceId, function() {
       
        console.log(_this.$root.connection.userid)
         console.log('screen created')
    });

      },
      joinScreenRoom: function(){    
         
           
        let _this = this;
      
     this.$root.connection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: true
    };

    this.$root.connection.join('screen' + this.$route.params.spaceId);

      },
      checkScreenRoomState: function(){
      
       let _this = this;
       
      

         this.$root.connection.openOrJoin('screen' + this.$route.params.spaceId, function(isRoomExist, roomid) {
        if (isRoomExist === false && this.$root.connection.isInitiator === true) {
            // if room doesn't exist, it means that current user will create the room
            _this.openScreenRoom();
        }

        if(isRoomExist) {
           
           
        }

       
    });


       
        

      },
      openAudioRoom: function(){    
         
           
        let _this = this;
      
        this.$root.audioconnection.open('audio' + this.$route.params.spaceId, function() {

            
        
    });

    this.$root.connectingToSocket = false;
    
  
      },
      joinAudioRoom: function(){    
         
           
        let _this = this;
        
         this.$root.audioconnection.join('audio' + this.$route.params.spaceId);

        

        
    

      },
      checkAudioRoomState: function(){
      
       let _this = this;

         

             this.$root.audioconnection.openOrJoin('audio' + this.$route.params.spaceId, function(isRoomExist, roomid) {
        if (isRoomExist === false && _this.$root.audioconnection.isInitiator === true) {
            // if room doesn't exist, it means that current user will create the room
            _this.openAudioRoom();
        }

        if(isRoomExist) {
           
           _this.$root.connectingToSocket = false;
           
           
        }

       _this.getAllConnectedUsers();
    });

 


          
      
      },
      setAudioConnection(){
        
        let _this = this;

        this.$root.audioconnection = new RTCMultiConnection();

          this.$root.audioconnection.enableLogs = false;

// by default, socket.io server is assumed to be deployed on your own URL
this.$root.audioconnection.socketURL = 'https://sandbox.citonhub.com/';


this.$root.audioconnection.socketMessageEvent = 'audio-conference';

  this.$root.audioconnection.extra = {
       profile: this.$root.authProfile,
      joinedAt: (new Date).toISOString()
         };

         this.$root.audioconnection.socketCustomParameters = '&extra=' + JSON.stringify(this.$root.audioconnection.extra);

this.$root.audioconnection.session = {
    audio: true,
    video: false
};

this.$root.audioconnection.mediaConstraints = {
    audio: true,
    video: false
};

this.$root.audioconnection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: false
};

// https://www.rtcmulticonnection.org/docs/iceServers/
// use your own TURN-server here!

this.$root.audioconnection.iceServers = [{
    'urls': [
        'stun:stun.l.google.com:19302',
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
        'stun:stun.l.google.com:19302?transport=udp',
    ]
}];

this.$root.audioconnection.audiosContainer = document.getElementById('audios-container');
this.$root.audioconnection.onstream = function(event) {
    var width = parseInt(this.$root.audioconnection.audiosContainer.clientWidth / 2) - 20;
    var mediaElement = getHTMLMediaElement(event.mediaElement, {
        title: event.userid,
        width: width,
        showOnMouseEnter: false
    });

    _this.$root.audioconnection.audiosContainer.appendChild(mediaElement);

    setTimeout(function() {
        mediaElement.media.play();
    }, 5000);

    mediaElement.id = event.streamid;
};

this.$root.audioconnection.onstreamended = function(event) {
    var mediaElement = document.getElementById(event.streamid);
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
    }

    _this.$root.audioconnection.onUserStatusChanged({
        userid: event.userid,
        extra: event.extra,
        status: 'online'
    });
};

  this.$root.audioconnection.onopen  = function(event) {

    _this.$root.audioconnection.onUserStatusChanged({
        userid: event.userid,
        extra: event.extra,
        status: 'online'
    });


    this.$root.audioconnection.onleave = connection.streamended = connection.onclose = function(event) {

     _this.$root.audioconnection.onUserStatusChanged({
        userid: event.userid,
        extra: event.extra,
        status: 'offline'
    });
};
};


this.$root.audioconnection.onmute = function(e) {
    if (!e.mediaElement) {
        return;
    }

    if (e.muteType === 'both' || e.muteType === 'video') {
        e.mediaElement.src = null;
        e.mediaElement.pause();
        e.mediaElement.poster = e.snapshot || 'https://cdn.webrtc-experiment.com/images/muted.png';
    } else if (e.muteType === 'audio') {
        e.mediaElement.muted = true;
    }
};

this.$root.audioconnection.onunmute = function(e) {
    if (!e.mediaElement) {
        return;
    }

    if (e.unmuteType === 'both' || e.unmuteType === 'video') {
        e.mediaElement.poster = null;
        e.mediaElement.src = URL.createObjectURL(e.stream);
        e.mediaElement.play();
    } else if (e.unmuteType === 'audio') {
        e.mediaElement.muted = false;
    }
};





      },
        setSreenShareConnection:function(){
          

       let _this = this;

        this.$root.connection = new RTCMultiConnection();

         this.$root.connection.enableLogs = false;

        this.$root.connection.socketURL = 'https://sandbox.citonhub.com/';

        this.$root.connection.socketMessageEvent = 'screen-sharing';

         this.$root.connection.extra = {
       profile: this.$root.authProfile,
      joinedAt: (new Date).toISOString()
         };

         this.$root.connection.socketCustomParameters = '&extra=' + JSON.stringify( this.$root.connection.extra);

          this.$root.connection.session = {
           screen: true,
           oneway: true
            };
        
        this.$root.connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
             };

          this.$root.connection.iceServers = [{
        'urls': [
        'stun:stun.l.google.com:19302',
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
        'stun:stun.l.google.com:19302?transport=udp',
    ]
      }];

      this.$root.connection.videosContainer = document.getElementById('videos-container');

       

      this.$root.connection.onstream = function(event) {
    var existing = document.getElementById(event.streamid);
    if(existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    event.mediaElement.removeAttribute('src');
    event.mediaElement.removeAttribute('srcObject');
    event.mediaElement.muted = true;
    event.mediaElement.volume = 0;

    var video = document.createElement('video');

    try {
        video.setAttributeNode(document.createAttribute('autoplay'));
        video.setAttributeNode(document.createAttribute('playsinline'));
    } catch (e) {
        video.setAttribute('autoplay', true);
        video.setAttribute('playsinline', true);
    }

   
   if(event.type === 'local') {
      video.volume = 0;
      try {
          video.setAttributeNode(document.createAttribute('muted'));
      } catch (e) {
          video.setAttribute('muted', true);
      }
    }
    video.srcObject = event.stream;

    var width = innerWidth - 80;
    var mediaElement = getHTMLMediaElement(video, {
        title: event.userid,
        buttons: ['full-screen'],
        showOnMouseEnter: false,
      
    });

    _this.$root.connection.videosContainer.appendChild(mediaElement);

    setTimeout(function() {
        mediaElement.media.play();
    }, 5000);

    mediaElement.id = event.streamid;
};

this.$root.connection.onstreamended = function(event) {
    var mediaElement = document.getElementById(event.streamid);
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);

        if(event.userid === _this.$root.connection.sessionid && !_this.$root.connection.isInitiator) {
          alert('Broadcast is ended. We will reload this page to clear the cache.');
          location.reload();
        }
    }
};

this.$root.connection.onMediaError = function(e) {
    if (e.message === 'Concurrent mic process limit.') {
        if (DetectRTC.audioInputDevices.length <= 1) {
            alert('Please select external microphone');
            return;
        }

        var secondaryMic = DetectRTC.audioInputDevices[1].deviceId;
        _this.$root.connection.mediaConstraints.audio = {
            deviceId: secondaryMic
        };

        _this.$root.connection.join(_this.$root.connection.sessionid);
    }
};





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