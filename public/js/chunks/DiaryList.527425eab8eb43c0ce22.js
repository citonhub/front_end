(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{334:function(t,i,e){var a=e(533);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(25)(a,o);a.locals&&(t.exports=a.locals)},532:function(t,i,e){"use strict";var a=e(334);e.n(a).a},533:function(t,i,e){(t.exports=e(24)(!1)).push([t.i,"\n.challengeBox[data-v-5ca8187c]{\n  background:#ffffff !important;\n  cursor: pointer;\n}\n.challengeBox[data-v-5ca8187c]:hover{\n  background:transparent !important;\n  cursor: pointer;\n}\n \n",""])},626:function(t,i,e){"use strict";e.r(i);var a={data:function(){return{Diaries:[],loadingDiary:!1,loadingSearchDairy:!1}},mounted:function(){this.$root.showTopBar=!0,this.fetchUserDiary()},methods:{createDiary:function(){this.$router.push({path:"/board/diary/create-diary/new"})},getDiaryContent:function(t){this.$router.push({path:"/board/diary/board/"+t.bot_id+"/content"})},imageStyle:function(t,i){if(null==i.background_color){var e="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:50%;background-repeat: no-repeat; ";return null==i.image_name||"0"==i.image_name?e+="background-color:whitesmoke; background-image:url(imgs/background1.jpg);":("default_1"==i.image_name&&(e+="background-color:whitesmoke; background-image:url(/imgs/background3.jpg);"),"default_2"==i.image_name&&(e+="background-color:whitesmoke; background-image:url(/imgs/background1.jpg);"),"default_3"==i.image_name&&(e+="background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);")),e}var a="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:50%;background-repeat: no-repeat; ",o=i.image_name+"."+i.image_extension;return a+="background-color:"+i.background_color+"; background-image:url(/imgs/space/thumbnails/"+o+");"},checkForNewDiary:function(){var t=this;axios.get("/get-user-diary").then((function(i){200==i.status&&(t.$root.LocalStore("user_diary_"+t.$root.username,i.data.user_diary),t.$root.diaryList=i.data.user_diary)})).catch((function(t){}))},fetchUserDiary:function(){var t=this;this.loadingDiary=!0,this.$root.getLocalStore("user_diary_"+this.$root.username).then((function(i){if(null!=i){var e=JSON.parse(i);t.$root.diaryList=e,t.loadingDiary=!1,t.checkForNewDiary()}else axios.get("/get-user-diary").then((function(i){200==i.status&&(t.$root.LocalStore("user_diary_"+t.$root.username,i.data.user_diary),t.$root.diaryList=i.data.user_diary,t.loadingDiary=!1)})).catch((function(i){t.loadingDiary=!1}))}))}}},o=(e(532),e(4)),s=Object(o.a)(a,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","z-index":"999999999999","border-bottom":"1px solid #c5c5c5"}},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-6  py-0 my-0 text-right"},[0!=this.$root.diaryList.length?e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:t.createDiary}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus")]),t._v(" "),e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Create a diary")])],1):t._e()],1)])]),t._v(" "),0!=this.$root.diaryList.length?e("v-btn",{staticClass:"d-md-none d-inline-block",staticStyle:{"z-index":"99999999",position:"fixed",bottom:"3%",right:"3%"},attrs:{fab:"",color:"#3C87CD"},on:{click:t.createDiary}},[e("v-icon",{staticStyle:{"font-size":"24px",color:"white"}},[t._v("las la-plus")])],1):t._e(),t._v(" "),e("div",{staticClass:"col-lg-10 offset-lg-1 py-0 pb-2 px-2 "},[e("div",{staticClass:"row "},[e("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"}),t._v(" "),this.$root.TopBarComponentBoard?[this.$root.TopBarComponentBoard.searchContent.length>0?[t._v("\noverflow-y:auto;overflow-x:hidden;\n\n\n           "),t._l(this.$root.diarySearchList,(function(i){return e("div",{key:i.id+"search",staticClass:"col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2"},[e("v-card",{staticClass:"py-2 px-1",staticStyle:{"border-radius":"7px"},on:{click:function(e){return t.getDiaryContent(i)}}},[e("div",{staticClass:"col-12 py-0 my-0 d-flex flex-row"},[e("div",{staticClass:"mr-2 py-2"},[e("div",{style:t.imageStyle(45,i)})]),t._v(" "),e("div",{staticClass:"text-left d-flex  py-1",staticStyle:{"overflow-x":"hidden",width:"100%","align-items":"center"}},[e("div",{staticClass:"pb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(i.name))])]),t._v(" "),e("div",{staticClass:" d-flex flex-row-reverse ml-1",staticStyle:{"overflow-x":"hidden","align-items":"center",width:"100%"}},[e("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[e("div",[e("v-icon",{staticClass:"pr-1",staticStyle:{"font-size":"22px"}},[t._v("las la-user-friends")])],1),t._v(" "),e("div",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v(" "+t._s(i.users)+" ")])])])])])],1)}))]:[t.loadingDiary?[e("div",{staticClass:"col-12 mt-4 text-center"},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[0==this.$root.diaryList.length?[e("div",{staticClass:"col-md-6 offset-md-3 px-md-4 py-1 px-2 mt-3 mt-md-5 text-center d-flex flex-column "},[t._m(1),t._v(" "),e("div",[e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"none","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD",rounded:""},on:{click:t.createDiary}},[t._v("Create a diary")])],1)])]:t._l(this.$root.diaryList,(function(i){return e("div",{key:i.id,staticClass:"col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2"},[e("v-card",{staticClass:"py-2 px-1",staticStyle:{"border-radius":"7px"},on:{click:function(e){return t.getDiaryContent(i)}}},[e("div",{staticClass:"col-12 py-0 my-0 d-flex flex-row"},[e("div",{staticClass:"mr-2 py-2"},[e("div",{style:t.imageStyle(45,i)})]),t._v(" "),e("div",{staticClass:"text-left d-flex  py-1",staticStyle:{"overflow-x":"hidden",width:"100%","align-items":"center"}},[e("div",{staticClass:"pb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(i.name))])]),t._v(" "),e("div",{staticClass:" d-flex flex-row-reverse ml-1",staticStyle:{"overflow-x":"hidden","align-items":"center",width:"100%"}},[e("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[e("div",[e("v-icon",{staticClass:"pr-1",staticStyle:{"font-size":"22px"}},[t._v("las la-user-friends")])],1),t._v(" "),e("div",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v(" "+t._s(i.users)+" ")])])])])])],1)}))]]]:t._e(),t._v(" "),e("div",{staticClass:"col-12 py-5 my-5"})],2)])],1)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-6 py-0 my-0"},[i("h5",[this._v("Diary")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mb-3 px-3",staticStyle:{"font-size":"13px",color:"black","font-family":"BodyFont"}},[this._v("\n                    Document "),i("span",{staticStyle:{"font-family":"MediumFont"}},[this._v("how you learn ")]),this._v(" , "),i("span",{staticStyle:{"font-family":"MediumFont"}},[this._v("what you learn")]),this._v(" and "),i("span",{staticStyle:{"font-family":"MediumFont"}},[this._v("share them with others")]),this._v(". You can help others improve, by sharing what you know!\n                    ")])}],!1,null,"5ca8187c",null);i.default=s.exports}}]);