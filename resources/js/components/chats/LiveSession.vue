<template>
    <div style="position:absolute; height:100%; width:100%; left:0%;" class="d-flex flex-row">
   
   <v-btn icon color="#ffffff" @click="goBack" style="position:absolute;background:#3C87CD;top:2%; left:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

    <div v-if="!showMemberBoard" class="px-2 py-1 appBox" style="background:white; position:absolute;top:0;right:0;z-index:89999999999;">
        <v-btn icon class="mx-1" @click="showMemberBoard = true" >
                         <v-badge
               dot
                color="green">
                <v-icon>las la-user-friends </v-icon>
              </v-badge>
                     
                        </v-btn>
    </div>

                                     <div class=" d-flex flex-row" style="align-items:center; justify-content:center;background:transparent;height:100%; width:100%; overflow-y:auto; overflow-x:hidden;" >
                                      
                                      <template v-if="liveBoardContent == 'action_list'">
                                          
                                          <div class=" col-4 col-lg-2 px-2 my-0 py-2 ">
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px; background:white;" @click="selectAction('voice_chat')">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" class="las la-phone"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Voice Chat</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>

                                     <div class=" col-4 col-lg-2 px-2 my-0 py-2 " >
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px;margin-top:-150px;background:white;" @click="selectAction('live_coding')">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" class="las la-terminal"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Live Coding</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>

                             <div class=" col-4 col-lg-2 px-2 my-0 py-2 ">
                          <v-card class="px-1 py-1 appBox" style="height:100px;border-radius:7px;background:white;" @click="selectAction('screen_sharing')">
                              <div class="d-flex" style=" height:100%; align-items:center; justify-content:center;  width:100%;">
                                   <div class="text-center">
                                      <i style="font-size:30px;" class="las la-laptop-code"></i>
                                      <div>
                                         <span style="font-size:13px; font-family:BodyFont;">Screen Sharing</span>
                                      </div>
                                   </div>
                             </div>
                          </v-card>
                            </div>

                                      </template>


                                 <template v-if="liveBoardContent == 'audio_speaker'">

                                         <div class="text-center">
                              <div     
                        style="border-radius:50%;height:120px;width:120px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
                          background-repeat: no-repeat; border:5px solid #3C87CD; margin-top:-50px;">
                           </div> 

                           <div style="font-size:14px; color:white;" class="mt-2">Akinola Babs</div>
                            </div>

                                 </template>

                       
                                    
   
                                   </div>

                              
                              <!-- side info bar -->
                              <v-slide-x-reverse-transition>
                                    <div v-if="showMemberBoard" class="scrollerinfo offset-lg-8 col-lg-4 py-0 pb-2" style=" border-left:1px solid #c5c5c5;background:white;height:100%; overflow-y:auto; z-index:9999999999; position:absolute; overflow-x:hidden;" >
                                      
                                      <div class="row">

                                          <div class="col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row" style="position:sticky;background:white; top:0%; border-bottom:2px solid #c5c5c5;align-items:center;">
                         <div class=" mr-1 col-2 px-1 py-0">
                           <v-btn icon @click="showMemberBoard = false" >
                            <v-icon>mdi mdi-close</v-icon>
                               </v-btn>
                             </div>
          
                            <div class="col-8 py-0">
                            <span style="font-size:13px; font-family:MediumFont;">Active Members</span> (<span style="font-size:12px;">23</span>)
                           </div>
              
                               <div class="col-2 py-0  text-right">
                             
                            </div>
          
                          </div> 

                             
                               <div class="col-12 py-2 d-flex flex-row" style="align-items:center; border-bottom:1px solid #c5c5c5;">
                                  <div class="col-3 mr-2 py-0">
                                <div    
                               style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
                                background-repeat: no-repeat;">
                                </div> 
                                  </div>
                                
                              <div class="col-7 py-0">
                            <span style="font-size:13px;">Abisola James </span>
                                    </div>

                                    <div class="col-2 text-right py-0">
                                   <v-icon>las la-microphone</v-icon>
                                    </div>
                              </div>
                              

                                <div v-if="false" class="col-12 py-2 d-flex flex-row" style="align-items:center; border-bottom:1px solid #c5c5c5;">
                                  <div class="col-3 mr-2 py-0">
                                <div    
                               style="border-radius:50%;height:40px;width:40px;background-color:#c5c5c5;background-image:url(/imgs/img3.jpg);background-size: cover;
                                background-repeat: no-repeat;">
                                </div> 
                                  </div>
                                
                              <div class="col-7 py-0">
                            <span style="font-size:13px;">Abisola James </span>
                                    </div>

                                    <div class="col-2 text-right py-0">
                                   <v-icon>las la-microphone-slash</v-icon>
                                    </div>
                              </div>
                              


                             

                                      </div>
                                    
                                       
                                    
                                   </div>
                              </v-slide-x-reverse-transition>

                              <!-- ends -->

                              <!-- bottom bar -->

                               <div  class="col-12 py-2 d-flex flex-row" style="background:white;height:60px; overflow-y:auto; z-index:999999999; left:0; bottom:0; position:absolute; overflow-x:hidden;" >
                                     
                                    <div class="col-4 py-0">

                                        <v-btn icon style="z-index:999999999999999;"><v-icon>las la-microphone</v-icon></v-btn>

                                    </div>
                                     <div class="col-4 py-0 text-center" style="background:white;">
                                         
                                    </div>
                                     <div class="col-4 py-0 text-right">
                                  
                                        <v-btn icon style="z-index:999999999999999;" ><v-icon>mdi-apps</v-icon></v-btn>
                                    </div>
  
                                    
                                   </div>

                              <!-- ends -->

                              <!-- hang up btn -->
                              <div class="text-center" style="position:absolute;bottom:3%; left:0; width:100%;" >
                                 <v-btn fab color="#3C87CD" style=" z-index:999999999999;"><v-icon color="#ffffff">mdi mdi-phone-hangup</v-icon></v-btn>
                              </div>
                              
                             <!-- ends -->
                                     </div>
</template>
<script>
export default {
   data(){
        return{
          liveBoardContent:'action_list',
          showMemberBoard:false,
          
        }
    },
    methods:{
       goBack:function(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

          this.$root.chatComponent.liveSessionIsOpen = false;
       },
       selectAction:function(type){

       }
    }
}
</script>
<style scoped>
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
</style>