<template>
    <div  style="position:fixed;height:100%;background:#F5F5FB; top:0; left:0; width:100%; z-index:999999999;">

        <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto; ">
         <top-bar></top-bar>
        </div>


       <!-- ends -->

       <!-- chat content -->

         <!-- large screens -->

        <div class=" col-lg-10 py-0 px-0 offset-lg-1 d-lg-block d-none card " style=" overflow-y:hidden;position:absolute; height:86%; top:10%; overflow-y:hidden; overflow-x:hidden; background:white;" >




                   <div class="py-0"  style="height:100%; width:28%; left:0%; position:absolute; overflow-y:hidden; overflow-x:hidden; border-right:1px solid #c5c5c5;">

                         <div class="row  px-2">

                       
                           <template v-if="chatbarContent == 'chat_list'">

                             <div class="col-12 py-2 px-3 pb-0 mb-0 text-center d-flex flex-row fixed-top" style="left:0%;height:58px;position:sticky;background:white;top:-5%;">

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

                   <DynamicScroller
    :items="this.$root.ChatList"
     :keyField="'space_id'"
    :min-item-size="36"
    ref="ChatContainer"
    :buffer="5000"
    id="ChatContainer"
      class="col-12 px-1  chatListScroller" 
       style="position:absolute; overflow-y:auto; top:0%; height:100%;left:0%;padding-top:63px;"
        >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
         item.content
        ]"
        :data-index="index"
      >

        <chat-list :source="item" ></chat-list>

          </DynamicScrollerItem>
             </template>

                </DynamicScroller>
                      
                          

                            </v-slide-x-reverse-transition>

                           </template>
                        

                          

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
                           <template v-if="chatIsOpen && that.$root.Messages != null">
                              <div class="col-12 py-1" style=" background:#ffffff; border-bottom:1px solid #c5c5c5; left:0; position:absolute; top:0%;z-index:999999999999;" >
                              <chat-top></chat-top>
                            </div>

                             <DynamicScroller
    :items="that.$root.Messages"
     v-if="that.$root.Messages.length != 0"
     :keyField="'index_count'"
    :min-item-size="36"
    ref="messageContainer"
    :buffer="2000"
    id="messageContainer"
  class="col-12 scroller" 

        style="background:#E1F0FC; background-image:url(/imgs/chat_background.png);background-size: cover;
            background-repeat: no-repeat; height:100%; left:0; position:absolute; z-index:999999; top:0%;padding-top:80px; padding-bottom:130px;  overflow-y:auto;"
  >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
         item.content
        ]"
        :data-index="index"
      >
     <chat-messages  :source="item" ></chat-messages>
    
      </DynamicScrollerItem>
    </template>

    <template #after>

       <div  class=" col-12 " style="margin-top:170px;">



      </div>
  </template>

  </DynamicScroller>
                         

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

                     <DynamicScroller
    :items="this.$root.ChatList"
     :keyField="'space_id'"
    :min-item-size="36"
    ref="ChatContainersmall"
    :buffer="5000"
    id="ChatContainersmall"
      class="col-12 px-1 " 
        style="position:absolute; width:100%; height:92%;top:8%;left:0;overflow-y:auto;" 
        >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
         item.content
        ]"
        :data-index="index"
      >

        <chat-list :source="item" ></chat-list>

          </DynamicScrollerItem>
             </template>

                </DynamicScroller>

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

              
               <!-- chat side board -->
                            <template v-if="that.$root.Messages == null" >

                            <div class="col-12 d-flex flex-column" style="background:#ffffff; z-index:9999999999999999999; overflow-x:hidden; align-items:center;justify-content:center;  height:100%; left:0; position:fixed;  top:0%;" >

                                <img src="/imgs/chat_side.svg" height="150px">

                                <div class="d-flex flex-column mt-5 px-5" style="align-items:center;justify-content:center;">
                                    <blockquote class="fill" style="font-family:BodyFont; font-size:14px; color:black;">Knowing is not enough; we must apply. Wishing is not enough; we must do.</blockquote>
 
                            <p class="text-center" style="font-family:HeaderFont;font-size:14px;">
                                 - Rob Siltanen
                              </p>
                                </div>

                            </div>


                               
                           </template>

                           <!-- ends -->

           

              

                   <template v-if="chatIsOpen && that.$root.Messages != null">

              <div class="row py-0">
                            <div class="col-12 py-1" style=" background:#ffffff; border-bottom:1px solid #c5c5c5; left:0; position:fixed; top:0%;z-index:999999999999999;" >
                              <chat-top></chat-top>
                            </div>


  <DynamicScroller
    :items="that.$root.Messages"
     v-if="that.$root.Messages.length != 0"
     :keyField="'index_count'"
    :min-item-size="36"
    ref="messageContainersmall"
    :buffer="2000"
    id="messageContainersmall"
  class="col-12 scroller px-0" 

        style="background:#E1F0FC; background-image:url(/imgs/chat_background.png);background-size: cover;
            background-repeat: no-repeat; height:100%; left:0; position:fixed; z-index:9999999; top:0%;padding-top:80px; padding-bottom:130px;  overflow-y:auto;"
  >

    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
         item.content
        ]"
        :data-index="index"
      >
     <chat-messages  :source="item" ></chat-messages>
    
      </DynamicScrollerItem>
    </template>

    <template #after>

       <div  class=" col-12 " style="margin-top:120px;">



      </div>
  </template>

  </DynamicScroller>
                      

                             <v-btn @click="showCodeEditor" v-if="chatIsOpen"   fab color="#3C87CD"  style="z-index:9999999999;  position:fixed;  bottom:15%; right:2%; ">

                               <v-icon style="font-size:25px; color:white;">las la-code</v-icon>

                              </v-btn>

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



     <v-btn  fab color="#3C87CD" @click="showCreateChannel" class="d-lg-none d-inline-block" style="z-index:99999;  position:fixed;  bottom:3%; right:3%; ">

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



