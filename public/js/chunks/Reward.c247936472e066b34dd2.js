(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{673:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{that:this,nextLevel:"",remainingPoints:0}},mounted:function(){this.calculateLevel(this.$root.authProfile.points)},methods:{calculateLevel:function(t){return this.nextLevel="",this.remainingPoints=0,t>=50&&t<=99?(this.nextLevel="Junior",this.remainingPoints=100-t):t>=100&&t<=999?(this.nextLevel="Intermediate",this.remainingPoints=1e3-t):t>=1e3&&t<=4999?(this.nextLevel="Senior",this.remainingPoints=5e3-t):t>=5e3&&t<=9999?(this.nextLevel="Expert",this.remainingPoints=1e4-t):t>=1e4&&t<=14999?(this.nextLevel="Super ",this.remainingPoints=15e3-t):t>=15e3&&t<=1e5&&(this.nextLevel="Super",this.remainingPoints=1e5-t),[this.nextLevel,this.remainingPoints]}}},s=n(4),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"col-lg-4  py-3 d-flex flex-column col-md-8 ",staticStyle:{"align-items":"center","justify-content":"center"}},[n("img",{attrs:{src:"/imgs/congrat.gif",height:"140"}}),t._v(" "),n("div",{staticClass:"py-3 text-center"},[n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Congratulations!")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("You received ")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("4 experience points.")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" Get more point by sharing your project for people to review. You have \n       "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" experience points")]),t._v(" left \n       to become a ")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.nextLevel)+" dev")])]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD"},on:{click:function(e){t.that.$root.showRewardBoard=!1}}},[t._v("Got it!")])],1)])}),[],!1,null,"bd46ac5a",null);e.default=o.exports}}]);