(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{664:function(t,e,o){"use strict";o.r(e);var c={methods:{controlAction:function(t){"profile"==t&&this.goToProfile(this.$root.selectedSpace.userInfo.username),"channel"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/channel_info"}),"diary"==t&&this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/channel_info"})},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})}}},i=o(4),n=Object(i.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"py-0 px-0",staticStyle:{width:"200px"}},[o("div",{staticClass:"col-12 px-0 py-1 d-flex flex-column"},["Direct"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("profile")}}},[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("View profile")])]):t._e(),t._v(" "),"Bot"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("diary")}}},[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Diary info")])]):t._e(),t._v(" "),"Channel"==this.$root.selectedSpace.type||"SubSpace"==this.$root.selectedSpace.type||"Team"==this.$root.selectedSpace.type?o("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(e){return t.controlAction("channel")}}},[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Channel info")])]):t._e()],1)])}),[],!1,null,"fef9c0bc",null);e.default=n.exports}}]);