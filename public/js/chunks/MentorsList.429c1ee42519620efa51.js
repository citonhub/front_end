(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{250:function(t,e,i){"use strict";(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i.d(e,"a",(function(){return c}));var r=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(i,n)}var e,i,n;return e=t,(i=[{key:"createObserver",value:function(t,e){var i=this;if(this.observer&&this.destroyObserver(),!this.frozen){var n;if(this.options="function"==typeof(n=t)?{callback:n}:n,this.callback=function(t,e){i.options.callback(t,e),t&&i.options.once&&(i.frozen=!0,i.destroyObserver())},this.callback&&this.options.throttle){var o=(this.options.throttleOptions||{}).leading;this.callback=function(t,e){var i,n,o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),d=1;d<l;d++)c[d-1]=arguments[d];if(o=c,!i||a!==n){var u=r.leading;"function"==typeof u&&(u=u(a,n)),i&&a===n||!u||t.apply(void 0,[a].concat(s(o))),n=a,clearTimeout(i),i=setTimeout((function(){t.apply(void 0,[a].concat(s(o))),i=0}),e)}};return a._clear=function(){clearTimeout(i),i=null},a}(this.callback,this.options.throttle,{leading:function(t){return"both"===o||"visible"===o&&t||"hidden"===o&&!t}})}this.oldResult=void 0,this.observer=new IntersectionObserver((function(t){var e=t[0];if(t.length>1){var n=t.find((function(t){return t.isIntersecting}));n&&(e=n)}if(i.callback){var o=e.isIntersecting&&e.intersectionRatio>=i.threshold;if(o===i.oldResult)return;i.oldResult=o,i.callback(o,e)}}),this.options.intersection),e.context.$nextTick((function(){i.observer&&i.observer.observe(i.el)}))}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}])&&o(e.prototype,i),n&&o(e,n),t}();function a(t,e,i){var n=e.value;if(n)if("undefined"==typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var o=new r(t,n,i);t._vue_visibilityState=o}}function l(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}var c={bind:a,update:function(t,e,i){var o=e.value;if(!function t(e,i){if(e===i)return!0;if("object"===n(e)){for(var o in e)if(!t(e[o],i[o]))return!1;return!0}return!1}(o,e.oldValue)){var s=t._vue_visibilityState;o?s?s.createObserver(o,i):a(t,{value:o},i):l(t)}},unbind:l};var d={version:"0.4.6",install:function(t){t.directive("observe-visibility",c)}},u=null;"undefined"!=typeof window?u=window.Vue:void 0!==t&&(u=t.Vue),u&&u.use(d)}).call(this,i(2))},631:function(t,e,i){"use strict";i.r(e);i(250);var n={data:function(){return{mentors:[],loading:!1,currentPage:1,newPage:1,newData:"",that:this,dataHasFinished:!1,loadingNext:!1}},components:{PointInfoBoard:function(){return i.e(87).then(i.bind(null,679))}},mounted:function(){this.$root.showTopBar=!0,this.$root.MentorPageComponent=this,this.getMentors()},methods:{showProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile/"+t})},getMentors:function(){var t=this;this.loading=!0,axios.get("/fetch-mentors?page="+this.currentPage).then((function(e){200==e.status&&(t.mentors=e.data.mentors,t.loading=!1)})).catch((function(e){t.loading=!1,t.showAlert("Oops!","Unable to fetch mentors,please try again","error")}))},loadNextSet:function(t){var e=this;this.dataHasFinished||t&&(this.loadingNext=!0,this.newPage+=1,console.log(this.newPage),axios.get("/fetch-mentors?page="+this.newPage).then((function(t){200==t.status&&(e.newData=t.data.mentors,0==t.data.mentors.length&&(e.dataHasFinished=!0),e.mentors=e.mentors.concat(e.newData),e.loadingNext=!1)})))},getUserLevel:function(t){var e="";return t>=0&&t<=99?e+="/imgs/steel.svg":t>=100&&t<=199?e+="/imgs/bronze.svg":t>=200&&t<=299?e+="/imgs/silver.svg":t>=300&&t<=399?e+="/imgs/gold.svg":t>=400&&t<=499?e+="/imgs/platinum.svg":t>=500&&t<=599&&(e+="/imgs/diamond.svg"),e},BecomeMentor:function(){this.$root.fromMentorPage=!0,this.$root.showPointDetailsInfo=!0},handleLanguageList:function(t){if(t.length<=3)return t;var e=t.slice(0,3);return e.push("..."),e},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;"info"==i&&iziToast.info({title:t,message:e,zindex:"9999999999",position:"bottomRight",timeout:2e3,transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==i&&iziToast.success({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==i&&iziToast.warning({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==i&&iziToast.error({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},imageStyle:function(t,e){if(null==e.background_color){var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return i+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var n="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",o=e.image_name+"."+e.image_extension;return n+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/thumbnails/"+o+");"}}},o=i(5),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","z-index":"999999999999","border-bottom":"1px solid #c5c5c5"}},[i("div",{staticClass:"row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-6  py-0 my-0 text-right"},[i("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"font-family":"BodyFont","font-size":"11px",color:"white"},attrs:{small:"",color:"#3C87CD",rounded:""},on:{click:t.BecomeMentor}},[t._v("Become a mentor")])],1)])]),t._v(" "),i("v-btn",{staticClass:"d-lg-none d-inline-block",staticStyle:{"z-index":"99999999",position:"fixed",bottom:"3%",right:"2%"},attrs:{fab:"",color:"#3C87CD"},on:{click:t.BecomeMentor}},[i("v-icon",{staticStyle:{"font-size":"24px",color:"white"}},[t._v("las la-plus")])],1),t._v(" "),i("div",{staticClass:"col-lg-10 offset-lg-1  py-0 pb-2 px-2 "},[i("div",{staticClass:"row "},[i("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"}),t._v(" "),t.loading?[i("div",{staticClass:"col-12 mt-4 text-center"},[i("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[0==t.mentors.length?[t._m(1)]:[t._l(t.mentors,(function(e,n){return i("div",{key:n,staticClass:"col-lg-3 col-md-4 px-2 mb-2 pt-1 pt-md-2"},[i("v-card",{staticClass:"py-3 px-2 d-flex flex-column",staticStyle:{"align-items":"center","justify-content":"center"}},[i("div",{staticClass:" py-0 my-0 text-center"},[i("div",{style:t.imageStyle(90,e)})]),t._v(" "),i("div",{staticClass:" py-0 my-0 text-center mt-2"},[i("div",{staticClass:"pb-1 d-md-block d-none",staticStyle:{"font-size":"14px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.name)+" "),i("img",{staticClass:"mx-1",attrs:{src:t.getUserLevel(e.points),height:"19px"}})]),t._v(" "),i("div",{staticClass:"pb-1  d-md-none d-block",staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.name)+" "),i("img",{staticClass:"mx-1",attrs:{src:t.getUserLevel(e.points),height:"19px"}})])]),t._v(" "),i("div",{staticClass:" py-0 my-0 text-center"},[i("div",{staticClass:"pb-1 d-md-block d-none",staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden",color:"grey","text-overflow":"ellipsis"}},[t._v(t._s(e.points)+" XP")]),t._v(" "),i("div",{staticClass:"pb-1  d-md-none d-block",staticStyle:{"font-size":"12px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",color:"grey"}},[t._v(t._s(e.points)+" XP")])]),t._v(" "),i("div",{staticClass:" py-0 my-0 text-center mt-1"},t._l(t.handleLanguageList(e.language_list),(function(e,n){return i("v-chip",{key:"lang"+n,staticClass:"my-1 mx-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"},attrs:{color:"#3C87CD",dense:"",outlined:"",small:""}},[t._v("\n             \n            "+t._s(e)+"\n            ")])})),1),t._v(" "),i("div",{staticClass:"col-12 py-0 mt-3 px-1 text-center"},[i("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"font-family":"BodyFont",color:"white","font-size":"12px","text-transform":"none"},attrs:{small:"",color:"#3C87CD"},on:{click:function(i){return t.showProfile(e.username)}}},[t._v("View profile")])],1)])],1)})),t._v(" "),i("div",{staticClass:"text-center col-lg-12"},[t.loadingNext?i("v-progress-circular",{staticStyle:{margin:"1rem"},attrs:{indeterminate:"",color:"#3C87CD"}}):t._e(),t._v(" "),i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.loadNextSet,expression:"loadNextSet"}]})],1)]],t._v(" "),i("div",{staticClass:"col-12 py-5 my-5"})],2)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6 py-0 my-0"},[e("h5",[this._v("Mentors")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 mt-md-4 text-center  mt-1 px-md-2 px-1"},[e("div",{staticClass:"mb-3 px-3",staticStyle:{"font-size":"13px",color:"grey","font-family":"BodyFont"}},[this._v("\n                   \n                    No mentor found\n\n                    ")])])}],!1,null,"baf013e0",null);e.default=s.exports}}]);