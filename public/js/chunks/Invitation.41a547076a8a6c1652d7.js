(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{683:function(t,e,o){"use strict";o.r(e);var s;function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i={props:["infoText","fromChat","alertComponent","extraInfo"],data:function(){return{Alert:!1,alertMsg:"",mails:[],items:[],emailRule:[function(t){return!!t||"Email is required"}],Emailformstate:!1,loadingEmail:!1,selectedConnections:"",purpose:"",connectionformstate:!1,Connections:[],loadingConnection:!1,selectedExtraOptions:!1,that:this}},components:{},mounted:function(){this.channelHasResources()},methods:(s={channelHasResources:function(){var t=this;(this.$root.getLocalStore("channel_playlist_"+this.$root.selectedSpace.space_id+this.$root.username).then((function(e){t.$root.channelHasResources=null!=e})),this.$root.channelHasResources)||this.$root.getLocalStore("channel_resource_"+this.$root.selectedSpace.space_id+this.$root.username).then((function(e){t.$root.channelHasResources=null!=e}))},sendToConnections:function(){this.selectedExtraOptions=!0,this.purpose="connection",this.fetchConnected()},mailInvite:function(){this.selectedExtraOptions=!0,this.purpose="mail"},preventClose:function(){},handleSetUp:function(t){"youtube"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/resources"}),"devto"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/resources"})},sendToConnection:function(){var t=this;this.selectedConnections&&(this.loadingConnection=!0,axios.post("/send-to-connections",{space_id:this.$route.params.spaceId,connections:[this.selectedConnections]}).then((function(e){200==e.status&&(t.loadingConnection=!1,t.alertComponent.showAlert("Nice","Invitation sent","success"))})).catch((function(e){t.alertComponent.showAlert("Oops!","Something went wrong,please try again","error"),t.loadingConnection=!1})))},sendInviteMail:function(){var t=this;0!=this.mails.length&&(this.loadingEmail=!0,axios.post("/send-space-invite-mail",{space_id:this.$route.params.spaceId,mails:this.mails}).then((function(e){200==e.status&&(t.loadingEmail=!1,t.alertComponent.showAlert("Nice","Invitation sent","success"))})).catch((function(e){t.alertComponent.showAlert("Oops!","Something went wrong,please try again","error"),t.loadingEmail=!1})))},fetchConnected:function(){var t=this;this.loadingConnection=!0,axios.get("/fetch-connected").then((function(e){200==e.status&&(t.Connections=e.data.data,t.loadingConnection=!1)})).catch((function(e){t.loadingConnection=!1}))},showAlert:function(t,e){this.Alert=!0,this.alertMsg=e;var o=this;setTimeout((function(){o.Alert=!1}),t)},closeShare:function(){this.$root.fromSpaceShare=!1,this.$root.showShare=!1}},n(s,"preventClose",(function(){})),n(s,"shareToWhatsapp",(function(){var t="whatsapp://send?text="+this.$root.shareText+", "+this.$root.shareLink;window.open(t,"_blank")})),n(s,"shareToTwitter",(function(){var t="https://twitter.com/intent/tweet?url="+this.$root.shareLink+"&text="+this.$root.shareText;window.open(t,"_blank")})),n(s,"showBot",(function(){window.location=this.$root.shareLink})),n(s,"copyLink",(function(){var t,e;t=this.$root.shareLink,(e=document.createElement("textarea")).value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.alertComponent.showAlert("Nice","Link copied","success")})),s)},a=o(4),l=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-2 py-2 ",on:{click:function(e){return e.stopPropagation(),t.preventClose(e)}}},[o("v-card",{staticClass:"col-lg-4 offset-lg-4 py-1  col-md-8 offset-md-2"},[o("div",{staticClass:"row"},["custom"==t.infoText?[o("div",{staticClass:"px-0 mt-2"},[o("div",{staticClass:"px-2",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Welcome to your channel:")]),t._v(" "),o("div",{staticClass:"col-12 py-1 pt-0 px-2 text-left"},[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Your home for connecting with other developers.")])]),t._v(" "),t.that.$root.channelHasResources?t._e():[o("div",{staticClass:"mt-3 px-2",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Set up your channel")]),t._v(" "),o("div",{staticClass:"col-12 py-1 px-2 text-left"},[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Curate the best resources form YouTube and DevTo.")])]),t._v(" "),o("v-card",{staticClass:"py-2 px-2 d-flex flex-row col-12",staticStyle:{"border-bottom":"1px solid #c5c5c5","border-top":"1px solid #c5c5c5"},attrs:{tile:"",flat:""},on:{click:function(e){return t.handleSetUp("youtube")}}},[o("div",{staticClass:"mr-2"},[o("v-icon",{staticStyle:{color:"#FF0000"}},[t._v("mdi mdi-youtube")])],1),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v("Create playlists from Youtube")])])]),t._v(" "),o("v-card",{staticClass:"py-2 px-2 d-flex flex-row col-12",attrs:{tile:"",flat:""},on:{click:function(e){return t.handleSetUp("devto")}}},[o("div",{staticClass:"mr-2"},[o("img",{attrs:{src:"/imgs/devto.png",height:"27px"}})]),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v("Create resources from DevTo")])])])],t._v(" "),t.that.$root.channelHasResources?o("div",{staticClass:"mt-5 mb-2 px-2",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Invite people")]):t._e()],2)]:[o("div",{staticClass:"col-12 py-1 text-center"},[o("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v(t._s(t.infoText))])])],t._v(" "),t.selectedExtraOptions?[o("v-app",{staticClass:"col-12 px-0 py-1",staticStyle:{background:"transparent","font-family":"BodyFont",height:"200px"}},["mail"==t.purpose?o("v-form",{ref:"emailform",staticClass:"col-12 py-0 my-0 text-center",model:{value:t.Emailformstate,callback:function(e){t.Emailformstate=e},expression:"Emailformstate"}},[o("div",{staticClass:"row py-0 my-0"},[o("div",{staticClass:"col-12 px-1 py-0 pb-2 text-left"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.selectedExtraOptions=!1}}},[o("v-icon",[t._v("las la-arrow-left")])],1)],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("v-combobox",{staticStyle:{"font-size":"13px"},attrs:{items:t.items,label:"E-mails",rules:t.emailRule,multiple:"",placeholder:"Type e-mails",dense:"",color:"#3C87CD",chips:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[o("v-chip",t._b({key:JSON.stringify(e.item),staticClass:"my-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"},attrs:{"input-value":e.selected,color:"#3C87CD",dense:"",outlined:"",disabled:e.disabled}},"v-chip",e.attrs,!1),[t._v("\n            \n             "+t._s(e.item)+"\n           ")])]}}],null,!1,2168605569),model:{value:t.mails,callback:function(e){t.mails=e},expression:"mails"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[o("v-btn",{staticStyle:{"font-size":"11px",color:"white","font-family":"MediumFont"},attrs:{rounded:"",loading:t.loadingEmail,small:"",color:"#3C87CD"},on:{click:function(e){return e.stopPropagation(),t.sendInviteMail(e)}}},[t._v("\n                 "+t._s(t.$t("general.invite"))+"\n                 ")])],1)])]):t._e(),t._v(" "),"connection"==t.purpose?o("v-form",{ref:"connectionform",staticClass:"col-12 py-0 my-0 text-center",model:{value:t.connectionformstate,callback:function(e){t.connectionformstate=e},expression:"connectionformstate"}},[o("div",{staticClass:"row py-0 my-0"},[o("div",{staticClass:"col-12 px-1 py-0 pb-2 text-left"},[o("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.selectedExtraOptions=!1}}},[o("v-icon",[t._v("las la-arrow-left")])],1)],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedConnections,expression:"selectedConnections"}],staticClass:"browser-default custom-select",staticStyle:{"font-size":"14px !important"},attrs:{placeholder:t.$t("general.select")+"..."},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedConnections=e.target.multiple?o:o[0]}}},t._l(t.Connections,(function(e,s){return o("option",{key:s,domProps:{value:e.username}},[t._v(t._s(e.name))])})),0)]),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[o("v-btn",{staticStyle:{"font-size":"11px",color:"white","font-family":"MediumFont"},attrs:{rounded:"",loading:t.loadingEmail,small:"",color:"#3C87CD"},on:{click:function(e){return e.stopPropagation(),t.sendToConnection(e)}}},[t._v("\n                  "+t._s(t.$t("general.invite"))+"\n                 ")])],1)])]):t._e()],1)]:["custom"!=t.infoText?o("div",{staticClass:"col-12 py-1 text-center"},[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v(t._s(t.extraInfo))])]):t._e(),t._v(" "),o("div",{staticClass:"col-12  py-0"},[o("div",{staticClass:"row"},["custom"!=t.infoText||t.that.$root.channelHasResources?[o("v-card",{staticClass:"py-2 px-2 d-flex flex-row col-12",staticStyle:{"border-bottom":"1px solid #c5c5c5","border-top":"1px solid #c5c5c5"},attrs:{tile:"",flat:""},on:{click:t.copyLink}},[o("div",{staticClass:"mr-2"},[o("v-icon",{staticClass:"mx-1",attrs:{color:"#3C87CD"}},[t._v("las la-link")])],1),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v("Copy invitation link")])])]),t._v(" "),o("v-card",{staticClass:"py-2 px-2 d-flex flex-row col-12",staticStyle:{"border-bottom":"1px solid #c5c5c5"},attrs:{tile:"",flat:""},on:{click:t.shareToTwitter}},[o("div",{staticClass:"mr-2"},[o("v-icon",{staticClass:"mx-1",attrs:{color:"#00acee"}},[t._v("las la-twitter")])],1),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v("Share to twitter")])])]),t._v(" "),o("v-card",{staticClass:"py-2 px-2 d-flex flex-row col-12",style:t.fromChat?"border-bottom:1px solid #c5c5c5;":"",attrs:{tile:"",flat:""},on:{click:t.shareToWhatsapp}},[o("div",{staticClass:"mr-2"},[o("v-icon",{staticClass:"mx-1",attrs:{color:"#4FCE5D"}},[t._v("las la-whatsapp")])],1),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v("Share to Whatsapp")])])]),t._v(" "),t.fromChat&&!t.that.$root.comingFromDiaryBank?o("v-card",{staticClass:"py-2 px-2 d-flex flex-row col-12",staticStyle:{"border-bottom":"1px solid #c5c5c5"},attrs:{tile:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.mailInvite(e)}}},[o("div",{staticClass:"mr-2"},[o("v-icon",{staticClass:"mx-1",attrs:{color:"#3C87CD"}},[t._v("las la-envelope")])],1),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v("Send invitation mail")])])]):t._e(),t._v(" "),t.fromChat?o("v-card",{staticClass:"py-2 px-2 d-flex flex-row col-12",attrs:{tile:"",flat:""},on:{click:function(e){return e.stopPropagation(),t.sendToConnections(e)}}},[o("div",{staticClass:"mr-2"},[o("v-icon",{staticClass:"mx-1",attrs:{color:"#3C87CD"}},[t._v("las la-user-friends")])],1),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v("Invite your followers")])])]):t._e()]:t._e()],2)])],t._v(" "),o("input",{attrs:{type:"hidden",id:"spacelink"},domProps:{value:this.$root.shareLink}})],2)])],1)}),[],!1,null,null,null);e.default=l.exports}}]);