(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{632:function(t,o,e){"use strict";e.r(o);var s=e(243),i=e.n(s),r=(e(242),{data:function(){return{loadingProject:!1}},components:{Project:function(){return e.e(51).then(e.bind(null,671))}},mounted:function(){this.$root.isLogged?(this.$root.showTopBar=!0,this.$root.projectListComponent=this,this.fetchProjects()):this.$root.checkIfUserIsLoggedIn()},methods:{fetchProjects:function(){var t=this;this.loadingProject=!0,this.$root.getLocalStore("user_projects_"+this.$root.username).then((function(o){if(null!=o){var e=JSON.parse(o);t.$root.projectList=e,t.loadingProject=!1,t.checkForNewProjects()}else axios.get("/fetch-user-projects").then((function(o){200==o.status&&(t.$root.LocalStore("user_projects_"+t.$root.username,o.data),t.$root.projectList=o.data,t.loadingProject=!1)})).catch((function(o){t.showAlert("Oops!","Something went wrong","error"),t.loadingProject=!1}))}))},checkForNewProjects:function(){var t=this;axios.get("/fetch-user-projects").then((function(o){200==o.status&&(t.$root.LocalStore("user_projects_"+t.$root.username,o.data),t.$root.projectList=o.data)})).catch((function(t){}))},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0;"info"==e&&i.a.info({title:t,message:o,zindex:"9999999999",position:"bottomRight",timeout:2e3,transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==e&&i.a.success({title:t,message:o,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==e&&i.a.warning({title:t,message:o,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==e&&i.a.error({title:t,message:o,zindex:"9999999999",position:"bottomRight",timeout:2e3,transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},addProject:function(){this.$router.push({path:"/board/projects/add"})}}}),n=e(4),c=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:" mt-1 col-12 d-md-none d-block",staticStyle:{background:"#F5F5FB"}}),t._v(" "),e("div",{staticClass:"col-lg-10 offset-lg-1 py-1 pt-2 px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",top:"0%",background:"#F5F5FB","border-bottom":"1px solid #c5c5c5"}},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-6  py-0 my-0 text-right"},[this.$root.projectList.user_projects?[0!=this.$root.projectList.user_projects.length||0!=this.$root.projectList.contributor_projects.length||0!=this.$root.projectList.pinned_projects.length?e("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:t.addProject}},[e("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus")]),t._v(" "),e("span",{staticStyle:{"text-transform":"none"}},[t._v("Create a project")])],1):t._e()]:t._e()],2)])]),t._v(" "),this.$root.projectList.user_projects?[0!=this.$root.projectList.user_projects.length||0!=this.$root.projectList.contributor_projects.length||0!=this.$root.projectList.pinned_projects.length?e("v-btn",{staticClass:"d-md-none d-inline-block",staticStyle:{"z-index":"99999999",position:"fixed",bottom:"3%",right:"3%"},attrs:{fab:"",color:"#3C87CD"},on:{click:t.addProject}},[e("v-icon",{staticStyle:{"font-size":"24px",color:"white"}},[t._v("las la-plus")])],1):t._e()]:t._e(),t._v(" "),this.$root.TopBarComponentBoard?[this.$root.TopBarComponentBoard.searchContent.length>0?[e("div",{staticClass:"col-md-10 offset-md-1 py-1 px-2 "},[e("div",{staticClass:"row text-center "},[e("div",{staticClass:"col-12 mt-3 mt-md-0 d-md-none d-block"}),t._v(" "),t._l(this.$root.projectSearchList,(function(t,o){return e("project",{key:o+"search",attrs:{project:t}})}))],2)])]:[t.loadingProject?[e("div",{staticClass:"col-md-10 offset-md-1 py-1 px-2 "},[e("div",{staticClass:"row text-center "},[e("div",{staticClass:"col-12 mt-3 mt-md-0 d-md-none d-block"}),t._v(" "),e("div",{staticClass:"col-12 mt-4 text-center"},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)])])]:t._e(),t._v(" "),t.loadingProject?t._e():[0==this.$root.projectList.user_projects.length&&0==this.$root.projectList.contributor_projects.length&&0==this.$root.projectList.pinned_projects.length?[e("div",{staticClass:"col-12 mt-3 mt-md-0 d-md-none d-block"}),t._v(" "),e("div",{staticClass:"col-md-6 offset-md-3 px-md-4 py-1 px-2 mt-3 mt-md-5 text-center d-flex flex-column "},[t._m(1),t._v(" "),e("div",[e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"none","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD",rounded:""},on:{click:t.addProject}},[t._v("Create a project")])],1)])]:[e("div",{staticClass:"col-md-10 offset-md-1 py-1 px-2 "},[e("div",{staticClass:"row text-center "},[e("div",{staticClass:"col-12 mt-3 mt-md-0 d-md-none d-block"}),t._v(" "),t._l(this.$root.projectList.user_projects,(function(t,o){return e("project",{key:o+"personal",attrs:{project:t}})}))],2)]),t._v(" "),this.$root.projectList.contributor_projects?[this.$root.projectList.contributor_projects.length>0?e("div",{staticClass:"col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2"},[e("h6",[t._v("Contributions")])]):t._e()]:t._e(),t._v(" "),e("div",{staticClass:"col-md-10 offset-md-1 py-1 px-2 "},[e("div",{staticClass:"row text-center"},t._l(this.$root.projectList.contributor_projects,(function(t,o){return e("project",{key:o+"contribution",attrs:{project:t}})})),1)]),t._v(" "),this.$root.projectList.pinned_projects?[this.$root.projectList.pinned_projects.length>0?e("div",{staticClass:"col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2"},[e("h6",[t._v("Pinned")])]):t._e()]:t._e(),t._v(" "),e("div",{staticClass:"col-md-10 offset-md-1 py-1 px-2 "},[e("div",{staticClass:"row text-center"},t._l(this.$root.projectList.pinned_projects,(function(t,o){return e("project",{key:o+"pinned",attrs:{project:t}})})),1)])]]]]:t._e(),t._v(" "),e("div",{staticClass:"py-5 my-5"})],2)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-6 py-0 my-0"},[o("h5",[this._v("My Projects")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"mb-3 px-3",staticStyle:{"font-size":"13px",color:"black","font-family":"BodyFont"}},[o("span",{staticStyle:{"font-family":"MediumFont",color:"black"}},[this._v("Build")]),this._v(","),o("span",{staticStyle:{"font-family":"MediumFont",color:"black"}},[this._v("test")]),this._v(" and "),o("span",{staticStyle:{"font-family":"MediumFont",color:"black"}},[this._v("collaborate")]),this._v(" on projects to improve your skill. \n                    ")])}],!1,null,"04ef4106",null);o.default=c.exports}}]);