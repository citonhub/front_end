(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{775:function(e,t,a){"use strict";a.r(t);var o={data:function(){return{shelveName:"",Alert:!1,FileName:"",alertMsg:"",languageCat:[],front_languages:["HTML","CSS","JAVASCRIPT","MD"],back_languages:["PHP","JAVASCRIPT"],programmingLanguage:"",Rule:[function(e){return!!e||"Oh! you missed this."},function(e){return e.length<30||"File Name must be less than 30 characters"},function(e){return e.split(" ").length<=1||"no one space allowed"},function(e){return/^[A-Za-z0-9 ]+$/.test(e)||"Cannot contain special character"}],requiredRule:[function(e){return!!e||"Oh! you missed this."}],loading:!1,formstate:!1,appTypeList:[{id:"NodeJs",name:"Web app with NodeJs"},{id:"PHP",name:"Web app with PHP"},{id:26,name:"JAVASCRIPT(Node)"},{id:35,name:"PHP"},{id:39,name:"PYTHON(3.8.1)"},{id:100,name:"PYTHON For ML(3.7.7)"},{id:38,name:"PYTHON(2.7.17)"},{id:44,name:"SQL"},{id:4,name:"C"},{id:11,name:"C++"},{id:25,name:"JAVA"},{id:13,name:"C#"},{id:18,name:"ERLANG"},{id:14,name:"COBOL"},{id:27,name:"KOTLIN"},{id:21,name:"FOTRAN"},{id:34,name:"PERL"},{id:40,name:"R"},{id:41,name:"RUBY"},{id:22,name:"GO"},{id:24,name:"HASKELL"},{id:28,name:"LUA"},{id:33,name:"PASCAL"},{id:42,name:"RUST"},{id:43,name:"SCALA"},{id:45,name:"SWIFT"},{id:46,name:"TYPESCRIPT"}],sandboxCodeId:""}},components:{},mounted:function(){this.$root.showTabs=!0,this.$root.showHeader=!1,this.setLanguageType()},methods:{setLanguageType:function(){var e=this;if("front_end"==this.$route.params.language_type&&(this.languageCat=this.front_languages),"code_files"==this.$route.params.language_type){var t=this.appTypeList.filter((function(t){return t.id==e.$root.projectData.project_panel.panel_language}));this.languageCat=[t[0].name]}"back_end"==this.$route.params.language_type&&(this.programmingLanguage=this.$root.projectData.project_panel.panel_language,"NodeJs"==this.programmingLanguage&&(this.languageCat=["JAVASCRIPT"]),"PHP"==this.programmingLanguage&&(this.languageCat=["PHP"]))},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},saveCodeFile:function(){var e=this,t=this.$root.projectData.project_files.code_files.filter((function(t){return t.file_name==e.FileName}));t.length>0&&t[0].language_type==this.programmingLanguage?this.$root.projectPanelComponent.showAlert("Oops!","File exist,please try again","error"):this.$refs.form.validate()&&(this.loading=!0,axios.post("/save-code-file",{project_slug:this.$route.params.project_slug,file_name:this.FileName,language_type:this.programmingLanguage,code_category:this.$route.params.language_type}).then((function(t){200==t.status&&(e.$root.projectData.project_files.code_files.push(t.data.code_file),e.$root.editorSideComponent.separateCodeFiles(),e.$root.LocalStore("user_projects_data_"+e.$route.params.project_slug+e.$root.username,e.$root.projectData),e.$root.projectData.project.is_web?e.$root.projectPanelComponent.showEditor(t.data.code_file,"front-end"):e.$root.projectPanelComponent.showEditor(t.data.code_file,"code-file"))})).catch((function(t){e.$root.projectPanelComponent.showAlert("Oops!","Unable to save file,please try again","error"),e.loading=!1})))}}},n=a(4),i=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{background:"transparent","font-family":"BodyFont","padding-top":"20px"}},[a("div",{staticClass:"col-12 mt-5 mt-md-1 ml-lg-4"},[a("h6",[e._v("Add Code File")])]),e._v(" "),a("div",{staticClass:"col-md-8 col-lg-4 offset-lg-4 offset-md-2 py-1"},[a("v-form",{ref:"form",staticClass:"row my-2 py-2 px-2",model:{value:e.formstate,callback:function(t){e.formstate=t},expression:"formstate"}},[a("div",{staticClass:"col-12 py-2 my-0 px-2"},[a("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{rules:e.Rule,counter:"30",dense:"",placeholder:"name...",outlined:"",color:"#3C87CD",label:"File Name"},model:{value:e.FileName,callback:function(t){e.FileName=t},expression:"FileName"}})],1),e._v(" "),a("div",{staticClass:"col-12 py-2 my-0 px-2"},[a("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[e._v("\n                Select language\n            ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.programmingLanguage,expression:"programmingLanguage"}],staticClass:"browser-default custom-select",staticStyle:{"font-size":"14px !important","font-family":"BodyFont",background:"transparent"},attrs:{placeholder:"select language"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.programmingLanguage=t.target.multiple?a:a[0]}}},e._l(e.languageCat,(function(t,o){return a("option",{key:o,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),a("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[a("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"HeaderFont"},attrs:{type:"submit",loading:e.loading,small:"",color:"#3C87CD"},on:{click:function(t){return t.preventDefault(),e.saveCodeFile(t)}}},[e._v("Add")])],1)])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);