<template>
   <div class="px-2">
    <div class="col-12 py-1" style="background-color:whitesmoke; border-bottom:1px solid #cccccc;" v-for="(post,index) in CommentArray" :key="index">
        <div class="row" >
           <div class="col-12 py-0 d-flex ">
             <div>
                   <div :style="imageStyle(38,post.userProfile)"   @click.stop="viewUser(post)"
                  class="d-inline-block" >

                  </div>
             </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span style="font-size:13px;font-family:HeaderText;" class="d-block"  @click.stop="viewUser(post)"><b>{{ post.username }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(post.created_at)}} at {{formatTime(post.created_at)}}</b></span>
                   
                </div>
        </div>
         <div class="py-1 px-2 col-12 my-0">
                   <span style="font-size:13px; color: #333333;" class="detectLink" v-html="post.content"></span>
                </div>

                  <!-- tagged comments -->
       <div class="col-12 py-1 px-3 " v-if="post.is_reply == 'true'">
        <div style="background:#b9dcdf; border:1px solid #b9dcdf; border-radius:10px;" class="px-2  pt-2 pb-2 my-0">
             <div class="row py-0 my-0 px-0 mx-0">
              <div class="col-2 py-0 my-0 px-0 text-center" >
                  <div :style="imageStyle(35,post.replied_post.userProfile)"  @click.stop="viewUser(post.replied_post)"
                  class="d-inline-block" >

                  </div>
             </div>
             <div class="col-10 py-0 my-0 px-0 text-left">
                 <span style="font-size:12px;font-family:HeaderText; " class="d-block" @click.stop="viewUser(post.replied_post)" ><b>{{ post.replied_post.username }}</b></span>
              <span style="font-size:11px; color: #4d4d4d;" v-html="post.replied_post.content"></span>


             </div>
             </div>
             
                      
            </div>
       </div>


                  <div class="py-0 pb-1 px-2 col-12 my-0" >

             <div style="width:100%;" v-if="post.attachment_type == 'image'" class="px-lg-4">
                 <image-viewer :imageArray="post.image"></image-viewer>
             </div>

              <div style="width:100%;" v-if="post.attachment_type == 'video'" class="px-lg-4">
                 <video-player :videoUrl="'/videos/' + post.video.video_name + '.' + post.video.video_extension" :backgroundColor="post.video.background_color"
                  :backgroundImg="'/videos/previewImage/'+ post.video.preview_image_url" :playerId="post.post_id"></video-player>
             </div>

               <div style="width:100%;" v-if="post.attachment_type == 'code'" class="px-lg-4">
                 <code-box :codeContent="post.code.content" :filename="post.code.name" :codeLanguage="post.code.language_type" :codeViewerType="viewerType"></code-box>
             </div>

               <div style="width:100%;" v-if="post.attachment_type == 'link'"  class="px-lg-4">
                  <link-view :urlInfo="post.link" ></link-view>
             </div>
                  
                </div>

        
             <div class="py-0 px-2 col-12 my-0" >
                   <div class="row">
                    <div class="col-4 my-0 py-0 text-center">
                     <v-btn class="d-inline-block" icon  @click.stop="likePost(post)">
                        <v-icon color="#3E8893" v-if="post.post_liked">mdi-heart</v-icon>
                        <v-icon color="#3E8893" v-else>mdi-heart-outline</v-icon>
                        
                        </v-btn>
                         <span style="font-size:10px; color:#a6a6a6;">{{post.likes}}</span>
                      
                    </div>
                     
                     <div class="col-4 my-0 py-0 text-center">
                     <v-btn class="d-inline-block" icon @click.stop="library(post)">
                        <v-icon  color="#3E8893" v-if="post.post_pulled">mdi-source-pull </v-icon>
                        <v-icon color="#a6a6a6" v-else>mdi-source-pull </v-icon>
                        
                        </v-btn>
                         <span style="font-size:9px; color:#a6a6a6;">{{post.pulls}}</span>
                    </div>
                     <div class="col-4 my-0 py-0 text-center">
                      <v-btn class="d-inline-block" icon @click="replyComment(post)">
                        <v-icon color="#a6a6a6">mdi-reply</v-icon>
                        </v-btn>
                    </div>
                   </div>
                </div>
        </div>
     </div>
   


  
   

 
     </div>
</template>
<script>
export default {
   props:['CommentArray'],
     data () {
      return {
        model: 0,
         viewerType:'homeViewer',
        myhtml:'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam atque quod voluptatum dolorum dicta tempore,</p>',
        slidedots: [0,1,2]
      }
    },
    methods:{
       formatDate:function(date){
       let Dateformat = moment(date);

        return  Dateformat.format('MMM D,YYYY')
    },
    formatTime:function(date){
       let Dateformat = moment(date);

        return  Dateformat.format('H:mm a');
    },
       imageStyle:function(dimension,post){
      

      if(post.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = post.image_name + '.' + post.image_extension;
          styleString += 'background-color:'+ post.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
      }

      

  },
   viewUser: function(postData){
       this.$root.pageloader = true;
       window.location = '/view-profile#/profile/activities/'+ postData.username;
    },
       replyComment: function(post){
           this.$root.commentIsReply = true;
           this.$root.repliedPostId = post.PostId;
            this.$root.commentUsername = post.username;
            this.$root.commentPostId = this.$route.params.postId;
           this.$router.push({ path: '/post/' + this.$route.params.username + '/' +this.$route.params.postId +  '/comment/post' }); 
       },
       library: function(post){
            
              if(post.post_pulled){
                 return;
               }
            
            this.$root.loadShelves();
            this.$root.pullingPostId = post.PostId;
            this.$root.scrollHome = 'hidden';
            this.$root.showShelves = true;
            this.$root.postArrayType = this.$root.postComments;
            
        },
       likePost:function(postData){
          if(postData.post_liked){
          return;
        }

        this.CommentArray.map((post)=> {
            if(post.PostId == postData.PostId){
                post.post_liked = true;
              post.likes = post.likes + 1;
            }
         });

          axios.post('/save-liked-post',{
            "post_id": postData.PostId
          })
      .then(response => {
      
      if (response.status == 200) {
        
          
        
        
        
        
     }
       
     
     })
     .catch(error => {
    
     }) 
       }
    }
}
</script>
<style>
.detectLink a{
   color: #3E8893;
}
</style>