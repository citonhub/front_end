(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{607:function(e,t,a){"use strict";a.r(t);var o,i=a(243),n=a.n(i);a(242);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s={data:function(){return{text:"",everyone:!1,custom:!1,selectJudgeType:0,switch2:!0,switch1:!1,rulesContent:"",titleRule:[function(e){return!!e||"Oh! you missed this."},function(e){return e.length<=50||"Name must be less than 50 characters"}],requiredRule:[function(e){return!!e||"Oh! you missed this."}],summaryRules:[function(e){return!!e||"Oh! you missed this."},function(e){return e.length<=101||"Name must be less than 100 characters"}],max_participantRule:[function(e){return!!e||"Oh! you missed this."},function(e){return!isNaN(parseFloat(e))&&e>=2&&e<=500||"Number has to be between 2 and 500"}],durationRule:[function(e){return!isNaN(parseFloat(e))&&e>=0&&e<=1e3||"Days has to be between 0 and 1000 hours"}],durationRule2:[function(e){return!isNaN(parseFloat(e))&&e>=0&&e<=23.9||"Duration has to be between 0 and 23.9 hours"}],participant:["Individuals","Teams"],searchUsername:"",judgeType:"everyone",JudgesItems:[],Judges:"",preMatchTime:"",Alert:!1,alertMsg:"",programmingLanguage:[],languageIcon:[{name:"Web app NodeJs",icon:"lab la-node-js",border_color:"#263238",background:"#ffffff",id:"NodeJs"},{name:"Web app PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:"PHP"},{name:"JavaScript",icon:"lab la-js-square",border_color:"#263238",background:"#ffffff",id:26},{name:"PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:35},{name:"Python 3.81",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:39},{name:"Python for ML(3.7.7)",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:100},{name:"C",icon:"mdi mdi-language-c",border_color:"#263238",background:"#ffffff",id:4},{name:"C++",icon:"mdi mdi-language-cpp",border_color:"#263238",background:"#ffffff",id:11},{name:"Java",icon:"lab la-java",border_color:"#263238",background:"#ffffff",id:25},{name:"C#",icon:"mdi mdi-language-csharp",border_color:"#263238",background:"#ffffff",id:13},{name:"Erlang",icon:"lab la-erlang",border_color:"#263238",background:"#ffffff",id:18},{name:"Kotlin",icon:"mdi mdi-language-kotlin",border_color:"#263238",background:"#ffffff",id:27},{name:"Fortran",icon:"mdi mdi-language-fortran",border_color:"#263238",background:"#ffffff",id:21},{name:"Perl",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:34},{name:"R",icon:"mdi mdi-language-r",border_color:"#263238",background:"#ffffff",id:40},{name:"Ruby",icon:"mdi mdi-language-ruby",border_color:"#263238",background:"#ffffff",id:41},{name:"Go",icon:"mdi mdi-language-go",border_color:"#263238",background:"#ffffff",id:22},{name:"Hashkell",icon:"mdi mdi-language-haskell",border_color:"#263238",background:"#ffffff",id:24},{name:"Lua",icon:"mdi mdi-language-lua",border_color:"#263238",background:"#ffffff",id:28},{name:"Pascal",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:33},{name:"TypeScript",icon:"mdi mdi-language-typescript",border_color:"#263238",background:"#ffffff",id:46},{name:"Rust",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:42},{name:"Swift",icon:"lab la-swift",border_color:"#263238",background:"#ffffff",id:45},{name:"Scala",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:43}],title:"",summary:"",max_participant:"4",durationValue:"2",description:"",formstate:!1,loading:!1,rulesValue:"",loadingConnection:!1,loadingDelete:!1,durationValueDay:0,durationValueHr:2,input:"",language:"",image:"",imageDefault:0,challengeIsActive:!1}},mounted:function(){this.$root.showTopBar=!1,this.setEditValues()},components:{VPressEditor:function(){return Promise.all([a.e(12),a.e(7)]).then(a.bind(null,655))}},methods:(o={setEditValues:function(){if(0!=this.$root.selectedChallenge.length&&"edit"==this.$route.params.type){this.title=this.$root.selectedChallenge.title,this.durationValue=this.$root.selectedChallenge.duration,this.durationValueHr=this.durationValue%24,this.durationValueDay=(this.durationValue-this.durationValueHr)/24,this.summary=this.$root.selectedChallenge.summary,this.description=this.$root.selectedChallenge.description,this.rulesContent=this.$root.selectedChallenge.rules,this.language=this.$root.selectedChallenge.languages,"PHP"!=this.language&&"NodeJs"!=this.language&&(this.language=parseInt(this.language)),this.judgeType=this.$root.selectedChallenge.judges;var e=this.$root.selectedChallenge.image_name+"."+this.$root.selectedChallenge.image_extension;this.$root.croppedImage="/imgs/challenges/"+e,"Active"==this.checkDuelStatus(this.$root.selectedChallenge)?this.challengeIsActive=!0:this.challengeIsActive=!1}},checkDuelStatus:function(e){if(0==e.started)return"Pending";var t=moment();return moment(e.duel_terminal_time).diff(t,"seconds")<=0?"Ended":"Active"},selectDefaultImg:function(e,t){this.imageDefault="default_"+t,this.$root.croppedImage=e,this.$root.imageExist=!1},handleBlob:function(e){var t=e.split(";"),a=t[0].split(":")[1],o=a.slice(6),i=t[1].split(",")[1];return[this.b64toBlob(i,a),o]},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},crophandler:function(e){var t=this;this.imageDefault=0;var a=e.target;if(a.files&&a.files[0]){var o=new FileReader;o.onload=function(e){t.$root.imagepath=e.target.result,t.imagepath=e.target.result,t.$root.imageExist=!0},o.readAsDataURL(a.files[0]),this.$router.push({path:"/crop-image"})}},enableEvery:function(){this.judgeType="everyone",this.custom=!1},disableEvery:function(){this.judgeType="custom",this.custom="true"}},l(o,"goBack",(function(){this.$router.push({path:"/board/challenges/list"})})),l(o,"setDuration",(function(e){e=24*this.durationValueDay+this.durationValueHr,console.log(e)})),l(o,"showAlert",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;"info"==a&&n.a.info({title:e,timeout:2e3,message:t,zindex:"9999999999",position:"bottomRigh  t",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==a&&n.a.success({title:e,message:t,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==a&&n.a.warning({title:e,timeout:2e3,message:t,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==a&&n.a.error({title:e,message:t,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})})),l(o,"b64toBlob",(function(e,t,a){t=t||"",a=a||512;for(var o=atob(e),i=[],n=0;n<o.length;n+=a){for(var l=o.slice(n,n+a),s=new Array(l.length),r=0;r<l.length;r++)s[r]=l.charCodeAt(r);var c=new Uint8Array(s);i.push(c)}return new Blob(i,{type:t})})),l(o,"createChallenge",(function(){var e=this;if(this.$refs.create.validate()){this.loading=!0;var t=new FormData;if(this.$root.imageExist){var a=this.handleBlob(this.$root.croppedImage);t.append("image",a[0]),t.append("image_ext",a[1])}0!=this.imageDefault&&t.append("image_default",this.imageDefault),this.durationValue=24*this.durationValueDay+parseInt(this.durationValueHr),t.append("title",this.title),t.append("summary",this.summary),t.append("description",this.description),t.append("rules",this.rulesContent),t.append("duration",this.durationValue),t.append("challenge_language",this.language),t.append("judges",this.judgeType),"edit"==this.$route.params.type&&t.append("challengeId",this.$root.selectedChallenge.duel_id),axios.post("/save-challenge",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status){if("edit"==e.$route.params.type)return e.showAlert("Saved"," Your changes has been saved","success"),void(e.loading=!1);e.$root.getLocalStore("user_challenges_"+e.$root.username).then((function(a){if(null!=a){var o=JSON.parse(a);o.unshift(t.data.challenge),e.$root.challengesList=o,e.$root.LocalStore("user_challenges_"+e.$root.username,o)}e.$router.push({path:"/board/challenges/panel/"+t.data.challenge.duel_id+"/description"})}))}})).catch((function(t){e.showAlert("Oops!"," Unable to create challenge","error"),e.loading=!1}))}})),o)},r=a(4),c=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"px-0",staticStyle:{background:"transparent","font-family":"BodyFont"}},[a("div",{staticClass:"col-lg-10 offset-lg-1 py-2 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top",staticStyle:{position:"sticky","z-index":"9999999999",background:"#F5F5FB","border-bottom":"1px solid #c5c5c5"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 py-0 my-0"},[a("h5",[a("v-btn",{attrs:{icon:""},on:{click:e.goBack}},[a("v-icon",[e._v("las la-arrow-left")])],1),e._v(" "),"new"==this.$route.params.type?[e._v("\n                  Create a challenge\n             ")]:e._e(),e._v(" "),"edit"==this.$route.params.type?[e._v("\n                  Edit challenge\n             ")]:e._e()],2)]),e._v(" "),a("div",{staticClass:"col-6 py-0 my-0 text-right"},[a("v-btn",{staticStyle:{"font-size":"12px","text-transform":"none","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{loading:e.loading,small:"",rounded:"",color:"#3C87CD"},on:{click:e.createChallenge}},["new"==this.$route.params.type?[e._v("\n                  Create\n             ")]:e._e(),e._v(" "),"edit"==this.$route.params.type?[e._v("\n                  Save\n             ")]:e._e()],2)],1)])]),e._v(" "),a("div",{staticClass:" px-0 col-12 py-1 pt-2 d-md-none d-block fixed-top d-flex flex-row",staticStyle:{position:"sticky",background:"#F5F5FB","border-bottom":"1px solid #c5c5c5"}},[a("div",{staticClass:"col-8 py-0 my-0 px-0"},[a("div",{staticStyle:{"font-size":"16px","font-family":"HeaderFont"}},[a("v-btn",{attrs:{icon:""},on:{click:e.goBack}},[a("v-icon",[e._v("las la-arrow-left")])],1),e._v(" "),"new"==this.$route.params.type?[e._v("\n                  Create a challenge\n             ")]:e._e(),e._v(" "),"edit"==this.$route.params.type?[e._v("\n                  Edit challenge\n             ")]:e._e()],2)]),e._v(" "),a("div",{staticClass:"col-4 py-0 my-0 text-right px-0"},[a("v-btn",{staticStyle:{"font-size":"12px","text-transform":"none","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{small:"",rounded:"",loading:e.loading,color:"#3C87CD"},on:{click:e.createChallenge}},["new"==this.$route.params.type?[e._v("\n                  Create\n             ")]:e._e(),e._v(" "),"edit"==this.$route.params.type?[e._v("\n                  Save\n             ")]:e._e()],2)],1)]),e._v(" "),a("v-app",{staticClass:"col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-2 ",staticStyle:{background:"transparent","font-family":"BodyFont"}},[a("v-form",{ref:"create",staticClass:"row",model:{value:e.formstate,callback:function(t){e.formstate=t},expression:"formstate"}},[a("div",{staticClass:"col-lg-8  py-1 my-0 px-2"},[a("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{label:"Title",counter:"60","persistent-hint":"","prepend-inner-icon":"las la-trophy",rules:e.titleRule,color:"#3C87CD"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),e._v(" "),a("div",{staticClass:" col-lg-12 py-1 my-0 px-2"},[a("div",{staticClass:"col-lg-8 px-0"},[a("v-textarea",{staticStyle:{"font-size":"13px"},attrs:{filled:"",height:"80px",counter:"100",rules:e.summaryRules,label:"Summary",placeholder:"What is this challenge about?"},model:{value:e.summary,callback:function(t){e.summary=t},expression:"summary"}})],1)]),e._v(" "),a("div",{staticClass:"col-12 py-1 my-0 mt-n3 px-2 pl-3"},[a("span",{staticStyle:{"font-size":"14px"}},[e._v("Cover Image")]),e._v(" "),a("span",{staticClass:"mx-1",staticStyle:{"font-size":"12px",color:"grey"}},[e._v("(give this challenge an identity)")]),a("br"),e._v(" "),a("v-sheet",{staticClass:"py-0  px-0 mt-2 sheetbackImg",style:"background-image:url("+this.$root.croppedImage+");border-radius:10px;cursor:pointer;background-size:cover;",attrs:{elevation:"0",height:"100",width:"120"}},[a("v-sheet",{staticClass:"py-auto px-auto d-flex",staticStyle:{"border-radius":"10px"},attrs:{color:"rgba(15, 33, 36, 0.3)",elevation:"0",height:"100%",width:"100%"}},[a("input",{ref:"settingsimage",staticStyle:{opacity:"0",width:"120px",height:"100px",overflow:"hidden",position:"absolute","z-index":"10"},attrs:{type:"file",id:"settingsimage",accept:"image/x-png,image/jpeg,image/jpg"},on:{change:e.crophandler}}),e._v(" "),a("v-icon",{staticClass:"mx-auto white-text"},[e._v("mdi-camera-plus")])],1)],1),e._v(" "),a("div",{staticClass:"mt-3",staticStyle:{"font-size":"13px",color:"grey"}},[e._v("Or select from defaults")]),e._v(" "),a("div",{staticClass:"d-flex flex-row mt-3"},[a("div",{staticClass:"mr-2",staticStyle:{"border-radius":"10px",height:"60px",width:"60px",cursor:"pointer","background-color":"#c5c5c5","background-image":"url(/imgs/background3.jpg)","background-size":"cover","background-repeat":"no-repeat",border:"1px solid #c5c5c5"},on:{click:function(t){return e.selectDefaultImg("/imgs/background3.jpg",1)}}}),e._v(" "),a("div",{staticClass:"mr-2",staticStyle:{"border-radius":"10px",height:"60px",width:"60px",cursor:"pointer","background-color":"#c5c5c5","background-image":"url(/imgs/background1.jpg)","background-size":"cover","background-repeat":"no-repeat",border:"1px solid #c5c5c5"},on:{click:function(t){return e.selectDefaultImg("/imgs/background1.jpg",2)}}}),e._v(" "),a("div",{staticClass:"mr-2",staticStyle:{"border-radius":"10px",height:"60px",width:"60px",cursor:"pointer","background-color":"#c5c5c5","background-image":"url(/imgs/imgproj2.jpeg)","background-size":"cover","background-repeat":"no-repeat",border:"1px solid #c5c5c5"},on:{click:function(t){return e.selectDefaultImg("/imgs/imgproj2.jpeg",3)}}})])],1),e._v(" "),a("div",{staticClass:" col-lg-12 py-1 my-0 px-2"},[a("div",{staticClass:"col-lg-8 px-0"},[a("v-select",{staticStyle:{"font-size":"13px"},attrs:{label:"Application type",items:e.languageIcon,"item-text":"name",disabled:e.challengeIsActive,"item-value":"id",rules:e.requiredRule,placeholder:"select challenge app type"},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1)]),e._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 px-2 text-left"},[a("span",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[e._v("Description")])]),e._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 px-2 text-left"},[a("v-press-editor",{attrs:{placeholder:"Describe this challenge, its aim and objective"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 px-2 text-left"},[a("span",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[e._v("Rules")])]),e._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 px-2 text-left"},[a("v-press-editor",{attrs:{placeholder:"What are the dos and do not"},model:{value:e.rulesContent,callback:function(t){e.rulesContent=t},expression:"rulesContent"}})],1),e._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 mb-0 px-2 text-left"},[a("span",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[e._v("Who will Judge?")])]),e._v(" "),a("div",{staticClass:"col-lg-12 py-0 my-0 px-2 text-left"},[a("v-chip",{staticClass:"d-inline-block mr-1",style:"everyone"!=e.judgeType?"font-size:13px;cursor:pointer;":"font-size:13px;cursor:pointer;color:white;",attrs:{outlined:"everyone"!=e.judgeType,color:"#3C87CD"},on:{click:e.enableEvery}},[e._v("Everyone")]),e._v(" "),a("v-chip",{staticClass:"d-inline-block mr-1",style:"custom"!=e.judgeType?"font-size:13px;cursor:pointer;":"font-size:13px;cursor:pointer;color:white;",attrs:{outlined:"custom"!=e.judgeType,color:"#3C87CD"},on:{click:e.disableEvery}},[e._v("Custom Judges")])],1),e._v(" "),e.custom?a("div",{staticClass:" col-lg-12 py-1 my-0 px-2"},[a("div",{staticClass:"col-lg-8 px-0"},[a("v-combobox",{staticStyle:{"font-size":"13px"},attrs:{dense:"",label:"Add Judges",counter:"20",rules:e.requiredRule,hint:"Type their username to add","persistent-hint":"",chips:"",multiple:"",color:"#3C87CD"},scopedSlots:e._u([{key:"selection",fn:function(t){return[a("v-chip",e._b({key:JSON.stringify(t.item),staticClass:"my-1",staticStyle:{"font-size":"12px","font-family":"BodyFont"},attrs:{"input-value":t.selected,color:"#3C87CD",dense:"",outlined:"",disabled:t.disabled}},"v-chip",t.attrs,!1),[e._v("\n             \n              "+e._s(t.item.name)+"\n            ")])]}}],null,!1,1600095784)})],1)]):e._e(),e._v(" "),a("div",{staticClass:"col-lg-12 py-1 my-2 mt-4 mb-0 px-2 text-left"},[a("span",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[e._v("Set Duration")])]),e._v(" "),a("div",{staticClass:"col-12 py-2 my-0 px-2"},[a("div",{staticClass:"row py-0 my-0"},[a("div",{staticClass:"col-6 text-center py-0 my-0"},[a("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{disabled:e.challengeIsActive,placeholder:e.$t("duels.days")+"...",label:e.$t("duels.days"),rules:e.durationRule2,type:"tel",dense:"",color:"#3C87CD"},model:{value:e.durationValueDay,callback:function(t){e.durationValueDay=t},expression:"durationValueDay"}})],1),e._v(" "),a("div",{staticClass:"col-6 text-center py-0 my-0"},[a("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:e.$t("duels.hours")+"...",label:e.$t("duels.hours"),disabled:e.challengeIsActive,rules:e.durationRule,type:"tel",dense:"",color:"#3C87CD"},model:{value:e.durationValueHr,callback:function(t){e.durationValueHr=t},expression:"durationValueHr"}})],1)])]),e._v(" "),a("div",{staticClass:"col-12 py-5 my-5"}),e._v(" "),a("div",{staticClass:"col-12 py-5 my-5"})])],1)],1)}),[],!1,null,"fdf4f854",null);t.default=c.exports}}]);