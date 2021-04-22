<template>
    <div style="position:absolute; height:100%; width:100%; left:0%;" class="d-flex flex-row">
   
   <v-btn icon color="#ffffff" @click="goBack" style="position:absolute;background:#3C87CD;top:2%; left:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

    <div v-if="!that.$root.showMemberBoard && that.$root.liveIsOn" class="px-2 py-1 appBox" style="background:white; position:absolute;top:0;right:0;z-index:89999999999;">
        <v-btn icon class="mx-1" @click="that.$root.showMemberBoard = true" >
                     
                     
                <v-icon>las la-user-friends </v-icon>
             
             
                        </v-btn>
    </div>


                                     <div class=" d-flex flex-row" style="align-items:center; justify-content:center;background:transparent;height:100%; width:100%; overflow-y:auto; overflow-x:hidden;" >

                                    
                                      
                                      <template v-if="this.$root.liveBoardContent == 'action_list'">
                                          
                                         

                                   

                             <div class=" col-4 col-lg-2 px-2 my-0 py-2 " style="z-index:9999999;">
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px;background:white;" @click.stop="selectAction('screen_sharing')">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                        <v-badge
               dot
               v-if="that.$root.remoteScreen && that.$root.remoteLiveHappening"
                color="green">
                <i style="font-size:30px;"  class="mdi mdi-monitor-share"></i>
              </v-badge>

                <i style="font-size:30px;" v-else  class="mdi mdi-monitor-share"></i>
                                      
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Share Screen</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>


                              <div class=" col-4 col-lg-2 px-2 my-0 py-2 " style="z-index:9999999;">
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px;background:white;" @click.stop="selectAction('live_coding')">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <v-badge
               dot
               v-if="that.$root.remoteCode  && that.$root.remoteLiveHappening"
                color="green">
                <i style="font-size:30px;" class="las la-terminal"></i>
              </v-badge>

                <i style="font-size:30px;" v-else class="las la-terminal"></i>
                                     
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Live Code</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>

                                      </template>


                                 <template v-if="this.$root.liveBoardContent == 'audio_speaker'">

                                   

                                       <!-- shows when RTC is connecting -->

                   <div class="col-12 text-center"    v-if="this.$root.connectingToSocket == true">

                 <div v-if="this.$root.roomNotExist && this.$root.roomCheckingInitaited">

               <div class="py-2">
               <v-progress-circular indeterminate color="#3C87CD"></v-progress-circular>
                   </div>

                 <div>
                 <span style="font-size:14px; color:white;">{{ $t('space.wait_for_admin') }}</span>
                 </div>

                  </div>

                   <div v-if="!this.$root.roomNotExist">

                  <div class="py-2">
                      <v-progress-circular indeterminate color="#3C87CD"></v-progress-circular>
                   </div>

                   <div>
                    <span style="font-size:14px; color:white;">{{ $t('general.connecting') }}...</span>
                       </div>

                            </div>



                              </div>
                            <!-- ends -->


                               <!-- show when user is disconnected -->
               <div class="col-12 text-center"    v-if="this.$root.connectingToSocket == 'disconnected'">

               <div>

               <div class="py-2">
              <v-progress-circular indeterminate color="#3C87CD"></v-progress-circular>
               </div>

                 <div>
               <span style="font-size:14px; color:white;">{{ $t('space.disconnected_info') }}</span>
                 </div>




               </div>




                 </div>

        <!-- ends -->



                              <div class="text-center"    v-if="this.$root.connectingToSocket == false && this.$root.liveIsOn">
                              <div     :class="that.$root.speakingUser.speaking ? 'circle-ripple' : '' " :style="imageStyleExtra(120,that.$root.speakingUser)">
                           </div> 
                           

                           <div style="font-size:14px; color:white;" class="mt-2"> {{that.$root.speakingUser.name}} </div>
                       
                            </div>


                                 </template>

                       
                                    
   
                                   </div>

                              
                              <!-- side info bar -->
                              <v-slide-x-reverse-transition>
                                    <div v-if="that.$root.showMemberBoard" class="scrollerinfo offset-lg-8 col-lg-4 py-0 pb-2" style=" border-left:1px solid #c5c5c5;background:white;height:100%; overflow-y:auto; z-index:9999999999; position:absolute; overflow-x:hidden;" >
                                      
                                      <div class="row">

                                          <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky;background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
                         <div class=" mr-1 col-2 px-1 py-0">
                           <v-btn icon @click="that.$root.showMemberBoard = false" >
                            <v-icon>mdi mdi-close</v-icon>
                               </v-btn>
                             </div>
          
                            <div class="col-8 py-0 text-center">
                            <span style="font-size:13px; font-family:MediumFont;">Active Members</span> (<span style="font-size:12px;">{{this.$root.allAudioParticipant.length + 1 }}</span>)
                           </div>
              
                               <div class="col-2 py-0  text-right">
                             
                            </div>
          
                          </div> 

                             
                               <div class="col-12 py-2 d-flex flex-row" style="align-items:center; border-bottom:1px solid #c5c5c5;">
                                  <div class="col-3 mr-2 py-0">
                                <div    :style="imageStyle(40,that.$root.authProfile)">
                                </div> 
                                  </div>
                                
                              <div class="col-7 py-0">
                            <span style="font-size:13px;">{{that.$root.authProfile.name}}</span>
                                    </div>

                                    <div class="col-2 text-right py-0">
                                   <v-icon v-if="that.$root.localAudioMuted">las la-microphone-slash</v-icon>

                                           <v-icon v-else>las la-microphone</v-icon>
                                    </div>
                              </div>
                              

                                <div  v-for="(user,index) in this.$root.allAudioParticipant" :key="index" class="col-12 py-2 d-flex flex-row" style="align-items:center; border-bottom:1px solid #c5c5c5;">
                                  <div class="col-3 mr-2 py-0">
                               <div    :style="imageStyle(40,user[0].profile)">
                                </div> 
                                  </div>
                                
                              <div class="col-7 py-0">
                            <span style="font-size:13px;">{{user[0].profile.name}}</span>
                                    </div>

                                    <div class="col-2 text-right py-0">
                                    <v-icon v-if="user[0].profile.muted">las la-microphone-slash</v-icon>

                                           <v-icon v-else>las la-microphone</v-icon>
                                    </div>
                              </div>
                              


                             

                                      </div>
                                    
                                       
                                    
                                   </div>
                              </v-slide-x-reverse-transition>

                              <!-- ends -->

                              <!-- bottom bar -->

                               <div v-if="this.$root.liveIsOn" class="col-12 py-2 d-flex flex-row" style="background:white;height:60px; overflow-y:auto; z-index:999999999; left:0; bottom:0; position:absolute; overflow-x:hidden;" >
                                     
                                    <div class="col-4 py-0">
                             

                                         <template v-if="that.$root.localAudioMuted">
                                           <v-btn  @click.stop="unmuteAudio()" icon >
                                          <v-icon>las la-microphone-slash</v-icon>
                                          </v-btn>

                                         </template>

                                        <template  v-else>

                                           <v-btn @click.stop="muteAudio()" icon >
                                         
                                         <v-icon>las la-microphone</v-icon>
                                          </v-btn>
                                          
                                          </template>                                        
                                         

                                    </div>
                                     <div class="col-4 py-0 text-center" style="background:white;">
                                         
                                    </div>
                                     <div class="col-4 py-0 text-right">
                                  
                                        <v-btn @click.stop="toggleView" icon style="z-index:999999999999999;" >
                                        
                                           
                                          
                                        <v-icon>mdi mdi-monitor-share</v-icon>
                                         
                                          </v-btn>
                                    </div>
  
                                    
                                   </div>

                              <!-- ends -->

                              <!-- hang up btn -->
                              <div class="text-center" v-if="this.$root.liveIsOn" style="position:absolute;bottom:3%; left:0; width:100%;" >
                                 <v-btn @click="closeConnections" fab style=" z-index:999999999999;background:white;"><v-icon color="#df4759">mdi mdi-phone-hangup</v-icon></v-btn>
                              </div>
                              
                             <!-- ends -->
                                     </div>
