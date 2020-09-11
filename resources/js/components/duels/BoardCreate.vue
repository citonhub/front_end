<template>
<div>
            <v-slide-y-reverse-transition>
                <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
                 v-if="shareboardshow" class="d-none d-lg-block">
       <div class="col-4 offset-4 card " style="position:absolute; top:25%;z-index:20000;" v-if="shareboardshow" >
         <div class="col-12 text-center py-0"  style="border-bottom:1px solid whitesmoke;">
           <v-row>
             <div class="col-2 text-left py-0">
            
             </div>
             <div class="col-8 text-center py-0">
                <span class=" courseheading ">Share</span>
             </div>
              <div class="col-2 py-0 text-right">
            <v-btn class="text-left" icon @click="closeboard"><v-icon>mdi-close</v-icon></v-btn>
             </div>
           </v-row>
            
           
         </div>
          <div class="row ">
            <div class="col-6 text-center py-4 my-0 shareitem"  style="cursor:pointer;">
                <input type="file" 
              @change="handleupload" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
              accept="image/x-png,image/jpeg,image/jpg"/>
               <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon>mdi-file-image</v-icon></span>
                <div style="font-size:10px; font-weight:bold;" class="mt-3">Image</div>
            </div>
             <div class="col-6 text-center  py-4 my-0 shareitem" style="cursor:pointer;">
                <input type="file" 
              @change="handleuploadvideo" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
              accept="video/mp4,video/x-m4v,video/*"/>
                 <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon>mdi-file-video</v-icon></span><br>
                   <div style="font-size:10px; font-weight:bold;" class="mt-3">Video</div>
            </div> 
             <div class="col-6 text-center  py-4 my-0 shareitem" style="cursor:pointer;">
                <input type="file" 
              @change="handleuploadaudio" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="audio/*"/>
                 <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon> mdi-volume-high</v-icon></span><br>
                   <div style="font-size:10px; font-weight:bold;" class="mt-3">Audio</div>
            </div>
             <div class="col-6 text-center  py-4 my-0 shareitem" style="cursor:pointer;">
               <input type="file" @change="handleuploadfile"
               style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>
                <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon> mdi-file-document</v-icon></span><br>
                 <div style="font-size:10px; font-weight:bold;" class="mt-3">File</div>
            </div>
          </div>
       </div>
       </div>
           </v-slide-y-reverse-transition>

            <v-slide-y-reverse-transition>
              <div style="position:absolute;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);"
               v-if="showrecorder" class="d-none d-lg-block">
       <div class="col-4 offset-4 card " style="position:absolute; top:25%;z-index:20000; " >
         <div class="col-12 text-center py-0"  style="border-bottom:1px solid whitesmoke;">
           <v-row>
             <div class="col-2 text-left py-0">
            
             </div>
             <div class="col-8 text-center py-0">
                <span class=" courseheading ">Recorder</span>
             </div>
              <div class="col-2 py-0 text-right">
            <v-btn class="text-left" icon @click="hiderecorder"><v-icon>mdi-close</v-icon></v-btn>
             </div>
           </v-row>
            
           
         </div>
          <div class="col-12 text-center">
             <audio-player :file="audioUrl" :autoPlay="true"></audio-player>
          </div>
         
             <div class="row py-0 my-0" v-show="!showuploadprogress">
               <div class="col-6 text-left py-0 my-0">
                   <v-btn color="#3E8893" icon @click="audioUrl = ''"><v-icon>mdi-delete</v-icon></v-btn>
               </div>
               <div class="col-6 text-right py-0 my-0">
                 <v-btn color="#3E8893" icon  @click="sendmessagerecord('recorder')"><v-icon>mdi-send</v-icon></v-btn>
               </div>
             </div>
              <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-show="showuploadprogress" rounded>

               </v-progress-linear>
         
       </div>
      </div>
           </v-slide-y-reverse-transition>
     <v-slide-y-reverse-transition>
           <div style="position:fixed;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);" v-if="shareboardshow" class="d-none d-md-block d-lg-none">
       <div class="col-6 offset-3 card " style="position:absolute; top:25%;z-index:20000;" >
         <div class="col-12 text-center py-0"  style="border-bottom:1px solid whitesmoke;">
           <v-row>
             <div class="col-2 text-left py-0">
            
             </div>
             <div class="col-8 text-center py-0">
                <span class=" courseheading ">Share</span>
             </div>
              <div class="col-2 py-0 text-right">
            <v-btn class="text-left" icon @click="closeboard"><v-icon>mdi-close</v-icon></v-btn>
             </div>
           </v-row>
            
           
         </div>
          <div class="row ">
            <div class="col-6 text-center py-4 my-0 shareitem" >
              <input type="file" 
              @change="handleupload" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
              accept="image/x-png,image/jpeg,image/jpg"/>
               <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon>mdi-file-image</v-icon></span>
                <div style="font-size:10px; font-weight:bold;" class="mt-3">Image</div>
            </div>
             <div class="col-6 text-center  py-4 my-0 shareitem">
                 <input type="file" 
              @change="handleuploadvideo" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
              accept="video/mp4,video/x-m4v,video/*"/>
                 <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon>mdi-file-video</v-icon></span><br>
                   <div style="font-size:10px; font-weight:bold;" class="mt-3">Video</div>
            </div> 
             <div class="col-6 text-center  py-4 my-0 shareitem">
                <input type="file" 
              @change="handleuploadaudio" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="audio/*"/>
                 <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon> mdi-volume-high</v-icon></span><br>
                   <div style="font-size:10px; font-weight:bold;" class="mt-3">Audio</div>
            </div>
             <div class="col-6 text-center  py-4 my-0 shareitem">
                <input type="file" @change="handleuploadfile"
              style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>
                <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon> mdi-file-document</v-icon></span><br>
                 <div style="font-size:10px; font-weight:bold;" class="mt-3">File</div>
            </div>
          </div>
       </div>
       </div>
           </v-slide-y-reverse-transition>

            <v-slide-y-reverse-transition>
               <div style="position:fixed;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);" v-if="showrecorder"  class="d-none d-md-block d-lg-none">
       <div class="col-6 offset-3 card " style="position:absolute; top:25%;z-index:20000;">
         <div class="col-12 text-center py-0"  style="border-bottom:1px solid whitesmoke;">
           <v-row>
             <div class="col-2 text-left py-0">
            
             </div>
             <div class="col-8 text-center py-0">
                <span class=" courseheading ">Recorder</span>
             </div>
              <div class="col-2 py-0 text-right">
            <v-btn class="text-left" icon @click="hiderecorder"><v-icon>mdi-close</v-icon></v-btn>
             </div>
           </v-row>
            
           
         </div>
          <div class="col-12 text-center">
             <audio-player :file="audioUrl" :autoPlay="true"></audio-player>
          </div>
         
              <div class="row py-0 my-0" v-show="!showuploadprogress">
               <div class="col-6 text-left py-0 my-0">
                   <v-btn color="#3E8893" icon @click="audioUrl = ''"><v-icon>mdi-delete</v-icon></v-btn>
               </div>
               <div class="col-6 text-right py-0 my-0">
                 <v-btn color="#3E8893" icon  @click="sendmessagerecord('recorder')"><v-icon>mdi-send</v-icon></v-btn>
               </div>
             </div>
              <v-progress-linear color="#3E8893" height="15px"  class="my-1 mt-3" striped :value="progressvalue"  v-show="showuploadprogress" rounded>

               </v-progress-linear>
         
       </div>
       </div>
           </v-slide-y-reverse-transition>

    <v-slide-y-reverse-transition>
           <div style="position:fixed;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);" v-if="shareboardshow" class=" d-md-none d-block">
       <div class="col-10 offset-1 card " style="position:absolute; top:25%;z-index:20000;" >
         <div class="col-12 text-center py-0"  style="border-bottom:1px solid whitesmoke;">
           <v-row>
             <div class="col-2 text-left py-0">
            
             </div>
             <div class="col-8 text-center py-0">
                <span class=" courseheading ">Share</span>
             </div>
              <div class="col-2 py-0 text-right">
            <v-btn class="text-left" icon @click="closeboard"><v-icon>mdi-close</v-icon></v-btn>
             </div>
           </v-row>
            
           
         </div>
          <div class="row ">
            <div class="col-6 text-center py-4 my-0 shareitem" >
              <input type="file" 
              @change="handleupload" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
              accept="image/x-png,image/jpeg,image/jpg"/>
               <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon>mdi-file-image</v-icon></span>
                <div style="font-size:10px; font-weight:bold;" class="mt-3">Image</div>
            </div>
             <div class="col-6 text-center  py-4 my-0 shareitem">
                 <input type="file" 
               @change="handleuploadvideo" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
              accept="video/mp4,video/x-m4v,video/*"/>
                 <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon>mdi-file-video</v-icon></span><br>
                   <div style="font-size:10px; font-weight:bold;" class="mt-3">Video</div>
            </div> 
             <div class="col-6 text-center  py-4 my-0 shareitem">
                <input type="file" 
              @change="handleuploadaudio" style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="audio/*"/>
                 <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon> mdi-volume-high</v-icon></span><br>
                   <div style="font-size:10px; font-weight:bold;" class="mt-3">Audio</div>
            </div>
             <div class="col-6 text-center  py-4 my-0 shareitem">
                <input type="file"  @change="handleuploadfile"
              style="opacity:0;width:100%; height:100%; overflow:hidden; position:absolute; z-index:10;" 
             accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
              text/plain, application/pdf"/>
                <span class="py-3 px-3" style="background:whitesmoke; border:1px solid whitesmoke; border-radius:50%;"><v-icon> mdi-file-document</v-icon></span><br>
                 <div style="font-size:10px; font-weight:bold;" class="mt-3">File</div>
            </div>
          </div>
       </div>
       </div>
           </v-slide-y-reverse-transition>
     <v-slide-y-reverse-transition>
               <div style="position:fixed;top:0%; width:100%; height:100% !important; left:0%; z-index:1000000; background: rgba(23,67,88,0.5);" v-if="showrecorder" class=" d-md-none d-block">
       <div class="col-10 card offset-1" style="position:absolute; top:25%;z-index:20000;">
         <div class="col-12 text-center py-0"  style="border-bottom:1px solid whitesmoke;">
           <v-row>
             <div class="col-2 text-left py-0">
            
             </div>
             <div class="col-8 text-center py-0">
                <span class=" courseheading ">Recorder</span>
             </div>
              <div class="col-2 py-0 text-right">
            <v-btn class="text-left" icon @click="hiderecorder"><v-icon>mdi-close</v-icon></v-btn>
             </div>
           </v-row>
            
           
         </div>
           <div class="col-12  text-center">
             
