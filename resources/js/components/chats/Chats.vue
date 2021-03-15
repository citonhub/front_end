<template>
    <div  style="position:fixed;height:100%;background:#F5F5FB; top:0; left:0; width:100%; z-index:999999999;" >

        <!-- top bar -->
        <div class="col-12 py-0 fixed-top" style="position:sticky;width:100%;height:auto; ">
         <top-bar></top-bar>
        </div>


       <!-- ends -->

       <!-- chat content -->

       
               

<!-- 
               
  <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showUserNotification">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >
          
          <template v-if="!that.$root.followDiariesLoaded">
    <div class="d-flex"  style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
          </template>
       
      <template v-if="suggestionsContent == 'notification'">
        <notify></notify>
      </template>

      <template v-if="suggestionsContent == 'diaries'">
        <follow></follow>
      </template>
     
   

   </div>

 </div> -->

 


         <!-- large screens -->

           <!-- menu session -->

                        <v-btn fab small class="d-none d-lg-inline-block" color="#ffffff" @click="showSideBarHandler()" style="position:absolute;left:12px;top:3%;">

                            <v-badge
                   dot
                     v-if="!that.$root.authProfile.user_onboarded"
                color="green">
                 <v-icon style="font-size:22px;color:#263238;" >las la-bars</v-icon>
                   </v-badge>

                    <v-icon v-else style="font-size:22px;color:#263238;" >las la-bars</v-icon>
                           
                           </v-btn>

                       <!-- ends -->

        <div class="  py-0 px-0 d-lg-block d-none card " style=" overflow-y:hidden;position:absolute;width:90%; left:5%; height:94%; top:3%; overflow-y:hidden; overflow-x:hidden; background:white;" >

                     


                   <div class="py-0"  style="height:100%; width:28%; left:0%; position:absolute; overflow-y:hidden; overflow-x:hidden; border-right:1px solid #c5c5c5;">

                         <div class="row  px-2">



                       
                           <template v-if="chatbarContent == 'chat_list'">

                             <div class="col-12 py-2 px-2 pb-0 mb-0 text-center d-flex flex-row fixed-top" style="left:0%;height:58px;position:sticky;background:white;top:-5%;">
                             <v-btn icon ><v-icon>las la-search</v-icon></v-btn>
                        
                              <v-text-field
                       style="font-size:13px;"
                      placeholder="Search"
                      filled
                      dense
                      @input="searchChatList"
                       v-model="searchValue"
                     rounded
                     ></v-text-field>
                        <v-btn icon @click="showCreateChannel"><v-icon>mdi mdi-chat-plus-outline</v-icon></v-btn>
                     
                       
                     
                        
                           </div>
                            
           <template v-if="!this.$root.loadingChatList && !this.$root.loadingIsError">

               <DynamicScroller
    :items="this.$root.ChatList"
     :keyField="'space_id'"
     v-if="this.$root.ChatList.length > 0"
    :min-item-size="36"
    ref="ChatContainer"
       :buffer="5000"
    id="ChatContainer"
      class="col-12 px-1  chatListScroller" 
       style="position:absolute; overflow-y:auto; top:0%; height:98%;left:0%;padding-top:63px;"
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

               <template #after> 

          

        </template>


                </DynamicScroller>

                <div v-else class="col-12 px-5 text-center d-flex flex-column chatListScroller" 
       style="position:absolute; overflow-y:auto; top:0%; height:98%;left:0%;padding-top:100px;">

                    <div class="mb-3 px-3" style="font-size:13px;color:gray;font-family:BodyFont;">
                      Channel is where you teach, mentor, and earn.
                    </div>

                     <div>
                          <v-btn small  @click="showCreateChannel" color="#3C87CD" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Create a Channel</v-btn>
                     </div>

                     

                </div>
             
           </template>

             <template v-if="searchValue != ''">


                  <DynamicScroller
    :items="this.$root.searchChatList"
     :keyField="'space_id'"
    :min-item-size="36"
    v-if="this.$root.searchChatList.length > 0"
    ref="ChatContainerSearch"
    :buffer="5000"
    id="ChatContainerSearch"
      class="col-12 px-1  chatListScroller" 
       style="position:absolute; overflow-y:auto; top:0%; height:98%;left:0%;padding-top:63px;background:white;"
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

        <chat-list :source="item"  ></chat-list>

          </DynamicScrollerItem>
             </template>

                </DynamicScroller>

            <div v-else  class="col-12 px-1 text-center chatListScroller"  style="position:absolute;background:white; overflow-y:auto; top:0%; height:98%;left:0%;padding-top:63px;">

              <span style="font-size:13px;color:grey;">No result found</span>

            </div>

                     
                       </template>

            <template v-if="this.$root.loadingChatList && !this.$root.loadingIsError">

                 <div  class="col-12 d-flex " style="position:absolute; overflow-y:auto; top:0%; height:98%;left:0%;padding-top:63px;align-items:center; justify-content:center;  ">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

        
         <template v-if="!this.$root.loadingChatList && this.$root.loadingIsError">

                 <div  class="col-12 d-flex flex-column" style="position:absolute; overflow-y:auto; top:0%; height:98%;left:0%;padding-top:63px;align-items:center; justify-content:center;  ">
                 <div style="font-size:13px;color:grey;">Something went wrong</div> 
                   <v-btn  small color="#3C87CD" rounded style="text-transform:normal;font-family:BodyFont;font-size:13px;" @click="fetchChatList"> Retry </v-btn>
               </div>

            </template>
                 
                      
                          

                           

                           </template>
                        

                          

                            <!-- create channel -->
                        
                       
                            <div v-if="chatbarContent == 'create_channel'" class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; overflow-x:hidden; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;" >
                                  <create-channel></create-channel>
                                    <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                            </div>
                        
                            <!-- ends -->
                         
                       
                         </div>

                         


                   </div>

                   <div class="  px-0 py-0" style="height:100%; width:72%; left:28%; position:absolute;overflow-x:hidden; overflow-y:hidden;">

                      <div class="row py-0">

                           <!-- chat view -->
                           <template v-if="chatIsOpen && that.$root.Messages != null">
                              <div class="col-12 py-1" style=" background:#ffffff; border-bottom:1px solid #c5c5c5; left:0; position:absolute; top:0%;z-index:9999999;" >
                                
                              <chat-top></chat-top>
                            </div>

                          <div v-if="that.$root.Messages.length != 0" style="position:absolute;width:100%;height:100%; left:0%;background:#E1F0FC;">

                              <DynamicScroller
    :items="that.$root.Messages"
      
     :keyField="'index_count'"
    :min-item-size="76"
    ref="messageContainer"
     
    id="messageContainer"
  class="col-12 px-0 scrollerLg" 

        style="background:#E1F0FC; background-image:url(/imgs/chat_background.png);background-size: cover;
            background-repeat: no-repeat; height:94%; left:0; position:absolute; z-index:99999; top:0%; overflow-y:auto;"
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
     <chat-messages :screenType="'large'" :source="item" ></chat-messages>
    
      </DynamicScrollerItem>
    </template>


     <template #before >

       <div  class=" col-12 text-center" style="margin-top:80px; " >
     
        <span v-html="that.$root.selectedSpace.description" v-if="that.$root.selectedSpace.type != 'Direct'" style="font-size:13px;font-family:BodyFont;">
       
        </span>


      </div>
  </template>

    <template #after>

        <div  class=" col-12 " v-observe-visibility="visibilityChanged" style="margin-bottom:100px; ">
            
          <template v-if="that.$root.selectedSpace.type == 'Bot' ">

             <div class="row">

              <template v-if=" that.$root.botIsLoading || that.$root.sendingMessage">

                 <div elevation-1 class="col-11 py-0 mt-2" >
           <div class="row">
             <div class="col-lg-7 col-md-8  px-1 px-md-2  d-flex flex-row">
                 

                         <div 
                     :style="imageStyle(30,that.$root.selectedSpace.bot_data,'bot')"  ></div> 


                  <v-card elevation-1  class="py-0 px-2 ml-2 d-flex " style=" align-items:center;justify-content:center; border:1px solid transparent; min-width:45px;background:#ffffff; border-radius:20px;">

                       <img src="/imgs/diary_loading.svg" height="30" >

                
                  </v-card> 
             </div>
           </div>
        </div>

              </template>

               <template v-else>

                   <div elevation-1 class="col-11 py-0 offset-1" >
           <div class="row">
             <div class="col-lg-7 col-md-8 px-0 px-md-2 offset-lg-5 offset-md-4 d-flex flex-row-reverse" >
                 

                  <div flat tile  class="py-1 px-2  d-flex flex-row-reverse flex-wrap"  style="align-items:center;">
                     
                     <v-card  @click="initiateMessageCtl(pattern.pattern_content)" v-for="(pattern,index) in that.$root.botSuggestionArray" :key="index" tile flat class="py-1 px-2 mr-2 mb-2" style="border:2px solid #3C87CD; background:white; border-radius:8px;font-family:BodyFont;">
                        <span style="font-size:13px;color:#3C87CD;">{{pattern.pattern_content}}</span>
                     </v-card>  
                    
                    
                      
              
                  </div> 

                 
             </div>
           </div>
        </div>

               </template>
             

          


             </div>



          </template>



        <div  style="margin-top:20px;">

        </div>
   

      </div>
  </template>

  </DynamicScroller>

                          </div>

                           
            <template v-else>
        <div  class="col-12 px-0 scroller" 

        style="background:#E1F0FC; background-image:url(/imgs/chat_background.png);background-size: cover;
            background-repeat: no-repeat; height:93%; left:0; position:absolute; z-index:99999; top:0%;padding-top:80px; padding-bottom:130px;  overflow-y:auto;">

            <template v-if="that.$root.selectedSpace.type == 'Channel' || that.$root.selectedSpace.type == 'Team'">

               <invitation :infoText="'Teach, mentor and grow your community here.'"
                                   :extraInfo="'Invite others to your channel'" :fromChat="true" :alertComponent="this"></invitation>

            </template>

            
          
        </div>
     </template>

                             <div class="col-12 py-0 px-0" style=" left:0; position:absolute; bottom:0%;z-index:99999999;" >
                               <div class="col-12  py-1" v-if="that.$root.showEmojiBox">
                            <VEmojiPicker @select="selectEmoji" :showSearch="false" :emojiWithBorder="false" />
                                 </div>

                                  
                               
                               <div class="d-flex flex-row col-12 py-0" v-if="!this.$root.showRootReply && !that.$root.showEmojiBox">

                                  <!-- scroll to buttom -->

                                   <div class="mr-auto py-0  " v-if="that.$root.Messages && !this.$root.showRootReply" >

                                         <!-- scroll to bottom  -->

                                <template v-if="that.$root.Messages">

                                   <template v-if="that.$root.Messages.length >  0">

                                       <v-btn @click="scrollToBottom()" v-if="chatIsOpen && !bottomIsVisible"  class="mb-n5"  fab x-small color="#ffffff"  style="z-index:9999999;  ">

                               <v-icon style="font-size:20px; color:#3C87CD;">las la-angle-double-down</v-icon>

                              </v-btn>

                                   </template>

                                </template>

                            

                              <!-- ends -->

                                   </div>

                                       <!-- show code button -->

                                   <div class="  ml-auto" v-if="chatIsOpen && !this.$root.showRootReply && this.$root.selectedSpace.type != 'Bot'"  >

                                        <v-btn  @click="showCodeEditor" class="mb-2"   fab color="#ffffff"  style="z-index:9999999;">

                               <v-icon style="font-size:24px; color:#3C87CD;">las la-code</v-icon>

                              </v-btn>

                                   </div>
                              

                              <!-- ends -->
                              

                               </div>
                               

                              <!-- ends -->

                                  <!-- reply view -->

                                  <div class="col-12  py-1" v-if="this.$root.showRootReply" >

                                      <reply-view></reply-view>
                                        
                                 </div>

                                  <!-- ends -->


                                  <div class="px-2 py-1 card" style="background:#ffffff; border-radius:0px;">
                                     
                                <chat-bottom  ref="bottomLg" :screenType="'large'"></chat-bottom>
                                
                                 </div>
                            </div>
                           </template>
                      
                            <!-- ends -->
                            <!-- chat side board -->
                            <template v-if="!chatIsOpen" >

                            <div v-if="messageIsDone" class="col-12 d-flex flex-column" style="background:#ffffff; z-index:9999999999999999999; overflow-x:hidden; align-items:center;justify-content:center;  height:100%; left:0; position:absolute; z-index:99; top:0%;" >

                                <img src="/imgs/chat_side.svg" height="250px">

                                <div class="d-flex flex-column mt-5 px-5" style="align-items:center;justify-content:center;">
                                    <blockquote class="fill" style="font-family:BodyFont; font-size:15px; color:black;">{{qouteArray[selectedQuoteId].qoute}}</blockquote>
 
                            <p class="text-center" style="font-family:HeaderFont;font-size:15px;">
                                 - {{qouteArray[selectedQuoteId].author}}
                              </p>
                                </div>

                            </div>

                               
                           </template>

                            <template v-if="!messageIsDone" >

                            

                             <div class="col-12 d-flex flex-column" style="background:#ffffff; z-index:9999999999999999999; overflow-x:hidden; align-items:center;justify-content:center;  height:100%; left:0; position:absolute; top:0%;" >

                                <img src="/imgs/chat_side.svg" height="250px">

                                <div class="d-flex flex-column mt-5 px-5" style="align-items:center;justify-content:center;">
                                    <blockquote class="fill" style="font-family:BodyFont; font-size:15px; color:black;">{{qouteArray[selectedQuoteId].qoute}}</blockquote>
                                 
                                
                                 
                            <p class="text-center" style="font-family:HeaderFont;font-size:15px;">
                                 - {{qouteArray[selectedQuoteId].author}}
                              </p>

                               <v-progress-linear indeterminate height="4px"  color="#3C87CD" class="mb-2" rounded></v-progress-linear>
                                </div>

                            </div>


                               
                           </template>

                           <!-- ends -->


                            <!-- code editor -->
                            
                           
                               <div v-if="chatIsOpen && chatInnerConent == 'code_editor'"  class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;" >
                                   

                                  <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                                  <code-editor-chat ></code-editor-chat>
                            </div>

                            

                            <!-- ends -->

                               <!-- channel invitation -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'channel_invitation'" class="col-12 py-2 pt-4 px-0 text-center " @click="goBack" style="background: rgba(27, 27, 30, 0.32);  border-top:1px solid #c5c5c5; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;" >
                                 <v-btn icon color="#ffffff" @click.stop="goBack" style="position:absolute;background:#3C87CD;top:2%; left:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                                  <invitation :infoText="'Teach, mentor and grow your community here.'"
                                   :extraInfo="'Invite others to your channel'" :fromChat="true" :alertComponent="this"></invitation>
                            </div>

                            <!-- ends -->

                             <!-- image viewer -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'image_viewer'" class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;" >
                                  <image-viewer></image-viewer>
                                    <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                            </div>

                            <!-- ends -->

                               <!-- No access -->


              <div class="d-flex flex-column col-12"   v-if="chatIsOpen && checkIfMemeber()"    style="background:#ffffff; border-top:1px solid #c5c5c5;  position:absolute; height:100%; top:0%;z-index:9999999999999; align-items:center; justify-content:center;">

           
            <img alt="Thank you" class="mb-2"  src="/imgs/oops.gif" height="100"/>

           <div class="py-2 mb-2" style="font-size:14px;font-family:BodyFont;">
             Oops! You no longer have access to this channel.
           </div>

           <div>
             <v-btn small  @click="leaveSpace" color="#3C87CD" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Delete Channel</v-btn>
             </div>



              </div>


              <!-- ends -->


                <!-- payment processing board -->


              <div class="d-flex flex-column col-12"   v-if="that.$root.showPaymentProcessingBoard"    style="background:#ffffff; overflow-y:auto; overflow-x:hidden;  position:absolute; height:100%; left:0; top:0%;z-index:9999999999999; align-items:center;">

           
               
               <payment-processor></payment-processor>

          
                 <v-btn icon color="#ffffff" @click="goToChatList" style="position:absolute;background:#3C87CD;top:2%; left:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

          

              </div>


              <!-- ends -->


                              <!-- channel sidebar -->


                               <div  v-if="chatIsOpen && chatInnerSideBar" class="col-12 py-0 px-0" @click="goBack" style="overflow-x:hidden; background: rgba(27, 27, 30, 0.32); border-top:1px solid #c5c5c5; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;" >
                                   
                                   
                                   <!-- admin options -->

                          <div style="position:absolute; height:100%; width:70%; left:30%;z-index:99999999999999;" v-if="that.$root.showAdminOption">
                           <div class="offset-lg-6 d-flex" @click.stop="that.$root.showAdminOption = false" style="height:100%; align-items:center; justify-content:center; background: rgba(225, 225, 225, 0.32);" >
 
                      
                          <v-card style="border-radius:10px;width:90%;"
             height="auto"
              
       class="py-2 px-1"  >

            <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click.stop="makeAdmin"
             v-if="selectedSpaceMembers.is_admin == false">
        <span style="font-size:13px;">{{ $t('space.make_admin') }}</span>
            </v-card>
             <v-card tile  @click.stop="RemoveAdmin" flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" v-else>
        <span style="font-size:13px;">{{ $t('space.remove_admin') }}</span>
            </v-card>

             <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click.stop="removeUser">
        <span style="font-size:13px;">{{ $t('space.remove') }}</span>
            </v-card>
         <v-card tile flat class="text-center py-2"  @click.stop="goToProfile(selectedSpaceMembers.username)">
        <span style="font-size:13px;">{{ $t('space.view_profile') }}</span>
            </v-card>

             </v-card>
      
   

                           </div>
                          </div>


                              <!-- ends -->
                                   
                                   <div style="position:absolute; height:100%; width:70%; left:30%;" >

                                     

                                    <div  @click.stop="chatInnerSideBar = true" class="scrollerinfo offset-lg-6" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden;" >
                                       
                                         <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>


                                     
                                        <channel-info v-if="innerSideBarContent == 'channel_info'" ></channel-info>
                                     
                                    
                                        <channel-edit v-if="innerSideBarContent == 'channel_edit'"></channel-edit>

                                        
                                        
                                        <sub-channels v-if="innerSideBarContent == 'sub_channels'"></sub-channels>

                                         
                                        <add-sub-channel v-if="innerSideBarContent == 'add_sub_channel'"></add-sub-channel>

                                         <add-payment  v-if="innerSideBarContent == 'add_payment'"></add-payment>

                                          <diary-notes v-if="innerSideBarContent == 'diary_notes'"></diary-notes>

                                         
                                   </div>

                                     </div>
                               </div>
                              

                            <!-- channel sidebar -->

                             <!-- audio container -->
                               <div  id="audios-container" v-show="false"></div>
                              <!-- ends -->

                            <!-- live session -->

                         

                            <div v-if="chatIsOpen && !chatInnerSideBar && liveSessionIsOpen" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); border-top:1px solid #c5c5c5; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;" >
                                      <!-- rtc screen -->


                 <div   style="position:absolute;top:10%; left:0%; height:80%; width:100%; z-index:9999;" class="d-flex ">

               <div  id="videos-container" ></div>

                
               </div>

                            <!-- ends -->

                              <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>

     
                                    <live-session></live-session>
                               </div>
                            

                            <!-- ends -->
                        

                      
                               <!-- share -->

                            <div  v-if="chatIsOpen && !chatInnerSideBar && chatShareIsOpen"  class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); border-top:1px solid #c5c5c5; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;"  >
                                    <chat-share></chat-share>
                               </div>

                            <!-- ends -->

                              <!-- crop image -->

                            <div v-if="chatIsOpen && !chatInnerSideBar && imageCropperIsOpen" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); border-top:1px solid #c5c5c5; left:0; position:absolute; height:100%; top:0%;z-index:9999999999999;">
                                    <image-cropper></image-cropper>
                                      <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                               </div>

                            <!-- ends -->

                      </div>

                         

                            
                               <!-- share diary -->
                          
                           <template v-if="that.$root.selectedSpace.type ==  'Bot'">

                                       <v-btn @click="shareDiary()" v-if="chatIsOpen"    fab x-small color="#ffffff" class="d-lg-inline-block d-none" style="z-index:99999999;  position:absolute;  bottom:14%; right:1%;">

                               <v-icon style="font-size:20px; color:#3C87CD;">mdi mdi-share-variant</v-icon>

                              </v-btn>

                                   </template>


                              <!-- ends -->

                   </div>




        </div>

        <!-- ends -->

        <!-- smaller and medium screens -->
             <div class=" col-12 py-0  d-lg-none" style=" position:absolute; height:100%; top:0%; left:0; overflow-y:auto; overflow-x:hidden; background:white;" >

             <template v-if="!chatIsOpen">

                <!-- chat list component -->
              
           <template v-if="!this.$root.loadingChatList && !this.$root.loadingIsError">

                     <DynamicScroller
    :items="this.$root.ChatList"
     :keyField="'space_id'"
    :min-item-size="36"
    v-if="this.$root.ChatList.length > 0"
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


             <template #after > 

       

        </template>

                </DynamicScroller>

                <div v-else class="col-12 px-3 text-center d-flex flex-column " 
          style="position:absolute; width:100%; height:92%;top:8%;left:0;overflow-y:auto;align-items:center;justify-content:center;" >

                    <div class="mb-3 px-3" style="font-size:13px;color:gray;font-family:BodyFont;">
                     Channel is where you teach, mentor, and earn.
                    </div>

                     <div>
                          <v-btn small color="#3C87CD" @click="showCreateChannel" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Create a Channel</v-btn>
                     </div>

                     

                </div>
           </template>

              <template v-if="that.$root.TopBarComponentChat">
                

                          <template v-if="that.$root.TopBarComponentChat.searchValue != ''">

                             <DynamicScroller
    :items="this.$root.searchChatList"
     :keyField="'space_id'"
    :min-item-size="36"
     v-if="this.$root.searchChatList.length > 0"
    ref="ChatContainersmallSearch"
    :buffer="5000"
    id="ChatContainersmallSearch"
      class="col-12 px-1 " 
        style="position:absolute; width:100%; height:92%;top:8%;left:0;overflow-y:auto; background:white;" 
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

              <div v-else  class="col-12 px-1 text-center chatListScroller pt-2"  style="position:absolute; width:100%; height:90%;top:10%;left:0;overflow-y:auto; background:white;" >

              <span style="font-size:13px;color:grey;">No result found</span>

            </div>
                              
                         </template>
                    
                    

                       </template>

                <template v-if="this.$root.loadingChatList && !this.$root.loadingIsError">

                 <div  class="col-12 d-flex " style="position:absolute; overflow-y:auto;left:0%; height:92%;top:8%;align-items:center; justify-content:center;  ">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

             <template v-if="!this.$root.loadingChatList && this.$root.loadingIsError">

                 <div  class="col-12 d-flex flex-column" style="position:absolute; left:0%; overflow-y:auto; height:92%;top:8%;align-items:center; justify-content:center;  ">
                 <div style="font-size:13px;color:grey;">Something went wrong</div> 
                   <v-btn  small color="#3C87CD" rounded style="text-transform:normal;font-family:BodyFont;font-size:13px;" @click="fetchChatList"> Retry </v-btn>
               </div>

            </template>

              

                <!-- ends -->
                 
                   <!-- create channel -->

                     

                            <div  v-if="chatbarContent == 'create_channel'" class="col-12 py-0 px-0" style="background:#ffffff; left:0; position:fixed; height:100%; top:0%;z-index:9999999999999;" >
                                  <create-channel></create-channel>
                                   <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                            </div>
                      

                      <!-- ends -->


             </template>
               

            <!-- chat content -->

              
               <!-- chat side board -->
                            <template v-if="!messageIsDone" >

                            <div class="col-12 d-flex flex-column" style="background:#ffffff; z-index:999999999999999999999; overflow-x:hidden; align-items:center;justify-content:center;  height:100%; left:0; position:fixed;  top:0%;" >

                                <img src="/imgs/chat_side.svg" height="150px">

                                <div class="d-flex flex-column mt-5 px-5" style="align-items:center;justify-content:center;">
                                    <div class="fill text-center pb-2" style="font-family:BodyFont; font-size:14px; color:black;">{{qouteArray[selectedQuoteId].qoute}}</div>
                                  
                                

                            <p class="text-center" style="font-family:HeaderFont;font-size:14px;">
                                 - {{qouteArray[selectedQuoteId].author}}
                              </p>

                                 <v-progress-linear indeterminate height="4px"  color="#3C87CD" class="mb-2" rounded></v-progress-linear>
                                </div>

                            </div>


                               
                           </template>

                           <!-- ends -->

           

              

                   <template v-if="chatIsOpen && that.$root.Messages != null">

              <div  class="row py-0" :id="'smallView'" >
                            <div class="col-12 py-1" style=" background:#ffffff; border-bottom:1px solid #c5c5c5; left:0; position:fixed; top:0%;z-index:999999999;" >
                              <template v-if="!that.$root.chatTopLoaded">

                                       <v-skeleton-loader
                                       type="image"
                                       height="35px">
                                         
                                       </v-skeleton-loader>
                                      
                                    </template>
                              <chat-top v-else></chat-top>
                            </div>


  <DynamicScroller
    :items="that.$root.Messages"
     v-if="that.$root.Messages.length != 0"
     :keyField="'index_count'"
    :min-item-size="70"
    ref="messageContainersmall"
     
    id="messageContainersmall"
  class="col-12 px-0" 

        style="background:#E1F0FC; background-image:url(/imgs/chat_background.png);background-size: cover;
            background-repeat: no-repeat; height:100%; left:0; position:fixed; z-index:9999999; top:0%; overflow-y:auto;"
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
     <chat-messages :screenType="'small'" :source="item" ></chat-messages>
    
      </DynamicScrollerItem>
    </template>

     <template #before>

        <div  class=" col-12 text-center" style="margin-top:60px; ">
     
        <span v-html="that.$root.selectedSpace.description" v-if="that.$root.selectedSpace.type != 'Direct'" style="font-size:12px;font-family:BodyFont;">
         
        </span>


      </div>
  </template>
    

    <template #after>

        <div  class=" col-12 " v-observe-visibility="visibilityChanged" style="margin-bottom:32px; ">
            
          <template v-if="that.$root.selectedSpace.type == 'Bot' ">

             <div class="row">

              <template v-if=" that.$root.botIsLoading || that.$root.sendingMessage">

                 <div elevation-1 class="col-11 py-0 mt-2" >
           <div class="row">
             <div class="col-lg-7 col-md-8  px-1 px-md-2  d-flex flex-row">
                 

                         <div 
                     :style="imageStyle(30,that.$root.selectedSpace.bot_data,'bot')"  ></div> 


                  <v-card elevation-1  class="py-0 px-2 ml-2 d-flex " style=" align-items:center;justify-content:center; border:1px solid transparent; min-width:45px;background:#ffffff; border-radius:20px;">

                         <img src="/imgs/diary_loading.svg" height="30" >

                
                  </v-card> 
             </div>
           </div>
        </div>

              </template>

               <template v-else>

                   <div elevation-1 class="col-11 py-0 offset-1" >
           <div class="row">
             <div class="col-lg-7 col-md-8 px-0 px-md-2 offset-lg-5 offset-md-4 d-flex flex-row-reverse" >
                 

                  <div flat tile  class="py-1 px-2 mr-2 d-flex flex-row-reverse flex-wrap"  style="align-items:center;">
                     
                   <v-card  @click="initiateMessageCtl(pattern.pattern_content)" v-for="(pattern,index) in that.$root.botSuggestionArray" :key="index" tile flat class="py-1 px-2 mr-2 mb-2" style="border:2px solid #3C87CD; background:white; border-radius:8px;font-family:BodyFont;">
                        <span style="font-size:13px;color:#3C87CD;">{{pattern.pattern_content}}</span>
                     </v-card>  
                    
                      
              
                  </div> 

                 
             </div>
           </div>
        </div>

               </template>
             

          


             </div>



          </template>



        <div  style="margin-top:60px;">

        </div>
   

      </div>
  </template>

  </DynamicScroller>

     <template v-else>
        <div  class="col-12 scroller" 

        style="background:#E1F0FC; background-image:url(/imgs/chat_background.png);background-size: cover;
            background-repeat: no-repeat; height:100%; left:0; position:fixed; z-index:9999999; top:0%;padding-top:80px; padding-bottom:130px;  overflow-y:auto;">

              <template v-if="that.$root.selectedSpace.type == 'Channel' || that.$root.selectedSpace.type == 'Team'">

              <invitation :infoText="'Teach, mentor and grow your community here.'"
                                   :extraInfo="'Invite others to your channel'" :fromChat="true" :alertComponent="this"></invitation>

            </template>
          
        </div>
     </template>
                      

                           

                             

                             
                             <div class="col-12 py-0 px-0" style=" left:0; position:fixed; bottom:0%;z-index:999999999;" >
                                <div class="col-12  py-1"  v-if="that.$root.showEmojiBox">
                            <VEmojiPicker @select="selectEmoji" :showSearch="false" :emojiWithBorder="false" />
                                 </div>

                             
                              <div class="d-flex flex-row col-12 py-0 px-2" v-if="!this.$root.showRootReply && !that.$root.showEmojiBox">

                                  <!-- scroll to buttom -->

                                   <div class="mr-auto py-0  " v-if="that.$root.Messages && !this.$root.showRootReply" >

                                         <!-- scroll to bottom  -->

                                <template v-if="that.$root.Messages">

                                   <template v-if="that.$root.Messages.length >  0">

                                       <v-btn @click="scrollToBottom()" v-if="chatIsOpen && !bottomIsVisible"  class="mb-n4"  fab x-small color="#ffffff"  style="z-index:9999999;  ">

                               <v-icon style="font-size:20px; color:#3C87CD;">las la-angle-double-down</v-icon>

                                 </v-btn>

                                   </template>

                                </template>

                            

                              <!-- ends -->

                                   </div>


                              <!-- share diary -->
                          
                           <div  class="ml-auto" v-if="that.$root.selectedSpace.type ==  'Bot'">

                                       <v-btn @click="shareDiary()" v-if="chatIsOpen" class="mb-2"   fab x-small color="#ffffff"  style="z-index:9999999; ">

                               <v-icon style="font-size:20px; color:#3C87CD;">mdi mdi-share-variant</v-icon>

                              </v-btn>

                                   </div>


                              <!-- ends -->

                                       <!-- show code button -->

                                   <div class="  ml-auto" v-if="chatIsOpen && !this.$root.showRootReply && this.$root.selectedSpace.type != 'Bot'"  >

                                        <v-btn  @click="showCodeEditor" class="mb-2"   fab color="#ffffff"  style="z-index:9999999;">

                               <v-icon style="font-size:24px; color:#3C87CD;">las la-code</v-icon>

                              </v-btn>

                                   </div>
                              

                              <!-- ends -->
                              

                               </div>


                                   
                              

                              <!-- ends -->

                                 <!-- reply view -->

                                  <div class="col-12 px-1 py-1" v-if="this.$root.showRootReply" >

                                      <reply-view></reply-view>
                                        
                                 </div>

                                  <!-- ends -->

                                 <div class="px-2 py-1 card" style="background:#ffffff; border-radius:0px;">

                                    <template v-if="!that.$root.chatBottomLoaded">

                                       <v-skeleton-loader
                                       type="image"
                                       height="35px">
                                         
                                       </v-skeleton-loader>
                                      
                                    </template>
                                <chat-bottom v-else ref="bottomSm" :screenType="'small'"></chat-bottom>
                                 </div>
                                 
                            </div>


                           <!-- code editor -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'code_editor'"  class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                                  <code-editor-chat></code-editor-chat>
                            </div>

                            <!-- ends -->



                                <!-- image viewer -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'image_viewer'"  class="col-12 py-0 px-0" style="background:#ffffff; border-top:1px solid #c5c5c5; left:0; position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  <image-viewer></image-viewer>
                            </div>

                            <!-- ends -->

                             <!-- channel invitation -->

                               <div  v-if="chatIsOpen && chatInnerConent == 'channel_invitation'" @click="goBack" class="col-12 py-0 pt-5 px-0 text-center " style="background: rgba(27, 27, 30, 0.32);  border-top:1px solid #c5c5c5; left:0; position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  <v-btn icon color="#ffffff" @click.stop="goBack" style="position:absolute;background:#3C87CD;top:1%; left:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                                  <invitation :infoText="'Teach, mentor and grow your community here.'"
                                   :extraInfo="'Invite others to your channel'" :fromChat="true" :alertComponent="this"></invitation>
                            </div>

                            <!-- ends -->


                             <!-- message options -->

                               <div  v-if="chatIsOpen && showMoreOptions" @click="showMoreOptions = false" class="col-12 py-0 px-0 d-flex" style="align-items:center; justify-content:center; background: rgba(27, 27, 30, 0.1); position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                  
                                    <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>

                                  <more-options></more-options>


                            </div>

                            <!-- ends -->

                           <!-- chat more options -->

                               <div  v-if="chatIsOpen && showMoreOptionsChat" @click="showMoreOptionsChat = false" class="col-12 py-0 px-0 d-flex" style="align-items:center; justify-content:center; background: rgba(27, 27, 30, 0.1); position:fixed; height:100%; top:0%;z-index:999999999999;" >
                                      <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                                  <more-option-chat></more-option-chat>
                            </div>

                            <!-- ends -->


                              <!-- No access -->


              <div class="d-flex flex-column col-12" v-if="checkIfMemeber()"  style="background:#ffffff; border-top:1px solid #c5c5c5;  position:fixed; height:100%; top:0%;z-index:9999999999999; align-items:center; justify-content:center;">

           
            <img alt="Thank you" class="mb-2"  src="/imgs/oops.gif" height="80"/>

           <div class="py-2 mb-2" style="font-size:14px;font-family:BodyFont;">
             Oops! You no longer have access to this channel.
           </div>

           <div>
             <v-btn small  @click="leaveSpace" color="#3C87CD" style="color:white;text-transform:none;font-family:BodyFont;font-size:11px;" class="mx-2 d-inline-block" rounded>Delete Channel</v-btn>
             </div>



              </div>


              <!-- ends -->



                              <!-- channel sidebar -->

                               <div v-if="chatIsOpen && chatInnerSideBar" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.32);  left:0; position:fixed; height:100%; top:0%;z-index:99999999999999999;" >
                                   <div style="position:absolute; height:100%; width:100%; left:0%;" >

                                    <div class="scrollerinfo col-md-6 offset-md-6 px-0 py-0 pb-2" style="background:white;height:100%; overflow-y:auto; overflow-x:hidden;" >
                                     
                                        <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>

                             
                                        
                                        <channel-info v-if="innerSideBarContent == 'channel_info'" ></channel-info>
                                     
                                    
                                        <channel-edit v-if="innerSideBarContent == 'channel_edit'"></channel-edit>

                                       
                                        <sub-channels v-if="innerSideBarContent == 'sub_channels'"></sub-channels>

                                         
                                        <add-sub-channel v-if="innerSideBarContent == 'add_sub_channel'"></add-sub-channel>

                                        <add-payment  v-if="innerSideBarContent == 'add_payment'"></add-payment>

                                        <diary-notes v-if="innerSideBarContent == 'diary_notes'"></diary-notes>

                                         
                                    
                                   </div>

                                     </div>
                               </div>
                                
                            <!-- channel sidebar -->


                              <!-- admin options -->

                          <div  class="d-flex" @click.stop="that.$root.showAdminOption = false"  style="position:fixed; height:100%; width:100%; top:0%; z-index:99999999999999999999;align-items:center; justify-content:center; background: rgba(225, 225, 225, 0.32);" v-if="that.$root.showAdminOption" >
                           
                          <v-card style="border-radius:10px;width:90%;"
             height="auto"
      
       class="py-2 px-1"  >

            <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click.stop="makeAdmin"
             v-if="selectedSpaceMembers.is_admin == false">
        <span style="font-size:13px;">{{ $t('space.make_admin') }}</span>
            </v-card>
             <v-card tile @click.stop="RemoveAdmin" flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" v-else>
        <span style="font-size:13px;">{{ $t('space.remove_admin') }}</span>
            </v-card>

             <v-card tile flat class="text-center py-2" style="border-bottom:1px solid #c5c5c5;border-radius:0px;" @click.stop="removeUser">
        <span style="font-size:13px;">{{ $t('space.remove') }}</span>
            </v-card>
         <v-card tile flat class="text-center py-2"  @click.stop="goToProfile(selectedSpaceMembers.username)">
        <span style="font-size:13px;">{{ $t('space.view_profile') }}</span>
            </v-card>

             </v-card>
      
   

                          
                          </div>


                              <!-- ends -->

                            
                               <!-- audio container -->
                               <div  id="audios-container-sm" v-show="false"></div>
                              <!-- ends -->

                         
                             <!-- live session -->

                            <div v-if="chatIsOpen && !chatInnerSideBar && liveSessionIsOpen" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); left:0; position:fixed; height:100%; top:0%;z-index:9999999999999;" >
                                    <!-- rtc screen -->


             <div   style="position:absolute;top:0%; left:0%; height:70%; width:100%; align-items:center;z-index:9999;" class="d-flex ">

               <div  id="videos-container-sm" ></div>

              
             </div>

                            <!-- ends -->

                              <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>

     
                                    <live-session></live-session>
                               </div>

                            <!-- ends -->

                               <!-- share -->

                            <div v-if="chatIsOpen && !chatInnerSideBar && chatShareIsOpen" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); left:0; position:fixed; height:100%; top:0%;z-index:9999999999999;" >
                                    <chat-share></chat-share>
                               </div>

                            <!-- ends -->

                                <!-- crop image -->

                            <div v-if="chatIsOpen && !chatInnerSideBar && imageCropperIsOpen" class="col-12 py-0 px-0" style="background: rgba(27, 27, 30, 0.4); left:0; position:fixed; height:100%; top:0%;z-index:9999999999999;" >
                                    <image-cropper></image-cropper>
                                      <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

                          <img src="/imgs/diary_loading.svg" height="50" >

                               </div>
                               </div>

                            <!-- ends -->

                              
                  </div>
              
            </template>
            

             <!-- ends -->



                <!-- payment processing board for smaller screens-->


              <div class="d-flex flex-column col-12 d-lg-none d-block"  v-if="that.$root.showPaymentProcessingBoard"    style="background:#ffffff; overflow-y:auto; overflow-x:hidden; position:fixed; height:100%; left:0; top:0%;z-index:9999999999999; align-items:center;">

           
               
               <payment-processor></payment-processor>

          
                  <v-btn icon color="#ffffff" @click="goToChatList" style="position:fixed;background:#3C87CD;top:2%; left:2%; z-index:990679797879;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>

              </div>


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

      
      
      <template>
         <div class="d-flex" v-if="that.$root.componentIsLoading" style="position:absolute;height:100%; width:100%; align-items:center; justify-content:center;">

         <img src="/imgs/diary_loading.svg" height="50" >

      </div>
       <side-bar></side-bar>
      </template>

     </div>

   </div>

     </div>
    </v-slide-x-transition>
  

       <!-- ends -->


        <!-- profile View  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: #F5F5FB;" v-if="this.$root.showProfileView">

  
      
      <profile-view :fromModal="true"></profile-view>
   

  

 </div>


 <!-- ends -->

    <!-- diary settings -->


   <div class="py-0 px-0 d-flex flex-column" style="position:fixed; align-items:center; justify-content:center; width:100%; height:100%; z-index:99999999999999999;background: #F5F5FB;" v-if="this.$root.showDiarySettings">

        <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

        <div class="py-2" style="font-size:14px;font-family:BodyFont;">
             Checking for diary ...
        </div>

 </div>


 <!-- ends -->

   <!-- share  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" @click="that.$root.showInvitation = false" v-if="this.$root.showInvitation">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

   

      
      <invitation :infoText="this.$root.infoText"
                                   :extraInfo="this.$root.extraInfo" :fromChat="false" :alertComponent="this.$root.alertComponent"></invitation>
   

   </div>

 </div>


 <!-- ends -->


 <!-- codebox input handler  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showProjectInput" @click="that.$root.showProjectInput = false" >

   <div style="position:absolute; height:90%; top:8%; width:94%; left:3%; "  >
  

     <input-handler></input-handler>


        
     
   </div>

 </div>


 <!-- ends -->

  <!-- payment option info  -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="that.$root.showPaymentOptionBoard" @click="that.$root.showPaymentOptionBoard = false">

   <div style="position:absolute; height:90%; top:10%; width:94%; left:3%; "  >

         <payment-info-board></payment-info-board>
     
   </div>

 </div>


 <!-- ends -->


    </div>
