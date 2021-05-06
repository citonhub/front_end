(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{828:function(o,e,a){"use strict";a.r(e);var r={data:function(){return{challenges:[],pending:!0,selected:{},languageIcon:[{name:"Web app NodeJs",icon:"lab la-node-js",border_color:"#263238",background:"#ffffff",id:"NodeJs"},{name:"Web app PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:"PHP"},{name:"JavaScript",icon:"lab la-js-square",border_color:"#263238",background:"#ffffff",id:26},{name:"PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:35},{name:"Python 3.81",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:39},{name:"Python for ML(3.7.7)",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:100},{name:"C",icon:"mdi mdi-language-c",border_color:"#263238",background:"#ffffff",id:4},{name:"C++",icon:"mdi mdi-language-cpp",border_color:"#263238",background:"#ffffff",id:11},{name:"Java",icon:"lab la-java",border_color:"#263238",background:"#ffffff",id:25},{name:"C#",icon:"mdi mdi-language-csharp",border_color:"#263238",background:"#ffffff",id:13},{name:"Erlang",icon:"lab la-erlang",border_color:"#263238",background:"#ffffff",id:18},{name:"Kotlin",icon:"mdi mdi-language-kotlin",border_color:"#263238",background:"#ffffff",id:27},{name:"Fortran",icon:"mdi mdi-language-fortran",border_color:"#263238",background:"#ffffff",id:21},{name:"Perl",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:34},{name:"R",icon:"mdi mdi-language-r",border_color:"#263238",background:"#ffffff",id:40},{name:"Ruby",icon:"mdi mdi-language-ruby",border_color:"#263238",background:"#ffffff",id:41},{name:"Go",icon:"mdi mdi-language-go",border_color:"#263238",background:"#ffffff",id:22},{name:"Hashkell",icon:"mdi mdi-language-haskell",border_color:"#263238",background:"#ffffff",id:24},{name:"Lua",icon:"mdi mdi-language-lua",border_color:"#263238",background:"#ffffff",id:28},{name:"Pascal",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:33},{name:"TypeScript",icon:"mdi mdi-language-typescript",border_color:"#263238",background:"#ffffff",id:46},{name:"Rust",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:42},{name:"Swift",icon:"lab la-swift",border_color:"#263238",background:"#ffffff",id:45},{name:"Scala",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:43}]}},props:["source"],methods:{appName:function(o){var e=this.languageIcon.filter((function(e){return o.duel_language_array==e.id.toString()}));return e.length>0?e[0].name:"Web"},imageStyle:function(o,e){if(null==e.background_color){var a="height:100%;width:"+o+"px;background-size:cover;border-top-left-radius:7px;border-bottom-left-radius:7px; background-repeat: no-repeat; ";return null==e.image_name||"0"==e.image_name?a+="background-color:whitesmoke; background-image:url(imgs/background1.jpg);":("default_1"==e.image_name&&(a+="background-color:whitesmoke; background-image:url(/imgs/background3.jpg);"),"default_2"==e.image_name&&(a+="background-color:whitesmoke; background-image:url(/imgs/background1.jpg);"),"default_3"==e.image_name&&(a+="background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);")),a}var r="height:100%;width:"+o+"px;background-size:cover;border-top-left-radius:7px;border-bottom-left-radius:7px; background-repeat: no-repeat; ",n=e.image_name+"."+e.image_extension;return r+="background-color:"+e.background_color+"; background-image:url(/imgs/challenges/"+n+");"},startChallenge:function(o){this.$router.push({path:"/board/challenges/panel/"+o.duel_id+"/description"})},checkDuelStatus:function(o){if(0==o.started)return"Pending";var e=moment(),a=moment(o.duel_terminal_time);return a.diff(e,"seconds")<=0?"Ended":"Ends "+a.fromNow()}}},n=a(4),i=Object(n.a)(r,(function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("div",{staticClass:"px-1"},[a("v-card",{staticClass:"col-12 py-0 px-md-0 px-0 pr-1 pr-md-2 d-flex mb-3 flex-row ",staticStyle:{"border-radius":"7px"},on:{click:function(e){return o.startChallenge(o.source)}}},[a("div",{staticClass:" d-md-block d-none mr-2"},[a("div",{style:o.imageStyle(100,o.source)})]),o._v(" "),a("div",{staticClass:"mr-1 d-block d-md-none"},[a("div",{style:o.imageStyle(65,o.source)})]),o._v(" "),a("div",{staticClass:"text-left d-flex flex-column py-md-3 py-2",staticStyle:{"overflow-x":"hidden",width:"100%"}},[a("div",{staticClass:"pb-1 d-md-block d-none",staticStyle:{"font-size":"14px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o._v(o._s(o.source.title))]),o._v(" "),a("div",{staticClass:"pb-1  d-md-block d-none",staticStyle:{"font-size":"12px","font-family":"BodyFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o._v(o._s(o.source.summary))]),o._v(" "),a("div",{staticClass:"pb-1  d-md-none d-block",staticStyle:{"font-size":"13px","font-family":"MediumFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o._v(o._s(o.source.title))]),o._v(" "),a("div",{staticClass:"pb-1  d-md-none d-block",staticStyle:{"font-size":"11px","font-family":"BodyFont","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[o._v(o._s(o.source.summary))]),o._v(" "),a("div",{staticClass:"d-flex flex-row pr-2",staticStyle:{"align-items":"center","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[a("div",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[o._v(o._s(o.appName(o.source))+" ")]),o._v(" "),a("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"12px"}},[o._v("mdi-record")]),o._v(" "),a("div",{staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[o._v(o._s(o.checkDuelStatus(o.source)))]),o._v(" "),a("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"12px"}},[o._v("mdi-record")]),o._v(" "),a("div",{staticClass:"d-md-block d-none",staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[o._v(o._s(o.source.duel_participants.length)+" Participants ")]),o._v(" "),a("div",{staticClass:"d-md-none d-block",staticStyle:{"font-size":"12px","font-family":"BodyFont"}},[a("v-icon",{staticStyle:{"font-size":"17px"}},[o._v("las la-user-friends")]),o._v(" "+o._s(o.source.duel_participants.length)+" ")],1)],1)]),o._v(" "),a("div")])],1)}),[],!1,null,"b1c080e2",null);e.default=i.exports}}]);