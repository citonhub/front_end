(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{716:function(t,e,n){"use strict";n.r(e);var i={props:["screenType","playerHeight","videoId"],data:function(){return{videoScr:"",player:void 0}},mounted:function(){this.setVideoData()},computed:{playerState:function(){}},watch:{playerState:function(t,e){}},methods:{preventClose:function(){},setVideoData:function(){var t=this,e=document.createElement("script");e.id="iframe-youtube",e.src="https://www.youtube.com/iframe_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n);var i=null;i=setInterval((function(){null==t.player?t.player=new YT.Player("YTplayer"+t.screenType,{events:{onReady:t.onPlayerReady,onStateChange:t.onPlayerStateChange}}):clearInterval(i)}),3e3)},playnext:function(){null==this.player?this.player=new YT.Player("YTplayer"+this.screenType,{events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}}):(console.log(this.player),this.player.loadVideoById("ezXqzmtzKX0"))},onPlayerReady:function(t){console.log("ready"),this.player.playVideo()},onPlayerStateChange:function(t){-1==t.data&&this.player.playVideo(),console.log("state change",t)}}},a=n(4),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{background:"white"},on:{click:function(e){return e.stopPropagation(),t.preventClose()}}},[n("iframe",{staticStyle:{"z-index":"99999999999999999"},attrs:{id:"YTplayer"+t.screenType,type:"text/html",width:"100%",height:t.playerHeight,src:"http://www.youtube.com/embed/"+t.videoId+"?enablejsapi=1&rel=0",frameborder:"0"},on:{click:function(e){return e.stopPropagation(),t.preventClose()}}}),t._v(" "),n("div",{staticClass:"col-12 px-1 py-1 d-flex flex-column",staticStyle:{background:"white"}},[n("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center"}},[n("div",{staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("\n               CitonHub Demo\n          ")]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("v-btn",{attrs:{small:"",icon:""}},[n("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi mdi-menu-down")])],1)],1)]),t._v(" "),n("div",{staticClass:"col-12 text-left py-0 px-0",staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"grey"}},[t._v("\n               34 views\n           ")]),t._v(" "),n("div",{staticClass:" d-flex flex-row",staticStyle:{"align-items":"center"}},[n("div",{staticClass:"col-6 py-0 px-0 text-left",staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"grey"}},[t._v("\n              CitonHub\n           ")]),t._v(" "),n("div",{staticClass:"col-6 py-0 text-right px-0"},[n("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"red"},attrs:{text:"",color:"red"}},[t._v(" SUBSCRIBE")])],1)]),t._v(" "),n("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center"}},[n("div",{staticClass:"col-3 py-1 d-flex flex-column",staticStyle:{"font-family":"BodyFont","font-size":"11px","align-items":"center","justify-content":"center"}},[n("div",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{"font-size":"23px"}},[t._v("las la-arrow-left")])],1)],1),t._v(" "),n("div",[t._v("\n               Prev\n             ")])]),t._v(" "),n("div",{staticClass:"col-3 d-flex py-1 flex-column",staticStyle:{"font-family":"BodyFont","font-size":"11px","align-items":"center","justify-content":"center"}},[n("div",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{"font-size":"23px"}},[t._v("las la-thumbs-up")])],1)],1),t._v(" "),n("div",[t._v("\n               21k\n             ")])]),t._v(" "),n("div",{staticClass:"col-3  d-flex py-1 flex-column",staticStyle:{"font-family":"BodyFont","font-size":"11px","align-items":"center","justify-content":"center"}},[n("div",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{"font-size":"23px"}},[t._v("las la-thumbs-down")])],1)],1),t._v(" "),n("div",[t._v("\n               50\n             ")])]),t._v(" "),n("div",{staticClass:"col-3 py-1 d-flex flex-column",staticStyle:{"font-family":"BodyFont","font-size":"12px","align-items":"center","justify-content":"center"}},[n("div",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticStyle:{"font-size":"23px"}},[t._v("las la-arrow-right")])],1)],1),t._v(" "),n("div",[t._v("\n               Next\n             ")])])])])])}),[],!1,null,"14f061cc",null);e.default=o.exports}}]);