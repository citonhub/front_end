(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{713:function(t,e,o){"use strict";o.r(e);var s={methods:{controlAction:function(t){"profile"==t&&this.goToProfile(this.$root.selectedSpace.userInfo.username),"channel"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/channel_info"}),"diary"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/channel_info"}),"playlists"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/playlists"}),"resources"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/resources"}),"support"==t&&(this.$root.showProcessorFromChat=!0,this.$root.fromSupportDirectlink=!0,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/payment"})),"support_link"==t&&this.copyMessage(),"reset"==t&&this.resetChat()},resetChat:function(){this.$root.chatComponent.messageIsDone=!1,this.$root.removeLocalStorage("full_space_"+this.$root.selectedSpace.space_id+this.$root.username,"chat_messages")},copyMessage:function(){var t,e;t="https://link.citonhub.com/support/"+this.$root.selectedSpace.space_id,(e=document.createElement("textarea")).value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$root.chatComponent.showAlert("Copied!","Copied to clipboard","success")},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})}}},c=o(4),a=Object(c.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"py-0 px-0 col-lg-12 col-md-8 ",staticStyle:{"min-width":"200px","max-width":"250px"}},[o("div",{staticClass:"col-12 px-0 py-1 d-flex flex-column"},["Channel"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("playlists")}}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-play-circle")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Playlists")])],1):t._e(),t._v(" "),"Channel"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("resources")}}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-folder")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Resources")])],1):t._e(),t._v(" "),"Direct"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("profile")}}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-cog")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("View profile")])],1):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("diary")}}},[o("v-icon",{staticClass:"mr-1"},[t._v(" las la-cog")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Diary info")])],1):t._e(),t._v(" "),"Channel"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("channel")}}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-cog")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Channel info")])],1):t._e(),t._v(" "),"Channel"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type&&"Team"!=this.$root.selectedSpace.type||"support"!=this.$root.selectedSpace.payment_option?t._e():o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("support")}}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-hands-helping")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Support "+t._s(this.$root.selectedSpace.name))])],1),t._v(" "),"Channel"!=this.$root.selectedSpace.type&&"SubSpace"!=this.$root.selectedSpace.type&&"Team"!=this.$root.selectedSpace.type||"support"!=this.$root.selectedSpace.payment_option?t._e():o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("support_link")}}},[o("v-icon",{staticClass:"mr-1"},[t._v("las la-link")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Copy support link")])],1),t._v(" "),o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("reset")}}},[o("v-icon",{staticClass:"mr-1"},[t._v(" las la-sync-alt")]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Refresh chat")])],1)],1)])}),[],!1,null,"6aaf079c",null);e.default=a.exports}}]);