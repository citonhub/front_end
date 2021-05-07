import Vuex from 'vuex'
import { mapGetters } from 'vuex'

window.Echo = require('laravel-echo');
import Echo from 'laravel-echo';

window.io = require('socket.io-client');

Vue.use(Vuex)

//axios.defaults.baseURL = 'http://localhost:8000/api'
//axios.defaults.baseURL = 'http://api.citonhubnew.com/api'
axios.defaults.baseURL = 'https://api.citonhub.com/api'
//axios.defaults.baseURL = 'https://api.beta.citonhub.com/api'

const store = new Vuex.Store({
  state: {
    user: null,
    connected: navigator.onLine,
  },

  mutations: {
    'SET_CONNECTED' (state, payload) {
      state.connected = payload
    },

    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user_new', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData () {
      localStorage.removeItem('user_new')
      location.reload();
    }
  },

  actions: {
    setConnected ({ commit }, payload) {
      commit('SET_CONNECTED', payload)
    },
    login ({ commit }, credentials) {
      return axios
        .post('/login', credentials)
        .then(response =>{

          
           
           if(response.status == 200){
            
            routerData.push({ path: '/verify' });

             return;

           }
           

          commit('setUserData', response.data)
        })
    },


    logout ({ commit }) {
      commit('clearUserData')
    }
  },

  getters : {
    isLogged: state => !!state.user,
    connected: state => state.connected,
  }
});


import VueRouter from 'vue-router'

Vue.use(VueRouter)

// authentication routes
const Register = () => import(/* webpackChunkName: "register" */ '../components/auth/Register.vue');
const Login = () => import(/* webpackChunkName: "login" */ '../components/auth/Login.vue');
const Verify = () => import(/* webpackChunkName: "verify" */ '../components/auth/Verify.vue');
const ForgotPassword = () => import(/* webpackChunkName: "ForgotPassword" */ '../components/auth/ForgotPassword.vue');
const ResetPassword = () => import(/* webpackChunkName: "ResetPassword" */ '../components/auth/ResetPassword.vue');
const SetUsername = () => import(/* webpackChunkName: "SetUsername" */ '../components/auth/SetUsername.vue');
// dashboard routes
const Board = () => import(/* webpackChunkName: "Board" */ '../components/dashboard/Board.vue');
const Projects = () => import(/* webpackChunkName: "Projects" */ '../components/dashboard/Projects.vue');
const Diary = () => import(/* webpackChunkName: "Diary" */ '../components/dashboard/Diary.vue');
const Challenges = () => import(/* webpackChunkName: "Challenges" */ '../components/dashboard/Challenges.vue');
const Wallet = () => import(/* webpackChunkName: "Wallet" */ '../components/dashboard/Wallet.vue');
const Notifications = () => import(/* webpackChunkName: "Notifications" */ '../components/dashboard/Notifications.vue');
const Settings = () => import(/* webpackChunkName: "Settings" */ '../components/dashboard/Settings.vue');
const Mentors = () => import(/* webpackChunkName: "Mentors" */ '../components/dashboard/Mentors.vue');

// settings routes
const SettingsMain = () => import(/* webpackChunkName: "SettingsMain" */ '../components/settings/main.vue');


// mentors routes
const MentorsList = () => import(/* webpackChunkName: "MentorsList" */ '../components/mentors/list.vue');


// wallet routes
const WalletInfo = () => import(/* webpackChunkName: "WalletInfo" */ '../components/Wallet/Info.vue');
const WalletCard = () => import(/* webpackChunkName: "WalletCard" */ '../components/Wallet/card.vue');
const WalletCardView = () => import(/* webpackChunkName: "WalletCard" */ '../components/Wallet/CardView.vue');
const ManageWallet = () => import(/* webpackChunkName: "manageWallet" */ '../components/Wallet/manage.vue');
// feedbacks
const Feedback=  () => import(/*webpackChunkName: "Feedback" */ '../components/dashboard/Feedback.vue')

// notifications list
const NotificationsList = () => import(/* webpackChunkName: "NotificationsList" */ '../components/notifications/List.vue');

// project routes
const ProjectList = () => import(/* webpackChunkName: "ProjectList" */ '../components/projects/ProjectList.vue');
const ProjectPanel = () => import(/* webpackChunkName: "ProjectPanel" */ '../components/projects/ProjectPanel.vue');
const CodeEditor = () => import(/* webpackChunkName: "CodeEditor" */ '../components/projects/CodeEditor.vue');
const AddProject = () => import(/* webpackChunkName: "AddProject" */ '../components/projects/AddProject.vue');
const AddNewFile = () => import(/* webpackChunkName: "AddNewFile" */ '../components/projects/AddNewFile.vue');
const AddDatabase = () => import(/* webpackChunkName: "AddDatabase" */ '../components/projects/AddDatabase.vue');
const ResourceUpload = () => import(/* webpackChunkName: "ResourceUpload" */ '../components/projects/ResourceUpload.vue');
const PanelLoader = () => import(/* webpackChunkName: "PanelLoader" */ '../components/projects/PanelLoader.vue');
const PanelSettings = () => import(/* webpackChunkName: "PanelSettings" */ '../components/projects/PanelSettings.vue');
const AddWebroute= () => import(/* webpackChunkName: "AddWebroute" */ '../components/projects/AddWebroute.vue');
const ProjectGuide = () => import(/* webpackChunkName: "ProjectGuide" */ '../components/projects/ProjectGuide.vue')
const AddGit= () => import(/* webpackChunkName: "AddGit" */ '../components/projects/AddGit.vue')


// chats routes
const Chats = () => import(/* webpackChunkName: "Chats" */ '../components/chats/Chats.vue');


// Hub routes
const Hub = () => import(/* webpackChunkName: "Hub" */ '../components/Hub/Hub.vue');

// profile routes
 const ProfilePage= () => import(/* webpackChunkName:"ProfilePage"*/ '../components/Profile/ProfilePage.vue');

// challenges routes
const ChallengesList= () => import(/* webpackChunkName: "ChallengesList" */ '../components/challenges/ChallengesList.vue');
const ChallengesCreate= () => import(/* webpackChunkName: "ChallengesCreate" */ '../components/challenges/Create.vue');
const ChallengePanel= () => import(/* webpackChunkName: "ChallengePanel" */ '../components/challenges/Panel.vue');
const ChallengeDescription= () => import(/* webpackChunkName: "ChallengeDescription" */ '../components/challenges/Description.vue');
const ChallengeJudges= () => import(/* webpackChunkName: "ChallengeJudges" */ '../components/challenges/Judges.vue');
const ChallengeLeaderboard= () => import(/* webpackChunkName: "ChallengeLeaderboard" */ '../components/challenges/Leaderboard.vue');
const ChallengeDiscussions= () => import(/* webpackChunkName: "ChallengeDiscussions" */ '../components/challenges/Discussion.vue');
const ChallengeRules= () => import(/* webpackChunkName: "ChallengeRules" */ '../components/challenges/Rules.vue');
const ChallengeResult= () => import(/* webpackChunkName: "ChallengeResult" */ '../components/challenges/Results.vue');

// Diary routes
const DiaryList= () => import(/* webpackChunkName: "DiaryList" */ '../components/diary/DiaryList.vue');
const DiaryBoard= () => import(/* webpackChunkName: "DiaryBoard" */ '../components/diary/Board.vue');
const DiaryContent= () => import(/* webpackChunkName: "DiaryContent" */ '../components/diary/DiaryContent.vue');
const AddGem= () => import(/* webpackChunkName: "AddGem" */ '../components/diary/AddGem.vue');
const GetDiary= () => import(/* webpackChunkName: "GetDiary" */ '../components/diary/GetDiary.vue');
const DiaryBank= () => import(/* webpackChunkName: "DiaryBank" */ '../components/diary/bank.vue');

// feedback routes
const FeedForm= () => import(/* webpackChunkName: "FeedForm" */ '../components/Feedback/FeedbackForm.vue')

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'register', component: Register },
  { path: '/login/:referral', name: 'loginReferral', component: Login },
  { path: '/sign-up/:referral', name: 'registerReferral', component: Register },
  { path: '/verify', name: 'verify', component: Verify },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
 
  {
    path:'/profile/:username',
     name:'ProfilePage', 
     component:ProfilePage,
     meta: {
      twModalView: true
    },
   

    beforeEnter: (to, from, next) => {
     
      if(window.thisUserState != undefined){
        
        thisUserState.$root.showFullImage = false;

        thisUserState.$root.showProfileEditModal = false;

         thisUserState.$root.showViewPost = false;
         
       
       }
     
     
      next()
     }
  },

  //search profile

  {
    path:'/profile-search/:username',
     name:'ProfilePage', 
     component:ProfilePage,
     meta: {
      twModalView: true
    },
   

    beforeEnter: (to, from, next) => {
     
      if(window.thisUserState != undefined){
        
        thisUserState.$root.showFullImage = false;

        thisUserState.$root.showProfileEditModal = false;

         thisUserState.$root.showViewPost = false;
         
       
       }
     
     
      next()
     }
  },

    // edit profile
{ path: '/profile/edit/:username',
name: 'EditProfile',
meta: {
 twModalView: true
},
beforeEnter: (to, from, next) => {
 const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

  
 if(window.thisUserState != undefined){
   
   thisUserState.$root.showProfileEditModal = true;
  
  }

 if (!twModalView) {
   //
   // For direct access
   //
   to.matched[0].components = {
     default: ProfilePage,
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
     to.matched[0].components.modal = ProfilePage
   }
 }

 next()
}
},
  // full image view
  { path: '/profile-view/:username',
  name: 'ProfileViewPage',
  meta: {
   twModalView: true
  },
  beforeEnter: (to, from, next) => {
   const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)
  
    
   if(window.thisUserState != undefined){
    thisUserState.$root.showViewPost = false;
     
     thisUserState.$root.showProfileView = true;
    
    }
  
   if (!twModalView) {
     //
     // For direct access
     //
     to.matched[0].components = {
       default: ProfilePage,
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
       to.matched[0].components.modal = ProfilePage
     }
   }
  
   next()
  }
  },
   // full image view
   { path: '/full-image-view',
   name: 'FullImageView',
   meta: {
    twModalView: true
   },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)
   
     
    if(window.thisUserState != undefined){
      
      thisUserState.$root.showFullImage = true;
     
     }
   
    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Hub,
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
        to.matched[0].components.modal = Hub
      }
    }
   
    next()
   }
   },
  {
    path:'/',
    redirect:'/channels',
  },
  {
    path:'/hub',
    name:'Hub',
    component:Hub,
    meta: {
      twModalView: true
    },
    beforeEnter: (to, from, next) => {

     
      
      if(window.thisUserState != undefined){
        
        thisUserState.$root.showAddNewPost = false;
        thisUserState.$root.showViewPost = false;
        thisUserState.$root.showProfileView = false;
       
       }
     
     
      next()
     }
  },

  // new post
{ path: '/hub/new-post',
name: 'NewPost',
meta: {
  twModalView: true
},
beforeEnter: (to, from, next) => {
 const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

 
 if(window.thisUserState != undefined){
   
   thisUserState.$root.showAddNewPost = true;
  
  }

 if (!twModalView) {
   //
   // For direct access
   //
   to.matched[0].components = {
     default: Hub,
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
     to.matched[0].components.modal = Hub
   }
 }

 next()
}
},

