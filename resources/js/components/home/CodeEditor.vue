<template>
     <v-app style="background:transparent; font-family:BodyText; z-index:985778699686;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

         <div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;"  v-if="showCode"> 


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
      
         
         <div class="col-12 py-0 my-0 px-0" >
             <div class="row py-0 my-0">
                  <div class="col-2 py-0 my-0 px-0 d-flex" style="text-align:center; justify-content:center;">
                     <v-btn icon color="#4495a2" @click="goBack" style="text-align:center; justify-content:center;"  class="d-inline-block  d-flex"><v-icon>mdi-close mdi-18px</v-icon></v-btn>
                  </div>
                  <div class="col-8 py-0 pt-1 my-0 px-1">
                      <select  style="font-size:13px !important; " placeholder="select language"  @change="detectchange(language)"   v-model="language" class="browser-default custom-select">
                 <option v-for="(option,index)  in items" :value="option.name" :key="index">{{ option.name}}</option>
                     </select>
                   </div>
                   
                   <div class="col-2 py-1 my-0 px-2 text-right" v-if="!this.$root.codeFromView">
                     <v-btn   x-small color="#3E8893 "  @click="saveFile = true" ><span style="color:#ffffff; font-weight:bolder; font-size:10px;">save</span></v-btn>
                   </div>
             </div>
               
               

         </div>
        
        </div>

       <div class="col-12 py-0 my-0" style="position:absolute; height:95.5%;width:100%; overflow-y:hidden;z-index:985779686; overflow-x:hidden;">
         <div class="row my-0 py-0 px-0 ">
              <div class="codebox">
         <codemirror
        v-model="code"
        :options="cmOption"
        style="height:100%;z-index:985779686;"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
        />
              </div>
         </div>
         
       </div>
               

     <span style="position:absolute; top:90%; right:5%;z-index:985778699686;">
           <v-btn
                color="#35747e"
                small
                  @click="runCode"
                class="d-inline-block "
                fab
              >
                <v-icon color="#ffffff">mdi-play</v-icon>
            </v-btn>
         
     </span>

    </div>

     <div style="position:absolute; height:100%; width:100%; overflow-y:hidden;left:0;top:0%;" v-else>
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
   :srcdoc="ResultCode" 
     style="border: 0; height:91%; position:absolute;  left:0; top:8%;" class="col-12 px-1 py-0" v-if="selectedLangId == 0"></iframe>

    <textarea  readonly v-else v-model="ResultCode"  style="border: 0; height:91%; position:absolute; left:0; top:8%; font-size:14px;" class="col-12 px-2 py-0" >
       
    </textarea>

  

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
       </div>

       <v-fade-transition>
              <div  style="position:absolute; width:100%; height:auto: align-items:center;justify-content:center; top:30%; z-index:123453566;"  class="d-flex" v-if="saveFile">
             <v-card class="py-1 px-2" width="220">
                <v-form>
                  <div class="col-12 px-1 py-1 text-right">
                       <v-btn icon @click="saveFile = false"> <v-icon color="#4495a2">mdi-close mdi-18px</v-icon></v-btn>
                  </div>
                   <div class="col-12 py-0 my-0 px-2">
                  <v-text-field
                style="font-size:12px;"
                 placeholder="name..."
            label="File Name"
             dense
             v-model="fileName"
             color="#4495a2"
            
             ></v-text-field>

             </div>

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded x-small color="#3E8893" style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;" @click="saveAndProceed">Save</v-btn>
             </div>
                </v-form>
             </v-card>
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
   // scroll
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'


