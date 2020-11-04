import Vuex from 'vuex'
import { mapGetters } from 'vuex'

window.Echo = require('laravel-echo');
import Echo from 'laravel-echo';

window.io = require('socket.io-client');

Vue.use(Vuex)

axios.defaults.baseURL = 'http://api.citonhubnew.com/api'

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

import Space from "../components/space/Space.vue"
import ChatList from "../components/space/ChatList.vue"
import CreateChannel from "../components/space/CreateChannel.vue"
import Channel from "../components/space/Channel.vue"
import ChannelContent from "../components/space/ChannelContent.vue"
import SubSpace from "../components/space/SubSpace.vue"
import ChannelProjects from "../components/space/ChannelProjects.vue"
import ChannelBoard from "../components/space/ChannelBoard.vue"
import ImageEditor from "../components/home/ImageEditor.vue"
import ChannelMembers from "../components/space/ChannelMembers.vue"
import ChannelShare from "../components/space/ChannelShare.vue"
import ChannelEdit from "../components/space/EditSpace.vue"
import ChannelCodeBox from "../components/space/ChannelCodeBox.vue"
import CropImage from  "../components/space/CropImage.vue"
import Login from "../components/auth/Login.vue"
import Auth from "../components/auth/auth.vue"
import Register from "../components/auth/Register.vue"
import Verify from "../components/auth/Verify.vue"
import SetUsername from "../components/auth/SetUsername.vue"
import CreateProject from "../components/space/CreateProject.vue"
import ProjectPanel from "../components/space/ProjectPanel.vue"
import PanelSettings from "../components/space/PanelSettings.vue"
import CreateTable from "../components/space/CreateTable.vue"
import AddPanelRoutes from "../components/space/AddPanelRoutes.vue"
import CodeEditor from "../components/space/CodeEditor.vue"
import DBTable from "../components/space/DBTable.vue"
import NewCodeFile from "../components/space/NewCodeFile.vue"
import PanelLoader from "../components/space/PanelLoader.vue"
import ProjectComments from "../components/space/ProjectComments.vue"
import NotFound from "../components/auth/NotFound.vue"
import ForgotPassword from "../components/auth/ForgotPassword.vue"
import ResetPassword from "../components/auth/ResetPassword.vue"





