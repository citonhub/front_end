(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{370:function(t,o,e){var i=e(722);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(25)(i,n);i.locals&&(t.exports=i.locals)},721:function(t,o,e){"use strict";var i=e(370);e.n(i).a},722:function(t,o,e){(t.exports=e(24)(!1)).push([t.i,".scroller[data-v-d6b40b8e]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-d6b40b8e]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}",""])},808:function(t,o,e){"use strict";e.r(o);var i;function n(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var r=(n(i={mounted:function(){this.$root.showTabs=!1,this.$root.showHeader=!1},components:{},computed:{codemirror:function(){}}},"components",{ImageLoader:function(){return e.e(58).then(e.bind(null,748))}}),n(i,"data",(function(){return{imageUrl1:"imgs/public.jpg",color:"#c5c5c5",that:this,sliderState:this.$root.imageSlidestate}})),n(i,"methods",{onCmCursorActivity:function(t){console.debug("onCmCursorActivity",t)},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.chatInnerConent=""}}),i),s=(e(721),e(4)),a=Object(s.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticStyle:{background:"white","font-family":"BodyFont",position:"absolute",top:"0%",height:"100%","overflow-y":"auto","overflow-x":"hidden","z-index":"987664736568",width:"100%"}},[e("v-btn",{staticClass:"d-inline-block  ",staticStyle:{position:"absolute",background:"#3C87CD",top:"4%",left:"3%","z-index":"990679797879"},attrs:{icon:"",color:"#ffffff"},on:{click:t.goBack}},[e("v-icon",[t._v("mdi-close mdi-18px")])],1),t._v(" "),e("div",{staticClass:"row my-0 py-0 "},[e("v-carousel",{staticStyle:{position:"absolute",left:"0%"},attrs:{height:"100%",width:"100%","delimiter-icon":"mdi-minus mdi-18px","next-icon":!1,"show-arrows":!1},model:{value:t.sliderState,callback:function(o){t.sliderState=o},expression:"sliderState"}},t._l(t.that.$root.imageArrayView,(function(t,o){return e("v-carousel-item",{key:o},[e("div",{style:"position:absolute; height:100%; width:100%; overflow-y:auto;left:0;top:0%;background:"+t.background_color+";"},[e("div",{staticClass:"col-12 py-0 my-0 px-0 d-flex scroller",staticStyle:{position:"absolute",height:"80%",top:"10%",width:"96%",left:"2%","overflow-y":"auto","overflow-x":"hidden","align-items":"center","justify-content":"center"}},[e("img",{staticStyle:{height:"auto"},attrs:{src:"/imgs/space/"+t.image_name+"."+t.image_extension,width:"100%"}})])])])})),1)],1)],1)}),[],!1,null,"d6b40b8e",null);o.default=a.exports}}]);