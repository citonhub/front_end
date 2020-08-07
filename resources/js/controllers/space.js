import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Space from "../components/space/Space.vue"
import ChatList from "../components/space/ChatList.vue"
import CreateChannel from "../components/space/CreateChannel.vue"
import Channel from "../components/space/Channel.vue"
import ChannelContent from "../components/space/ChannelContent.vue"
import ChannelResources from "../components/space/ChannelResources.vue"
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
import CreateTableField from "../components/space/CreateTableField.vue"
import CreateTableEntries from "../components/space/CreateTableEntries.vue"
import ProjectComments from "../components/space/ProjectComments.vue"
import NewComment from "../components/space/NewComment.vue"
import HowTo from "../components/space/HowTo.vue"


const routes = [
  { path: '/', redirect: '/space'},
  { path: '/image-editor', name: 'ImageEditor', component: ImageEditor},
  { path: '/how-to', name: 'HowTo', component: HowTo},
  { path: '/login', name: 'Login', component: Login},
  { path: '/auth/:frompage', name: 'Auth', component: Auth},
  { path: '/:projectSlug/panel', name: 'ProjectPanel', component: ProjectPanel},
  { path: '/:projectSlug/panel/settings', name: 'PanelSettings', component: PanelSettings},
  { path: '/:projectSlug/create-db-table', name: 'CreateTable', component: CreateTable},
  { path: '/:projectSlug/add-panel-route', name: 'AddPanelRoutes', component: AddPanelRoutes},
  { path: '/:projectSlug/code-editor', name: 'CodeEditor', component: CodeEditor},
  { path: '/:projectSlug/db-table', name: 'DBTable', component: DBTable},
  { path: '/:projectSlug/create-db-table-field', name: 'CreateTableField', component: CreateTableField},
  { path: '/:projectSlug/create-db-table-entry', name: 'CreateTableEntries', component: CreateTableEntries},
  { path: '/:projectSlug/:language_type/add-new-file', name: 'NewCodeFile', component: NewCodeFile},
  { path: '/:projectSlug/comments', name: 'ProjectComments', component: ProjectComments},
  { path: '/:projectSlug/make-comment', name: 'NewComment', component: NewComment},
  { path: '/:projectSlug/page-loader/:referral', name: 'PanelLoader', component: PanelLoader},
  { path: '/register', name: 'Register', component: Register},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  { path: '/crop-image', 
  name: 'CropImage', 
  component: CropImage,
  },
  { path: '/space', 
  name: 'Space',
  component: Space,
  redirect: '/space/chat-list',
  children:[
    {
      // chat-list
      path: 'chat-list',
      component: ChatList
    },
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
    {
      // channel
      path: ':spaceId/channel',
      component: Channel,
      children: [
      {
      // content 
      path: 'content/:referral',
       component: ChannelContent
     },
     {
      // resources 
      path: 'resources',
       component: ChannelResources
     },
     {
      // projects 
      path: 'projects',
       component: ChannelProjects
     },
     {
      // board 
      path: 'board',
       component: ChannelBoard
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
  ]},
];

const router = new VueRouter({
  routes
});

const app = new Vue({
   router: router,
    el: '#space',
    vuetify: new Vuetify(),
    data:{
      pageloader:false,
      notificationApproved:'',
       pushManager:'',
      shownotificationboard: false,
      checkauthroot:document.getElementById('checkauth').value,
      user_temp_id: document.getElementById('checkauthId').value,
      username: document.getElementById('checkauthUsername').value,
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
      teamUnread:0,
      fromChatList:false,
    },
     mounted: function () {
      this.pageloader= false;
     
     
     
      this.fetchUserDetails();
      this.connectToChannel();
    },
    http: {
     headers:{
        'X-CSRF-TOKEN':document.head.querySelector("meta[name='csrf-token']").content
     }
  },
  methods:{
    LocalStore:function(key,data){
     
      localforage.setItem(key,data).then(function (value) {
       
        console.log(value);
    }).catch(function(err) {
        // This code runs if there were any errors
        console.log(err);
    });

    },
    getLocalStore:function(key){
      localforage.getItem(key, function(err, value) {
        // Run this code once the value has been
        // loaded from the offline store.
        console.log(value);
    });
    },
    scrollerControlHandler: function(){
      let MsgLenght = this.$root.returnedMessages.length;

         
      let startCount = MsgLenght - this.$root.messageInitialLimit;

       if(startCount >= 0){
        
        startCount = 0;
       }
     
 

   let sliedMsg = this.$root.returnedMessages.slice(startCount,MsgLenght);

    this.$root.Messages = sliedMsg;

  
  this.$root.messageStoreTop = this.$root.returnedMessages.slice(0,startCount);

   this.$root.messageStore = [];
    },
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
    connectToChannel:function(){
   
       if(this.checkauthroot == 'auth'){
        Echo.private('user.' + this.username)
        .listen('.UserChannel',(e) => {
          

          if(e.actionType == 'new-coin'){
            this.authProfile.coins = this.authProfile.coins + 1;
         }
         
          if(e.actionType == 'message-alert'){
            
            this.ChatList[1].map((space)=>{
             
              if(space.space_id == e.data){
                space.unread = space.unread + 1;
              }

            });

            this.ChatList[2].map((space)=>{
             
              if(space.space_id == e.data){
                space.unread = space.unread + 1;
              }

            });


            this.ChatList[4].map((space)=>{
             
              if(space.space_id == e.data){
                space.unread = space.unread + 1;
              }

            });
          }

          if(e.actionType == 'new-direct-space'){
             
            this.ChatList[4].unshift(e.data);
          }
          
     });
      

       }
    },
    loader:function(){
     
      this.pageloader = true;
  
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
       

     
   this.authProfile = userDetails;
   
  
   
   
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

   

    setTimeout(() => {
         
      var container = document.querySelector('#messageContainer');
      
   var element =  document.querySelector('#message' + 'bottomDiv');
  
   var top = element.offsetTop - 85;
   container.scrollTo(0, top);
   },500)
  },
    initialPushMangerReg: function(){
      if('serviceWorker' in navigator){
       navigator.serviceWorker.ready.then(registration => {
         if("PushManager" in window){
            
           registration.pushManager.getSubscription().then(sub => {
             
             if(sub == undefined){
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
        this.UrlTrack = window.location.href;
        if(this.$route.params.referral != null){
          this.referralUser = this.$route.params.referral;
         }
       this.$router.push({ path: '/auth/' + frompage });
        return;
      } 
   },
   scrollToBottom:function(){
        
         setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)
      

      },
    sendTextMessage: function(postData){
     
      axios.post('/send-message',postData)
        .then(response => {
      this.is_reply = false;
if (response.status == 200) {

       let messageId = this.NewMsg.message_id;
          let messageType = this.NewMsg.type;
         this.Messages.map((message)=>{
            if(messageId == message.message_id){
               message.loading = false;
               message.message_id = response.data[0].message_id; 
            }
         });
       
  this.replyMessage = [];
  
}
 

})
.catch(error => {

}) 
    },
    sendCodeMessage: function(postData){
      
      axios.post('/send-message',postData)
      .then(response => {

if (response.status == 200) {

     let messageId = this.NewMsg.message_id;
        let messageType = this.NewMsg.type;
       this.Messages.map((message)=>{
          if(messageId == message.message_id){
             message.loading = false;
             message.message_id = response.data[0].message_id; 
              message.code = response.data[0].code;
          }
       });
     
 this.scrollToBottom();

}


})
.catch(error => {

}) 

    },
    sendShareMessage: function(formData){
      axios.post('/send-message',formData,
         {
             headers:{
              'Content-Type':'multipart/form-data'
             },
             onUploadProgress: function(progressEvent){
                let messageId = this.NewMsg.message_id;
               this.Messages.map((message)=>{
                  if(messageId == message.message_id){
                     message.progressValue = this.progressvalue = parseInt(Math.round(
                   (progressEvent.loaded / progressEvent.total) * 100
                    ))
                  }
               });
             
           }.bind(this)
           })
          .then(response => {
            
           if (response.status == 200) {
               
                 
                let messageId = this.NewMsg.message_id;
                let messageType = this.NewMsg.type;
               this.Messages.map((message)=>{
                  if(messageId == message.message_id){
                     message.loading = false;
                     message.message_id = response.data[0].message_id;
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
            }else{
              
            }
              this.scrollToBottom();
            
          })
          .catch(error => {
           
              
          })
    }
   
}
});