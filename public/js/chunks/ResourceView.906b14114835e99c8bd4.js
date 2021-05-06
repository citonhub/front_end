(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{247:function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(o,!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var l,u="undefined"!=typeof window,h=function(e){var t=e.split("."),o=parseInt(t[0],10);return{major:"number"==typeof o?o:1,minor:parseInt(t[1],10)||0,patch:parseInt(t[2],10)||0}},d={bootstrap:{xs:0,sm:576,md:768,lg:992,xl:1200},bulma:{mobile:0,tablet:769,desktop:1024,widescreen:1216,fullhd:1408},foundation:{small:0,medium:640,large:1024},materialize:{s:0,m:601,l:993,xl:1201},"semantic-ui":{mobile:0,tablet:768,computer:992,large:1201},tailwind:{xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},f=["width","height","touch","portrait","landscape","config"],p={bootstrap:["xs","sm","md","lg","xl"],bulma:["mobile","tablet","desktop","widescreen","fullhd"],foundation:["small","medium","large"],materialize:["s","m","l","xl"],"semantic-ui":["mobile","tablet","computer","large"],tailwind:["xs","sm","md","lg","xl"]},m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r(this,e),this.callbacks={},this.framework="",this.config=e.parseBreakpoints(t),this.createScreen(),this.init()}var t,o,a;return t=e,a=[{key:"parseBreakpoints",value:function(t){return"object"===n(t)?t.extend?(this.framework=t.extend.toString(),delete t.extend,Object.assign({},t,e.getBreakpoints())):(this.framework="__CUSTOM__",c({breakpointsOrder:Object.keys(t).filter((function(e){return"breakpointsOrder"!==e}))},t)):(this.framework=t.toString(),e.getBreakpoints())}},{key:"getBreakpoints",value:function(){if(this.framework||(this.framework="tailwind"),!d[this.framework])throw new Error('Cannot find grid breakpoints for framework "'.concat(this.framework,'"'));return c({},d[this.framework],{breakpointsOrder:p[this.framework]})}},{key:"install",value:function(t,o){if(n=(l=t).version,r="2.6.0",i=h(n),a=h(r),!(i.major>a.major||i.major===a.major&&i.minor>a.minor||i.major===a.major&&i.minor===a.minor&&i.patch>=a.patch))throw Error("VueScreen requires at least Vue ".concat("2.6.0"));var n,r,i,a;l.prototype.$screen=new e(o).screen}}],(o=[{key:"init",value:function(){this.attachResize(),this.setScreenSize(),this.checkTouch()}},{key:"attachResize",value:function(){var e,t,o;u&&window.addEventListener("resize",(e=this.setScreenSize.bind(this),t=100,function(){var n=this,r=arguments,i=function(){o=null,e.apply(n,r)};clearTimeout(o),o=setTimeout(i,t)}))}},{key:"setScreenSize",value:function(){u&&(this.screen.width=window.innerWidth,this.screen.height=window.innerHeight,this.runCallbacks(),this.findCurrentBreakpoint())}},{key:"runCallbacks",value:function(){var e=this;Object.keys(this.callbacks).forEach((function(t){e.screen[t]=e.callbacks[t].call(null,e.screen)}))}},{key:"findCurrentBreakpoint",value:function(){var e=this;this.screen.breakpoint=this.config.breakpointsOrder.reduce((function(t,o){return e.screen[o]?o:t}),this.config.breakpointsOrder[0])}},{key:"checkTouch",value:function(){u&&(this.screen.touch="ontouchstart"in window)}},{key:"createScreen",value:function(){var e=this,t=Object.keys(this.config).filter((function(e){return"breakpointsOrder"!==e}));this.screen=l.observable({width:410,height:730,touch:!0,portrait:!0,landscape:!1,breakpoint:this.config.breakpointsOrder[0],breakpointsOrder:this.config.breakpointsOrder,config:this.config}),this.findCurrentBreakpoint(),t.forEach((function(t){if(f.indexOf(t)>=0)throw new Error('Invalid breakpoint name: "'.concat(t,'". This key is reserved.'));l.set(e.screen,t,!1)})),u&&this.initMediaQueries()}},{key:"initMediaQueries",value:function(){var e=this;Object.keys(this.config).filter((function(e){return"breakpointsOrder"!==e})).forEach((function(t){var o=null;if("breakpointsOrder"!==t){var n=e.config[t];"function"==typeof n?e.callbacks[t]=n:"number"==typeof n?o="".concat(n,"px"):"string"==typeof n?o=n:e.screen[t]=n}if(o){var r=window.matchMedia("(min-width: ".concat(o,")"));"addEventListener"in r?r.addEventListener("change",(function(o){return e.mediaStateChanged(t,o.matches)})):r.addListener((function(o){return e.mediaStateChanged(t,o.matches)})),e.mediaStateChanged(t,r.matches)}}));var t=window.matchMedia("(orientation: portrait)");"addEventListener"in t?t.addEventListener("change",(function(t){e.mediaStateChanged("portrait",t.matches),e.mediaStateChanged("landscape",!t.matches)})):t.addListener((function(t){e.mediaStateChanged("portrait",t.matches),e.mediaStateChanged("landscape",!t.matches)})),this.mediaStateChanged("portrait",t.matches),this.mediaStateChanged("landscape",!t.matches)}},{key:"mediaStateChanged",value:function(e,t){l.set(this.screen,e,t)}}])&&i(t.prototype,o),a&&i(t,a),e}();u&&window.Vue&&window.Vue.use(m),t.a=m},729:function(e,t,o){"use strict";o.r(t);var n=o(247);Vue.use(n.a,"bootstrap");var r={data:function(){return{spaceData:[],loadingBtn:!1,loadingContent:!1,loadingResourceContent:!1,resources:[],resourcesContent:[],loadingResources:!1,titleContent:"",that:this,mainContent:"",loadingNextPage:!1,showYoutubePlayerTemp:!1,selectedResource:[],nextPageToken:""}},components:{Resource:function(){return Promise.all([o.e(10),o.e(98)]).then(o.bind(null,748))},YoutubePlayer:function(){return o.e(118).then(o.bind(null,726))}},mounted:function(){var e=this;this.$root.isLogged?(this.$root.showResourceView=!1,this.$root.showResourceViewContent=!1,this.$root.getLocalStore("full_space_"+this.$route.params.spaceId+this.$root.username).then((function(t){e.$root.autoOpenResourcePage=!1,null!=t?e.$root.chatComponent.openChat(e.$route.params.spaceId,!0):(e.$root.fromSupportDirectlink=!1,e.$router.push({path:"/channels/"+e.$route.params.spaceId+"/payment"}))}))):this.fetchSpaceInfo()},methods:{shareResource:function(){this.$root.shareLink="https://link.citonhub.com/resources/"+this.$route.params.spaceId,this.$root.shareText="Check out "+this.spaceData.name+" on CitonHub",this.$root.infoText="Share resources with others",this.$root.alertComponent=this.$root.chatComponent,this.$root.showInvitation=!0},goToChannel:function(){this.$root.checkIfUserIsLoggedIn()},showContent:function(e){this.$router.push({path:"/channels/e_resources/content/"+this.$route.params.spaceId}),this.titleContent=e.name,this.selectedResource=e,this.fetchResourceContent()},goBack:function(){this.$router.push({path:"/channels/e_resources/view/"+this.$route.params.spaceId})},fetchResourceContent:function(){var e=this;this.selectedResource.youtube_playlist_id&&(this.loadingResourceContent=!0,axios.get("/fetch-resource-content/"+this.selectedResource.resource_id).then((function(t){if(200==t.status){var o=t.data.result,n=[];o.forEach((function(e){var t={content:e,type:"youtube_video"};n.push(t)})),e.resourcesContent=n,e.nextPageToken=t.data.nextPageToken,e.loadingResourceContent=!1}})).catch((function(t){e.loadingResourceContent=!1,e.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")}))),this.selectedResource.devto_username&&(this.loadingResourceContent=!0,axios.get("/fetch-resource-content/"+this.selectedResource.resource_id).then((function(t){if(200==t.status){var o=t.data.articles,n=[];o.forEach((function(e){var t={content:e,type:"devto_article"};n.push(t)})),e.resourcesContent=n,e.nextPageToken=1,e.loadingResourceContent=!1}})).catch((function(t){e.loadingResourceContent=!1,e.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")}))),null==this.selectedResource.youtube_playlist_id&&null==this.selectedResource.devto_username&&(this.loadingResourceContent=!0,axios.get("/fetch-resource-content/"+this.selectedResource.resource_id).then((function(t){200==t.status&&(e.resourcesContent=t.data.contents,e.loadingResourceContent=!1)})).catch((function(t){e.loadingResourceContent=!1,e.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")})))},fetchSpaceInfo:function(){var e=this;this.loadingContent=!0,axios.get("/fetch-space-info-"+this.$route.params.spaceId).then((function(t){200==t.status&&(e.spaceData=t.data.space,e.loadingContent=!1,e.$root.showResourceView=!0,e.mainContent=e.spaceData.name+" Resources",e.fetchResources())})).catch((function(t){e.$root.chatComponent.showAlert("Oops!","Something went wrong, please try again","error"),e.loadingContent=!1}))},nextPagehandler:function(e){var t=this;this.nextPageToken&&e&&(this.loadingNextPage=!0,axios.get("/fetch-resource-content/"+this.selectedResource.resource_id+"/"+this.nextPageToken).then((function(e){if(200==e.status){var o=[];if(t.selectedResource.devto_username){t.nextPageToken++,o=e.data.articles;var n=[];o.forEach((function(e){var t={content:e,type:"devto_article"};n.push(t)})),t.resourcesContent=n}else{t.nextPageToken=e.data.nextPageToken,o=e.data.result;var r=[];o.forEach((function(e){var t={content:e,type:"youtube_video"};r.push(t)})),t.resourcesContent=r}t.loadingNextPage=!1}})).catch((function(e){t.loadingNextPage=!1,t.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")})))},fetchResources:function(){var e=this;this.loadingResources=!0,axios.get("/fetch-resource/".concat(this.$route.params.spaceId,"/resource")).then((function(t){if(200==t.status){var o=t.data.resources;e.resources=o,e.loadingResources=!1}})).catch((function(t){e.loadingResources=!1}))},imageStyleSpace:function(e,t,o){if(null==t.background_color){var n="border-radius:50%;height:"+e+"px;width:"+e+"px;background-size:contain;border:2px solid #3C87CD; cursor:pointer;";return n+="channel"==o?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var r="border-radius:50%;height:"+e+"px;width:"+e+"px;background-size:contain;border:2px solid #3C87CD; cursor:pointer;",i=t.image_name+"."+t.image_extension;return r+="channel"==o||"bot"==o?"background-color:"+t.background_color+"; background-image:url(/imgs/space/"+i+");":"background-color:"+t.background_color+"; background-image:url(/imgs/profile/"+i+");"}}},i=o(4),a=Object(i.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{class:e.$screen.lg||e.$screen.md?"col-8 offset-md-2  col-lg-4 offset-lg-4 px-0 py-0   ":" col-12 py-0 px-0  ",style:e.$screen.lg||e.$screen.md?"height:86%; position:absolute; top:7%;overflow-y:auto; ":"height:100%;position:absolute; overflow-y:auto; left:0%;",attrs:{tile:""}},[e.loadingContent?[o("div",{staticClass:"d-flex flex-row",staticStyle:{position:"absolute",height:"100%",width:"100%",left:"0px","justify-content":"center","align-items":"center"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[o("div",{staticClass:"col-12 px-1 py-1  fixed-top d-flex flex-row",staticStyle:{position:"sticky","align-items":"center",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5"}},[e.that.$root.showResourceViewContent?o("div",[o("v-btn",{attrs:{icon:""},on:{click:e.goBack}},[o("v-icon",[e._v("las la-arrow-left")])],1)],1):e._e(),e._v(" "),e.that.$root.showResourceViewContent?e._e():o("div",{staticClass:"ml-1"},[o("div",{style:e.imageStyleSpace(40,e.spaceData,"channel")})]),e._v(" "),e.that.$root.showResourceView?o("div",{staticClass:" text-center",staticStyle:{"white-space":"nowrap",width:"100%",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[e._v(e._s(e.mainContent))])]):e._e(),e._v(" "),e.that.$root.showResourceViewContent?o("div",{staticClass:" text-center",staticStyle:{"white-space":"nowrap",width:"100%",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[e._v(e._s(e.titleContent))])]):e._e(),e._v(" "),o("div",{staticClass:"  ml-auto"},[o("v-btn",{attrs:{icon:""},on:{click:e.shareResource}},[o("v-icon",[e._v("mdi mdi-share-variant")])],1)],1)]),e._v(" "),e.that.$root.showResourceView?[e.loadingResources?[o("div",{staticClass:"col-12 mt-4 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[o("div",{staticClass:"col-12"},e._l(e.resources,(function(t,n){return o("v-card",{key:n,staticClass:"d-flex flex-row px-1  mb-2 col-12 ",staticStyle:{background:"rgba(125, 179, 229, 0.4)",cursor:"pointer"},attrs:{ripple:!1,flat:""}},[o("div",{staticClass:"mr-2 ",on:{click:function(o){return e.showContent(t)}}},["resource"==t.type?o("v-icon",{staticClass:"ml-2",attrs:{color:"#000000"}},[e._v("las la-folder")]):e._e(),e._v(" "),"playlist"==t.type?o("v-icon",{staticClass:"ml-2",attrs:{color:"#000000"}},[e._v("las la-play-circle")]):e._e()],1),e._v(" "),o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",width:"100%"},on:{click:function(o){return e.showContent(t)}}},[o("span",{staticStyle:{"font-family":"BodyFont",color:"black","font-size":"13px"}},[e._v(e._s(t.name))])])])})),1),e._v(" "),o("div",{staticClass:"col-12 py-3 text-center "},[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"none","font-family":"MediumFont","font-size":"13px"},attrs:{medium:"",color:"#3C87CD"},on:{click:function(t){return e.goToChannel()}}},[e._v("\n                   Join Channel\n                 ")])],1)]]:e._e(),e._v(" "),e.that.$root.showResourceViewContent?[e.loadingResourceContent?[o("div",{staticClass:"col-12 mt-4 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[o("div",{staticClass:"col-12 px-2 px-md-2  "},[o("h6",[e._v("Description")]),e._v(" "),o("div",[o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"grey"},domProps:{innerHTML:e._s(e.selectedResource.info)}})])]),e._v(" "),o("div",{staticClass:"col-12 py-1 px-2 px-md-2 ",staticStyle:{background:"transparent","font-family":"BodyFont"}},["playlist"==e.selectedResource.type?[o("h6",[e._v("Videos")])]:[o("h6",[e._v("Links and articles")])],e._v(" "),e.resourcesContent.length>0?[o("resource",{attrs:{contents:e.resourcesContent,show_add_icon:!1,fromStandalone:!0}}),e._v(" "),o("div",{staticClass:"text-center col-lg-12"},[e.loadingNextPage?o("v-progress-circular",{attrs:{indeterminate:"",color:"#3C87CD"}}):e._e(),e._v(" "),o("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.nextPagehandler,expression:"nextPagehandler"}]})],1)]:["playlist"==e.selectedResource.type?[o("div",{staticClass:"mt-4 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[e._v("No video in this playlist yet.")])]:[o("div",{staticClass:"mt-4 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[e._v("No article or resource URL in this resource yet.")])]],e._v(" "),o("div",{staticClass:"col-12 py-3 text-center "},[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"none","font-family":"MediumFont","font-size":"13px"},attrs:{medium:"",color:"#3C87CD"},on:{click:function(t){return e.goToChannel()}}},[e._v("\n                   Join Channel\n                 ")])],1)],2)]]:e._e(),e._v(" "),o("div",{staticClass:"col-12 py-4 my-4"}),e._v(" "),e.that.$root.showYoutubePlayerTemp?o("div",{staticClass:"d-flex flex-row col-12 px-0 py-0 text-center",staticStyle:{background:"rgba(27, 27, 30, 0.32)",left:"0",position:"absolute",height:"100%",top:"0%","z-index":"999999999999"}},[o("div",{staticClass:" col-12 px-0 py-0",staticStyle:{height:"auto",left:"0%"}},[o("youtube-player",{attrs:{screenType:"small",playerHeight:220,videoId:e.that.$root.playingVideoId}})],1)]):e._e()]],2)}),[],!1,null,"4942b8f5",null);t.default=a.exports}}]);