<template>
     <div style="overflow-y:hidden;">

         <div v-if="this.$root.showCodeEditor">
            <code-editor></code-editor>
      </div>

      <div v-if="this.$root.fullImageViewer">
            <full-image-viewer></full-image-viewer>
      </div>

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
        <div class="row" style="background-color:white; border-bottom:1px solid #cccccc;">
           <div class="col-12 py-0 d-flex ">
             <div>
                <div :style="imageStyle(43,post.userProfile)"    @click.stop="viewUser(post)"
                  class="d-inline-block" >

                  </div>
             </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span style="font-size:13px;" class="d-block"   @click.stop="viewUser(post)" ><b>{{ post.username }}</b></span>
                     <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(post.created_at)}} at {{formatTime(post.created_at)}}</b></span>
                   
                </div>
        </div>
         <div class="py-1 px-2 col-12 my-0">
                   <span style="font-size:13px; color: #333333;" class="detectLink" v-html="post.content"></span>
                </div>

                


          <div class="py-0 pb-1 px-2 col-12 my-0" >

             <div style="width:100%;" v-if="post.attachment_type == 'image'" class="px-lg-4">
                 <image-viewer :imageArray="post.image"></image-viewer>
             </div>

              <div style="width:100%;" v-if="post.attachment_type == 'video'" class="px-lg-4">
                 <main-video v-if="post.attachment_type == 'video'" :videoUrl="'/videos/' + post.video.video_name + '.mpd'" :backgroundColor="post.video.background_color" style="height:100%; width:100%;"
               :backgroundImg="'/videos/previewImage/'+ post.video.preview_image_url" :playerId="'small' + post.id" > </main-video>
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
                      <v-btn class="d-inline-block" icon >
                        <v-icon color="#3E8893">mdi-heart-outline</v-icon>
                        
                        </v-btn>
                         <span style="font-size:9px; color:#a6a6a6;">293</span>
                      
                    </div>
                     <div class="col-3 my-0 py-0 text-center">

                     <v-btn class="d-inline-block" icon >
                        <v-icon color="#a6a6a6">mdi-comment-text-outline</v-icon>
                        
                        </v-btn>
                         <span style="font-size:9px; color:#a6a6a6;">56</span>
                    </div>
                     <div class="col-3 my-0 py-0 text-center">
                     <v-btn class="d-inline-block" icon @click="library">
                        <v-icon color="#a6a6a6">mdi-source-pull </v-icon>
                        
                        </v-btn>
                         <span style="font-size:9px; color:#a6a6a6;">231</span>
                    </div>
                     <div class="col-3 my-0 py-0 text-center">
                      <v-btn class="d-inline-block" icon @click.stop="share(post)">
                        <v-icon color="#a6a6a6">mdi-share-variant</v-icon>
                        </v-btn>
                    </div>
                   </div>
                </div>
        </div>
     </div>

        <post-comments :CommentArray="postComments"></post-comments>

         <div class="col-12 py-5 my-5" style="padding-top:100px !important;">
             
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
                <v-icon color="#ffffff">mdi-comment-text-outline</v-icon>
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
                <v-icon color="#ffffff">mdi-comment-text-outline</v-icon>
              </v-btn>
     </span>

       </div>
     </div>
</template>
<script>


export default {
    data(){
        return{
          
        myhtml:'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam atque quod voluptatum dolorum dicta tempore,</p>',
         post: this.$root.filterPost(),
         viewerType:'homeViewer',
        
         postComments:[]
        }
    },
    components: {
   
  },
   mounted(){
      this.$root.showTabs=true;
       this.$root.showHeader = false;
        this.$root.checkIfUserIsLoggedIn();
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
        window.location = '/view-profile#/profile/channels/'+ postData.username;
    },
        showHome: function(){
      this.$router.push({ path: '/' });
   },
   library: function(){
        this.$router.push({ path: '/library' });
        },
      share:function(post){

         this.$root.shareText  = 'Checkout this post on CitonHub.';
         this.$root.shareLink = 'https://www.citonhub.com/link/post/' + post.PostId + '/' + this.$root.username;
      this.$root.showShare = true;
    },
    goBack() {
         
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
      getPost:function(){
        if(this.$root.postData.length != 0){
            
            
          var post = this.$root.postData.filter((post) => {
             return post.PostId == this.$root.currentPostId;
          });
          this.post = post[0];

        }else{
           
           axios.get('/fetch-post/' + this.$root.currentPostId )
      .then(response => {
      
      if (response.status == 200) {
        
        this.post = response.data[0];
       
     }
       
     
     })
     .catch(error => {
    
     }) 

        }
      },
      getPostComments:function(){
         axios.get('/post-comments/' + this.$root.currentPostId)
      .then(response => {
      
      if (response.status == 200) {
        
        this.postComments = response.data;
       
      
     }
       
     
     })
     .catch(error => {
    
     }) 
      },
      makeComment:function(username,postId){
           this.$root.commentUsername = this.$route.params.username;
            this.$root.commentPostId = this.$route.params.postId;
         this.$router.push({ path: '/post/' + this.$route.params.username + '/' +this.$route.params.postId + '/comment' });
      }
    },
   
}
</script>
<style>
.detectLink a{
   color: #3E8893;
}
</style>