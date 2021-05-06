(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{262:function(t,e,n){"use strict";var o=n(5),i=n.n(o).a.extend({name:"VueHorizontal",data:function(){return{left:0,width:0,scrollWidth:0,hasPrev:!1,hasNext:!1,debounceId:void 0}},props:{button:{type:Boolean,default:function(){return!0}},buttonBetween:{type:Boolean,default:function(){return!0}},scroll:{type:Boolean,default:function(){return!1}},responsive:{type:Boolean,default:function(){return!1}},displacement:{type:Number,default:function(){return 1}},snap:{type:String,default:function(){return"start"}}},mounted:function(){this.onScrollDebounce()},methods:{children:function(){return this.$refs.container.children},findPrevSlot:function(t){for(var e=this.children(),n=0;n<e.length;n++){var o=e[n].getBoundingClientRect();if(o.left<=t&&t<=o.right)return e[n];if(t<=o.left)return e[n]}},findNextSlot:function(t){for(var e=this.children(),n=0;n<e.length;n++){var o=e[n].getBoundingClientRect();if(!(o.right<=t)){if(o.left<=t)return e[n];if(t<=o.left)return e[n]}}},prev:function(){this.$emit("prev");var t=this.$refs.container,e=t.getBoundingClientRect().left,n=e+t.clientWidth*-this.displacement-2.5,o=this.findPrevSlot(n);if(o){var i=o.getBoundingClientRect().left-e;this.scrollToLeft(t.scrollLeft+i)}else{var a=t.clientWidth*this.displacement;this.scrollToLeft(t.scrollLeft-a)}},next:function(){this.$emit("next");var t=this.$refs.container,e=t.getBoundingClientRect().left,n=e+t.clientWidth*this.displacement+2.5,o=this.findNextSlot(n);if(o){var i=o.getBoundingClientRect().left-e;if(i>2.5)return void this.scrollToLeft(t.scrollLeft+i)}var a=t.clientWidth*this.displacement;this.scrollToLeft(t.scrollLeft+a)},scrollToIndex:function(t){var e=this.children();if(e[t]){var n=this.$refs.container,o=e[t].getBoundingClientRect().left-n.getBoundingClientRect().left;this.scrollToLeft(n.scrollLeft+o)}},scrollToLeft:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth",n=this.$refs.container;n.scrollTo({left:t,behavior:e})},onScroll:function(){var t=this.$refs.container;this.$emit("scroll",{left:t.scrollLeft}),clearTimeout(this.debounceId),this.debounceId=setTimeout(this.onScrollDebounce,100)},onScrollDebounce:function(){var t=this;this.refresh((function(e){t.$emit("scroll-debounce",e)}))},refresh:function(t){var e=this;this.$nextTick((function(){var n=e.calculate();e.left=n.left,e.width=n.width,e.scrollWidth=n.scrollWidth,e.hasNext=n.hasNext,e.hasPrev=n.hasPrev,t(n)}))},calculate:function(){var t=this.$refs.container,e=this.children()[0];return{left:t.scrollLeft,width:t.clientWidth,scrollWidth:t.scrollWidth,hasNext:t.scrollWidth>t.scrollLeft+t.clientWidth+2.5,hasPrev:function(){var n,o;if(0===t.scrollLeft)return!1;var i=t.getBoundingClientRect().left,a=null!==(n=null==e||null===(o=e.getBoundingClientRect())||void 0===o?void 0:o.left)&&void 0!==n?n:0;return Math.abs(i-a)>=2.5}()}}}});function a(t,e,n,o,i,a,s,l,r,c){"boolean"!=typeof s&&(r=l,l=s,s=!1);const d="function"==typeof n?n.options:n;let u;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),o&&(d._scopeId=o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,r(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=u):e&&(u=s?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,l(t))}),u)if(d.functional){const t=d.render;d.render=function(e,n){return u.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,u):[u]}return n}const s="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function l(t){return(t,e)=>function(t,e){const n=s?e.media||"default":t,o=c[n]||(c[n]={ids:new Set,styles:[]});if(!o.ids.has(t)){o.ids.add(t);let n=e.source;if(e.map&&(n+="\n/*# sourceURL="+e.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(n),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{const t=o.ids.size-1,e=document.createTextNode(n),i=o.element.childNodes;i[t]&&o.element.removeChild(i[t]),i.length?o.element.insertBefore(e,i[t]):o.element.appendChild(e)}}}(t,e)}let r;const c={};var d=a({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-horizontal",staticStyle:{position:"relative",display:"flex"}},[t.button&&t.hasPrev?n("div",{staticClass:"v-hl-btn v-hl-btn-prev",class:{"v-hl-btn-between":t.buttonBetween},attrs:{role:"button"},on:{click:function(e){return e.stopPropagation(),t.prev(e)}}},[t._t("btn-prev",[n("svg",{staticClass:"v-hl-svg",attrs:{viewBox:"0 0 24 24","aria-label":"horizontal scroll area navigate to previous button"}},[n("path",{attrs:{d:"m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"}})])])],2):t._e(),t._v(" "),t.button&&t.hasNext?n("div",{staticClass:"v-hl-btn v-hl-btn-next",class:{"v-hl-btn-between":t.buttonBetween},attrs:{role:"button"},on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[t._t("btn-next",[n("svg",{staticClass:"v-hl-svg",attrs:{viewBox:"0 0 24 24","aria-label":"horizontal scroll area navigate to next button"}},[n("path",{attrs:{d:"m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"}})])])],2):t._e(),t._v(" "),n("div",{ref:"container",staticClass:"v-hl-container",class:{"v-hl-responsive":t.responsive,"v-hl-scroll":t.scroll,"v-hl-snap-start":"start"===t.snap,"v-hl-snap-center":"center"===t.snap,"v-hl-snap-end":"end"===t.snap},on:{"&scroll":function(e){return t.onScroll(e)}}},[t._t("default")],2)])},staticRenderFns:[]},(function(t){t&&t("data-v-366911e8_0",{source:".v-hl-btn[data-v-366911e8]{position:absolute;align-self:center;z-index:1;top:0;bottom:0;display:flex;align-items:center;cursor:pointer}.v-hl-btn-prev[data-v-366911e8]{left:0}.v-hl-btn-prev.v-hl-btn-between[data-v-366911e8]{transform:translateX(-50%)}.v-hl-btn-next[data-v-366911e8]{right:0}.v-hl-btn-next.v-hl-btn-between[data-v-366911e8]{transform:translateX(50%)}.v-hl-svg[data-v-366911e8]{width:40px;height:40px;margin:6px;padding:6px;border-radius:20px;box-sizing:border-box;background:#fff;color:#000;fill:currentColor;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.v-hl-container[data-v-366911e8]{display:flex;width:100%;margin:0;padding:0;border:none;box-sizing:content-box;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}.v-hl-container>*[data-v-366911e8]{flex-shrink:0;box-sizing:border-box;min-height:1px}.v-hl-snap-start>*[data-v-366911e8]{scroll-snap-align:start}.v-hl-snap-center>*[data-v-366911e8]{scroll-snap-align:center}.v-hl-snap-end>*[data-v-366911e8]{scroll-snap-align:end}.v-hl-container[data-v-366911e8]:not(.v-hl-scroll){scrollbar-width:none;-ms-overflow-style:none;padding-bottom:30px;margin-bottom:-30px;clip-path:inset(0 0 30px 0)}.v-hl-container[data-v-366911e8]:not(.v-hl-scroll)::-webkit-scrollbar{width:0!important;height:0!important}.v-hl-responsive>*[data-v-366911e8]{width:100%;margin-right:24px}.v-hl-responsive[data-v-366911e8]>:last-child{margin-right:0}@media (min-width:640px){.v-hl-responsive>*[data-v-366911e8]{width:calc((100% - 24px)/ 2)}}@media (min-width:768px){.v-hl-responsive>*[data-v-366911e8]{width:calc((100% - 48px)/ 3)}}@media (min-width:1024px){.v-hl-responsive>*[data-v-366911e8]{width:calc((100% - 72px)/ 4)}}@media (min-width:1280px){.v-hl-responsive>*[data-v-366911e8]{width:calc((100% - 96px)/ 5)}}",map:void 0,media:void 0})}),i,"data-v-366911e8",!1,void 0,!1,l,void 0,void 0),u=function(t){u.installed||(u.installed=!0,t.component("VueHorizontal",d))};d.install=u,e.a=d},310:function(t,e,n){var o=n(438);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(25)(o,i);o.locals&&(t.exports=o.locals)},437:function(t,e,n){"use strict";var o=n(310);n.n(o).a},438:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,"\n.circle-1{\n    position:absolute;\n    left:35%;\n    top:21px;\n    background: #3C87CD;\n}\n.circle-2{\n    position:absolute;\n    left:61%;\n    top:21px;\n      background: #3C87CD;\n}\n.circle-3{\n    position:absolute;\n    left:88%;\n    top:21px;\n      background: #3C87CD;\n}\n.steps > *{\n    background: white;\n}\n",""])},629:function(t,e,n){"use strict";n.r(e);n(262);var o=n(243),i=n.n(o),a=(n(242),{data:function(){return{CurrencyOptions:[{name:"Nigerian Naira (NGN)",code:"NGN",symbol:"&#8358;",iso:"NG"},{name:"Australian Dollar (AUD)",code:"AUD",symbol:"A$"},{name:"United State Dollar (USD)",code:"USD",symbol:"&#36;"},{name:"Congolese Franc (CDF)",code:"CDF",symbol:"&#8355;"},{name:"Euro (EUR)",code:"EUR",symbol:"&#128;"},{name:"South African Rand (ZAR)",code:"ZAR",symbol:"R",iso:"ZA"},{name:"British Pound Sterling (GBP)",code:"GBP",symbol:"&#163;"},{name:"Ghanainan Cedi (GHS)",code:"GHS",symbol:"&#8373;",iso:"GH"},{name:"Gambian Dalasi (GMD)",code:"GMD",symbol:"D"},{name:"Guinean Franc (GNF)",code:"GNF",symbol:"&#8355;"},{name:"Kenya Shilling (KES)",code:"KES",symbol:"KSh",iso:"KE"},{name:"Liberian Dollar (LRD)",code:"LRD",symbol:"&#36;"},{name:"Malawian Kwacha (MWK)",code:"MWK",symbol:"MWK"},{name:"Mozambican Metical (MZN)",code:"MZN",symbol:"MZN"},{name:"Rwandan Franc (RWF)",code:"RWF",symbol:"&#8355;",iso:"RW"},{name:"Sierra Leonean Leone (SLL)",code:"SLL",symbol:"Le",iso:"SL"},{name:"Sao Tome and Principe Dobra (STD)",code:"STD",symbol:"STD"},{name:"Tanzanian Shilling (TZS)",code:"TZS",symbol:"TSh",iso:"TZ"},{name:"Ugandan Shilling (UGX)",code:"UGX",symbol:"Ush",iso:"UG"},{name:"CSA Franc BEAC (XAF)",code:"XAF",symbol:"&#8355;",iso:"multiple"},{name:"CSA Franc BCEAO (XOF)",code:"XOF",symbol:"&#8355;",iso:"multiple"},{name:"Zambian Kwacha (pre-2013) (ZMK)",code:"ZMK",symbol:"ZMK"},{name:"Zambian Kwacha (ZMW)",code:"ZMW",symbol:"ZMW"},{name:"Zimbabwean Dollar",code:"ZWD",symbol:"Z$"}],currency:"",that:this,loadingCurrency:!1}},mounted:function(){this.currency=this.$root.selectedPaymentCard.currency,this.$root.showTopBar=!1,this.checkForPaymentCard(),this.$root.manageWalletComponent=this},methods:{formatMoney:function(t){return t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},currencyToCharacter:function(t){if(null==t)return"&#8358;";var e=this.currencyData.filter((function(e){return t==e.code}));return e[0]?e[0].symbol:void 0},changeCardCurrency:function(){var t=this;this.loadingCurrency=!0,axios.post("/update-card-currency",{card_no:this.$root.selectedPaymentCard.card_no,destination_currency:this.$root.selectedPaymentCard.currency,origin_currency:this.currency}).then((function(e){200==e.status&&(t.$root.selectedPaymentCard.currency=t.currency,t.loadingCurrency=!1,t.showAlert("Saved!","Your changes has been saved","success"))})).catch((function(e){t.loadingCurrency=!1,t.showAlert("Oops!","Something went wrong,please try again","error")}))},addPayoutAccount:function(){this.$root.showPayoutAccount=!0},checkForPaymentCard:function(){var t=this;0==this.$root.selectedPaymentCard.length&&axios.get("/payment-cards/"+this.$route.params.card_no).then((function(e){200==e.status&&(t.$root.LocalStore("user_payment_card_"+t.$route.params.card_no+t.$root.username,e.data),t.$root.selectedPaymentCard=e.data.payment_card,t.$root.payoutAccounts=e.data.payout_account,t.$root.planSubscriptions=e.data.subscriptions,t.currency=t.$root.selectedPaymentCard.currency)})).catch((function(t){}))},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;"info"==n&&i.a.info({title:t,message:e,zindex:"9999999999",position:"bottomRight",timeout:2e3,transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==n&&i.a.success({title:t,message:e,zindex:"9999999999",timeout:2e3,position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==n&&i.a.warning({title:t,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==n&&i.a.error({title:t,message:e,zindex:"9999999999",position:"bottomRight",timeout:2e3,transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})}}}),s=(n(437),n(4)),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"overflow-x":"hidden"}},[n("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","z-index":"999999999999","border-bottom":"1px solid #c5c5c5"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 py-0 my-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[n("v-btn",{staticClass:"mr-1",attrs:{icon:""},on:{click:function(e){return t.goBack()}}},[n("v-icon",[t._v("las la-arrow-left")])],1),t._v(" "),n("h5",[t._v("DSC Landmark")])],1),t._v(" "),n("div",{staticClass:"col-6  py-0 my-0 text-right"})])]),t._v(" "),n("div",{staticClass:" px-1 col-12 pb-0 d-md-none d-block fixed-top",staticStyle:{position:"sticky",background:"#F5F5FB","border-bottom":"1px solid #c5c5c5"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-11 py-0 my-0",staticStyle:{"align-items":"center","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.goBack()}}},[n("v-icon",[t._v("las la-arrow-left")])],1),t._v(" "),t._m(0)],1)])]),t._v(" "),n("div",{staticClass:"col-lg-10 offset-lg-1 py-0 application application--light px-0",attrs:{"data-app":"true"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 d-flex flex-row ",staticStyle:{"border-bottom":"1px solid #c5c5c5"}},[n("div",{staticClass:"col-2 col-lg-1 col-md-2 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[n("v-icon",{staticStyle:{"font-size":"20px",color:"#263238"}},[t._v("las la-money-check")])],1),t._v(" "),n("div",{staticClass:"d-flex flex-column col-10 col-lg-11 "},[n("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("\n                    Payout Accounts\n               ")]),t._v(" "),n("div",{staticClass:"mt-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._l(this.$root.payoutAccounts,(function(e,o){return n("v-alert",{key:o,staticClass:"mb-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"},attrs:{border:"left",color:"#3C87CD",dark:"",dense:""}},[n("b",{staticStyle:{"font-family":"MediumFont"}},[t._v(" Bank:")]),t._v(" "+t._s(e.bank_name)+", "),n("b",{staticStyle:{"font-family":"MediumFont"}},[t._v(" Account Number:")]),t._v(" "+t._s(e.account_number)+"\n    ")])})),t._v(" "),n("v-btn",{staticClass:"mt-2",staticStyle:{"font-size":"11px","font-family":"MediumFont",color:"white","text-transform":"none"},attrs:{loading:0==t.that.$root.selectedPaymentCard.length,"x-small":"",color:"#3C87CD"},on:{click:t.addPayoutAccount}},[t._v("Add "),n("v-icon",{staticStyle:{"font-size":"16px"}},[t._v("las la-plus")])],1)],2)])]),t._v(" "),n("div",{staticClass:"col-12 d-flex flex-row ",staticStyle:{"border-bottom":"1px solid #c5c5c5"}},[n("div",{staticClass:"col-2 col-lg-1 col-md-2 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[n("v-icon",{staticStyle:{"font-size":"20px",color:"#263238"}},[t._v("las la-sync")])],1),t._v(" "),n("div",{staticClass:"d-flex flex-column col-10 col-lg-11 "},[n("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("\n                   Recurring bills\n               ")]),t._v(" "),n("div",{staticClass:"mt-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},t._l(this.$root.planSubscriptions,(function(e,o){return n("v-alert",{key:o,staticClass:"mb-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"},attrs:{border:"left",color:"success",dark:"",dismissible:"",dense:""}},[n("b",{staticStyle:{"font-family":"MediumFont"}},[n("span",{domProps:{innerHTML:t._s(t.currencyToCharacter(e.currency))}}),t._v(" "+t._s(t.formatMoney(e.amount)))]),t._v(" "),n("span",{staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(e.type))]),t._v(" for "+t._s(e.name)+"\n    ")])})),1)])]),t._v(" "),n("div",{staticClass:"col-12 d-flex flex-row ",staticStyle:{"border-bottom":"1px solid #c5c5c5"}},[n("div",{staticClass:"col-2 col-lg-1 col-md-2 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[n("v-icon",{staticStyle:{"font-size":"20px",color:"#263238"}},[t._v("las la-cog")])],1),t._v(" "),n("div",{staticClass:"d-flex flex-column col-10 col-lg-11 "},[n("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("\n                  Others\n               ")]),t._v(" "),n("div",{staticClass:"mt-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[n("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Default Currency")]),t._v(" "),n("div",{staticClass:"col-lg-5 col-md-6  px-0 py-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.currency,expression:"currency"}],staticClass:"browser-default custom-select",staticStyle:{"font-size":"13px !important","font-family":"BodyFont",background:"transparent"},attrs:{disabled:"disabled"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currency=e.target.multiple?n:n[0]}}},t._l(t.CurrencyOptions,(function(e,o){return n("option",{key:o,domProps:{value:e.code}},[t._v(t._s(e.name))])})),0),t._v(" "),t._e()],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"d-inline-block"},[e("h6",[this._v("DSC Landmark")])])}],!1,null,null,null);e.default=l.exports}}]);