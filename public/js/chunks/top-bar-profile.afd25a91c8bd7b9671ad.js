(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{716:function(t,o,e){"use strict";e.r(o);var i={data:function(){return{showSideBar:!1,searchType:"",that:this,profileName:""}},mounted:function(){this.$root.TopBarComponent=this},methods:{goToNotification:function(){this.$router.push({path:"/board/notifications"})},imageStyleUser:function(t,o){if(null==o.background_color){var e="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return e+="background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",a=o.image_name+"."+o.image_extension;return i+="background-color:"+o.background_color+"; background-image:url(/imgs/profile/"+a+");"},fetchSearchResult:function(){this.$router.push({path:"/profile-view/"+this.profileName})}}},a=e(4),s=Object(a.a)(i,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"col-12 d-none d-md-block py-0 px-2",staticStyle:{position:"absolute",top:"0",left:"0","font-family":"BodyFont"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-1 pb-0  text-left px-lg-4"},[e("v-btn",{staticClass:"mt-2  ",attrs:{icon:""},on:{click:function(o){t.that.$root.showSideBar=!0}}},[e("v-icon",{staticStyle:{"font-size":"25px",color:"black"}},[t._v("las la-bars")])],1)],1),t._v(" "),e("div",{staticClass:"col-lg-7 pb-0 col-md-10 offset-md-1 offset-lg-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-5 pb-1 text-center"},[e("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"Search for People",filled:"",dense:"","append-icon":"las la-search",rounded:""},on:{input:t.fetchSearchResult},model:{value:t.profileName,callback:function(o){t.profileName=o},expression:"profileName"}})],1),t._v(" "),e("div",{staticClass:"col-lg-2 pb-1 col-md-2 text-right"},[this.$root.authProfile.name?[e("v-btn",{attrs:{icon:""},on:{click:t.goToNotification}},[this.$root.authProfile.unread>0?e("v-badge",{attrs:{content:this.$root.authProfile.unread,color:"green"}},[e("v-icon",{staticStyle:{"font-size":"25px",color:"#263238"}},[t._v("las la-bell")])],1):e("v-icon",{staticStyle:{"font-size":"25px",color:"#263238"}},[t._v("las la-bell")])],1)]:t._e()],2),t._v(" "),e("div",{staticClass:"col-lg-4 pb-1 col-md-5 py-1 d-flex",staticStyle:{"justify-content":"center","align-items":"center"}},[e("div",{staticClass:"mb-5",staticStyle:{cursor:"pointer"}},[e("v-card",{staticClass:" d-flex   py-1 px-2",staticStyle:{"border-radius":"30px","justify-content":"center","align-items":"center"},attrs:{"elevation-2":""}},[this.$root.authProfile.name?[e("div",{staticClass:"d-inline-block mr-2",style:t.imageStyleUser(30,this.$root.authProfile)}),t._v(" "),e("span",{staticClass:"pr-1",staticStyle:{"font-family":"MediumFont","font-size":"13px",color:"black"}},[t._v(t._s(this.$root.authProfile.name))])]:t._e()],2)],1)])])])])]),t._v(" "),e("div",{staticClass:"col-12  d-md-none d-block py-2 ",staticStyle:{position:"absolute",top:"0",left:"0","font-family":"BodyFont","z-index":"99999999999999"}},[e("div",{staticClass:"row px-2"},[e("v-card",{staticClass:"col-12 py-2 px-1",staticStyle:{"border-radius":"7px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-2 py-0  text-center"},[e("v-btn",{attrs:{icon:""},on:{click:function(o){t.that.$root.showSideBar=!0}}},[e("v-icon",{staticStyle:{"font-size":"25px",color:"#263238"}},[t._v("las la-bars")])],1)],1),t._v(" "),e("div",{staticClass:"col-6 d-flex py-0 px-1",staticStyle:{"justify-content":"center","align-items":"center"}},[e("input",{staticClass:"py-2 px-2",staticStyle:{width:"100%",heigth:"100%","font-size":"12px"},attrs:{placeholder:"Search for people",type:"search"}})]),t._v(" "),e("div",{staticClass:"col-2 text-center py-0"},[this.$root.authProfile.name?[e("v-btn",{attrs:{icon:""},on:{click:t.goToNotification}},[this.$root.authProfile.unread>0?e("v-badge",{attrs:{dot:"",color:"green"}},[e("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1):e("v-icon",{staticStyle:{"font-size":"23px",color:"#263238"}},[t._v("las la-bell")])],1)]:t._e()],2),t._v(" "),e("div",{staticClass:"col-2 d-flex px-1 py-0",staticStyle:{"justify-content":"center","align-items":"center"}},[this.$root.authProfile.name?[e("div",{style:t.imageStyleUser(32,this.$root.authProfile)})]:t._e()],2)])])],1)])])}),[],!1,null,"7fa69f43",null);o.default=s.exports}}]);