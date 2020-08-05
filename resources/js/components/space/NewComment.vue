<template>
     <v-app style="background:transparent; font-family:BodyText;">

           <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">

        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-0" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
           <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Make a comment</span>
         </div>
         <div class="col-4 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0" >
         <v-form class="row my-2 py-2 px-2 ">
              


             <div class="col-12 py-2 my-0 px-2">
                 <span style="font-size:12px;color:gray;">{{ labelText }}</span>
                 <v-row>
        <v-col cols=12 >
         

            <div class="editor">
          
             <editor-content class="editor-box2" :editor="editor" :onUpdate="countCharacter()"   />
            </div>
        </v-col>
        <div class="col-12 py-0 px-2">
         
          <div class="row py-0 my-0">
                <div class="col-8 py-0 my-0">
                   
                </div>
                 <div class="col-4 py-0 my-0  text-right">
                   <span class="counter">{{wordCount}}/{{ wordLimit }}</span>
                </div>
          </div>
          
        </div>
        
  </v-row>
             </div>

        

             <div class="col-12 py-2 my-0 px-2 text-center">
                  <v-btn rounded small color="#3E8893" @click="saveComment" :disabled="editFeild" :loading="loading"  style="font-size:11px; font-weight:bolder; color:white;font-family: Headertext;">Send</v-btn>
             </div>

             <div class="my-5 py-3">

             </div>

         
              
          </v-form>
        </div>
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
import { Editor, EditorContent  } from 'tiptap';
import {
        Placeholder} from 'tiptap-extensions';

export default {
    data(){
        return{
          editor: new Editor({
        content: '',
        extensions:[
        
            new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'type your comment...',
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
          }),
           
        ],
        
      })
    }
    },
    components: {
    EditorContent,
     
    
    
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.checkifReply();
        this.$root.checkIfUserIsLoggedIn('space');
       this.fetchProject();
    },
    methods:{
       urlify:function(text) {
      var urlRegex =  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
     return text.replace(urlRegex, function(url) {
     return '<a href="' + url + '" target="_blank">' + url + '</a>';
  })
   // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
     },
      checkifReply: function(){
            if(this.$root.is_reply_comment){
               this.labelText = 'replying ' + this.$root.replyCommentUsername;
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
    
     countCharacter:function(value){
            this.wordCount = this.editor.getHTML().length;

         if(this.wordCount > this.wordLimit || this.wordCount == 7){
           this.editFeild = true;

         }else{
            this.editFeild = false;
         }
         
       
         this.contentInWord = this.urlify(this.editor.getHTML());

          
          
      },
      fetchProject: function(){
        
         axios.get('/fetch-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.$root.projectData = response.data[0];
      
         
        

     }
       
     
     })
     .catch(error => {
    
     }) 

        },
       
   saveComment:function(){
       this.loading = true;
     axios.post('/save-project-comment',{
      'project_slug':this.$route.params.projectSlug,
       'content': this.contentInWord,
       'is_reply': this.$root.is_reply_comment,
       'replied_comment_id': this.$root.replyCommentId 
     })
      .then(response => {
      
      if (response.status == 200) {

         this.$root.replyCommentId = 0;
         this.$root.is_reply_comment = false;

          this.$root.projectComments.unshift(response.data);
        
        this.goBack();
          
       
      
        
        

     }
       
     
     })
     .catch(error => {
       this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
     }) 
   },

  
       goBack() {
         this.$root.is_reply_comment = false;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    },
    beforeDestroy() {
    this.editor.destroy()
  },
}
</script>
<style>
.editor-box2> * {
    border-bottom:1px solid #4495a2;
    height: auto;
    line-height: 20px !important;
    padding: 5px 2px;
    font-size: 12px;
    color: #262626;
}

.editor2 p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}

.counter{
  font-size: 12px;
    color: #262626;
}

.is-active{
    border-color: #dbedf0;
    border-style: solid;
    border-width: 1px;
}
 /* *:focus {
    outline: none;
}  */
</style>