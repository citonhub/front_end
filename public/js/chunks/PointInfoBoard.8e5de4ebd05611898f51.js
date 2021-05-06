(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{693:function(t,e,i){"use strict";i.r(e);var n={props:["alertComponent"],data:function(){return{that:this,nextLevel:"",presentLevel:"",remainingPoints:0,loadingmakeMentor:!1,languages:[],languageIcon:["Javascript","NodeJs","PHP","VueJs","ReactJs","Python","C","C++","Java","C#","Erlang","Kotlin","Fortran","Perl","R","Ruby","Go","Hashkell","Lua","Pascal","Typescript","Rust","Swift","Scala"],level:"",xpLeft:0,barValue:0,pic:"",pic1:""}},mounted:function(){this.calculateLevel(this.$root.authProfile.points),this.calculateLevelNew(this.$root.authProfile.points)},methods:{calculateLevelNew:function(t){t>=50&&t<=99?(this.level="Steel",this.nextLevel="Bronze",this.xpLeft=100-t,this.barValue=t/100*100,this.pic="/imgs/bronze.svg",this.pic1="/imgs/steel.svg"):t>=100&&t<=299?(this.level="Bronze",this.nextLevel="Silver",this.xpLeft=300-t,this.barValue=t/300*100,this.pic="/imgs/silver.svg",this.pic1="/imgs/bronze.svg"):t>=300&&t<=599?(this.level="Silver",this.nextLevel="Gold",this.xpLeft=600-t,this.barValue=t/600*100,this.pic="/imgs/gold.svg",this.pic1="/imgs/silver.svg"):t>=600&&t<=999?(this.level="Gold",this.nextLevel="Platinum",this.xpLeft=1e3-t,this.barValue=t/1e3*100,this.pic="/imgs/platinum.svg",this.pic1="/imgs/gold.svg"):t>=1e3&&t<=1499?(this.level="Platinum",this.nextLevel="Diamond",this.xpLeft=1500-t,this.barValue=t/1500*100,this.pic="/imgs/diamond.svg",this.pic1="/imgs/platinum.svg"):t>=1500&&t<=9999&&(this.level="Platinum",this.nextLevel="Diamond",this.xpLeft=1e4-t,this.barValue=t/1e4*100,this.pic="/imgs/diamond.svg",this.pic1="/imgs/platinum.svg")},createChannel:function(){this.$root.componentIsLoading=!0,this.$router.currentRoute.path.indexOf("channel")>=0?(this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels/create"})):(this.$root.showCreateChannel=!0,this.$root.showPointDetailsInfo=!1,this.$router.push({path:"/channels"}))},makeMentor:function(){var t=this;this.loadingmakeMentor=!0,axios.post("/make-mentor",{language:this.languages}).then((function(e){200==e.status&&(t.$root.authProfile.is_mentor=!0,t.loadingmakeMentor=!1,t.$root.fromMentorPage&&t.$root.MentorPageComponent.getMentors())})).catch((function(e){t.alertComponent.showAlert("Oops!","Something went wrong, please try again","error"),t.loadingmakeMentor=!1}))},shareProject:function(){this.$root.showPointDetailsInfo=!1,this.$root.componentIsLoading=!0,this.$root.autoOpenAddPost=!0,this.$router.push({path:"/hub"})},calculateLevel:function(t){return this.nextLevel="",this.remainingPoints=0,t>=50&&t<=99?(this.nextLevel="a Bronze citon",this.remainingPoints=100-t,this.presentLevel="a Steel citon",this.newLevelImage="/imgs/steel.svg"):t>=100&&t<=299?(this.nextLevel="a Silver citon",this.remainingPoints=300-t,this.presentLevel="a Bronze citon",this.newLevelImage="/imgs/bronze.svg"):t>=300&&t<=599?(this.nextLevel="a Gold citon",this.remainingPoints=600-t,this.presentLevel="a Silver citon",this.newLevelImage="/imgs/silver.svg"):t>=600&&t<=999?(this.nextLevel="a Platinum citon",this.remainingPoints=1e3-t,this.presentLevel="a Gold citon",this.newLevelImage="/imgs/gold.svg"):t>=1e3&&t<=1499?(this.nextLevel="a Diamond citon",this.remainingPoints=1500-t,this.presentLevel="a Platinum citon",this.newLevelImage="/imgs/platinum.svg"):t>=1500&&t<=9999&&(this.nextLevel="a Diamond citon",this.remainingPoints=1e4-t,this.presentLevel="a Diamond citon",this.newLevelImage="/imgs/diamond.svg"),[this.nextLevel,this.remainingPoints]}}},s=i(4),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"col-lg-4  py-3 d-flex flex-column col-md-8 px-1 application application--light",staticStyle:{"align-items":"center","justify-content":"center"},attrs:{"data-app":"true"}},[i("div",{staticClass:"d-flex flex-row py-0 col-12 "},[i("div",{staticClass:"col-8 py-1 text-left px-1"},[i("span",{staticStyle:{"font-size":"17px","font-family":"HeaderFont"}},[t._v("Become a mentor")])]),t._v(" "),i("div",{staticClass:"col-4 py-1 text-right px-0"},[i("v-btn",{staticStyle:{"font-family":"BodyFont","font-size":"11px"},attrs:{"x-small":"",text:""},on:{click:function(e){t.that.$root.showPointDetailsInfo=!1}}},[t._v("Close")])],1)]),t._v(" "),i("img",{attrs:{src:"/imgs/teach_dev_new.svg",height:"160"}}),t._v(" "),t.that.$root.authProfile.points<100?[i("div",{staticClass:"py-3   px-md-3 px-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t._v("\n\n   Hey "),i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont","text-transform":"capitalize"}},[t._v(t._s(t.that.$root.authProfile.name))]),t._v(", "),i("br"),t._v(" "),i("br"),t._v("\n      At CitonHub, we believe we can help "),i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("1 million people")]),t._v(" get into tech in the "),i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("next 5 years")]),t._v(". Join us by becoming a mentor. "),i("br"),i("br"),t._v("\n     To become a mentor , you need to be\n     at least a "),i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Bronze citon")]),t._v(". "),i("br"),t._v(" "),i("div",{staticClass:"col-12  my-0 d-flex py-3",staticStyle:{"align-items":"center","justify-content":"center"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4 py-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[i("div",{staticClass:"d-flex flex-column",staticStyle:{"align-items":"center","justify-content":"center"}},[i("img",{attrs:{src:t.pic1,height:"30px"}}),t._v(" "),i("span",{staticStyle:{"font-family":"MediumFont","font-size":"12px"}},[t._v(t._s(t.level))])])]),t._v(" "),i("div",{staticClass:"col-4 py-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[i("span",{staticClass:"mx-1",staticStyle:{"font-family":"MediumFont","font-size":"12px"}},[t._v(t._s(this.$root.authProfile.points)+" ")]),i("span",{staticStyle:{"font-size":"12px"}},[t._v("XP")])]),t._v(" "),i("div",{staticClass:"col-4  py-0 d-flex ",staticStyle:{"align-items":"center","justify-content":"center"}},[i("div",{staticClass:"d-flex flex-column",staticStyle:{"align-items":"center","justify-content":"center"}},[i("img",{attrs:{src:t.pic,height:"30px"}}),t._v(" "),i("span",{staticStyle:{"font-family":"MediumFont","font-size":"12px"}},[t._v(t._s(t.nextLevel))])])]),t._v(" "),i("div",{staticClass:" col-12 py-1 pt-2 "},[i("div",{staticClass:"d-flex flex-column",staticStyle:{"align-items":"center","justify-content":"center"}},[i("v-progress-linear",{attrs:{height:"7px",width:"100%",rounded:"",color:"#3C87CD",value:t.barValue}}),t._v(" "),i("span",{staticStyle:{"font-family":"BodyFont","font-size":"12px"}},[i("span",{staticStyle:{"font-family":"MediumFont"}},[t._v(t._s(t.xpLeft))]),t._v(" XP Points to "+t._s(t.nextLevel)+" citon")])],1)])])]),t._v(" "),t._v("\n\n  \n    \n     Share your works with\n     the community to get more experience points. \n\n")]),t._v(" "),i("div",{staticClass:"text-center col-12 d-flex flex-row py-0 px-1"},[i("div",{staticClass:"col-12 text-center"},[i("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",color:"#3C87CD"},on:{click:t.shareProject}},[t._v("Share your work")])],1)])]:[i("div",{staticClass:"py-3 col-12  px-md-3 px-2",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[t.that.$root.authProfile.is_mentor?[i("span",[i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont","text-transform":"capitalize"}},[t._v("Congratulations! ")]),t._v(" "),i("br"),i("br"),t._v("You are now a mentor on CitonHub.\n     Create a channel to start "),i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("mentoring and earn from donation, subscription or paid sessions")]),t._v(".")]),t._v(" "),i("div",{staticClass:"text-center col-12 d-flex flex-row py-1 px-1 mt-2"},[i("div",{staticClass:"col-12 text-center py-1"},[i("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",loading:t.loadingmakeMentor,color:"#3C87CD"},on:{click:t.createChannel}},[t._v("Create a channel")])],1)])]:[i("span",[t._v("Hey "),i("span",{staticStyle:{"font-size":"13px","font-family":"MediumFont","text-transform":"capitalize"}},[t._v(t._s(t.that.$root.authProfile.name))]),t._v(",")]),i("br"),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Which programming languages would you like to help others in?")]),t._v(" "),i("v-combobox",{staticStyle:{"font-size":"13px"},attrs:{color:"#3C87CD",items:t.languageIcon,dense:"",outlined:"",multiple:"",placeholder:"select..."},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",t._b({key:JSON.stringify(e.item),staticClass:"my-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"},attrs:{"input-value":e.selected,color:"#3C87CD",dense:"",outlined:"",disabled:e.disabled}},"v-chip",e.attrs,!1),[t._v("\n          \n           "+t._s(e.item)+"\n         ")])]}}]),model:{value:t.languages,callback:function(e){t.languages=e},expression:"languages"}}),t._v(" "),i("div",{staticClass:"text-center col-12 d-flex flex-row py-0 px-1"},[i("div",{staticClass:"col-12 text-center py-1"},[i("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",disabled:0==t.languages.length,loading:t.loadingmakeMentor,color:"#3C87CD"},on:{click:t.makeMentor}},[t._v("Done")])],1)])]],2)]],2)}),[],!1,null,"603d24d9",null);e.default=o.exports}}]);