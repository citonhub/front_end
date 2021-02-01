<template>
    <div style="background:transparent;font-size:BodyFont;">
        <div class="col-12 px-3 px-md-2 scroller" style="position:absolute;height:95%;top:0%;left:0%;overflow-y:auto;overflow-x:hidden;padding-bottom:150px !important;">
        
        <div style="background:transparent;font-family:BodyFont; " class="row">

            <div class="col-md-6 offset-md-1 py-0 my-0 pl-md-3 text-left">
          <h5 style="font-size:18px;" class="d-md-block d-none"> Make a Note</h5>
         <h5 class="d-md-none d-block"> Make a Note</h5>
        </div>


     

         <div class="col-lg-6 offset-lg-1 mb-2">

             <span  style="font-size:14px;font-family:MediumFont;">Subject</span>  

              <v-text-field
                 style="font-size:13px;"
              
            counter="60"
            :rules="subjectRule"
            persistent-hint     
              v-model="that.$root.noteContent.note.tag_name"
           
              dense
              hint="What new thing did you learn today?"
             color="#3C87CD">
             </v-text-field>

         </div>


         <div class="col-lg-6 offset-lg-1 mb-2 mt-0">
            <span  style="font-size:14px;font-family:MediumFont;">Keywords</span>  
             <v-combobox
                 style="font-size:13px;"
              dense
              
              :rules="KeywordsRule"
            counter="80"
            v-model="that.$root.noteContent.keywords"
             
            persistent-hint
            hint="words or sentences that is related to the above subject"
            chips
            multiple
             color="#3C87CD">

              <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              color="#3C87CD"
              dense
              class="my-1"
               :items="items"
              style="font-size:12px; color:#3C87CD; font-family:MediumFont;"
              outlined
              :disabled="data.disabled"
          
            >
             
              {{ data.item }}
            </v-chip>

              </template>
             </v-combobox>
         </div>


         <div class="col-lg-10 py-1 offset-lg-1 d-flex flex-row" style="align-items:center;">

            <span  style="font-size:14px;font-family:MediumFont;">Contents</span>  <v-btn icon class="mx-1" @click="showAddModal"><v-icon style="font-size:20px;">las la-plus</v-icon></v-btn>

         </div>
    
    <template v-if="that.$root.noteContent.pages[selectedContentId].contents.length > 0">

   
          <draggable
        class="col-lg-10 py-1 offset-lg-1 px-0 px-md-2 py-0 d-flex flex-row flex-wrap"
        tag="div"
        style="background:#E1F0FC;"
         v-model="that.$root.noteContent.pages[selectedContentId].contents"
         handle=".handle"
        v-bind="dragOptions"
        @start="drag = true"
        @end="handleOnDrop"
      >

      

            <div
           
              class="col-md-6 col-lg-4 "
            v-for="(element,index) in that.$root.noteContent.pages[selectedContentId].contents"
            :key="index"
          >
            <div class="px-2 py-2">

             <template v-if="element.type == 'text'">

                <v-card elevation-1 class="py-1 px-2 ml-2" style="max-width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-left-radius:0px;">

                    <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">{{that.$root.selectedDiary.name}}</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                      <span style="font-size:13px;" class="handleTextNormalSm" v-html="element.content"></span>
                       
                  </v-card> 

             </template>

             <template v-if="element.type == 'image'">

                 <v-card elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                      <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">{{that.$root.selectedDiary.name}}</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                     <images :imageArray="element.image" ></images>
                  </v-card> 

             </template>

             <template v-if="element.type == 'video'">

                <v-card elevation-1 class="py-1 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                     <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">{{that.$root.selectedDiary.name}}</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                  <video-player   :videoUrl="'/videos/' + element.video.video_name + '.mpd'" :backgroundColor="element.video.background_color" style="width:100%;"
               :backgroundImg="'/videos/previewImage/'+ element.video.preview_image_url" :playerId="'small' + element.message_id"  > </video-player>
                        
                      
                  </v-card> 

             </template>

             <template v-if="element.type == 'audio'">

                 <v-card elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                      <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">{{that.$root.selectedDiary.name}}</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                   <audio-player class="mt-n1" :file="'/audio/' + element.audio.audio_name + '.' + element.audio.audio_extension" :playerId="element.message_id"  :colorBase="'#333333'"></audio-player>
                  
                  </v-card> 

             </template>

             <template v-if="element.type == 'code'">

                <v-card elevation-1 class="py-1 px-2 pb-4 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                        <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">{{that.$root.selectedDiary.name}}</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>
                   <code-box  :topMargin="13"   :codeContent="element.code.content" 
                   :messageId="element.message_id" 
                   :filename="element.code.name + '.' + languageExtensions(element.code.language_type)" 
                   :codeLanguage="element.code.language_type" ></code-box>
                        
                  </v-card> 

             </template>

             <template v-if="element.type == 'project'">
               
                 <v-card elevation-1 class="py-1 pb-2 px-2 ml-2" style=" width:100%;  border:1px solid transparent; min-width:150px;background:#ffffff; border-radius:7px; border-bottom-right-radius:0px;">
                      <div class="d-flex flex-row" style="align-items:center;">
                      <div class="col-8 py-0 px-0">
                         <span style="font-size:13px;font-weight:bold; ">{{that.$root.selectedDiary.name}}</span>
                      </div>

                      <div class="col-4 py-0 px-0 text-right">
                          <v-icon style="font-size:25px;" color="#3C87CD" class="handle">las la-list</v-icon>
                      </div>
                        
                  </div>

                   <div class="row">
                      <div class="col-2 text-center d-flex py-1" style="align-items:center; justify-content:center;">
                        <v-icon >las la-laptop-code</v-icon>
                      </div>
                      <div class="col-7 d-flex py-1"  style="align-items:center;">
                           <span style=" font-size:13px;">{{element.project.title}}</span>
                      </div>

                       <div class="col-3 text-right py-1"  style="align-items:center;">
                           <v-btn icon @click="goToProject(element)" > <v-icon>las la-arrow-circle-right</v-icon></v-btn>
                      </div>
                   </div>

                  </v-card> 


             </template>

             
                     
            </div>
          
          </div> 
    
      </draggable>

    </template>

        
        </div>   
      </div>

       <!-- add content -->

        <div v-if="this.$root.AddModalIsUp" class="col-12 " style="position:absolute;height:100%;z-index:9999999999999;background: rgba(27, 27, 30, 0.32); overflow-y:auto;overflow-x:hidden;"> 
         
          
          
          <div class="d-flex flex-row mb-2 " style="align-items:center; justify-content:center;white-space: nowrap; overflow:auto;">
                
                <div class="px-5 d-md-none">

                </div>

              
             <div class="py-1">

                <v-card class="px-1 py-1 mx-1 typeBox"    @click="selectContentType('text')" :style="selectedContentType == 'text' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn title="Add a text" icon > <v-icon style="font-size:26px;">las la-align-left</v-icon></v-btn>
           </v-card>

             </div>
           
             <div class="py-1">

                <v-card class="px-1 py-1 mx-1  typeBox"   @click="selectContentType('image')" :style="selectedContentType == 'image' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn title="Add images" icon > <v-icon style="font-size:26px;">las la-image</v-icon>
                                        <input type="file" multiple
                @change="crophandler" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
                 accept="image/x-png,image/jpeg,image/jpg"/>
                </v-btn>
           </v-card>

             </div>

             <div class="py-1">

                <v-card class="px-1 py-1 mx-1  typeBox"   @click="selectContentType('video')" :style="selectedContentType == 'video' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn title="Add a video" icon > <v-icon style="font-size:26px;">las la-video</v-icon>
                     <input type="file"
                @change="vidoehandler" style="opacity:0;width:100%; height:100%; left:0; overflow:hidden; position:absolute; z-index:10;"
                 accept="video/mp4,video/x-m4v,video/*"/>
                   </v-btn>
           </v-card>

             </div>

             <div class="py-1">

                <v-card class="px-1 py-1 mx-1  typeBox"   @click="selectContentType('audio')" :style="selectedContentType == 'audio' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn icon title="Add an audio" > <v-icon style="font-size:26px;">las la-music</v-icon>
                     <input type="file"
                @change="audiohandler" style="opacity:0;width:100%; height:100%; left:0; overflow:hidden; position:absolute; z-index:10;"
                 accept="audio/*"/>
                 </v-btn>
           </v-card>

             </div>

              <div class="py-1">

                <v-card class="px-1 py-1 mx-1 typeBox"   @click="selectContentType('file')" :style="selectedContentType == 'file' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn icon title="Add a file"> <v-icon style="font-size:26px;">las la-file-alt</v-icon>
                    <input type="file" @change="filehandler"
               style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;"
           />
           </v-btn>
           </v-card>

             </div>


            

             <div class="py-1">

                <v-card class="px-1 py-1 mx-1 typeBox"   @click="selectContentType('record')" :style="selectedContentType == 'record' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn icon title="Start recording"> <v-icon style="font-size:26px;">las la-microphone</v-icon></v-btn>
           </v-card>

             </div>

              <div class="py-1">

               <v-card class="px-1 py-1 mx-1  typeBox"   @click="selectContentType('code')" :style="selectedContentType == 'code' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn icon title="Add a code"> <v-icon style="font-size:26px;">las la-code</v-icon></v-btn>
           </v-card>

             </div>

             <div class="py-1">

                <v-card class="px-1 py-1 mx-1 typeBox"   @click="selectContentType('project')" :style="selectedContentType == 'project' ? 'border-radius:10px;background:#E1F0FC;' : 'border-radius:10px;'">
                   <v-btn icon title="Add a project"> <v-icon style="font-size:26px;">las la-laptop-code</v-icon></v-btn>
           </v-card>

             </div>

          </div>

            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 px-1 px-md-2 text-center" v-if="progressvalue > 0" style="background:white;" >

               <v-progress-linear color="#3C87CD" height="6"  :value="progressvalue" rounded v-if="progressvalue < 100">

                          </v-progress-linear>
                          <div style="font-size:13px;" v-else>Processing...</div>

            </div>

         <div class="col-lg-6 offset-lg-3 col-md-8 offset-lg-2 py-1 my-2 px-2 text-center" v-if="selectedContentType == 'text'">

             <div style="background:white;border:1px solid transparent;border-radius:7px;" >

                 <v-textarea
                 style="font-size:14px;"
                 outlined
                 height="300px"
                  color="#3C87CD"
                 @input="updateText()"
                :placeholder="'Type here...'"
                v-model="input" 
               
                >

                </v-textarea>

             </div>

              


       <div class="col-12 text-center">
                           <v-btn small rounded color="#3C87CD" :loading="loadingSendMsg"   @click="sendMessage" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Send</span> 
           </v-btn>
                  </div>
             
         </div>


          <!-- project session -->

            <template  v-if="selectedContentType == 'project'">

                 <div class="px-2">

                    <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row flex-wrap px-1 px-md-2" style="align-items:center; background:white;">

                    
             <div>
               <span style="font-size:13px;font-family:BodyFont:">Select a project</span>
             </div>
         <select  style="font-size:13px !important; "    v-model="selectedProject" class="browser-default custom-select">
                 <option v-for="(option,index)  in projectArray" :value="option.project_slug" :key="index">{{ option.title}}</option>
                     </select>

                  </div>

                   <div class="col-12 text-center" v-if="selectedProject">
                           <v-btn small rounded color="#3C87CD"   :loading="loadingSendMsg"  @click="sendMessage" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Send</span> 
           </v-btn>

                 </div>

                 </div>

              </template>

          <!-- ends -->



          <!-- image editing view -->

           
          
          <template  v-if="selectedContentType == 'image'">

                 

            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row flex-wrap px-1 px-md-2" style="align-items:center; ">

                       <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image1 != ''">
                            <div @click="editImage('image1')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image1 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon  @click.stop="image1 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>

                        <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image2 != ''">
                            <div @click="editImage('image2')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image2 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image2 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>
                        <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image3 != ''">
                            <div @click="editImage('image3')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image3 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image3 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>
                        <div class="col-6 d-flex py-2 px-2" style="align-items:center;justify-content:center;" v-if="image4 != ''">
                            <div @click="editImage('image4')" :style="'border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url('+ image4 +');width:100%; background-size:cover;'" >
                             <div style="position:absolute; height:auto; width:auto; right:10%; top:10%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;">
                               <v-btn icon @click.stop="image4 = ''"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>

                              </div>
                       </div>

                  <div class="col-12 text-center" v-if="image1 != '' || image2 != '' || image3 != '' || image4 != ''">
                           <v-btn small rounded color="#3C87CD" :loading="loadingSendMsg"  @click="sendMessage" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Send</span> 
           </v-btn>
                  </div>
                </div>

          </template>

          <!-- ends -->


          <!-- voice recording view -->

             <template  v-if="selectedContentType == 'record'">
        
             <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row flex-wrap px-1 px-md-2" style="background:white;" >

               <div class="col-12 py-0 my-0 px-1 mb-2">

                  <div class="ml-auto d-flex flex-row" style="align-items:center; justify-content:center;" >

                     <v-btn icon class="bg-danger" @click="stoprecord('cancle')"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>

                      <div style="font-size:14px;color:gray;font-family:BodyFont;" class="mx-3 ">{{timer}}</div>

                       <v-btn icon class="bg-success" @click="stoprecord('send')"><v-icon color="#ffffff">mdi-check</v-icon></v-btn>


                    
                  </div>

               </div>

             </div>


             </template>

          <!-- ends -->


            <!-- code editing view -->
          <template  v-if="selectedContentType == 'code'">

                 

            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row flex-wrap px-1 px-md-2" style="background:white;" >

                       <div class="col-12 py-0 my-0 px-1 mb-2">

          <select  style="font-size:13px !important; " placeholder="select language"  @change="detectchange(languageCode)"   v-model="languageCode" class="browser-default custom-select">
                 <option v-for="(option,index)  in items" :value="option.name" :key="index">{{ option.name}}</option>
                  </select>
                 
               </div>

                <div class="col-12  py-2 my-0 px-2" >
                  <v-text-field
                style="font-size:13px;"
                 placeholder="e.g index"
             label="File Name"
            
             dense    

             v-model="CodeFilename"
              counter="40"
             color="#3C87CD"
            
             ></v-text-field>
             </div>


              <!-- code editor -->
               <div class="col-12  py-2 my-3 px-2 ">

                

                 <div class="codebox"  v-if="showCode">
              
         <codemirror
        v-model="codeContent"
        
        :options="cmOption"
        style="height:280px; font-size:13px;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
        @input="onCmCodeChange"        
        />
      
       

  <span style="position:absolute; bottom:10%; right:3%;z-index:100;" class="d-none d-md-inline-block">
           <v-btn
                color="#3C87CD"
                
                 @click="runCode"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>
         
     </span>


     <span style="position:absolute; bottom:10%; right:5%;z-index:100;"  class="d-inline-block d-md-none" >
           <v-btn
                color="#3C87CD"
                
                 @click="runCode"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>
         
     </span>
          
         
              </div>

    <!-- ends -->


 <!-- code viewer -->
              <div  v-else style="width:100%; height:250px;" >

          
          <!-- HTML code runner -->

                <div  v-if="selectedLangId == 0" @click="showCode = true" style="position:fixed;  height:100%; background:rgba(38, 82, 89,0.5); overflow-y:hidden; overflow-x:hidden; left:0%; top:0%; align-items:center; justify-content:center; z-index:99999;" class=" col-12 py-2 my-0 px-0 d-flex ">
           <div  @click.stop="selectedLangId = 0" style="position:absolute; height:80%; width:90%; bottom:10%; left:5%; overflow-y:hidden; overflow-x:hidden; " class="mx-auto pb-2">

             

            <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
   :srcdoc="ResultCode" 
    style="border: 1px solid #c5c5c5; height:100%; font-size:13px;  background:white; z-index:5757; width:100%; " ></iframe>

              <span style="position:absolute; bottom:5%; right:2%;z-index:9000000890;" >
           <v-btn
                color="#3C87CD"
                
                 @click="showCode = true"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">las la-code</v-icon>
            </v-btn>
         
     </span>

           </div>
         </div>

        <!-- ends -->

        <!-- other language code runner -->

    <textarea  readonly v-else v-model="ResultCode"  style="border: 1px solid #c5c5c5 ; height:250px;  width:100%; left:0; font-size:13px;" class="px-2 py-2">
       
    </textarea>

    <span style="position:absolute; bottom:10%; right:2%;z-index:1000;" class="d-none d-md-inline-block">
           <v-btn
                color="#3C87CD"
                
                 @click="showCode = true"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">las la-code</v-icon>
            </v-btn>
         
     </span>


     <span style="position:absolute; bottom:10%; right:5%;z-index:1000;"  class="d-inline-block d-md-none" >
           <v-btn
                color="#3C87CD"
                
                  @click="showCode = true"
                class="d-inline-block "
                fab
                v-if="this.selectedLangId != null"
              >
                <v-icon color="#ffffff">las la-code</v-icon>
            </v-btn>
         
     </span>
          
     <!-- ends -->
      </div>
        
        <!-- ends -->   

              </div>
