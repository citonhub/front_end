<template>
    <div class="row py-1 my-0 px-0" >
       
         <div class="col-12 py-0 my-0 d-flex px-5 flex-row" style="align-items:center; justify-content:center;">
            <div class="row py-0 my-0">
               <div class="col-1 d-flex  py-0 my-0" style="align-items:center;justify-content:center;">
                <v-btn icon
                  @click="toggleRecording"
               >
                   <v-icon  v-if="!recording">mdi-microphone</v-icon>
                   <v-progress-circular indeterminate color="#3E8893" v-else><v-icon>mdi-microphone</v-icon></v-progress-circular>
                </v-btn>
                
                
               </div>
               <div class="col-10 px-2 py-0 my-0">
                 <div class="editor">
          
                <editor-content class="editor-box" :editor="editor"   :onUpdate="countCharacter()" :onFocus="hideButtons()" :onBlur="showButtons()" />
                </div>
               </div>
               <div class="col-1 d-flex py-0 my-0" style="align-items:center;justify-content:center;">
                 <v-btn icon v-if="!showSend"
               @click="shareHandler"
               >
                   <v-icon>mdi-attachment</v-icon>
                </v-btn>

                <v-btn icon v-else
               @click="sendMessage"
               >
                   <v-icon>mdi-send</v-icon>
                </v-btn>
               </div>
            </div>
              

               
              
            
         </div>

         
        
      </div>
</template>
<script>

import { Editor, EditorContent, EditorMenuBar  } from 'tiptap';
import {
        Bold, 
        Underline,
        Image,BulletList,ListItem,Placeholder} from 'tiptap-extensions';

export default {
      data(){
        return{
        
          editor: new Editor({
        content: this.$root.postContent,
        extensions:[
        
            new Bold(),
            new Underline(),
            new Image(),
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
    EditorMenuBar,
  },
    mounted(){
     
    },
    methods:{
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        hideButtons: function(){
          this.$root.showRootReply = true;
        },
        showButtons: function(){
         this.$root.showRootReply = false;
        },
        shareHandler:function(){
          this.$router.push({ path: '/space/' + this.$route.params.spaceId + '/channel/share' });
        },
         countCharacter:function(value){
            this.wordCount = this.editor.getHTML().length;

         if(this.wordCount > 7){
           this.showSend = true;

         }else{
            this.showSend = false;
         }
         
       
         this.contentInWord = this.editor.getHTML();
      

          this.isTyping();
          
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
   
      setTimeout(function() {
        channel.whisper('typing', {
          user: Laravel.user.username,
            typing: true
        });
      }, 6000);
   
   
          
        },
      sendMessage: function(){
           this.editor.setContent('');
           this.editor.focus();
            this.$root.showRootReply = false;
              
              let Data = [];
             
              if(this.$root.showRootReply){

                 
                 this.NewMsg = this.makeMessage(null,Data,'1',this.$root.replyMessage);

              }else{
                 this.NewMsg = this.makeMessage(null,Data,null,[]);
              }
               this.NewMsg.content = this.contentInWord;

               this.$root.Messages.push(this.NewMsg);

                if(this.$root.messageScroller != undefined){
                 this.$root.messageScroller.scrollToBottom();
                }
               
       
            axios.post('/send-message',{
              content: this.contentInWord,
              space_id: this.$route.params.spaceId,
              is_reply: this.$root.showRootReply,
              current_user: JSON.stringify(this.$root.SpaceUsers ),
              replied_message_id: this.$root.replyMessage.message_id,
              attachment_type: null,
            })
              .then(response => {
      
      if (response.status == 200) {

             let messageId = this.NewMsg.message_id;
                let messageType = this.NewMsg.type;
               this.$root.Messages.map((message)=>{
                  if(messageId == message.message_id){
                     message.loading = false;
                     message.message_id = response.data[0].message_id; 
                  }
               });
             
        this.$root.replyMessage = [];
        
     }
       
     
     })
     .catch(error => {
    
     }) 
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
    background:whitesmoke;
    width:100%; 
    height: 70px;
    padding: 4px 4px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid whitesmoke; 
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