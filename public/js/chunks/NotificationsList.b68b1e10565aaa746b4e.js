(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{632:function(t,a,e){"use strict";e.r(a);var o={data:function(){return{notifications:[],loading:!1}},mounted:function(){this.$root.showTopBar=!0,this.getNotification()},methods:{checkDatereal:function(t){var a=moment(t).add(1,"hours"),e=moment().subtract(7,"days"),o=moment().subtract(1,"hours");return moment(a)>=e?moment(a)>=o?moment(a).fromNow():moment(a).format("h:mm a"):moment(a).calendar()},goToNotification:function(t){"new_connection"==t.type&&this.$router.push({path:"/profile/"+t.dataArray[0].username}),"diary_changes"==t.type&&(this.$root.autoOpenChat=!0,this.$root.autoOpenChatId=t.diary_space.space_id,this.$router.push({path:"/channels"})),"post_like"!=t.type&&"post_pinned"!=t.type&&"post_comment"!=t.type||(this.$root.autoOpenPost=!0,this.$root.autoOpenPostId=t.post_data.post_id,this.$router.push({path:"/hub/"}))},markAsRead:function(){axios.post("/mark-as-read").then((function(t){t.status})).catch((function(t){}))},getNotification:function(){var t=this;this.loading=!0,axios.get("/user-notification").then((function(a){200==a.status&&(t.notifications=a.data.notifications,t.$root.authProfile.unread=0,t.markAsRead(),t.loading=!1)})).catch((function(a){t.loading=!1}))},imageStyle:function(t,a,e,o){if(null==a.background_color){var n="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:"+e+";background-repeat: no-repeat; ";return null==a.image_name||"0"==a.image_name?n+="background-color:whitesmoke; background-image:url(imgs/background1.jpg);":("default_1"==a.image_name&&(n+="background-color:whitesmoke; background-image:url(/imgs/background3.jpg);"),"default_2"==a.image_name&&(n+="background-color:whitesmoke; background-image:url(/imgs/background1.jpg);"),"default_3"==a.image_name&&(n+="background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);")),n}var i="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:"+e+";background-repeat: no-repeat; ",s=a.image_name+"."+a.image_extension;return i+="background-color:"+a.background_color+"; background-image:url(/imgs/"+o+"/"+s+");"}}},n=e(4),i=Object(n.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0 pb-2 px-2 "},[e("div",{staticClass:"row "},[e("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"}),t._v(" "),t.loading?[e("div",{staticClass:"col-12 mt-4 text-center"},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[0==t.notifications.length?[e("div",{staticClass:"col-12 mt-4 "},[e("div",{staticClass:"mb-3 px-3",staticStyle:{"font-size":"14px",color:"black","font-family":"BodyFont"}},[e("p",[e("b",{staticStyle:{"font-family":"MediumFont","text-transform":"capitalize"}},[t._v(t._s(this.$root.authProfile.name))]),t._v(", welcome to CitonHub! ")]),t._v(" "),e("p",[t._v("Here is a brief description on each tab:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]:t._l(t.notifications,(function(a,o){return e("div",{key:o,staticClass:"col-12 d-flex flex-row px-0",staticStyle:{"align-items":"center",cursor:"pointer","border-bottom":"1px solid #c5c5c5"},on:{click:function(e){return t.goToNotification(a)}}},[e("div",{staticClass:"mx-2"},["new_connection"==a.type||"space_invitation"==a.type?[e("div",{style:t.imageStyle(40,a.dataArray[0],"50%","profile")})]:["diary_changes"==a.type?[e("div",{style:t.imageStyle(40,a.diary,"50%","space")})]:[e("div",{style:t.imageStyle(40,a.post_data,"8px","posts")})]]],2),t._v(" "),e("div",{staticClass:"pr-2"},["post_like"==a.type?[1==a.dataArray.length?[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username))])]:[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username)+" and "+t._s(a.dataArray.length-1)+" others")])],t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" liked your project,")]),t._v(" "),e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.post_data.title))])]:t._e(),t._v(" "),"post_comment"==a.type?[1==a.dataArray.length?[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username))])]:[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username)+" and "+t._s(a.dataArray.length-1)+" others")])],t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" commented on your project,")]),t._v(" "),e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.post_data.title))])]:t._e(),t._v(" "),"post_pinned"==a.type?[1==a.dataArray.length?[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username))])]:[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username)+" and "+t._s(a.dataArray.length-1)+" others")])],t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" pinned your project,")]),t._v(" "),e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.post_data.title))])]:t._e(),t._v(" "),"diary_changes"==a.type?[[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("You have "+t._s(a.dataArray.length)+" new \n                                "),a.dataArray.length>1?e("span",[t._v("updates")]):e("span",[t._v("update")])])],t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" from a diary - ")]),t._v(" "),e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.diary.name))])]:t._e(),t._v(" "),"new_connection"==a.type?[1==a.dataArray.length?[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username))]),t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" is now following you")])]:[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username)+" and "+t._s(a.dataArray.length-1)+" others")]),t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" are now following you")])]]:t._e(),t._v(" "),"space_invitation"==a.type?[e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(a.dataArray[0].username))]),t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" is inviting you to join ")]),e("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Js Interns")]),t._v(" "),e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",color:"#3C87CD",rounded:""}},[t._v("Accept")]),t._v(" "),e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",color:"#3C87CD",outlined:"",rounded:""}},[t._v("Decline")])]:t._e(),t._v(" "),e("span",{staticClass:"mx-1",staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"grey"}},[t._v(t._s(t.checkDatereal(a.created_at)))])],2)])}))],t._v(" "),e("div",{staticClass:"col-12 py-5 my-5"})],2)])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","z-index":"999999999999","border-bottom":"1px solid #c5c5c5"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 py-0 my-0"},[a("h5",[this._v("Notifications")])]),this._v(" "),a("div",{staticClass:"col-6  py-0 my-0 text-right"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("b",{staticStyle:{"font-family":"MediumFont"}},[this._v("1.) Channel:")]),this._v(" Create your channel and add a payment plan to earn from teaching people how to code. Voice chat, share your screen, and live code in your channel.\n")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("b",{staticStyle:{"font-family":"MediumFont"}},[this._v("2.) Challenges:")]),this._v(" Organize challenges in multiple languages to help others.\n")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("b",{staticStyle:{"font-family":"MediumFont"}},[this._v("3.) Showcase:")]),this._v(" Share your project with the community and get reviews. \n")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("b",{staticStyle:{"font-family":"MediumFont"}},[this._v("4.) Diaries:")]),this._v(" Document your teaching in diaries.\n")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("b",{staticStyle:{"font-family":"MediumFont"}},[this._v("5.) Wallet:")]),this._v(" Your earnings drop here. Pay out to your bank account from your wallet.\n")])}],!1,null,"3ff1266a",null);a.default=i.exports}}]);