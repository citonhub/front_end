/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// pulls in the dependencies in the of the script in the boostrap folder

require('./bootstraps/hub');

// ends

// pulls in vue Js
window.Vue = require('vue');

// ends

/**
* We will require in our components.js file, which contains our
* component files. Putting them in their own file reduces clutter.
all global components can be found in the component folder
*/
require('./components/hub');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. all the app logic goes in here, and it serves as the root of the application
 */
require('./controllers/hub');

