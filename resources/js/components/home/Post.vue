<template>
     <div style="overflow-y:hidden;">

         <div v-if="this.$root.showCodeEditor">
            <code-viewer></code-viewer>
      </div>

      <div v-if="this.$root.fullImageViewer">
            <full-image-viewer></full-image-viewer>
      </div>

       <library-shelves v-if="this.$root.showShelves"></library-shelves>

       <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 px-0 my-0" style="position:absolute; background:white; height:100%; overflow-y:auto; overflow-x:hidden; ">
         <div class="row my-0 py-0 px-2">


        <div class="col-12 py-0 my-0 fixed-top" style="position:sticky; background:white;">
       <div class="row py-1 my-0 px-1" >
         <div class="col-4 py-0 my-0 text-left" style="border-bottom:2px solid #4495a2;" >
            <v-btn icon color="#4495a2" @click="showHome"><v-icon>mdi-arrow-left</v-icon></v-btn>
         </div>
         <div class="col-4 py-0 my-0 d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            <span  style="font-size:12px; color:#4495a2; font-weight:bolder;font-family:HeaderText;">Post</span>
         </div>
         <div class="col-4 py-0 my-0  d-flex"  style="border-bottom:2px solid #4495a2; align-items:center; justify-content:center;" >
            
         </div>
       

           
      </div>
     </div>

       <div class="py-1 my-0" style="position:absolute;top:7%; height:93%;width:100%; left:0; overflow-y:auto; overflow-x:hidden; ">
           
          
           <div class="col-12 py-1" >
        <div class="row" style="background-color:white; border-bottom:1px solid #cccccc;" v-if="post.length != 0">
           <div class="col-12 py-0 d-flex " >
             <div>
                   <div  v-if="post.userProfile != undefined" :style="imageStyle(43,post.userProfile)"  @click.stop="viewUser(post)"
                  class="d-inline-block" >

                  </div>
             </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span style="font-size:13px;" class="d-block" @click.stop="viewUser(post)" ><b>{{ post.username }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(post.created_at)}} at {{formatTime(post.created_at)}}</b></span>
                   
                </div>
        </div>
         <div class="py-1 px-2 col-12 my-0">
                   <span style="font-size:13px; color: #333333;" v-html="post.content"></span>
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
            <div class="py-0 px-2 col-12 my-0">
                   <div class="row">
                    <div class="col-3 my-0 py-0 text-center">
                      <v-btn class="d-inline-block" icon  @click.stop="likePost(post)">
                        <v-icon color="#3E8893" v-if="post.post_liked">mdi-heart</v-icon>
                        <v-icon color="#3E8893" v-else>mdi-heart-outline</v-icon>
                        
                        </v-btn>
                         <span style="font-size:10px; color:#a6a6a6;">{{post.likes}}</span>
                      
                    </div>
                     <div class="col-3 my-0 py-0 text-center">

                     <v-btn class="d-inline-block" icon   @click.stop="makeComment">
                        <v-icon color="#a6a6a6">mdi-comment-text-outline</v-icon>
                        
                        </v-btn>
                         <span style="font-size:10px; color:#a6a6a6;">{{post.comments}}</span>
                    </div>
                     <div class="col-3 my-0 py-0 text-center">
                    <v-btn class="d-inline-block" icon @click.stop="library(post)">
                        <v-icon  color="#3E8893" v-if="post.post_pulled">mdi-source-pull </v-icon>
                        <v-icon color="#a6a6a6" v-else>mdi-source-pull </v-icon>
                        
                        </v-btn>
                         <span style="font-size:10px; color:#a6a6a6;">{{post.pulls}}</span>
                    </div>
                     <div class="col-3 my-0 py-0 text-center">
                      <v-btn class="d-inline-block" icon @click="share(post)">
                        <v-icon color="#a6a6a6">mdi-share-variant</v-icon>
                        </v-btn>
                    </div>
                   </div>
                </div>
        </div>

         <div class="row py-0 my-0 px-1" v-else>
          <div  class="col-6 py-0 my-0 px-0">
          <v-skeleton-loader
        type="list-item-avatar-two-line"
          ></v-skeleton-loader>
          </div>       
     <div class="col-12 py-1 my-0">
       <v-skeleton-loader
      class="mx-auto "
        height="100px"
      type="image"
    ></v-skeleton-loader>
     </div>
         </div>
     </div>

        <post-comments :CommentArray="postComments"></post-comments>

         <div class="col-12 py-5 my-5" style="padding-top:100px !important;">
             
         </div>
              
        </div>

       
         </div>



      

       </div>

       
     </div>
</template>
<script>


export default {
    data(){
        return{
          
        myhtml:'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam atque quod voluptatum dolorum dicta tempore,</p>',
         post: [],
         viewerType:'homeViewer',
         postId : this.$route.params.postId,
         username: this.$route.params.username,
         postComments:this.$root.postComments,
          postArray: this.$root.postArray
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs= true;
       this.$root.showHeader = false;
       this.$root.postComments = [];
      this.getPost();
      this.getPostComments();
      
       
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
        share:function(post){

         this.$root.shareText  = 'Checkout this post on CitonHub.';
         this.$root.shareLink = 'https://www.citonhub.com/link/post/' + post.PostId + '/' + this.$root.username;
      this.$root.showShare = true;
    },
    viewUser: function(postData){
       this.$root.pageloader = true;
        window.location = '/view-profile#/profile/activities/'+ postData.username;
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
        showHome: function(){
         this.$root.fromView = true;
         this.$root.PostRefId = this.post.id;
          
         

         
          if(this.$root.fromHome){

             this.$router.push('/');
          }else{
             
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');

             
          }

      
   },
   library: function(post){
                this.$root.checkIfUserIsLoggedIn('home');
              if(post.post_pulled){
                 return;
               }
            
            this.$root.loadShelves();
            this.$root.pullingPostId = post.PostId;
            this.$root.scrollHome = 'hidden';
            this.$root.showShelves = true;
            this.$root.postArrayType =  this.$root.postArray;
            
        },
  
    goBack() {
         this.$root.croppedImage = this.$refs.cropper.image;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
      getPost:function(){
        if(this.$root.postArray.length != 0){
            
            
         
          this.post = this.$root.postArray[0];
         
        }else{
           
           axios.get('/fetch-post/' + this.$route.params.postId )
      .then(response => {
      
      if (response.status == 200) {
        
        this.post = response.data[0];
        this.postArray = response.data;
        this.$root.postArray = response.data;
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        }
      },
      getPostComments:function(){

         if(this.$root.postComments.length != 0){
             
               this.postComments = this.$root.postComments;

         }else{

        axios.get('/post-comments/' + this.$route.params.postId )
      .then(response => {
      
      if (response.status == 200) {
        
        this.postComments = response.data;
        this.$root.postComments = response.data;

        
       
      
     }
       
     
     })
     .catch(error => {
    
     }) 
         }
         
      },
      makeComment:function(username,postId){
            this.$root.checkIfUserIsLoggedIn('home');
           this.$root.commentUsername = this.$route.params.username;
            this.$root.commentPostId = this.$route.params.postId;
         this.$router.push({ path: '/post/' + this.$route.params.username + '/' +this.$route.params.postId + '/comment/post' });
      },
       likePost: function(postData){
            this.$root.checkIfUserIsLoggedIn('home');
        if(postData.post_liked){
          return;
        }

        this.postArray.map((post)=> {
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

       },
    },
   
}
</script>
<style>
.coin{
  font-size: 10px;
  font-weight: bolder;
  color: white;
}
</style>