<template>
    <div  style="position:fixed;height:100%;background:#F5F5FB; top:0; left:0; width:100%; z-index:9999999999999;">

        <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto; ">
         <top-bar></top-bar>
        </div>


       <!-- ends -->

       <!-- chat content -->

         <!-- large screens -->

        <div class=" col-lg-10 py-0 px-0 offset-lg-1 d-lg-block d-none card " style=" overflow-y:hidden;position:absolute; height:86%; top:10%; overflow-y:auto; overflow-x:hidden; background:white;" >




                   <div class="py-2"  style="height:100%; width:28%; left:0%; position:absolute; border-right:1px solid #c5c5c5;">

                         <div class="row  px-2">

                     
                        <div class="col-12 py-1 pb-0 mb-0 text-center d-flex flex-row">

                              <v-text-field
                       style="font-size:13px;"
                      placeholder="Search"
                      filled
                      dense

                     rounded
                     ></v-text-field>

                        <v-btn icon @click="showCreateChannel"><v-icon>mdi mdi-chat-plus-outline</v-icon></v-btn>
                           </div>
                       <v-slide-x-reverse-transition>
                           <div v-if="chatbarContent == 'chat_list'" class="col-12 mt-n3 px-3 py-0">
                                     <chat-list></chat-list>
                           </div>

                          </v-slide-x-reverse-transition>

                            <!-- create channel -->
                        
                        <v-slide-x-reverse-transition>
                            <div v-if="chatbarContent == 'create_channel'" class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; overflow-x:hidden; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;" >
                                  <create-channel></create-channel>
                            </div>
                          </v-slide-x-reverse-transition>
                            <!-- ends -->
                         
                       
                         </div>

                         


                   </div>

                   <div class="  px-0 py-0" style="height:100%; width:72%; left:28%; position:absolute;overflow-x:hidden; overflow-y:hidden;">

                      <div class="row py-0">

                           <!-- chat view -->
                           <template v-if="chatIsOpen">
                              <div class="col-12 py-1" style=" background:#ffffff; border-bottom:1px solid #c5c5c5; left:0; position:absolute; top:0%;z-index:999999999999;" >
                              <chat-top></chat-top>
                            </div>
                            <div class="col-12 scroller" style="background:#E1F0FC;  height:93%; left:0; position:absolute; z-index:99; top:0%;padding-top:80px; padding-bottom:130px;  overflow-y:auto;" >


                              <chat-messages></chat-messages>



                            </div>

                             <div class="col-12 py-1" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:absolute; bottom:0%;z-index:999999999999;" >
                                  <chat-bottom></chat-bottom>
                            </div>
                           </template>
                      
                            <!-- ends -->
                            <!-- chat side board -->
                            <template v-else >

                            <div class="col-12 d-flex flex-column" style="background:#ffffff; z-index:9999999999999999999; overflow-x:hidden; align-items:center;justify-content:center;  height:100%; left:0; position:absolute; z-index:99; top:0%;" >

                                <img src="/imgs/chat_side.svg" height="250px">

                                <div class="d-flex flex-column mt-5 px-5" style="align-items:center;justify-content:center;">
                                    <blockquote class="fill" style="font-family:BodyFont; font-size:15px; color:black;">Knowing is not enough; we must apply. Wishing is not enough; we must do.</blockquote>
 
                            <p class="text-center" style="font-family:HeaderFont;font-size:15px;">
                                 - Rob Siltanen
                              </p>
                                </div>

                            </div>


                               
                           </template>

                           <!-- ends -->


                            <!-- code editor -->
                            
                           
                               <div v-if="chatIsOpen && chatInnerConent == 'code_editor'"  class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:absolute; height:93%; top:7%;z-index:9999999999999;" >
                                  <code-editor-chat></code-editor-chat>
                            </div>

                            

                            <!-- ends -->

                             <!-- image viewer -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'image_viewer'" class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:absolute; height:93%; top:7%;z-index:9999999999999;" >
                                  <image-viewer></image-viewer>
                            </div>

                            <!-- ends -->

                              <!-- channel sidebar -->

                               <v-slide-x-reverse-transition>

                               <div  v-if="chatIsOpen && chatInnerSideBar" class="col-12 py-0 px-0" @click="goBack" style="overflow-x:hidden; background: rgba(27, 27, 30, 0.32); border-top:1px solid #c5c5c5; left:0; position:absolute; height:93%; top:7%;z-index:9999999999999;" >
                                   <div style="position:absolute; height:100%; width:70%; left:30%;" >

                                    <div  @click.stop="chatInnerSideBar = true" class="scrollerinfo offset-lg-6" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden;" >
                                     
                                      <v-slide-x-reverse-transition>
                                        <channel-info v-if="innerSideBarContent == 'channel_info'" ></channel-info>
                                      </v-slide-x-reverse-transition>

                                         <v-slide-x-reverse-transition>
                                    
                                        <channel-edit v-if="innerSideBarContent == 'channel_edit'"></channel-edit>

                                         </v-slide-x-reverse-transition>

                                          <v-slide-x-reverse-transition>
                                        
                                        <sub-channels v-if="innerSideBarContent == 'sub_channels'"></sub-channels>

                                          </v-slide-x-reverse-transition>

                                           <v-slide-x-reverse-transition>

                                        <add-sub-channel v-if="innerSideBarContent == 'add_sub_channel'"></add-sub-channel>

                                           </v-slide-x-reverse-transition>
                                    
                                   </div>

                                     </div>
                               </div>
                               </v-slide-x-reverse-transition>

                            <!-- channel sidebar -->

                            <!-- live session -->

                             <v-fade-transition>

                            <div v-if="chatIsOpen && !chatInnerSideBar && liveSessionIsOpen" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); border-top:1px solid #c5c5c5; left:0; position:absolute; height:93%; top:7%;z-index:9999999999999;" >
                                    <live-session></live-session>
                               </div>
                               </v-fade-transition>

                            <!-- ends -->
                      </div>

                           <v-btn  @click="showCodeEditor" v-if="chatIsOpen" medium fab color="#3C87CD"  class="d-lg-inline-block d-none" style="z-index:99999999;  position:absolute;  bottom:12%; right:1%; ">

                               <v-icon style="font-size:25px; color:white;">las la-code</v-icon>

                              </v-btn>

                   </div>




        </div>

        <!-- ends -->

        <!-- smaller and medium screens -->
             <div class=" col-12 py-0  d-lg-none" style=" position:absolute; height:100%; top:0%; left:0; overflow-y:auto; overflow-x:hidden; background:white;" >

             <template v-if="!chatIsOpen">

                <!-- chat list component -->
                 <v-slide-x-reverse-transition>
                <div v-if="chatbarContent == 'chat_list'" style="position:absolute; width:100%; height:92%;top:8%;left:0;" class="pt-2 pt-md-0">
                  <div class="col-12 px-3">
                    <chat-list></chat-list>
                  </div>
                </div>
                 </v-slide-x-reverse-transition>

                <!-- ends -->
                 
                   <!-- create channel -->

                       <v-slide-x-reverse-transition>

                            <div  v-if="chatbarContent == 'create_channel'" class="col-12 py-0 px-0" style="background:#ffffff; left:0; position:fixed; height:100%; top:0%;z-index:9999999999999;" >
                                  <create-channel></create-channel>
                            </div>
                        </v-slide-x-reverse-transition>

                      <!-- ends -->


             </template>
               

            <!-- chat content -->

           

              

                   <template v-if="chatIsOpen">

              <div class="row py-0">
                            <div class="col-12 py-1" style=" background:#ffffff; border-bottom:1px solid #c5c5c5; left:0; position:fixed; top:0%;z-index:999999999999;" >
                              <chat-top></chat-top>
                            </div>
                            <div class="col-12 scroller px-1" style="background:#E1F0FC; overflow-x:hidden; height:90%; left:0; position:fixed; z-index:999999999; top:0%;padding-top:80px; padding-bottom:130px;  overflow-y:auto;" >


                              <chat-messages></chat-messages>



                             <v-btn @click="showCodeEditor" v-if="chatIsOpen"   fab color="#3C87CD"  style="z-index:9999999999;  position:fixed;  bottom:15%; right:2%; ">

                               <v-icon style="font-size:25px; color:white;">las la-code</v-icon>

                              </v-btn>




                            </div>

                             <div class="col-12 py-1 px-2" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:fixed; bottom:0%;z-index:9999999999;" >
                                  <chat-bottom></chat-bottom>
                            </div>


                           <!-- code editor -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'code_editor'"  class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  <code-editor-chat></code-editor-chat>
                            </div>

                            <!-- ends -->



                                <!-- image viewer -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'image_viewer'"  class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  <image-viewer></image-viewer>
                            </div>

                            <!-- ends -->


                              <!-- channel sidebar -->

                               <div v-if="chatIsOpen && chatInnerSideBar" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.32);  left:0; position:fixed; height:100%; top:0%;z-index:99999999999999999;" >
                                   <div style="position:absolute; height:100%; width:100%; left:0%;" >

                                    <div class="scrollerinfo col-md-6 offset-md-6 px-0 py-0 pb-2" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden;" >
                                     
                                    
                                         <v-slide-x-reverse-transition>
                                        <channel-info v-if="innerSideBarContent == 'channel_info'" ></channel-info>
                                      </v-slide-x-reverse-transition>

                                         <v-slide-x-reverse-transition>
                                    
                                        <channel-edit v-if="innerSideBarContent == 'channel_edit'"></channel-edit>

                                         </v-slide-x-reverse-transition>

                                          <v-slide-x-reverse-transition>
                                        
                                        <sub-channels v-if="innerSideBarContent == 'sub_channels'"></sub-channels>

                                          </v-slide-x-reverse-transition>

                                           <v-slide-x-reverse-transition>

                                        <add-sub-channel v-if="innerSideBarContent == 'add_sub_channel'"></add-sub-channel>

                                           </v-slide-x-reverse-transition>
                                    
                                   </div>

                                     </div>
                               </div>
                                
                            <!-- channel sidebar -->

                             <!-- live session -->

                            <div v-if="chatIsOpen && !chatInnerSideBar && liveSessionIsOpen" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); left:0; position:fixed; height:100%; top:0%;z-index:9999999999999;" >
                                    <live-session></live-session>
                               </div>

                            <!-- ends -->

                              
                  </div>
              
            </template>
            

               

                

             <!-- ends -->


        <!-- floating add button -->



     <v-btn  fab color="#3C87CD" @click="showCreateChannel" class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">mdi mdi-chat-plus-outline</v-icon>

     </v-btn>


       <!-- ends -->

        </div>
         <!-- ends -->

       <!-- ends -->

       <!-- side bar -->


   <v-slide-x-transition>
   <div class="col-12  py-0 px-0" style="position:absolute; width:100%; height:100%; z-index:9999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showSideBar = false" v-if="that.$root.showSideBar">

   <div style="position:absolute; height:100%; width:70%; left:0;" >

     <div class="col-md-6 col-lg-3 pt-2" style="background:white;height:100%;" @click.stop="that.$root.showSideBar = true">
        <sidebar></sidebar>
     </div>

   </div>

     </div>
   </v-slide-x-transition>

       <!-- ends -->


    </div>
