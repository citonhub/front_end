(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{310:function(t,e,o){var s=o(446);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(25)(s,n);s.locals&&(t.exports=s.locals)},445:function(t,e,o){"use strict";var s=o(310);o.n(s).a},446:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,"\n.baseStyle[data-v-55264c25]{\n  background: transparent !important;\n}\n",""])},753:function(t,e,o){"use strict";o.r(e);var s=o(244),n=o.n(s),a=(o(242),{data:function(){return{usernameValue:"",password:"",loading:!1,Alert:!1,alertMsg:"",errorState:!1,formstate:!1,passwordRule:[function(t){return!!t||"Oh! you missed this."},function(t){return t.length>=8||"Password must be more than 8 characters"}],UsernameRule:[function(t){return!!t||"Oh! you missed this."}]}},mounted:function(){this.checkIfLogin()},methods:{showRegister:function(){this.$router.push({path:"/sign-up"})},showForgot:function(){this.$router.push({path:"/forgot-password"})},checkIfLogin:function(){this.$root.isLogged&&this.$router.push({path:"/hub"})},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;"info"==o&&n.a.info({title:t,timeout:5e3,message:e,zindex:"9999999999",position:"bottomRigh  t",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==o&&n.a.success({title:t,message:e,timeout:5e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==o&&n.a.warning({title:t,timeout:5e3,message:e,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==o&&n.a.error({title:t,message:e,zindex:"9999999999",position:"bottomRight",timeout:5e3,transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})},loginuser:function(){var t=this;this.errorState=!1,this.formstate&&(this.loading=!0,this.$root.userPassword=this.password,this.$root.userEmail=this.usernameValue,this.$root.LocalStore("user_temp_email",[this.usernameValue,this.password]),this.$store.dispatch("login",{username:this.usernameValue,password:this.password}).then((function(){var e=localStorage.getItem("user_new");if(e){var o=JSON.parse(e);t.$root.username=o.user.username,t.$root.user_temp_id=o.user.id,t.$root.returnedToken=o.token}t.$root.checkUserDevice(),t.$root.checkauthroot="auth",t.$root.fetchUserDetails(),t.$root.setEcho(),t.$root.getLocalStore("route_tracker_new").then((function(e){if(t.$root.connectToChannel(),null!=e){var o=JSON.parse(e);t.$router.push({path:o[0]})}else t.checkIfLogin()}))})).catch((function(e){t.loading=!1,t.showAlert("Oops!","Wrong details, give it another shot.","error")})))}}}),i=(o(445),o(4)),l=Object(i.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{staticStyle:{position:"absolute",width:"100%",height:"100%"}},[o("headerTab"),t._v(" "),o("div",{staticClass:"d-none col-lg-5 text-center  d-lg-flex",staticStyle:{"z-index":"99999999","align-items":"center","justify-content":"center",position:"fixed",height:"70%",top:"10%"}},[o("div",{staticClass:"px-5 col-8 offset-2"},[o("blockquote",{staticClass:"fill",staticStyle:{"font-family":"BodyFont","font-size":"25px",color:"black"}},[t._v("People who are crazy enough to think they can change the world, are the ones who do.")]),t._v(" "),o("p",{staticClass:"text-center",staticStyle:{"font-family":"HeaderFont","font-size":"25px"}},[t._v("\n   - Rob Siltanen\n ")])])]),t._v(" "),o("div",{staticClass:" col-lg-7 offset-lg-5 px-5  d-none d-lg-flex ",staticStyle:{"z-index":"99999999","align-items":"center","justify-content":"center",position:"fixed",height:"70%",top:"10%"}},[o("div",{staticClass:"col-7 "},[o("v-card",{staticClass:"py-1 pt-2 px-2 row",staticStyle:{"border-radius":"10px"}},[o("div",{staticClass:"col-2 px-1"},[o("span")]),t._v(" "),o("div",{staticClass:"col-8 px-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[o("h4",{staticStyle:{"font-family":"HeaderFont"}},[t._v("\n                 Login\n             ")])]),t._v(" "),o("div",{staticClass:"col-2 text-center"}),t._v(" "),o("div",{staticClass:"col-12 text-center py-1",staticStyle:{"font-family":"BodyFont"}},[o("v-form",{ref:"loginform",staticClass:"row my-2 py-2 px-2 ",model:{value:t.formstate,callback:function(e){t.formstate=e},expression:"formstate"}},[o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"Grandmaster",label:"Email or Username","prepend-inner-icon":"las la-user",rules:t.UsernameRule,outlined:"",type:"email",color:"#3C87CD"},model:{value:t.usernameValue,callback:function(e){t.usernameValue=e},expression:"usernameValue"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"therepublic",label:t.$t("general.password"),"prepend-inner-icon":"las la-lock",outlined:"",rules:t.passwordRule,type:"password",color:"#3C87CD"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[o("v-btn",{staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"BodyFont"},attrs:{loading:t.loading,type:"submit",medium:"",color:"#3C87CD"},on:{click:function(e){return e.preventDefault(),t.loginuser(e)}}},[t._v("\n                 Login\n                  ")])],1),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("a",{staticStyle:{"font-size":"13px","text-decoration":"underline",color:"#3C87CD","font-family":"BodyFont"},on:{click:function(e){return e.preventDefault(),t.showRegister(e)}}},[t._v(" Create an account")])]),t._v(" "),o("div",{staticClass:"col-6"},[o("a",{staticStyle:{"font-size":"13px","text-decoration":"underline",color:"#3C87CD","font-family":"BodyFont"},on:{click:function(e){return e.preventDefault(),t.showForgot(e)}}},[t._v("Forgot password?")])])])])])],1)])],1)]),t._v(" "),o("div",{staticClass:"d-lg-none col-md-8 offset-md-2 px-2  ",staticStyle:{"z-index":"99999999","overflow-y":"auto",left:"0",position:"fixed",height:"100%",top:"0%"}},[o("div",{staticClass:"col-12 py-1 px-1"},[o("a",{attrs:{href:"/"}},[o("img",{staticClass:"d-lg-none d-block",attrs:{alt:"citonhub logo",src:"/imgs/logo.png",height:"35px"}})])]),t._v(" "),o("v-card",{staticClass:"py-1 px-2 col-12 d-flex",staticStyle:{background:"transparent","align-items":"center","justify-content":"center"},attrs:{flat:""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 px-0 py-1 mt-4 mb-0 d-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[o("h5",{staticStyle:{"font-family":"HeaderFont"}},[t._v("\n                 Login\n             ")])]),t._v(" "),o("div",{staticClass:"col-12 text-center py-0",staticStyle:{"font-family":"BodyFont"}},[o("v-form",{ref:"loginformSm",staticClass:"row my-1 py-1 px-2 ",model:{value:t.formstate,callback:function(e){t.formstate=e},expression:"formstate"}},[o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"Grandmaster",label:"Email or Username","prepend-inner-icon":"las la-user",rules:t.UsernameRule,outlined:"",type:"email",color:"#3C87CD"},model:{value:t.usernameValue,callback:function(e){t.usernameValue=e},expression:"usernameValue"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-2 my-0 px-2"},[o("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{placeholder:"therepublic",label:t.$t("general.password"),"prepend-inner-icon":"las la-lock",outlined:"",rules:t.passwordRule,type:"password",color:"#3C87CD"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[o("v-btn",{staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"BodyFont"},attrs:{loading:t.loading,type:"submit",small:"",color:"#3C87CD"},on:{click:function(e){return e.preventDefault(),t.loginuser(e)}}},[t._v("\n                 Login\n                  ")])],1),t._v(" "),o("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("a",{staticStyle:{"font-size":"12px","text-decoration":"underline",color:"#3C87CD","font-family":"BodyFont"},on:{click:function(e){return e.preventDefault(),t.showRegister(e)}}},[t._v(" Create an account")])]),t._v(" "),o("div",{staticClass:"col-6"},[o("a",{staticStyle:{"font-size":"12px","text-decoration":"underline",color:"#3C87CD","font-family":"BodyFont"},on:{click:function(e){return e.preventDefault(),t.showForgot(e)}}},[t._v("Forgot password?")])])])]),t._v(" "),o("div",{staticClass:"col-12 text-center mt-3 d-flex",staticStyle:{"z-index":"999999999","align-items":"center","justify-content":"center"}},[o("div",{staticClass:"px-5"},[o("blockquote",{staticClass:"fill",staticStyle:{"font-family":"BodyFont","font-size":"16px",color:"black"}},[t._v("People who are crazy enough to think they can change the world, are the ones who do.")]),t._v(" "),o("p",{staticClass:"text-center",staticStyle:{"font-family":"HeaderFont","font-size":"16px"}},[t._v("\n   - Rob Siltanen\n ")])])])])],1)])])],1),t._v(" "),o("bottom")],1)}),[],!1,null,"55264c25",null);e.default=l.exports}}]);