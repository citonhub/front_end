(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{723:function(e,t,o){"use strict";o.r(t);o(249);var s={data:function(){return{that:this,placeholder:"",searchQuery:"",searchResult:[],loadingSearch:!1,loadingNext:!1,devToTags:[],nextPageToken:"",showSuggestion:!1,selectedItems:[],allTagStore:[],queryContent:"",devToPageCount:1,loading:!1,searchType:"tags",searchFilter:[{name:"by tags",value:"tags"},{name:"by username",value:"username"}]}},components:{Resource:function(){return Promise.all([o.e(10),o.e(98)]).then(o.bind(null,748))}},mounted:function(){this.$root.componentIsLoading=!1,this.alterSearch(),this.$root.showAddButton=!1,this.$root.resourcesSearchComponent=this},methods:{selectTag:function(e){this.showSuggestion=!0,0==this.searchQuery.length&&(this.searchQuery=[]),this.searchQuery=e.name,this.showSuggestion=!1},AddItemsToResources:function(){var e=this,t="";"devto"==this.$root.resourceSearchType&&(t="devto_article"),"youtube"==this.$root.resourceSearchType&&(t="youtube_video"),this.loading=!0,axios.post("/add-items-to-resource",{resource_id:this.$root.selectedResource.resource_id,type:t,items:this.selectedItems}).then((function(t){200==t.status&&(e.loading=!1,e.$root.forcereloadResource=!0,"playlist"==e.$root.selectedResource.type?e.$root.chatComponent.showAlert("Added!","video added to playlist","success","bottomRight",3e3):e.$root.chatComponent.showAlert("Added!","resource has been added","success","bottomRight",3e3),e.goBack())})).catch((function(t){e.loading=!1}))},searchTags:function(e){var t=this;"Backspace"!=e.key?13==e.keyCode?(this.showSuggestion=!1,this.queryContent="",this.devToTags=this.allTagStore):1==e.key.length&&(this.queryContent+=e.key,this.showSuggestion=!0):this.queryContent=this.queryContent.slice(0,-1);var o=this.allTagStore.filter((function(e){return e.name.toLowerCase().includes(t.queryContent.toLowerCase())}));this.devToTags=o},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},loadNextSet:function(e){e&&this.searchResult.length>0&&this.loadNextResult()},fetchDevToTags:function(){var e=this;axios.get("/devto-tags").then((function(t){200==t.status&&(e.devToTags=t.data.tags,e.allTagStore=t.data.tags)})).catch((function(e){}))},loadNextResult:function(){var e=this;if(!this.loadingNext&&(this.loadingNext=!0,"youtube"==this.$root.resourceSearchType&&axios.get("/search-youtube/".concat(this.searchQuery,"/").concat(this.nextPageToken)).then((function(t){if(200==t.status){var o=t.data.result;e.nextPageToken=t.data.nextPageToken;var s=[];o.forEach((function(e){var t={content:e,type:"youtube_video"};s.push(t)})),e.searchResult=e.searchResult.concat(s),e.loadingNext=!1}})).catch((function(t){e.loadingNext=!1})),"devto"==this.$root.resourceSearchType)){if(""==this.searchQuery)return;var t=this.searchQuery.toLowerCase().split(" ");this.devToPageCount++,axios.get("/search-devto/".concat(JSON.stringify(t),"/").concat(this.devToPageCount,"/").concat(this.devToPageCount)).then((function(t){if(200==t.status){var o=t.data.articles,s=[];o.forEach((function(e){var t={content:e,type:"devto_article"};s.push(t)})),e.searchResult=e.searchResult.concat(s),e.loadingNext=!1}})).catch((function(t){e.loadingNext=!1}))}},alterSearch:function(){this.placeholder="Search "+this.$root.resourceSearchType,"youtube"!=this.$root.resourceSearchType&&"devto"!=this.$root.resourceSearchType||(this.searchQuery=this.$root.selectedResource.name,this.searchSite())},searchSite:function(){var e=this;if(this.searchResult=[],this.loadingSearch=!0,"youtube"==this.$root.resourceSearchType&&axios.get("/search-youtube/".concat(this.searchQuery)).then((function(t){if(200==t.status){var o=t.data.result;e.nextPageToken=t.data.nextPageToken;var s=[];o.forEach((function(e){var t={content:e,type:"youtube_video"};s.push(t)})),e.searchResult=s,e.loadingSearch=!1}})).catch((function(t){e.loadingSearch=!1})),"devto"==this.$root.resourceSearchType){if(""==this.searchQuery)return;var t=this.searchQuery.toLowerCase().split(" ");this.devToPageCount=1,axios.get("/search-devto/".concat(JSON.stringify(t),"/1/").concat(this.searchType)).then((function(t){if(200==t.status){var o=t.data.articles,s=[];o.forEach((function(e){var t={content:e,type:"devto_article"};s.push(t)})),e.searchResult=s,e.loadingSearch=!1}})).catch((function(t){e.loadingSearch=!1}))}"udemy"==this.$root.resourceSearchType&&"udemy"==this.$root.resourceSearchType&&axios.get("/search-udemy/".concat(this.searchQuery)).then((function(t){200==t.status&&(console.log(t.data),e.loadingSearch=!1)})).catch((function(t){e.loadingSearch=!1}))}}},a=o(4),r=Object(a.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{background:"transparent"}},[o("div",{staticClass:"col-12 py-0 my-0 "},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 px-1 py-2  fixed-top d-flex flex-row flex-wrap",staticStyle:{position:"sticky",background:"white",top:"0%","align-items":"center"}},[o("div",{staticClass:"col-12 py-0 px-0 d-flex flex-row"},[o("div",{staticClass:" mr-1 py-0"},[o("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.goBack(t)}}},[o("v-icon",[e._v("las la-arrow-left")])],1)],1),e._v(" "),o("div",{staticClass:" py-0 text-center d-flex flex-row",staticStyle:{width:"100%","align-items":"center"}},["devto"!=this.$root.resourceSearchType?[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"py-2 px-3",staticStyle:{width:"100%",heigth:"100%","font-size":"13px",background:"whitesmoke","border-radius":"13px","font-family":"BodyFont"},attrs:{placeholder:e.placeholder,type:"search",autofocus:""},domProps:{value:e.searchQuery},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchSite()},input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]:[o("div",{staticClass:" px-0 py-0",staticStyle:{height:"43px",width:"100%"}},[o("v-text-field",{staticClass:"mb-0",staticStyle:{"font-size":"13px"},attrs:{placeholder:"Search DevTo",chips:"",outlined:"",dense:"",color:"#3C87CD"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchSite()}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e._v(" "),e.showSuggestion?[o("v-card",{staticClass:"d-flex flex-column px-1 py-2",staticStyle:{position:"absolute","border-radius":"0px",top:"95%",width:"100%","max-height":"250px","z-index":"99999999999999",left:"0px",height:"auto","overflow-y":"auto"}},e._l(e.devToTags,(function(t){return o("v-card",{key:t.id,staticClass:"px-1 py-2 d-flex flex-row",staticStyle:{"border-bottom":"1px solid #c5c5c5","align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(o){return e.selectTag(t)}}},[o("div",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o("span",{staticClass:"mr-1",staticStyle:{"font-size":"13px","font-family":"BodyFont"}},[e._v(e._s(t.name))])])])})),1)]:e._e()],2),e._v(" "),o("div",{staticClass:"col-3 px-0 py-0 ml-1"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.searchType,expression:"searchType"}],staticClass:"py-2 px-2",staticStyle:{border:"1px solid grey",width:"100%","border-radius":"2px","font-family":"BodyFont","font-size":"13px",background:"white"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.searchType=t.target.multiple?o:o[0]}}},e._l(e.searchFilter,(function(t,s){return o("option",{key:s+"type",domProps:{value:t.value}},[e._v(e._s(t.name))])})),0)])]],2),e._v(" "),o("div",{staticClass:" py-0 ml-1 text-right"},[o("v-btn",{attrs:{icon:"",loading:e.loadingSearch},on:{click:e.searchSite}},[o("v-icon",[e._v("las la-search")])],1)],1)]),e._v(" "),o("div",{staticClass:"col-12  py-1 d-flex flex-row px-0 mt-1",staticStyle:{"align-items":"center","justify-content":"center"}},["playlist"==e.that.$root.selectedResource.type?[o("div",{staticClass:"mt-1 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[e._v('Add videos to "'+e._s(e.that.$root.selectedResource.name)+'" playlist')])]:[o("div",{staticClass:"mt-1 text-center",staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[e._v('Add articles to "'+e._s(e.that.$root.selectedResource.name)+'" resource')])],e._v(" "),o("v-btn",{staticClass:"ml-2",staticStyle:{"font-size":"11px","text-transform":"none","font-weight":"bolder",color:"white","font-family":"BodyFont"},attrs:{rounded:"",small:"",loading:e.loading,disabled:0==e.selectedItems.length,color:"#3C87CD"},on:{click:function(t){return e.AddItemsToResources()}}},[e._v("Add ")])],2)]),e._v(" "),o("div",{staticClass:"col-12 py-0 my-0 px-1 px-md-2",staticStyle:{background:"transparent","font-family":"BodyFont"}},[o("resource",{attrs:{show_add_icon:!0,contents:e.searchResult}}),e._v(" "),o("div",{staticClass:"text-center col-lg-12"},[e.loadingNext?o("v-progress-circular",{attrs:{indeterminate:"",color:"#3C87CD"}}):e._e(),e._v(" "),o("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.loadNextSet,expression:"loadNextSet"}]})],1)],1)])])])}),[],!1,null,"cf8e4fe2",null);t.default=r.exports}}]);