<template>
    
         <v-card class="py-0 px-0" style="width:200px;">

                                      <div class="col-12 px-0 py-1 d-flex flex-column">

                                           <v-card tile flat class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="replyMessage()">

                                            <v-icon class="mr-1">las la-reply</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Reply</span>

                                         </v-card>
                                          <v-card tile flat  v-if="showCopy" class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="copyMessage()">

                                            <v-icon class="mr-1">las la-copy</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Copy</span>

                                         </v-card>
                                         <v-card tile flat v-if="showDelete" class="px-2 py-2 d-flex flex-row" style="align-items:center;" @click="deleteMessage()">

                                            <v-icon class="mr-1">las la-trash</v-icon>

                                            <span style="font-family:BodyFont;font-size:13px;color:grey;">Delete</span>

                                         </v-card>

                                      </div>

                                       <textarea style="display:none;" class="contentContainer" :value="contentValue"></textarea>

                                   </v-card>
   
</template>
<script>
const { htmlToText } = require('html-to-text');

export default {
     data(){
        return{
        
    showDelete:false,
    showCopy:false,
    contentValue:''
        }
    },
    components: {
      
  },
    mounted(){
       
       this.setOptions();
    },
    methods:{
        setOptions:function(){

            let message = this.$root.replyMessage;
     if(message.type == null || message.type == 'text' || message.type == 'action' || message.type == 'code'){

            this.showCopy = true;

         }

         if(this.checkOwner(message.user_id)){


     this.showDelete = true;
         }
          
          let finalString ='';
          if(message.type == null || message.type == 'text' || message.type == 'action' ){
               finalString =  htmlToText(message.content,{
             wordwrap: 1000000
            });
              this.contentValue  = finalString;
          }

          if(message.type == 'code'){
         this.contentValue  = message.code.content;
          }

          
        },
       replyMessage:function(){

            this.$root.chatComponent.showMoreOptions = false;

          this.$root.showRootReply = true;

          this.$root.is_reply = true;
          
           this.$root.channelBottomComp.reFocusEditor();
       },
       sendDeleteRequest:function(messageId){
          axios.post('/delete-message',{
       'message_id':messageId
           } )
       .then(response => {

       if (response.status == 200) {
 

      }


      })
     .catch(error => {  
  
       }) 
       },
       deleteMessage:function(){

        let  message = this.$root.replyMessage;

         // remove from database

          let storedMsg = this.$root.getLocalStore('full_' + message.space_id + this.$root.username);

            storedMsg.then((result)=>{

               if(result != null){

                  let finalResult = JSON.parse(result);

                   let remainingMessages = this.$root.Messages.filter((eachMessage)=>{
                       return eachMessage.message_id != message.message_id;
                   })

                  finalResult.messages = remainingMessages;

                   this.$root.Messages = remainingMessages;

                    this.$root.LocalStore('full_' +  message.space_id   + this.$root.username,finalResult);

               }

            })

            // update chatlist, check if message deleted is a last message

          let storedChat = this.$root.getLocalStore('user_chat_list'+ this.$root.username);

           storedChat.then((result)=>{

                       if(result != null ){

                    let finalResult = JSON.parse(result);
                      

                          finalResult.channels.map((space)=>{
         
                  if(space.space_id == message.space_id){

                   
                      
                       if(space.last_message[0].index_count == message.index_count ){

                         

                           space.last_message[0].deleted = true

                          
                       }
                 
                  
                        }

                           });

                     finalResult.direct_messages.map((space)=>{
                             if(space.space_id == message.space_id){

                              
                      
                       if(space.last_message[0].index_count == message.index_count ){

                          space.last_message[0].deleted = true

                       }
                 
                  
                        }
   
                       });

                      finalResult.pet_spaces.map((space)=>{
          
                    if(space.space_id == message.space_id){

                        
                      
                       if(space.last_message[0].index_count == message.index_count ){

                           space.last_message[0].deleted = true

                       }
                 
                  
                        }

                         });

                          this.$root.LocalStore('user_chat_list' + this.$root.username,finalResult);

                     let fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

                     
                   this.$root.ChatList = fullList;

                      this.$root.sortChatList();


                 }

                   } )


         // send delete request to server
         this.sendDeleteRequest(message.message_id);

       },

        checkOwner: function(message_user_id){
            if(this.$root.user_temp_id == message_user_id){
              return true;
            }else{
              return false;
            }

        },
         copyMessage () {


            const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

      copyToClipboard(this.contentValue);

        this.$root.chatComponent.showAlert('Copied!','Copied to clipboard','success');

         
        },
    }
}
</script>