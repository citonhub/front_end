(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{316:function(t,o,e){var i=e(451);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(25)(i,s);i.locals&&(t.exports=i.locals)},450:function(t,o,e){"use strict";var i=e(316);e.n(i).a},451:function(t,o,e){(t.exports=e(24)(!1)).push([t.i,"\n.scroller[data-v-7152f19d]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-7152f19d]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n",""])},653:function(t,o,e){"use strict";e.r(o);var i=e(243),s=e.n(i),r=(e(242),{data:function(){return{showSideBar:!1,that:this,loadingProject:!1,filesAreReady:!1,showMoreOptions:!1}},components:{panelSide:function(){return e.e(123).then(e.bind(null,695))},MoreOptions:function(){return e.e(77).then(e.bind(null,696))}},mounted:function(){this.$root.codeEditorArray=[],this.$root.codeEditorContent="",this.fetchProjectData(),this.$root.projectPanelComponent=this},methods:{showCode:function(t){this.$root.codeEditorComponent.showCode(t)},removeCode:function(t){this.$root.codeEditorComponent.removeCode(t)},languageExtensions:function(t){return"HTML"==t?"html":"CSS"==t?"css":"VUE"==t?"vue":"MD"==t?"md":"PYTHON(3.8.1)"==t||"PYTHON 3.81"==t||"PYTHON For ML(3.7.7)"==t||"PYTHON(2.7.17)"==t?"py":"PHP"==t?"php":"JAVASCRIPT(Node)"==t||"JAVASCRIPT"==t?"js":"SQL"==t?"sql":"C"==t?"c":"C++"==t?"cpp":"JAVA"==t?"java":"C#"==t?"cs":"ERLANG"==t?"erl":"KOTLIN"==t?"kt":"FOTRAN"==t?"for":"PERL"==t?"pl":"R"==t?"r":"GO"==t?"go":"HASKELL"==t?"hs":"RUBY"==t?"rb":"LUA"==t?"lua":"PASCAL"==t?"pas":"RUST"==t?"rs":"SCALA"==t?"scala":"SWIFT"==t?"swift":"TYPESCRIPT"==t?"ts":void 0},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0;"info"==e&&s.a.info({title:t,message:o,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==e&&s.a.success({title:t,message:o,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==e&&s.a.warning({title:t,timeout:2e3,message:o,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==e&&s.a.error({title:t,message:o,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},copyText:function(){var t,o;t=this.$root.codeEditorComponent.code,(o=document.createElement("textarea")).value=t,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),this.showAlert("Copied!","Copied to clipboard","success")},shareProject:function(){this.$root.shareLink="https://link.citonhub.com/project/"+this.$route.params.project_slug,this.$root.shareText="Check out this project on Citonhub",this.$root.infoText="Share your project with others",this.$root.alertComponent=this.$root.projectPanelComponent,this.$root.showInvitation=!0},showFullPage:function(){window.open("/run-panel/"+this.$root.projectData.project_panel.panel_id,"_blank")},fetchProjectData:function(){var t=this;this.loadingProject=!0,this.$root.getLocalStore("user_projects_data_"+this.$route.params.project_slug+this.$root.username).then((function(o){if(null!=o){var e=JSON.parse(o);t.$root.projectData=e,t.$root.ProjectMembers=e.project_owner,t.loadingProject=!1,t.filesAreReady=!0,t.$root.projectData.project.is_web?t.showEditor(t.$root.projectData.project_files.code_files[0],"front-end"):t.showEditor(t.$root.projectData.project_files.code_files[0],"code-file"),t.checkForNewProjectData()}else axios.get("/fetch-project-data/"+t.$route.params.project_slug).then((function(o){200==o.status&&(t.$root.LocalStore("user_projects_data_"+t.$route.params.project_slug+t.$root.username,o.data),t.$root.projectData=o.data,t.$root.ProjectMembers=o.data.project_owner,t.filesAreReady=!0,t.$root.projectData.project.is_web?t.showEditor(t.$root.projectData.project_files.code_files[0],"front-end"):t.showEditor(t.$root.projectData.project_files.code_files[0],"code-file"),t.loadingProject=!1)})).catch((function(o){t.loadingProject=!1}))}))},checkForNewProjectData:function(){var t=this;axios.get("/fetch-project-data/"+this.$route.params.project_slug).then((function(o){200==o.status&&(t.$root.LocalStore("user_projects_data_"+t.$route.params.project_slug+t.$root.username,o.data),t.$root.projectData=o.data,t.$root.ProjectMembers=o.data.project_owner)})).catch((function(t){}))},showEditor:function(t,o){this.$root.SelectedCodeBox=t;var e=this.$root.codeEditorArray.filter((function(o){return o.id==t.id}));this.$root.codeEditorArray.map((function(o){o.id==t.id&&(o.content=t.content)})),0==e.length&&this.$root.codeEditorArray.unshift(t),this.$root.selectedFileCatType=o,this.$root.EditorLanguage=t.language_type,this.$root.codeEditorContent=t.content,this.$root.selectedFileId=t.id,this.$router.currentRoute.path.indexOf("panel-loader")>=0||this.$router.currentRoute.path.indexOf("editor")<=0&&this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/editor"})},closePanel:function(){if(this.$root.viewFromPost)return this.$router.push({path:"/hub/post/"+this.$root.selectedPost.post_id}),void(this.$root.viewFromPost=!1);this.$root.panelFromChallenges?(this.$root.panelFromChallenges=!1,this.$router.push({path:"/board/challenges/panel/"+this.$root.selectedChallenge.duel_id+"/description"})):this.$router.push({path:"/board/projects/list"})},openSettings:function(){this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/set-panel"})},openGit:function(){this.$router.push({path:"/board/projects/panel/"+this.$root.projectData.project.project_slug+"/add-git"}),console.log(this.$root.projectData.project.project_slug)}}}),a=(e(450),e(4)),n=Object(a.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"col-12  px-0  d-block  py-0",staticStyle:{position:"fixed",left:"0",height:"100%",top:"0%",background:"white","z-index":"99999999999999999999"}},[e("div",{staticClass:"col-12 py-0 px-0 px-md-2 fixed-top",staticStyle:{position:"fixed",width:"100%","border-bottom":"2px solid #3C87CD","border-radius":"0px",background:"white","z-index":"9999999999999999999"}},[e("div",{staticClass:"d-lg-block d-none"},[e("div",{staticClass:"row py-1 my-0"},[e("div",{staticClass:"col-4 py-0 my-0 text-left"},[e("v-btn",{attrs:{icon:""},on:{click:function(o){return t.closePanel()}}},[e("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-times")])],1)],1),t._v(" "),e("div",{staticClass:"col-4 py-0 my-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[this.$root.projectData.project?[e("div",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(this.$root.projectData.project.title)+" ")])]:t._e()],2),t._v(" "),e("div",{staticClass:"col-4 py-0 my-0  d-flex flex-row"},[e("div",{staticClass:"ml-auto d-flex flex-row"},[this.$router.currentRoute.path.indexOf("panel-loader")>=0?[e("div",{staticClass:"mx-1 "},[e("v-btn",{attrs:{icon:""},on:{click:t.shareProject}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi mdi-share-variant")])],1)],1),t._v(" "),t.that.$root.projectData.project.is_web?e("div",{staticClass:"mx-1 "},[e("v-btn",{attrs:{icon:""},on:{click:t.showFullPage}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi mdi-launch")])],1)],1):t._e()]:t._e(),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(o){return t.openGit()}}},[e("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("lab la-github")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(o){return t.openSettings()}}},[e("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-cog")])],1)],2)])])]),t._v(" "),e("div",{staticClass:"d-lg-none d-block"},[this.$router.currentRoute.path.indexOf("editor")<=0&&this.$router.currentRoute.path.indexOf("panel-loader")<=0?e("div",{staticClass:"row py-1 my-0"},[e("div",{staticClass:"col-2 py-0 my-0 text-left"},[e("v-btn",{staticClass:"ml-1",attrs:{icon:""},on:{click:function(o){t.showSideBar=!0}}},[e("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-bars")])],1)],1),t._v(" "),e("div",{staticClass:"col-8 py-0 my-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[this.$root.projectData.project?[e("div",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(this.$root.projectData.project.title)+" ")])]:t._e()],2),t._v(" "),e("div",{staticClass:"col-2 py-0 my-0 text-right"},[e("v-btn",{attrs:{icon:""},on:{click:function(o){return t.openSettings()}}},[e("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-cog")])],1)],1)]):t._e()]),t._v(" "),this.$router.currentRoute.path.indexOf("editor")>=0?e("div",{staticClass:"d-lg-none d-flex flex-row py-1",staticStyle:{background:"#F3F8FC","align-items":"center"}},[e("div",{staticClass:"mx-1 "},[e("v-btn",{attrs:{icon:""},on:{click:function(o){t.showSideBar=!0}}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-bars")])],1)],1),t._v(" "),this.$router.currentRoute.path.indexOf("editor")>=0?e("div",{staticClass:" ",staticStyle:{"overflow-x":"auto","white-space":"nowrap",width:"100%"}},t._l(this.$root.codeEditorArray,(function(o,i){return e("v-chip",{key:i,staticClass:"ma-1 mx-1 ml-0 fileText d-inline-block",style:t.that.$root.selectedFileId==o.id?"color:white;background-color:#3C87CD;":"background:transparent;border:1px solid #3C87CD;",attrs:{close:"",small:""},on:{"click:close":function(e){return t.removeCode(o)},click:function(e){return t.showCode(o)}}},[t._v("\n      "+t._s(o.file_name+"."+t.languageExtensions(o.language_type))+"\n    ")])})),1):t._e(),t._v(" "),e("div",{staticClass:"ml-auto "},[e("v-btn",{attrs:{icon:""},on:{click:t.copyText}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-copy")])],1)],1)]):t._e(),t._v(" "),this.$router.currentRoute.path.indexOf("panel-loader")>=0?e("div",{staticClass:"d-lg-none d-flex flex-row py-1",staticStyle:{background:"#F3F8FC","align-items":"center"}},[e("div",{staticClass:"mx-1 "},[e("v-btn",{attrs:{icon:""},on:{click:function(o){t.showSideBar=!0}}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-bars")])],1)],1),t._v(" "),e("div",{staticClass:"ml-auto d-flex flex-row",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"mx-1 "},[e("v-btn",{attrs:{icon:""},on:{click:t.shareProject}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi mdi-share-variant")])],1)],1),t._v(" "),t.that.$root.projectData.project.is_web?e("div",{staticClass:"mx-1 "},[e("v-btn",{attrs:{icon:""},on:{click:t.showFullPage}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi mdi-launch")])],1)],1):t._e()])]):t._e()]),t._v(" "),e("div",{staticClass:"col-12 py-1 px-0",staticStyle:{position:"absolute",width:"100%",height:"100%",background:"white"}},[e("div",{staticClass:"col-lg-2 col-md-4  scroller d-lg-block d-none",staticStyle:{position:"absolute",height:"98%",background:"#ffffff","border-right":"1px solid #c5c5c5",top:"0","padding-top":"30px","overflow-y":"auto","overflow-x":"hidden"}},[t.filesAreReady?[e("panel-side",{attrs:{fromDevice:"large"}})]:[e("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"100%",width:"100%","align-items":"center","justify-content":"center"}},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]],2),t._v(" "),e("v-slide-x-transition",[t.showSideBar?e("div",{staticClass:"col-12 d-lg-none  py-0 px-0",staticStyle:{position:"fixed",width:"100%",top:"0",height:"100%",background:"rgba(27, 27, 30, 0.32)","z-index":"9999999999999"},on:{click:function(o){t.showSideBar=!1}}},[e("div",{staticStyle:{position:"absolute",height:"100%",width:"70%",left:"0"}},[e("div",{staticClass:"col-md-7 pt-2 scroller",staticStyle:{background:"white",height:"100%","overflow-y":"auto","overflow-x":"hidden"},on:{click:function(o){o.stopPropagation(),t.showSideBar=!0}}},[t.filesAreReady?[e("panel-side",{attrs:{fromDevice:"small"}})]:[e("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"100%",width:"100%","align-items":"center","justify-content":"center"}},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]],2)])]):t._e()]),t._v(" "),t.showMoreOptions?e("div",{staticClass:"col-12 d-lg-none py-0 px-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center",background:"rgba(27, 27, 30, 0.1)",position:"fixed",height:"100%",top:"0%","z-index":"999999999999"},on:{click:function(o){t.showMoreOptions=!1}}},[e("more-options")],1):t._e(),t._v(" "),e("div",{staticClass:" col-lg-10 offset-lg-2   ",staticStyle:{position:"absolute",height:"95%",background:"#F3F8FC",top:"5%"}},[t.loadingProject?[e("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"100%",width:"100%","align-items":"center","justify-content":"center"}},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[e("router-view")]],2)],1)])])}),[],!1,null,"7152f19d",null);o.default=n.exports}}]);