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
  
        thisUserState.$root.chatComponent.chatIsOpen = false;
        thisUserState.$root.chatComponent.liveSessionIsOpen = false;
        thisUserState.$root.chatComponent.chatbarContent = 'chat_list';
            
       

       }
   
      to.matched[0].components = {
        default: Chats,
        modal: false
      }

      
       
    next()
  }
  },

  // channel content 
  { path: '/channels/:space_id/content',
   name: 'Content',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatIsOpen = true;
          
     

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
      
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.chatbarContent = 'create_channel';
          
     

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
{ path: '/channels/:space_id/sub_channels',
   name: 'SubChannels',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'sub_channels';
       
    },500);
          
     

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
{ path: '/channels/:space_id/channel_info',
   name: 'ChannelInfo',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
    
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'channel_info';
       
    },500);
          
     

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
{ path: '/channels/:space_id/channel_edit',
   name: 'ChannelEdit',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'channel_edit';
       
    },500);
          
     

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
{ path: '/channels/:space_id/add_sub_channel',
   name: 'AddSubChannel',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;
      thisUserState.$root.chatComponent.innerSideBarContent = '';
    setTimeout(() => {

      thisUserState.$root.chatComponent.chatInnerSideBar = true;
      thisUserState.$root.chatComponent.innerSideBarContent = 'add_sub_channel';
       
    },500);
          
     

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
{ path: '/channels/:space_id/live_session',
   name: 'LiveSession',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      thisUserState.$root.chatComponent.liveSessionIsOpen = false;

      thisUserState.$root.chatComponent.chatInnerConent = false;
      thisUserState.$root.chatComponent.chatInnerSideBar = false;

      setTimeout(() => {
        thisUserState.$root.chatComponent.liveSessionIsOpen = true;
      }, 500);
  
     

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
{ path: '/channels/:space_id/editor',
   name: 'editor',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      thisUserState.$root.chatComponent.chatInnerConent = 'code_editor';

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
{ path: '/channels/:space_id/image_viewer',
   name: 'ImageViewer',
   meta: {
    twModalView: true
  },
   beforeEnter: (to, from, next) => {
    const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)


    if(window.thisUserState != undefined){
  
      thisUserState.$root.chatComponent.chatInnerConent = 'image_viewer';

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
      imageArrayView:[
        {
          image_name:'space_image_1_128',
          image_extension:'png',
          background_color:'#c5c5c5'
        },
        {
         image_name:'space_image_1_129',
         image_extension:'png',
         background_color:'#c5c5c5'
        },
        {
          image_name:'space_image_1_130',
         image_extension:'jpg',
         background_color:'#c5c5c5'
        },
         {
           image_name:'space_image_1_131',
         image_extension:'jpeg',
         background_color:'#c5c5c5'
        }
      ]
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
      ])
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
    }else{
      this.checkauthroot = 'noauth';
    }


  },
    methods:{
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
    }
});