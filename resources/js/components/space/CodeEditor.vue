<template>
    <v-app style="font-family:BodyText;background:transparent;">
       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
      
         <div class="py-1 my-0 text-left px-1" style=" position:absolute; left:0; width:10%; background:white;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         
         <div class=" py-1 my-0 px-0 scrollerStyleNew"  style=" background:white; overflow-x:auto; white-space:nowrap; position:absolute; left:10%; width:85%; " >
              <v-chip v-for="(file,index) in this.$root.codeEditorArray" :key="index"
      class="ma-1 ml-0 fileText d-inline-block"
      close
      small
      @click:close="removeCode(file)"
      @click="showCode(file)"
     :style=" selectedFileId == file.id ? 'color:white;background-color:#4ba6b4;' : 'background-color:#edf6f7;'"
      >
      {{file.file_name + '.' + languageExtensions(file.language_type)}}
    </v-chip>  

   

         </div>

          <div class="py-1 my-0 text-left px-1" style=" position:absolute; right:0; width:14%; background:white;" >
            <v-btn icon color="#4495a2" @click="copyText"><v-icon>mdi-content-copy mdi-18px</v-icon></v-btn>
         </div>
        
      </div>

       <div class="col-12 py-0 my-0" style="position:absolute; top:5%; height:95%; overflow-y:hidden; left:0; overflow-x:hidden;">
         <div class="row my-0 py-0 px-0 ">
              <div class="codebox scrollerStyle">
         <codemirror
        v-model="code"
        :options="cmOption"
        class="scrollerStyle"
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
              <input type="hidden" id="codeBoxContent" :value="code">
         </div>
       </div>

       
       <span style="position:absolute; top:90%; right:3%; z-index:23456788;"  class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="loadPage"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:92%; right:3%; z-index:23456788;" class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                  @click="loadPage"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
              

     </v-btn>
     </span>


           <span style="position:absolute; top:90%; left:3%;  z-index:23456788;"  class="d-md-none d-inline-block" v-if="checkIfOwner()">
          <v-btn
                color="#35747e"
                small
                :loading="loading"
                @click="saveFileContent"
                style="color:white;"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-content-save-outline</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:92%; left:3%; z-index:23456788;" class="d-none d-md-inline-block" v-if="checkIfOwner()">
          <v-btn
                color="#35747e"
                small
                :loading="loading"
                @click="saveFileContent"
                style="color:white;"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-content-save-outline</v-icon>
              </v-btn>
     </span>
         </div>
       </div>

         <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center;bottom:15%; z-index:123453566;"  class="d-flex">
             <v-alert
      v-model="Alert"
      dismissible
      close-icon="mdi-delete"
      color="#3E8893"
       width="auto"
       style="font-size:13px;"
       height="auto"
      border="left"
     
      elevation="2"
      colored-border
     
    >
      {{alertMsg}}
    </v-alert>
        </div>
        </v-fade-transition>
    </v-app>
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
      mounted(){
       this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.fetchProject();
       this.detectchange(this.$root.EditorLanguage);
       this.trackUser();
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
        language: this.$root.EditorLanguage,
         code: this.$root.codeEditorContent,
         selectedFileId: this.$root.selectedFileId,
         Alert: false,
         alertMsg:'',
         loading: false,
         canChange: true,

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

      
   activateBot:function(){
         this.$root.selectedPage  = this.$root.userPageTrack.filter((page)=>{
            return page.page_name == 'project_code_editor';
          });
         
          if(this.$root.selectedPage.length != 0){
               
              if(this.$root.selectedPage[0].status == 0){
                 this.$root.showBoard = true;
          this.$root.boardContent = 'Nice 😃, You figured it out. You can write and edit your codes here.And don\'t forget to save changes so you won\'t lose them ';
         this.$root.boardBtnLabel = 'Okay,Got It';

              }
               
          }
        
         
      },
        trackUser: function(){
      

         axios.get('/fetch-profile-'+ this.$root.username)
   .then(response => {
   
   if (response.status == 200) {

        this.$root.userPageTrack = response.data[2];

        this.activateBot();
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
          
          axios.get('/fetch-project-' + this.$route.params.projectSlug)
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

          }else{

            this.$root.selectedFileCatType = 'back-end';

             let codeData = this.$root.backEndFiles.filter((file)=>{
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
          this.loading = true;
      axios.post('/save-code-content-project',{
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
               
              this.showAlert(5000,'saved');
              this.loading = false;
            
            }
              
            
           
            
          })
          .catch(error => {
              this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
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
     
        
      },
      saveFileHeight:function(codemirror){

       
         
           this.$root.LocalStore('CodeFile'+ this.$root.selectedFileId + this.$root.username,codemirror.getScrollInfo());
           
        


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
      languageExtensions: function(language){
        if(language == 'HTML'){
           return 'html';
         }
         if(language == 'CSS'){
            return 'css';
         }
          if(language == 'PYTHON'){
           return 'py';
         }
          if(language == 'PHP'){
           return 'php';
         }
          if(language == 'JAVASCRIPT'){
           return 'js';
         }
          if(language == 'VUEJS'){
           return 'vue';
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
          if(language == 'COFFEESCRIPT'){
           return 'coffee';
         }
          if(language == 'LIVESCRIPT'){
           return 'ls';
         }
         if(language == 'DJANGO'){
           return 'py';
         }
          if(language == 'KOTLIN'){
           return 'kt';
         }
          if(language == 'FOTRAN'){
           return 'for';
         }
          if(language == 'MARKDOWN'){
          return 'md';
         }
          if(language == 'PERL'){
          return 'pl';
         }
          if(language == 'R'){
           return 'r';
         }
          if(language == 'RUBY'){
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
      letter-spacing: 1px !important;
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

    .scrollerStyleNew::-webkit-scrollbar {
  width: 5px;
}
 
.scrollerStyleNew::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(111, 181, 195, 0.8);
  border:1px solid transparent;
  border-radius:6px;
}
 
.scrollerStyleNew::-webkit-scrollbar-thumb {
  background-color: #6fb8c3;
  outline: 1px solid #6fb8c3;
  border:1px solid transparent;
   border-radius:6px;
}

    
</style>