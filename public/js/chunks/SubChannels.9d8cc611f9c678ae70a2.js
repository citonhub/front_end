(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{357:function(t,e,o){var s=o(587);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,n);s.locals&&(t.exports=s.locals)},586:function(t,e,o){"use strict";var s=o(357);o.n(s).a},587:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.messagesBadges[data-v-1f8bf305]{\n    \n    color: #ffffff;\n    background: #5cb85c;\n    font-size: 11px;\n    font-family: BodyFont;\n    font-weight: bolder;\n    align-items: center;\n    justify-content: center;\n    height:20px;\n    width:20px;\n    border-radius:50%;\n}\n.messageBox[data-v-1f8bf305]:hover{\n    background:whitesmoke;\n    cursor: pointer;\n}\n",""])},692:function(t,e,o){"use strict";o.r(e);var s={data:function(){return{that:this,loadingSubSpace:!1,subSpaces:null}},mounted:function(){this.$root.componentIsLoading=!1,this.fetchSubSpaces()},methods:{gotoGeneral:function(){var t=this.$root.selectedSpace.general_spaceId;this.$root.chatComponent.chatInnerSideBar=!1,this.$root.chatComponent.chatIsOpen=!1,this.$root.chatComponent.innerSideBarContent="",this.$router.push({path:"/channels/"+t+"/content"}),this.$root.chatComponent.fetchMessages(t),this.$root.chatComponent.messageIsDone=!1,this.$root.chatComponent.chatIsOpen=!0},selectSubSpace:function(t){var e=this;this.$root.chatComponent.chatInnerSideBar=!1,this.$root.chatComponent.innerSideBarContent="",this.$root.getLocalStore("full_space_"+t.space_id+this.$root.username).then((function(o){null!=o?(e.$router.push({path:"/channels/"+t.space_id+"/content"}),e.$root.chatComponent.fetchMessages(t.space_id),e.$root.chatComponent.messageIsDone=!1,e.$root.chatComponent.chatIsOpen=!0):(e.$root.fromSupportDirectlink=!1,e.$root.showProcessorFromChat=!1,e.$router.push({path:"/channels/"+t.space_id+"/payment"}))}))},fetchSubSpaces:function(){var t=this;this.loadingSubSpace=!0,this.$root.getLocalStore("sub_channels_"+this.$root.selectedSpace.general_spaceId+this.$root.username).then((function(e){if(null!=e){if(0==t.$root.subSpaces.length){var o=JSON.parse(e);o=o.sub_channels,t.checkIfisOwner()?t.$root.subSpaces=o:t.$root.subSpaces=o.filter((function(t){return"Public"==t.type||"Private"==t.type&&1==t.is_member}))}t.checkForUnread(),t.sortList(),t.loadingSubSpace=!1,t.checkForNewSubSpace()}else axios.get("/fetch-sub-spaces-"+t.$root.selectedSpace.general_spaceId+"-"+t.$root.userDeviceId).then((function(e){if(200==e.status){t.$root.LocalStore("sub_channels_"+t.$root.selectedSpace.general_spaceId+t.$root.username,e.data);var o=e.data.sub_channels;t.checkIfisOwner()?t.$root.subSpaces=o:t.$root.subSpaces=o.filter((function(t){return"Public"==t.type||"Private"==t.type&&1==t.is_member})),t.sortList(),t.loadingSubSpace=!1}})).catch((function(e){t.loadingSubSpace=!1}))}))},checkForNewSubSpace:function(){var t=this;axios.get("/fetch-sub-spaces-"+this.$root.selectedSpace.general_spaceId+"-"+this.$root.userDeviceId).then((function(e){if(200==e.status){t.$root.LocalStore("sub_channels_"+t.$root.selectedSpace.general_spaceId+t.$root.username,e.data);e.data.sub_channels.forEach((function(e){if(t.$root.subSpaces.filter((function(t){return t.space_id==e.space_id})).length>0)return!1;t.$root.subSpaces.push(e)}));t.sortList(),t.checkForUnread()}})).catch((function(t){}))},checkForUnread:function(){var t=this;this.$root.subSpaces.map((function(e){t.$root.getLocalStore("unread_messages_"+e.space_id+t.$root.username).then((function(t){if(null!=t){var o=JSON.parse(t);e.unread=o.length}else e.unread=0}))}))},sortList:function(){this.$root.sortArray(this.$root.subSpaces)},checkIfisOwner:function(){var t=this,e=this.$root.selectedSpaceMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return 0!=e.length&&e[0].is_admin},close:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.chatInnerSideBar=!1},addSubChannel:function(){this.$root.componentIsLoading=!0,this.$root.chatComponent.innerSideBarContent="",this.$root.chatComponent.innerSideBarContent="add_sub_channel",this.$router.push({path:"/channels/space_id/add_sub_channel"})}}},n=(o(586),o(5)),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{background:"transparent"}},[o("div",{staticClass:"col-12 py-1 my-0 "},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 py-0 px-1"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"col-2 py-0 mr-1 px-1 text-right"},[t.checkIfisOwner()?o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.addSubChannel(e)}}},[o("v-icon",[t._v("las la-plus-circle")])],1):t._e()],1)]),t._v(" "),o("div",{staticClass:"col-12 "},[null==this.$root.subSpaces?o("div",{staticClass:"col-12 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1):t._e(),t._v(" "),null!=this.$root.subSpaces?[0==this.$root.subSpaces.length?o("div",{staticClass:"col-12 d-flex flex-column text-center"},[o("div",{staticStyle:{"font-size":"13px",color:"gray"}},[t._v(" No sub channels yet")]),t._v(" "),o("div",{staticClass:"mt-2"},[t.checkIfisOwner()?o("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:function(e){return e.stopPropagation(),t.addSubChannel(e)}}},[o("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Add")])]):t._e()],1)]):t._e(),t._v(" "),this.$root.subSpaces.length>0?o("div",{staticClass:"row px-2"},["SubSpace"==t.that.$root.selectedSpace.type?o("v-card",{staticClass:"col-12 py-2 px-1 messageBox",staticStyle:{"border-bottom":"1px solid #cccccc"},attrs:{flat:"",tile:""},on:{click:function(e){return e.stopPropagation(),t.gotoGeneral(e)}}},[o("div",{staticClass:"row py-0 my-0"},[o("div",{staticClass:"col-2 py-0 my-0"},[o("v-icon",[t._v("mdi-google-circles-extended mdi-18px")])],1),t._v(" "),o("div",{staticClass:"col-8 py-0 my-0 text-center"},[o("span",{staticStyle:{"font-size":"13px",color:"#1e4148","font-family":"MediumFont"}},[t._v(" General")])]),t._v(" "),o("div",{staticClass:"py-0 my-0 d-flex col-2",staticStyle:{"align-items":"center"}})])]):t._e(),t._v(" "),t._l(this.$root.subSpaces,(function(e,s){return o("v-card",{key:s,staticClass:"col-12 py-2 px-1 messageBox",staticStyle:{"border-bottom":"1px solid #cccccc"},attrs:{flat:"",tile:""},on:{click:function(o){return o.stopPropagation(),t.selectSubSpace(e)}}},[o("div",{staticClass:"row py-0 my-0"},[o("div",{staticClass:"col-2 py-0 my-0"},["Public"==e.type?o("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi-pound")]):t._e(),t._v(" "),"Private"==e.type?o("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi-lock")]):t._e()],1),t._v(" "),o("div",{staticClass:"col-8 py-0 my-0 text-center"},[o("span",{staticStyle:{"font-size":"13px",color:"#1e4148","font-family":"MediumFont"}},[t._v(" "+t._s(e.space_info.name))])]),t._v(" "),o("div",{staticClass:"py-0 my-0 d-flex col-2",staticStyle:{"align-items":"center"}},[e.unread>0?o("span",{staticClass:"messagesBadges d-flex ml-lg-0 ml-0"},[t._v(t._s(e.unread))]):t._e()])])])}))],2):t._e()]:t._e()],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 py-0 px-0 text-center"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Sub-Channels")])])}],!1,null,"1f8bf305",null);e.default=a.exports}}]);