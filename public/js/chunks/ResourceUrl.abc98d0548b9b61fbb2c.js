(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{726:function(t,o,e){"use strict";e.r(o);var s={data:function(){var t=this;return{searchQuery:"",urlRule:[function(o){return t.isURL(o)||"Link should be valid and secure"}],formstate:!1,linkInfo:!1,loading:!1,loadingLink:!1,that:this}},components:{},mounted:function(){this.$root.showAddButton=!1},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},isURL:function(t){if(0==t.length)return!1;var o;try{o=new URL(t)}catch(t){return!1}return"https:"===o.protocol},addToResource:function(){var t=this;this.loading=!0,axios.post("/add-items-to-resource",{resource_id:this.$root.selectedResource.resource_id,type:"shared_link",items:[this.linkInfo]}).then((function(o){if(200==o.status){t.loading=!1,t.$root.forcereloadResource=!0,t.$root.chatComponent.showAlert("Added!","Resource URL has been added","success","bottomRight",3e3);var e=o.data.content;t.$root.resourcesData=e.concat(t.$root.resourcesData),t.saveOrder(),t.goBack()}})).catch((function(o){t.loading=!1}))},saveOrder:function(){var t=this,o=[];this.$root.resourcesData.forEach((function(t){o.push(t.id)})),axios.post("/save-resources-content-order",{resource_id:this.$root.selectedResource.resource_id,content:o}).then((function(o){200==o.status&&(t.$root.LocalStore("channel_resource_content_"+t.$root.selectedResource.resource_id+t.$root.username,t.$root.resourcesData),t.$root.loadingResourceContent=!1)})).catch((function(o){t.$root.chatComponent.showAlert("Oops!","Unable to save changes,please try again","error"),t.$root.loadingResourceContent=!1}))},processURL:function(t){var o,s=t;return e(406).get(((o=s).indexOf("//")>-1?o.split("/")[2]:o.split("/")[0]).split(":")[0].split("?")[0])},getLinkInfo:function(t){var o=this;this.searchQuery=t.target.value,this.isURL(this.searchQuery)&&(this.loadingLink=!0,axios.post("/url/metadata",{url:this.searchQuery}).then((function(t){200==t.status&&(o.linkInfo=t.data,o.loadingLink=!1)})).catch((function(t){console.log(t),o.$root.chatComponent.showAlert("Oops!","Unable to fetch URL details","error","bottomRight",3e3),o.loadingLink=!1})))}}},i=e(4),n=Object(i.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"py-1 px-0"},[e("div",{staticClass:"col-12 px-2 py-2  fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"white",top:"0%","align-items":"center"}},[e("div",{staticClass:" mr-1 py-0"},[e("v-btn",{attrs:{icon:""},on:{click:function(o){return o.stopPropagation(),t.goBack(o)}}},[e("v-icon",[t._v("las la-arrow-left")])],1)],1),t._v(" "),e("v-form",{staticClass:"py-0 text-center px-0",staticStyle:{width:"100%"},model:{value:t.formstate,callback:function(o){t.formstate=o},expression:"formstate"}},[e("input",{staticClass:"py-2 px-3",staticStyle:{width:"100%",heigth:"100%","font-size":"13px",background:"whitesmoke","border-radius":"4px","font-family":"BodyFont"},attrs:{placeholder:"Paste resource URL here",type:"search"},domProps:{value:t.searchQuery},on:{input:t.getLinkInfo}})])],1),t._v(" "),t.loadingLink?[e("div",{staticClass:"col-12 mt-4 text-center"},[e("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[t.linkInfo?[e("div",{staticClass:"col-12  pb-0 pt-0 px-0 d-flex flex-row mt-1",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-5 py-1 px-1",staticStyle:{height:"84px"}},[e("div",{style:"position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url("+t.linkInfo.image+");background-repeat: no-repeat; background-size:cover;"},[e("div",{staticClass:"px-1 py-1 d-flex",staticStyle:{"align-items":"center",background:"rgba(0, 0, 0,0.1)","justify-content":"center",cursor:"pointer",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}},[e("v-icon",{staticStyle:{"font-size":"35px",color:"#ffffff"}},[t._v("las la-link")])],1)])]),t._v(" "),e("div",{staticClass:"col-7 d-flex flex-column pt-1 my-auto",staticStyle:{"justify-content":"center",width:"100%"}},[e("div",{staticClass:"pt-3 mb-1",staticStyle:{"font-family":"MediumFont","font-size":"13px",overflow:"hidden",width:"100%","text-overflow":"ellipsis"},domProps:{innerHTML:t._s(t.linkInfo.title)}}),t._v(" "),e("div",{staticClass:"mb-1",staticStyle:{"font-family":"BodyFont","font-size":"12px","white-space":"nowrap",color:"grey",overflow:"hidden","text-overflow":"ellipsis"},domProps:{innerHTML:t._s(t.linkInfo.description)}}),t._v(" "),e("div",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"grey",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n            "+t._s(t.processURL(t.linkInfo.base))+"\n           ")])])]),t._v(" "),e("div",{staticClass:"col-12 text-center"},[e("v-btn",{staticStyle:{"font-size":"11px","text-transform":"none","font-weight":"bolder",color:"white","font-family":"BodyFont"},attrs:{rounded:"",small:"",loading:t.loading,disabled:!t.linkInfo||t.loadingLink,color:"#3C87CD"},on:{click:t.addToResource}},[t._v("Add to "+t._s(t.that.$root.selectedResource.name))])],1)]:t._e()]],2)}),[],!1,null,"9b213ade",null);o.default=n.exports}}]);