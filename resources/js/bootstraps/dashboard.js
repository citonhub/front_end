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




 window.customLocation = 'https://api.citonhub.com';

Vue.use(Vuetify);

const MY_ICONS = {
    complete: 'las la-check-circle',
    cancel: 'las la-times',
    close: 'las la-times-circle',
    delete: 'las la-times-circle', // delete (e.g. v-chip close)
    clear: 'las la-times-circle',
    success: 'las la-check-circle',
    info: 'las la-exclamation',
    warning: 'las la-exclamation-triangle',
    error: 'las la-exclamation-circle',
    prev: 'las la-angle-left',
    next: 'las la-angle-right',
    checkboxOn: 'las la-check-square',
    checkboxOff: 'las la-minus-square',
    checkboxIndeterminate: 'las la-minus-square',
    delimiter: 'las la-dot-circle', // for carousel
    sort: 'las la-sort',
    expand: 'las la-expand-arrows-alt',
    menu: 'las la-bars',
    subgroup: 'las la-th-list',
    dropdown: 'mdi mdi-chevron-down',
    radioOn: 'mdi-radiobox-marked',
    radioOff: 'mdi-radiobox-blank',
    edit: 'las la-edit',
    ratingEmpty: 'lar la-star',
    ratingFull: 'las la-star',
    ratingHalf: 'las la-star-half-alt',
    loading: 'mdi mdi-loading mdi-spin',
    first: 'las la-sort-amount-up',
    last: 'las la-sort-amount-down-alt',
    unfold: '...',
    file: 'las la-file',
  }


const vuetify = new Vuetify({
    icons: {
        iconfont: 'la',
        values:MY_ICONS
    }
});
import moment from 'moment'

window.moment = require('moment');

import VueScreen from 'vue-screen'
Vue.use(VueScreen, 'bootstrap')

/**
 *import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.component('DynamicScroller', DynamicScroller)
Vue.component('DynamicScrollerItem', DynamicScrollerItem)
 *  */ 

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


