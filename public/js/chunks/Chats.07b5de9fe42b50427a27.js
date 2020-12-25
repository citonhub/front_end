(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chats"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Chats.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-virtual-scroller/dist/vue-virtual-scroller.css */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_observe_visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-observe-visibility */ "./node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component('DynamicScroller', vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__["DynamicScroller"]);
Vue.component('DynamicScrollerItem', vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__["DynamicScrollerItem"]);

Vue.directive('observe-visibility', vue_observe_visibility__WEBPACK_IMPORTED_MODULE_2__["ObserveVisibility"]);

var TopBar = function TopBar() {
  return __webpack_require__.e(/*! import() | top-bar-chat */ "top-bar-chat").then(__webpack_require__.bind(null, /*! ./TopBar.vue */ "./resources/js/components/chats/TopBar.vue"));
};

var ChatTop = function ChatTop() {
  return __webpack_require__.e(/*! import() | ChatTop */ "ChatTop").then(__webpack_require__.bind(null, /*! ./ChatTop.vue */ "./resources/js/components/chats/ChatTop.vue"));
};

var ChatBottom = function ChatBottom() {
  return __webpack_require__.e(/*! import() | ChatBottom */ "ChatBottom").then(__webpack_require__.bind(null, /*! ./ChatBottom.vue */ "./resources/js/components/chats/ChatBottom.vue"));
};

var ChatList = function ChatList() {
  return Promise.all(/*! import() | ChatList */[__webpack_require__.e("vendors~ChatList~ChatMessages"), __webpack_require__.e("ChatList")]).then(__webpack_require__.bind(null, /*! ./ChatList.vue */ "./resources/js/components/chats/ChatList.vue"));
};

var ChatMessages = function ChatMessages() {
  return Promise.all(/*! import() | ChatMessages */[__webpack_require__.e("vendors~ChatList~ChatMessages"), __webpack_require__.e("ChatMessages")]).then(__webpack_require__.bind(null, /*! ./ChatMessages.vue */ "./resources/js/components/chats/ChatMessages.vue"));
};

var CodeEditorChat = function CodeEditorChat() {
  return Promise.all(/*! import() | CodeEditorChat */[__webpack_require__.e("vendors~CodeBox~CodeEditor~CodeEditorChat"), __webpack_require__.e("CodeEditorChat")]).then(__webpack_require__.bind(null, /*! ./CodeEditorChat.vue */ "./resources/js/components/chats/CodeEditorChat.vue"));
};

var ImageViewer = function ImageViewer() {
  return __webpack_require__.e(/*! import() | ImageViewer */ "ImageViewer").then(__webpack_require__.bind(null, /*! ./ImageViewer.vue */ "./resources/js/components/chats/ImageViewer.vue"));
};

var ChannelInfo = function ChannelInfo() {
  return __webpack_require__.e(/*! import() | ChannelInfo */ "ChannelInfo").then(__webpack_require__.bind(null, /*! ./ChannelInfo.vue */ "./resources/js/components/chats/ChannelInfo.vue"));
};

var ChannelEdit = function ChannelEdit() {
  return __webpack_require__.e(/*! import() | ChannelEdit */ "ChannelEdit").then(__webpack_require__.bind(null, /*! ./ChannelEdit.vue */ "./resources/js/components/chats/ChannelEdit.vue"));
};

var SubChannels = function SubChannels() {
  return __webpack_require__.e(/*! import() | SubChannels */ "SubChannels").then(__webpack_require__.bind(null, /*! ./SubChannels.vue */ "./resources/js/components/chats/SubChannels.vue"));
};

var CreateChannel = function CreateChannel() {
  return __webpack_require__.e(/*! import() | CreateChannel */ "CreateChannel").then(__webpack_require__.bind(null, /*! ./CreateChannel.vue */ "./resources/js/components/chats/CreateChannel.vue"));
};

var LiveSession = function LiveSession() {
  return __webpack_require__.e(/*! import() | LiveSession */ "LiveSession").then(__webpack_require__.bind(null, /*! ./LiveSession.vue */ "./resources/js/components/chats/LiveSession.vue"));
};

var AddSubChannel = function AddSubChannel() {
  return __webpack_require__.e(/*! import() | AddSubChannel */ "AddSubChannel").then(__webpack_require__.bind(null, /*! ./AddSubChannel.vue */ "./resources/js/components/chats/AddSubChannel.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      chatIsOpen: false,
      chatbarContent: 'chat_list',
      liveSessionIsOpen: false,
      chatInnerSideBar: false,
      innerSideBarContent: '',
      chatInnerConent: '',
      errorLoadingMessage: false,
      counter: 0,
      messageIsDone: true
    };
  },
  mounted: function mounted() {
    this.$root.showSideBar = false;
    this.$root.chatComponent = this;
    this.controlChatPath();
    this.fetchChatList();
  },
  components: {
    TopBar: TopBar,
    ChatTop: ChatTop,
    ChatBottom: ChatBottom,
    ChatList: ChatList,
    ChatMessages: ChatMessages,
    CodeEditorChat: CodeEditorChat,
    ImageViewer: ImageViewer,
    ChannelInfo: ChannelInfo,
    ChannelEdit: ChannelEdit,
    SubChannels: SubChannels,
    CreateChannel: CreateChannel,
    LiveSession: LiveSession,
    AddSubChannel: AddSubChannel
  },
  methods: {
    TopIsVisible: function TopIsVisible(isVisible, entry) {
      if (isVisible) {}
    },
    controlChatPath: function controlChatPath() {
      if (this.$route.params.spaceId != undefined) {
        this.chatIsOpen = true;
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.chatInnerSideBar = false;
    },
    showCreateChannel: function showCreateChannel() {
      var _this2 = this;

      this.$router.push({
        path: '/channels/create'
      });
      this.chatbarContent = '';
      this.chatInnerConent = '';
      setTimeout(function () {
        _this2.chatbarContent = 'create_channel';
      }, 500);
    },
    showCodeEditor: function showCodeEditor() {
      this.$router.push({
        path: '/channels/space_id/editor'
      });
    },
    fetchChatList: function fetchChatList() {
      var _this3 = this;

      if (this.$root.checkauthroot == 'auth') {
        if (this.$root.ChatList.length == 0) {
          var storedChat = this.$root.getLocalStore('user_chat_list' + this.$root.username);
          storedChat.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);
              var fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);
              _this3.$root.ChatList = fullList;

              _this3.$root.sortChatList();

              _this3.SetUnread(); // get all new messages


              _this3.$root.updateSpaceMessages();
            } else {
              axios.get('/fetch-chat-list/' + _this3.$root.userDeviceId).then(function (response) {
                if (response.status == 200) {
                  var responseList = response.data;
                  _this3.$root.ChatList = responseList.channels.concat(responseList.direct_messages, responseList.pet_spaces);

                  _this3.$root.LocalStore('user_chat_list' + _this3.$root.username, response.data);

                  _this3.$root.sortChatList();
                }
              })["catch"](function (error) {});
            }
          });
        }
      }
    },
    SetUnread: function SetUnread() {
      var _this4 = this;

      this.$root.ChatList.forEach(function (space) {
        var unreadStoredMsg = _this4.$root.getLocalStore('unread_messages_' + space.space_id + _this4.$root.username);

        unreadStoredMsg.then(function (result) {
          if (result != null) {
            var finalResultUnread = JSON.parse(result);
            space.unread = finalResultUnread.length;
          } else {
            space.unread = 0;
          }
        });
      });
    },
    generateUnreadMessage: function generateUnreadMessage() {
      if (this.$root.selectedSpace.unread != 0 && this.$root.selectedSpace.unread != undefined) {
        var newUnreadMsg = {
          content: 'You have ' + this.$root.selectedSpace.unread + ' unread messages',
          created_at: moment().subtract(1, 'hours'),
          message_id: this.makeUUID(),
          type: 'unread'
        };
        var msgCount = this.$root.Messages.length;
        var msgIndex = msgCount - this.$root.selectedSpace.unread;
        this.$root.Messages.splice(msgIndex, 0, newUnreadMsg); // mark the space as read

        this.$root.markSpaceRead(this.$route.params.spaceId);
      }
    },
    makeUUID: function makeUUID() {
      var id = "id" + Math.random().toString(16).slice(2);
      return id;
    },
    checkIfisOwner: function checkIfisOwner() {
      var _this5 = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this5.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].is_admin;
      } else {
        return false;
      }
    },
    resendMessages: function resendMessages() {
      var _this6 = this;

      var unsentMsg = this.$root.getLocalStore('unsent_messages_' + this.$route.params.spaceId + this.$root.username);
      unsentMsg.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);

          if (finalResult.length == 0) {} else {
            for (var index = 0; index < finalResult.length; index++) {
              if (_this6.$route.params.spaceId == finalResult[index].space_id) {
                _this6.$root.sendTextMessage(finalResult[index]);
              }
            }

            _this6.$root.LocalStore('unsent_messages_' + _this6.$route.params.spaceId + _this6.$root.username, []);
          }
        } else {}
      });
    },
    makeUserMaster: function makeUserMaster(member) {
      var _this7 = this;

      axios.post('/make-user-master', {
        memberId: member.memberId,
        space_id: this.$route.params.space_id
      }).then(function (response) {
        if (response.status == 200) {
          _this7.$root.adminMembers.forEach(function (member) {
            member.master_user = false;
          });

          _this7.$root.adminMembers.map(function (member) {
            if (member.memberId == response.data) {
              member.master_user = true;
            }
          });

          _this7.$root.selectedSpaceMembers.forEach(function (member) {
            member.master_user = false;
          });

          _this7.$root.selectedSpaceMembers.map(function (member) {
            if (member.memberId == response.data) {
              member.master_user = true;
            }
          }); // this.liveChanges(response.data,'new_master');

        }
      })["catch"](function (error) {});
    },
    autoMakeuserMaster: function autoMakeuserMaster() {
      var _this8 = this;

      if (this.checkIfisOwner()) {
        var master = this.$root.selectedSpaceMembers.filter(function (member) {
          return member.master_user == true;
        });
        var userMember = this.$root.selectedSpaceMembers.filter(function (member) {
          return member.user_id == _this8.$root.user_temp_id;
        });

        if (master.length == 0) {
          this.makeUserMaster(userMember[0]);
        }
      }
    },
    periodicUpdate: function periodicUpdate(result) {
      var _this9 = this;

      axios.post('/check-for-unread-messages-clean', {
        spaceId: this.$route.params.spaceId,
        existingMsg: result,
        localMessageCount: this.$root.returnedMessages.length,
        device_id: this.$root.userDeviceId
      }).then(function (response) {
        if (response.status == 200) {
          if (response.data[0].length > 0) {
            for (var index = 0; index < response.data[0].length; index++) {
              response.data[0][index].index_count = _this9.$root.returnLastIndex() + 1;
              response.data[0][index].id = response.data[0][index].message_id;
              response.data[0][index].initialSize = 200;

              _this9.$root.Messages.push(response.data[0][index]);

              _this9.$root.pushDataToLocal(response.data[0][index]);

              _this9.scrollToBottom();
            }
          }
        }
      })["catch"](function (error) {});
    },
    scrollToBottom: function scrollToBottom() {
      this.$root.scrollToBottom();
    },
    handleResults: function handleResults(messageArray) {
      this.$root.returnedMessages = messageArray;
      var intialCount = 0;
      this.$root.returnedMessages.map(function (msg) {
        msg.id = msg.message_id;
        msg.initialSize = 200;
        msg.index_count = intialCount++;
      });
      return this.$root.returnedMessages;
    },
    fetchMessages: function fetchMessages(spaceId) {
      var _this10 = this;

      // set messages to null
      this.$root.Messages = null;
      this.errorLoadingMessage = false;
      this.messageIsDone = false; // proceed if user is logged in

      if (this.$root.checkauthroot == 'auth') {
        // sub sapce tracker
        this.$root.TrackLastSubSpace = []; // get the space data from local storage

        var storedMsg = this.$root.getLocalStore('full_' + spaceId + this.$root.username);
        storedMsg.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);
            _this10.$root.spaceFullData = finalResult;

            var returnedData = _this10.handleResults(finalResult.messages);

            _this10.$root.Messages = returnedData;
            _this10.$root.selectedSpace = []; // generate unread msg and the mark as read

            _this10.generateUnreadMessage();

            _this10.$root.selectedSpace = finalResult.space;

            if (finalResult.space.type == 'SubSpace') {
              var generalSpace = finalResult.space.gen_space;
              _this10.$root.selectedGenSpaceType = finalResult.space.gen_space.type;
              generalSpace.space_id = finalResult.space.space_id;
              generalSpace.type = finalResult.space.type;
              generalSpace.general_spaceId = finalResult.space.general_spaceId;
              var subSpaceData = finalResult.space.sub_space_data;
              _this10.$root.selectedSubSpaceName = finalResult.space.name;
              _this10.$root.selectedSubSpaceType = subSpaceData.type;
              generalSpace.sub_spaces = finalResult.space.sub_spaces;
              _this10.$root.selectedSpace = generalSpace;
            }

            _this10.$root.TrackLastSubSpace.push(_this10.$root.selectedSpace.general_spaceId, _this10.$route.params.spaceId);

            _this10.$root.selectedSpaceMembers = finalResult.members; // set default admin user

            _this10.autoMakeuserMaster(); // get the message scroller component and scroll to bottom


            _this10.$root.msgScrollComponent = _this10.$refs;
            setTimeout(function () {
              _this10.$root.msgScrollComponent.messageContainer.scrollToBottom();

              _this10.$refs.messageContainersmall.scrollToBottom();

              _this10.messageIsDone = true;
            }, 2000);

            var unreadStoredMsg = _this10.$root.getLocalStore('unread_messages_' + _this10.$route.params.spaceId + _this10.$root.username);

            unreadStoredMsg.then(function (result) {
              var finalResultUnread = JSON.parse(result);

              if (_this10.$root.sendingMessage == false) {
                _this10.periodicUpdate(finalResultUnread);
              }
            }); // check for unsent messages and resend

            var unsentStoredMsg = _this10.$root.getLocalStore('unsent_messages_' + _this10.$route.params.spaceId + _this10.$root.username);

            unsentStoredMsg.then(function (result) {
              var finalResultunsent = JSON.parse(result);

              if (finalResultunsent != null) {
                if (finalResultunsent.length == 0) {
                  _this10.resendMessages();
                }
              } else {
                _this10.resendMessages();
              }
            });
          } else {
            axios.get('/fetch-space-messages-' + _this10.$route.params.spaceId).then(function (response) {
              if (response.status == 200) {
                if (response.data.space.space_id == _this10.$route.params.spaceId) {
                  _this10.$root.spaceFullData = response.data;

                  _this10.$root.LocalStore('full_' + _this10.$route.params.spaceId + _this10.$root.username, response.data);

                  _this10.$root.LocalStore('unread_messages_' + _this10.$route.params.spaceId + _this10.$root.username, []);

                  var _returnedData = _this10.handleResults(response.data.messages);

                  _this10.$root.Messages = _returnedData;
                  _this10.$root.selectedSpace = response.data.space;

                  if (response.data.space.type == 'SubSpace') {
                    var _generalSpace = response.data.space.gen_space;
                    _this10.$root.selectedGenSpaceType = response.data.space.gen_space.type;
                    _generalSpace.space_id = response.data.space.space_id;
                    _generalSpace.type = response.data.space.type;
                    _generalSpace.general_spaceId = response.data.space.general_spaceId;
                    var _subSpaceData = response.data.space.sub_space_data;
                    _this10.$root.selectedSubSpaceName = response.data.space.name;
                    _this10.$root.selectedSubSpaceType = _subSpaceData.type;
                    _generalSpace.sub_spaces = response.data.space.sub_spaces;
                    _this10.$root.selectedSpace = _generalSpace;
                  }

                  if (response.data.space.type == 'Bot') {
                    _this10.botSuggestionArray = response.data.patterns;

                    _this10.$root.LocalStore('bot_latest_suggestions' + _this10.$root.selectedSpace.space_id + _this10.$root.username, response.data[1]);
                  }

                  _this10.$root.TrackLastSubSpace.push(_this10.$root.selectedSpace.general_spaceId, _this10.$route.params.spaceId);

                  _this10.$root.selectedSpaceMembers = response.data.members;
                  _this10.$root.msgScrollComponent = _this10.$refs;
                  setTimeout(function () {
                    _this10.$root.msgScrollComponent.messageContainer.scrollToBottom();

                    _this10.$refs.messageContainersmall.scrollToBottom();

                    _this10.messageIsDone = true;
                  }, 2000);
                }
              }
            })["catch"](function (error) {
              _this10.errorLoadingMessage = true;
            });
          }

          if (_this10.$root.selectedSpace.type == 'Bot') {
            setTimeout(function () {
              _this10.botMessager();
            }, 2000);
          }

          if (_this10.$root.selectedSpace.general_spaceId != undefined) {//      this.getMemberUpdates(this.$root.selectedSpace.general_spaceId);
          }
        });
      }
    }
  },
  checkForUnreadMessagesDisconnected: function checkForUnreadMessagesDisconnected() {
    var _this11 = this;

    if (this.chatIsOpen) {
      var unreadStoredMsg = _this.$root.getLocalStore('unread_messages_' + this.$route.params.spaceId + this.$root.username);

      unreadStoredMsg.then(function (result) {
        var finalResultUnread = JSON.parse(result);

        if (_this11.$root.sendingMessage == false) {
          _this11.periodicUpdate(finalResultUnread);
        }
      });
    }
  },
  getMemberUpdates: function getMemberUpdates(spaceId) {
    var _this12 = this;

    axios.get('/fetch-space-members-' + spaceId).then(function (response) {
      if (response.status == 200) {
        _this12.$root.selectedSpaceMembers = response.data;
      }
    })["catch"](function (error) {});
  },
  botMessager: function botMessager() {
    var _this13 = this;

    if (this.$root.Messages.length == 0) {} else {
      var storedSuggestions = this.$root.getLocalStore('bot_latest_suggestions' + this.$root.selectedSpace.space_id + this.$root.username);
      storedSuggestions.then(function (result) {
        var finalResultUnread = JSON.parse(result);

        if (finalResultUnread != null) {
          _this13.$root.botSuggestionArray = finalResultUnread;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scroller[data-v-19672c8c]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-19672c8c]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n.scrollerinfo[data-v-19672c8c]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollerinfo[data-v-19672c8c]::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n.chatListScroller[data-v-19672c8c]::-webkit-scrollbar {\n  width: 5px;\n}\n.chatListScroller[data-v-19672c8c]::-webkit-scrollbar-thumb {\n    background-color:#3C87CD;\n  outline: 1px solid #3C87CD;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=template&id=19672c8c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Chats.vue?vue&type=template&id=19672c8c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/chats/Chats.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/chats/Chats.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chats_vue_vue_type_template_id_19672c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chats.vue?vue&type=template&id=19672c8c&scoped=true& */ "./resources/js/components/chats/Chats.vue?vue&type=template&id=19672c8c&scoped=true&");
/* harmony import */ var _Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chats.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Chats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chats_vue_vue_type_style_index_0_id_19672c8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css& */ "./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chats_vue_vue_type_template_id_19672c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chats_vue_vue_type_template_id_19672c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19672c8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Chats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Chats.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/chats/Chats.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_19672c8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=style&index=0&id=19672c8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_19672c8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_19672c8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_19672c8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_19672c8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_19672c8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/Chats.vue?vue&type=template&id=19672c8c&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/chats/Chats.vue?vue&type=template&id=19672c8c&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_template_id_19672c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chats.vue?vue&type=template&id=19672c8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=template&id=19672c8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_template_id_19672c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_template_id_19672c8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);