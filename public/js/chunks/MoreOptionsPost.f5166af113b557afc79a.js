(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{686:function(t,o,e){"use strict";e.r(o);var s={props:["post","alertComponent","fromProfile"],data:function(){return{loadingDelete:!1}},methods:{share:function(){this.$root.shareLink="https://www.citonhub.com/link/post/"+this.post.post_id,this.$root.shareText="Check out this project on Citonhub",this.$root.infoText="Share your project with others",this.$root.alertComponent=this.alertComponent,this.$root.showInvitation=!0},deletePost:function(){var t=this;this.loadingDelete||(this.loadingDelete=!0,axios.post("/delete-hub-post",{id:this.post.id}).then((function(o){if(200==o.status){var e=[];if(t.fromProfile)e=t.alertComponent.userProjects.filter((function(o){return o.id!=t.post.id})),t.alertComponent.userProjects=e;else{e=t.$root.posts.filter((function(o){return o.id!=t.post.id})),t.$root.posts=e;var s=t.$root.postsSearch.filter((function(o){return o.id!=t.post.id}));t.$root.postsSearch=s}}})).catch((function(o){t.loadingDelete=!1,console.log(o),t.alertComponent.showAlert("Oops!","Something went wrong","error")})))}}},i=e(4),r=Object(i.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-card",{staticClass:"py-0 px-0",staticStyle:{width:"auto"}},[e("div",{staticClass:"col-12 px-0 py-1 d-flex flex-column"},[e("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:t.share}},[e("v-icon",{staticClass:"mr-1"},[t._v("mdi mdi-share-variant")]),t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Share")])],1),t._v(" "),t.post.user.tempId==this.$root.user_temp_id?e("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:"",loading:t.loadingDelete},on:{click:function(o){return o.stopPropagation(),t.deletePost()}}},[e("v-icon",{staticClass:"mr-1"},[t._v("las la-trash")]),t._v(" "),e("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[t._v("Delete")])],1):t._e()],1)])}),[],!1,null,"2f697b05",null);o.default=r.exports}}]);