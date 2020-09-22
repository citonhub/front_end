window._ = require('lodash');



/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.localforage = require('localforage');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vuetify = require('vuetify');

let token = document.head.querySelector('meta[name="csrf-token"]');

// src/plugins/vuetify.js

import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.use(Vuetify);

const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdi'
    }
});


window.moment = require('moment');

import Echo from 'laravel-echo';
window.Echo = require('laravel-echo');

window.io = require('socket.io-client');

if (typeof io !== 'undefined') {
  window.Echo = new Echo({
      broadcaster: 'socket.io', 
     host: window.location.hostname + ':6001',
     transports: ['websocket', 'polling', 'flashsocket'] ,// Fix CORS error!
     auth:
         {
             headers:
             {
                 'Authorization': 'Bearer ' + token
             }
         }
  });}






/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });


