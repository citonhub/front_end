(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{343:function(t,e,o){var s=o(552);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,i);s.locals&&(t.exports=s.locals)},551:function(t,e,o){"use strict";var s=o(343);o.n(s).a},552:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\ntextarea[data-v-6c3e7c14] {\n    font-size:13px; \n    background:white;\n    width:100%; \n    height: 55px;\n    max-height: 75px;\n    padding: 6px 6px;\n    resize:none; \n    overflow-x: hidden;\n     overflow-y: auto;\n    border:1px solid #e6e6e6; \n    border-radius:2px;\n}\n.scroller[data-v-6c3e7c14]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n.scroller[data-v-6c3e7c14]::-webkit-scrollbar {\n  width: 5px;\n}\n",""])},645:function(t,e,o){"use strict";o.r(e);var s,i=o(243),n=o.n(i);o(242);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var r={data:function(){return{post:"",is_reply:!1,commentValue:"",commentRules:[function(t){return!!t||"Body is required"},function(t){return/^[A-Za-z0-9 ]+$/.test(t)||"Cannot contain special character"}],id:this.$root.currentPost,loadingPost:!1,that:this,pageContent:"",loadingCode:!1,showFullLoader:!1,selectedLangId:"",comments:[],loadingPostComments:!1,sendingComment:!1}},mounted:function(){this.$root.selectedPost=[],this.fetchPost(),this.$root.projectViewComponent=this,this.$root.autoOpenPost=!1},methods:(s={goBack:function(){this.$root.showViewPost=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/")},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})},fetchComments:function(t){var e=this;this.loadingPostComments=!0,axios.get("/comments/"+t).then((function(t){200==t.status&&(e.comments=t.data.data,e.loadingPostComments=!1)})).catch((function(t){e.loadingPostComments=!1}))},goToProject:function(t){this.$router.push({path:"/board/projects/panel/"+t.project_slug})},imageStyleUser:function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";return o+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ",i=e.image_name+"."+e.image_extension;return s+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+i+");"},likeComment:function(t){var e=this;t.liked_by_user||axios.post("/like-hub-post-comment",{comment_id:t.id}).then((function(o){200==o.status&&e.comments.map((function(e){e.id==t.id&&(e.liked_by_user=!0,e.likes=parseInt(e.likes)+1)}))})).catch((function(t){}))},checkDatereal:function(t){var e=moment(t).add(1,"hours");moment().subtract(7,"days");return moment(e),moment(e).format("h:mm a")},scrollToTop:function(){document.querySelector(".commentScroller").scrollTo(0,0)},postComment:function(){var t=this;if(""!=this.commentValue){this.sendingComment=!0;var e=new FormData;e.append("post_id",this.$root.selectedPost.id),e.append("comment",this.commentValue),e.append("is_reply",this.is_reply),axios.post("/comment-hub-post",e).then((function(e){201==e.status&&(t.comments.unshift(e.data.data),t.scrollToTop(),t.sendingComment=!1,t.commentValue="",t.$root.posts.map((function(e){e.id==t.$root.selectedPost.id&&(e.comments+=1)})))})).catch((function(e){t.showAlert("Oops!","Something went wrong,please try again","error")}))}else this.showAlert("Oops!","Comment Cannot be empty","error")},likePost:function(){var t=this;if(!this.$root.selectedPost.isLiked){var e=new FormData;e.append("post_id",this.$root.selectedPost.id),axios.post("/like-hub-post",e).then((function(e){204==e.status?"liked"==e.data&&(t.$root.selectedPost.isLiked=1):"Post Liked Already"==e.data?t.showAlert("Oops!",e.data,"error"):"liked"==e.data&&(t.$root.selectedPost.isLiked=1),t.$root.selectedPost.likes+=1,t.$root.posts.map((function(e){e.id==t.$root.selectedPost.id&&(e.likes+=1)}))}))}},pinPost:function(){var t=this;if(!this.$root.selectedPost.isPinned){var e=new FormData;e.append("post_id",this.$root.selectedPost.id),axios.post("/pin-hub-post",e).then((function(e){201==e.status?"pinned"==e.data&&(t.$root.selectedPost.isPinned=1):"Post Pinned Already"==e.data?t.showAlert("Oops!",e.data,"error"):"pinned"==e.data&&(t.$root.selectedPost.isPinned=1),t.$root.selectedPost.pinned+=1}))}},showPage:function(){this.pageContent="",this.loadingCode=!0,this.selecetedPanelId=this.$root.selectedPost.project.panel_id,this.$root.selectedPost.project.is_web?this.loadPageContent(this.selecetedPanelId):this.runCodeOnSandbox()},loadPageContent:function(t){var e=this;axios.get("/run-panel/"+t).then((function(t){200==t.status&&(e.loadingCode=!1,e.pageContent=t.data)})).catch((function(t){e.showAlert("Oops!","Unable to load page content","error")}))},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;"info"==o&&n.a.info({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==o&&n.a.success({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==o&&n.a.warning({title:t,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==o&&n.a.error({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})}},a(s,"imageStyleUser",(function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;";return o+="background-color:#ffffff; background-image:url(imgs/profile.png);"}var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5; ",i=e.image_name+"."+e.image_extension;return s+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+i+");"})),a(s,"checkResponse",(function(t){var e=this;axios.post("/check-for-submission",{token:t,langId:e.selectedLangId}).then((function(t){200==t.status&&("Accepted"==t.data[0].status.description?e.pageContent=t.data[0].stdout:"In Queue"==t.data[0].status.description?(e.pageContent="In Queue...",e.checkResponse(t.data[0].token)):"Processing"==t.data[0].status.description?(e.pageContent="Processing...",e.checkResponse(t.data[0].token)):e.pageContent=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr,e.$root.codeBoxOpened,e.recheckCodeBox=!0)})).catch((function(t){e.pageContent="An issue occured,unable to run on sandbox..."}))})),a(s,"runCodeOnSandbox",(function(){var t=this;axios.post("/run-code-on-sandbox-project",{panel_id:this.selecetedPanelId}).then((function(e){if(200==e.status){var o=e.data[0][0].token;"Accepted"==e.data[0][0].status.description?t.pageContent=e.data[0][0].stdout:"In Queue"==e.data[0][0].status.description?(t.pageContent="In Queue...",t.checkResponse(o,e.data[1])):"Processing"==e.data[0][0].status.description?(t.pageContent="Processing...",t.checkResponse(o,e.data[1])):t.pageContent=e.data[0][0].stdout+"\n Error: \n"+e.data[0][0].stderr}})).catch((function(e){t.pageContent="An issue occured,unable to run on sandbox..."}))})),a(s,"fetchPost",(function(){var t=this;this.loadingPost=!0,this.$root.getLocalStore("post_data_"+this.$route.params.post_id+this.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);t.$root.selectedPost=o,t.$root.selectedPost.link||t.showPage(),t.fetchComments(t.$root.selectedPost.id),t.loadingPost=!1,t.updatePost()}else axios.get("/fetch-post/"+t.$route.params.post_id).then((function(e){200==e.status&&(t.$root.LocalStore("post_data_"+t.$route.params.post_id+t.$root.username,e.data.data),t.$root.selectedPost=e.data.data,t.$root.selectedPost.link||t.showPage(),t.fetchComments(t.$root.selectedPost.id),t.loadingPost=!1)})).catch((function(e){t.loadingPost=!1}))}))})),a(s,"updatePost",(function(){var t=this;axios.get("/fetch-post/"+this.$route.params.post_id).then((function(e){200==e.status&&(t.$root.LocalStore("post_data_"+t.$route.params.post_id+t.$root.username,e.data.data),t.$root.selectedPost=e.data.data)})).catch((function(t){}))})),a(s,"getUserLevel",(function(t){var e="";return t>=0&&t<=99?e+="/imgs/newbie.svg":t>=100&&t<=999?e+="/imgs/junior.svg":t>=1e3&&t<=4999?e+="/imgs/intermediate.svg":t>=5e3&&t<=9999?e+="/imgs/senior.svg":t>=1e4&&t<=14999?e+="/imgs/expert.svg":t>=15e3&&t<=1e5&&(e+="/imgs/super_dev.svg"),e})),s)},c=(o(551),o(4)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row px-0",staticStyle:{background:"whitesmoke"}},[o("div",{staticClass:"col-lg-6 offset-lg-3 py-1 py-md-2 fixed-top d-flex flex-row px-md-2 px-1",staticStyle:{position:"sticky",background:"white","z-index":"99999999","border-bottom":"1px solid #c5c5c5",top:"0%"}},[o("div",{staticClass:"col-6 py-0 px-0 d-flex flew-row"},[this.$root.selectedPost.user?[o("div",{staticClass:"mr-2",style:t.imageStyleUser(35,this.$root.selectedPost.user),on:{click:function(e){return e.stopPropagation(),t.goToProfile(t.that.$root.selectedPost.user.username)}}})]:t._e(),t._v(" "),o("div",{staticClass:"d-flex ",staticStyle:{"align-items":"center"}},[this.$root.selectedPost.user?[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont",cursor:"pointer"},on:{click:function(e){return e.stopPropagation(),t.goToProfile(t.that.$root.selectedPost.user.username)}}},[t._v("\n             "+t._s(this.$root.selectedPost.user.username)+"   "),o("img",{staticClass:"mx-1",attrs:{src:t.getUserLevel(t.that.$root.selectedPost.user.points),height:"22px"}})])]:t._e()],2)],2),t._v(" "),o("div",{staticClass:"col-6 py-0 px-0 text-right"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1)]),t._v(" "),o("div",{staticClass:"px-2 col-12 py-0"},[o("div",{staticClass:"col-lg-6 offset-lg-3 py-2 px-0 mt-1 text-center"},[o("span",{staticClass:"d-md-block d-none",staticStyle:{"font-size":"17px","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.title))]),t._v(" "),o("span",{staticClass:"d-md-none d-block",staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.title))])]),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 py-2 px-0 pt-1 ",staticStyle:{height:"380px"}},[t.loadingPost?[o("div",{staticClass:"col-12 d-flex ",staticStyle:{position:"absolute",height:"100%","align-items":"center","justify-content":"center",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1)]:t._e(),t._v(" "),this.$root.selectedPost.link?[o("iframe",{staticClass:"col-12 px-0 py-0",staticStyle:{position:"absolute",height:"100%",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",src:this.$root.selectedPost.project_url}})]:[""==t.pageContent&&t.loadingCode?[o("div",{staticClass:"col-12 d-flex ",staticStyle:{position:"absolute",height:"100%","align-items":"center","justify-content":"center",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1)]:t._e(),t._v(" "),""!=t.pageContent&&this.$root.selectedPost.project.is_web?[o("iframe",{staticClass:"col-12  px-0 py-0",staticStyle:{position:"absolute",height:"100%",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.pageContent}})]:t._e(),t._v(" "),""==t.pageContent||this.$root.selectedPost.project.is_web?t._e():[o("textarea",{staticClass:"col-12",staticStyle:{"font-size":"14px",position:"absolute",height:"100%",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"},attrs:{readonly:""}})]],t._v(" "),o("v-btn",{staticClass:"d-inline-block  ",staticStyle:{"border-radius":"0px","border-top-right-radius":"7px",position:"absolute",background:"rgba(27, 27, 30, 0.4)",right:"0%","z-index":"879"},attrs:{icon:"",color:"#ffffff"},on:{click:function(e){t.showFullLoader=!0}}},[o("v-icon",[t._v("las la-expand")])],1)],2),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 px-2 mt-2 "},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 px-0 py-1 text-left"},[o("v-btn",{attrs:{icon:""},on:{click:t.pinPost}},[1==this.$root.selectedPost.isPinned?o("v-icon",{staticStyle:{"font-size":"25px",color:"#3C87CD"}},[t._v("lar la-thumbtack")]):o("v-icon",{staticStyle:{"font-size":"25px"}},[t._v("las la-thumbtack")])],1),t._v(" "),o("span",{staticStyle:{"font-size":"12px",color:"grey"}},[t._v(t._s(this.$root.selectedPost.pinned))]),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:t.likePost}},[o("i",{class:1==this.$root.selectedPost.isLiked?"las la-heart":"lar la-heart",style:this.$root.selectedPost.isLiked?"font-size:25px; color: #ff6666;":"font-size: 25px;"})]),t._v(" "),o("span",{staticStyle:{"font-size":"12px",color:"grey"}},[t._v(t._s(this.$root.selectedPost.likes))])],1),t._v(" "),o("div",{staticClass:"col-6 px-0 py-0 text-right"},[this.$root.selectedPost.project?o("v-btn",{staticStyle:{"text-transform":"none","font-size":"12px","font-family":"MediumFont"},attrs:{color:"#3C87CD",outlined:"",rounded:"",small:""},on:{click:function(e){return t.goToProject(this.$root.selectedPost.project)}}},[t._v("View source "),o("v-icon",{staticClass:"ml-1"},[t._v("mdi-launch mdi-18px")])],1):t._e()],1)])]),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 px-1 mt-1 text-left"},[o("div",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[t._v("\n            "+t._s(this.$root.selectedPost.description)+"\n         ")])]),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 px-0 px-md-3 commentScroller scroller",staticStyle:{"border-top":"1px solid #c5c5c5","font-family":"BodyFont","min-height":"250px","max-height":"300px","overflow-y":"auto","overflow-x":"hidden"}},[o("div",{staticClass:"row"},[t.loadingPostComments?[o("div",{staticClass:"d-flex col-12",staticStyle:{position:"absolute","overflow-y":"hidden",height:"90%",left:"0%","align-items":"center","justify-content":"center"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[0==t.comments.length?[t._m(1)]:[t._l(t.comments,(function(e,s){return o("div",{key:s,staticClass:"col-12 py-2 px-1"},[e.username!=t.that.$root.username?o("div",{staticClass:"col-11 py-0 ",attrs:{"elevation-1":""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-9 col-md-10 py-1  d-flex flex-row"},[o("div",{style:t.imageStyleUser(30,e),on:{click:function(o){return o.stopPropagation(),t.goToProfile(e.username)}}}),t._v(" "),o("v-card",{staticClass:"py-1 px-2 ml-2",staticStyle:{"max-width":"80%",border:"1px solid transparent","min-width":"190px",background:"#ffffff","border-radius":"7px","border-bottom-left-radius":"0px"},attrs:{"elevation-1":"",flat:""}},[o("div",{staticClass:"text-left my-0 py-0 d-flex flex-row"},[o("span",{staticStyle:{"font-size":"13px","font-weight":"bold"},on:{click:function(o){return o.stopPropagation(),t.goToProfile(e.username)}}},[t._v(t._s(e.username))]),t._v(" "),o("span",{staticClass:"ml-auto",staticStyle:{"font-size":"11px"}},[t._v(t._s(t.checkDatereal(e.created_at)))])]),t._v(" "),o("span",{staticStyle:{"font-size":"13px"},domProps:{innerHTML:t._s(e.content)}})])],1),t._v(" "),o("div",{staticClass:"col-12 py-0 d-flex",staticStyle:{"padding-left":"45px","align-items":"center"}},[o("span",{staticClass:"d-inline-block mx-1"},[e.liked_by_user?o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""}},[o("i",{staticClass:"las la-heart",staticStyle:{"font-size":"20px",color:"#ff6666"}})]):o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""},on:{click:function(o){return t.likeComment(e)}}},[o("i",{staticClass:"lar la-heart",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"#000000"}},[t._v(t._s(e.likes))])],1)])])]):t._e(),t._v(" "),e.username==t.that.$root.username?o("div",{staticClass:"col-11 py-0 offset-1",attrs:{"elevation-1":""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-9 col-md-10 py-1 offset-lg-3 offset-md-2 d-flex flex-row-reverse"},[o("v-card",{staticClass:"py-1 px-2 mr-2",staticStyle:{"max-width":"80%",border:"1px solid transparent","min-width":"190px",background:"#3C87CD","border-radius":"7px","border-bottom-right-radius":"0px"},attrs:{"elevation-1":"",flat:""}},[o("span",{staticStyle:{color:"white","font-size":"13px"},domProps:{innerHTML:t._s(e.content)}}),t._v(" "),o("div",{staticClass:"text-right"},[o("span",{staticStyle:{color:"white","font-size":"11px"}},[t._v(t._s(t.checkDatereal(e.created_at)))])])])],1),t._v(" "),o("div",{staticClass:"col-12 text-right py-0"},[o("span",{staticClass:"d-inline-block mx-1"},[e.liked_by_user?o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""}},[o("i",{staticClass:"las la-heart",staticStyle:{"font-size":"20px",color:"#ff6666"}})]):o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""},on:{click:function(o){return t.likeComment(e)}}},[o("i",{staticClass:"lar la-heart",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"#000000"}},[t._v(t._s(e.likes))])],1)])])]):t._e()])})),t._v(" "),o("div",{staticClass:"my-2 col-12"})]]],2)]),t._v(" "),o("div",{staticClass:"col-lg-6 offset-lg-3 px-2 py-1 pb-1",staticStyle:{"z-index":"999999999999","font-family":"BodyFont"}},[o("div",{staticClass:"row px-md-3 py-0"},[o("div",{staticClass:"col-12  py-0 my-0 d-flex px-md-2 px-2 flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentValue,expression:"commentValue"}],ref:"textBottom",staticStyle:{"font-size":"13px"},attrs:{placeholder:"Please,be nice"},domProps:{value:t.commentValue},on:{input:function(e){e.target.composing||(t.commentValue=e.target.value)}}}),t._v(" "),o("v-btn",{staticClass:"mx-md-1",attrs:{icon:"",loading:t.sendingComment},on:{click:t.postComment,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postComment(e)}}},[o("v-icon",[t._v("las la-send")])],1)],1)])]),t._v(" "),t.showFullLoader?o("div",{staticStyle:{position:"fixed","z-index":"999999999999999",height:"100%",width:"100%",top:"0",left:"0",background:"white"}},[o("div",{staticClass:"d-flex flex-column",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[o("div",{staticClass:"col-12 px-0 py-0",staticStyle:{height:"100%"}},[o("div",{staticClass:"col-12 px-1 py-1 pt-0  d-flex flex-row",staticStyle:{background:"white","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 py-0 px-0"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.showFullLoader=!1}}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),o("div",{staticClass:"col-8 py-0 text-center"},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v(t._s(this.$root.selectedPost.title))])])]),t._v(" "),this.$root.selectedPost.link?[o("iframe",{staticClass:"col-12 px-0 py-0",staticStyle:{height:"100%",background:"white",border:"1px solid #c5c5c5"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",src:this.$root.selectedPost.project_url}})]:[""==t.pageContent&&t.loadingCode?[o("div",{staticClass:"col-12 d-flex ",staticStyle:{height:"100%","align-items":"center","justify-content":"center",background:"white",border:"1px solid #c5c5c5","border-radius":"7px"}},[o("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1)]:t._e(),t._v(" "),""!=t.pageContent&&this.$root.selectedPost.project.is_web?[o("iframe",{staticClass:"col-12  px-0 py-0",staticStyle:{height:"100%",background:"white",border:"1px solid #c5c5c5"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.pageContent}})]:t._e(),t._v(" "),""==t.pageContent||this.$root.selectedPost.project.is_web?t._e():[o("textarea",{staticClass:"col-12",staticStyle:{"font-size":"14px",height:"100%",background:"white",border:"1px solid #c5c5c5"},attrs:{readonly:""}})]]],2)])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 offset-lg-3 px-1 mt-1 "},[e("div",{staticStyle:{"font-size":"15px","font-family":"MediumFont"}},[this._v("Comments")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex col-12",staticStyle:{position:"absolute","overflow-y":"hidden",height:"90%",left:"0%","align-items":"center","justify-content":"center"}},[e("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[this._v("No comment yet, be the first to commment")])])}],!1,null,"6c3e7c14",null);e.default=l.exports}}]);