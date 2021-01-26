<template>
  <div class="py-2">

    <!-- code box powered by codemirror -->
    <div class=" codeboxnew" >
         <codemirror
        v-model="codeContent"
        :options="cmOption"
        style="height:190px; overflow-y:hidden !important; overflow-x:hidden !important; "
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
      />
     <v-btn  @click.stop="showCodeEditor" icon :style="'position:absolute; top:' + topMargin + '%; right:3%;z-index:999;'">
            <v-icon color="#ffffff">las la-expand</v-icon>
     </v-btn>
    <div style="position:absolute; width:100%;" class="py-2 px-2 d-flex flex-row">

        <div class="mr-2"><v-icon style="font-size:19px;" :color="color" >las la-code</v-icon></div>
          <div class="ml-3">
              <span :style="'color:' + color +' ;font-size:13px;'">{{filename}}</span>
              </div>

       
    </div>
    </div>

  <!-- ends -->
  </div>
   
</template>

<script>

   import { codemirror } from 'vue-codemirror'
  import '../../bootstraps/codeImports'



export default {
    props:['codeContent','filename','codeLanguage','codeViewerType','messageId','color','topMargin'],
     components: {
      codemirror
      
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
          scrollbarStyle:"overlay",
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
      showCodeEditor:function(){

        if(this.$router.currentRoute.path.indexOf('edit-note') >= 0){

                return;

             }

           this.$root.fullCodeLanguage = this.codeLanguage
           this.$root.FullcodeContent = this.codeContent
          
           this.$root.codeFromChat = true;
         this.$router.push({ path: '/channels/'+ this.$root.selectedSpace.space_id +'/editor' });
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
},

}
</script>
<style lang="scss" scoped>
     
    .codeboxnew,
    .pre {
      width: 100%;
      margin: 0;
      height: 100%;
       display: block;
      font-size: 13px;
      
      line-height: 1.6;
      word-break: break-all;
       letter-spacing: 1px !important;
      word-wrap: break-word;
      overflow: auto;
    }

    .codeboxnew{
       height: auto;
     
        border-radius: 10px;
        overflow-x: hidden;
        overflow-y:hidden;
    }

 /* Hide scrollbar for Chrome, Safari and Opera */
.codeboxnew::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.codeboxnew {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


    

   
</style>