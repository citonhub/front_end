(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{298:function(t,i,o){var e=o(414);"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(25)(e,n);e.locals&&(t.exports=e.locals)},413:function(t,i,o){"use strict";var e=o(298);o.n(e).a},414:function(t,i,o){(t.exports=o(24)(!1)).push([t.i,"\n.fixed-layout[data-v-35c4a3db]{\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.scroller[data-v-35c4a3db]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-35c4a3db]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n  \n",""])},618:function(t,i,o){"use strict";o.r(i);var e={data:function(){return{showSideBar:!1,searchType:"",that:this}},components:{ImageCropperBoard:function(){return o.e(105).then(o.bind(null,662))},Invitation:function(){return o.e(67).then(o.bind(null,663))},TransactionInfo:function(){return o.e(99).then(o.bind(null,664))},FeeInfo:function(){return o.e(54).then(o.bind(null,666))},TopBar:function(){return o.e(98).then(o.bind(null,669))},ReferralInfo:function(){return o.e(88).then(o.bind(null,667))},BalanceInfo:function(){return o.e(19).then(o.bind(null,668))},SideBar:function(){return o.e(96).then(o.bind(null,671))},ProfileView:function(){return Promise.all([o.e(0),o.e(5)]).then(o.bind(null,645))},PayoutAccount:function(){return o.e(98).then(o.bind(null,670))},PayoutInfo:function(){return o.e(81).then(o.bind(null,665))}},mounted:function(){this.$root.boardComponent=this},methods:{closeCropper:function(){this.$root.showImageCropper=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},n=(o(413),o(4)),a=Object(n.a)(e,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"fixed-layout"},[o("div",{staticStyle:{width:"100%",height:"auto","overflow-y":"hidden","overflow-x":"hidden"}},[o("v-card",{staticClass:"d-none col-lg-2  d-lg-block",staticStyle:{"z-index":"999","border-radius":"0px","align-items":"center",background:"white","justify-content":"center",position:"fixed",height:"100%",top:"0%"}},[[t.that.$root.componentIsLoading?o("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"100%",width:"100%","align-items":"center","justify-content":"center"}},[o("img",{attrs:{src:"/imgs/diary_loading.svg",height:"50"}})]):t._e(),t._v(" "),o("side-bar")]],2),t._v(" "),o("v-slide-x-transition",[t.that.$root.showSideBar?o("div",{staticClass:"col-12 d-lg-none d-block py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"},on:{click:function(i){t.that.$root.showSideBar=!1}}},[o("div",{staticStyle:{position:"absolute",height:"100%",width:"70%",left:"0"}},[o("div",{staticClass:"col-md-6 pt-2",staticStyle:{background:"white",height:"100%"},on:{click:function(i){i.stopPropagation(),t.that.$root.showSideBar=!0}}},[[t.that.$root.componentIsLoading?o("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"100%",width:"100%","align-items":"center","justify-content":"center"}},[o("img",{attrs:{src:"/imgs/diary_loading.svg",height:"50"}})]):t._e(),t._v(" "),o("side-bar")]],2)])]):t._e()]),t._v(" "),t.that.$root.showImageCropper?o("div",{staticClass:"py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"}},[o("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"90%",top:"5%",width:"94%",left:"3%","align-items":"center","justify-content":"center"}},[o("div",{staticClass:" col-lg-6  pt-2 col-md-8  d-flex flex-column",staticStyle:{background:"white",height:"100%"}},[o("div",{staticClass:"text-center d-flex flex-row",staticStyle:{"align-items":"center"}},[o("div",{staticClass:"col-2 px-1 py-1 text-left"},[o("v-btn",{attrs:{icon:""},on:{click:t.closeCropper}},[o("v-icon",[t._v("mdi mdi-close")])],1)],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"col-2 px-1 py-1"})]),t._v(" "),o("image-cropper-board")],1)])]):t._e(),t._v(" "),this.$root.showInvitation?o("div",{staticClass:"py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"},on:{click:function(i){t.that.$root.showInvitation=!1}}},[o("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"90%",top:"5%",width:"94%",left:"3%","align-items":"center","justify-content":"center"}},[o("invitation",{attrs:{infoText:this.$root.infoText,extraInfo:this.$root.extraInfo,fromChat:!1,alertComponent:this.$root.alertComponent}})],1)]):t._e(),t._v(" "),o("div",{staticClass:" col-lg-10  offset-lg-2 ",staticStyle:{"z-index":"999999",background:"#F5F5FB","align-items":"center","justify-content":"center",position:"fixed",height:"100%",top:"0%"}},[o("top-bar"),t._v(" "),o("div",{staticClass:"col-12 py-0 pb-3 px-0 mt-md-5",staticStyle:{position:"absolute",background:"#F5F5FB",left:"0%",top:"0%",height:"100%","overflow-y":"hidden","overflow-x":"hidden"}},[o("router-view")],1)],1)],1),t._v(" "),this.$root.showProfileView?o("div",{staticClass:"py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"#F5F5FB"}},[o("profile-view",{attrs:{fromModal:!0}})],1):t._e(),t._v(" "),this.$root.showWalletinfo?o("div",{staticClass:"py-0 px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"},on:{click:function(i){t.that.$root.showWalletinfo=!1}}},[o("div",{staticStyle:{position:"absolute",height:"90%",top:"8%",width:"94%",left:"3%"}},["fee"==t.that.$root.infoType?[o("fee-info")]:t._e(),t._v(" "),"transaction"==t.that.$root.infoType?[o("transaction-info")]:t._e(),t._v(" "),"payout"==t.that.$root.infoType?[o("payout-info")]:t._e(),t._v(" "),"referral"==t.that.$root.infoType?[o("referral-info")]:t._e(),t._v(" "),"balance"==t.that.$root.infoType?[o("balance-info")]:t._e()],2)]):t._e(),t._v(" "),t.that.$root.showPayoutAccount?o("div",{staticClass:" px-0",staticStyle:{position:"fixed",width:"100%",height:"100%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)","overflow-y":"auto","padding-bottom":"100px !important"},on:{click:function(i){t.that.$root.showPayoutAccount=!1}}},[o("div",{staticStyle:{position:"absolute",height:"90%",top:"5%",width:"94%",left:"3%"}},[o("payout-account")],1)]):t._e()])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"text-center col-8 py-1",staticStyle:{width:"100%"}},[i("h6",[this._v("Crop Image")])])}],!1,null,"35c4a3db",null);i.default=a.exports}}]);