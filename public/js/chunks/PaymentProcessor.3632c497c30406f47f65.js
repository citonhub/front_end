(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{583:function(t,e,a){window,t.exports=function(){return a={},t.m=e=[function(t,e,a){"use strict";function n(t,e){var a,n=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)),n}a.r(e),e.default={install:function(t,e){var a=e.publicKey;t.mixin({mounted:function(){var t="https://checkout.flutterwave.com/v3.js",e=document.createElement("script");e.src=t,document.querySelector('[src="'.concat(t,'"]'))||document.body.appendChild(e)},methods:{$launchFlutterwave:function(t){window.FlutterwaveCheckout(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){var n,o,r;r=a[o=e],o in(n=t)?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({public_key:a},t))}}})}}}],t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)t.d(n,o,function(t){return e[t]}.bind(null,o));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="/dist/",t(t.s=0);function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e,a}()},683:function(t,e,a){"use strict";a.r(e);var n=a(583),o=a.n(n);Vue.use(o.a,{publicKey:"FLWPUBK_TEST-88988df0b869189dd63c6cd152830ac2-X"});var r={data:function(){return{loadingBtn:!1,CurrencyOptions:[{name:"Nigerian Naira (NGN)",code:"NGN"},{name:"Canadian Dollar (CAD)",code:"CAD"},{name:"United State Dollar (USD)",code:"USD"},{name:"Congolese Franc (CDF)",code:"CDF"},{name:"Euro (EUR)",code:"EUR"},{name:"British Pound Sterling (GBP)",code:"GBP"},{name:"Ghanainan Cedi (GHS)",code:"GHS"},{name:"Gambian Dalasi (GMD)",code:"GMD"},{name:"Guinean Franc (GNF)",code:"GNF"},{name:"Kenya Shilling (KES)",code:"KES"},{name:"Liberian Dollar (LRD)",code:"LRD"},{name:"Malawian Kwacha (MWK)",code:"MWK"},{name:"Mozambican Metical (MZN)",code:"MZN"},{name:"Rwandan Franc (RWF)",code:"RWF"},{name:"Sierra Leonean Leone (SLL)",code:"SLL"},{name:"Sao Tome and Principe Dobra (STD)",code:"STD"},{name:"Tanzanian Shilling (TZS)",code:"TZS"},{name:"Ugandan Shilling (UGX)",code:"UGX"},{name:"CSA Franc BEAC (XAF)",code:"XAF"},{name:"CSA Franc BCEAO (XOF)",code:"XOF"},{name:"Zambian Kwacha (pre-2013) (ZMK)",code:"ZMK"},{name:"Zambian Kwacha (ZMW)",code:"ZMW"},{name:"Zimbabwean Dollar",code:"ZWD"}],AmountRule:[function(t){return!!t||"Oh! you missed this."},function(t){return/^[A-Za-z0-9 ]+$/.test(t)||"Cannot contain special character"},function(t){return!isNaN(parseFloat(t))&&t>=5&&t<=1e6||"Amount must be a number between 5 to 1000000"}],amount:"",currency:"NGN",interval:"monthly",supporter_name:"",support_type:"once",requiredRule:[function(t){return!!t||"Oh! you missed this."}],loadingContent:!0,spaceData:[]}},mounted:function(){var t=this;setTimeout((function(){t.fetchSpaceInfo()}),1e3)},methods:{HandleSupport:function(){this.$root.checkIfUserIsLoggedIn(),this.support_type="recurrent"},makePayment:function(){var t=this,e="",a="";this.$root.isLogged?(e=this.$root.authProfile.email,a=this.$root.authProfile.name):a=this.supporter_name;var n="";"support"==this.spaceData.payment_option&&(n="Support "+this.spaceData.name),"subscription"==this.spaceData.payment_option&&(n="Subscription fee for"+this.spaceData.name),"one_time"==this.spaceData.payment_option&&(n="Payment to join "+this.spaceData.name);var o=null;"subscription"==this.spaceData.payment_option&&(o=this.spaceData.payment_data.plan_id),"support"==this.spaceData.payment_option&&"recurrent"==this.support_type&&(o=this.spaceData.payment_data.plan_id);var r="https://www.citonhub.com/images/icons/logo_android-chrome-192x192.png";this.spaceData.image_name&&(r="http://citonhubnew.com/imgs/space/thumbnails/"+this.spaceData.image_name+"."+this.spaceData.image_extension),this.$launchFlutterwave({tx_ref:Date.now(),amount:this.amount,currency:this.currency,payment_options:"card,mobilemoney,ussd",payment_plan:o,customer:{email:e,name:a},callback:function(e){"successful"==e.status?(t.loadingBtn=!0,axios.post("/save-transaction",{data:e,type:t.spaceData.payment_option,card_no:t.spaceData.payment_data.card_no,narration:n,paymentplan:o,destination_currency:t.currency,origin_currency:t.spaceData.payment_data.currency}).then((function(e){200!=e.status?console.log(e.status):t.$root.chatComponent.openChat(t.$route.params.spaceId,!0)})).catch((function(t){console.log(t)}))):t.$root.chatComponent.showAlert("Oops!","Unable to process your payment, please try again","error")},customizations:{title:this.spaceData.name,description:n,logo:r}})},fetchSpaceInfo:function(){var t=this;this.loadingContent=!0,axios.get("/fetch-space-info-"+this.$route.params.spaceId).then((function(e){if(200==e.status){if(t.spaceData=e.data.space,"Channel"!=t.spaceData.type&&"Team"!=t.spaceData.type&&"SubSpace"!=t.spaceData.type)return void t.$root.chatComponent.openChat(t.$route.params.spaceId,!0);if(t.spaceData.is_member){if(!t.$root.showProcessorFromChat)return void t.$root.chatComponent.openChat(t.$route.params.spaceId,!0)}else if("support"==t.spaceData.payment_option&&t.$root.isLogged&&!t.$root.fromSupportDirectlink)return void t.$root.chatComponent.openChat(t.$route.params.spaceId,!1);"subscription"==t.spaceData.payment_option&&(t.currency=t.spaceData.payment_data.currency,t.interval=t.spaceData.payment_data.interval,t.amount=t.spaceData.payment_data.amount,t.supporter_name="supporter"),"one_time"==t.spaceData.payment_option&&(t.currency=t.spaceData.payment_data.currency,t.amount=t.spaceData.payment_data.amount,t.supporter_name="supporter"),t.$root.isLogged&&(t.supporter_name=t.$root.authProfile.name),t.loadingContent=!1}})).catch((function(e){t.$root.chatComponent.showAlert("Oops!","Something went wrong, please try again","error"),t.loadingContent=!1}))},imageStyleSpace:function(t,e,a){if(null==e.background_color){var n="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";return n+="channel"==a?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;",r=e.image_name+"."+e.image_extension;return o+="channel"==a||"bot"==a?"background-color:"+e.background_color+"; background-image:url(/imgs/space/"+r+");":"background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+r+");"}}},i=a(4),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6 col-md-6 d-flex flex-column px-md-2 px-1"},[t.loadingContent?[a("div",{staticClass:"text-center mt-5"},[a("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"28"}})],1)]:[a("div",{staticClass:"text-center mb-2 mt-md-4 mt-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[a("div",{style:t.imageStyleSpace(140,t.spaceData,"channel")})]),t._v(" "),a("div",{staticClass:"py-2 mt-1"},[a("h6",[t._v(t._s(t.spaceData.name))]),t._v(" "),t.spaceData.description?[a("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"},domProps:{innerHTML:t._s(t.spaceData.description)}})]:t._e()],2),t._v(" "),a("div",{staticClass:"py-2 "},["support"==t.spaceData.payment_option?[a("h6",{staticStyle:{"font-siz":"14px"}},[t._v("Support Us")])]:t._e(),t._v(" "),"subscription"==t.spaceData.payment_option?[a("h6",{staticStyle:{"font-siz":"14px"}},[t._v("Subscribe and Join Us")])]:t._e(),t._v(" "),"one_time"==t.spaceData.payment_option?[a("h6",{staticStyle:{"font-siz":"14px"}},[t._v("Join Us")])]:t._e()],2),t._v(" "),"support"==t.spaceData.payment_option?[a("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Your name")]),t._v(" "),a("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"name",dense:"",rules:t.requiredRule,type:"tel",outlined:"",color:"#3C87CD"},model:{value:t.supporter_name,callback:function(e){t.supporter_name=e},expression:"supporter_name"}})]:t._e(),t._v(" "),a("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Amount")]),t._v(" "),a("div",{staticClass:"d-flex flex-row"},["support"==t.spaceData.payment_option?[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currency,expression:"currency"}],staticClass:"browser-default custom-select mb-4",staticStyle:{"font-size":"13px !important","font-family":"BodyFont",background:"transparent",width:"25%",height:"40px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currency=e.target.multiple?a:a[0]}}},t._l(t.CurrencyOptions,(function(e,n){return a("option",{key:n,domProps:{value:e.code}},[t._v(t._s(e.code))])})),0)]:[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currency,expression:"currency"}],staticClass:"browser-default custom-select mb-4",staticStyle:{"font-size":"13px !important","font-family":"BodyFont",background:"transparent",width:"25%",height:"40px"},attrs:{disabled:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currency=e.target.multiple?a:a[0]}}},t._l(t.CurrencyOptions,(function(e,n){return a("option",{key:n,domProps:{value:e.code}},[t._v(t._s(e.code))])})),0)],t._v(" "),a("v-text-field",{staticStyle:{"font-size":"13px",width:"75%"},attrs:{placeholder:"amount",dense:"",readonly:"support"!=t.spaceData.payment_option,rules:t.AmountRule,type:"tel",outlined:"",color:"#3C87CD"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],2),t._v(" "),"subscription"==t.spaceData.payment_option?[a("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Interval")]),t._v(" "),a("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"gray"}},[t._v(t._s(t.interval))])]:t._e(),t._v(" "),"support"==t.spaceData.payment_option?[a("div",{staticClass:"py-2",staticStyle:{"font-size":"13px",color:"grey","font-family":"MediumFont"}},[t._v("Select support type;")]),t._v(" "),a("div",{staticClass:" d-flex flex-row flex-wrap "},[a("div",{staticClass:"  col-6  px-1 my-0 py-2 "},[a("v-card",{staticClass:"px-1 py-1 ",style:"height:100px; border:1px solid #c5c5c5; border-radius:7px;",attrs:{color:"once"==t.support_type?"#F3F8FC":""},on:{click:function(e){t.support_type="once"}}},[a("div",{staticClass:"d-flex",staticStyle:{height:"100%","align-items":"center","justify-content":"center",width:"100%"}},[a("div",{staticClass:"text-center"},[a("img",{attrs:{src:"/imgs/support.png",height:"40"}}),t._v(" "),a("div",[a("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("One-time")])])])])])],1),t._v(" "),a("div",{staticClass:"  col-6  px-1 my-0 py-2 "},[a("v-card",{staticClass:"px-1 py-1 appBox",style:"height:100px; border:1px solid #c5c5c5; border-radius:7px;",attrs:{color:"recurrent"==t.support_type?"#F3F8FC":""},on:{click:function(e){return t.HandleSupport("recurrent")}}},[a("div",{staticClass:"d-flex",staticStyle:{height:"100%","align-items":"center","justify-content":"center",width:"100%"}},[a("div",{staticClass:"text-center"},[a("img",{attrs:{src:"/imgs/subscribe.png",height:"40"}}),t._v(" "),a("div",[a("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Monthly")])])])])])],1)])]:t._e(),t._v(" "),a("div",{staticClass:"col-12 text-center py-2 mt-3"},[a("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"none","font-family":"MediumFont","font-size":"11px"},attrs:{loading:t.loadingBtn,disabled:""==t.amount||""==t.supporter_name,small:"",color:"#3C87CD"},on:{click:t.makePayment}},["support"==t.spaceData.payment_option?[a("span",[t._v("Support")])]:t._e(),t._v(" "),"subscription"==t.spaceData.payment_option?[a("span",[t._v("Subscribe")])]:t._e(),t._v(" "),"one_time"==t.spaceData.payment_option?[a("span",[t._v("Join")])]:t._e()],2)],1)]],2)}),[],!1,null,"72357d54",null);e.default=c.exports}}]);