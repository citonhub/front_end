(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{696:function(t,e,n){"use strict";n.r(e);var a={data:function(){return{that:this,IntervalOptions:["weekly","monthly","quarterly","yearly"],CurrencyOptions:[{name:"Nigerian Naira (NGN)",code:"NGN"},{name:"Australian Dollar (AUD)",code:"AUD"},{name:"United State Dollar (USD)",code:"USD"},{name:"Euro (EUR)",code:"EUR"},{name:"British Pound Sterling (GBP)",code:"GBP"},{name:"Ghanainan Cedi (GHS)",code:"GHS"},{name:"Kenya Shilling (KES)",code:"KES"},{name:"South African Rand (ZAR)",code:"ZAR"},{name:"Rwandan Franc (RWF)",code:"RWF"},{name:"Sierra Leonean Leone (SLL)",code:"SLL"},{name:"Tanzanian Shilling (TZS)",code:"TZS"},{name:"Ugandan Shilling (UGX)",code:"UGX"},{name:"CSA Franc BEAC (XAF)",code:"XAF"},{name:"CSA Franc BCEAO (XOF)",code:"XOF"},{name:"Zambian Kwacha (ZMW)",code:"ZMW"}],card_name:"",requiredRule:[function(t){return!!t||"Oh! you missed this."}],AmountRule:[function(t){return!!t||"Oh! you missed this."},function(t){return/^[A-Za-z0-9 ]+$/.test(t)||"Cannot contain special character"},function(t){return!isNaN(parseFloat(t))&&t>=5&&t<=1e6||"Amount must be a number between 5 to 1000000"}],amount:"",currency:"NGN",interval:"monthly",name:""}},mounted:function(){this.card_name=this.$root.baseChannelName},methods:{preventDefault:function(){},saveDataToRoot:function(){this.$root.payment_name=this.name,this.$root.payment_card_name=this.card_name,this.$root.payment_amount=this.amount,this.$root.payment_interval=this.interval,this.$root.payment_currency=this.currency,this.$root.showPaymentOptionBoard=!1}}},o=n(4),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(e){return e.stopPropagation(),t.preventDefault(e)}}},[n("v-card",{staticClass:"col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light",staticStyle:{"align-items":"center","justify-content":"center"},attrs:{"data-app":"true"}},[n("v-btn",{staticClass:"d-inline-block  ",staticStyle:{position:"absolute",background:"#3C87CD",top:"2%",right:"2%","z-index":"990679797879"},attrs:{small:"",icon:"",color:"#ffffff"},on:{click:function(e){t.that.$root.showPaymentOptionBoard=!1}}},[n("v-icon",[t._v("mdi-close mdi-18px")])],1),t._v(" "),n("div",{staticClass:" text-left"},[n("div",{},["support"==t.that.$root.payment_option?[n("h5",[t._v("Support")]),t._v(" "),n("v-alert",{staticStyle:{background:"#3C87CD"},attrs:{dense:"",type:"info"}},[n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" Your audience or members can donate any amount of money to support you or for the progress of the community. ")])])]:t._e(),t._v(" "),"subscription"==t.that.$root.payment_option?[n("h5",[t._v("Subscription")]),t._v(" "),n("v-alert",{staticStyle:{background:"#3C87CD"},attrs:{dense:"",type:"info"}},[n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("For subscription, recurrent payments are made by your members or audience.")])])]:t._e(),t._v(" "),"one_time"==t.that.$root.payment_option?[n("h5",[t._v("One-time fee")]),t._v(" "),n("v-alert",{staticStyle:{background:"#3C87CD"},attrs:{dense:"",type:"info"}},[n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("  This is perfect for activites that require one time payment and gaining lifetime access. An example could be when you are organize a bootcamp for a fee. Members pay once and have access forever. ")])])]:t._e()],2),t._v(" "),n("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Select currency")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currency,expression:"currency"}],staticClass:"browser-default custom-select mb-4",staticStyle:{"font-size":"13px !important","font-family":"BodyFont",background:"transparent"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currency=e.target.multiple?n:n[0]}}},t._l(t.CurrencyOptions,(function(e,a){return n("option",{key:a,domProps:{value:e.code}},[t._v(t._s(e.name))])})),0),t._v(" "),"subscription"==t.that.$root.payment_option||"one_time"==t.that.$root.payment_option?[n("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Set amount")]),t._v(" "),n("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"amount",dense:"",rules:t.AmountRule,type:"tel",outlined:"",color:"#3C87CD"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})]:t._e(),t._v(" "),"subscription"==t.that.$root.payment_option?[n("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Set interval")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],staticClass:"browser-default custom-select mb-4",staticStyle:{"font-size":"13px !important","font-family":"BodyFont",background:"transparent"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.interval=e.target.multiple?n:n[0]}}},t._l(t.IntervalOptions,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])})),0)]:t._e(),t._v(" "),n("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("All payments to your channel would be managed in this payment card.")]),t._v(" "),n("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"Payment card name",dense:"",rules:t.requiredRule,outlined:"",color:"#3C87CD"},model:{value:t.card_name,callback:function(e){t.card_name=e},expression:"card_name"}})],2),t._v(" "),n("div",{staticClass:"col-12 text-center pt-0"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD"},on:{click:function(e){return e.stopPropagation(),t.saveDataToRoot(e)}}},[t._v("Done")])],1)],1)],1)}),[],!1,null,"96a05c02",null);e.default=i.exports}}]);