(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{348:function(e,t,s){var o=s(568);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(25)(o,a);o.locals&&(e.exports=o.locals)},567:function(e,t,s){"use strict";var o=s(348);s.n(o).a},568:function(e,t,s){(e.exports=s(24)(!1)).push([e.i,"\n.messagesBadges[data-v-38b442a3]{\n    \n    color: #ffffff;\n    background: #3C87CD;\n    font-size: 11px;\n    font-family: BodyFont;\n    font-weight: bolder;\n    align-items: center;\n    justify-content: center;\n    height:20px;\n    width:20px;\n    border-radius:50%;\n}\n.messageBox[data-v-38b442a3]:hover{\n    background:whitesmoke;\n    cursor: pointer;\n}\n",""])},665:function(e,t,s){"use strict";s.r(t);var o=s(260).htmlToText,a={props:["source"],data:function(){return{that:this,popup:!0}},mounted:function(){this.$root.chatListComponent=this},methods:{openChat:function(e){var t,s;if(this.$root.chatComponent.selectedQuoteId=(t=0,s=9,t=Math.ceil(t),s=Math.floor(s),Math.floor(Math.random()*(s-t+1))+t),this.$root.selectedSpace.general_spaceId!=e){if(0!=this.$root.TrackLastSubSpace.length&&e==this.$root.TrackLastSubSpace[0])return this.$router.push({path:"/channels/"+this.$root.TrackLastSubSpace[1]+"/content"}),this.$root.chatComponent.fetchMessages(this.$root.TrackLastSubSpace[1]),this.$root.chatComponent.messageIsDone=!1,void(this.$root.chatComponent.chatIsOpen=!0);this.$router.push({path:"/channels/"+e+"/content"}),this.$root.chatComponent.fetchMessages(e),this.$root.chatComponent.messageIsDone=!1,this.$root.chatComponent.chatIsOpen=!0}},generateMessageString:function(e){var t="",s=e[0];return null!=s.type&&"action"!=s.type&&"text"!=s.type||(t=o(s.content,{wordwrap:100})),"image"==s.type&&(t="sent an image"),"join"==s.type&&(t="joined"),"code"==s.type&&(t="shared a code"),"video"==s.type&&(t="sent a video"),"audio"==s.type&&(t="sent an audio"),"project"==s.type&&(t="shared a project"),"file"==s.type&&(t="shared a file"),t},spaceSelected:function(e){return"Channel"==e.type||"Team"==e.type?e.space_id==this.$root.selectedSpace.general_spaceId:e.space_id==this.$root.selectedSpace.space_id},checkDatereal:function(e){var t=moment(e).add(1,"hours"),s=moment().subtract(7,"days");moment().subtract(1,"hours");return moment(t)>=s?(moment(t),moment(t).format("h:mm a")):moment(t).calendar()},imageStyle:function(e,t,s){if(null==t.background_color){var o="border-radius:50%;height:"+e+"px;width:"+e+"px;background-size:contain;border:1px solid #c5c5c5;";return o+="channel"==s?"background-color:#ffffff; background-image:url(imgs/channel.png);":"background-color:#ffffff; background-image:url(imgs/profile_new.png);"}var a="border-radius:50%;height:"+e+"px;width:"+e+"px;background-size:contain;border:1px solid #c5c5c5;",n=t.image_name+"."+t.image_extension;return a+="channel"==s||"bot"==s?"background-color:"+t.background_color+"; background-image:url(/imgs/space/thumbnails/"+n+");":"background-color:"+t.background_color+"; background-image:url(/imgs/profile/thumbnails/"+n+");"}}},n=(s(567),s(4)),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12 px-1 d-flex flex-row py-0 messageBox",style:e.spaceSelected(e.source)?"align-items:center; justify-content:center; background:whitesmoke;":"align-items:center; justify-content:center;",on:{click:function(t){return e.openChat(e.source.space_id)}}},["Channel"==e.source.type||"Team"==e.source.type?s("div",{staticClass:" mr-2 py-3",style:e.imageStyle(40,e.source,"channel")}):e._e(),e._v(" "),"Bot"==e.source.type&&null!=e.source.bot_data?s("div",{staticClass:" mr-2 py-3",style:e.imageStyle(40,e.source.bot_data,"bot")}):e._e(),e._v(" "),"Direct"==e.source.type&&null!=e.source.userInfo?s("div",{staticClass:" mr-2 py-3",style:e.imageStyle(40,e.source.userInfo,"direct")}):e._e(),e._v(" "),s("div",{staticClass:"px-0 py-3",staticStyle:{width:"85%","border-bottom":"1px solid #e6e6e6"}},[s("div",{staticClass:"pr-1 d-flex flex-row",staticStyle:{"align-items":"center"}},[s("div",{staticClass:"px-0 py-0 my-0 ",staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},["Team"==e.source.type||"Channel"==e.source.type?s("span",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[e._v(e._s(e.source.name))]):e._e(),e._v(" "),"Bot"==e.source.type&&null!=e.source.bot_data?s("span",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[e._v(e._s(e.source.bot_data.name))]):e._e(),e._v(" "),"Direct"==e.source.type?s("span",{staticStyle:{"font-size":"14px","font-family":"BodyFont"}},[e._v(e._s(e.source.userInfo.username))]):e._e()]),e._v(" "),s("div",{staticClass:"px-1 py-0 my-0 text-right ml-auto",staticStyle:{width:"26%"}},[e.source.last_message?s("span",{staticStyle:{"font-size":"11px","font-family":"BodyFont",color:"gray","margin-right":"0px"}},[e.source.last_message[0]?s("span",[e._v("\n                                               "+e._s(e.checkDatereal(e.source.last_message[0].created_at))+"\n                                              ")]):e._e()]):e._e()])]),e._v(" "),s("div",{staticClass:" d-flex flex-row",staticStyle:{"align-items":"center"}},[s("div",{staticClass:" px-0 py-0 my-0 pr-1  ",staticStyle:{width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","font-size":"13px",color:"grey","font-family":"BodyFont"}},[0!=e.source.last_message.length&&e.source.last_message[0]?s("span",[e.source.last_message[0].deleted?[e._m(0)]:[e.that.$root.username!=e.source.last_message[0].username&&"Direct"!=e.source.type&&"Bot"!=e.source.type?s("span",[e._v(e._s(e.source.last_message[0].username)+":")]):e._e(),e._v(" "+e._s(e.generateMessageString(e.source.last_message))+"\n                                          \n                                                \n                                             ")]],2):s("span",[s("i",[e._v("Send a message to start chat")])])]),e._v(" "),"Bot"!=e.source.type?s("div",{staticClass:" px-1 py-0 my-0 text-right "},[e.source.unread>0?s("span",{staticClass:"messagesBadges d-flex ml-lg-0 ml-md-5 ml-0"},[e._v(e._s(e.source.unread))]):e._e()]):e._e()])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",[this._v("This message was deleted")])])}],!1,null,"38b442a3",null);t.default=r.exports}}]);