(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{637:function(t,e,o){"use strict";o.r(e);var a={data:function(){return{imagepath:"",Alert:!1,loading:!1,alertMsg:"",wordLimit:200,spaceName:this.$root.selectedSpace.name,Rule:[function(t){return!!t||"Name is required"},function(t){return t.length<80||"Name must be less than 80 characters"}],DescriptionRule:[function(t){return!!t||"Description is required"},function(t){return t.length<300||"Description must be less than 300 characters"}],wordCount:0,mycontent:"",editFeild:!1,progressvalue:0,contentInWord:""}},components:{},mounted:function(){null==this.$root.selectedSpace.description?this.contentInWord="":this.contentInWord=this.$root.selectedSpace.description},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.innerSideBarContent="",this.$root.fromChannelEdit=!1,this.$root.chatComponent.innerSideBarContent="channel_info"},focusedText:function(){},crophandler:function(t){var e=this,o=t.target;if(o.files&&o.files[0]){var a=new FileReader;a.onload=function(t){e.$root.imagepath=t.target.result,e.imagepath=t.target.result},a.readAsDataURL(o.files[0]),this.$root.fromChannelEdit=!0,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/crop-image"})}},b64toBlob:function(t,e,o){e=e||"",o=o||512;for(var a=atob(t),n=[],i=0;i<a.length;i+=o){for(var s=a.slice(i,i+o),r=new Array(s.length),c=0;c<s.length;c++)r[c]=s.charCodeAt(c);var l=new Uint8Array(r);n.push(l)}return new Blob(n,{type:e})},handleBlob:function(t){var e=t.split(";"),o=e[0].split(":")[1],a=o.slice(6),n=e[1].split(",")[1];return[this.b64toBlob(n,o),a]},saveChanges:function(){var t=this;this.loading=!0;var e=new FormData;if(""!=this.$root.croppedImage){var o=this.handleBlob(this.$root.croppedImage);e.append("image",o[0]),e.append("image_ext",o[1])}e.append("name",this.spaceName),e.append("description",this.contentInWord),e.append("space_id",this.$route.params.spaceId),axios.post("/update-space",e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){this.progressvalue=parseInt(Math.round(t.loaded/t.total*100))}.bind(this)}).then((function(e){200==e.status&&(t.loading=!1,t.$root.croppedImage="",t.$root.chatComponent.fetchSpaceInfo(),t.goBack())})).catch((function(e){t.$root.chatComponent.showAlert("Oops","Something went wrong,please try again","error"),t.loading=!1}))}}},n=o(4),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{staticStyle:{background:"transparent"}},[o("div",{staticClass:"col-12 py-1 my-0 "},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 py-0 px-1"},[o("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[o("v-icon",[t._v("las la-arrow-left")])],1)],1),t._v(" "),o("div",{staticClass:"col-8 py-0"},[o("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Edit Channel")])]),t._v(" "),o("div",{staticClass:"col-2 py-0 mr-1 text-right"})]),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0"},[o("v-form",{staticClass:"row my-2 py-2 px-2 ",staticStyle:{"font-family":"BodyFont"}},[o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("div",[o("span",{staticStyle:{"font-size":"13px"}},[t._v(" Channel profile image")])]),t._v(" "),o("v-row",[o("v-col",{staticClass:"col-12 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[o("v-sheet",{staticClass:"py-0 px-0 sheetbackImg mx-auto",style:"background-image:url("+this.$root.croppedImage+");border-radius:50%;cursor:pointer;background-size:contain;",attrs:{elevation:"0",height:"104",width:"104",color:"whitesmoke"}},[o("input",{staticStyle:{opacity:"0",width:"100%",height:"100%",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",accept:"image/x-png,image/jpeg,image/jpg"},on:{change:t.crophandler}}),t._v(" "),o("v-sheet",{staticClass:"py-auto px-auto d-flex",staticStyle:{"border-radius":"50%"},attrs:{elevation:"0",height:"100%",width:"100%",color:"rgba(15, 33, 36, 0.3)"}},[o("v-icon",{staticClass:"mx-auto white-text"},[t._v("mdi-camera-plus")])],1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:t.$t("general.Name")+"...",label:t.$t("general.Name"),rules:t.Rule,counter:"80",dense:"",color:"#3C87CD"},model:{value:t.spaceName,callback:function(e){t.spaceName=e},expression:"spaceName"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("v-textarea",{staticStyle:{"font-size":"13px"},attrs:{label:t.$t("general.description"),dense:"",placeholder:t.$t("general.description")+"...",rules:t.DescriptionRule,counter:"300",color:"#3C87CD"},model:{value:t.contentInWord,callback:function(e){t.contentInWord=e},expression:"contentInWord"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2 text-center"},[o("v-btn",{staticStyle:{"font-size":"11px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{rounded:"",small:"",loading:t.loading,color:"#3C87CD"},on:{click:t.saveChanges}},[t._v(t._s(t.$t("general.save")))])],1)])],1)])])])}),[],!1,null,"386418b2",null);e.default=i.exports}}]);