export default {
       mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = false;
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
          fileName:'index',
          saveFile: false,
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
         items: [
          {
            "id": 0,
            "name": 'HTML' 
          },
          {
            "id": null,
            "name": 'CSS' 
          },
          {
            "id": 26,
            "name": 'JAVASCRIPT(Node)' 
          },
          {
            "id": 35,
            "name": 'PHP' 
          },
          {
            "id": 39,
            "name": 'PYTHON(3.8.1)' 
          },
          {
            "id": 100,
            "name": 'PYTHON For ML(3.7.7)' 
          },
          {
            "id": 38,
            "name": 'PYTHON(2.7.17)' 
          },
          {
            "id": 44,
            "name": 'SQL' 
          },
          {
            "id": 4,
            "name": 'C' 
          },
          {
            "id": 11,
            "name": 'C++' 
          },
          {
            "id": 25,
            "name": 'JAVA' 
          },
          {
            "id": 13,
            "name": 'C#' 
          },
          {
            "id": 18,
            "name": 'ERLANG' 
          },
          {
            "id": 14,
            "name": 'COBOL' 
          },
          {
            "id": 27,
            "name": 'KOTLIN' 
          },
          {
            "id": 21,
            "name": 'FOTRAN' 
          },
          {
            "id": 34,
            "name": 'PERL' 
          },
          {
            "id": 40,
            "name": 'R' 
          },
          {
            "id": 41,
            "name": 'RUBY' 
          },
          {
            "id": 22,
            "name": 'GO' 
          },
          {
            "id": 24,
            "name": 'HASKELL' 
          },
          {
            "id": 28,
            "name": 'LUA' 
          },
          {
            "id": 33,
            "name": 'PASCAL' 
          },
          {
            "id": 42,
            "name": 'RUST' 
          },
          {
            "id": 43,
            "name": 'SCALA' 
          },
          {
            "id": 45,
            "name": 'SWIFT' 
          },
          {
            "id": 46,
            "name": 'TYPESCRIPT' 
          }
        ],
        language:this.$root.codeLanguage,
         code: this.$root.codeContent,
         selectedLangId:'',
         showCode:true,
         recheckCodeBox:true,
          ResultCode:'',
    }
},
methods:{
     onCmCursorActivity(codemirror) {
        console.debug('onCmCursorActivity', codemirror)
      },
       goBack() {


         if(this.$root.codeFromPostView){

             this.$root.showTabs=true;
          this.$root.showHeader = false;

            this.$root.showCodeEditor = false;

            
              
    this.$root.codeFromView = false;

    this.$root.codeContent = '';
    
  this.$root.showPostModal = true;
   
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
       return;
          
        }
       

          if(this.$root.codeFromView){ 

             this.$root.showTabs=true;
          this.$root.showHeader = true;

            this.$root.showCodeEditor = false;
              
    this.$root.codeFromView = false;
      
     this.$root.codeContent = '';

    

          }else{



             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')

          }

   this.$root.codeContent = '';
        
          
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
      saveAndProceed:function(){
         this.$root.CodeFileName = this.fileName +'.'+ this.languageExtensions();
         this.$root.codeContent = this.code;
         this.$root.codeLanguage = this.language;
         this.goBack();
      },
       runCode:function(){
        
       

           this.showCode = false;

            if(this.selectedLangId == 0 || this.language == 'HTML'){

              this.ResultCode = this.code; 
             

            }else{

              this.ResultCode = 'sending to sandbox...';

              this.runCodeOnSandbox();
              


            }

            


          

       
      },
       checkResponse:function(token){

         let _this = this;

        let interval = setInterval(check,1000);


        function check(){

           
             if(_this.recheckCodeBox){

               _this.recheckCodeBox = false;

                axios.post('/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.ResultCode =  response.data[0].stdout;

                  
                 clearInterval(interval);


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.ResultCode = 'In Queue...';

              }else if(response.data[0].status.description == 'Processing'){

                 _this.ResultCode = 'Processing...';

              }else{

                 _this.ResultCode =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

                 clearInterval(interval);

              }


              if(_this.$root.codeBoxOpened == false){
                  clearInterval(interval);
              }

              

       
         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.ResultCode = 'An issue occured,unable to run on sandbox...';

                
               clearInterval(interval);
              
          })

             }

          

        }

        

      },
       runCodeOnSandbox: function(){

          axios.post('/run-code-on-sandbox',{
                langId: this.selectedLangId,
                code: this.code,
                messageId: 900
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

             let token = response.data[0].token;

        
              if(response.data[0].status.description == 'Accepted'){

                  this.ResultCode =  response.data[0].stdout ;

                
                

              }else if(response.data[0].status.description == 'In Queue'){

                 this.ResultCode = 'In Queue...';
                 this.checkResponse(token);

              }else if(response.data[0].status.description == 'Processing'){

                 this.ResultCode = 'Processing...';

                 this.checkResponse(token);

              }else{

                

                this.ResultCode =  response.data[0].stdout + '\n Error: \n' + response.data[0].stderr ;

              }

 
          }
            
          })
          .catch(error => {

            
             
               this.ResultCode = 'An issue occured,unable to run on sandbox...';
              
          })

          
      },

       detectchange:  function(languageFull){

         
         
          
          let language = '';
         if(typeof languageFull == 'object' ){
            language = languageFull.name
             this.selectedLangId =  languageFull.id
         }else{
           language = languageFull

           

            let languageArray = this.items.filter((item)=>{
      return   item.name == languageFull;
           });
       if(languageArray[0].length != 0){

          this.selectedLangId = languageArray[0].id;
       }
            
         }

          



          

          this.$root.fullCodeLanguage = language;
          

  
         if(language == 'HTML'){
            this.cmOption.mode = 'text/html';
         }
         if(language == 'CSS'){
         this.cmOption.mode = 'text/css';
         }
          if(language == 'PYTHON(3.8.1)'){
           


           this.cmOption.mode = 'text/x-python';

       if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "print(\"hello, world\")";
       }
         

         }

         if(language == 'PYTHON For ML(3.7.7)'){
           


           this.cmOption.mode = 'text/x-python';

       if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "import mlxtend\n" +
"import numpy\n" +
"import pandas\n" +
"import scipy\n" +
"import sklearn\n" +
"\n" +
"print(\"hello, world\")";
       }
         

         }


         if(language == 'PYTHON(2.7.17)'){
           this.cmOption.mode = 'text/x-python';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "print(\"hello, world\")";
       }

         }
          if(language == 'PHP'){
           this.cmOption.mode = 'text/x-php';

          
     if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "<?php \n " +
"print(\"hello, world\n\"); \n " +
"?>";
       }
         }
          if(language == 'JAVASCRIPT(Node)'){
           this.cmOption.mode = 'text/javascript';


        if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "console.log(\"hello, world\");";
       }
            
         }
          if(language == 'SQL'){
           this.cmOption.mode = 'text/x-sql';

 if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code =" SELECT \n " +
  "  Name, COUNT(*) AS num_albums \n " +
"FROM artists JOIN albums \n " +
"ON albums.ArtistID = artists.ArtistID \n " +
"GROUP BY Name \n " +
"ORDER BY num_albums DESC \n " +
"LIMIT 4; ";

       }
             
         }
          if(language == 'C'){
           this.cmOption.mode = 'text/x-csrc';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code ="#include <stdio.h> \n " +
"                                        \n " +
"int main(void) { \n " +
"    printf(\"hello, world\n\"); \n " +
"    return 0; \n " +
"}";
       }

          
         }
          if(language == 'C++'){
           this.cmOption.mode = 'text/x-c++src';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "#include <iostream>  \n " +
"                                           \n " +
"int main() {    \n " +
"    std::cout << \"hello, world\" << std::endl;  \n " +
"    return 0;  \n " +
"}";
       }
           
         }
          if(language == 'JAVA'){
           this.cmOption.mode = 'text/x-java';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "public class Main { \n " +
 "   public static void main(String[] args) { \n " +
"      System.out.println(\"hello, world\"); \n " +
 "   } \n " +
"}";
       }

          
         }
          if(language == 'C#'){
           this.cmOption.mode = 'text/x-csharp';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code = "public class Hello { \n " +
"    public static void Main() { \n " +
"       System.Console.WriteLine(\"hello, world\"); \n " +
"   } \n " +
"}";
       }

           
         }
          if(language == 'ERLANG'){
           this.cmOption.mode = 'text/x-erlang';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "main(_) -> \n " +
 "   io:fwrite(\"hello, world\n\").";
       }

          
         }
          if(language == 'KOTLIN'){
           this.cmOption.mode = 'x-shader/x-fragment';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "fun main() { \n " +
 "   println(\"hello, world\") \n " +
"}";
       }
          
         }
          if(language == 'FOTRAN'){
           this.cmOption.mode = 'text/x-fortran';

         if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code = "program main \n " +
 "   print *, \"hello, world\" \n " +
"end";
       }

           
         }
          if(language == 'PERL'){
           this.cmOption.mode = 'text/x-perl';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "my $name = <STDIN>; \n " +
"print \"hello, $name\"";
       }

         
         }
          if(language == 'R'){
           this.cmOption.mode = 'text/x-rsrc';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code = "cat(\"hello, world\n\")";
       }

           
         }
         if(language == 'GO'){
           this.cmOption.mode = 'text/x-go';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "package main \n " +
"                           \n " +
"import \"fmt\" \n " +
"                        \n " +
"func main() { \n " +
 "   fmt.Println(\"hello, world\") \n " +
"}";
       }

           
         }
         if(language == 'HASKELL'){
           this.cmOption.mode = 'text/x-haskell';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code ="main = putStrLn \"hello, world\"";
       }

          
         }
          if(language == 'RUBY'){
           this.cmOption.mode = 'text/x-ruby';

            if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "puts \"hello, world\"";
       }

          
         }
         if(language == 'LUA'){
           
            this.cmOption.mode = 'text/x-lua';

             if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "print(\"hello, world\")";
       }

            

         }
         if(language == 'PASCAL'){

            this.cmOption.mode = 'text/x-pascal';

             if(!this.$root.codeIsLive  && !this.$root.codeFromChat){
      this.code = "program Hello; \n " +
"begin  \n " +
 "   writeln ('hello, world') \n " +
"end. \n ";
       }
            

         }
         if(language == 'RUST'){

            this.cmOption.mode = 'text/x-rustsrc';

             if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code ="fn main() { \n " +
"    println!(\"hello, world\"); \n " +
"}";
       }

            
         }
         if(language == 'SCALA'){
           
             this.cmOption.mode = 'text/x-scala';

              if(!this.$root.codeIsLive && !this.$root.codeFromChat){
      this.code ="object Main {  \n " +
 "   def main(args: Array[String]) = {  \n " +
 "      val name = scala.io.StdIn.readLine()  \n " +
  "     println(\"hello, \"+ name)  \n " +
 "   } \n " +
"}";

       }

            

         }
         if(language == 'SWIFT'){

              this.cmOption.mode = 'text/x-swift';

               if(!this.$root.codeIsLive && !this.$root.codeFromChat){
        this.code = "import Foundation \n " +
"let name = readLine() \n " +
"print(\"hello, \(name!)\")";
       }

          

         }
         if(language  == 'TYPESCRIPT'){
           

             this.cmOption.mode = 'text/javascript';

              if(!this.$root.codeIsLive && !this.$root.codeFromChat){
       this.code = "console.log(\"hello, world\");";
       }

           

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
       letter-spacing: 1px !important;
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