<audio-player :file="audioUrl" :autoPlay="true"></audio-player>

          </div>
         
             <div class="row py-0 my-0" v-show="!showuploadprogress">
               <div class="col-6 text-left py-0 my-0">
                   <v-btn color="#3E8893" icon @click="audioUrl = ''"><v-icon>mdi-delete</v-icon></v-btn>
               </div>
               <div class="col-6 text-right py-0 my-0">
                 <v-btn color="#3E8893" icon  @click="sendmessagerecord('recorder')"><v-icon>mdi-send</v-icon></v-btn>
               </div>
             </div>
              <v-progress-linear color="#3E8893" height="10px"  class="my-1 mt-3" striped :value="progressvalue"  v-show="showuploadprogress" rounded>

               </v-progress-linear>
         
       </div>
       </div>
           </v-slide-y-reverse-transition>
 <div 
    :style="focusfield ? 'position:fixed; bottom:0%; height:16%; width:100%; border-radius:0px; top:84%;background:white;' : 'position:fixed; bottom:0%; height:9%; width:100%; border-radius:0px; top:91%;background:white;'" 
     class="px-2 my-0 py-2 d-flex flex-row d-md-none " >
             <div>
                <v-btn icon
                v-show="showstart"
                @click="startrecord"
               >
                   <v-icon>mdi-microphone</v-icon>
                </v-btn>
                 <v-progress-circular
      indeterminate
        v-show="showstop"
      color="#ff0000"
    >
     <v-btn icon
               
                 color="#ff0000"
                @click="stoprecord"
               >
                   <v-icon color="#ff0000"> mdi-microphone</v-icon>
                </v-btn>
                </v-progress-circular>

                
                
                
           </div>
           <ckeditor  :editor="editor" :config="editorConfig" style="font-size:11px; background:whitesmoke; width:100%;  resize:none; border:1px solid whitesmoke; border-radius:50px;"
             v-model="msgtext"     @keydown="detectTyping" class="px-4 py-2"
           @focus="changeheight"   @blur="removefocus" >

           </ckeditor>
           
           
           <div>
                <v-btn icon
                v-show="showshare"
                @click="shareboard"
               >
                   <v-icon>mdi-attachment</v-icon>
                </v-btn>
                 <v-btn icon
                v-show="showsend"
              @click.prevent="sendmessage('text')"
               >
                   <v-icon>mdi-send</v-icon>
                </v-btn>
           </div>
       </div>


       <div 
    :style="focusfield ? 'position:fixed; bottom:0%; height:7%; width:100%; border-radius:0px; top:93%;background:white;' : 'position:fixed; bottom:0%; height:5%; width:100%; border-radius:0px; top:95%;background:white;'" 
     class="px-2 my-0 py-2 d-md-flex flex-row d-lg-none d-none" >
             <div>
                <v-btn icon
                v-show="showstart"
                @click="startrecord"
               >
                   <v-icon>mdi-microphone</v-icon>
                </v-btn>
                 <v-progress-circular
      indeterminate
        v-show="showstop"
      color="#ff0000"
    >
     <v-btn icon
               
                 color="#ff0000"
                @click="stoprecord"
               >
                   <v-icon color="#ff0000"> mdi-microphone</v-icon>
                </v-btn>
                </v-progress-circular>

                
                
                
           </div>
           <ckeditor  :editor="editor" :config="editorConfig" style="font-size:12px; background:whitesmoke; width:100%; resize:none; border:1px solid whitesmoke; border-radius:50px;"
             v-model="msgtext"     @keydown="detectTyping" class="px-2 py-2"
           @focus="changeheight"   @blur="removefocus">

           </ckeditor>
           
           
           <div>
                <v-btn icon
                v-show="showshare"
                @click="shareboard"
               >
                   <v-icon>mdi-attachment</v-icon>
                </v-btn>
                 <v-btn icon
                v-show="showsend"
               @click.prevent="sendmessage('text')"
               >
                   <v-icon>mdi-send</v-icon>
                </v-btn>
           </div>
       </div>



       <div 
       :style="focusfield ? 'position:absolute; bottom:0%; height:10%; width:100%; border-radius:0px; top:90%;background:white;' : 'position:absolute; bottom:0%; height:8%; background:white; width:100%; border-radius:0px; top:92%;'" 
       class="px-2 my-0 d-lg-flex flex-row d-none py-2" >
           <div>
                <v-btn icon
                v-show="showstart"
                @click="startrecord"
               >
                   <v-icon>mdi-microphone</v-icon>
                </v-btn>
                 <v-progress-circular
      indeterminate
        v-show="showstop"
      color="#ff0000"
    >
     <v-btn icon
               
                 color="#ff0000"
                @click="stoprecord"
               >
                   <v-icon color="#ff0000"> mdi-microphone</v-icon>
                </v-btn>
                </v-progress-circular>

                
                
                
           </div>
           <ckeditor  :editor="editor" :config="editorConfig" style="font-size:12px; background:whitesmoke; width:100%; resize:none; border:1px solid whitesmoke; border-radius:50px;"
             v-model="msgtext"     @keydown="detectTyping"  class="px-2 py-2"
           @focus="changeheight"   @blur="removefocus" >

           </ckeditor>
           
           <div>
                <v-btn icon
                v-show="showshare"
                @click="shareboard"
               >
                   <v-icon>mdi-attachment</v-icon>
                </v-btn>
                 <v-btn icon
                v-show="showsend"
                @click.prevent="sendmessage('text')"
               >
                   <v-icon>mdi-send</v-icon>
                </v-btn>
           </div>
         
          
       </div>

