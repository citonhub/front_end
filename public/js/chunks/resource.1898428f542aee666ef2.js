(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{364:function(e,t,o){var s=o(603);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,r);s.locals&&(e.exports=s.locals)},602:function(e,t,o){"use strict";var s=o(364);o.n(s).a},603:function(e,t,o){(e.exports=o(24)(!1)).push([e.i,"\n.handle[data-v-44fbc4fc]{\n  cursor: move;\n}\n.ghost[data-v-44fbc4fc] {\n  opacity: 0.5;\n  background: white;\n}\n",""])},726:function(e,t,o){"use strict";o.r(t);o(294);var s={data:function(){return{resources:[],loading:!1,saving:!1,loadingResources:!1,resourceName:"",has_devto_resource:!0,drag:!1,showAddArticle:!1,devtoUsername:"",showTextarea:!1,newPlaylistDesc:"",loadingDevtoConnect:!1}},mounted:function(){this.fetchResources(),this.$root.showYoutubePlayer=!1,this.$root.showYoutubePlayerSm=!1,this.$root.showAddButton=!1},computed:{dragOptions:function(){return{animation:200,group:"playlist",disabled:!1,ghostClass:"ghost"}},compiledMarkdown:function(){var e=new marked.Renderer;return e.link=function(e,t,o){return marked.Renderer.prototype.link.call(this,e,t,o).replace("<a","<a target='_blank' ")},marked.setOptions({renderer:e}),marked(this.newPlaylistDesc,{sanitize:!0})}},methods:{processContent:function(){this.contentInWord=this.compiledMarkdown},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.innerSideBarContent="",this.$root.chatComponent.innerSideBarContent=""},importDevtoArticle:function(){var e=this;this.loadingDevtoConnect=!0,axios.get("/connect-devto/"+this.$root.selectedSpace.space_id+"/"+this.devtoUsername).then((function(t){if(200==t.status){var o=t.data.resource;e.resources.unshift(o),e.has_devto_resource=!0,e.loadingDevtoConnect=!1,e.$root.LocalStore("channel_resource_"+e.$root.selectedSpace.space_id+e.$root.username,e.resources),e.saveResourceOrder(!1),e.$root.chatComponent.showAlert("Created!","Resource has been created","success")}})).catch((function(t){e.$root.chatComponent.showAlert("Oops!","Unable to create resource,please try again","error"),e.loadingDevtoConnect=!1}))},checkIfisOwner:function(){var e=this,t=this.$root.selectedSpaceMembers.filter((function(t){return t.user_id==e.$root.user_temp_id}));return 0!=t.length&&t[0].is_admin},deleteResource:function(e){var t=this,o=this.resources.filter((function(t){return t.resource_id!=e.resource_id}));this.resources=o,axios.post("/delete-resources",{resource_id:e.resource_id}).then((function(e){200==e.status&&(t.$root.chatComponent.showAlert("Deleted!","Resource has been deleted","success"),t.$root.LocalStore("channel_resource_"+t.$root.selectedSpace.space_id+t.$root.username,t.response),t.saveResourceOrder(!1))})).catch((function(e){t.$root.chatComponent.showAlert("Oops!","Unable to delete resource,please try again","error")}))},showDelete:function(e){this.resources.map((function(e){e.delete=!1})),e.delete=!0},handleOnDrop:function(){this.drag=!1,this.saveResourceOrder()},fetchResources:function(){var e=this;this.loadingResources=!0,this.$root.getLocalStore("channel_resource_"+this.$root.selectedSpace.space_id+this.$root.username).then((function(t){if(null!=t){var o=JSON.parse(t);e.resources=o,e.loadingResources=!1,e.checkForNewResource()}else axios.get("/fetch-resource/".concat(e.$root.selectedSpace.space_id,"/resource")).then((function(t){if(200==t.status){e.$root.LocalStore("channel_resource_"+e.$root.selectedSpace.space_id+e.$root.username,t.data.resources);var o=t.data.resources;e.has_devto_resource=t.data.has_devto_resource,e.resources=o,e.loadingResources=!1}})).catch((function(t){e.loadingResources=!1}))}))},saveResourceOrder:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=[];this.resources.forEach((function(e){o.push(e.resource_id)})),axios.post("/save-resources-order",{space_id:this.$root.selectedSpace.space_id,resources:o,type:"resource"}).then((function(o){200==o.status&&(t&&e.$root.chatComponent.showAlert("Saved!","Your changes have been saved","success"),e.$root.LocalStore("channel_resource_"+e.$root.selectedSpace.space_id+e.$root.username,e.resources))})).catch((function(t){e.$root.chatComponent.showAlert("Oops!","Unable to save changes,please try again","error")}))},checkForNewResource:function(){var e=this;axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id,"/resource")).then((function(t){if(200==t.status){e.$root.LocalStore("channel_resource_"+e.$root.selectedSpace.space_id+e.$root.username,t.data.resources);var o=t.data.resources;e.resources=o,e.has_devto_resource=t.data.has_devto_resource,e.$root.forcereloadResource=!1}})).catch((function(t){e.loadingResources=!1}))},showContent:function(e){this.$root.selectedResource=e,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/resource_content/"+e.resource_id}),this.$root.resourceContentType="resources"},createResources:function(){var e=this;""!=this.resourceName&&""!=this.contentInWord&&(this.saving=!0,axios.post("/create-resource",{space_id:this.$root.selectedSpace.space_id,name:this.resourceName,type:"resource",info:this.contentInWord}).then((function(t){200==t.status&&(e.resourceName="",e.$root.getLocalStore("channel_resource_"+e.$root.selectedSpace.space_id+e.$root.username).then((function(o){if(null!=o){var s=JSON.parse(o);s=s.unshift(t.data.resource),e.$root.LocalStore("channel_resource_"+e.$root.selectedSpace.space_id+e.$root.username,s)}})),e.$root.channelHasResources=!0,e.resources.unshift(t.data.resource),e.saveResourceOrder(!1),e.showContent(t.data.resource),e.saving=!1)})).catch((function(t){console.log(t),e.saving=!1})))}}},r=(o(602),o(4)),a=Object(r.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"py-0 px-0"},[o("div",{staticClass:"col-12 px-1 py-0 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 py-1 px-1"},[o("v-btn",{attrs:{icon:""},on:{click:e.goBack}},[o("v-icon",[e._v("las la-arrow-left")])],1)],1),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"col-2 py-0 mr-1 text-right"})]),e._v(" "),e.loadingResources?[o("div",{staticClass:"col-12 mt-4 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[e.checkIfisOwner()?[o("div",{staticClass:" px-2 px-md-2 py-1  "},[o("v-card",{staticClass:"d-flex flex-row px-1 py-1 col-12 ",staticStyle:{background:"rgba(125, 179, 229, 0.4)","align-items":"center"},attrs:{flat:""}},[o("div",{staticClass:"d-flex flex-column",staticStyle:{width:"100%"}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.resourceName,expression:"resourceName"}],staticClass:"py-2 px-2",staticStyle:{border:"1px solid white",width:"100%","border-radius":"2px","font-family":"BodyFont","font-size":"13px",background:"white"},attrs:{placeholder:"Create a resource"},domProps:{value:e.resourceName},on:{focus:function(t){e.showTextarea=!0},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createResources()},input:function(t){t.target.composing||(e.resourceName=t.target.value)}}})]),e._v(" "),e.showTextarea||""!=e.newPlaylistDesc?o("div",{staticClass:"mt-2"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newPlaylistDesc,expression:"newPlaylistDesc"}],staticClass:"py-2 px-2",staticStyle:{border:"1px solid white",width:"100%","border-radius":"2px","font-family":"BodyFont",height:"95px","font-size":"13px",background:"white"},attrs:{placeholder:"What is this resource about? Markdown is supported."},domProps:{value:e.newPlaylistDesc},on:{input:[function(t){t.target.composing||(e.newPlaylistDesc=t.target.value)},e.processContent]}})]):e._e()]),e._v(" "),o("div",{staticClass:"ml-auto px-2"},[o("v-btn",{staticStyle:{background:"white"},attrs:{loading:e.saving,icon:"",small:""},on:{click:function(t){return e.createResources()}}},[o("v-icon",{staticStyle:{"font-size":"24px"}},[e._v("\n                   las la-arrow-right\n                 ")])],1)],1)])],1)]:e._e(),e._v(" "),o("draggable",e._b({staticClass:"d-flex flex-row flex-wrap col-12 py-1 px-2 px-md-2 ",attrs:{tag:"div",handle:".handle"},on:{start:function(t){e.drag=!0},end:e.handleOnDrop},model:{value:e.resources,callback:function(t){e.resources=t},expression:"resources"}},"draggable",e.dragOptions,!1),e._l(e.resources,(function(t,s){return o("v-card",{key:s,staticClass:"d-flex flex-row px-1  mb-2 col-12 ",staticStyle:{background:"rgba(125, 179, 229, 0.4)",cursor:"pointer"},attrs:{ripple:!1,flat:""}},[o("div",{staticClass:"mr-2 ",on:{click:function(o){return e.showContent(t)}}},[o("v-icon",{staticClass:"ml-2",attrs:{color:"#000000"}},[e._v("las la-folder")])],1),e._v(" "),o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",width:"100%"},on:{click:function(o){return e.showContent(t)}}},[o("span",{staticStyle:{"font-family":"BodyFont",color:"black","font-size":"13px"}},[e._v(e._s(t.name))])]),e._v(" "),e.checkIfisOwner()?[t.delete?e._e():o("div",{staticClass:"ml-auto px-2 d-flex flex-row",staticStyle:{cursor:"pointer","align-items":"center"}},[o("div",{staticClass:"handle"},[o("v-icon",[e._v("las la-braille")])],1),e._v(" "),o("div",{staticClass:"ml-1",on:{click:function(o){return o.stopPropagation(),e.showDelete(t)}}},[o("v-btn",{attrs:{"x-small":"",icon:""}},[o("v-icon",{staticStyle:{"font-size":"17px"}},[e._v("mdi mdi-close")])],1)],1)]),e._v(" "),t.delete?o("div",{staticClass:"ml-auto d-flex flex-row",staticStyle:{"align-items":"center"}},[o("span",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[e._v("Delete?")]),e._v(" "),o("div",{staticClass:"ml-1"},[o("v-btn",{staticStyle:{"font-size":"10px",color:"white","font-family":"BodyFont"},attrs:{"x-small":"",color:"error"},on:{click:function(o){return e.deleteResource(t)}}},[e._v("Yes")])],1),e._v(" "),o("div",{staticClass:"ml-1"},[o("v-btn",{staticStyle:{"font-size":"10px","font-family":"BodyFont"},attrs:{"x-small":""},on:{click:function(e){t.delete=!1}}},[e._v("No")])],1)]):e._e()]:e._e()],2)})),1),e._v(" "),e.checkIfisOwner()&&!e.has_devto_resource?[o("div",{staticClass:"col-12 py-1 text-center",staticStyle:{"margin-top":"70px"}},[e._m(1),e._v(" "),e.showAddArticle?o("div",{staticClass:"col-12 px-1 py-1 d-flex flex-row",staticStyle:{"align-items":"center"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.devtoUsername,expression:"devtoUsername"}],staticClass:"py-2 px-3",staticStyle:{width:"100%",heigth:"100%","font-size":"13px",background:"whitesmoke","border-radius":"2px","font-family":"BodyFont","text-transform":"none"},attrs:{placeholder:"Your devto username",type:"search"},domProps:{value:e.devtoUsername},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.importDevtoArticle()},input:function(t){t.target.composing||(e.devtoUsername=t.target.value)}}}),e._v(" "),o("div",{staticClass:"ml-1"},[o("v-btn",{staticStyle:{"font-size":"10px",color:"white","font-family":"BodyFont"},attrs:{loading:e.loadingDevtoConnect,small:"",color:"#3C87CD"},on:{click:function(t){return e.importDevtoArticle()}}},[e._v("Import articles")])],1)]):o("div",{staticClass:"col-12 py-1 text-center"},[o("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"13px","text-transform":"none"},attrs:{rounded:"",medium:"",outlined:"",color:"#000000"},on:{click:function(t){e.showAddArticle=!0}}},[o("img",{staticClass:"px-2",attrs:{src:"/imgs/devto.png",height:"27px"}}),e._v(" "),o("span",[e._v("Import articles")])])],1)])]:e._e()]],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-8 py-1 text-center"},[t("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Resources")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-12 py-1 text-center"},[t("div",{staticClass:"mt-1 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[this._v("Create resource from your DevTo articles")])])}],!1,null,"44fbc4fc",null);t.default=a.exports}}]);