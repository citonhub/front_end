(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{617:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{Alert:!1,that:this,alertMsg:"",pageContent:"",saveLoading:!1,projectData:[],rating:0,UserStar:[],userLoggedIn:!1,recheckCodeBox:!0}},components:{},mounted:function(){this.runCode()},methods:{showShare:function(){this.$root.shareText="Check out this project on CitonHub",this.$root.shareLink="https://www.citonhub.com/link/project/"+this.$route.params.project_slug+"/user",this.$root.showShare=!0},showFullPage:function(){window.open("/run-panel/"+this.projectData.panel_id,"_blank")},showLogin:function(){this.$root.checkIfUserIsLoggedIn("space")},checkLogin:function(){0==this.$root.user_temp_id?this.userLoggedIn=!1:this.userLoggedIn=!0},showComments:function(){this.$router.push({path:"/"+this.$route.params.project_slug+"/comments"})},showPanel:function(){this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/editor"})},showAlert:function(t,e){this.Alert=!0,this.alertMsg=e;var o=this;setTimeout((function(){o.Alert=!1}),t)},shortenContent:function(t,e){return t.length>e?t.slice(0,e)+"...":t},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},runCode:function(){1==this.$root.projectData.project.is_web?this.loadPageContent():(this.pageContent="sending to sandbox...",this.runCodeOnSandbox())},checkResponse:function(t){var e=this;axios.post("/check-for-submission",{token:t,langId:e.selectedLangId}).then((function(t){200==t.status&&("Accepted"==t.data[0].status.description?e.pageContent=t.data[0].stdout:"In Queue"==t.data[0].status.description?(e.pageContent="In Queue...",e.checkResponse(t.data[0].token)):"Processing"==t.data[0].status.description?(e.pageContent="Processing...",e.checkResponse(t.data[0].token)):e.pageContent=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr,e.$root.codeBoxOpened,e.recheckCodeBox=!0)})).catch((function(t){e.pageContent="An issue occured,unable to run on sandbox..."}))},runCodeOnSandbox:function(){var t=this;axios.post("/run-code-on-sandbox-project",{panel_id:this.$root.projectData.project_panel.panel_id}).then((function(e){if(200==e.status){var o=e.data[0][0].token;"Accepted"==e.data[0][0].status.description?t.pageContent=e.data[0][0].stdout:"In Queue"==e.data[0][0].status.description?(t.pageContent="In Queue...",t.checkResponse(o,e.data[1])):"Processing"==e.data[0][0].status.description?(t.pageContent="Processing...",t.checkResponse(o,e.data[1])):t.pageContent=e.data[0][0].stdout+"\n Error: \n"+e.data[0][0].stderr}})).catch((function(e){t.pageContent="An issue occured,unable to run on sandbox..."}))},loadPageContent:function(){var t=this;axios.get("/run-panel/"+this.$root.projectData.project_panel.panel_id).then((function(e){200==e.status&&(t.pageContent=e.data)})).catch((function(t){}))}}},s=o(4),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{background:"transparent","font-family":"BodyFont"}},[""==t.pageContent?o("div",{staticClass:" px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex",staticStyle:{border:"0",height:"80%",top:"5%",position:"absolute",left:"0","z-index":"99999999999","align-items":"center","justify-content":"center"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1):t._e(),t._v(" "),t.that.$root.projectData.project.is_web?o("iframe",{staticClass:"col-12 mt-0  px-0 py-0",staticStyle:{position:"absolute",height:"100%",left:"0",top:"0",background:"white",border:"1px solid #c5c5c5","border-radius":"0px"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.pageContent}}):o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pageContent,expression:"pageContent"}],staticClass:"col-12 mt-0 mt-md-1",staticStyle:{"font-size":"14px",position:"absolute",top:"0",height:"100%",left:"0",background:"white",border:"1px solid #c5c5c5","border-radius":"0px"},attrs:{readonly:""},domProps:{value:t.pageContent},on:{input:function(e){e.target.composing||(t.pageContent=e.target.value)}}}),t._v(" "),o("v-btn",{staticClass:"d-lg-inline-block d-none",staticStyle:{"z-index":"99999999",position:"absolute",bottom:"3%",right:"3%"},attrs:{medium:"",fab:"",color:"#3C87CD"},on:{click:t.showPanel}},[o("v-icon",{staticStyle:{"font-size":"25px",color:"white"}},[t._v("las la-code")])],1),t._v(" "),o("v-btn",{staticClass:"d-lg-none d-inline-block",staticStyle:{"z-index":"99999999",position:"fixed",bottom:"3%",right:"3%"},attrs:{fab:"",color:"#3C87CD"},on:{click:t.showPanel}},[o("v-icon",{staticStyle:{"font-size":"24px",color:"white"}},[t._v("las la-code")])],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);