</div>


</template>
<script>
   import BallonEditor from '@ckeditor/ckeditor5-build-balloon';
  import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
      props:['user_id','selected_class_id','messages','code','tutoruserid','focusfield'],
     components: {
    
      VuetifyAudio: () => import('vuetify-audio'),
        ckeditor: CKEditor.component,
    
    },
     data(){
      return{
        msgtext: '',
        fieldheight: 1,
         showshare: true,
         filepathreal:'',
         showsend: false,
          showstart:true,
           editor: BallonEditor,
          shareboardshow:false,
          audioBlob:'',
          uploadfile:'',
          progressvalue:0,
          editorConfig: {
                    toolbar: [ 'bold', 'italic', '|', 'link' ]
                },
          filename: '',
           audioUrl:'',
           showuploadprogress:false,
           preloadercounter:0,
         filerecord:'',
         mediaRecorder:null,
          showrecorder:false,
         audioChunks:[],
          showstop: false,
           color: null,
           sentmessageid:0,
              autoplay: false,
          mainboard: false,
      }
    }, 
    watch:{
       msgtext(value){
         this.msgtext = value;
         this.switchicons(value);
       }
    },
    methods:{
       shareboard: function(){
        this.shareboardshow = true;
      },
      closeboard: function(){
        this.shareboardshow = false;
      },
       
 switchicons:function(value){

   if(value.length != 0){
           this.showshare = false;
           this.showsend = true;
         }else{
            this.showsend = false;
           this.showshare = true;
         }
 },
 audioFinish () {
				this.msgs.push('The audio finished.')
			},
shareboard: function(){
        this.shareboardshow = true;
      },

    startrecord: function(){
      this.showstart= false;
      this.showstop = true;
      this.audioUrl = '';
      this.audioChunks = [];
      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
       this.mediaRecorder = new MediaRecorder(stream)
      this.mediaRecorder.start();

     this.audioChunks = [];

    this.mediaRecorder.addEventListener("dataavailable", event => {
      this.audioChunks.push(event.data);
    });

    this.mediaRecorder.addEventListener("stop", () => {
      this.audioBlob = new Blob(this.audioChunks);
      this.audioUrl = URL.createObjectURL(this.audioBlob);
    });

  });
    },
