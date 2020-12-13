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

// authentication routes
const Register = () => import(/* webpackChunkName: "register?v=1.99" */ '../components/auth/Register.vue');
const Login = () => import(/* webpackChunkName: "login?v=1.01" */ '../components/auth/Login.vue');
const Verify = () => import(/* webpackChunkName: "verify?v=0.63" */ '../components/auth/Verify.vue');
const ForgotPassword = () => import(/* webpackChunkName: "ForgotPassword?v=0.26" */ '../components/auth/ForgotPassword.vue');
const ResetPassword = () => import(/* webpackChunkName: "ResetPassword?v=1.66" */ '../components/auth/ResetPassword.vue');
const SetUsername = () => import(/* webpackChunkName: "SetUsername?v=0.25" */ '../components/auth/SetUsername.vue');

// dashboard routes
const Board = () => import(/* webpackChunkName: "Board?v=2.88" */ '../components/dashboard/Board.vue');
const Projects = () => import(/* webpackChunkName: "Projects?v=0.24" */ '../components/dashboard/Projects.vue');
const ContentBots = () => import(/* webpackChunkName: "ContentBots?v=0.20" */ '../components/dashboard/ContentBots.vue');
const Challenges = () => import(/* webpackChunkName: "Challenges?v=0.53" */ '../components/dashboard/Challenges.vue');

// project routes
const ProjectList = () => import(/* webpackChunkName: "ProjectList?v=1.94" */ '../components/projects/ProjectList.vue');
const ProjectPanel = () => import(/* webpackChunkName: "ProjectPanel?v=1.92" */ '../components/projects/ProjectPanel.vue');
const CodeEditor = () => import(/* webpackChunkName: "CodeEditor?v=1.74" */ '../components/projects/CodeEditor.vue');
const AddProject = () => import(/* webpackChunkName: "AddProject?v=0.75" */ '../components/projects/AddProject.vue');
const AddNewFile = () => import(/* webpackChunkName: "AddNewFile?v=0.33" */ '../components/projects/AddNewFile.vue');
const AddDatabase = () => import(/* webpackChunkName: "AddDatabase?v=0.23" */ '../components/projects/AddDatabase.vue');
const ResourceUpload = () => import(/* webpackChunkName: "ResourceUpload?v=0.24" */ '../components/projects/ResourceUpload.vue');
const PanelLoader = () => import(/* webpackChunkName: "PanelLoader?v=0.26" */ '../components/projects/PanelLoader.vue');
const PanelSettings = () => import(/* webpackChunkName: "PanelSettings?v=0.38" */ '../components/projects/PanelSettings.vue');
const AddWebroute= () => import(/* webpackChunkName: "AddWebroute?v=0.37" */ '../components/projects/AddWebroute.vue');

// chats routes
const Chats = () => import(/* webpackChunkName: "Chats?v=7.06" */ '../components/chats/Chats.vue');

// Hub routes
const Hub = () => import(/* webpackChunkName: "Hub?v=4.37" */ '../components/Hub/Hub.vue');

// profile routes
 const ProfilePage= () => import(/* webpackChunkName:"ProfilePage?v=0.93"*/ '../components/Profile/ProfilePage.vue');

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'register', component: Register },
  { path: '/verify', name: 'verify', component: Verify },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  {
    path:'/profile-page', name:'ProfilePage', component:ProfilePage
  },
  {
    path:'/hub',
    name:'Hub',
    component: Hub
  },
  {
    // chats
    path: '/chats',
    component: Chats,
    name:'Chats',
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
      path: 'add',
      component: AddProject
    },
  
    ]
      },
    
      {
        // content bots
        path: 'content-bots',
        component: ContentBots
      },
      {
        // challenges
        path: 'challenges',
        component: Challenges
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
      imageViewPath:'',
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
      
    },
    computed: {
     
    },
    created(){
     window.userRootState = this;
    },
    methods:{
   
    }
});