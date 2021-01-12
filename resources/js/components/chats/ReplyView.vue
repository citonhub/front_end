<template>
    <!-- shows up when replaying a message -->
                <div class="px-2" >

                  <div class=" py-2 px-2  text-left mb-1"  style="background:#3C87CD; border:1px solid transparent; border-radius:8px;" >

                     <div class="col-12 py-1 px-1  text-right" v-if="this.$root.replyMessage.type == null">
                  <span class="msgTextReplynew text-left d-block" style="color:white;" v-html="getReplyMsg(this.$root.replyMessage.content)" ></span>

              </div>

               <div class="col-12 py-1 px-1  text-right" v-if="this.$root.replyMessage.type == 'action'">
                  <span class="msgTextReplynew text-left d-block" style="color:white;" v-html="getReplyMsg(this.$root.replyMessage.content)"></span>

              </div>

                 <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'image'">
                     <div class="col-3 py-0 my-0">
                   <v-img width="50" :src="'/imgs/space/' + this.$root.replyMessage.image[0].image_name  + '.' + this.$root.replyMessage.image[0].image_extension" class="d-inline-block ">

                 </v-img>
                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                           <template v-if="this.$root.replyMessage.image.length > 1">

                                 <span class="msgTextReplynew" style="color:white;">{{this.$root.replyMessage.image.length}} Images</span>

                           </template>

                           <template v-else>

                                 <span class="msgTextReplynew" style="color:white;">{{this.$root.replyMessage.image.length}} Image</span>

                           </template>
               
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">

                     </div>
                  </div>


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'project'">
                     <div class="col-3 py-0 my-0">
                <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3C87CD">las la-laptop-code</v-icon></span>

                     </div>
                     <div class="col-6 py-1 my-0 text-center px-0">
                 <span class="msgTextReplynew" style="color:white;">{{shortenContent(this.$root.replyMessage.project.title ,30)}}</span>
                     </div>
                     <div class="col-3 py-0 my-0 text-center px-0">

                     </div>
                  </div>


                   <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'video'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3C87CD">las la-video </v-icon></span>

                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ shortenContent(this.$root.replyMessage.video.display_name ,30)}}</span>
                     </div>

                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'audio'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3C87CD">las la-music </v-icon></span>

                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ shortenContent(this.$root.replyMessage.audio.display_name ,30)}}</span>
                     </div>

                  </div>

                  <div class="row py-0 my-0"  v-if="this.$root.replyMessage.type == 'file'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3C87CD">las la-file-alt </v-icon></span>

                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ shortenContent(this.$root.replyMessage.file.display_name ,30)}}</span>
                     </div>

                  </div>

                  <div class="row py-0 my-0" v-if="this.$root.replyMessage.type == 'code'">
                     <div class="col-3 py-0 my-0 text-center">
                    <span style="background:whitesmoke; border:1px solid transparent; border-radius:50%;" class="px-1 py-1"><v-icon color="#3C87CD">la la-code</v-icon></span>

                     </div>
                     <div class="col-9 py-0 my-0 text-left px-0">
                 <span class="msgTextReplynew" style="color:white;">{{ this.$root.replyMessage.code.name + '.' + languageExtensions(this.$root.replyMessage.code.language_type)}}</span>
                     </div>

                  </div>
              <span class="text-right label d-block " style="color:white;font-size:12px;">{{this.$root.replyMessage.username}}</span>
              </div>
                  <div style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon @click="closeReply"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
                </div>
                
              <!-- ends -->
</template>
<script>
const { htmlToText } = require('html-to-text');
export default {
    methods:{
        closeReply:function(){

             this.$root.showRootReply = false;
            
            this.$root.replyMessage = [];
              this.$root.is_reply = false;
             

        },
         getReplyMsg: function(replymessage){
        let finalString = '';

      
          finalString =  htmlToText(replymessage, {
             wordwrap: 100
            });

        
      

          return finalString;
    },
         shortenContent: function(content,limit){

             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
        languageExtensions: function(language){


           if(language == 'HTML'){
             return 'html';
         }
         if(language == 'CSS'){
          return 'css';
         }

          if(language == 'VUE'){
          return 'vue';
         }

          if(language == 'MD'){
          return 'md';
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

          if(language == 'JAVASCRIPT'){
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

      },
    }
}
</script>
<style scoped>
.msgTextReplynew{
  font-size: 13px;
  color: #4d4d4d;
}
</style>