<!-- ends -->


                  <div class="col-12 text-center">
                           <v-btn small rounded color="#3C87CD" :loading="loadingSendMsg"  @click="sendMessage" style="font-size:12px; font-weight:bolder; color:white;font-family:MediumFont;">
            <span style="color:white;text-transform:none;">Send</span> 
           </v-btn>
                  </div>
                </div>

          </template>

          <!-- ends -->
             

        </div>

    

        <!-- ends -->

         <!-- image cropper -->


   <div class="py-0 px-0" style="position:fixed; width:100%; height:100%; top:0%; z-index:99999999999999999;background: rgba(27, 27, 30, 0.32);" v-if="this.$root.showImageCropperDiary">

   <div style="position:absolute; height:90%; top:5%; width:94%; left:3%; align-items:center; justify-content:center;" class="d-flex" >

     <div class=" col-lg-6  pt-2 col-md-8  d-flex flex-column" style="background:white;height:100%;" >

       <div class="text-center d-flex flex-row" style="align-items:center;">
          
          <div class="col-2 px-1 py-1 text-left">
          <v-btn icon @click="closeCropper"><v-icon>mdi mdi-close</v-icon> </v-btn> 
          </div>
         
          <div class="text-center col-8 py-1" style="width:100%;">
            <h6>Crop Image</h6>
          </div>

           <div class="col-2 px-1 py-1">
          
          </div>
       </div>
        <image-cropper-board></image-cropper-board>
     </div>

   </div>

 </div>


 <!-- ends -->
    </div>
