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
const Login = () => import(/* webpackChunkName: "login?v=0.99" */ '../components/auth/Login.vue');
const Register = () => import(/* webpackChunkName: "register?v=0.51" */ '../components/auth/Register.vue');
const Verify = () => import(/* webpackChunkName: "verify?v=0.55" */ '../components/auth/Verify.vue');
const ForgotPassword = () => import(/* webpackChunkName: "ForgotPassword?v=0.18" */ '../components/auth/ForgotPassword.vue');
const ResetPassword = () => import(/* webpackChunkName: "ResetPassword?v=1.58" */ '../components/auth/ResetPassword.vue');
const SetUsername = () => import(/* webpackChunkName: "SetUsername?v=0.17" */ '../components/auth/SetUsername.vue');

// dashboard routes
const Board = () => import(/* webpackChunkName: "Board?v=2.39" */ '../components/dashboard/Board.vue');
const Projects = () => import(/* webpackChunkName: "Projects?v=0.14" */ '../components/dashboard/Projects.vue');
const Channels = () => import(/* webpackChunkName: "Channels?v=0.11" */ '../components/dashboard/Channels.vue');
const Teams = () => import(/* webpackChunkName: "Teams?v=0.11" */ '../components/dashboard/Teams.vue');
const DirectMessages = () => import(/* webpackChunkName: "DirectMessages?v=0.11" */ '../components/dashboard/DirectMessages.vue');
const ContentBots = () => import(/* webpackChunkName: "ContentBots?v=0.11" */ '../components/dashboard/ContentBots.vue');
const Challenges = () => import(/* webpackChunkName: "Challenges?v=0.11" */ '../components/dashboard/Challenges.vue');

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/sign-up', name: 'register', component: Register },
  { path: '/verify', name: 'verify', component: Verify },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
  { path: '/set-username', name: 'SetUsername', component: SetUsername},
  { path: '/board',
     name: 'Board', 
     component: Board,
     redirect: '/board/projects',
    children: [
      {
        // projects
        path: 'projects',
        component: Projects
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
      boardComponent:null,
     },
     mounted: function () {
      
    },
    computed: {
     
    },
    created(){
     
    },
    methods:{
   
    }
});