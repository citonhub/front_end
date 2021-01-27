<template>
    <div style="font-family:BodyFont;">

       <!-- date time -->
        
         <div class="col-12  text-center" v-if="source.showDate != undefined" :id="'message'+ source.id">
            <span  class=" py-1 px-2  " style="font-size:11px;text-transform:none;color:white; background:#3C87CD;border:1px solid #3C87CD;border-radius:10px;">{{covertDate(source.showDate)}}</span>
         </div>

         <!-- ends -->

            <!-- user joined -->
        
         <div class="col-12  text-center" v-if="source.type == 'join'"  :id="'message'+ source.id">
          
               <span  class=" py-1 px-2  " style="font-size:11px;text-transform:none;color:white; background:#3C87CD;border:1px solid #3C87CD;border-radius:10px;"  v-if="source.username != that.$root.username">{{source.username}} joined</span>

                 <span  class=" py-1 px-2  " style="font-size:11px;text-transform:none;color:white; background:#3C87CD;border:1px solid #3C87CD;border-radius:10px;"  v-else>You joined</span>

         </div>


          <!--unread messages -->
        
         <div class="col-12  text-center" v-if="source.type == 'unread'"  :id="'message'+ source.id">

                 <span  class=" py-1 px-2  " style="font-size:11px;text-transform:none;color:white; background:#3C87CD;border:1px solid #3C87CD;border-radius:10px;" >{{source.content}}</span>
         </div>

         <!-- text message -->
        <div elevation-1 class="col-12 py-0 " :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''"  v-if="(source.type == null  && source.is_reply != '1' || source.type == 'text'  && source.is_reply != '1' || source.type == 'action') && checkOwner(source.user_id)">
           <div class="row">
             <div class="col-lg-7 col-md-8 px-0 px-md-2 offset-lg-5 offset-md-4 d-flex flex-row-reverse"  @click="showMoreOption(source)" >
                 

                  <v-card  elevation-1 class="py-1 px-2 mr-2" :id="'messageWrap' + source.message_id" style="max-width:80%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                     
                    
                    
                       <span style="color:white !important;font-size:13px;" class="handleText" v-html="source.content" > </span>
                    
                      
                       
                  <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->

                  <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>


         <div elevation-1 class="col-12 py-0 mt-2" :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="(source.type == null  && source.is_reply != '1' || source.type == 'text'  && source.is_reply != '1' || source.type == 'action'  && source.is_reply != '1') && checkOwner(source.user_id) == false">
           <div class="row">
             <div class="col-lg-7 col-md-8  px-1 px-md-2  d-flex flex-row"   @click="showMoreOption(source)">
                 

                         <div 
                     :style="imageStyle(30,source.user_profile,source.user_type)" @click.stop="goToProfile(source.username)"  ></div> 


                  <v-card elevation-1 :id="'messageWrap' + source.message_id" class="py-1 px-2 ml-2" style="max-width:80%;  border:1px solid transparent; min-width:200px;background:#ffffff; border-radius:7px; border-bottom-left-radius:0px;">

                    <div class="text-left my-0 py-0 d-flex flex-row" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)">{{source.username}} </span> <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>
                     
                       <span style="font-size:13px;" v-html="source.content" > </span>
                     

                 <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                    
                  </v-card> 
             </div>
           </div>
        </div>

        <!-- ends -->

    <!-- message reply -->
       


        <div elevation-1 :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" class="col-12 py-0 "  v-if="(source.replied_message != undefined && source.is_reply == '1') && checkOwner(source.user_id)">
           <div class="row">
             <div class="col-lg-7 col-md-8 px-0 px-md-2 offset-lg-5 offset-md-4 d-flex flex-row-reverse"   @click="showMoreOption(source)">
                 
                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 px-2 mr-2" style="max-width:80%;  border:1px solid transparent; min-width:200px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                     <!-- comment -->

                   <div class="d-flex flex-column py-2 px-1" style="border-left:3px solid #ffffff; border-radius:0px; background:#d6e6f5;"  @click.stop="scrollToMessage(source.replied_message.message_id)">
                          <template v-if="source.replied_message.type == null || source.replied_message.type == 'text' || source.replied_message.type == 'action'">
                               <div style="font-size:13px; white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{ getReplyMsg(source.replied_message) }}</div>
                          </template>

                          <template v-if="source.replied_message.type == 'video'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <v-icon>las la-video</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ shortenContent(source.replied_message.video.display_name ,25)}}</span>
                   
                     
                    </div>
                          </template>

                           <template v-if="source.replied_message.type == 'code'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                      <v-icon>las la-code</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ source.replied_message.code.name + '.' + languageExtensions(source.replied_message.code.language_type)}}</span>
                   
                     
                    </div>
                          </template>
                           <template v-if="source.replied_message.type == 'project'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                      <v-icon>las la-laptop-code</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{shortenContent(source.replied_message.project.title ,25)}}</span>
                   
                     
                    </div>
                          </template>
                    <template v-if="source.replied_message.type == 'file'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <v-icon>las la-file-alt</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ shortenContent(source.replied_message.file.display_name ,25)}}</span>
                   
                     
                    </div>
                    </template>
                    <template v-if="source.replied_message.type == 'audio'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <v-icon>las la-microphone</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ shortenContent(source.replied_message.audio.display_name ,25)}}</span>
                   
                     
                    </div>
                          </template>

                           <template v-if="source.replied_message.type == 'image'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <img width="50" height="40" :src="'/imgs/space/' + source.replied_message.image[0].image_name  + '.' + source.replied_message.image[0].image_extension" class="d-inline-block "/> 


                     
                     <span style="font-size:13px;" class="ml-2" >Images</span>
                   
                     
                    </div>
                          </template>
                         
                          <div class="text-right">
                               <span style="color:gray;font-size:11px;">{{source.replied_message.username}}</span>
                          </div>
                  </div>

                  <!-- ends -->

                 <!-- <template v-if="checkIfMsgIsLong(source)">
                       <span style="color:white;font-size:13px;" v-html="shortenContent(source.content,300)" :id="'shortContent' + source.message_id + screenType"> </span>
                       <span :id="'moreContentbtn' + source.message_id + screenType" @click.stop="showFullMsg(source)" class="mx-1 px-1 py-1" style="color:#3C87CD;font-size:13px; background:white;border:1px solid transparent;border-radius:8px;">more</span>
                         <span style="color:white;font-size:13px;display:none;" :id="'fullContent' + source.message_id + screenType" v-html="source.content" > </span>
                     </template> -->
                    
                       <span style="color:white !important;font-size:13px;" class="handleText" v-html="source.content" > </span>
                   
                      
                       
                  <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->

                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>



         <div elevation-1 :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" class="col-12 py-0 mt-2" v-if="(source.replied_message != undefined && source.is_reply == '1') && checkOwner(source.user_id) == false">
           <div class="row">
             <div class="col-lg-7 col-md-8 px-1 px-md-2  d-flex flex-row"  @click="showMoreOption(source)">
                   <div 
                     :style="imageStyle(30,source.user_profile,source.user_type)" @click.stop="goToProfile(source.username)"   ></div> 

                  <v-card  :id="'messageWrap' + source.message_id" elevation-1 class="py-1 px-2 ml-2" style="max-width:80%;  border:1px solid transparent; min-width:200px;background:#ffffff; border-radius:7px; border-bottom-left-radius:0px;">

                    <div class="text-left my-0 py-0 d-flex flex-row" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)" >{{source.username}}</span>  <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>

                  <!-- comment -->
                   <div class="d-flex flex-column py-2 px-1" style="border-left:3px solid #3C87CD; background:#d6e6f5;"   @click.stop="scrollToMessage(source.replied_message.message_id)">
                           <template v-if="source.replied_message.type == null || source.replied_message.type == 'text' || source.replied_message.type == 'action'">
                               <div style="font-size:13px; white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{ getReplyMsg(source.replied_message) }}</div>
                          </template>

                          <template v-if="source.replied_message.type == 'video'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <v-icon>las la-video</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ shortenContent(source.replied_message.video.display_name ,25)}}</span>
                   
                     
                    </div>
                          </template>

                           <template v-if="source.replied_message.type == 'code'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                      <v-icon>las la-code</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ source.replied_message.code.name + '.' + languageExtensions(source.replied_message.code.language_type)}}</span>
                   
                     
                    </div>
                          </template>
                           <template v-if="source.replied_message.type == 'project'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                      <v-icon>las la-laptop-code</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{shortenContent(source.replied_message.project.title ,25)}}</span>
                   
                     
                    </div>
                          </template>
                    <template v-if="source.replied_message.type == 'file'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <v-icon>las la-file-alt</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ shortenContent(source.replied_message.file.display_name ,25)}}</span>
                   
                     
                    </div>
                    </template>
                    <template v-if="source.replied_message.type == 'audio'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <v-icon>las la-microphone</v-icon>


                     
                     <span style="font-size:13px;" class="ml-2" >{{ shortenContent(source.replied_message.audio.display_name ,25)}}</span>
                   
                     
                    </div>
                          </template>

                           <template v-if="source.replied_message.type == 'image'">
                          <div class="d-flex flex-row py-0 my-0" style="align-items:center;">
                   
                   <img width="50" height="40" :src="'/imgs/space/' + source.replied_message.image[0].image_name  + '.' + source.replied_message.image[0].image_extension" class="d-inline-block "/> 


                     
                     <span style="font-size:13px;" class="ml-2" >Images</span>
                   
                     
                    </div>
                          </template>
                          <div class="text-right">
                               <span style="color:gray;font-size:11px;">{{source.replied_message.username}}</span>
                          </div>
                  </div>
                  <!-- ends -->

                  <!-- ends -->
                      <!-- <template v-if="checkIfMsgIsLong(source)">
                       <span style="font-size:13px;" v-html="shortenContent(source.content,300)" :id="'shortContent' + source.message_id + screenType"> </span>
                       <span :id="'moreContentbtn' + source.message_id + screenType" @click.stop="showFullMsg(source)" class="mx-1 px-1 py-1" style="color:#3C87CD;font-size:13px; background:white;border:1px solid transparent;border-radius:8px;">more</span>
                         <span style="font-size:13px;display:none;" :id="'fullContent' + source.message_id + screenType" v-html="source.content" > </span>
                     </template> -->
                   
                       <span style="font-size:13px;" v-html="source.content" > </span>
                    

                      <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->

                     
                  </v-card> 
             </div>
           </div>
        </div>

      <!-- ends -->

     <!-- code message -->
          <div class="col-10  py-0 offset-2" :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'code' && checkOwner(source.user_id)">
           <div class="row">
             <div class="col-lg-5 px-0 px-md-2 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"   @click="showMoreOption(source)">
                

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 px-2 mr-2" style=" width:90%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                     
                     
                   <code-box color="#ffffff" v-if="source.loading == false"  :topMargin="5"  
                   :codeContent="source.code.content" 
                   :messageId="source.message_id" 
                   :filename="source.code.name + '.' + languageExtensions(source.code.language_type)" 
                   :codeLanguage="source.code.language_type"></code-box>

                    <div class="col-12 py-1 px-1"  v-if="source.loading" >
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#ffffff" >mdi-xml mdi-18px</v-icon>
                     </div>
                     <div class="col-9 py-0 my-0 d-flex pt-2" style="align-items:center;justify-content:center; ">
                       

                        <v-progress-linear color="#ffffff" rounded height="5" indeterminate></v-progress-linear>
                     </div>
            
                  </div>
              </div>
                        
                <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->


                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>


         <div class="col-11 py-0 " :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''"  v-if="source.type == 'code' && checkOwner(source.user_id) == false">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-1 px-md-2 d-flex flex-row"   @click="showMoreOption(source)">
                   <div  @click.stop="goToProfile(source.username)"
                     :style="imageStyle(30,source.user_profile,source.user_type)"   ></div> 

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 px-2 ml-2" style=" width:80%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                      <div class="text-left d-flex" style="align-items:center:">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)">{{source.username}}</span> <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                  </div>

                   <code-box color="#333333" v-if="source.loading == false"  :topMargin="13"  
                   :codeContent="source.code.content" 
                   :messageId="source.message_id" 
                   :filename="source.code.name + '.' + languageExtensions(source.code.language_type)" 
                   :codeLanguage="source.code.language_type"></code-box>

                     <!-- time -->
                  <div class="text-right">
                         <span style="color:#333333;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         
                  </div>
                  <!-- ends -->

                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->

                  
                  </v-card> 

                 
             </div>
           </div>
        </div>

      <!-- ends -->


   <!-- video message -->
         <div class="col-10 py-0 offset-2" :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'video' && checkOwner(source.user_id) ">
           <div class="row">
             <div class="col-lg-5 px-0 px-md-2 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"   @click="showMoreOption(source)">
                 

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 px-2 mr-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                    

                     <div class="col-12 py-1 px-1"  v-if="source.loading || source.video == null" >
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#ffffff" style="font-size:23px;">las la-video</v-icon>
                     </div>

                     <template v-if="source.progressValue < 100">

                       <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center;justify-content:center; ">
                       

                        <v-progress-linear color="#ffffff" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>

                      <div class="col-3 py-0 my-0 text-center">
                           <span style="font-size:10px;color:#ffffff;" >{{ source.progressValue}}%</span>
                     </div>

                     </template>

                     <template v-else>

                       <div class="col-9 py-0 my-0 d-flex flex-column pt-2" style="align-items:center;justify-content:center; ">

                        <v-progress-linear color="#ffffff" height="5" rounded indeterminate></v-progress-linear>
                         <span style="font-size:10px;color:#ffffff;" >processing...</span>
                     </div>

                     
                     </template>
                     
            
                  </div>
                 </div>

                <video-player v-else :videoUrl="'/videos/' + source.video.video_name + '.mpd'" :backgroundColor="source.video.background_color" style="width:100%;"
               :backgroundImg="'/videos/previewImage/'+ source.video.preview_image_url" :playerId="'small' + source.message_id"  :screenType="screenType"> </video-player>
                        
                 <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->

                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>


          <div class="col-10 py-0 " :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'video' && checkOwner(source.user_id) == false ">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-1 px-md-2 d-flex flex-row"   @click="showMoreOption(source)">
                   <div 
                     :style="imageStyle(30,source.user_profile,source.user_type)"  @click.stop="goToProfile(source.username)" ></div> 

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                         <div class="text-left my-0 py-0 d-flex flex-row" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)">{{source.username}} </span> <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>


                   <video-player :screenType="screenType"  :videoUrl="'/videos/' + source.video.video_name + '.mpd'" :backgroundColor="source.video.background_color" style="width:100%;"
               :backgroundImg="'/videos/previewImage/'+ source.video.preview_image_url" :playerId="'small' + source.message_id" > </video-player>
                        
                          <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
               
                  </v-card> 

                 
             </div>
           </div>
        </div>

    <!-- ends -->


    <!-- audio message -->
         <div class="col-10 py-0 offset-2" :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="(source.type == 'audio') && checkOwner(source.user_id)">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-0 px-md-2 offset-lg-7 offset-md-6 d-flex flex-row-reverse"  @click="showMoreOption(source)">
                

                  <v-card  :id="'messageWrap' + source.message_id" elevation-1 class="py-2 pt-3 px-2 mr-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                    


                     <div class="col-12 py-1 px-1"  v-if="source.loading &&  source.audio == null" >
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#ffffff" style="font-size:23px;">las la-microphone</v-icon>
                     </div>

                     <template v-if="source.progressValue < 100">

                       <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center;justify-content:center; ">
                       

                        <v-progress-linear color="#ffffff" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>

                      <div class="col-3 py-0 my-0 text-center">
                           <span style="font-size:10px;color:#ffffff;" >{{ source.progressValue}}%</span>
                     </div>

                     </template>

                     <template v-else>

                       <div class="col-9 py-0 my-0 d-flex flex-column pt-2" style="align-items:center;justify-content:center; ">

                        <v-progress-linear color="#ffffff" height="5" rounded indeterminate></v-progress-linear>
                         <span style="font-size:10px;color:#ffffff;" >processing...</span>
                     </div>

                     
                     </template>
                     
            
                  </div>
                 </div>

                  <audio-player class="mt-n1" v-else :file="'/audio/' + source.audio.audio_name + '.' + source.audio.audio_extension" :playerId="source.message_id"  :colorBase="'#ffffff'"></audio-player>
                        
                    <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->

                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>


         <div class="col-10 py-0 " :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="(source.type == 'audio' &&  source.audio != null) && checkOwner(source.user_id) == false">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-1 px-md-2 d-flex flex-row"   @click="showMoreOption(source)">
                   <div 
                     :style="imageStyle(30,source.user_profile,source.user_type)" @click.stop="goToProfile(source.username)"  ></div> 

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                       <div class="text-left my-0 py-0 d-flex flex-row" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)">{{source.username}} </span> <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>
                   <audio-player class="mt-n1"  :file="'/audio/' + source.audio.audio_name + '.' + source.audio.audio_extension" :playerId="source.message_id"  :colorBase="'#333333'"></audio-player>
                 
                 <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->

                  </v-card> 

                 
             </div>
           </div>
        </div>

      <!-- ends -->

       <!-- image message -->

         <div class="col-10 py-0 offset-2" :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'image' && checkOwner(source.user_id)">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-0 px-md-2 offset-lg-7 offset-md-6 d-flex flex-row-reverse"   @click="showMoreOption(source)">
               

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 px-2 mr-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                    
                     <div class="col-12 py-1 px-1"  v-if="source.loading" >
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#ffffff" style="font-size:23px;">las la-image</v-icon>
                     </div>

                     <template v-if="source.progressValue < 100">

                       <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center;justify-content:center; ">
                       

                        <v-progress-linear color="#ffffff" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>

                      <div class="col-3 py-0 my-0 text-center">
                           <span style="font-size:10px;color:#ffffff;" >{{ source.progressValue}}%</span>
                     </div>

                     </template>

                     <template v-else>

                       <div class="col-9 py-0 my-0 d-flex pt-2 flex-column pr-2" style="align-items:center;justify-content:center; ">

                        <v-progress-linear color="#ffffff" height="5" rounded indeterminate></v-progress-linear>
                         <span style="font-size:10px;color:#ffffff;" >processing...</span>
                     </div>

                     
                     </template>
                     
            
                  </div>
                 </div>
                  <images  :imageArray="source.image" v-else></images>
                        
                   <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->

                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>


         <div class="col-10 py-0 " :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'image' && checkOwner(source.user_id) == false">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-1 px-md-2  d-flex flex-row"   @click="showMoreOption(source)">
                   <div 
                     :style="imageStyle(30,source.user_profile,source.user_type)"  @click.stop="goToProfile(source.username)" ></div> 

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                       <div class="text-left my-0 py-0 d-flex flex-row" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)">{{source.username}} </span> <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>
                     <images :imageArray="source.image" ></images>
              
                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                 
                  </v-card> 

                 
             </div>
           </div>
        </div>

        <!-- ends -->


   <!-- project message -->
         <div class="col-10 py-0 offset-2" :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'project' && checkOwner(source.user_id)">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-0 px-md-2 offset-lg-7 offset-md-6 d-flex flex-row-reverse"   @click="showMoreOption(source)">
                  
                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-2 pt-3 px-2 mr-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                    
                   <div class="row">
                      <div class="col-2 text-center d-flex py-1" style="align-items:center; justify-content:center;">
                        <v-icon color="#ffffff">las la-laptop-code</v-icon>
                      </div>
                      <div class="col-7 d-flex py-1"  style="align-items:center;">
                           <span style="color:white; font-size:13px;white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{source.project.title}}</span>
                      </div>

                       <div class="col-3 text-right py-1"  style="align-items:center;">
                           <v-btn icon color="#ffffff"  @click.stop="goToProject(source)"> <v-icon>las la-arrow-circle-right</v-icon></v-btn>
                      </div>
                   </div>
                        
                   <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->
                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>

      <div class="col-10 py-0 " :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'project' && checkOwner(source.user_id) == false">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-1 px-md-2 d-flex flex-row"   @click="showMoreOption(source)">
                   <div 
                     :style="imageStyle(30,source.user_profile,source.user_type)"  @click.stop="goToProfile(source.username)" ></div> 

                  <v-card  :id="'messageWrap' + source.message_id"  elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                       <div class="text-left my-0 py-0 d-flex flex-row" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)">{{source.username}} </span> <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>

                   <div class="row">
                      <div class="col-2 text-center d-flex py-1" style="align-items:center; justify-content:center;">
                        <v-icon >las la-laptop-code</v-icon>
                      </div>
                      <div class="col-7 d-flex py-1"  style="align-items:center;">
                           <span style=" font-size:13px;white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{source.project.title}}</span>
                      </div>

                       <div class="col-3 text-right py-1"  style="align-items:center;">
                           <v-btn icon @click.stop="goToProject(source)"> <v-icon>las la-arrow-circle-right</v-icon></v-btn>
                      </div>
                   </div>
                 <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                
                  </v-card> 

                 
             </div>
           </div>
        </div>

    <!-- ends -->


         <div class="col-10 py-0 offset-2" :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''"  v-if="source.type == 'file' && checkOwner(source.user_id)">
           <div class="row">
             <div class="col-lg-5 col-md-6 px-0 px-md-2 offset-lg-7 offset-md-6 d-flex flex-row-reverse"   @click="showMoreOption(source)">
                 

                  <v-card :id="'messageWrap' + source.message_id" elevation-1 class="py-2 pt-3 px-2 mr-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                    
                     <div class="col-12 py-1 px-1"  v-if="source.loading" >
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#ffffff" style="font-size:23px;">las la-file-alt</v-icon>
                     </div>

                     <template v-if="source.progressValue < 100">

                       <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center;justify-content:center; ">
                       

                        <v-progress-linear color="#ffffff" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>

                      <div class="col-3 py-0 my-0 text-center">
                           <span style="font-size:10px;color:#ffffff;" >{{ source.progressValue}}%</span>
                     </div>

                     </template>

                     <template v-else>

                       <div class="col-9 py-0 my-0 d-flex flex-column pt-2" style="align-items:center;justify-content:center; ">

                        <v-progress-linear color="#ffffff" height="5" rounded indeterminate></v-progress-linear>
                         <span style="font-size:10px;color:#ffffff;" >processing...</span>
                     </div>

                     
                     </template>
                     
            
                  </div>
                 </div>

                   <div class="row py-1"  v-else>
                      <div class="col-2 text-center d-flex py-1" style="align-items:center; justify-content:center;">
                        <v-icon color="#ffffff">las la-file-alt</v-icon>
                      </div>
                      <div class="col-8 d-flex py-1"  style="align-items:center;">
                           <span style="color:white; font-size:13px;white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{source.file.display_name}}</span>
                      </div>

                       <div  class="col-2 text-center py-1 d-flex"  style="align-items:center;cursor:pointer; justify-content:center;">
                          <v-btn color="#ffffff" icon @click.stop="downloadFile(source)" > <v-icon>mdi mdi-cloud-download</v-icon></v-btn>
                      </div>
                   </div>
                        
                   <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(source.created_at)}}</span> 
                         <span class="ml-1"  v-if="source.loading">
                           <v-icon color="#ffffff" style="font-size:20px;">las la-clock</v-icon>
                         </span>
                         <span class="ml-1" v-else>
                             <v-icon color="#ffffff" style="font-size:20px;">las la-check-double</v-icon>
                         </span>
                  </div>
                  <!-- ends -->

                   <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>

         <div class="col-10 py-0 " :style="source.tagged ? 'background: rgba(60, 135, 205, 0.32);' : ''" v-if="source.type == 'file' && checkOwner(source.user_id) == false">
           <div class="row">
             <div class="col-lg-5 px-1 px-md-2 col-md-6  d-flex flex-row"  @click="showMoreOption(source)">
                   <div 
                     :style="imageStyle(30,source.user_profile,source.user_type)"  @click.stop="goToProfile(source.username)" ></div> 

                  <v-card  :id="'messageWrap' + source.message_id" elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                       <div class="text-left my-0 py-0 d-flex flex-row" style="align-items:center;">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(source.username)">{{source.username}} </span> <span v-if="checkIfAdmin(source) && that.$root.selectedSpace.type != 'Direct'"><v-icon style="font-size:18px;color:#3C87CD;" class="mx-1">las la-check-circle</v-icon></span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(source.created_at)}}</span> 

                  </div>

                   <div class="row">
                      <div class="col-2 text-center d-flex py-1" style="align-items:center; justify-content:center;">
                        <v-icon >las la-file-alt</v-icon>
                      </div>
                      <div class="col-7 d-flex py-1"  style="align-items:center;">
                           <span style=" font-size:13px;white-space: nowrap; overflow:hidden; text-overflow: ellipsis; ">{{source.file.display_name}}</span>
                      </div>

                       <div class="col-3 text-right py-1"  style="align-items:center;">
                           <v-btn icon @click.stop="downloadFile(source)" > <v-icon>mdi mdi-cloud-download</v-icon></v-btn>
                      </div>
                   </div>

                  <!-- more option -->

                   <v-menu
      absolute
      :activator="'#messageWrap' + source.message_id"
       style="z-index:99999999999999999999;"
      
      left
      offset-y
      
    >
    <more-options></more-options>
    </v-menu>

                 

                  <!-- ends -->
                  </v-card> 

                 
             </div>
           </div>
        </div>

         
    </div>
