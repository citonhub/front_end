<template>
    <div class="row py-0 my0">

<!-- large and medium screens -->

          <div class="col-12 my-0 d-md-block py-1  pt-3 d-none scroller " style="position:absolute; overflow-x:auto; white-space:nowrap; top:0%; height:6%; left:0;background:#F3F8FC; ">
                <v-chip  close small  outlined color="#3C87CD">index.html </v-chip>  
              </div>
   <!-- ends -->

   <!-- smaller screens -->
       
   <!-- ends -->

   <!-- code editor -->
        <div class="col-12 px-0 py-0 mt-2 mt-md-0" style="position:absolute;height:94%;top:6%; left:0;">
                 <div class="codeboxnew">
         <codemirror
        v-model="code"
        :options="cmOption"
      
        style="height:100%;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @scroll="saveFileHeight"
        @blur="onCmBlur"
        @update="setEditorPosition"
         @input="onCmCodeChange"
        />
              </div>

    <v-btn medium fab color="#3AC3A9"  class="d-lg-inline-block d-none" style="z-index:99999999;  position:absolute;  bottom:3%; right:3%; ">

        <v-icon style="font-size:25px; color:white;">las la-play</v-icon>
         
     </v-btn>

     <v-btn  fab color="#3AC3A9"  class="d-lg-none d-inline-block" style="z-index:99999999;  position:fixed;  bottom:3%; right:3%; ">

        <v-icon style="font-size:24px; color:white;">las la-play</v-icon>
         
     </v-btn>

              </div>
   <!-- ends -->
    </div>
</template>
<script>
import dedent from 'dedent'
  import { codemirror } from 'vue-codemirror'

  // base style
  import 'codemirror/lib/codemirror.css'

  // theme css
  import 'codemirror/theme/monokai.css'
    import 'codemirror/theme/base16-dark.css'

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
  // scroll
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'

  