// new post
{
  path: '/hub/post/:post_id',
  name: 'ViewPost',
  meta: {
    twModalView: true
  },
  beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

  if (window.thisUserState != undefined) {
    thisUserState.$root.showViewPost = true;
  }

  if (!twModalView) {
   //
   // For direct access
   //
    to.matched[0].components = {
      default: Hub,
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
      to.matched[0].components.modal = Hub
    }
  }

  next()
}

},
  
  {
    // channels
    path: '/channels',
    component: Chats,
    name:'Channels',
    meta: {
      twModalView: true
    },
    beforeEnter: (to, from, next) => {

      if(window.thisUserState != undefined){

         if( thisUserState.$root.chatComponent){
          thisUserState.$root.chatComponent.chatIsOpen = false;
          thisUserState.$root.chatComponent.liveSessionIsOpen = false;
          thisUserState.$root.chatComponent.messageIsDone = true;
          thisUserState.$root.chatComponent.imageCropperIsOpen = false;
          thisUserState.$root.chatComponent.chatShareIsOpen = false;
          thisUserState.$root.showPaymentProcessingBoard = false;
          thisUserState.$root.showProfileView = false;
          thisUserState.$root.showDiarySettings = false;
          thisUserState.selectedSpace = [];
          thisUserState.$root.showResourceView  = false;
          thisUserState.$root.showResourceViewContent = false;
          thisUserState.$root.chatComponent.chatbarContent = 'chat_list';
         }

        
  
       
            
       

       }
   
      to.matched[0].components = {
        default: Chats,
        modal: false
      }

      
       
    next()
  }
  },
  


  {
    // channels
    path: '/channels/:spaceId/payment',
    component: Chats,
    name:'ChannelPayment',
    meta: {
      twModalView: true
    },
    beforeEnter: (to, from, next) => {

      if(window.thisUserState != undefined){

         if( thisUserState.$root.chatComponent){
          thisUserState.$root.chatComponent.chatIsOpen = false;
          thisUserState.$root.chatComponent.liveSessionIsOpen = false;
          thisUserState.$root.chatComponent.messageIsDone = true;
          thisUserState.$root.chatComponent.imageCropperIsOpen = false;
          thisUserState.$root.chatComponent.chatShareIsOpen = false;
          thisUserState.$root.showProfileView = false;
          thisUserState.$root.showDiarySettings = false;
          thisUserState.selectedSpace = [];
          thisUserState.$root.showPaymentProcessingBoard = true;
          thisUserState.$root.chatComponent.chatbarContent = 'chat_list';
         }


       }
   
      to.matched[0].components = {
        default: Chats,
        modal: false
      }

      
       
    next()
  }
  },
  

  // channel content 
  { path: '/channels/:spaceId/content',
   name: 'Content',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      if( thisUserState.$root.chatComponent){

      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = false;
      thisUserState.$root.chatComponent.chatIsOpen = true;
      thisUserState.$root.showPaymentProcessingBoard = false;
      thisUserState.$root.showProfileView = false;
      thisUserState.$root.chatComponent.messageIsDone = true;
      thisUserState.$root.showYoutubePlayer = false;
      thisUserState.$root.showYoutubePlayerSm = false;
      thisUserState.$root.showDiarySettings = false;
      thisUserState.$root.chatComponent.chatInnerConent = '';
      thisUserState.$root.showResourceView  = false;
      thisUserState.$root.showResourceViewContent = false;
        
      }
     

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// show resources
{ path: '/channels/e_resources/view/:spaceId',
name: 'ResourcesView',
meta: {
 twModalView: true
},
beforeEnter: (to, from, next) => {
 const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


 if(window.thisUserState != undefined){

   if( thisUserState.$root.chatComponent){

   thisUserState.$root.showResourceView = true;
   thisUserState.$root.showResourceViewContent = false;

   }


  }

 if (!twModalView) {
   //
   // For direct access
   //
   to.matched[0].components = {
     default: Chats,
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
     to.matched[0].components.modal = Chats
   }
 }

 next()
}
},

// show resources content
{ path: '/channels/e_resources/content/:spaceId',
name: 'ResourcesView',
meta: {
 twModalView: true
},
beforeEnter: (to, from, next) => {
 const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


 if(window.thisUserState != undefined){

   if( thisUserState.$root.chatComponent){
     
   thisUserState.$root.showResourceView = false;
   thisUserState.$root.showResourceViewContent = true;

   }


  }

 if (!twModalView) {
   //
   // For direct access
   //
   to.matched[0].components = {
     default: Chats,
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
     to.matched[0].components.modal = Chats
   }
 }

 next()
}
},

// diary settings 
{ path: '/channels/engine/diary/:bot_id',
name: 'DiarySettings',
meta: {
 twModalView: true
},
beforeEnter: (to, from, next) => {
 const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


 if(window.thisUserState != undefined){

   if( thisUserState.$root.chatComponent){
   thisUserState.$root.showDiarySettings = true;

  
     
   }


  }

 if (!twModalView) {
   //
   // For direct access
   //
   to.matched[0].components = {
     default: Chats,
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
     to.matched[0].components.modal = Chats
   }
 }

 next()
}
},
// create channel
{ path: '/channels/create',
   name: 'CreateChannel',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      
      if( thisUserState.$root.chatComponent){
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.chatbarContent = 'create_channel';
      }
     

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// sub channels
{ path: '/channels/:spaceId/sub_channels',
   name: 'SubChannels',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){

      if( thisUserState.$root.chatComponent){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
    
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'sub_channels';
    
     }
     

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// sub channels
{ path: '/channels/:spaceId/diary_notes',
   name: 'DiaryNotes',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){

      if( thisUserState.$root.chatComponent){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
    
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'diary_notes';
    
     }
     

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

// channel info
{ path: '/channels/:spaceId/channel_info',
   name: 'ChannelInfo',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      if( thisUserState.$root.chatComponent){
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
      thisUserState.$root.chatComponent.chatInnerConent = '';
      thisUserState.$root.showProfileView = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'channel_info';
       
  
          
     }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

//resource routes

{
  path:'/channels/:spaceId/resource_content/:resource_id',
  name:'resourcesContent',
 
  meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      if( thisUserState.$root.chatComponent){
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
      thisUserState.$root.chatComponent.chatInnerConent = '';
      thisUserState.$root.showProfileView = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'resource_content';
       
  
          
     }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
  },
  
     // add resource URL
  {
    path:'/channels/:spaceId/add_resource_url',
    name:'resourcesURL',
   
    meta: {
      twModalView: true
    },
     beforeEnter: (to, from, next) => {
      const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)
  
  
      if(window.thisUserState != undefined){
        if( thisUserState.$root.chatComponent){
        thisUserState.$root.chatComponent.liveSessionIsOpen = false;
        thisUserState.$root.chatComponent.chatShareIsOpen = false;
        thisUserState.$root.chatComponent.imageCropperIsOpen = false;
        thisUserState.$root.chatComponent.innerSideBarContent = '';
        thisUserState.$root.chatComponent.chatInnerConent = '';
        thisUserState.$root.showProfileView = false;
        thisUserState.$root.showYoutubePlayer = false;
        thisUserState.$root.showYoutubePlayerSm = false;
        thisUserState.$root.chatComponent.chatInnerSideBar = true;
        thisUserState.$root.chatComponent.innerSideBarContent = 'add_resource_url';
         
    
            
       }
  
       }
  
      if (!twModalView) {
        //
        // For direct access
        //
        to.matched[0].components = {
          default: Chats,
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
          to.matched[0].components.modal = Chats
        }
      }
  
      next()
    }
    },

  {
    path:'/channels/:spaceId/resources',
    name:'resourcestab',
   
    meta: {
      twModalView: true
    },
     beforeEnter: (to, from, next) => {
      const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)
  
  
      if(window.thisUserState != undefined){
        if( thisUserState.$root.chatComponent){
        thisUserState.$root.chatComponent.liveSessionIsOpen = false;
        thisUserState.$root.chatComponent.chatShareIsOpen = false;
        thisUserState.$root.chatComponent.imageCropperIsOpen = false;
        thisUserState.$root.chatComponent.innerSideBarContent = '';
        thisUserState.$root.chatComponent.chatInnerConent = '';
        thisUserState.$root.showProfileView = false;
        thisUserState.$root.showYoutubePlayer = false;
        thisUserState.$root.showYoutubePlayerSm = false;
        thisUserState.$root.chatComponent.chatInnerSideBar = true;
        thisUserState.$root.chatComponent.innerSideBarContent = 'resources';
         
    
            
       }
  
       }
  
      if (!twModalView) {
        //
        // For direct access
        //
        to.matched[0].components = {
          default: Chats,
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
          to.matched[0].components.modal = Chats
        }
      }
  
      next()
    }
    },
// channel edit
{ path: '/channels/:spaceId/channel_edit',
   name: 'ChannelEdit',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){

      if( thisUserState.$root.chatComponent){
        thisUserState.$root.chatComponent.imageCropperIsOpen = false;
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'channel_edit';
       
  
          
      }
     

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

// add sub channel
{ path: '/channels/:spaceId/add_sub_channel',
   name: 'AddSubChannel',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){

      if( thisUserState.$root.chatComponent){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
   
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'add_sub_channel';
       
 
          
      }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

// add sub channel
{ path: '/channels/:spaceId/resource_search',
   name: 'ResourceSearch',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){

      if( thisUserState.$root.chatComponent){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
   
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'resource_search';
       
 
          
      }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

// add payment
{ path: '/channels/:spaceId/add_payment',
   name: 'AddPayment',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){

      if( thisUserState.$root.chatComponent){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
   
      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'add_payment';
       
 
          
      }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

// live session
{ path: '/channels/:spaceId/live_session',
   name: 'LiveSession',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      if( thisUserState.$root.chatComponent){
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
      thisUserState.$root.chatComponent.chatInnerConent = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = false;

    
        thisUserState.$root.chatComponent.liveSessionIsOpen = true;
      
  
       }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// chat share
{ path: '/channels/:spaceId/share',
   name: 'ChatShare',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      if( thisUserState.$root.chatComponent){
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.imageCropperIsOpen = false;
      thisUserState.$root.chatComponent.chatInnerConent = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = false;

     
        thisUserState.$root.chatComponent.chatShareIsOpen = true;
     
  
       }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

// crop image
{ path: '/channels/:spaceId/crop-image',
   name: 'CropImage',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      if( thisUserState.$root.chatComponent){
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatShareIsOpen = false;
      thisUserState.$root.chatComponent.chatInnerConent = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = false;

    
        thisUserState.$root.chatComponent.imageCropperIsOpen = true;
      
  
       }

     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// editor
{ path: '/channels/:spaceId/editor',
   name: 'editor',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      if( thisUserState.$root.chatComponent){
  
      thisUserState.$root.chatComponent.chatInnerConent = 'code_editor';
      }
     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// image viewer
{ path: '/channels/:spaceId/image_viewer',
   name: 'ImageViewer',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      if( thisUserState.$root.chatComponent){
        thisUserState.$root.chatComponent.chatInnerSideBar = false;
      thisUserState.$root.chatComponent.chatInnerConent = 'image_viewer';
      }
     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},

// youtub auth
{ path: '/channels/:spaceId/youtube_auth',
   name: 'YoutubeAuth',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      if( thisUserState.$root.chatComponent){
        thisUserState.$root.chatComponent.chatInnerSideBar = false;
      thisUserState.$root.chatComponent.chatInnerConent = 'youtube_auth';
      }
     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// Channel invitation
{ path: '/channels/:spaceId/channel_invitation',
   name: 'ChannelInvitation',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      if( thisUserState.$root.chatComponent){
        thisUserState.$root.chatComponent.chatInnerSideBar = false;
      thisUserState.$root.chatComponent.chatInnerConent = 'channel_invitation';
      }
     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Chats,
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
        to.matched[0].components.modal = Chats
      }
    }

    next()
  }
},
// image cropper
{ path: '/crop-image',
   name: 'baseImageCropper',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

    
    if(window.thisUserState != undefined){
      
      thisUserState.$root.showImageCropper = true;
     
     }

    if (!twModalView) {
      //
      // For direct access
      //
      to.matched[0].components = {
        default: Hub,
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
        to.matched[0].components.modal = Hub
      }
    }

    next()
  }
},
  { path: '/board',
     name: 'Board', 
     component: Board,
     redirect: '/board/projects',
    children: [
//feedback

{path:'feedback',
 name:'Feedback',
  component: Feedback,
   redirect:'/board/feedback/feedback-form',

children:[
  {path:'/board/feedback/feedback-form',
   name:'FeedbackForm',
    component:FeedForm}
]
},

      {
        // projects
        path: 'projects',
        component: Projects,

        redirect: '/board/projects/list',
        children: [
        { // list
        path: 'list',
        component: ProjectList
        },
        {
        // add project
        path: 'add',
        component: AddProject
        },
        {
         // project panel
        path: 'panel/:project_slug',
        component: ProjectPanel,
        children:[


          {
//project guide
            path:'guide',
           component: ProjectGuide
          },
                 {
                 // code editor
                 path: 'editor',
                  component: CodeEditor
                  },
                  {
                    // Add Code File
                    path: 'add-new-file/:language_type',
                    component: AddNewFile
                  },
                  {
                    // alter panel settings
                    path:"set-panel",
                    component:PanelSettings
                  },
                  {
                    // add web route
                    path:"web-route",
                    component:AddWebroute
                  },
                  {
                    // Add DataBase
                    path: 'create-db-table',
                    component: AddDatabase
                  },
                  {
                    // resource upload
                    path: 'resource-upload/:type',
                    component: ResourceUpload
                  },
                  {
                    // panel loader
                    path: 'panel-loader',
                    component: PanelLoader
                  },

                  {
                    path:'add-git',
                    component: AddGit
                  }
                 
               ]
    },
    {
      // add project
      path: 'create',
      component: AddProject
    },
  
    ]
      },
    
      {
        // content bots
        path: 'diary',
        component: Diary,
        meta: {
          twModalView: true
        },
        redirect:'/board/diary/list',
        children:[
          { 
            path:'bank',
            component:DiaryBank,
            meta: {
              twModalView: true
             },
          },
          {
            // list
            path:'list',
            component:DiaryList,
            meta: {
              twModalView: true
             },
          },
          {
            // board
            path:'board/:diary_id',
            component:DiaryBoard,
            //redirect:'/board/diary/board/content',
            meta: {
              twModalView: true
             },
            children:[
              {
                // content
                path:'content',
                component:DiaryContent,
                meta: {
                  twModalView: true
                 },
              },
              {
                // add new gem
                path:'edit-note/:note_id',
                component:AddGem,
                meta: {
                  twModalView: true
                 },
              },
            

            ]
          }
          ,
              // create diary
              {
                path:'create-diary/:type',
                component:GetDiary
              }
        ]
      },

   

      {
        // challenges
        path: 'challenges',
        component: Challenges,
        redirect: '/board/challenges/list',
        meta: {
          twModalView: true
        },
        beforeEnter: (to, from, next) => {
     
          if(window.thisUserState != undefined){
            
            thisUserState.$root.showProfileView = false;
    
           
           }
         
         
          next()
         },
        children:[
            { // list
            path: 'list',
            component: ChallengesList
            },
            { // create
              path: 'create/:type',
              component: ChallengesCreate
            },
            {
              // panel
              path:'panel/:challenge_id',
              component:ChallengePanel,
              children:[

                { // description
                  path: 'description',
                  component: ChallengeDescription
                  },

                  { // challengeResult
                  path: 'results/:type',
                  component: ChallengeResult
                  },
                     // challengeResult
                   {
                    // judges
                    path:'judges',
                    component: ChallengeJudges
                  },
                  {
                    // leaderboard
                    path:'leaderboard',
                    component: ChallengeLeaderboard
                  },
                  {
                    // discussions
                    path:'discussion',
                    component: ChallengeDiscussions
                  },
                  {
                    // rules
                    path:'rules',
                    component: ChallengeRules
                  }

              ]
            }
        ]
      },
      {
        // wallet
        path: 'wallet',
        component: Wallet,
        redirect:'/board/wallet/card',
        meta: {
          twModalView: true
        },
        children:[
          {
            // card
            path:'card',
            component: WalletCard
          },
          {
            // info
            path:'info',
            component: WalletInfo
          },
          {
            // info
            path:'card-view/:card_no',
            component: WalletCardView
          },
          {
            // manage
            path:'manage/:card_no',
            component: ManageWallet
          }
        ]
      },
      {
        // settings
        path: 'settings',
        component: Settings,
        redirect:'/board/settings/main',
        meta: {
          twModalView: true
        },
        children:[
           
          {
            // main
            path:'main',
            component: SettingsMain
          }
        ]
      },
      {
        // mentors
        path: 'leaderboard',
        component: Mentors,
        redirect:'/board/leaderboard/list',
        meta: {
          twModalView: true
        },
        beforeEnter: (to, from, next) => {
     
          if(window.thisUserState != undefined){
            
            thisUserState.$root.showProfileView = false;
    
           
           }
         
         
          next()
         },
        children:[
           
          {
            // list
            path:'list',
            component: MentorsList
          }
        ]
      },
      {
        // notifications
        path: 'notifications',
        component: Notifications,
        redirect: '/board/notifications/list',
        meta: {
          twModalView: true
        },
        children:[
            
          { // list
            path: 'list',
            component: NotificationsList
            },
        ]
      }
    ]
  },
];

const router = new VueRouter({
  routes
});


router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  
      // Start the route progress bar.
      if(window.thisUserState){
        thisUserState.routeIsLoading = true;
      }
  
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  if(window.thisUserState){
    thisUserState.routeIsLoading = false;
  }
})


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
      TopBarComponent:null,
      routeIsLoading: false,
      showSideBar:false,
      searchType:'',
      codemirrorComponent:'',
      fullImageColor:'',
      showMobileHub:true,
      imageViewPath:'',
      chatComponent:undefined,
      username: '',
      user_temp_id:0,
      returnedToken:'',
      checkauthroot:'',
      authProfile:[],
      userDeviceId:'',
      ChatList:[],
      selectedSpace:[],
      Messages:[],
      baseImageUrl:'http//citonhubnew.com',
      selectedGenSpaceType:'',
      selectedSubSpaceName:'',
      selectedSubSpaceType:'',
      TrackLastSubSpace:[],
      selectedSpaceMembers:[],
      adminMembers:[],
      msgScrollComponent:undefined,
      returnedMessages:'',
      sendingMessage:false,
      replyMessage:[],
      botIsLoading:false,
      botSuggestionArray:[],
      fullCodeLanguage:'HTML',
      FullcodeContent:'<p>write your code</p>',
      imageSlidestate:0,
      imageArrayView:[],
      typinguser:'',
      typingSpace:'',
      typing:false,
      globalUsers:[],
      messageSlicePosition:30,
      showRootReply:false,
      is_reply:false,
      NewMsg:[],
      SpaceUsers:[],
      showEmojiBox:false,
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
      currentImage:'',
      imagepath:'',
      imagepath1:'',
      imagepath2:'',
      imagepath3:'',
      imagepath4:'',
      baseChatList:[],
      codeIsLive:false,
      codeEditorComponent:undefined,
      recordUrl:'',
      recorderBlob:'',
      dataconnection:undefined,
      connection:undefined,
      audioconnection:undefined,
      CodeResult:'',
      liveShowCode:true,
      newMasterId:0,
      allAudioParticipant:[],
      connectingToSocket:false,
      roomNotExist:false,
      roomCheckingInitaited:false,
      screenIsConnecting:false,
      screenSharingOn:false,
      showVideoScreen:false,
      socketEcho:undefined,
      audioSocket:undefined,
      screenSocket:undefined,
      dataSocket:undefined,
      reconnectionCount:0,
      isMaster:false,
      localAudioMuted:false,
      userIsReconnecting:false,
      remoteLiveHappening:false,
      remoteAudio:false,
      liveIsOn:false,
      remoteScreen:false,
      showTopBar:true,
      speakingUser:[],
      manuallyClosed:false,
      liveBoardContent:'action_list',
      fromLiveSession:false,
      codeboxComponent:undefined,
      showMemberBoard:false,
      projectList:[],
      projectData:[],
      selectedFileId:'',
      SelectedCodeBox:[],
      selectedFileCatType:'',
      codeEditorContent:'',
      EditorLanguage:'',
      codeEditorArray:[],
      codeEditorComponent:undefined,
      editorSideComponent:undefined,
      projectPanelComponent:undefined,
      selectedChallenge:[],
      is_route_edit:false,
      selectedRoute:[],
      croppedImage:'',
      showImageCropper:false,
      imageExist:false,
      is_reply_comment:false,
      replyCommentId:0,
      showResultPage:false,
      panelFromChallenges:false,
      diaryList:[],
      selectedDiary:[],
      showAddNewPost:false,
      noteContent:[],
      diaryBoardComponent:undefined,
      addDiaryContentComponent:undefined,
      AddModalIsUp:false,
      posts:[],
      showProfileEditModal:false,
      showImageCropperDiary:false,
      showViewPost: false,
      showProfileEditModal:false,
      currentPost:null,
      userEmail:'',
      userPassword:'',
      pageToDelete:'',
      selectedPost:[],
      hubComponents:undefined,
      loadingChatList: false,
      loadingIsError:false,
      searchChatList:[],
     chatListComponent:undefined,
     shareText:'',
     shareLink:'',
     fromChannelEdit:false,
     moreOptionComponent:undefined,
     challengesList:[],
     infoText:'',
     extraInfo:'',
     alertComponent:undefined,
     showInvitation:false,
     challengePanelComponent:undefined,
     discussionComponent:undefined,
     challengeSearchList:[],
     challengeListComponent:undefined,
     projectSearchList:[],
     ProjectMembers:[],
     projectListComponent:undefined,
     diarySearchList:[],
     showFullImage:false,
     baseImageColor:'',
     baseImageLink:'',
     profilePageComponent:undefined,
     autoOpenChat:false,
     autoOpenChatId:'',
     postsSearch:[],
     TopBarComponentHub:undefined,
     projectViewComponent:undefined,
     autoOpenPost:false,
     autoOpenPostId:'',
     showProfileView:false,
     selectedUsername:'',
     TopBarComponentChat:undefined,
     TopBarComponentBoard:undefined,
     ShowappInstaller:false,
     deferredPrompt:'',
     showDiarySettings:false,
     tempDiaryId:'',
     autoOpenDiary:false,
     showRewardBoard:false,
     pageLoaderView:true,
     showUserNotification:false,
     notificationApproved:false,
     viewFromPost:false,
     postCommentsData:[],
     fromProfile:false,
     fromProfileUsername:'',
     codeFromChat:false,
     componentIsLoading:false,
     showCodeboxBtn:true,
     chatBottomLoaded:false,
     chatTopLoaded:false,
     chatBottomLoadedLg:false,
     chatTopLoadedLg:false,
     loadInterestModal:false,
     suggestedDiaries:[],
     sideBarComponent:undefined,
     codeboxIsLoading:true,
     intentToDelete:'',
     showLanguageOption:false,
     pageContentToDelete:[],
     diaryNotes:[],
     fromVerifyPage:false,
     followDiariesLoaded:false,
     channelChats:[],
     diaryBankList:[],
     diaryBankSearchList:[],
     diaryBankComponent:[],
     comingFromDiaryBank:false,
     showAdminOption:false,
     livesessionComponent:undefined,
     showPaymentOptionBoard:false,
     createChannelComponent:[],
     baseChannelName:'',
     payment_option:'',
     payment_card_name:'',
     payment_interval:'',
     payment_amount:'',
     payment_name:'',
     payment_currency:'',
     showPaymentProcessingBoard: false,
    showProcessorFromChat: true,
    fromSupportDirectlink: false,
    selectedPaymentCard:[],
    showWalletinfo:false,
    infoType:'',
    selectedTransaction:[],
    showPayoutAccount:false,
    manageWalletComponent:undefined,
    payoutAccounts:[],
    planSubscriptions:[],
    cardViewComponent:undefined,
    auth_device_id:'',
    MessagesFull:[],
    messageIsProcessing:false,
    messageQueues:[],
    returnedDataArray:[],
    subSpaces:[],
    selectedSpaceSubMessages:0,
    autoOpenAddPost:false,
    projectInputData:[],
    panelLoaderProject:undefined,
    showProjectInput:false,
    showPointDetailsInfo:false,
    formerPoint:'',
    showCreateChannel: false,
    showMentorInfo:false,
    addedPoint:0,
    selectedLanguageId:0,
    autoOpenChatType:'',
    fromCreateAChannel: false,
    fromMentorPage:false,
    MentorPageComponent:undefined,
    leaderboardMembers:[],
    refreshCount:0,
    selectedResource:[],
    playingVideoId:'',
    showYoutubePlayer: false,
    resourceSearchType:'',
    resourceContentType:'',
    selectedResource:[],
    showYoutubePlayerSm:false,
    showAddButton:false,
    playingYoutubeVideo:[],
    prevResourceId:0,
    nextResourceId:0,
    nextResourceData:[],
    prevResourceData:[],
    resourceComponent:undefined,
    YoutubeComponent:undefined,
    playingYoutubeVideoId:0,
    resourcesSearchComponent:undefined,
    playingVideoSubState:'',
    playingVideoRating:'',
    playVideoAuthState:false,
    forcereloadResource:false,
    youtube_connected:false,
    defaultSearchValue:'',
    channelHasResources:false,
    autoOpenResourcePage:false,
    showResourceView:false,
    showResourceViewContent:false,
    showYoutubePlayerTemp:false
     },
     mounted: function () {
      window.thisUserState = this;
      window.routerData = this.$router;

    
      this.pageLoaderView = false;
      if(this.isLogged){
        this.fetchUserDetails();
       }

     
      this.connectToChannel();
      // this.checkPWA();

    },
    computed: {
      ...mapGetters([
        'isLogged'
      ]),
      InternetConnected() {
        return this.$store.getters['connected']
      },
      isConnected:function(){
         if(this.socketEcho){
          return this.socketEcho.connector.socket.connected;
         }
        return 'empty';
      },
      isConnectedAudio:function(){
        if(this.audioSocket){
         return this.audioSocket.connected;
        }
       return 'empty';
     },
     isConnectedScreen:function(){
      if(this.screenSocket){
       return this.screenSocket.connected;
      }
     return 'empty';
     },
     isConnectedData:function(){
      if(this.dataSocket){
       return this.dataSocket.connected;
      }
     return 'empty';
     },
    },
    watch: {
      // whenever isConnected changes, this function will run
      isConnected: function (newValue, oldValue) {

        if(!newValue && this.$root.chatComponent){

            this.updateSpaceMessages(true);


            }
         
      },
      InternetConnected:function(newValue, oldValue){

          if(newValue){
            if( this.$root.chatComponent){
              
              
              window.iziToast.destroy();
              
              this.$root.chatComponent.showAlert('Nice!','You are back online','success','bottomRight',3000);


          

             
            }
            console.log('you are connected')
          }else{

            if( this.$root.chatComponent){
              this.$root.chatComponent.showAlert('Opps!','You are offline','error','bottomRight',false);

              
            }

            console.log('Internet connection was lost')
          }

      },
      // whenever isConnectedAudio changes, this function will run
      isConnectedAudio: function (newValue, oldValue) {


        if(!newValue && !this.InternetConnected){

       

         this.connectingToSocket = 'disconnected';
        
          if(!this.manuallyClosed){

         this.rejoinAudio(this.isMaster);

          }
         


       }else{

         this.connectingToSocket = false;
       }
   
      },
      // whenever isConnectedScreen changes, this function will run
      isConnectedScreen: function (newValue, oldValue) {

        if(!newValue && !this.InternetConnected){

        
          if(!this.screenIsConnecting){

             if(!this.manuallyClosed){

              this.rejoinScreen(this.isMaster);

             }

            

          }

         

        }

       
    },
      // whenever isConnectedData changes, this function will run
      isConnectedData: function (newValue, oldValue) {

        if(!newValue && !this.InternetConnected){

        
       
             if(!this.manuallyClosed){

              this.rejoinData(this.isMaster);

             }


        }
          
      }
    },
    created(){
   

       // set internet connection listerner
       window.addEventListener('offline', () => {
        this.$store.dispatch('setConnected', false)
      })
      window.addEventListener('online', () => {
        this.$store.dispatch('setConnected', true)
      })

      // set default 'this' data
     window.thisUserState = this;
      window.routerData = this.$router;

      // get user info from local storage if logged in
      const userInfo = localStorage.getItem('user_new')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.username = userData.user.username;
        this.user_temp_id = userData.user.id;

        this.returnedToken = userData.token;
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
    
    // set user login state
    if(this.isLogged){
       this.checkauthroot = 'auth';
       this.checkUserDevice();
    }else{
      this.checkauthroot = 'noauth';
    }


  },
    methods:{

      
      checkPWA: function(){
          
         

        window.addEventListener('beforeinstallprompt', (e) => {
          // Prevent the mini-infobar from appearing on mobile
          e.preventDefault();
          // Stash the event so it can be triggered later.
           this.deferredPrompt = e;
          // Update UI notify the user they can install the PWA
          this.showInstallPromotion();
        });
                   
              },
              
              showInstallPromotion:function(){
                this.ShowappInstaller = true;
             },
      // user device tracker
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
        markSpaceRead:function(spaceId){

          if(this.ChatList.length != 0){
           
            this.ChatList.map((space)=>{
                 
              if(space.space_id == spaceId){
    
                
                space.unread = 0;
              }
      
            });

            let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

            storedChat.then((result)=>{
        
                if(result != null ){
        
             let finalResult = JSON.parse(result);
               
                 
        
        
                   finalResult.channels.map((space)=>{
                 
                    if(space.space_id == spaceId){
                      space.unread = 0;
                    }
              
                  });
              
                  finalResult.direct_messages.map((space)=>{
                       
                    if(space.space_id == spaceId){
                      space.unread = 0;
                    }
              
                  });
              
                  finalResult.pet_spaces.map((space)=>{
                       
                    if(space.space_id == spaceId){
                      space.unread = 0;
                    }
                
             
                     });
        
            this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);
         
        
          }
        
        })


           
            
          
          }
    
    
          this.$root.LocalStore('unread_messages_' + spaceId  + this.$root.username,[]);
          
        },
      // sets up laravel echo for live sockets
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

          this.socketEcho = window.Echo;
         
          
      },
      fetchProfileHandler: function(){
    
        axios.get('/fetch-profile-'+ this.username)
  .then(response => {
  
  if (response.status == 200) {
       
       let userProfile = response.data.profile;
       let user = response.data.user_data;

       
       
       
      let userDetails = {
      'username':user.username,
      'name': user.name,
      'email': user.email,
      'coin': userProfile.coins,
      'image_name': userProfile.image_name,
      'image_extension': userProfile.image_extension,
      'about': userProfile.about,
      'Interests': userProfile.interestsArray,
      'connections': userProfile.connections,
      'background_color': userProfile.background_color,
      'unread': userProfile.unread,
      'points': userProfile.points,
      'user_onboarded':userProfile.user_onboarded,
      'suggested_diary': userProfile.suggested_diary,
       'is_mentor': userProfile.is_mentor
      };
        
      

      
    this.$root.authProfile = userDetails;

       this.$root.LocalStore('profile_info_new' + this.$root.username,userDetails);

    //  if(!this.$root.authProfile.user_onboarded){
    //     this.$root.authProfile.unread = 1;
    //    }
    
   
    
    
 }
   
 
 })
 .catch(error => {

 }) 

     
      },
    // fetches the logged in user details
      fetchUserDetails: function(){

        let StoredProfileInfo = this.$root.getLocalStore('profile_info_new' + this.$root.username);
  
        StoredProfileInfo.then((result)=>{

          if(result != null){

            let finalResultUnread = JSON.parse(result);

               this.$root.authProfile = finalResultUnread;

               this.fetchProfileHandler();

          }else{

             this.fetchProfileHandler();
             
          }

        });
      

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
   checkCodeForInput: function(code,languageId){

     this.$root.selectedLanguageId = languageId;

      // for C++

      if(languageId == '11'){

        let InputRegex = /(cin >> )(.*)/g;
        let InputFound = code.match(InputRegex);

       

         if(InputFound != null){

          if(InputFound.length > 0){

         this.$root.projectInputData = [];

         InputFound.forEach((input)=>{

           
            let finalWord = input.split(" ");

           

           var inputData = {
              name: finalWord[2].substring(0, finalWord[2].length - 1),
              value:''
           };

             this.$root.projectInputData.push(inputData);
         })


      
         this.$root.showProjectInput = true;

         return 'present';

          
       }
       
       }

         return 'present'
      }
      
    if(languageId == '39' || languageId == '100' || languageId == '38'){
                 
      let InputRegex = /(input\(')(.*)('\))/g;

      let InputFound = code.match(InputRegex);

       if(InputFound == null){

        InputRegex = /(input\(")(.*)("\))/g;

      InputFound = code.match(InputRegex);
      

       }


       if(InputFound != null){

        if(InputFound.length > 0){

       this.$root.projectInputData = [];

       InputFound.forEach((input)=>{

         
          let finalWord = input.split("'");

             if(finalWord.length == 1){

                 finalWord = input.split('"');

             }

         var inputData = {
            name: finalWord[1],
            value:''
         };

           this.$root.projectInputData.push(inputData);
       })

       this.$root.showProjectInput = true;

         return 'present';
     }
     
     }


       

      }

      return 'not_present';
   },
  // connect user to a global private socket
  connectToChannel: function(){

      // set laravel echo config
      this.setEcho();

    if(this.checkauthroot == 'auth'){
     
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
    .listen('.GlobalChannel',(e) => {

        if(e.userId == this.user_temp_id || e.userId == 0){
          
          if(e.actionType == 'new-message'){


            setTimeout(() => {

              if(!this.$root.checkIfMessageExist(e.data) && e.data.origin_device != this.$root.userDeviceId){
 
                let message= e.data
    
                if(message.type == 'join'){
                  this.fetchSpaceInfo(message.space_id)
                }
                
                let messageData = {
                  space_id: e.data.space_id,
                  new_messages: [e.data]
                };
    
                this.handleSpaceData([messageData])
                
    
            
    
                this.scrollToBottom();
    
               
    
               }
              
            }, 1000);

          
 
       }
 
 
       if(e.actionType == 'new_post'){
 
 
         if(this.$root.hubComponents){
          
         
           this.$root.posts.push(e.data);
 
         
 
         }
 
        
 
          }
 
          if(e.actionType == 'post_liked'){
 
         
           if(this.$root.hubComponents){
            
           
             this.$root.posts.map((post)=>{
               if(post.id == e.data.hub_post_id){
 
                  post.likes += 1;
 
               }
             });
 
              if(this.$root.selectedPost){
 
                if(this.$root.selectedPost.id == e.data.hub_post_id){
 
                 this.$root.selectedPost.likes += 1;
 
                }
 
              
 
              }
   
           
   
           }
   
          
   
            }
 
            if(e.actionType == 'post_pinned'){
 
 
             if(this.$root.hubComponents){
              
                 
   
                if(this.$root.selectedPost){
   
                 if(this.$root.selectedPost.id == e.data.hub_post_id){
 
                   this.$root.selectedPost.pinned += 1;
   
                  }
   
                }
     
             
     
             }
     
            
     
              }
 
 
              if(e.actionType == 'post_comment'){
 
 
               if(this.$root.hubComponents){
 
 
                 this.$root.posts.map((post)=>{
                   if(post.id == e.data.hub_post_id){
     
                      post.comments += 1;
     
                   }
                 });
                
             
     
                  if(this.$root.selectedPost){
     
                   if(this.$root.selectedPost.id == e.data.hub_post_id){
   
                      this.$root.projectViewComponent.comments.unshift(e.data);
                      this.$root.projectViewComponent.scrollToTop();
     
                    }
     
                  }
       
               
       
               }
       
              
       
                }
 
 
                if(e.actionType == 'post_comment_like'){
 
 
                 if(this.$root.hubComponents){
   
              
       
                    if(this.$root.selectedPost){
       
                     if(this.$root.selectedPost.id == e.data.hub_post_id){
     
                        this.$root.projectViewComponent.comments.map((comment)=>{
                          if(comment.id == e.data.id){
 
                            comment.likes += 1;
 
                          }
                        });
       
                      }
       
                    }
         
                 
         
                 }
         
                
         
                  }
 
                  if(e.actionType == 'new_direct_space'){
 
                   let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);
 
                   storedChat.then((result)=>{
 
                       if(result != null ){
 
 
                    let finalResult = JSON.parse(result);
 
                        let userSpace = finalResult.direct_messages.filter((space)=>{
                          return space.space_id == e.data.space.space_id
                        })
 
                        if(userSpace.length > 0){
 
 
                        }else{
 
                          finalResult.direct_messages.unshift(e.data.space);
 
                          this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

                          let FinalMessages = finalResult.direct_messages.filter(chat=>{
                            return chat.last_message.length > 0
                          })
 
                     let fullList = finalResult.channels.concat(FinalMessages, finalResult.pet_spaces);
 
                     
                   this.$root.ChatList = fullList;
 
                     this.$root.sortChatList();
 
                        }
                    
 
                 }
 
                   } )
 
                  }
 
                  if(e.actionType == 'space_update'){
 
                    if(e.data.device_id == this.$root.userDeviceId){
 
                     let returnData = e.data.data;
 
                       this.returnedDataArray.push(returnData);
 
                       this.checkForLostmessages();
                        
                      
  
 
                    }
 
                 
                  }
 
                   if(e.actionType == 'message_delete'){
 
 
                      this.deleteMessage(e.data)
 
                  
                  }
  
 
       if(e.actionType == 'challenge_comment'){
 
         if( this.$root.discussionComponent && (e.data.duel_id == this.$root.selectedChallenge.duel_id)){
          
         
           this.$root.discussionComponent.comments.unshift(e.data);
 
         
 
         }
 
    }
 
    if(e.actionType == 'challenge_comment_like'){
 
     if( this.$root.discussionComponent && (e.data.duel_id == this.$root.selectedChallenge.duel_id)){
      
     
       this.$root.discussionComponent.comments.map((comment)=>{
           if(comment.id == e.data.id){
 
             comment.likes += 1;
 
           }
       });
 
     
 
     }
 
       }    
 
 
 
       if(e.actionType == 'new_challenge_participant'){
 
         if( this.$root.challengePanelComponent && (e.data.duel_id == this.$root.selectedChallenge.duel_id)){
          
         
           this.$root.selectedChallenge.current_participant += 1;
 
           this.$root.selectedChallenge.duel_participants.unshift(e.data);
     
         
     
         }
     
           }  
 
           
           if(e.actionType == 'challenge_started'){
 
             if(this.$root.challengePanelComponent && (e.data.duel_id == this.$root.selectedChallenge.duel_id)){
              
             
               
               this.$root.challengePanelComponent.reloadChallenge();
             
         
             }
         
               }  
 


        }

      
      })
      .listenForWhisper('typing', (e) => {

            
        this.$root.typinguser = e.user;
         this.$root.typing = e.typing;
         this.$root.typingSpace = e.spaceId;

          this.stopTying();



           })
          .listenForWhisper('liveAction', (e) => {


            if(this.$route.params.spaceId == e.spaceId){




             if(e.action == 'liveIsOn'){

                this.$root.remoteLiveHappening = true;

                 if(e.data == 'audio'){

                this.$root.remoteAudio = true;

                 }
                 if(e.data == 'screen'){

                    this.$root.remoteScreen = true;

                 

                      if(this.livesessionComponent){

                        this.livesessionComponent.selectAction('screen_sharing')

                      }

                   

                 }
                 if(e.data == 'code'){

                   this.$root.remoteCode  = true;
                 }

             }

             if(e.action == 'liveIsOff'){

               this.$root.remoteLiveHappening = false;

             }


            }



            });

    }else{

      window.Echo.channel('authuser')
      .listen('.AuthUser',(e) => {

         if(this.auth_device_id == e.deviceId){
  

          
          this.$store.commit('setUserData',e.user);

          const userInfo = localStorage.getItem('user_new')
          if (userInfo) {
            const userData = JSON.parse(userInfo)
      
              this.$root.username = userData.user.username;
              this.$root.user_temp_id = userData.user.id;
              this.$root.returnedToken = userData.token;
      
          }
      
            this.$root.checkUserDevice();
      
            this.$root.checkauthroot = 'auth';
      
           
            this.$root.fetchUserDetails();
             this.$root.setEcho();
      
      
            let storedTracker = this.$root.getLocalStore('route_tracker_new');
      
            storedTracker.then((result)=>{
              this.$root.connectToChannel();
              if(result != null ){
                  let finalResult = JSON.parse(result);
             this.$router.push({ path: finalResult[0] });
             
      
              }else{
                
                this.checkIfLogin()
      
                
      
              }
      
      
            })

         }

      })
    }
       
  },
  fetchSpaceDetails:function(space_id,finalResult){

    axios.get('/fetch-user-spaces-'  + this.$root.userDeviceId  +  '/' + space_id)
  .then(response => {
  
  if (response.status == 200) {


      if(response.data.type != 'SubSpace'){

        response.data.space.message_track = new Date();
  
    if(response.data.type == 'Direct'){

      finalResult.direct_messages.unshift(response.data.space);

    }

    if(response.data.type == 'Channel'){

      finalResult.channels.unshift(response.data.space);

    }

   
    let FinalMessages= finalResult.direct_messages.filter(chat=>{
      return chat.last_message.length > 0
    })
  

    let fullList = finalResult.channels.concat(FinalMessages,finalResult.pet_spaces);

     this.$root.ChatList = fullList;

     this.$root.sortChatList();

     this.SetUnread();

     this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

      }

     


  
  }
  
  
  })
  .catch(error => {  

   
    
  }) 
    
  },
  addSpaceToChatList:function(space_id){
    let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

    storedChat.then((result)=>{

        if(result != null ){


     let finalResult = JSON.parse(result);

       let allChatList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);

         

         let userSpace = allChatList.filter((space)=>{
           return space.space_id == space_id
         })

         if(userSpace.length > 0){


         }else{


             this.fetchSpaceDetails(space_id,finalResult);


          
         }
        }
        
      })
   
  },
  handleResults(messageArray){

    this.$root.returnedMessages = messageArray;

     let intialCount = 0;

     this.$root.returnedMessages.map((msg)=>{
         msg.id = msg.message_id
         msg.initialSize = 200
         msg.index_count = intialCount++;



     });

 



   return  this.$root.returnedMessages ;

},
  deleteMessage:function(message){

     // remove from database

    
     let ProcessedMessages = [];

     let storedMsg = this.$root.getLocalStore('full_space_' + message.space_id + this.$root.username);

     storedMsg.then((result)=>{

        if(result != null){

           let finalResult = JSON.parse(result);

           ProcessedMessages = this.$root.handleResults(finalResult.messages);

            let remainingMessages = finalResult.messages.filter((eachMessage)=>{
                return eachMessage.message_id != message.message_id;
            })

           finalResult.messages = remainingMessages;

            if( this.$root.selectedSpace.space_id == message.space_id){



              this.$root.Messages = this.$root.handleResults(remainingMessages);

        

            }

           

          
             this.$root.LocalStore('full_space_' +  message.space_id   + this.$root.username,finalResult);

        }

     })

     // update chatlist, check if message deleted is a last message


      

   let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

    storedChat.then((result)=>{

                if(result != null ){


            let messageData = ProcessedMessages.filter((EachMessage)=>{
              return EachMessage.message_id == message.message_id;
              
                })

            messageData = messageData[0];



             let finalResult = JSON.parse(result);
               

                   finalResult.channels.map((space)=>{
  
           if(space.space_id == messageData.space_id){

            
               
                if(space.last_message[0].index_count == messageData.index_count ){

                  

                    space.last_message[0].deleted = true

                   
                }
          
           
                 }

                    });

              finalResult.direct_messages.map((space)=>{
                      if(space.space_id == messageData.space_id){

                       
               
                if(space.last_message[0].index_count == messageData.index_count ){

                   space.last_message[0].deleted = true

                }
          
           
                 }

                });

               finalResult.pet_spaces.map((space)=>{
   
             if(space.space_id == messageData.space_id){

                 
               
                if(space.last_message[0].index_count == messageData.index_count ){

                    space.last_message[0].deleted = true

                }
          
           
                 }

                  });

                   this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

                   let FinalMessages= finalResult.direct_messages.filter(chat=>{
                    return chat.last_message.length > 0
                  })

              let fullList = finalResult.channels.concat(FinalMessages, finalResult.pet_spaces);

              
            this.$root.ChatList = fullList;

               this.$root.sortChatList(false);


          }

            } )


  },
  playAudio:function(url){
    const audioFile = new Audio(url);
    audioFile.play();
  },
  checkForLostmessages: function(){
     

   setInterval(() => {

      
       if(this.returnedDataArray.length > 0){

      
          if(this.messageIsProcessing == false){
           
            this.messageIsProcessing = true;

            let firstData = this.returnedDataArray.shift();             
            this.handleSpaceData(firstData);

  
            
          }
         
      
          
       }else{
            
          
        this.messageIsProcessing = false;
       }

       
    }, 4000);

   

        
  },
   sendLiveSignal:function(type){

        
    this.liveChanges(type,'liveIsOn');

     

     },
     liveChanges:function(data,action) {

   
   let channel =  window.Echo.join('global');

  

      channel.whisper('liveAction', {
       data:data,
         action: action,
         spaceId: this.$root.selectedSpace.space_id
     });


    

      
  
       
     },
     stopTying:_.debounce( function () {

      this.$root.typinguser = '';
     this.$root.typing = false;
     this.$root.typingSpace = '';

      }, 1000),
  checkIfMessageExist(data){

        if(this.$root.Messages){

          let messageData = this.$root.Messages.filter((message)=>{
            return  message.temp_id == data.temp_id;
         });

         if(messageData.length == 0){

           return false
         }else{
           return true
         }

        }else{
          return false;
        }
   
  },

  // check user login state
  checkIfUserIsLoggedIn: function(){
    if(this.checkauthroot == 'noauth'){

      if(this.$router.currentRoute.path.indexOf('settings') >= 0){
                    
        this.LocalStore('route_tracker_new',['/channels']);


      }else{

        this.LocalStore('route_tracker_new',[this.$router.currentRoute.path]);

      }
     
     
       this.$router.push({ path: '/login' });
      return;
    } 
 },
 // save space data to local storage
 pushDataToLocal:function(data){

  localforage.getItem('full_space_' + data.space_id + this.$root.username).then((result)=> {

   if(result != null){
    
    
    let finalResult = JSON.parse(result);
        finalResult[0].push(data);
      
        this.LocalStore('full_space_' + data.space_id  + this.$root.username,finalResult);
      
   }

  });
   
 },
 // local storage
 LocalStore:function(key,data,fromUnsent = false,actionName = 'null',extraData = null){ 
     
  localforage.setItem(key,JSON.stringify(data)).then(function () {
    return localforage.getItem(key);
  }).then( () => {

      if(fromUnsent){

        if(this.chatComponent != undefined){
          this.chatComponent.resendMessages();
         }

      }

      if(actionName == 'leave_space'){

        let FinalMessages= data.direct_messages.filter(chat=>{
          return chat.last_message.length > 0
        })

        let fullList = data.channels.concat(FinalMessages, data.pet_spaces);

                     
        this.$root.ChatList = fullList;

          this.$root.sortChatList();   

          this.SetUnread();
          
       
       this.$router.push({ path: '/channels' });

      }

      if(actionName == 'new_channel'){

        let FinalMessages= data.direct_messages.filter(chat=>{
          return chat.last_message.length > 0
        })

        let fullList = data.channels.concat(FinalMessages, data.pet_spaces);

                     
        this.$root.ChatList = fullList;

          this.$root.sortChatList();

           this.$root.chatComponent.chatbarContent = 'chat_list';
            this.$root.chatComponent.openChat(extraData.space_id,true)

      }

      if(actionName == 'sort_chat'){

        this.$root.sortChatList();

      }

      if(actionName == 'messager'){

         if(this.returnedDataArray.length > 0){

          let firstData = this.returnedDataArray.shift();


           if(fromUnsent){

              // update unread messages into local storage

             
   
       let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + extraData.space_id + this.$root.username);
   
       unreadStoredMsg.then((result)=>{
   
      let finalResultUnread = JSON.parse(result);
   
       finalResultUnread.push(extraData.message)

     
   
   
       localforage.setItem('unread_messages_' + extraData.space_id + this.$root.username,JSON.stringify(finalResultUnread)).then( ()=> {
         
        this.sortChatList(false);

        this.handleSpaceData(firstData);

        
         this.$root.clearUnreadMessageRemote(extraData.message.message_id);
      
        if(this.returnedDataArray.length == 0){
          this.messageIsProcessing = false;
         }else{
          this.messageIsProcessing = true;
         }

     
        }).then( (value) => {
         

         
        
   
        }).catch(function (err) {
       console.log(err)
       // we got an error   
        });
   
       });

           }else{

           
            this.handleSpaceData(firstData);

            
            this.$root.clearUnreadMessageRemote(extraData.message.message_id);
         
           if(this.returnedDataArray.length == 0){
             this.messageIsProcessing = false;
            }else{
             this.messageIsProcessing = true;
            }

           }

            

        

         }

      }
      

     
   
   
  }).catch(function (err) {
    console.log(err)
    // we got an error
  });

  },
  getLocalStore:function(key){
    let result = localforage.getItem(key);
      
    return result;
    
  
  },
  removeLocalStorage: function(key,from = ''){
    localforage.removeItem(key).then(()=> {
      // Run this code once the key has been removed.
     if(from == 'chat'){
      this.$root.ChatList = [];
       this.chatComponent.fetchChatList();
     }

     if(from == 'chat_messages'){

      this.$root.chatComponent.fetchMessages(this.$root.selectedSpace.space_id)
     

     }
     
     
  }).catch(function(err) {
      // This code runs if there were any errors
      console.log(err);
  });
  },
  // sort chat list
  sortArray: function(arrayValue){
    arrayValue.sort(function(a, b){ 
    
      return new Date(b.message_track) - new Date(a.message_track); 
  }); 

  },
  
  sortChatList: function(checkUnread = true){
    if(this.ChatList != undefined){
      
      if(checkUnread){
        
        this.checkChannelSubSpace();
      }
     
      this.sortArray(this.ChatList);

    }
   
},
checkChannelSubSpace:function(){

 this.ChatList.forEach((space)=>{

    let storedSubChat = this.$root.getLocalStore('sub_channels_' + space.space_id  + this.$root.username);

    storedSubChat.then((result)=>{

 if(result != null){

      

   let finalResult = JSON.parse(result);

     let subspaces = finalResult.sub_channels;

     


  subspaces.forEach((subspace)=>{

    let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + subspace.space_id +  this.$root.username);

unreadStoredMsg.then((result)=>{

 if(result != null){

   let finalResultUnread = JSON.parse(result);

  

   space.subspace_messages += finalResultUnread.length;

   
 }

    

});

 })



   }

});

 })



},
updateSpaceMessages: function(showAlert = false){

  

  axios.get( '/check-for-new-space-messages/' + this.$root.userDeviceId)
 .then(response => {
 
 if (response.status == 200) {

    
  setTimeout(() => {

    this.refreshCount++
           
  if(this.refreshCount == 1){
    this.$root.updateSpaceMessages();
  }
    
  }, 2000);
  


}


})
.catch(error => {

    setTimeout(() => {
      this.updateSpaceMessages();
    }, 1000);
  
 
 
})

},

