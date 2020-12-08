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
const Register = () => import(/* webpackChunkName: "register?v=1.90" */ '../components/auth/Register.vue');
const Login = () => import(/* webpackChunkName: "login?v=0.91" */ '../components/auth/Login.vue');
const Verify = () => import(/* webpackChunkName: "verify?v=0.55" */ '../components/auth/Verify.vue');
const ForgotPassword = () => import(/* webpackChunkName: "ForgotPassword?v=0.18" */ '../components/auth/ForgotPassword.vue');
const ResetPassword = () => import(/* webpackChunkName: "ResetPassword?v=1.58" */ '../components/auth/ResetPassword.vue');
const SetUsername = () => import(/* webpackChunkName: "SetUsername?v=0.17" */ '../components/auth/SetUsername.vue');

// dashboard routes
const Board = () => import(/* webpackChunkName: "Board?v=2.74" */ '../components/dashboard/Board.vue');
const Projects = () => import(/* webpackChunkName: "Projects?v=0.16" */ '../components/dashboard/Projects.vue');
const Channels = () => import(/* webpackChunkName: "Channels?v=0.12" */ '../components/dashboard/Channels.vue');
const Teams = () => import(/* webpackChunkName: "Teams?v=0.12" */ '../components/dashboard/Teams.vue');
const DirectMessages = () => import(/* webpackChunkName: "DirectMessages?v=0.12" */ '../components/dashboard/DirectMessages.vue');
const ContentBots = () => import(/* webpackChunkName: "ContentBots?v=0.12" */ '../components/dashboard/ContentBots.vue');
const Challenges = () => import(/* webpackChunkName: "Challenges?v=0.12" */ '../components/dashboard/Challenges.vue');

// project routes
const ProjectList = () => import(/* webpackChunkName: "ProjectList?v=1.78" */ '../components/projects/ProjectList.vue');
const ProjectPanel = () => import(/* webpackChunkName: "ProjectPanel?v=1.72" */ '../components/projects/ProjectPanel.vue');
const CodeEditor = () => import(/* webpackChunkName: "CodeEditor?v=1.63" */ '../components/projects/CodeEditor.vue');
const AddProject = () => import(/* webpackChunkName: "AddProject?v=0.67" */ '../components/projects/AddProject.vue');
const AddNewFile = () => import(/* webpackChunkName: "AddNewFile?v=0.25" */ '../components/projects/AddNewFile.vue');
const AddDatabase = () => import(/* webpackChunkName: "AddDatabase?v=0.15" */ '../components/projects/AddDatabase.vue');
const ResourceUpload = () => import(/* webpackChunkName: "ResourceUpload?v=0.16" */ '../components/projects/ResourceUpload.vue');
const PanelLoader = () => import(/* webpackChunkName: "PanelLoader?v=0.18" */ '../components/projects/PanelLoader.vue');
const PanelSettings = () => import(/* webpackChunkName: "PanelSettings?v=0.29" */ '../components/projects/PanelSettings.vue');
const AddWebroute= () => import(/* webpackChunkName: "AddWebroute?v=0.29" */ '../components/projects/AddWebroute.vue');
const AddProjectPage= () => import(/* webpackChunkName: "AddProjectPage?v=0.65" */ '../components/Hub/AddProjectPage.vue');
// Hub routes
const Hub = () => import(/* webpackChunkName: "Hub?v=1.44" */ '../components/Hub/Hub.vue');

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'register', component: Register },
  { path: '/verify', name: 'verify', component: Verify },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  {
    path:'/hub',
    name:'Hub',
    component: Hub
  },

  {
path:'/new-project',
name:'new-project',
component:AddProjectPage
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
        // channels
        path: 'channels',
        component: Channels
      },
      {
        // teams
        path: 'teams',
        component: Teams
      },
      {
        // direct messages
        path: 'direct-messages',
        component: DirectMessages
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