(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{380:function(e,t,i){var n=i(745);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(25)(n,o);n.locals&&(e.exports=n.locals)},744:function(e,t,i){"use strict";var n=i(380);i.n(n).a},745:function(e,t,i){(e.exports=i(24)(!1)).push([e.i,"\n.player-slider {\n  width: 10px;\n  height: 30px;\n}\n",""])},833:function(e,t,i){"use strict";i.r(t);var n={props:["file","playerId","colorBase"],data:function(){return{playbackTime:0,audioDuration:100,audioLoaded:!1,isPlaying:!1,loading:!1,loaded:!1,sliderPercent:0,url:""}},methods:{saveFile:function(e){return new Promise((function(t,i){var n=new XMLHttpRequest;n.responseType="blob",n.onload=function(){t(n)},n.onerror=i,n.open("GET",e),n.send()})).then((function(e){return e}))},load:function(){var e=this;this.loading=!0,this.saveFile(this.file).then((function(t){var i=t.response,n=URL.createObjectURL(i);document.querySelector("#audio"+e.playerId).src=n,e.loading=!1,e.loaded=!0})).catch((function(e){}));var t=document.querySelector("#audio"+this.playerId);t.addEventListener("loadedmetadata",function(e){this.initSlider()}.bind(this)),t.addEventListener("canplay",function(e){this.audioLoaded=!0}.bind(this)),this.$watch("isPlaying",(function(){if(this.isPlaying){var e=document.querySelector("#audio"+this.playerId);this.initSlider(),this.listenerActive||(this.listenerActive=!0,e.addEventListener("timeupdate",this.playbackListener))}})),this.$watch("playbackTime",(function(){var e=document.querySelector("#audio"+this.playerId);Math.abs(this.playbackTime-e.currentTime)>.01&&((e=document.querySelector("#audio"+this.playerId)).currentTime=this.playbackTime)}))},initSlider:function(){var e=document.querySelector("#audio"+this.playerId);e&&(this.audioDuration=Math.round(e.duration))},convertTime:function(e){return[e%3600/60,e%60].map((function(e){return"0".concat(Math.floor(e)).slice(-2)})).join(":")},totalTime:function(){var e=document.querySelector("#audio"+this.playerId);if(e&&this.loaded){var t=e.duration;return t?this.convertTime(t):"00:00"}return"00:00"},seek:function(e){var t=document.querySelector("#audio"+this.playerId),i=e/100*t.duration;t.currentTime=i,this.playbackTime=i,this.sliderPercent=e},elapsedTime:function(){var e=document.querySelector("#audio"+this.playerId);if(e){var t=e.currentTime;return this.convertTime(t)}return"00:00"},playbackListener:function(e){var t=document.querySelector("#audio"+this.playerId);this.playbackTime=t.currentTime,this.sliderPercent=t.currentTime/t.duration*100,t.addEventListener("ended",this.endListener),t.addEventListener("pause",this.pauseListener)},pauseListener:function(){this.isPlaying=!1,this.listenerActive=!1,this.cleanupListeners()},endListener:function(){this.isPlaying=!1,this.listenerActive=!1,this.cleanupListeners()},cleanupListeners:function(){var e=document.querySelector("#audio"+this.playerId);e.removeEventListener("timeupdate",this.playbackListener),e.removeEventListener("ended",this.endListener),e.removeEventListener("pause",this.pauseListener)},toggleAudio:function(){var e=document.querySelector("#audio"+this.playerId);e.paused?(e.play(),this.isPlaying=!0):(e.pause(),this.isPlaying=!1)}},mounted:function(){}},o=(i(744),i(4)),r=Object(o.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"col-12 py-0 px-0 my-1 d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[i("div",{staticClass:"mr-1"},[i("span",[i("v-icon",{attrs:{color:e.colorBase}},[e._v("las la-microphone")])],1)]),e._v(" "),i("div",[i("span",{staticClass:"px-1",style:"font-size:12px; color:"+e.colorBase+";",domProps:{innerHTML:e._s(e.totalTime())}})]),e._v(" "),i("div",{staticClass:"mx-1",staticStyle:{width:"100%"}},[i("v-progress-linear",{attrs:{rounded:"",height:"7",color:e.colorBase,value:e.sliderPercent},on:{change:function(t){return t.stopPropagation(),e.seek(t)}}})],1),e._v(" "),i("div",{staticClass:"mr-1"},[i("audio",{ref:"audiofile",staticStyle:{display:"none"},attrs:{id:"audio"+e.playerId}}),e._v(" "),e.loading?i("v-progress-circular",{staticClass:"px-2 py-1",attrs:{indeterminate:"",color:e.colorBase,width:"2",size:"20"}}):e._e(),e._v(" "),e.isPlaying?i("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:e.colorBase},on:{click:function(t){return t.stopPropagation(),e.toggleAudio(t)}}},[i("v-icon",{staticStyle:{"font-size":"24px"},attrs:{color:e.colorBase}},[e._v(" mdi mdi-pause")])],1):e._e(),e._v(" "),!e.isPlaying&&e.loaded?i("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:e.colorBase},on:{click:function(t){return t.stopPropagation(),e.toggleAudio(t)}}},[i("v-icon",{staticStyle:{"font-size":"24px"},attrs:{color:e.colorBase}},[e._v("mdi mdi-play")])],1):e._e(),e._v(" "),e.isPlaying||e.loading||e.loaded?e._e():i("v-btn",{staticClass:"mx-0",attrs:{icon:"",color:e.colorBase},on:{click:function(t){return t.stopPropagation(),e.load(t)}}},[i("v-icon",{staticStyle:{"font-size":"24px"},attrs:{color:e.colorBase}},[e._v("mdi mdi-cloud-download ")])],1)],1),e._v(" "),i("div",[i("span",{style:"font-size:12px;color:"+e.colorBase+";",domProps:{innerHTML:e._s(e.elapsedTime())}})])])])}),[],!1,null,null,null);t.default=r.exports}}]);