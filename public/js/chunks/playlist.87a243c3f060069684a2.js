(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{363:function(t,e,o){var s=o(601);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,a);s.locals&&(t.exports=s.locals)},600:function(t,e,o){"use strict";var s=o(363);o.n(s).a},601:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.handle[data-v-78ea12d7]{\n  cursor: move;\n}\n.ghost[data-v-78ea12d7] {\n  opacity: 0.5;\n  background: white;\n}\n\n",""])},725:function(t,e,o){"use strict";o.r(e);o(294);var s={data:function(){return{playlists:[],loading:!1,saving:!1,drag:!1,loadingPlaylist:!1,showTextarea:!1,newPlaylistDesc:"",loadingYoutubeConnect:!1,lists:["React Tutorial","Responsiveness","Tech Writing","MEVN Projects","Code Along","New Tech","New Tech","New Tech","New Tech"],toggleForm:!1,removeModal:!1,showPlaylist:!0,has_youtube_resource:!0,youtube_connected:!1,playName:"",contentInWord:"",loadingAuthBtn:!1}},computed:{dragOptions:function(){return{animation:200,group:"playlist",disabled:!1,ghostClass:"ghost"}},compiledMarkdown:function(){var t=new marked.Renderer;return t.link=function(t,e,o){return marked.Renderer.prototype.link.call(this,t,e,o).replace("<a","<a target='_blank' ")},marked.setOptions({renderer:t}),marked(this.newPlaylistDesc,{sanitize:!0})}},mounted:function(){this.$root.showYoutubePlayer=!1,this.$root.showYoutubePlayerSm=!1,this.$root.showAddButton=!1,this.fetchPlaylists()},methods:{processContent:function(){this.contentInWord=this.compiledMarkdown},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.innerSideBarContent="",this.$root.chatComponent.innerSideBarContent=""},showContent:function(t){this.$root.selectedResource=t,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/resource_content/"+t.resource_id}),this.$root.resourceContentType="videos"},connectYoutube:function(){var t=this;this.loadingYoutubeConnect=!0,axios.get("/connect-youtube/"+this.$root.selectedSpace.space_id).then((function(e){if(200==e.status){var o=e.data.resource;t.playlists.unshift(o),t.has_youtube_resource=!0,t.loadingYoutubeConnect=!1,t.$root.LocalStore("channel_playlist_"+t.$root.selectedSpace.space_id+t.$root.username,t.playlists),t.saveResourceOrder(!1),t.$root.chatComponent.showAlert("Created!","Playlist has been created","success")}})).catch((function(e){t.$root.chatComponent.showAlert("Oops!","Unable to create playlist,please try again","error"),t.loadingYoutubeConnect=!1}))},deleteResource:function(t){var e=this,o=this.playlists.filter((function(e){return e.resource_id!=t.resource_id}));this.playlists=o,axios.post("/delete-resources",{resource_id:t.resource_id}).then((function(t){200==t.status&&(e.$root.chatComponent.showAlert("Deleted!","Playlist has been deleted","success"),e.$root.LocalStore("channel_playlist_"+e.$root.selectedSpace.space_id+e.$root.username,e.playlists),e.saveResourceOrder(!1))})).catch((function(t){e.$root.chatComponent.showAlert("Oops!","Unable to delete playlist,please try again","error")}))},checkYoutubeStatus:function(){var t=this;axios.get("/get-youtube-status").then((function(e){200==e.status&&(e.data.youtube_connected?(t.$root.youtube_connected=!0,t.youtube_connected=!0,t.connectYoutube()):setTimeout((function(){t.checkYoutubeStatus()}),3e3))})).catch((function(e){setTimeout((function(){t.checkYoutubeStatus()}),2e3)}))},checkIfisOwner:function(){var t=this,e=this.$root.selectedSpaceMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return 0!=e.length&&e[0].is_admin},handleYouTubeAuth:function(){this.loadingAuthBtn=!0;var t="https://api.citonhub.com/initiate-google-auth/"+this.$root.username;window.open(t,"_blank","location=yes,height=770,width=720,scrollbars=yes,status=yes");this.checkYoutubeStatus()},openModal:function(){this.removeModal=!0,this.toggleForm=!0},showDelete:function(t){this.playlists.map((function(t){t.delete=!1})),t.delete=!0},handleOnDrop:function(){this.drag=!1,this.saveResourceOrder()},saveResourceOrder:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=[];this.playlists.forEach((function(t){o.push(t.resource_id)})),axios.post("/save-resources-order",{space_id:this.$root.selectedSpace.space_id,resources:o,type:"playlist"}).then((function(o){200==o.status&&(e&&t.$root.chatComponent.showAlert("Saved!","Your changes have been saved","success"),t.$root.LocalStore("channel_playlist_"+t.$root.selectedSpace.space_id+t.$root.username,t.playlists))})).catch((function(e){t.$root.chatComponent.showAlert("Oops!","Unable to save changes,please try again","error")}))},closeModal:function(){this.removeModal=!1},openForm:function(){this.toggleForm=!1},fetchPlaylists:function(){var t=this;this.loadingPlaylist=!0,this.$root.getLocalStore("channel_playlist_"+this.$root.selectedSpace.space_id+this.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);t.playlists=o,t.loadingPlaylist=!1,t.checkForNewPlaylist()}else axios.get("/fetch-resource/".concat(t.$root.selectedSpace.space_id,"/playlist")).then((function(e){if(200==e.status){t.$root.LocalStore("channel_playlist_"+t.$root.selectedSpace.space_id+t.$root.username,e.data.resources);var o=e.data.resources;t.has_youtube_resource=e.data.has_youtube_resource,t.youtube_connected=e.data.youtube_connected,t.$root.youtube_connected=e.data.youtube_connected,t.playlists=o,t.loadingPlaylist=!1}})).catch((function(e){t.loadingPlaylist=!1}))}))},checkForNewPlaylist:function(){var t=this;axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id,"/playlist")).then((function(e){if(200==e.status){t.$root.LocalStore("channel_playlist_"+t.$root.selectedSpace.space_id+t.$root.username,e.data.resources);var o=e.data.resources;t.playlists=o,t.has_youtube_resource=e.data.has_youtube_resource,t.youtube_connected=e.data.youtube_connected,t.$root.youtube_connected=e.data.youtube_connected,t.$root.forcereloadResource=!1}})).catch((function(e){t.loadingPlaylist=!1}))},createPlaylists:function(){var t=this;""!=this.playName&&""!=this.contentInWord&&(this.saving=!0,axios.post("/create-resource",{space_id:this.$root.selectedSpace.space_id,name:this.playName,type:"playlist",info:this.contentInWord}).then((function(e){200==e.status&&(t.playName="",t.saving=!1,t.$root.getLocalStore("channel_playlist_"+t.$root.selectedSpace.space_id+t.$root.username).then((function(o){if(null!=o){var s=JSON.parse(o);s=s.unshift(e.data.resource),t.$root.LocalStore("channel_playlist_"+t.$root.selectedSpace.space_id+t.$root.username,s)}})),t.$root.channelHasResources=!0,t.playlists.unshift(e.data.resource),t.saveResourceOrder(!1),t.showContent(e.data.resource))})).catch((function(e){console.log(e),t.saving=!1})))}}},a=(o(600),o(4)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"py-0 px-0"},[o("div",{staticClass:"col-12 px-1 py-0 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 pt-1 pb-0 px-1"},[o("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[o("v-icon",[t._v("las la-arrow-left")])],1)],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"col-2 py-0 mr-1 text-right"})]),t._v(" "),t.loadingPlaylist?[o("div",{staticClass:"col-12 mt-4 text-center"},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[t.checkIfisOwner()?[o("div",{staticClass:"  px-2 px-md-2 py-1 "},[o("v-card",{staticClass:"d-flex flex-row px-1 py-1 col-12 ",staticStyle:{background:"rgba(125, 179, 229, 0.4)","align-items":"center"},attrs:{flat:""}},[o("div",{staticClass:"d-flex flex-column",staticStyle:{width:"100%"}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.playName,expression:"playName"}],staticClass:"py-2 px-2",staticStyle:{border:"1px solid white",width:"100%","border-radius":"2px","font-family":"BodyFont","font-size":"13px",background:"white"},attrs:{placeholder:"Create a playlist"},domProps:{value:t.playName},on:{focus:function(e){t.showTextarea=!0},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createPlaylists()},input:function(e){e.target.composing||(t.playName=e.target.value)}}})]),t._v(" "),t.showTextarea||""!=t.newPlaylistDesc?o("div",{staticClass:"mt-2"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPlaylistDesc,expression:"newPlaylistDesc"}],staticClass:"py-2 px-2",staticStyle:{border:"1px solid white",width:"100%","border-radius":"2px","font-family":"BodyFont",height:"95px","font-size":"13px",background:"white"},attrs:{placeholder:"What is this playlist about? Markdown is supported."},domProps:{value:t.newPlaylistDesc},on:{input:[function(e){e.target.composing||(t.newPlaylistDesc=e.target.value)},t.processContent]}})]):t._e()]),t._v(" "),o("div",{staticClass:"ml-auto px-2"},[o("v-btn",{staticStyle:{background:"white"},attrs:{icon:"",loading:t.saving,small:""},on:{click:function(e){return t.createPlaylists()}}},[o("v-icon",{staticStyle:{"font-size":"24px"}},[t._v("\n                   las la-arrow-right\n                 ")])],1)],1)])],1)]:t._e(),t._v(" "),o("draggable",t._b({staticClass:"d-flex flex-row flex-wrap col-12 py-1 px-2 px-md-2 ",attrs:{tag:"div",handle:".handle"},on:{start:function(e){t.drag=!0},end:t.handleOnDrop},model:{value:t.playlists,callback:function(e){t.playlists=e},expression:"playlists"}},"draggable",t.dragOptions,!1),t._l(t.playlists,(function(e,s){return o("v-card",{key:s,staticClass:"d-flex flex-row px-1   mb-2 col-12",staticStyle:{background:"rgba(125, 179, 229, 0.4)",cursor:"pointer"},attrs:{ripple:!1,flat:""}},[o("div",{staticClass:"mr-2 ",on:{click:function(o){return t.showContent(e)}}},[o("v-icon",{staticClass:"ml-2",attrs:{color:"#000000"}},[t._v("las la-play-circle")])],1),t._v(" "),o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden",width:"100%","text-overflow":"ellipsis"},on:{click:function(o){return t.showContent(e)}}},[o("span",{staticStyle:{"font-family":"BodyFont",color:"black","font-size":"13px"}},[t._v(t._s(e.name))])]),t._v(" "),t.checkIfisOwner()?[e.delete?t._e():o("div",{staticClass:"ml-auto px-2 d-flex flex-row",staticStyle:{cursor:"pointer","align-items":"center"}},[o("div",{staticClass:"handle"},[o("v-icon",[t._v("las la-braille")])],1),t._v(" "),o("div",{staticClass:"ml-1",on:{click:function(o){return o.stopPropagation(),t.showDelete(e)}}},[o("v-btn",{attrs:{"x-small":"",icon:""}},[o("v-icon",{staticStyle:{"font-size":"17px"}},[t._v("mdi mdi-close")])],1)],1)]),t._v(" "),e.delete?o("div",{staticClass:"ml-auto d-flex flex-row",staticStyle:{"align-items":"center"}},[o("span",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[t._v("Delete?")]),t._v(" "),o("div",{staticClass:"ml-1"},[o("v-btn",{staticStyle:{"font-size":"10px",color:"white","font-family":"BodyFont"},attrs:{"x-small":"",color:"error"},on:{click:function(o){return t.deleteResource(e)}}},[t._v("Yes")])],1),t._v(" "),o("div",{staticClass:"ml-1"},[o("v-btn",{staticStyle:{"font-size":"10px","font-family":"BodyFont"},attrs:{"x-small":""},on:{click:function(t){e.delete=!1}}},[t._v("No")])],1)]):t._e()]:t._e()],2)})),1),t._v(" "),t.checkIfisOwner()&&!t.has_youtube_resource?[t._m(1),t._v(" "),o("div",{staticClass:"col-12 text-center"},[t.youtube_connected?[o("v-btn",{staticStyle:{color:"#FF0000","font-family":"BodyFont","font-size":"13px","text-transform":"none"},attrs:{loading:t.loadingYoutubeConnect,rounded:"",medium:"",outlined:"",color:"#FF0000"},on:{click:t.connectYoutube}},[o("v-icon",{staticClass:"px-2",staticStyle:{"font-size":"35px",color:"#FF0000"}},[t._v("mdi mdi-youtube")]),t._v(" "),o("span",[t._v("Import videos")])],1)]:[o("v-btn",{staticStyle:{color:"#FF0000","font-family":"BodyFont","font-size":"13px","text-transform":"none"},attrs:{loading:t.loadingAuthBtn,rounded:"",medium:"",outlined:"",color:"#FF0000"},on:{click:t.handleYouTubeAuth}},[o("v-icon",{staticClass:"px-2",staticStyle:{"font-size":"35px",color:"#FF0000"}},[t._v("mdi mdi-youtube")]),t._v(" "),o("span",[t._v("Sign In")])],1)]],2)]:t._e()]],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 pt-1 pb-0 text-center"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Playlists")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"mt-1 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[this._v("Create playlist from your YouTube channel")])])}],!1,null,"78ea12d7",null);e.default=n.exports}}]);