import VueRouter from 'vue-router'

Vue.use(VueRouter)


import HomeController from "../components/home/HomeController.vue"
import NewPost from "../components/home/NewPost.vue"
import CodeEditor from "../components/home/CodeEditor.vue"
import ImageEditor from "../components/home/ImageEditor.vue"
import Post from "../components/home/Post.vue"
import Library from "../components/home/Library.vue"
import Shelve from "../components/home/Shelve.vue"
import AddShelve from "../components/home/AddShelve.vue"
import Login from "../components/auth/Login.vue"
import Auth from "../components/auth/auth.vue"
import Register from "../components/auth/Register.vue"
import Verify from "../components/auth/Verify.vue"
import SetUsername from "../components/auth/SetUsername.vue"
import MakeComment from "../components/home/MakeComment.vue"
import PostCommentView from "../components/home/PostCommentView.vue"


const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', name: 'HomeController', component: HomeController},
  { path: '/new-post', name: 'NewPost', component: NewPost},
  { path: '/code-editor', name: 'CodeEditor', component: CodeEditor},
  { path: '/image-editor', name: 'ImageEditor', component: ImageEditor},
  { path: '/post/:username/:postId/:referral', name: 'Post', component: Post},
  { path: '/post/:username/:postId/comment/post', name: 'MakeComment', component: MakeComment},
  { path: '/post/comment/:username/:postId/:referral', name: 'PostCommentView', component: PostCommentView},
  { path: '/library', name: 'Library', component: Library},
  { path: '/shelve', name: 'Shelve', component: Shelve},
  { path: '/add-shelve', name: 'AddShelve', component: AddShelve},
  { path: '/login', name: 'Login', component: Login},
  { path: '/auth/:frompage', name: 'Auth', component: Auth},
  { path: '/register', name: 'Register', component: Register},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
];

const router = new VueRouter({
  routes
});


