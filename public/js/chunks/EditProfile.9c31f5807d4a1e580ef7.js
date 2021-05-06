(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{674:function(t,e,o){"use strict";o.r(e);var a={data:function(){return{fullName:"",contentInWord:"",nameRule:[function(t){return!!t||"Oh!, you miss this."},function(t){return t.length<=80||"Name must be less than 80 characters"}],UsernameRule:[function(t){return!!t||"Oh!, you miss this."},function(t){return t.length<16||"Username must be less than 16 characters"}],aboutRule:[function(t){return!!t||"Oh!, you miss this."},function(t){return t.length<250||"About must be less than 250 characters"}],imagepath:"",loading:!1,progressvalue:0,imageExist:!1}},mounted:function(){this.$root.showMobileHub=!1,this.setValues()},methods:{preventClose:function(){},setValues:function(){this.fullName=this.$root.authProfile.name,this.contentInWord=this.$root.authProfile.about,this.$root.authProfile.image_name&&(this.$root.croppedImage="/imgs/profile/"+this.$root.authProfile.image_name+"."+this.$root.authProfile.image_extension)},editProfile:function(){axios.post("/update-profile",{full_name:this.newName,about:this.newBio})},b64toBlob:function(t,e,o){e=e||"",o=o||512;for(var a=atob(t),i=[],n=0;n<a.length;n+=o){for(var r=a.slice(n,n+o),s=new Array(r.length),l=0;l<r.length;l++)s[l]=r.charCodeAt(l);var u=new Uint8Array(s);i.push(u)}return new Blob(i,{type:e})},handleBlob:function(t){var e=t.split(";"),o=e[0].split(":")[1],a=o.slice(6),i=e[1].split(",")[1];return[this.b64toBlob(i,o),a]},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},crophandler:function(t){var e=this;this.imageExist=!0;var o=t.target;if(o.files&&o.files[0]){var a=new FileReader;a.onload=function(t){e.$root.imagepath=t.target.result,e.imagepath=t.target.result},a.readAsDataURL(o.files[0]),this.$router.push({path:"/crop-image"})}},saveChanges:function(){var t=this;this.loading=!0;var e=new FormData;if(this.imageExist&&!this.$root.imageExist){var o=this.handleBlob(this.$root.croppedImage);e.append("image",o[0]),e.append("image_ext",o[1])}e.append("full_name",this.fullName),e.append("about",this.contentInWord),axios.post("/update-profile",e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){this.progressvalue=parseInt(Math.round(t.loaded/t.total*100))}.bind(this)}).then((function(e){200==e.status&&(t.loading=!1,t.$root.profilePageComponent.userData.name=e.data.user.name,t.$root.profilePageComponent.userData.about=e.data.user.about,t.$root.profilePageComponent.profileData.image_name=e.data.profile.image_name,t.$root.profilePageComponent.profileData.image_extension=e.data.profile.image_extension,t.$root.profilePageComponent.profileData.background_color=e.data.profile.background_color,t.$root.authProfile.name=e.data.user.name,t.$root.authProfile.about=e.data.user.about,t.$root.authProfile.image_name=e.data.profile.image_name,t.$root.authProfile.image_extension=e.data.profile.image_extension,t.$root.authProfile.background_color=e.data.profile.background_color,t.goBack())})).catch((function(e){t.$root.profilePageComponent.showAlert("Oops!","Unable to save your changes","error"),t.loading=!1}))}}},i=o(4),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row",staticStyle:{"font-family":"BodyFont",background:"transparent"},on:{click:function(e){return e.stopPropagation(),t.preventClose()}}},[o("div",{staticClass:"col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left",staticStyle:{height:"auto !important","font-family":"BodyFont",background:"transparent !important"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 py-2 my-0 px-2"},[t._m(0),t._v(" "),o("v-row",[o("v-col",{staticClass:"col-12 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[o("v-sheet",{staticClass:"py-0 px-0 sheetbackImg mx-auto",style:"background-image:url("+this.$root.croppedImage+");border-radius:50%;cursor:pointer;background-size:contain;",attrs:{elevation:"0",height:"120",width:"120",color:"whitesmoke"}},[o("input",{ref:"settingsimage",staticStyle:{opacity:"0",width:"120px",height:"120px",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",id:"settingsimage",accept:"image/x-png,image/jpeg,image/jpg"},on:{change:t.crophandler}}),t._v(" "),o("v-sheet",{staticClass:"py-auto px-auto d-flex",staticStyle:{"border-radius":"50%"},attrs:{elevation:"0",height:"100%",width:"100%",color:"rgba(15, 33, 36, 0.3)"}},[o("v-icon",{staticClass:"mx-auto white-text"},[t._v("mdi-camera-plus")])],1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Name")]),t._v(" "),o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{outlined:"",color:"#3C87CD",placeholder:t.$t("general.Name")+"...",dense:"",counter:"80",rules:t.nameRule},model:{value:t.fullName,callback:function(e){t.fullName=e},expression:"fullName"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Bio")]),t._v(" "),o("v-textarea",{staticStyle:{"font-size":"13px"},attrs:{dense:"",placeholder:"your bio",rules:t.aboutRule,counter:"250",outlined:"",color:"#3C87CD"},model:{value:t.contentInWord,callback:function(e){t.contentInWord=e},expression:"contentInWord"}})],1),t._v(" "),o("div",{staticClass:" text-center col-12 py-1 mt-4 my-0 px-2"},[o("v-btn",{staticStyle:{"font-size":"12px","font-family":"MediumFont","font-weight":"bolder",color:"white"},attrs:{loading:t.loading,medium:"",rounded:"",color:"#3C87CD"},on:{click:t.saveChanges}},[t._v("\n           Save\n           ")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticStyle:{"font-size":"13px"}},[this._v("Profile Image")])])}],!1,null,null,null);e.default=n.exports}}]);