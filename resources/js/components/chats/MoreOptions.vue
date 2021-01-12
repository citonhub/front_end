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

                                       <textarea type="hidden" style="visibility:invisible;" id="contentContainer" :value="contentValue"></textarea>

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
       
       deleteMessage:function(){

       },

        checkOwner: function(message_user_id){
            if(this.$root.user_temp_id == message_user_id){
              return true;
            }else{
              return false;
            }

        },
         copyMessage () {
          let spacelink = document.querySelector('#contentContainer')
          spacelink.setAttribute('type', 'text')
          spacelink.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
              if(msg == 'successful'){

                this.$root.chatComponent.showAlert('Copied!','Copied to clipboard','success');

              }else{

                this.$root.chatComponent.showAlert('Oops','Unable to copy content','error');

              }
          } catch (err) {

          }

          /* unselect the range */
          spacelink.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
    }
}
</script>