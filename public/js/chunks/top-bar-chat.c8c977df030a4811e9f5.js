(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{696:function(t,o,e){"use strict";e.r(o);var a={data:function(){return{showSideBar:!1,searchType:"",that:this,searchValue:""}},mounted:function(){this.$root.TopBarComponentChat=this},methods:{goToNotification:function(){this.$router.push({path:"/board/notifications"})},showSidebarHandler:function(){var t=this;this.$root.checkIfUserIsLoggedIn(),this.$root.showSideBar=!0,this.$root.componentIsLoading=!0,this.$root.authProfile.user_onboarded||axios.post("/save-user-onboarded-status").then((function(o){200==o.status&&(t.$root.authProfile.user_onboarded=!0)})).catch((function(t){}))},showProfile:function(){this.$router.push({path:"/profile/"+this.$root.username})},searchChatList:function(t){var o=this;this.searchValue=t.target.value;var e=this.$root.ChatList.filter((function(t){var e="";return"Team"!=t.type&&"Channel"!=t.type||(e=t.name.toLowerCase()),"Bot"==t.type&&null!=t.bot_data&&(e=t.bot_data.name.toLowerCase()),"Direct"==t.type&&(e=t.userInfo.username.toLowerCase()),e.includes(o.searchValue.toLowerCase())}));this.$root.searchChatList=e},imageStyleUser:function(t,o){if(null==o.background_color){var e="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return e+="background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var a="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",i=o.image_name+"."+o.image_extension;return a+="background-color:"+o.background_color+"; background-image:url(/imgs/profile/thumbnails/"+i+");"}}},i=e(4),r=Object(i.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"col-12 d-block d-lg-none py-2 ",staticStyle:{position:"absolute",top:"0",left:"0","font-family":"BodyFont","z-index":"99999999999",background:"#ffffff"}},[e("div",{staticClass:"row px-2"},[e("v-card",{staticClass:"col-12 py-2 px-1",staticStyle:{"border-radius":"7px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-2 py-0  text-center"},[e("v-btn",{attrs:{icon:""},on:{click:t.showSidebarHandler}},[t.that.$root.authProfile.user_onboarded?e("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bars")]):e("v-badge",{attrs:{dot:"",color:"green"}},[e("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bars")])],1)],1)],1),t._v(" "),e("div",{staticClass:"col-6 d-flex py-0 px-1",staticStyle:{"justify-content":"center","align-items":"center"}},[e("input",{staticClass:"py-2 px-2",staticStyle:{width:"100%",heigth:"100%","font-size":"12px"},attrs:{placeholder:"Search",type:"search"},domProps:{value:t.searchValue},on:{input:t.searchChatList}})]),t._v(" "),e("div",{staticClass:"col-2 text-center py-0"},[this.$root.authProfile.name?[e("v-btn",{attrs:{icon:""},on:{click:t.goToNotification}},[this.$root.authProfile.unread>0?e("v-badge",{attrs:{dot:"",color:"green"}},[e("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1):e("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1)]:t._e()],2),t._v(" "),e("div",{staticClass:"col-2 d-flex px-1 py-0",staticStyle:{"justify-content":"center","align-items":"center"}},[this.$root.authProfile.name?[e("div",{style:t.imageStyleUser(32,this.$root.authProfile),on:{click:t.showProfile}})]:t._e()],2)])])],1)])])}),[],!1,null,"a18642aa",null);o.default=r.exports}}]);