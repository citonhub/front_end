import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Profile from "../components/profile/Profile.vue"
import Activities from  "../components/profile/Activities.vue"
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

const routes = [
  { path: '/', redirect: '/profile/'},
  { path: '/register', name: 'Register', component: Register},
  { path: '/auth/:frompage', name: 'Auth', component: Auth},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  { path: '/login', name: 'Login', component: Login},
  { path: '/profile/', 
  name: 'Profile', 
  component: Profile,
  redirect:'/profile/activities/' + document.getElementById('checkauthUsername').value,
  children:[
    {
      // activities
      path: 'activities/:username',
      component: Activities
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

const app = new Vue({
   router: router,
    el: '#profile',
    vuetify: new Vuetify(),
    data:{
      checkauthroot:document.getElementById('checkauth').value,
      user_temp_id: document.getElementById('checkauthId').value,
      username: document.getElementById('checkauthUsername').value,
      pageloader: false,
      notificationApproved:'',
      pushManager:'',
      shownotificationboard: false,
      showTabs:true,
      showHeader:true,
       tabLabel:'profile',
       croppedImage:'',
       selectedUsername:document.getElementById('checkauthUsername').value,
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
        referralUser:'user'
    },
    mounted: function () {
      this.pageloader= false;
       this.initialPushMangerReg();
       this.fetchUserDetails();
      this.connectToChannel();
    },
    http: {
     headers:{
        'X-CSRF-TOKEN':document.head.querySelector("meta[name='csrf-token']").content
     }
  },
  methods:{
    connectToChannel:function(){
   
      if(this.checkauthroot == 'auth'){
       Echo.private('user.' + this.username)
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
      this.UrlTrack = window.location.href;
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