(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{709:function(t,n,e){"use strict";e.r(n);var i={props:["alertComponent"],data:function(){return{that:this,nextLevel:"",presentLevel:"",remainingPoints:0,loadingmakeMentor:!1,languages:[]}},mounted:function(){this.calculateLevel(this.$root.authProfile.points)},methods:{shareProject:function(){this.$root.showMentorInfo=!1,this.$root.componentIsLoading=!0,this.$root.autoOpenAddPost=!0,this.$router.push({path:"/hub"})},BecomeMentor:function(){this.$root.showMentorInfo=!1,this.$root.showPointDetailsInfo=!0},viewDiary:function(){this.$root.showMentorInfo=!1,this.$router.push({path:"/board/diary/list"})},findMentor:function(){},calculateLevel:function(t){return this.nextLevel="",this.remainingPoints=0,t>=50&&t<=99?(this.nextLevel="a Bronze citon",this.remainingPoints=100-t,this.presentLevel="a Steel citon",this.newLevelImage="/imgs/steel.svg"):t>=100&&t<=299?(this.nextLevel="a Silver citon",this.remainingPoints=300-t,this.presentLevel="a Bronze citon",this.newLevelImage="/imgs/bronze.svg"):t>=300&&t<=599?(this.nextLevel="a Gold citon",this.remainingPoints=600-t,this.presentLevel="a Silver citon",this.newLevelImage="/imgs/silver.svg"):t>=600&&t<=999?(this.nextLevel="a Platinum citon",this.remainingPoints=1e3-t,this.presentLevel="a Gold citon",this.newLevelImage="/imgs/gold.svg"):t>=1e3&&t<=1499?(this.nextLevel="a Diamond citon",this.remainingPoints=1500-t,this.presentLevel="a Platinum citon",this.newLevelImage="/imgs/platinum.svg"):t>=1500&&t<=9999&&(this.nextLevel="a Diamond citon",this.remainingPoints=1e4-t,this.presentLevel="a Diamond citon",this.newLevelImage="/imgs/diamond.svg"),[this.nextLevel,this.remainingPoints]}}},o=e(4),a=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"col-lg-4  py-3 d-flex flex-column col-md-8 px-1 application application--light",staticStyle:{"align-items":"center","justify-content":"center"},attrs:{"data-app":"true"}},[e("div",{staticClass:"d-flex flex-row py-0 col-12 "},[e("div",{staticClass:"col-8 py-1 text-left px-1"}),t._v(" "),e("div",{staticClass:"col-4 py-1 text-right px-0"},[e("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",text:""},on:{click:function(n){t.that.$root.showMentorInfo=!1}}},[t._v("Close")])],1)]),t._v(" "),e("img",{attrs:{src:"/imgs/teach_dev_new.svg",height:"160"}}),t._v(" "),t.that.$root.fromCreateAChannel?[e("div",{staticClass:"mb-3 px-md-3 px-2 ",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("\n                  \n                  \n                 Hey "),e("span",{staticStyle:{"font-family":"MediumFont","text-transform":"capitalize"}},[t._v(t._s(t.that.$root.authProfile.name))]),t._v(", "),e("br"),t._v(" "),e("br"),t._v("\n                 \n                 To create a channel, you have to be at least a "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("Bronze citon ")]),t._v(". You are "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v(t._s(t.presentLevel))]),t._v(" and\n                  have "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" ")]),t._v("experience points remaining to become "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("Bronze citon ")]),t._v(". Get more experience points by \n                  "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("sharing your works")]),t._v(" with the community or \n                 by sharing what you know in  "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("your diaries")]),t._v(".\n\n\n\n\n\n                  "),e("div",{staticClass:"col-12 py-1 px-2 mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 py-1 px-1 "},[e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD",rounded:""},on:{click:t.shareProject}},[t._v("Share your work")])],1),t._v(" "),e("div",{staticClass:"col-6 py-1 px-1 "},[e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD",outlined:"",rounded:""},on:{click:t.viewDiary}},[t._v("Start a diary")])],1)])])])]:[e("div",{staticClass:"mb-3 px-md-3 px-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("\n                  \n                  \n                 Hey "),e("span",{staticStyle:{"font-family":"MediumFont","text-transform":"capitalize"}},[t._v(t._s(t.that.$root.authProfile.name))]),t._v(", welcome to CitonHub! "),e("br"),t._v(" "),e("br"),t._v("\n                 \n                 Channel is where you mentor, engage your community, and earn from "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("donations, subscriptions or paid sessions")]),t._v(". "),e("br"),e("br"),t._v("\n\n                \n                  To create a channel, you have to be at least a "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("Bronze citon ")]),t._v(" on CitonHub. You are "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v(t._s(t.presentLevel))]),t._v(" and\n                  have "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" ")]),t._v("experience points remaining to become a "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("Bronze citon")]),t._v("."),e("br"),e("br"),t._v(" \n                  \n                  Get more experience points by \n                  "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("sharing your works")]),t._v(" with the community or \n                 by sharing what you know in  "),e("span",{staticStyle:{"font-family":"MediumFont"}},[t._v("your diaries")]),t._v(".\n\n\n\n                  "),e("div",{staticClass:"col-12 py-1 px-1 mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 py-1 px-1 "},[e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD",rounded:""},on:{click:t.shareProject}},[t._v("Share your works")])],1),t._v(" "),e("div",{staticClass:"col-6 py-1 px-1 "},[e("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD",outlined:"",rounded:""},on:{click:t.viewDiary}},[t._v("Start a diary")])],1)])])])]],2)}),[],!1,null,"34606730",null);n.default=a.exports}}]);