</template>
<script>

import '../../bootstraps/globalPackage'

 const TopBar = () => import(
    /* webpackChunkName: "top-bar-chat" */ './TopBar.vue'
  );
  const ChatTop = () => import(
    /* webpackChunkName: "ChatTop" */ './ChatTop.vue'
  );
  const ChatBottom = () => import(
    /* webpackChunkName: "ChatBottom" */ './ChatBottom.vue'
  );

  const ChatList = () => import(
    /* webpackChunkName: "ChatList" */ './ChatList.vue'
  );

  const ChatMessages = () => import(
    /* webpackChunkName: "ChatMessages" */ './ChatMessages.vue'
  );
  
  const CodeEditorChat = () => import(
    /* webpackChunkName: "CodeEditorChat" */ './CodeEditorChat.vue'
  );
  
  const ImageViewer = () => import(
    /* webpackChunkName: "ImageViewer" */ './ImageViewer.vue'
  );

    const ChannelInfo = () => import(
    /* webpackChunkName: "ChannelInfo" */ './ChannelInfo.vue'
  );

    const ChannelEdit = () => import(
    /* webpackChunkName: "ChannelEdit" */ './ChannelEdit.vue'
  );

     const SubChannels = () => import(
    /* webpackChunkName: "SubChannels" */ './SubChannels.vue'
  );

   const CreateChannel = () => import(
    /* webpackChunkName: "CreateChannel" */ './CreateChannel.vue'
  );

  const LiveSession = () => import(
    /* webpackChunkName: "LiveSession" */ './LiveSession.vue'
  );

  const AddSubChannel = () => import(
    /* webpackChunkName: "AddSubChannel" */ './AddSubChannel.vue'
  );
