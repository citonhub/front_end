(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{618:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{title:"",contributors:[],app:"",Connections:[],loadingConnection:"",Rule:[function(t){return!!t||"Title is required"},function(t){return t.length<80||"Title must be less than 80 characters"},function(t){return/^[A-Za-z0-9 ]+$/.test(t)||"Cannot contain special character"}],requiredRule:[function(t){return!!t||"This feild is required"}],loading:!1,showConnection:!1}},mounted:function(){this.$root.isLogged?(this.fetchConnected(),this.title=this.$root.projectData.project.title):this.$root.checkIfUserIsLoggedIn()},methods:{toggleData:function(t){if(this.contributors.filter((function(e){return e==t})).length>0){var e=this.contributors.filter((function(e){return e!=t}));this.contributors=e}else this.contributors.push(t)},checkIfSelected:function(t){return this.contributors.filter((function(e){return e==t})).length>0},saveSettings:function(){var t=this;this.loading=!0,axios.post("/save-panel-settings",{contributors:this.contributors,project_slug:this.$route.params.project_slug,title:this.title}).then((function(e){200==e.status&&(t.$root.projectPanelComponent.showAlert("Saved","Your changes have been saved","success"),t.loading=!1,t.$router.push({path:"/board/projects/panel/"+t.$root.projectData.project.project_slug}))})).catch((function(e){t.$root.projectPanelComponent.showAlert("Oops!","Something went wrong","error"),t.loading=!1}))},fetchConnected:function(){var t=this;this.loadingConnection=!0,axios.get("/fetch-connected").then((function(e){if(200==e.status){t.Connections=e.data.data;var n=[];t.$root.ProjectMembers.forEach((function(e){t.Connections.forEach((function(t){t.user_temp_id==e.user_id&&n.push(t.username)}))})),t.contributors=n,t.loadingConnection=!1}})).catch((function(e){t.loadingConnection=!1}))}}},i=n(4),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{background:"transparent","font-family":"BodyFont","padding-top":"20px"}},[n("div",{staticClass:"col-12 mt-5 mt-md-1 ml-lg-4"},[n("h6",[t._v("Panel Settings")])]),t._v(" "),n("div",{staticClass:"col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1"},[n("v-form",{staticClass:"row my-2 py-2 px-2"},[n("div",{staticClass:"col-12 py-2 my-0 px-2"},[n("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{rules:t.Rule,"prepend-inner-icon":"las la-laptop-code",dense:"",placeholder:"title...",outlined:"",color:"#3C87CD",label:"Project Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("div",{staticClass:"col-12 py-2 my-0 px-2"},[n("v-select",{staticStyle:{"font-size":"13px"},attrs:{dense:"",label:"Contributors",counter:"20",placeholder:"select...",rules:t.requiredRule,outlined:"","persistent-hint":"",hint:"Add people you are following",chips:"",loading:t.loadingConnection,items:t.Connections,"item-text":"username","item-value":"username",multiple:"",color:"#3C87CD"},on:{focus:function(e){t.showConnection=!0}},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("v-chip",t._b({key:JSON.stringify(e.item),staticClass:"my-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"},attrs:{"input-value":e.selected,color:"#3C87CD",dense:"",outlined:"",disabled:e.disabled}},"v-chip",e.attrs,!1),[t._v("\n             \n              "+t._s(e.item.username)+"\n            ")])]}}]),model:{value:t.contributors,callback:function(e){t.contributors=e},expression:"contributors"}})],1),t._v(" "),n("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[n("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"HeaderFont"},attrs:{type:"submit",small:"",color:"#3C87CD",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.saveSettings(e)}}},[t._v("save")])],1)])],1),t._v(" "),t.showConnection?n("div",{staticClass:"col-12 d-lg-none py-0 px-0 d-flex",staticStyle:{"align-items":"center",left:"0","justify-content":"center",background:"rgba(27, 27, 30, 0.1)",position:"fixed",height:"100%",top:"0%","z-index":"999999999999"},on:{click:function(e){t.showConnection=!1}}},[n("v-card",{staticClass:"py-2",staticStyle:{width:"260px","max-height":"400px","overflow-x":"auto"}},[n("div",{staticClass:"col-12 px-0 py-1 d-flex flex-column"},t._l(t.Connections,(function(e,o){return n("v-card",{key:o,staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(n){return n.stopPropagation(),t.toggleData(e.username)}}},[t.checkIfSelected(e.username)?[n("v-icon",{staticClass:"mr-1",attrs:{color:"#3C87CD"}},[t._v("las la-check-square")])]:[n("v-icon",{staticClass:"mr-1"},[t._v("las la-minus-square")])],t._v(" "),n("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v(t._s(e.username))])],2)})),1)])],1):t._e()])}),[],!1,null,null,null);e.default=s.exports}}]);