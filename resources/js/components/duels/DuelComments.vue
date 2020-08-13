<template>
          <div  class="col-12 my-0 py-0 px-0" >
                       
                         <div style="background-color:transparent; border-bottom:1px solid #d9d9d9;" class="row my-0 py-1 mx-0 px-1"  >
                         <div class="col-2 my-0 py-0 text-center px-1" >
                             <span class="avatarCommentnew py-2 px-2">{{getAvatarText(source.username)}}</span>
                         </div>
                         <div class="col-10 my-0 py-0 ">
                          
                                <div class="commentHeader d-block col-12 px-0 py-0 my-0 mx-0">{{source.username}}</div>
                                <div class="commentText d-block" v-html="source.content"></div>
                            
                         </div>

                         <div class="col-10 offset-2 my-0 py-1 px-1" v-if="source.is_reply == 1" style="background:#b9dcdf; border:1px solid #b9dcdf; border-radius:10px;">
                          
                                <div class="commentHeader d-block col-12 px-0 py-0 my-0 mx-0">{{source.replied_comment.username}}</div>
                                <div class="commentText d-block" v-html="source.replied_comment.content"></div>
                            
                         </div>


                       
                               <div class="col-6 py-0 my-0 text-left">
                                  <v-btn icon @click="likeDuelComment(source)">
                              <v-icon color="#3E8893" v-if="source.liked_by_user">mdi-heart mdi-18px</v-icon>
                               <v-icon color="#999999" v-else>mdi-heart-outline mdi-18px</v-icon>
                            </v-btn>
                             <span style="font-size:10px; color:#999999;" class="px-1">{{source.likes}}</span>
                               </div>
                                <div class="col-6 py-0 my-0 text-right">
                               <v-btn icon @click="replyComment(source)">
                              <v-icon color="#999999">mdi-reply mdi-18px</v-icon>
                            </v-btn>
                         </div>

                            </div>

                     
                     
                   </div>

                 
</template>
<script>
export default {
     props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      },
    },
    methods:{
        getAvatarText: function(text){
         return text.slice(0,2);
      },
       likeDuelComment:function(comment){
           this.$root.checkIfUserIsLoggedIn('duels');
          if(comment.liked_by_user){
          return;
        }

         axios.post('/save-liked-duel-comment',{
            "comment_id": comment.id
          })
      .then(response => {
      
      if (response.status == 200) {
        
           
       

         this.$root.duelComments.map((eachcomment)=> {
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
      replyComment: function(comment){
           this.$root.checkIfUserIsLoggedIn('duels');
           this.$root.is_reply_comment = true;
           this.$root.replyCommentId = comment.id;
           this.$root.replyCommentUsername = comment.username;

           this.$router.push({ path: '/duel/'+ this.$route.params.duelId + '/comment' });
       },
    }
}
</script>
<style>

</style>