<template>
    <div class="row py-1 my-0 px-0" >
       
         <div class="col-12 py-0 my-0 d-flex px-5 flex-row" style="align-items:center; justify-content:center;">

            <div class="row py-0 my-0">
               
               <v-card  flat  color="#ffffff" style="border-radius: 10px;" class="col-9 px-2 py-0 my-0">
                 <div class="editor">
          
                <editor-content class="editor-box" :editor="editor"   :onUpdate="countCharacter()"  />
                </div>
               </v-card>
               <div class="col-3 d-flex py-0 my-0" style="align-items:center;justify-content:center;" v-if="!this.$root.screenSharingOn">
                 <v-btn  style="box-shadow:none;"
                  fab color="#3E8893" class="mr-1 d-md-none d-inline-block" x-small  v-if="!showSend"
               @click="shareHandler"
               >
                   <v-icon color="#ffffff">mdi-attachment</v-icon>
                </v-btn>

                <v-btn   style="box-shadow:none;" fab color="#3E8893" class="mr-1 d-md-none d-inline-block"  x-small  v-else
               @click="sendMessage"
               >
                   <v-icon color="#ffffff" >mdi-send</v-icon>
                </v-btn>
                
               

                    <v-btn  style="box-shadow:none;"
                  fab color="#3E8893" class="mr-1 d-md-inline-block d-none" small  v-if="!showSend"
               @click="shareHandler"
               >
                   <v-icon color="#ffffff">mdi-attachment</v-icon>
                </v-btn>

                <v-btn   style="box-shadow:none;" fab color="#3E8893" class="mr-1 d-md-inline-block d-none"  small  v-else
               @click="sendMessage"
               >
                   <v-icon color="#ffffff" >mdi-send</v-icon>
                </v-btn>
                

                 <v-btn  style="box-shadow:none;" fab color="#3E8893" class="d-md-none d-inline-block" x-small v-if="!showSend"
                  @click="toggleRecording"
               >
                   <v-icon  color="#ffffff" v-if="!recording">mdi-microphone</v-icon>
                   <v-progress-circular indeterminate color="#ffffff" v-else><v-icon>mdi-microphone</v-icon></v-progress-circular>
                </v-btn>


                <v-btn  style="box-shadow:none;" fab color="#3E8893" class="d-md-inline-block d-none" small v-if="!showSend"
                  @click="toggleRecording"
               >
                   <v-icon  color="#ffffff" v-if="!recording">mdi-microphone</v-icon>
                   <v-progress-circular indeterminate color="#ffffff" v-else><v-icon>mdi-microphone</v-icon></v-progress-circular>
                </v-btn>

               </div>
               <div v-else class="col-3 d-flex py-0 my-0" style="align-items:center;justify-content:center;">
                  <v-btn   color="#3E8893" small 
                  @click="toggleUserList()"
               > 
                  <span style="color:#ffffff; font-size:12px; text-transform:capitalize;">Live</span> 
                   <v-progress-circular indeterminate color="#ffffff"><v-icon>mdi-microphone</v-icon></v-progress-circular>
                </v-btn>
               </div>

              
            </div>
              

               
              
            
         </div>

         
        
      </div>
</template>
<script>

import { Editor, EditorContent, EditorMenuBubble  } from 'tiptap';
import {
        Placeholder} from 'tiptap-extensions';

