import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Trends from "../components/trends/Trends.vue"
import Login from "../components/auth/Login.vue"
import Auth from "../components/auth/auth.vue"
import Register from "../components/auth/Register.vue"
import Verify from "../components/auth/Verify.vue"
import SetUsername from "../components/auth/SetUsername.vue"
import Connect from "../components/trends/Connect.vue"
import Channel from "../components/trends/Channel.vue"
import Duel from "../components/trends/Duel.vue"
import Project from "../components/trends/Project.vue"



const routes = [
  { path: '/', redirect: '/trends'},
  { path: '/login', name: 'Login', component: Login},
  { path: '/auth/:frompage', name: 'Auth', component: Auth},
  { path: '/register', name: 'Register', component: Register},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  { path: '/trends',
     name: 'Trends', 
     component: Trends,
     redirect: '/trends/channels',
    children: [
      {
        // connect
        path: 'connect',
        component: Connect
      },
      {
        // channel
        path: 'channels',
        component: Channel
      },
      {
        // teams
        path: 'duels',
        component: Duel
      },
      {
        // project
        path: 'projects',
        component: Project
      },
      
    ]
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
    el: '#trends',
    vuetify: new Vuetify(),
    i18n,
    data:{
      pageloader: false,
      notificationApproved:'',
      pushManager:'',
      shownotificationboard: false,
      checkauthroot:document.getElementById('checkauth').value,
      username: document.getElementById('checkauthUsername').value,
      showTabs:true,
       tabLabel:'trends',
       showHeader:true,
       userEmail:'',
       userPassword:'',
       serverControlled:true,
      
            fromView:false,
        
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
             frompage:'trends',
    },
     mounted: function () {
      this.pageloader = false;
      this.initialPushMangerReg();
      this.fetchUserDetails();
      
    },
    http: {
     headers:{
        'X-CSRF-TOKEN':document.head.querySelector("meta[name='csrf-token']").content
     }
  },
  
  methods:{
    logout: function(){
      this.$root.pageloader = true;
      document.getElementById('logout-form').submit();
    },
    showNavigator:function(){
    this.drawer = true;
    },
    showNavLink:function(type){
       if(type == 'library'){
         window.location = '/#/library';
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

    trackConnections: function(){



      if(this.checkauthroot == 'auth'){
        Echo.private('user.' + this.username)
        .listen('.UserChannel',(e) => {
          
       
        if(e.actionType == 'new-coin'){
           this.authProfile.coins = this.authProfile.coins + 1;
        }
        
      

       });

      }
         
    
         
       
       

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
              'background_color': userProfile.background_color
              };
                
  
              this.$root.LocalStore('userInfo' + this.$root.username,userDetails);
         
              
               this.authProfile = userDetails;
            
           
            
            
         }
           
         
         })
         .catch(error => {
         
         }) 
         
  
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
        'background_color': userProfile.background_color
        };
          
  
       
   
        
         this.authProfile = userDetails;
      
     
      
      
   }
     
   
   })
   .catch(error => {
   
   }) 
  
   },

  
    loader:function(){
     
      this.pageloader = true;
      
  
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