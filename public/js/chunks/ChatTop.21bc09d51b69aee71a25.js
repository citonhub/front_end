(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{356:function(t,e,o){var s=o(644);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,i);s.locals&&(t.exports=s.locals)},643:function(t,e,o){"use strict";var s=o(356);o.n(s).a},644:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.typingText[data-v-4314c655]{\nfont-size:12px; \ncolor:grey; \nfont-family:BodyFont;\n}\n.typingTextSm[data-v-4314c655]{\nfont-size:11px; \ncolor:grey; \nfont-family:BodyFont;\n}\n",""])},806:function(t,e,o){"use strict";o.r(e);var s={data:function(){return{that:this}},components:{MoreOptionChat:function(){return o.e(63).then(o.bind(null,822))}},methods:{showMoreOptions:function(){this.$root.chatComponent.showMoreOptionsChat=!0},gotToBotChannel:function(t){this.$root.selectedSpace.bot_data.bot_channel&&(this.$root.Messages=null,this.$root.channel=null)},showSideBar:function(t){"Channel"!=this.$root.selectedSpace.type&&"Team"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type||this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/"+t}),"Direct"==this.$root.selectedSpace.type&&this.goToProfile(this.$root.selectedSpace.userInfo.username)},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})},openLiveSession:function(){this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/live_session"})},checkIfOnline:function(t){return 0!=this.$root.globalUsers.filter((function(e){return e.id==t})).length},generateOnlineUsers:function(){var t=this,e=[];return this.$root.selectedSpaceMembers.forEach((function(o){var s=t.$root.globalUsers.filter((function(t){return t.id==o.user_id}));0!=s.length&&e.push(s[0])})),e.length},goback:function(){this.$router.push({path:"/channels"}),this.$root.chatComponent.chatIsOpen=!1},imageStyle:function(t,e,o){if(null==e.background_color){var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";return s+="channel"==o?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;",n=e.image_name+"."+e.image_extension;return i+="channel"==o||"bot"==o?"background-color:"+e.background_color+"; background-image:url(/imgs/space/"+n+");":"background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+n+");"}}},i=(o(643),o(4)),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row application application--light",attrs:{"data-app":"true"}},[o("div",{staticClass:"col-md-9 py-0 d-md-flex px-md-1 flex-row  d-none",staticStyle:{"align-items":"center"}},["Channel"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type?o("div",{staticClass:"d-inline-block mx-2",staticStyle:{width:"42px"},style:t.imageStyle(40,this.$root.selectedSpace,"channel"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.bot_data?o("div",{staticClass:"d-inline-block mx-2",staticStyle:{width:"42px"},style:t.imageStyle(40,this.$root.selectedSpace.bot_data,"bot"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Direct"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.userInfo?o("div",{staticClass:"d-inline-block mx-2",staticStyle:{width:"42px"},style:t.imageStyle(40,this.$root.selectedSpace.userInfo,"direct"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),o("div",{staticClass:"d-inline-block"},[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.name))]):t._e(),t._v(" "),null!=this.$root.selectedSpace.userInfo&&"Direct"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(t._s(this.$root.selectedSpace.userInfo.username))]):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.bot_data.name))]):t._e()]),t._v(" "),o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[this.$root.typing&&this.$root.typingSpace==this.$root.selectedSpace.space_id?o("span",{staticClass:"typingText d-block"},["Direct"!=this.$root.selectedSpace.type?o("span",[t._v(" "+t._s(this.$root.typinguser)+" is")]):t._e(),t._v(" typing... ")]):t._e(),t._v(" "),!this.$root.typing&&"Direct"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type&&this.$root.selectedSpaceMembers.length>1?o("span",{staticClass:"typingText d-block"},[t._v(t._s(this.$root.selectedSpaceMembers.length)+"  "+t._s(t.$t("space.members"))+" , "+t._s(t.generateOnlineUsers())+"  "+t._s(t.$t("space.Online")))]):t._e(),t._v(" "),this.$root.typing||"SubSpace"!=this.$root.selectedSpace.type?t._e():o("span",{staticClass:"typingText d-block"},["Public"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v("mdi-pound ")]):t._e(),t._v(" "),"Private"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v(" mdi-lock ")]):t._e(),t._v(" "),o("span",{staticClass:"px-1"},[t._v("  "+t._s(this.$root.selectedSubSpaceName))])],1),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticClass:"typingText d-block"},[t._v("\n        Online\n      ")]):t._e(),t._v(" "),this.$root.typing&&"SubSpace"==this.$root.selectedSpace.type&&this.$root.typingSpace==this.$root.selectedSpace.space_id?o("span",{staticClass:"typingText d-block"},["Direct"!=this.$root.selectedSpace.type?o("span",[t._v(" "+t._s(this.$root.typinguser)+" is")]):t._e(),t._v(" typing...  \n        \n      ")]):t._e(),t._v(" "),!this.$root.typing&&"Direct"==this.$root.selectedSpace.type&&t.checkIfOnline(this.$root.selectedSpace.userInfo.id)?o("span",{staticClass:"typingText d-block"},[t._v(t._s(t.$t("space.Online")))]):t._e()])])]),t._v(" "),o("div",{staticClass:"col-md-1 py-1 d-md-block d-none text-right d-md-block",staticStyle:{"align-items":"center"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:function(e){return t.showSideBar("sub_channels")}}},[o("v-icon",[t._v("mdi mdi-pound")])],1)]:t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.gotToBotChannel(t.that.$root.selectedSpace.bot_data.bot_channel)}}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-account-supervisor-outline")])],1)]:t._e()],2),t._v(" "),o("div",{staticClass:"col-md-1 py-1 d-md-block d-none text-right px-1 d-md-block",staticStyle:{"align-items":"center"}},["Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:t.openLiveSession}},[t.that.$root.remoteLiveHappening?o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",[t._v("mdi-television-play")])],1):o("v-icon",[t._v("mdi-television-play")])],1)]:o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-comment-question-outline")])],1)],2),t._v(" "),o("div",{staticClass:"col-md-1 py-1 text-right d-none d-md-block",staticStyle:{"align-items":"center"}},[o("v-btn",{staticClass:"showMoreChat",attrs:{icon:""}},[o("v-icon",[t._v("las la-ellipsis-v")])],1),t._v(" "),o("v-menu",{staticStyle:{"z-index":"99999999999999999999"},attrs:{absolute:"",activator:".showMoreChat",left:"","offset-y":""}},[o("more-option-chat")],1)],1),t._v(" "),o("div",{staticClass:"col-12 py-0 d-flex  flex-row d-md-none px-1",staticStyle:{"align-items":"center"}},[o("v-btn",{staticClass:"d-lg-none d-inline-block",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goback(e)}}},[o("v-icon",{staticStyle:{"font-size":"24px"}},[t._v("las la-arrow-left")])],1),t._v(" "),o("div",{staticClass:"d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},["Channel"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type?o("div",{staticClass:"d-inline-block mr-1",style:t.imageStyle(38,this.$root.selectedSpace,"channel"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.bot_data?o("div",{staticClass:"d-inline-block mr-1",style:t.imageStyle(38,this.$root.selectedSpace.bot_data,"bot"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Direct"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.userInfo?o("div",{staticClass:"d-inline-block mr-1",style:t.imageStyle(38,this.$root.selectedSpace.userInfo,"direct"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e()]),t._v(" "),o("div",{staticClass:"d-inline-block  py-0 px-0",staticStyle:{width:"40%"}},[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.name))]):t._e(),t._v(" "),null!=this.$root.selectedSpace.userInfo&&"Direct"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(t._s(this.$root.selectedSpace.userInfo.username))]):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.bot_data.name))]):t._e()]),t._v(" "),o("div",[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[this.$root.typing&&this.$root.typingSpace==this.$root.selectedSpace.space_id?o("span",{staticClass:"typingTextSm d-block"},["Direct"!=this.$root.selectedSpace.type?o("span",[t._v(" "+t._s(this.$root.typinguser)+" is")]):t._e(),t._v(" typing...  ")]):t._e(),t._v(" "),!this.$root.typing&&"Direct"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type&&this.$root.selectedSpaceMembers.length>1?o("span",{staticClass:"typingTextSm d-block"},[t._v(t._s(this.$root.selectedSpaceMembers.length)+"  "+t._s(t.$t("space.members"))+" , "+t._s(t.generateOnlineUsers())+"  "+t._s(t.$t("space.Online")))]):t._e(),t._v(" "),this.$root.typing||"SubSpace"!=this.$root.selectedSpace.type?t._e():o("span",{staticClass:"typingTextSm d-block"},["Public"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v("mdi-pound ")]):t._e(),t._v(" "),"Private"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v(" mdi-lock ")]):t._e(),t._v(" "),o("span",[t._v("  "+t._s(this.$root.selectedSubSpaceName))])],1),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticClass:"typingTextSm d-block"},[t._v("\n        Online\n      ")]):t._e(),t._v(" "),this.$root.typing&&"SubSpace"==this.$root.selectedSpace.type&&this.$root.typingSpace==this.$root.selectedSpace.space_id?o("span",{staticClass:"typingTextSm d-block"},["Direct"!=this.$root.selectedSpace.type?o("span",[t._v(" "+t._s(this.$root.typinguser)+" is")]):t._e(),t._v(" typing... \n        \n      ")]):t._e(),t._v(" "),!this.$root.typing&&"Direct"==this.$root.selectedSpace.type&&t.checkIfOnline(this.$root.selectedSpace.userInfo.id)?o("span",{staticClass:"typingTextSm d-block"},[t._v(t._s(t.$t("space.Online")))]):t._e()])])]),t._v(" "),o("div",{staticClass:"ml-auto d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:function(e){return t.showSideBar("sub_channels")}}},[o("v-icon",[t._v("mdi mdi-pound")])],1)]:t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.gotToBotChannel(t.that.$root.selectedSpace.bot_data.bot_channel)}}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-account-supervisor-outline")])],1)]:t._e(),t._v(" "),"Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:t.openLiveSession}},[t.that.$root.remoteLiveHappening?o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",[t._v("mdi-television-play")])],1):o("v-icon",[t._v("mdi-television-play")])],1)]:o("v-btn",{attrs:{small:"",icon:""}},[o("v-icon",[t._v("mdi-comment-question-outline")])],1),t._v(" "),o("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return t.showMoreOptions()}}},[o("v-icon",[t._v("las la-ellipsis-v")])],1)],2)],1)])}),[],!1,null,"4314c655",null);e.default=n.exports}}]);