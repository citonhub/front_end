<template>
    <div class="row py-1 my-0 px-0" >
       
         <div class="col-12 py-0 my-0 d-flex px-5 flex-row" style="align-items:center; justify-content:center;">

            <div class="row py-0 my-0">
               
               <v-card  flat  color="#ffffff" style="border-radius: 7px;" class="col-9 px-2 py-0 my-0">
                  
               
          
                <textarea ref="textBottom" :value="input" @input="update" style="font-size:13px;"  :placeholder="$t('general.type_here')"  @keydown="handelkeyAct" class="editor-box card" ></textarea>
   
               
               </v-card>
               <div class="col-3 d-flex py-0 my-0" style="align-items:center;justify-content:center;">
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
              

              
            </div>
              

               
              
            
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

        }
    },
    components: {
       
    
  },
    mounted(){
       this.$root.bottomEditorValue = this.$refs.textBottom;
    },
     computed: {
          compiledMarkdown: function() {
            return marked(this.input, { sanitize: true });
          }
        },
    methods:{
       reactToKey:function(e){
      console.log(e)
       },        
       urlify:function(text) {
      var urlRegex =  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
     return text.replace(urlRegex, function(url) {
     return  "<a href=\"" + url + "\" target=\"_blank\">"  + url + "</a>"; 
  })
   // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
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
       goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
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
            this.$root.ShowButton = false;
                 
             this.isTyping();

              this.$root.liveIsOn = false;

            this.$root.screenSharingOn = false;

         }else{
            this.showSend = false;
             this.$root.ShowButton = true;
             this.$root.showRootReply = false;
             
         }

           this.contentInWord = this.urlify(this.compiledMarkdown);

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
       id:this.makeUUID(),
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
          user: this.$root.username,
            typing: true,
            spaceId: this.$route.params.spaceId
        });

      },1000)


   
      setTimeout(()=>{

         channel.whisper('typing', {
          user: this.$root.username,
            typing: false,
            spaceId: this.$route.params.spaceId
        });

      },5000)
        
     
    
          
        },
      sendMessage: function(){
            this.input = '';
             this.showSend = false;
             this.$root.ShowButton = true;
            this.$root.showRootReply = false;
              this.$root.showRootReply = false;
            this.$refs.textBottom.focus();
              
              let Data = [];
             
              if(this.$root.is_reply){

                 
                 this.$root.NewMsg = this.makeMessage(null,Data,'1',this.$root.replyMessage);

              }else{
                 this.$root.NewMsg = this.makeMessage(null,Data,null,[]);
              }
               this.$root.NewMsg.content = this.contentInWord;


                this.$root.Messages.push(this.$root.NewMsg);
                this.$root.returnedMessages.push(this.$root.NewMsg)

               this.$root.spaceFullData[0] = this.$root.returnedMessages;


               

                 let fullData = [];
                    fullData.push(this.$root.spaceFullData[0]);
                fullData.push(this.$root.spaceFullData[1]);

                 let thirdData = [];
                    
                    thirdData.push(this.$root.spaceFullData[2][0])

                fullData.push(thirdData);

               


             this.$root.LocalStore(this.$route.params.spaceId  + this.$root.username,fullData);

            

               
               
               

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

            
            
             this.$root.updateSpaceTracker(this.$route.params.spaceId);

               

          this.$root.sendTextMessage(postData);
      },
    focusEditor: function(){
     
           this.editor.focus();
        
    }
  
  },
}
</script>
<style scoped>


textarea {
    font-size:13px; 
    background:#ffffff;
    width:100%; 
    height: 50px;
    max-height: 75px;
    padding: 4px 4px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid transparent; 
    border-radius:2px;
}



</style>