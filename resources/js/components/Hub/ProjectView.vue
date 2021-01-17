<template>
 <div class="row px-0" style="background:whitesmoke;">
      <!-- top bar -->

      <div class="col-lg-6 offset-lg-3 py-1 py-md-2 fixed-top d-flex flex-row px-md-2 px-1"
       style="position:sticky;background:white;z-index:99999999;border-bottom:1px solid #c5c5c5;top:0%;">
       
        <div class="col-6 py-0 px-0 d-flex flew-row" >
           <template v-if="this.$root.selectedPost.user">

              <div  @click.stop="goToProfile(that.$root.selectedPost.user.username)"  class="mr-2" :style="imageStyleUser(35,this.$root.selectedPost.user)"
            >
         </div> 
     

           </template>
          
       <div class="d-flex " style="align-items:center;">

             <template v-if="this.$root.selectedPost.user">

           <span style="font-size:14px; font-family:MediumFont;cursor:pointer;" @click.stop="goToProfile(that.$root.selectedPost.user.username)" >
              {{this.$root.selectedPost.user.username}}   <img :src="getUserLevel(that.$root.selectedPost.user.points)" class="mx-1" height="22px">
            </span>
             </template>
               
            
        </div>
        </div>

  
        <div class="col-6 py-0 px-0 text-right">

            <v-btn icon @click.stop="goBack" >
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>

        </div>
       
         
      </div>

      
      <!-- ends -->
       
       <div class="px-2 col-12 py-0">

          <div class="col-lg-6 offset-lg-3 py-2 px-0 mt-1 text-center">
        <span class="d-md-block d-none" style="font-size:17px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</span>
        <span class="d-md-none d-block" style="font-size:14px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</span>
      </div>

      <!-- pages loader -->

      <div  class="col-lg-6 offset-lg-3 py-2 px-0 pt-1 " style="height:380px;">



        <template v-if="loadingPost">

            <div  class="col-12 d-flex " style="position:absolute; height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

         </template>

         <template v-if="this.$root.selectedPost.link">

              <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :src="this.$root.selectedPost.project_url" 
   class="col-12 px-0 py-0" style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  ></iframe>

         </template>

         


         <template v-else> 

            <template v-if="pageContent == '' && loadingCode">

               <div  class="col-12 d-flex " style="position:absolute; height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

           <template v-if="pageContent != '' && this.$root.selectedPost.project.is_web">

            <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :srcdoc="pageContent" 
   class="col-12  px-0 py-0" style="position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  ></iframe>

           </template>

           <template v-if="pageContent != '' && !this.$root.selectedPost.project.is_web">

             <!-- for non-web content -->
   <textarea  readonly class="col-12" style=" font-size:14px;position:absolute; height:100%;  background:white;border:1px solid #c5c5c5; border-radius:7px;"  >
       
    </textarea>

     <!-- ends -->
       
           </template>

         </template>

     

  
     <v-btn icon color="#ffffff" @click="showFullLoader = true" style="border-radius:0px; border-top-right-radius:7px;position:absolute;background: rgba(27, 27, 30, 0.4); right:0%; z-index:879;" 
           class="d-inline-block  "><v-icon>las la-expand</v-icon></v-btn>
      </div>
      

      <!-- ends -->
      

      <!-- view source -->
         <div class="col-lg-6 offset-lg-3 px-2 mt-2 ">
            <div class="row">
              <div class="col-6 px-0 py-1 text-left">

                  <v-btn icon @click="pinPost">
                      <v-icon style="font-size:25px;color:#3C87CD;" v-if="this.$root.selectedPost.isPinned == 1">lar la-thumbtack</v-icon>
                      <v-icon style="font-size:25px;" v-else>las la-thumbtack</v-icon>
                    </v-btn>
            <span style="font-size:12px;color:grey;">{{ this.$root.selectedPost.pinned }}</span>

          <v-btn icon @click="likePost" >
                       <i :class="this.$root.selectedPost.isLiked == 1 ? 'las la-heart' : 'lar la-heart'" :style="this.$root.selectedPost.isLiked ? 'font-size:25px; color: #ff6666;' : 'font-size: 25px;'" ></i>
                    </v-btn>
             <span style="font-size:12px;color:grey;">{{ this.$root.selectedPost.likes }}</span>


              </div>

              <div class="col-6 px-0 py-0 text-right">
        <v-btn v-if="this.$root.selectedPost.project" @click="goToProject(this.$root.selectedPost.project)" 
        color="#3C87CD" outlined rounded  small style="text-transform:none;font-size:12px;font-family:MediumFont;">View source <v-icon class="ml-1">mdi-launch mdi-18px</v-icon></v-btn>
              </div>

            </div>
       
      </div>
      <!-- ends -->


       <!-- descriptions -->
         <div class="col-lg-6 offset-lg-3 px-1  text-center">
          <div style="font-size:14px;font-family:BodyFont;">
             {{ this.$root.selectedPost.description }}
          </div>
      </div>
      <!-- ends -->



       <!-- comments -->
         <div class="col-lg-6 offset-lg-3 px-1 mt-1 " >
         <div style="font-size:15px; font-family:MediumFont;">Comments</div>
      </div>
      <!-- ends -->

       </div>

       <!-- comment list -->
         <div class="col-lg-6 offset-lg-3 px-0 px-md-3 commentScroller scroller" style="border-top:1px solid #c5c5c5;background:#E1F0FC;
         font-family:BodyFont;min-height:250px;max-height:300px;overflow-y:auto;overflow-x:hidden;">
         <div class="row">
           

            <template v-if="loadingPostComments">
              <div class="d-flex col-12" style="position:absolute; overflow-y:hidden; height:90%;left:0%;align-items:center; justify-content:center;">

                  <v-progress-circular color="#3C87CD" indeterminate width="3" size="25" ></v-progress-circular>

              </div>

            </template>

            <template v-else> 

                
                <template v-if="comments.length == 0">

                   
                    <div class="d-flex col-12" style="position:absolute; overflow-y:hidden; height:90%;left:0%;align-items:center; justify-content:center;">

                <span style="font-size:13px;font-family:BodyFont;">No comment yet, be the first to commment</span>

              </div>


                </template>

                <template v-else>

                   <div class="col-12 py-2 px-1"  v-for="(comment,index) in comments" :key="index" >

                 
           
            <div elevation-1 class="col-11 py-0 " v-if="comment.username != that.$root.username">
           <div class="row">
             <div class="col-lg-9 col-md-10 py-1  d-flex flex-row">
                  <div  :style="imageStyleUser(30,comment)" @click.stop="goToProfile(comment.username)"
                      ></div>

                  <v-card elevation-1 class="py-1 px-2 ml-2" flat style="max-width:80%;  border:1px solid transparent;  min-width:190px;background:#ffffff; border-radius:7px; border-bottom-left-radius:0px;">
                   
                    <div class="text-left my-0 py-0 d-flex flex-row">
                         <span style="font-size:13px;font-weight:bold; " @click.stop="goToProfile(comment.username)" >{{comment.username}}</span>

                          <span style="font-size:11px; " class="ml-auto">{{checkDatereal(comment.created_at)}}</span> 

                  </div>
                    
                      <span style="font-size:13px;" v-html="comment.content"></span>
                      
                  </v-card> 
             </div>
             <div style="padding-left:45px;align-items:center;" class="col-12 py-0 d-flex">
                <span class="d-inline-block mx-1" >
                
                 <v-btn icon class="d-inline-block"  v-if="comment.liked_by_user">
                   <i class="las la-heart" style="font-size:20px;color:#ff6666;" ></i> </v-btn>

                 <v-btn icon class="d-inline-block"  v-else @click="likeComment(comment)">
                    <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn> 
               
                <span style="font-family:BodyFont; font-size:12px; color:#000000;">{{comment.likes}}</span>
                </span>
             </div>
           </div>
        </div>

            <div elevation-1 class="col-11 py-0 offset-1" v-if="comment.username == that.$root.username">
           <div class="row">
             <div class="col-lg-9 col-md-10 py-1 offset-lg-3 offset-md-2 d-flex flex-row-reverse">
                  

                  <v-card elevation-1 flat class="py-1 px-2 mr-2" style="max-width:80%;  border:1px solid transparent; min-width:190px;background:#3C87CD; border-radius:7px; border-bottom-right-radius:0px;">
                      <span style="color:white;font-size:13px;" v-html="comment.content"></span>
                       
                  <!-- time -->
                  <div class="text-right">
                         <span style="color:white;font-size:11px; ">{{checkDatereal(comment.created_at)}}</span>
                  </div>
                  <!-- ends -->
                  </v-card> 

                 
             </div>
             <div  class="col-12 text-right py-0">
                <span class="d-inline-block mx-1" >
                  <v-btn icon class="d-inline-block"  v-if="comment.liked_by_user">
                   <i class="las la-heart" style="font-size:20px;color:#ff6666;" ></i> </v-btn>

                 <v-btn icon class="d-inline-block"  v-else @click="likeComment(comment)">
                    <i class="lar la-heart" style="font-size:20px;color:#3C87CD;" ></i> </v-btn>  
                <span style="font-family:BodyFont; font-size:12px; color:#000000;">{{comment.likes}}</span>
                </span>
             </div>
           </div>
        </div>


        
                </div>

                  <div class="my-2 col-12">

                </div>

                </template>


            
            </template>
          
          

         </div>
        </div>

      

     
      <!-- ends -->

        <!-- comment textarea -->
         <div class="col-lg-6 offset-lg-3 px-2 py-1 pb-1" style="z-index:999999999999;font-family:BodyFont;">
         
          <div class="row px-md-3 py-0">
           <div class="col-12  py-0 my-0 d-flex px-md-2 px-2 flex-row" style="align-items:center; justify-content:center;">
            
                  <textarea ref="textBottom"  style="font-size:13px;"  placeholder="Please be nice!"    v-model="commentValue"></textarea>

                  <v-btn icon class="mx-md-1" @click="postComment" @keyup.enter="postComment" :loading="sendingComment" ><v-icon>las la-send</v-icon> </v-btn>
           </div>
            
          </div>
        </div>

        
      <!-- ends  -->

       <!-- full loader -->

       <div v-if="showFullLoader" style="position:fixed;z-index:999999999999999; height:100%;width:100%; top:0; left:0;background:white;">

           <div  class="d-flex flex-column" style="position:absolute;width:100%;height:100%;">

               
        
        <div style="height:100%;" class="col-12 px-0 py-0">

           <div class="col-12 px-1 py-1 pt-0  d-flex flex-row" style="background:white; border-bottom:2px solid #c5c5c5;align-items:center;">
            <div class=" mr-1 col-2 py-0 px-0">
              <v-btn icon @click="showFullLoader = false">
                      <v-icon>mdi mdi-close</v-icon>
                    </v-btn>
            </div>
          
             <div class="col-8 py-0 text-center">
             <span style="font-size:14px; font-family:MediumFont;">{{ this.$root.selectedPost.title }}</span>
          </div>

        </div>


           <template v-if="this.$root.selectedPost.link">

              <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :src="this.$root.selectedPost.project_url" 
   class="col-12 px-0 py-0" style=" height:100%;  background:white;border:1px solid #c5c5c5; "  ></iframe>

         </template>


         <template v-else> 

            <template v-if="pageContent == '' && loadingCode">

               <div  class="col-12 d-flex " style=" height:100%; align-items:center; justify-content:center;  background:white;border:1px solid #c5c5c5; border-radius:7px;">
               <v-progress-circular color="#3C87CD" indeterminate width="3" size="28" ></v-progress-circular>
               </div>

            </template>

           <template v-if="pageContent != '' && this.$root.selectedPost.project.is_web">

            <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" 
         :srcdoc="pageContent" 
   class="col-12  px-0 py-0" style=" height:100%;  background:white;border:1px solid #c5c5c5; "  ></iframe>

           </template>

           <template v-if="pageContent != '' && !this.$root.selectedPost.project.is_web">

             <!-- for non-web content -->
   <textarea  readonly class="col-12" style=" font-size:14px; height:100%;  background:white;border:1px solid #c5c5c5; "  >
       
    </textarea>

     <!-- ends -->
       
           </template>

         </template>

        </div>
             
    

           </div>

      </div>

      <!-- ends -->

 </div>
