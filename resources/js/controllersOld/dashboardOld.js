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

import Hub from "../components/dashboard/Hub.vue"
import Dashboard from "../components/dashboard/Dashboard.vue"
import MatchBoard from "../components/dashboard/MatchBoard.vue"
import DuelInfo from "../components/dashboard/DuelInfo.vue"
import CreateDuel from "../components/dashboard/CreateDuel.vue"
import MatchPanel from "../components/dashboard/MatchPanel.vue"
import CodeEditor from "../components/dashboard/CodeEditor.vue"
import DBTable from "../components/dashboard/DBTable.vue"
import MatchComment from "../components/dashboard/MatchComment.vue"
import MatchResult from "../components/dashboard/MatchResult.vue"
import Login from "../components/auth/Login.vue"
import Register from "../components/auth/Register.vue"
import Auth from "../components/auth/auth.vue"
import Verify from "../components/auth/Verify.vue"
import SetUsername from "../components/auth/SetUsername.vue"
import NewCodeFile from "../components/dashboard/NewCodeFile.vue"
import PanelSettings from "../components/dashboard/PanelSettings.vue"
import AddPanelRoutes from "../components/dashboard/AddPanelRoutes.vue"
import CropImage from  "../components/profile/CropImage.vue"
import CreateTable from "../components/dashboard/CreateTable.vue"
import CreateSpace from "../components/dashboard/CreateSpace.vue"
import PanelLoader from "../components/dashboard/PanelLoader.vue"
import ProjectComments from "../components/dashboard/ProjectComments.vue"
import NewComment from "../components/dashboard/NewComment.vue"
import Organization from "../components/dashboard/Organizations.vue"
import AddOrganization from "../components/dashboard/AddOrganization.vue"
import AddBot from "../components/dashboard/AddBot.vue"
import Bots from "../components/dashboard/Bots.vue"
import NotFound from "../components/auth/NotFound.vue"
import ForgotPassword from "../components/auth/ForgotPassword.vue"
import ResetPassword from "../components/auth/ResetPassword.vue"


