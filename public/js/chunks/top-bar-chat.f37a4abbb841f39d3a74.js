(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{629:function(t,e,o){"use strict";o.r(e);var a={data:function(){return{showSideBar:!1,searchType:"",that:this,searchValue:""}},mounted:function(){this.$root.TopBarComponentChat=this},methods:{goToNotification:function(){this.$router.push({path:"/board/notifications"})},showProfile:function(){this.$router.push({path:"/profile/"+this.$root.username})},searchChatList:function(){var t=this,e=this.$root.ChatList.filter((function(e){var o="";return"Team"!=e.type&&"Channel"!=e.type||(o=e.name.toLowerCase()),"Bot"==e.type&&null!=e.bot_data&&(o=e.bot_data.name.toLowerCase()),"Direct"==e.type&&(o=e.userInfo.username.toLowerCase()),o.includes(t.searchValue.toLowerCase())}));this.$root.searchChatList=e},imageStyleUser:function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return o+="background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var a="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",i=e.image_name+"."+e.image_extension;return a+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+i+");"}}},i=o(4),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"col-12 d-block d-md-none py-2 ",staticStyle:{position:"absolute",top:"0",left:"0","font-family":"BodyFont","z-index":"99999999999",background:"#ffffff"}},[o("div",{staticClass:"row px-2"},[o("v-card",{staticClass:"col-12 py-2 px-1",staticStyle:{"border-radius":"7px"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-2 py-0  text-center"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.that.$root.showSideBar=!0}}},[o("v-icon",{staticStyle:{"font-size":"25px",color:"#263238"}},[t._v("las la-bars")])],1)],1),t._v(" "),o("div",{staticClass:"col-6 d-flex py-0 px-1",staticStyle:{"justify-content":"center","align-items":"center"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"py-2 px-2",staticStyle:{width:"100%",heigth:"100%","font-size":"12px"},attrs:{placeholder:"Search",type:"search"},domProps:{value:t.searchValue},on:{input:[function(e){e.target.composing||(t.searchValue=e.target.value)},t.searchChatList]}})]),t._v(" "),o("div",{staticClass:"col-2 text-center py-0"},[this.$root.authProfile.name?[o("v-btn",{attrs:{icon:""},on:{click:t.goToNotification}},[this.$root.authProfile.unread>0?o("v-badge",{attrs:{content:this.$root.authProfile.unread,color:"green"}},[o("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1):o("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1)]:t._e()],2),t._v(" "),o("div",{staticClass:"col-2 d-flex px-1 py-0",staticStyle:{"justify-content":"center","align-items":"center"}},[this.$root.authProfile.name?[o("div",{style:t.imageStyleUser(32,this.$root.authProfile),on:{click:t.showProfile}})]:t._e()],2)])])],1)])])}),[],!1,null,"3dc30590",null);e.default=r.exports}}]);