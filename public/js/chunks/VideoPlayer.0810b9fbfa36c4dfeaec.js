(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{379:function(t,r,e){var n=e(743);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(25)(n,o);n.locals&&(t.exports=n.locals)},740:function(t,r,e){t.exports=e(741)},741:function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e,n){var o=r&&r.prototype instanceof l?r:l,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===s)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=u(t,r,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function l(){}function d(){}function h(){}var f={};f[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(k([])));v&&v!==r&&e.call(v,o)&&(f=v);var y=h.prototype=l.prototype=Object.create(f);function g(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function m(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&e.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,w(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function b(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=y.constructor=h,h.constructor=d,h[a]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new m(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},742:function(t,r,e){"use strict";var n=e(379);e.n(n).a},743:function(t,r,e){(t.exports=e(24)(!1)).push([t.i,"\n.alignContent[data-v-b2f932d8]{\n  align-items: center;\n  justify-content: center;\n}\n",""])},833:function(t,r,e){"use strict";e.r(r);var n=e(740),o=e.n(n);function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c={props:["videoUrl","backgroundColor","backgroundImg","playerId"],data:function(){return{manifestUri:"",playVideoValue:!1}},mounted:function(){},computed:{},methods:{playVideo:function(){this.manifestUri=this.videoUrl,this.initApp(),this.playVideoValue=!0},initApp:function(){shaka.polyfill.installAll(),shaka.Player.isBrowserSupported()?(document.addEventListener("shaka-ui-loaded",this.initPlayer()),document.addEventListener("shaka-ui-load-failed",this.initFailed)):console.error("Browser not supported!")},initPlayer:function(){var t=this;function r(){return(r=a(o.a.mark((function r(){var e,n,i,a,c,u;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=document.getElementById("video"+t.playerId),n=new shaka.Player(e),i=document.getElementById("videocontainner"+t.playerId),a=new shaka.ui.Overlay(n,i,e),c=a.getControls(),u={overflowMenuButtons:["cast","picture_in_picture","loop","quality","playback_rate"],seekBarColors:{base:"rgba(111, 182, 195, 0.3)",buffered:"rgba(111, 182, 195, 0.54)",played:"rgb(111, 182, 195)"}},a.configure(u),window.player=n,window.ui=a,n.addEventListener("error",t.onPlayerErrorEvent),c.addEventListener("error",t.onUIErrorEvent),r.prev=11,r.next=14,n.load(t.manifestUri);case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(11),t.onPlayerError(r.t0);case 19:case"end":return r.stop()}}),r,null,[[11,16]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()},onPlayerErrorEvent:function(t){onPlayerError(event.detail)},onPlayerError:function(t){console.error("Error code",t.code,"object",t)},onUIErrorEvent:function(t){onPlayerError(event.detail)},initFailed:function(t){console.error("Unable to load the UI library!")}}},u=(e(742),e(4)),s=Object(u.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t.playVideoValue?t._e():e("div",{staticClass:"d-flex alignContent col-12 py-0 ",style:"border:1px solid transparent;width:100%;height:190px; background-size:cover;  background-repeat:no-repeat; background-color:"+t.backgroundColor+";background-image:url("+t.backgroundImg+"); border-radius: 10px;",attrs:{id:"playerContainer"+t.playerId}},[e("div",[e("span",{staticClass:"d-flex",staticStyle:{color:"#c9e4e8",background:"#3C87CD",border:"1px solid #3C87CD","border-radius":"50%",height:"40px",width:"40px","align-items":"center","justify-content":"center"},on:{click:function(r){return r.stopPropagation(),t.playVideo(r)}}},[e("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-play")])],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.playVideoValue,expression:"playVideoValue"}],staticStyle:{"max-width":"40em"},attrs:{"data-shaka-player-container":"","data-shaka-player-cast-receiver-id":"7B25EC44",id:"videocontainner"+t.playerId}},[e("video",{staticStyle:{width:"100%",height:"100%","border-radius":"10px",border:"1px solid transparent"},attrs:{"data-shaka-player":"",id:"video"+t.playerId,poster:t.backgroundImg,src:t.videoUrl}})])])}),[],!1,null,"b2f932d8",null);r.default=s.exports}}]);