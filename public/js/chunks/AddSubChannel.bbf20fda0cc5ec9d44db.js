(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{820:function(t,e,o){"use strict";o.r(e);var s={data:function(){return{imagepath:"",Alert:!1,loading:!1,alertMsg:"",wordLimit:200,formstate:!1,requiredRule:[function(t){return!!t||"Oh!, you miss this."}],subType:"Public",subSpaceType:["Public","Private"],spaceName:"",Rule:[function(t){return!!t||"Oh!, you miss this."},function(t){return t.length<80||"Name must be less than 80 characters"}],DescriptionRule:[function(t){return!!t||"Oh!, you miss this."},function(t){return t.length<300||"Description must be less than 300 characters"}],wordCount:0,mycontent:"",editFeild:!1,progressvalue:0,contentInWord:""}},mounted:function(){this.$root.componentIsLoading=!1},methods:{goBack:function(){var t=this;window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.innerSideBarContent="",setTimeout((function(){t.$root.chatComponent.innerSideBarContent="sub_channels"}),500)},createSubSpace:function(){var t=this;this.$refs.subspace.validate()&&(this.loading=!0,axios.post("/create-sub-space",{name:this.spaceName,general_spaceId:this.$root.selectedSpace.general_spaceId,type:this.subType,description:this.contentInWord}).then((function(e){200==e.status&&(t.loading=!1,t.$root.getLocalStore("sub_channels_"+t.$root.selectedSpace.general_spaceId+t.$root.username).then((function(o){if(null!=o){var s=JSON.parse(o);s.sub_channels.unshift(e.data.subspace),t.$root.LocalStore("sub_channels_"+t.$root.selectedSpace.general_spaceId+t.$root.username,s),t.goBack()}})))})).catch((function(e){t.$root.chatComponent.showAlert("Oops!","An error occured, please try again","error"),t.loading=!1})))}}},n=o(4),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{background:"transparent"}},[o("div",{staticClass:"col-12 py-1 my-0 "},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","border-bottom":"2px solid #c5c5c5","align-items":"center"}},[o("div",{staticClass:" mr-1 col-2 px-1 py-0"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[o("v-icon",[t._v("las la-arrow-left")])],1)],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"col-2 py-0 mr-1 text-right"})]),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0",staticStyle:{background:"transparent","font-family":"BodyFont"}},[o("v-form",{ref:"subspace",staticClass:"row my-2 py-2 px-2 ",staticStyle:{"font-family":"BodyFont"},model:{value:t.formstate,callback:function(e){t.formstate=e},expression:"formstate"}},[o("div",{staticClass:"col-12 py-1 my-0 px-2"},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Name")]),t._v(" "),o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"e.g fun",rules:t.Rule,counter:"80",dense:"",color:"#3C87CD"},model:{value:t.spaceName,callback:function(e){t.spaceName=e},expression:"spaceName"}})],1),t._v(" "),o("div",{staticClass:"col-12 "},[o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Choose type")])]),t._v(" "),o("div",{staticClass:"col-lg-12 py-0 my-0 px-2 text-left"},[o("v-chip",{staticClass:"d-inline-block mr-1",style:"Public"!=t.subType?"font-size:13px;cursor:pointer;":"font-size:13px;cursor:pointer;color:white;",attrs:{outlined:"Public"!=t.subType,color:"#3C87CD"},on:{click:function(e){t.subType="Public"}}},[t._v("Public")]),t._v(" "),o("v-chip",{staticClass:"d-inline-block mr-1",style:"Private"!=t.subType?"font-size:13px;cursor:pointer;":"font-size:13px;cursor:pointer;color:white;",attrs:{outlined:"Private"!=t.subType,color:"#3C87CD"},on:{click:function(e){t.subType="Private"}}},[t._v("Private")])],1),t._v(" "),o("div",{staticClass:"col-12"},[o("span",{staticStyle:{"font-size":"12px",color:"gray"}},[t._v("Public is for everyone and private for those you invite")])]),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("span",{staticClass:"mb-1",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Description")]),t._v(" "),o("v-textarea",{staticStyle:{"font-size":"13px"},attrs:{outlined:"",placeholder:"what is this sub-channel for?",rules:t.DescriptionRule,counter:"300",color:"#3C87CD"},model:{value:t.contentInWord,callback:function(e){t.contentInWord=e},expression:"contentInWord"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2 text-center"},[o("v-btn",{staticStyle:{"font-size":"11px","font-weight":"bolder",color:"white","font-family":"MediumFont","text-transform":"none"},attrs:{rounded:"",small:"",loading:t.loading,type:"submit",color:"#3C87CD"},on:{click:function(e){return e.preventDefault(),t.createSubSpace(e)}}},[t._v("Add")])],1)])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 py-0 text-center"},[e("span",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[this._v("Add a sub-channel")])])}],!1,null,"48b5fa38",null);e.default=i.exports}}]);