<template>
 <div>
<div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;" v-if="showCode"> 


        <div class="col-12 py-1 my-0 fixed-top" style="position:sticky; background:white;">
      
         
         <div class="col-12 py-0 my-0 px-0" >
             <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0 px-2 d-flex" style="text-align:center; justify-content:center;">
                     <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                  </div>
                  <div class="col-8 py-0 my-0 px-1">
                     <select  style="font-size:10px !important;"  @change="detectchange(language)"   v-model="language" class="browser-default custom-select">
                 <option v-for="(option,index)  in items" :value="option" :key="index">{{ option}}</option>
                     </select>
                   </div>
                   <div class="col-2 py-0 my-0 px-2 text-right">
                    <v-btn icon color="#4495a2" @click="sendMessage"><v-icon>mdi-send mdi-18px</v-icon></v-btn>
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

         <span style="position:absolute; top:90%; right:5%;z-index:1000;">
           <v-btn
                color="#35747e"
                small
                  @click="goBack"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-close mdi-18px</v-icon>
            </v-btn>
         
     </span>

     <span style="position:absolute; top:90%; left:5%;z-index:1000;">
           <v-btn
                color="#35747e"
                small
                 @click="showCode = false"
                class="d-inline-block "
                fab
                v-if="this.language == 'HTML'"
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>
         
     </span>
          

    
    </div>

      <div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;background:white;"  v-else>
         <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-3 py-0 my-0 text-left px-1" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-close</v-icon></v-btn>
         </div>
         <div class="col-6 py-0 my-0 d-flex px-0"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span   style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Page Loader</span>
         </div>
         <div class="col-3 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
            
         </div>
      </div>
     </div> 
          <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
   :srcdoc="code" 
    style="border: 0; height:91%; position:absolute; width:100%; left:0; top:6%;" ></iframe>

     <span style="position:absolute; top:90%; left:5%;z-index:1000;">
           <v-btn
                color="#35747e"
                small

                 @click="goBack"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-close</v-icon>
            </v-btn>
         
     </span>

      <span style="position:absolute; top:90%; right:5%;z-index:1000;">
           <v-btn
                color="#35747e"
                small
                 @click="showCode = true"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-xml</v-icon>
            </v-btn>
         
     </span>

        </div>
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
       
        this.detectchange(this.language);
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
         showCode:true
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
              this.$root.NewMsg = this.makeMessage('code',Data);
              
             

               this.$root.returnedMessages.push(this.$root.NewMsg);

                 this.$root.scrollerControlHandler();

              
               
                this.$root.showCodeBox = false;

                 this.$root.scrollToBottom();
                
                let postData = {
              content: '',
              space_id: this.$route.params.spaceId,
              is_reply: this.$root.is_reply,
              current_user: JSON.stringify(this.$root.SpaceUsers ),
              replied_message_id: this.$root.replyMessage.message_id,
               attachment_type: 'code',
                code: this.code,
              language_type: this.language,
              file_name:'index'
            };
            
       this.$root.sendCodeMessage(postData);
         
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
       detectchange: function(language){
         if(language == 'HTML'){
            this.cmOption.mode = 'text/html';
         }
         if(language == 'CSS'){
         this.cmOption.mode = 'text/css';
         }
          if(language == 'PYTHON'){
           this.cmOption.mode = 'text/x-python';
         }
          if(language == 'PHP'){
           this.cmOption.mode = 'text/x-php';
         }
          if(language == 'JAVASCRIPT'){
           this.cmOption.mode = 'text/javascript';
         }
          if(language == 'VUEJS'){
           this.cmOption.mode = 'text/x-vue';
         }
          if(language == 'SQL'){
           this.cmOption.mode = 'text/x-sql';
         }
          if(language == 'C'){
           this.cmOption.mode = 'text/x-csrc';
         }
          if(language == 'C++'){
           this.cmOption.mode = 'text/x-c++src';
         }
          if(language == 'JAVA'){
           this.cmOption.mode = 'text/x-java';
         }
          if(language == 'C#'){
           this.cmOption.mode = 'text/x-csharp';
         }
          if(language == 'ERLANG'){
           this.cmOption.mode = 'text/x-erlang';
         }
          if(language == 'COFFEESCRIPT'){
           this.cmOption.mode = 'text/x-coffeescript';
         }
          if(language == 'LIVESCRIPT'){
           this.cmOption.mode = 'text/x-livescript';
         }
          if(language == 'DJANGO'){
           this.cmOption.mode = 'text/x-django';
         }
          if(language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';
         }
          if(language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';
         }
          if(language == 'MARKDOWN'){
           this.cmOption.mode = 'text/x-markdown';
         }
          if(language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';
         }
          if(language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';
         }
          if(language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';
         }
      },
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