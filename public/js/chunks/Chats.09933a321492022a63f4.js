(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chats"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Chats.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Chats.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstraps_globalPackage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bootstraps/globalPackage */ "./resources/js/bootstraps/globalPackage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


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
  return Promise.all(/*! import() | ChatList */[__webpack_require__.e("vendors~ChatList"), __webpack_require__.e("ChatList")]).then(__webpack_require__.bind(null, /*! ./ChatList.vue */ "./resources/js/components/chats/ChatList.vue"));
};

var ChatMessages = function ChatMessages() {
  return __webpack_require__.e(/*! import() | ChatMessages */ "ChatMessages").then(__webpack_require__.bind(null, /*! ./ChatMessages.vue */ "./resources/js/components/chats/ChatMessages.vue"));
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
      chatInnerConent: ''
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
    controlChatPath: function controlChatPath() {
      if (this.$route.params.space_id != undefined) {
        this.chatIsOpen = true;
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.chatInnerSideBar = false;
    },
    showCreateChannel: function showCreateChannel() {
      var _this = this;

      this.$router.push({
        path: '/channels/create'
      });
      this.chatbarContent = '';
      this.chatInnerConent = '';
      setTimeout(function () {
        _this.chatbarContent = 'create_channel';
      }, 500);
    },
    showCodeEditor: function showCodeEditor() {
      this.$router.push({
        path: '/channels/space_id/editor'
      });
    },
    fetchChatList: function fetchChatList() {
      var _this2 = this;

      if (this.$root.checkauthroot == 'auth') {
        if (this.$root.ChatList.length == 0) {
          var storedChat = this.$root.getLocalStore('user_chat_list' + this.$root.username);
          storedChat.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);
              var fullList = finalResult.channels.concat(finalResult.direct_messages, finalResult.pet_spaces);
              fullList.map(function (space) {
                space.unread = _this2.getUnread(space.space_id);
              });
              _this2.$root.ChatList = fullList;

              _this2.$root.sortChatList(); // get all new messages


              _this2.$root.updateSpaceMessages();
            } else {
              axios.get('/fetch-chat-list/' + _this2.$root.userDeviceId).then(function (response) {
                if (response.status == 200) {
                  var responseList = response.data;
                  _this2.$root.ChatList = responseList.channels.concat(responseList.direct_messages, responseList.pet_spaces);

                  _this2.$root.LocalStore('user_chat_list' + _this2.$root.username, response.data);

                  _this2.$root.sortChatList();
                }
              })["catch"](function (error) {});
            }
          });
        }
      }
    },
    getUnread: function getUnread(space_id) {
      var unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + space_id + this.$root.username);
      unreadStoredMsg.then(function (result) {
        if (result != null) {
          var finalResultUnread = JSON.parse(result);
          return finalResultUnread.length;
        } else {
          return 0;
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
exports.push([module.i, "\n.scroller[data-v-19672c8c]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-19672c8c]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n.scrollerinfo[data-v-19672c8c]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollerinfo[data-v-19672c8c]::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n.chatListScroller[data-v-19672c8c]::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 7px;\n}\n.chatListScroller[data-v-19672c8c]::-webkit-scrollbar-thumb {\n    background-color:grey;\n  outline: 1px solid grey;\n}\n\n\n", ""]);

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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticStyle: {
        position: "fixed",
        height: "100%",
        background: "#F5F5FB",
        top: "0",
        left: "0",
        width: "100%",
        "z-index": "9999999999999"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-12 py-0 fixed-top",
          staticStyle: { position: "sticky", width: "100%", height: "auto" }
        },
        [_c("top-bar")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            " col-lg-10 py-0 px-0 offset-lg-1 d-lg-block d-none card ",
          staticStyle: {
            "overflow-y": "hidden",
            position: "absolute",
            height: "86%",
            top: "10%",
            "overflow-x": "hidden",
            background: "white"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "py-2 chatListScroller",
              staticStyle: {
                height: "100%",
                width: "28%",
                left: "0%",
                position: "absolute",
                "overflow-y": "auto",
                "overflow-x": "hidden",
                "border-right": "1px solid #c5c5c5"
              }
            },
            [
              _c(
                "div",
                { staticClass: "row  px-2" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12 py-1 pb-0 mb-0 text-center d-flex flex-row fixed-top",
                      staticStyle: {
                        position: "sticky",
                        background: "white",
                        top: "-1%"
                      }
                    },
                    [
                      _c("v-text-field", {
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          placeholder: "Search",
                          filled: "",
                          dense: "",
                          rounded: ""
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: { click: _vm.showCreateChannel }
                        },
                        [_c("v-icon", [_vm._v("mdi mdi-chat-plus-outline")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-slide-x-reverse-transition", [
                    _vm.chatbarContent == "chat_list"
                      ? _c(
                          "div",
                          { staticClass: "col-12 mt-n3 px-3 py-0" },
                          [_c("chat-list")],
                          1
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("v-slide-x-reverse-transition", [
                    _vm.chatbarContent == "create_channel"
                      ? _c(
                          "div",
                          {
                            staticClass: "col-12 py-0 px-0",
                            staticStyle: {
                              background: "#ffffff",
                              "border-top": "1px solid #c5c5c5",
                              "overflow-x": "hidden",
                              left: "0",
                              position: "absolute",
                              height: "100%",
                              top: "0%",
                              "z-index": "9999999999999"
                            }
                          },
                          [_c("create-channel")],
                          1
                        )
                      : _vm._e()
                  ])
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "  px-0 py-0",
              staticStyle: {
                height: "100%",
                width: "72%",
                left: "28%",
                position: "absolute",
                "overflow-x": "hidden",
                "overflow-y": "hidden"
              }
            },
            [
              _c(
                "div",
                { staticClass: "row py-0" },
                [
                  _vm.chatIsOpen
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "col-12 py-1",
                            staticStyle: {
                              background: "#ffffff",
                              "border-bottom": "1px solid #c5c5c5",
                              left: "0",
                              position: "absolute",
                              top: "0%",
                              "z-index": "999999999999"
                            }
                          },
                          [_c("chat-top")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-12 scroller",
                            staticStyle: {
                              background: "#E1F0FC",
                              height: "93%",
                              left: "0",
                              position: "absolute",
                              "z-index": "99",
                              top: "0%",
                              "padding-top": "80px",
                              "padding-bottom": "130px",
                              "overflow-y": "auto"
                            }
                          },
                          [_c("chat-messages")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-12 py-1",
                            staticStyle: {
                              background: "#ffffff",
                              "border-top": "1px solid #c5c5c5",
                              left: "0",
                              position: "absolute",
                              bottom: "0%",
                              "z-index": "999999999999"
                            }
                          },
                          [_c("chat-bottom")],
                          1
                        )
                      ]
                    : [_vm._m(0)],
                  _vm._v(" "),
                  _vm.chatIsOpen && _vm.chatInnerConent == "code_editor"
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 py-0 px-0",
                          staticStyle: {
                            background: "#ffffff",
                            "border-top": "1px solid #c5c5c5",
                            left: "0",
                            position: "absolute",
                            height: "93%",
                            top: "7%",
                            "z-index": "9999999999999"
                          }
                        },
                        [_c("code-editor-chat")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.chatIsOpen && _vm.chatInnerConent == "image_viewer"
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 py-0 px-0",
                          staticStyle: {
                            background: "#ffffff",
                            "border-top": "1px solid #c5c5c5",
                            left: "0",
                            position: "absolute",
                            height: "93%",
                            top: "7%",
                            "z-index": "9999999999999"
                          }
                        },
                        [_c("image-viewer")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-slide-x-reverse-transition", [
                    _vm.chatIsOpen && _vm.chatInnerSideBar
                      ? _c(
                          "div",
                          {
                            staticClass: "col-12 py-0 px-0",
                            staticStyle: {
                              "overflow-x": "hidden",
                              background: "rgba(27, 27, 30, 0.32)",
                              "border-top": "1px solid #c5c5c5",
                              left: "0",
                              position: "absolute",
                              height: "93%",
                              top: "7%",
                              "z-index": "9999999999999"
                            },
                            on: { click: _vm.goBack }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  position: "absolute",
                                  height: "100%",
                                  width: "70%",
                                  left: "30%"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "scrollerinfo offset-lg-6",
                                    staticStyle: {
                                      background: "white",
                                      height: "100%",
                                      "overflow-y": "auto",
                                      "overflow-x": "hidden"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        _vm.chatInnerSideBar = true
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "v-slide-x-reverse-transition",
                                      [
                                        _vm.innerSideBarContent ==
                                        "channel_info"
                                          ? _c("channel-info")
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-slide-x-reverse-transition",
                                      [
                                        _vm.innerSideBarContent ==
                                        "channel_edit"
                                          ? _c("channel-edit")
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-slide-x-reverse-transition",
                                      [
                                        _vm.innerSideBarContent ==
                                        "sub_channels"
                                          ? _c("sub-channels")
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-slide-x-reverse-transition",
                                      [
                                        _vm.innerSideBarContent ==
                                        "add_sub_channel"
                                          ? _c("add-sub-channel")
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("v-fade-transition", [
                    _vm.chatIsOpen &&
                    !_vm.chatInnerSideBar &&
                    _vm.liveSessionIsOpen
                      ? _c(
                          "div",
                          {
                            staticClass: "col-12 py-0 px-0",
                            staticStyle: {
                              background: "rgba(27, 27, 30, 0.4)",
                              "border-top": "1px solid #c5c5c5",
                              left: "0",
                              position: "absolute",
                              height: "93%",
                              top: "7%",
                              "z-index": "9999999999999"
                            }
                          },
                          [_c("live-session")],
                          1
                        )
                      : _vm._e()
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _vm.chatIsOpen
                ? _c(
                    "v-btn",
                    {
                      staticClass: "d-lg-inline-block d-none",
                      staticStyle: {
                        "z-index": "99999999",
                        position: "absolute",
                        bottom: "12%",
                        right: "1%"
                      },
                      attrs: { medium: "", fab: "", color: "#3C87CD" },
                      on: { click: _vm.showCodeEditor }
                    },
                    [
                      _c(
                        "v-icon",
                        {
                          staticStyle: { "font-size": "25px", color: "white" }
                        },
                        [_vm._v("las la-code")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: " col-12 py-0  d-lg-none",
          staticStyle: {
            position: "absolute",
            height: "100%",
            top: "0%",
            left: "0",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            background: "white"
          }
        },
        [
          !_vm.chatIsOpen
            ? [
                _c("v-slide-x-reverse-transition", [
                  _vm.chatbarContent == "chat_list"
                    ? _c(
                        "div",
                        {
                          staticClass: "pt-2 pt-md-0",
                          staticStyle: {
                            position: "absolute",
                            width: "100%",
                            height: "92%",
                            top: "8%",
                            left: "0"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "col-12 px-3" },
                            [_c("chat-list")],
                            1
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("v-slide-x-reverse-transition", [
                  _vm.chatbarContent == "create_channel"
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 py-0 px-0",
                          staticStyle: {
                            background: "#ffffff",
                            left: "0",
                            position: "fixed",
                            height: "100%",
                            top: "0%",
                            "z-index": "9999999999999"
                          }
                        },
                        [_c("create-channel")],
                        1
                      )
                    : _vm._e()
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.chatIsOpen
            ? [
                _c("div", { staticClass: "row py-0" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 py-1",
                      staticStyle: {
                        background: "#ffffff",
                        "border-bottom": "1px solid #c5c5c5",
                        left: "0",
                        position: "fixed",
                        top: "0%",
                        "z-index": "999999999999"
                      }
                    },
                    [_c("chat-top")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-12 scroller px-1",
                      staticStyle: {
                        background: "#E1F0FC",
                        "overflow-x": "hidden",
                        height: "90%",
                        left: "0",
                        position: "fixed",
                        "z-index": "999999999",
                        top: "0%",
                        "padding-top": "80px",
                        "padding-bottom": "130px",
                        "overflow-y": "auto"
                      }
                    },
                    [
                      _c("chat-messages"),
                      _vm._v(" "),
                      _vm.chatIsOpen
                        ? _c(
                            "v-btn",
                            {
                              staticStyle: {
                                "z-index": "9999999999",
                                position: "fixed",
                                bottom: "15%",
                                right: "2%"
                              },
                              attrs: { fab: "", color: "#3C87CD" },
                              on: { click: _vm.showCodeEditor }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticStyle: {
                                    "font-size": "25px",
                                    color: "white"
                                  }
                                },
                                [_vm._v("las la-code")]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-12 py-1 px-2",
                      staticStyle: {
                        background: "#ffffff",
                        "border-top": "1px solid #c5c5c5",
                        left: "0",
                        position: "fixed",
                        bottom: "0%",
                        "z-index": "9999999999"
                      }
                    },
                    [_c("chat-bottom")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.chatIsOpen && _vm.chatInnerConent == "code_editor"
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 py-0 px-0",
                          staticStyle: {
                            background: "#ffffff",
                            "border-top": "1px solid #c5c5c5",
                            left: "0",
                            position: "fixed",
                            height: "100%",
                            top: "0%",
                            "z-index": "999999999999"
                          }
                        },
                        [_c("code-editor-chat")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.chatIsOpen && _vm.chatInnerConent == "image_viewer"
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 py-0 px-0",
                          staticStyle: {
                            background: "#ffffff",
                            "border-top": "1px solid #c5c5c5",
                            left: "0",
                            position: "fixed",
                            height: "100%",
                            top: "0%",
                            "z-index": "999999999999"
                          }
                        },
                        [_c("image-viewer")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.chatIsOpen && _vm.chatInnerSideBar
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 py-0 px-0",
                          staticStyle: {
                            background: "rgba(27, 27, 30, 0.32)",
                            left: "0",
                            position: "fixed",
                            height: "100%",
                            top: "0%",
                            "z-index": "99999999999999999"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0%"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "scrollerinfo col-md-6 offset-md-6 px-0 py-0 pb-2",
                                  staticStyle: {
                                    background: "white",
                                    height: "100%",
                                    "overflow-y": "auto",
                                    "overflow-x": "hidden"
                                  }
                                },
                                [
                                  _c(
                                    "v-slide-x-reverse-transition",
                                    [
                                      _vm.innerSideBarContent == "channel_info"
                                        ? _c("channel-info")
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-slide-x-reverse-transition",
                                    [
                                      _vm.innerSideBarContent == "channel_edit"
                                        ? _c("channel-edit")
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-slide-x-reverse-transition",
                                    [
                                      _vm.innerSideBarContent == "sub_channels"
                                        ? _c("sub-channels")
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-slide-x-reverse-transition",
                                    [
                                      _vm.innerSideBarContent ==
                                      "add_sub_channel"
                                        ? _c("add-sub-channel")
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.chatIsOpen &&
                  !_vm.chatInnerSideBar &&
                  _vm.liveSessionIsOpen
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 py-0 px-0",
                          staticStyle: {
                            background: "rgba(27, 27, 30, 0.4)",
                            left: "0",
                            position: "fixed",
                            height: "100%",
                            top: "0%",
                            "z-index": "9999999999999"
                          }
                        },
                        [_c("live-session")],
                        1
                      )
                    : _vm._e()
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "d-lg-none d-inline-block",
              staticStyle: {
                "z-index": "99999999",
                position: "fixed",
                bottom: "3%",
                right: "3%"
              },
              attrs: { fab: "", color: "#3C87CD" },
              on: { click: _vm.showCreateChannel }
            },
            [
              _c(
                "v-icon",
                { staticStyle: { "font-size": "24px", color: "white" } },
                [_vm._v("mdi mdi-chat-plus-outline")]
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("v-slide-x-transition", [
        _vm.that.$root.showSideBar
          ? _c(
              "div",
              {
                staticClass: "col-12  py-0 px-0",
                staticStyle: {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  "z-index": "9999999999999",
                  background: "rgba(27, 27, 30, 0.32)"
                },
                on: {
                  click: function($event) {
                    _vm.that.$root.showSideBar = false
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: {
                      position: "absolute",
                      height: "100%",
                      width: "70%",
                      left: "0"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-6 col-lg-3 pt-2",
                        staticStyle: { background: "white", height: "100%" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.that.$root.showSideBar = true
                          }
                        }
                      },
                      [_c("sidebar")],
                      1
                    )
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 d-flex flex-column",
        staticStyle: {
          background: "#ffffff",
          "z-index": "99",
          "overflow-x": "hidden",
          "align-items": "center",
          "justify-content": "center",
          height: "100%",
          left: "0",
          position: "absolute",
          top: "0%"
        }
      },
      [
        _c("img", { attrs: { src: "/imgs/chat_side.svg", height: "250px" } }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "d-flex flex-column mt-5 px-5",
            staticStyle: {
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c(
              "blockquote",
              {
                staticClass: "fill",
                staticStyle: {
                  "font-family": "BodyFont",
                  "font-size": "15px",
                  color: "black"
                }
              },
              [
                _vm._v(
                  "Knowing is not enough; we must apply. Wishing is not enough; we must do."
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "text-center",
                staticStyle: {
                  "font-family": "HeaderFont",
                  "font-size": "15px"
                }
              },
              [
                _vm._v(
                  "\n                              - Rob Siltanen\n                           "
                )
              ]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/bootstraps/globalPackage.js":
/*!**************************************************!*\
  !*** ./resources/js/bootstraps/globalPackage.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-izitoast */ "./node_modules/vue-izitoast/dist/vue-izitoast.js");
/* harmony import */ var vue_izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
// alert


Vue.use(vue_izitoast__WEBPACK_IMPORTED_MODULE_0___default.a);

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