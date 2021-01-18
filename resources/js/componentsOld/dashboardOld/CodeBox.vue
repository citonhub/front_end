<template>
    <div>
         
     <div class="codemirror my-0" style="position:absolute; height:100%; width:100%; ">

       <!-- code language switch  -->
       <div class="col-12 my-0 card pb-0" >
         <v-row class="my-0 py-0">
            <div class="col-lg-4 col-8 text-left my-0 py-0">
           <span class="editorhead">CitonHub-<b>{{ cmOption.mode }}</b></span>
            </div>
             <div class="col-4 my-0 py-0 text-center d-none d-lg-block">
              <v-btn icon @click="expandcode" ><v-icon>mdi-arrow-expand-all</v-icon></v-btn>
          </div>
            <div class="col-4 text-right my-0 py-0 mb-2">
          
        <select  style="font-size:10px !important;"  @change="detectchange"   v-model="language" class="browser-default custom-select">
             <option v-for="(option,index)  in items" :value="option" :key="index">{{ option}}</option>
        </select>
            </div>
         </v-row>
        
        
        
      </div>

    <!-- ends -->
     
    
    <!-- codemirror component  -->
  <codemirror
        v-model="code" 
        style="height:80%;"
        :options="cmOption"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
      />
<!-- ends -->
     
 
      <div class="col-12 my-0 card py-1" style="margin-bottom:100px !important;">
        <v-row class="my-0 py-0">
          <div class="col-6 my-0 py-0 text-left">
            <v-btn small color="#3E8893" @click="runcode"><span class="white-text">Run</span></v-btn>
          </div>
         
          <div class="col-6 my-0 py-0 text-right">
              <v-btn icon @click="sendmessage('code')" ><v-icon>mdi-send</v-icon></v-btn>
          </div>
            
        </v-row>
         
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

       // scroll
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'

// media 
export default {
    props:['messages','user_id','selected_class_id','showcode','displaycodebox'],
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
          scrollbarStyle:"overlay",
          filepath:'',
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
        items: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP','PYTHON','SQL','VUEJS'],
        language:'HTML',
         code: '<p>Lets build it!</p>',
    }
},
methods:{
  expandcode: function(){
    this.$root.expandcode();
  },
   runcode: function(){
      this.$root.runcode(this.code,this.language);
      },
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
      },
       sendmessage: function(type){

        
       
           let formData = new FormData();
             
         
            if(type == 'code'){
              formData.append('code',this.code);
              formData.append('code_type',this.cmOption.mode);
              var content = this.code;


         
         this.code = '<sent></sent>';
        
        
          
           }



           
        
          formData.append('classid',this.selected_class_id);
          formData.append('type',type);

        axios.post('/save-message',formData,
           {
             headers:{
              'Content-Type':'multipart/form-data'
             }
           })
          .then(response => {
             
            
              
             if (response.status == 200) {
               
            
           
                this.$root.scrollboard();
            
            }
              
            
           
            
          })
          .catch(error => {
            console.log(error);
          });
       
      }
}
}
</script>
<style lang="scss" scoped>

.example {
   display: block;
    height: 100%;
     
    .codemirror,
    .pre {
      width: 100%;
      max-height:100% !important;
      margin: 0;
       display: block;
      padding: 1rem;
      font-size: 11px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      overflow: auto;
    }

   

    
  }
</style>