(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{716:function(t,e,o){"use strict";o.r(e);var i={data:function(){return{showSideBar:!1,searchType:"",that:this,profileName:"",fetchedUser:"",searchTable:!1}},mounted:function(){this.$root.TopBarComponent=this},methods:{goToNotification:function(){this.$router.push({path:"/board/notifications"})},imageStyleUser:function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return o+="background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",s=e.image_name+"."+e.image_extension;return i+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+s+");"},fetchSearchResult:function(t){var e=this;this.profileName=t.target.value,this.searchTable=!0,""!=this.profileName&&axios.get("/profile-search/".concat(this.profileName)).then((function(t){200==t.status&&(e.fetchedUser=t.data.profiles)}))},getUserLevel:function(t){var e="";return t>=0&&t<=99?e+="/imgs/steel.svg":t>=100&&t<=299?e+="/imgs/bronze.svg":t>=300&&t<=599?e+="/imgs/silver.svg":t>=600&&t<=999?e+="/imgs/gold.svg":t>=1e3&&t<=1499?e+="/imgs/platinum.svg":t>=1500&&t<=9999&&(e+="/imgs/diamond.svg"),e},goToProfile:function(t){this.profileName="",this.$root.profilePageComponent.mainUserName=t.username,this.$root.selectedUsername=t.username,this.$router.currentRoute.path.indexOf("profile")>=0?this.$router.push({path:"/profile-search/"+t.username}):this.$router.push({path:"/profile/"+t.username}),this.$root.profilePageComponent.fetchProfileContent(),this.searchTable=!1}}},s=o(4),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"col-12 d-none d-md-block py-0 px-2",staticStyle:{position:"absolute",top:"0",left:"0","font-family":"BodyFont"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-5 col-md-1 pb-0  text-left px-lg-4"},[o("v-btn",{staticClass:"mt-2  ",attrs:{icon:""},on:{click:function(e){t.that.$root.showSideBar=!0}}},[o("v-icon",{staticStyle:{"font-size":"25px",color:"black"}},[t._v("las la-bars")])],1)],1),t._v(" "),o("div",{staticClass:"col-lg-7 pb-0 col-md-10 offset-md-1 offset-lg-0"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-5 pb-1 text-center"},[o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"Search for People",filled:"",dense:"","append-icon":"las la-search",rounded:""},on:{input:t.fetchSearchResult},model:{value:t.profileName,callback:function(e){t.profileName=e},expression:"profileName"}}),t._v(" "),""!=t.profileName?[o("v-card",{staticClass:"d-flex flex-column px-1 py-2",staticStyle:{position:"absolute",top:"58%","border-radius":"0px",width:"100%","max-height":"400px","z-index":"99999999999999",left:"0px",height:"auto","overflow-y":"auto"}},t._l(t.fetchedUser,(function(e){return o("v-card",{key:e.user_temp_id,staticClass:"px-1 py-2 d-flex flex-row",staticStyle:{"border-bottom":"1px solid #c5c5c5","align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(o){return t.goToProfile(e)}}},[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(e.name)+" "),o("span",{staticStyle:{"font-family":"BodyFont"}},[t._v("@"+t._s(e.username))])])])])})),1)]:t._e()],2),t._v(" "),o("div",{staticClass:"col-lg-2 pb-1 col-md-2 text-right"},[this.$root.authProfile.name?[o("v-btn",{attrs:{icon:""},on:{click:t.goToNotification}},[this.$root.authProfile.unread>0?o("v-badge",{attrs:{content:this.$root.authProfile.unread,color:"green"}},[o("v-icon",{staticStyle:{"font-size":"25px",color:"#263238"}},[t._v("las la-bell")])],1):o("v-icon",{staticStyle:{"font-size":"25px",color:"#263238"}},[t._v("las la-bell")])],1)]:t._e()],2),t._v(" "),o("div",{staticClass:"col-lg-4 pb-1 col-md-5 py-1 d-flex",staticStyle:{"justify-content":"center","align-items":"center"}},[o("div",{staticClass:"mb-5",staticStyle:{cursor:"pointer"}},[o("v-card",{staticClass:" d-flex   py-1 px-2",staticStyle:{"border-radius":"30px","justify-content":"center","align-items":"center"},attrs:{"elevation-2":""}},[this.$root.authProfile.name?[o("div",{staticClass:"d-inline-block mr-2",style:t.imageStyleUser(30,this.$root.authProfile)}),t._v(" "),o("span",{staticClass:"pr-1",staticStyle:{"font-family":"MediumFont","font-size":"13px",color:"black"}},[t._v(t._s(this.$root.authProfile.name))])]:t._e()],2)],1)])])])])]),t._v(" "),o("div",{staticClass:"col-12  d-md-none d-block py-2 ",staticStyle:{position:"absolute",top:"0",left:"0","font-family":"BodyFont","z-index":"99999999999999"}},[o("div",{staticClass:"row px-2"},[o("v-card",{staticClass:"col-12 py-2 px-1",staticStyle:{"border-radius":"7px"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-2 py-0  text-center"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.that.$root.showSideBar=!0}}},[o("v-icon",{staticStyle:{"font-size":"25px",color:"#263238"}},[t._v("las la-bars")])],1)],1),t._v(" "),o("div",{staticClass:"col-6 d-flex py-0 px-1",staticStyle:{"justify-content":"center","align-items":"center"}},[o("input",{staticClass:"py-2 px-2",staticStyle:{width:"100%",heigth:"100%","font-size":"12px"},attrs:{placeholder:"Search for people",type:"search"},domProps:{value:t.profileName},on:{keydown:function(e){t.searchTable=!0},input:t.fetchSearchResult}})]),t._v(" "),o("div",{staticClass:"col-2 text-center py-0"},[this.$root.authProfile.name?[o("v-btn",{attrs:{icon:""},on:{click:t.goToNotification}},[this.$root.authProfile.unread>0?o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1):o("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1)]:t._e()],2),t._v(" "),o("div",{staticClass:"col-2 d-flex px-1 py-0",staticStyle:{"justify-content":"center","align-items":"center"}},[this.$root.authProfile.name?[o("div",{style:t.imageStyleUser(32,this.$root.authProfile)})]:t._e()],2)]),t._v(" "),""!=t.profileName?[o("v-card",{staticClass:"d-flex flex-column px-1 py-2",staticStyle:{position:"absolute","border-radius":"0px",top:"110%",width:"100%","max-height":"400px","z-index":"99999999999999",left:"0px",height:"auto","overflow-y":"auto"}},t._l(t.fetchedUser,(function(e){return o("v-card",{key:e.user_temp_id,staticClass:"px-1 py-2 d-flex flex-row",staticStyle:{"border-bottom":"1px solid #c5c5c5","align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(o){return t.goToProfile(e)}}},[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(e.name)+" "),o("span",{staticStyle:{"font-family":"BodyFont"}},[t._v("@"+t._s(e.username))])])])])})),1)]:t._e()],2)],1)])])}),[],!1,null,"e3b0cc64",null);e.default=a.exports}}]);