</template>
<script>



import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.component('DynamicScroller', DynamicScroller)
Vue.component('DynamicScrollerItem', DynamicScrollerItem)


import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

window.iziToast = iziToast;


import { VEmojiPicker } from 'v-emoji-picker';

const { htmlToText } = require('html-to-text');

const Interest= () => import(
   /* webpackChunkName: "Interest" */ '../auth/InterestPopup'
  );

  const Follow= () => import(/* webpackChunkName: "Follow" */ '../auth/FollowDiary' )


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
   const InputHandler = () => import(
   /* webpackChunkName: "InputHandler" */ '../projects/InputHandler.vue'
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

   const ChatShare = () => import(
    /* webpackChunkName: "ChatShare" */ './Share.vue'
  );

    const ImageCropper = () => import(
    /* webpackChunkName: "ImageCropper" */ './ImageCropper.vue'
  );

     const Invitation = () => import(
    /* webpackChunkName: "Invitation" */ './invitation.vue'
  );

 const MoreOptions = () => import(
    /* webpackChunkName: "MoreOptions" */ './MoreOptions.vue'
  );


 const ReplyView = () => import(
    /* webpackChunkName: "ReplyView" */ './ReplyView.vue'
  );

  const SideBar = () => import(
    /* webpackChunkName: "SideBar" */ '../dashboard/sideBar.vue'
  );

   const ProfileView = () => import(
    /* webpackChunkName: "ProfileView" */ '../Profile/ProfilePage.vue'
  );
 const MoreOptionChat = () => import(
    /* webpackChunkName: "MoreOptionChat" */ './MoreOptionChat.vue'
  );

   const DiaryNotes = () => import(
    /* webpackChunkName: "DiaryNotes" */ './DiaryNotes.vue'
  );

  const Notify = () => import(
   /* webpackChunkName: "Notify" */ '../Profile/Notify.vue'
  );

   const PaymentInfoBoard = () => import(
   /* webpackChunkName: "PaymentInfoBoard" */ './PaymentInfoBoard.vue'
  );

   const PaymentProcessor = () => import(
   /* webpackChunkName: "PaymentProcessor" */ './PaymentProcessor.vue'
  );

   const AddPayment = () => import(
   /* webpackChunkName: "AddPayment" */ './AddPayment.vue'
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
        counter:0,
        suggestionsContent:'diaries',
        messageIsDone: true,
        popup:false,
        qouteArray:[
          {
            qoute:'Believe you can and you’re halfway there.',
            author:'Theodore Roosevelt'
          },
          {
            qoute:'Alone, we can do so little; together we can do so much.',
            author:'Helen Keller'
          },
          {
            qoute:'You can’t use up creativity. The more you use, the more you have.',
            author:'Maya Angelou'
          },
          {
            qoute:'If you want to lift yourself up, lift up someone else.',
            author:'Booker T. Washington'
          },
          {
            qoute:'You can change. And you can be an agent of change.',
            author:'Laura Dern'
          },
          {
            qoute:'One person can make a difference, and everyone should try.',
            author:'John F. Kennedy'
          },
          {
            qoute:'Whatever you do, always give 100%. Unless you\'re donating blood.',
            author:'Bill Murray'
          },
          {
            qoute:'Success is the sum of little efforts repeated day in day out.',
            author:'Robert collier'
          },
          {
            qoute:'Experience is not the best teacher. Evaluated experience is.',
            author:'John Maxwell'
          },
          {
            qoute:'Make each day your masterpiece.',
            author:'John Wooden'
          },
        ],
        chatShareIsOpen:false,
        imageCropperIsOpen:false,
       searchValue:'',
       amount:5000,
       selectedQuoteId:0,
       showMoreOptions:false,
       bottomIsVisible:false,
       showMoreOptionsChat:false,
       selectedSpaceMembers:[]
     
      }
    },
    mounted(){
     this.$root.showSideBar = false;
    this.$root.chatComponent = this;
   
    
    
     this.controlChatPath();
      this.fetchChatList();

      

      
    },
    components: {
        InputHandler,
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
        AddSubChannel,
        VEmojiPicker,
        Invitation,
        ChatShare,
        ImageCropper,
        MoreOptions,
        ReplyView,
        SideBar,
        ProfileView,
        MoreOptionChat,
         Interest,
         Follow,
         DiaryNotes,
         Notify,
         PaymentInfoBoard,
         PaymentProcessor,
         AddPayment
    },
     methods:{

  
        showAlert:function(title='',message,type,position = 'bottomRight',timeout = 2000){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:timeout,
       position: position,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:2000,
       position: position,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
        timeout:timeout,
       message: message,
       zindex:'9999999999',
       position: position,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
        timeout:timeout,
       zindex:'9999999999',
       position: position,
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
    botMessagerChat:function(message){
     
    let processedMsg = htmlToText(message, {
             wordwrap: 500
            });

      this.$root.botMessager(processedMsg);     
     
  
},

goToChatList:function(){
     this.$router.push({ path: '/channels' });
}, 
 makeAdmin:function(){

   this.$root.showAdminOption = false

         axios.post( '/make-user-admin',{
           memberId: this.selectedSpaceMembers.memberId
         })
      .then(response => {
      
      if (response.status == 200) {

         
        
         this.$root.selectedSpaceMembers.map((member)=>{
           if(member.memberId == response.data){

             member.is_admin = true;

           }
         })

            let storedMsg = this.$root.getLocalStore('full_space_' + this.$root.selectedSpace.space_id + this.$root.username);
       
           storedMsg.then((result)=>{

               if(result != null){

                   let finalResult = JSON.parse(result);

                    finalResult.members = this.$root.selectedSpaceMembers;
                  

            this.$root.LocalStore('full_space_' +  this.$root.selectedSpace.space_id  + this.$root.username,finalResult);

              


               }



              
           });



         
       
      }
       
     
     })
     .catch(error => {

       
    
     }) 

      },

      removeUser:function(){
         this.$root.showAdminOption = false

         axios.post( '/remove-user',{
           memberId: this.selectedSpaceMembers.memberId
         })
      .then(response => {
      
      if (response.status == 200) {

         
        
        let newUserList =  this.$root.selectedSpaceMembers.filter((member)=>{
        return   member.memberId != response.data

         })

         this.$root.selectedSpaceMembers = newUserList;

            let storedMsg = this.$root.getLocalStore('full_space_' + this.$root.selectedSpace.space_id + this.$root.username);
       
           storedMsg.then((result)=>{

               if(result != null){

                   let finalResult = JSON.parse(result);

                    finalResult.members = this.$root.selectedSpaceMembers;
                  

            this.$root.LocalStore('full_space_' +  this.$root.selectedSpace.space_id  + this.$root.username,finalResult);

              


               }



              
           });



         
       
      }
       
     
     })
     .catch(error => {

       
    
     }) 

      },
       RemoveAdmin:function(){
      this.$root.showAdminOption = false
         axios.post( '/remove-user-admin',{
           memberId: this.selectedSpaceMembers.memberId
         })
      .then(response => {
      
      if (response.status == 200) {

         
        
         this.$root.selectedSpaceMembers.map((member)=>{
           if(member.memberId == response.data){

             member.is_admin = false;

           }
         })

            let storedMsg = this.$root.getLocalStore('full_space_' + this.$root.selectedSpace.space_id + this.$root.username);
       
           storedMsg.then((result)=>{

               if(result != null){

                   let finalResult = JSON.parse(result);

                    finalResult.members = this.$root.selectedSpaceMembers;
                  

            this.$root.LocalStore('full_space_' +  this.$root.selectedSpace.space_id  + this.$root.username,finalResult);

              


               }



              
           });



         
       
      }
       
     
     })
     .catch(error => {

       
    
     }) 

      },
 leaveSpace: function(){
        let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                    let finalResult = JSON.parse(result);

                       
                       if(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' ){

                          let remainingSpace = finalResult.channels.filter((space)=>{
                         return    space.space_id != this.$root.selectedSpace.space_id
                          });

                          finalResult.channels = remainingSpace;

                        }

                         if(this.$root.selectedSpace.type == 'Bot'){

                          let remainingSpace = finalResult.pet_spaces.filter((space)=>{
                         return    space.space_id != this.$root.selectedSpace.space_id
                          });

                          finalResult.pet_spaces = remainingSpace;

                        }
                         

                          this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult,false,'leave_space');

                    
                    

                 }

                   } )

       },
   goToProfile:function(username){
          this.$root.showAdminOption = false
        this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile-view/' + username})
      },
      checkIfMemeber: function(){

          if(this.$root.selectedSpaceMembers.length == 0) return false;

        let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{

             return members.user_id == this.$root.user_temp_id;
           });

           if(userMemberData.length != 0){

             return false

           }else{
              return true
           }


      },
 shareDiary:function(){

    this.$root.shareLink =  'https://link.citonhub.com/diary/'+ this.$root.selectedSpace.bot_data.bot_id;

          this.$root.shareText = 'Check out this diary on Citonhub';
          
          this.$root.infoText = 'Share diary with others';

    this.$root.alertComponent =   this;

          this.$root.showInvitation = true;
 },
     imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(this.$root.selectedSpace.type == 'Bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         }
         
          return styleString;
      }
     },
    visibilityChanged:function(isVisible, entry){
        this.bottomIsVisible = isVisible
    },
    setShareLink:function(){



      this.$root.shareText = 'Join ' + this.$root.selectedSpace.name +  ' on Citonhub';
       this.$root.shareLink =   'https://link.citonhub.com/channel/'+ this.$root.selectedSpace.space_id;
   
  
    },
     initiateMessageCtl: function(message){


          this.$root.channelBottomComp.contentInWord = message;

           this.$root.channelBottomComp.input = message;

            let refocus = false;
          this.$root.channelBottomComp.sendMessage(refocus);



       },
       showSideBarHandler: function(){

         this.$root.componentIsLoading = true;

         this.$root.showSideBar = true;

           
         if(!this.$root.authProfile.user_onboarded){

            axios.post('/save-user-onboarded-status')
       .then(response => {

       if (response.status == 200) {

          this.$root.authProfile.user_onboarded = true;

 

      }


      })
     .catch(error => {  
  
       }) 

         }



      },
    checkDiary:function(){

       let botId = '';

       if(this.$route.params.bot_id){

           botId = this.$route.params.bot_id;

       }else{
           botId  = this.$root.tempDiaryId;
       }

          this.$root.autoOpenDiary = false;
    
       axios.get('/check-diary/'+  botId)
          .then(response => {
             
            
            

            if(response.status == 200){
               

            
              
              let space = response.data.space;

                let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

                   storedChat.then((result)=>{

                       if(result != null ){

                           

                          

                    let finalResult = JSON.parse(result);

                        let userSpace = finalResult.pet_spaces.filter((space)=>{
                          return space.space_id == response.data.space.space_id
                        })

                        if(userSpace.length > 0){


                        }else{

                          finalResult.pet_spaces.unshift(response.data.space);

                          this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

                     let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                     
                   this.$root.ChatList = fullList;

                     this.$root.sortChatList();

                      this.SetUnread();


                        }

                        this.openChat(response.data.space.space_id,true)
                      
                     this.$root.showDiarySettings = false;
                      

                 }

                   } )

              
                    this.$root.showDiarySettings = false;
             
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert('Oops!','Something went wrong, please try again','error')
              this.$root.showDiarySettings = false;
                this.$router.push({ path: '/channels/' });
            
          })
    
    },
        selectEmoji(emoji) {
     

     // small screens
           this.$refs.bottomSm.input =  this.$refs.bottomSm.input + emoji.data
            this.$refs.bottomSm.contentInWord = this.$refs.bottomSm.compiledMarkdown;
       // large screen
            this.$refs.bottomLg.input =  this.$refs.bottomLg.input + emoji.data
              this.$refs.bottomLg.contentInWord = this.$refs.bottomLg.compiledMarkdown;

               this.$root.channelBottomComp.showSend = true;
             
    
    },   
    searchChatList:function(){

       let query = this.searchValue.toLowerCase;

      let chatListResult = this.$root.ChatList.filter((chat)=>{

          let nameValue = '';

          if(chat.type == 'Team' || chat.type == 'Channel'){

             nameValue = chat.name.toLowerCase();

          }

          if(chat.type == 'Bot' && chat.bot_data != null){
             nameValue = chat.bot_data.name.toLowerCase();
          }

          if(chat.type == 'Direct'){

            nameValue = chat.userInfo.username.toLowerCase()

          }

         
         
      return nameValue.includes(this.searchValue.toLowerCase());

       

                
       });

       

      this.$root.searchChatList = chatListResult;

      
    },
       TopIsVisible:function(isVisible, entry){
           if(isVisible){
           
              
           }
       },
       controlChatPath:function(){
       
        if(!this.$root.isLogged){
  
         if(this.$route.params.spaceId != undefined){


                if(this.$router.currentRoute.path.indexOf('payment') >= 0){

                 this.$root.showPaymentProcessingBoard = true;

                   return;

               }

         }



            this.$root.checkIfUserIsLoggedIn();
         return;
        }else{
          
            if(this.$route.params.spaceId != undefined){

               if(this.$router.currentRoute.path.indexOf('payment') >= 0){

               this.$root.showPaymentProcessingBoard = true;

               }else{

                  this.liveSessionIsOpen = false;
      this.chatShareIsOpen = false;
      this.imageCropperIsOpen = false;

                let storedMsg = this.$root.getLocalStore('full_space_' + this.$route.params.spaceId + this.$root.username);


                    storedMsg.then((result)=>{


                      

                        if(result != null){

                            this.openChat(this.$route.params.spaceId,false)

                        }else{

                          
                            this.$root.fromSupportDirectlink = false;
                          
                           this.$router.push({ path: '/channels/' + this.$route.params.spaceId  +'/payment' });
                             

                         
                        }
                    })


    
        
       

               }

            
     
           }
        }

        // when users is coming from a direct message

            if(this.$root.autoOpenChat){
   
            this.liveSessionIsOpen = false;
      this.chatShareIsOpen = false;
      this.imageCropperIsOpen = false;
      this.chatIsOpen = true;
        
         this.openChat(this.$root.autoOpenChatId,true)
        this.messageIsDone = false;
             

            }

          if(this.$root.autoOpenDiary){
        
             this.checkDiary();

            this.$router.push({ path: '/channels/engine/diary/' + this.$root.tempDiaryId });

             

          }

          if(this.$route.params.bot_id){

             this.checkDiary();

          }


         
       },
        openChat:function(space_id,redirect){

           // handle random qoutes

          function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
      }

        this.$root.chatComponent.selectedQuoteId =  getRandomInt(0,9); 

      // ends


          if(this.$root.selectedSpace.general_spaceId != space_id ){

             if(this.$root.TrackLastSubSpace.length != 0 && space_id == this.$root.TrackLastSubSpace[0]){

                if(redirect)
                {
              this.$router.push({ path: '/channels/' + this.$root.TrackLastSubSpace[1]  +'/content' });
                }

                      
              
              this.$root.chatComponent.fetchMessages(this.$root.TrackLastSubSpace[1] );
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;
                 
       
                     return;

             }else{

               

               if(redirect)
                {
              this.$router.push({ path: '/channels/' + space_id +'/content' });
                }
              
              this.$root.chatComponent.fetchMessages(space_id);
              this.$root.chatComponent.messageIsDone = false;
           this.$root.chatComponent.chatIsOpen = true;

             }

          }
               
         
           

       },
       goBack:function(){

           window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
           this.chatInnerSideBar = false;
       },
        showCreateChannel: function(){

           this.$root.componentIsLoading = true;

            this.$router.push({ path: '/channels/create' });

          this.chatbarContent = '';
          this.chatInnerConent = '';

         
              this.chatbarContent = 'create_channel';
         
         
        },
        showCodeEditor:function(){
           this.$root.componentIsLoading = true;
            this.$root.codeFromChat = false;
            this.$router.push({ path: '/channels/' + this.$root.selectedSpace.space_id +'/editor' });
        },
         fetchChatList: function(){

           

          if(this.$root.checkauthroot == 'auth'){

             if(this.$root.ChatList.length == 0 ){

                this.$root.loadingChatList = true;
             this.$root.loadingIsError = false;


                let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

            storedChat.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                      this.$root.baseChatList = finalResult;

                       this.$root.channelChats = finalResult.channels;

                     let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                     
                   this.$root.ChatList = fullList;

                  
                     this.$root.sortChatList();

                      this.SetUnread();

                   
                      

                      this.$root.updateSpaceMessages();

                        this.$root.loadingChatList = false;

                 }else{
            
           
           
             axios.get('/fetch-chat-list/' + this.$root.userDeviceId)
      .then(response => {
      
      if (response.status == 200) {
         
          let responseList = response.data;


          this.$root.baseChatList = response.data;
            this.$root.channelChats = responseList.channels;
          this.$root.ChatList = responseList.channels.concat(responseList.direct_messages, responseList.pet_spaces);


                
             
            
           this.$root.LocalStore('user_chat_list_new_' + this.$root.username,response.data,false,'sort_chat');

            this.$root.sortChatList();

             this.$root.loadingChatList = false;

     }
       
     
     })
     .catch(error => {

       

        this.showAlert('Oops!','Unable to fetch channels','error');

           this.loadingChatList = false;
           this.loadingIsError = true;
       
      
     }) 

                 }
            })

             }else{
                 this.$root.updateSpaceMessages();
                 
             }
         
          }

        
       },
       
         SetUnread: function(){

            this.$root.ChatList.map((space)=>{

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
          if(this.$root.selectedSpace.unread != 0){
        //      let newUnreadMsg = {
        //      content: 'You have ' + this.$root.selectedSpace.unread + ' unread messages',
        // created_at: moment().subtract(1,'hours'),
        //  message_id: this.makeUUID(),
        // type:'unread',
        //      };

        //       newUnreadMsg.initialSize = 200
        //     newUnreadMsg.id = newUnreadMsg.message_id
        //     newUnreadMsg.index_count = this.$root.returnLastIndex() + 1;

        //   let msgCount = this.$root.Messages.length;

        //    let msgIndex = msgCount - this.$root.selectedSpace.unread;

        //     this.$root.Messages.splice(msgIndex,0,newUnreadMsg);

         // mark the space as read
           this.$root.markSpaceRead(this.$root.selectedSpace.space_id);

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

                if(finalResult.length != 0){

                    for (let index = 0; index < finalResult.length; index++) {

                    

                       setTimeout(() => {

                              this.$root.sendTextMessage(finalResult[index]);
                         
                       }, 2000);

                    



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

                  let messageData = {
               space_id: this.$root.selectedSpace.space_id,
               new_messages: response.data[0]
                  };
    
               this.$root.handleSpaceData([messageData]);


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

        

           let intialCount = 0;

          messageArray.map((msg)=>{
               msg.id = msg.message_id
               msg.initialSize = 200
               msg.index_count = intialCount++;



           });

       

         return messageArray;

      },

       fetchMessages:function(spaceId){


          // set autoOpen to finalResult
           this.$root.autoOpenChat = false;
 
         // set messages to null
          this.$root.Messages = null;
          this.errorLoadingMessage = false;

          // set subspaceUnread to 0

           this.$root.selectedSpaceSubMessages = 0;


         // clear diary suggestions
          this.$root.botSuggestionArray = [];


         this.messageIsDone = false;
         // proceed if user is logged in
         if(this.$root.checkauthroot == 'auth'){

         
        
        // sub sapce tracker
            this.$root.TrackLastSubSpace = [];

        // get the space data from local storage

          let storedMsg = this.$root.getLocalStore('full_space_' + spaceId + this.$root.username);

            storedMsg.then((result)=>{

               

               if(result != null ){

                 

               let finalResult = JSON.parse(result);

              

         
            this.$root.spaceFullData = finalResult;

          let returnedData = this.handleResults(finalResult.messages);

           

          this.$root.Messages = returnedData;

           this.$root.selectedSpace  = [];

     

           this.$root.selectedSpace = finalResult.space;

            this.$root.selectedSpace.subspace_messages = 0;

              if(finalResult.space.type == 'SubSpace'){


                 let generalSpace = finalResult.space.gen_space;


                    this.$root.selectedGenSpaceType = finalResult.space.gen_space.type;

                  generalSpace.space_id =  finalResult.space.space_id;

                  generalSpace.type = finalResult.space.type;

                   generalSpace.description = finalResult.space.description;

                     generalSpace.payment_option = finalResult.space.payment_option;



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

                this.setShareLink();  

            // check for space in chatlist
              if(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'Direct'){

                 this.$root.addSpaceToChatList(this.$root.selectedSpace.space_id);

              }  

           // generate unread msg and the mark as read
         this.generateUnreadMessage();
          

           // check unreadMessages in subspaces

         if(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'SubSpace'){

           this.handleUnreadUpdate();

         }


       setTimeout(() => {

          if( this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team'  ){
               

                if(this.$refs.messageContainer){

                       this.$refs.messageContainer.scrollToBottom();

                }

                if(  this.$refs.messageContainersmall){

                     this.$refs.messageContainersmall.scrollToBottom();
                  
                }
              
             

        

          }else{

              if(this.$refs.messageContainer){

                       this.$refs.messageContainer.scrollToBottom();

                }

                if(  this.$refs.messageContainersmall){

                     this.$refs.messageContainersmall.scrollToBottom();
                  
                }
         

          }

        
         
        
            
        },1000);

       
            this.messageIsDone = true;
        
       
       


       
       // check for unsent messages and resend


            let unsentStoredMsg = this.$root.getLocalStore('unsent_messages_' + this.$route.params.spaceId  + this.$root.username);

           unsentStoredMsg.then((result)=>{

             
                this.resendMessages();

          

           });



               this.fetchSpaceInfo();


               }else{

                    axios.get( '/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {

      if (response.status == 200) {





     if( response.data.space.space_id == this.$route.params.spaceId ){

       this.$root.spaceFullData = response.data;


      this.$root.LocalStore('full_space_' +  this.$route.params.spaceId  + this.$root.username,response.data);

      this.$root.LocalStore('unread_messages_' + this.$route.params.spaceId  + this.$root.username,[]);

       let returnedData = this.handleResults(response.data.messages);

    
       this.$root.Messages = returnedData;


               this.$root.selectedSpace = response.data.space;
                this.$root.selectedSpace.subspace_messages = 0;

              if(response.data.space.type == 'SubSpace'){


                 let generalSpace =  response.data.space.gen_space;


                    this.$root.selectedGenSpaceType = response.data.space.gen_space.type;

                  generalSpace.space_id =   response.data.space.space_id;

                generalSpace.payment_option = response.data.space.payment_option;

                  generalSpace.type =  response.data.space.type;


                    generalSpace.description = response.data.space.description;

                  generalSpace.general_spaceId =  response.data.space.general_spaceId;

            



              let subSpaceData =  response.data.space.sub_space_data;




             this.$root.selectedSubSpaceName =  response.data.space.name;

             this.$root.selectedSubSpaceType = subSpaceData.type;



               generalSpace.sub_spaces =  response.data.space.sub_spaces;



               this.$root.selectedSpace = generalSpace;


              }

              if(response.data.space.type == 'Bot'){

            this.$root.botSuggestionArray = response.data.patterns;

         this.$root.LocalStore('bot_latest_suggestions' + this.$root.selectedSpace.space_id  + this.$root.username,response.data.patterns);

              }

               // check unreadMessages in subspaces

         if(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'SubSpace'){

           this.handleUnreadUpdate();

         }

      this.$root.TrackLastSubSpace.push(this.$root.selectedSpace.general_spaceId, this.$route.params.spaceId);

       this.$root.selectedSpaceMembers = response.data.members;

       this.$root.msgScrollComponent = this.$refs;

         this.setShareLink();  

            // check for space in chatlist
              if(this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'Direct'){

                 this.$root.addSpaceToChatList(this.$root.selectedSpace.space_id);

              }  

              // generate unread msg and the mark as read
         this.generateUnreadMessage();
          



      setTimeout(() => {

         
           this.$refs.messageContainer.scrollToBottom();
          
              this.$refs.messageContainersmall.scrollToBottom();
         
          
        },1000);

         
            this.messageIsDone = true;

           
       

    
    }

     }


     })
     .catch(error => {

       this.errorLoadingMessage = true;

     })

               }

        
       


    if( this.$root.selectedSpace.type == 'Bot'){

        this.checkForNewNotes();
     
            this.botMessager();
     
      }


           
            


                });
         }

     

       },
       handleUnreadUpdate:function(){

           let storedSubChat = this.$root.getLocalStore('sub_channels_' + this.$root.selectedSpace.general_spaceId  + this.$root.username);

             storedSubChat.then((result)=>{
             

                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      finalResult = finalResult.sub_channels;
                     if(this.checkIfisOwner()){

               this.$root.subSpaces =  finalResult;



           }else{

             this.$root.subSpaces = finalResult.filter((space)=>{

               return space.type == 'Public' || (space.type == 'Private' && space.is_member == true);

             });
           }

                    this.checkForUnreadSubSpace(this.$root.subSpaces,false);

                       
                 }

             })

       },
       checkForUnreadSubSpace:function(subSpaces,returnCount = true){

                 let fullCount = 0;
    
          subSpaces.map((space)=>{

               let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + space.space_id +  this.$root.username);
  
          unreadStoredMsg.then((result)=>{
  
            if(result != null){
  
              let finalResultUnread = JSON.parse(result);
          
                 

              space.unread = finalResultUnread.length;

               fullCount += space.unread;

             
  
            }else{
               space.unread = 0;
            }

        
          if(returnCount){

            return fullCount;

          }else{

            this.$root.selectedSpaceSubMessages = fullCount;
          }
            
  

          
          });

            })
          
        
         

         



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
        checkForNewNotes:function(){

        axios.get( '/fetch-diary-notes-' + this.$root.selectedSpace.bot_data.bot_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('diary_notes_' + this.$root.selectedSpace.space_id  + this.$root.username,response.data);
        
     
                   let finalResult = response.data.diary_notes;

                   

                      this.$root.diaryNotes = finalResult
  
     }
       
     
     })
     .catch(error => {

      
    
     }) 

        },
  
        fetchSpaceInfo: function(){

            axios.get('/fetch-space-info-'+ this.$root.selectedSpace.space_id)
   .then(response => {

   if (response.status == 200) {

         let storedMsg = this.$root.getLocalStore('full_space_' + this.$root.selectedSpace.space_id + this.$root.username);
       
           storedMsg.then((result)=>{

               if(result != null){

                   let finalResult = JSON.parse(result);

                    finalResult.space = response.data.space;

                      
                        if(response.data.space.type == 'SubSpace'){


                 let generalSpace =  response.data.space.gen_space;


                    this.$root.selectedGenSpaceType = response.data.space.gen_space.type;

                  generalSpace.space_id =   response.data.space.space_id;

                generalSpace.payment_option = response.data.space.payment_option;

                  generalSpace.type =  response.data.space.type;


                    generalSpace.description = response.data.space.description;

                  generalSpace.general_spaceId =  response.data.space.general_spaceId;

            



              let subSpaceData =  response.data.space.sub_space_data;




             this.$root.selectedSubSpaceName =  response.data.space.name;

             this.$root.selectedSubSpaceType = subSpaceData.type;



               generalSpace.sub_spaces =  response.data.space.sub_spaces;



               this.$root.selectedSpace = generalSpace;


              }else{

                  this.$root.selectedSpace = response.data.space;

              }

                 
                    
                    
                  
                  finalResult.members = response.data.members;

                 
                  

            this.$root.LocalStore('full_space_' +  this.$root.selectedSpace.space_id  + this.$root.username,finalResult);

              


               }



              
           });

      
            // update chatList

             let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);
            
             storedChat.then((result)=>{

               if(result != null){

                   let finalResult = JSON.parse(result);   

                 
                 
                     
                

                   if(response.data.space.type == 'Channel' || response.data.space.type == 'Team'){
                        finalResult.channels.map((chat)=>{
                          if(chat.space_id == this.$root.selectedSpace.space_id){

                             chat.name =  response.data.space.name;

                             chat.image_name = response.data.space.image_name;

                             chat.image_extension = response.data.space.image_extension;

                             chat.background_color = response.data.space.background_color;

                          }
                        })
                   }

                   if(response.data.space.type == 'Direct'){

                      finalResult.direct_messages.map((chat)=>{
                          if(chat.space_id == this.$root.selectedSpace.space_id){

                             chat.userInfo =  response.data.space.userInfo;

                          
                          }
                        })

                   }

                   if(response.data.space.type == 'Bot'){

                        

                      finalResult.pet_spaces.map((chat)=>{
                          if(chat.space_id == this.$root.selectedSpace.space_id){
                             
                             chat.bot_data =  response.data.space.bot_data;

                         
                          }
                        })

                   }
                      
                    let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                      this.$root.ChatList = fullList;

                     this.$root.sortChatList();

                      this.SetUnread();

                    
                      this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

              


               }



              
           });
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
     },
     
}
</script>
<style scoped>
.scroller::-webkit-scrollbar {
  width: 5px;
}


.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
.scrollerinfo::-webkit-scrollbar {
  width: 5px;
}

.scrollerLg::-webkit-scrollbar {
  width: 6px;
}


.scrollerLg::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
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