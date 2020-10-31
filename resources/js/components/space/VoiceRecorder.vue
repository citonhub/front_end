<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div  style="position:absolute; background:transparent; top:0%; height:95%; overflow-y:auto; overflow-x:hidden; z-index:987664736568; width:100%;">
         <div class="row my-0 py-0 px-2">

         <div style="position:absolute; height:100%; width:100%; overflow-y:auto;left:0;top:0%;background:rgba(38, 82, 89,0.6);"> 


      

       <div class="col-12 py-0 my-0 px-0 d-flex" style="position:absolute; height:100%;width:100%; overflow-y:auto; overflow-x:hidden; align-items:center; justify-content:center;">
          <v-btn icon color="#ffffff" @click="goBack" style="position:absolute;background:#3E8893;top:3%; left:3%;" 
           class="d-inline-block  "><v-icon>mdi-close mdi-18px</v-icon></v-btn>
       
                <div class="d-block">
             <audio controls :src="this.$root.recordUrl" autoplay class="d-block text-center"> 
                  
              </audio><br>
               <div class="d-block text-center">
                <v-btn small color="#3E8893" rounded style="color:#ffffff;" :loading="loading" @click="sendMessage">send</v-btn>
              </div>
                </div>
              
            

             
     
        
       </div>
              

   
 
    </div>
     
         </div>
       </div>

       

     </v-app>
</template>
<script>


export default {
       mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = false;
    },
     components: {
      
      
    },
     computed: {
    codemirror() {
      
    }
   },
    data(){
        return{
          attachment_type:'',
         loading:false,
         NewMsg:'',
    }
},
methods:{
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
       goBack() {
        this.$root.voiceRecorder = false;
          this.$root.showChatBottom = true;
        },
        showAlert:function(duration,text){
        this.$root.AlertRoot = true;
        this.$root.AlertMsgRoot = text;
        let _this = this;
     
     setTimeout(function(){
        _this.$root.AlertRoot = false;
     },duration);

    },
        makeMessage:function(msgType,data){
    let NewMessage = {
      content:null,
       created_at: moment().subtract(1,'hours'),
       is_reply:"false",
       message_id: this.makeUUID(),
        id:this.makeUUID(),
       replied_message:[],
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
  makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
      sendMessage: function(){
        this.loading = true;
          
          let formData = new FormData();
         

         if(this.$root.recordUrl != ''){
             
           let Data =null;
          
          this.$root.NewMsg = this.makeMessage('audio',Data);
           
            this.attachment_type = 'voiceRecord';

            formData.append('audio',this.$root.recorderBlob);
            formData.append('display_name','Voice Record');
            
        }

       
         
           this.$root.returnedMessages.push(this.$root.NewMsg);

           this.$root.Messages.push(this.$root.NewMsg);
           
             this.$root.scrollerControlHandler();

         
            this.$root.spaceFullData[0] = this.$root.returnedMessages;
         
            let fullData = [];
                    fullData.push(this.$root.spaceFullData[0]);
                fullData.push(this.$root.spaceFullData[1]);

                 let thirdData = [];
                    
                    thirdData.push(this.$root.spaceFullData[2][0])

                fullData.push(thirdData);

               
              this.$root.LocalStore(this.$route.params.spaceId  + this.$root.username,fullData);


         this.$root.scrollToBottom();


          this.goBack();

           if(this.$root.SpaceUsers.length == 0){
        
          formData.append('current_user','empty');

         }else{
           
           formData.append('current_user',JSON.stringify(this.$root.SpaceUsers ));
         }
         
        formData.append('is_reply',this.$root.is_reply);
        formData.append('attachment_type',this.attachment_type);
        formData.append('space_id',this.$route.params.spaceId);
        formData.append('temp_id', this.$root.NewMsg.message_id);
         formData.append('device_id',this.$root.userDeviceId);

         this.$root.updateSpaceTracker(this.$route.params.spaceId);
        
        this.$root.sendShareMessage(formData);
    },
      
      
}
}
</script>
<style lang="scss" scoped>
.fileText{
    font-size:10px;
}


</style>