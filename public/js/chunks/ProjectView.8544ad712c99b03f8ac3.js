(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{360:function(t,e,o){var s=o(596);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,i);s.locals&&(t.exports=s.locals)},595:function(t,e,o){"use strict";var s=o(360);o.n(s).a},596:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.textarea[data-v-5e70d190] {\n    font-size:13px; \n    background:whitesmoke;\n    width:100%; \n    height: 45px;\n    max-height: 75px;\n    padding: 6px 6px;\n    resize:none; \n    overflow-x: hidden;\n     overflow-y: auto;\n  \n    border-radius:2px;\n}\n.msgTextReplynew[data-v-5e70d190]{\n  font-size: 13px;\n  color: #4d4d4d;\n}\n.scroller[data-v-5e70d190]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n.scroller[data-v-5e70d190]::-webkit-scrollbar {\n  width: 5px;\n}\n",""])},710:function(t,e,o){"use strict";o.r(e);var s,i=o(243),n=o.n(i),a=(o(242),o(319));o(320);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}Vue.component("DynamicScroller",a.a),Vue.component("DynamicScrollerItem",a.b);var c={data:function(){return{post:"",is_reply:!1,commentValue:"",commentRules:[function(t){return!!t||"Body is required"},function(t){return/^[A-Za-z0-9 ]+$/.test(t)||"Cannot contain special character"}],id:this.$root.currentPost,loadingPost:!1,that:this,pageContent:"",loadingCode:!1,showFullLoader:!1,selectedLangId:"",comments:[],loadingPostComments:!1,sendingComment:!1,replyCommentIsOn:!1,repliedComment:[],panelData:[]}},components:{CommentPost:function(){return o.e(45).then(o.bind(null,725))}},mounted:function(){this.$root.componentIsLoading=!1,this.$root.selectedPost=[],this.fetchPost(),this.$root.projectViewComponent=this,this.$root.autoOpenPost=!1},methods:(s={showFullPage:function(){this.$root.selectedPost.project.project&&this.$root.selectedPost.project.project.is_web&&window.open("/run-panel/"+this.$root.selectedPost.project.project.panel_id,"_blank"),this.$root.selectedPost.link&&window.open(this.$root.selectedPost.project_url,"_blank")},showReplyAction:function(t){this.replyCommentIsOn=!0,this.repliedComment=t,this.is_reply=!0},closeComment:function(){this.replyCommentIsOn=!1,this.repliedComment=[],this.is_reply=!1},goBack:function(){this.$root.showViewPost=!1,this.$root.fromProfile?(this.$router.push({path:"/profile-view/"+this.$root.fromProfileUsername}),this.$root.fromProfile=!1):this.$router.push({path:"/hub"})},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})},fetchComments:function(t){var e=this;this.loadingPostComments=!0,axios.get("/comments/"+t).then((function(t){200==t.status&&(e.comments=t.data.data,e.comments.map((function(t){t.tagged=!1})),e.loadingPostComments=!1)})).catch((function(t){e.loadingPostComments=!1}))},scrollToComment:function(t){var e=this,o=this.comments.filter((function(e){return t.id==e.id}));if(o.length>0){var s=o[0],i=this.comments.indexOf(s);this.$refs.commentScrollerPost.scrollToItem(i),this.comments.map((function(e){t.id==e.id&&(e.tagged=!0)})),setTimeout((function(){e.comments.map((function(e){t.id==e.id&&(e.tagged=!1)}))}),2e3)}},goToProject:function(t){this.$root.componentIsLoading=!0,this.$root.viewFromPost=!0,this.$root.showViewPost=!1,this.$root.showProfileView=!1,this.$router.push({path:"/board/projects/panel/"+t.project_slug})},imageStyleUser:function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";return o+="background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ",i=e.image_name+"."+e.image_extension;return s+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+i+");"},likeComment:function(t){var e=this;t.liked_by_user||axios.post("/like-hub-post-comment",{comment_id:t.id}).then((function(o){200==o.status&&e.comments.map((function(e){e.id==t.id&&(e.liked_by_user=!0,e.likes=parseInt(e.likes)+1)}))})).catch((function(t){}))},checkDatereal:function(t){var e=moment(t).add(1,"hours");moment().subtract(7,"days");return moment(e),moment(e).format("h:mm a")},scrollToBottom:function(){this.$refs.commentScrollerPost.scrollToBottom()},shortenContent:function(t,e){return t.length>e?t.slice(0,e)+"...":t},postComment:function(){var t=this;if(""!=this.commentValue){this.sendingComment=!0;var e="";this.is_reply&&(e=this.repliedComment.id);var o=new FormData;o.append("post_id",this.$root.selectedPost.id),o.append("comment",this.commentValue),o.append("is_reply",this.is_reply),o.append("hub_post_comment_id",e),axios.post("/comment-hub-post",o).then((function(e){if(201==e.status){var o=e.data.data;o.tagged=!1,t.comments.unshift(o),t.closeComment(),setTimeout((function(){t.scrollToBottom()}),500),t.sendingComment=!1,t.commentValue="",t.$root.posts.map((function(e){e.id==t.$root.selectedPost.id&&(e.comments+=1)}))}})).catch((function(e){t.showAlert("Oops!","Something went wrong,please try again","error")}))}else this.showAlert("Oops!","Comment Cannot be empty","error")},likePost:function(){var t=this;if(!this.$root.selectedPost.isLiked){this.$root.selectedPost.likes+=1,this.$root.posts.map((function(e){e.id==t.$root.selectedPost.id&&(e.likes+=1)}));var e=new FormData;e.append("post_id",this.$root.selectedPost.id),axios.post("/like-hub-post",e).then((function(e){204==e.status?"liked"==e.data&&(t.$root.selectedPost.isLiked=1):"Post Liked Already"==e.data?t.showAlert("Oops!",e.data,"error"):"liked"==e.data&&(t.$root.selectedPost.isLiked=1)}))}},sharePost:function(){this.$root.shareLink="https://link.citonhub.com/post/"+this.$root.selectedPost.post_id,this.$root.shareText="Check out this project on Citonhub",this.$root.infoText="Share this project with others",this.$root.alertComponent=this,this.$root.showInvitation=!0},pinPost:function(){var t=this;if(!this.$root.selectedPost.isPinned){this.$root.selectedPost.pinned+=1;var e=new FormData;e.append("post_id",this.$root.selectedPost.id),axios.post("/pin-hub-post",e).then((function(e){201==e.status?"pinned"==e.data&&(t.$root.selectedPost.isPinned=1):"Post Pinned Already"==e.data?t.showAlert("Oops!",e.data,"error"):"pinned"==e.data&&(t.$root.selectedPost.isPinned=1)}))}},showPage:function(){if(this.pageContent="",this.loadingCode=!0,this.selecetedPanelId=this.$root.selectedPost.project.project.panel_id,this.$root.selectedPost.project.project.is_web)this.loadPageContent(this.selecetedPanelId);else{if("present"==this.$root.checkCodeForInput(this.$root.selectedPost.project.project_files.code_files[0].content,this.panelData.panel_language))return;this.pageContent="sending to sandbox...",this.runCodeOnSandbox(null)}},loadPageContent:function(t){var e=this;axios.get("/run-panel/"+t).then((function(t){200==t.status&&(e.loadingCode=!1,e.pageContent=t.data)})).catch((function(t){e.showAlert("Oops!","Unable to load page content","error")}))},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;"info"==o&&n.a.info({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==o&&n.a.success({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==o&&n.a.warning({title:t,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==o&&n.a.error({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})}},r(s,"imageStyleUser",(function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return o+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",i=e.image_name+"."+e.image_extension;return s+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+i+");"})),r(s,"checkResponse",(function(t){var e=this;axios.post("/check-for-submission",{token:t,langId:e.selectedLangId}).then((function(t){200==t.status&&("Accepted"==t.data[0].status.description?e.pageContent=t.data[0].stdout:"In Queue"==t.data[0].status.description?(e.pageContent="In Queue...",e.checkResponse(t.data[0].token)):"Processing"==t.data[0].status.description?(e.pageContent="Processing...",e.checkResponse(t.data[0].token)):e.pageContent=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr+" \n"+t.data[0].compile_output+"\n"+t.data[0].error,e.$root.codeBoxOpened,e.recheckCodeBox=!0)})).catch((function(t){e.pageContent="An issue occured,unable to run on sandbox..."}))})),r(s,"runCodeOnSandbox",(function(t){var e=this;axios.post("/run-code-on-sandbox-project",{panel_id:this.selecetedPanelId,code_content:t}).then((function(t){if(200==t.status){var o=t.data[0][0].token;"Accepted"==t.data[0][0].status.description?e.pageContent=t.data[0][0].stdout:"In Queue"==t.data[0][0].status.description?(e.pageContent="In Queue...",e.checkResponse(o,t.data[1])):"Processing"==t.data[0][0].status.description?(e.pageContent="Processing...",e.checkResponse(o,t.data[1])):e.pageContent=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr+" \n"+t.data[0].compile_output+"\n"+t.data[0].error}})).catch((function(t){e.pageContent="An issue occured,unable to run on sandbox..."}))})),r(s,"fetchPost",(function(){var t=this,e="";e=this.$route.params.post_id?this.$route.params.post_id:this.$root.currentPost,this.loadingPost=!0,this.$root.getLocalStore("post_data_new_"+e+this.$root.username).then((function(o){if(null!=o){var s=JSON.parse(o);t.$root.selectedPost=s,t.panelData=t.$root.selectedPost.project.project_panel,t.fetchComments(t.$root.selectedPost.id),t.loadingPost=!1,t.updatePost(),t.$root.selectedPost.link||t.showPage()}else axios.get("/fetch-post/"+e).then((function(o){200==o.status&&(t.$root.LocalStore("post_data_new_"+e+t.$root.username,o.data.data),t.$root.selectedPost=o.data.data,t.$root.selectedPost.link||t.showPage(),t.panelData=t.$root.selectedPost.project.project_panel,t.fetchComments(t.$root.selectedPost.id),t.loadingPost=!1)})).catch((function(e){t.loadingPost=!1}))}))})),r(s,"updatePost",(function(){var t=this;axios.get("/fetch-post/"+this.$route.params.post_id).then((function(e){200==e.status&&(t.$root.LocalStore("post_data_new_"+t.$route.params.post_id+t.$root.username,e.data.data),t.$root.selectedPost=e.data.data)})).catch((function(t){}))})),r(s,"getUserLevel",(function(t){var e="";return t>=0&&t<=99?e+="/imgs/steel.svg":t>=100&&t<=299?e+="/imgs/bronze.svg":t>=300&&t<=599?e+="/imgs/silver.svg":t>=600&&t<=999?e+="/imgs/gold.svg":t>=1e3&&t<=1499?e+="/imgs/platinum.svg":t>=1500&&t<=9999&&(e+="/imgs/diamond.svg"),e})),s)},l=(o(595),o(5)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row px-0"},[o("v-card",{staticClass:"col-lg-6 offset-lg-3 py-1 py-md-2  d-flex flex-row flex-wrap px-md-2 px-1",staticStyle:{background:"white",position:"fixed","z-index":"99999999",top:"0%"},attrs:{tile:""}},[o("div",{staticClass:"col-10 py-0 px-0 d-flex flew-row"},[this.$root.selectedPost.user?[o("div",{staticClass:"mr-2",style:t.imageStyleUser(35,this.$root.selectedPost.user),on:{click:function(e){return e.stopPropagation(),t.goToProfile(t.that.$root.selectedPost.user.username)}}})]:t._e(),t._v(" "),o("div",{staticClass:"d-flex ",staticStyle:{"align-items":"center"}},[this.$root.selectedPost.user?[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return e.stopPropagation(),t.goToProfile(t.that.$root.selectedPost.user.username)}}},[t._v("\n             "+t._s(this.$root.selectedPost.user.username)+"   "),o("img",{staticClass:"mx-1",attrs:{src:t.getUserLevel(t.that.$root.selectedPost.user.points),height:"22px"}})])]:t._e()],2)],2),t._v(" "),o("div",{staticClass:"col-2 py-0 px-0 text-right"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),o("div",{staticClass:"col-lg-12 py-1 px-0 mb-1",style:t.$screen.lg&&t.$screen.md?"height:250px;":"height:200px;"},[t.loadingPost?[o("div",{staticClass:"col-12 d-flex ",staticStyle:{position:"absolute",height:"100%","align-items":"center","justify-content":"center",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1)]:t._e(),t._v(" "),this.$root.selectedPost.link?[o("iframe",{staticClass:"col-12 px-0 py-0",staticStyle:{position:"absolute",height:"100%",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",src:this.$root.selectedPost.project_url}})]:[""==t.pageContent&&t.loadingCode?[o("div",{staticClass:"col-12 d-flex ",staticStyle:{position:"absolute",height:"100%","align-items":"center","justify-content":"center",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1)]:t._e(),t._v(" "),""!=t.pageContent&&this.$root.selectedPost.project.project.is_web?[o("iframe",{staticClass:"col-12  px-0 py-0",staticStyle:{position:"absolute",height:"100%",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.pageContent}})]:t._e(),t._v(" "),""==t.pageContent||this.$root.selectedPost.project.project.is_web?t._e():[o("div",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0%",background:"black",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("textarea",{staticClass:"col-12",staticStyle:{"font-size":"14px",top:"0",height:"100%",left:"0",background:"black",color:"white"},attrs:{readonly:""},domProps:{value:t.pageContent}})])]],t._v(" "),o("v-btn",{staticClass:"d-inline-block  ",staticStyle:{"border-radius":"0px","border-top-right-radius":"7px",position:"absolute",background:"rgba(27, 27, 30, 0.4)",right:"0%","z-index":"879"},attrs:{icon:"",color:"#ffffff"},on:{click:function(e){t.showFullLoader=!0}}},[o("v-icon",[t._v("las la-expand")])],1)],2)]),t._v(" "),o("div",{staticClass:"px-2 col-12 py-0"},[o("div",{staticClass:"col-lg-6 offset-lg-3 py-2 px-0 mt-2 d-flex flex-column",style:t.$screen.lg&&t.$screen.md?"margin-top:310px !important;":"margin-top:250px !important;"},[o("div",{staticClass:"d-md-block d-none",staticStyle:{"font-size":"16px","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.title))]),t._v(" "),o("div",{staticClass:"d-md-none d-block",staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.title))]),t._v(" "),o("div",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(t._s(this.$root.selectedPost.description))])]),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 py-1 px-0 mt-2 d-flex flex-row",staticStyle:{"align-items":"center","border-top":"1px solid #c5c5c5","border-bottom":"1px solid #c5c5c5"}},[o("div",{staticClass:"d-flex flex-row"},[o("div",[o("span",{staticStyle:{"font-size":"13px",color:"black","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.likes))]),t._v(" "),o("span",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Likes")])]),t._v(" "),o("div",{staticClass:"ml-1"},[o("span",{staticStyle:{"font-size":"13px",color:"black","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.comments))]),t._v(" "),o("span",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Comments")])])]),t._v(" "),o("div",{staticClass:"d-flex flex-row ml-auto"},[o("v-btn",{attrs:{icon:""},on:{click:t.sharePost}},[o("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("mdi mdi-share-variant")])],1),t._v(" "),this.$root.selectedPost.link?t._e():o("v-btn",{attrs:{icon:""},on:{click:t.pinPost}},[1==this.$root.selectedPost.isPinned?o("v-icon",{staticStyle:{"font-size":"25px",color:"#3C87CD"}},[t._v("lar la-thumbtack")]):o("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-thumbtack")])],1),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:t.likePost}},[o("i",{class:1==this.$root.selectedPost.isLiked?"las la-heart":"lar la-heart",style:this.$root.selectedPost.isLiked?"font-size:25px; color: #ff6666;":"font-size: 25px;"})])],1)])]),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 py-0 px-0 ",staticStyle:{"font-family":"BodyFont",background:"white"}},[t.replyCommentIsOn?[o("div",[o("div",{staticClass:"px-2"},[o("div",{staticClass:" py-2 px-2  text-left mb-1",staticStyle:{background:"#3C87CD",border:"1px solid transparent","border-radius":"8px"}},[o("div",{staticClass:"col-12 py-1 px-1  text-right"},[o("span",{staticClass:"msgTextReplynew text-left d-block",staticStyle:{color:"white","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n                 "+t._s(t.repliedComment.content)+"\n                 ")])])]),t._v(" "),o("div",{staticStyle:{position:"absolute",height:"auto",width:"auto",right:"2%",top:"-5%",background:"rgba(38, 82, 89,0.6)","border-radius":"50%",padding:"0px","z-index":"99"}},[o("v-btn",{attrs:{icon:""},on:{click:t.closeComment}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-close mdi-18px")])],1)],1)])])]:t._e(),t._v(" "),o("div",{staticClass:"col-12  py-2 my-0 d-flex  px-2 flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentValue,expression:"commentValue"}],ref:"textBottom",staticClass:"textarea",staticStyle:{"font-size":"13px"},attrs:{placeholder:"Type your comment"},domProps:{value:t.commentValue},on:{input:function(e){e.target.composing||(t.commentValue=e.target.value)}}}),t._v(" "),o("v-btn",{staticClass:"mx-md-1",attrs:{icon:"",loading:t.sendingComment},on:{click:t.postComment,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postComment(e)}}},[o("v-icon",[t._v("las la-send")])],1)],1)],2),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 px-0 px-md-3 commentScroller scroller",staticStyle:{"border-top":"1px solid #c5c5c5",background:"whitesmoke","font-family":"BodyFont",height:"auto"}},[o("div",{staticClass:"row"},[t.loadingPostComments?[o("div",{staticClass:"d-flex col-12",staticStyle:{position:"absolute","overflow-y":"hidden",background:"whitesmoke",height:"250px",left:"0%","align-items":"center","justify-content":"center"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[0==t.comments.length?[t._m(0)]:[o("DynamicScroller",{ref:"commentScrollerPost",staticClass:"col-12 px-1  ",staticStyle:{position:"absolute","overflow-y":"auto",top:"0%",height:"auto",left:"0%",background:"whitesmoke"},attrs:{items:t.comments,keyField:"id","min-item-size":36,buffer:5e3,id:"commentScrollerPost"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item,i=e.index,n=e.active;return[o("DynamicScrollerItem",{attrs:{item:s,active:n,"size-dependencies":[s.content],"data-index":i}},[o("comment-post",{attrs:{source:s,username:t.that.$root.username}})],1)]}}])})]]],2)]),t._v(" "),t.showFullLoader?o("div",{staticStyle:{position:"fixed","z-index":"999999999999999",height:"100%",width:"100%",top:"0",left:"0",background:"white"}},[o("div",{staticClass:"d-flex flex-column",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[o("div",{staticClass:"col-12 px-0 py-0",staticStyle:{height:"100%"}},[o("div",{staticClass:"col-12 px-1 py-1 pt-0  d-flex flex-row",staticStyle:{background:"white","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 py-0 px-0"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showFullLoader=!1}}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),o("div",{staticClass:" py-0 text-center ",staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.title))])]),t._v(" "),o("div",{staticClass:"ml-auto d-flex flex-row"},[t.that.$root.selectedPost.link?t._e():o("div",{staticClass:"px-1"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.goToProject(t.that.$root.selectedPost.project.project)}}},[o("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-laptop-code")])],1)],1),t._v(" "),t.that.$root.selectedPost.project.project?o("div",{staticClass:"px-1"},[t.that.$root.selectedPost.project.project.is_web?[o("v-btn",{attrs:{icon:""},on:{click:t.showFullPage}},[o("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi mdi-launch")])],1)]:t._e()],2):o("div",{staticClass:"px-1"},[t.that.$root.selectedPost.link?[o("v-btn",{attrs:{icon:""},on:{click:t.showFullPage}},[o("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("mdi mdi-launch")])],1)]:t._e()],2)])]),t._v(" "),this.$root.selectedPost.link?[o("iframe",{staticClass:"col-12 px-0 py-0",staticStyle:{height:"100%",background:"white",border:"1px solid #c5c5c5"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",src:this.$root.selectedPost.project_url}})]:[""==t.pageContent&&t.loadingCode?[o("div",{staticClass:"col-12 d-flex ",staticStyle:{height:"100%","align-items":"center","justify-content":"center",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1)]:t._e(),t._v(" "),""!=t.pageContent&&this.$root.selectedPost.project.project.is_web?[o("iframe",{staticClass:"col-12  px-0 py-0",staticStyle:{height:"100%",background:"white",border:"1px solid #c5c5c5"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.pageContent}})]:t._e(),t._v(" "),""==t.pageContent||this.$root.selectedPost.project.project.is_web?t._e():[o("div",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0%",background:"black",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("textarea",{staticClass:"col-12",staticStyle:{"font-size":"14px",top:"0",height:"100%",left:"0",position:"absolute",background:"black",color:"white"},attrs:{readonly:""},domProps:{value:t.pageContent}})])]]],2)])]):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex col-12",staticStyle:{position:"absolute",background:"whitesmoke","overflow-y":"hidden",height:"250px",left:"0%","align-items":"center","justify-content":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[this._v("No comment yet, be the first to comment")])])}],!1,null,"5e70d190",null);e.default=d.exports}}]);