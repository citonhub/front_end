(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{638:function(t,e,o){"use strict";o.r(e);var i=o(243),n=o.n(i),a=(o(242),{data:function(){return{feedback:"",loading:!1}},methods:{sendFeedback:function(){var t=this;this.loading=!0,axios.post("/send-feedback",{message:this.feedback}).then((function(e){200==e.status&&(t.showAlert("Thanks!","You message has been sent","success"),t.loading=!1,t.feedback="")})).catch((function(e){t.showAlert("Oops!","Something went wrong, please try again","error"),t.loading=!1}))},showAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;"info"==o&&n.a.info({title:t,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"success"==o&&n.a.success({title:t,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"warning"==o&&n.a.warning({title:t,timeout:2e3,message:e,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"}),"error"==o&&n.a.error({title:t,message:e,timeout:2e3,zindex:"9999999999",position:"bottomRight",transitionInMobile:"fadeIn",transitionOutMobile:"fadeOut"})}}}),s=o(4),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"top",staticStyle:{background:"transparent","font-family":"BodyFont"}},[o("div",{staticClass:"col-12 mt-5"}),t._v(" "),o("div",{staticClass:"feed-header col-md-8 offset-md-2 mt-4  ",staticStyle:{color:"#3C87CD"}},[o("h1",{staticClass:"text-center",staticStyle:{"font-size":"17px"}},[t._v(" We would love to hear from you!")]),t._v(" "),o("p",{staticClass:"text-center mt-4",staticStyle:{color:"grey","font-size":"14px","font-family":"BodyFont"}},[t._v("Please help us with feedback to improve citonhub.")]),t._v(" "),o("div",{staticClass:" form-group col-lg-8 offset-lg-2 col-sm-8 offset-sm-2 "},[o("v-textarea",{staticStyle:{"font-size":"13px"},attrs:{clearable:"","clear-icon":"las la-times-circle",filled:"",color:"#3C87CD",label:"Your message","auto-grow":""},model:{value:t.feedback,callback:function(e){t.feedback=e},expression:"feedback"}})],1),t._v(" "),o("div",{staticClass:"col-12 pt-0 mt-n2 text-center"},[o("v-btn",{staticClass:"mx-2 d-inline-block",staticStyle:{color:"white","text-transform":"normal","font-family":"BodyFont","font-size":"11px"},attrs:{small:"",loading:t.loading,disabled:""==t.feedback,color:"#3C87CD"},on:{click:function(e){return t.sendFeedback()}}},[t._v("Send")])],1)])])}),[],!1,null,null,null);e.default=l.exports}}]);