(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{349:function(t,e,s){var i=s(571);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(25)(i,a);i.locals&&(t.exports=i.locals)},570:function(t,e,s){"use strict";var i=s(349);s.n(i).a},571:function(t,e,s){(t.exports=s(24)(!1)).push([t.i,"\n.codeFile[data-v-b71a0176]:hover{\n  cursor: pointer;\n  background:#f2f2f2;\n}\n\n",""])},683:function(t,e,s){"use strict";s.r(e);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var a={data:function(){var t;return i(t={that:this,languageIcon:[{name:"Web app NodeJs",icon:"lab la-node-js",id:"NodeJs"},{name:"Web app PHP",icon:"lab la-php",id:"PHP"},{name:"JavaScript",icon:"lab la-js-square",id:26,color:"#e6b800"},{name:"PHP",icon:"lab la-php",id:35,color:"#474A8A"},{name:"Python 3.81",icon:"lab la-python",id:39,color:"#306998"},{name:"Python for ML(3.7.7)",icon:"lab la-python",id:100,color:"#306998"},{name:"C",icon:"mdi mdi-language-c",id:4,color:"#333333"},{name:"C++",icon:"mdi mdi-language-cpp",id:11,color:"#333333"},{name:"Java",icon:"lab la-java",id:25,color:"#5382a1"},{name:"C#",icon:"mdi mdi-language-csharp",id:13,color:"#333333"},{name:"Erlang",icon:"lab la-erlang",id:18,color:"#333333"},{name:"Kotlin",icon:"mdi mdi-language-kotlin",id:27,color:"#333333"},{name:"Fortran",icon:"mdi mdi-language-fortran",id:21,color:"#333333"},{name:"Perl",icon:"las la-code",id:34,color:"#333333"},{name:"R",icon:"mdi mdi-language-r",id:40,color:"#333333"},{name:"Ruby",icon:"mdi mdi-language-ruby",id:41,color:"#333333"},{name:"Go",icon:"mdi mdi-language-go",id:22,color:"#29BEB0"},{name:"Hashkell",icon:"mdi mdi-language-haskell",id:24,color:"#293745"},{name:"Lua",icon:"mdi mdi-language-lua",id:28,color:"#333333"},{name:"Pascal",icon:"las la-code",id:33,color:"#333333"},{name:"TypeScript",icon:"mdi mdi-language-typescript",id:46,color:"#0066ff"},{name:"Rust",icon:"las la-code",id:42,color:"#333333"},{name:"Swift",icon:"lab la-swift",id:45,color:"#333333"},{name:"Scala",icon:"las la-code",id:43,color:"#333333"}]},"that",this),i(t,"views",[]),i(t,"styles",[]),i(t,"scripts",[]),i(t,"controllers",[]),i(t,"toggleViews",!0),i(t,"toggleStyles",!0),i(t,"toggleScripts",!0),i(t,"toggleFrameworks",!0),i(t,"toggleImages",!0),i(t,"toggleAudios",!0),i(t,"toggleVideos",!0),i(t,"toggleFiles",!0),i(t,"toggleControllers",!0),i(t,"toggleRoutes",!0),i(t,"toggleDatabases",!0),i(t,"toggleCodeFiles",!0),t},components:{MoreOptions:function(){return s.e(76).then(s.bind(null,684))}},mounted:function(){this.$root.editorSideComponent=this,this.separateCodeFiles()},methods:{ShowMore:function(){this.$root.projectPanelComponent.showMoreOptions=!0},addRoute:function(){this.$root.projectPanelComponent.showSideBar=!1,this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/web-route"})},addNewFile:function(t){this.$root.projectPanelComponent.showSideBar=!1,this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/add-new-file/"+t})},createDb:function(){this.$root.projectPanelComponent.showSideBar=!1,this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/create-db-table"})},uploadResources:function(t){this.$root.projectPanelComponent.showSideBar=!1,this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/resource-upload/"+t})},showEditor:function(t,e){this.$root.projectPanelComponent.showSideBar=!1,this.$root.SelectedCodeBox=t;var s=this.$root.codeEditorArray.filter((function(e){return e.id==t.id}));this.$root.codeEditorArray.map((function(e){e.id,t.id})),0==s.length&&this.$root.codeEditorArray.unshift(t),this.$root.selectedFileCatType=e,this.$root.codeEditorComponent?(this.$root.codeEditorComponent.code=t.content,this.$root.codeEditorComponent.language=t.language_type,this.$root.selectedFileId=t.id,this.$root.codeEditorComponent.detectchange(t.language_type),this.$root.EditorLanguage=t.language_type,this.$root.codeEditorContent=t.content,this.$router.currentRoute.path.indexOf("editor")<=0&&this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/editor"})):(this.$root.codeEditorContent=t.content,this.$root.EditorLanguage=t.language_type,this.$root.selectedFileId=t.id,this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/editor"}))},separateCodeFiles:function(){this.$root.projectData.project.is_web&&(this.views=this.$root.projectData.project_files.code_files.filter((function(t){return"HTML"==t.language_type||"VUE"==t.language_type||"MD"==t.language_type})),this.styles=this.$root.projectData.project_files.code_files.filter((function(t){return"CSS"==t.language_type})),this.scripts=this.$root.projectData.project_files.code_files.filter((function(t){return("JAVASCRIPT"==t.language_type||"TYPESCRIPT"==t.language_type)&&"back_end"!=t.type})),this.controllers=this.$root.projectData.project_files.code_files.filter((function(t){return"back_end"==t.type})))},getProjectLanguage:function(t){var e=this.languageIcon.filter((function(e){return e.id==t.panel_language}));return e[0]?e[0].icon:"lab la-html5"},getProjectLanguageColor:function(t){var e=this.languageIcon.filter((function(e){return e.id==t.panel_language}));return e[0]?e[0].color:"#333333"},languageExtensions:function(t){return"HTML"==t?"html":"CSS"==t?"css":"VUE"==t?"vue":"MD"==t?"md":"PYTHON(3.8.1)"==t||"PYTHON 3.81"==t||"PYTHON For ML(3.7.7)"==t||"PYTHON(2.7.17)"==t?"py":"PHP"==t?"php":"JAVASCRIPT(Node)"==t||"JAVASCRIPT"==t||"js"==t?"js":"SQL"==t?"sql":"C"==t?"c":"C++"==t?"cpp":"JAVA"==t?"java":"C#"==t?"cs":"ERLANG"==t?"erl":"KOTLIN"==t?"kt":"FOTRAN"==t?"for":"PERL"==t?"pl":"R"==t?"r":"GO"==t?"go":"HASKELL"==t?"hs":"RUBY"==t?"rb":"LUA"==t?"lua":"PASCAL"==t?"pas":"RUST"==t?"rs":"SCALA"==t?"scala":"SWIFT"==t?"swift":"TYPESCRIPT"==t?"ts":void 0},closePanel:function(){if(this.$root.viewFromPost)return this.$router.push({path:"/hub/post/"+this.$root.selectedPost.post_id}),void(this.$root.viewFromPost=!1);this.$root.panelFromChallenges?(this.$root.panelFromChallenges=!1,this.$router.push({path:"/board/challenges/panel/"+this.$root.selectedChallenge.duel_id+"/description"})):this.$router.push({path:"/board/projects/list"}),this.$root.projectPanelComponent.showSideBar=!1},openGuide:function(){this.$root.projectPanelComponent.showSideBar=!1,this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/guide"})}}},l=(s(570),s(4)),o=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 pt-md-4 pt-0 px-0  fixed-top application application--light",staticStyle:{position:"sticky",background:"white",top:"0%"},attrs:{"data-app":"true"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 d-flex py-0 ",staticStyle:{"align-items":"center"}},[[s("v-btn",{staticClass:"d-inline-block d-lg-none",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.closePanel()}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-times")])],1)],t._v(" "),s("v-btn",{staticClass:"ml-1",attrs:{"x-small":"",color:"#3C87CD"},on:{click:t.openGuide}},[s("span",{staticStyle:{"font-family":"HeaderFont","font-size":"11px","text-transform":"capitalize",color:"white"}},[t._v("Guide")])])],2),t._v(" "),s("div",{staticClass:"col-6 d-flex flex-row-reverse  py-0",staticStyle:{"align-items":"center"}},[s("v-btn",{staticClass:"mr-2",attrs:{id:"activator","x-small":"",color:"#3C87CD"},on:{click:t.ShowMore}},[s("span",{staticStyle:{"font-family":"HeaderFont","font-size":"11px","text-transform":"capitalize",color:"white"}},[t._v("more")]),t._v(" "),s("v-menu",{staticStyle:{"z-index":"99999999999999999999"},attrs:{absolute:"",activator:"#activator",left:"","offset-y":""}},[s("more-options")],1)],1)],1)])]),t._v(" "),[t.that.$root.projectData.project.is_web?[t._m(0),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleViews?t.toggleViews=!1:t.toggleViews=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.addNewFile("front_end")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleViews?t._l(this.views,(function(e,i){return s("v-card",{key:i+"views",staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:"",color:t.that.$root.selectedFileId==e.id?"#f2f2f2":""},on:{click:function(s){return s.stopPropagation(),t.showEditor(e,"front-end")}}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left d-flex py-0 my-0",staticStyle:{"align-items":"center"}},["HTML"==e.language_type?s("i",{staticClass:"lab la-html5",staticStyle:{"font-size":"20px",color:"#e34f26"}}):t._e(),t._v(" "),"VUE"==e.language_type?s("i",{staticClass:"mdi mdi-vuejs",staticStyle:{"font-size":"20px",color:"#41B883"}}):t._e(),t._v(" "),"MD"==e.language_type?s("i",{staticClass:"mdi-code-not-equal-variant",staticStyle:{"font-size":"20px",color:"#333333"}}):t._e()]),t._v(" "),s("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_name)+"."+t._s(t.languageExtensions(e.language_type)))])]),t._v(" "),s("div",{staticClass:"col-2  py-0 my-0"})])])})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleStyles?t.toggleStyles=!1:t.toggleStyles=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(3),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.addNewFile("front_end")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleStyles?t._l(this.styles,(function(e,i){return s("v-card",{key:i+"style",staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:"",color:t.that.$root.selectedFileId==e.id?"#f2f2f2":""},on:{click:function(s){return s.stopPropagation(),t.showEditor(e,"front-end")}}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"lab la-css3",staticStyle:{"font-size":"20px",color:"#0066ff"}})]),t._v(" "),s("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_name)+"."+t._s(t.languageExtensions(e.language_type)))])]),t._v(" "),s("div",{staticClass:"col-2  py-0 my-0"})])])})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleScripts?t.toggleScripts=!1:t.toggleScripts=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(5),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.addNewFile("front_end")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleScripts?t._l(this.scripts,(function(e,i){return s("v-card",{key:i+"script",staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:"",color:t.that.$root.selectedFileId==e.id?"#f2f2f2":""},on:{click:function(s){return s.stopPropagation(),t.showEditor(e,"front-end")}}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0"},["JAVASCRIPT"==e.language_type?s("i",{staticClass:"lab la-js-square",staticStyle:{"font-size":"20px",color:"#bca510"}}):t._e(),t._v(" "),"TYPESCRIPT"==e.language_type?s("i",{staticClass:"lab la-js-square",staticStyle:{"font-size":"20px",color:"#0066ff"}}):t._e()]),t._v(" "),s("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_name)+"."+t._s(t.languageExtensions(e.language_type)))])]),t._v(" "),s("div",{staticClass:"col-2  py-0 my-0"})])])})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleFrameworks?t.toggleFrameworks=!1:t.toggleFrameworks=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(7),t._v(" "),t._m(8),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.uploadResources("Framework")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleFrameworks?t._l(t.that.$root.projectData.project_files.resources,(function(e,i){return s("div",{key:"framework"+i},["Framework"==e.type?s("v-card",{staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"las la-file-code",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),s("div",{staticClass:"col-9 d-flex py-0 my-0",staticStyle:{"align-items":"center","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_full_name))])]),t._v(" "),s("div",{staticClass:"col-1  py-0 my-0"})])]):t._e()],1)})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleImages?t.toggleImages=!1:t.toggleImages=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(9),t._v(" "),t._m(10),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.uploadResources("Images")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleImages?t._l(t.that.$root.projectData.project_files.resources,(function(e,i){return s("div",{key:"image"+i},["Images"==e.type?s("v-card",{staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"las la-file-image",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),s("div",{staticClass:"col-9 d-flex py-0 my-0",staticStyle:{"align-items":"center","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_full_name))])]),t._v(" "),s("div",{staticClass:"col-1  py-0 my-0"})])]):t._e()],1)})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleAudios?t.toggleAudios=!1:t.toggleAudios=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(11),t._v(" "),t._m(12),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.uploadResources("Audios")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleAudios?t._l(t.that.$root.projectData.project_files.resources,(function(e,i){return s("div",{key:"audio"+i},["Audios"==e.type?s("v-card",{staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"las la-file-audio",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),s("div",{staticClass:"col-9 d-flex py-0 my-0",staticStyle:{"align-items":"center","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_full_name))])]),t._v(" "),s("div",{staticClass:"col-1  py-0 my-0"})])]):t._e()],1)})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleVideos?t.toggleVideos=!1:t.toggleVideos=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(13),t._v(" "),t._m(14),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.uploadResources("Videos")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleVideos?t._l(t.that.$root.projectData.project_files.resources,(function(e,i){return s("div",{key:"video"+i},["Videos"==e.type?s("v-card",{staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"las la-file-video",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),s("div",{staticClass:"col-9 d-flex py-0 my-0",staticStyle:{"align-items":"center","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_full_name))])]),t._v(" "),s("div",{staticClass:"col-1  py-0 my-0"})])]):t._e()],1)})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleFiles?t.toggleFiles=!1:t.toggleFiles=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(15),t._v(" "),t._m(16),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.uploadResources("Files")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleFiles?t._l(t.that.$root.projectData.project_files.resources,(function(e,i){return s("div",{key:"files"+i},["Files"==e.type?s("v-card",{staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"las la-file",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),s("div",{staticClass:"col-9 d-flex py-0 my-0",staticStyle:{"align-items":"center","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_full_name))])]),t._v(" "),s("div",{staticClass:"col-1  py-0 my-0"})])]):t._e()],1)})):t._e(),t._v(" "),t._m(17),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleControllers?t.toggleControllers=!1:t.toggleControllers=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(18),t._v(" "),t._m(19),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.addNewFile("back_end")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleControllers?t._l(t.controllers,(function(e,i){return s("v-card",{key:i+"controller",staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""},on:{click:function(s){return s.stopPropagation(),t.showEditor(e,"back-end")}}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{class:t.getProjectLanguage(t.that.$root.projectData.project_panel),style:"font-size:20px; color:"+t.getProjectLanguageColor(t.that.$root.projectData.project_panel)+";"})]),t._v(" "),s("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_name)+"."+t._s(t.languageExtensions(e.language_type)))])]),t._v(" "),s("div",{staticClass:"col-2  py-0 my-0"})])])})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleRoutes?t.toggleRoutes=!1:t.toggleRoutes=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(20),t._v(" "),t._m(21),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.addRoute()}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleRoutes?t._l(t.that.$root.projectData.project_files.routes,(function(e,i){return s("v-card",{key:i+"route",staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"las la-sitemap",staticStyle:{"font-size":"20px"}})]),t._v(" "),s("div",{staticClass:"col-6 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.path))])]),t._v(" "),s("div",{staticClass:"col-4  py-0 my-0 text-right"},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.route_type))])])])])})):t._e(),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleDatabases?t.toggleDatabases=!1:t.toggleDatabases=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(22),t._v(" "),t._m(23),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.createDb()}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleDatabases?t._l(t.that.$root.projectData.project_files.dbtables,(function(e,i){return s("v-card",{key:i+"database",staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:""}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{staticClass:"las la-database",staticStyle:{"font-size":"20px"}})]),t._v(" "),s("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.name)+".tb")])]),t._v(" "),s("div",{staticClass:"col-2  py-0 my-0"})])])})):t._e()]:[t._m(24),t._v(" "),s("div",{staticClass:"col-12 py-1 ",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.toggleCodeFiles?t.toggleCodeFiles=!1:t.toggleCodeFiles=!0}}},[s("div",{staticClass:"row py-0 my-0"},[t._m(25),t._v(" "),t._m(26),t._v(" "),s("div",{staticClass:"col-2 d-flex  py-0 my-0",staticStyle:{"align-items":"center","justify-content":"center"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.addNewFile("code_files")}}},[s("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus-circle")])],1)],1)])]),t._v(" "),t.toggleCodeFiles?t._l(t.that.$root.projectData.project_files.code_files,(function(e,i){return s("v-card",{key:i,staticClass:"col-12 py-1 codeFile",attrs:{tile:"",flat:"",color:t.that.$root.selectedFileId==e.id?"#f2f2f2":""},on:{click:function(s){return s.stopPropagation(),t.showEditor(e,"code_file")}}},[s("div",{staticClass:"row py-0 my-0"},[s("div",{staticClass:"col-2 text-left py-0 my-0 d-flex",staticStyle:{"align-items":"center"}},[s("i",{class:t.getProjectLanguage(t.that.$root.projectData.project_panel),style:"font-size:20px; color:"+t.getProjectLanguageColor(t.that.$root.projectData.project_panel)+";"})]),t._v(" "),s("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.file_name)+"."+t._s(t.languageExtensions(e.language_type)))])]),t._v(" "),s("div",{staticClass:"col-2  py-0 my-0"})])])})):t._e()]]],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 py-0"},[e("h6",{staticStyle:{"font-size":"15px",color:"gray"}},[this._v("Front End")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Views")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Styles")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Scripts")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Framework")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Images")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Audios")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Videos")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Files")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 py-0 mt-2"},[e("h6",{staticStyle:{"font-size":"15px",color:"gray"}},[this._v("Back End")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Controllers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-sitemap",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Web routes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-database",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Database")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 py-0"},[e("h6",{staticStyle:{"font-size":"15px",color:"gray"}},[this._v("Code files")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-2 text-left py-0 my-0"},[e("i",{staticClass:"las la-folder",staticStyle:{"font-size":"24px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 d-flex py-0 my-0",staticStyle:{"align-items":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[this._v("Files")])])}],!1,null,"b71a0176",null);e.default=o.exports}}]);