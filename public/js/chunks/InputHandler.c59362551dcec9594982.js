(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{670:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{that:this}},methods:{closeModal:function(){this.$root.showProjectInput=!1},preventDefault:function(){},SendToSandBox:function(){var t="";this.$router.currentRoute.path.indexOf("channel")>=0&&(t=this.$root.codeboxComponent.code),this.$router.currentRoute.path.indexOf("panel-loader")>=0&&(t=this.$root.projectData.project_files.code_files[0].content),this.$router.currentRoute.path.indexOf("challenges")>=0&&(t=this.$root.panelLoaderProject.participantSelected.main_file_content);var e="";this.$root.projectInputData.forEach((function(o){var n="input\\(\\'"+o.name+"\\'\\)",a='input\\(\\"'+o.name+'\\"\\)',r=new RegExp(n,"g"),i=new RegExp(a,"g");e=(e=t.replace(r,'"'+o.value+'"')).replace(i,'"'+o.value+'"')})),this.$router.currentRoute.path.indexOf("channel")>=0&&(this.$root.codeboxComponent.runCodeOnSandbox(e),this.$root.codeboxComponent.ResultCode="sending to sandbox..."),this.$router.currentRoute.path.indexOf("panel-loader")>=0&&(this.$root.panelLoaderProject.runCodeOnSandbox(e),this.$root.panelLoaderProject.pageContent="sending to sandbox..."),this.$router.currentRoute.path.indexOf("challenges")>=0&&(this.$root.panelLoaderProject.runCodeOnSandbox(e),this.$root.panelLoaderProject.pageContent="sending to sandbox..."),this.closeModal()}}},a=o(4),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{on:{click:function(e){return e.stopPropagation(),t.preventDefault(e)}}},[o("v-card",{staticClass:"col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light",attrs:{"data-app":"true"}},[o("div",{staticClass:"d-flex flex-row px-1 py-2",staticStyle:{"border-bottom":"1px solid #c5c5c5","border-radius":"0px","align-items":"center"}},[o("div",{staticStyle:{"font-family":"HeaderFont","font-size":"14px"}},[t._v("This program needs input")]),t._v(" "),o("v-btn",{staticClass:"ml-auto ",staticStyle:{background:"#3C87CD"},attrs:{small:"",icon:"",color:"#ffffff"},on:{click:t.closeModal}},[o("v-icon",[t._v("mdi-close mdi-18px")])],1)],1),t._v(" "),t._l(t.that.$root.projectInputData,(function(e,n){return o("div",{key:n},[o("div",{staticClass:"mt-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(e.name))]),t._v(" "),o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{autofocus:"",dense:"",outlined:"",color:"#3C87CD"},model:{value:e.value,callback:function(o){t.$set(e,"value",o)},expression:"input.value"}})],1)})),t._v(" "),o("div",{staticClass:"col-12 text-center pb-2 py-0"},[o("v-btn",{staticClass:"mx-2 ",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.SendToSandBox}},[t._v("Send")])],1)],2)],1)}),[],!1,null,"31ab5c62",null);e.default=r.exports}}]);