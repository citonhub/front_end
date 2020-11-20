<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="  col-lg-6 offset-lg-3 py-0 px-0 my-0" style="border-right:1px solid #e6e6e6;  border-left:1px solid #e6e6e6; position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Comments</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 scrollerStyle" style="position:absolute; height:90%; width:100%;overflow-y:auto; padding-top:35px !important;">
            <div class="row my-2 py-2 "  >
           
           <div  class="col-12 my-0 py-0 "  v-for="(comment,index) in this.$root.projectComments" :key="index">
                       
                         <div style="background-color:transparent; border-bottom:1px solid #d9d9d9;" class="row my-0 py-1 mx-0 px-1"  >
                         <div class="col-2 my-0 py-0 text-center px-1" >
                             <span class="avatarCommentnew py-2 px-2">{{getAvatarText(comment.username)}}</span>
                         </div>
                         <div class="col-10 my-0 py-0 ">
                          
                                <div class="commentHeader d-block col-12 px-0 py-0 my-0 mx-0">{{comment.username}}</div>
                                <div class="commentText d-block" style="font-size:13px;" v-html="comment.content"></div>
                            
                         </div>

                         <div class="col-10 offset-2 my-0 py-1 px-1" v-if="comment.is_reply == 1" style="background:#b9dcdf; border:1px solid #b9dcdf; border-radius:10px;">
                          
                                <div class="commentHeader d-block col-12 px-0 py-0 my-0 mx-0">{{comment.replied_comment.username}}</div>
                                <div class="commentText d-block" v-html="comment.replied_comment.content"></div>
                            
                         </div>


                       
                               <div class="col-6 py-0 my-0 text-left">
                                  <v-btn icon @click="likeComment(comment)">
                              <v-icon color="#3E8893" v-if="comment.liked_by_user">mdi-heart mdi-18px</v-icon>
                               <v-icon color="#999999" v-else>mdi-heart-outline mdi-18px</v-icon>
                            </v-btn>
                             <span style="font-size:10px; color:#999999;" class="px-1">{{comment.likes}}</span>
                               </div>
                                 <div class="col-6 py-0 my-0 text-right">
                                  <v-btn icon @click="replyComment(comment)">
                                      <v-icon color="#999999">mdi-reply</v-icon>
                                   </v-btn>   
                               </div>
                               

                            </div>

                     
                     
                   </div>
         </div>
       </div>

      

       <div  class="col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 fixed-bottom " style="z-index:66; height:auto;background:#c5c5c5;" >

            <div class="px-2" v-if=" this.$root.is_reply_comment" >

                  <div class=" py-2 px-2  text-left mb-1"  style="background:#3E8893; border:1px solid transparent; border-radius:8px;" >

                     <div class="col-12 py-1 px-1  text-right">
                  <span class="msgTextReplynew text-left d-block" style="color:white;" v-html="shortenContent(commentContent ,50)" ></span>
                 
              </div>

                  </div>
                <div style="position:absolute; height:auto; width:auto; right:2%; top:-5%;background:rgba(38, 82, 89,0.6);border-radius:50%;padding:0px;z-index:99;">
                               <v-btn icon @click="closeComment"><v-icon color="#ffffff">mdi-close mdi-18px</v-icon></v-btn>
                             </div>
            </div>
          
          <div class="col-12 py-0 my-0 d-flex px-5 flex-row" style="align-items:center; justify-content:center;">

             

              <div class="row py-0 my-0">
               
               <v-card  flat  color="#c5c5c5" style="border-radius: 7px;" class="col-9 px-2 py-0 my-0">
                  
               
          
                <textarea ref="textBottom" :value="input" @input="update" style="font-size:13px;" @keydown="handelkeyAct" :placeholder="$t('general.type_here')"  class="editor-box card" ></textarea>
   
               
               </v-card>
               <div class="col-3 d-flex py-0 my-0" style="align-items:center;justify-content:center;">
                <v-btn   style="box-shadow:none;color:white;" fab color="#3E8893" class="mr-1 d-inline-block "  small :disabled="editFeild"
               @click="saveComment" :loading="loading"
               >
                   <v-icon color="#ffffff"  >mdi-send</v-icon>
                </v-btn>

               </div>
              

              
            </div>

          </div>
          

       </div>
         </div>

        
       </div>
      

     </v-app>
