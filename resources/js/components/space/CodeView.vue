<template>
    <div class="text-left">
        <div class=" codebox">
         <codemirror
        v-model="codeContent"
        :options="cmOption"
        style="height:auto; overflow-y:hidden !important; overflow-x:hidden !important;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
      />
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
    props:['codeContent','codeLanguage'],
     components: {
      codemirror,
      
    },
     computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
   },
   mounted(){
     this.detectchange(this.$root.codeLanguage);
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
           
             this.$root.showCodeBox = true;
            
            
      },
       detectchange: function(languageType){
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
      }
}
}
</script>
<style>
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

    
</style>