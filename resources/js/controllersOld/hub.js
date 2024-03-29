import Vuex from 'vuex'
import { mapGetters } from 'vuex'

window.Echo = require('laravel-echo');
import Echo from 'laravel-echo';

window.io = require('socket.io-client');

Vue.use(Vuex)

axios.defaults.baseURL = 'https://api.citonhub.com/api'

const store = new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData () {
      localStorage.removeItem('user')
      location.reload()
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return axios
        .post('/login', credentials)
        .then(response =>{

          
           
           if(response.status == 200){
            
            routerData.push({ path: '/verify' });

           }

          commit('setUserData', response.data)
        })
    },


    logout ({ commit }) {
      commit('clearUserData')
    }
  },

  getters : {
    isLogged: state => !!state.user
  }
});


import VueRouter from 'vue-router'

Vue.use(VueRouter)


import HomeController from "../components/hub/HomeController.vue"
import NewPost from "../components/hub/NewPost.vue"
import CodeEditor from "../components/hub/CodeEditor.vue"
import ImageEditor from "../components/hub/ImageEditor.vue"
import Post from "../components/hub/Post.vue"
import Library from "../components/hub/Library.vue"
import Shelve from "../components/hub/Shelve.vue"
import AddShelve from "../components/hub/AddShelve.vue"
import Login from "../components/auth/Login.vue"
import Auth from "../components/auth/auth.vue"
import Register from "../components/auth/Register.vue"
import Verify from "../components/auth/Verify.vue"
import SetUsername from "../components/auth/SetUsername.vue"
import PostCommentView from "../components/hub/PostCommentView.vue"
import Privacy from "../components/hub/Privacy.vue"
import NotFound from "../components/auth/NotFound.vue"
import ForgotPassword from "../components/auth/ForgotPassword.vue"
import ResetPassword from "../components/auth/ResetPassword.vue"