spaceMessageProcessor: function(space,allSpace,count){

  return new Promise((resolve) => {



    
 


       if( this.$root.selectedSpace.space_id != space.space_id || this.$root.selectedSpace.length == 0){
   
         
           
          
          // save to local database
            let storedMsg = this.$root.getLocalStore('full_space_' + space.space_id  + this.$root.username);
      
       storedMsg.then((result)=>{
     
         if(result != null){
   
            // update space messages
          let parsedResult = JSON.parse(result);
   
          let MessagesFull = parsedResult;
   
          let newMessages = space.new_messages;

        
          
         for (let index = 0; index < newMessages.length; index++) {
           let message = newMessages[index];


           
        
   
           let thismessage = MessagesFull.messages.filter((eachmessage)=>{
             return eachmessage.message_id == message.message_id
            });

           
   
            if(thismessage.length == 0){

              this.$root.updateSpaceTracker(space.space_id,message);
   
                       
              MessagesFull.messages.push(message);

                // if the space is not currently opened

      //    this.playAudio('/audio/new_message.mp3');
   
   
          // update unread in chatlist

        this.ChatList.map((chatspace)=>{

          if(chatspace.space_id == space.space_id){
            chatspace.unread += 1;
            chatspace.message_track = new Date();
            chatspace.last_message = [message];
          } 
        });
        
         

           this.$root.subSpaces.map((chatspace)=>{

             if(chatspace.space_id == space.space_id){
               chatspace.unread += 1;
               chatspace.message_track = new Date();
               
             } 
 
           });


          

           // update into local storage
           let messageTrackData = {
            count: count,
            space_id: space.space_id,
            message: message
            };


       

      this.$root.LocalStore('full_space_' + space.space_id  + this.$root.username,MessagesFull,true,'messager',messageTrackData);
   

            }else{



                // update into local storage
           let messageTrackData = {
            count: count,
            space_id: space.space_id,
            message: newMessages[0]
            };

             

              this.$root.LocalStore('full_space_' + space.space_id  + this.$root.username,MessagesFull,false,'messager',messageTrackData);

            }
        
           
         
   
           
         }
           
              
   
            
   
   
            
         }else{
      
           // if this space does not exist the user database yet


              // show new messages first
   
          let newMessagesFull = space.new_messages;
   
          newMessagesFull.forEach((message)=>{

            
            this.ChatList.map((chatspace)=>{

              if(chatspace.space_id == space.space_id){
                chatspace.unread += 1;
                chatspace.message_track = new Date();
                chatspace.last_message = [message];
              } 
            });
            
           // this.playAudio('/audio/new_message.mp3');
             
    
               this.$root.subSpaces.map((chatspace)=>{
    
                 if(chatspace.space_id == space.space_id){
                   chatspace.unread += 1;
                   chatspace.message_track = new Date();
                   
                 } 
     
               });
           
        
   
          });
   
          this.sortChatList(false);
   
           // save unread in local storage
          localforage.setItem('unread_messages_' + space.space_id + this.$root.username,JSON.stringify(allSpace)).then( ()=> {
   
   
          }).then(function (value) {
         // we got our value
   
        }).catch(function (err) {
        console.log(err)
         // we got an error
         });
   
       
         }
      
   
         
   
       });
   
       }else{
   
         // if the space is opened
   
          // show new messages first
   
          let newMessagesFull = space.new_messages;
   
          newMessagesFull.forEach((messages)=>{
   
        
   
               
    
   
   
          })
   
          // save to local database
          let storedMsg = this.$root.getLocalStore('full_space_' + space.space_id  + this.$root.username);
      
       storedMsg.then((result)=>{
   
        
             
         if(result != null){
   
           // update space local storage and show message to user
          
          let parsedResult = JSON.parse(result);
   
          let MessagesFull = parsedResult;
   
          let newMessages = space.new_messages;
               
           newMessages.forEach((messages)=>{

              // update unread in chatlist
   
         this.ChatList.map((chatspace)=>{
   
          if(chatspace.space_id == space.space_id){
          
            chatspace.message_track = new Date();
            chatspace.last_message = [messages];
          } 
        });
  
  
       
            messages.initialSize = 200
            messages.id = messages.message_id
            messages.index_count = this.$root.returnLastIndex() + 1;

              if(!this.$root.checkIfMessageExist(messages)){

               this.$root.Messages.push(messages);

              }
  
   
               this.$root.updateSpaceTracker(space.space_id,messages);
  
  
   
             let thismessage = MessagesFull.messages.filter((eachmessage)=>{
               return eachmessage.message_id == messages.message_id 
              });
   
              if(thismessage.length == 0){
   
             MessagesFull.messages.push(messages);
   
             
   
               this.$root.clearUnreadMessageRemote(messages.message_id);
   
              }
   
             // update into local storage
             let messageTrackData = {
              count: count,
              allSpace: allSpace,
              message: messages
            };

        this.$root.LocalStore('full_space_' + space.space_id  + this.$root.username,MessagesFull,false,'messager',messageTrackData);
   
              
   
           });

             
   
            
         }
   
   
       });
         
   
       }
   
      
   
    
  });

},
handleQueueingMessages:function(){

   for (const space of this.messageQueues) {

    
     this.handleSpaceData(space);

     let newMessageQueue = this.messageQueues.filter((queue)=>{
    return queue != space;
     })
     
     this.messageQueues = newMessageQueue;
     
   }

},