</template>
<script>


export default {
    data(){
        return{
         
          wordLimit:300,
         wordCount:0,
         Alert:false,
         alertMsg:'',
         editFeild:true,
        contentInWord:'',
        loading:false,
        input:'',
        labelText:'',
        shiftIsPressed:false,
        commentContent:'',
       
        }
    },
    components: {
   
  },
   computed: {
          compiledMarkdown: function() {
            return marked(this.input, { sanitize: true });
          }
        },
   mounted(){
      this.$root.showTabs=false;
       this.$root.showHeader = false;
       this.fetchProjectComments();
       this.trackPanel();
    },
    methods:{
        urlify:function(text) {
      var urlRegex =  /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
     return text.replace(urlRegex, function(url) {
      return "<a href=\"" + url + "\" target=\"_blank\">"  + url + "</a>";
  })
   // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
     },
      shortenContent: function(content,limit){
             
             if(content.length > limit){
                let shortcontent = content.slice(0,limit);
                 return shortcontent + '...';
             }else{
               return content;
             }
        },
      checkifReply: function(){
            if(this.$root.is_reply_comment){
               this.labelText = 'replying ' + this.$root.replyCommentUsername;
            }
      },
       handelkeyAct: function(e){
        
        if(e.keyCode == 16){

           this.shiftIsPressed = true;
          
        }

        if(e.keyCode != 16 && e.keyCode != 13){

           this.shiftIsPressed = false;
          
        }

        if(e.keyCode == 13 && this.shiftIsPressed){
           e.preventDefault()

               this.saveComment();

                this.shiftIsPressed = false;
            

           }
     },
       update:function(e){
           this.input = e.target.value;

           this.wordCount =  this.input.length;

         if(this.wordCount > this.wordLimit || this.wordCount == 0){
           this.editFeild = true;

         }else{
            this.editFeild = false;
         }
         
        this.contentInWord = this.urlify(this.compiledMarkdown);

        },
    
      fetchProject: function(){
        
         axios.get( '/fetch-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.$root.projectData = response.data[0];

     }
       
     
     })
     .catch(error => {
    
     }) 

        },
       
   trackPanel: function(){

        if( this.$root.localChannel.length == 0){
          
          var channel = Echo.private('panel.' + this.$route.params.projectSlug)
       .listen('.PanelChannel',(e) => {
             
    
      if(e.actionType == 'new-file'){

       
      
          

      
         this.$root.codeFiles.unshift(e.data);

          if(e.data.type == "front_end"){
            this.$root.frontEndFiles.unshift(e.data);
          }

          if(e.data.type == "back_end"){
           this.$root.backEndFiles.unshift(e.data);
          }
         

      
         
      }

       if(e.actionType == 'new-route'){
           
            this.$root.panelRoutes.unshift(e.data);

       }

       if(e.actionType == 'new-DBtable'){
         
         this.$root.CodeFilesData[3].unshift(e.data);
       }

       if(e.actionType == 'new-comment'){

          this.$root.projectComments.unshift(e.data);

       }

       if(e.actionType == 'new-comment-like'){
          
          this.$root.projectComments.map((comment)=>{
         
         if(comment.id == e.data){
         comment.likes = comment.likes + 1;
         }
          });

       }

       if(e.actionType == 'new-file-update'){
          
          if(e.data.type == 'front_end'){
         
          this.$root.frontEndFiles.map((file)=>{
             if(file.id == e.data.id){
                file.content = e.data.content;
             }
          });

          }

           if(e.data.type == 'back_end'){
         
          this.$root.backEndFiles.map((file)=>{
             if(file.id == e.data.id){
                file.content = e.data.content;
             }
          });

          }
          
           this.$root.codeEditorArray.map((file)=>{
             if(file.id == e.data.id){
                file.content = e.data.content;
             }
          });
       }

        })

      this.$root.localChannel.push(channel);

        }
   
       
     },
     closeComment:function(){
            this.$root.replyCommentId = 0;
         this.$root.is_reply_comment = false;

         this.commentContent = '';
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

         this.commentContent = '';

         this.input = '';

          this.$root.projectComments.unshift(response.data);
        
        this.loading = false;

     }
       
     
     })
     .catch(error => {
       this.showAlert(5000,'Failed- ' + error);
              this.loading = false;
     }) 
   },
   goBack() {
          
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
    makeComment:function(){
        this.$router.push({ path: '/' + this.$route.params.projectSlug +   '/make-comment' });
    },
    likeComment:function(comment){
           this.$root.checkIfUserIsLoggedIn('space');
          if(comment.liked_by_user){
          return;
        }

         axios.post( '/save-liked-project-comment',{
            "comment_id": comment.id
          })
      .then(response => {
      
      if (response.status == 200) {
        
           
       

         this.$root.projectComments.map((eachcomment)=> {
            if(eachcomment.id ==  comment.id){
                eachcomment.liked_by_user = true;
              eachcomment.likes = parseInt(eachcomment.likes)  + 1;
            }
         });
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 

      },
      replyComment:function(comment){
          this.$root.checkIfUserIsLoggedIn('space');
           this.$root.is_reply_comment = true;
           this.$root.replyCommentId = comment.id;
           this.$root.replyCommentUsername = comment.username;
            this.commentContent = comment.content;
          
      },
    fetchProjectComments: function(){ 

       if(this.$root.projectComments.length == 0){
         
           axios.get('/fetch-comment-project-' + this.$route.params.projectSlug)
      .then(response => {
      
      if (response.status == 200) {
        
        
       this.$root.projectComments = response.data;
      
         
        

     }
       
     
     })
     .catch(error => {
    
     }) 

       }
        
       
        },
    getAvatarText: function(text){
           if(text != undefined){
          return text.slice(0,2);
           }
         
      },
   
   
    },
   
}
</script>
<style scoped>
.shelfText{
    font-size: 12px;
    color: #265259;
}

textarea {
    font-size:13px; 
    background:#ffffff;
    width:100%; 
    height: 50px;
    max-height: 75px;
    padding: 4px 4px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid transparent; 
    border-radius:2px;
}
.avatarCommentnew{
   background:#dbedf0;
    border:1px solid #dbedf0;
     border-radius:50%;
     color:#4d4d4d;
      text-transform: uppercase;
     font-size:10px; 
     font-family:HeaderText;
     font-weight: bolder;
 }

.statusnew{
    font-size:10px;
     color:#173236;
     border:2px solid #edf6f7; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#edf6f7;
     font-weight: bolder;
 }

 .newavatarText{
   background:#edf6f7;
    border:1px solid #edf6f7;
     border-radius:9px;
     color:#173236;
     font-size:11px; 
     font-weight: bolder;
 }
  .mybadge{
     font-size:10px;
     color:white;
     font-family:HeaderText; 
     border:1px solid #3E8893; 
     border-radius:9px; 
     padding: 2px 4px;
     background:#3E8893;
     font-weight: bolder;
 } 
  .versus{
   color:#ffffff;
   font-size:12px; 
     font-family:HeaderText;
     font-weight: bolder;
 }
 .centralize{
   align-items: center;
   justify-content: center;
 }
 .commentHeader{
   font-size: 12px;
   font-weight: bolder;
   color:#333333;
 }
 .commentText{
   color:#4d4d4d ;
   font-size: 11px;
   font-weight: bolder;
 }
</style>