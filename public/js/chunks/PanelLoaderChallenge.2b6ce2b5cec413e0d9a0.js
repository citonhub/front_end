(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{366:function(t,e,n){var o=n(615);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(25)(o,a);o.locals&&(t.exports=o.locals)},614:function(t,e,n){"use strict";var o=n(366);n.n(o).a},615:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,"\n.scroller[data-v-7d01b5ce]::-webkit-scrollbar {\n  height: 5px;\n}\n.scroller[data-v-7d01b5ce]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n\n",""])},739:function(t,e,n){"use strict";n.r(e);var o=n(243),a=n.n(o),s=(n(242),{mounted:function(){this.checkState(),this.$root.panelLoaderProject=this},components:{},computed:{},data:function(){return{participants:[],selecetedPanelId:"",pageContent:"",selectedParticipantId:"",loading:!1,saveLoading:!1,Alert:!1,alertMsg:"",rating:0,participantSelected:[],recheckCodeBox:!0,votes:[],PanelIsWeb:!0}},methods:{showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;"info"==n&&a.a.info({title:t,message:e,zindex:"9999999999",timeout:1e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==n&&a.a.success({title:t,message:e,zindex:"9999999999",timeout:1e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==n&&a.a.warning({title:t,message:e,timeout:1e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==n&&a.a.error({title:t,message:e,zindex:"9999999999",timeout:1e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},checkIfCanVote:function(){var t=this;if(this.$root.selectedChallenge.judges)return"everyone"==this.$root.selectedChallenge.judges||this.$root.selectedChallenge.selected_judges.filter((function(e){return e.tempId==t.$root.user_temp_id})).length>0},goTopanel:function(){this.$root.panelFromChallenges=!0,this.$router.push({path:"/board/projects/panel/"+this.participantSelected.project_slug})},checkState:function(){this.fetchParticipants()},goBack:function(){this.$root.showResultPage=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/")},showPage:function(t){if(this.pageContent="",this.loading=!0,this.participantSelected=t,this.selectedParticipantId=t.id,this.selecetedPanelId=t.panel_id,t.is_web)this.loadPageContent(this.selecetedPanelId);else{if("present"==this.$root.checkCodeForInput(this.participantSelected.main_file_content,this.participantSelected.panel_language))return;this.pageContent="sending to sandbox...",this.runCodeOnSandbox(null)}},loadPageContent:function(t){var e=this;axios.get("/run-panel/"+t).then((function(t){200==t.status&&(e.loading=!1,e.pageContent=t.data)})).catch((function(t){e.showAlert("Oops!","Unable to load page content","error")}))},checkResponse:_.debounce((function(t){var e=this;axios.post("/check-for-submission",{token:t,langId:e.selectedLangId}).then((function(t){200==t.status&&("Accepted"==t.data[0].status.description?e.pageContent=t.data[0].stdout:"In Queue"==t.data[0].status.description?(e.pageContent="In Queue...",e.checkResponse(t.data[0].token)):"Processing"==t.data[0].status.description?(e.pageContent="Processing...",e.checkResponse(t.data[0].token)):e.pageContent=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr+" \n"+t.data[0].compile_output+"\n"+t.data[0].error,e.$root.codeBoxOpened,e.recheckCodeBox=!0)})).catch((function(t){e.pageContent="Oops! This participant hasn't written any codes yet."}))}),500),runCodeOnSandbox:function(t){var e=this;axios.post("/run-code-on-sandbox-project",{panel_id:this.selecetedPanelId,code_content:t}).then((function(t){if(200==t.status){var n=t.data[0][0].token;"Accepted"==t.data[0][0].status.description?e.pageContent=t.data[0][0].stdout:"In Queue"==t.data[0][0].status.description?(e.pageContent="In Queue...",e.checkResponse(n,t.data[1])):"Processing"==t.data[0][0].status.description?(e.pageContent="Processing...",e.checkResponse(n,t.data[1])):e.pageContent=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr+" \n"+t.data[0].compile_output+"\n"+t.data[0].error}})).catch((function(t){e.pageContent="Oops! This participant hasn't written any codes yet."}))},sortArray:function(t){t.sort((function(t,e){return e.stars-t.stars}))},fetchParticipants:function(){var t=this;axios.get("/fetch-challenge-participants/"+this.$route.params.challenge_id).then((function(e){200==e.status&&(t.participants=e.data.participants,t.$root.selectedChallenge=e.data.challenge[0],t.participants.sort((function(t,e){return e.stars-t.stars})),t.votes=e.data.votes,t.selectedParticipantId="")})).catch((function(e){t.showAlert("Oops!","Unable to fetch participants","error")}))},SaveVotes:function(){var t=this;setTimeout((function(){0!=t.votes.length&&(t.saveLoading=!0,axios.post("/save-challenge-votes",{votes:t.votes}).then((function(e){200==e.status&&(t.saveLoading=!1,t.showAlert("Nice!","Your votes have been save","success"))})).catch((function(e){t.saveLoading=!1,t.showAlert("Oops!","Unable to save votes","error")})))}),1e3)}}}),i=(n(614),n(4)),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"absolute",height:"100%",width:"100%"}},[n("div",{staticClass:"col-12 my-0 py-2 d-flex  scroller ",staticStyle:{"overflow-x":"auto","white-space":"nowrap","z-index":"9999999999","border-top-left-radius":"6px","border-top-right-radius":"6px",left:"0",background:"#F3F8FC"}},[n("v-btn",{staticClass:"d-inline-block",staticStyle:{position:"sticky",left:"0px",background:"white"},attrs:{small:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[n("v-icon",{attrs:{color:"#3C87CD"}},[t._v("mdi mdi-close mdi-18px")])],1),t._v(" "),t._l(t.participants,(function(e,o){return n("div",{key:o,staticClass:"ma-1 mx-1 ml-0 py-1 px-2 fileText d-inline-block",style:t.selecetedPanelId==e.panel_id?"color:white;background-color:#3C87CD;font-size:13px;border-radius:10px;":"background:transparent;border:1px solid #3C87CD;font-size:13px;border-radius:10px;",attrs:{small:""},on:{click:function(n){return t.showPage(e)}}},["user"==e.type?n("span",[t._v(t._s(e.username))]):t._e(),t._v(" "),"team"==e.type?n("span",[t._v(t._s(e.team.name))]):t._e()])}))],2),t._v(" "),""==t.pageContent&&t.loading?n("div",{staticClass:" px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex",staticStyle:{border:"0",height:"80%",top:"5%",left:"0","z-index":"99999999999","align-items":"center","justify-content":"center"}},[n("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1):t._e(),t._v(" "),""!=t.pageContent||t.loading?t._e():n("div",{staticClass:" px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex",staticStyle:{border:"0",height:"80%",top:"5%",left:"0","z-index":"99999999999","align-items":"center","justify-content":"center"}},[n("span",{staticStyle:{"font-size":"13px",color:"grey"}},[t._v("Click on participant name to view result")])]),t._v(" "),""!=t.pageContent&&t.participantSelected.is_web?n("iframe",{staticClass:"col-12 mt-0  px-0 py-0",staticStyle:{height:"100%",background:"white",border:"1px solid transparent","border-radius":"0px","z-index":"9999999999"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.pageContent}}):t._e(),t._v(" "),""==t.pageContent||t.participantSelected.is_web?t._e():n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pageContent,expression:"pageContent"}],staticClass:"col-12 mt-0 mt-md-1",staticStyle:{"font-size":"14px",color:"white",top:"0",height:"100%",left:"0",background:"black",border:"1px solid transparent","border-radius":"0px"},attrs:{readonly:""},domProps:{value:t.pageContent},on:{input:function(e){e.target.composing||(t.pageContent=e.target.value)}}}),t._v(" "),n("div",{staticClass:"py-2 px-2",staticStyle:{position:"absolute",width:"100%",left:"0%",bottom:"0%",background:"rgba(60, 135, 205)","z-index":"9999999999999999999"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-3 py-0 px-0"}),t._v(" "),n("div",{staticClass:"col-6 py-0 px-0 d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[0!=t.votes.length&&t.checkIfCanVote()?[""==t.selectedParticipantId?n("span",[n("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-star")]),n("span",{staticClass:"px-1",staticStyle:{"font-size":"12px",color:"white"}},[t._v(t._s(t.$t("duels.votes")))])],1):t._e(),t._v(" "),"vote"==this.$route.params.type?t._l(t.votes,(function(e,o){return n("div",{key:o},[e.participant_id==t.selectedParticipantId?n("v-rating",{attrs:{color:"#ffffff"},on:{input:function(e){return t.SaveVotes()}},model:{value:e.stars,callback:function(n){t.$set(e,"stars",n)},expression:"vote.stars"}}):t._e()],1)})):n("div",[n("span",[n("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-star")]),n("span",{staticClass:"px-1",staticStyle:{"font-size":"13px",color:"white"}},[t._v(t._s(t.participantSelected.votes)+" "+t._s(t.$t("duels.votes")))])],1)])]:n("div",[n("span",[n("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-star")]),n("span",{staticClass:"px-1",staticStyle:{"font-size":"13px",color:"white"}},[t._v(t._s(t.participantSelected.votes)+" "+t._s(t.$t("duels.votes")))])],1)])],2),t._v(" "),n("div",{staticClass:"col-3 py-0 px-0"})])]),t._v(" "),""!=t.selectedParticipantId&&t.checkIfCanVote()?n("v-btn",{staticClass:"d-inline-block ",staticStyle:{"z-index":"999999999999999",position:"absolute",bottom:"12%",right:"2%"},attrs:{medium:"",fab:"",color:"#3C87CD"},on:{click:t.goTopanel}},[n("v-icon",{staticStyle:{"font-size":"25px",color:"white"}},[t._v("las la-laptop-code")])],1):t._e()],1)}),[],!1,null,"7d01b5ce",null);e.default=r.exports}}]);