handleSpaceData: function(spaceData){

       

    this.handleMessageSequence(spaceData,0);
    

 },
 handleMessageSequence:function(allSpace,count){

      // check for space in chatlist
    

      this.$root.addSpaceToChatList(allSpace[count].space_id);

   
  this.spaceMessageProcessor(allSpace[count],allSpace,count)
  .then(count => {
   
   console.log('next')
  })

 },
 updateLocalStorage: function(){

  this.$root.spaceFullData.messages = this.Messages;

  this.$root.LocalStore('full_space_'+ postData.space_id  + this.$root.username,this.$root.spaceFullData);
 },
 returnLastIndex:function(){

  let msgIndex = 0;
   
   if(this.$root.Messages.length == 0){

      msgIndex = 0;

   }else{

     let lastMsg = this.$root.Messages[this.$root.Messages.length - 1];

   msgIndex = lastMsg.index_count;

   }
 
  

      
  return msgIndex;
},

 updateSpaceTracker: function(spaceId,message){
   
     
  let storedMsg = this.$root.getLocalStore('full_space_' + spaceId + this.$root.username);

  storedMsg.then((result)=>{
    
    if(result != null ){

      let finalResult = JSON.parse(result);
      
      let spaceData = finalResult.space;

      

      if(spaceData.type == 'SubSpace' && (this.$root.selectedSpace.space_id == spaceData.general_spaceId)){

        this.$root.selectedSpaceSubMessages += 1
    
      }


      if(this.ChatList.length > 0 && spaceData.type == 'SubSpace'){
      

      

        this.ChatList.forEach((space)=>{
   
  
          // update channel for SubChannels new messages
         if(space.space_id == spaceData.general_spaceId){

             
           space.subspace_messages = space.subspace_messages + 1;
           space.message_track = new Date();

           console.log(space.subspace_messages)
          
         } 
   
       });


      }

     

    }else{


    }

  })
   
     
  if(this.ChatList.length > 0){
   
    this.ChatList.map((space)=>{
         
      if(space.space_id == spaceId){
        space.message_track = new Date();
        space.last_message = [message];
      }
  
     
    });

  
    this.$root.sortChatList(false);

    // save into local storage

    let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);

    storedChat.then((result)=>{

        if(result != null ){

     let finalResult = JSON.parse(result);
       
         
  

           finalResult.channels.map((space)=>{
         
            if(space.space_id == spaceId){
              space.message_track = new Date();
              space.last_message = [message];
            }
      
          });
          
      
          finalResult.direct_messages.map((space)=>{
               
            if(space.space_id == spaceId){
              space.message_track = new Date();
              space.last_message = [message];
            }
      
          });
      
          finalResult.pet_spaces.map((space)=>{
               
            if(space.space_id == spaceId){
              space.message_track = new Date();
              space.last_message = [message];
            }
        
     
             });

    this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

     this.$root.sortChatList(false);
    
    

  }

})

  }

},
scrollToBottom: function(){

    if(this.$root.msgScrollComponent){


      if(this.$root.msgScrollComponent.messageContainer){

        setTimeout(() => {
           
          this.$root.msgScrollComponent.messageContainer.scrollToBottom();
         
       },200)
    
      }
    
      if(this.$root.msgScrollComponent.messageContainersmall){
    
        setTimeout(() => {
          this.$root.msgScrollComponent.messageContainersmall.scrollToBottom();
        }, 200);
      }
      
    

    }

 

},

