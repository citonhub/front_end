(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{379:function(t,e,a){var o=a(742);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(25)(o,s);o.locals&&(t.exports=o.locals)},741:function(t,e,a){"use strict";var o=a(379);a.n(o).a},742:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.scroller[data-v-11811c89]::-webkit-scrollbar {\n  height: 5px;\n}\n.scroller[data-v-11811c89]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n\n",""])},837:function(t,e,a){"use strict";a.r(e);var o=a(244),s=a.n(o),n=(a(242),{mounted:function(){this.checkState()},components:{},computed:{},data:function(){return{participants:[],selecetedPanelId:"",pageContent:"",selectedParticipantId:"",loading:!1,saveLoading:!1,Alert:!1,alertMsg:"",rating:0,participantSelected:[],recheckCodeBox:!0,votes:[],PanelIsWeb:!0}},methods:{showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;"info"==a&&s.a.info({title:t,message:e,zindex:"9999999999",timeout:5e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==a&&s.a.success({title:t,message:e,zindex:"9999999999",timeout:5e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==a&&s.a.warning({title:t,message:e,timeout:5e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==a&&s.a.error({title:t,message:e,zindex:"9999999999",timeout:5e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},goTopanel:function(){this.$router.push({path:"/board/projects/panel/"+this.participantSelected.project_slug})},checkState:function(){this.loading=!0,this.fetchParticipants()},goBack:function(){this.$root.showResultPage=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/")},showPage:function(t){this.pageContent="",this.loading=!0,this.participantSelected=t,this.selectedParticipantId=t.id,this.selecetedPanelId=t.panel_id,t.is_web?this.loadPageContent(this.selecetedPanelId):this.runCodeOnSandbox()},loadPageContent:function(t){var e=this;axios.get("/run-panel/"+t).then((function(t){200==t.status&&(e.loading=!1,e.pageContent=t.data)})).catch((function(t){e.showAlert("Oops!","Unable to load page content","error")}))},checkResponse:function(t){var e=this;axios.post("/check-for-submission",{token:t,langId:e.selectedLangId}).then((function(t){200==t.status&&("Accepted"==t.data[0].status.description?e.pageContent=t.data[0].stdout:"In Queue"==t.data[0].status.description?(e.pageContent="In Queue...",e.checkResponse(t.data[0].token)):"Processing"==t.data[0].status.description?(e.pageContent="Processing...",e.checkResponse(t.data[0].token)):e.pageContent=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr,e.$root.codeBoxOpened,e.recheckCodeBox=!0)})).catch((function(t){e.pageContent="An issue occured,unable to run on sandbox..."}))},runCodeOnSandbox:function(){var t=this;axios.post("/run-code-on-sandbox-project",{panel_id:this.selecetedPanelId}).then((function(e){if(200==e.status){var a=e.data[0][0].token;"Accepted"==e.data[0][0].status.description?t.pageContent=e.data[0][0].stdout:"In Queue"==e.data[0][0].status.description?(t.pageContent="In Queue...",t.checkResponse(a,e.data[1])):"Processing"==e.data[0][0].status.description?(t.pageContent="Processing...",t.checkResponse(a,e.data[1])):t.pageContent=e.data[0][0].stdout+"\n Error: \n"+e.data[0][0].stderr}})).catch((function(e){t.pageContent="An issue occured,unable to run on sandbox..."}))},fetchParticipants:function(){var t=this;axios.get("/fetch-challenge-participants/"+this.$route.params.challenge_id).then((function(e){200==e.status&&(t.participants=e.data.participants,t.votes=e.data.votes,t.selectedParticipantId="",t.participants[0]&&t.showPage(t.participants[0]))})).catch((function(e){t.showAlert("Oops!","Unable to fetch participants","error")}))},SaveVotes:function(){var t=this;setTimeout((function(){0!=t.votes.length&&(t.saveLoading=!0,axios.post("/save-challenge-votes",{votes:t.votes}).then((function(e){200==e.status&&(t.saveLoading=!1,t.showAlert("Nice!","Your votes have been save","success"))})).catch((function(e){t.saveLoading=!1,t.showAlert("Oops!","Unable to save votes","error")})))}),1e3)}}}),i=(a(741),a(4)),c=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",height:"100%",width:"100%"}},[a("div",{staticClass:"col-12 my-0 py-2 d-flex  scroller ",staticStyle:{"overflow-x":"auto","white-space":"nowrap","z-index":"9999999999","border-top-left-radius":"6px","border-top-right-radius":"6px",left:"0",background:"#F3F8FC"}},[a("v-btn",{staticClass:"d-inline-block",staticStyle:{position:"sticky",left:"0px"},attrs:{small:"",icon:""},on:{click:t.goBack}},[a("v-icon",{attrs:{color:"#3C87CD"}},[t._v("mdi mdi-close mdi-18px")])],1),t._v(" "),t._l(t.participants,(function(e,o){return a("v-chip",{key:o,staticClass:"ma-1 mx-1 ml-0 fileText d-inline-block",style:t.selecetedPanelId==e.panel_id?"color:white;background-color:#3C87CD;":"background:transparent;border:1px solid #3C87CD;",attrs:{small:""},on:{click:function(a){return t.showPage(e)}}},["user"==e.type?a("span",[t._v(t._s(e.username))]):t._e(),t._v(" "),"team"==e.type?a("span",[t._v(t._s(e.team.name))]):t._e()])}))],2),t._v(" "),""==t.pageContent&&t.loading?a("div",{staticClass:" px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex",staticStyle:{border:"0",height:"80%",top:"5%",left:"0","z-index":"99999999999","align-items":"center","justify-content":"center"}},[a("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1):t._e(),t._v(" "),""!=t.pageContent&&t.participantSelected.is_web?a("iframe",{staticClass:"col-12 mt-0  px-0 py-0",staticStyle:{height:"100%",background:"white",border:"1px solid transparent","border-radius":"0px","z-index":"9999999999"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.pageContent}}):t._e(),t._v(" "),""==t.pageContent||t.participantSelected.is_web?t._e():a("textarea",{staticClass:"col-12 mt-0 mt-md-1",staticStyle:{"font-size":"14px",top:"0",height:"100%",left:"0",background:"white",border:"1px solid transparent","border-radius":"0px"},attrs:{readonly:""}}),t._v(" "),a("div",{staticClass:"py-2 px-2",staticStyle:{position:"absolute",width:"100%",left:"0%",bottom:"0%",background:"rgba(60, 135, 205)","z-index":"9999999999999999999"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 py-0 px-0"}),t._v(" "),a("div",{staticClass:"col-6 py-0 px-0 d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[0!=t.votes.length?[""==t.selectedParticipantId?a("span",[a("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-star")]),a("span",{staticClass:"px-1",staticStyle:{"font-size":"12px",color:"white"}},[t._v(t._s(t.$t("duels.votes")))])],1):t._e(),t._v(" "),"vote"==this.$route.params.type?t._l(t.votes,(function(e,o){return a("div",{key:o},[e.participant_id==t.selectedParticipantId?a("v-rating",{attrs:{color:"#ffffff"},on:{input:function(e){return t.SaveVotes()}},model:{value:e.stars,callback:function(a){t.$set(e,"stars",a)},expression:"vote.stars"}}):t._e()],1)})):a("div",[a("span",[a("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-star")]),a("span",{staticClass:"px-1",staticStyle:{"font-size":"13px",color:"white"}},[t._v(t._s(t.participantSelected.votes)+" "+t._s(t.$t("duels.votes")))])],1)])]:a("div",[a("span",[a("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-star")]),a("span",{staticClass:"px-1",staticStyle:{"font-size":"13px",color:"white"}},[t._v(t._s(t.participantSelected.votes)+" "+t._s(t.$t("duels.votes")))])],1)])],2),t._v(" "),a("div",{staticClass:"col-3 py-0 px-0"})])]),t._v(" "),a("v-btn",{staticClass:"d-inline-block ",staticStyle:{"z-index":"999999999999999",position:"absolute",bottom:"8%",right:"2%"},attrs:{medium:"",fab:"",color:"#3C87CD"},on:{click:t.goTopanel}},[a("v-icon",{staticStyle:{"font-size":"25px",color:"white"}},[t._v("las la-laptop-code")])],1)],1)}),[],!1,null,"11811c89",null);e.default=c.exports}}]);