(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{357:function(t,o,i){var e=i(589);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(25)(e,n);e.locals&&(t.exports=e.locals)},588:function(t,o,i){"use strict";var e=i(357);i.n(e).a},589:function(t,o,i){(t.exports=i(24)(!1)).push([t.i,".scrollerinfo[data-v-5c2a79d6]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollerinfo[data-v-5c2a79d6]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n.appBox[data-v-5c2a79d6] {\n  cursor: pointer;\n}\n.circle-ripple[data-v-5c2a79d6] {\n  background-color: #3C87CD;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  animation: ripple-data-v-5c2a79d6 0.7s linear infinite;\n}\n@keyframes ripple-data-v-5c2a79d6 {\n0% {\n    box-shadow: 0 0 0 0 rgba(60, 135, 205, 0.3), 0 0 0 1em rgba(60, 135, 205, 0.3);\n}\n100% {\n    box-shadow: 0 0 0 1em rgba(60, 135, 205, 0.3), 0 0 0 3em rgba(60, 135, 205, 0.3);\n}\n}",""])},694:function(t,o,i){"use strict";i.r(o);var e;function n(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}var s={data:function(){return{liveBoardContent:"action_list",showMemberBoard:!1,that:this}},computed:{},mounted:function(){this.$root.livesessionComponent=this,this.$root.componentIsLoading=!1,this.$root.liveSessionIsOpen,this.$root.liveIsOn?(this.$root.liveBoardContent="audio_speaker",this.$root.remoteScreen,this.$root.remoteCode,this.$root.remoteAudio):this.$root.liveBoardContent="action_list"},methods:(e={muteAudio:function(){this.$root.audioconnection&&(this.$root.localAudioMuted=!0,this.$root.audioconnection.attachStreams[0].mute("audio"))},unmuteAudio:function(){this.$root.audioconnection&&(this.$root.localAudioMuted=!1,this.$root.audioconnection.attachStreams[0].unmute("audio"))},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.liveSessionIsOpen=!1},toggleView:function(){"action_list"==this.$root.liveBoardContent?this.$root.liveIsOn?this.$root.liveBoardContent="audio_speaker":this.$root.liveBoardContent:this.$root.liveBoardContent="action_list"},closeConnections:function(){var t=this;null!=this.$root.audioconnection&&(this.$root.audioconnection.getAllParticipants().forEach((function(o){t.$root.audioconnection.disconnectWith(o)})),this.$root.audioconnection.attachStreams.forEach((function(t){t.stop()})),this.$root.audioconnection.closeSocket(),this.$root.dataconnection.closeSocket()),null!=this.$root.connection&&(this.$root.connection.getAllParticipants().forEach((function(o){t.$root.connection.disconnectWith(o)})),this.$root.connection.attachStreams.forEach((function(t){t.stop()})),this.$root.connection.closeSocket()),this.$root.connection=void 0,this.$root.audioconnection=void 0,this.$root.dataconnection=void 0,this.$root.screenSharingOn=!1,this.$root.liveIsOn=!1,this.$root.showVideoScreen=!1,this.$root.codeIsLive=!1,this.$root.liveInitiated=!1,this.$root.presentRoomId=null,this.$root.remoteLiveHappening=!1,this.$root.remoteCode=!1,this.$root.remoteScreen=!1,this.$root.remoteAudio=!1,this.$root.connectingToSocket=!1,this.$root.allAudioParticipant=[],this.$root.roomNotExist=!1,this.$root.localAudioMuted=!1,this.$root.roomCheckingInitaited=!1,this.$root.manuallyClosed=!0,this.goBack()}},n(e,"muteAudio",(function(){this.$root.audioconnection.attachStreams[0].mute("audio"),this.$root.localAudioMuted=!0})),n(e,"unmuteAudio",(function(){this.$root.audioconnection.attachStreams[0].unmute("audio"),this.$root.localAudioMuted=!1})),n(e,"imageStyle",(function(t,o){if(null==o.background_color){var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ";return i+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var e="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",n=o.image_name+"."+o.image_extension;return e+="background-color:"+o.background_color+"; background-image:url(/imgs/profile/"+n+");"})),n(e,"imageStyleExtra",(function(t,o){if(null==o.background_color){var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;  border:5px solid #3C87CD; margin-top:-50px;";return i+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var e="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;  border:5px solid #3C87CD; margin-top:-50px;",n=o.image_name+"."+o.image_extension;return e+="background-color:"+o.background_color+"; background-image:url(/imgs/profile/"+n+");"})),n(e,"selectAction",(function(t){this.$root.manuallyClosed=!1,"voice_chat"==t&&(this.$root.liveBoardContent="audio_speaker",this.connectAudio(),this.$root.sendLiveSignal("audio")),"screen_sharing"==t&&(this.$root.liveBoardContent="audio_speaker",this.connectScreen(),this.$root.sendLiveSignal("screen")),"live_coding"==t&&(this.$root.liveBoardContent="audio_speaker",this.connectAudio(),this.$root.fromLiveSession=!0,this.$root.chatComponent.liveSessionIsOpen=!1,this.$root.codeIsLive=!0,this.$root.sendLiveSignal("code"),this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/editor"}))})),n(e,"checkIfMaster",(function(){var t=this,o=this.$root.selectedSpaceMembers.filter((function(o){return o.user_id==t.$root.user_temp_id}));return 0!=o.length&&("Direct"==this.$root.selectedSpace.type?o[0].master_user:o[0].is_admin)})),n(e,"connectAudio",(function(){this.$root.remoteLiveHappening=!0,this.$root.remoteAudio=!0,this.$root.liveIsOn=!0,null==this.$root.audioconnection&&(this.$root.setAudioConnection(),this.$root.setDataConnection(),this.checkIfMaster()?this.$root.checkAudioRoomState(!0):this.$root.checkAudioRoomState(!1))})),n(e,"connectScreen",(function(){null==this.$root.connection?(this.$root.setSreenShareConnection(),this.$root.remoteLiveHappening=!0,this.$root.remoteScreen=!0,this.checkIfMaster()?this.$root.checkScreenRoomState(!0):this.$root.checkScreenRoomState(!1),this.$root.showVideoScreen=!0,this.$root.screenSharingOn=!0,this.$root.liveIsOn=!0):(this.$root.screenSharingOn=!0,this.$root.remoteLiveHappening=!0,this.$root.showVideoScreen=!0,this.$root.remoteScreen=!0,this.$root.liveIsOn=!0),this.connectAudio()})),e)},a=(i(588),i(5)),r=Object(a.a)(s,(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"d-flex flex-row",staticStyle:{position:"absolute",height:"100%",width:"100%",left:"0%"}},[i("v-btn",{staticClass:"d-inline-block  ",staticStyle:{position:"absolute",background:"#3C87CD",top:"2%",left:"2%","z-index":"990679797879"},attrs:{icon:"",color:"#ffffff"},on:{click:t.goBack}},[i("v-icon",[t._v("mdi-close mdi-18px")])],1),t._v(" "),!t.that.$root.showMemberBoard&&t.that.$root.liveIsOn?i("div",{staticClass:"px-2 py-1 appBox",staticStyle:{background:"white",position:"absolute",top:"0",right:"0","z-index":"89999999999"}},[i("v-btn",{staticClass:"mx-1",attrs:{icon:""},on:{click:function(o){t.that.$root.showMemberBoard=!0}}},[i("v-badge",{attrs:{dot:"",color:"green"}},[i("v-icon",[t._v("las la-user-friends ")])],1)],1)],1):t._e(),t._v(" "),i("div",{staticClass:" d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center",background:"transparent",height:"100%",width:"100%","overflow-y":"auto","overflow-x":"hidden"}},["action_list"==this.$root.liveBoardContent?[i("div",{staticClass:" col-4 col-lg-2 px-2 my-0 py-2 ",staticStyle:{"z-index":"9999999"}},[i("v-card",{staticClass:"px-1 py-1 appBox",staticStyle:{height:"100px","border-radius":"7px",background:"white"},on:{click:function(o){return t.selectAction("voice_chat")}}},[i("div",{staticClass:"d-flex",staticStyle:{height:"100%","align-items":"center","justify-content":"center",width:"100%"}},[i("div",{staticClass:"text-center"},[t.that.$root.remoteAudio&&t.that.$root.remoteLiveHappening?i("v-badge",{attrs:{dot:"",color:"green"}},[i("i",{staticClass:"las la-phone",staticStyle:{"font-size":"30px"}})]):i("i",{staticClass:"las la-phone",staticStyle:{"font-size":"30px"}}),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Voice Chat")])])],1)])])],1),t._v(" "),i("div",{staticClass:" col-4 col-lg-2 px-2 my-0 py-2 ",staticStyle:{"z-index":"9999999"}},[i("v-card",{staticClass:"px-1 py-1 appBox",staticStyle:{height:"100px","border-radius":"7px","margin-top":"-150px",background:"white"},on:{click:function(o){return t.selectAction("live_coding")}}},[i("div",{staticClass:"d-flex",staticStyle:{height:"100%","align-items":"center","justify-content":"center",width:"100%"}},[i("div",{staticClass:"text-center"},[t.that.$root.remoteCode&&t.that.$root.remoteLiveHappening?i("v-badge",{attrs:{dot:"",color:"green"}},[i("i",{staticClass:"las la-terminal",staticStyle:{"font-size":"30px"}})]):i("i",{staticClass:"las la-terminal",staticStyle:{"font-size":"30px"}}),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Live Coding")])])],1)])])],1),t._v(" "),i("div",{staticClass:" col-4 col-lg-2 px-2 my-0 py-2 ",staticStyle:{"z-index":"9999999"}},[i("v-card",{staticClass:"px-1 py-1 appBox",staticStyle:{height:"100px","border-radius":"7px",background:"white"},on:{click:function(o){return t.selectAction("screen_sharing")}}},[i("div",{staticClass:"d-flex",staticStyle:{height:"100%","align-items":"center","justify-content":"center",width:"100%"}},[i("div",{staticClass:"text-center"},[t.that.$root.remoteScreen&&t.that.$root.remoteLiveHappening?i("v-badge",{attrs:{dot:"",color:"green"}},[i("i",{staticClass:"las la-laptop-code",staticStyle:{"font-size":"30px"}})]):i("i",{staticClass:"las la-laptop-code",staticStyle:{"font-size":"30px"}}),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Screen Sharing")])])],1)])])],1)]:t._e(),t._v(" "),"audio_speaker"==this.$root.liveBoardContent?[1==this.$root.connectingToSocket?i("div",{staticClass:"col-12 text-center"},[this.$root.roomNotExist&&this.$root.roomCheckingInitaited?i("div",[i("div",{staticClass:"py-2"},[i("v-progress-circular",{attrs:{indeterminate:"",color:"#3C87CD"}})],1),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"14px",color:"white"}},[t._v(t._s(t.$t("space.wait_for_admin")))])])]):t._e(),t._v(" "),this.$root.roomNotExist?t._e():i("div",[i("div",{staticClass:"py-2"},[i("v-progress-circular",{attrs:{indeterminate:"",color:"#3C87CD"}})],1),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"14px",color:"white"}},[t._v(t._s(t.$t("general.connecting"))+"...")])])])]):t._e(),t._v(" "),"disconnected"==this.$root.connectingToSocket?i("div",{staticClass:"col-12 text-center"},[i("div",[i("div",{staticClass:"py-2"},[i("v-progress-circular",{attrs:{indeterminate:"",color:"#3C87CD"}})],1),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"14px",color:"white"}},[t._v(t._s(t.$t("space.disconnected_info")))])])])]):t._e(),t._v(" "),0==this.$root.connectingToSocket&&this.$root.liveIsOn?i("div",{staticClass:"text-center"},[i("div",{class:t.that.$root.speakingUser.speaking?"circle-ripple":"",style:t.imageStyleExtra(120,t.that.$root.speakingUser)}),t._v(" "),i("div",{staticClass:"mt-2",staticStyle:{"font-size":"14px",color:"white"}},[t._v(" "+t._s(t.that.$root.speakingUser.name)+" ")])]):t._e()]:t._e()],2),t._v(" "),i("v-slide-x-reverse-transition",[t.that.$root.showMemberBoard?i("div",{staticClass:"scrollerinfo offset-lg-8 col-lg-4 py-0 pb-2",staticStyle:{"border-left":"1px solid #c5c5c5",background:"white",height:"100%","overflow-y":"auto","z-index":"9999999999",position:"absolute","overflow-x":"hidden"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[i("div",{staticClass:" mr-1 col-2 px-1 py-0"},[i("v-btn",{attrs:{icon:""},on:{click:function(o){t.that.$root.showMemberBoard=!1}}},[i("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),i("div",{staticClass:"col-8 py-0 text-center"},[i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Active Members")]),t._v(" ("),i("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(this.$root.allAudioParticipant.length+1))]),t._v(")\n                        ")]),t._v(" "),i("div",{staticClass:"col-2 py-0  text-right"})]),t._v(" "),i("div",{staticClass:"col-12 py-2 d-flex flex-row",staticStyle:{"align-items":"center","border-bottom":"1px solid #c5c5c5"}},[i("div",{staticClass:"col-3 mr-2 py-0"},[i("div",{style:t.imageStyle(40,t.that.$root.authProfile)})]),t._v(" "),i("div",{staticClass:"col-7 py-0"},[i("span",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.that.$root.authProfile.name))])]),t._v(" "),i("div",{staticClass:"col-2 text-right py-0"},[t.that.$root.localAudioMuted?i("v-icon",[t._v("las la-microphone-slash")]):i("v-icon",[t._v("las la-microphone")])],1)]),t._v(" "),t._l(this.$root.allAudioParticipant,(function(o,e){return i("div",{key:e,staticClass:"col-12 py-2 d-flex flex-row",staticStyle:{"align-items":"center","border-bottom":"1px solid #c5c5c5"}},[i("div",{staticClass:"col-3 mr-2 py-0"},[i("div",{style:t.imageStyle(40,o[0].profile)})]),t._v(" "),i("div",{staticClass:"col-7 py-0"},[i("span",{staticStyle:{"font-size":"13px"}},[t._v(t._s(o[0].profile.name))])]),t._v(" "),i("div",{staticClass:"col-2 text-right py-0"},[o[0].profile.muted?i("v-icon",[t._v("las la-microphone-slash")]):i("v-icon",[t._v("las la-microphone")])],1)])}))],2)]):t._e()]),t._v(" "),this.$root.liveIsOn?i("div",{staticClass:"col-12 py-2 d-flex flex-row",staticStyle:{background:"white",height:"60px","overflow-y":"auto","z-index":"999999999",left:"0",bottom:"0",position:"absolute","overflow-x":"hidden"}},[i("div",{staticClass:"col-4 py-0"},[t.that.$root.localAudioMuted?[i("v-btn",{attrs:{icon:""},on:{click:function(o){return o.stopPropagation(),t.unmuteAudio()}}},[i("v-icon",[t._v("las la-microphone-slash")])],1)]:[i("v-btn",{attrs:{icon:""},on:{click:function(o){return o.stopPropagation(),t.muteAudio()}}},[i("v-icon",[t._v("las la-microphone")])],1)]],2),t._v(" "),i("div",{staticClass:"col-4 py-0 text-center",staticStyle:{background:"white"}}),t._v(" "),i("div",{staticClass:"col-4 py-0 text-right"},[i("v-btn",{staticStyle:{"z-index":"999999999999999"},attrs:{icon:""},on:{click:function(o){return o.stopPropagation(),t.toggleView(o)}}},[i("v-icon",[t._v("mdi-apps")])],1)],1)]):t._e(),t._v(" "),this.$root.liveIsOn?i("div",{staticClass:"text-center",staticStyle:{position:"absolute",bottom:"3%",left:"0",width:"100%"}},[i("v-btn",{staticStyle:{"z-index":"999999999999",background:"white"},attrs:{fab:""},on:{click:t.closeConnections}},[i("v-icon",{attrs:{color:"#df4759"}},[t._v("mdi mdi-phone-hangup")])],1)],1):t._e()],1)}),[],!1,null,"5c2a79d6",null);o.default=r.exports}}]);