<template>
    <div class="row px-md-3 py-0">
           
           <div class="col-12 py-1 my-0 d-flex px-md-2 px-2 flex-row" style="align-items:center; justify-content:center;">
                  <template v-if="!recording">

                     
                 
                     <v-btn icon class="mx-md-1 mr-1" @click="toggleEmoji"><v-icon>las la-grin</v-icon> </v-btn>

                      
            
                    
                      <textarea-autosize
                 placeholder="Type here..."
                 ref="textBottom"
                 @input.native="update" 
                  @keydown.native="handelkeyAct"
                   @focus.native="focusEditor"  
                   @blur.native="blurEditor"
                 :value="input"
                  :important="true"
                 :class="screenType == 'large' ? 'textareaLg' : 'textareaSm' "
                :min-height="screenType == 'large' ? 40 : 40"
                :max-height="screenType == 'large' ? 60 : textHeight"
               
                 />
                    <template v-if="this.$root.selectedSpace.type != 'Bot'">

                       <v-btn icon class="mx-md-1" v-if="showAttachment && this.$root.selectedSpace.type != 'Bot'" @click="showShareBoard"> 
           <v-icon>las la-paperclip</v-icon> </v-btn>

                          <!-- send  -->
                  <v-btn icon class="mx-md-1" @click="sendMessage" v-if="showSend"><v-icon>las la-send</v-icon> </v-btn>

                  <!-- ends -->

                     <v-btn icon class="mx-md-1" @click="startrecord" v-else><v-icon>las la-microphone</v-icon> </v-btn>
              
            


                    </template>

         
               

                    <template v-else>

                        <v-btn icon class="mx-md-1" @click="sendMessage" ><v-icon>las la-send</v-icon> </v-btn>

                    </template>

                     
                    
                

                  </template>
              

                  <!-- microphone -->

                  <template  v-else>

                     <div class="ml-auto d-flex flex-row" style="align-items:center; justify-content:center;" >

                     <v-btn icon class="bg-danger" @click="stoprecord('cancle')"><v-icon color="#ffffff">mdi-close</v-icon></v-btn>

                      <div style="font-size:14px;color:gray;font-family:BodyFont;" class="mx-3 ">{{timer}}</div>

                       <v-btn icon class="bg-success" @click="stoprecord('send')"><v-icon color="#ffffff">mdi-check</v-icon></v-btn>


                      <v-btn icon class="mx-1"><v-icon>las la-microphone</v-icon> </v-btn>
                  </div>
                

                  </template>
                 
                  <!-- ends -->
           </div>
            
    </div>
</template>
<script>
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

