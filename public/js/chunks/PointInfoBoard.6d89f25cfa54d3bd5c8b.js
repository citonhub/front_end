(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{706:function(t,e,n){"use strict";n.r(e);var o={props:["alertComponent"],data:function(){return{that:this,nextLevel:"",presentLevel:"",remainingPoints:0,loadingmakeMentor:!1,languages:[],languageIcon:["Javascript","NodeJs","PHP","VueJs","ReactJs","Python","C","C++","Java","C#","Erlang","Kotlin","Fortran","Perl","R","Ruby","Go","Hashkell","Lua","Pascal","Typescript","Rust","Swift","Scala"]}},mounted:function(){this.calculateLevel(this.$root.authProfile.points)},methods:{createChannel:function(){this.$root.componentIsLoading=!0,this.$router.currentRoute.path.indexOf("channel")>=0?(this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels/create"})):(this.$root.showCreateChannel=!0,this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels"}))},makeMentor:function(){var t=this;this.loadingmakeMentor=!0,axios.post("/make-mentor",{language:this.languages}).then((function(e){200==e.status&&(t.$root.authProfile.is_mentor=!0,t.loadingmakeMentor=!1)})).catch((function(e){t.alertComponent.showAlert("Oops!","Something went wrong, please try again","error"),t.loadingmakeMentor=!1}))},shareProject:function(){this.$root.showPointDetailsInfo=!1,this.$root.componentIsLoading=!0,this.$root.autoOpenAddPost=!0,this.$router.push({path:"/hub"})},calculateLevel:function(t){return this.nextLevel="",this.remainingPoints=0,t>=50&&t<=99?(this.nextLevel="a Bronze developer",this.remainingPoints=100-t,this.presentLevel="a Steel developer",this.newLevelImage="/imgs/steel.svg"):t>=100&&t<=299?(this.nextLevel="a Silver developer",this.remainingPoints=300-t,this.presentLevel="a Bronze developer",this.newLevelImage="/imgs/bronze.svg"):t>=300&&t<=599?(this.nextLevel="a Gold developer",this.remainingPoints=600-t,this.presentLevel="a Silver developer",this.newLevelImage="/imgs/silver.svg"):t>=600&&t<=999?(this.nextLevel="a Platinum developer",this.remainingPoints=1e3-t,this.presentLevel="a Gold developer",this.newLevelImage="/imgs/gold.svg"):t>=1e3&&t<=1499?(this.nextLevel="a Diamond developer",this.remainingPoints=1500-t,this.presentLevel="a Platinum developer",this.newLevelImage="/imgs/platinum.svg"):t>=1500&&t<=9999&&(this.nextLevel="a Diamond developer",this.remainingPoints=1e4-t,this.presentLevel="a Diamond developer",this.newLevelImage="/imgs/diamond.svg"),[this.nextLevel,this.remainingPoints]}}},i=n(5),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"col-lg-4  py-3 d-flex flex-column col-md-8 px-1 application application--light",staticStyle:{"align-items":"center","justify-content":"center"},attrs:{"data-app":"true"}},[n("div",{staticClass:"d-flex flex-row py-0 col-12 "},[n("div",{staticClass:"col-8 py-1 text-left px-1"},[n("span",{staticStyle:{"font-size":"17px","font-family":"HeaderFont"}},[t._v("Become a mentor")])]),t._v(" "),n("div",{staticClass:"col-4 py-1 text-right px-0"},[n("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",text:""},on:{click:function(e){t.that.$root.showPointDetailsInfo=!1}}},[t._v("Close")])],1)]),t._v(" "),n("img",{attrs:{src:"/imgs/teach_dev_new.svg",height:"160"}}),t._v(" "),t.that.$root.authProfile.points<100?[n("div",{staticClass:"py-3   px-md-3 px-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[n("span",[t._v("Hey "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont","text-transform":"capitalize"}},[t._v(t._s(t.that.$root.authProfile.name))]),t._v(", "),n("br"),t._v(" "),n("br"),t._v("\n     To become a mentor , you need to be \n     at least a "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Bronze developer")]),t._v(" On CitonHub. As a mentor, you can "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("create a channel to mentor and earn")]),t._v(".\n      You have "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.remainingPoints)+" experience points (XP)")]),t._v(" remaining to become a "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v(t._s(t.nextLevel)+".")])]),t._v(" Share your works with\n     the community to get more experience points. \n\n")]),t._v(" "),n("div",{staticClass:"text-center col-12 d-flex flex-row py-0 px-1"},[n("div",{staticClass:"col-12 text-center"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.shareProject}},[t._v("Share your work")])],1)])]:[n("div",{staticClass:"py-3 col-12  px-md-3 px-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t.that.$root.authProfile.is_mentor?[n("span",[n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont","text-transform":"capitalize"}},[t._v("Congratulations! ")]),t._v(" "),n("br"),n("br"),t._v("You are now a mentor on CitonHub.\n     Create a channel to start "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("mentoring and earn from donation, subscription or paid sessions")]),t._v(".")]),t._v(" "),n("div",{staticClass:"text-center col-12 d-flex flex-row py-1 px-1 mt-2"},[n("div",{staticClass:"col-12 text-center py-1"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",loading:t.loadingmakeMentor,color:"#3C87CD"},on:{click:t.createChannel}},[t._v("Create a channel")])],1)])]:[n("span",[t._v("Hey "),n("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont","text-transform":"capitalize"}},[t._v(t._s(t.that.$root.authProfile.name))]),t._v(",")]),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Which programming languages would you like to help others in?")]),t._v(" "),n("v-combobox",{staticStyle:{"font-size":"13px"},attrs:{color:"#3C87CD",items:t.languageIcon,dense:"",outlined:"",multiple:"",placeholder:"select..."},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("v-chip",t._b({key:JSON.stringify(e.item),staticClass:"my-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"},attrs:{"input-value":e.selected,color:"#3C87CD",dense:"",outlined:"",disabled:e.disabled}},"v-chip",e.attrs,!1),[t._v("\n          \n           "+t._s(e.item)+"\n         ")])]}}]),model:{value:t.languages,callback:function(e){t.languages=e},expression:"languages"}}),t._v(" "),n("div",{staticClass:"text-center col-12 d-flex flex-row py-0 px-1"},[n("div",{staticClass:"col-12 text-center py-1"},[n("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",disabled:0==t.languages.length,loading:t.loadingmakeMentor,color:"#3C87CD"},on:{click:t.makeMentor}},[t._v("Done")])],1)])]],2)]],2)}),[],!1,null,"f4d7fc42",null);e.default=a.exports}}]);