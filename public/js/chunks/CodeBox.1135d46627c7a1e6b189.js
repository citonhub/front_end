(window.webpackJsonp=window.webpackJsonp||[]).push([[42,43],{248:function(t,o,e){"use strict";e(265),e(266),e(267),e(268),e(269),e(244),e(258),e(259),e(270),e(260),e(271),e(272),e(273),e(274),e(261),e(275),e(276),e(277),e(278),e(279),e(257),e(280),e(252),e(281),e(282),e(283),e(256),e(284),e(285),e(286),e(287),e(288),e(289),e(262),e(290)},250:function(t,o,e){var n=e(368);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(25)(n,i);n.locals&&(t.exports=n.locals)},367:function(t,o,e){"use strict";var n=e(250);e.n(n).a},368:function(t,o,e){(t.exports=e(24)(!1)).push([t.i,".codeboxnew[data-v-16c94ce7],\n.pre[data-v-16c94ce7] {\n  width: 100%;\n  margin: 0;\n  height: 100%;\n  display: block;\n  font-size: 13px;\n  line-height: 1.6;\n  word-break: break-all;\n  letter-spacing: 1px !important;\n  word-wrap: break-word;\n  overflow: auto;\n}\n.codeboxnew[data-v-16c94ce7] {\n  height: auto;\n  border-radius: 10px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.codeboxnew[data-v-16c94ce7]::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.codeboxnew[data-v-16c94ce7] {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}",""])},627:function(t,o,e){"use strict";e.r(o);var n=e(255),i=(e(248),{props:["codeContent","filename","codeLanguage","codeViewerType","messageId","color","topMargin","screenType"],components:{codemirror:n.codemirror},computed:{codemirror:function(){return this.$refs.cmEditor.codemirror}},mounted:function(){this.$root.codeboxIsLoading=!1,this.detectchange(this.codeLanguage)},data:function(){return{cmOption:{tabSize:4,foldGutter:!0,filepath:"",styleActiveLine:!0,lineNumbers:!0,line:!0,keyMap:"sublime",mode:"text/html",theme:"base16-dark",scrollbarStyle:"overlay",readOnly:"nocursor",extraKeys:{F11:function(t){t.setOption("fullScreen",!t.getOption("fullScreen"))},Esc:function(t){t.getOption("fullScreen")&&t.setOption("fullScreen",!1)}}},items:["HTML","CSS","JAVASCRIPT","PHP","PYTHON","SQL","VUEJS","C","C++","JAVA","C#","ERLANG","COFFEESCRIPT","LIVESCRIPT","DJANGO","KOTLIN","FOTRAN","MARKDOWN","PERL","R","RUBY"],language:this.codeLanguage,code:this.codeContent}},methods:{onCmCursorActivity:function(t){console.debug("onCmCursorActivity",t)},onCmReady:function(t){console.debug("onCmReady",t)},onCmFocus:function(t){console.debug("onCmFocus",t)},onCmBlur:function(t){console.debug("onCmBlur",t)},showCodeEditor:function(){this.$router.currentRoute.path.indexOf("edit-note")>=0||(this.$root.fullCodeLanguage=this.codeLanguage,this.$root.FullcodeContent=this.codeContent,this.$root.codeFromChat=!0,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/editor"}))},detectchange:function(t){"HTML"==t&&(this.cmOption.mode="text/html"),"CSS"==t&&(this.cmOption.mode="text/css"),"PYTHON(3.8.1)"==t&&(this.cmOption.mode="text/x-python"),"PYTHON For ML(3.7.7)"==t&&(this.cmOption.mode="text/x-python"),"PYTHON(2.7.17)"==t&&(this.cmOption.mode="text/x-python"),"PHP"==t&&(this.cmOption.mode="text/x-php"),"JAVASCRIPT(Node)"==t&&(this.cmOption.mode="text/javascript"),"SQL"==t&&(this.cmOption.mode="text/x-sql"),"C"==t&&(this.cmOption.mode="text/x-csrc"),"C++"==t&&(this.cmOption.mode="text/x-c++src"),"JAVA"==t&&(this.cmOption.mode="text/x-java"),"C#"==t&&(this.cmOption.mode="text/x-csharp"),"ERLANG"==t&&(this.cmOption.mode="text/x-erlang"),"KOTLIN"==t&&(this.cmOption.mode="x-shader/x-fragment"),"FOTRAN"==t&&(this.cmOption.mode="text/x-fortran"),"PERL"==t&&(this.cmOption.mode="text/x-perl"),"R"==t&&(this.cmOption.mode="text/x-rsrc"),"GO"==t&&(this.cmOption.mode="text/x-go"),"HASKELL"==t&&(this.cmOption.mode="text/x-haskell"),"RUBY"==t&&(this.cmOption.mode="text/x-ruby"),"LUA"==t&&(this.cmOption.mode="text/x-lua"),"PASCAL"==t&&(this.cmOption.mode="text/x-pascal"),"RUST"==t&&(this.cmOption.mode="text/x-rustsrc"),"SCALA"==t&&(this.cmOption.mode="text/x-scala"),"SWIFT"==t&&(this.cmOption.mode="text/x-swift"),"TYPESCRIPT"==t&&(this.cmOption.mode="text/javascript")}}}),c=(e(367),e(4)),r=Object(c.a)(i,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"py-2"},[e("div",{staticClass:" codeboxnew"},[e("codemirror",{style:"large"==t.screenType?"font-size:13px; height:190px; overflow-y:hidden !important; overflow-x:hidden !important; ":"font-size:12px; height:190px; overflow-y:hidden !important; overflow-x:hidden !important; ",attrs:{options:t.cmOption},on:{cursorActivity:t.onCmCursorActivity,ready:t.onCmReady,focus:t.onCmFocus,blur:t.onCmBlur},model:{value:t.codeContent,callback:function(o){t.codeContent=o},expression:"codeContent"}}),t._v(" "),e("v-btn",{style:"position:absolute; top:"+t.topMargin+"%; right:3%;z-index:999;",attrs:{icon:""},on:{click:function(o){return o.stopPropagation(),t.showCodeEditor(o)}}},[e("v-icon",{attrs:{color:"#ffffff"}},[t._v("las la-expand")])],1),t._v(" "),e("div",{staticClass:"py-2 px-2 d-flex flex-row",staticStyle:{position:"absolute",width:"100%"}},[e("div",{staticClass:"mr-2"},[e("v-icon",{staticStyle:{"font-size":"19px"},attrs:{color:t.color}},[t._v("las la-code")])],1),t._v(" "),e("div",{staticClass:"ml-3"},[e("span",{style:"color:"+t.color+" ;font-size:12px;"},[t._v(t._s(t.filename))])])])],1)])}),[],!1,null,"16c94ce7",null);o.default=r.exports}}]);