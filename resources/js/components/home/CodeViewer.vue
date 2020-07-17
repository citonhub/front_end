<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

         <div style="position:absolute; height:98%; width:100%; overflow-y:auto;left:0;top:2%;"> 


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
      
         
         <div class="col-12 py-0 my-0 px-0" >
             <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0 px-0 d-flex" style="text-align:center; justify-content:center;">
                     <v-btn icon color="#4495a2" @click="goBack" style="text-align:center; justify-content:center;"  class="d-inline-block  d-flex"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                  </div>
                  <div class="col-8 py-0 my-0 px-1">
                     <select  style="font-size:12px !important;"  @change="detectchange"   v-model="language" class="browser-default custom-select">
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
              

     <span style="position:absolute; top:87%; left:5%;z-index:1000;">
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

    </div>
     
         </div>
       </div>

       

     </v-app>
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
  import 'codemirror/mode/php/php.js'

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
      this.$root.showTabs=false;
       this.$root.showHeader = false;
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
          fileName:'',
          saveFile: false,
             cmOption: {
          tabSize: 4,
          foldGutter: true,
          filepath:'',
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          keyMap: "sublime",
          mode: 'text/html',
          theme: 'base16-dark',
          readOnly: 'nocursor',
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
        language:this.$root.codeLanguage,
         code: this.$root.codeContentViewer,
    }
},
methods:{
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
       goBack() {
        this.$root.showCodeEditor = false;
         this.$root.showTabs=true;
       this.$root.showHeader = true;
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
           this.cmOption.mode = 'text/x-php';
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
          if(this.language == 'C'){
           this.cmOption.mode = 'text/x-csrc';
         }
          if(this.language == 'C++'){
           this.cmOption.mode = 'text/x-c++src';
         }
          if(this.language == 'JAVA'){
           this.cmOption.mode = 'text/x-java';
         }
          if(this.language == 'C#'){
           this.cmOption.mode = 'text/x-csharp';
         }
          if(this.language == 'ERLANG'){
           this.cmOption.mode = 'text/x-erlang';
         }
          if(this.language == 'COFFEESCRIPT'){
           this.cmOption.mode = 'text/x-coffeescript';
         }
          if(this.language == 'LIVESCRIPT'){
           this.cmOption.mode = 'text/x-livescript';
         }
          if(this.language == 'DJANGO'){
           this.cmOption.mode = 'text/x-django';
         }
          if(this.language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';
         }
          if(this.language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';
         }
          if(this.language == 'MARKDOWN'){
           this.cmOption.mode = 'text/x-markdown';
         }
          if(this.language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';
         }
          if(this.language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';
         }
          if(this.language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';
         }
      },
      languageExtensions: function(){
        if(this.language == 'HTML'){
           return 'html';
         }
         if(this.language == 'CSS'){
            return 'css';
         }
          if(this.language == 'PYTHON'){
           return 'py';
         }
          if(this.language == 'PHP'){
           return 'php';
         }
          if(this.language == 'JAVASCRIPT'){
           return 'js';
         }
          if(this.language == 'VUEJS'){
           return 'vue';
         }
          if(this.language == 'SQL'){
           return 'sql';
         }
          if(this.language == 'C'){
           return 'c';
         }
          if(this.language == 'C++'){
           return 'cpp';
         }
          if(this.language == 'JAVA'){
           return 'java';
         }
          if(this.language == 'C#'){
           return 'cs';
         }
          if(this.language == 'ERLANG'){
          return 'erl';
         }
          if(this.language == 'COFFEESCRIPT'){
           return 'coffee';
         }
          if(this.language == 'LIVESCRIPT'){
           return 'ls';
         }
         if(this.language == 'DJANGO'){
           return 'py';
         }
          if(this.language == 'KOTLIN'){
           return 'kt';
         }
          if(this.language == 'FOTRAN'){
           return 'for';
         }
          if(this.language == 'MARKDOWN'){
          return 'md';
         }
          if(this.language == 'PERL'){
          return 'pl';
         }
          if(this.language == 'R'){
           return 'r';
         }
          if(this.language == 'RUBY'){
           return 'rb';
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
        letter-spacing: 1px !important;
        overflow-x: hidden;
        overflow-y:hidden;
    }
</style>