</template>
<script>



import VueScreen from 'vue-screen'
Vue.use(VueScreen, 'bootstrap')

export default {
   data(){
      
        return{
          liveBoardContent:'action_list',
          showMemberBoard:false,
          that:this,
          
        }
    },
     computed:{
         
        
     
       },
       mounted(){

         this.$root.livesessionComponent = this;

           this.$root.componentIsLoading = false;

           this.$root.liveSessionIsOpen
      
      if(this.$root.liveIsOn){

         this.$root.liveBoardContent = 'audio_speaker'

       


          

      }else{
        this.$root.liveBoardContent = 'action_list'
      }


      // start call 
        this.selectAction('voice_chat')
   
       },
    methods:{
       setZoomer:function(){
     
       },
      muteAudio:function(){

      if(this.$root.audioconnection){

         this.$root.localAudioMuted = true;

           var localStream = this.$root.audioconnection.attachStreams[0];
            localStream.mute('audio');

      }
        
           

      },
      unmuteAudio:function(){

         if(this.$root.audioconnection){
         this.$root.localAudioMuted = false;

             var localStream = this.$root.audioconnection.attachStreams[0];
            localStream.unmute('audio');
         }
             
        

      },

       goBack:function(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

          this.$root.chatComponent.liveSessionIsOpen = false;
       },
       toggleView:function(){
          
          if(this.$root.liveBoardContent == 'action_list'){
             if(this.$root.liveIsOn){

                this.$root.liveBoardContent = 'audio_speaker';

             }else{
               this.$root.liveBoardContent == 'action_list'
             }
          }else{
            this.$root.liveBoardContent = 'action_list' 
          }
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

   this.$root.dataconnection.closeSocket();



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

        this.$root.dataconnection = undefined;

        this.$root.screenSharingOn = false;
        this.$root.liveIsOn = false;
        this.$root.showVideoScreen = false;
        this.$root.codeIsLive = false;
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

        this.$root.manuallyClosed = true;

        this.goBack();
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
        imageStyle:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
       
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
       
          return styleString;
      }

      

  },
   imageStyleExtra:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;  border:5px solid #3C87CD; margin-top:-50px;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
       
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;  border:5px solid #3C87CD; margin-top:-50px;";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
       
          return styleString;
      }

      

  },
       selectAction:function(type){
         this.$root.manuallyClosed = false;

           if(type == 'voice_chat'){
              
              this.$root.liveBoardContent = 'audio_speaker';
              this.connectAudio();
              this.$root.sendLiveSignal('audio');
              

           }

            if(type == 'screen_sharing'){
                  this.$root.liveBoardContent = 'audio_speaker';
                  this.connectScreen();
               
            }

             if(type == 'live_coding'){
                  this.$root.liveBoardContent = 'audio_speaker';
                   this.connectAudio();
                   this.$root.fromLiveSession = true;
                    this.$root.chatComponent.liveSessionIsOpen = false;
                    this.$root.codeIsLive = true;
                       this.$root.sendLiveSignal('code');
                  this.$router.push({ path: '/channels/' + this.$root.selectedSpace.space_id +'/editor' });
            }

       },
       checkIfMaster: function(){

          if(this.$root.selectedSpace.type == 'Direct'){
                 return true
             }
     
      let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{
   
             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

            

             return userMemberData[0].is_admin;

           }else{
              return false
           }


      },
      connectAudio:function(){
           this.$root.remoteLiveHappening = true;

            this.$root.remoteAudio = true;

            this.$root.liveIsOn = true;

    if(this.$root.audioconnection == undefined){

        this.$root.setAudioConnection();
        this.$root.setDataConnection();

       
                  this.$root.checkAudioRoomState(true);

              
               

         this.$root.sendLiveSignal('audio');

           
          
        }else{

         this.$root.sendLiveSignal('audio');

      //  this.$root.screenSharingOn = true; 

      
        
    }

    
      },
      connectScreen:function(){

           if(this.$root.connection == undefined){


             this.$root.setSreenShareConnection();

             this.$root.remoteLiveHappening = true;

             this.$root.remoteScreen = true;

          
         

           if(this.checkIfMaster()){

              if(this.$screen.lg){

              this.$root.checkScreenRoomState(true);

              

              }else{

                this.$root.chatComponent.showAlert('Oops!','Screen sharing not supported on mobile yet','error','bottomRight',10000)

                 this.$root.checkScreenRoomState(false);
              }
  

               }else{
                  this.$root.checkScreenRoomState(false);

                   this.$root.chatComponent.showAlert('Please wait!','Joining screen sharing session','info','bottomRight',5000)
                   
               }

          this.$root.showVideoScreen = true;

          

          this.$root.screenSharingOn = true;
          
          this.$root.liveIsOn = true;
          

          

           }else{
             
             this.$root.screenSharingOn = true; 

             this.$root.remoteLiveHappening = true;
            
             this.$root.showVideoScreen = true;

           

             this.$root.remoteScreen = true;
               this.$root.liveIsOn = true;

            
           }

         
         this.connectAudio();

      }
    }
}
</script>
<style scoped lang="scss">
.scrollerinfo::-webkit-scrollbar {
  width: 6px;
}


.scrollerinfo::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  outline: 1px solid darkgrey;
}
.appBox{
    cursor: pointer;
}
$color: #3C87CD;
.circle-ripple {
  background-color: #3C87CD;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  animation: ripple 0.7s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba($color, 0.3),
                0 0 0 1em rgba($color, 0.3);
  }
  100% {
    box-shadow: 0 0 0 1em rgba($color, 0.3),
                0 0 0 3em rgba($color, 0.3);
  }
}
</style>