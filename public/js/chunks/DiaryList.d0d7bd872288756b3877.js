(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{334:function(t,i,e){var o=e(535);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(25)(o,a);o.locals&&(t.exports=o.locals)},534:function(t,i,e){"use strict";var o=e(334);e.n(o).a},535:function(t,i,e){(t.exports=e(24)(!1)).push([t.i,"\n.challengeBox[data-v-6a3446e0]{\n  background:#ffffff !important;\n  cursor: pointer;\n}\n.challengeBox[data-v-6a3446e0]:hover{\n  background:transparent !important;\n  cursor: pointer;\n}\n \n",""])},632:function(t,i,e){"use strict";e.r(i);var o={data:function(){return{Diaries:[],loadingDiary:!1,loadingSearchDairy:!1}},mounted:function(){this.$root.showTopBar=!0,this.fetchUserDiary()},methods:{createDiary:function(){this.$router.push({path:"/board/diary/create-diary/new"})},discoverDiaries:function(){this.$router.push({path:"/board/diary/bank"})},getDiaryContent:function(t){this.$router.push({path:"/board/diary/board/"+t.bot_id+"/content"})},imageStyle:function(t,i){if(null==i.background_color){var e="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:50%;background-repeat: no-repeat; ";return null==i.image_name||"0"==i.image_name?e+="background-color:whitesmoke; background-image:url(imgs/background1.jpg);":("default_1"==i.image_name&&(e+="background-color:whitesmoke; background-image:url(/imgs/background3.jpg);"),"default_2"==i.image_name&&(e+="background-color:whitesmoke; background-image:url(/imgs/background1.jpg);"),"default_3"==i.image_name&&(e+="background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);")),e}var o="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:50%;background-repeat: no-repeat; ",a=i.image_name+"."+i.image_extension;return o+="background-color:"+i.background_color+"; background-image:url(/imgs/space/thumbnails/"+a+");"},checkForNewDiary:function(){var t=this;axios.get("/get-user-diary").then((function(i){200==i.status&&(t.$root.LocalStore("user_diary_"+t.$root.username,i.data.user_diary),t.$root.diaryList=i.data.user_diary)})).catch((function(t){}))},fetchUserDiary:function(){var t=this;this.loadingDiary=!0,this.$root.getLocalStore("user_diary_"+this.$root.username).then((function(i){if(null!=i){var e=JSON.parse(i);t.$root.diaryList=e,t.loadingDiary=!1,t.checkForNewDiary()}else axios.get("/get-user-diary").then((function(i){200==i.status&&(t.$root.LocalStore("user_diary_"+t.$root.username,i.data.user_diary),t.$root.diaryList=i.data.user_diary,t.loadingDiary=!1)})).catch((function(i){t.loadingDiary=!1}))}))}}},a=(e(534),e(4)),s=Object(a.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","z-index":"999999999999","border-bottom":"1px solid #c5c5c5"}},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-6  py-0 my-0 text-right"},[0!=this.$root.diaryList.length?e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:t.createDiary}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus")]),t._v(" "),e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Create a diary")])],1):t._e(),t._v(" "),e("v-btn",{staticClass:"mr-2",staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:t.discoverDiaries}},[e("v-icon",{staticStyle:{"font-size":"20px"},attrs:{color:"#ffffff"}},[t._v("mdi-book-multiple-outline")]),t._v(" "),e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Discover diaries")])],1)],1)])]),t._v(" "),0!=this.$root.diaryList.length?e("v-btn",{staticClass:"d-md-none d-inline-block",staticStyle:{"z-index":"99999999",position:"fixed",bottom:"3%",right:"3%"},attrs:{fab:"",color:"#3C87CD"},on:{click:t.createDiary}},[e("v-icon",{staticStyle:{"font-size":"24px",color:"white"}},[t._v("las la-plus")])],1):t._e(),t._v(" "),e("div",{staticClass:"col-lg-10 offset-lg-1 py-0 pb-2 px-2 "},[e("div",{staticClass:"row "},[e("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"}),t._v(" "),this.$root.TopBarComponentBoard?[this.$root.TopBarComponentBoard.searchContent.length>0?t._l(this.$root.diarySearchList,(function(i){return e("div",{key:i.id+"search",staticClass:"col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2"},[e("v-card",{staticClass:"py-2 px-1",staticStyle:{"border-radius":"7px"},on:{click:function(e){return t.getDiaryContent(i)}}},[e("div",{staticClass:"col-12 py-0 my-0 d-flex flex-row"},[e("div",{staticClass:"mr-2 py-2"},[e("div",{style:t.imageStyle(45,i)})]),t._v(" "),e("div",{staticClass:"text-left d-flex  py-1",staticStyle:{"overflow-x":"hidden",width:"100%","align-items":"center"}},[e("div",{staticClass:"pb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(i.name))])]),t._v(" "),e("div",{staticClass:" d-flex flex-row-reverse ml-1",staticStyle:{"overflow-x":"hidden","align-items":"center",width:"100%"}},[e("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[e("div",[e("v-icon",{staticClass:"pr-1",staticStyle:{"font-size":"22px"}},[t._v("las la-user-friends")])],1),t._v(" "),e("div",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v(" "+t._s(i.users)+" ")])])])])])],1)})):[t.loadingDiary?[e("div",{staticClass:"col-12 mt-4 text-center"},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[e("div",{staticClass:"col-12 text-center  px-2  pt-0 pb-2 d-md-none d-block"},[e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:t.discoverDiaries}},[e("v-icon",{staticStyle:{"font-size":"20px"},attrs:{color:"#ffffff"}},[t._v("mdi-book-multiple-outline")]),t._v(" "),e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Discover diaries")])],1)],1),t._v(" "),0==this.$root.diaryList.length?[e("div",{staticClass:"col-md-6 offset-md-3 px-md-4 py-1 px-2 mt-3 mt-md-5 text-center d-flex flex-column "},[t._m(1),t._v(" "),e("div",[e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"none","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD",rounded:""},on:{click:t.createDiary}},[t._v("Create a diary")])],1)])]:t._l(this.$root.diaryList,(function(i){return e("div",{key:i.id,staticClass:"col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2"},[e("v-card",{staticClass:"py-2 px-1",staticStyle:{"border-radius":"7px"},on:{click:function(e){return t.getDiaryContent(i)}}},[e("div",{staticClass:"col-12 py-0 my-0 d-flex flex-row"},[e("div",{staticClass:"mr-2 py-2"},[e("div",{style:t.imageStyle(45,i)})]),t._v(" "),e("div",{staticClass:"text-left d-flex  py-1",staticStyle:{"overflow-x":"hidden",width:"100%","align-items":"center"}},[e("div",{staticClass:"pb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(i.name))])]),t._v(" "),e("div",{staticClass:" d-flex flex-row-reverse ml-1",staticStyle:{"overflow-x":"hidden","align-items":"center",width:"100%"}},[e("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[e("div",[e("v-icon",{staticClass:"pr-1",staticStyle:{"font-size":"22px"}},[t._v("las la-user-friends")])],1),t._v(" "),e("div",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v(" "+t._s(i.users)+" ")])])])])])],1)}))]]]:t._e(),t._v(" "),e("div",{staticClass:"col-12 py-5 my-5"})],2)])],1)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"col-6 py-0 my-0"},[i("h5",[this._v("Diaries")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mb-3 px-3",staticStyle:{"font-size":"13px",color:"black","font-family":"BodyFont"}},[this._v("\n                    Document "),i("span",{staticStyle:{"font-family":"MediumFont"}},[this._v("how you learn ")]),this._v(" , "),i("span",{staticStyle:{"font-family":"MediumFont"}},[this._v("what you learn")]),this._v(" and "),i("span",{staticStyle:{"font-family":"MediumFont"}},[this._v("share them with others")]),this._v(". You can help others improve, by sharing what you know!\n                    ")])}],!1,null,"6a3446e0",null);i.default=s.exports}}]);