import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.component('DynamicScroller', DynamicScroller)
Vue.component('DynamicScrollerItem', DynamicScrollerItem)

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
       errorLoadingMessage:false,
      }
    },
    mounted(){
     this.$root.showSideBar = false;
     this.$root.chatComponent = this;

     this.controlChatPath();
      this.fetchChatList();
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
           if(this.$route.params.spaceId != undefined){

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
        },
         fetchChatList: function(){

          if(this.$root.checkauthroot == 'auth'){

             if(this.$root.ChatList.length == 0 ){


                let storedChat = this.$root.getLocalStore('user_chat_list'+ this.$root.username);

            storedChat.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);

                     let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                     
                   this.$root.ChatList = fullList;

                     this.$root.sortChatList();

                      this.SetUnread();

                     // get all new messages

                      this.$root.updateSpaceMessages();

                 }else{
            
           
           
             axios.get('/fetch-chat-list/' + this.$root.userDeviceId)
      .then(response => {
      
      if (response.status == 200) {
         
          let responseList = response.data;
          this.$root.ChatList = responseList.channels.concat(responseList.direct_messages, responseList.pet_spaces);

           this.$root.LocalStore('user_chat_list' + this.$root.username,response.data);

         this.$root.sortChatList();

     }
       
     
     })
     .catch(error => {
       
      
     }) 

                 }
            })

             }
         
          }

        
       },
         SetUnread: function(){

            this.$root.ChatList.forEach((space)=>{

               let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + space.space_id +  this.$root.username);
  
          unreadStoredMsg.then((result)=>{
  
            if(result != null){
  
              let finalResultUnread = JSON.parse(result);


              space.unread = finalResultUnread.length;
  
            }else{
               space.unread = 0;
            }

          });

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

         // mark the space as read
           this.$root.markSpaceRead(this.$route.params.spaceId);

          }
      },

      makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
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
          resendMessages:function(){

              let unsentMsg = this.$root.getLocalStore('unsent_messages_' + this.$route.params.spaceId  + this.$root.username );

         unsentMsg.then((result)=>{

           if(result != null){

            let finalResult = JSON.parse(result);

                if(finalResult.length == 0){

                 

                }else{

                      for (let index = 0; index < finalResult.length; index++) {

                      if(this.$route.params.spaceId == finalResult[index].space_id){



                         this.$root.sendTextMessage(finalResult[index]);


                      }

                        }

                  this.$root.LocalStore('unsent_messages_' + this.$route.params.spaceId  + this.$root.username,[]);

                 
                }

           }else{

            
           }


         });

       
        

      },
        makeUserMaster: function(member){


        axios.post( '/make-user-master',{
           memberId: member.memberId,
           space_id: this.$route.params.space_id
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




       // this.liveChanges(response.data,'new_master');
      }


     })
     .catch(error => {



     })

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
          periodicUpdate: function(result){

        
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



                     response.data[0][index].index_count = this.$root.returnLastIndex() + 1;
                      response.data[0][index].id =  response.data[0][index].message_id;
                      response.data[0][index].initialSize =  200;



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
       scrollToBottom:function(){

        this.$root.scrollToBottom();
      },

      handleResults(messageArray){

          this.$root.returnedMessages = messageArray;

           let intialCount = 0;

           this.$root.returnedMessages.map((msg)=>{
               msg.id = msg.message_id
               msg.initialSize = 200
               msg.index_count = intialCount++;



           });



         return this.$root.returnedMessages;

      },

       fetchMessages:function(spaceId){
 
         // set messages to null
          this.$root.Messages = null;
          this.errorLoadingMessage = false;

         // proceed if user is logged in
         if(this.$root.checkauthroot == 'auth'){

         
        
        // sub sapce tracker
            this.$root.TrackLastSubSpace = [];

        // get the space data from local storage

          let storedMsg = this.$root.getLocalStore('full_' + spaceId + this.$root.username);

            storedMsg.then((result)=>{

               

               if(result != null ){

                 

               let finalResult = JSON.parse(result);
         
            this.$root.spaceFullData = finalResult;

         let returnedData = this.handleResults(finalResult.messages);

       this.$root.Messages = returnedData;

        this.$root.selectedSpace  = [];

       // generate unread msg and the mark as read
        this.generateUnreadMessage();

           this.$root.selectedSpace = finalResult.space;

              if(finalResult.space.type == 'SubSpace'){


                 let generalSpace = finalResult.space.gen_space;


                    this.$root.selectedGenSpaceType = finalResult.space.gen_space.type;

                  generalSpace.space_id =  finalResult.space.space_id;

                  generalSpace.type = finalResult.space.type;



                generalSpace.general_spaceId = finalResult.space.general_spaceId;




              let subSpaceData = finalResult.space.sub_space_data;




             this.$root.selectedSubSpaceName = finalResult.space.name;

             this.$root.selectedSubSpaceType = subSpaceData.type;



               generalSpace.sub_spaces = finalResult.space.sub_spaces;



               this.$root.selectedSpace = generalSpace;


              }

           this.$root.TrackLastSubSpace.push(this.$root.selectedSpace.general_spaceId, this.$route.params.spaceId);



          this.$root.selectedSpaceMembers = finalResult.members;

            // set default admin user

           this.autoMakeuserMaster();
       
            // get the message scroller component and scroll to bottom
             this.$root.msgScrollComponent = this.$refs;



       setTimeout(() => {

        
           this.$root.msgScrollComponent.messageContainer.scrollToBottom();
           this.$refs.messageContainersmall.scrollToBottom();
    

        },1500);




         
             let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + this.$route.params.spaceId  + this.$root.username);

           unreadStoredMsg.then((result)=>{

              let finalResultUnread = JSON.parse(result);

              if(this.$root.sendingMessage == false){

                 this.periodicUpdate(finalResultUnread);

              }

           });

       
       // check for unsent messages and resend


            let unsentStoredMsg = this.$root.getLocalStore('unsent_messages_' + this.$route.params.spaceId  + this.$root.username);

           unsentStoredMsg.then((result)=>{

              let finalResultunsent = JSON.parse(result);

              if(finalResultunsent != null){

                if(finalResultunsent.length == 0){

              this.resendMessages();

              }

              }else{
                this.resendMessages();

              }



           });






               }else{

                    axios.get( '/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {

      if (response.status == 200) {





     if( response.data.space.space_id == this.$route.params.spaceId ){

       this.$root.spaceFullData = response.data;


      this.$root.LocalStore('full_' +  this.$route.params.spaceId  + this.$root.username,response.data);

      this.$root.LocalStore('unread_messages_' + this.$route.params.spaceId  + this.$root.username,[]);

       let returnedData = this.handleResults(response.data.messages);

    
       this.$root.Messages = returnedData;


               this.$root.selectedSpace = response.data.space;

              if(response.data.space.type == 'SubSpace'){


                 let generalSpace =  response.data.space.gen_space;


                    this.$root.selectedGenSpaceType = response.data.space.gen_space.type;

                  generalSpace.space_id =   response.data.space.space_id;

                  generalSpace.type =  response.data.space.type;

                  generalSpace.general_spaceId =  response.data.space.general_spaceId;





              let subSpaceData =  response.data.space.sub_space_data;




             this.$root.selectedSubSpaceName =  response.data.space.name;

             this.$root.selectedSubSpaceType = subSpaceData.type;



               generalSpace.sub_spaces =  response.data.space.sub_spaces;



               this.$root.selectedSpace = generalSpace;






              }

              if(response.data.space.type == 'Bot'){

            this.botSuggestionArray = response.data.patterns;

         this.$root.LocalStore('bot_latest_suggestions' + this.$root.selectedSpace.space_id  + this.$root.username,response.data[1]);

              }

      this.$root.TrackLastSubSpace.push(this.$root.selectedSpace.general_spaceId, this.$route.params.spaceId);

       this.$root.selectedSpaceMembers = response.data.members;

       this.$root.msgScrollComponent = this.$refs;


      setTimeout(() => {

         
           this.$root.msgScrollComponent.messageContainer.scrollToBottom();
          
              this.$refs.messageContainersmall.scrollToBottom();
      

        },1000);

    }

     }


     })
     .catch(error => {

       this.errorLoadingMessage = true;

     })

               }


    if( this.$root.selectedSpace.type == 'Bot'){
      setTimeout(() => {
            this.botMessager();
      }, 2000);



      }


             if(this.$root.selectedSpace.general_spaceId != undefined){

  //      this.getMemberUpdates(this.$root.selectedSpace.general_spaceId);

          }

                });
         }

     

       }
     },
     checkForUnreadMessagesDisconnected:function(){
         
          if(this.chatIsOpen){

             let unreadStoredMsg = _this.$root.getLocalStore('unread_messages_' + this.$route.params.spaceId  + this.$root.username);

           unreadStoredMsg.then((result)=>{

              let finalResultUnread = JSON.parse(result);

              if(this.$root.sendingMessage == false){

                 this.periodicUpdate(finalResultUnread);

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
      botMessager:function(){

              if(this.$root.Messages.length == 0){

              }else{

                let storedSuggestions = this.$root.getLocalStore('bot_latest_suggestions' + this.$root.selectedSpace.space_id  + this.$root.username);

           storedSuggestions.then((result)=>{

              let finalResultUnread = JSON.parse(result);

                       if(finalResultUnread != null){

                          this.$root.botSuggestionArray = finalResultUnread;

                       }

           });
              }



        },
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

.chatListScroller::-webkit-scrollbar {
  width: 5px;
}


.chatListScroller::-webkit-scrollbar-thumb {
    background-color:#3C87CD;
  outline: 1px solid #3C87CD;
}


</style>