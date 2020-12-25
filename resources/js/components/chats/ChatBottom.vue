<template>
    <div class="row px-md-3 py-0">
           
           <div class="col-12 py-1 my-0 d-flex px-md-2 px-2 flex-row" style="align-items:center; justify-content:center;">
               
               <v-btn icon class="mx-md-1 mr-1" @click="toggleEmoji"><v-icon>las la-grin</v-icon> </v-btn>
                <v-btn icon class="mx-md-1" v-if="showAttachment" @click="showShareBoard"> <v-icon>las la-paperclip</v-icon> </v-btn>
               
                  <textarea ref="textBottom" :value="input" @input="update"  @keydown="handelkeyAct" @focus="focusEditor"  @blur="blurEditor"  style="font-size:13px;"  :placeholder="$t('general.type_here')"  ></textarea>

                  <!-- send  -->
                  <v-btn icon class="mx-md-1" @click="sendMessage" v-if="showSend"><v-icon>las la-send</v-icon> </v-btn>

                  <!-- ends -->

                  <!-- microphone -->
                  <v-btn icon class="mx-md-1" v-else><v-icon>las la-microphone</v-icon> </v-btn>
                  <!-- ends -->
           </div>
            
    </div>
</template>
<script>

export default {
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
      mediaRecorder:null,
      contentInWord:'',
      NewMsg:'',
      input:'',
      shiftIsPressed: false,
      showAttachment:true,

        }
    },
    components: {
      
  },
    mounted(){
       this.$root.bottomEditorValue = this.$refs.textBottom;
       this.$root.channelBottomComp = this;
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

           this.wordCount =  this.input.length;
           
             if(this.wordCount > 0){
           this.showSend = true;
           
                 
             this.isTyping();

              

         }else{
            this.showSend = false;
            //  this.$root.ShowButton = true;
            //  this.$root.showRootReply = false;
             
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

      
    //   let channel =  window.Echo.join('space.' + this.$route.params.spaceId);

     

    //     setTimeout(()=>{

    //    channel.whisper('typing', {
    //       user: this.$root.username,
    //         typing: true,
    //         spaceId: this.$route.params.spaceId
    //     });

    //   },1000)


   
    //   setTimeout(()=>{

    //      channel.whisper('typing', {
    //       user: this.$root.username,
    //         typing: false,
    //         spaceId: this.$route.params.spaceId
    //     });

    //   },5000)
        
     
    
          
        },
      sendMessage: function(refocus = true){

          if( this.input.length == 0) return;
            this.input = '';
             this.showSend = false;

            this.$root.showRootReply = false;
              this.$root.showRootReply = false;
  
      if(refocus){
    this.$refs.textBottom.focus();
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


               

             this.$root.LocalStore('full_'+ this.$route.params.spaceId  + this.$root.username,this.$root.spaceFullData);
               

               this.$root.scrollToBottom();

              

              let postData = {
              content: this.contentInWord,
              space_id: this.$route.params.spaceId,
              is_reply: this.$root.is_reply,
              current_user: JSON.stringify(this.$root.SpaceUsers),
              replied_message_id: this.$root.replyMessage.message_id,
              attachment_type: null,
              temp_id:  this.$root.NewMsg.message_id,
              device_id: this.$root.userDeviceId
            };

            
            
             this.$root.updateSpaceTracker(this.$route.params.spaceId,this.$root.NewMsg);

               

          this.$root.sendTextMessage(postData);
      },
    focusEditor: function(){
     
         this.showAttachment = false;
          this.$root.showEmojiBox = false
        
    },
    blurEditor: function(){
        this.showAttachment = true;
    }
  
  },
}
</script>
<style scoped>


textarea {
    font-size:13px; 
    background:whitesmoke;
    width:100%; 
    height: 50px;
    padding: 4px 6px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid #e6e6e6; 
    border-radius:2px;
}
</style>