const routes = [
  { path: '/', redirect: '/panel'},
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },
  { path: '/login', name: 'Login', component: Login},
  { path: '/crop-image', 
  name: 'CropImage', 
  component: CropImage,
  },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/register', name: 'Register', component: Register},
  { path: '/auth/:fromPage', name: 'Auth', component: Auth},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  { path: '/panel',
     name: 'Hub', 
     component: Hub,
     redirect: '/panel/main/user',
    children: [
      {
        // dashboard
        path: 'main/:orgId',
        component: Dashboard
      },
      {
        // dashboard
        path: 'main/:orgId/:user',
        component: Dashboard
      },
      {
        // dashboard
        path: 'main/new/:orgId',
        component: Dashboard
      },
      {
        // organization
        path: 'organizations',
        component: Organization
      },
      {
        // bots
        path: 'bot/setup/:botId',
        component: Bots
      },
      {
        // create bot
        path: 'bot/create',
        component: AddBot
      },
      {
        // create organization
        path: 'organization/create',
        component: AddOrganization
      },
      {
        // create new space
        path: 'space/create',
        component: CreateSpace
      },
      {
        // new code file
        path: ':duelId/:language_type/add-new-file',
        component: NewCodeFile
      },
      {
        // match board
        path: ':duelId/board/:referral',
        component: MatchBoard
      },
      {
        //duel info
        path: ':duelId/info',
        component: DuelInfo
      },
      {
        //duel loader
        path: ':duelId/page-loader',
        component: PanelLoader
      },
      {
        //duel add route
        path: ':duelId/add-panel-route',
        component: AddPanelRoutes
      },
       {
        //create duel
        path: 'challenge/create',
        component: CreateDuel
      },
      {
        //edit duel
        path: 'challenge/edit',
        component: CreateDuel
      },

      {
        //create db table
        path: ':duelId/create-db-table',
        component: CreateTable
      },
     
      {
        //match panel
        path: ':duelId/panel/:type/:referral',
        component: MatchPanel
      },
      {
        //match panel view
        path: ':duelId/panel/:type/:referral/view/:panelId',
        component: MatchPanel
      },
      {
        //match panel comment
        path: ':duelId/panel/:type/comments/view',
        component: ProjectComments
      },
      {
        //match panel comment
        path: ':duelId/panel/:type/comments/new',
        component: NewComment
      },
      {
        //match panel
        path: ':duelId/panel/new/settings/duel',
        component: PanelSettings
      },
      {
        //code editor
        path: ':duelId/code-editor',
        component: CodeEditor
      },
      {
        //code editor
        path: ':duelId/db-table',
        component: DBTable
      },
      {
        //match comment
        path: ':duelId/comment',
        component: MatchComment
      },
      {
        //match result
        path: ':duelId/participant/:actionType',
        component: MatchResult
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
   store,
    el: '#dashboard',
    vuetify: new Vuetify(),
    i18n,
    data:{
      pageloader: false,
      checkauthroot:'',
      username: '',
      typing: false,
      typinguser:'',
      notificationApproved:'',
      shownotificationboard: false,
      user_temp_id:0,
      pushManager:'',
      sentmessageid:0,
       members:[],
      users: [],
      usersCount:0,
      userEmail:'',
      userPassword:'',
      showTabs:true,
      showHeader:true,
       serverControlled:true,
      tabLabel:'dashboard',
      duels:[],
      selectedDuel:[],
      duelComments:[],
      is_reply_comment:false,
      replyCommentId:'',
      replyCommentUsername:'',
      redirectRoot:'',
      panelLanguage:'',
      codeEditorArray:[],
      codeEditorContent:'',
      EditorLanguage:'',
      CodeFilesData:[],
      is_edit:false,
      forcePanelReload:false,
      selectedFileCatType:'',
      panelRoutes:[],
      allChannel:[],
      selectedRoute:[],
      UrlTrack:'',
      SelectedTable:[],
      authProfile:[],
      isEditDuel: false,
      editDuelArray:[],
      localChannel:[],
      showShare:false,
      codeFiles:[],
      UserDuel:null,
      showShare:false,
      userList:[],
      frontEndFiles:[],
      backEndFiles:[],
      projectComments:[],
      replyCommentUsername:'',
      replyCommentId:0,
      is_reply_comment:false,
      referralUser:'user',
      showBoard:false,
      boardContent:'',
      boardBtnLabel:'',
      userPageTrack:[],
      selectedPage:[],
      drawer:false,
      notificationCount:0,
      notificationCountSpace:0,
      panel:[],
      panelBack:[],
      showFront:true,
      showBack: false,
      fromDuelBoard: true,
      UploadType:'',
      UploadMessage:'',
      SelectedCodeBox:[],
      panelResources:[],
      UploadResources:false,
      frompage:'duels',
      reloadDuelBoard:false,
      pageLoaderOpened: false,
      panelDataFull:[],
      showLangOption:false,
      userLocale:document.getElementById('appLocale').value,
      baseApiUrl:'http://api.citonhub.com/api',
      returnedToken:'',
      croppedImage:'',
       imagepath:'',
       imageExist:false,
       imagepath:'',
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
        imageViewPath:'',
        currentImage:'',
        imagepath1:'',
        imagepath2:'',
        imagepath3:'',
        imagepath4:'',
        tags:[],
        patterns:[],
        responses:[],
        fullData:[],
        contentGenratorComponent: undefined,
        selectedBot:[],
        isBotLink:false,
        selectedOrg:[],
        orgIdRoot:'user',
        itIsHomePage:false,
        showDashboardInfo:false,
     showHubInfo: false,
     showProfileInfo: false,
     panelViewMode:false,
     buttonText:'Ok',
     dashboardContent:'Create new communities, channels, teams and teaching bots in your dashboard',
     hubContent:'Network and share your works with other developers on CitonHub',
     profileContent:'Manage your account and connections in your profile',
     showImageEditor:false,
     contentInWordroot:'',
     fullnameroot:'',
     selectedChannelroot:''
        
    },
     mounted: function () {
      this.pageloader= false;
      let _this = this;
      this.connectToChannel();
      if(this.isLogged){
        this.fetchUserDetails();
       }
      this.SetLocale(this.userLocale);
     
      window.routerData = this.$router;
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
    closeNotification(uniqueId){
       
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => { 
          var  notificationTag = uniqueId;

          var notificationFilter = {
            tag: notificationTag
          };

          registration.getNotifications(notificationFilter)
          .then(function(notifications) {
               
            if(notifications[0] != undefined){
              
               for (let index = 0; index < notifications.length; index++) {
               
                notifications[index].close();
                 
               }
            }
           
            
          });
          });
      } 

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
      removeLocalStorage: function(key){
        localforage.removeItem(key).then(()=> {
          // Run this code once the key has been removed.
        
         
         
      }).catch(function(err) {
          // This code runs if there were any errors
          console.log(err);
      });
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

     if(type == 'privacy'){
      window.location = '/#/privacy-policy';
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
          
          if(e.actionType == 'new-duel'){
            this.$root.duels.unshift(e.data);
            this.$root.thisDuelConnection(e.data);
        }

        if(e.actionType == 'new-coin'){
          this.authProfile.coins = this.authProfile.coins + 1;
       }

      
          
     });
      

       }
  

    },

    disconnectDuel:function(duelArray){
      this.allChannel = [];
      duelArray.forEach((duel)=>{
     
       window.Echo.leave('duel.' + duel.duel_id);
     });
   },

    trackDuelConnections: function(DuelArray){

     
      if(this.allChannel.length == 0){


          if(this.checkauthroot == 'auth'){

            DuelArray.forEach((duel)=>{

          
      var channel =  window.Echo.private('duel.' + duel.duel_id)
       .listen('.DuelChannel',(e) => {


      

   


     if(e.actionType == 'duel-comment-like'){
       
            
          this.$root.duelComments.map((comment)=> {
          if(comment.id ==  e.data){
            
            comment.likes = parseInt(comment.likes) + 1;
          }
       });
         
        
    }


    if(e.actionType == 'duel-comment'){

      this.$root.duels.map((duel)=> {
        if(duel.duel_id ==  e.data.duel_id){
          
          duel.comments = duel.comments + 1;
        }
     });
     
  
       this.$root.duelComments.unshift(e.data);

    }

     
        if(e.actionType == 'duel-like'){
          this.$root.duels.map((duel)=> {
            if(duel.duel_id ==  e.data){
              
              duel.likes = duel.likes + 1;
            }
         });
          
      }

      if(e.actionType == 'new-participant'){
       
        this.$root.duels.map((duel)=> {
          if(duel.duel_id ==  e.data.duel_id){
            
            duel.duel_participants_array.unshift(e.data);
            duel.current_participant = duel.current_participant + 1;
          }
       });
     
           
         }
 

 
      if(e.actionType == 'duel-comment'){
 
        this.$root.duels.map((duel)=> {
          if(duel.duel_id ==  e.data){
            
            duel.comments = duel.comments + 1;
          }
       });
         
          
      }
          
         
    });

     this.allChannel.push(channel);
        });
        
     }
     
      }

   },

   thisDuelConnection: function(duel){
    
     window.Echo.private('duel.' + duel.duel_id)
     .listen('.DuelChannel',(e) => {


    

 


   if(e.actionType == 'duel-comment-like'){
     
          
        this.$root.duelComments.map((comment)=> {
        if(comment.id ==  e.data){
          
          comment.likes = parseInt(comment.likes) + 1;
        }
     });
       
      
  }


  if(e.actionType == 'duel-comment'){

    this.$root.duels.map((duel)=> {
      if(duel.duel_id ==  e.data.duel_id){
        
        duel.comments = duel.comments + 1;
      }
   });
   

     this.$root.duelComments.unshift(e.data);

  }

   
      if(e.actionType == 'duel-like'){
        this.$root.duels.map((duel)=> {
          if(duel.duel_id ==  e.data){
            
            duel.likes = duel.likes + 1;
          }
       });
        
    }

    if(e.actionType == 'new-participant'){
     
      this.$root.duels.map((duel)=> {
        if(duel.duel_id ==  e.data.duel_id){
          
          duel.duel_participants_array.unshift(e.data);
          duel.current_participant = duel.current_participant + 1;
        }
     });
   
         
       }



    if(e.actionType == 'duel-comment'){

      this.$root.duels.map((duel)=> {
        if(duel.duel_id ==  e.data){
          
          duel.comments = duel.comments + 1;
        }
     });
       
        
    }
        
       
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
        
           if(this.authProfile.user_locale != undefined){


            this.SetLocale(this.authProfile.user_locale);
      
          }
        
       
        
        
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
   
    loader:function(){
     
        this.pageloader = true;
    
    },
    joinclass: function(classid){
      this.$refs.board.membersroot = [];
  
    },
    isTyping:function(classid) {


      let channel =  window.Echo.join('class.' + classid)
                      .here((users)=> {
                        this.$root.members = users;
                      })
                       .joining((user) =>{
                        this.$root.members.push(user);
                       })
                       .leaving((user) => {
                        this.$root.members= this.$root.members.filter(u => u != user);
                       });
   
      setTimeout(function() {
        channel.whisper('typing', {
          user: Laravel.user.name,
            typing: true
        });
      }, 300);
   
   
          
        },
      scrollboard: function(){
        setTimeout(()=> {
           
          var container = this.$el.querySelector("#container");
              var containermd = this.$el.querySelector("#containermd");
               var containersm = this.$el.querySelector("#containersm");
       
       container.scrollTop = container.scrollHeight + 100;
       containermd.scrollTop = containermd.scrollHeight + 100;
       containersm.scrollTop = containersm.scrollHeight + 100;
                }, 1000);
      },
      runcode: function(code,language){
        this.$refs.board.codeboard = false;
        this.$refs.board.displaycodebox = true;
        if(language == 'HTML' || language == 'CSS' || language == 'JAVASCRIPT' || language == 'VUEJS'){
          this.$refs.board.code = code;
        }else{
         
            this.$refs.board.code = "<p style=\"color:red;\">Not Available, Coming soon..</p>";
        
        }
        
      },
      expandcode: function(){
        if( this.$refs.board.fuulscreencode){
          this.$refs.board.fuulscreencode = false;  
        }else{
          this.$refs.board.fuulscreencode = true;  
        }
      },
      showcode:function(messageid){
        this.$refs.board.showcode(messageid);
        this.$refs.board.showcodemd(messageid);
        this.$refs.board.showcodelg(messageid);
      },
      sendmessage: function(type,msgtext){


        if(type == 'text' && msgtext != ''){
          let content = '';
         
            content = msgtext;
              this.sentmessageid++;
                var newmsg = {
             user_id: this.user_id_root,
             type: type,
             content: content,
             sentmessageid: this.sentmessageid,
             msgsending: true,
            
             tutoruserid: this.$refs.board.tutoruserid,
             created_at: moment(new Date()).subtract(1,'hours')
           };
  
           
          
          
          
            this.$refs.board.messages.push(newmsg);

            this.$refs.board.emptyfield();
            
            
                    this.scrollboard();
                 
        
             axios.authProfile('/save-message',{
                  content: content,
                  classid: this.$refs.board.selected_class_id,
                  type:type,
                  activemembers: this.users,           
                    })
            .then(response => {
  
           
                
              
               if (response.status == 200) {
                
             let getmessage = this.$refs.board.messages.filter((message)=>{
              return  message.sentmessageid ==  newmsg.sentmessageid;
            });
               getmessage[0].msgsending = false;
            let remainingmsg =  this.$refs.board.messages.filter((message)=>{
              return  message.sentmessageid !=  newmsg.sentmessageid;
            });
                 
             
            remainingmsg.push(getmessage[0]);
            
            this.$refs.board.messages = remainingmsg;
  
                 
                  
         
              }
                
              
            })
            .catch(error => {
              console.log(error);
            })
        }
         
        
             
             
           
        },

        changeheight: function(){
          this.$refs.board.focusfield = true;
      },
      removefocus: function(){
      this.$refs.board.focusfield = false;
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
              axios.authProfile('/save-notification',{
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