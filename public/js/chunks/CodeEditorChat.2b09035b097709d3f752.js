(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{249:function(t,e,o){"use strict";o(269),o(270),o(271),o(272),o(273),o(245),o(261),o(262),o(274),o(263),o(275),o(276),o(277),o(278),o(264),o(279),o(280),o(281),o(282),o(283),o(260),o(284),o(253),o(285),o(286),o(287),o(259),o(288),o(289),o(290),o(291),o(292),o(293),o(265),o(294)},371:function(t,e,o){var i=o(720);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(25)(i,s);i.locals&&(t.exports=i.locals)},719:function(t,e,o){"use strict";var i=o(371);o.n(i).a},720:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,".fileText[data-v-5ea439d8] {\n  font-size: 10px;\n}\n.codeboxnew1[data-v-5ea439d8],\n.pre[data-v-5ea439d8] {\n  width: 100%;\n  margin: 0;\n  display: block;\n  font-size: 14px;\n  line-height: 1.6;\n  word-break: break-all;\n  word-wrap: break-word;\n  overflow: auto;\n}\n.codeboxnew1[data-v-5ea439d8] {\n  height: 100%;\n  border: 1px solid #e6e6e6;\n  position: absolute;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}",""])},807:function(t,e,o){"use strict";o.r(e);var i=o(258);o(249),o(386),o(387),o(388),o(389),o(390),o(391),o(392),o(325);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n={mounted:function(){this.setCodeContent(),this.$root.codeboxComponent=this},components:{codemirror:i.codemirror},computed:{codemirror:function(){return this.$refs.cmEditor.codemirror}},data:function(){return{cmOption:{tabSize:4,foldGutter:!0,filepath:"",NewMsg:"",styleActiveLine:!0,lineNumbers:!0,scrollbarStyle:"overlay",line:!0,autocorrect:!0,keyMap:"sublime",readOnly:"",mode:"text/html",theme:"base16-dark",extraKeys:{F11:function(t){t.setOption("fullScreen",!t.getOption("fullScreen"))},Esc:function(t){t.getOption("fullScreen")&&t.setOption("fullScreen",!1)}}},that:this,selectedLangId:0,items:[{id:0,name:"HTML"},{id:null,name:"CSS"},{id:26,name:"JAVASCRIPT(Node)"},{id:35,name:"PHP"},{id:39,name:"PYTHON(3.8.1)"},{id:100,name:"PYTHON For ML(3.7.7)"},{id:38,name:"PYTHON(2.7.17)"},{id:44,name:"SQL"},{id:4,name:"C"},{id:11,name:"C++"},{id:25,name:"JAVA"},{id:13,name:"C#"},{id:18,name:"ERLANG"},{id:14,name:"COBOL"},{id:27,name:"KOTLIN"},{id:21,name:"FOTRAN"},{id:34,name:"PERL"},{id:40,name:"R"},{id:41,name:"RUBY"},{id:22,name:"GO"},{id:24,name:"HASKELL"},{id:28,name:"LUA"},{id:33,name:"PASCAL"},{id:42,name:"RUST"},{id:43,name:"SCALA"},{id:45,name:"SWIFT"},{id:46,name:"TYPESCRIPT"}],language:this.$root.fullCodeLanguage,code:this.$root.FullcodeContent,showCode:!0,ResultCode:"",showAdminOptions:!1,adminMembers:[],recheckCodeBox:!0}},methods:{muteAudio:function(){this.$root.localAudioMuted=!0,this.$root.audioconnection.attachStreams[0].mute("audio")},unmuteAudio:function(){this.$root.localAudioMuted=!1,this.$root.audioconnection.attachStreams[0].unmute("audio")},onCmCursorActivity:function(t){console.debug("onCmCursorActivity",t)},makeUserMaster:function(t){var e=this;this.checkIfisOwner()&&axios.post("/make-user-master",{memberId:t.memberId,space_id:this.$root.selectedSpace.space_id}).then((function(t){200==t.status&&(e.adminMembers.forEach((function(t){t.master_user=!1})),e.adminMembers.map((function(e){e.memberId==t.data&&(e.master_user=!0)})),e.$root.selectedSpaceMembers.forEach((function(t){t.master_user=!1})),e.$root.selectedSpaceMembers.map((function(e){e.memberId==t.data&&(e.master_user=!0)})),e.setCodeContent(),e.liveChanges(t.data,"new_master"))})).catch((function(t){}))},setNewUser:function(t){this.adminMembers.forEach((function(t){t.master_user=!1})),this.adminMembers.map((function(e){e.memberId==t&&(e.master_user=!0)})),this.$root.selectedSpaceMembers.forEach((function(t){t.master_user=!1})),this.$root.selectedSpaceMembers.map((function(e){e.memberId==t&&(e.master_user=!0)})),this.setCodeContent(),this.$root.newMasterId=null},updateCodeMaster:function(){var t=this,e=null;e=setInterval((function(){0==t.$root.codeIsLive&&clearInterval(e),null!=t.$root.newMasterId&&t.setNewUser(t.$root.newMasterId)}),1e3)},showActiveUsers:function(){this.$root.showMemberBoard=!0,this.$router.push({path:"/channels/"+this.$root.selectedSpace.space_id+"/live_session"})},checkIfMaster:function(){var t=this,e=this.$root.selectedSpaceMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return 0!=e.length&&e[0].master_user},checkIfUser:function(t){return t==this.$root.user_temp_id},setCodeContent:function(){var t=this.checkIfMaster();this.$root.codeIsLive&&!t&&this.$root.fromLiveSession?(this.cmOption.readOnly="nocursor",this.$root.selfStopTrigger=!1,this.code=this.$root.FullcodeContent,this.language=this.$root.fullCodeLanguage,this.detectchange(this.$root.fullCodeLanguage),this.$root.liveShowCode?this.showCode=!0:(this.showCode=!1,this.ResultCode=this.$root.CodeResult)):(this.cmOption.readOnly=void 0,this.code=this.$root.FullcodeContent,this.language=this.$root.fullCodeLanguage,this.detectchange(this.$root.fullCodeLanguage))},checkIfisOwner:function(){var t=this,e=this.$root.selectedSpaceMembers.filter((function(e){return e.user_id==t.$root.user_temp_id}));return 0!=e.length&&e[0].is_admin},returnToCode:function(){this.showCode=!0;var t=this.checkIfisOwner();this.$root.codeIsLive&&t&&this.liveChanges(!0,"returnToCode")},copyText:function(){var t,e;t=this.code,(e=document.createElement("textarea")).value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$root.chatComponent.showAlert("Copied!","Copied to clipboard","success")},showAlert:function(t,e){this.$root.AlertRoot=!0,this.$root.AlertMsgRoot=e;var o=this;setTimeout((function(){o.$root.AlertRoot=!1}),t)},goBack:function(){this.$root.fromLiveSession=!1,window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$root.chatComponent.chatInnerConent=""},makeUUID:function(){return"id"+Math.random().toString(16).slice(2)},makeMessage:function(t,e){var o={content:null,created_at:moment().subtract(1,"hours"),is_reply:"false",message_id:this.makeUUID(),id:this.makeUUID(),replied_message:[],index_count:this.$root.returnLastIndex()+1,replied_message_id:null,showReply:!1,showDate:null,loading:!0,progressValue:0,space_id:this.$root.selectedSpace.space_id,tagged:!1,type:t,user_id:this.$root.user_temp_id,username:this.$root.username,video:{},audio:{},code:{},image:{},file:{}};return"image"==t&&(o.image=e),"video"==t&&(o.video=e),"audio"==t&&(o.audio=e),"code"==t&&(o.code=e),"file"==t&&(o.file=e),o},sendMessage:function(){this.$root.NewMsg=this.makeMessage("code",[]),this.$root.Messages.push(this.$root.NewMsg),this.$root.spaceFullData.messages=this.$root.Messages,this.$root.LocalStore("full_"+this.$root.selectedSpace.space_id+this.$root.username,this.$root.spaceFullData),this.$root.scrollToBottom();var t={content:"",space_id:this.$root.selectedSpace.space_id,is_reply:this.$root.is_reply,current_user:JSON.stringify(this.$root.SpaceUsers),replied_message_id:this.$root.replyMessage.message_id,attachment_type:"code",code:this.code,language_type:this.language,file_name:"index",temp_id:this.$root.NewMsg.message_id,device_id:this.$root.userDeviceId};this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id,this.$root.NewMsg),this.$root.sendCodeMessage(t),this.goBack()},onCmReady:function(t){t.on("keypress",(function(){t.showHint()})),console.debug("onCmReady",t)},onCmFocus:function(t){console.debug("onCmFocus",t)},onCmBlur:function(t){console.debug("onCmBlur",t)},onCmCodeChange:function(t){this.liveChanges(t,"typing")},liveChanges:function(t,e){this.$root.codeIsLive&&this.$root.dataconnection.send({action:e,data:t,space_id:this.$root.selectedSpace.space_id})},runCode:function(){this.showCode=!1,this.$root.liveShowCode=!1,0==this.selectedLangId||"HTML"==this.language?(this.ResultCode=this.code,this.sendCodeRunning()):(this.ResultCode="sending to sandbox...",this.runCodeOnSandbox(),this.sendCodeRunning())},sendCodeRunning:function(){var t=this.checkIfisOwner();this.$root.codeIsLive&&t&&this.liveChanges(this.ResultCode,"codeRun")},checkResponse:function(t){var e=this;axios.post("/check-for-submission",{token:t,langId:e.selectedLangId}).then((function(t){200==t.status&&("Accepted"==t.data[0].status.description?e.ResultCode=t.data[0].stdout:"In Queue"==t.data[0].status.description?(e.ResultCode="In Queue...",e.checkResponse(t.data[0].token)):"Processing"==t.data[0].status.description?(e.ResultCode="Processing...",e.checkResponse(t.data[0].token)):e.ResultCode=t.data[0].stdout+"\n Error: \n"+t.data[0].stderr,e.$root.codeBoxOpened,e.sendCodeRunning())})).catch((function(t){e.ResultCode="An issue occured,unable to run on sandbox...",e.sendCodeRunning()}))},runCodeOnSandbox:function(){var t=this;axios.post("/run-code-on-sandbox",{langId:this.selectedLangId,code:this.code,messageId:77}).then((function(e){if(200==e.status){var o=e.data[0].token;"Accepted"==e.data[0].status.description?t.ResultCode=e.data[0].stdout:"In Queue"==e.data[0].status.description?(t.ResultCode="In Queue...",t.checkResponse(o)):"Processing"==e.data[0].status.description?(t.ResultCode="Processing...",t.checkResponse(o)):t.ResultCode=e.data[0].stdout+"\n Error: \n"+e.data[0].stderr,t.sendCodeRunning()}})).catch((function(e){t.ResultCode="An issue occured,unable to run on sandbox...",t.sendCodeRunning()}))},detectchange:function(t){var e="";if("object"==s(t))e=t.name,this.selectedLangId=t.id;else{e=t;var o=this.items.filter((function(e){return e.name==t}));0!=o[0].length&&(this.selectedLangId=o[0].id)}var i=this.checkIfisOwner();this.$root.codeIsLive&&i&&this.liveChanges(e,"codeChange"),this.$root.fullCodeLanguage=e,"HTML"==e&&(this.cmOption.mode="text/html"),"CSS"==e&&(this.cmOption.mode="text/css"),"PYTHON(3.8.1)"==e&&(this.cmOption.mode="text/x-python",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='print("hello, world")')),"PYTHON For ML(3.7.7)"==e&&(this.cmOption.mode="text/x-python",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='import mlxtend\nimport numpy\nimport pandas\nimport scipy\nimport sklearn\n\nprint("hello, world")')),"PYTHON(2.7.17)"==e&&(this.cmOption.mode="text/x-python",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='print("hello, world")')),"PHP"==e&&(this.cmOption.mode="text/x-php",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='<?php \n print("hello, world\n"); \n ?>')),"JAVASCRIPT(Node)"==e&&(this.cmOption.mode="text/javascript",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='console.log("hello, world");')),"SQL"==e&&(this.cmOption.mode="text/x-sql",this.$root.codeIsLive||this.$root.codeFromChat||(this.code=" SELECT \n   Name, COUNT(*) AS num_albums \n FROM artists JOIN albums \n ON albums.ArtistID = artists.ArtistID \n GROUP BY Name \n ORDER BY num_albums DESC \n LIMIT 4; ")),"C"==e&&(this.cmOption.mode="text/x-csrc",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='#include <stdio.h> \n                                         \n int main(void) { \n     printf("hello, world\n"); \n     return 0; \n }')),"C++"==e&&(this.cmOption.mode="text/x-c++src",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='#include <iostream>  \n                                            \n int main() {    \n     std::cout << "hello, world" << std::endl;  \n     return 0;  \n }')),"JAVA"==e&&(this.cmOption.mode="text/x-java",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='public class Main { \n    public static void main(String[] args) { \n       System.out.println("hello, world"); \n    } \n }')),"C#"==e&&(this.cmOption.mode="text/x-csharp",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='public class Hello { \n     public static void Main() { \n        System.Console.WriteLine("hello, world"); \n    } \n }')),"ERLANG"==e&&(this.cmOption.mode="text/x-erlang",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='main(_) -> \n    io:fwrite("hello, world\n").')),"KOTLIN"==e&&(this.cmOption.mode="x-shader/x-fragment",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='fun main() { \n    println("hello, world") \n }')),"FOTRAN"==e&&(this.cmOption.mode="text/x-fortran",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='program main \n    print *, "hello, world" \n end')),"PERL"==e&&(this.cmOption.mode="text/x-perl",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='my $name = <STDIN>; \n print "hello, $name"')),"R"==e&&(this.cmOption.mode="text/x-rsrc",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='cat("hello, world\n")')),"GO"==e&&(this.cmOption.mode="text/x-go",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='package main \n                            \n import "fmt" \n                         \n func main() { \n    fmt.Println("hello, world") \n }')),"HASKELL"==e&&(this.cmOption.mode="text/x-haskell",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='main = putStrLn "hello, world"')),"RUBY"==e&&(this.cmOption.mode="text/x-ruby",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='puts "hello, world"')),"LUA"==e&&(this.cmOption.mode="text/x-lua",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='print("hello, world")')),"PASCAL"==e&&(this.cmOption.mode="text/x-pascal",this.$root.codeIsLive||this.$root.codeFromChat||(this.code="program Hello; \n begin  \n    writeln ('hello, world') \n end. \n ")),"RUST"==e&&(this.cmOption.mode="text/x-rustsrc",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='fn main() { \n     println!("hello, world"); \n }')),"SCALA"==e&&(this.cmOption.mode="text/x-scala",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='object Main {  \n    def main(args: Array[String]) = {  \n       val name = scala.io.StdIn.readLine()  \n      println("hello, "+ name)  \n    } \n }')),"SWIFT"==e&&(this.cmOption.mode="text/x-swift",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='import Foundation \n let name = readLine() \n print("hello, (name!)")')),"TYPESCRIPT"==e&&(this.cmOption.mode="text/javascript",this.$root.codeIsLive||this.$root.codeFromChat||(this.code='console.log("hello, world");')),this.$root.codeFromChat=!1}}},r=(o(719),o(4)),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.showCode?o("div",{staticStyle:{position:"absolute",height:"100%",width:"100%","overflow-y":"hidden",left:"0",top:"0%"}},[o("div",{staticClass:"col-12 py-1 my-0 fixed-top px-0 px-md-2",staticStyle:{position:"sticky",background:"white"}},[o("div",{staticClass:"col-12 py-0 my-0 px-1 d-flex flew-row"},[o("v-btn",{staticClass:"mr-1",attrs:{icon:""},on:{click:t.goBack}},[o("v-icon",[t._v("mdi-close mdi-18px")])],1),t._v(" "),o("div",{staticStyle:{width:"100%"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"browser-default custom-select",staticStyle:{"font-size":"14px !important"},attrs:{placeholder:"select language"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.language=e.target.multiple?o:o[0]},function(e){return t.detectchange(t.language)}]}},t._l(t.items,(function(e,i){return o("option",{key:i,domProps:{value:e.name}},[t._v(t._s(e.name))])})),0)]),t._v(" "),o("v-btn",{staticClass:"mx-1 ml-2 mt-2",attrs:{"x-small":"",color:"#3C87CD "},on:{click:t.sendMessage}},[o("span",{staticStyle:{color:"#ffffff","font-weight":"bolder","font-size":"10px"}},[t._v("send")])]),t._v(" "),t.that.$root.codeIsLive?t._e():o("v-btn",{staticClass:"mx-1",attrs:{icon:""},on:{click:t.copyText}},[o("v-icon",[t._v("las la-copy")])],1),t._v(" "),t.that.$root.codeIsLive?o("v-btn",{staticClass:"mx-1",attrs:{icon:""},on:{click:function(e){return t.showActiveUsers()}}},[o("v-badge",{attrs:{dot:"",color:"green"}},[o("v-icon",[t._v("las la-user-friends ")])],1)],1):t._e()],1)]),t._v(" "),o("div",{staticClass:"col-12 py-0 my-0",staticStyle:{position:"absolute",height:"95.5%",width:"100%","overflow-y":"hidden","overflow-x":"hidden"}},[o("div",{staticClass:"row my-0 py-0 px-0 "},[o("div",{staticClass:"codeboxnew1"},[o("codemirror",{staticStyle:{height:"100%"},attrs:{options:t.cmOption},on:{cursorActivity:t.onCmCursorActivity,ready:t.onCmReady,focus:t.onCmFocus,blur:t.onCmBlur,input:t.onCmCodeChange},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),t._v(" "),o("textarea",{attrs:{type:"hidden",id:"codeBoxContent"},domProps:{value:t.code}})])]),t._v(" "),t.that.$root.codeIsLive?o("span",{staticStyle:{position:"absolute",top:"85%",left:"5%","z-index":"1000"}},[this.$root.localAudioMuted?o("v-btn",{staticClass:"d-inline-block ",attrs:{small:"",fab:""},on:{click:t.unmuteAudio}},[o("v-icon",[t._v("mdi-microphone mdi-18px")])],1):o("v-btn",{staticClass:"d-inline-block sliderfullBtn",attrs:{color:"#3C87CD",small:"",fab:""},on:{click:t.muteAudio}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-microphone mdi-18px")])],1)],1):t._e(),t._v(" "),o("span",{staticClass:"d-inline-block d-md-none",staticStyle:{position:"absolute",top:"85%",right:"5%","z-index":"1000"}},[null!=this.selectedLangId?o("v-btn",{attrs:{color:"#3C87CD",small:"",fab:""},on:{click:t.runCode}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-play")])],1):t._e()],1),t._v(" "),o("span",{staticClass:"d-none d-md-inline-block",staticStyle:{position:"absolute",top:"86%",right:"3%","z-index":"1000"}},[null!=this.selectedLangId?o("v-btn",{attrs:{color:"#3C87CD",fab:""},on:{click:t.runCode}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-play")])],1):t._e()],1)]):o("div",{staticStyle:{position:"absolute",height:"100%",width:"100%","overflow-y":"hidden",left:"0",top:"0%",background:"white"}},[o("div",{staticClass:"col-12 py-0 my-0 fixed-top",staticStyle:{position:"sticky",background:"white","border-bottom":"2px solid #3C87CD"}},[o("div",{staticClass:"row py-1 my-0 px-1"},[o("div",{staticClass:"col-3 py-0 my-0 text-left px-1"},[o("v-btn",{attrs:{icon:"",color:"#3C87CD"},on:{click:t.goBack}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"col-3 py-1 my-0 px-2 text-right"},[o("v-btn",{attrs:{"x-small":"",color:"#3C87CD "},on:{click:t.sendMessage}},[o("span",{staticStyle:{color:"#ffffff","font-weight":"bolder","font-size":"10px"}},[t._v("send")])])],1)])]),t._v(" "),0==t.selectedLangId?o("iframe",{staticStyle:{border:"0",height:"91%",position:"absolute",width:"100%",left:"0",top:"6%"},attrs:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",srcdoc:t.ResultCode}}):o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ResultCode,expression:"ResultCode"}],staticClass:"px-2 py-2",staticStyle:{border:"0",background:"whitesmoke",height:"95%",position:"absolute",width:"100%",left:"0",top:"6%","font-size":"14px"},attrs:{readonly:""},domProps:{value:t.ResultCode},on:{input:function(e){e.target.composing||(t.ResultCode=e.target.value)}}}),t._v(" "),o("span",{staticClass:"d-inline-block d-md-none",staticStyle:{position:"absolute",top:"85%",right:"5%","z-index":"1000"}},[o("v-btn",{attrs:{color:"#3C87CD",small:"",fab:""},on:{click:t.returnToCode}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-xml")])],1)],1),t._v(" "),o("span",{staticClass:"d-none d-md-inline-block",staticStyle:{position:"absolute",top:"86%",right:"3%","z-index":"1000"}},[o("v-btn",{attrs:{color:"#3C87CD",fab:""},on:{click:t.returnToCode}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("mdi-xml")])],1)],1)]),t._v(" "),t.showAdminOptions?o("div",{staticClass:"col-md-8 offset-md-2  col-lg-6 offset-lg-3 py-2 my-0 px-0 d-flex ",staticStyle:{position:"fixed",height:"100%",background:"rgba(38, 82, 89,0.5)","overflow-y":"hidden","overflow-x":"hidden",left:"0%",top:"0%","align-items":"center","justify-content":"center","z-index":"99999"},on:{click:function(e){t.showAdminOptions=!1}}},[o("div",{staticClass:"mx-auto pb-2",staticStyle:{position:"absolute",height:"auto",width:"90%",top:"30%",left:"5%","overflow-y":"hidden","overflow-x":"hidden"},on:{click:function(e){e.stopPropagation(),t.showAdminOptions=!0}}},[o("v-card",{staticClass:"py-2 px-1",staticStyle:{"border-radius":"10px"},attrs:{height:"auto"}},[o("div",{staticClass:"text-center"},[o("h6",[t._v("Admin")])]),t._v(" "),t._l(t.adminMembers,(function(e,i){return o("v-card",{key:i,staticClass:"text-center py-2",staticStyle:{"border-bottom":"1px solid #c5c5c5","border-radius":"0px"},attrs:{tile:"",flat:"",color:e.master_user?"#b7dbe1":"#ffffff"},on:{click:function(o){return o.stopPropagation(),t.makeUserMaster(e)}}},[t.checkIfUser(e.user_id)?o("span",{staticStyle:{"font-size":"13px"}},[t._v("You")]):o("span",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.username))])])}))],2)],1)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6 py-0 my-0 d-flex px-0",staticStyle:{"align-items":"center","justify-content":"center"}},[e("span",{staticStyle:{"font-size":"13px",color:"#3C87CD","font-family":"MediumFont"}},[this._v("Page Loader")])])}],!1,null,"5ea439d8",null);e.default=a.exports}}]);