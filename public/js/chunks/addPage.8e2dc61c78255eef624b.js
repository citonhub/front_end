(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{669:function(t,e,o){"use strict";o.r(e);var a=o(243),i=o.n(a),n=(o(242),{data:function(){var t=this;return{imageUrl:"",titleRule:[function(t){return!!t||"Oh! you missed this."},function(t){return t.length<=80||"Title must be less than 80 characters"}],requiredRule:[function(t){return!!t||"Oh! you missed this."}],descriptionRule:[function(t){return!!t||"Oh! you missed this."},function(t){return t.length<=300||"description must be less than 300 characters"}],urlRule:[function(e){return t.isURL(e)||"Link should be valid and secure"}],languageIcon:[{name:"Web app",icon:"lab la-html5",border_color:"#263238",background:"#ffffff",id:"web"},{name:"Web app NodeJs",icon:"lab la-html5",border_color:"#263238",background:"#ffffff",id:"NodeJs"},{name:"Web app PHP",icon:"lab la-html5",border_color:"#263238",background:"#ffffff",id:"PHP"},{name:"JavaScript",icon:"lab la-js-square",border_color:"#263238",background:"#ffffff",id:26},{name:"PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:35},{name:"Python 3.81",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:39},{name:"Python for ML(3.7.7)",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:100},{name:"C",icon:"mdi mdi-language-c",border_color:"#263238",background:"#ffffff",id:4},{name:"C++",icon:"mdi mdi-language-cpp",border_color:"#263238",background:"#ffffff",id:11},{name:"Java",icon:"lab la-java",border_color:"#263238",background:"#ffffff",id:25},{name:"C#",icon:"mdi mdi-language-csharp",border_color:"#263238",background:"#ffffff",id:13},{name:"Erlang",icon:"lab la-erlang",border_color:"#263238",background:"#ffffff",id:18},{name:"Kotlin",icon:"mdi mdi-language-kotlin",border_color:"#263238",background:"#ffffff",id:27},{name:"Fortran",icon:"mdi mdi-language-fortran",border_color:"#263238",background:"#ffffff",id:21},{name:"Perl",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:34},{name:"R",icon:"mdi mdi-language-r",border_color:"#263238",background:"#ffffff",id:40},{name:"Ruby",icon:"mdi mdi-language-ruby",border_color:"#263238",background:"#ffffff",id:41},{name:"Go",icon:"mdi mdi-language-go",border_color:"#263238",background:"#ffffff",id:22},{name:"Hashkell",icon:"mdi mdi-language-haskell",border_color:"#263238",background:"#ffffff",id:24},{name:"Lua",icon:"mdi mdi-language-lua",border_color:"#263238",background:"#ffffff",id:28},{name:"Pascal",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:33},{name:"TypeScript",icon:"mdi mdi-language-typescript",border_color:"#263238",background:"#ffffff",id:46},{name:"Rust",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:42},{name:"Swift",icon:"lab la-swift",border_color:"#263238",background:"#ffffff",id:45},{name:"Scala",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:43}],addlink:!1,select:!0,addprojectlink:!1,postLink:!0,formState:!1,post:{title:"",project_slug:"",project_url:"",tags:["Web app"],description:""},imageDefault:0,loadingProjects:!1,loading:!1,projectArray:[],setTag:[]}},mounted:function(){this.$root.componentIsLoading=!1,this.getAllProjects()},methods:{isURL:function(t){if(0==t.length)return!0;var e;try{e=new URL(t)}catch(t){return!1}return"https:"===e.protocol},displayTab:function(){this.addlink=!this.addlink,this.select=!this.select,alert(this.addlink)},goBack:function(){this.$root.showAddNewPost=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/")},displayTab2:function(){this.addprojectlink=!this.addprojectlink,this.select=!this.select},setTagHandler:function(){var t=this,e=this.projectArray.filter((function(e){return e.project_slug==t.post.project_slug})),o=this.languageIcon.filter((function(t){return t.id==e[0].panel_language}));this.post.tags=[o[0].name],this.post.project_url=""},getAllProjects:function(){var t=this;this.loadingProjects=!0,axios.get("/fetch-personal-projects").then((function(e){200==e.status&&(t.loadingProjects=!1,t.projectArray=e.data.projects)})).catch((function(t){}))},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;"info"==o&&i.a.info({title:t,message:e,zindex:"9999999999",position:"bottomRight",timeout:5e3,transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==o&&i.a.success({title:t,message:e,zindex:"9999999999",timeout:5e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==o&&i.a.warning({title:t,message:e,zindex:"9999999999",timeout:5e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==o&&i.a.error({title:t,message:e,zindex:"9999999999",timeout:5e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},crophandler:function(t){var e=this;this.imageDefault=0;var o=t.target;if(o.files&&o.files[0]){var a=new FileReader;a.onload=function(t){e.$root.imagepath=t.target.result,e.imagepath=t.target.result,e.$root.imageExist=!0},a.readAsDataURL(o.files[0]),this.$router.push({path:"/crop-image"})}},selectDefaultImg:function(t,e){this.imageDefault="default_"+e,this.$root.croppedImage=t,this.$root.imageExist=!1},handleBlob:function(t){var e=t.split(";"),o=e[0].split(":")[1],a=o.slice(6),i=e[1].split(",")[1];return[this.b64toBlob(i,o),a]},b64toBlob:function(t,e,o){e=e||"",o=o||512;for(var a=atob(t),i=[],n=0;n<a.length;n+=o){for(var r=a.slice(n,n+o),s=new Array(r.length),l=0;l<r.length;l++)s[l]=r.charCodeAt(l);var c=new Uint8Array(s);i.push(c)}return new Blob(i,{type:e})},postData:function(){var t=this;if(this.$refs.addPost.validate()){this.loading=!0;var e=new FormData;if(this.$root.imageExist){var o=this.handleBlob(this.$root.croppedImage);e.append("image",o[0]),e.append("image_ext",o[1])}else e.append("image_default",this.imageDefault);e.append("title",this.post.title),e.append("project_slug",this.post.project_slug),e.append("project_url",this.post.project_url),e.append("description",this.post.description);var a=this.post.tags,i=[];a.forEach((function(e){var o=t.languageIcon.filter((function(t){return t.name==e}));i.push(o[0])})),e.append("tags",JSON.stringify(i)),axios.post("/save-hub-post",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$root.posts.unshift(e.data.data),t.loading=!1,t.showAlert("Awesome!","Your project has been shared","success"),t.goBack(),t.$root.authProfile.points+=4,t.$root.showRewardBoard=!0)})).catch((function(e){t.showAlert("Oops!","Unable to save post,please try again","error"),t.loading=!1}))}}}}),r=o(4),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row ",staticStyle:{"font-family":"BodyFont",background:"transparent"}},[o("v-form",{ref:"addPost",staticClass:"col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left",staticStyle:{height:"auto !important","font-family":"BodyFont",background:"transparent !important"},model:{value:t.formState,callback:function(e){t.formState=e},expression:"formState"}},[o("div",{staticClass:"row application application--light",attrs:{"data-app":"true"}},[o("div",{staticClass:" col-12 py-1 my-0 px-2 mb-1",staticStyle:{"font-family":"BodyFont"}},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Project title")]),t._v(" "),o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{rules:t.titleRule,dense:"",counter:"80",outlined:"",placeholder:"my portfolio","persistent-hint":"",hint:"What are you building?",color:"#3C87CD"},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),t._v(" "),o("div",{staticClass:" col-12 py-1  px-2",staticStyle:{"font-family":"BodyFont"}},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Add project URL")]),t._v(" "),o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{outlined:"",dense:"",placeholder:"https://myportfolio.com",rules:t.urlRule,color:"#3C87CD"},on:{keydown:function(e){t.post.project_slug=""}},model:{value:t.post.project_url,callback:function(e){t.$set(t.post,"project_url",e)},expression:"post.project_url"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-0  mt-n3 "},[o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"grey"}},[t._v("Or")])]),t._v(" "),o("div",{staticClass:" col-12 py-1 my-0 px-2",staticStyle:{"font-family":"BodyFont"}},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Select from project list")]),t._v(" "),o("v-select",{staticStyle:{"font-size":"13px"},attrs:{color:"#3C87CD",items:t.projectArray,"item-text":"title","item-value":"project_slug",loading:t.loadingProjects,dense:"",outlined:"",placeholder:"select..."},on:{change:t.setTagHandler},model:{value:t.post.project_slug,callback:function(e){t.$set(t.post,"project_slug",e)},expression:"post.project_slug"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 mt-n3 px-2 "},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Upload Thumbnail")]),t._v(" "),o("v-sheet",{staticClass:"py-0  px-0 mt-2 sheetbackImg",style:"background-image:url("+this.$root.croppedImage+");border-radius:10px;cursor:pointer;background-size:cover;",attrs:{elevation:"0",height:"100",width:"120"}},[o("v-sheet",{staticClass:"py-auto px-auto d-flex",staticStyle:{"border-radius":"10px"},attrs:{color:"rgba(15, 33, 36, 0.3)",elevation:"0",height:"100%",width:"100%"}},[o("input",{ref:"settingsimage",staticStyle:{opacity:"0",width:"120px",height:"100px",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",id:"settingsimage",accept:"image/x-png,image/jpeg,image/jpg"},on:{change:t.crophandler}}),t._v(" "),o("v-icon",{staticClass:"mx-auto white-text"},[t._v("mdi-camera-plus")])],1)],1),t._v(" "),o("div",{staticClass:"mt-3",staticStyle:{"font-size":"13px",color:"grey"}},[t._v("Or select from defaults")]),t._v(" "),o("div",{staticClass:"d-flex flex-row mt-3"},[o("div",{staticClass:"mr-2",staticStyle:{"border-radius":"10px",height:"60px",width:"60px",cursor:"pointer","background-color":"#c5c5c5","background-image":"url(/imgs/background1.jpg)","background-size":"cover","background-repeat":"no-repeat",border:"1px solid #c5c5c5"},on:{click:function(e){return t.selectDefaultImg("/imgs/background1.jpg",1)}}}),t._v(" "),o("div",{staticClass:"mr-2",staticStyle:{"border-radius":"10px",height:"60px",width:"60px",cursor:"pointer","background-color":"#c5c5c5","background-image":"url(/imgs/background3.jpg)","background-size":"cover","background-repeat":"no-repeat",border:"1px solid #c5c5c5"},on:{click:function(e){return t.selectDefaultImg("/imgs/background3.jpg",2)}}}),t._v(" "),o("div",{staticClass:"mr-2",staticStyle:{"border-radius":"10px",height:"60px",width:"60px",cursor:"pointer","background-color":"#c5c5c5","background-image":"url(/imgs/imgproj2.jpeg)","background-size":"cover","background-repeat":"no-repeat",border:"1px solid #c5c5c5"},on:{click:function(e){return t.selectDefaultImg("/imgs/imgproj2.jpeg",3)}}})])],1),t._v(" "),o("div",{staticClass:" col-12 py-1 mt-1 my-0 px-2 pt-3",staticStyle:{height:"auto","font-family":"BodyFont"}},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Tags")]),t._v(" "),o("v-select",{staticStyle:{"font-size":"13px"},attrs:{dense:"",counter:"10",placeholder:"add tags",chips:"",multiple:"",outlined:"",rules:t.requiredRule,"item-text":"name","item-value":"name",items:t.languageIcon,color:"#3C87CD"},scopedSlots:t._u([{key:"selection",fn:function(e){return[o("v-chip",t._b({key:JSON.stringify(e.item),staticClass:"my-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"},attrs:{"input-value":e.selected,color:"#3C87CD",dense:"",outlined:"",disabled:e.disabled}},"v-chip",e.attrs,!1),[t._v("\n           \n            "+t._s(e.item.name)+"\n          ")])]}}]),model:{value:t.post.tags,callback:function(e){t.$set(t.post,"tags",e)},expression:"post.tags"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-1 pt-0 my-0 px-2"},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Description")]),t._v(" "),o("v-textarea",{staticStyle:{"font-size":"14px"},attrs:{outlined:"",height:"100px",counter:"300",rules:t.descriptionRule,placeholder:"A collection of my all the projects I have built"},model:{value:t.post.description,callback:function(e){t.$set(t.post,"description",e)},expression:"post.description"}})],1),t._v(" "),o("div",{staticClass:" text-center col-12 py-1 mt-4 my-0 px-2"},[o("v-btn",{staticStyle:{"font-size":"13px","font-family":"MediumFont","font-weight":"bolder","text-transform":"none",color:"white"},attrs:{medium:"",rounded:"",type:"submit",color:"#3C87CD",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.postData(e)}}},[t._v("\n             Send\n             ")])],1)])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);