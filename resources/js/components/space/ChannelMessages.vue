<template>
    <div class="row py-0 my-0 px-2" >
      <!-- date time -->
        
         <div class="col-12  text-center" v-if="source.showDate != undefined">
            <span  class=" DateBadge py-1 px-2" style="font-size:11px;color:white;">{{covertDate(source.showDate)}}</span>
         </div>


          <!-- date time -->
        
         <div class="col-12  text-center" v-if="source.type == 'join'">
            <span  class=" DateBadge py-1 px-2" style="font-size:11px;color:white;" v-if="source.user.username != this.$root.username">{{source.user.username}} joined</span>
             <span  class=" DateBadge py-1 px-2" style="font-size:11px;color:white;" v-else>You joined</span>
         </div>



      
       <!-- audio -->
        <div  :style="source.tagged ? 'background:rgba(38, 82, 89,0.5); border:1px solid transparent; border-radius:8px;' : ''" :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-7 col-md-8 col-11 col-sm-11 offset-1 offset-lg-5 offset-md-4 py-2 px-2 ' : 'col-lg-7 col-11  col-md-8 col-sm-11   py-2 px-2 '"  v-if="source.type == 'audio'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'">
          
           <div class="col-12 py-1 px-1"  v-if="source.loading" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893">mdi-music mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       <v-progress-linear color="#3E8893" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                          <span style="font-size:10px; color:gray;">{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>
              
         <audio-player v-else :file="'/audio/' + source.audio.audio_name + '.' + source.audio.audio_extension" :playerId="source.message_id"></audio-player>
           <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                         <span class="label">{{source.username}}</span>
               </div>
           </div>
          </div>
           </v-card>
            <div  @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

      

        


         <!-- files -->
          <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5); border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)"  :class="checkOwner(source.user_id) ?   'col-lg-7 col-md-8 col-11 col-sm-11 offset-1 offset-lg-5 offset-md-4 py-2 px-2 ' : 'col-lg-7 col-11  col-md-8 col-sm-11   py-2 px-2 '" v-if="source.type == 'file'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'">
             <div class="col-12 py-1 px-1"  v-if="source.loading" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893">mdi-file mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       <v-progress-linear color="#3E8893" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                          <span style="font-size:10px; color:gray;">{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>
              
             <div class="col-12 py-1 px-0" v-else>
                 <div class="row py-0 my-0">
                     <div class="col-3 py-1 my-0 text-center">
                    <span style="background:#c9e4e8; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#1f4247">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-6 py-1 my-0 text-left px-0">
                 <span class="msgText">{{ shortenContent(source.file.display_name,20) }} </span>
                     </div>
                      <div class="col-3 py-0 my-0  d-flex px-1" style="align-items:center; justify-content:center;">
                 <span class="msgText" style="font-size:10px;">{{source.file.file_size}}</span>
                     </div>
                     
                  </div>
             </div>
           <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label">{{source.username}}</span>
               </div>
           </div>
          </div>
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
                <div   v-if="source.showReply" style="position:absolute; height:auto; width:auto; left:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-cloud-download mdi-18px</v-icon></v-btn>
                             </div>
        </div>


       

     
         <!-- images -->

      <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)"   :class="checkOwner(source.user_id) ?   'col-lg-7 col-md-8 col-10 col-sm-10 offset-2 offset-lg-5 offset-md-4 py-3 px-2 ' : 'col-lg-7 col-md-8 col-10 col-sm-10  py-2 px-2 '" v-if="source.type == 'image'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'">
              <div class="col-12 py-1 px-1"  v-if="source.loading" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893">mdi-image mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       <v-progress-linear color="#3E8893" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                          <span style="font-size:10px; color:gray;">{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>
            
            <image-viewer :imageArray="source.image" v-else></image-viewer>
             <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label">{{source.username}}</span>
               </div>
           </div>
          </div>
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; z-index:99; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

        

        <!-- text messages --> 


       <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.type == null  && source.is_reply != '1' ">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="auto">
            <span  class="msgText" v-html="source.content"></span>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label" v-if="source.loading == false">{{source.username}}</span>
                      <span class="label" v-else><v-icon>mdi-clock-outline mdi-18px</v-icon></span>
               </div>
           </div>
          </div>
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

       

     <!-- code boxes -->

        <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.type == 'code'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="100%">

             <div class="col-12 py-1 px-1"  v-if="source.loading" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893">mdi-xml mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       <v-progress-linear color="#3E8893" height="5" rounded indeterminate></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                         
                     </div>
                  </div>
              </div>
              

              <code-box v-else :codeContent="source.code.content" :filename="source.code.name + '.' + languageExtensions(source.code.language_type)" :codeLanguage="source.code.language_type" :codeViewerType="viewerType"></code-box>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label">{{source.username}}</span>
               </div>
           </div>
          </div>
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

      
        <!--videos --> 

      
         
         <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-7 col-md-8 col-11 col-sm-11 offset-1 offset-lg-5 offset-md-4 py-2 px-2 ' : 'col-lg-7 col-md-8 col-11 col-sm-11  py-2 px-2 '"  v-if="source.type == 'video'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'">
             <div class="col-12 py-1 px-1"  v-if="source.loading" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893">mdi-video mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       <v-progress-linear color="#3E8893" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                          <span style="font-size:10px; color:gray;">{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>
              
          <video-player v-else :videoUrl="'/videos/' + source.video.video_name + '.' + source.video.video_extension" :backgroundColor="source.video.background_color" style="height:100%; width:100%;"
                  :backgroundImg="'/videos/previewImage/'+ source.video.preview_image_url" :playerId="'small' + source.message_id"></video-player>
                  <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label">{{source.username}}</span>
               </div>
           </div>
          </div>
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

     


        <!-- text reply -->

        <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.is_reply == '1' && source.replied_message.type == null">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="100%">
              <div :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-right' : 'col-12 py-1 px-1 my-1 taggedOthers text-right' " @click.stop="scrollToMessage(source.replied_message.message_id)" >
                  <span class="msgTextReply text-left d-block" v-html=" shortenContent(source.replied_message.content ,80)" ></span>
                  <span class="text-right label">{{source.replied_message.username}}</span>
              </div>
            <span  class="msgText" v-html="source.content"></span>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label" v-if="source.loading == false">{{source.username}}</span>
                      <span class="label" v-else><v-icon>mdi-clock-outline mdi-18px</v-icon></span>
               </div>
           </div>
          </div>
           </v-card>
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>


      
  

      <!-- image reply -->


           <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.is_reply == '1' && source.replied_message.type == 'image'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="100%">
              <div :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' "   @click.stop="scrollToMessage(source.replied_message.message_id)">
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0">
                   <v-img width="50" :src="'/imgs/space/' + source.replied_message.image[0].image_name  + '.' + source.replied_message.image[0].image_extension" class="d-inline-block "> 

                 </v-img>
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReply">{{source.replied_message.image.length}} Images</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">
                 
                     </div>
                  </div>
              <span class="text-right label">{{source.replied_message.username}}</span>
              </div>
             <span  class="msgText" v-html="source.content"></span>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label" v-if="source.loading == false">{{source.username}}</span>
                      <span class="label" v-else><v-icon>mdi-clock-outline mdi-18px</v-icon></span>
               </div>
           </div>
          </div>
           </v-card>
           <div @click="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>


    



      
       <!-- video reply -->

          <div  :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.is_reply == '1' && source.replied_message.type == 'video'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="100%">
              <div   @click.stop="scrollToMessage(source.replied_message.message_id)" :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' " >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-video mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply">{{ shortenContent(source.replied_message.video.display_name ,25)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block">{{source.replied_message.username}}</span>
              </div>
            <span  class="msgText" v-html="source.content"></span>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
              <div class="col-8 text-right py-0 my-0">
                      <span class="label" v-if="source.loading == false">{{source.username}}</span>
                      <span class="label" v-else><v-icon>mdi-clock-outline mdi-18px</v-icon></span>
               </div>
           </div>
          </div>
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>


      

       
       <!-- audio reply --> 


       
        <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.is_reply == '1' && source.replied_message.type == 'audio'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="100%">
              <div   @click.stop="scrollToMessage(source.replied_message.message_id)" :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' " >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-music mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply">{{ shortenContent(source.replied_message.audio.display_name ,25)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block">{{source.replied_message.username}}</span>
              </div>
            <span  class="msgText" v-html="source.content"></span>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label" v-if="source.loading == false">{{source.username}}</span>
                      <span class="label" v-else><v-icon>mdi-clock-outline mdi-18px</v-icon></span>
               </div>
           </div>
          </div>
           </v-card>
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>






        <!-- file/document reply -->
  

    <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.is_reply == '1' && source.replied_message.type == 'file'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="100%">
              <div   @click.stop="scrollToMessage(source.replied_message.message_id)" :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' " >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply">{{shortenContent(source.replied_message.file.display_name  ,25)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block">{{source.replied_message.username}}</span>
              </div>
            <span  class="msgText" v-html="source.content"></span>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label" v-if="source.loading == false">{{source.username}}</span>
                      <span class="label" v-else><v-icon>mdi-clock-outline mdi-18px</v-icon></span>
               </div>
           </div>
          </div>
           </v-card>
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>


  



       <!-- code reply -->
   
       
        <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-lg-8 col-md-9 col-11 col-sm-11 offset-1 offset-lg-4 offset-md-3 py-2 px-2 ' : 'col-lg-8 col-md-9 col-11 col-sm-11  py-2 px-2 '" v-if="source.is_reply == '1' && source.replied_message.type == 'code'">
           <v-card class="py-1 px-2" :color=" checkOwner(source.user_id) ? '#ACF8E9' : '#ffffff'" width="100%">
              <div  @click.stop="scrollToMessage(source.replied_message.message_id)" :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' " >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-xml mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReply">{{ source.replied_message.code.name + '.' + languageExtensions(source.replied_message.code.language_type)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block">{{source.replied_message.username}}</span>
              </div>
             <span  class="msgText" v-html="source.content"></span>
            <div class="col-12 py-0 my-0">
           <div class="row py-0 my-0">
               <div class="col-4 text-left py-0 my-0">
                      <span class="label">{{checkDatereal(source.created_at)}}</span>
               </div>
               <div class="col-8 text-right py-0 my-0">
                      <span class="label" v-if="source.loading == false">{{source.username}}</span>
                      <span class="label" v-else><v-icon>mdi-clock-outline mdi-18px</v-icon></span>
               </div>
           </div>
          </div>
           </v-card>
          <div  @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

        


      


     </div>
</template>
<script>
export default {
    data(){
         return{
              viewerType:'',
         }
    },
     props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      },
    },
    methods:{
         closeReply:function(){
        this.$root.showRootReply = false;
        this.$root.replyMessage = [];
        this.$root.is_reply = false;
        },
        showCodeBox: function(){
             
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
          if(language == 'PYTHON'){
           return 'py';
         }
          if(language == 'PHP'){
           return 'php';
         }
          if(language == 'JAVASCRIPT'){
           return 'js';
         }
          if(language == 'VUEJS'){
           return 'vue';
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
          if(language == 'COFFEESCRIPT'){
           return 'coffee';
         }
          if(language == 'LIVESCRIPT'){
           return 'ls';
         }
         if(language == 'DJANGO'){
           return 'py';
         }
          if(language == 'KOTLIN'){
           return 'kt';
         }
          if(language == 'FOTRAN'){
           return 'for';
         }
          if(language == 'MARKDOWN'){
          return 'md';
         }
          if(language == 'PERL'){
          return 'pl';
         }
          if(language == 'R'){
           return 'r';
         }
          if(language == 'RUBY'){
           return 'rb';
         }
      }
    }
}
</script>
<style>

</style>