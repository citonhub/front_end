(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{329:function(t,e,n){var o=n(525);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(25)(o,a);o.locals&&(t.exports=o.locals)},524:function(t,e,n){"use strict";var o=n(329);n.n(o).a},525:function(t,e,n){(t.exports=n(24)(!1)).push([t.i,"\nspan[data-v-340ba599]{\n\n   color: #3C87CD;\n   font-weight: bold;\nline-height:21px;\n}\n.challengeBox[data-v-340ba599]{\n   background:transparent !important;\n   cursor: pointer;\n}\n.challengeBox[data-v-340ba599]:hover{\n   background:transparent !important;\n   cursor: pointer;\n}\n  \n",""])},623:function(t,e,n){"use strict";n.r(e);var o=n(312);n(313);Vue.component("DynamicScroller",o.a),Vue.component("DynamicScrollerItem",o.b);var a={data:function(){return{pending:!0,loadingChallenges:!1,loadingSearchChallenges:!1}},mounted:function(){this.$root.showTopBar=!0,this.$root.challengeListComponent=this,this.fetchChallenges()},components:{Challenge:function(){return n.e(19).then(n.bind(null,675))}},methods:{fetchChallenges:function(){var t=this;this.loadingChallenges=!0,this.$root.getLocalStore("user_challenges_"+this.$root.username).then((function(e){if(null!=e){var n=JSON.parse(e);t.$root.challengesList=n,t.loadingChallenges=!1,t.checkForNewChallenges()}else axios.get("/get-challenges").then((function(e){200==e.status&&(t.$root.challengesList=e.data.challenges,t.$root.LocalStore("user_challenges_"+t.$root.username,e.data.challenges),t.loadingChallenges=!1)})).catch((function(e){t.loadingChallenges=!1}))}))},checkForNewChallenges:function(){var t=this;axios.get("/get-challenges").then((function(e){200==e.status&&(t.$root.challengesList=e.data.challenges,t.$root.LocalStore("user_challenges_"+t.$root.username,e.data.challenges))})).catch((function(t){}))},createChallenge:function(){this.$router.push({path:"/board/challenges/create/new"})}}},l=(n(524),n(4)),s=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0  pt-3 px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky",top:"-1%",background:"#F5F5FB","border-bottom":"1px solid #c5c5c5"}},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-6  py-0 my-0 text-right"},[n("v-btn",{staticStyle:{"font-size":"12px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",color:"#3C87CD"},on:{click:t.createChallenge}},[n("v-icon",{staticStyle:{"font-size":"20px"}},[t._v("las la-plus")]),t._v(" "),n("span",{staticStyle:{color:"white","text-transform":"none"}},[t._v("Create a challenge")])],1)],1)])]),t._v(" "),n("v-btn",{staticClass:"d-lg-none d-inline-block",staticStyle:{"z-index":"99999999",position:"fixed",bottom:"3%",right:"3%"},attrs:{fab:"",color:"#3C87CD"},on:{click:t.createChallenge}},[n("v-icon",{staticStyle:{"font-size":"24px",color:"white"}},[t._v("las la-plus")])],1),t._v(" "),this.$root.TopBarComponentBoard?n("div",{staticClass:"col-lg-8 offset-lg-2 col-md-10 offset-md-1 px-2  pb-1 pt-0   "},[this.$root.TopBarComponentBoard.searchContent.length>0?[t.loadingSearchChallenges?[n("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"}),t._v(" "),n("div",{staticClass:"col-12 mt-3 mt-md-4   text-center"},[n("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[n("DynamicScroller",{staticClass:"col-12 text-center px-0 py-1 pt-md-3",attrs:{items:this.$root.challengeSearchList,keyField:"duel_id","min-item-size":36,buffer:5e3},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item,o=t.index,a=t.active;return[n("DynamicScrollerItem",{attrs:{item:e,active:a,"size-dependencies":[e.description],"data-index":o}},[n("challenge",{attrs:{source:e}})],1)]}},{key:"before",fn:function(){return[n("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"})]},proxy:!0},{key:"after",fn:function(){return[n("div",{staticClass:"col-12 my-5 mt-md-0 "})]},proxy:!0}],null,!1,3080554579)})]]:[t.loadingChallenges?[n("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"}),t._v(" "),n("div",{staticClass:"col-12 mt-3 mt-md-4   text-center"},[n("v-progress-circular",{attrs:{color:"#3C87CD",indeterminate:"",width:"3",size:"25"}})],1)]:[n("DynamicScroller",{staticClass:"col-12 text-center px-0 py-1 pt-md-3",attrs:{items:this.$root.challengesList,keyField:"duel_id","min-item-size":36,buffer:5e3},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item,o=t.index,a=t.active;return[n("DynamicScrollerItem",{attrs:{item:e,active:a,"size-dependencies":[e.description],"data-index":o}},[n("challenge",{attrs:{source:e}})],1)]}},{key:"before",fn:function(){return[n("div",{staticClass:"col-12 mt-5 mt-md-0 d-md-none d-block"})]},proxy:!0},{key:"after",fn:function(){return[n("div",{staticClass:"col-12 my-5 mt-md-0 "})]},proxy:!0}],null,!1,3080554579)})]]],2):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6 py-0 my-0"},[e("h5",[this._v("Challenges")])])}],!1,null,"340ba599",null);e.default=s.exports}}]);