(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{677:function(t,e,o){"use strict";o.r(e);var s={props:["source","username"],data:function(){return{that:this}},methods:{imageStyleUser:function(t,e){if(null==e.background_color){var o="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";return o+="background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var s="border-radius:50%;height:"+t+"px;width:"+t+"px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ",i=e.image_name+"."+e.image_extension;return s+="background-color:"+e.background_color+"; background-image:url(/imgs/profile/"+i+");"},checkDatereal:function(t){var e=moment(t).add(1,"hours");moment().subtract(7,"days");return moment(e),moment(e).format("h:mm a")}}},i=o(4),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12 py-2 px-1",style:t.source.tagged?"background:rgba(60, 135, 205, 0.32)":""},[t.source.username!=t.username?o("div",{staticClass:"col-11 py-0 ",attrs:{"elevation-1":""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-9 col-md-10 py-1  d-flex flex-row"},[o("div",{style:t.imageStyleUser(30,t.source),on:{click:function(e){return e.stopPropagation(),t.that.$root.projectViewComponent.goToProfile(t.source.username)}}}),t._v(" "),o("v-card",{staticClass:"py-1 px-2 ml-2",staticStyle:{"max-width":"80%",border:"1px solid transparent","min-width":"190px",background:"#E1F0FC","border-radius":"7px","border-bottom-left-radius":"0px"},attrs:{"elevation-1":"",flat:""}},[o("div",{staticClass:"text-left my-0 py-0 d-flex flex-row"},[o("span",{staticStyle:{"font-size":"13px","font-weight":"bold"},on:{click:function(e){return e.stopPropagation(),t.that.$root.projectViewComponent.goToProfile(t.source.username)}}},[t._v(t._s(t.source.username))]),t._v(" "),o("span",{staticClass:"ml-auto",staticStyle:{"font-size":"11px"}},[t._v(t._s(t.checkDatereal(t.source.created_at)))])]),t._v(" "),t.source.is_reply?o("div",{staticClass:"d-flex flex-column py-2 px-1",staticStyle:{"border-left":"3px solid #3C87CD",background:"#d6e6f5","border-radius":"0px"},on:{click:function(e){return e.stopPropagation(),t.scrollToComment(t.source.replied_comment)}}},[o("div",{staticStyle:{"font-size":"13px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(t.source.replied_comment.comment))])]):t._e(),t._v(" "),o("span",{staticStyle:{"font-size":"13px"},domProps:{innerHTML:t._s(t.source.content)}})])],1),t._v(" "),o("div",{staticClass:"col-12 py-0 d-flex",staticStyle:{"padding-left":"45px","align-items":"center"}},[o("span",{staticClass:"d-inline-block mx-1"},[t.source.liked_by_user?o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""}},[o("i",{staticClass:"las la-heart",staticStyle:{"font-size":"20px",color:"#ff6666"}})]):o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""},on:{click:function(e){return t.that.$root.projectViewComponent.likeComment(t.source)}}},[o("i",{staticClass:"lar la-heart",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"#000000"}},[t._v(t._s(t.source.likes))])],1),t._v(" "),o("span",{staticClass:"d-inline-block mx-1"},[o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""},on:{click:function(e){return t.that.$root.projectViewComponent.showReplyAction(t.source)}}},[o("i",{staticClass:"las la-reply",staticStyle:{"font-size":"20px"}})])],1)])])]):t._e(),t._v(" "),t.source.username==t.that.$root.username?o("div",{staticClass:"col-11 py-0 offset-1",attrs:{"elevation-1":""}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-9 col-md-10 py-1 offset-lg-3 offset-md-2 d-flex flex-row-reverse"},[o("v-card",{staticClass:"py-1 px-2 mr-2",staticStyle:{"max-width":"80%",border:"1px solid transparent","min-width":"190px",background:"#3C87CD","border-radius":"7px","border-bottom-right-radius":"0px"},attrs:{"elevation-1":"",flat:""}},[1==t.source.is_reply?o("div",{staticClass:"d-flex flex-column py-2 px-1",staticStyle:{"border-left":"3px solid #E1F0FC","border-radius":"0px",background:"#d6e6f5"},on:{click:function(e){return e.stopPropagation(),t.that.$root.projectViewComponent.scrollToComment(t.source.replied_comment)}}},[o("div",{staticStyle:{"font-size":"13px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(t.source.replied_comment.comment))])]):t._e(),t._v(" "),o("span",{staticStyle:{color:"white","font-size":"13px"},domProps:{innerHTML:t._s(t.source.content)}}),t._v(" "),o("div",{staticClass:"text-right"},[o("span",{staticStyle:{color:"white","font-size":"11px"}},[t._v(t._s(t.checkDatereal(t.source.created_at)))])])])],1),t._v(" "),o("div",{staticClass:"col-12 text-right py-0"},[o("span",{staticClass:"d-inline-block mx-1"},[t.source.liked_by_user?o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""}},[o("i",{staticClass:"las la-heart",staticStyle:{"font-size":"20px",color:"#ff6666"}})]):o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""},on:{click:function(e){return t.that.$root.projectViewComponent.likeComment(t.source)}}},[o("i",{staticClass:"lar la-heart",staticStyle:{"font-size":"20px",color:"#3C87CD"}})]),t._v(" "),o("span",{staticStyle:{"font-family":"BodyFont","font-size":"12px",color:"#000000"}},[t._v(t._s(t.source.likes))])],1),t._v(" "),o("span",{staticClass:"d-inline-block mx-1"},[o("v-btn",{staticClass:"d-inline-block",attrs:{icon:""},on:{click:function(e){return t.that.$root.projectViewComponent.showReplyAction(t.source)}}},[o("i",{staticClass:"las la-reply",staticStyle:{"font-size":"20px"}})])],1)])])]):t._e()])}),[],!1,null,"c82dad2e",null);e.default=a.exports}}]);