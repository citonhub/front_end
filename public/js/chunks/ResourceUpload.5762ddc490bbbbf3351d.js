(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{310:function(t,e,a){var i=a(440);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(25)(i,o);i.locals&&(t.exports=i.locals)},439:function(t,e,a){"use strict";var i=a(310);a.n(i).a},440:function(t,e,a){(t.exports=a(24)(!1)).push([t.i,"\n.pointer{\n  cursor: pointer;\n}\n.pointer:hover{\n  background: white;\n}\n",""])},615:function(t,e,a){"use strict";a.r(e);var i={data:function(){return{loading:!1,Alert:!1,alertMsg:"",disabled:!0,fileName:"",FileBlob:"",fileSize:"",fileUrl:"",progressvalue:0}},mounted:function(){},methods:{goBack:function(){},fileHandler:function(t){var e=this,a=t.target.files;this.FileBlob=a[0];var i=new FileReader;i.readAsDataURL(a[0]);var o=a[0].size;this.fileSize=this.bytesToSize(a[0].size),this.fileName=a[0].name,o<=1e7?i.addEventListener("load",(function(){e.fileUrl=i.result})):this.$root.projectPanelComponent.showAlert("Oops!","File size cannot be more than 10MB","error")},bytesToSize:function(t){if(0==t)return"0 Byte";var e=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return Math.round(t/Math.pow(1024,e),2)+" "+["Bytes","KB","MB","GB","TB"][e]},uploadeFile:function(){var t=this;this.loading=!0;var e=new FormData;""!=this.fileUrl&&e.append("file",this.FileBlob),e.append("type",this.$route.params.type),e.append("file_name",this.fileName),e.append("project_slug",this.$route.params.project_slug),axios.post("/upload-panel-file",e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){this.progressvalue=parseInt(Math.round(t.loaded/t.total*100))}.bind(this)}).then((function(e){201==e.status&&(t.loading=!1,t.$root.projectData.project_files.resources.unshift(e.data),t.$root.LocalStore("user_projects_data_"+t.$route.params.project_slug+t.$root.username,t.$root.projectData),t.$root.projectPanelComponent.showAlert("Happy coding!","File uploaded","success"))})).catch((function(e){t.$root.projectPanelComponent.showAlert("Oops!","Unable to save file,please try again","error"),t.loading=!1}))}}},o=(a(439),a(4)),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticStyle:{background:"transparent","font-family":"BodyFont","padding-top":"20px"}},[a("div",{staticClass:"col-12 mt-5 mt-md-1 ml-lg-4"},[a("h6",[t._v("Upload "+t._s(this.$route.params.type))])]),t._v(" "),a("div",{staticClass:"col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1"},[a("div",{staticClass:"row my-2 py-2 px-2"},[""==t.fileUrl?a("div",{staticClass:"col-12 py-2 my-0 px-2"},[a("div",{staticClass:"col-12 py-2 my-0 px-2 d-flex pointer",staticStyle:{"align-items":"center","justify-content":"center",border:"2px dashed #262626","border-radius":"8px",height:"200px"}},[a("div",{staticClass:"pointer"},["Framework"==this.$route.params.type?a("input",{staticStyle:{opacity:"0",width:"100%",height:"100%",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",accept:".css,.json,.jsonp,.js,.ts,.html,.xml"},on:{change:t.fileHandler}}):t._e(),t._v(" "),"Images"==this.$route.params.type?a("input",{staticStyle:{opacity:"0",width:"100%",height:"100%",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",accept:"image/x-png,image/jpeg,image/jpg"},on:{change:t.fileHandler}}):t._e(),t._v(" "),"Audios"==this.$route.params.type?a("input",{staticStyle:{opacity:"0",width:"100%",height:"100%",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",accept:"audio/*"},on:{change:t.fileHandler}}):t._e(),t._v(" "),"Videos"==this.$route.params.type?a("input",{staticStyle:{opacity:"0",width:"100%",height:"100%",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",accept:"video/mp4,video/x-m4v,video/*"},on:{change:t.fileHandler}}):t._e(),t._v(" "),"Files"==this.$route.params.type?a("input",{staticStyle:{opacity:"0",width:"100%",height:"100%",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",accept:"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n              text/plain, application/pdf"},on:{change:t.fileHandler}}):t._e(),t._v(" "),"Framework"!=this.$route.params.type?a("span",{staticStyle:{color:"#262626","font-size":"12px"}},[t._v(t._s(t.$t("general.upload"))+" "+t._s(this.$route.params.type))]):a("span",{staticStyle:{color:"#262626","font-size":"12px"}},[t._v(t._s(t.$t("general.upload"))+" code files e.g jquery.js, mdb.css")])])])]):t._e(),t._v(" "),""!=t.fileUrl?a("div",{staticClass:"col-12  d-flex py-2 px-1 my-2",staticStyle:{"align-items":"center","justify-content":"center"}},[a("div",{staticStyle:{height:"100%",width:"100%"}},[a("v-card",{staticClass:"py-1 px-2"},[a("div",{staticClass:"col-12 py-1 px-0"},[a("div",{staticClass:"row py-0 my-0"},[a("div",{staticClass:"col-3 py-1 my-0 text-center"},[a("span",{staticClass:"px-1 py-1",staticStyle:{border:"1px solid transparent","border-radius":"50%"}},["Images"==this.$route.params.type?a("v-icon",{attrs:{color:"gray"}},[t._v("las la-file-image")]):t._e(),t._v(" "),"Framework"==this.$route.params.type?a("v-icon",{attrs:{color:"gray"}},[t._v("las la-file-code")]):t._e(),t._v(" "),"Videos"==this.$route.params.type?a("v-icon",{attrs:{color:"gray"}},[t._v("las la-file-video")]):t._e(),t._v(" "),"Audios"==this.$route.params.type?a("v-icon",{attrs:{color:"gray"}},[t._v("las la-file-audio")]):t._e(),t._v(" "),"Files"==this.$route.params.type?a("v-icon",{attrs:{color:"gray"}},[t._v("las la-file")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"col-6 py-1 my-0 text-left px-0"},[a("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.fileName))])]),t._v(" "),a("div",{staticClass:"col-3 py-0 my-0  d-flex px-1",staticStyle:{"align-items":"center","justify-content":"center"}},[a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.fileSize))])])])])]),t._v(" "),a("div",{staticStyle:{position:"absolute",height:"auto",width:"auto",right:"5%",top:"5%",background:"rgba(38, 82, 89,0.6)","border-radius":"50%",padding:"0px"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fileUrl=""}}},[a("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-close mdi-18px")])],1)],1)],1)]):t._e(),t._v(" "),t.progressvalue>0&&""!=t.fileUrl?a("div",{staticClass:"col-12 d-flex py-2 px-4",staticStyle:{"align-items":"center","justify-content":"center"}},[a("v-progress-linear",{attrs:{color:"#3C87CD",height:"6px",value:t.progressvalue,rounded:""}})],1):t._e(),t._v(" "),a("div",{staticClass:"col-12 py-2 my-0 px-2 text-center"},[a("v-btn",{staticStyle:{"font-size":"11px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{"x-small":"",color:"#3C87CD",loading:t.loading,disabled:""==t.fileUrl},on:{click:t.uploadeFile}},[t._v(t._s(t.$t("general.upload")))])],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);