export default {
     data () {
      return {
        that:this,
        chatIsOpen: false,
        chatbarContent:'chat_list',
        liveSessionIsOpen:false,
        chatInnerSideBar:false,
        innerSideBarContent:'',
       chatInnerConent:'',
      }
    },
    mounted(){
     this.$root.showSideBar = false;
     this.$root.chatComponent = this;

     this.controlChatPath();
    },
    components: {
        TopBar,
        ChatTop,
        ChatBottom,
        ChatList,
        ChatMessages,
        CodeEditorChat,
        ImageViewer,
        ChannelInfo,
        ChannelEdit,
        SubChannels,
        CreateChannel,
        LiveSession,
        AddSubChannel
    },
     methods:{
       controlChatPath:function(){
           if(this.$route.params.space_id != undefined){

             this.chatIsOpen = true;

           }
       },
       goBack:function(){

           window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
           this.chatInnerSideBar = false;
       },
        showCreateChannel: function(){

            this.$router.push({ path: '/channels/create' });

          this.chatbarContent = '';
          this.chatInnerConent = '';

          setTimeout(() => {
              this.chatbarContent = 'create_channel';
          }, 500);
           
         
        },
        showCodeEditor:function(){
       
            this.$router.push({ path: '/channels/space_id/editor' });
        }
     }
}
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 6px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
.scrollerinfo::-webkit-scrollbar {
  width: 6px;
}


.scrollerinfo::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  outline: 1px solid darkgrey;
}
</style>