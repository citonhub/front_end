(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{308:function(o,t,a){var e=a(431);"string"==typeof e&&(e=[[o.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(25)(e,n);e.locals&&(o.exports=e.locals)},430:function(o,t,a){"use strict";var e=a(308);a.n(e).a},431:function(o,t,a){(o.exports=a(24)(!1)).push([o.i,"\n.appBox[data-v-306335b8]:hover{\n   background: #F3F8FC;\n   cursor: pointer;\n}\n",""])},592:function(o,t,a){"use strict";a.r(t);var e=a(243),n=a.n(e),i=(a(242),{data:function(){return{Rule:[function(o){return!!o||"Name is required"},function(o){return o.length<80||"Name must be less than 60 characters"},function(o){return/^[A-Za-z0-9 ]+$/.test(o)||"Cannot contain special character"}],title:"",owner:"",owners:["You","CitonHub"],app:"",languageIcon:[{name:"Web app NodeJs",icon:"lab la-node-js",border_color:"#263238",background:"#ffffff",id:"NodeJs"},{name:"Web app PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:"PHP"},{name:"JavaScript",icon:"lab la-js-square",border_color:"#263238",background:"#ffffff",id:26},{name:"PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:35},{name:"Python 3.81",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:39},{name:"Python for ML(3.7.7)",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:100},{name:"C",icon:"mdi mdi-language-c",border_color:"#263238",background:"#ffffff",id:4},{name:"C++",icon:"mdi mdi-language-cpp",border_color:"#263238",background:"#ffffff",id:11},{name:"Java",icon:"lab la-java",border_color:"#263238",background:"#ffffff",id:25},{name:"C#",icon:"mdi mdi-language-csharp",border_color:"#263238",background:"#ffffff",id:13},{name:"Erlang",icon:"lab la-erlang",border_color:"#263238",background:"#ffffff",id:18},{name:"Kotlin",icon:"mdi mdi-language-kotlin",border_color:"#263238",background:"#ffffff",id:27},{name:"Fortran",icon:"mdi mdi-language-fortran",border_color:"#263238",background:"#ffffff",id:21},{name:"Perl",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:34},{name:"R",icon:"mdi mdi-language-r",border_color:"#263238",background:"#ffffff",id:40},{name:"Ruby",icon:"mdi mdi-language-ruby",border_color:"#263238",background:"#ffffff",id:41},{name:"Go",icon:"mdi mdi-language-go",border_color:"#263238",background:"#ffffff",id:22},{name:"Hashkell",icon:"mdi mdi-language-haskell",border_color:"#263238",background:"#ffffff",id:24},{name:"Lua",icon:"mdi mdi-language-lua",border_color:"#263238",background:"#ffffff",id:28},{name:"Pascal",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:33},{name:"TypeScript",icon:"mdi mdi-language-typescript",border_color:"#263238",background:"#ffffff",id:46},{name:"Rust",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:42},{name:"Swift",icon:"lab la-swift",border_color:"#263238",background:"#ffffff",id:45},{name:"Scala",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:43}],languages:["Web app with NodeJs","Web app with PHP","JAVASCRIPT(Node)","PYTHON(3.8.1)","PYTHON FOR ML(3.7.7)","SQL","C","C++","JAVA","C#","ERLANG","COBOL","KOTLIN","FOTRAN","PERL","R","RUBY","GO","HASKELL","LUA","PASCAL","RUST","SCALA","SWIFT"],loading:!1,selectLangValue:[]}},mounted:function(){this.$root.showTopBar=!1},methods:{selectLang:function(o){this.selectLangValue=o,this.languageIcon.map((function(t){o.name==t.name?(t.border_color="#3C87CD",t.background="#F3F8FC"):(t.border_color="#263238",t.background="#ffffff")}))},createProject:function(){var o=this;this.loading=!0,axios.post("/create-project",{app_type:"Multiple-pages",title:this.title,panel_language:this.selectLangValue.id,language_name:this.selectLangValue.name.toUpperCase()}).then((function(t){200==t.status&&(o.$root.projectList.user_projects.unshift(t.data.project),o.$root.LocalStore("user_projects_"+o.$root.username,o.$root.projectList),o.$router.push({path:"/board/projects/panel/"+t.data.project.project_slug}))})).catch((function(t){o.showAlert("Oops!","Unable to create project,please try again","error"),o.loading=!1}))},showAlert:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;"info"==a&&n.a.info({title:o,message:t,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==a&&n.a.success({title:o,message:t,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==a&&n.a.warning({title:o,message:t,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==a&&n.a.error({title:o,message:t,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},goToProjectList:function(){this.$router.push({path:"/board/projects/list"})}}}),r=(a(430),a(4)),l=Object(r.a)(i,(function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("v-app",{staticClass:"px-0",staticStyle:{background:"transparent"}},[a("div",{staticClass:"my-lg-3 my-md-3 py-0 py-md-2 col-12 ",staticStyle:{background:"#F5F5FB"}}),o._v(" "),a("div",{staticClass:"col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky","z-index":"9999999999",background:"#F5F5FB","border-bottom":"1px solid #c5c5c5"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 py-0 my-0"},[a("h5",[a("v-btn",{attrs:{icon:""},on:{click:o.goToProjectList}},[a("v-icon",[o._v("las la-arrow-left")])],1),o._v(" Create a project")],1)]),o._v(" "),a("div",{staticClass:"col-6 py-0 my-0 text-right"},[a("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"HeaderFont"},attrs:{loading:o.loading,disabled:0==o.selectLangValue.length||""==o.title,small:"",rounded:"",color:"#3C87CD"},on:{click:o.createProject}},[o._v("\n             Create\n           ")])],1)])]),o._v(" "),a("div",{staticClass:" px-1 col-12 py-2 d-md-none d-block fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","border-bottom":"1px solid #c5c5c5"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 py-0 my-0"},[a("v-btn",{attrs:{icon:""},on:{click:o.goToProjectList}},[a("v-icon",[o._v("las la-arrow-left")])],1),o._v(" "),a("h6",{staticClass:"d-inline-block"},[o._v("Create a project")])],1),o._v(" "),a("div",{staticClass:"col-4 py-0 my-0 text-right"},[a("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"HeaderFont"},attrs:{loading:o.loading,small:"",rounded:"",disabled:0==o.selectLangValue.length||""==o.title,color:"#3C87CD"},on:{click:o.createProject}},[o._v("\n             Create\n           ")])],1)])]),o._v(" "),a("div",{staticClass:"col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-4 px-md-2 "},[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-lg-6 py-1 my-0 px-2"},[a("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{label:"Title",counter:"60","persistent-hint":"",hint:"What do you want to build?","prepend-inner-icon":"las la-laptop-code",rules:o.Rule,color:"#3C87CD"},model:{value:o.title,callback:function(t){o.title=t},expression:"title"}})],1),o._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 px-2 text-left"},[a("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[o._v("Choose application type")])]),o._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 mt-0 px-2 text-left"},[a("div",{staticClass:"row"},o._l(o.languageIcon,(function(t,e){return a("div",{key:e,staticClass:"  col-4 col-lg-2 px-2 my-0 py-2 "},[a("v-card",{staticClass:"px-1 py-1 appBox",style:"height:100px; border:1px solid "+t.border_color+"; border-radius:7px;",attrs:{color:t.background},on:{click:function(a){return o.selectLang(t)}}},[a("div",{staticClass:"d-flex",staticStyle:{height:"100%","align-items":"center","justify-content":"center",width:"100%"}},[a("div",{staticClass:"text-center"},[a("i",{class:t.icon,staticStyle:{"font-size":"30px"}}),o._v(" "),a("div",[a("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[o._v(o._s(t.name))])])])])])],1)})),0)])])])])}),[],!1,null,"306335b8",null);t.default=l.exports}}]);