export default {
      mounted(){

     /**
      * 
      *this.fetchProject();
       this.detectchange(this.$root.EditorLanguage);
       this.trackUser();
       this.$root.pageLoaderOpened = false;
      * 
      */
       
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
          autocorrect: true,
          keyMap: "sublime",
          scrollbarStyle:"overlay",
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
       /**
        * language: this.$root.EditorLanguage,
         code: this.$root.codeEditorContent,
         selectedFileId: this.$root.selectedFileId,
         Alert: false,
         alertMsg:'',
         loading: false,
         canChange: true,

        *  */ 
    }
},
methods:{
   
  setEditorPosition: function(codemirror){

        
        if(this.canChange){

           let storedCodePosition = this.$root.getLocalStore('CodeFile'+ this.$root.selectedFileId + this.$root.username);
          
          storedCodePosition.then((result)=>{

             if(result != null){

                  let finalResult = JSON.parse(result);

                   codemirror.scrollTo(finalResult.left,finalResult.top);

             }else{

                 codemirror.scrollTo(0,0);

             }
         
           
     
          });

        }

        this.canChange = false;
     
      

  },
   copyText () {
          let spacelink = document.querySelector('#codeBoxContent')
          spacelink.setAttribute('type', 'text')  
          spacelink.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
              if(msg == 'successful'){

                this.showAlert(5000,'Copied!')
                
              }else{

                 this.showAlert(5000,'Oops! unable to copy')
                
              }
          } catch (err) {
           
          }

          /* unselect the range */
          spacelink.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },

      
 
        trackUser: function(){
      

         axios.get( '/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

  }
    
  
  })
  .catch(error => {
 
  }) 

      
   },
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
         loadPage:function(){
      this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/page-loader/user' });
   },
    fetchProject: function(){
         
         if( this.$root.projectData.length != 0){

         }else{
          
          axios.get( '/fetch-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.$root.projectData = response.data[0];

       this.$root.ProjectMembers = response.data[2];

     }
       
     
     })
     .catch(error => {
    
     }) 
         }
         

        },
        showAlert:function(duration,text){
        this.Alert = true;
        this.alertMsg = text;
        let _this = this;
     
       setTimeout(function(){
        _this.Alert = false;
       },duration);

      },
       checkIfOwner:function(){
         var member = this.$root.ProjectMembers.filter((member)=>{
             return member.user_id == this.$root.user_temp_id;
         });

           if(member.length == 0){
            
            return false;
         }else{
           return true;
         }
        
      },
      showCode:function(codeBox){

         this.$root.selectedFileId = codeBox.id;
        this.selectedFileId = codeBox.id;

         this.$root.SelectedCodeBox = codeBox;
        
          if(this.$root.SelectedCodeBox.type == 'front_end'){
              
              this.$root.selectedFileCatType = 'front-end';

              let codeData = this.$root.frontEndFiles.filter((file)=>{
               return   file.id == this.$root.selectedFileId;

              })
              codeData = codeData[0];
               this.language = codeData.language_type;
              this.detectchange(this.language);
             this.code = codeData.content;

          }
          
          if(this.$root.SelectedCodeBox.type == 'back-end'){

            this.$root.selectedFileCatType = 'back-end';

             let codeData = this.$root.backEndFiles.filter((file)=>{
           return   file.id == this.$root.selectedFileId;

           })
              codeData = codeData[0];
               this.language = codeData.language_type;
              this.detectchange(this.language);
             this.code = codeData.content;
          }


          if(this.$root.SelectedCodeBox.type == 'code_files' || this.$root.SelectedCodeBox.type == 'code_file'){

            this.$root.selectedFileCatType = 'code_files';

             let codeData = this.$root.codeFiles.filter((file)=>{
           return   file.id == this.$root.selectedFileId;

           })

            
              codeData = codeData[0];
               this.language = codeData.language_type;
              this.detectchange(this.language);
             this.code = codeData.content;
          }


          
         
         this.canChange = true;
       
      
      },
      removeCode:function(codeBox){
         var newarray = this.$root.codeEditorArray.filter((file)=>{
            return file.id !=  codeBox.id;
         });

         this.$root.codeEditorArray = newarray;

         if(this.$root.codeEditorArray.length == 0){
           this.goBack();
         }
      },
       goBack() {
           this.$root.forcePanelReload= true;
           this.$root.showChatBottom = true;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

        },
       saveFileContent: function(){

          if(this.checkIfOwner()){

          }else{
            return;
          }
          this.loading = true;
      axios.post( '/save-code-content-project',{
                project_slug: this.$route.params.projectSlug,
                file_id: this.$root.selectedFileId,
                content: this.code,
                code_category: this.$root.selectedFileCatType
                  })
          .then(response => {
             
            
            
             if (response.status == 200) {

                this.$root.codeEditorArray.map((codeFile)=>{
          
          if(codeFile.id == this.selectedFileId){
           
            codeFile.content = this.code;
            
           }

       });
           
           
            if(this.$root.SelectedCodeBox.file_name == 'extensions'){


            let indexFile =   this.$root.frontEndFiles.filter((codeFile)=>{
          
           return codeFile.file_name == 'index' && codeFile.language_type == 'HTML';
         })
            
          this.handleIndexFile(indexFile[0]);

              }

              
              this.loading = false;
            
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
          })
    },
    handleIndexFile:function(indexFile){

       axios.post( '/save-code-content-project',{
                project_slug: this.$route.params.projectSlug,
                file_id: indexFile.id,
                content: indexFile.content,
                code_category: this.$root.selectedFileCatType
                  })
          .then(response => {
             
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
      onCmCodeChange:function(code){
        
       this.$root.frontEndFiles.map((file)=>{
          if(file.id == this.$root.selectedFileId){

             file.content = code;

          }
       })

        this.$root.backEndFiles.map((file)=>{
          if(file.id == this.$root.selectedFileId){

             file.content = code;

          }
       })


        this.$root.CodeFilesData[0].map((file)=>{
          if(file.id == this.$root.selectedFileId){

             file.content = code;

          }
       })

       this.$root.codeEditorContent = code;

       
           this.$root.LocalStore(this.$route.params.projectSlug ,this.$root.CodeFilesData);

          setTimeout(() => {

            this.saveFileContent()
            
          }, 2000);
     
        
      },
      saveFileHeight:function(codemirror){

       
         
           this.$root.LocalStore('CodeFile'+ this.$root.selectedFileId + this.$root.username,codemirror.getScrollInfo());
           
        


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

         if(language == 'VUE'){
         this.cmOption.mode = 'text/x-vue';
         }


          if(language == 'MD'){
         this.cmOption.mode = 'text/x-markdown';
         }


         if(language == 'PYTHON'){
           


           this.cmOption.mode = 'text/x-python';


         

         }

         if(language == 'PYTHON For ML(3.7.7)'){
           


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

         if(language == 'JAVASCRIPT'){
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
<style scoped>
.scroller::-webkit-scrollbar {
  height: 5px;
}

  .codeboxnew,
    .pre {
      width: 100%;
      margin: 0;
       display: block;
      font-size: 13px;
      line-height: 1.6;
      word-break: break-all;
      word-wrap: break-word;
      letter-spacing: 1px !important;
      overflow: auto;
    }

 .codeboxnew{
       height: 100%;
       border: 1px solid #e6e6e6;
        position:absolute;
        width:100%;
       
        overflow-x: hidden;
        overflow-y:hidden;
}

.scroller::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>