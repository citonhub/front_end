(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{330:function(t,e,o){var i=o(526);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(25)(i,a);i.locals&&(t.exports=i.locals)},525:function(t,e,o){"use strict";var i=o(330);o.n(i).a},526:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.sideBar[data-v-e1cd21ec]:hover{\n     \n      border-bottom:4px solid #3C87CD !important;\n      cursor: pointer;\n}\n.scroller[data-v-e1cd21ec]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-e1cd21ec]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n",""])},622:function(t,e,o){"use strict";o.r(e);var i=o(243),a=o.n(i),l=(o(242),{data:function(){return{selectedTab:"",that:this,currentChallenge:"",loadingChallenge:!1,TimerValue:"00 : 00 : 00 : 00",countDownDate:"",loadingStater:!1,loadingJoinAction:!1,languageIcon:[{name:"Web app NodeJs",icon:"lab la-node-js",border_color:"#263238",background:"#ffffff",id:"NodeJs"},{name:"Web app PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:"PHP"},{name:"JavaScript",icon:"lab la-js-square",border_color:"#263238",background:"#ffffff",id:26},{name:"PHP",icon:"lab la-php",border_color:"#263238",background:"#ffffff",id:35},{name:"Python 3.81",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:39},{name:"Python for ML(3.7.7)",icon:"lab la-python",border_color:"#263238",background:"#ffffff",id:100},{name:"C",icon:"mdi mdi-language-c",border_color:"#263238",background:"#ffffff",id:4},{name:"C++",icon:"mdi mdi-language-cpp",border_color:"#263238",background:"#ffffff",id:11},{name:"Java",icon:"lab la-java",border_color:"#263238",background:"#ffffff",id:25},{name:"C#",icon:"mdi mdi-language-csharp",border_color:"#263238",background:"#ffffff",id:13},{name:"Erlang",icon:"lab la-erlang",border_color:"#263238",background:"#ffffff",id:18},{name:"Kotlin",icon:"mdi mdi-language-kotlin",border_color:"#263238",background:"#ffffff",id:27},{name:"Fortran",icon:"mdi mdi-language-fortran",border_color:"#263238",background:"#ffffff",id:21},{name:"Perl",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:34},{name:"R",icon:"mdi mdi-language-r",border_color:"#263238",background:"#ffffff",id:40},{name:"Ruby",icon:"mdi mdi-language-ruby",border_color:"#263238",background:"#ffffff",id:41},{name:"Go",icon:"mdi mdi-language-go",border_color:"#263238",background:"#ffffff",id:22},{name:"Hashkell",icon:"mdi mdi-language-haskell",border_color:"#263238",background:"#ffffff",id:24},{name:"Lua",icon:"mdi mdi-language-lua",border_color:"#263238",background:"#ffffff",id:28},{name:"Pascal",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:33},{name:"TypeScript",icon:"mdi mdi-language-typescript",border_color:"#263238",background:"#ffffff",id:46},{name:"Rust",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:42},{name:"Swift",icon:"lab la-swift",border_color:"#263238",background:"#ffffff",id:45},{name:"Scala",icon:"las la-code",border_color:"#263238",background:"#ffffff",id:43}],selectLangValue:[],languageData:[]}},mounted:function(){this.setPage(),this.$root.challengePanelComponent=this,this.$root.selectedChallenge=[],this.fetchChallenge()},methods:{shareChallenge:function(){this.$root.shareLink="https://www.citonhub.com/link/challenge/"+this.$route.params.challenge_id,this.$root.shareText="Check out this challenge on Citonhub",this.$root.infoText="Let others know about this challenge",this.$root.alertComponent=this,this.$root.showInvitation=!0},getChallengeLanguages:function(){for(var t=this,e=this.$root.selectedChallenge.languages.split(","),o=[],i=function(i){var a=t.languageIcon.filter((function(t){return t.id==e[i]}));a.length>0&&o.push(a[0])},a=0;a<e.length;a++)i(a);this.languageData=o},goToPanel:function(){var t=this.$root.selectedChallenge.participant_data.project_slug;this.$root.panelFromChallenges=!0,this.$router.push({path:"/board/projects/panel/"+t})},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;"info"==o&&a.a.info({title:t,timeout:2e3,message:e,zindex:"9999999999",position:"bottomRigh  t",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==o&&a.a.success({title:t,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==o&&a.a.warning({title:t,timeout:2e3,message:e,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==o&&a.a.error({title:t,timeout:2e3,message:e,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},editChallenge:function(){this.$router.push({path:"/board/challenges/create/edit"})},showResults:function(t){this.$router.push({path:"/board/challenges/panel/"+this.$route.params.challenge_id+"/results/"+t})},goToProfile:function(t){this.$root.selectedUsername=t,this.$router.push({path:"/profile-view/"+t})},joinChallenge:function(t){var e=this;axios.post("/join-challenge",{duel_id:this.$route.params.challenge_id,project_slug:t.project_slug,panel_id:t.panel_id}).then((function(o){if(200==o.status){e.loadingJoinAction=!1,e.$root.selectedChallenge.user_participating=!0,e.$root.selectedChallenge.participant_data=o.data.participant,e.$root.LocalStore("challenge_data_"+e.$route.params.challenge_id+e.$root.username,e.$root.selectedChallenge),e.$root.getLocalStore("user_projects_"+e.$root.username).then((function(o){if(null!=o){var i=JSON.parse(o);e.$root.projectList=i,e.$root.projectList.user_projects.unshift(t),e.$root.LocalStore("user_projects_"+e.$root.username,e.$root.projectList)}})),e.loadingJoinAction=!1;e.$root.selectedChallenge.participant_data.project_slug;e.$root.panelFromChallenges=!0,e.$router.push({path:"/board/projects/panel/"+t.project_slug})}})).catch((function(t){}))},updateChallenge:function(){var t=this;axios.get("/fetch-challenge-data/"+this.$route.params.challenge_id).then((function(e){200==e.status&&(t.$root.LocalStore("challenge_data_"+t.$route.params.challenge_id+t.$root.username,e.data[0]),t.$root.selectedChallenge=e.data[0])})).catch((function(t){}))},createProject:function(t){var e=this;this.loadingJoinAction=!0,this.$root.showLanguageOption=!1,axios.post("/create-project",{app_type:"Multiple-pages",title:this.$root.selectedChallenge.title,panel_language:t.id,language_name:t.name.toUpperCase()}).then((function(t){200==t.status&&e.joinChallenge(t.data.project)})).catch((function(t){e.loadingJoinAction=!1}))},startChallenge:function(){var t=this;this.loadingStater=!0,axios.post("/start-challenge",{duelId:this.$route.params.challenge_id}).then((function(e){200==e.status&&t.reloadChallenge()})).catch((function(t){}))},reloadChallenge:function(){var t=this;axios.get("/fetch-challenge-data/"+this.$route.params.challenge_id).then((function(e){if(200==e.status){t.$root.LocalStore("challenge_data_"+t.$route.params.challenge_id+t.$root.username,e.data[0]),t.$root.selectedChallenge=e.data[0],t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime();var o=t.checkDuelStatus(t.$root.selectedChallenge);t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime(),"Active"==o&&(t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime()),t.countDownTimer(),t.loadingStater=!1}})).catch((function(t){}))},fetchChallenge:function(){var t=this;this.loadingChallenge=!0,this.$root.getLocalStore("challenge_data_"+this.$route.params.challenge_id+this.$root.username).then((function(e){if(null!=e){var o=JSON.parse(e);t.$root.selectedChallenge=o,t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime();var i=t.checkDuelStatus(t.$root.selectedChallenge);t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime(),"Active"==i&&(t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime()),t.countDownTimer(),t.loadingChallenge=!1,t.getChallengeLanguages(),t.updateChallenge()}else axios.get("/fetch-challenge-data/"+t.$route.params.challenge_id).then((function(e){if(200==e.status){t.$root.LocalStore("challenge_data_"+t.$route.params.challenge_id+t.$root.username,e.data[0]),t.$root.selectedChallenge=e.data[0],t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime();var o=t.checkDuelStatus(t.$root.selectedChallenge);t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime(),"Active"==o&&(t.countDownDate=new Date(t.$root.selectedChallenge.duel_terminal_time).getTime()),t.countDownTimer(),t.getChallengeLanguages(),t.loadingChallenge=!1}})).catch((function(e){t.loadingChallenge=!1}))}))},knowDuelStatus:function(t){var e=this.checkDuelStatus(t);return"Active"==e||"Pending"==e},setPage:function(){this.$router.currentRoute.path.indexOf("description")>=0&&(this.selectedTab="description"),this.$router.currentRoute.path.indexOf("rules")>=0&&(this.selectedTab="rules"),this.$router.currentRoute.path.indexOf("judges")>=0&&(this.selectedTab="judges"),this.$router.currentRoute.path.indexOf("leaderboard")>=0&&(this.selectedTab="leaderboard"),this.$router.currentRoute.path.indexOf("discussion")>=0&&(this.selectedTab="discussion")},countDownTimer:function(){var t=this,e=setInterval((function(){var o=(new Date).getTime(),i=t.countDownDate-o,a=Math.floor(i/864e5),l=Math.floor(i%864e5/36e5),n=Math.floor(i%36e5/6e4),s=Math.floor(i%6e4/1e3);a<=9&&(a="0"+a),l<=9&&(l="0"+l),n<=9&&(n="0"+n),s<=9&&(s="0"+s),t.TimerValue=a+" : "+l+" : "+n+" : "+s,i<0&&(clearInterval(e),t.TimerValue="00 : 00 : 00 : 00")}),1e3)},goToPage:function(t){if("channel"==t)return this.$root.autoOpenChat=!0,this.$root.autoOpenChatId=this.$root.selectedChallenge.channel_id,void this.$router.push({path:"/channels"});this.$router.push({path:"/board/challenges/panel/"+this.$route.params.challenge_id+"/"+t}),this.selectedTab=t},goBack:function(){this.$router.push({path:"/board/challenges/list"})},imageStyleUser:function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";return o+="background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var i="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ",a=e.image_name+"."+e.image_extension;return i+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/thumbnails/"+a+");"},imageStyle:function(t,e,o){var i="";if(null==e.background_color)return i="large"==o?"position:absolute;height:"+t+";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5; background-size: cover; border-top-left-radius:6px;border-top-right-radius:6px;background-repeat: no-repeat;":"position:absolute;height:"+t+";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;background-size: cover; border-radius:0px;background-repeat: no-repeat;",null==e.image_name||"0"==e.image_name?i+="background-color:#ffffff; background-image:url(imgs/background1.jpg);":("default_1"==e.image_name&&(i+="background-color:#ffffff; background-image:url(/imgs/background3.jpg);"),"default_2"==e.image_name&&(i+="background-color:#ffffff; background-image:url(/imgs/background1.jpg);"),"default_3"==e.image_name&&(i+="background-color:#ffffff; background-image:url(/imgs/imgproj2.jpeg);")),i;i="large"==o?"position:absolute;height:"+t+";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5; background-size: cover; border-top-left-radius:6px;border-top-right-radius:6px;background-repeat: no-repeat;":"position:absolute;height:"+t+";top:0; left:0;width:100%;border-bottom:1px solid #c5c5c5;background-size: cover; border-radius:0px;background-repeat: no-repeat;";var a=e.image_name+"."+e.image_extension;return i+="background-color:"+e.background_color+"; background-image:url(/imgs/challenges/thumbnails/"+a+");"},checkDuelStatus:function(t){if(0==t.started)return"Pending";var e=moment();return moment(t.duel_terminal_time).diff(e,"seconds")<=0?"Ended":"Active"}}}),n=(o(525),o(4)),s=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"col-lg-10 offset-lg-2 py-0 px-0",staticStyle:{position:"fixed",height:"88%",left:"0",top:"10%","z-index":"9999999999999999","overflow-y":"auto"}},[o("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-block d-none py-0 px-0",staticStyle:{position:"absolute",left:"0%",top:"0%",height:"98%",background:"#ffffff",border:"1px solid #c5c5c5","border-radius":"6px"}},[this.$root.selectedChallenge!=[]?[o("div",{style:t.imageStyle("35%",this.$root.selectedChallenge,"large")},[o("div",{staticClass:"d-flex flex-column",staticStyle:{position:"absolute",height:"100%",width:"100%",top:"0",left:"0",background:"rgba(27, 27, 30, 0.5)","border-top-left-radius":"6px","border-top-right-radius":"6px"}},[o("div",{staticClass:"d-flex flex-row px-2 pt-2 ",staticStyle:{height:"30%","z-index":"99999999999999999 !important"}},[o("v-btn",{staticClass:"mr-2 mt-2",staticStyle:{"z-index":"9999999999999999 !important"},attrs:{icon:""},on:{click:t.goBack}},[o("v-icon",{staticStyle:{"font-size":"25px",color:"#ffffff"}},[t._v("las la-arrow-left")])],1),t._v(" "),o("div",{staticClass:"d-flex flex-column pt-1"},[o("div",{staticStyle:{"font-size":"18px","font-family":"HeaderFont",color:"#ffffff"}},[t._v(t._s(this.$root.selectedChallenge.title)+" "),this.$root.username==this.$root.selectedChallenge.username?o("v-btn",{attrs:{icon:""},on:{click:t.editChallenge}},[o("v-icon",{attrs:{color:"#ffffff"}},[t._v("las la-edit")])],1):t._e()],1),t._v(" "),o("div",{staticClass:"pt-1",staticStyle:{"font-size":"14px","font-family":"BodyFont",color:"#ffffff"}},[t._v(t._s(this.$root.selectedChallenge.summary)+" ")])])],1),t._v(" "),o("div",{staticClass:"d-flex px-2 py-2 ",staticStyle:{height:"40%","align-items":"center","justify-content":"center"}},[o("div",{staticClass:"d-flex flex-column text-center"},[o("div",{staticStyle:{"font-size":"25px","font-family":"HeaderFont",color:"#ffffff"}},[t._v(t._s(t.TimerValue))]),t._v(" "),o("div",{staticClass:"pt-1",staticStyle:{"font-size":"14px","font-family":"BodyFont",color:"#ffffff"}},[t._v("Days : Hours : Minutes : Seconds ")])])]),t._v(" "),o("div",{staticClass:"d-flex px-2 py-2 ",staticStyle:{height:"30%",width:"100%"}},[o("div",{staticClass:"d-flex flex-column-reverse text-center",staticStyle:{height:"100%",width:"100%"}},[o("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center",width:"100%"}},[o("div",{staticClass:"col-8 py-0 px-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[this.$root.selectedChallenge.owner_profile?o("div",{staticClass:"d-inline-block mx-2 ",style:t.imageStyleUser(40,this.$root.selectedChallenge.owner_profile),on:{click:function(e){return e.stopPropagation(),t.goToProfile(t.that.$root.selectedChallenge.username)}}}):t._e(),t._v(" "),o("div",{staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"#ffffff"}},[t._v(t._s(this.$root.selectedChallenge.username)+" ")]),t._v(" "),o("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"8px",color:"#ffffff"}},[t._v("mdi-record")]),t._v(" "),o("div",{staticClass:"d-md-block d-none",staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"#ffffff"}},[t._v("  "+t._s(t.checkDuelStatus(this.$root.selectedChallenge))+" ")]),t._v(" "),o("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"8px",color:"#ffffff"}},[t._v("mdi-record")]),t._v(" "),o("div",{staticClass:"d-md-block d-none",staticStyle:{"font-size":"14px","font-family":"BodyFont",color:"#ffffff"}},[o("v-icon",{staticStyle:{"font-size":"20px"},attrs:{color:"#ffffff"}},[t._v("las la-user-friends")]),t._v(" "+t._s(this.$root.selectedChallenge.current_participant)+" ")],1)],1),t._v(" "),o("div",{staticClass:"col-4 py-0 px-2 d-flex flex-row-reverse",staticStyle:{"align-items":"center"}},[o("v-btn",{staticClass:"ml-1",staticStyle:{"font-size":"13px","font-weight":"bolder",background:"white","font-family":"MediumFont"},attrs:{outlined:"",medium:"",rounded:"",color:"#3C87CD"},on:{click:t.shareChallenge}},[o("span",{staticStyle:{"text-transform":"capitalize"}},[t._v("Share")]),t._v(" "),o("v-icon",{staticClass:"ml-r",staticStyle:{"font-size":"18px"}},[t._v("mdi mdi-share-variant")])],1),t._v(" "),this.$root.username==this.$root.selectedChallenge.username&&"Pending"==t.checkDuelStatus(this.$root.selectedChallenge)?o("v-btn",{staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{loading:t.loadingStater,medium:"",rounded:"",color:"#3C87CD"},on:{click:t.startChallenge}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Start")])]):t._e(),t._v(" "),this.$root.selectedChallenge.user_participating?o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"},on:{click:t.goToPanel}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Panel")])]):t._e(),t._v(" "),this.$root.selectedChallenge.user_participating||this.$root.selectedChallenge.participant_reached||!t.knowDuelStatus(this.$root.selectedChallenge)?t._e():o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{loading:t.loadingJoinAction,medium:"",rounded:"",color:"#3C87CD"},on:{click:function(e){t.that.$root.showLanguageOption=!0}}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Join")])]),t._v(" "),o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"},on:{click:function(e){return t.showResults("vote")}}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Vote")])]),t._v(" "),this.$root.username==this.$root.selectedChallenge.username&&"Ended"==t.checkDuelStatus(this.$root.selectedChallenge)&&null==this.$root.selectedChallenge.voting?o("v-btn",{staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("End voting")])]):t._e(),t._v(" "),"Ended"==t.checkDuelStatus(this.$root.selectedChallenge)?o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"},on:{click:function(e){return t.showResults("view")}}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Results")])]):t._e()],1)])])])])])]:t._e(),t._v(" "),t.loadingChallenge?t._e():[o("div",{staticStyle:{position:"absolute",height:"46px",width:"100%",top:"35%",left:"0","overflow-y":"hidden","overflow-x":"auto","border-bottom":"1px solid #c5c5c5",background:"whitesmoke"}},[o("div",{staticClass:"col-12 px-0 d-flex flex-row py-0",staticStyle:{"align-items":"center",height:"100%","border-right":"1px solid #c5c5c5",position:"absolute",top:"0"}},[o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"description"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("description")}}},[o("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Description")])]),t._v(" "),o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"rules"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("rules")}}},[o("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Rules")])]),t._v(" "),o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"judges"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("judges")}}},[o("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Judges")])]),t._v(" "),o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"leaderboard"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("leaderboard")}}},[o("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Leaderboard")])]),t._v(" "),this.$root.selectedChallenge.channel_id?o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"channel"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("channel")}}},[o("div",{staticStyle:{"font-size":"14px","font-family":"MediumFont"}},[t._v("Join Channel")])]):t._e()])]),t._v(" "),o("div",{staticStyle:{position:"absolute",height:"59%",width:"100%",top:"41%",left:"0","overflow-y":"auto","overflow-x":"hidden"}},[o("div",{staticClass:"col-12 scroller",staticStyle:{height:"100%",position:"absolute",top:"0%","overflow-y":"auto","overflow-x":"hidden"}},[o("router-view")],1)])]],2)]),t._v(" "),o("div",{staticClass:"col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-none d-block py-0 px-0",staticStyle:{position:"fixed","z-index":"9999999999999",left:"0%",top:"0%",height:"100%",background:"#ffffff"}},[o("v-btn",{staticClass:"d-inline-block  ",staticStyle:{position:"fixed",background:"#3C87CD",top:"1%",right:"2%","z-index":"990679797879"},attrs:{icon:"",color:"#ffffff"},on:{click:t.goBack}},[o("v-icon",[t._v("mdi-close mdi-18px")])],1),t._v(" "),this.$root.selectedChallenge!=[]?[o("div",{style:t.imageStyle("250px",this.$root.selectedChallenge,"small")},[o("div",{staticClass:"d-flex flex-column",staticStyle:{position:"absolute",height:"100%",width:"100%",top:"0",left:"0",background:"rgba(27, 27, 30, 0.5)"}},[o("div",{staticClass:"d-flex flex-row px-2 pt-2 ",staticStyle:{height:"30%"}},[o("div",{staticClass:"d-flex flex-column pt-2 pr-2"},[o("div",{staticClass:"d-flex flex-row",staticStyle:{"font-size":"14px","font-family":"HeaderFont",color:"#ffffff","align-items":"center"}},[o("div",[t._v(" "+t._s(this.$root.selectedChallenge.title))]),t._v(" "),this.$root.username==this.$root.selectedChallenge.username?o("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"20px"},attrs:{color:"#ffffff"},on:{click:t.editChallenge}},[t._v("las la-edit")]):t._e()],1),t._v(" "),o("div",{staticClass:"pt-1",staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"#ffffff"}},[t._v(t._s(this.$root.selectedChallenge.summary)+" ")])])]),t._v(" "),o("div",{staticClass:"d-flex px-2 py-2 ",staticStyle:{height:"40%","align-items":"center","justify-content":"center"}},[o("div",{staticClass:"d-flex flex-column text-center"},[o("div",{staticStyle:{"font-size":"22px","font-family":"HeaderFont",color:"#ffffff"}},[t._v(t._s(t.TimerValue))]),t._v(" "),o("div",{staticClass:"pt-1",staticStyle:{"font-size":"12px","font-family":"BodyFont",color:"#ffffff"}},[t._v("Days : Hours : Minutes : Seconds ")])])]),t._v(" "),o("div",{staticClass:"d-flex px-2 py-2 ",staticStyle:{height:"30%",width:"100%"}},[o("div",{staticClass:"d-flex flex-column-reverse text-center",staticStyle:{height:"100%",width:"100%"}},[o("div",{staticClass:"d-flex flex-row",staticStyle:{"align-items":"center",width:"100%"}},[o("div",{staticClass:"col-12 py-0 px-0 d-flex flex-row",staticStyle:{"align-items":"center"}},[this.$root.selectedChallenge.owner_profile?o("div",{staticClass:"d-inline-block mx-2 ",style:t.imageStyleUser(40,this.$root.selectedChallenge.owner_profile),on:{click:function(e){return e.stopPropagation(),t.goToProfile(t.that.$root.selectedChallenge.username)}}}):t._e(),t._v(" "),o("div",{staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"#ffffff"}},[t._v(t._s(this.$root.selectedChallenge.username)+" ")]),t._v(" "),o("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"8px",color:"#ffffff"}},[t._v("mdi-record")]),t._v(" "),o("div",{staticStyle:{"font-size":"12px","font-family":"BodyFont",color:"#ffffff"}},[t._v("  "+t._s(t.checkDuelStatus(this.$root.selectedChallenge))+" ")]),t._v(" "),o("v-icon",{staticClass:"mx-1",staticStyle:{"font-size":"8px",color:"#ffffff"}},[t._v("mdi-record")]),t._v(" "),o("div",{staticClass:"d-md-none d-block",staticStyle:{"font-size":"13px","font-family":"BodyFont",color:"#ffffff"}},[o("v-icon",{staticStyle:{"font-size":"16px"},attrs:{color:"#ffffff"}},[t._v("las la-user-friends")]),t._v(" "+t._s(this.$root.selectedChallenge.current_participant))],1)],1)])])])])])]:t._e(),t._v(" "),t.loadingChallenge?t._e():[o("div",{staticClass:"fixed-top",staticStyle:{position:"absolute",height:"40px",width:"100%",top:"250px",left:"0%","overflow-y":"hidden","overflow-x":"auto","white-space":"nowrap","border-bottom":"1px solid #c5c5c5",background:"whitesmoke"}},[o("div",{staticClass:"col-12 px-0 d-flex flex-row py-0",staticStyle:{"align-items":"center",height:"100%",position:"absolute",top:"0"}},[o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"description"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("description")}}},[o("div",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Description")])]),t._v(" "),o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"rules"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("rules")}}},[o("div",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Rules")])]),t._v(" "),o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"judges"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("judges")}}},[o("div",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Judges")])]),t._v(" "),o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"leaderboard"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("leaderboard")}}},[o("div",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Leaderboard")])]),t._v(" "),this.$root.selectedChallenge.channel_id?o("div",{staticClass:"py-2 px-3 mr-1 sideBar",style:"channel"==t.selectedTab?" border-bottom:4px solid #3C87CD;":"",on:{click:function(e){return e.stopPropagation(),t.goToPage("channel")}}},[o("div",{staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Join Channel")])]):t._e()])]),t._v(" "),o("div",{staticStyle:{position:"absolute",height:"500px",width:"100%",top:"290px",left:"0","overflow-y":"auto","overflow-x":"hidden",background:"white"}},[o("div",{staticClass:"col-12 scroller",staticStyle:{height:"100%",position:"absolute",top:"0%","overflow-y":"auto","overflow-x":"hidden","padding-bottom":"400px"}},[o("router-view")],1)])]],2),t._v(" "),this.$root.showLanguageOption?o("div",{staticClass:"py-0 px-0 ",staticStyle:{position:"fixed",left:"0%",width:"100%",height:"100%",top:"0%","z-index":"99999999999999999",background:"rgba(27, 27, 30, 0.32)"},on:{click:function(e){t.that.$root.showLanguageOption=!1}}},[o("div",{staticClass:"d-flex",staticStyle:{position:"absolute",height:"90%",top:"5%",width:"94%",left:"3%","align-items":"center","justify-content":"center"}},[o("v-card",{staticClass:"col-lg-3 py-2  col-md-6 scroller",staticStyle:{"max-height":"400px","overflow-y":"auto"}},[o("div",{staticClass:"col-12 py-1 text-center"},[o("span",{staticStyle:{"font-family":"MediumFont","font-size":"13px"}},[t._v("Select your language choice")])]),t._v(" "),o("div",{staticClass:"col-12  py-0"},[o("div",{staticClass:"row"},t._l(t.languageData,(function(e,i){return o("v-card",{key:i,staticClass:"py-2 px-2 d-flex flex-row col-12",staticStyle:{"border-bottom":"1px solid #c5c5c5"},attrs:{tile:"",flat:""},on:{click:function(o){return o.stopPropagation(),t.createProject(e)}}},[o("div",{staticClass:"mr-2"},[o("span",{staticClass:"mx-1",staticStyle:{color:"#3C87CD"}},[o("i",{class:e.icon})])]),t._v(" "),o("div",[o("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px"}},[t._v(t._s(e.name))])])])})),1)])])],1)]):t._e(),t._v(" "),this.$router.currentRoute.path.indexOf("discussion")<=0&&this.$router.currentRoute.path.indexOf("results")<=0?o("div",{staticClass:"d-md-none d-flex flex-row-reverse",staticStyle:{"z-index":"9999999999","overflow-x":"auto",width:"100%",position:"fixed",bottom:"2%",right:"3%"}},[o("v-btn",{staticClass:"ml-1",staticStyle:{"font-size":"13px","font-weight":"bolder",background:"white","font-family":"MediumFont"},attrs:{outlined:"",medium:"",rounded:"",color:"#3C87CD"},on:{click:t.shareChallenge}},[o("v-icon",{staticClass:"ml-r",staticStyle:{"font-size":"18px"}},[t._v("mdi mdi-share-variant")])],1),t._v(" "),this.$root.username==this.$root.selectedChallenge.username&&"Pending"==t.checkDuelStatus(this.$root.selectedChallenge)?o("v-btn",{staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{loading:t.loadingStater,medium:"",rounded:"",color:"#3C87CD"},on:{click:t.startChallenge}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Start")])]):t._e(),t._v(" "),this.$root.selectedChallenge.user_participating?o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"},on:{click:t.goToPanel}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Panel")])]):t._e(),t._v(" "),this.$root.selectedChallenge.user_participating||this.$root.selectedChallenge.participant_reached||!t.knowDuelStatus(this.$root.selectedChallenge)?t._e():o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{loading:t.loadingJoinAction,medium:"",rounded:"",color:"#3C87CD"},on:{click:function(e){t.that.$root.showLanguageOption=!0}}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Join")])]),t._v(" "),o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"},on:{click:function(e){return t.showResults("vote")}}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Vote")])]),t._v(" "),this.$root.username==this.$root.selectedChallenge.username&&"Ended"==t.checkDuelStatus(this.$root.selectedChallenge)&&null==this.$root.selectedChallenge.voting?o("v-btn",{staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("End voting")])]):t._e(),t._v(" "),"Ended"==t.checkDuelStatus(this.$root.selectedChallenge)?o("v-btn",{staticClass:"mx-1",staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"MediumFont"},attrs:{medium:"",rounded:"",color:"#3C87CD"},on:{click:function(e){return t.showResults("view")}}},[o("span",{staticStyle:{color:"white","text-transform":"capitalize"}},[t._v("Results")])]):t._e()],1):t._e()])}),[],!1,null,"e1cd21ec",null);e.default=s.exports}}]);