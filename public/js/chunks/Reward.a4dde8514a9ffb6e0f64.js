(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{713:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{that:this,nextLevel:"",remainingPoints:0,presentLevel:"",newLevelImage:""}},mounted:function(){this.calculateLevel(this.$root.authProfile.points)},methods:{createChannel:function(){this.$root.componentIsLoading=!0,this.$router.currentRoute.path.indexOf("channel")>=0?(this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels/create"})):(this.$root.showCreateChannel=!0,this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels"}))},returnFormalLevel:function(){var t=this.$root.formerPoint;return t>=50&&t<=99?"a Steel developer":t>=100&&t<=299?"a Bronze developer":t>=300&&t<=599?"a Silver developer":t>=600&&t<=999?"a Gold developer":t>=1e3&&t<=1499?"a Platinum developer":t>=1500&&t<=9999?"a Diamond developer":void 0},makeMentor:function(){this.$root.showRewardBoard=!1,this.$root.showPointDetailsInfo=!0},shareProject:function(){this.$root.showRewardBoard=!1,this.$root.componentIsLoading=!0,this.$router.push({path:"/hub/new-post"})},calculateLevel:function(t){return this.nextLevel="",this.remainingPoints=0,t>=50&&t<=99?(this.nextLevel="a Bronze developer",this.remainingPoints=100-t,this.presentLevel="a Steel developer",this.newLevelImage="/imgs/steel.svg"):t>=100&&t<=299?(this.nextLevel="a Silver developer",this.remainingPoints=300-t,this.presentLevel="a Bronze developer",this.newLevelImage="/imgs/bronze.svg"):t>=300&&t<=599?(this.nextLevel="a Gold developer",this.remainingPoints=600-t,this.presentLevel="a Silver developer",this.newLevelImage="/imgs/silver.svg"):t>=600&&t<=999?(this.nextLevel="a Platinum developer",this.remainingPoints=1e3-t,this.presentLevel="a Gold developer",this.newLevelImage="/imgs/gold.svg"):t>=1e3&&t<=1499?(this.nextLevel="a Diamond developer",this.remainingPoints=1500-t,this.presentLevel="a Platinum developer",this.newLevelImage="/imgs/platinum.svg"):t>=1500&&t<=9999&&(this.nextLevel="a Diamond developer",this.remainingPoints=1e4-t,this.presentLevel="a Diamond developer",this.newLevelImage="/imgs/diamond.svg"),[this.nextLevel,this.remainingPoints]}}},i=o(5),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"col-lg-4 px-1 py-3 d-flex flex-column col-md-8 ",staticStyle:{"align-items":"center","justify-content":"center"}},[o("div",{staticClass:"col-12 py-1 text-right px-0"},[o("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"11px"},attrs:{small:"",text:""},on:{click:function(e){t.that.$root.showRewardBoard=!1}}},[t._v("Close")])],1),t._v(" "),t.presentLevel==t.returnFormalLevel()?[o("img",{attrs:{src:"/imgs/progress.png",height:"190"}})]:[o("img",{attrs:{src:t.newLevelImage,height:"150"}})],t._v(" "),o("div",{staticClass:"pb-3 pt-2 text-center px-2"},[t.presentLevel==t.returnFormalLevel()?[o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("You are progressing!")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("Your XP has increased by")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.that.$root.addedPoint)+" ,")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" You now have")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(this.$root.authProfile.points)+" XP.")]),o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" Get more by sharing more of your projects. You have \n       "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" XP")]),t._v(" left \n       to become  ")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.nextLevel)+" ")])]:[o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Congratulation!")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("You are now ")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.presentLevel))]),t._v(". "),o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" You have")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(this.$root.authProfile.points)+" XP.")]),o("span",{staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v(" Get more by sharing more of your projects. You have \n       "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" XP")]),t._v(" left \n       to become  ")]),t._v(" "),o("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.nextLevel)+" ")])]],2),t._v(" "),"Newbie"==t.presentLevel?[o("div",{staticClass:"text-center mb-2"},[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.shareProject}},[t._v("Share more projects")])],1)]:[o("div",{staticClass:"text-center  d-flex flex-row col-12 px-1"},[o("div",{staticClass:"col-6 px-0 py-0 text-center"},[t.that.$root.authProfile.is_mentor?[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"10px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.createChannel}},[t._v("Create a channel")])]:[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"10px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.makeMentor}},[t._v("Become a mentor")])]],2),t._v(" "),o("div",{staticClass:"col-6 px-0 py-0 text-center"},[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{"text-transform":"normal","font-family":"BodyFont","font-size":"10px"},attrs:{small:"",color:"#3C87CD",outlined:""},on:{click:t.shareProject}},[t._v("Share project")])],1)])]],2)}),[],!1,null,"165ca727",null);e.default=s.exports}}]);