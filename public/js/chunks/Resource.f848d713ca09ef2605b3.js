(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{247:function(t,e,o){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(o,!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var l,d="undefined"!=typeof window,u=function(t){var e=t.split("."),o=parseInt(e[0],10);return{major:"number"==typeof o?o:1,minor:parseInt(e[1],10)||0,patch:parseInt(e[2],10)||0}},f={bootstrap:{xs:0,sm:576,md:768,lg:992,xl:1200},bulma:{mobile:0,tablet:769,desktop:1024,widescreen:1216,fullhd:1408},foundation:{small:0,medium:640,large:1024},materialize:{s:0,m:601,l:993,xl:1201},"semantic-ui":{mobile:0,tablet:768,computer:992,large:1201},tailwind:{xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},p=["width","height","touch","portrait","landscape","config"],h={bootstrap:["xs","sm","md","lg","xl"],bulma:["mobile","tablet","desktop","widescreen","fullhd"],foundation:["small","medium","large"],materialize:["s","m","l","xl"],"semantic-ui":["mobile","tablet","computer","large"],tailwind:["xs","sm","md","lg","xl"]},v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n(this,t),this.callbacks={},this.framework="",this.config=t.parseBreakpoints(e),this.createScreen(),this.init()}var e,o,s;return e=t,s=[{key:"parseBreakpoints",value:function(e){return"object"===i(e)?e.extend?(this.framework=e.extend.toString(),delete e.extend,Object.assign({},e,t.getBreakpoints())):(this.framework="__CUSTOM__",c({breakpointsOrder:Object.keys(e).filter((function(t){return"breakpointsOrder"!==t}))},e)):(this.framework=e.toString(),t.getBreakpoints())}},{key:"getBreakpoints",value:function(){if(this.framework||(this.framework="tailwind"),!f[this.framework])throw new Error('Cannot find grid breakpoints for framework "'.concat(this.framework,'"'));return c({},f[this.framework],{breakpointsOrder:h[this.framework]})}},{key:"install",value:function(e,o){if(i=(l=e).version,n="2.6.0",r=u(i),s=u(n),!(r.major>s.major||r.major===s.major&&r.minor>s.minor||r.major===s.major&&r.minor===s.minor&&r.patch>=s.patch))throw Error("VueScreen requires at least Vue ".concat("2.6.0"));var i,n,r,s;l.prototype.$screen=new t(o).screen}}],(o=[{key:"init",value:function(){this.attachResize(),this.setScreenSize(),this.checkTouch()}},{key:"attachResize",value:function(){var t,e,o;d&&window.addEventListener("resize",(t=this.setScreenSize.bind(this),e=100,function(){var i=this,n=arguments,r=function(){o=null,t.apply(i,n)};clearTimeout(o),o=setTimeout(r,e)}))}},{key:"setScreenSize",value:function(){d&&(this.screen.width=window.innerWidth,this.screen.height=window.innerHeight,this.runCallbacks(),this.findCurrentBreakpoint())}},{key:"runCallbacks",value:function(){var t=this;Object.keys(this.callbacks).forEach((function(e){t.screen[e]=t.callbacks[e].call(null,t.screen)}))}},{key:"findCurrentBreakpoint",value:function(){var t=this;this.screen.breakpoint=this.config.breakpointsOrder.reduce((function(e,o){return t.screen[o]?o:e}),this.config.breakpointsOrder[0])}},{key:"checkTouch",value:function(){d&&(this.screen.touch="ontouchstart"in window)}},{key:"createScreen",value:function(){var t=this,e=Object.keys(this.config).filter((function(t){return"breakpointsOrder"!==t}));this.screen=l.observable({width:410,height:730,touch:!0,portrait:!0,landscape:!1,breakpoint:this.config.breakpointsOrder[0],breakpointsOrder:this.config.breakpointsOrder,config:this.config}),this.findCurrentBreakpoint(),e.forEach((function(e){if(p.indexOf(e)>=0)throw new Error('Invalid breakpoint name: "'.concat(e,'". This key is reserved.'));l.set(t.screen,e,!1)})),d&&this.initMediaQueries()}},{key:"initMediaQueries",value:function(){var t=this;Object.keys(this.config).filter((function(t){return"breakpointsOrder"!==t})).forEach((function(e){var o=null;if("breakpointsOrder"!==e){var i=t.config[e];"function"==typeof i?t.callbacks[e]=i:"number"==typeof i?o="".concat(i,"px"):"string"==typeof i?o=i:t.screen[e]=i}if(o){var n=window.matchMedia("(min-width: ".concat(o,")"));"addEventListener"in n?n.addEventListener("change",(function(o){return t.mediaStateChanged(e,o.matches)})):n.addListener((function(o){return t.mediaStateChanged(e,o.matches)})),t.mediaStateChanged(e,n.matches)}}));var e=window.matchMedia("(orientation: portrait)");"addEventListener"in e?e.addEventListener("change",(function(e){t.mediaStateChanged("portrait",e.matches),t.mediaStateChanged("landscape",!e.matches)})):e.addListener((function(e){t.mediaStateChanged("portrait",e.matches),t.mediaStateChanged("landscape",!e.matches)})),this.mediaStateChanged("portrait",e.matches),this.mediaStateChanged("landscape",!e.matches)}},{key:"mediaStateChanged",value:function(t,e){l.set(this.screen,t,e)}}])&&r(e.prototype,o),s&&r(e,s),t}();d&&window.Vue&&window.Vue.use(v),e.a=v},375:function(t,e,o){var i=o(625);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(25)(i,n);i.locals&&(t.exports=i.locals)},624:function(t,e,o){"use strict";var i=o(375);o.n(i).a},625:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.hoverEffect[data-v-4815af31]:hover{\n   background-color: whitesmoke;\n   cursor: pointer;\n}\n",""])},747:function(t,e,o){"use strict";o.r(e);var i=o(247);Vue.use(i.a,"bootstrap");var n={data:function(){return{that:this}},props:["show_add_icon","contents"],mounted:function(){this.$root.resourceComponent=this},methods:{processURL:function(t){var e,i=t;return o(406).get(((e=i).indexOf("//")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0].split("?")[0])},shortenContent:function(t,e){return t.length>e?t.slice(0,e)+"...":t},handleResource:function(t,e){if(this.$root.nextResourceId=e+1,this.$root.prevResourceId=e-1,this.$root.nextResourceId>=this.contents.length?this.$root.nextResourceId=null:this.$root.nextResourceData=this.contents[this.$root.nextResourceId],this.$root.prevResourceId>=0&&(this.$root.prevResourceData=this.contents[this.$root.prevResourceId]),"youtube_video"==t.type&&(this.$root.playingYoutubeVideo=t,this.$root.playingYoutubeVideoId=t.content.id,this.$screen.lg?this.$root.showYoutubePlayer=!0:this.$root.showYoutubePlayerSm=!0,this.$root.showYoutubePlayer||this.$root.showYoutubePlayerSm),"devto_article"==t.type){var o=t.content.canonical_url;window.open(o,"_blank")}if("shared_link"==t.type){var i=t.content.link;window.open(i,"_blank")}},checkIfSelected:function(t){return 0!=this.$root.resourcesSearchComponent.selectedItems.filter((function(e){return t.content.id==e.id})).length},addToSelected:function(t){if(this.checkIfSelected(t)){var e=this.$root.resourcesSearchComponent.selectedItems.filter((function(e){return t.content.id!=e.id}));this.$root.resourcesSearchComponent.selectedItems=e}else this.$root.resourcesSearchComponent.selectedItems.push(t.content)},convertDigit:function(t,e){var o,i=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(o=i.length-1;o>0&&!(t>=i[o].value);o--);return(t/i[o].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+i[o].symbol}}},r=(o(624),o(4)),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[this.$root.forcereloadResource?[o("div",{staticClass:"col-12  text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:t._e(),t._v(" "),t._l(t.contents,(function(e,i){return o("div",{key:i,staticClass:"col-12 py-1 px-0 hoverEffect"},["youtube_video"==e.type?[o("div",{staticClass:"col-12 pb-0 pt-0 px-0 d-flex flex-row",style:e.content.id==t.that.$root.playingYoutubeVideoId?" align-items:center;background:whitesmoke;":"align-items:center;"},[o("div",{staticClass:"col-5 py-1 px-1",staticStyle:{height:"92px"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{style:"position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url("+e.content.snippet.thumbnails.default.url+");background-repeat: no-repeat; background-size:100%;"},[o("div",{staticClass:"px-1 py-1 d-flex",staticStyle:{"align-items":"center",background:"rgba(0, 0, 0,0.1)","justify-content":"center",cursor:"pointer",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},[o("v-icon",{staticStyle:{"font-size":"35px",color:"#FF0000"}},[t._v("mdi mdi-youtube")])],1)])]),t._v(" "),o("div",{staticClass:"col-6 d-flex flex-column pt-1 my-auto",staticStyle:{"justify-content":"center",width:"100%"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{staticClass:"pt-3 mb-1",staticStyle:{"font-family":"MediumFont","font-size":"13px",overflow:"hidden",width:"100%","text-overflow":"ellipsis"}},[t._v("\n             "+t._s(t.shortenContent(e.content.snippet.title,50))+"\n           ")]),t._v(" "),o("div",{staticClass:"mb-1",staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"grey",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n              "+t._s(e.content.snippet.channelTitle)+"\n           ")]),t._v(" "),o("div",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"grey",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n             "+t._s(t.convertDigit(e.content.statistics.viewCount,1))+" views\n           ")])]),t._v(" "),o("div",[t.show_add_icon?[o("v-checkbox",{attrs:{color:"#3C87CD",dense:"",small:""},on:{change:function(o){return t.addToSelected(e)}}})]:[o("v-icon",[t._v("las la-ellipsis-v")])]],2)])]:t._e(),t._v(" "),"udemy_video"==e.type?[o("div",{staticClass:"col-12 pb-0 pt-0 px-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[o("div",{staticClass:"col-5 py-1 px-1",staticStyle:{height:"92px"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{staticStyle:{position:"absolute",width:"100%",border:"1px solid white","border-radius":"8px",height:"100%","background-color":"#c5c5c5","background-image":"url(imgs/7.jpg)","background-repeat":"no-repeat","background-size":"cover"}},[t.show_add_icon?o("div",{staticClass:"px-1 py-1",staticStyle:{background:"rgba(0, 0, 0,0.6)",cursor:"pointer",position:"absolute",top:"0px",right:"0px",border:"1px solid black","border-top-right-radius":"8px"},on:{click:function(o){return o.stopPropagation(),t.addToSelected(e)}}},[o("v-icon",{staticStyle:{"font-size":"18px",color:"white"}},[t._v("las la-plus")])],1):t._e(),t._v(" "),t._m(0,!0)])]),t._v(" "),o("div",{staticClass:"col-6 d-flex flex-column pt-1 my-auto",staticStyle:{"justify-content":"center",width:"100%"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{staticClass:"pt-3 mb-1",staticStyle:{"font-family":"MediumFont","font-size":"13px",overflow:"hidden",width:"100%","text-overflow":"ellipsis"}},[t._v("\n             Python for Data science and Machine\n           ")]),t._v(" "),o("div",{staticClass:"mb-1",staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"grey",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n              Jose Portilla\n           ")]),t._v(" "),o("div",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"black",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticClass:"mr-2",staticStyle:{"font-family":"MediumFont"}},[t._v("$11.99")]),t._v(" "),o("strike",{staticStyle:{color:"grey"}},[t._v("$94.99")])],1)]),t._v(" "),o("div",[t.show_add_icon?[o("v-checkbox",{attrs:{color:"#3C87CD",dense:"",small:""},on:{change:function(o){return t.addToSelected(e)}}})]:[o("v-icon",[t._v("las la-ellipsis-v")])]],2)])]:t._e(),t._v(" "),"devto_article"==e.type?[o("div",{staticClass:"col-12  py-1 px-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[o("div",{staticClass:"col-5 py-1 px-1",staticStyle:{height:"92px"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{style:"position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url("+e.content.cover_image+");background-repeat: no-repeat; background-size:cover;"},[t._m(1,!0)])]),t._v(" "),o("div",{staticClass:"col-6 d-flex flex-column pt-1 my-auto",staticStyle:{"justify-content":"center",width:"100%"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{staticClass:"pt-3 mb-1",staticStyle:{"font-family":"MediumFont","font-size":"13px",overflow:"hidden",width:"100%","text-overflow":"ellipsis"}},[t._v("\n             "+t._s(e.content.title)+"\n           ")]),t._v(" "),o("div",{staticClass:"mb-1",staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"grey",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n              "+t._s(e.content.user.username)+"\n           ")]),t._v(" "),o("div",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"grey",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n             "+t._s(e.content.reading_time_minutes)+" min read\n           ")])]),t._v(" "),o("div",[t.show_add_icon?[o("v-checkbox",{attrs:{color:"#3C87CD",dense:"",small:""},on:{change:function(o){return t.addToSelected(e)}}})]:[o("v-icon",[t._v("las la-ellipsis-v")])]],2)])]:t._e(),t._v(" "),"shared_link"==e.type?[o("div",{staticClass:"col-12  pb-0 pt-0 px-0 d-flex flex-row mt-1",staticStyle:{"align-items":"center"}},[o("div",{staticClass:"col-5 py-1 px-1",staticStyle:{height:"84px"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{style:"position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url("+e.content.image+");background-repeat: no-repeat; background-size:cover;"},[o("div",{staticClass:"px-1 py-1 d-flex",staticStyle:{"align-items":"center",background:"rgba(0, 0, 0,0.1)","justify-content":"center",cursor:"pointer",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},[o("v-icon",{staticStyle:{"font-size":"35px",color:"#ffffff"}},[t._v("las la-link")])],1)])]),t._v(" "),o("div",{staticClass:"col-6 d-flex flex-column pt-1 my-auto",staticStyle:{"justify-content":"center",width:"100%"},on:{click:function(o){return t.handleResource(e,i)}}},[o("div",{staticClass:"pt-3 mb-1",staticStyle:{"font-family":"MediumFont","font-size":"13px",overflow:"hidden",width:"100%","text-overflow":"ellipsis"},domProps:{innerHTML:t._s(e.content.title)}}),t._v(" "),o("div",{staticClass:"mb-1",staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"grey",overflow:"hidden","text-overflow":"ellipsis"},domProps:{innerHTML:t._s(e.content.description)}}),t._v(" "),o("div",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"grey",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n            "+t._s(t.processURL(e.content.base))+"\n           ")])]),t._v(" "),o("div",[t.show_add_icon?[o("v-checkbox",{attrs:{color:"#3C87CD",dense:"",small:""},on:{change:function(o){return t.addToSelected(e)}}})]:[o("v-icon",[t._v("las la-ellipsis-v")])]],2)])]:t._e()],2)}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-1 py-1 d-flex",staticStyle:{"align-items":"center",background:"rgba(0, 0, 0,0.1)","justify-content":"center",cursor:"pointer",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},[e("img",{attrs:{src:"/imgs/udemy_logo.png",height:"25px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-1 py-1 d-flex",staticStyle:{"align-items":"center",background:"rgba(0, 0, 0,0.1)","justify-content":"center",cursor:"pointer",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},[e("img",{attrs:{src:"/imgs/devto.png",height:"35px"}})])}],!1,null,"4815af31",null);e.default=s.exports}}]);