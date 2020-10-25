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

import Profile from "../components/profile/Profile.vue"
import Channels from  "../components/profile/Channels.vue"
import About from  "../components/profile/About.vue"
import Projects from  "../components/profile/Projects.vue"
import Teams from  "../components/profile/Teams.vue"
import AddProject from  "../components/profile/AddProject.vue"
import CropImage from  "../components/profile/CropImage.vue"
import EditProfile from  "../components/profile/EditProfile.vue"
import Connections from  "../components/profile/Connections.vue"
import Connected from  "../components/profile/Connected.vue"
import Login from "../components/auth/Login.vue"
import Auth from "../components/auth/auth.vue"
import Register from "../components/auth/Register.vue"
import Verify from "../components/auth/Verify.vue"
import SetUsername from "../components/auth/SetUsername.vue"
import Notification from "../components/profile/Notification.vue"
import NotFound from "../components/auth/NotFound.vue"
import ForgotPassword from "../components/auth/ForgotPassword.vue"
import ResetPassword from "../components/auth/ResetPassword.vue"

const routes = [
  { path: '/', redirect: '/profile/'},
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/register', name: 'Register', component: Register},
  { path: '/auth/:frompage', name: 'Auth', component: Auth},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  { path: '/login', name: 'Login', component: Login},
  { path: '/notifications', name: 'Notification', component: Notification},
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },
  { path: '/image-viewer',
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
        default: Profile,
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
        to.matched[0].components.modal = Profile
      }
    }

    next()
  }
},
  { path: '/profile/', 
  name: 'Profile', 
  component: Profile,
  meta: {
    twModalView: true
  },
  beforeEnter: (to, from, next) => {
   
    to.matched[0].components = {
      default: Profile,
      modal: false
    }

     if(window.thisUserState != undefined){

      thisUserState.$root.fullImageViewer = false;

      thisUserState.$root.showTabs=true;
          
    

     }
  



  next()
},
  redirect:'/profile/channels/' +'user',
  children:[
    {
      // activities
      path: 'channels/:username',
      component: Channels
    },
    {
     
      path: 'about/:username',
      component: About
    },
    {
     
      path: 'projects/:username',
      component: Projects
    },
    {
     
      path: 'teams/:username',
      component: Teams
    },
    {
     
      path: 'connections/:username',
      component: Connections
    },
    {
     
      path: 'connected/:username',
      component: Connected
    },
  ]
  },
  { path: '/add-project', 
  name: 'AddProject', 
  component: AddProject,
  },
  { path: '/crop-image', 
  name: 'CropImage', 
  component: CropImage,
  },
  { path: '/edit', 
  name: 'EditProfile', 
  component: EditProfile,
  },
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
    el: '#profile',
    store,
    vuetify: new Vuetify(),
    i18n,
    data:{
      checkauthroot:'',
      user_temp_id: 0,
      username:'',
      pageloader: false,
      notificationApproved:'',
      pushManager:'',
      shownotificationboard: false,
      showTabs:true,
      showHeader:true,
       tabLabel:'profile',
       croppedImage:'',
       imagepath:'',
       postData:null,
       fullImageViewer:false,
       showCodeEditor:false,
       PostRefId:'',
       userEmail:'',
       userPassword:'',
       pullingPostId:'',
       userShelves:[],
       postArrayType:[],
       showShare:false,
       profileDetails: null,
       authProfile:[],
       imageExist:true,
       showShelves:false,
       allChannel:[],
        serverControlled:true,
        referralUser:'user',
        showBoard:false,
        boardContent:'',
        boardBtnLabel:'',
        userPageTrack:[],
        selectedPage:[],
        drawer:false,
        notificationCount:0,
        notificationCountSpace:0,
        frompage:'profile',
        showLangOption:false,
        userLocale:document.getElementById('appLocale').value,
        baseApiUrl:'https://api.citonhub.com/api',
        returnedToken:''
    },
    mounted: function () {
      this.pageloader= false;
      window.routerData = this.$router;
      if(this.isLogged){
        this.fetchUserDetails();
       }
       this.connectToChannel();
       this.SetLocale(this.userLocale);
    
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

        window.usernameValue = userData.user.username;

        this.user_temp_id = userData.user.id;

        this.returnedToken = userData.token;
        this.setEcho();

        window.returnedToken = userData.token;
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
    changeLocale: function(locale){

      this.$root.showLangOption = false;

     
      this.$root.$i18n.locale = locale;

      axios.post('/save-locale',{
        locale: locale
      }).then(response => {
          
        if (response.status == 200) {
           
         }else{
           
         }
         
         
       })
       .catch(error => {
        
       })

       
    },
    SetLocale:function(locale){
       
      if(this.checkauthroot != 'noauth'){

        this.$root.$i18n.locale = locale;

      }

     

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

     if(type == 'profile'){
      this.pageloader= true;
      window.location = '/profile';
    }

     if(type == 'privacy'){
      window.location = '/home#/privacy-policy';
    }

     if(type == 'help'){
       return;
     }
    
   },
    connectToChannel:function(){
   
      if(this.checkauthroot == 'auth'){
       window.Echo.private('user.' + this.username)
       .listen('.UserChannel',(e) => {
         

         if(e.actionType == 'new-coin'){
           this.authProfile.coins = this.authProfile.coins + 1;
        }
       
         
    });
     

      }
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
   getLocalStore:function(key){
    let result = localforage.getItem(key);
      
    return result;
    
  
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
    fetchUserDetails: function(){
   
      let userInfo = this.$root.getLocalStore('userInfo'+ this.$root.username);
  
       userInfo.then((result)=>{
         
        if(result != null){
          let finalResult = JSON.parse(result);
  
  
          this.authProfile = finalResult;
  
  
           this.fetchProfileStandAlone();
  
  
        }else{
  
     
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
              'background_color': userProfile.background_color,
              'user_locale': userProfile.user_locale
              };
                
  
              this.$root.LocalStore('userInfo' + this.$root.username,userDetails);
         
              
               this.authProfile = userDetails;
            
           
            
            
         }
           
         
         })
         .catch(error => {
         
         }) 
         
  
        }

        if(this.authProfile.user_locale != undefined){

          this.SetLocale(this.authProfile.user_locale);
  
        }
  
       })
  
        
      
   },
   fetchProfileStandAlone: function(){
  
  
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
        'background_color': userProfile.background_color,
        'user_locale': userProfile.user_locale
        };
          
  
        this.$root.LocalStore('userInfo' + this.$root.username,userDetails);
   
        
         this.authProfile = userDetails;


         if(this.authProfile.user_locale != undefined){


          this.SetLocale(this.authProfile.user_locale);
    
        }
      
      
     
      
      
   }
     
   
   })
   .catch(error => {
   
   }) 
  
   },
    loader:function(){
     
      this.pageloader = true;
  
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
checkIfUserIsLoggedIn: function(frompage){
  if(this.checkauthroot == 'noauth'){
    this.LocalStore('route_tracker',[this.$router.currentRoute.path]);
   
    if(this.$route.params.referral != null){
      this.referralUser = this.$route.params.referral;
     }
   this.$router.push({ path: '/auth/' + frompage });
    return;
  } 
},
 loadShelves: function(){
  if(this.userShelves.length > 0){
    return;
  }
axios.get('/fetch-user-shelves')
.then(response => {

if (response.status == 200) {

this.userShelves = response.data;





}


})
.catch(error => {

}) 
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
     }
}
});