export default {
      data(){
        return{
        
          editor: new Editor({
        content: this.$root.postContent,
        extensions:[
        
             
             new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Type here...',
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
          }),
       
           
        ],
        
      }),
      wordCount:0,
      showSend:false,
      audioChunks:[],
      Alert:true,
      alertMsg:'',
      recording:false,
      audioBlob:'',
      mediaRecorder:null,
      contentInWord:'',
      NewMsg:'',
    

        }
    },
    components: {
    EditorContent,
    EditorMenuBubble,
  },
    mounted(){

    },
    methods:{
        
       urlify:function(text) {
      var urlRegex =  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
     return text.replace(urlRegex, function(url) {
     return '<a href="' + url + '" target="_blank">' + url + '</a>';
  })
   // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
     },
     
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
       
        shareHandler:function(){
          this.$root.sharePage= true;
           this.$root.showChatBottom = false;
        },
         countCharacter:function(value){
            this.wordCount = this.editor.getHTML().length;
            

         if(this.wordCount > 7){
           this.showSend = true;
            this.$root.ShowButton = false;
                 
             this.isTyping();

              this.$root.liveIsOn = false;

            this.$root.screenSharingOn = false;

         }else{
            this.showSend = false;
             this.$root.ShowButton = true;
             
         }
         
       
          this.contentInWord = this.urlify(this.editor.getHTML());
      

         
          
      },
      reactToFocus:function(){

          

      },
      reFocus:function(){
         this.editor.focus();
      },
      toggleUserList:function(){

        
      if(this.$root.liveIsOn){
          
          this.$root.liveIsOn = false;
      }else{

         this.$root.liveIsOn = true;
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
    toggleRecording:function(){
       if(this.recording){
          this.stoprecord();
          this.recording = false;
       }else{
          this.recording = true;
         this.startrecord();
       }
    },
    startrecord: function(){
     
      this.$root.recordUrl = '';
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

            this.$root.recorderBlob = new Blob(this.audioChunks);
     
         this.$root.recordUrl = URL.createObjectURL(this.audioBlob);
     
    });

   this.showAlert(5000,'Recording Started')

  });
    },
   
       stoprecord: function(){
       
        this.mediaRecorder.stop();
         this.$root.voiceRecorder = true;

         this.$root.showChatBottom = false;
       
    },
    makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
    makeMessage:function(msgType,data,reply,replied_message){
    let NewMessage = {
      content:null,
      created_at: moment().subtract(1,'hours'),
       is_reply:reply,
       message_id: this.makeUUID(),
       replied_message:replied_message,
       replied_message_id:null,
       showReply:false,
       showDate:null,
       loading:true,
       progressValue:0,
       space_id:this.$route.params.spaceId,
        tagged:false,
        type:msgType,    
        user_id:this.$root.user_temp_id,
        username:this.$root.username,
        video:{},
        audio:{},
        code:{},
        image:{},
        file:{}

    };
   
   if (msgType == 'image') {
      NewMessage.image = data;
   }

    if (msgType == 'video') {
      NewMessage.video = data;
   }

    if (msgType == 'audio') {
      NewMessage.audio = data;
   }

    if (msgType == 'code') {
      NewMessage.code = data;
   }

    if (msgType == 'file') {
      NewMessage.file = data;
   }

   return NewMessage;

 },
  isTyping:function() {

      
      let channel =  window.Echo.join('space.' + this.$route.params.spaceId);
   
      setTimeout(()=>{

         channel.whisper('typing', {
          user: Laravel.user.username,
            typing: true,
            spaceId: this.$route.params.spaceId
        });

      },1000)
        
     
    
          
        },
      sendMessage: function(){
           this.editor.setContent('');
           this.editor.focus();
            this.$root.showRootReply = false;
              
              let Data = [];
             
              if(this.$root.is_reply){

                 
                 this.$root.NewMsg = this.makeMessage(null,Data,'1',this.$root.replyMessage);

              }else{
                 this.$root.NewMsg = this.makeMessage(null,Data,null,[]);
              }
               this.$root.NewMsg.content = this.contentInWord;

                this.$root.returnedMessages.push(this.$root.NewMsg);

                this.$root.Messages.push(this.$root.NewMsg);

               this.$root.spaceFullData[0] = this.$root.returnedMessages;


               

                 let fullData = [];
                    fullData.push(this.$root.spaceFullData[0]);
                fullData.push(this.$root.spaceFullData[1]);

                 let thirdData = [];
                    
                    thirdData.push(this.$root.spaceFullData[2][0])

                fullData.push(thirdData);

               


             this.$root.LocalStore(this.$route.params.spaceId  + this.$root.username,fullData);

            

               
               
                this.$root.scrollerControlHandler();

               this.$root.scrollToBottom();

               this.reFocus();

              let postData = {
              content: this.contentInWord,
              space_id: this.$route.params.spaceId,
              is_reply: this.$root.is_reply,
              current_user: JSON.stringify(this.$root.SpaceUsers),
              replied_message_id: this.$root.replyMessage.message_id,
              attachment_type: null,
              temp_id:  this.$root.NewMsg.message_id
            };

            
            
             this.$root.updateSpaceTracker(this.$route.params.spaceId);

               

          this.$root.sendTextMessage(postData);
      },
    focusEditor: function(){
     
           this.editor.focus();
        
    }
  
  },
}
</script>
<style>


.editor-box> * {
    font-size:12px; 
    background:#f2f2f2;
    width:100%; 
    height: auto;
    max-height: 70px;
    padding: 4px 4px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid transparent; 
    border-radius:10px;
}

.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: rgb(128, 117, 117);
  pointer-events: none;
   font-size: 12px;
  
  font-style: italic;
}

</style>