botMessager:function(message){
  

          
  this.botIsLoading = true;
    axios.post('initiate-bot-chat',{
      bot_id: this.$root.selectedSpace.bot_id,
      device_id: this.$root.userDeviceId,
      message: message,
      space_id: this.$root.selectedSpace.space_id
    })
 .then(response => {
    
   this.botIsLoading = false;
   if(response.status == 200){


    
    let fullMessages = response.data[0];

    let messageData = {
      space_id: this.$root.selectedSpace.space_id,
      new_messages: fullMessages
    };
    
    this.handleSpaceData([messageData]);
   
    
    this.botSuggestionArray = response.data[1];

    this.$root.LocalStore('bot_latest_suggestions' + this.$root.selectedSpace.space_id  + this.$root.username,response.data[1]);
    

   }

 })
 .catch(error => {

  
     
     this.botIsLoading = false;
   
 })


  
},


// fetch space info

fetchSpaceInfo: function(selectedspace){

  axios.get('/fetch-space-info-'+ selectedspace)
.then(response => {

if (response.status == 200) {

let storedMsg = this.$root.getLocalStore('full_space_' + selectedspace + this.$root.username);

 storedMsg.then((result)=>{

     if(result != null){

         let finalResult = JSON.parse(result);

          finalResult.space = response.data.space;

          

            
              if(response.data.space.type == 'SubSpace'){


       let generalSpace =  response.data.space.gen_space;


          this.$root.selectedGenSpaceType = response.data.space.gen_space.type;

        generalSpace.space_id =   response.data.space.space_id;

      generalSpace.payment_option = response.data.space.payment_option;

        generalSpace.type =  response.data.space.type;


          generalSpace.description = response.data.space.description;

        generalSpace.general_spaceId =  response.data.space.general_spaceId;

  



    let subSpaceData =  response.data.space.sub_space_data;




   this.$root.selectedSubSpaceName =  response.data.space.name;

   this.$root.selectedSubSpaceType = subSpaceData.type;



     generalSpace.sub_spaces =  response.data.space.sub_spaces;



     this.$root.selectedSpace = generalSpace;


    }else{

        this.$root.selectedSpace = response.data.space;

    }

       
          
          
        
        finalResult.members = response.data.members;

         this.selectedSpaceMembers = response.data.members;

       
        

  this.$root.LocalStore('full_space_' +  this.$root.selectedSpace.space_id  + this.$root.username,finalResult);

    


     }



    
 });


  // update chatList

   let storedChat = this.$root.getLocalStore('user_chat_list_new_'+ this.$root.username);
  
   storedChat.then((result)=>{

     if(result != null){

         let finalResult = JSON.parse(result);   

       
       
           
      

         if(response.data.space.type == 'Channel' || response.data.space.type == 'Team'){
              finalResult.channels.map((chat)=>{
                if(chat.space_id == this.$root.selectedSpace.space_id){

                   chat.name =  response.data.space.name;

                   chat.image_name = response.data.space.image_name;

                   chat.image_extension = response.data.space.image_extension;

                   chat.background_color = response.data.space.background_color;

                }
              })
         }

         if(response.data.space.type == 'Direct'){

            finalResult.direct_messages.map((chat)=>{
                if(chat.space_id == this.$root.selectedSpace.space_id){

                   chat.userInfo =  response.data.space.userInfo;

                
                }
              })

         }

         if(response.data.space.type == 'Bot'){

              

            finalResult.pet_spaces.map((chat)=>{
                if(chat.space_id == this.$root.selectedSpace.space_id){
                   
                   chat.bot_data =  response.data.space.bot_data;

               
                }
              })

         }

           let FinalMessages = finalResult.direct_messages.filter(chat=>{
                return chat.last_message.length > 0
            })
            
          let fullList = finalResult.channels.concat(FinalMessages, finalResult.pet_spaces);
          

            this.$root.ChatList = fullList;

           this.$root.sortChatList();

            this.SetUnread();

          
            this.$root.LocalStore('user_chat_list_new_' + this.$root.username,finalResult);

    


     }



    
 });
}


})
.catch(error => {

})


},

