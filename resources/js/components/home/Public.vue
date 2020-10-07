<template>
 
       
   
    
          <div class="col-md-8 offset-md-2  col-lg-4 offset-lg-4 my-0 py-1 "   :id="'post'+ source.id" @click.stop="viewPost(source,'fromcomment')" 
    style="cursor:pointer;" >
    
        <div class="row ml-lg-1" style="background-color:white; border-bottom:1px solid #cccccc;" >
           <div class="col-12 py-0 d-flex "  >
                <div>
                 <div :style="imageStyle(43,source.userProfile)"  @click.stop="viewUser(source)"
                  class="d-inline-block" >

                  </div>
               </div>
            
                <div class="d-inline-block ml-2 mt-1">
                 <span style="font-size:13px;font-family:HeaderText;" class="d-block " @click.stop="viewUser(source)"><b>{{ source.username }}</b></span>
                   <span style="font-size:11px; color:grey;" class="d-block"><b>{{formatDate(source.created_at)}} at {{formatTime(source.created_at)}}</b></span>
                   
                </div>

        </div>

                <div class="py-1 px-2 col-12 my-0 ">
                   <span style="font-size:13px; color: #333333;" class="detectLink" v-html="source.content"></span>
                </div>


           <!-- commented post -->
      

          <div class="py-0 pb-1 px-2 col-12 my-0" >

             <div style="width:100%;" v-if="source.attachment_type == 'image'" class="px-lg-4">
                 <image-viewer :imageArray="source.image"></image-viewer>
             </div>

              <div style="width:100%;" class="px-lg-4">

            <main-video v-if="source.attachment_type == 'video'" :videoUrl="'/videos/' + source.video.video_name + '.mpd'" :backgroundColor="source.video.background_color" style="height:100%; width:100%;"
               :backgroundImg="'/videos/previewImage/'+ source.video.preview_image_url" :playerId="'small' + source.id" > </main-video>
               
             </div>

               <div style="width:100%;" v-if="source.attachment_type == 'code'" class="px-lg-5" >
                 <code-box :codeContent="source.code.content" :filename="source.code.name" :codeLanguage="source.code.language_type" :codeViewerType="viewerType"></code-box>
             </div>

              <div style="width:100%;" v-if="source.attachment_type == 'link'"  class="px-lg-5">
                  <link-view :urlInfo="source.link" ></link-view>
             </div>
                  
                </div>

                 <div class="col-12 py-1 px-3 mb-2" v-if="source.is_comment == 'true'">

        <div style="background:#b8dbe0; border:1px solid #b8dbe0; border-radius:10px;" class="px-2  pt-2 pb-2 my-0">
             <div class="row py-0 my-0 px-0 mx-0">
              <div class="col-2 py-0 my-0 px-0 text-center">
              
                  
                   <!-- the shortened code -->
                   <div :style="imageStyle(38,source.commented_post.userProfile)"   @click.stop="viewUser(source.commented_post)"
                  class="d-inline-block" >
                  </div>

             </div>
             <div class="col-10 py-0 my-0 px-0 text-left">
                 <span style="font-size:12px;font-family:HeaderText "  @click.stop="viewUser(source.commented_post)" class="d-block"><b>{{source.commented_post.username}}</b></span>
              <span style="font-size:12px; color: #4d4d4d;" v-html="source.commented_post.content"></span>

               

             </div>
             </div>
             
                      
            </div>

       </div>
         

             <div class="py-0 px-2 col-12 my-0">
                   <div class="row">
                    <div class="col-3 my-0 py-0 text-center">
                      <v-btn class="d-inline-block" icon  @click.stop="likePost(source)">
                        <v-icon color="#3E8893" v-if="source.post_liked">mdi-heart</v-icon>
                        <v-icon color="#3E8893" v-else>mdi-heart-outline</v-icon>
                        
                        </v-btn>
                         <span style="font-size:10px; color:#a6a6a6;">{{source.likes}}</span>
                      
                    </div>
                     <div class="col-3 my-0 py-0 text-center">

                     <v-btn class="d-inline-block" icon @click.stop="viewPost(source,'fromcomment')">
                        <v-icon color="#a6a6a6">mdi-comment-text-outline</v-icon>
                        
                        </v-btn>
                         <span style="font-size:10px; color:#a6a6a6;">{{source.comments}}</span>
                    </div>
                     <div class="col-3 my-0 py-0 text-center">
                     <v-btn class="d-inline-block" icon @click.stop="library(source)">
                        <v-icon  color="#3E8893" v-if="source.post_pulled">mdi-source-pull </v-icon>
                        <v-icon color="#a6a6a6" v-else>mdi-source-pull </v-icon>
                        
                        </v-btn>
                         <span style="font-size:10px; color:#a6a6a6;">{{source.pulls}}</span>
                    </div>
                     <div class="col-3 my-0 py-0 text-center">
                      <v-btn class="d-inline-block" icon @click.stop="share(source)">
                        <v-icon color="#a6a6a6">mdi-share-variant</v-icon>
                        </v-btn>
                    </div>
                   </div>
                </div>
        </div>
     </div>

   

     
   

       
    
    
   
        

     
</template>
<script>


export default {
     data () {
      return {
         videopath:'videos/sample1.mp4',
         VideoBackground:'#c5c5c5',
         VideoImgBackground:'/videos/videoshow.jpg',
         CodeFileName:'sample.html',
         codeContent:'<p>Lets build it!</p>',
         allChannel:[],
         codeLanguage:'HTML',
         viewerType:'homeViewer',
      }
    },
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
    mounted(){
      
      
      
    },
    methods:{
      share:function(post){

         this.$root.shareText  = 'Checkout this post on CitonHub.';
         this.$root.shareLink = 'https://www.citonhub.com/link/post/' + post.PostId + '/' + this.$root.username;
      this.$root.showShare = true;
    },
    formatDate:function(date){
       let Dateformat = moment(date);

        return  Dateformat.format('MMM D,YYYY')
    },
    formatTime:function(date){
       let Dateformat = moment(date);

        return  Dateformat.format('H:mm a');
    },
    viewUser: function(postData){
       this.$root.pageloader = true;
        window.location = '/view-profile#/profile/channels/'+ postData.username;
    },
       likePost: function(postData){
         this.$root.checkIfUserIsLoggedIn('home');
        if(postData.post_liked){
          return;
        }

           this.$root.postData.map((post)=> {
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
       viewPost: function(postData,fromcomment){
             this.$root.checkIfUserIsLoggedIn('home');

             this.$root.postArray = this.$root.postData.filter((post)=>{
                return post.PostId == postData.PostId;
             });

             if(postData.attachment_type == 'image'){
                if(fromcomment != 'fromcomment'){
                   return;
                }
             }

             this.$root.fromHome = true; 
                
              if(postData.is_comment == 'true'){

      this.$router.push({ path: '/post/comment/' + postData.username + '/' + postData.PostId + '/user'});
 }else{
   
   this.$router.push({ path: '/post/' + postData.username + '/' + postData.PostId + '/user'});

 }
           
        },
        showLibrary: function(){
         this.$router.push({ path: '/library' });
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
        library: function(post){
             this.$root.checkIfUserIsLoggedIn('home');
              if(post.post_pulled){
                 return;
               }
            
            this.$root.loadShelves();
            this.$root.pullingPostId = post.PostId;
            this.$root.scrollHome = 'hidden';
            this.$root.showShelves = true;
            this.$root.postArrayType = this.$root.postData;
            
        },
       
      
       
    }
}
</script>
<style>
.detectLink a{
   color: #3E8893;
}
</style>