const routes = [
  { path: '/', redirect: '/hub'},
  { path: '/hub', name: 'HomeController',
   component: HomeController,
    meta: {
    twModalView: true
  },
  beforeEnter: (to, from, next) => {
   
      to.matched[0].components = {
        default: HomeController,
        modal: false
      }

       if(window.thisUserState != undefined){

        thisUserState.$root.showPostModal = false;
        thisUserState.$root.showPostViewModal = false;

        thisUserState.$root.postViewType = '';

        thisUserState.$root.fullImageViewer = false;

        thisUserState.$root.showCodeEditor = false;
        
        thisUserState.$root.showTabs=true;

        thisUserState.$root.showHeader = true;

       }
    

  

    next()
  }
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },
  { path: '/privacy-policy', name: 'Privacy', component: Privacy},
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/new-post', name: 'NewPost', component: NewPost},
  { path: '/code-editor', name: 'CodeEditor', component: CodeEditor},
  { path: '/auth/:fromPage', name: 'Auth', component: Auth},
  { path: '/image-editor', name: 'ImageEditor', component: ImageEditor},
  { path: '/post/:username/:postId/:referral',
   name: 'Post',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Post,
        modal: false
      }
    }

    

    if (twModalView) {

      if(window.thisUserState != undefined){

        thisUserState.$root.showPostViewModal = false;
        thisUserState.$root.showPostModal = true;
        thisUserState.$root.fullImageViewer = false;
  
         thisUserState.$root.showCodeEditor = false;
  
        thisUserState.$root.showTabs= true;
  
       }
      //
      // For twModalView access
      //
      if (from.matched.length > 1) {
        // copy nested router
        const childrenView = from.matched.slice(1, from.matched.length)
        for (let view of childrenView) {
          to.matched.push(view)
        }
      }
      if (to.matched[0].components) {
        // Rewrite components for `default`
        to.matched[0].components.default = from.matched[0].components.default
        // Rewrite components for `modal`
        to.matched[0].components.modal = Post
      }
    }

    next()
  }
},
{ path: '/post/image-viewer',
   name: 'ImageViewer',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: HomeController,
        modal: false
      }
    }

    if (twModalView) {
      //
      // For twModalView access
      //
      if (from.matched.length > 1) {
        // copy nested router
        const childrenView = from.matched.slice(1, from.matched.length)
        for (let view of childrenView) {
          to.matched.push(view)
        }
      }
      if (to.matched[0].components) {
        // Rewrite components for `default`
        to.matched[0].components.default = from.matched[0].components.default
        // Rewrite components for `modal`
        to.matched[0].components.modal = HomeController
      }
    }

    next()
  }
},
{ path: '/post/code-viewer',
   name: 'CodeViewer',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: HomeController,
        modal: false
      }
    }

    if (twModalView) {
      //
      // For twModalView access
      //
      if (from.matched.length > 1) {
        // copy nested router
        const childrenView = from.matched.slice(1, from.matched.length)
        for (let view of childrenView) {
          to.matched.push(view)
        }
      }
      if (to.matched[0].components) {
        // Rewrite components for `default`
        to.matched[0].components.default = from.matched[0].components.default
        // Rewrite components for `modal`
        to.matched[0].components.modal = HomeController
      }
    }

    next()
  }
},
  { path: '/post/:username/:postId/comment/post',
   name: 'MakeComment', 
  
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: NewPost,
        modal: false
      }
    }

    if (twModalView) {
      //
      // For twModalView access
      //
      if (from.matched.length > 1) {
        // copy nested router
        const childrenView = from.matched.slice(1, from.matched.length)
        for (let view of childrenView) {
          to.matched.push(view)
        }
      }
      if (to.matched[0].components) {
        // Rewrite components for `default`
        to.matched[0].components.default = from.matched[0].components.default
        // Rewrite components for `modal`
        to.matched[0].components.modal = NewPost
      }
    }

    next()
  }},
  { path: '/post/comment/:username/:postId/:referral', 
  name: 'PostCommentView', 
  meta: {
    twModalView: true
  },
  beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: PostCommentView,
        modal: false
      }
    }

   

    if (twModalView) {

      if(window.thisUserState != undefined){

     
        thisUserState.$root.showPostViewModal = true;   
        thisUserState.$root.showPostModal = false;
        thisUserState.$root.fullImageViewer = false;
  
         thisUserState.$root.showCodeEditor = false;
  
        thisUserState.$root.showTabs= true;

        thisUserState.$root.showCreatepost = false;
  
       }
      //
      // For twModalView access
      //
      if (from.matched.length > 1) {
        // copy nested router
        const childrenView = from.matched.slice(1, from.matched.length)
        for (let view of childrenView) {
          to.matched.push(view)
        }
      }
      if (to.matched[0].components) {
        // Rewrite components for `default`
        to.matched[0].components.default = from.matched[0].components.default
        // Rewrite components for `modal`
        to.matched[0].components.modal = PostCommentView
      }
    }

    next()
  }
},
  { path: '/library', name: 'Library', component: Library},
  { path: '/shelve', name: 'Shelve', component: Shelve},
  { path: '/add-shelve', name: 'AddShelve', component: AddShelve},
  { path: '/login', name: 'Login', component: Login},
  { path: '/register', name: 'Register', component: Register},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
];

const router = new VueRouter({
  routes
});

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = require('../bootstraps/messages.json');

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
})



