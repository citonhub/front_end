<template>
     <v-app style="background:transparent; font-family:BodyText;">

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:hidden; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-2 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-8 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
             <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;" v-if="this.$root.selectedDuel.length != 0">{{ this.$root.selectedDuel.user_team.name}}</span>
         </div>
         <div class="col-2 py-0 my-0  text-right"  style="border-bottom:2px solid #4495a2; " >
             
         </div>
      </div>
     </div>

      <div class="col-12 py-1 my-0 " style="position:absolute; height:90%; width:100%;overflow-y:auto; padding-top:35px !important;">
            <div class="row my-2 py-2 "  >
           
           <div  class="col-12 my-0 py-0 "  v-for="(comment,index) in this.$root.projectComments" :key="index">
                       
                         <div style="background-color:transparent; border-bottom:1px solid #d9d9d9;" class="row my-0 py-1 mx-0 px-1"  >
                         <div class="col-2 my-0 py-0 text-center px-1" >
                             <span class="avatarCommentnew py-2 px-2">{{getAvatarText(comment.username)}}</span>
                         </div>
                         <div class="col-10 my-0 py-0 ">
                          
                                <div class="commentHeader d-block col-12 px-0 py-0 my-0 mx-0">{{comment.username}}</div>
                                <div class="commentText d-block" v-html="comment.content"></div>
                            
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
                              <v-icon color="#999999">mdi-reply mdi-18px</v-icon>
                            </v-btn>
                         </div>

                            </div>

                     
                     
                   </div>
         </div>
       </div>
         </div>

          <span style="position:absolute; top:83.5%; right:3%;" class="d-md-none d-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="makeComment"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-comment-text-outline mdi-18px</v-icon>
              </v-btn>
     </span>

      <span style="position:absolute; top:90%; right:3%;"  class="d-none d-md-inline-block">
          <v-btn
                color="#35747e"
                small
                @click="makeComment"
                class="d-block"
                fab
              >
                <v-icon color="#ffffff">mdi-comment-text-outline mdi-18px</v-icon>
              </v-btn>
     </span>
       </div>
      

     </v-app>
</template>
<script>


export default {
    data(){
        return{
         duel:[],
         
       
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
       this.fetchDuel();
      this.trackPanel();
    },
    methods:{
       
      fetchDuel: function(){
      if(this.$root.selectedDuel.length != 0){

        this.duel = this.$root.selectedDuel;

         this.fetchPanelComments();

      }else{
       
       axios.get('/fetch-this-duel/' + this.$route.params.duelId + '/' + this.$route.params.type)
      .then(response => {
      
      if (response.status == 200) {
        
         
       var duel = response.data[0];

        this.duel = duel;
        this.$root.selectedDuel =  duel;

        this.fetchPanelComments();
      
       
       

     }
  
    });

      }

      },
  
   goBack() {
          
        this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/panel/' + this.$root.selectedDuel.user_team.team_code + '/user'});
        },
    makeComment:function(){
        this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/panel/' + this.$route.params.type + '/comments/new' });
    },
    likeComment:function(comment){
           this.$root.checkIfUserIsLoggedIn('space');
          if(comment.liked_by_user){
          return;
        }

         axios.post('/save-liked-project-comment',{
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
       trackPanel: function(){

        if( this.$route.params.type != 'user' && this.$root.localChannel.length == 0){
          
          var channel = Echo.private('panel.' + this.$route.params.type)
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
      replyComment:function(comment){
          this.$root.checkIfUserIsLoggedIn('space');
           this.$root.is_reply_comment = true;
           this.$root.replyCommentId = comment.id;
           this.$root.replyCommentUsername = comment.username;

           this.$router.push({ path: '/duel/' + this.$route.params.duelId +   '/panel/' + this.$route.params.type + '/comments/new' });
      },
    fetchPanelComments: function(){

       if(this.$root.projectComments.length != 0){

       }else{
        
          axios.get('/fetch-comment-panel-' + this.$route.params.type)
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
         return text.slice(0,2);
      },
   
   
    },
   
}
</script>
<style>
.shelfText{
    font-size: 12px;
    color: #265259;
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