export default {
    props:['screenType'],
      data(){
        return{
        
      wordCount:0,
      showSend:false,
      audioChunks:[],
      Alert:true,
      typingText: '',
      content: this.$root.postContent,
      alertMsg:'',
      recording:false,
      audioBlob:'',
      textHeight:28,
      mediaRecorder:null,
      contentInWord:'',
      NewMsg:'',
      input:'',
      timer:'0:00',
      shiftIsPressed: false,
      showAttachment:true,
      seconds:0,
      minute:0,
      recorderInterval:null,

        }
    },
    components: {
      
  },
    mounted(){
       this.$root.bottomEditorValue = this.$refs.textBottom.$el;
       this.$root.channelBottomComp = this;
        this.$root.showCodeboxBtn = true;
        this.$root.chatBottomLoaded = true;
         this.$root.chatBottomLoadedLg = true;
    },
     computed: {

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
    methods:{
      showShareBoard: function(){
          this.$router.push({ path: '/channels/' + this.$root.selectedSpace.space_id +'/share' });
 
      },
      reFocusEditor:function(){
      this.$refs.textBottom.$el.focus();
      },
        toggleEmoji:function(){

             if(this.$root.showEmojiBox){
               this.$root.showEmojiBox = false
             } else{
                 this.$root.showEmojiBox = true;
             }

        },
     handelkeyAct: function(e){

       
       
        
        if(e.keyCode == 16){

           this.shiftIsPressed = true;
          
        }

        if(e.keyCode != 16 && e.keyCode != 13){

           this.shiftIsPressed = false;
          
        }

        if(e.keyCode == 13 && this.shiftIsPressed){
           e.preventDefault()

               this.sendMessage();

                this.shiftIsPressed = false;
            

           }
     },
       
        shareHandler:function(){
          this.$root.sharePage= true;
           this.$root.showChatBottom = false;
        },
        update:function(e){

            this.input = e.target.value;
          
           this.wordCount =  e.target.value.length;

       
           
             if(this.wordCount > 0){
          
                  this.showSend = true;
          
             this.isTyping();

               this.textHeight = 60;

              

         }else{

               this.showSend = false;

           this.textHeight = 35;
         }

           this.contentInWord = this.compiledMarkdown;

        },
      reFocus:function(){
         this.editor.focus();
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

        
         
         let recorderInterval = setInterval(() => {

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

         this.recorderInterval= recorderInterval;

     },
       stoprecord: function(type){
         
            if( this.mediaRecorder){

              this.mediaRecorder.stop();

            }
           
           clearInterval(this.recorderInterval);

           this.recording = false;

           this.seconds = 0;
           this.minute = 0;
           this.timer = '0:00';

            setTimeout(() => {

              if(type == 'send'){

               this.sendRecord();

            }
              
            }, 1000);

            
          
       
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
       id:this.makeUUID(),
       initialSize:200,
      index_count : this.$root.returnLastIndex() + 1,
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

      
       let channel =  window.Echo.join('global');

     

       setTimeout(()=>{

        channel.whisper('typing', {
          user: this.$root.username,
            typing: true,
            spaceId: this.$route.params.spaceId
        });

      },500)


   
     
        
     
    
          
        },
        sendRecord:function(){

          let formData = new FormData();
         

          
             
           let Data =null;
          
          this.$root.NewMsg = this.makeMessage('audio',Data,null,[]);
           
            this.attachment_type = 'voiceRecord';

            formData.append('audio',this.$root.recorderBlob);
            formData.append('display_name','Voice Record');
            
         
         
         
               this.$root.Messages.push(this.$root.NewMsg);

              
             
               this.$root.spaceFullData.messages = this.$root.Messages;


               

             this.$root.LocalStore('full_space_'+ this.$route.params.spaceId  + this.$root.username,this.$root.spaceFullData);
               

               this.$root.scrollToBottom();

        
           
           formData.append('current_user',JSON.stringify(this.generateOnlineUsersList()));
      
         
        formData.append('is_reply',this.$root.is_reply);
        formData.append('attachment_type',this.attachment_type);
        formData.append('space_id',this.$route.params.spaceId);
        formData.append('temp_id', this.$root.NewMsg.message_id);
         formData.append('device_id',this.$root.userDeviceId);

         this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id,this.$root.NewMsg);

        
        this.$root.sendShareMessage(formData);

        },
         generateOnlineUsersList: function(){
          let onlineUserList = [];

          this.$root.selectedSpaceMembers.forEach(member => {
             
             let userData = this.$root.globalUsers.filter((user)=>{
               return user.id == member.user_id;
             })

             if(userData.length != 0){
               onlineUserList.push(userData[0])
             }
           
            
          });
        
        return onlineUserList;
       },
      sendMessage: function(refocus = true){

          if( this.input.length == 0) return;
            this.input = '';
             this.showSend = false;

            this.$root.showRootReply = false;
       
  
      if(refocus){
    this.$refs.textBottom.$el.focus();
      }

            
              
              let Data = [];
             
              if(this.$root.is_reply){

                 
                 this.$root.NewMsg = this.makeMessage(null,Data,'1',this.$root.replyMessage);

              }else{
                 this.$root.NewMsg = this.makeMessage(null,Data,null,[]);
              }
               this.$root.NewMsg.content = this.contentInWord;


                this.$root.Messages.push(this.$root.NewMsg);

              

               this.$root.spaceFullData.messages = this.$root.Messages;


               

             this.$root.LocalStore('full_space_'+ this.$route.params.spaceId  + this.$root.username,this.$root.spaceFullData);
               

               this.$root.scrollToBottom();

              

              let postData = {
              content: this.contentInWord,
              space_id: this.$route.params.spaceId,
              is_reply: this.$root.is_reply,
              current_user: JSON.stringify(this.generateOnlineUsersList()),
              replied_message_id: this.$root.replyMessage.message_id,
              attachment_type: null,
              temp_id:  this.$root.NewMsg.message_id,
              device_id: this.$root.userDeviceId
            };

                this.$root.is_reply = false;
            
             this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id,this.$root.NewMsg);

               

          this.$root.sendTextMessage(postData);
      },
    focusEditor: function(){
     
         this.showAttachment = false;
         
          this.$root.showEmojiBox = false

             this.showSend = true;

           
          
           
        
    },
    blurEditor: function(){
        this.showAttachment = true;
          
         
    }
  
  },
}
</script>
<style scoped>

.textareaLg{
    font-size:13px; 
    background:white;
    width:100%; 
    height: 55px;
    padding: 4px 6px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
}
.textareaSm {
    font-size:13px; 
    background:white;
    width:100%; 
    height: 30px !important;
    padding: 4px 6px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
   
}
</style>