</template>
<script>

const ImageCropperBoard = () => import(
    /* webpackChunkName: "imageCropperBoardDiary" */ './ImageCropper.vue'
  );


import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

 import { codemirror } from 'vue-codemirror'
 import '../../bootstraps/codeImports'
  

  const CodeBox = () => import(
    /* webpackChunkName: "CodeBox?v=0.53" */ '../chats/CodeBox.vue'
  );

   const VideoPlayer = () => import(
    /* webpackChunkName: "VideoPlayer?v=0.13" */  '../chats/VideoPlayer.vue'
  );

  const AudioPlayer = () => import(
    /* webpackChunkName: "AudioPlayer?v=0.20" */ '../chats/AudioPlayer.vue'
  );

  const Images = () => import(
    /* webpackChunkName: "Images?v=0.32" */ '../chats/Images.vue'
  );





  import draggable from 'vuedraggable'


export default {
     data () {
      return {
          requiredRule: [
         v => !!v || 'Oh! you missed this.',
        ],
        subjectRule: [
         v => !!v || 'Add a subject to this note',
        ],
        KeywordsRule: [
         v => !!v || 'Add atleast one keyword',
        ],
        selectedContentId:0,
        addNewContentModal:false,
        selectedContentType:'text',
          imagepath:'',
        Alert:false,
        alertMsg:'',
        image1: this.$root.imagepath1,
        image2: this.$root.imagepath2,
        image3: this.$root.imagepath3,
        image4: this.$root.imagepath4,
        imageHeight1: this.$root.imageHeight1,
        imageHeight2: this.$root.imageHeight2,
        imageHeight3: this.$root.imageHeight3,
        imageHeight4: this.$root.imageHeight4,
        imageWidth1: this.$root.imageWidth1,
        imageWidth2: this.$root.imageWidth2,
        imageWidth3: this.$root.imageWidth3,
        imageWidth4: this.$root.imageWidth4,
        videoUrl: '',
       items:['cool','new'],
       text:'',
        that:this,
      ContentValue:'', 
      contentInWord:'',
      drag: false,
       editFeild:false,
         loading:false,
         is_comment: false,
         attachment_type:null,
         imageTemp1:this.$root.imageTemp1,
          imageTemp2:this.$root.imageTemp2,
           imageTemp3:this.$root.imageTemp3,
            imageTemp4:this.$root.imageTemp4,
          VideoBlob:'',
          AudioBlob:'',
           selectedLangId:0,
          audioUrl:'',
          progressvalue:0,
          ResultCode:'',
         showAdminOptions:false,
         recheckCodeBox: true,
          codeContent:'// write your code...',
          fileUrl:'',
          projectArray:[],
          documentSize:'',
          VideoName:'',
          documentName:'',
          audioName:'',
          loadingSendMsg:false,
          audioSize:'',
          loadingProjects:false,
          showCode:true,
          input:'',
          showShareProject:false,
          selectedProject:'',
          languageCode:'JAVASCRIPT(Node)',
           cmOption: {
          tabSize: 4,
          foldGutter: true,
          filepath:'',
          NewMsg:'',
          styleActiveLine: true,
          lineNumbers: true,
           scrollbarStyle:"overlay",
          line: true,
          autocorrect: true,
          keyMap: "sublime",
          readOnly:'',
         
          mode: 'text/html',
          theme: 'base16-dark',
          extraKeys: {
             "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
          },
          
        },
        items: [
          {
            "id": 0,
            "name": 'HTML' 
          },
          {
            "id": null,
            "name": 'CSS' 
          },
          {
            "id": 26,
            "name": 'JAVASCRIPT(Node)' 
          },
          {
            "id": 35,
            "name": 'PHP' 
          },
          {
            "id": 39,
            "name": 'PYTHON(3.8.1)' 
          },
          {
            "id": 100,
            "name": 'PYTHON For ML(3.7.7)' 
          },
          {
            "id": 38,
            "name": 'PYTHON(2.7.17)' 
          },
          {
            "id": 44,
            "name": 'SQL' 
          },
          {
            "id": 4,
            "name": 'C' 
          },
          {
            "id": 11,
            "name": 'C++' 
          },
          {
            "id": 25,
            "name": 'JAVA' 
          },
          {
            "id": 13,
            "name": 'C#' 
          },
          {
            "id": 18,
            "name": 'ERLANG' 
          },
          {
            "id": 14,
            "name": 'COBOL' 
          },
          {
            "id": 27,
            "name": 'KOTLIN' 
          },
          {
            "id": 21,
            "name": 'FOTRAN' 
          },
          {
            "id": 34,
            "name": 'PERL' 
          },
          {
            "id": 40,
            "name": 'R' 
          },
          {
            "id": 41,
            "name": 'RUBY' 
          },
          {
            "id": 22,
            "name": 'GO' 
          },
          {
            "id": 24,
            "name": 'HASKELL' 
          },
          {
            "id": 28,
            "name": 'LUA' 
          },
          {
            "id": 33,
            "name": 'PASCAL' 
          },
          {
            "id": 42,
            "name": 'RUST' 
          },
          {
            "id": 43,
            "name": 'SCALA' 
          },
          {
            "id": 45,
            "name": 'SWIFT' 
          },
          {
            "id": 46,
            "name": 'TYPESCRIPT' 
          }
        ],
        CodeFilename:'index',
        loadingAddPage:false,
         timer:'0:00',
          seconds:0,
      minute:0,
      recorderInterval:null,
     recording:false,
      audioBlob:'',
      mediaRecorder:null,
      audioChunks:[],
      projectArray:[]
     
      }
    },
   components: {
    draggable,
     CodeBox,
      VideoPlayer,
      AudioPlayer,
      Images,
       ImageCropperBoard,
      codemirror
  },
   computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
     compiledMarkdown: function() {
           
             var renderer = new marked.Renderer();
            renderer.link = function(href, title, text) {
          var link = marked.Renderer.prototype.link.call(this, href, title, text);
          return link.replace("<a","<a target='_blank' ");
          };
        marked.setOptions({
          renderer: renderer    
          });

           return  marked(this.input, { sanitize: true });
           
          }
  },
  
     mounted(){
      this.$root.showMobileHub = false;
      this.$root.addDiaryContentComponent = this;
      this.getAllProjects();
    },
    methods:{
      updateText:function(){
          this.contentInWord = this.compiledMarkdown;
      },
      closeAddContentModel:function(){

         this.addNewContentModal = false;

      },
       goToProject:function(message){

      this.$router.push({ path: '/board/projects/panel/' + message.project.project_slug });

    },
       getAllProjects:function(){
         
        
             axios.get( '/fetch-personal-projects')
      .then(response => {

      if (response.status == 200) {

       

       this.projectArray = response.data.projects

     }


     })
     .catch(error => {

     })
       
      },
       startrecord: function(){

       this.recording = true;
     
      this.$root.recordUrl = '';
      this.audioChunks = [];
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
       this.mediaRecorder = new MediaRecorder(stream)
      this.mediaRecorder.start();

         this.startCounter();

     this.audioChunks = [];

    this.mediaRecorder.addEventListener("dataavailable", event => {

      this.audioChunks.push(event.data);
    });

    this.mediaRecorder.addEventListener("stop", () => {
             
           this.audioBlob = new Blob(this.audioChunks);

            this.$root.recorderBlob = new Blob(this.audioChunks);

            
     
         this.$root.recordUrl = URL.createObjectURL(this.audioBlob);

      
     
    });

    

  });
    },
     startCounter:function(){  

        this.recorderInterval = null

        
         
          this.recorderInterval = setInterval(() => {

         this.seconds++

          let secondsString = '';

          if(this.seconds < 10){

              secondsString = '0' +  this.seconds;
            
          }else{

             if(this.seconds == 60){
                this.seconds = 0;
                this.minute++
                 secondsString =  '00'; 
             }else{

             secondsString =  this.seconds; 

             }

          }

            this.timer = this.minute + ':' + secondsString;

   
         }, 1000);

     },
       stoprecord: function(type){
         
          
           this.mediaRecorder.stop();
           clearInterval(this.recorderInterval);

           this.recording = false;

           this.seconds = 0;
           this.minute = 0;
           this.timer = '0:00';

           this.audioBlob = '';

            setTimeout(() => {

              if(type == 'send'){

               this.sendMessage();

            }
              
            }, 1000);

            
          
       
    },
      closeCropper:function(){
        this.$root.showImageCropperDiary = false;
        
      },
       handleOnDrop:function(){
         this.drag = false;
         this.saveContentOrder();
     },
     saveContentOrder: function(showAlert = true){
       
       let ContentArray = [];

        this.$root.noteContent.pages[this.selectedContentId].contents.forEach((message)=>{

         ContentArray.push(message.message_id)
   
        });

      axios.post( '/save-content-order',{
        slug: this.$root.noteContent.pages[this.selectedContentId].slug,
        contents: ContentArray
      })
      .then(response => {
      
      if (response.status == 200) {

         if(showAlert){

                this.$root.diaryBoardComponent.showAlert('Saved!','Your changes have been saved','success');

         }

      

           this.$root.LocalStore('user_diary_data_' +  this.$route.params.diary_id + this.$root.username,this.$root.selectedDiary);
       
     }
       
     
     })
     .catch(error => {

     this.$root.diaryBoardComponent.showAlert('Oops!','Unable to save changes,please try again','error');
       
    
     }) 

        
        
         
     },
     deletePage:function(page){

         this.$root.pageToDelete = page.slug;

            this.$root.diaryBoardComponent.showAlert('','','question');

     },
      showAddModal:function(){
        this.addNewContentModal = true;
        this.$root.AddModalIsUp = true;
      },
      selectContentType:function(type){

          if( type == 'code'){

            this.detectchange(this.languageCode)

          }

          if(type == 'record'){

            this.startrecord();

          }
            
          if(type == 'project'){

            this.showShareProject = true;

          }
     this.selectedContentType = type
      },
       runCode:function(){
        
       

           this.showCode = false;

            if(this.selectedLangId == 0 || this.language == 'HTML'){

              this.ResultCode = this.codeContent; 
             

            }else{

              this.ResultCode = 'sending to sandbox...';

              this.runCodeOnSandbox();
              

            }

      },
       onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
        onCmReady(codemirror) {

        console.debug('onCmReady', codemirror)
      },
      onCmFocus(codemirror) {
        console.debug('onCmFocus', codemirror)
      },
      onCmBlur(codemirror) {
        console.debug('onCmBlur', codemirror)
      },
      checkResponse:function(token){

        let _this = this;

      
                axios.post( '/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.ResultCode =  response.data[0].stdout;

                  
                 


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.ResultCode = 'In Queue...';

                   _this.checkResponse(response.data[0].token);

              }else if(response.data[0].status.description == 'Processing'){

                 _this.ResultCode = 'Processing...';

                   _this.checkResponse(response.data[0].token);

              }else{

                 _this.ResultCode =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

               

              }
          }

          
            
          })
          .catch(error => {

             
             
               _this.ResultCode = 'An issue occured,unable to run on sandbox...' + error;

               
             
          })


        

        

      },
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox',{
                langId: this.selectedLangId,
                code: this.codeContent,
                messageId: 0
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

             let token = response.data[0].token;

        
              if(response.data[0].status.description == 'Accepted'){

                  this.ResultCode =  response.data[0].stdout ;

                
                

              }else if(response.data[0].status.description == 'In Queue'){

                 this.ResultCode = 'In Queue...';
                 this.checkResponse(token);

              }else if(response.data[0].status.description == 'Processing'){

                 this.ResultCode = 'Processing...';

                 this.checkResponse(token);

              }else{

                

                this.ResultCode =  response.data[0].stdout + '\n Error: \n' + response.data[0].stderr ;

              }



          }
            
          })
          .catch(error => {

            
             
               this.ResultCode = 'An issue occured,unable to run on sandbox...' + error;

              
              
          })

          
      },
        addNewContent:function(){
            
                this.loadingAddPage = true;
           axios.get( '/add-new-page/' + this.$root.noteContent.note.tag_unique_id + '/' + this.$route.params.diary_id)
      .then(response => {
      
      if (response.status == 200) {

        

         this.$root.noteContent.pages.push(response.data)
        
         this.loadingAddPage = false;

         

       
     }
       
     
     })
     .catch(error => {

     this.$root.diaryBoardComponent.showAlert('Oops!','Unable to add page,please try again','error');
        this.loadingAddPage = false;
    
     }) 

      

        },

      clearData: function(){
           this.image1 = '';
            this.image2 = '';
            this.image3 = '';
            this.image4 = '';
            this.videoUrl = '';
           this.audioUrl = '';
            this.fileUrl = '';
            this.audioBlob = '';
            this.codeContent = '';
            this.contentInWord = '';
            this.input = '';
            this.showShareProject = false;

        },
       codeEditor: function(){
          this.clearData();
       },

     bytesToSize:function(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
},
   audiohandler:function(e){
        this.clearData();
          const files = e.target.files

            this.AudioBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;
          this.audioName = files[0].name;
         this.audioSize = this.bytesToSize(files[0].size);
           if(fileSize <= 4000000){
              fr.addEventListener('load', () => {
          this.audioUrl = fr.result;

        });
       
        setTimeout(() => {
           this.sendMessage()
        }, 1000);
           }else{
              
               this.showAlert('Oops!','Audio size cannot be more than 40MB','error')
                return;
           }
   },
   filehandler:function(e){
       this.clearData();
          const files = e.target.files

            this.FileBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;

             this.documentSize =  this.bytesToSize(files[0].size);
             this.documentName = files[0].name;
           if(fileSize <= 400000000){
              fr.addEventListener('load', () => {
          this.fileUrl = fr.result;
     
      // send message
         this.sendMessage();

        });
           }else{
              this.showAlert('Oops!','File size cannot be more than 400MB','error')
                return;
           }
   },
  showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
         timeout: 5000,
       position: 'bottomRight',
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
         timeout: 5000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
         timeout: 5000,
       position: 'bottomRight',
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
       zindex:'9999999999',
         timeout: 5000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
   b64toBlob: function(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
},
 handleBlob: function(imageString){
  // Split the base64 string in data and contentType
var block = imageString.split(";");
// Get the content type of the image
var contentType = block[0].split(":")[1];// In this case "image/gif"

 var imgType = contentType.slice(6);

// get the real base64 content of the file
var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

// Convert it to a blob to upload
var blob = this.b64toBlob(realData, contentType);

  return [blob,imgType];
 },
