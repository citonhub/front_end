(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{297:function(t,i,e){var o=e(411);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(25)(o,n);o.locals&&(t.exports=o.locals)},410:function(t,i,e){"use strict";var o=e(297);e.n(o).a},411:function(t,i,e){(t.exports=e(24)(!1)).push([t.i,"\n.fixed-layout[data-v-0b2a7f5c]{\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.scroller[data-v-0b2a7f5c]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-0b2a7f5c]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n  \n",""])},612:function(t,i,e){"use strict";e.r(i);var o={data:function(){return{showSideBar:!1,searchType:"",that:this}},components:{ImageCropperBoard:function(){return e.e(99).then(e.bind(null,654))},Invitation:function(){return e.e(64).then(e.bind(null,655))},TopBar:function(){return e.e(93).then(e.bind(null,656))},SideBar:function(){return e.e(91).then(e.bind(null,657))},ProfileView:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,637))}},mounted:function(){this.$root.boardComponent=this},methods:{closeCropper:function(){this.$root.showImageCropper=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},n=(e(410),e(4)),s=Object(n.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"fixed-layout"},[e("div",{staticStyle:{width:"100%",height:"auto","overflow-y":"hidden","overflow-x":"hidden"}},[e("v-card",{staticClass:"d-none col-lg-2  d-lg-block",staticStyle:{"z-index":"999","border-radius":"0px","align-items":"center",background:"white","justify-content":"center",position:"fixed",height:"100%",top:"0%"}},[[t.that.$root.componentIsLoading?e("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"100%",width:"100%","align-items":"center","justify-content":"center"}},[e("img",{attrs:{src:"/imgs/diary_loading.svg",height:"50"}})]):t._e(),t._v(" "),e("side-bar")]],2),t._v(" "),e("v-slide-x-transition",[t.that.$root.showSideBar?e("div",{staticClass:"col-12 d-lg-none d-block py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"},on:{click:function(i){t.that.$root.showSideBar=!1}}},[e("div",{staticStyle:{position:"absolute",height:"100%",width:"70%",left:"0"}},[e("div",{staticClass:"col-md-6 pt-2",staticStyle:{background:"white",height:"100%"},on:{click:function(i){i.stopPropagation(),t.that.$root.showSideBar=!0}}},[[t.that.$root.componentIsLoading?e("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"100%",width:"100%","align-items":"center","justify-content":"center"}},[e("img",{attrs:{src:"/imgs/diary_loading.svg",height:"50"}})]):t._e(),t._v(" "),e("side-bar")]],2)])]):t._e()]),t._v(" "),t.that.$root.showImageCropper?e("div",{staticClass:"py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"}},[e("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"90%",top:"5%",width:"94%",left:"3%","align-items":"center","justify-content":"center"}},[e("div",{staticClass:" col-lg-6  pt-2 col-md-8  d-flex flex-column",staticStyle:{background:"white",height:"100%"}},[e("div",{staticClass:"text-center d-flex flex-row",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-2 px-1 py-1 text-left"},[e("v-btn",{attrs:{icon:""},on:{click:t.closeCropper}},[e("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"col-2 px-1 py-1"})]),t._v(" "),e("image-cropper-board")],1)])]):t._e(),t._v(" "),this.$root.showInvitation?e("div",{staticClass:"py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"},on:{click:function(i){t.that.$root.showInvitation=!1}}},[e("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"90%",top:"5%",width:"94%",left:"3%","align-items":"center","justify-content":"center"}},[e("invitation",{attrs:{infoText:this.$root.infoText,extraInfo:this.$root.extraInfo,fromChat:!1,alertComponent:this.$root.alertComponent}})],1)]):t._e(),t._v(" "),e("div",{staticClass:" col-lg-10  offset-lg-2 ",staticStyle:{"z-index":"999999",background:"#F5F5FB","align-items":"center","justify-content":"center",position:"fixed",height:"100%",top:"0%"}},[e("top-bar"),t._v(" "),e("div",{staticClass:"col-12 py-0 pb-3 px-0 mt-md-5",staticStyle:{position:"absolute",background:"#F5F5FB",left:"0%",top:"0%",height:"100%","overflow-y":"hidden","overflow-x":"hidden"}},[e("router-view")],1)],1)],1),t._v(" "),this.$root.showProfileView?e("div",{staticClass:"py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"#F5F5FB"}},[e("profile-view",{attrs:{fromModal:!0}})],1):t._e()])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"text-center col-8 py-1",staticStyle:{width:"100%"}},[i("h6",[this._v("Crop Image")])])}],!1,null,"0b2a7f5c",null);i.default=s.exports}}]);