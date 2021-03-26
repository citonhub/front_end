(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{662:function(t,o,e){"use strict";e.r(o);var i=e(243),n=e.n(i),a=(e(242),{data:function(){return{that:this,loadingUpdate:!1,loadingSaveNote:!1}},mounted:function(){this.$root.diaryBoardComponent=this},methods:{goBack:function(){this.$root.AddModalIsUp?this.$root.AddModalIsUp=!1:window.history.length>1?this.$router.go(-1):this.$router.push("/")},editDiary:function(){this.$router.push({path:"/board/diary/create-diary/edit"})},viewDiary:function(){this.$root.sideBarComponent&&(this.$root.sideBarComponent.selectedTab="channels"),this.$root.autoOpenDiary=!0,this.$root.tempDiaryId=this.$route.params.diary_id,this.$router.push({path:"/channels"})},updateDiary:function(){var t=this;this.loadingUpdate=!0,axios.get("/update-dairy-"+this.$route.params.diary_id).then((function(o){200==o.status&&(t.loadingUpdate=!1,t.$root.selectedDiary.updated=!0,t.showAlert("Updated!","Your changes have been updated","success"),console.log(o.data))})).catch((function(o){t.loadingUpdate=!1,t.showAlert("Oops!","Unable to update, please try again","error")}))},saveNote:function(){var t=this;this.loadingSaveNote=!0;var o=[];this.$root.noteContent.pages.forEach((function(t){var e={name:t.name,slug:t.slug};o.push(e)})),axios.post("/update-note-data",{note:this.$root.noteContent.note,keywords:this.$root.noteContent.keywords,pages:o,bot_id:this.$route.params.diary_id}).then((function(o){200==o.status&&(t.showAlert("Saved!","Please update diary to effect changes","success"),t.loadingSaveNote=!1)})).catch((function(o){t.showAlert("Oops!","Unable to update, please try again","error"),t.loadingSaveNote=!1}))},showAlert:function(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;"info"==i&&n.a.info({title:o,timeout:2e3,message:e,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==i&&n.a.success({title:o,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==i&&n.a.warning({title:o,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==i&&n.a.error({title:o,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"question"==i&&n.a.question({timeout:null,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,title:o,message:e,position:"center",buttons:[["<button><b>YES</b></button>",function(o,e){axios.post("/delete-intent-tag-"+t.$root.intentToDelete).then((function(o){if(200==o.status){var e=t.$root.selectedDiary.notes.filter((function(o){return o.note.tag_unique_id!=t.$root.intentToDelete}));t.$root.selectedDiary.notes=e,t.$root.LocalStore("user_diary_data_"+t.$route.params.diary_id+t.$root.username,t.$root.selectedDiary),t.$root.intentToDelete="",t.$root.diaryBoardComponent.showAlert("Deleted!","Note was deleted","success"),t.saveNoteOrder(!1)}})).catch((function(o){t.$root.diaryBoardComponent.showAlert("Oops!","Unable to delete note","error")})),o.hide({transitionOut:"fadeOut"},e,"button")},!0],["<button>NO</button>",function(t,o){t.hide({transitionOut:"fadeOut"},o,"button")}]]})},saveNoteOrder:function(){var t=this,o=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=[];this.$root.selectedDiary.notes.forEach((function(t){e.push(t.note.tag_unique_id)})),axios.post("/save-note-order",{bot_id:this.$route.params.diary_id,notes:e}).then((function(e){200==e.status&&(o&&t.$root.diaryBoardComponent.showAlert("Saved!","Your changes have been saved","success"),t.$root.LocalStore("user_diary_data_"+t.$route.params.diary_id+t.$root.username,t.$root.selectedDiary))})).catch((function(o){t.$root.diaryBoardComponent.showAlert("Oops!","Unable to save changes,please try again","error")}))}}}),s=e(5),r=Object(s.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"col-lg-10 offset-lg-2 py-0 px-0",staticStyle:{position:"fixed",height:"88%",left:"0",top:"10%","z-index":"99999999999999","overflow-y":"auto",background:"#F5F5FB"}},[e("div",{staticClass:"col-lg-10 offset-lg-1  mb-0 col-md-10 offset-md-1 px-0 d-md-block d-none py-0 pb-3 px-0 ",staticStyle:{position:"absolute",left:"0%",top:"0%",height:"100%",background:"#ffffff",border:"1px solid #c5c5c5","border-radius":"6px","overflow-y":"hidden","overflow-x":"hidden"}},[e("div",{staticClass:"col-12 px-1 py-1 pt-0 d-flex flex-row ",staticStyle:{"z-index":"99999999999999999",position:"sticky",background:"white",top:"0%","border-bottom":"1px solid #c5c5c5","align-items":"center"}},[e("div",{staticClass:"px-1 col-3 py-0"},[e("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[e("v-icon",[t._v("mdi mdi-arrow-left")])],1)],1),t._v(" "),e("div",{staticClass:"col-6 py-0 text-center"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v(" "+t._s(this.$root.selectedDiary.name))])]),t._v(" "),e("div",{staticClass:"col-3 py-0 px-1 text-right"},[this.$router.currentRoute.path.indexOf("edit-note")>=0?[e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",loading:t.loadingSaveNote,color:"#3C87CD"},on:{click:t.saveNote}},[[e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Save")])]],2)]:[this.$root.selectedDiary.updated?[e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder","font-family":"MediumFont"},attrs:{small:"",outlined:"",rounded:"",color:"#3C87CD"},on:{click:t.editDiary}},[e("span",{staticStyle:{"text-transform":"none"}},[t._v("Edit")])]),t._v(" "),e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder","font-family":"MediumFont"},attrs:{small:"",outlined:"",rounded:"",color:"#3C87CD"},on:{click:t.viewDiary}},[e("span",{staticStyle:{"text-transform":"none"}},[t._v("View")])])]:[e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{loading:t.loadingUpdate,small:"",rounded:"",color:"#3C87CD"},on:{click:function(o){return t.updateDiary()}}},[e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Update")])])]]],2)]),t._v(" "),e("router-view")],1)]),t._v(" "),e("div",{staticClass:"col-12 py-0 mb-0  px-0 d-md-none d-block py-0 px-0 ",staticStyle:{position:"fixed",left:"0%",top:"0%",height:"100%","z-index":"999999999999999999",background:"#ffffff","overflow-y":"hidden","overflow-x":"hidden"}},[e("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row ",staticStyle:{position:"sticky",background:"white",top:"-1%","border-bottom":"1px solid #c5c5c5","align-items":"center"}},[e("div",{staticClass:"px-1 col-3 py-0"},[e("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[e("v-icon",[t._v("mdi mdi-arrow-left")])],1)],1),t._v(" "),e("div",{staticClass:"col-6 py-0 text-center"},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(" "+t._s(this.$root.selectedDiary.name))])]),t._v(" "),e("div",{staticClass:"col-3 py-0 px-1 text-right"},[this.$router.currentRoute.path.indexOf("edit-note")>=0?[e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",loading:t.loadingSaveNote,rounded:"",color:"#3C87CD"},on:{click:t.saveNote}},[[e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Save")])]],2)]:[this.$root.selectedDiary.updated?[e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder","font-family":"MediumFont"},attrs:{small:"",outlined:"",rounded:"",color:"#3C87CD"},on:{click:t.viewDiary}},[e("span",{staticStyle:{"text-transform":"none"}},[t._v("View")])])]:[e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",loading:t.loadingUpdate,rounded:"",color:"#3C87CD"},on:{click:function(o){return t.updateDiary()}}},[e("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Update")])])]]],2)]),t._v(" "),e("router-view")],1)])}),[],!1,null,"e7ce9ba4",null);o.default=r.exports}}]);