(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{732:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{that:this,nextLevel:"",remainingPoints:0,presentLevel:"",newLevelImage:""}},mounted:function(){this.calculateLevel(this.$root.authProfile.points)},methods:{createChannel:function(){this.$root.componentIsLoading=!0,this.$router.currentRoute.path.indexOf("channel")>=0?(this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels/create"})):(this.$root.showCreateChannel=!0,this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels"}))},returnFormalLevel:function(){var t=this.$root.formerPoint;return t>=50&&t<=99?"a Steel citon":t>=100&&t<=299?"a Bronze citon":t>=300&&t<=599?"a Silver citon":t>=600&&t<=999?"a Gold citon":t>=1e3&&t<=1499?"a Platinum citon":t>=1500&&t<=9999?"a Diamond citon":void 0},makeMentor:function(){this.$root.showRewardBoard=!1,this.$root.showPointDetailsInfo=!0},shareProject:function(){this.$root.showRewardBoard=!1,this.$root.componentIsLoading=!0,this.$router.push({path:"/hub/new-post"})},calculateLevel:function(t){return this.nextLevel="",this.remainingPoints=0,t>=50&&t<=99?(this.nextLevel="a Bronze citon",this.remainingPoints=100-t,this.presentLevel="a Steel citon",this.newLevelImage="/imgs/steel.svg"):t>=100&&t<=299?(this.nextLevel="a Silver citon",this.remainingPoints=300-t,this.presentLevel="a Bronze citon",this.newLevelImage="/imgs/bronze.svg"):t>=300&&t<=599?(this.nextLevel="a Gold citon",this.remainingPoints=600-t,this.presentLevel="a Silver citon",this.newLevelImage="/imgs/silver.svg"):t>=600&&t<=999?(this.nextLevel="a Platinum citon",this.remainingPoints=1e3-t,this.presentLevel="a Gold citon",this.newLevelImage="/imgs/gold.svg"):t>=1e3&&t<=1499?(this.nextLevel="a Diamond citon",this.remainingPoints=1500-t,this.presentLevel="a Platinum citon",this.newLevelImage="/imgs/platinum.svg"):t>=1500&&t<=9999&&(this.nextLevel="a Diamond citon",this.remainingPoints=1e4-t,this.presentLevel="a Diamond citon",this.newLevelImage="/imgs/diamond.svg"),[this.nextLevel,this.remainingPoints]}}},o=n(4),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"col-lg-4 px-1 py-3 d-flex flex-column col-md-8 ",staticStyle:{"align-items":"center","justify-content":"center"}},[n("div",{staticClass:"col-12 py-1 text-right px-0"},[n("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"11px"},attrs:{small:"",text:""},on:{click:function(e){t.that.$root.showRewardBoard=!1}}},[t._v("Close")])],1),t._v(" "),t.presentLevel==t.returnFormalLevel()?[n("img",{attrs:{src:"/imgs/progress.png",height:"190"}})]:[n("img",{attrs:{src:t.newLevelImage,height:"150"}})],t._v(" "),n("div",{staticClass:"pb-3 pt-2 text-center px-md-3 px-2"},[t.presentLevel==t.returnFormalLevel()?[n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("You are progressing!")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Your experience points has increased by")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.that.$root.addedPoint)+" ,")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" You now have")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(this.$root.authProfile.points)+" experience points.")]),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" Get more by sharing more of your projects. You have \n       "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" experience points")]),t._v(" remaining \n       to become  ")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.nextLevel)+" ")])]:[n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Congratulation!")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("You are now ")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.presentLevel))]),t._v(". "),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" You have")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(this.$root.authProfile.points)+" experience points.")]),n("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" Get more by sharing more of your projects. You have \n       "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" experience points")]),t._v(" remaining \n       to become  ")]),t._v(" "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.nextLevel)+" ")])]],2),t._v(" "),"a Steel citon"==t.presentLevel?[n("div",{staticClass:"text-center mb-2"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.shareProject}},[t._v("Share more projects")])],1)]:[n("div",{staticClass:"text-center  d-flex flex-row col-12 px-1"},[n("div",{staticClass:"col-6 px-0 py-0 text-center"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"10px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.makeMentor}},[t._v("Become a mentor")])],1),t._v(" "),n("div",{staticClass:"col-6 px-0 py-0 text-center"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"text-transform":"normal","font-family":"BodyFont","font-size":"10px"},attrs:{small:"",color:"#3C87CD",outlined:""},on:{click:t.shareProject}},[t._v("Share project")])],1)])]],2)}),[],!1,null,"01ef2948",null);e.default=s.exports}}]);