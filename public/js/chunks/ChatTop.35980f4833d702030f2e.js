(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{348:function(t,e,o){var s=o(568);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,n);s.locals&&(t.exports=s.locals)},567:function(t,e,o){"use strict";var s=o(348);o.n(s).a},568:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.typingText[data-v-18c006a4]{\nfont-size:12px; \ncolor:grey; \nfont-family:BodyFont;\n}\n.typingTextSm[data-v-18c006a4]{\nfont-size:11px; \ncolor:grey; \nfont-family:BodyFont;\n}\n",""])},673:function(t,e,o){"use strict";o.r(e);var s={data:function(){return{that:this,loadingChat:!1}},mounted:function(){this.$root.chatTopLoaded=!0,this.$root.chatTopLoadedLg=!0},components:{MoreOptionChat:function(){return o.e(67).then(o.bind(null,688))}},methods:{newUpdatePresent:function(t){return t.filter((function(t){return t.changes>0||t.is_new})).length>0},showMoreOptions:function(){this.$root.chatComponent.showMoreOptionsChat=!0},gotToBotChannel:function(t){if(this.$root.selectedSpace.bot_data.bot_channel){var e=this.$root.selectedSpace.bot_data.bot_channel;this.$root.chatComponent.chatInnerSideBar=!1,this.$root.chatComponent.chatIsOpen=!1,this.$root.chatComponent.innerSideBarContent="",this.$router.push({path:"/channels/"+e+"/content"}),this.$root.chatComponent.fetchMessages(e),this.$root.chatComponent.messageIsDone=!1,this.$root.chatComponent.chatIsOpen=!0}else{if(this.$root.selectedSpace.owner==this.$root.user_temp_id)return;this.chatUser()}},chatUser:function(){var t=this;this.loadingChat=!0,axios.post("/create-space",{name:"",limit:2,memberId:this.$root.selectedSpace.owner,type:"Direct"}).then((function(e){200==e.status&&t.$root.getLocalStore("user_chat_list"+t.$root.username).then((function(o){if(null!=o){var s=JSON.parse(o);if(s.direct_messages.filter((function(t){return t.space_id==e.data.space.space_id})).length>0);else{s.direct_messages.unshift(e.data.space),t.$root.LocalStore("user_chat_list"+t.$root.username,s);var n=s.channels.concat(s.direct_messages,s.pet_spaces);t.$root.ChatList=n,t.$root.sortChatList()}var i=e.data.space.space_id;t.$root.chatComponent.chatInnerSideBar=!1,t.$root.chatComponent.chatIsOpen=!1,t.$root.chatComponent.innerSideBarContent="",t.$router.push({path:"/channels/"+i+"/content"}),t.$root.chatComponent.fetchMessages(i),t.$root.chatComponent.messageIsDone=!1,t.$root.chatComponent.chatIsOpen=!0}}))})).catch((function(e){t.loadingChat=!1,t.showAlert("Oops!","Something went wrong,please try again","error")}))},showDiaryNotes:function(){this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/diary_notes"})},showSideBar:function(t){"Channel"!=this.$root.selectedSpace.type&&"Team"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type||(this.$root.componentIsLoading=!0,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/"+t})),"Direct"==this.$root.selectedSpace.type&&this.goToProfile(this.$root.selectedSpace.userInfo.username)},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})},openLiveSession:function(){this.$root.componentIsLoading=!0,this.$root.liveSessionIsOpen=!0,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/live_session"})},checkIfOnline:function(t){return 0!=this.$root.globalUsers.filter((function(e){return e.id==t})).length},generateOnlineUsers:function(){var t=this,e=[];return this.$root.selectedSpaceMembers.forEach((function(o){var s=t.$root.globalUsers.filter((function(t){return t.id==o.user_id}));0!=s.length&&e.push(s[0])})),e.length},goback:function(){if(this.$root.comingFromDiaryBank)return this.$router.push({path:"/board/diary/bank"}),void(this.$root.comingFromDiaryBank=!1);this.$router.push({path:"/channels"}),this.$root.chatComponent.chatIsOpen=!1},imageStyle:function(t,e,o){if(null==e.background_color){var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";return s+="channel"==o?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var n="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;",i=e.image_name+"."+e.image_extension;return n+="channel"==o||"bot"==o?"background-color:"+e.background_color+"; background-image:url(/imgs/space/thumbnails/"+i+");":"background-color:"+e.background_color+"; background-image:url(/imgs/profile/thumbnails/"+i+");"}}},n=(o(567),o(4)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row application application--light",attrs:{"data-app":"true"}},[o("div",{staticClass:"col-md-9 py-0 d-lg-flex px-md-1 flex-row  d-none",staticStyle:{"align-items":"center"}},[o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goback(e)}}},[o("v-icon",{staticStyle:{"font-size":"24px"}},[t._v("las la-arrow-left")])],1),t._v(" "),"Channel"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type?o("div",{staticClass:"d-inline-block mx-2",staticStyle:{width:"42px"},style:t.imageStyle(40,this.$root.selectedSpace,"channel"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.bot_data?o("div",{staticClass:"d-inline-block mx-2",staticStyle:{width:"42px"},style:t.imageStyle(40,this.$root.selectedSpace.bot_data,"bot"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Direct"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.userInfo?o("div",{staticClass:"d-inline-block mx-2",staticStyle:{width:"42px"},style:t.imageStyle(40,this.$root.selectedSpace.userInfo,"direct"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),o("div",{staticClass:"d-inline-block"},[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.name))]):t._e(),t._v(" "),null!=this.$root.selectedSpace.userInfo&&"Direct"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(t._s(this.$root.selectedSpace.userInfo.username))]):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.bot_data.name))]):t._e()]),t._v(" "),o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[this.$root.typing||this.$root.typingSpace==this.$root.selectedSpace.space_id?[this.$root.typingSpace==this.$root.selectedSpace.space_id?o("span",{staticClass:"typingText d-block"},["Direct"!=this.$root.selectedSpace.type?o("span",[t._v(" "+t._s(this.$root.typinguser)+" is")]):t._e(),t._v(" typing...  \n        \n            ")]):t._e()]:["Direct"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type&&this.$root.selectedSpaceMembers.length>1?o("span",{staticClass:"typingText d-block"},[t._v(t._s(this.$root.selectedSpaceMembers.length)+"  "+t._s(t.$t("space.members"))+" , "+t._s(t.generateOnlineUsers())+"  "+t._s(t.$t("space.Online")))]):t._e(),t._v(" "),"SubSpace"==this.$root.selectedSpace.type?o("span",{staticClass:"typingText d-block"},["Public"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v("mdi-pound ")]):t._e(),t._v(" "),"Private"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v(" mdi-lock ")]):t._e(),t._v(" "),o("span",{staticClass:"px-1"},[t._v("  "+t._s(this.$root.selectedSubSpaceName))])],1):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticClass:"typingText d-block"},[t._v("\n        Online\n      ")]):t._e(),t._v(" "),"Direct"==this.$root.selectedSpace.type&&t.checkIfOnline(this.$root.selectedSpace.userInfo.id)?o("span",{staticClass:"typingText d-block"},[t._v(t._s(t.$t("space.Online")))]):t._e()]],2)])],1),t._v(" "),o("div",{staticClass:"col-md-1 py-1 d-none text-right d-lg-block",staticStyle:{"align-items":"center"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:function(e){return t.showSideBar("sub_channels")}}},[o("v-icon",[t._v("mdi mdi-pound")])],1)]:t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?[t.that.$root.selectedSpace.bot_data.bot_channel?[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.gotToBotChannel(t.that.$root.selectedSpace.bot_data.bot_channel)}}},[o("v-icon",[t._v("mdi-comment-multiple-outline ")])],1)]:[o("v-btn",{attrs:{disabled:t.that.$root.selectedSpace.owner==t.that.$root.user_temp_id,loading:t.loadingChat,icon:""},on:{click:function(e){return t.gotToBotChannel(t.that.$root.selectedSpace.bot_data.bot_channel)}}},[o("v-icon",[t._v("las la-user-alt ")])],1)]]:t._e()],2),t._v(" "),o("div",{staticClass:"col-md-1 py-1  d-none text-right px-1 d-lg-block",staticStyle:{"align-items":"center"}},["Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:t.openLiveSession}},[t.that.$root.remoteLiveHappening?o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",[t._v("mdi-television-play")])],1):o("v-icon",[t._v("mdi-television-play")])],1)]:o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.showDiaryNotes(e)}}},[t.newUpdatePresent(t.that.$root.diaryNotes)?o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",[t._v(" mdi-format-list-bulleted")])],1):o("v-icon",[t._v(" mdi-format-list-bulleted")])],1)],2),t._v(" "),o("div",{staticClass:"col-md-1 py-1 text-right d-none d-lg-block",staticStyle:{"align-items":"center"}},[o("v-btn",{staticClass:"showMoreChat",attrs:{icon:""}},[o("v-icon",[t._v("las la-ellipsis-v")])],1),t._v(" "),o("v-menu",{staticStyle:{"z-index":"99999999999999999999"},attrs:{absolute:"",activator:".showMoreChat",left:"","offset-y":""}},[o("more-option-chat")],1)],1),t._v(" "),o("div",{staticClass:"col-12 py-0 d-flex  flex-row d-lg-none px-1",staticStyle:{"align-items":"center"}},[o("v-btn",{staticClass:"d-lg-none d-inline-block",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goback(e)}}},[o("v-icon",{staticStyle:{"font-size":"24px"}},[t._v("las la-arrow-left")])],1),t._v(" "),o("div",{staticClass:"d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},["Channel"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type?o("div",{staticClass:"d-inline-block mr-1",style:t.imageStyle(38,this.$root.selectedSpace,"channel"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.bot_data?o("div",{staticClass:"d-inline-block mr-1",style:t.imageStyle(38,this.$root.selectedSpace.bot_data,"bot"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e(),t._v(" "),"Direct"==this.$root.selectedSpace.type&&null!=this.$root.selectedSpace.userInfo?o("div",{staticClass:"d-inline-block mr-1",style:t.imageStyle(38,this.$root.selectedSpace.userInfo,"direct"),on:{click:function(e){return t.showSideBar("channel_info")}}}):t._e()]),t._v(" "),o("div",{staticClass:"d-inline-block  py-0 px-0",staticStyle:{width:"40%"}},[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.name))]):t._e(),t._v(" "),null!=this.$root.selectedSpace.userInfo&&"Direct"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(t._s(this.$root.selectedSpace.userInfo.username))]):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return t.showSideBar("channel_info")}}},[t._v(" "+t._s(this.$root.selectedSpace.bot_data.name))]):t._e()]),t._v(" "),o("div",[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[this.$root.typing||this.$root.typingSpace==this.$root.selectedSpace.space_id?[this.$root.typingSpace==this.$root.selectedSpace.space_id?o("span",{staticClass:"typingTextSm d-block"},["Direct"!=this.$root.selectedSpace.type?o("span",[t._v(" "+t._s(this.$root.typinguser)+" is")]):t._e(),t._v(" typing... \n        \n                         ")]):t._e()]:["Direct"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type&&this.$root.selectedSpaceMembers.length>1?o("span",{staticClass:"typingTextSm d-block"},[t._v(t._s(this.$root.selectedSpaceMembers.length)+"  "+t._s(t.$t("space.members"))+" , "+t._s(t.generateOnlineUsers())+"  "+t._s(t.$t("space.Online")))]):t._e(),t._v(" "),"SubSpace"==this.$root.selectedSpace.type?o("span",{staticClass:"typingTextSm d-block"},["Public"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v("mdi-pound ")]):t._e(),t._v(" "),"Private"==this.$root.selectedSubSpaceType?o("v-icon",{staticClass:"d-inline-block",staticStyle:{"font-size":"12px"},attrs:{color:"#333333"}},[t._v(" mdi-lock ")]):t._e(),t._v(" "),o("span",[t._v("  "+t._s(this.$root.selectedSubSpaceName))])],1):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("span",{staticClass:"typingTextSm d-block"},[t._v("\n        Online\n      ")]):t._e(),t._v(" "),"Direct"==this.$root.selectedSpace.type&&t.checkIfOnline(this.$root.selectedSpace.userInfo.id)?o("span",{staticClass:"typingTextSm d-block"},[t._v(t._s(t.$t("space.Online")))]):t._e()]],2)])]),t._v(" "),o("div",{staticClass:"ml-auto d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},["Direct"!=this.$root.selectedSpace.type&&"Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:function(e){return t.showSideBar("sub_channels")}}},[o("v-icon",[t._v("mdi mdi-pound")])],1)]:t._e(),t._v(" "),"Bot"!=this.$root.selectedSpace.type?[o("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:""},on:{click:t.openLiveSession}},[t.that.$root.remoteLiveHappening?o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",[t._v("mdi-television-play")])],1):o("v-icon",[t._v("mdi-television-play")])],1)]:[t.that.$root.selectedSpace.bot_data.bot_channel?[o("v-btn",{staticClass:"mr-1",attrs:{small:"",icon:""},on:{click:function(e){return t.gotToBotChannel(t.that.$root.selectedSpace.bot_data.bot_channel)}}},[o("v-icon",{staticStyle:{"font-size":"21px"}},[t._v("mdi-comment-multiple-outline ")])],1)]:[o("v-btn",{staticClass:"mr-1",attrs:{small:"",disabled:t.that.$root.selectedSpace.owner==t.that.$root.user_temp_id,loading:t.loadingChat,icon:""},on:{click:function(e){return t.gotToBotChannel(t.that.$root.selectedSpace.bot_data.bot_channel)}}},[o("v-icon",{staticStyle:{"font-size":"21px"}},[t._v("las la-user-alt ")])],1)]],t._v(" "),"Bot"==this.$root.selectedSpace.type?o("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.showDiaryNotes(e)}}},[t.newUpdatePresent(t.that.$root.diaryNotes)?o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",{staticStyle:{"font-size":"21px"}},[t._v(" mdi-format-list-bulleted")])],1):o("v-icon",{staticStyle:{"font-size":"21px"}},[t._v(" mdi-format-list-bulleted")])],1):t._e(),t._v(" "),o("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return t.showMoreOptions()}}},[o("v-icon",[t._v("las la-ellipsis-v")])],1)],2)],1)])}),[],!1,null,"18c006a4",null);e.default=i.exports}}]);