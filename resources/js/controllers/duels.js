import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Hub from "../components/duels/Hub.vue"
import Duels from "../components/duels/Duels.vue"
import MatchBoard from "../components/duels/MatchBoard.vue"
import DuelInfo from "../components/duels/DuelInfo.vue"
import CreateDuel from "../components/duels/CreateDuel.vue"
import MatchPanel from "../components/duels/MatchPanel.vue"
import CodeEditor from "../components/duels/CodeEditor.vue"
import DBTable from "../components/duels/DBTable.vue"
import MatchComment from "../components/duels/MatchComment.vue"
import MatchResult from "../components/duels/MatchResult.vue"
import Login from "../components/auth/Login.vue"
import Auth from "../components/auth/auth.vue"
import Register from "../components/auth/Register.vue"
import Verify from "../components/auth/Verify.vue"
import SetUsername from "../components/auth/SetUsername.vue"
import NewCodeFile from "../components/duels/NewCodeFile.vue"
import PanelSettings from "../components/duels/PanelSettings.vue"
import AddPanelRoutes from "../components/duels/AddPanelRoutes.vue"
import CreateTable from "../components/duels/CreateTable.vue"
import CreateTableField from "../components/duels/CreateTableField.vue"
import CreateTableEntries from "../components/duels/CreateTableEntries.vue"
import PanelLoader from "../components/duels/PanelLoader.vue"
import DuelList from "../components/duels/DuelList.vue"
import ProjectComments from "../components/duels/ProjectComments.vue"
import NewComment from "../components/duels/NewComment.vue"
import HowTo from "../components/space/HowTo.vue"

const routes = [
  { path: '/', redirect: '/duel'},
  { path: '/how-to', name: 'HowTo', component: HowTo},
  { path: '/login', name: 'Login', component: Login},
  { path: '/auth/:frompage', name: 'Auth', component: Auth},
  { path: '/register', name: 'Register', component: Register},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  { path: '/duel',
     name: 'Hub', 
     component: Hub,
     redirect: '/duel/duels',
    children: [
      {
        // duels
        path: 'duels',
        component: Duels
      },
      {
        // duels
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
        path: 'create',
        component: CreateDuel
      },
      {
        //edit duel
        path: 'edit',
        component: CreateDuel
      },
      {
        // duel list
        path: 'list',
        component: DuelList
      },

      {
        //create db table
        path: ':duelId/create-db-table',
        component: CreateTable
      },
     
      {
        //create db table field
        path: ':duelId/create-db-table-field',
        component: CreateTableField
      },
      {
        //create db table entry
        path: ':duelId/create-db-table-entry',
        component: CreateTableEntries
      },
     
      {
        //match panel
        path: ':duelId/panel/:type',
        component: MatchPanel
      },
      {
        //match panel comment
        path: ':duelId/panel/:type/comments',
        component: ProjectComments
      },
      {
        //match panel comment
        path: ':duelId/panel/:type/comments/new',
        component: NewComment
      },
      {
        //match panel
        path: ':duelId/panel/new/settings',
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

const app = new Vue({
  router: router,
    el: '#duels',
    vuetify: new Vuetify(),
    data:{
      pageloader: false,
      checkauthroot:document.getElementById('checkauth').value,
      username: document.getElementById('checkauthUsername').value,
      typing: false,
      typinguser:'',
      notificationApproved:'',
      shownotificationboard: false,
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
      tabLabel:'duels',
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
      referralUser:'user'
    },
     mounted: function () {
      this.pageloader= false;
      let _this = this;
      this.trackConnections();
      this.fetchUserDetails();
      this.initialPushMangerReg();

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
     
       Echo.leave('duel.' + duel.duel_id);
     });
   },

    trackDuelConnections: function(DuelArray){

     
      if(this.allChannel.length == 0){


          if(this.checkauthroot == 'auth'){

            DuelArray.forEach((duel)=>{

          
      var channel =  Echo.private('duel.' + duel.duel_id)
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
    
     Echo.private('duel.' + duel.duel_id)
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
    leaveclass:function(classid){
      Echo.leave('class.' + classid);
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