const app = new Vue({
  router: router,
     store,
    el: '#hub',
    vuetify: new Vuetify(),
    i18n,
    data:{
      pageloader: false,
      notificationApproved:'',
      pushManager:'',
      shownotificationboard: false,
      checkauthroot:'',
      username: '',
      user_temp_id:0,
      showTabs:true,
       tabLabel:'hub',
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
            drawer:false,
            notificationCount:0,
            notificationCountSpace:0,
            codeMessageId:'',
            codeBoxOpened:false,
            codeFromView:false,
            allPostArray:[],
            postInitialLimit:30,
            postStoreTop:[],
            postStoreBottom:[],
            codeFromPostView: false,
            postCurrentPage:0,
            showPostModal:false,
            showPostViewModal:false,
            postViewType:'',
            showCreatepost: false,
            baseApiUrl:'https://api.citonhub.com/api',
            returnedToken:'',
            itIsHomePage:false,
            showDashboardInfo:false,
     showHubInfo: false,
     showProfileInfo: false,
     buttonText:'Ok',
     dashboardContent:'Create new communities, channels, teams and teaching bots in your dashboard',
     hubContent:'Network and share your works with other developers on CitonHub',
     profileContent:'Manage your account and connections in your profile'
        
    },
     mounted: function () {
      this.pageloader = false;
      window.routerData = this.$router;
      if(this.isLogged){
        this.fetchUserDetails();
       }
      this.connectToChannel();
      window.thisUserState = this;
    },
    computed: {
      ...mapGetters([
        'isLogged'
      ])
    },
    created(){
      window.thisUserState = this;
      window.routerData = this.$router;
      const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.username = userData.user.username;
        this.user_temp_id = userData.user.id;

        this.returnedToken = userData.token;
        this.setEcho();
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    );

    if(this.isLogged){
       this.checkauthroot = 'auth';
    }else{
      this.checkauthroot = 'noauth';
    }


    },
    http: {
     headers:{
        'X-CSRF-TOKEN':document.head.querySelector("meta[name='csrf-token']").content
     }
  },
  
  methods:{
    setEcho:function(){
      if (typeof io !== 'undefined') {
        window.Echo = new Echo({
            broadcaster: 'socket.io', 
           host: window.customLocation + ':6001',
           transports: ['websocket', 'polling', 'flashsocket'] ,// Fix CORS error!
           auth:
               {
                   headers:
                   {
                       'Authorization': 'Bearer ' + this.returnedToken
                   }
               }
        });}
       
        
    },
    logout: function(){
      this.pageloader= true;
      this.$store.dispatch('logout');
      this.username = '';
      this.user_temp_id = 0;
      this.checkauthroot = 'noauth';
      this.drawer = false;
      this.checkIfUserIsLoggedIn('space');
    },
    showNavigator:function(){
    this.drawer = true;
    },
    LocalStore:function(key,data){
    
      
     
      localforage.setItem(key,JSON.stringify(data)).then(function () {
        return localforage.getItem(key);
      }).then(function (value) {
        // we got our value
       
      }).catch(function (err) {
        console.log(err)
        // we got an error
      });
  
      },
      getLocalStore:function(key){
        let result = localforage.getItem(key);
          
        return result;
        
      
      },
    showNavLink:function(type){
       if(type == 'library'){
         window.location = '/hub#/library';
       }

       if(type == 'duel_list'){
        window.location = '/duels#/duel/list';
      }

      if(type == 'account_settings'){
       return;
      }

      if(type == 'privacy'){
        window.location = '/home#/privacy-policy';
      }

      if(type == 'profile'){
        this.pageloader= true;
        window.location = '/profile';
      }

      if(type == 'help'){
        return;
      }
     
    },
    connectToChannel: function(){



      if(this.checkauthroot == 'auth'){
        window.Echo.private('user.' + this.username)
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
      
      window.Echo.private('post.' + post.PostId)
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
      
        window.Echo.leave('post.' + post.PostId);
      });
    },
    trackPostConnections: function(postArray){

     
      if(this.allChannel.length == 0){


          if(this.checkauthroot == 'auth'){

            postArray.forEach((post)=>{

          
      var channel =  window.Echo.private('post.' + post.PostId)
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

        this.notificationCount = response.data[3];

        this.notificationCountSpace = response.data[4];
        
        
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
        this.LocalStore('route_tracker',[this.$router.currentRoute.path]);
       
        if(this.$route.params.referral != null){
          this.referralUser = this.$route.params.referral;
         }
         this.$router.push({ path: '/login' });
        return;
      } 
   },
 

}
});