(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{351:function(t,e,o){var s=o(570);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,a);s.locals&&(t.exports=s.locals)},569:function(t,e,o){"use strict";var s=o(351);o.n(s).a},570:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.messagesBadges[data-v-225f87ec]{\n    \n    color: #ffffff;\n    background: #3C87CD;\n    font-size: 11px;\n    font-family: BodyFont;\n    font-weight: bolder;\n    align-items: center;\n    justify-content: center;\n    height:20px;\n    width:20px;\n    border-radius:50%;\n}\n.messageBox[data-v-225f87ec]:hover{\n    background:whitesmoke;\n    cursor: pointer;\n}\n\n",""])},665:function(t,e,o){"use strict";o.r(e);var s={data:function(){return{that:this,loading:!1,diaryNotes:null}},mounted:function(){this.$root.componentIsLoading=!1,this.fetchDiaryNote()},methods:{selectDiaryNote:function(t){this.$root.channelBottomComp&&(this.$root.channelBottomComp.contentInWord=t.patterns[0].pattern_content,this.$root.channelBottomComp.input=t.patterns[0].pattern_content,this.$root.channelBottomComp.sendMessage(!1),this.clearTracker(t)),this.close()},fetchDiaryNote:function(){var t=this;this.loading=!0,this.$root.getLocalStore("diary_notes_"+this.$root.selectedSpace.space_id+this.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);o=o.diary_notes,t.diaryNotes=o,t.$root.diaryNotes=o,t.loading=!1,t.checkForNewNotes()}else axios.get("/fetch-diary-notes-"+t.$root.selectedSpace.bot_data.bot_id).then((function(e){if(200==e.status){t.$root.LocalStore("diary_notes_"+t.$root.selectedSpace.space_id+t.$root.username,e.data);var o=e.data.diary_notes;t.diaryNotes=o,t.$root.diaryNotes=o,t.loading=!1}})).catch((function(e){t.loading=!1}))}))},clearTracker:function(t){var e=this;axios.post("/clear-update-track",{space_id:this.$root.selectedSpace.space_id,note_id:t.tag_unique_id}).then((function(o){200==o.status&&(e.$root.diaryNotes.map((function(e){t.tag_unique_id==e.tag_unique_id&&(t.changes=0,t.is_new=!1)})),e.$root.LocalStore("diary_notes_"+e.$root.selectedSpace.space_id+e.$root.username,e.$root.diaryNotes))})).catch((function(t){}))},checkForNewNotes:function(){var t=this;axios.get("/fetch-diary-notes-"+this.$root.selectedSpace.bot_data.bot_id).then((function(e){if(200==e.status){t.$root.LocalStore("diary_notes_"+t.$root.selectedSpace.space_id+t.$root.username,e.data);var o=e.data.diary_notes;t.diaryNotes=o,t.$root.diaryNotes=o}})).catch((function(t){}))},close:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.chatInnerSideBar=!1}}},a=(o(569),o(4)),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{background:"transparent"}},[o("div",{staticClass:"col-12 py-1 my-0 "},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 py-0 px-1"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"col-2 py-0 mr-1 px-1 text-right"})]),t._v(" "),o("div",{staticClass:"col-12 "},[null==t.diaryNotes?o("div",{staticClass:"col-12 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1):t._e(),t._v(" "),null!=t.diaryNotes?[0==t.diaryNotes.length?o("div",{staticClass:"col-12 d-flex flex-column text-center"},[o("div",{staticStyle:{"font-size":"13px",color:"gray"}},[t._v(" No notes yet")])]):t._e(),t._v(" "),t.diaryNotes.length>0?o("div",{staticClass:"row px-2"},t._l(t.diaryNotes,(function(e,s){return o("v-card",{key:s,staticClass:"col-12 py-2 px-1 messageBox",staticStyle:{"border-bottom":"1px solid #cccccc"},attrs:{flat:"",color:e.is_new?"#E1F0FC":"",tile:""},on:{click:function(o){return o.stopPropagation(),t.selectDiaryNote(e)}}},[o("div",{staticClass:"row py-0 my-0"},[o("div",{staticClass:"col-2 py-0 my-0"},[o("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("lar la-clipboard")])],1),t._v(" "),o("div",{staticClass:"col-8 py-0 my-0 text-center"},[o("span",{staticStyle:{"font-size":"13px",color:"#1e4148","font-family":"MediumFont"}},[t._v(" "+t._s(e.tag_name))])]),t._v(" "),o("div",{staticClass:"col-2 py-0 my-0 text-center d-flex",staticStyle:{"align-items":"center"}},[e.changes>0?o("span",{staticClass:"messagesBadges d-flex ml-lg-0 ml-0"},[t._v(t._s(e.changes))]):t._e()])])])})),1):t._e()]:t._e()],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 py-0 px-0 text-center"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Diary Notes")])])}],!1,null,"225f87ec",null);e.default=i.exports}}]);