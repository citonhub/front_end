(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{632:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{that:this,loadingLeave:!1}},methods:{close:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.chatInnerSideBar=!1},EditChannel:function(){this.$root.chatComponent.innerSideBarContent="",this.$root.chatComponent.innerSideBarContent="channel_edit",this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/channel_edit"})},leaveSpace:function(){var t=this;this.loadingLeave=!0,axios.post("/leave-space",{space_id:this.$route.params.spaceId}).then((function(e){200==e.status&&t.$root.getLocalStore("user_chat_list"+t.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);if("Channel"==t.$root.selectedSpace.type||"Team"==t.$root.selectedSpace.type){var n=o.channels.filter((function(e){return e.space_id!=t.$route.params.spaceId}));o.channels=n}if("Bot"==t.$root.selectedSpace.type){var i=o.pet_spaces.filter((function(e){return e.space_id!=t.$route.params.spaceId}));o.channels=i}t.$root.LocalStore("user_chat_list"+t.$root.username,o);var a=o.channels.concat(o.direct_messages,o.pet_spaces);t.$root.ChatList=a,t.$root.sortChatList(),t.$router.push({path:"/channels"})}}))})).catch((function(e){t.loadingLeave=!1,t.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")}))},imageStyleSpace:function(t,e,o){if(null==e.background_color){var n="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";return n+="channel"==o?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile.png);"}var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;",a=e.image_name+"."+e.image_extension;return i+="channel"==o||"bot"==o?"background-color:"+e.background_color+"; background-image:url(/imgs/space/"+a+");":"background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+a+");"},imageStyle:function(t,e,o){if(null==e.background_color){var n="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ";return n+="channel"==o?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile.png);"}var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",a=e.image_name+"."+e.image_extension;return i+="channel"==o||"bot"==o?"background-color:"+e.background_color+"; background-image:url(/imgs/space/"+a+");":"background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+a+");"},showInvitation:function(){this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/channel_invitation"})},checkIfisOwner:function(){var t=this,e=this.$root.selectedSpaceMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return 0!=e.length&&e[0].is_admin}}},i=o(4),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12 py-1 my-0 "},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 px-1 py-0"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"col-2 py-0 mr-1 text-right px-1"},[t.checkIfisOwner()?o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.EditChannel(e)}}},[o("v-icon",[t._v("las la-edit")])],1):t._e()],1)]),t._v(" "),o("div",{staticClass:"col-12 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[o("div",{style:t.imageStyleSpace(150,t.that.$root.selectedSpace,"channel")})]),t._v(" "),o("div",{staticClass:"col-12 text-center py-0"},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v(t._s(t.that.$root.selectedSpace.name))])]),t._v(" "),o("div",{staticClass:"col-12 text-left py-1"},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Description")]),o("br"),t._v(" "),t.that.$root.selectedSpace.description?[o("span",{staticStyle:{"font-size":"12px"},domProps:{innerHTML:t._s(t.that.$root.selectedSpace.description)}})]:[o("span",{staticStyle:{"font-size":"12px",color:"grey"}},[t._v("Here is this channel description")])]],2),t._v(" "),o("div",{staticClass:"col-12 py-2"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 px-0 py-0"},[t.checkIfisOwner()?o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"capitalize","font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",color:"#3C87CD",rounded:""},on:{click:function(e){return e.stopPropagation(),t.showInvitation(e)}}},[t._v("Invite")]):t._e()],1),t._v(" "),o("div",{staticClass:"col-6 px-0 py-0 text-right"},[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"text-transform":"capitalize","font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",color:"#3C87CD",loading:t.loadingLeave,outlined:"",rounded:""},on:{click:t.leaveSpace}},[t._v("Leave")])],1)])]),t._v(" "),o("div",{staticClass:"col-12 py-2 d-flex flex-row mt-2",staticStyle:{"border-top":"1px solid #c5c5c5","border-bottom":"1px solid #c5c5c5"}},[t._m(1),t._v(" "),o("div",{staticClass:"col-5 text-right py-0 px-0"},[o("span",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.that.$root.selectedSpaceMembers.length))])])]),t._v(" "),t._l(t.that.$root.selectedSpaceMembers,(function(e,n){return o("div",{key:n,staticClass:"col-12 py-2 d-flex flex-row",staticStyle:{"align-items":"center","border-bottom":"1px solid #c5c5c5"}},[o("div",{staticClass:"mr-2",style:t.imageStyle(40,e,"user")}),t._v(" "),o("div",[o("span",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.name)+" @"+t._s(e.username))])])])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 py-0 text-center"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Channel Info")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-7 py-0 px-0"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Members")])])}],!1,null,"2c797132",null);e.default=a.exports}}]);