const routes = [
  { path: '/', redirect: '/space'},
  { path: '/image-editor', name: 'ImageEditor', component: ImageEditor},
  { path: '/login', name: 'Login', component: Login},
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  },
  { path: '/auth/:frompage', name: 'Auth', component: Auth},
  { path: '/:projectSlug/panel', name: 'ProjectPanel', component: ProjectPanel},
  { path: '/:projectSlug/panel/settings', name: 'PanelSettings', component: PanelSettings},
  { path: '/:projectSlug/create-db-table', name: 'CreateTable', component: CreateTable},
  { path: '/:projectSlug/add-panel-route', name: 'AddPanelRoutes', component: AddPanelRoutes},
  { path: '/:projectSlug/code-editor', name: 'CodeEditor', component: CodeEditor},
  { path: '/:projectSlug/db-table', name: 'DBTable', component: DBTable},
  { path: '/:projectSlug/:language_type/add-new-file', name: 'NewCodeFile', component: NewCodeFile},
  { path: '/:projectSlug/comments', name: 'ProjectComments', component: ProjectComments},
  { path: '/:projectSlug/page-loader/:referral', name: 'PanelLoader', component: PanelLoader},
  { path: '/register', name: 'Register', component: Register},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
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
        default: ChannelContent,
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
        to.matched[0].components.modal = ChannelContent
      }
    }

    next()
  }
},
{ path: '/code-viewer',
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
        default: ChannelContent,
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
        to.matched[0].components.modal = ChannelContent
      }
    }

    next()
  }
},
{ path: '/search',
   name: 'search',
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
        default: ChatList,
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
        to.matched[0].components.modal = ChatList
      }
    }

    next()
  }
},
  { path: '/crop-image', 
  name: 'CropImage', 
  component: CropImage,
  },
  {
    // channel
    path: '/space/:spaceId/channel',
    component: Channel,
    meta: {
      twModalView: true
    },
    beforeEnter: (to, from, next) => {
   
      to.matched[0].components = {
        default: Channel,
        modal: false
      }

       if(window.thisUserState != undefined){

        thisUserState.$root.fullImageViewer = false;
            
        thisUserState.$root.showCodeBox = false;
        thisUserState.$root.showChatBottom = true;
        thisUserState.$root.codeBoxOpened = false;

        thisUserState.$root.codeIsLive = false;

        thisUserState.$root.codeFromChat= false;
        thisUserState.$root.codeBoxOpened = false;

       }
       
    next()
  },
    children: [
    {
    // content 
    path: 'content/:referral',
     component: ChannelContent, 
   },
   {
    // resources 
    path: 'sub/:channelType',
     component: SubSpace
   },
   {
    // projects 
    path: 'projects',
     component: ChannelProjects
   },
   {
    // board 
    path: 'board',
     component: ChannelBoard,
     meta: {
      twModalView: true
    },
   },
   {
    // members 
    path: 'members',
     component: ChannelMembers
   },
   {
    // share 
    path: 'share',
     component: ChannelShare
   },
   {
    // edit 
    path: 'edit',
     component: ChannelEdit
   },
   {
    // share 
    path: 'code-box',
     component: ChannelCodeBox
   },
   
 
   ]
  },
  { path: '/space/sub/', 
  name: 'SpaceSub',
  component: Space,
  children:[
    {
      // create-channel
      path: ':type/create',
      component: CreateChannel
    },
    {
      // create-project
      path: 'create-project',
      component: CreateProject
    },
   
  ]},
  { path: '/space', 
  name: 'Space',
  component: Space,
  redirect: '/space/chat-list',
  children:[
    {
      // chat-list
      path: 'chat-list',
      component: ChatList,
      meta: {
        twModalView: true
      },
      beforeEnter: (to, from, next) => {
     
        to.matched[0].components = {
          default: ChatList,
          modal: false
        }
  
         if(window.thisUserState != undefined){
  
          thisUserState.$root.showSearchControl = false;
              
         
  
         }
         
      next()
    },
    }
   
  ]},
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
    el: '#space',
    vuetify: new Vuetify(),
    i18n,
    data:{
      pageloader:false,
      notificationApproved:'',
       pushManager:'',
      shownotificationboard: false,
      checkauthroot:'noauth',
      user_temp_id: 0,
      username: '',
      showTabs:true,
      showHeader:true,
      fullImageViewer:false,
      imageViewPath:'',
      fullImageColor:'#c5c5c5',
      tabLabel:'space',
      currentImage:'',
      imagepath:'',
      imagepath1:'',
      imagepath2:'',
      imagepath3:'',
      imagepath4:'',
      fullCodeLanguage:'HTML',
      FullcodeContent:'<p>Share Your Codes!</p>',
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
          selectedSpaceId:'',
           imageTemp4:'',
           imageViewPath:'',
           fullImageColor:'',
           replyMessage:[],
           showRootReply:false,
           is_reply:false,
           replied_message_id:'',
           selectedSpace:[],
           croppedImage:'',
           SpaceWithoutChannel:[],
           personalSpace:[],
           teamSpace:[],
           panelLanguage:'',
      codeEditorArray:[],
      codeEditorContent:'',
      EditorLanguage:'',
      CodeFilesData:[],
      is_edit:false,
      forcePanelReload:false,
      selectedFileCatType:'',
      panelRoutes:[],
      selectedRoute:[],
      backEndFiles:[],
      shareLink:'',
      shareName:'',
      UrlTrack:'',
      SelectedTable:[],
      projectData:[],
      projectComments:[],
      replyCommentId:0,
      is_reply_comment:false,
      showShare:false,
      replyCommentUsername:'',
      Messages:null,
      voiceRecorder:false,
      recordUrl:'',
      authProfile:[],
       SpaceUsers:[],
      AlertRoot:false,
       ChatList:[],
       forceListReload:false,
      AlertMsgRoot:'',
      channel: null,
      recordedAudio:undefined,
      typinguser:'',
      typing:false,
      messageScroller:'',
      showCodeBox:false,
      ShowButton:true,
      ProjectMembers:[],
      localChannel:[],
      codeFiles:[],
      frontEndFiles:[],
      referralUser:'user',
      showBoard:false,
      boardContent:'',
      boardBtnLabel:'',
      userPageTrack:[],
      selectedPage:[],
      drawer:false,
      sharePage:false,
      NewMsg:[],
      messageStoreTop:[],
      returnedMessages:[],
      messageInitialLimit:30,
      notificationCount:0,
      notificationCountSpace:0,
      messageStore:[],
      UploadResources:false,
      UploadType:'',
      UploadMessage:'',
      panelResources:[],
      showTeams:false,
      showDirect:false,
      showChannel:false,
      showProject:false,
      panel:[],
      showSuggetions:false,
      selectedSpaceMembers:[],
      directUnread:0,
      channelUnread:0,
      spaceFullData:[],
      teamUnread:0,
      fromChatList:false,
      typingSpace:'',
      showMsgDelete:false,
      messageIdToDelete:'',
      panelBack:[],
      SelectedCodeBox:[],
      showFront:true,
      projectSpace:[],
     showBack:false,
     sendingMessage:false,
     panelDataFull:[],
     showChatBottom:true,
     frompage:'space',
     chatisOpen:false,
     codeMessageId:0,
     codeBoxOpened: false,
     codeIsLive: false,
     liveShowCode: true,
     CodeResult:'',
     screenSharingOn: false,
     connection:undefined,
     audioconnection:undefined,
     allAudioParticipant: [],
     showUserBoard:false,
     showVideoScreen:false,
     connectingToSocket: true,
     localAudioMuted:false,
     liveIsOn: false,
     liveInitiated:false,
     remoteLiveHappening:false,
     remoteScreen: false,
     remoteCode:false,
     remoteAudio:false,
     showUserInfo:false,
     userBasicInfo:[],
     infoLoaderText:'loading user info...',
     selectedMember:[],
     makeRecallSpace: true,
     selfStopTrigger: false,
     newMasterId:null,
     codeFromChat:false,
     userIsReconnecting:false,
     fromSpaceShare:false,
     presentRoomId: null,
     selectedSubSpaceName:'',
     selectedGenSpaceType:'',
     pageLoaderOpened:false,
     TrackLastSubSpace:[],
     showLangOption: false,
     fetchSpaceUpdate: true,
     isConnected: true,
     panelIsWeb:false,
     reloadSpaceInfo:false,
     showAdminOptions:false,
     adminMembers:[],
     roomNotExist:false,
     reconnectionCount:0,
     userLocale:document.getElementById('appLocale').value,
     roomCheckingInitaited: false,
     bottomEditorValue:'',
     returnedToken:'',
     globalUsers:[],
     closenotifyRoot:false,
     codeboxComponent:undefined,
     showSearchControl:false,
     userDeviceId:null,
     msgCompRaw:undefined,
     chatListComponent:undefined,
     channelTopComponent:undefined,
     channelContentComponent:undefined,
     dataconnection:undefined,
     msgScrollComponent:undefined,
        },
     mounted: function () {
      this.pageloader= false;
     
       if(this.isLogged){
        this.fetchUserDetails();
       }
      

     

       window.routerData = this.$router;
      this.connectToChannel();
       this.SetLocale(this.userLocale);
       window.thisUserState = this;
    },computed: {
      ...mapGetters([
        'isLogged'
      ])
    },
    created(){
      window.thisUserState = this;
     
      const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.username = userData.user.username;
        this.user_temp_id = userData.user.id;
        this.returnedToken = userData.token;
        this.setEcho();
       
      this.$store.commit('setUserData', userData)

      window.routerData = this.$router;
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

       this.checkUserDevice();
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
    checkUserDevice: function(){
         

      let storedInfo = this.$root.getLocalStore('user_device_id_' + this.$root.username);

       storedInfo.then((result)=>{
         if(result != null){
         

          let finalResult = JSON.parse(result);

          this.userDeviceId = finalResult[0];

          this.saveDeviceInfo(this.userDeviceId);


         }else{

          var deviceId = "device_" + Math.random().toString(36).slice(2);

          this.userDeviceId = deviceId;

          this.$root.LocalStore('user_device_id_' + this.$root.username,[deviceId]);

          this.saveDeviceInfo(deviceId);


         }

         this.$root.manualFetchUnread();
       })


      },
      saveDeviceInfo:function(deviceId){

        axios.post('/save-user-device',{
          deviceId: deviceId,
          device_name: navigator.appName,
          device_platform: navigator.platform
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

      },
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
    checkIfMessageExist(data){

      let messageData = this.$root.Messages.filter((message)=>{
                   return message.message_id == data.message_id ||  message.temp_id == data.temp_id;
                });

                if(messageData.length == 0){

                  return false
                }else{
                  return true
                }

    },
    changeLocale: function(locale){

      this.$root.showLangOption = false;

     
      this.$root.$i18n.locale = locale;

      axios.post( '/save-locale',{
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
    manualFetchUnread: function(){


      axios.get('/check-for-new-space-messages/'+ this.$root.userDeviceId)
 .then(response => {
 
 if (response.status == 200) {

    let returnData = response.data;
      
      this.handleSpaceData(returnData);

 

}

 
  

})
.catch(error => {
  
   
})


    },
    updateSpaceMessages: function(){

      let interval = null;

      interval = setInterval(()=>{

       if(this.isLogged){

        window.Echo.connector.socket.on('connect', ()=>{
          this.isConnected = true
      })

      window.Echo.connector.socket.on('disconnect', ()=> {
          this.isConnected = false
      })

      window.Echo.connector.socket.on('reconnecting', (attemptNumber)=>{
       this.isConnected = false
    });
          
   
           
          if(this.$root.makeRecallSpace && this.isConnected == false){

             this.$root.makeRecallSpace = false;

axios.get( '/check-for-new-space-messages/' + this.$root.userDeviceId)
 .then(response => {
 
 if (response.status == 200) {

    let returnData = response.data;
      
      this.handleSpaceData(returnData);

   this.$root.makeRecallSpace = true;

}

 
  

})
.catch(error => {
  
   this.$root.makeRecallSpace = true;
})




          }else{


          }

       }
    
       
    
      },3000);

   },
   handleSpaceData: function(returnData){

    returnData.forEach(space => {

     

      if( this.$root.selectedSpace.space_id != space.space_id){


           let storedMsg = this.$root.getLocalStore(space.space_id  + this.$root.username);
     
      storedMsg.then((result)=>{

       
            
        if(result != null){

           
         
         let parsedResult = JSON.parse(result);

         let MessagesFull = parsedResult;

         let newMessages = space.new_messages;
              
             
           

          newMessages.forEach((messages)=>{

            MessagesFull[0].push(messages);

              this.$root.LocalStore(space.space_id  + this.$root.username,MessagesFull);

             let unreadStoredMsg = this.$root.getLocalStore('unread' + space.space_id + this.$root.username);

     unreadStoredMsg.then((result)=>{

       let finalResultUnread = JSON.parse(result);

        finalResultUnread.push(messages)


        localforage.setItem('unread' + space.space_id + this.$root.username,JSON.stringify(finalResultUnread)).then( ()=> {
this.$root.checkUnread(true);


   

}).then(function (value) {
// we got our value

}).catch(function (err) {
console.log(err)
// we got an error
});

       
        
       

        

      

       
        
          
        

        });

          });

           
        }else{



         
      
         localforage.setItem('unread' + space.space_id + this.$root.username,JSON.stringify(returnData)).then( ()=> {

this.$root.checkUnread(true);




}).then(function (value) {
// we got our value

}).catch(function (err) {
console.log(err)
// we got an error
});


        


           let parsedResult = JSON.parse(result);

         let MessagesFull = parsedResult;

         let newMessages = space.new_messages;
              
             
             


          newMessages.forEach((messages)=>{

           

            

             let unreadStoredMsg = this.$root.getLocalStore('unread' + space.space_id + this.$root.username);

     unreadStoredMsg.then((result)=>{

        if(result != null){

            

           
       let finalResultUnread = JSON.parse(result);

        finalResultUnread.push(messages)


       localforage.setItem('unread' + space.space_id + this.$root.username,JSON.stringify(finalResultUnread)).then( ()=> {
this.$root.checkUnread(true);



}).then(function (value) {
// we got our value

}).catch(function (err) {
console.log(err)
// we got an error
});
       
        
       
        
        

        }

          
        

        });

          });


        }
      });

      }else{


         let storedMsg = this.$root.getLocalStore(space.space_id  + this.$root.username);
     
      storedMsg.then((result)=>{

       
            
        if(result != null){
         
         let parsedResult = JSON.parse(result);

         let MessagesFull = parsedResult;

         let newMessages = space.new_messages;
              
             
           

          newMessages.forEach((messages)=>{

            MessagesFull[0].push(messages);

              this.$root.LocalStore(space.space_id  + this.$root.username,MessagesFull);

              this.$root.Messages.push(messages);

               this.$root.sortChatList();

           this.$root.scrollToBottom(); 

           this.$root.updateSpaceTracker(space.space_id);

           

          });

           
        }
      });
        

      }
     
 
    
   
    
  });

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
    sortArray: function(arrayValue){
      arrayValue.sort(function(a, b){ 
      
        return new Date(b.message_track) - new Date(a.message_track); 
    }); 

    },
    sortChatList: function(){
        if(this.ChatList[1] != undefined){
  
          let array1 = this.ChatList[1];
          let array2 = this.ChatList[2];
          let array3 =  this.ChatList[4];
        
        
         this.sortArray(array1);
         this.sortArray(array2);
          this.sortArray(array3);
      
          this.ChatList[1] = array1;
          
          this.ChatList[2] = array2;

          this.ChatList[4] = array3;

        }
       
    },
    updateSpaceTracker: function(spaceId){
     
      if(this.ChatList[1] != undefined){
       
        this.ChatList[1].map((space)=>{
             
          if(space.space_id == spaceId){
            space.message_track = new Date();
          }
  
        });
  
        this.ChatList[2].map((space)=>{
         
          if(space.space_id == spaceId){
            space.message_track = new Date();
          }
  
        });
  
  
        this.ChatList[4].map((space)=>{
         
          if(space.space_id == spaceId){
            space.message_track = new Date();
          }
  
        });
  
        
      }
      
      this.sortChatList();

    },
    markSpaceRead:function(spaceId){

      if(this.ChatList[1] != undefined){
       
        this.ChatList[1].map((space)=>{
             
          if(space.space_id == spaceId){

            
            space.unread = 0;
          }
  
        });
  
        this.ChatList[2].map((space)=>{
         
          if(space.space_id == spaceId){
           
            space.unread = 0;
          }
  
        });
  
  
        this.ChatList[4].map((space)=>{
         
          if(space.space_id == spaceId){

           

            space.unread = 0;
          }
  
        });
  
      
      }

      this.$root.LocalStore('ChatListNew' + this.username,this.ChatList);
      this.$root.LocalStore('unread' + spaceId  + this.$root.username,[]);
    },
    checkUnread: function(fromChatList){

      



       if(this.ChatList[1] != undefined){

        
        for (let index = 0; index < this.$root.ChatList[1].length; index++) {
           
          let unreadStoredMsg = this.$root.getLocalStore('unread' + this.$root.ChatList[1][index].space_id + this.$root.username) ;
  
          unreadStoredMsg.then((result)=>{
  
             if(result != null){
  
              let finalResultUnread = JSON.parse(result);

               
                  
                  
                   
                     
                    this.$root.ChatList[1].map((chat)=>{
      
                       if(chat.space_id == this.$root.ChatList[1][index].space_id){
      
                         
      
                         chat.unread = finalResultUnread.length;

                         if(finalResultUnread.length > 0){

                          this.updateSpaceTracker(chat.space_id)
         
                        }

                         
      
                       }
                      })
                 
                  
            

             
  
             
  
             }
  
            
              
            
  
          });
        
          
        }

       
  
        
       
         for (let index = 0; index < this.$root.ChatList[2].length; index++) {
  
          let unreadStoredMsg2 = this.$root.getLocalStore('unread' + this.$root.ChatList[2][index].space_id + this.$root.username);
  
          unreadStoredMsg2.then((result)=>{
  
            if(result != null){
  
              let finalResultUnread2 = JSON.parse(result);
  
            
             
              
 
                this.$root.ChatList[2].map((chat)=>{
 
                 if(chat.space_id == this.$root.ChatList[2][index].space_id){

                  
 
                   chat.unread = finalResultUnread2.length;

                   if(finalResultUnread2.length > 0){

                    this.updateSpaceTracker(chat.space_id)
   
                  }

                   

                  
               
 
                 }
 
              })

             
              
             

             
  
            }
  
           
            
  
          });
        
         
          
        }

       
      
       
  
         for (let index = 0; index < this.$root.ChatList[4].length; index++) {
  
          let unreadStoredMsg3 = this.$root.getLocalStore('unread' + this.$root.ChatList[4][index].space_id + this.$root.username);
  
          unreadStoredMsg3.then((result)=>{
  
            if(result != null){
  
              let finalResultUnread3 = JSON.parse(result);

             

              

            
             
                

                this.$root.ChatList[4].map((chat)=>{
  
                  if(chat.space_id == this.$root.ChatList[4][index].space_id){
  
                    chat.unread = finalResultUnread3.length;


                   if(finalResultUnread3.length > 0){

                    this.updateSpaceTracker(chat.space_id)
   
                  }

                   
      
  
                  }
  
               })

              

             
  
             
              
  
            }
  
            
              
            
  
          });
        
       
          
        }
    

        

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
    scrollerControlHandler: function(){

    

      if(this.$root.messageStore.lenght > 0){
       
        let MsgLenght = this.$root.returnedMessages.length;

         
      let startCount = MsgLenght - this.$root.messageInitialLimit;

       if(startCount >= 0){
        
        startCount = 0;
       }
     
 

   let sliedMsg = this.$root.returnedMessages.slice(startCount,MsgLenght);

    this.$root.Messages = sliedMsg;

  
  this.$root.messageStoreTop = this.$root.returnedMessages.slice(0,startCount);

   this.$root.messageStore = [];

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

      if(type == 'profile'){
        this.pageloader= true;
        window.location = '/profile';
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

     if(type == 'help'){
       return;
     }
    
   },
   deleteMessage: function(messageId){

      this.showMsgDelete = false;
 
       let remainingMsg =  this.Messages.filter((message)=>{
        return message.message_id != messageId;
       });

       this.Messages = remainingMsg;

       let remainingMsgFull =  this.returnedMessages.filter((message)=>{
        return message.message_id != messageId;
       });

       this.returnedMessages = remainingMsgFull;

       // update to localStorage
       
       this.$root.spaceFullData[0] = this.$root.returnedMessages;


               

       let fullData = [];
          fullData.push(this.$root.spaceFullData[0]);
      fullData.push(this.$root.spaceFullData[1]);

       let thirdData = [];
          
          thirdData.push(this.$root.spaceFullData[2][0])

      fullData.push(thirdData);

   this.$root.LocalStore(this.$root.selectedSpace.space_id  + this.$root.username,fullData);

   axios.post('/delete-message',{
    'message_id':messageId
 } )
.then(response => {

if (response.status == 200) {
 

}


})
.catch(error => {  
  
}) 
    
   },
   clearUnreadMessageRemote: function(messageId){


    axios.post('/delete-unread-message',{
      message_id:messageId,
      device_id: this.$root.userDeviceId
   })
  .then(response => {
  
  if (response.status == 200) {
   
  
  }
  
  
  })
  .catch(error => {  
    
  }) 
     
   
   },
    connectToChannel:function(){
   
       if(this.checkauthroot == 'auth'){

     
        window.Echo.private('user.' + this.username)
        .listen('.UserChannel',(e) => {
          

          if(e.actionType == 'new-coin'){
            this.authProfile.coins = this.authProfile.coins + 1;
           }
         
          if(e.actionType == 'message-alert'){

             this.clearUnreadMessageRemote(e.data.message_id);
            
            let messageFormat = {
              space_id: e.data.space_id,
              new_messages: [e.data]
            };

            let returnData = [messageFormat];

            this.handleSpaceData(returnData);
            
          }

          if(e.actionType == 'new-direct-space'){
             
            this.ChatList[4].unshift(e.data);
          }

          if(e.actionType == 'coin-removed'){
            this.authProfile.coins = this.authProfile.coins - e.data;
          }
          
     });


     window.Echo.join('global')
     .here((users) => {

        
       
     this.$root.globalUsers = users;

      

   })
   .joining((user) => {

      
   
    
   this.$root.globalUsers.push(user);

  
   
   })
   .leaving((user) => {
      let newList = this.$root.globalUsers.filter((eachuser)=>{
          return eachuser.id != user.id
      });
   this.$root.globalUsers = newList;

   
    
   
   })
      

       }
    },
    loader:function(){
     
      this.pageloader = true;
  
  },
  closeSpaceNotification: function(spaceId){
    var  notificationTag = spaceId;

    var notificationFilter = {
      tag: notificationTag
    };

    return navigator.serviceWorker.getNotifications(notificationFilter)
        .then(function(notifications) {
          

          notifications.close();
          
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
  scrollToBottom: function(){

   

    if(this.$root.msgScrollComponent){

      setTimeout(() => {
         
        this.$root.msgScrollComponent.messageContainer.scrollToBottom();
     },200)

    }
    


  },
  returnLastIndex:function(){
     let lastMsg = this.$root.Messages[this.$root.Messages.length - 1];

     let msgIndex = lastMsg.index_count;

         
     return msgIndex;
  },
    initialPushMangerReg: function(){
      if('serviceWorker' in navigator){
       navigator.serviceWorker.ready.then(registration => {
         if("PushManager" in window){
            
           registration.pushManager.getSubscription().then(sub => {
             
             if(sub == undefined && !this.closenotifyRoot){
              this.shownotificationboard = true;
             }else{

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
          
            }
           })
          
         }
       })
      }
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
   pushDataToLocal:function(data){

    localforage.getItem(data.space_id + this.$root.username).then((result)=> {

     if(result != null){
      
      
      let finalResult = JSON.parse(result);
          finalResult[0].push(data);
        
          this.LocalStore(data.space_id  + this.$root.username,finalResult);
        
     }

    });
     
   },
   updateUnreadMsg: function(data){
     
    localforage.getItem('unread' + data.space_id  + this.$root.username).then((result)=> {

      if(result != null && result != "[]"){
       let finalResult = JSON.parse(result);
         
           finalResult[0].push(data.message_id);
         
           this.LocalStore('unread' + data.space_id  + this.$root.username,finalResult);
         
      }
 
     });

   },

   updateSpaceData:function(spaceId){
    let fullData = [];
    fullData.push(this.$root.spaceFullData[0]);
fullData.push(this.$root.spaceFullData[1]);

 let thirdData = [];
    
    thirdData.push(this.$root.spaceFullData[2][0])

fullData.push(thirdData);




this.$root.LocalStore(spaceId + this.$root.username,fullData);
   },
  
      updateSentMessage:function(postData){
      
        let unsentMsg = this.$root.getLocalStore('unsentnew' + postData.space_id  + this.$root.username);

        unsentMsg.then((result)=>{

          if(result != null){

           let finalResult = JSON.parse(result);
             
             

           let remainingMsg = finalResult.filter((message)=>{
             return message.temp_id != postData.temp_id;
          });


          this.LocalStore('unsentnew' + postData.space_id  + this.$root.username,[]);

              
          this.sendingMessage = false;

          }else{
            this.sendingMessage = false;
          }

          

         
       
        });


      },
      storeUnsentMessages:function(postData){

        let unsentMsg = this.$root.getLocalStore('unsentnew' + postData.space_id  + this.$root.username);

         unsentMsg.then((result)=>{

           if(result != null){

            let finalResult = JSON.parse(result);
              
              

            let messageData = finalResult.filter((message)=>{
              return message.temp_id == postData.temp_id;
           });


                
               if(messageData.length == 0){

                finalResult.push(postData);
                this.LocalStore('unsentnew' + postData.space_id  + this.$root.username,finalResult);

               }

               
               

           }else{

            
              this.LocalStore('unsentnew' + postData.space_id  + this.$root.username,[postData]);

           }

          
        
         });
        
       

      },
    sendTextMessage: function(postData){
         this.sendingMessage = true;
      axios.post('/send-message',postData)
        .then(response => {
      this.is_reply = false;
if (response.status == 200) {

  

       let messageId = response.data[0].temp_id;
          let messageType = this.NewMsg.type;
         this.Messages.map((message)=>{
            if(messageId == message.message_id){
               message.loading = false;
               message.message_id = response.data[0].message_id; 
               message.id = response.data[0].message_id; 
               message.index_count= this.$root.returnLastIndex() + 1;

               
            }
         });
    this.updateSpaceData(response.data[0].space_id);
       
  this.replyMessage = [];

  
  this.updateSentMessage(postData);

  this.sendingMessage = false;
   
  
}
 

})
.catch(error => {
  
  this.sendingMessage = false;
  
  this.storeUnsentMessages(postData);
   
}) 
    },
    sendCodeMessage: function(postData){
      this.sendingMessage = true;
      axios.post('/send-message',postData)
      .then(response => {

if (response.status == 200) {

  

     let messageId = response.data[0].temp_id;
        let messageType = this.NewMsg.type;
       this.Messages.map((message)=>{
          if(messageId == message.message_id){
             message.loading = false;
             message.message_id = response.data[0].message_id; 
             message.id = response.data[0].message_id; 
              message.code = response.data[0].code;
                message.index_count = this.$root.returnLastIndex() + 1;
          }
       });
     
       this.updateSpaceData(response.data[0].space_id);
 
      this.scrollToBottom();
 this.updateSentMessage(postData);
 this.sendingMessage = false;

 
}


})
.catch(error => {
  this.sendingMessage = false;


  
}) 

    },
    sendShareMessage: function(formData){

       
      this.sendingMessage = true;
      axios.post('/send-message',formData,
         {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: (progressEvent)=>{
                let messageId = this.NewMsg.message_id;
               this.Messages.map((message)=>{
                  if(messageId == message.message_id){
                     message.progressValue = this.progressvalue = parseInt(Math.round(
                   (progressEvent.loaded / progressEvent.total) * 100
                    ))
                  }
               });
             
           }
           })
          .then(response => {

             
            
           if (response.status == 200) {
               
           
                let messageId = response.data[0].temp_id;
                let messageType = this.NewMsg.type;
               this.Messages.map((message)=>{
                  if(messageId == message.message_id){
                     message.loading = false;
                     message.message_id = response.data[0].message_id;
                     message.id = response.data[0].message_id; 
                     message.index_count = this.$root.returnLastIndex() + 1;
                     if(messageType == 'image'){
                       message.image = response.data[0].image;
                     }
                     if(messageType == 'file'){
                       message.file = response.data[0].file;
                     }
                     if(messageType == 'video'){
                       message.video = response.data[0].video;
                     }
                     if(messageType == 'audio'){
                       message.audio = response.data[0].audio;
                     }
                     if(messageType == 'code'){
                       message.code = response.data[0].code;
                     }
                  }
               });

               this.sendingMessage = false;

               
            }else{
              
            }

            this.scrollToBottom();

            this.updateSpaceData(response.data[0].space_id);
             
            
          })
          .catch(error => {
           
            this.sendingMessage = false;
           
          })
    },
    setDataConnection:function(){

      let _this = this;

        this.$root.dataconnection = new RTCMultiConnection();

          this.$root.dataconnection.enableLogs = false;

// by default, socket.io server is assumed to be deployed on your own URL
this.$root.dataconnection.socketURL = 'https://live.citonhub.com:9001/';



this.$root.dataconnection.socketMessageEvent = 'data-channel';

  this.$root.dataconnection.extra = {
       profile: this.$root.authProfile,
      joinedAt: (new Date).toISOString(),
      volume: 80.00,
      speaking: false
         };

         this.$root.dataconnection.socketCustomParameters = '&extra=' + JSON.stringify(this.$root.dataconnection.extra);

this.$root.dataconnection.session = {
    audio: false,
    video: false,
    data: true
    
};

this.$root.dataconnection.mediaConstraints = {
    audio: true,
    video: false
};

this.$root.dataconnection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};



 // first step, ignore default STUN+TURN servers
 this.$root.dataconnection.iceServers = [];

 // second step, set STUN url
   this.$root.dataconnection.iceServers.push({
     urls: 'stun:165.227.152.44:3478'  
    });
 
 // last step, set TURN url (recommended)

this.$root.dataconnection.iceServers.push({
  urls: 'turn:165.227.152.44:3478',
  credential: '15Raymond',
  username: 'ILoveCitonHubPort'
 });












this.$root.dataconnection.onmessage = (event) => {
  
    

   if(event.data.action == 'typing' && this.$root.selectedSpace.space_id == event.data.space_id){

    this.$root.FullcodeContent = event.data.data;

     this.codeboxComponent.setCodeContent();
     
   }
   
   if(event.data.action == 'codeChange' && this.$root.selectedSpace.space_id == event.data.space_id){

    this.$root.fullCodeLanguage = event.data.data;

    this.codeboxComponent.setCodeContent();
     
   }

   if(event.data.action == 'codeRun' && this.$root.selectedSpace.space_id == event.data.space_id){

            this.$root.liveShowCode = false;

                   this.$root.CodeResult = event.data.data;
                   this.codeboxComponent.setCodeContent();
     
   }

   if(event.data.action == 'returnToCode' && this.$root.selectedSpace.space_id == event.data.space_id){

    this.$root.liveShowCode = true;

    this.codeboxComponent.setCodeContent();
     
   }

   if(event.data.action == 'neutral' ){

    if(this.$root.allAudioParticipant.length != 0){
      this.$root.allAudioParticipant.map((user)=>{
  
        if(user[1] == event.data.data.userid){
  
            
        
          user[0].speaking = event.data.data.speaking;
           
        }
  
         });
     }
     
   }
   
   if(event.data.action == 'new_master' && this.$root.selectedSpace.space_id == event.data.space_id){

    this.$root.newMasterId = event.data.data;

                  

    this.$root.adminMembers.forEach((member)=>{

member.master_user = false;

});

this.$root.adminMembers.map((member)=>{
if(member.memberId ==  this.$root.newMasterId){

member.master_user = true;

}
})

this.$root.selectedSpaceMembers.forEach((member)=>{

member.master_user = false;

});

this.$root.selectedSpaceMembers.map((member)=>{
if(member.memberId ==  this.$root.newMasterId){

member.master_user = true;

}
})
this.codeboxComponent.setCodeContent();
   }
};




  






    },
    setSreenShareConnection:function(){
          

      let _this = this;

       this.$root.connection = new RTCMultiConnection();

        this.$root.connection.enableLogs = false;

       this.$root.connection.socketURL = 'https://live.citonhub.com:9001/';

       this.$root.connection.socketMessageEvent = 'screen-sharing';

        this.$root.connection.extra = {
      profile: this.$root.authProfile,
     joinedAt: (new Date).toISOString()
        };

        this.$root.connection.socketCustomParameters = '&extra=' + JSON.stringify( this.$root.connection.extra);

         this.$root.connection.session = {
          screen: true,
          oneway: true
           };
       
       this.$root.connection.sdpConstraints.mandatory = {
   OfferToReceiveAudio: false,
   OfferToReceiveVideo: false
            };


          

      // first step, ignore default STUN+TURN servers
      this.$root.connection.iceServers = [];

// second step, set STUN url
  this.$root.connection.iceServers.push({
    urls: 'stun:165.227.152.44:3478'  
   });

// last step, set TURN url (recommended)

        
     this.$root.connection.iceServers.push({
      urls: 'turn:165.227.152.44:3478',
      credential: '15Raymond',
      username: 'ILoveCitonHubPort'
     });


     this.$root.connection.videosContainer = document.getElementById('videos-container');

      

     this.$root.connection.onstream = function(event) {
   var existing = document.getElementById(event.streamid);
   if(existing && existing.parentNode) {
     existing.parentNode.removeChild(existing);
   }

   event.mediaElement.removeAttribute('src');
   event.mediaElement.removeAttribute('srcObject');
   event.mediaElement.muted = true;
   event.mediaElement.volume = 0;

   var video = document.createElement('video');

   try {
       video.setAttributeNode(document.createAttribute('autoplay'));
       video.setAttributeNode(document.createAttribute('playsinline'));
   } catch (e) {
       video.setAttribute('autoplay', true);
       video.setAttribute('playsinline', true);
   }

  
  if(event.type === 'local') {
     video.volume = 0;
     try {
         video.setAttributeNode(document.createAttribute('muted'));
     } catch (e) {
         video.setAttribute('muted', true);
     }
   }
   video.srcObject = event.stream;

   var width = innerWidth - 80;
   var mediaElement = getHTMLMediaElement(video, {
       title: event.userid,
       buttons: ['full-screen'],
       showOnMouseEnter: false,
     
   });

   _this.$root.connection.videosContainer.appendChild(mediaElement);

   setTimeout(function() {
       mediaElement.media.play();
   }, 5000);

   mediaElement.id = event.streamid;
};

this.$root.connection.onstreamended = function(event) {
   var mediaElement = document.getElementById(event.streamid);
   if (mediaElement) {
       mediaElement.parentNode.removeChild(mediaElement);

       if(event.userid === _this.$root.connection.sessionid && !_this.$root.connection.isInitiator) {
         alert('Broadcast is ended. We will reload this page to clear the cache.');
         location.reload();
       }
   }
};

this.$root.connection.onMediaError = function(e) {
   if (e.message === 'Concurrent mic process limit.') {
       if (DetectRTC.audioInputDevices.length <= 1) {
           alert('Please select external microphone');
           return;
       }

       var secondaryMic = DetectRTC.audioInputDevices[1].deviceId;
       _this.$root.connection.mediaConstraints.audio = {
           deviceId: secondaryMic
       };

       _this.$root.connection.join(_this.$root.connection.sessionid);
   }
};





       },
       setAudioConnection(){
        
        let _this = this;

        this.$root.audioconnection = new RTCMultiConnection();

          this.$root.audioconnection.enableLogs = false;

// by default, socket.io server is assumed to be deployed on your own URL
this.$root.audioconnection.socketURL = 'https://live.citonhub.com:9001/';

this.$root.audioconnection.bandwidth = {
  audio: 128
};


this.$root.audioconnection.socketMessageEvent = 'audio-conference';

  this.$root.audioconnection.extra = {
       profile: this.$root.authProfile,
      joinedAt: (new Date).toISOString(),
      volume: 80.00,
      speaking: false
         };

         this.$root.audioconnection.socketCustomParameters = '&extra=' + JSON.stringify(this.$root.audioconnection.extra);

this.$root.audioconnection.session = {
    audio: true,
    video: false,
    data: true
    
};

this.$root.audioconnection.mediaConstraints = {
    audio: true,
    video: false
};

this.$root.audioconnection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: false
};



 // first step, ignore default STUN+TURN servers
 this.$root.audioconnection.iceServers = [];

 // second step, set STUN url
   this.$root.audioconnection.iceServers.push({
     urls: 'stun:165.227.152.44:3478'  
    });
 
 // last step, set TURN url (recommended)

this.$root.audioconnection.iceServers.push({
  urls: 'turn:165.227.152.44:3478',
  credential: '15Raymond',
  username: 'ILoveCitonHubPort'
 });

this.$root.audioconnection.audiosContainer = document.getElementById('audios-container');





this.$root.audioconnection.onstream = function(event) {

 
	
 var width = parseInt(_this.$root.audioconnection.audiosContainer.clientWidth / 2) - 20;
  var mediaElement = getHTMLMediaElement(event.mediaElement, {
      title: event.userid,
      buttons: ['full-screen'],
      width: width,
      showOnMouseEnter: false
  });



  
  
  if(event.type === 'local') {
    event.mediaElement.muted = true;
		delete event.mediaElement;
	}

  _this.$root.audioconnection.audiosContainer.appendChild(mediaElement);

  setTimeout(function() {
      mediaElement.media.play();
  }, 2000);

  mediaElement.id = event.streamid;


 
    
   

  
};

this.$root.audioconnection.onmute = function(e) {
  if (!e.mediaElement) {
      return;
  }

  if (e.muteType === 'both' || e.muteType === 'video') {
      e.mediaElement.src = null;
      e.mediaElement.pause();
  } else if (e.muteType === 'audio') {
      e.mediaElement.muted = true;
  }
};

this.$root.audioconnection.onunmute = function(e) {
  if (!e.mediaElement) {
      return;
  }

  if (e.unmuteType === 'both' || e.unmuteType === 'video') {
      e.mediaElement.poster = null;
      e.mediaElement.src = URL.createObjectURL(e.stream);
      e.mediaElement.play();
  } else if (e.unmuteType === 'audio') {
      e.mediaElement.muted = false;
  }
};


this.$root.audioconnection.onleave = this.$root.audioconnection.onclose = (event) =>{


  let newusers = this.$root.allAudioParticipant.filter((user)=>{

    return user[1] != event.userid;

  });

  
   
  this.$root.allAudioParticipant = newusers;
  
    
};


this.$root.audioconnection.multiPeersHandler.onPeerStateChanged = (state)=> {

   let connection = this.$root.audioconnection;
  if (state.iceConnectionState.search(/disconnected|closed|failed/gi) === -1) {
      
      

      var peer = connection.peers[state.userid].peer;

      

       

       let userState = state.iceConnectionState;

       let newInfo = this.$root.allAudioParticipant.filter((user)=>{

        return user[1] == state.userid;

      });

    

       if(newInfo.length == 0  && state.extra.profile.username != this.username){

        this.$root.allAudioParticipant.push([state.extra,state.userid])

       }




     
      return;
  }else{

  

      

         let newusers = this.$root.allAudioParticipant.filter((user)=>{

           return user[1] != state.userid;
   
         });

         
          
         this.$root.allAudioParticipant = newusers;


      

     
  
  }
};




this.$root.audioconnection.onstreamended = function(event) {
    var mediaElement = document.getElementById(event.streamid);
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
    }

  
};

  





      },
      checkAudioRoomState: function(master){
      
      
        if(this.$root.audioconnection != undefined){

         

          this.$root.connectingToSocket = true;

          this.$root.audioconnection.DetectRTC.load(()=> {

         
            if (this.$root.audioconnection.DetectRTC.hasMicrophone === true) {
                // enable microphone
                this.$root.audioconnection.mediaConstraints.audio = true;
                this.$root.audioconnection.session.audio = true;
               

            }
          
            if (this.$root.audioconnection.DetectRTC.hasMicrophone === false ) {
          
              alert('Please attach a microphone device.');
          
              
            }
          
            if (this.$root.audioconnection.DetectRTC.hasSpeakers === false) { // checking for "false"
                alert('Please attach a speaker device. You will be unable to hear incoming audios.');
  
            }
          
          
            let _this = this;

        
           
            
             
           

              this.$root.audioconnection.checkPresence('audio' + this.$root.selectedSpace.space_id, function(isRoomExist, roomid) {
              

                     
                if (isRoomExist === true) {
                 _this.joinAudioRoom();
                 _this.dataconnection.join('data' + _this.$root.selectedSpace.space_id)
              } else {
  
                  
                if(master){
                  _this.openAudioRoom();
                  _this.dataconnection.open('data' + _this.$root.selectedSpace.space_id)
                }else{
  
                  _this.roomNotExist = true;
  
                  _this.roomCheckingInitaited = true;

                  
                    _this.rejoinAudio(master);
                  
                 
  
                  return;
                }
  
                
              }
  
  
        _this.checkIfUserIsReconnecting(master)
  
        
       
        _this.$root.localAudioMuted = false;
        _this.$root.connectingToSocket = false;
        _this.userIsReconnecting = false;
        });

             
   
           

     
  
          });
   
         
   
  
          
        }       

       
 
 
           
       
       },
       
       rejoinAudio: function(master){

         let _this = this;


         if(this.$root.audioconnection != undefined){

         
          
        

        // disconnect with all users
    this.$root.audioconnection.getAllParticipants().forEach(function(pid) {
        _this.$root.audioconnection.disconnectWith(pid);
    });

    // stop all local cameras
    this.$root.audioconnection.attachStreams.forEach(function(localStream) {
        localStream.stop();
    });

    // close socket.io connection
   this.$root.audioconnection.closeSocket();


           
         }


         if(this.$root.connection != undefined){


          // disconnect with all users
this.$root.connection.getAllParticipants().forEach(function(pid) {
    _this.$root.connection.disconnectWith(pid);
});



// stop all local cameras
this.$root.connection.attachStreams.forEach(function(localStream) {
    localStream.stop();
});


      this.$root.connection.closeSocket();
      }
    
      this.$root.connection = undefined;

      this.$root.screenSharingOn = false;
       
        this.$root.showVideoScreen = false;
        
       
       
        this.$root.audioconnection = undefined;


         this.$root.setAudioConnection();

        

          if(master){

                  this.$root.checkAudioRoomState(true);

               }else{
                  this.$root.checkAudioRoomState(false);
               }

       


      },
        setUserSpeaker: function(){

         
          


            let _this = this;

            if(this.$root.audioconnection == undefined){
                
             
            }else{
            
                
             if(this.$root.allAudioParticipant.length > 0){
                // work on local streams
             var localStream = this.$root.audioconnection.attachStreams[0];

             var options = {};
           var speechEvents = hark(localStream, options);


         speechEvents.on('speaking', function() {

          if(_this.$root.audioconnection != undefined && _this.$root.selectedSpace.space_id != undefined){

          
          
            let data = {
              userid: _this.$root.audioconnection.userid,
              speaking: true
          };

          _this.$root.dataconnection.send({
            action:'neutral',
            data: data,
            space_id: _this.$root.selectedSpace.space_id
          });
      
          
      
      
          }
           
            
        });
    
        speechEvents.on('stopped_speaking', function() {

          

            if(_this.$root.audioconnection != undefined && _this.$root.selectedSpace.space_id != undefined){

            
            
              let data = {
                userid: _this.$root.audioconnection.userid,
                speaking: false
            };
        
            _this.$root.dataconnection.send({
              action:'neutral',
              data: data,
              space_id: _this.$root.selectedSpace.space_id
            });
        
        
        
            }
        });
         
    

   
             }

            

            


            }


        
        

         

             
           

       


        },

       

         checkIfUserIsReconnecting: function(master){     
       

          let interval = null;

           interval = setInterval(()=>{

             if(!this.$root.liveIsOn){
              

              clearInterval(interval);

              return;
             }


            this.setUserSpeaker();
            
            var socket = this.$root.audioconnection.socket;
             
            
           
           
           if(socket != undefined){

           


            socket.on('connect', ()=>{
              this.userIsReconnecting = false;

          })

         socket.on('disconnect', ()=> {
           
          this.userIsReconnecting = true;

          let _this = this;

          })

        socket.on('reconnecting', (attemptNumber)=>{
         
          this.userIsReconnecting = true;

        });

           }
            

            if(this.userIsReconnecting){

               this.reconnectionCount++

               if(this.reconnectionCount == 1){

                 this.reconnectionCount = 0;

                 this.connectingToSocket = 'disconnected';


               
                  this.rejoinAudio(master);
               

               }


               


           


            }else{

              this.connectingToSocket = false;
            }
             

           },3000);
           

         },

         openScreenRoom: function(){    
         
           
    

        let _this = this;
      
        this.$root.connection.sdpConstraints.mandatory = {
           OfferToReceiveAudio: false,
           OfferToReceiveVideo: true
       };
      
     this.$root.connection.open('screen' + this.$root.selectedSpace.space_id, function() {
       
       
        
    });

      },
      joinScreenRoom: function(){    
         
           
        let _this = this;
      
     this.$root.connection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: true
    };

    this.$root.connection.join('screen' + this.$root.selectedSpace.space_id);

      },
      checkScreenRoomState: function(master){
      
       let _this = this;
       
      

         this.$root.connection.checkPresence('screen' + this.$root.selectedSpace.space_id, function(isRoomExist, roomid) {



          if (isRoomExist === true) {
            _this.joinScreenRoom();
         } else {

             
           if(master){
             _this.openScreenRoom();
           }else{

             return;
           }

           
         }

       
       
    });


       
        

      },
      openAudioRoom: function(){  
        
          
         
           
        let _this = this;
      
        this.$root.audioconnection.open('audio' + this.$root.selectedSpace.space_id, () =>{

            
          _this.$root.connectingToSocket = false;
          _this.userIsReconnecting = false;
    });


   

     

   

  
    
  
      },
      joinAudioRoom: function(){    
         
           
        let _this = this;
        
         this.$root.audioconnection.join('audio' + this.$root.selectedSpace.space_id);

         _this.$root.connectingToSocket = false;
         _this.userIsReconnecting = false;

        

        
    

      },

      sendLiveSignal:function(type){

        

        this.$root.liveInitiated = true;

         let interval = null;

          let _this = this;
        
          interval = setInterval(()=>{
            if(_this.$root.liveInitiated){

           _this.liveChanges(type,'liveIsOn')
   
           
        }else{

           _this.liveChanges(type,'liveIsOff')

         clearInterval(interval);
        }
           
      
         },2000);

         

     

     },
     liveChanges:function(data,action) {

   
   let channel =  window.Echo.join('space.' + this.$root.selectedSpace.space_id);

  

      channel.whisper('liveCoding', {
       data:data,
         action: action,
         spaceId: this.$root.selectedSpace.space_id
     });


    

      
  
       
     },
     
   
}
});