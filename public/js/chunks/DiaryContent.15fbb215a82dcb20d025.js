(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{321:function(t,e,o){var a=o(460);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(25)(a,i);a.locals&&(t.exports=a.locals)},459:function(t,e,o){"use strict";var a=o(321);o.n(a).a},460:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.handle[data-v-8486b314]{\n  cursor: move;\n}\n.ghost[data-v-8486b314] {\n  opacity: 0.5;\n  background: whitesmoke;\n  border:1px solid whitesmoke;\n  border-radius: 7px;\n}\n.scroller[data-v-8486b314]::-webkit-scrollbar {\n  width: 5px;\n}\n.scroller[data-v-8486b314]::-webkit-scrollbar-thumb {\n  background-color:  #3C87CD;\n  outline: 1px solid  #3C87CD;\n}\n",""])},617:function(t,e,o){"use strict";o.r(e);var a=o(364),i={data:function(){return{that:this,drag:!1,loading:!1,loadingAddNote:!1}},components:{draggable:o.n(a).a},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},mounted:function(){this.$root.showMobileHub=!1,this.getdiaryData()},methods:{checkDatereal:function(t){var e=moment(t).add(1,"hours");return moment(e).format("MMM D,YYYY")},calculateView:function(){var t=0;return this.$root.selectedDiary.notes&&this.$root.selectedDiary.notes.forEach((function(e){t+=e.note.views})),t},shareDiary:function(){this.$root.shareLink="https://www.citonhub.com/link/diary/"+this.$route.params.diary_id,this.$root.shareText="Check out my diary on Citonhub",this.$root.infoText="Share your diary with others",this.$root.alertComponent=this.$root.diaryBoardComponent,this.$root.showInvitation=!0},addNote:function(){var t=this;this.loadingAddNote=!0,axios.get("/add-new-note/"+this.$route.params.diary_id).then((function(e){200==e.status&&(t.$root.noteContent=e.data,t.$root.selectedDiary.notes.push(e.data),t.loadingAddNote=!1,t.saveNoteOrder(!1),t.$root.selectedDiary.updated=!1,t.$router.push({path:"/board/diary/board/"+t.$route.params.diary_id+"/edit-note/"+t.$root.noteContent.note.tag_unique_id}))})).catch((function(e){t.$root.diaryBoardComponent.showAlert("Oops!","Unable to add note,please try again","error"),t.loadingAddNote=!1}))},handleOnDrop:function(){this.drag=!1,this.saveNoteOrder()},saveNoteOrder:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=[];this.$root.selectedDiary.notes.forEach((function(t){o.push(t.note.tag_unique_id)})),axios.post("/save-note-order",{bot_id:this.$route.params.diary_id,notes:o}).then((function(o){200==o.status&&(e&&t.$root.diaryBoardComponent.showAlert("Saved!","Your changes have been saved","success"),t.$root.LocalStore("user_diary_data_"+t.$route.params.diary_id+t.$root.username,t.$root.selectedDiary))})).catch((function(e){t.$root.diaryBoardComponent.showAlert("Oops!","Unable to save changes,please try again","error")}))},showNote:function(t){this.$root.noteContent=t,this.$router.push({path:"/board/diary/board/"+this.$route.params.diary_id+"/edit-note/"+this.$root.noteContent.note.tag_unique_id})},imageStyle:function(t,e){if(null==e.background_color){var o="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:50%;background-repeat: no-repeat; border:5px solid #3C87CD;";return null==e.image_name||"0"==e.image_name?o+="background-color:whitesmoke; background-image:url(imgs/background1.jpg);":("default_1"==e.image_name&&(o+="background-color:whitesmoke; background-image:url(/imgs/background3.jpg);"),"default_2"==e.image_name&&(o+="background-color:whitesmoke; background-image:url(/imgs/background1.jpg);"),"default_3"==e.image_name&&(o+="background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);")),o}var a="height:"+t+"px;width:"+t+"px;background-size:cover;border-radius:50%;background-repeat: no-repeat;border:5px solid #3C87CD; ",i=e.image_name+"."+e.image_extension;return a+="background-color:"+e.background_color+"; background-image:url(/imgs/space/"+i+");"},getdiaryData:function(){var t=this;this.loading=!0,this.$root.getLocalStore("user_diary_data_"+this.$route.params.diary_id+this.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);t.$root.selectedDiary=o,t.loading=!1,t.updateNotes()}else axios.get("get-diary-data/"+t.$route.params.diary_id).then((function(e){200==e.status&&(t.$root.LocalStore("user_diary_data_"+t.$route.params.diary_id+t.$root.username,e.data.diary_data),t.$root.selectedDiary=e.data.diary_data,t.loading=!1)})).catch((function(e){t.loading=!1}))}))},updateNotes:function(){var t=this;axios.get("get-diary-data/"+this.$route.params.diary_id).then((function(e){200==e.status&&(t.$root.LocalStore("user_diary_data_"+t.$route.params.diary_id+t.$root.username,e.data.diary_data),t.$root.selectedDiary=e.data.diary_data,t.loading=!1)})).catch((function(e){t.loading=!1}))}}},s=(o(459),o(4)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"col-12 px-2 px-md-2 scroller",staticStyle:{position:"absolute",height:"92%",top:"6%",left:"0%","overflow-y":"auto","overflow-x":"hidden"}},[t.loading?[o("div",{staticClass:"col-12 mt-2 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[o("div",{staticClass:"col-12 px-0 px-md-2 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[o("div",{staticClass:"d-flex flex-column",staticStyle:{"align-items":"center","justify-content":"center"}},[o("div",{style:t.imageStyle(150,this.$root.selectedDiary)}),t._v(" "),o("div",{staticClass:"d-flex flex-row mt-2",staticStyle:{"align-items":"center","justify-content":"center"}},[o("div",{staticClass:"px-2 d-flex flex-column mx-2",staticStyle:{"align-items":"center","justify-content":"center"}},[o("div",[o("v-icon",{staticStyle:{"font-size":"26px"}},[t._v("las la-user-friends")])],1),t._v(" "),o("div",[o("span",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v("  "+t._s(this.$root.selectedDiary.users)+" ")])])]),t._v(" "),o("div",{staticClass:"px-2 d-flex flex-column mx-2",staticStyle:{"align-items":"center","justify-content":"center"}},[o("div",[o("v-icon",{staticStyle:{"font-size":"26px",cursor:"pointer"},on:{click:function(e){return t.shareDiary()}}},[t._v("mdi-share-variant")])],1),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"px-2 d-flex flex-column mx-2",staticStyle:{"align-items":"center","justify-content":"center"}},[t._m(1),t._v(" "),o("div",[o("span",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v(" "+t._s(t.calculateView())+" ")])])])])])]),t._v(" "),o("div",{staticClass:"col-md-8 px-1 px-md-2 offset-md-2 mt-3 col-lg-6 offset-lg-3 py-0 d-md-none "},[o("p",{staticStyle:{color:"#333333","font-size":"13px","font-family":"BodyFont"}},[t._v(t._s(this.$root.selectedDiary.description))])]),t._v(" "),o("div",{staticClass:"col-md-8 px-2 px-md-2 offset-md-2 mt-3 col-lg-6 offset-lg-3 py-0 d-md-block text-center d-none "},[o("p",{staticStyle:{color:"#333333","font-size":"13px","font-family":"BodyFont"}},[t._v(t._s(this.$root.selectedDiary.description))])]),t._v(" "),o("div",{staticClass:"py-2 pb-0 px-0 px-md-2  col-12 d-flex flex-row",staticStyle:{"align-items":"center"}},[o("div",{staticClass:"ml-1 ml-md-3 d-flex flex-row",staticStyle:{width:"100%","align-items":"center"}},[o("h5",{staticClass:"pt-1"},[t._v("Notes")]),t._v(" "),o("v-btn",{staticClass:"mx-1",attrs:{icon:"",loading:t.loadingAddNote},on:{click:t.addNote}},[o("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-plus")])],1)],1),t._v(" "),o("div",{staticClass:"d-flex flex-row-reverse"},[o("v-btn",{attrs:{icon:""}},[o("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-search")])],1)],1)]),t._v(" "),o("draggable",t._b({staticClass:"col-12  px-md-3  px-0 py-0 d-flex flex-row flex-wrap",attrs:{tag:"div",handle:".handle"},on:{start:function(e){t.drag=!0},end:t.handleOnDrop},model:{value:t.that.$root.selectedDiary.notes,callback:function(e){t.$set(t.that.$root.selectedDiary,"notes",e)},expression:"that.$root.selectedDiary.notes"}},"draggable",t.dragOptions,!1),t._l(t.that.$root.selectedDiary.notes,(function(e){return o("div",{key:e.id,staticClass:"col-md-6 col-lg-4 px-1"},[o("div",{staticStyle:{cursor:"pointer"},on:{click:function(o){return t.showNote(e)}}},[o("v-card",{staticClass:"px-2 py-2",staticStyle:{"align-items":"center"}},[o("div",{staticClass:"d-flex flex-row"},[o("div",{staticClass:"d-flex flex-row",staticStyle:{width:"100%","align-items":"center"}},[o("v-icon",{staticClass:"mr-2 handle",staticStyle:{"font-size":"25px"},attrs:{color:"#3C87CD"}},[t._v("lar la-clipboard")]),t._v(" "),o("div",{staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(" "+t._s(e.note.tag_name)+" \n                  "),o("span",{staticClass:" mx-1",staticStyle:{"font-size":"11px","font-family":"BodyFont",color:"gray"}},[t._v("\n                    \n                     "+t._s(t.checkDatereal(e.note.created_at))+"\n                 \n                 ")])])],1),t._v(" "),o("div",{staticClass:"d-flex flex-row-reverse",staticStyle:{"align-items":"center"}},[o("v-btn",{attrs:{icon:""}},[o("v-icon",{staticStyle:{"font-size":"23px"}},[t._v("las la-ellipsis-v")])],1),t._v(" "),o("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[o("v-icon",{staticStyle:{"font-size":"20px",color:"grey"}},[t._v("las la-eye")]),t._v(" "),o("div",{staticClass:"px-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v(t._s(e.note.views))])],1)],1)])])],1)])})),0)]],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticStyle:{"font-size":"11px","font-family":"BodyFont"}},[this._v(" share ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"lar la-eye",staticStyle:{"font-size":"26px",color:"grey"}})])}],!1,null,"8486b314",null);e.default=r.exports}}]);