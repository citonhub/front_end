(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{724:function(t,e,o){"use strict";o.r(e);var n=o(253).htmlToText,s={data:function(){return{resources:[],that:this,contentInWord:"",title:"",loadingInfo:!1,loadingContent:!1,input:"",showEditDesc:!1,loadingNextPage:!1,nextPageToken:""}},computed:{compiledMarkdown:function(){var t=new marked.Renderer;return t.link=function(t,e,o){return marked.Renderer.prototype.link.call(this,t,e,o).replace("<a","<a target='_blank' ")},marked.setOptions({renderer:t}),marked(this.input,{sanitize:!0})}},components:{Resource:function(){return Promise.all([o.e(10),o.e(98)]).then(o.bind(null,747))}},mounted:function(){this.fetchResourceContent(),this.setType(),this.input=n(this.$root.selectedResource.info,{})},methods:{goToSearch:function(t){"link"!=t?(this.$router.currentRoute.path.indexOf("resource_search")>=0||this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/resource_search"}),this.$root.resourceSearchType=t):this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/add_resource_url"})},checkIfisOwner:function(){var t=this,e=this.$root.selectedSpaceMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return 0!=e.length&&e[0].is_admin},saveResourceInfo:_.debounce((function(){var t=this;this.contentInWord=this.compiledMarkdown,this.loadingInfo=!0,axios.post("/save-resource-info",{resource_id:this.$root.selectedResource.resource_id,info:this.contentInWord}).then((function(e){200==e.status&&(t.loadingInfo=!1,t.$root.selectedResource.info=t.contentInWord)})).catch((function(e){t.$root.chatComponent.showAlert("Oops!","Unable to save your changes","error","bottomRight",1e4),t.loadingInfo=!1}))}),500),goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.innerSideBarContent="",this.$root.chatComponent.innerSideBarContent=""},fetchResourceContent:function(){var t=this;(this.$root.selectedResource.youtube_playlist_id&&(this.$root.showAddButton=!1,this.loadingContent=!0,axios.get("/fetch-resource-content/"+this.$root.selectedResource.resource_id).then((function(e){if(200==e.status){var o=e.data.result,n=[];o.forEach((function(t){var e={content:t,type:"youtube_video"};n.push(e)})),t.resources=n,t.nextPageToken=e.data.nextPageToken,t.loadingContent=!1}})).catch((function(e){t.loadingContent=!1,t.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")}))),this.$root.selectedResource.devto_username&&(this.loadingContent=!0,this.$root.showAddButton=!1,axios.get("/fetch-resource-content/"+this.$root.selectedResource.resource_id).then((function(e){if(200==e.status){var o=e.data.articles,n=[];o.forEach((function(t){var e={content:t,type:"devto_article"};n.push(e)})),t.resources=n,t.nextPageToken=1,t.loadingContent=!1}})).catch((function(e){t.loadingContent=!1,t.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")}))),null==this.$root.selectedResource.youtube_playlist_id&&null==this.$root.selectedResource.devto_username)&&(this.loadingContent=!0,this.$root.getLocalStore("channel_resource_content_"+this.$root.selectedResource.resource_id+this.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);0==o.length?t.$root.showAddButton=!1:t.$root.showAddButton=!0,t.resources=o,t.loadingContent=!1,t.checkForNewResourceContent()}else axios.get("/fetch-resource-content/"+t.$root.selectedResource.resource_id).then((function(e){200==e.status&&(t.$root.LocalStore("channel_resource_content_"+t.$root.selectedResource.resource_id+t.$root.username,e.data.contents),t.resources=e.data.contents,0==t.resources.length?t.$root.showAddButton=!1:t.$root.showAddButton=!0,t.loadingContent=!1)})).catch((function(e){t.loadingContent=!1,t.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")}))})))},checkForNewResourceContent:function(){var t=this;axios.get("/fetch-resource-content/"+this.$root.selectedResource.resource_id).then((function(e){200==e.status&&(t.$root.LocalStore("channel_resource_content_"+t.$root.selectedResource.resource_id+t.$root.username,e.data.contents),t.resources=e.data.contents,0==t.resources.length?t.$root.showAddButton=!1:t.$root.showAddButton=!0,t.$root.forcereloadResource=!1)})).catch((function(e){t.loadingContent=!1}))},nextPagehandler:function(t){var e=this;this.nextPageToken&&t&&(this.loadingNextPage=!0,axios.get("/fetch-resource-content/"+this.$root.selectedResource.resource_id+"/"+this.nextPageToken).then((function(t){if(200==t.status){var o=[];if(e.$root.selectedResource.devto_username){e.nextPageToken++,o=t.data.articles;var n=[];o.forEach((function(t){var e={content:t,type:"devto_article"};n.push(e)})),e.resources=n}else{e.nextPageToken=t.data.nextPageToken,o=t.data.result;var s=[];o.forEach((function(t){var e={content:t,type:"youtube_video"};s.push(e)})),e.resources=s}e.loadingNextPage=!1}})).catch((function(t){e.loadingNextPage=!1,e.$root.chatComponent.showAlert("Oops!","Something went wrong,please try again","error")})))},setType:function(){"resources"==this.$root.resourceContentType?this.title="My Articles":"videos"==this.$root.resourceContentType&&(this.title="My Videos")}}},r=o(4),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"py-0"},[o("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 px-1 pt-1 pb-0"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[o("v-icon",[t._v("las la-arrow-left")])],1)],1),t._v(" "),o("div",{staticClass:"col-8 pt-1 pb-0 text-center",staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v(t._s(t.that.$root.selectedResource.name))])])]),t._v(" "),t.loadingContent?[o("div",{staticClass:"col-12 mt-4 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[o("div",{staticClass:"col-12 px-2 px-md-2"},[o("div",{staticClass:"d-flex flex-row col-12 py-0 px-0",staticStyle:{"align-items":"center"}},[o("div",[o("h6",{staticClass:"d-inline-block"},[t._v("Description")]),t._v(" "),t.checkIfisOwner()?o("v-btn",{attrs:{"x-small":"",icon:""},on:{click:function(e){t.showEditDesc?t.showEditDesc=!1:t.showEditDesc=!0}}},[o("v-icon",[t._v("las la-edit")])],1):t._e()],1)]),t._v(" "),t.that.$root.selectedResource.user_id!=t.that.$root.user_temp_id?o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"grey"},domProps:{innerHTML:t._s(t.that.$root.selectedResource.info)}}):o("div",{staticStyle:{width:"100%"}},[t.showEditDesc?[o("v-textarea",{staticStyle:{"font-size":"13px","font-family":"BodyFont"},attrs:{dense:"",placeholder:"What is this "+t.that.$root.selectedResource.type+" about? Markdown is supported.",filled:"",height:"100",loading:t.loadingInfo,counter:"700",color:"#3C87CD"},on:{input:t.saveResourceInfo},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})]:[o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"grey"},domProps:{innerHTML:t._s(t.that.$root.selectedResource.info)}})]],2)]),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 px-2 px-md-2 ",staticStyle:{background:"transparent","font-family":"BodyFont"}},["playlist"==t.that.$root.selectedResource.type?[o("h6",[t._v("Videos")])]:[o("h6",[t._v("Links and articles")])],t._v(" "),t.resources.length>0?[o("resource",{attrs:{contents:t.resources,show_add_icon:!1}}),t._v(" "),o("div",{staticClass:"text-center col-lg-12"},[t.loadingNextPage?o("v-progress-circular",{attrs:{indeterminate:"",color:"#3C87CD"}}):t._e(),t._v(" "),o("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.nextPagehandler,expression:"nextPagehandler"}]})],1)]:["playlist"==t.that.$root.selectedResource.type?[o("div",{staticClass:"mt-4 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("No video in this playlist yet.")]),t._v(" "),t.checkIfisOwner()&&null==t.that.$root.selectedResource.youtube_playlist_id?o("div",{staticClass:"col-12 py-1 text-center mt-2"},[o("v-btn",{staticStyle:{color:"#FF0000","font-family":"BodyFont","font-size":"13px","text-transform":"none"},attrs:{medium:"",rounded:"",outlined:"",color:"#FF0000"},on:{click:function(e){return t.goToSearch("youtube")}}},[o("v-icon",{staticClass:"px-2",staticStyle:{"font-size":"35px",color:"#FF0000"}},[t._v("mdi mdi-youtube")]),t._v(" "),o("span",[t._v("Add videos from YouTube")])],1)],1):t._e()]:[o("div",{staticClass:"mt-4 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("No article or resource URL in this resource yet.")]),t._v(" "),t.checkIfisOwner()&&null==t.that.$root.selectedResource.devto_username?o("div",{staticClass:"col-12 py-1 text-center d-flex flex-row mt-2 flex-wrap"},[o("div",{staticClass:"col-12 py-1 text-center"},[o("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"13px","text-transform":"none"},attrs:{medium:"",outlined:"",rounded:"",color:"#000000"},on:{click:function(e){return t.goToSearch("devto")}}},[o("img",{staticClass:"px-2",attrs:{src:"/imgs/devto.png",height:"27px"}}),t._v(" "),o("span",[t._v("Add articles from DevTo")])])],1),t._v(" "),o("div",{staticClass:"col-12 py-2 text-center"},[o("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"13px","text-transform":"none"},attrs:{outlined:"",medium:"",rounded:"",color:"#3C87CD"},on:{click:function(e){return t.goToSearch("link")}}},[o("v-icon",{staticClass:"px-2"},[t._v("las la-link  ")]),t._v(" "),o("span",[t._v("Add resource URL")])],1)],1)]):t._e()]],t._v(" "),o("div",{staticClass:"col-12 my-5 py-5"})],2)]],2)}),[],!1,null,"bb2da53e",null);e.default=i.exports}}]);