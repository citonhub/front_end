<template>
    <div>
        
      <!-- date time -->
        
         <div class="col-12  text-center" v-if="source.showDate != undefined" :id="'message'+ source.id">
            <span  class=" DateBadge py-1 px-2" style="font-size:12px;color:#3E8893;">{{covertDate(source.showDate)}}</span>
         </div>


          <!-- user joined -->
        
         <div class="col-12  text-center" v-if="source.type == 'join'"  :id="'message'+ source.id">
            <span  class=" DateBadge py-1 px-2" style="font-size:12px;color:#3E8893;" v-if="source.username != username">{{source.username}} joined</span>
             <span  class=" DateBadge py-1 px-2" style="font-size:12px;color:#3E8893;" v-else>You joined</span>
         </div>


          <!--unread messages -->
        
         <div class="col-12  text-center" v-if="source.type == 'unread'"  :id="'message'+ source.id">
            
             <span  class=" DateBadge py-1 px-2" style="font-size:12px;color:#3E8893;">{{source.content}}</span>
         </div>



      
       <!-- audio -->
        <div   :style="source.tagged ? 'background:rgba(38, 82, 89,0.5); border:1px solid transparent; border-radius:8px;' : ''" :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-5  offset-md-7  py-2 px-2 ' : 'col-md-5 col-11    py-2 px-2 '"  v-if="source.type == 'audio'">
           <v-card  :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
               <div class="row py-0 my-0">
              

               <div class="col-8  py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label"  :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>
          
           <div class="col-12 py-1 px-1"  v-if="source.loading || source.audio == null" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''">mdi-music mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                     

                        <v-progress-linear :color="checkOwner(source.user_id) ? '#ffffff' : '#3E8893'" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                         <span :style="checkOwner(source.user_id) ? 'font-size:10px; color:#ffffff;' :'font-size:10px; color:gray;'">{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>
              
         <audio-player v-else :file="'/audio/' + source.audio.audio_name + '.' + source.audio.audio_extension" :playerId="source.message_id"></audio-player>
           
           </v-card>
            <div  @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>



          <!-- project -->
        <div  :style="source.tagged ? 'background:rgba(38, 82, 89,0.5); border:1px solid transparent; border-radius:8px;' : ''" :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-5 offset-md-7  py-2 px-2 ' : 'col-md-5 py-2 px-2 '"  v-if="source.type == 'project'">
           <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" v-if="source.project != null" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
                <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>
          
           <div class="col-12 py-2 px-0">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                     <span class="px-1 py-1" style="background-color:#c9e4e8;border:1px solid transparent;border-radius:50%;" ><v-icon color="#1f4247">mdi-plus-network-outline mdi-18px</v-icon></span>
              
                     </div>
                     <div class="col-6 py-0 my-0 text-left px-0" >
                        <span style="font-size:12px;" class="msgTextnew2">{{shortenContent(source.project.title,25) }}</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                          <v-btn icon @click.stop="showProject(source.project.project_slug)"><v-icon>mdi-arrow-right-bold-circle-outline</v-icon></v-btn>
                     </div>
                  </div>
              </div>
            
          
           </v-card>
            <div  @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

      

        


         <!-- files -->
          <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5); border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)"  :class="checkOwner(source.user_id) ?   'col-md-5  offset-md-7  py-2 px-2 ' : 'col-md-5   py-2 px-2 '" v-if="source.type == 'file'">
           <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">

               <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>
             <div class="col-12 py-1 px-1"  v-if="source.loading || source.file == null" :style="checkOwner(source.user_id) ? 'border:1px solid #ffffff; border-radius:10px;' :'border:1px solid #2f606a; border-radius:10px;'" >
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''">mdi-file mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       <v-progress-linear :color="checkOwner(source.user_id) ? '#ffffff' : '#3E8893'" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                          <span :style="checkOwner(source.user_id) ? 'font-size:10px; color:#ffffff;' :'font-size:10px; color:gray;'">{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>
              
             <div class="col-12 py-1 px-0 my-1" v-else  :style="checkOwner(source.user_id) ? 'border:1px solid #ffffff; border-radius:10px;' :'border:1px solid #2f606a; border-radius:10px;'">
                 <div class="row py-0 my-0">
                     <div class="col-3 py-1 my-0 text-center">
                    <span style="background:#c9e4e8; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#1f4247">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-6 py-1 my-0 text-left px-0">
                 <span class="msgTextnew2" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >{{ shortenContent(source.file.display_name,20) }} </span>
                     </div>
                      <div class="col-3 py-0 my-0  d-flex px-1" style="align-items:center; justify-content:center;">
                 <span class="msgTextnew2" :style="checkOwner(source.user_id) ? 'color:#ffffff;font-size:10px;' :'font-size:10px;'" >{{source.file.file_size}}</span>
                     </div>
                     
                  </div>
             </div>
          
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
                <div   v-if="source.showReply" style="position:absolute; height:auto; width:auto; left:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon tag="a" :href="'/download-file-' + source.message_id" ><v-icon color="#ffffff">mdi-cloud-download mdi-18px</v-icon></v-btn>
                             </div>
        </div>


       

     
         <!-- images -->

      <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)"   :class="checkOwner(source.user_id) ?   'col-md-5 offset-md-7  py-3 px-2 ' : 'col-md-5  py-2 px-2 '" v-if="source.type == 'image'">
           <v-card  :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
               <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

              <div class="col-12 py-1 px-1"  v-if="source.loading || source.image == null" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-image mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       <v-progress-linear :color="checkOwner(source.user_id) ? '#ffffff' : '#3E8893'" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                           <span :style="checkOwner(source.user_id) ? 'font-size:10px; color:#ffffff;' :'font-size:10px; color:gray;'">{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>
            
            <image-viewer :imageArray="source.image" v-else></image-viewer>
            
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; z-index:99; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

        

        <!-- text messages --> 


       <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '" v-if="source.type == null  && source.is_reply != '1' || source.type == 'text'  && source.is_reply != '1'">
           <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="auto " style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
            
              <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else ><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>
              

            <span  class="msgTextnew2" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-html="source.content"></span>
            
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                              
                             </div>
          

        </div>


         <!-- action messages --> 


       <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6  offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '" v-if="source.type == 'action'  && source.is_reply != '1' ">
           <v-card  :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="auto" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
              <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

            <span  class="msgTextnew2" v-html="source.content"></span>
            <div class="col-12 py-1 my-2 text-center " style="">
              <v-btn x-small rounded color="#3E8893" @click.stop="handleAction(source)"><span style="color:white; font-size:11px; text-transform:capitalize;">{{ source.action.label }}</span></v-btn>
            </div>
           
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

       

     <!-- code boxes -->

        <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-5  offset-md-7  py-2 px-2 ' : 'col-md-5 py-2 px-2 '" v-if="source.type == 'code'">
           <v-card  :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">

              <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#dbedf0;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

             <div class="col-12 py-1 px-1"  v-if="source.loading"  :style="checkOwner(source.user_id) ? 'border:1px solid #dbedf0; border-radius:10px;' :'border:1px solid #3E8893; border-radius:10px;'">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''">mdi-xml mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;">
                       

                        <v-progress-linear :color="checkOwner(source.user_id) ? '#ffffff' : '#3E8893'" height="5" rounded indeterminate></v-progress-linear>
                     </div>
                     <div class="col-3 py-0 my-0 text-center">
                         
                     </div>
                  </div>
              </div>
              

              <code-box v-else  :color="checkOwner(source.user_id) ? '#ffffff' :'#3E8893'" :codeContent="source.code.content" :messageId="source.message_id" :filename="source.code.name + '.' + languageExtensions(source.code.language_type)" :codeLanguage="source.code.language_type" :codeViewerType="viewerType"></code-box>
          
           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

      
        <!--videos --> 

      
         
         <div :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-5 offset-md-7  py-2 px-2 ' : 'col-md-5  py-2 px-2 '"  v-if="source.type == 'video'">
           <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'"  :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
              <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

             <div class="col-12 py-1 px-1"  v-if="source.loading || source.video == null" style="border:1px solid #3E8893; border-radius:10px;">
                  <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                         <v-icon color="#3E8893" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-video mdi-18px</v-icon>
                     </div>
                     <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;" v-if="source.progressValue < 100">
                      <v-progress-linear :color="checkOwner(source.user_id) ? '#ffffff' : '#3E8893'" height="5" rounded :value="source.progressValue"></v-progress-linear>
                     </div>

                      <div class="col-6 py-0 my-0 d-flex px-0" style="align-items:center; justify-content:center;" v-else>
                         <div class="col-12 py-0 text-center">
                       <span  :style="checkOwner(source.user_id) ? 'font-size:12px;color:#ffffff;' :'font-size:12px;color:grey;'" >Processing...</span>
                         </div>
                       <v-progress-linear :color="checkOwner(source.user_id) ? '#ffffff' : '#3E8893'" height="5" rounded indeterminate></v-progress-linear>
                     </div>

                     <div class="col-3 py-0 my-0 text-center">
                          <span :style="checkOwner(source.user_id) ? 'font-size:10px;color:#ffffff;' :'font-size:10px;color:grey;'" >{{ source.progressValue}}%</span>
                     </div>
                  </div>
              </div>

              <main-video v-else :videoUrl="'/videos/' + source.video.video_name + '.mpd'" :backgroundColor="source.video.background_color" style="height:100%; width:100%;"
               :backgroundImg="'/videos/previewImage/'+ source.video.preview_image_url" :playerId="'small' + source.message_id" > </main-video>
              

           </v-card>
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>

     


        <!-- text reply -->

        <div   v-if="source.replied_message != undefined && source.is_reply == '1'"  class="col-12 py-0 my-0 px-0" >
             <div   v-if="source.is_reply == '1' && source.replied_message.type == null" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '">
           <v-card  :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
              <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

              <div :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-right' : 'col-12 py-1 px-1 my-1 taggedOthers text-right' "
               @click.stop="scrollToMessage(source.replied_message.message_id)" style="height:50px; overflow-y:hidden; overflow-x:hidden;" >
                  <span class="msgTextReplynew text-left d-block"   v-html=" shortenContent(source.replied_message.content ,80)" ></span>
                  <span class="text-right label" >{{source.replied_message.username}}</span>
              </div>
            <span  class="msgTextnew2"  :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''"  v-html="source.content"></span>
           
           </v-card>
           
           
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
             </div>
             
        </div>

         <!-- action reply -->

        <div   v-if="source.replied_message != undefined && source.is_reply == '1'"  class="col-12 py-0 my-0 px-0" >
             <div   v-if="source.is_reply == '1' && source.replied_message.type == 'action'" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '">
           <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
              <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

              <div :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-right' : 'col-12 py-1 px-1 my-1 taggedOthers text-right' " 
              @click.stop="scrollToMessage(source.replied_message.message_id)" style="height:50px; overflow-y:hidden; overflow-x:hidden;" >
                  <span class="msgTextReplynew text-left d-block"   v-html=" shortenContent(source.replied_message.content ,80)" ></span>
                  <span class="text-right label" >{{source.replied_message.username}}</span>
              </div>
            <span  class="msgTextnew2"  :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-html="source.content"></span>
            
           </v-card>
           
           
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
             </div>
             
        </div>


      
  

      <!-- image reply -->


           <div   v-if="source.replied_message != undefined && source.is_reply == '1'" class="col-12 py-0 my-0 px-0" >
               <div  v-if="source.is_reply == '1' && source.replied_message.type == 'image'" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '">
          <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">
             <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

              <div :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' "  
                @click.stop="scrollToMessage(source.replied_message.message_id)" style="height:50px; overflow-y:hidden; overflow-x:hidden;">
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0">
                   <v-img width="40" height="40" :src="'/imgs/space/' + source.replied_message.image[0].image_name  + '.' + source.replied_message.image[0].image_extension" class="d-inline-block "> 

                 </v-img>
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReplynew"  >{{source.replied_message.image.length}} Images</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">
                 
                     </div>
                  </div>
              <span class="text-right label" >{{source.replied_message.username}}</span>
              </div>
             <span  class="msgTextnew2"   :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-html="source.content"></span>
           
           </v-card>
              
           <div @click="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
               </div>
                 
        </div>


    



      
       <!-- video reply -->

          <div  v-if="source.replied_message != undefined && source.is_reply == '1'"  class="col-12 py-0 my-0 px-0"  >
             <div v-if="source.is_reply == '1' && source.replied_message.type == 'video'" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '" >
              <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">

                 <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>


              <div   @click.stop="scrollToMessage(source.replied_message.message_id)" 
              :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' "  style="height:50px; overflow-y:hidden; overflow-x:hidden;">
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-video mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew"  >{{ shortenContent(source.replied_message.video.display_name ,25)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block"  >{{source.replied_message.username}}</span>
              </div>
            <span  class="msgTextnew2"  :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-html="source.content"></span>
           
           </v-card>
             
           <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
             </div>
           
        </div>


      

       
       <!-- audio reply --> 


       
        <div  v-if="source.replied_message != undefined && source.is_reply == '1'" class="col-12 py-0 my-0 px-0" >
           <div v-if="source.is_reply == '1' && source.replied_message.type == 'audio'" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id"  @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '" >
   <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">

      <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

              <div   @click.stop="scrollToMessage(source.replied_message.message_id)" 
              :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' "
              style="height:50px; overflow-y:hidden; overflow-x:hidden;" >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-music mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew"  >{{ shortenContent(source.replied_message.audio.display_name ,25)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block"  >{{source.replied_message.username}}</span>
              </div>
            <span  class="msgTextnew2"  :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-html="source.content"></span>
            

           </v-card>
           
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
           </div>
         
        </div>






        <!-- file/document reply -->
  

    <div  v-if="source.replied_message != undefined && source.is_reply == '1'" class="col-12 py-0 my-0 px-0"  >
        <div v-if="source.is_reply == '1' && source.replied_message.type == 'file'" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '" >
        <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">

           <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>

              <div  style="height:50px; overflow-y:hidden; overflow-x:hidden;"  @click.stop="scrollToMessage(source.replied_message.message_id)" :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' " >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-file mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew"  >{{shortenContent(source.replied_message.file.display_name  ,25)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block"  >{{source.replied_message.username}}</span>
              </div>
            <span  class="msgTextnew2"  :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-html="source.content"></span>
            

           </v-card>
       
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>
     
        </div>



           <!-- project reply -->
  

    <div  v-if="source.replied_message != undefined && source.is_reply == '1'" class="col-12 py-0 my-0 px-0"  >
        <div v-if="source.is_reply == '1' && source.replied_message.type == 'project'" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '" >
        <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">

           <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>


              <div   style="height:50px; overflow-y:hidden; overflow-x:hidden;" @click.stop="scrollToMessage(source.replied_message.message_id)" :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' " >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-plus-network-outline mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew"   v-if="source.replied_message.project !=  null">{{shortenContent(source.replied_message.project.title ,25)}}</span>
                  <span class="msgTextReplynew"  v-else>project not found</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block"  >{{source.replied_message.username}}</span>
              </div>
            <span  class="msgTextnew2"  :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-html="source.content"></span>
           
           </v-card>
       
          <div @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
        </div>
     
        </div>


  



       <!-- code reply -->
   
       
        <div  v-if="source.replied_message != undefined && source.is_reply == '1'"  class="col-12 py-0 my-0 px-0" >
             <div v-if="source.is_reply == '1' && source.replied_message.type == 'code'" :style="source.tagged ? 'background:rgba(38, 82, 89,0.5);border:1px solid transparent; border-radius:8px;' : ''"  :id="'message'+ source.message_id" @click="showMoreHandler(source)" :class="checkOwner(source.user_id) ?   'col-md-6 offset-md-6  py-2 px-2 ' : 'col-md-6 py-2 px-2 '">
             <v-card :class="checkOwner(source.user_id) ? 'py-1 px-2 col-11 offset-1 col-lg-12 offset-lg-0' : 'py-1 px-2 col-lg-12 col-11'" :color=" checkOwner(source.user_id) ? '#3E8893' : '#ffffff'" width="100%" style="border-bottom-right-radius:10px;border-top-left-radius:10px;">

                <div class="row py-0 my-0">
              

               <div class="col-8   py-0 my-0" >
                      <span class="label" style="font-size:12px; font-family:HeaderText; cursor:pointer; color:#2d626c;" @click.stop="createSpace(source.member)"  v-if="source.username != username">{{source.username}}</span>
                       <span class="label" style="font-size:12px; font-family:HeaderText; color:#ffffff;"   v-else>You</span>
                      
               </div>


                <div class="col-4 text-right py-0 my-0">
                      <span class="label" :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" v-if="source.loading == false">{{checkDatereal(source.created_at)}}</span>
                      <span class="label" v-else><v-icon :style="checkOwner(source.user_id) ? 'color:#ffffff;' :''" >mdi-clock-outline mdi-18px</v-icon></span>
               </div>
               
           </div>


              <div style="height:50px; overflow-y:hidden; overflow-x:hidden;"  @click.stop="scrollToMessage(source.replied_message.message_id)" :class=" checkOwner(source.user_id) ? 'col-12 py-1 px-1 my-1 tagged text-left' : 'col-12 py-1 px-1 my-1 taggedOthers text-left' " >
                 <div class="row py-0 my-0">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3E8893">mdi-xml mdi-18px</v-icon></span>
                 
                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew"   >{{ source.replied_message.code.name + '.' + languageExtensions(source.replied_message.code.language_type)}}</span>
                     </div>
                     
                  </div>
              <span class="text-right label d-block"  >{{source.replied_message.username}}</span>
              </div>
             <span  class="msgTextnew2"   v-html="source.content"></span>
           
           </v-card>
            
          
          <div  @click.stop="replyMsg(source)" v-if="source.showReply" style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon ><v-icon color="#ffffff">mdi-reply mdi-18px</v-icon></v-btn>
                             </div>
             </div>
       
        </div>

        


      


   
    </div>
</template>
<script>
export default {
     props:['source'],
    data(){
        return{
         viewerType:'',
         loading:false,
         clicks: 0,
         delay:400,
         timer:'',
         username:this.$root.username
        }
    },
    methods:{
    
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
       showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

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
        fetchMessages: function(){
           
           
             
             axios.get('/fetch-space-messages-' + this.$route.params.spaceId )
      .then(response => {
      
      if (response.status == 200) {



       let returnedData = this.handleResults(response.data[0]);
        
     
       this.$root.Messages = returnedData;

       
       
       this.generateUnreadMessage();
        
       this.$root.selectedSpace = response.data[1]

       setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)

   
          
   
       
     }
       
     
     })
     .catch(error => {
    
     }) 

           
           

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

        
  
          this.$root.msgScrollComponent.messageContainer.scrollToItem(msgIndex - 2);
        },200)
      
        

      },
      
        showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

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
<style>
.msgTextnew2 a{
   color: #3E8893;
}
</style>