const app = new Vue({
  router: router,
    el: '#home',
    vuetify: new Vuetify(),
    data:{
      pageloader: false,
      notificationApproved:'',
      pushManager:'',
      shownotificationboard: false,
      checkauthroot:document.getElementById('checkauth').value,
      username: document.getElementById('checkauthUsername').value,
      showTabs:true,
       tabLabel:'home',
       showHeader:'',
       currentImage:'',
       imagepath:'',
       imagepath1:'',
       imagepath2:'',
       imagepath3:'',
       imagepath4:'',
       userEmail:'',
       userPassword:'',
       serverControlled:true,
       CodeFileName:'',
       codeContent:'',
       codeLanguage:'HTML',
       codeContentViewer:'',
       postContent:'',
       showCodeEditor:false,
       fullImageViewer:false,
       imageHeight1: '',
        imageHeight2: '',
        imageHeight3: '',
        imageHeight4: '',
        imageWidth1: '',
        imageWidth2: '',
        imageWidth3: '',
        imageWidth4: '',
        imageCanvas1:'',
        imageCanvas2:'',
        imageCanvas3:'',
        imageCanvas4:'',
         imageTemp1:'',
          imageTemp2:'',
           imageTemp3:'',
            imageTemp4:'',
            imageViewPath:'',
            fullImageColor:'',
            postData:[],
            commentUsername:'',
            commentPostId:'',
            currentPostId: null,
            showPost: false,
            currentPostData:[],
            fromView:false,
            PostRefId:'',
            commentIsReply:'',
            repliedPostId:'',
            showShelves:false,
            scrollHome:'auto',
            userShelves:null,
            pullingPostId:'',
            alertMsg:'',
            Alert:false,
            postArray:[],
            postArrayType:[],
            postComments:[],
            postShelveData:null,
            selectedshelveId:'',
            selectedshelvename:'',
            showShare:false,
            redirectRoot:'',
            authProfile:[],
            allChannel:[],
            reloadShelves:false,
            UrlTrack:'',
            referralUser:'user',
            fromHome:false,
            showBoard:false,
            boardContent:'',
            boardBtnLabel:'',
            userPageTrack:[],
            selectedPage:[],
    },
     mounted: function () {
      this.pageloader = false;
      this.initialPushMangerReg();
      this.fetchUserDetails();
      this.trackConnections();
    },
    http: {
     headers:{
        'X-CSRF-TOKEN':document.head.querySelector("meta[name='csrf-token']").content
     }
  },
  
  methods:{
    trackConnections: function(){



      if(this.checkauthroot == 'auth'){
        Echo.private('user.' + this.username)
        .listen('.UserChannel',(e) => {
          
          if(e.actionType == 'new-post'){
            this.$root.postData.unshift(e.data);
              
            this.trackThisPost(e.data);
        }

        if(e.actionType == 'new-coin'){
           this.authProfile.coins = this.authProfile.coins + 1;
        }
        
      

       });

      }
         
    
         
       
       

    },
    trackThisPost: function(post){
      
      Echo.private('post.' + post.PostId)
       .listen('.PostChannel',(e) => {


               if(e.actionType == 'new-commment-post'){
                    this.$root.postComments.unshift(e.data);
                    
                }
                
                if(e.actionType == 'post-comment-like'){

                 this.$root.postComments.map((post)=>{
                     if(post.PostId == e.data){
                        
                       post.likes = post.likes + 1;

                     }
                 });
                }
                
               

            if(e.actionType == 'post-comment-pulled'){

                 this.$root.postComments.map((post)=>{
                     if(post.PostId == e.data){
                        
                       post.pulls = post.pulls + 1;

                     }
                 });
                }
         
       
       if(e.actionType == 'post-like'){

        this.$root.postData.map((post)=>{
            if(post.PostId == e.data){
               
              post.likes = post.likes + 1;

            }
        });
       }
       
       if(e.actionType == 'post-comment'){

        this.$root.postData.map((post)=>{
            if(post.PostId == e.data){
               
              post.comments = post.comments + 1;

            }
        });
       }

       if(e.actionType == 'post-pulled'){

        this.$root.postData.map((post)=>{
            if(post.PostId == e.data){
               
              post.pulls = post.pulls + 1;

            }
        });
       }
         
    });

    
       
    },

    disconnectPost:function(postArray){
       this.allChannel = [];
      postArray.forEach((post)=>{
      
        Echo.leave('post.' + post.PostId);
      });
    },
    trackPostConnections: function(postArray){

     
      if(this.allChannel.length == 0){


          if(this.checkauthroot == 'auth'){

            postArray.forEach((post)=>{

          
      var channel =  Echo.private('post.' + post.PostId)
       .listen('.PostChannel',(e) => {


               if(e.actionType == 'new-commment-post'){
                    this.$root.postComments.unshift(e.data);
                    
                }
                
                if(e.actionType == 'post-comment-like'){

                 this.$root.postComments.map((post)=>{
                     if(post.PostId == e.data){
                        
                       post.likes = post.likes + 1;

                     }
                 });
                }
                
               

            if(e.actionType == 'post-comment-pulled'){

                 this.$root.postComments.map((post)=>{
                     if(post.PostId == e.data){
                        
                       post.pulls = post.pulls + 1;

                     }
                 });
                }
         
       
       if(e.actionType == 'post-like'){

        this.$root.postData.map((post)=>{
            if(post.PostId == e.data){
               
              post.likes = post.likes + 1;

            }
        });
       }
       
       if(e.actionType == 'post-comment'){

        this.$root.postData.map((post)=>{
            if(post.PostId == e.data){
               
              post.comments = post.comments + 1;

            }
        });
       }

       if(e.actionType == 'post-pulled'){

        this.$root.postData.map((post)=>{
            if(post.PostId == e.data){
               
              post.pulls = post.pulls + 1;

            }
        });
       }
         
    });

     this.allChannel.push(channel);
        });
        
     }
     
      }

   },

   activateBot:function(){
    this.$root.selectedPage  = this.userPageTrack.filter((page)=>{
       return page.page_name == 'public';
     });
     console.log(this.selectedPage);
     if(this.selectedPage.length != 0){
          
         if(this.selectedPage[0].status == 0){
            this.showBoard = true;
    this.boardContent = 'Hello';
    this.boardBtnLabel = 'Okay Got It';

         }
          
     }
   
    
 },
      
    fetchUserDetails: function(){
      

         axios.get('/fetch-profile-'+ this.username)
   .then(response => {
   
   if (response.status == 200) {
        
        let userProfile = response.data[1];
        let user = response.data[0];

       
        
        
        
       let userDetails = {
       'username':user.username,
       'name': user.name,
       'coin': userProfile.coins,
       'image_name': userProfile.image_name,
       'image_extension': userProfile.image_extension,
       'about': userProfile.about,
       'Interests': userProfile.interestsArray,
       'connections': userProfile.connections,
       'background_color': userProfile.background_color
       };
         

       
     this.$root.authProfile = userDetails;
     
    
     
     
  }
    
  
  })
  .catch(error => {
 
  }) 

      
   },
     
    imageStyle:function(dimension,authProfile){
      

      if(authProfile.background_color == null){
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;border:1px solid #c5c5c5;";
         styleString += 'background-color:#ffffff; background-image:url(imgs/usernew.png);';
         return styleString;
      }else{
        let styleString = "border-radius:50%;height:"+  dimension +"px;width:" + dimension +"px;background-size:contain;";
         let imgLink = authProfile.image_name + '.' + authProfile.image_extension;
          styleString += 'background-color:'+ authProfile.background_color + '; background-image:url(imgs/profile/'  + imgLink  +  ');';
          return styleString;
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

    loadShelves: function(){
      if(this.$root.userShelves != null){
        this.userShelves = this.$root.userShelves ;
    }else{
         
          axios.get('/fetch-user-shelves')
   .then(response => {
   
   if (response.status == 200) {
     
     this.userShelves = response.data;
     this.$root.userShelves = response.data;
     
    
     
     
  }
    
  
  })
  .catch(error => {
 
  }) 
    }
},

    loader:function(){
     
      this.pageloader = true;
      
  
  },
  viewPost: function(postData){
    if(postData.is_comment == 'true'){
      this.$router.push({ path: '/post/comment/' + postData.username + '/' + postData.PostId });
 }else{
   
    var post = this.$root.postData.filter((post) => {
return post.PostId == this.$root.currentPostId;
 });
  this.$root.currentPostData = post[0];
  this.$refs.postViewer.getPost();
  this.$root.showPost = true;

 }
  },
  showLibrary: function(){
    this.$router.push({ path: '/library' });
   },
    initialPushMangerReg: function(){
      if('serviceWorker' in navigator){
       navigator.serviceWorker.ready.then(registration => {
         if("PushManager" in window){
           registration.pushManager.getSubscription().then(sub => {
             if(sub == undefined){
              this.askforpermission();
             }else{
              // update data in database;
            }
           })
          
         }
       })
      }
     },
     askforpermission: function(){
      this.shownotificationboard = true;
   }, 
    askPermission: function() {
    return new Promise(function(resolve, reject) {
      const permissionResult = Notification.requestPermission(function(result) {
        resolve(result);
      });
  
      if (permissionResult) {
        if ('serviceWorker' in navigator) {

          
          navigator.serviceWorker.ready.then(function(reg) {

            function urlB64ToUint8Array(base64String) {
              const padding = '='.repeat((4 - base64String.length % 4) % 4);
              const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');
        
              const rawData = window.atob(base64);
              const outputArray = new Uint8Array(rawData.length);
        
              for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
              }
              return outputArray;
            }

            reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlB64ToUint8Array('BA5RO17EugggZ7VQBGMf6_dQat4fLr5qwmS1Q8FUl8Wg0Pm7vOtX_Thws0OdafoWg1tdF-A0mDK-JcZJ09VoEq8')
            }).then(function(sub) {
  
              let subObj = sub.toJSON();
              axios.post('/save-notification',{
                endpoint: subObj.endpoint,
                public_key: subObj.keys.p256dh,
                auth_token: subObj.keys.auth
                  })
          .then(response => {
            
           if (response.status == 200) {
              
        
            
            }else{
              console.log(response.status);
            }
            
            
          })
          .catch(error => {
            console.log(error);
          })
  
            }).catch(function(e) {
                alert(e);
              if (Notification.permission === 'denied') {
                console.warn('Permission for notifications was denied');
              } else {
                console.error('Unable to subscribe to push', e);
              }
            });
          })
        }
      }
    })
    .then(function(permissionResult) {
      if (permissionResult !== 'granted') {
        throw new Error('We weren\'t granted permission.');
      }
    });
  },
     userResponse: function(response){
      this.shownotificationboard = false;
         this.notificationApproved = response;
      if(this.notificationApproved == 'yes'){      
        this.askPermission();       
      }
      if(this.notificationApproved == 'no'){
         return;
      }
     },
     
     checkIfUserIsLoggedIn: function(frompage){
      if(this.checkauthroot == 'noauth'){
        this.UrlTrack = window.location.href;
        if(this.$route.params.referral != null){
          this.referralUser = this.$route.params.referral;
         }
       this.$router.push({ path: '/auth/' + frompage });
        return;
      } 
   },
 

}
});