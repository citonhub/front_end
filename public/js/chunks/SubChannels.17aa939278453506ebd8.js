(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{343:function(t,e,n){var s=n(551);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(25)(s,o);s.locals&&(t.exports=s.locals)},550:function(t,e,n){"use strict";var s=n(343);n.n(s).a},551:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,"\n.messagesBadges[data-v-5a890216]{\n    \n    color: #ffffff;\n    background: #3C87CD;\n    font-size: 11px;\n    font-family: BodyFont;\n    font-weight: bolder;\n    align-items: center;\n    justify-content: center;\n    height:20px;\n    width:20px;\n    border-radius:50%;\n}\n.messageBox[data-v-5a890216]:hover{\n    background:whitesmoke;\n    cursor: pointer;\n}\n",""])},638:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{that:this,loadingSubSpace:!1,subSpaces:null}},mounted:function(){this.fetchSubSpaces()},methods:{gotoGeneral:function(){var t=this.$root.selectedSpace.general_spaceId;this.$root.chatComponent.chatInnerSideBar=!1,this.$root.chatComponent.chatIsOpen=!1,this.$root.chatComponent.innerSideBarContent="",this.$router.push({path:"/channels/"+t+"/content"}),this.$root.chatComponent.fetchMessages(t),this.$root.chatComponent.messageIsDone=!1,this.$root.chatComponent.chatIsOpen=!0},selectSubSpace:function(t){this.$root.chatComponent.chatInnerSideBar=!1,this.$root.chatComponent.chatIsOpen=!1,this.$root.chatComponent.innerSideBarContent="",this.$router.push({path:"/channels/"+t.space_id+"/content"}),this.$root.chatComponent.fetchMessages(t.space_id),this.$root.chatComponent.messageIsDone=!1,this.$root.chatComponent.chatIsOpen=!0},fetchSubSpaces:function(){var t=this;this.loadingSubSpace=!0,this.$root.getLocalStore("sub_channels_"+this.$root.selectedSpace.general_spaceId+this.$root.username).then((function(e){if(null!=e){var n=JSON.parse(e);n=n.sub_channels,t.checkIfisOwner()?t.subSpaces=n:t.subSpaces=n.filter((function(t){return"Public"==t.type||"Private"==t.type&&1==t.is_member})),t.checkForUnread(),t.sortList(),t.loadingSubSpace=!1}else axios.get("/fetch-sub-spaces-"+t.$root.selectedSpace.general_spaceId+"-"+t.$root.userDeviceId).then((function(e){if(200==e.status){t.$root.LocalStore("sub_channels_"+t.$root.selectedSpace.general_spaceId+t.$root.username,e.data);var n=e.data.sub_channels;t.checkIfisOwner()?t.subSpaces=n:t.subSpaces=n.filter((function(t){return"Public"==t.type||"Private"==t.type&&1==t.is_member})),t.showList(),t.loadingSubSpace=!1}})).catch((function(e){t.loadingSubSpace=!1}))}))},checkForUnread:function(){var t=this;this.subSpaces.map((function(e){t.$root.getLocalStore("unread_messages_"+e.space_id+t.$root.username).then((function(t){if(null!=t){var n=JSON.parse(t);e.unread=n.length}else e.unread=0}))}))},sortList:function(){this.$root.sortArray(this.subSpaces)},checkIfisOwner:function(){var t=this,e=this.$root.selectedSpaceMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return 0!=e.length&&e[0].is_admin},close:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.chatInnerSideBar=!1},addSubChannel:function(){var t=this;this.$root.chatComponent.innerSideBarContent="",setTimeout((function(){t.$root.chatComponent.innerSideBarContent="add_sub_channel"}),500),this.$router.push({path:"/channels/space_id/add_sub_channel"})}}},o=(n(550),n(4)),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{background:"transparent"}},[n("div",{staticClass:"col-12 py-1 my-0 "},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[n("div",{staticClass:" mr-1 col-2 py-0 px-1"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[n("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"col-2 py-0 mr-1 px-1 text-right"},[t.checkIfisOwner()?n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.addSubChannel(e)}}},[n("v-icon",[t._v("las la-plus-circle")])],1):t._e()],1)]),t._v(" "),n("div",{staticClass:"col-12 "},[null==t.subSpaces?n("div",{staticClass:"col-12 text-center"},[n("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1):t._e(),t._v(" "),null!=t.subSpaces?[0==t.subSpaces.length?n("div",{staticClass:"col-12 d-flex flex-column text-center"},[n("div",{staticStyle:{"font-size":"13px",color:"gray"}},[t._v(" No sub channels yet")]),t._v(" "),n("div",{staticClass:"mt-2"},[t.checkIfisOwner()?n("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:function(e){return e.stopPropagation(),t.addSubChannel(e)}}},[n("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Add")])]):t._e()],1)]):t._e(),t._v(" "),t.subSpaces.length>0?n("div",{staticClass:"row px-2"},["SubSpace"==t.that.$root.selectedSpace.type?n("v-card",{staticClass:"col-12 py-2 px-1 messageBox",staticStyle:{"border-bottom":"1px solid #cccccc"},attrs:{flat:"",tile:""},on:{click:function(e){return e.stopPropagation(),t.gotoGeneral(e)}}},[n("div",{staticClass:"row py-0 my-0"},[n("div",{staticClass:"col-2 py-0 my-0"},[n("v-icon",[t._v("mdi-google-circles-extended mdi-18px")])],1),t._v(" "),n("div",{staticClass:"col-8 py-0 my-0 text-center"},[n("span",{staticStyle:{"font-size":"13px",color:"#1e4148","font-family":"MediumFont"}},[t._v(" General")])]),t._v(" "),n("div",{staticClass:"py-0 my-0 d-flex col-2",staticStyle:{"align-items":"center"}})])]):t._e(),t._v(" "),t._l(t.subSpaces,(function(e,s){return n("v-card",{key:s,staticClass:"col-12 py-2 px-1 messageBox",staticStyle:{"border-bottom":"1px solid #cccccc"},attrs:{flat:"",tile:""},on:{click:function(n){return n.stopPropagation(),t.selectSubSpace(e)}}},[n("div",{staticClass:"row py-0 my-0"},[n("div",{staticClass:"col-2 py-0 my-0"},["Public"==e.type?n("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi-pound")]):t._e(),t._v(" "),"Private"==e.type?n("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi-lock")]):t._e()],1),t._v(" "),n("div",{staticClass:"col-8 py-0 my-0 text-center"},[n("span",{staticStyle:{"font-size":"13px",color:"#1e4148","font-family":"MediumFont"}},[t._v(" "+t._s(e.space_info.name))])]),t._v(" "),n("div",{staticClass:"py-0 my-0 d-flex col-2",staticStyle:{"align-items":"center"}},[e.unread>0?n("span",{staticClass:"messagesBadges d-flex ml-lg-0 ml-0"},[t._v(t._s(e.unread))]):t._e()])])])}))],2):t._e()]:t._e()],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 py-0 px-0 text-center"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Sub Channels")])])}],!1,null,"5a890216",null);e.default=a.exports}}]);