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
import Suggestions from "../components/space/Suggestions.vue"



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
      // suggestions
      path: 'suggestions',
      component: Suggestions
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
  
        this.sortChatList();
      }
      


    },
    markSpaceRead:function(spaceId){

      if(this.ChatList[1] != undefined){
       
        this.ChatList[1].map((space)=>{
             
          if(space.space_id == spaceId){

            this.teamUnread -= space.unread;
            
            space.unread = 0;
          }
  
        });
  
        this.ChatList[2].map((space)=>{
         
          if(space.space_id == spaceId){
            this.channelUnread -= space.unread;
            space.unread = 0;
          }
  
        });
  
  
        this.ChatList[4].map((space)=>{
         
          if(space.space_id == spaceId){

            this.directUnread -= space.unread;

            space.unread = 0;
          }
  
        });
  
      
      }

      this.$root.LocalStore('ChatList' + this.username,this.ChatList);
      this.$root.LocalStore('unread' + spaceId  + this.$root.username,[]);
    },
    checkUnread: function(fromChatList){

      



       if(this.ChatList[1] != undefined){

         let unreadLength1 = 0;

        for (let index = 0; index < this.$root.ChatList[1].length; index++) {
           
          let unreadStoredMsg = this.$root.getLocalStore('unread' + this.$root.ChatList[1][index].space_id + this.$root.username) ;
  
          unreadStoredMsg.then((result)=>{
  
             if(result != null){
  
              let finalResultUnread = JSON.parse(result);
                  
                  if(finalResultUnread.length != 0 && fromChatList){
                    this.updateSpaceTracker(this.$root.ChatList[1][index].space_id);
                  }
                  
              unreadLength1 += finalResultUnread.length ;

              this.$root.teamUnread = unreadLength1;
            
  
              this.$root.ChatList[1][index].unread = finalResultUnread.length;
  
             }
  
            
              
            
  
          });
        
          
        }

       
  
        
        let unreadLenght2 = 0;
         for (let index = 0; index < this.$root.ChatList[2].length; index++) {
  
          let unreadStoredMsg2 = this.$root.getLocalStore('unread' + this.$root.ChatList[2][index].space_id + this.$root.username);
  
          unreadStoredMsg2.then((result)=>{
  
            if(result != null){
  
              let finalResultUnread2 = JSON.parse(result);
  
              if(finalResultUnread2.length != 0 && fromChatList){
                this.updateSpaceTracker(this.$root.ChatList[2][index].space_id);
              }
              
              unreadLenght2 += finalResultUnread2.length ;

            
  
               this.$root.channelUnread = unreadLenght2;

               this.$root.ChatList[2][index].unread = finalResultUnread2.length;
  
            }
  
           
            
  
          });
        
         
          
        }

       
      
        let UnreadLength3 = 0;
  
         for (let index = 0; index < this.$root.ChatList[4].length; index++) {
  
          let unreadStoredMsg3 = this.$root.getLocalStore('unread' + this.$root.ChatList[4][index].space_id + this.$root.username);
  
          unreadStoredMsg3.then((result)=>{
  
            if(result != null){
  
              let finalResultUnread3 = JSON.parse(result);

              if(finalResultUnread3.length != 0 && fromChatList){
                this.updateSpaceTracker(this.$root.ChatList[4][index].space_id);
              }
  
              
              UnreadLength3 += finalResultUnread3.length ;



              this.$root.directUnread  = UnreadLength3;
  
              this.$root.ChatList[4][index].unread = finalResultUnread3.length;
              
  
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

   this.$root.LocalStore(this.$route.params.spaceId  + this.$root.username,fullData);

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
    connectToChannel:function(){
   
       if(this.checkauthroot == 'auth'){
        Echo.private('user.' + this.username)
        .listen('.UserChannel',(e) => {
          

          if(e.actionType == 'new-coin'){
            this.authProfile.coins = this.authProfile.coins + 1;
           }
         
          if(e.actionType == 'message-alert'){
            
            this.ChatList[1].map((space)=>{
             
              if(space.space_id == e.data.space_id){
               
                space.message_track = new Date();
                

              
               
              }

            });

            this.ChatList[2].map((space)=>{
             
              if(space.space_id == e.data.space_id){
               
                space.message_track = new Date();
               
              }

            });


            this.ChatList[4].map((space)=>{
             
              if(space.space_id == e.data.space_id){
              
                space.message_track = new Date();
               
                
              }


             

            });

            this.sortChatList();
            
          }

          if(e.actionType == 'new-direct-space'){
             
            this.ChatList[4].unshift(e.data);
          }

          if(e.actionType == 'coin-removed'){
            this.authProfile.coins = this.authProfile.coins - e.data;
          }
          
     });
      

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
   pushDataToLocal:function(data){

    localforage.getItem(data.space_id).then((result)=> {

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
   scrollToBottom:function(){
        
         setTimeout(() => {
         
           var container = document.querySelector('#messageContainer');
           
        var element =  document.querySelector('#messagebottomDiv');
       
        var top = element.offsetTop - 120;
        container.scrollTo(0 , top);
        },500)
      

      },
      updateSentMessage:function(postData){
      
        let unsentMsg = this.$root.getLocalStore('unsent' + postData.space_id  + this.$root.username);

        unsentMsg.then((result)=>{

          if(result != null){

           let finalResult = JSON.parse(result);
             
             

           let remainingMsg = finalResult.filter((message)=>{
             return message.temp_id != postData.temp_id;
          });


          this.LocalStore('unsent' + postData.space_id  + this.$root.username,[]);

              
          this.sendingMessage = false;

          }else{
            this.sendingMessage = false;
          }

          

         
       
        });


      },
      storeUnsentMessages:function(postData){

        let unsentMsg = this.$root.getLocalStore('unsent' + postData.space_id  + this.$root.username);

         unsentMsg.then((result)=>{

           if(result != null){

            let finalResult = JSON.parse(result);
              
              

            let messageData = finalResult.filter((message)=>{
              return message.temp_id == postData.temp_id;
           });


                
               if(messageData.length == 0){

                finalResult.push(postData);
                this.LocalStore('unsent' + postData.space_id  + this.$root.username,finalResult);

               }

               
               

           }else{

            
              this.LocalStore('unsent' + postData.space_id  + this.$root.username,[postData]);

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
            }
         });
    this.updateSpaceData(response.data[0].space_id);
       
  this.replyMessage = [];

  
  this.updateSentMessage(postData);
   
  
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
              message.code = response.data[0].code;
          }
       });
     
       this.updateSpaceData(response.data[0].space_id);
 this.scrollToBottom();

 this.updateSentMessage(postData);


 
}


})
.catch(error => {
  this.sendingMessage = false;
  this.storeUnsentMessages(postData);
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

            this.updateSpaceData(response.data[0].space_id);
              this.scrollToBottom();
            
          })
          .catch(error => {
           
            this.sendingMessage = false;
           
          })
    },
    setSreenShareConnection:function(){
          

      let _this = this;

       this.$root.connection = new RTCMultiConnection();

        this.$root.connection.enableLogs = false;

       this.$root.connection.socketURL = 'https://sandbox.citonhub.com/';

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
    urls: 'stun:165.22.77.63:3478'  
   });

// last step, set TURN url (recommended)

        
     this.$root.connection.iceServers.push({
      urls: 'turn:165.22.77.63:3478',
      credential: '#5Raymond',
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
this.$root.audioconnection.socketURL = 'https://sandbox.citonhub.com/';


this.$root.audioconnection.socketMessageEvent = 'audio-conference';

  this.$root.audioconnection.extra = {
       profile: this.$root.authProfile,
      joinedAt: (new Date).toISOString(),
      volume: 80.00,
      speaking: true
         };

         this.$root.audioconnection.socketCustomParameters = '&extra=' + JSON.stringify(this.$root.audioconnection.extra);

this.$root.audioconnection.session = {
    audio: false,
    video: false,
    
};

this.$root.audioconnection.mediaConstraints = {
    audio: false,
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
     urls: 'stun:165.22.77.63:3478'  
    });
 
 // last step, set TURN url (recommended)

this.$root.audioconnection.iceServers.push({
  urls: 'turn:165.22.77.63:3478',
  credential: '#5Raymond',
  username: 'ILoveCitonHubPort'
 });

this.$root.audioconnection.audiosContainer = document.getElementById('audios-container');
this.$root.audioconnection.onstream = function(event) {
    var width = parseInt(this.$root.audioconnection.audiosContainer.clientWidth / 2) - 20;
    var mediaElement = getHTMLMediaElement(event.mediaElement, {
        title: event.userid,
        width: width,
        showOnMouseEnter: false
    });

    _this.$root.audioconnection.audiosContainer.appendChild(mediaElement);

    setTimeout(function() {
        mediaElement.media.play();
    }, 1000);

    mediaElement.id = event.streamid;

  
};





// voice detection



this.$root.audioconnection.onmute = function(event) {

  if (event.stream.pause) {
      // for audio-streams
      // ask hark.js to resume looping and checking for voice activity
      event.stream.pause();
  }
};

this.$root.audioconnection.onunmute = function(event) {
 
  if (event.stream.resume) {
      // for audio-streams
      // ask hark.js to stop looping and checking for voice activity
      event.stream.resume();
  }
};






this.$root.audioconnection.onstreamended = function(event) {
    var mediaElement = document.getElementById(event.streamid);
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
    }

  
};

  





      },
      checkAudioRoomState: function(){
      
      
        if(this.$root.audioconnection != undefined){

          this.$root.connectingToSocket = true;

          this.$root.audioconnection.DetectRTC.load(()=> {

         
            if (this.$root.audioconnection.DetectRTC.hasMicrophone === true) {
                // enable microphone
                this.$root.audioconnection.mediaConstraints.audio = true;
                this.$root.audioconnection.session.audio = true;
                this.$root.audioconnection.session.data = true;

            }
          
            if (this.$root.audioconnection.DetectRTC.hasMicrophone === false ) {
          
              alert('Please attach a microphone device.');
          
                this.$root.audioconnection.dontCaptureUserMedia = true;
            }
          
            if (this.$root.audioconnection.DetectRTC.hasSpeakers === false) { // checking for "false"
                alert('Please attach a speaker device. You will be unable to hear incoming audios.');
  
            }
          
          
            let _this = this;
   
            this.$root.audioconnection.openOrJoin('audio' + this.$route.params.spaceId, function(isRoomExist, roomid) {
       if (isRoomExist === false && _this.$root.audioconnection.isInitiator === true) {
           // if room doesn't exist, it means that current user will create the room
           _this.openAudioRoom();

         
       }
  
       if(isRoomExist) {
  
     
          
       
          
          
       }
  
      /** 
       * 
       *  
      _this.checkUserPresence(roomid);
      _this.setUserSpeaker();
      _this.checkIfUserIsReconnecting();*/ 

      _this.getAllConnectedUsers(roomid);

      _this.setUserSpeaker();

      _this.$root.connectingToSocket = false;
      _this.userIsReconnecting = false;
      });

     
  
          });
   
         
   
  
          
        }       

       
 
 
           
       
       },

        getAllConnectedUsers(sessionId){

             let connectionInterval = null;

             connectionInterval = setInterval(()=>{


               if(this.$root.audioconnection == undefined){
                           clearInterval(connectionInterval)
              }else{
   
               let fullUsers = [];
   
               this.$root.audioconnection.getAllParticipants().forEach((remoteUserId) => {
                 var user = this.$root.audioconnection.peers[remoteUserId];
                    
                     fullUsers.push([user.extra,user.userid]);
               
               
               });  
                  this.$root.allAudioParticipant = fullUsers;


                  this.checkUserPresence(sessionId);

                  this.checkIfUserIsReconnecting();
               
               
                       }


             },5000)

           
          

          


        }, 

        setUserSpeaker: function(){

         
           let speakerInterval = null;

           speakerInterval = setInterval(()=>{


            let _this = this;

            if(this.$root.audioconnection == undefined){
                
             clearInterval(speakerInterval);
            }else{
            
                
             if(this.$root.allAudioParticipant.length > 0){
                // work on local streams
             var localStream = this.$root.audioconnection.attachStreams[0];

             var options = {};
           var speechEvents = hark(localStream, options);
         
    

   speechEvents.on('volume_change', function(volume, threshold) {
        
     
    if(_this.$root.audioconnection != undefined){

      let channel =  window.Echo.join('space.' + _this.$route.params.spaceId);
    
      let data = {
        userid: _this.$root.audioconnection.userid,
        volume: volume,
        threshold: threshold,
    };

    channel.whisper('audioSpeaker', {
       data:data,
       spaceId: _this.$route.params.spaceId
   });


    }
    
     

     
   });
             }

            

            


            }


           },500)
        

         

             
           

       


        },

        checkUserPresence: function(sessionId){

          
         
         

            let _this = this;

             if(this.$root.audioconnection == undefined){
                 
              
             }else{
             
                 
              if(this.$root.allAudioParticipant.length > 0){
            
              }

              this.$root.audioconnection.checkPresence(sessionId, function(isRoomExists, roomid) {
                    
              
  
                if(!isRoomExists){

                 _this.audioconnection.closeSocket();
  
                   _this.checkAudioRoomState();
                   
                }else{
                 
                }
  
              });

             


             }

              
            

          

         
         },

         checkIfUserIsReconnecting: function(){

          

        
                 
            
              var socket = this.$root.audioconnection.socket;
             
             
              
            socket.on('connect', ()=>{
              this.userIsReconnecting = false;

             
          })

         socket.on('disconnect', ()=> {
          this.userIsReconnecting = true;
            
          let _this = this; 
          
           this.$root.audioconnection.getAllParticipants().forEach(function(pid) {
                  _this.$root.audioconnection.disconnectWith(pid);
              });
          
              // stop all local cameras
              this.$root.audioconnection.attachStreams.forEach(function(localStream) {
                  localStream.stop();
              });
        
         
          })

        socket.on('reconnecting', (attemptNumber)=>{
         

          this.$root.audioconnection.renegotiate();
         
        });
        
       

              if(this.userIsReconnecting){

                

                

                

              this.connectingToSocket = true;

              this.checkAudioRoomState();

             
               
                 

              }else{

               
               
               
              }

              

             

             
         

         },

         openScreenRoom: function(){    
         
           
        let _this = this;
      
     this.$root.connection.open('screen' + this.$route.params.spaceId, function() {
       
        console.log(_this.$root.connection.userid)
         console.log('screen created')
    });

      },
      joinScreenRoom: function(){    
         
           
        let _this = this;
      
     this.$root.connection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: true
    };

    this.$root.connection.join('screen' + this.$route.params.spaceId);

      },
      checkScreenRoomState: function(){
      
       let _this = this;
       
      

         this.$root.connection.openOrJoin('screen' + this.$route.params.spaceId, function(isRoomExist, roomid) {
        if (isRoomExist === false && this.$root.connection.isInitiator === true) {
            // if room doesn't exist, it means that current user will create the room
            _this.openScreenRoom();
        }

        if(isRoomExist) {
           
           
        }

       
    });


       
        

      },
      openAudioRoom: function(){  
        
          
         
           
        let _this = this;
      
        this.$root.audioconnection.open('audio' + this.$route.params.spaceId, () =>{

            
          _this.$root.connectingToSocket = false; 
    });

     

   

  
    
  
      },
      joinAudioRoom: function(){    
         
           
        let _this = this;
        
         this.$root.audioconnection.join('audio' + this.$route.params.spaceId);

       

        

        
    

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

   
   let channel =  window.Echo.join('space.' + this.$route.params.spaceId);

  

      channel.whisper('liveCoding', {
       data:data,
         action: action,
         spaceId: this.$route.params.spaceId
     });


    

      
  
       
     },
     
   
}
});