</template>
<script>

  const CodeBox = () => import(
    /* webpackChunkName: "CodeBox" */ './CodeBox.vue'
  );

   const VideoPlayer = () => import(
    /* webpackChunkName: "VideoPlayer" */ './VideoPlayer.vue'
  );

  const AudioPlayer = () => import(
    /* webpackChunkName: "AudioPlayer" */ './AudioPlayer.vue'
  );

  const Images = () => import(
    /* webpackChunkName: "Images" */ './Images.vue'
  );

  const MoreOptions = () => import(
    /* webpackChunkName: "MoreOptions" */ './MoreOptions.vue'
  );

const { htmlToText } = require('html-to-text');
export default {
   props:['source','username','screenType'],
   data(){
        return{      
            that:this,
              viewerType:'',
         loading:false,
         clicks: 0,
         delay:400,
         timer:'',
         showMenu:true,
          items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
        ],
        
        }
    },
    mounted(){

    },
    components:{
      CodeBox,
      MoreOptions,
      VideoPlayer,
      AudioPlayer,
      Images
    },
    methods:{

   handelMessageContent: function(message){

       return this.shortenContent(message.content,200);
    
    },
    downloadFile:function(message){
       
     window.open ('/download-file-' + message.message_id,'_self',false)

    },
    showMoreOption:function(message){

        
       this.$root.replyMessage = message;
          this.$root.chatComponent.showMoreOptions = true;
    },
    goToProfile:function(username){
        this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile-view/' + username})
      },
     checkIfAdmin: function(source){

      let userMemberData = this.$root.selectedSpaceMembers.filter((members)=>{

             return (members.user_id == source.user_id)  && members.is_admin;
           });

           if(userMemberData.length != 0){

             return true;

           }else{
              return false
           }


      },
    goToProject:function(message){

      this.$router.push({ path: '/board/projects/panel/' + message.project.project_slug });

    },
    showFullMsg:function(message){

       

       document.querySelector('#moreContentbtn'+ message.message_id + this.screenType).style.visibility='hidden' ;
        document.querySelector('#shortContent' + message.message_id + this.screenType).style.display = 'none';
        
       document.querySelector('#fullContent'+ message.message_id + this.screenType).style.display = 'inline-block';

    



    },
     imageStyle:function(dimension,data,type){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
          if(this.$root.selectedSpace.type == 'Bot'){
              styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/space/thumbnails/'  + imgLink  +  ');';
         }else{
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/thumbnails/'  + imgLink  +  ');';
         }
         
          return styleString;
      }
     },
    getReplyMsg: function(replymessage){
        let finalString = '';

          let message = replymessage;

          if(message.type == null || message.type == 'action'){

          finalString =  htmlToText(message.content, {
             wordwrap: 100
            });

          }

           if(message.type == 'image'){

          finalString = 'sent an image'

          }

        if(message.type == 'join'){

          finalString = 'joined'

          }

          if(message.type == 'code'){

          finalString = 'shared a code'

          }

          if(message.type == 'video'){

          finalString = 'sent a video'

          }

          if(message.type == 'audio'){

          finalString = 'sent an audio'

          }

           if(message.type == 'project'){

          finalString = 'share a project'

          }

          return finalString;
    },
    checkIfMsgIsLong:function(message){

      let messageString = htmlToText(message.content, {
             wordwrap: null
            });

         if(messageString.length > 300){
           return true; 
         }else{
           return false;
         }

    },
    createSpace:function(member){
           
           this.$root.showUserInfo = true;
          
            this.$root.selectedMember = member;
            
      axios.get('/fetch-user-info/'  + member.username )
      .then(response => {
      
      if (response.status == 200) {

         
         this.$root.userBasicInfo = response.data[0];

         
       
      }
       
     
     })
     .catch(error => {

        this.$root.infoLoaderText = 'unable to load user info'
    
     }) 


      },

      
      handleAction:function(message){
           
         
         if(message.action.type == 'custom'){
          
           this.$router.push({ path: '/space/'  + this.$route.params.spaceId  +  '/channel/board' });

         }
         if(message.action.type == 'inner'){
         window.location = '/trends#/trends/connect';
         } 
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
             this.$root.selectedSpace.unread = 0;
          }
      },
       
      showProject:function(projectSlug){
        this.$router.push({ path: '/' + projectSlug +'/panel' });
      },
      downloader:function(message){
          window.url = '/download-file-' + message.message_id;
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
         
          let messageData =this.$root.Messages.filter((message)=>{
               return message.message_id == messageid;
             });

          let msgIndex = messageData[0].index_count;

        
  
         this.$root.chatComponent.$refs.messageContainer.scrollToItem(msgIndex);

         this.$root.chatComponent.$refs.messageContainersmall.scrollToItem(msgIndex);

        },200)
      
        

      },
      
  
      showMoreHandler(message){

       
        
            
            this.clicks++ 
          if(this.clicks === 1) {
             
            var self = this
            this.timer = setTimeout(function() {
              if(message.tagged == false){
                 if(message.showReply){
                
              message.showReply = false;
              }else{
              self.$root.Messages.map((message)=>{
               
                 message.showReply = false;
                 
              });
               
             message.showReply = true;
           }
              }
             message.tagged = false;
             
               
              self.clicks = 0
            }, this.delay);
         
         this.$root.showMsgDelete = false;
              
          } else{
             clearTimeout(this.timer); 

             if(this.checkOwner(message.user_id)){

                message.showReply = false;

              message.tagged = true;
             
             this.$root.messageIdToDelete = message.message_id;
          
            this.$root.showMsgDelete = true;

             } 

            
           
            
             this.clicks = 0;
          }   

          
        },
      replyMsg: function(message){
          this.$root.replyMessage = message;
           this.$root.is_reply = true;
          this.$root.showRootReply = true;

           message.showReply = false;

           this.$root.bottomEditorValue.focus();
         
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

      }
    }

    
}
</script>
<style >
.handleText  p a{
  color: #ffffff ;
  text-decoration: underline;
}
</style>