detectTyping: function(){
         
         this.$root.isTyping(this.selected_class_id);
      },
     
       hiderecorder: function(){
      this.showrecorder = false;
    },
     changeheight: function(){
     this.$root.changeheight();
      },
      removefocus:function(){
      this.$root.removefocus();
     },
 sendmessagerecord: function(type){

            this.uploadfile = this.audioBlob;
            this.showuploadprogress = true;
           let formData = new FormData();

          
           if(type == 'recorder'){
              formData.append('audio',this.uploadfile);
           }
        
          formData.append('classid',this.selected_class_id);
          formData.append('type',type);
          formData.append('activemembers',this.$root.users);

             axios.post('/save-message',formData,
           {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: function(progressEvent){
             this.progressvalue = parseInt(Math.round(
               (progressEvent.loaded / progressEvent.total) * 100
             ))
           }.bind(this)
           })
          .then(response => {
             
            
              this.showuploadprogress = false;
             if (response.status == 200) {
               
            
              this.showrecorder= false;
          
             this.$root.scrollboard();
            }
              
            
           
            
          })
          .catch(error => {
            console.log(error);
          });
        
      },
 handleupload: function(e){
       this.uploadfile = e.target.files[0];
        
        this.preloadercounter++;
          const files = e.target.files
       
			if(files[0] !== undefined) {
			
			
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
          this.filepathreal = fr.result;
           var newmsg = {
           type: 'image',
           preloader: true,
           loaderid: this.preloadercounter,
           user_id:0,
          content: this.filepathreal
         };

         this.messages.push(newmsg);

        
				  
				})
			} else {
        this.filepath = '';
       
			}
      
		
         this.$root.scrollboard();
        },

      handleuploadvideo: function(e){
       this.uploadfile = e.target.files[0];
        
       
          const files = e.target.files
       
			if(files[0] !== undefined) {
			
			
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
          this.filepathreal = fr.result;
           var newmsg = {
           type: 'video',
            loaderid: this.preloadercounter,
           preloader: true,
           user_id:0,
          content: this.filepathreal
         };

         this.messages.push(newmsg);

        
				  
				})
			} else {
        this.filepath = '';
       
			}
      
		  this.$root.scrollboard();
       
        },
   handleuploadfile: function(e){
       this.uploadfile = e.target.files[0];
           
        this.filename = this.uploadfile.name;
       
          const files = e.target.files
       
			if(files[0] !== undefined) {
			
			
				const fr = new FileReader ()
        fr.readAsDataURL(files[0])
      
				fr.addEventListener('load', () => {
          this.filepathreal = fr.result;
           var newmsg = {
           type: 'document',
            loaderid: this.preloadercounter,
           preloader: true,
           user_id:0,
          content: this.uploadfile.name
         };

         this.messages.push(newmsg);

        
				  
				})
			} else {
        this.filepath = '';
       
			}
      
		  this.$root.scrollboard();
       
        },
        handleuploadaudio: function(e){
        this.uploadfile = e.target.files[0];
        
         console.log(this.uploadfile);
          const files = e.target.files
       
			if(files[0] !== undefined) {
			
			
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
          this.filepathreal = fr.result;
           var newmsg = {
           type: 'audio',
           preloader: true,
            loaderid: this.preloadercounter,
           user_id:0,
          content: this.filepathreal
         };

         this.messages.push(newmsg);
				})
			} else {
        this.filepath = '';
       
      }
        this.$root.scrollboard();
        },
sendmessage: function(type){


       this.$root.sendmessage(type,this.msgtext);
           
           
         
      },
  
    
   

    }
}
</script>
<style>
.notfocuslg{
  position:absolute; bottom:0%; height:6%; width:100%; border-radius:0px; top:90%;
}
.focuslg{
  position:absolute; bottom:0%; height:8%; width:100%; border-radius:0px; top:90%;
}

</style>