(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{628:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{loadingDelete:!1}},methods:{copyWebLink:function(){var t,e;t="https://www.citonhub.com/run-panel/"+this.$root.projectData.project_panel.panel_id,(e=document.createElement("textarea")).value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$root.projectPanelComponent.showAlert("Copied!","Copied to clipboard","success")},shareProject:function(){this.$root.shareLink="https://www.citonhub.com/link/project/"+this.$route.params.project_slug,this.$root.shareText="Check out this project on Citonhub",this.$root.infoText="Share your project with others",this.$root.alertComponent=this.$root.projectPanelComponent,this.$root.showInvitation=!0},checkIfOwner:function(){var t=this;return 0!=this.$root.ProjectMembers.filter((function(e){return e.user_id==t.$root.user_temp_id})).length},deleteProject:function(){var t=this;this.loadingDelete||(this.loadingDelete=!0,axios.post("/delete-project",{project_slug:this.$route.params.project_slug}).then((function(e){if(200==e.status){var o=t.$root.projectList.user_projects.filter((function(e){return e.project_slug!=t.$route.params.project_slug}));t.$root.projectList.user_projects=o,t.$root.LocalStore("user_projects_"+t.$root.username,t.$root.projectList)}t.$router.push({path:"/board/projects/list"})})).catch((function(e){t.loadingDelete=!1,t.$root.projectPanelComponent.showAlert("Oops!","Unable to delete project","error")})))},gotToSettings:function(){this.$root.projectPanelComponent.showSideBar=!1,this.$router.push({path:"/board/projects/panel/"+this.$route.params.project_slug+"/set-panel"})}}},s=o(4),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"py-0 px-0",staticStyle:{width:"200px"}},[o("div",{staticClass:"col-12 px-0 py-1 d-flex flex-column"},[this.$root.projectData.project.is_web?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:t.copyWebLink}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-link")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Web App URL")])],1):t._e(),t._v(" "),o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:t.shareProject}},[o("v-icon",{staticClass:"mr-1"},[t._v("mdi mdi-share-variant")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Share")])],1),t._v(" "),o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:t.gotToSettings}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-cog")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Settings")])],1),t._v(" "),this.$root.projectData.project.user_id==this.$root.user_temp_id?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:"",loading:t.loadingDelete},on:{click:function(e){return e.stopPropagation(),t.deleteProject(e)}}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-trash")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Delete")])],1):t._e()],1)])}),[],!1,null,"9d93a410",null);e.default=a.exports}}]);