crophandler:function(e){

       this.clearData();

         this.videoUrl = '';
         this.codeContent='';
           // Reference to the DOM input element
			var input = e.target;
            // Ensure that you have a file before attempting to read it

              var filesLength = input.files.length;
              if(filesLength > 4){
                
                  this.showAlert('Oops!','Selected images cannot be more than 4','error')
                return;
              }



          if(filesLength <= 4){


           const files = e.target.files

           this.imageTemp1 = files[0];
           this.imageTemp2 = files[1];
           this.imageTemp3 = files[2];
           this.imageTemp4 = files[3];

            this.$root.imageTemp1 = files[0];
           this.$root.imageTemp2 = files[1];
           this.$root.imageTemp3 = files[2];
           this.$root.imageTemp4 = files[3];

           	const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
          this.image1 = fr.result;
        });

          if(files[1]){
            const fr2 = new FileReader ()
				fr2.readAsDataURL(files[1])
				fr2.addEventListener('load', () => {
          this.image2 = fr2.result;
        });
          }


        if(files[2]){
           	const fr3 = new FileReader ()
				fr3.readAsDataURL(files[2])
				fr3.addEventListener('load', () => {
          this.image3 = fr3.result;
        });
        }


         if(files[3]){
           	const fr4 = new FileReader ()
				fr4.readAsDataURL(files[3])
				fr4.addEventListener('load', () => {
          this.image4 = fr4.result;
        });
         }




          }


        },
        editImage:function(imageNumber){
          
          if(imageNumber == 'image1'){

         this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image1'


          }

          if(imageNumber == 'image2'){

          this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image2'
          }

          if(imageNumber == 'image3'){

          this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image3'
          }

          if(imageNumber == 'image4'){

         this.$root.imagepath1  = this.image1;
          this.$root.imagepath2  = this.image2;
           this.$root.imagepath3  = this.image3;
            this.$root.imagepath4  = this.image4;

          this.$root.currentImage = 'image4'
          }
          
       this.$root.showImageCropperDiary = true;
        

        },
        vidoehandler:function(e){
           this.clearData();
          const files = e.target.files

            this.VideoBlob = files[0];
           	const fr = new FileReader ()
        fr.readAsDataURL(files[0])
         let fileSize = files[0].size;
           this.VideoName = files[0].name;

           if(fileSize <= 100000000){
              fr.addEventListener('load', () => {
          this.videoUrl = fr.result;
       
        // send message
         this.sendMessage();
        });
           }else{
              this.showAlert('Oops!','Video size cannot be more than 100MB','error')
              
                return;
           }

        },
       sendMessage: function(){
        this.loadingSendMsg = true;

          
          let formData = new FormData();
         

        if(this.image1 != '' || this.image2 != '' || this.image3 != ''|| this.image4 != ''){
                 
                
              
          
            
               this.attachment_type = 'image';

               if(this.image1 != ''){
                   if(this.$root.imageCanvas1 == ''){
                       formData.append('image1',this.imageTemp1);
                   }else{
                     var data1 = this.handleBlob(this.image1);
                       formData.append('image1',data1[0]);
                       formData.append('imageType1',data1[1]);
                      
                   }
              
               }

                if(this.image2 != ''){
                   if(this.$root.imageCanvas2 == ''){
                       formData.append('image2',this.imageTemp2);
                   }else{
                          var data2 = this.handleBlob(this.image2);
                  formData.append('image2',data2[0]);
                       formData.append('imageType2',data2[1]);

                   }
              
               }

                if(this.image3 != ''){
                   if(this.$root.imageCanvas3 == ''){
                       formData.append('image3',this.imageTemp3);
                   }else{

                  var data3 = this.handleBlob(this.image3);
                  formData.append('image3',data3[0]);
                       formData.append('imageType3',data3[1]);
                   }
              
               }
                if(this.image4 != ''){
                   if(this.$root.imageCanvas4 == ''){
                       formData.append('image4',this.imageTemp4);
                   }else{

                  var data4 = this.handleBlob(this.image4);
                  formData.append('image4',data4[0]);
                       formData.append('imageType4',data4[1]);
                   }
              
               }
               
              
            
      
            
                

            
            

           // height
             formData.append('imageHeight1',this.imageHeight1);
            formData.append('imageHeight2',this.imageHeight2);
            formData.append('imageHeight3',this.imageHeight3);
            formData.append('imageHeight4',this.imageHeight4);

           // width
             formData.append('imageWidth1',this.imageWidth1);
            formData.append('imageWidth2',this.imageWidth2);
            formData.append('imageWidth3',this.imageWidth3);
            formData.append('imageWidth4',this.imageWidth4);
        }

         if(this.codeContent != ''){
            
            
            this.attachment_type = 'code';

            formData.append('code',this.codeContent);
             formData.append('file_name',this.CodeFilename);
             formData.append('language_type',this.languageCode);
            
        }

         if(this.videoUrl != ''){

         
            this.attachment_type = 'video';

            formData.append('video',this.VideoBlob);
            formData.append('display_name',this.VideoName);
            
        }

         if(this.audioUrl != ''){
             
          
            this.attachment_type = 'audio';

            formData.append('audio',this.AudioBlob);
            formData.append('display_name',this.audioName);
            
        }

        if(this.fileUrl != ''){
           
            

            this.attachment_type = 'file';

            formData.append('file',this.FileBlob);
            formData.append('display_name',this.documentName);
             formData.append('file_size',this.documentSize);
            
        }

        if(this.contentInWord != ''){
           
            this.attachment_type = 'text';

            formData.append('content',this.contentInWord);
           
        }

        if(this.audioBlob != ''){
         
           this.attachment_type = 'voiceRecord';

            formData.append('audio',this.$root.recorderBlob);
              formData.append('display_name','Voice Record');
        }


         if(this.showShareProject == true){


            formData.append('project_data',this.selectedProject);

            this.attachment_type = 'project';


        }

       
           
        
        formData.append('attachment_type',this.attachment_type);
        formData.append('response_slug',this.$root.noteContent.pages[this.selectedContentId].slug);
        formData.append('space_id',this.$root.noteContent.pages[this.selectedContentId].slug);
        formData.append('bot_id',this.$route.params.diary_id);
      
      
       
       this.sendMessageData(formData);
    },
     sendMessageData: function(formData){

       
      
      axios.post('/create-response-content',formData,
         {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: (progressEvent)=>{
               
            
                  this.progressvalue = parseInt(Math.round(
                   (progressEvent.loaded / progressEvent.total) * 100
                    ))
                
             
           }
           })
          .then(response => {

             
            
           if (response.status == 200) {
               
           
                let message = response.data.message;

                this.$root.noteContent.pages[this.selectedContentId].contents.push(message);

                  this.saveContentOrder(false);
               
                this.clearData();
               
                this.loadingSendMsg = false;
                this.progressvalue = 0;

                this.$root.AddModalIsUp = false;

                this.$root.selectedDiary.updated = false;
               
            }

           
            
          })
          .catch(error => {

            this.showAlert('Oops!','Something went wrong, please try again','error')

           this.loadingSendMsg = false;
           
          })
    },
    onCmCodeChange:function(codemirror){
       
    console.debug('onCmBlur', codemirror)
      },
       detectchange: function(languageFull){

          let language = '';
          
         if(typeof languageFull == 'object' ){
            language = languageFull.name
             this.selectedLangId =  languageFull.id
         }else{
           language = languageFull

           

            let languageArray = this.items.filter((item)=>{
      return   item.name == languageFull;
           });
       if(languageArray[0].length != 0){

          this.selectedLangId = languageArray[0].id;
       }
            
         }

        if(language == 'HTML'){
            this.cmOption.mode = 'text/html';
         }
         if(language == 'CSS'){
         this.cmOption.mode = 'text/css';
         }
          if(language == 'PYTHON(3.8.1)'){
           this.cmOption.mode = 'text/x-python';
         }

         if(language == 'PYTHON For ML(3.7.7)'){
           this.cmOption.mode = 'text/x-python';
         }

         if(language == 'PYTHON(2.7.17)'){
           this.cmOption.mode = 'text/x-python';
         }
          if(language == 'PHP'){
           this.cmOption.mode = 'text/x-php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           this.cmOption.mode = 'text/javascript';
         }
          if(language == 'SQL'){
           this.cmOption.mode = 'text/x-sql';
         }
          if(language == 'C'){
           this.cmOption.mode = 'text/x-csrc';
         }
          if(language == 'C++'){
           this.cmOption.mode = 'text/x-c++src';
         }
          if(language == 'JAVA'){
           this.cmOption.mode = 'text/x-java';
         }
          if(language == 'C#'){
           this.cmOption.mode = 'text/x-csharp';
         }
          if(language == 'ERLANG'){
           this.cmOption.mode = 'text/x-erlang';
         }
          if(language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';
         }
          if(language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';
         }
          if(language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';
         }
          if(language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';
         }
         if(language == 'GO'){
           this.cmOption.mode = 'text/x-go';
         }
         if(language == 'HASKELL'){
           this.cmOption.mode = 'text/x-haskell';
         }
          if(language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';
         }
         if(language == 'LUA'){
           
            this.cmOption.mode = 'text/x-lua';

         }
         if(language == 'PASCAL'){

            this.cmOption.mode = 'text/x-pascal';
         }
         if(language == 'RUST'){

            this.cmOption.mode = 'text/x-rustsrc';
         }
         if(language == 'SCALA'){
           
             this.cmOption.mode = 'text/x-scala';

         }
         if(language == 'SWIFT'){

              this.cmOption.mode = 'text/x-swift';

         }
         if(language  == 'TYPESCRIPT'){

             this.cmOption.mode = 'text/javascript';

         }
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
.handle{
   cursor: move; 
    
}
.ghost {
  opacity: 0.5;
  background: whitesmoke;
  border:1px solid whitesmoke;
  border-radius: 7px;
}

.handleTextNormalSm   ol{
  padding-left:16px !important;
}

.handleTextNormalSm   ul{
   padding-left:16px !important;
}

  .scroller::-webkit-scrollbar {
  width: 6px;
  background: transparent;
}

.typeBox:hover{
  background:#E1F0FC;
}

.scroller::-webkit-scrollbar-thumb {
  background-color:  #3C87CD;
  outline: 1px solid  #3C87CD;
}


  .codeboxnew,
    .pre {
      width: 100%;
      margin: 0;
       display: block;
      font-size: 13px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      letter-spacing: 1px !important;
      overflow: auto;
    }

 .codeboxnew{
       height: 100%;
       border: 1px solid #e6e6e6;
        position:absolute;
        width:100%;
       
        overflow-x: hidden;
        overflow-y:hidden;
}
</style>