(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{698:function(e,t,s){"use strict";s.r(t);var o=s(260).htmlToText,a={data:function(){return{showDelete:!1,showCopy:!1,contentValue:""}},components:{},mounted:function(){this.setOptions()},methods:{setOptions:function(){var e=this.$root.replyMessage;null!=e.type&&"text"!=e.type&&"action"!=e.type&&"code"!=e.type||(this.showCopy=!0),this.checkOwner(e.user_id)&&(this.showDelete=!0);var t="";null!=e.type&&"text"!=e.type&&"action"!=e.type||(t=o(e.content,{wordwrap:1e6}),this.contentValue=t),"code"==e.type&&(this.contentValue=e.code.content)},replyMessage:function(){this.$root.chatComponent.showMoreOptions=!1,this.$root.showRootReply=!0,this.$root.is_reply=!0,this.$root.bottomEditorValue.focus()},sendDeleteRequest:function(e){axios.post("/delete-message",{message_id:e}).then((function(e){e.status})).catch((function(e){}))},deleteMessage:function(){var e=this,t=this.$root.replyMessage;this.$root.getLocalStore("full_space_"+t.space_id+this.$root.username).then((function(s){if(null!=s){var o=JSON.parse(s),a=e.$root.Messages.filter((function(e){return e.message_id!=t.message_id}));o.messages=a,e.$root.Messages=e.$root.handleResults(a),e.$root.LocalStore("full_space_"+t.space_id+e.$root.username,o)}})),this.$root.getLocalStore("user_chat_list_new_"+this.$root.username).then((function(s){if(null!=s){var o=JSON.parse(s);o.channels.map((function(e){e.space_id==t.space_id&&e.last_message[0].index_count==t.index_count&&(e.last_message[0].deleted=!0)})),o.direct_messages.map((function(e){e.space_id==t.space_id&&e.last_message[0].index_count==t.index_count&&(e.last_message[0].deleted=!0)})),o.pet_spaces.map((function(e){e.space_id==t.space_id&&e.last_message[0].index_count==t.index_count&&(e.last_message[0].deleted=!0)})),e.$root.LocalStore("user_chat_list_new_"+e.$root.username,o);var a=o.channels.concat(o.direct_messages,o.pet_spaces);e.$root.ChatList=a,e.$root.sortChatList()}})),this.sendDeleteRequest(t.message_id)},checkOwner:function(e){return this.$root.user_temp_id==e},copyMessage:function(){var e,t;e=this.contentValue,(t=document.createElement("textarea")).value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$root.chatComponent.showAlert("Copied!","Copied to clipboard","success")}}},n=s(5),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"py-0 px-0",staticStyle:{width:"200px"}},[s("div",{staticClass:"col-12 px-0 py-1 d-flex flex-column"},[s("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(t){return e.replyMessage()}}},[s("v-icon",{staticClass:"mr-1"},[e._v("las la-reply")]),e._v(" "),s("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[e._v("Reply")])],1),e._v(" "),e.showCopy?s("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(t){return e.copyMessage()}}},[s("v-icon",{staticClass:"mr-1"},[e._v("las la-copy")]),e._v(" "),s("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[e._v("Copy")])],1):e._e(),e._v(" "),e.showDelete?s("v-card",{staticClass:"px-2 py-2 d-flex flex-row",staticStyle:{"align-items":"center"},attrs:{tile:"",flat:""},on:{click:function(t){return e.deleteMessage()}}},[s("v-icon",{staticClass:"mr-1"},[e._v("las la-trash")]),e._v(" "),s("span",{staticStyle:{"font-family":"BodyFont","font-size":"13px",color:"grey"}},[e._v("Delete")])],1):e._e()],1),e._v(" "),s("textarea",{staticClass:"contentContainer",staticStyle:{display:"none"},domProps:{value:e.contentValue}})])}),[],!1,null,null,null);t.default=i.exports}}]);