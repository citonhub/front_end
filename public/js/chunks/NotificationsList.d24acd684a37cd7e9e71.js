(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{591:function(t,o,a){"use strict";a.r(o);var e={data:function(){return{notifications:[],loading:!1}},mounted:function(){this.$root.showTopBar=!0,this.getNotification()},methods:{checkDatereal:function(t){var o=moment(t).add(1,"hours"),a=moment().subtract(7,"days"),e=moment().subtract(1,"hours");return moment(o)>=a?moment(o)>=e?moment(o).fromNow():moment(o).format("h:mm a"):moment(o).calendar()},goToNotification:function(t){"new_connection"==t.type&&this.$router.push({path:"/profile/"+this.$root.username}),"post_like"!=t.type&&"post_pinned"!=t.type&&"post_comment"!=t.type||(this.$root.autoOpenPost=!0,this.$root.autoOpenPostId=t.post_data.post_id,this.$router.push({path:"/hub/"}))},markAsRead:function(){axios.post("/mark-as-read").then((function(t){t.status})).catch((function(t){}))},getNotification:function(){var t=this;this.loading=!0,axios.get("/user-notification").then((function(o){200==o.status&&(t.notifications=o.data.notifications,t.$root.authProfile.unread=0,t.markAsRead(),t.loading=!1)})).catch((function(o){t.loading=!1}))},imageStyle:function(t,o,a,e){if(null==o.background_color){var n="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:"+a+";background-repeat: no-repeat; ";return null==o.image_name||"0"==o.image_name?n+="background-color:whitesmoke; background-image:url(imgs/background1.jpg);":("default_1"==o.image_name&&(n+="background-color:whitesmoke; background-image:url(/imgs/background3.jpg);"),"default_2"==o.image_name&&(n+="background-color:whitesmoke; background-image:url(/imgs/background1.jpg);"),"default_3"==o.image_name&&(n+="background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);")),n}var i="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:"+a+";background-repeat: no-repeat; ",s=o.image_name+"."+o.image_extension;return i+="background-color:"+o.background_color+"; background-image:url(/imgs/"+e+"/"+s+");"}}},n=a(4),i=Object(n.a)(e,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0 pb-2 px-2 "},[a("div",{staticClass:"row "},[a("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"}),t._v(" "),t.loading?[a("div",{staticClass:"col-12 mt-4 text-center"},[a("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:t._l(t.notifications,(function(o,e){return a("div",{key:e,staticClass:"col-12 d-flex flex-row px-0",staticStyle:{"align-items":"center",cursor:"pointer","border-bottom":"1px solid #c5c5c5"},on:{click:function(a){return t.goToNotification(o)}}},[a("div",{staticClass:"mx-2"},["new_connection"==o.type||"space_invitation"==o.type?[a("div",{style:t.imageStyle(40,o.dataArray[0],"50%","profile")})]:[a("div",{style:t.imageStyle(40,o.post_data,"8px","posts")})]],2),t._v(" "),a("div",{staticClass:"pr-2"},["post_like"==o.type?[1==o.dataArray.length?[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username))])]:[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username)+" and "+t._s(o.dataArray.length-1)+" others")])],t._v(" "),a("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" liked your project,")]),t._v(" "),a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.post_data.title))])]:t._e(),t._v(" "),"post_comment"==o.type?[1==o.dataArray.length?[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username))])]:[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username)+" and "+t._s(o.dataArray.length-1)+" others")])],t._v(" "),a("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" commented on your project,")]),t._v(" "),a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.post_data.title))])]:t._e(),t._v(" "),"post_pinned"==o.type?[1==o.dataArray.length?[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username))])]:[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username)+" and "+t._s(o.dataArray.length-1)+" others")])],t._v(" "),a("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" pinned your project,")]),t._v(" "),a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.post_data.title))])]:t._e(),t._v(" "),"new_connection"==o.type?[1==o.dataArray.length?[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username))]),t._v(" "),a("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" is now following you")])]:[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username)+" and "+t._s(o.dataArray.length-1)+" others")]),t._v(" "),a("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" are now following you")])]]:t._e(),t._v(" "),"space_invitation"==o.type?[a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(o.dataArray[0].username))]),t._v(" "),a("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(" is inviting you to join ")]),a("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Js Interns")]),t._v(" "),a("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",color:"#3C87CD",rounded:""}},[t._v("Accept")]),t._v(" "),a("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",color:"#3C87CD",outlined:"",rounded:""}},[t._v("Decline")])]:t._e(),t._v(" "),a("span",{staticClass:"mx-1",staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"grey"}},[t._v(t._s(t.checkDatereal(o.created_at)))])],2)])})),t._v(" "),a("div",{staticClass:"col-12 py-5 my-5"})],2)])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","z-index":"999999999999","border-bottom":"1px solid #c5c5c5"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 py-0 my-0"},[o("h5",[this._v("Notifications")])]),this._v(" "),o("div",{staticClass:"col-6  py-0 my-0 text-right"})])])}],!1,null,"ddc3b95c",null);o.default=i.exports}}]);