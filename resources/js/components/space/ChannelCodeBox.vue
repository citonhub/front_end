<template>
    <div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;"> 


        <div class="col-12 py-1 my-0 fixed-top" style="position:sticky; background:white;">
      
         
         <div class="col-12 py-0 my-0 px-0" >
             <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0 px-0 d-flex" style="text-align:center; justify-content:center;">
                     <v-btn icon color="#4495a2" @click="goBack" style="text-align:center; justify-content:center;"  class="d-inline-block  d-flex"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                  </div>
                  <div class="col-8 py-0 my-0 px-1">
                     <select  style="font-size:10px !important;"  @change="detectchange"   v-model="language" class="browser-default custom-select">
                 <option v-for="(option,index)  in items" :value="option" :key="index">{{ option}}</option>
                     </select>
                   </div>
                   <div class="col-2 py-0 my-0 px-1">
                     
                   </div>
             </div>
               
               

         </div>
        
      </div>

       <div class="col-12 py-0 my-0" style="position:absolute; height:95.5%;width:100%; overflow-y:hidden; overflow-x:hidden;">
         <div class="row my-0 py-0 px-0 ">
              <div class="codebox">
         <codemirror
        v-model="code"
        :options="cmOption"
        style="height:100%;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
        />
              </div>
         </div>
       </div>
                <span style="position:absolute; top:92%; right:5%;z-index:1000;">
           <v-btn
                color="#35747e"
                small
                  @click="sendMessage"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-send mdi-18px</v-icon>
            </v-btn>
         
     </span>

    
    </div>
</template>
<script>

import dedent from 'dedent'
  import { codemirror } from 'vue-codemirror'

  // base style
  import 'codemirror/lib/codemirror.css'

  // theme css
  import 'codemirror/theme/base16-dark.css'

  // language
  import 'codemirror/mode/vue/vue.js'

  // active-line.js
  import 'codemirror/addon/selection/active-line.js'

  // styleSelectedText
  import 'codemirror/addon/selection/mark-selection.js'
  import 'codemirror/addon/search/searchcursor.js'

  // highlightSelectionMatches
  import 'codemirror/addon/scroll/annotatescrollbar.js'
  import 'codemirror/addon/search/matchesonscrollbar.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/match-highlighter.js'

  // keyMap
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/addon/edit/matchbrackets.js'
  import 'codemirror/addon/comment/comment.js'
  import 'codemirror/addon/dialog/dialog.js'
  import 'codemirror/addon/dialog/dialog.css'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/search.js'
  import 'codemirror/keymap/sublime.js'

  // foldGutter
  import 'codemirror/addon/fold/foldgutter.css'
  import 'codemirror/addon/fold/brace-fold.js'
  import 'codemirror/addon/fold/comment-fold.js'
  import 'codemirror/addon/fold/foldcode.js'
  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/addon/fold/indent-fold.js'
  import 'codemirror/addon/fold/markdown-fold.js'
  import 'codemirror/addon/fold/xml-fold.js'

export default {
      mounted(){
     
      },
     components: {
      codemirror,
      
    },
     computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
   },
    data(){
        return{
             cmOption: {
          tabSize: 4,
          foldGutter: true,
          filepath:'',
          NewMsg:'',
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          keyMap: "sublime",
          mode: 'text/html',
          theme: 'base16-dark',
          extraKeys: {
             "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
          },
          
        },
         items: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP','PYTHON','SQL','VUEJS','C',
         'C++','JAVA','C#','ERLANG','COFFEESCRIPT','LIVESCRIPT','DJANGO','KOTLIN',
         'FOTRAN','MARKDOWN','PERL','R','RUBY'],
        language: this.$root.fullCodeLanguage,
         code: this.$root.FullcodeContent,
    }
},
methods:{
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
       goBack() {
          this.$root.fullCodeLanguage = 'HTML';
          this.$root.FullcodeContent = "<p>Hello CitonHub</p>";
       this.$root.showCodeBox = false;
        },
        makeUUID:function(){
     var id = "id" + Math.random().toString(16).slice(2);
     return id;
 },
    makeMessage:function(msgType,data){
    let NewMessage = {
      content:null,
      created_at: moment().subtract(1,'hours'),
       is_reply:"false",
       message_id: this.makeUUID(),
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
           sendMessage: function(){
          
              
              let Data = [];
              this.NewMsg = this.makeMessage('code',Data);
               this.$root.Messages.push(this.NewMsg);
               
                this.$root.showCodeBox = false;
       
            axios.post('/send-message',{
              content: '',
              space_id: this.$route.params.spaceId,
              is_reply: this.$root.is_reply,
              current_user: this.$root.SpaceUsers,
              replied_message_id: this.$root.replyMessage.message_id,
               attachment_type: 'code',
                code: this.code,
              language_type: this.language,
              file_name:'index'
            })
              .then(response => {
      
      if (response.status == 200) {

             let messageId = this.NewMsg.message_id;
                let messageType = this.NewMsg.type;
               this.$root.Messages.map((message)=>{
                  if(messageId == message.message_id){
                     message.loading = false;
                     message.message_id = response.data[0].message_id; 
                      message.code = response.data[0].code;
                  }
               });
             
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 
      },
       
      onCmReady(codemirror) {
        console.debug('onCmReady', codemirror)
      },
      onCmFocus(codemirror) {
        console.debug('onCmFocus', codemirror)
      },
      onCmBlur(codemirror) {
        console.debug('onCmBlur', codemirror)
      },
       detectchange: function(){
         if(this.language == 'HTML'){
            this.cmOption.mode = 'text/html';
         }
         if(this.language == 'CSS'){
         this.cmOption.mode = 'text/css';
         }
          if(this.language == 'PYTHON'){
           this.cmOption.mode = 'text/x-python';
         }
          if(this.language == 'PHP'){
           this.cmOption.mode = 'application/x-httpd-php';
         }
          if(this.language == 'JAVASCRIPT'){
           this.cmOption.mode = 'text/javascript';
         }
          if(this.language == 'VUEJS'){
           this.cmOption.mode = 'text/x-vue';
         }
          if(this.language == 'SQL'){
           this.cmOption.mode = 'text/x-sql';
         }
      }
}
}
</script>
<style lang="scss" scoped>
.fileText{
    font-size:10px;
}

 .codebox,
    .pre {
      width: 100%;
      margin: 0;
     
       display: block;
      font-size: 12px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      overflow: auto;
    }

    .codebox{
       height: 100%;
       border: 1px solid #e6e6e6;
        position:absolute;
        width:100%;
       
        overflow-x: hidden;
        overflow-y:hidden;
    }
</style>