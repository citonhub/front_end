(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{344:function(t,e,s){var i=s(560);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(25)(i,o);i.locals&&(t.exports=i.locals)},559:function(t,e,s){"use strict";var i=s(344);s.n(i).a},560:function(t,e,s){(t.exports=s(24)(!1)).push([t.i,"\n.btnStyle[data-v-34e0d411]{\n    background: #3C87CD;\n    color: white;\n    border-radius: 30px;\n    font-family: MediumFont;\n    font-size: 15px;\n}\n.sideBar[data-v-34e0d411]{\n      cursor: pointer;\n}\n.sideBar[data-v-34e0d411]:hover{\n      background: #F3F8FC;\n      border-right:4px solid #3C87CD !important;\n}\n",""])},666:function(t,e,s){"use strict";s.r(e);var i={data:function(){return{selectedTab:""}},mounted:function(){this.setPage(),this.$root.componentIsLoading=!1,this.$root.sideBarComponent=this},methods:{installApp:function(){this.$root.ShowappInstaller=!1,this.$root.deferredPrompt.prompt(),this.$root.deferredPrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))},setPage:function(){this.$router.currentRoute.path.indexOf("projects")>=0&&(this.selectedTab="projects",this.$root.searchType="projects"),this.$router.currentRoute.path.indexOf("channels")>=0&&(this.selectedTab="channels",this.$root.searchType="channels"),this.$router.currentRoute.path.indexOf("diary")>=0&&(this.selectedTab="diary",this.$root.searchType="diary"),this.$router.currentRoute.path.indexOf("challenges")>=0&&(this.selectedTab="challenges",this.$root.searchType="challenges"),this.$router.currentRoute.path.indexOf("hub")>=0&&(this.selectedTab="hub",this.$root.searchType="hub"),this.$router.currentRoute.path.indexOf("wallet")>=0&&(this.selectedTab="wallet",this.$root.searchType="wallet"),this.$router.currentRoute.path.indexOf("settings")>=0&&(this.selectedTab="settings",this.$root.searchType="settings"),this.$router.currentRoute.path.indexOf("feedback")>=0&&(this.selectedTab="feedback",this.$root.searchType="feedback")},goToPage:function(t){return this.$root.showProfileView=!1,"channels"==t?(this.$router.push({path:"/channels"}),this.$root.showSideBar=!1,this.selectedTab=t,void(this.$root.searchType=t)):"hub"==t?(this.$router.push({path:"/hub"}),this.$root.showSideBar=!1,this.selectedTab=t,void(this.$root.searchType=t)):"feedback"==t?(this.$router.push({path:"/board/feedback"}),this.$root.showSideBar=!1,this.selectedTab=t,void(this.$root.searchType=t)):(this.$router.push({path:"/board/"+t}),this.selectedTab=t,this.$root.searchType=t,void(this.$root.showSideBar=!1))}}},o=(s(559),s(4)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"col-12  py-2 pt-md-2  pt-0 px-0"},[s("div",{staticClass:"row px-0"},[s("div",{staticClass:"col-12  px-0 py-1 py-md-2 mt-1 sideBar",style:"channels"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("channels")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"channels"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-comments")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"channels"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-comments")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"channels"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Chats")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Chats")])])])]),t._v(" "),s("div",{staticClass:"col-12  px-0 py-1 py-md-2 mt-1 sideBar",style:"challenges"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("challenges")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"challenges"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-trophy")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"challenges"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-trophy")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"challenges"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Challenges")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Challenges")])])])]),t._v(" "),s("div",{staticClass:"col-12  px-0 py-1 py-md-2 mt-1 sideBar",style:"hub"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("hub")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"hub"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-stream")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"hub"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-stream")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"hub"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Showcase")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Showcase")])])])]),t._v(" "),s("div",{staticClass:"col-12  px-0 py-1 py-md-2 mt-1 sideBar",style:"diary"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("diary")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"diary"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("mdi-book-multiple-outline")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"diary"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("mdi-book-multiple-outline")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"diary"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Diaries")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Diaries")])])])]),t._v(" "),s("div",{staticClass:"col-12  px-0 py-1 py-md-2 sideBar mt-1 ",style:"projects"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("projects")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"projects"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-laptop-code")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"projects"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-laptop-code")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"projects"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("My Projects")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("My Projects")])])])]),t._v(" "),s("div",{staticClass:"col-12  px-0 py-1 py-md-2 mt-1 sideBar",style:"wallet"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("wallet")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"wallet"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-wallet")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"wallet"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-wallet")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"wallet"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Wallet")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Wallet")])])])]),t._v(" "),this.$root.ShowappInstaller?s("div",{staticClass:"col-12 py-md-2 py-2 text-center"},[s("button",{staticClass:"homeButton mx-2 px-3 py-2",staticStyle:{"border-radius":"20px","font-family":"MediumFont","font-size":"13px"},on:{click:function(e){return t.installApp()}}},[t._v("Use Web App")])]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12 px-0 py-2 mt-2",staticStyle:{position:"absolute",bottom:"0%",left:"0"}},[s("div",{staticClass:"col-12 px-0  mb-1 py-1 py-md-2 sideBar",style:"settings"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("settings")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"settings"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-cog")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"settings"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-cog")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"settings"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Settings")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Settings")])])])]),t._v(" "),s("div",{staticClass:"col-12 px-0 sideBar py-1 py-md-2",style:"feedback"==t.selectedTab?"background:#F3F8FC; border-right:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("feedback")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 py-1 text-center"},[s("v-icon",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"30px"},attrs:{color:"feedback"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-question-circle")]),t._v(" "),s("v-icon",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-size":"27px"},attrs:{color:"feedback"==t.selectedTab?"#3C87CD":"#A4A4A5"}},[t._v("las la-question-circle")])],1),t._v(" "),s("div",{staticClass:"  py-1 col-8 d-flex",style:"feedback"==t.selectedTab?"align-items:center;":"align-items:center; color:#A4A4A5;"},[s("div",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"14px"}},[t._v("Feedbacks")]),t._v(" "),s("div",{staticClass:"d-md-none d-inline-block",staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Feedbacks")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12  py-2 mb-lg-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center px-0 d-lg-block d-none"},[e("img",{staticClass:"d-inline-block mr-1 mb-2",attrs:{alt:"citonhub logo",src:"/imgs/logo.png",height:"38px"}}),this._v(" "),e("div",{staticClass:"d-inline-block mt-2",staticStyle:{"font-family":"HeaderFont","font-size":"19px"}},[this._v("CitonHub")])]),this._v(" "),e("div",{staticClass:"col-12 text-center px-0 d-block d-lg-none"},[e("img",{staticClass:"d-inline-block mr-1 mb-2",attrs:{alt:"citonhub logo",src:"/imgs/logo.png",height:"30px"}}),this._v(" "),e("div",{staticClass:"d-inline-block mt-2",staticStyle:{"font-family":"HeaderFont","font-size":"14px"}},[this._v("CitonHub")])])])])}],!1,null,"34e0d411",null);e.default=a.exports}}]);