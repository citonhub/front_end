(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{344:function(e,t,a){var r=a(561);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(25)(r,o);r.locals&&(e.exports=r.locals)},560:function(e,t,a){"use strict";var r=a(344);a.n(r).a},561:function(e,t,a){(e.exports=a(24)(!1)).push([e.i,"\n.scroller[data-v-198de8ae]::-webkit-scrollbar {\n  width: 5px;\n}\n.scroller[data-v-198de8ae]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n",""])},667:function(e,t,a){"use strict";a.r(t);var r={data:function(){return{currentpage:1,lastpage:1,that:this,currencyData:[{name:"Nigerian Naira (NGN)",code:"NGN",symbol:"&#8358;"},{name:"Australian Dollar (AUD)",code:"AUD",symbol:"A$"},{name:"South African Rand (ZAR)",code:"ZAR",symbol:"R"},{name:"United State Dollar (USD)",code:"USD",symbol:"&#36;"},{name:"Congolese Franc (CDF)",code:"CDF",symbol:"&#8355;"},{name:"Euro (EUR)",code:"EUR",symbol:"&#128;"},{name:"British Pound Sterling (GBP)",code:"GBP",symbol:"&#163;"},{name:"Ghanainan Cedi (GHS)",code:"GHS",symbol:"&#8373;"},{name:"Gambian Dalasi (GMD)",code:"GMD",symbol:"D"},{name:"Guinean Franc (GNF)",code:"GNF",symbol:"&#8355;"},{name:"Kenya Shilling (KES)",code:"KES",symbol:"KSh"},{name:"Liberian Dollar (LRD)",code:"LRD",symbol:"&#36;"},{name:"Malawian Kwacha (MWK)",code:"MWK",symbol:"MWK"},{name:"Mozambican Metical (MZN)",code:"MZN",symbol:"MZN"},{name:"Rwandan Franc (RWF)",code:"RWF",symbol:"&#8355;"},{name:"Sierra Leonean Leone (SLL)",code:"SLL",symbol:"Le"},{name:"Sao Tome and Principe Dobra (STD)",code:"STD",symbol:"STD"},{name:"Tanzanian Shilling (TZS)",code:"TZS",symbol:"TSh"},{name:"Ugandan Shilling (UGX)",code:"UGX",symbol:"Ush"},{name:"CSA Franc BEAC (XAF)",code:"XAF",symbol:"&#8355;"},{name:"CSA Franc BCEAO (XOF)",code:"XOF",symbol:"&#8355;"},{name:"Zambian Kwacha (pre-2013) (ZMK)",code:"ZMK",symbol:"ZMK"},{name:"Zambian Kwacha (ZMW)",code:"ZMW",symbol:"ZMW"},{name:"Zimbabwean Dollar",code:"ZWD",symbol:"Z$"}],referralData:[],totalReferral:0,totalEarned:0,loading:!1,loadingUser:!1}},mounted:function(){this.fetchReferralInfo()},methods:{closeModal:function(){this.$root.showWalletinfo=!1,this.$root.infoType=!1},formatMoney:function(e){return e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},copyMessage:function(){var e,t;e="https://www.citonhub.com/link/referral/"+this.$root.username,(t=document.createElement("textarea")).value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$root.cardViewComponent.showAlert("Copied!","Copied to clipboard","success")},handleInput:function(e){var t=this;this.loadingUser=!0,axios.get("/referral-info?page="+e).then((function(e){200==e.status&&(t.referralData=e.data.referrals.data,t.currentpage=e.data.referrals.current_page,t.lastPage=e.data.referrals.last_page,t.loadingUser=!1)})).catch((function(e){t.loadingUser=!1}))},fetchReferralInfo:function(){var e=this;this.loading=!0,this.$root.getLocalStore("user_referral_info"+this.$root.username).then((function(t){if(null!=t){var a=JSON.parse(t);e.referralData=a.referrals.data,e.currentpage=a.referrals.data.current_page,e.lastpage=a.referrals.data.last_page,e.totalReferral=a.total_referrals,e.totalEarned=a.amount_earned,e.loading=!1,e.checkForReferral()}else axios.get("/referral-info").then((function(t){if(200==t.status){e.$root.LocalStore("user_referral_info"+e.$root.username,t.data);var a=t.data;e.referralData=a.referrals.data,e.currentpage=a.referrals.data.current_page,e.lastpage=a.referrals.data.last_page,e.totalReferral=a.total_referrals,e.totalEarned=a.amount_earned,e.loading=!1}})).catch((function(t){e.$root.cardViewComponent.showAlert("Oops!","Something went wrong","error"),e.loading=!1}))}))},checkForReferral:function(){var e=this;axios.get("/referral-info").then((function(t){if(200==t.status){e.$root.LocalStore("user_referral_info"+e.$root.username,t.data);var a=t.data;e.referralData=a.referrals.data,e.currentpage=a.referrals.data.current_page,e.lastpage=a.referrals.data.last_page,e.totalReferral=a.total_referrals,e.totalEarned=a.amount_earned}})).catch((function(t){e.$root.cardViewComponent.showAlert("Oops!","Something went wrong","error"),e.loading=!1}))},shareToWhatsapp:function(){this.$root.shareText="Teach, grow your community and earn on CitonHub",this.$root.shareLink="https://www.citonhub.com/link/referral/"+this.$root.username;var e="whatsapp://send?text="+this.$root.shareText+", "+this.$root.shareLink;window.open(e,"_blank")},shareToTwitter:function(){this.$root.shareText="Teach, grow your community and earn on CitonHub",this.$root.shareLink="https://www.citonhub.com/link/referral/"+this.$root.username;var e="https://twitter.com/intent/tweet?url="+this.$root.shareLink+"&text="+this.$root.shareText;window.open(e,"_blank")},imageStyle:function(e,t,a){if(null==t.background_color){var r="border-radius:50%;height:"+e+"px;width:"+e+"px;background-size:contain;border:1px solid #c5c5c5; ";return r+="channel"==a?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var o="border-radius:50%;height:"+e+"px;width:"+e+"px;background-size:contain;border:1px solid #c5c5c5; ",n=t.image_name+"."+t.image_extension;return o+="channel"==a||"bot"==a?"background-color:"+t.background_color+"; background-image:url(/imgs/space/thumbnails/"+n+");":"background-color:"+t.background_color+"; background-image:url(/imgs/profile/thumbnails/"+n+");"},currencyToCharacter:function(e){return this.currencyData.filter((function(t){return e==t.code}))[0].symbol},preventDefault:function(){}}},o=(a(560),a(4)),n=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{on:{click:function(t){return t.stopPropagation(),e.preventDefault(t)}}},[a("v-card",{staticClass:"col-lg-4 offset-lg-4   py-1 pb-2 d-flex flex-column col-md-8 offset-md-2 application application--light",attrs:{"data-app":"true"}},[a("div",{staticClass:"d-flex flex-row px-1 py-2",staticStyle:{"border-bottom":"1px solid #c5c5c5","border-radius":"0px","align-items":"center"}},[a("div",{staticStyle:{"font-family":"HeaderFont","font-size":"16px"}},[e._v("Referrals")]),e._v(" "),a("v-btn",{staticClass:"ml-auto ",staticStyle:{background:"#3C87CD"},attrs:{small:"",icon:"",color:"#ffffff"},on:{click:e.closeModal}},[a("v-icon",[e._v("mdi-close mdi-18px")])],1)],1),e._v(" "),e.loading?[a("div",{staticClass:"col-12 mt-4 text-center"},[a("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[a("div",{staticClass:"d-flex flex-row py-2 pb-1"},[a("div",{staticClass:"col-6 d-flex pb-1 flex-column",staticStyle:{"align-items":"center","justify-content":"center"}},[a("div",{staticStyle:{color:"grey","font-size":"14px","font-family":"MediumFont"}},[e._v("Your referrals")]),e._v(" "),a("div",{staticClass:"py-2",staticStyle:{"font-size":"17px","font-family":"HeaderFont"}},[e._v(e._s(e.totalReferral))])]),e._v(" "),a("div",{staticClass:"col-6 d-flex pb-1 flex-column",staticStyle:{"align-items":"center","justify-content":"center"}},[a("div",{staticStyle:{color:"grey","font-size":"14px","font-family":"MediumFont"}},[e._v("Amount earned")]),e._v(" "),a("div",{staticClass:"py-2",staticStyle:{"font-size":"17px","font-family":"HeaderFont"}},[a("span",{domProps:{innerHTML:e._s(e.currencyToCharacter(e.that.$root.selectedPaymentCard.currency))}}),e._v(e._s(e.formatMoney(e.totalEarned)))])])]),e._v(" "),a("div",{staticClass:"py-2 pt-0 d-flex flex-column"},[a("div",{staticStyle:{"font-size":"13px",color:"gray","font-family":"MediumFont"}},[e._v("Your referral link")]),e._v(" "),a("div",{staticClass:"d-flex flex-row pt-2 px-2",staticStyle:{"align-items":"center"}},[a("v-btn",{staticClass:"mr-3 ",staticStyle:{color:"white","text-transform":"capitalize","font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",color:"#3C87CD"},on:{click:function(t){return e.copyMessage()}}},[e._v("Copy")]),e._v(" "),a("v-btn",{staticClass:"mr-3 ",attrs:{icon:"","x-small":""},on:{click:e.shareToWhatsapp}},[a("v-icon",{staticStyle:{"font-size":"25px"},attrs:{color:"#4FCE5D"}},[e._v("las la-whatsapp")])],1),e._v(" "),a("v-btn",{staticClass:"mr-3 ",attrs:{icon:"","x-small":""},on:{click:e.shareToTwitter}},[a("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"25px"},attrs:{color:"#00acee"}},[e._v("las la-twitter")])],1)],1)]),e._v(" "),a("div",{staticClass:"py-2 pt-0 d-flex mt-1 flex-column"},[a("div",{staticStyle:{"font-size":"13px",color:"gray","font-family":"MediumFont"}},[e._v("Referred users")]),e._v(" "),a("div",{staticClass:"mt-1 d-flex flex-column px-2 scroller",staticStyle:{height:"250px","overflow-x":"hidden","overflow-y":"auto"}},[e.loadingUser?[a("div",{staticClass:"col-12 mt-3 text-center"},[a("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:e._l(e.referralData,(function(t,r){return a("div",{key:r,staticClass:"d-flex flex-row py-3",staticStyle:{"align-items":"center","border-bottom":"1px solid #d9d9d9"}},[a("div",{staticClass:"mr-2",style:e.imageStyle(30,[],"user")}),e._v(" "),a("div",[a("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[e._v(e._s(t.slug))])]),e._v(" "),a("div",{staticClass:"ml-auto"},[a("div",{staticStyle:{"font-size":"13px","font-family":"MediumFont",color:"grey"}},[a("span",{domProps:{innerHTML:e._s(e.currencyToCharacter(e.that.$root.selectedPaymentCard.currency))}}),e._v(e._s(e.formatMoney(t.amount_earned)))])])])}))],2),e._v(" "),a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{"total-visible":"4",length:e.lastpage,circle:"",color:"#3C87CD"},on:{input:e.handleInput},model:{value:e.currentpage,callback:function(t){e.currentpage=t},expression:"currentpage"}})],1)])]],2)],1)}),[],!1,null,"198de8ae",null);t.default=n.exports}}]);