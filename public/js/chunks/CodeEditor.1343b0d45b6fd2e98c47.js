(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{249:function(t,e,o){"use strict";o(269),o(270),o(271),o(272),o(273),o(245),o(261),o(262),o(274),o(263),o(275),o(276),o(277),o(278),o(264),o(279),o(280),o(281),o(282),o(283),o(260),o(284),o(253),o(285),o(286),o(287),o(259),o(288),o(289),o(290),o(291),o(292),o(293),o(265),o(294)},326:function(t,e,o){var i=o(484);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(25)(i,n);i.locals&&(t.exports=i.locals)},483:function(t,e,o){"use strict";var i=o(326);o.n(i).a},484:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.scroller[data-v-0db41e24]::-webkit-scrollbar {\n  height: 5px;\n}\n.codeboxnew[data-v-0db41e24],\n    .pre[data-v-0db41e24] {\n      width: 100%;\n      margin: 0;\n       display: block;\n      font-size: 13px;\n      line-height: 1.6;\n      word-break: break-all;\n      word-wrap: break-word;\n      letter-spacing: 1px !important;\n      overflow: auto;\n}\n.codeboxnew[data-v-0db41e24]{\n       height: 100%;\n       border: 1px solid #e6e6e6;\n        position:absolute;\n        width:100%;\n       \n        overflow-x: hidden;\n        overflow-y:hidden;\n}\n.scroller[data-v-0db41e24]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n",""])},768:function(t,e,o){"use strict";o.r(e);var i=o(258),n=(o(249),o(386),o(387),o(388),o(389),o(390),o(391),o(392),o(325),{mounted:function(){this.detectchange(this.$root.EditorLanguage),this.$root.codeEditorComponent=this,this.$root.projectPanelComponent&&!this.$root.viewFromPost&&this.$root.projectPanelComponent.showAlert("Happy coding!","Your work is auto saved","info")},components:{codemirror:i.codemirror},computed:{codemirror:function(){return this.$refs.cmEditor.codemirror}},data:function(){return{that:this,cmOption:{tabSize:4,foldGutter:!0,filepath:"",NewMsg:"",styleActiveLine:!0,lineNumbers:!0,line:!0,autocorrect:!0,keyMap:"sublime",scrollbarStyle:"overlay",mode:"text/html",theme:"base16-dark",extraKeys:{F11:function(t){t.setOption("fullScreen",!t.getOption("fullScreen"))},Esc:function(t){t.getOption("fullScreen")&&t.setOption("fullScreen",!1)}}},items:["HTML","CSS","JAVASCRIPT","PHP","PYTHON","SQL","VUEJS"],language:this.$root.EditorLanguage,code:this.$root.codeEditorContent,selectedFileId:this.$root.selectedFileId,Alert:!1,alertMsg:"",loading:!1,canChange:!0}},methods:{copyText:function(){var t,e;t=this.code,(e=document.createElement("textarea")).value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$root.projectPanelComponent.showAlert("Copied!","Copied to clipboard","success")},setEditorPosition:function(t){this.canChange&&this.$root.getLocalStore("CodeFile"+this.$root.selectedFileId+this.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);t.scrollTo(o.left,o.top)}else t.scrollTo(0,0)}));this.canChange=!1},trackUser:function(){var t=this;axios.get("/fetch-profile-"+this.$root.username).then((function(e){200==e.status&&(t.$root.userPageTrack=e.data[2])})).catch((function(t){}))},onCmCursorActivity:function(t){console.debug("onCmCursorActivity",t)},loadPage:function(){this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/panel-loader"})},fetchProject:function(){var t=this;0!=this.$root.projectData.length||axios.get("/fetch-project-"+this.$route.params.project_slug).then((function(e){200==e.status&&(t.$root.projectData=e.data[0],t.$root.ProjectMembers=e.data[2])})).catch((function(t){}))},showAlert:function(t,e){this.Alert=!0,this.alertMsg=e;var o=this;setTimeout((function(){o.Alert=!1}),t)},checkIfOwner:function(){var t=this,e=this.$root.ProjectMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return this.$root.projectData.project.user_id==this.$root.user_temp_id||0!=e.length},showCode:function(t){var e=this;if(this.$root.selectedFileId=t.id,this.selectedFileId=t.id,this.$root.SelectedCodeBox=t,"front_end"==this.$root.SelectedCodeBox.type){this.$root.selectedFileCatType="front-end";var o=this.$root.projectData.project_files.code_files.filter((function(t){return t.id==e.$root.selectedFileId}));o=o[0],this.language=o.language_type,this.detectchange(this.language),this.code=o.content}if("back-end"==this.$root.SelectedCodeBox.type){this.$root.selectedFileCatType="back-end";var i=this.$root.projectData.project_files.code_files.filter((function(t){return t.id==e.$root.selectedFileId}));i=i[0],this.language=i.language_type,this.detectchange(this.language),this.code=i.content}if("code_files"==this.$root.SelectedCodeBox.type||"code_file"==this.$root.SelectedCodeBox.type){this.$root.selectedFileCatType="code_files";var n=this.$root.projectData.project_files.code_files.filter((function(t){return t.id==e.$root.selectedFileId}));n=n[0],this.$root.EditorLanguage=n.language_type,this.$root.codeEditorContent=n.content,this.language=n.language_type,this.detectchange(this.language),this.code=n.content}this.canChange=!0},removeCode:function(t){var e=[];if(this.$root.codeEditorArray.length>=2){var o=this.$root.codeEditorArray.indexOf(t);if(0==o)this.$root.selectedFileId==t.id&&this.showCode(this.$root.codeEditorArray[1]);else{var i=o-1,n=this.$root.codeEditorArray[i];this.$root.selectedFileId==t.id&&this.showCode(n)}e=this.$root.codeEditorArray.filter((function(e){return e.id!=t.id}))}else this.$root.codeEditorComponent=void 0,this.$router.push({path:"/board/projects/panel/"+this.$root.projectData.project.project_slug}),this.$root.codeEditorArray=e},saveFileContent:_.debounce((function(){var t=this;this.checkIfOwner()&&(this.loading=!0,axios.post("/save-code-content-project",{project_slug:this.$route.params.project_slug,file_id:this.$root.selectedFileId,content:this.code,code_category:this.$root.selectedFileCatType}).then((function(e){if(200==e.status){if(t.$root.codeEditorArray.map((function(e){e.id==t.selectedFileId&&(e.content=t.code)})),"extensions"==t.$root.SelectedCodeBox.file_name){var o=t.$root.projectData.project_files.code_files.filter((function(t){return"index"==t.file_name&&"HTML"==t.language_type}));t.handleIndexFile(o[0])}t.loading=!1}})).catch((function(e){t.$root.projectPanelComponent.showAlert("Oops!","Unable to save changes","error"),t.loading=!1})))}),500),handleIndexFile:function(t){axios.post("/save-code-content-project",{project_slug:this.$route.params.project_slug,file_id:t.id,content:t.content,code_category:this.$root.selectedFileCatType}).then((function(t){})).catch((function(t){}))},onCmReady:function(t){t.on("keypress",(function(){t.showHint()})),console.debug("onCmReady",t)},onCmFocus:function(t){console.debug("onCmFocus",t)},onCmBlur:function(t){console.debug("onCmBlur",t)},onCmCodeChange:function(t){var e=this;this.$root.projectData.project_files.code_files.map((function(o){o.id==e.$root.selectedFileId&&(o.content=t)})),this.$root.codeEditorContent=t,this.$root.LocalStore("user_projects_data_"+this.$route.params.project_slug+this.$root.username,this.$root.projectData),setTimeout((function(){e.saveFileContent()}),2e3)},saveFileHeight:function(t){this.$root.LocalStore("CodeFile"+this.$root.selectedFileId+this.$root.username,t.getScrollInfo())},languageExtensions:function(t){return"HTML"==t?"html":"CSS"==t?"css":"VUE"==t?"vue":"MD"==t?"md":"PYTHON(3.8.1)"==t||"PYTHON 3.81"==t||"PYTHON For ML(3.7.7)"==t||"PYTHON(2.7.17)"==t?"py":"PHP"==t?"php":"JAVASCRIPT(Node)"==t||"JAVASCRIPT"==t||"js"==t?"js":"SQL"==t?"sql":"C"==t?"c":"C++"==t?"cpp":"JAVA"==t?"java":"C#"==t?"cs":"ERLANG"==t?"erl":"KOTLIN"==t?"kt":"FOTRAN"==t?"for":"PERL"==t?"pl":"R"==t?"r":"GO"==t?"go":"HASKELL"==t?"hs":"RUBY"==t?"rb":"LUA"==t?"lua":"PASCAL"==t?"pas":"RUST"==t?"rs":"SCALA"==t?"scala":"SWIFT"==t?"swift":"TYPESCRIPT"==t?"ts":void 0},detectchange:function(t){"HTML"==t&&(this.cmOption.mode="text/html"),"CSS"==t&&(this.cmOption.mode="text/css"),"PYTHON(3.8.1)"==t&&(this.cmOption.mode="text/x-python"),"VUE"==t&&(this.cmOption.mode="text/x-vue"),"MD"==t&&(this.cmOption.mode="text/x-markdown"),"PYTHON"==t&&(this.cmOption.mode="text/x-python"),"PYTHON For ML(3.7.7)"==t&&(this.cmOption.mode="text/x-python"),"PYTHON 3.81"==t&&(this.cmOption.mode="text/x-python"),"PYTHON(2.7.17)"==t&&(this.cmOption.mode="text/x-python"),"PHP"==t&&(this.cmOption.mode="text/x-php"),"JAVASCRIPT(Node)"==t&&(this.cmOption.mode="text/javascript"),"JAVASCRIPT"==t&&(this.cmOption.mode="text/javascript"),"js"==t&&(this.cmOption.mode="text/javascript"),"SQL"==t&&(this.cmOption.mode="text/x-sql"),"C"==t&&(this.cmOption.mode="text/x-csrc"),"C++"==t&&(this.cmOption.mode="text/x-c++src"),"JAVA"==t&&(this.cmOption.mode="text/x-java"),"C#"==t&&(this.cmOption.mode="text/x-csharp"),"ERLANG"==t&&(this.cmOption.mode="text/x-erlang"),"KOTLIN"==t&&(this.cmOption.mode="x-shader/x-fragment"),"FOTRAN"==t&&(this.cmOption.mode="text/x-fortran"),"PERL"==t&&(this.cmOption.mode="text/x-perl"),"R"==t&&(this.cmOption.mode="text/x-rsrc"),"GO"==t&&(this.cmOption.mode="text/x-go"),"HASKELL"==t&&(this.cmOption.mode="text/x-haskell"),"RUBY"==t&&(this.cmOption.mode="text/x-ruby"),"LUA"==t&&(this.cmOption.mode="text/x-lua"),"PASCAL"==t&&(this.cmOption.mode="text/x-pascal"),"RUST"==t&&(this.cmOption.mode="text/x-rustsrc"),"SCALA"==t&&(this.cmOption.mode="text/x-scala"),"SWIFT"==t&&(this.cmOption.mode="text/x-swift"),"TYPESCRIPT"==t&&(this.cmOption.mode="text/javascript")}}}),s=(o(483),o(4)),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row py-0 "},[o("div",{staticClass:"col-12 px-0 py-0 mt-2 mt-md-0 d-flex flex-column",staticStyle:{position:"absolute",height:"100%",top:"0%",left:"0"}},[o("div",{staticClass:"codeboxnew ",staticStyle:{height:"100%"}},[o("div",{staticClass:"col-12 my-0 py-1 d-lg-flex flex-row d-none scroller ",staticStyle:{"z-index":"9999999999",left:"0",background:"#F3F8FC"}},[o("div",{staticClass:"d-flex",staticStyle:{width:"100%","overflow-x":"auto","white-space":"nowrap","align-items":"center"}},t._l(this.$root.codeEditorArray,(function(e,i){return o("v-chip",{key:i,staticClass:"ma-1 mx-1 ml-0 fileText d-inline-block",style:t.that.$root.selectedFileId==e.id?"color:white;background-color:#3C87CD;":"background:transparent;border:1px solid #3C87CD;",attrs:{close:"",small:""},on:{"click:close":function(o){return t.removeCode(e)},click:function(o){return t.showCode(e)}}},[t._v("\n   "+t._s(e.file_name+"."+t.languageExtensions(e.language_type))+"\n ")])})),1),t._v(" "),o("div",{staticClass:"ml-auto "},[o("v-btn",{attrs:{icon:""},on:{click:t.copyText}},[o("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-copy")])],1)],1)]),t._v(" "),o("codemirror",{staticStyle:{height:"100%"},attrs:{options:t.cmOption},on:{cursorActivity:t.onCmCursorActivity,ready:t.onCmReady,focus:t.onCmFocus,scroll:t.saveFileHeight,blur:t.onCmBlur,update:t.setEditorPosition,input:t.onCmCodeChange},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),t._v(" "),o("v-btn",{staticClass:"d-lg-inline-block d-none",staticStyle:{"z-index":"99999999",position:"absolute",bottom:"3%",right:"3%"},attrs:{medium:"",fab:"",color:"#3C87CD"},on:{click:t.loadPage}},[o("v-icon",{staticStyle:{"font-size":"25px",color:"white"}},[t._v("las la-play")])],1),t._v(" "),o("v-btn",{staticClass:"d-lg-none d-inline-block",staticStyle:{"z-index":"99999999",position:"fixed",bottom:"3%",right:"3%"},attrs:{fab:"",color:"#3C87CD"},on:{click:t.loadPage}},[o("v-icon",{staticStyle:{"font-size":"24px",color:"white"}},[t._v("las la-play")])],1)],1)])}),[],!1,null,"0db41e24",null);e.default=r.exports}}]);