//end of spaceinfo fetch
SetUnread: function(){

  this.$root.ChatList.map((space)=>{

     let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + space.space_id +  this.$root.username);

unreadStoredMsg.then((result)=>{

  if(result != null){

    let finalResultUnread = JSON.parse(result);


    space.unread = finalResultUnread.length;

  }else{
     space.unread = 0;
  }

});

  })

 
},
updateSentMessage:function(postData){

  
      
  let unsentMsg = this.$root.getLocalStore('unsent_messages_' + postData.space_id  + this.$root.username);

  unsentMsg.then((result)=>{

    if(result != null){

     let finalResult = JSON.parse(result);
       
       

     let remainingMsg = finalResult.filter((message)=>{
       return message.temp_id != postData.temp_id;
    });


    this.LocalStore('unsent_messages_' + postData.space_id  + this.$root.username,remainingMsg);

        
    this.sendingMessage = false;

    }else{
      this.sendingMessage = false;
    }

    

   
 
  });


},
storeUnsentMessages:function(postData){

  let unsentMsg = this.$root.getLocalStore('unsent_messages_' + postData.space_id  + this.$root.username);

   unsentMsg.then((result)=>{

     if(result != null){

      let finalResult = JSON.parse(result);
        
        

      let messageData = finalResult.filter((message)=>{
        return message.temp_id == postData.temp_id;
     });


          
         if(messageData.length == 0){

          finalResult.push(postData);
          this.LocalStore('unsent_messages_' + postData.space_id  + this.$root.username,finalResult,true);

         }

         
         

     }else{

      
        this.LocalStore('unsent_messages_' + postData.space_id  + this.$root.username,[postData],true);

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
  this.Messages.map((message)=>{
     if(messageId == message.message_id){
        message.loading = false;
        message.message_id = response.data[0].message_id; 
        message.id = response.data[0].message_id; 

     }
  });

  if(this.selectedSpace.type == 'Bot'){
    
   this.chatComponent.botMessagerChat(response.data[0].content);
  }

  this.$root.spaceFullData.messages = this.Messages;

  this.$root.LocalStore('full_space_'+ postData.space_id  + this.$root.username,this.$root.spaceFullData);


this.replyMessage = [];

this.scrollToBottom();


this.updateSentMessage(postData);

this.sendingMessage = false;


}


})
.catch(error => {

this.sendingMessage = false;

this.storeUnsentMessages(postData);

}) 
},
initialPushMangerReg: function(){
  if('serviceWorker' in navigator){
   navigator.serviceWorker.ready.then(registration => {
     if("PushManager" in window){
        
       registration.pushManager.getSubscription().then(sub => {
            
         if(sub == null || sub == undefined){
          this.showUserNotification = true;
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
       
   }
});


this.$root.spaceFullData.messages = this.Messages;

  this.$root.LocalStore('full_space_'+ postData.space_id  + this.$root.username,this.$root.spaceFullData);


this.scrollToBottom();
this.updateSentMessage(postData);
this.sendingMessage = false;


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
              message.id = response.data[0].message_id; 
             
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

        this.$root.spaceFullData.messages = this.Messages;

  this.$root.LocalStore('full_space_'+  response.data[0].space_id  + this.$root.username,this.$root.spaceFullData);

        this.sendingMessage = false;

        this.updateSentMessage(postData);
        this.scrollToBottom();
   

        
     }else{
       
     }
  
    
  
      
     
   })
   .catch(error => {
    
     this.sendingMessage = false;
    
   })
},

 // webRTC configs
 setDataConnection:function(){

  let _this = this;

    this.$root.dataconnection = new RTCMultiConnection();

      this.$root.dataconnection.enableLogs = false;

// by default, socket.io server is assumed to be deployed on your own URL
this.$root.dataconnection.socketURL = 'https://rtc.citonhub.com:9001/';

// set user as default speaker
let userSpeakerData =  this.authProfile;
     userSpeakerData.speaking = false;    
     userSpeakerData.muted = false;    

this.speakingUser = userSpeakerData; 

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
 urls: 'stun:167.99.145.235:3478'  
});