</template>
<script>
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'


export default {
  data () {
    return {
      post: '',
      is_reply: false,
      commentValue: '',
      commentRules: [
        v => !!v || 'Body is required',
        v => /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character'
      ],
      id: this.$root.currentPost,
      loadingPost:false,
      that: this,
       pageContent:'',
       loadingCode: false,
      showFullLoader:false,
       selectedLangId:'',
       comments:[],
       loadingPostComments:false,
       sendingComment:false,
    }
  },

  mounted () {
    this.$root.selectedPost = [];
       this.fetchPost();
       this.$root.projectViewComponent = this;
        this.$root.autoOpenPost = false;
  },
  methods:{
      goBack() {
        // this.viewProjectModal = false;
        this.$root.showViewPost = false;
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
     goToProfile:function(username){
        this.$root.selectedUsername = username;
         this.$router.push({ path:'/profile-view/' + username})
      },
     fetchComments:function(postId){

        this.loadingPostComments = true;
         axios.get( '/comments/' + postId)
      .then(response => {
      
      if (response.status == 200) {
        
           
         this.comments = response.data.data;

       
        
        this.loadingPostComments = false;
     }
       
     
     })
     .catch(error => {
      this.loadingPostComments = false;
     }) 
       
        
     },
    goToProject:function(project){

       this.$router.push({ path: '/board/projects/panel/' + project.project_slug });

    },
     imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },
      likeComment:function(comment){
          
          if(comment.liked_by_user){
          return;
        }

         axios.post( '/like-hub-post-comment',{
            "comment_id": comment.id
          })
      .then(response => {
      
      if (response.status == 200) {
        
         this.comments.map((eachcomment)=> {
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
      
   checkDatereal: function(date){

            var realTimeHour = moment(date).add(1,'hours');

            var aWeekAgo = moment().subtract(7,'days');

            if (moment(realTimeHour) >= aWeekAgo) {
              return moment(realTimeHour).format("h:mm a");
            }else{
               return moment(realTimeHour).format("h:mm a");
            }
      },
      scrollToTop:function(){


        let container = document.querySelector('.commentScroller');

         container.scrollTo(0,0)

      },

     postComment () {
      if (this.commentValue != '') {

         this.sendingComment = true;

          let formData = new FormData();
        formData.append('post_id', this.$root.selectedPost.id);
        formData.append('comment', this.commentValue);
        formData.append('is_reply', this.is_reply);

        axios.post('/comment-hub-post', formData)
          .then((response) => {
            if (response.status == 201) {

                
                this.comments.unshift(response.data.data);

                this.scrollToTop();

               this.sendingComment = false;

                 this.commentValue = '';

             this.$root.posts.map((post)=>{
                  if(post.id == this.$root.selectedPost.id){
    
                     post.comments += 1;
    
                  }
           });
              
            }
          })
          .catch(error => {

             this.showAlert('Oops!', 'Something went wrong,please try again','error');
    
            }) 
      } else {
        this.showAlert('Oops!', 'Comment Cannot be empty','error');
      }


     },

     likePost(){

         if(this.$root.selectedPost.isLiked) return;
      let formData = new FormData();
      formData.append('post_id', this.$root.selectedPost.id)

         axios.post('/like-hub-post', formData)
      .then((response) => {
        if (response.status == 204) {
          if (response.data == "liked") {
            this.$root.selectedPost.isLiked = 1
          }
        } else {
          if (response.data == "Post Liked Already") {
            this.showAlert('Oops!', response.data,'error');
          } else if (response.data == "liked") {
            this.$root.selectedPost.isLiked = 1
          }
        }

        this.$root.selectedPost.likes += 1;

         this.$root.posts.map((post)=>{
                  if(post.id == this.$root.selectedPost.id){
    
                     post.likes += 1;
    
                  }
           });

     
      })


     },

     pinPost(){
         if(this.$root.selectedPost.isPinned) return;
        let formData = new FormData();
        formData.append('post_id', this.$root.selectedPost.id)

         axios.post('/pin-hub-post', formData)
      .then((response) => {
        if (response.status == 201) {
          if (response.data == "pinned") {
            this.$root.selectedPost.isPinned = 1
          }
        } else {
          if (response.data == "Post Pinned Already") {
            this.showAlert('Oops!', response.data,'error');
          } else if (response.data == "pinned") {
            this.$root.selectedPost.isPinned = 1
          }
        }

         this.$root.selectedPost.pinned += 1;
      })

     },

     showPage: function(){
          this.pageContent = '';
          this.loadingCode = true;
         
          this.selecetedPanelId = this.$root.selectedPost.project.panel_id;

            if(this.$root.selectedPost.project.is_web){

               this.loadPageContent(this.selecetedPanelId);

            }else{

                     this.runCodeOnSandbox();
            }

        },
         loadPageContent: function(panelId){
         axios.get( '/run-panel/' + panelId)
      .then(response => {

      if (response.status == 200) {

        this.loadingCode = false;
       this.pageContent = response.data;



     }


     })
     .catch(error => {

          this.showAlert('Oops!','Unable to load page content','error');

     })
     },
       showAlert:function(title='',message,type){
       
       if(type == 'info'){

          iziToast.info(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
       timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'success'){
         iziToast.success(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       if(type == 'warning'){

          iziToast.warning(
        { 
       title: title,
       message: message,
        timeout:2000,
       zindex:'9999999999',
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )

       }

       if(type == 'error'){
         iziToast.error(
        { 
       title: title,
       message: message,
       zindex:'9999999999',
        timeout:2000,
       position: 'bottomRight',
        transitionInMobile: 'fadeIn',
      transitionOutMobile: 'fadeOut',
       }
      )
       }

       

    },
     imageStyleUser:function(dimension,data){
      

      if(data.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         
           styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        
         
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5; ";
         let imgLink = data.image_name + '.' + data.image_extension;
         
            styleString += 'background-color:'+ data.background_color + '; background-image:url(/imgs/profile/'  + imgLink  +  ');';
         
         
          return styleString;
      }
     },
    checkResponse:function(token){

        let _this = this;

      
                axios.post( '/check-for-submission',{
               token: token,
                langId: _this.selectedLangId
                  })
          .then(response => {
             
          
          if(response.status == 200){

            

            

              if(response.data[0].status.description == 'Accepted'){

                 

                  _this.pageContent =  response.data[0].stdout;

                  
                 


              }else if(response.data[0].status.description == 'In Queue'){

                 _this.pageContent = 'In Queue...';

                   _this.checkResponse(response.data[0].token);

              }else if(response.data[0].status.description == 'Processing'){

                 _this.pageContent = 'Processing...';

                   _this.checkResponse(response.data[0].token);

              }else{

                 _this.pageContent =  response.data[0].stdout +  '\n Error: \n'  + response.data[0].stderr ;

               

              }


              if(_this.$root.codeBoxOpened == false){
                
              }

              

       

         
               _this.recheckCodeBox = true;

          }

          
            
          })
          .catch(error => {

             
             
               _this.pageContent = 'An issue occured,unable to run on sandbox...';

               
             
          })


        

      },
      runCodeOnSandbox: function(){

          axios.post( '/run-code-on-sandbox-project',{
                panel_id: this.selecetedPanelId,
                  })
          .then(response => {
             
          
          if(response.status == 200){

          
             let token = response.data[0][0].token;

        
              if(response.data[0][0].status.description == 'Accepted'){

                  this.pageContent =  response.data[0][0].stdout ;

                
                

              }else if(response.data[0][0].status.description == 'In Queue'){

                 this.pageContent = 'In Queue...';
                 this.checkResponse(token,response.data[1]);

              }else if(response.data[0][0].status.description == 'Processing'){

                 this.pageContent = 'Processing...';

                 this.checkResponse(token,response.data[1]);

              }else{

                

                this.pageContent =  response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr ;

              }


          }
            
          })
          .catch(error => {

            
             
               this.pageContent = 'An issue occured,unable to run on sandbox...';

                
              
          })

          
      },
    fetchPost:function(){


       this.loadingPost  = true;

             let storedPostData = this.$root.getLocalStore('post_data_' +  this.$route.params.post_id + this.$root.username);

            storedPostData.then((result)=>{
                
                 if(result != null ){

                    let finalResult = JSON.parse(result);
                     
                      this.$root.selectedPost = finalResult;

                       if(!this.$root.selectedPost.link){

                         this.showPage();

                       }

                        this.fetchComments(this.$root.selectedPost.id)
                 
                   this.loadingPost  = false;
               this.updatePost();

                 }else{
            
           
            axios.get( '/fetch-post/' + this.$route.params.post_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('post_data_' +  this.$route.params.post_id + this.$root.username,response.data.data);
        
           this.$root.selectedPost = response.data.data;
          
           if(!this.$root.selectedPost.link){

                         this.showPage();

                       }

                        this.fetchComments(this.$root.selectedPost.id)

         this.loadingPost = false;
       
     }
       
     
     })
     .catch(error => {

        this.loadingPost = false;
    
     }) 

                 }
            })

    },
    updatePost:function(){

       axios.get( '/fetch-post/' + this.$route.params.post_id)
      .then(response => {
      
      if (response.status == 200) {

          this.$root.LocalStore('post_data_' +  this.$route.params.post_id + this.$root.username,response.data.data);
        
           this.$root.selectedPost = response.data.data;
     }
       
     
     })
     .catch(error => {

    
     }) 

    },
     getUserLevel: function(points){
let imageUrl = '';
          
  if(points >= 0 && points <= 99){
    imageUrl += '/imgs/newbie.svg'

  }
  else if(points >= 100 && points <= 999 ){

   imageUrl +='/imgs/junior.svg'
  }
   else if(points >= 1000 && points <= 4999 ){ 
   
imageUrl += '/imgs/intermediate.svg' 
}
    else if(points >= 5000 && points <= 9999 ){ 

imageUrl += '/imgs/senior.svg'
   }
 else if(points >= 10000 && points <= 14999 ){ 
   
imageUrl +='/imgs/expert.svg'
}
  else if(points >= 15000 && points <= 100000 ){ 
      
 imageUrl += '/imgs/super_dev.svg'
}

  return imageUrl;

    }
   
   
  }
}
</script>
<style scoped>

textarea {
    font-size:13px; 
    background:white;
    width:100%; 
    height: 55px;
    max-height: 75px;
    padding: 6px 6px;
    resize:none; 
    overflow-x: hidden;
     overflow-y: auto;
    border:1px solid #e6e6e6; 
    border-radius:2px;
}

.scroller::-webkit-scrollbar-thumb {
  background-color: #3C87CD;
  outline: 1px solid #3C87CD;
}
.scroller::-webkit-scrollbar {
  width: 5px;
}
</style>