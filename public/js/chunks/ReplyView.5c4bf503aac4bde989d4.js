(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{360:function(t,s,e){var a=e(593);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(25)(a,o);a.locals&&(t.exports=a.locals)},592:function(t,s,e){"use strict";var a=e(360);e.n(a).a},593:function(t,s,e){(t.exports=e(24)(!1)).push([t.i,"\n.msgTextReplynew[data-v-84ec7aa6]{\n  font-size: 13px;\n  color: #4d4d4d;\n}\n",""])},702:function(t,s,e){"use strict";e.r(s);var a=e(262).htmlToText,o={methods:{closeReply:function(){this.$root.showRootReply=!1,this.$root.replyMessage=[],this.$root.is_reply=!1},getReplyMsg:function(t){return a(t,{wordwrap:100})},shortenContent:function(t,s){return t.length>s?t.slice(0,s)+"...":t},languageExtensions:function(t){return"HTML"==t?"html":"CSS"==t?"css":"VUE"==t?"vue":"MD"==t?"md":"PYTHON(3.8.1)"==t||"PYTHON For ML(3.7.7)"==t||"PYTHON(2.7.17)"==t?"py":"PHP"==t?"php":"JAVASCRIPT(Node)"==t||"JAVASCRIPT"==t?"js":"SQL"==t?"sql":"C"==t?"c":"C++"==t?"cpp":"JAVA"==t?"java":"C#"==t?"cs":"ERLANG"==t?"erl":"KOTLIN"==t?"kt":"FOTRAN"==t?"for":"PERL"==t?"pl":"R"==t?"r":"GO"==t?"go":"HASKELL"==t?"hs":"RUBY"==t?"rb":"LUA"==t?"lua":"PASCAL"==t?"pas":"RUST"==t?"rs":"SCALA"==t?"scala":"SWIFT"==t?"swift":"TYPESCRIPT"==t?"ts":void 0}}},i=(e(592),e(4)),l=Object(i.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"px-2"},[e("div",{staticClass:" py-2 px-2  text-left mb-1",staticStyle:{background:"#3C87CD",border:"1px solid transparent","border-radius":"8px"}},[null==this.$root.replyMessage.type?e("div",{staticClass:"col-12 py-1 px-1  text-right"},[e("span",{staticClass:"msgTextReplynew text-left d-block",staticStyle:{color:"white","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},domProps:{innerHTML:t._s(t.getReplyMsg(this.$root.replyMessage.content))}})]):t._e(),t._v(" "),"action"==this.$root.replyMessage.type?e("div",{staticClass:"col-12 py-1 px-1  text-right"},[e("span",{staticClass:"msgTextReplynew text-left d-block",staticStyle:{color:"white","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},domProps:{innerHTML:t._s(t.getReplyMsg(this.$root.replyMessage.content))}})]):t._e(),t._v(" "),"image"==this.$root.replyMessage.type?e("div",{staticClass:"row py-0 my-0"},[e("div",{staticClass:"col-3 py-0 my-0"},[e("v-img",{staticClass:"d-inline-block ",attrs:{width:"50",src:"/imgs/space/"+this.$root.replyMessage.image[0].image_name+"."+this.$root.replyMessage.image[0].image_extension}})],1),t._v(" "),e("div",{staticClass:"col-6 py-1 my-0 text-center px-0"},[this.$root.replyMessage.image.length>1?[e("span",{staticClass:"msgTextReplynew",staticStyle:{color:"white"}},[t._v(t._s(this.$root.replyMessage.image.length)+" Images")])]:[e("span",{staticClass:"msgTextReplynew",staticStyle:{color:"white"}},[t._v(t._s(this.$root.replyMessage.image.length)+" Image")])]],2),t._v(" "),e("div",{staticClass:"col-3 py-0 my-0 text-center px-0"})]):t._e(),t._v(" "),"project"==this.$root.replyMessage.type?e("div",{staticClass:"row py-0 my-0"},[e("div",{staticClass:"col-3 py-0 my-0"},[e("span",{staticClass:"px-1 py-1",staticStyle:{background:"whitesmoke",border:"1px solid transparent","border-radius":"50%"}},[e("v-icon",{attrs:{color:"#3C87CD"}},[t._v("las la-laptop-code")])],1)]),t._v(" "),e("div",{staticClass:"col-6 py-1 my-0 text-center px-0"},[e("span",{staticClass:"msgTextReplynew",staticStyle:{color:"white"}},[t._v(t._s(t.shortenContent(this.$root.replyMessage.project.title,30)))])]),t._v(" "),e("div",{staticClass:"col-3 py-0 my-0 text-center px-0"})]):t._e(),t._v(" "),"video"==this.$root.replyMessage.type?e("div",{staticClass:"row py-0 my-0"},[e("div",{staticClass:"col-3 py-0 my-0 text-center"},[e("span",{staticClass:"px-1 py-1",staticStyle:{background:"whitesmoke",border:"1px solid transparent","border-radius":"50%"}},[e("v-icon",{attrs:{color:"#3C87CD"}},[t._v("las la-video ")])],1)]),t._v(" "),e("div",{staticClass:"col-9 py-0 my-0 text-left px-0"},[e("span",{staticClass:"msgTextReplynew",staticStyle:{color:"white"}},[t._v(t._s(t.shortenContent(this.$root.replyMessage.video.display_name,30)))])])]):t._e(),t._v(" "),"audio"==this.$root.replyMessage.type?e("div",{staticClass:"row py-0 my-0"},[e("div",{staticClass:"col-3 py-0 my-0 text-center"},[e("span",{staticClass:"px-1 py-1",staticStyle:{background:"whitesmoke",border:"1px solid transparent","border-radius":"50%"}},[e("v-icon",{attrs:{color:"#3C87CD"}},[t._v("las la-music ")])],1)]),t._v(" "),e("div",{staticClass:"col-9 py-0 my-0 text-left px-0"},[e("span",{staticClass:"msgTextReplynew",staticStyle:{color:"white"}},[t._v(t._s(t.shortenContent(this.$root.replyMessage.audio.display_name,30)))])])]):t._e(),t._v(" "),"file"==this.$root.replyMessage.type?e("div",{staticClass:"row py-0 my-0"},[e("div",{staticClass:"col-3 py-0 my-0 text-center"},[e("span",{staticClass:"px-1 py-1",staticStyle:{background:"whitesmoke",border:"1px solid transparent","border-radius":"50%"}},[e("v-icon",{attrs:{color:"#3C87CD"}},[t._v("las la-file-alt ")])],1)]),t._v(" "),e("div",{staticClass:"col-9 py-0 my-0 text-left px-0"},[e("span",{staticClass:"msgTextReplynew",staticStyle:{color:"white"}},[t._v(t._s(t.shortenContent(this.$root.replyMessage.file.display_name,30)))])])]):t._e(),t._v(" "),"code"==this.$root.replyMessage.type?e("div",{staticClass:"row py-0 my-0"},[e("div",{staticClass:"col-3 py-0 my-0 text-center"},[e("span",{staticClass:"px-1 py-1",staticStyle:{background:"whitesmoke",border:"1px solid transparent","border-radius":"50%"}},[e("v-icon",{attrs:{color:"#3C87CD"}},[t._v("la la-code")])],1)]),t._v(" "),e("div",{staticClass:"col-9 py-0 my-0 text-left px-0"},[e("span",{staticClass:"msgTextReplynew",staticStyle:{color:"white"}},[t._v(t._s(this.$root.replyMessage.code.name+"."+t.languageExtensions(this.$root.replyMessage.code.language_type)))])])]):t._e(),t._v(" "),e("span",{staticClass:"text-right label d-block ",staticStyle:{color:"white","font-size":"12px"}},[t._v(t._s(this.$root.replyMessage.username))])]),t._v(" "),e("div",{staticStyle:{position:"absolute",height:"auto",width:"auto",right:"2%",top:"-5%",background:"rgba(38, 82, 89,0.6)","border-radius":"50%",padding:"0px","z-index":"99"}},[e("v-btn",{attrs:{icon:""},on:{click:t.closeReply}},[e("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-close mdi-18px")])],1)],1)])}),[],!1,null,"84ec7aa6",null);s.default=l.exports}}]);