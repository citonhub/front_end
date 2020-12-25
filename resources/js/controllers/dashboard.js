import Vuex from 'vuex'
import { mapGetters } from 'vuex'

window.Echo = require('laravel-echo');
import Echo from 'laravel-echo';

window.io = require('socket.io-client');

Vue.use(Vuex)

axios.defaults.baseURL = 'https://api.beta.citonhub.com/api'

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
const Pets = () => import(/* webpackChunkName: "Pets" */ '../components/dashboard/Pets.vue');
const Challenges = () => import(/* webpackChunkName: "Challenges" */ '../components/dashboard/Challenges.vue');

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

// Pets routes
const PetList= () => import(/* webpackChunkName: "PetList" */ '../components/pets/PetList.vue');
const PetBoard= () => import(/* webpackChunkName: "PetBoard" */ '../components/pets/Board.vue');
const PetContent= () => import(/* webpackChunkName: "PetContent" */ '../components/pets/PetContent.vue');
const AddGem= () => import(/* webpackChunkName: "AddGem" */ '../components/pets/AddGem.vue');
const GetPet= () => import(/* webpackChunkName: "GetPet" */ '../components/pets/GetPet.vue');


const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'register', component: Register },
  { path: '/verify', name: 'verify', component: Verify },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  {
    path:'/profile', name:'ProfilePage', component:ProfilePage
  },
  {
    path:'/',
    redirect:'/hub',
  },
  {
    path:'/hub',
    name:'Hub',
    component: Hub
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
      thisUserState.$root.chatComponent.chatIsOpen = true;
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
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'sub_channels';
       
    },500);
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
    
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'channel_info';
       
    },500);
          
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
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'channel_edit';
       
    },500);
          
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
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'add_sub_channel';
       
    },500);
          
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

      thisUserState.$root.chatComponent.chatInnerConent = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = false;

      setTimeout(() => {
        thisUserState.$root.chatComponent.liveSessionIsOpen = true;
      }, 500);
  
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
  { path: '/board',
     name: 'Board', 
     component: Board,
     redirect: '/board/projects',
    children: [
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
        path: 'panel',
        component: ProjectPanel,
        children:[
                 {
                 // code editor
                 path: 'editor',
                  component: CodeEditor
                  },
                  {
                    // Add Code File
                    path: 'add-new-file',
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
                    path: 'resource-upload',
                    component: ResourceUpload
                  },
                  {
                    // panel loader
                    path: 'panel-loader',
                    component: PanelLoader
                  },
                 
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
        path: 'pets',
        component: Pets,
        redirect:'/board/pets/list',
        children:[
          {
            // list
            path:'list',
            component:PetList,
            
          },
          {
            // board
            path:'board',
            component:PetBoard,
            redirect:'/board/pets/board/content',
            children:[
              {
                // content
                path:'content',
                component:PetContent
              },
              {
                // add new gem
                path:'add-gem',
                component:AddGem
              }
            ]
          }
          ,
              // get new pet
              {
                path:'get-pet',
                component:GetPet
              }
        ]
      },
      {
        // challenges
        path: 'challenges',
        component: Challenges,
        redirect: '/board/challenges/list',
        children:[
            { // list
            path: 'list',
            component: ChallengesList
            },
            { // create
              path: 'create',
              component: ChallengesCreate
            },
            {
              // panel
              path:'panel',
              component:ChallengePanel,
              redirect: '/board/challenges/panel/description',
              children:[

                { // description
                  path: 'description',
                  component: ChallengeDescription
                  },
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
      if(window.userRootState){
        window.userRootState.routeIsLoading = true;
      }
  
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  if(window.userRootState){
    window.userRootState.routeIsLoading = false;
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
      isConnected:false,
      botSuggestionArray:[],
      fullCodeLanguage:'',
      FullcodeContent:'',
      imageSlidestate:0,
      imageArrayView:[],
      typinguser:'',
      typingSpace:'',
      typing:false,
      globalUsers:[],
     },
     mounted: function () {
      window.thisUserState = this;
      window.routerData = this.$router;
      if(this.isLogged){
        this.fetchUserDetails();
       }
      this.connectToChannel();
    },
    computed: {
      ...mapGetters([
        'isLogged'
      ]),
      socketState:function () {
        window.Echo.connector.socket.on('connect', ()=>{
          this.isConnected = true
      })

  window.Echo.connector.socket.on('disconnect', ()=> {
          this.isConnected = false
      })

  window.Echo.connector.socket.on('reconnecting', function(attemptNumber){
       this.isConnected = false
    });

      if(!this.isConnected){

        if(this.chatComponent){
           this.chatComponent.checkForUnreadMessagesDisconnected();
        }

      }

    return this.isConnected;
        }
        
    },
    created(){
   
      // set default 'this' data
     window.thisUserState = this;
      window.routerData = this.$router;

      // get user info from local storage if logged in
      const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)

        this.username = userData.user.username;
        this.user_temp_id = userData.user.id;

        this.returnedToken = userData.token;
        this.$store.commit('setUserData', userData)

        // set laravel echo config
        this.setEcho();
      
     
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

          if(this.ChatList != undefined){
           
            this.ChatList.map((space)=>{
                 
              if(space.space_id == spaceId){
    
                
                space.unread = 0;
              }
      
            });
      
            
          
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
         
          
      },
    // fetches the logged in user details
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
  // connect user to a global private socket
  connectToChannel: function(){



    if(this.checkauthroot == 'auth'){
      window.Echo.private('user.' + this.username)
      .listen('.UserChannel',(e) => {
        
       

     });

    }
       
  },

  // check user login state
  checkIfUserIsLoggedIn: function(){
    if(this.checkauthroot == 'noauth'){
      this.LocalStore('route_tracker',[this.$router.currentRoute.path]);
     
       this.$router.push({ path: '/login' });
      return;
    } 
 },
 // save space data to local storage
 pushDataToLocal:function(data){

  localforage.getItem('full_' + data.space_id + this.$root.username).then((result)=> {

   if(result != null){
    
    
    let finalResult = JSON.parse(result);
        finalResult[0].push(data);
      
        this.LocalStore('full_' + data.space_id  + this.$root.username,finalResult);
      
   }

  });
   
 },
 // local storage
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
  // sort chat list
  sortArray: function(arrayValue){
    arrayValue.sort(function(a, b){ 
    
      return new Date(b.message_track) - new Date(a.message_track); 
  }); 

  },
  sortChatList: function(){
    if(this.ChatList != undefined){

     
     
      this.sortArray(this.ChatList);
  

    }
   
},
updateSpaceMessages: function(){

  axios.get( '/check-for-new-space-messages/' + this.$root.userDeviceId)
 .then(response => {
 
 if (response.status == 200) {

    let returnData = response.data;
      
      this.handleSpaceData(returnData);

  

}

 
  

})
.catch(error => {
  
 
})

},

handleSpaceData: function(returnData){

  returnData.forEach(space => {

    if( this.$root.selectedSpace.space_id != space.space_id){

       // if the space is not currently opened
         let storedMsg = this.$root.getLocalStore('full_' + space.space_id  + this.$root.username);
   
    storedMsg.then((result)=>{
  
      if(result != null){

         // update space messages
       let parsedResult = JSON.parse(result);

       let MessagesFull = parsedResult;

       let newMessages = space.new_messages;
            
        // update unread in chatlist

        this.ChatList.map((chatspace)=>{
          if(chatspace.space_id == space.space_id){
            chatspace.unread = newMessages.length;
          } 
        });

        newMessages.forEach((messages)=>{

          MessagesFull[0].push(messages);

          // update into local storage
            this.$root.LocalStore('full_' + space.space_id  + this.$root.username,MessagesFull);

         

             // update unread messages into local storage

      let unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + space.space_id + this.$root.username);

   unreadStoredMsg.then((result)=>{

     let finalResultUnread = JSON.parse(result);

      finalResultUnread.push(messages)


      localforage.setItem('unread_messages_' + space.space_id + this.$root.username,JSON.stringify(finalResultUnread)).then( ()=> {
        

       }).then(function (value) {
       // we got our value

       }).catch(function (err) {
      console.log(err)
      // we got an error   
       });

      });

        });

         
      }else{
   
        // if this space does not exist the user database yet
     

        // save unread in local storage
       localforage.setItem('unread_messages_' + space.space_id + this.$root.username,JSON.stringify(returnData)).then( ()=> {


       }).then(function (value) {
      // we got our value

     }).catch(function (err) {
     console.log(err)
      // we got an error
      });

     // update unread in chatlist

     this.ChatList.map((chatspace)=>{
      if(chatspace.space_id == space.space_id){
        chatspace.unread = returnData.length;
      } 
    });

      }


    });

    }else{

      // if the space is opened
       let storedMsg = this.$root.getLocalStore('full_' + space.space_id  + this.$root.username);
   
    storedMsg.then((result)=>{

     
          
      if(result != null){

        // update space local storage and show message to user
       
       let parsedResult = JSON.parse(result);

       let MessagesFull = parsedResult;

       let newMessages = space.new_messages;
            
        newMessages.forEach((messages)=>{

          MessagesFull[0].push(messages);

            this.$root.LocalStore('full_' + space.space_id  + this.$root.username,MessagesFull);

            messages.initialSize = 200
            messages.id = messages.message_id
            messages.index_count = this.$root.returnLastIndex() + 1;

               this.$root.Messages.push(messages);

               this.$root.updateSpaceTracker(space.space_id);

       this.$root.scrollToBottom(); 

        });

         
      }
    });
      

    }

  
});

 },
 updateSpaceTracker: function(spaceId){
     
  if(this.ChatList != undefined){
   
    this.ChatList.map((space)=>{
         
      if(space.space_id == spaceId){
        space.message_track = new Date();
      }

    });

    this.$root.sortChatList();
   
  }
  

},
scrollToBottom: function(){

   

  if(this.$root.msgScrollComponent){

    setTimeout(() => {
       
      this.$root.msgScrollComponent.messageContainer.scrollToBottom();
   },200)

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

     
    
    for (let index = 0; index < fullMessages.length; index++) {

       let message = fullMessages[index];
           
           

       message.index_count = this.$root.returnLastIndex() + 1;
       message.id =  message.message_id;
       message.initialSize = 200

       

  this.$root.Messages.push(message);





          this.$root.spaceFullData[0] = this.$root.Messages;


          

            let fullData = [];
               fullData.push(this.$root.spaceFullData[0]);
           fullData.push(this.$root.spaceFullData[1]);

            let thirdData = [];
               
               thirdData.push(this.$root.spaceFullData[2][0])

           fullData.push(thirdData);

          


        this.$root.LocalStore('full_' + this.$root.selectedSpace.space_id  + this.$root.username,fullData);

 this.$root.updateSpaceTracker(message.space_id);

 this.$root.sortChatList();
 
   

 }
   
    
    this.botSuggestionArray = response.data[1];

     this.$root.LocalStore('bot_latest_suggestions' + this.$root.selectedSpace.space_id  + this.$root.username,response.data[1]);
    

   }

 })
 .catch(error => {

  
     console.log(error)
     this.botIsLoading = false;
   
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
          this.LocalStore('unsent_messages_' + postData.space_id  + this.$root.username,finalResult);

         }

         
         

     }else{

      
        this.LocalStore('unsent_messages_' + postData.space_id  + this.$root.username,[postData]);

     }

     if(this.chatComponent != undefined){
      this.chatComponent.resendMessages();
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
       

        
     }
  });

  if(this.selectedSpace.type == 'Bot'){
   this.botMessager(response.data[0].content);
  }





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

  
      
     
   })
   .catch(error => {
    
     this.sendingMessage = false;
    
   })
},
    },
    
  
});