// last step, set TURN url (recommended)

this.$root.dataconnection.iceServers.push({
urls: 'turn:167.99.145.235:3478',
credential: '15Raymond',
username: 'ILoveCitonHubPort'
});

setTimeout(() => {
    this.dataSocket = this.$root.dataconnection.socket;
}, 2000);


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

 if(event.data.action == 'mute_state'){

  this.$root.allAudioParticipant.map((user)=>{
    if(user[1] == event.data.data.userid){

       if(event.data.data.status == 'muted'){
        user[0].profile.muted = true
       }

       if(event.data.data.status == 'unmuted'){
        user[0].profile.muted = false
       }

      

    }
  })

 }

if(event.data.action == 'neutral' ){


if(this.$root.allAudioParticipant.length != 0){
    
  this.speakingUser = event.data.data.userProfile;
  
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

// screen sharing 
setSreenShareConnection:function(){
          

  let _this = this;

   this.$root.connection = new RTCMultiConnection();

    this.$root.connection.enableLogs = false;

   this.$root.connection.socketURL = 'https://rtc.citonhub.com:9001/';

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

         this.$root.connection.bandwidth = {
          audio: 128,
           screen: 1024
       };
      
       var videoConstraints = {
           mandatory: {
              maxWidth: 1920,
              maxHeight: 1080,
               minAspectRatio: 1.77,
               minFrameRate: 3,
               maxFrameRate: 64
           },
           optional: []
       };
      
      this.$root.connection.mediaConstraints.video = videoConstraints;


      

  // first step, ignore default STUN+TURN servers
  this.$root.connection.iceServers = [];

// second step, set STUN url
this.$root.connection.iceServers.push({
urls: 'stun:167.99.145.235:3478'  
});

// last step, set TURN url (recommended)

    
 this.$root.connection.iceServers.push({
  urls: 'turn:167.99.145.235:3478',
  credential: '15Raymond',
  username: 'ILoveCitonHubPort'
 });




 this.$root.connection.videosContainer = document.getElementById('videos-container');





 this.$root.connection.onstream = function(event) {
var existing = document.getElementById(event.streamid);
var existingSm = document.getElementById(event.streamid + 'small');

if(existing && existing.parentNode) {
 existing.parentNode.removeChild(existing);
}

if(existingSm && existingSm.parentNode) {
  existingSm.parentNode.removeChild(existingSm);
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
   buttons: [],
   showOnMouseEnter: false,
 
});

_this.$root.connection.videosContainer.appendChild(mediaElement);


setTimeout(function() {
   mediaElement.media.play();
}, 5000);

mediaElement.id = event.streamid;

// smaller screens
var videoSm = document.createElement('video');

try {
  videoSm.setAttributeNode(document.createAttribute('autoplay'));
  videoSm.setAttributeNode(document.createAttribute('playsinline'));
} catch (e) {
  videoSm.setAttribute('autoplay', true);
  videoSm.setAttribute('playsinline', true);
}


if(event.type === 'local') {
  videoSm.volume = 0;
 try {
  videoSm.setAttributeNode(document.createAttribute('muted'));
 } catch (e) {
  videoSm.setAttribute('muted', true);
 }
}
videoSm.srcObject = event.stream;

var mediaElementSm = getHTMLMediaElement(videoSm, {
   title: event.userid + 'small',
   buttons: [],
   showOnMouseEnter: false,
 
});

document.querySelector('#videos-container-sm').appendChild(mediaElementSm);


setTimeout(function() {
  mediaElementSm.media.play();
}, 5000);

mediaElementSm.id = event.streamid + 'small';






 

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

var mediaElementSm = document.getElementById(event.streamid + 'small');
if (mediaElementSm) {
  mediaElementSm.parentNode.removeChild(mediaElementSm);

   if(event.userid === _this.$root.connection.sessionid && !_this.$root.connection.isInitiator) {
     alert('Broadcast is ended. We will reload this page to clear the cache.');
     location.reload();
   }
}

};

// for smaller screen



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

   // audio connection

   setAudioConnection(){
        
    let _this = this;

    this.$root.audioconnection = new RTCMultiConnection();

      this.$root.audioconnection.enableLogs = false;

// by default, socket.io server is assumed to be deployed on your own URL
this.$root.audioconnection.socketURL = 'https://rtc.citonhub.com:9001/';


this.$root.audioconnection.socketMessageEvent = 'audio-conference';

// set user 
let userMainData =  this.authProfile;
userMainData.speaking = false;    
userMainData.muted = false; 

this.$root.audioconnection.extra = {
   profile: userMainData,
  joinedAt: (new Date).toISOString(),
  volume: 80.00,
  speaking: false
     };

     this.$root.audioconnection.socketCustomParameters = '&extra=' + JSON.stringify(this.$root.audioconnection.extra);

this.$root.audioconnection.session = {
audio: true,
video: false
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
 urls: 'stun:167.99.145.235:3478'  
});

// last step, set TURN url (recommended)

this.$root.audioconnection.iceServers.push({
urls: 'turn:167.99.145.235:3478',
credential: '15Raymond',
username: 'ILoveCitonHubPort'
});

this.$root.audioconnection.audiosContainer = document.getElementById('audios-container');





this.$root.audioconnection.onstream = function(event) {



var width = parseInt(_this.$root.audioconnection.audiosContainer.clientWidth / 2) - 20;

var mediaElement = getHTMLMediaElement(event.mediaElement, {
  title: event.userid,
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

// for smaller screens
var mediaElementSm = getHTMLMediaElement(event.mediaElement, {
  title: event.userid,
  width: width,
  showOnMouseEnter: false
});

if(event.type === 'local') {
event.mediaElement.muted = true;
delete event.mediaElement;
}

document.querySelector('#audios-container-sm').appendChild(mediaElementSm);

setTimeout(function() {
  mediaElementSm.media.play();
}, 2000);

mediaElementSm.id = event.streamid + 'small';

   _this.setUserSpeaker();

   


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

  _this.sendMuteDetails('muted')
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

_this.sendMuteDetails('unmuted')
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



   if(newInfo.length == 0 && state.extra.profile.username != this.username){

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

  // manage audio connection

  checkAudioRoomState: function(master){
      
      
    if(this.$root.audioconnection != undefined){

       this.isMaster = master;
         
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
              _this.dataconnection.openOrJoin('data' + _this.$root.selectedSpace.space_id)
            }else{

              _this.roomNotExist = true;

              _this.roomCheckingInitaited = true;

              
                _this.rejoinAudio(master);

              return;
            }

            
          }


   //  _this.checkIfUserIsReconnecting(master)

     _this.audioSocket = _this.$root.audioconnection.socket;
   
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
  this.$root.audioconnection = undefined;
    this.$root.setAudioConnection();
     if(master){

             this.$root.checkAudioRoomState(true);

          }else{
             this.$root.checkAudioRoomState(false);
          }

 },
 rejoinData: function(master){

  let _this = this;


  if(this.$root.dataconnection != undefined){

 // disconnect with all users
this.$root.dataconnection.getAllParticipants().forEach(function(pid) {
 _this.$root.dataconnection.disconnectWith(pid);
});

// stop all local cameras
this.$root.dataconnection.attachStreams.forEach(function(localStream) {
 localStream.stop();
});

// close socket.io connection
this.$root.dataconnection.closeSocket();
  }
this.$root.dataconnection = undefined;
  this.$root.setDataConnection();
   if(master){

    this.dataconnection.openOrJoin('data' + this.$root.selectedSpace.space_id)

        }else{
          this.dataconnection.join('data' + this.$root.selectedSpace.space_id)
        }

},
   openAudioRoom: function(){  
    
    let _this = this;
  
    this.$root.audioconnection.openOrJoin('audio' + this.$root.selectedSpace.space_id, () =>{

        
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

  // manage screen connection
  checkScreenRoomState: function(master){
      
    let _this = this;

    this.isMaster = master;


       this.screenIsConnecting = true;

       this.$root.connection.checkPresence('screen' + this.$root.selectedSpace.space_id, function(isRoomExist, roomid) {
     
         _this.$root.screenSharingOn = true;
   
         _this.$root.showVideoScreen = true;


         if (isRoomExist === true) {
           _this.joinScreenRoom();
           _this.screenIsConnecting = false;
        } else {

            
          if(master){
            _this.openScreenRoom();
            _this.screenIsConnecting = false;
          }else{

            return;
          }

          
        }

         _this.screenSocket = _this.$root.connection.socket;
 
   });
 

   },

     openScreenRoom: function(){    

        let _this = this;
      
        this.$root.connection.sdpConstraints.mandatory = {
           OfferToReceiveAudio: false,
           OfferToReceiveVideo: true
       };
      
     this.$root.connection.openOrJoin('screen' + this.$root.selectedSpace.space_id, () => {
        
      this.$root.sendLiveSignal('screen');
      
    });

    this.screenIsConnecting = false;

    this.$root.sendLiveSignal('screen');

    

      },
      joinScreenRoom: function(){    
         
           
        let _this = this;
      
     this.$root.connection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: true
    };

    this.screenIsConnecting = false;

    this.$root.connection.join('screen' + this.$root.selectedSpace.space_id);
   
      },
      rejoinScreen:function(master){


        let _this = this;


        if(this.$root.connection != undefined){

       // disconnect with all users
   this.$root.connection.getAllParticipants().forEach(function(pid) {
       _this.$root.connection.disconnectWith(pid);
   });

   // stop all local cameras
   this.$root.connection.attachStreams.forEach(function(localStream) {
       localStream.stop();
   });

   // close socket.io connection
  this.$root.connection.closeSocket();
   
        }

     this.$root.connection = undefined;

     this.$root.screenSharingOn = false;
      
       this.$root.showVideoScreen = false;

       this.$root.connection = undefined;

        this.$root.setSreenShareConnection();

         if(master){

                 this.$root.checkScreenRoomState(true);

              }else{
                 this.$root.checkScreenRoomState(false);
              }

       }, 
       sendMuteDetails:function(status){

        if(this.$root.dataconnection != undefined){
             
          let data = {
            userid: this.$root.audioconnection.userid,
            status:  status,
        };
  
        this.$root.dataconnection.send({
          action:'mute_state',
          data: data,
          space_id: this.$root.selectedSpace.space_id
        });
         
        }

       },

      // detect speaker
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

         
       

         let userSpeakerData =  _this.authProfile;
     userSpeakerData.speaking = true;    

      
        let data = {
          userid: _this.$root.audioconnection.userid,
          userProfile: userSpeakerData,
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

          let userSpeakerData =  _this.authProfile;
     userSpeakerData.speaking = false;    


        
          let data = {
            userid: _this.$root.audioconnection.userid,
            userProfile: userSpeakerData,
           
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

   
    },
    
  
});
