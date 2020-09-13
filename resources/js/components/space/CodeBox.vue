<template>
  <div class="py-2">
    <div class=" codebox">
         <codemirror
        v-model="codeContent"
        :options="cmOption"
        style="height:150px; overflow-y:hidden !important; overflow-x:hidden !important;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
      />
    <div class="position:absolute; width:100%;height:70px;bottom:0;background:#f2f2f2;">
        <div class="row py-0 my-0" style="cursor:pointer;" @click.stop="showEditor(codeViewerType)">
           <div class="col-4 d-flex" style="align-items:center; justify-content:center;">
             <span style="background:white; border:2px solid #3E8893; border-radius:50%;"><v-icon color="#3E8893" class="px-2 py-2">mdi-xml</v-icon></span>
           </div> 
           <div class="col-8  d-flex" style="align-items:center; "> 
            <span style="font-size:11px; color:#333333;letter-spacing: normal !important;">{{filename}}</span>
           </div>
            
        </div>
    </div>
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
 
   
  // language
  import 'codemirror/mode/vue/vue.js'
  import 'codemirror/mode/python/python.js'
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/mode/cobol/cobol.js'
  import 'codemirror/mode/css/css.js'
  import 'codemirror/mode/erlang/erlang.js'
  import 'codemirror/mode/fortran/fortran.js'
  import 'codemirror/mode/go/go.js'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/mode/lua/lua.js'
  import 'codemirror/mode/pascal/pascal.js'
  import 'codemirror/mode/perl/perl.js'
  import 'codemirror/mode/php/php.js'
  import 'codemirror/mode/r/r.js'
  import 'codemirror/mode/ruby/ruby.js'
  import 'codemirror/mode/rust/rust.js'
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/mode/haskell/haskell.js'


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

  import 'codemirror/addon/edit/matchbrackets.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/search.js'
  import 'codemirror/keymap/sublime.js'

  // foldGutter
  import 'codemirror/addon/fold/foldgutter.css'
  import 'codemirror/addon/fold/brace-fold.js'
  import 'codemirror/addon/fold/foldcode.js'
  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/addon/fold/indent-fold.js'

  
export default {
    props:['codeContent','filename','codeLanguage','codeViewerType','messageId'],
     components: {
      codemirror,
      
    },
     computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
   },
   mounted(){
     this.detectchange(this.codeLanguage);
   },
    data(){
        return{
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
        language: this.codeLanguage,
         code:this.codeContent,
    }
},
methods:{
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
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
      showEditor: function(codeViewerType){
            
            this.$root.fullCodeLanguage = this.language;
            this.$root.FullcodeContent = this.code;

             this.$root.codeMessageId = this.messageId;
           
             this.$root.showCodeBox = true;

             this.$root.codeFromChat = true;

             this.$root.showChatBottom = false;
            
            
      },
       detectchange: function(language){
        if(language == 'HTML'){
            this.cmOption.mode = 'text/html';
         }
         if(language == 'CSS'){
         this.cmOption.mode = 'text/css';
         }
          if(language == 'PYTHON(3.8.1)'){
           this.cmOption.mode = 'text/x-python';
         }
         if(language == 'PYTHON(2.7.17)'){
           this.cmOption.mode = 'text/x-python';
         }
          if(language == 'PHP'){
           this.cmOption.mode = 'text/x-php';
         }
          if(language == 'JAVASCRIPT(Node)'){
           this.cmOption.mode = 'text/javascript';
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
          if(language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';
         }
          if(language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';
         }
          if(language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';
         }
          if(language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';
         }
         if(language == 'GO'){
           this.cmOption.mode = 'text/x-go';
         }
         if(language == 'HASKELL'){
           this.cmOption.mode = 'text/x-haskell';
         }
          if(language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';
         }
         if(language == 'LUA'){
           
            this.cmOption.mode = 'text/x-lua';

         }
         if(language == 'PASCAL'){

            this.cmOption.mode = 'text/x-pascal';
         }
         if(language == 'RUST'){

            this.cmOption.mode = 'text/x-rustsrc';
         }
         if(language == 'SCALA'){
           
             this.cmOption.mode = 'text/x-scala';

         }
         if(language == 'SWIFT'){

              this.cmOption.mode = 'text/x-swift';

         }
         if(language  == 'TYPESCRIPT'){

             this.cmOption.mode = 'text/javascript';

         }
      }
}
}
</script>
<style lang="scss" scoped>
     
    .codebox,
    .pre {
      width: 100%;
      margin: 0;
      height: 100%;
       display: block;
      font-size: 11px;
      
      line-height: 1.6;
      word-break: break-all;
       letter-spacing: 1px !important;
      word-wrap: break-word;
      overflow: auto;
    }

    .codebox{
       height: 220px;
      border:1px solid #5dafbb;
        border-radius: 10px;
        overflow-x: hidden;
        overflow-y:hidden;
    }

 /* Hide scrollbar for Chrome, Safari and Opera */
.codebox::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.codebox {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


    

   
</style>