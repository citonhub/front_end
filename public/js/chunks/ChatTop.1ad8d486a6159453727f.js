(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatTop"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MoreOptionChat = function MoreOptionChat() {
  return __webpack_require__.e(/*! import() | MoreOptionChat */ "MoreOptionChat").then(__webpack_require__.bind(null, /*! ./MoreOptionChat.vue */ "./resources/js/components/chats/MoreOptionChat.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this
    };
  },
  components: {
    MoreOptionChat: MoreOptionChat
  },
  methods: {
    showMoreOptions: function showMoreOptions() {
      this.$root.chatComponent.showMoreOptionsChat = true;
    },
    gotToBotChannel: function gotToBotChannel(botChannel) {
      if (this.$root.selectedSpace.bot_data.bot_channel) {
        this.$root.Messages = null;
        this.$root.channel = null; //           this.$root.codeEditorArray = [];
        //  this.$root.returnedMessages = [];
        //  this.$root.messageStoreTop = [];
        //  this.$root.messageStore = [];
        //  this.$root.sharePage = false;
        //  this.$root.showUserInfo = false;
        //      window.Echo.leave('space.' + this.$root.selectedSpace.space_id);
        //   this.$root.forceListReload = true;
        //   this.$root.showUserInfo = false;
        //  this.$root.selectedSpaceMembers = [];
        //   this.$root.SpaceUsers = [];
        //    this.$root.selectedSpace = [];
        //        this.$router.push({ path: '/space/'  +  botChannel  +  '/channel/content/new' + '/user' });
        //           this.$root.channelContentComponent.fetchMessages();
        //      this.$root.channelContentComponent.makeSpaceConnetion();
      }
    },
    showSideBar: function showSideBar(type) {
      if (this.$root.selectedSpace.type == 'Channel' || this.$root.selectedSpace.type == 'Team' || this.$root.selectedSpace.type == 'SubSpace') {
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/' + type
        });
      }

      if (this.$root.selectedSpace.type == 'Direct') {
        this.goToProfile(this.$root.selectedSpace.userInfo.username);
      }
    },
    goToProfile: function goToProfile(username) {
      this.$root.selectedUsername = username;
      this.$router.push({
        path: '/profile-view/' + username
      });
    },
    openLiveSession: function openLiveSession() {
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/live_session'
      });
    },
    checkIfOnline: function checkIfOnline(user_id) {
      var userData = this.$root.globalUsers.filter(function (user) {
        return user.id == user_id;
      });

      if (userData.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    generateOnlineUsers: function generateOnlineUsers() {
      var _this = this;

      var onlineUserList = [];
      this.$root.selectedSpaceMembers.forEach(function (member) {
        var userData = _this.$root.globalUsers.filter(function (user) {
          return user.id == member.user_id;
        });

        if (userData.length != 0) {
          onlineUserList.push(userData[0]);
        }
      });
      return onlineUserList.length;
    },
    goback: function goback() {
      this.$router.push({
        path: '/channels'
      });
      this.$root.chatComponent.chatIsOpen = false;
    },
    imageStyle: function imageStyle(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; cursor:pointer;";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.typingText[data-v-62e3880e]{\nfont-size:12px; \ncolor:grey; \nfont-family:BodyFont;\n}\n.typingTextSm[data-v-62e3880e]{\nfont-size:11px; \ncolor:grey; \nfont-family:BodyFont;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      staticClass: "row application application--light",
      attrs: { "data-app": "true" }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-md-9 py-0 d-lg-flex px-md-1 flex-row  d-none",
          staticStyle: { "align-items": "center" }
        },
        [
          this.$root.selectedSpace.type == "Channel" ||
          this.$root.selectedSpace.type == "Team" ||
          this.$root.selectedSpace.type == "SubSpace"
            ? _c("div", {
                staticClass: "d-inline-block mx-2",
                staticStyle: { width: "42px" },
                style: _vm.imageStyle(40, this.$root.selectedSpace, "channel"),
                on: {
                  click: function($event) {
                    return _vm.showSideBar("channel_info")
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          this.$root.selectedSpace.type == "Bot" &&
          this.$root.selectedSpace.bot_data != null
            ? _c("div", {
                staticClass: "d-inline-block mx-2",
                staticStyle: { width: "42px" },
                style: _vm.imageStyle(
                  40,
                  this.$root.selectedSpace.bot_data,
                  "bot"
                ),
                on: {
                  click: function($event) {
                    return _vm.showSideBar("channel_info")
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          this.$root.selectedSpace.type == "Direct" &&
          this.$root.selectedSpace.userInfo != null
            ? _c("div", {
                staticClass: "d-inline-block mx-2",
                staticStyle: { width: "42px" },
                style: _vm.imageStyle(
                  40,
                  this.$root.selectedSpace.userInfo,
                  "direct"
                ),
                on: {
                  click: function($event) {
                    return _vm.showSideBar("channel_info")
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "d-inline-block" }, [
            _c(
              "div",
              {
                staticStyle: {
                  "white-space": "nowrap",
                  overflow: "hidden",
                  "text-overflow": "ellipsis"
                }
              },
              [
                this.$root.selectedSpace.type != "Direct" &&
                this.$root.selectedSpace.type != "Bot"
                  ? _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "14px",
                          "font-family": "MediumFont",
                          cursor: "pointer"
                        },
                        on: {
                          click: function($event) {
                            return _vm.showSideBar("channel_info")
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(this.$root.selectedSpace.name))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                this.$root.selectedSpace.userInfo != undefined &&
                this.$root.selectedSpace.type == "Direct"
                  ? _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "14px",
                          "font-family": "MediumFont",
                          cursor: "pointer"
                        },
                        on: {
                          click: function($event) {
                            return _vm.showSideBar("channel_info")
                          }
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(this.$root.selectedSpace.userInfo.username)
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                this.$root.selectedSpace.type == "Bot"
                  ? _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "14px",
                          "font-family": "MediumFont",
                          cursor: "pointer"
                        },
                        on: {
                          click: function($event) {
                            return _vm.showSideBar("channel_info")
                          }
                        }
                      },
                      [
                        _vm._v(
                          " " + _vm._s(this.$root.selectedSpace.bot_data.name)
                        )
                      ]
                    )
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  "white-space": "nowrap",
                  overflow: "hidden",
                  "text-overflow": "ellipsis"
                }
              },
              [
                !this.$root.typing &&
                this.$root.typingSpace != this.$root.selectedSpace.space_id
                  ? [
                      this.$root.selectedSpace.type != "Direct" &&
                      this.$root.selectedSpace.type != "SubSpace" &&
                      this.$root.selectedSpaceMembers.length > 1
                        ? _c("span", { staticClass: "typingText d-block" }, [
                            _vm._v(
                              _vm._s(this.$root.selectedSpaceMembers.length) +
                                "  " +
                                _vm._s(_vm.$t("space.members")) +
                                " , " +
                                _vm._s(_vm.generateOnlineUsers()) +
                                "  " +
                                _vm._s(_vm.$t("space.Online"))
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      this.$root.selectedSpace.type == "SubSpace"
                        ? _c(
                            "span",
                            { staticClass: "typingText d-block" },
                            [
                              this.$root.selectedSubSpaceType == "Public"
                                ? _c(
                                    "v-icon",
                                    {
                                      staticClass: "d-inline-block",
                                      staticStyle: { "font-size": "12px" },
                                      attrs: { color: "#333333" }
                                    },
                                    [_vm._v("mdi-pound ")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              this.$root.selectedSubSpaceType == "Private"
                                ? _c(
                                    "v-icon",
                                    {
                                      staticClass: "d-inline-block",
                                      staticStyle: { "font-size": "12px" },
                                      attrs: { color: "#333333" }
                                    },
                                    [_vm._v(" mdi-lock ")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { staticClass: "px-1" }, [
                                _vm._v(
                                  "  " + _vm._s(this.$root.selectedSubSpaceName)
                                )
                              ])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      this.$root.selectedSpace.type == "Bot"
                        ? _c("span", { staticClass: "typingText d-block" }, [
                            _vm._v("\n        Online\n      ")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      this.$root.selectedSpace.type == "Direct" &&
                      _vm.checkIfOnline(this.$root.selectedSpace.userInfo.id)
                        ? _c("span", { staticClass: "typingText d-block" }, [
                            _vm._v(_vm._s(_vm.$t("space.Online")))
                          ])
                        : _vm._e()
                    ]
                  : [
                      _c("span", { staticClass: "typingText d-block" }, [
                        this.$root.selectedSpace.type != "Direct"
                          ? _c("span", [
                              _vm._v(
                                " " + _vm._s(this.$root.typinguser) + " is"
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" typing...  \n        \n            ")
                      ])
                    ]
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-1 py-1 d-none text-right d-lg-block",
          staticStyle: { "align-items": "center" }
        },
        [
          this.$root.selectedSpace.type != "Direct" &&
          this.$root.selectedSpace.type != "Bot"
            ? [
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-2",
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        return _vm.showSideBar("sub_channels")
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("mdi mdi-pound")])],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          this.$root.selectedSpace.type == "Bot"
            ? [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        return _vm.gotToBotChannel(
                          _vm.that.$root.selectedSpace.bot_data.bot_channel
                        )
                      }
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#ffffff" } }, [
                      _vm._v("mdi-account-supervisor-outline")
                    ])
                  ],
                  1
                )
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-1 py-1  d-none text-right px-1 d-lg-block",
          staticStyle: { "align-items": "center" }
        },
        [
          this.$root.selectedSpace.type != "Bot"
            ? [
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-2",
                    attrs: { icon: "" },
                    on: { click: _vm.openLiveSession }
                  },
                  [
                    _vm.that.$root.remoteLiveHappening
                      ? _c(
                          "v-badge",
                          { attrs: { dot: "", color: "green" } },
                          [_c("v-icon", [_vm._v("mdi-television-play")])],
                          1
                        )
                      : _c("v-icon", [_vm._v("mdi-television-play")])
                  ],
                  1
                )
              ]
            : _c(
                "v-btn",
                { attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("mdi-comment-question-outline")])],
                1
              )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-1 py-1 text-right d-none d-lg-block",
          staticStyle: { "align-items": "center" }
        },
        [
          _c(
            "v-btn",
            { staticClass: "showMoreChat", attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("las la-ellipsis-v")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              staticStyle: { "z-index": "99999999999999999999" },
              attrs: {
                absolute: "",
                activator: ".showMoreChat",
                left: "",
                "offset-y": ""
              }
            },
            [_c("more-option-chat")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-12 py-0 d-flex  flex-row d-lg-none px-1",
          staticStyle: { "align-items": "center" }
        },
        [
          _c(
            "v-btn",
            {
              staticClass: "d-lg-none d-inline-block",
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.goback($event)
                }
              }
            },
            [
              _c("v-icon", { staticStyle: { "font-size": "24px" } }, [
                _vm._v("las la-arrow-left")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "d-flex",
              staticStyle: {
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              this.$root.selectedSpace.type == "Channel" ||
              this.$root.selectedSpace.type == "Team" ||
              this.$root.selectedSpace.type == "SubSpace"
                ? _c("div", {
                    staticClass: "d-inline-block mr-1",
                    style: _vm.imageStyle(
                      38,
                      this.$root.selectedSpace,
                      "channel"
                    ),
                    on: {
                      click: function($event) {
                        return _vm.showSideBar("channel_info")
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              this.$root.selectedSpace.type == "Bot" &&
              this.$root.selectedSpace.bot_data != null
                ? _c("div", {
                    staticClass: "d-inline-block mr-1",
                    style: _vm.imageStyle(
                      38,
                      this.$root.selectedSpace.bot_data,
                      "bot"
                    ),
                    on: {
                      click: function($event) {
                        return _vm.showSideBar("channel_info")
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              this.$root.selectedSpace.type == "Direct" &&
              this.$root.selectedSpace.userInfo != null
                ? _c("div", {
                    staticClass: "d-inline-block mr-1",
                    style: _vm.imageStyle(
                      38,
                      this.$root.selectedSpace.userInfo,
                      "direct"
                    ),
                    on: {
                      click: function($event) {
                        return _vm.showSideBar("channel_info")
                      }
                    }
                  })
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "d-inline-block  py-0 px-0",
              staticStyle: { width: "40%" }
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    "white-space": "nowrap",
                    overflow: "hidden",
                    "text-overflow": "ellipsis"
                  }
                },
                [
                  this.$root.selectedSpace.type != "Direct" &&
                  this.$root.selectedSpace.type != "Bot"
                    ? _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont",
                            cursor: "pointer"
                          },
                          on: {
                            click: function($event) {
                              return _vm.showSideBar("channel_info")
                            }
                          }
                        },
                        [_vm._v(" " + _vm._s(this.$root.selectedSpace.name))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.$root.selectedSpace.userInfo != undefined &&
                  this.$root.selectedSpace.type == "Direct"
                    ? _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont",
                            cursor: "pointer"
                          },
                          on: {
                            click: function($event) {
                              return _vm.showSideBar("channel_info")
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(this.$root.selectedSpace.userInfo.username)
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.$root.selectedSpace.type == "Bot"
                    ? _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont",
                            cursor: "pointer"
                          },
                          on: {
                            click: function($event) {
                              return _vm.showSideBar("channel_info")
                            }
                          }
                        },
                        [
                          _vm._v(
                            " " + _vm._s(this.$root.selectedSpace.bot_data.name)
                          )
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticStyle: {
                      "white-space": "nowrap",
                      overflow: "hidden",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [
                    !this.$root.typing &&
                    this.$root.typingSpace != this.$root.selectedSpace.space_id
                      ? [
                          this.$root.selectedSpace.type != "Direct" &&
                          this.$root.selectedSpace.type != "SubSpace" &&
                          this.$root.selectedSpaceMembers.length > 1
                            ? _c(
                                "span",
                                { staticClass: "typingTextSm d-block" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      this.$root.selectedSpaceMembers.length
                                    ) +
                                      "  " +
                                      _vm._s(_vm.$t("space.members")) +
                                      " , " +
                                      _vm._s(_vm.generateOnlineUsers()) +
                                      "  " +
                                      _vm._s(_vm.$t("space.Online"))
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          this.$root.selectedSpace.type == "SubSpace"
                            ? _c(
                                "span",
                                { staticClass: "typingTextSm d-block" },
                                [
                                  this.$root.selectedSubSpaceType == "Public"
                                    ? _c(
                                        "v-icon",
                                        {
                                          staticClass: "d-inline-block",
                                          staticStyle: { "font-size": "12px" },
                                          attrs: { color: "#333333" }
                                        },
                                        [_vm._v("mdi-pound ")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  this.$root.selectedSubSpaceType == "Private"
                                    ? _c(
                                        "v-icon",
                                        {
                                          staticClass: "d-inline-block",
                                          staticStyle: { "font-size": "12px" },
                                          attrs: { color: "#333333" }
                                        },
                                        [_vm._v(" mdi-lock ")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "  " +
                                        _vm._s(this.$root.selectedSubSpaceName)
                                    )
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          this.$root.selectedSpace.type == "Bot"
                            ? _c(
                                "span",
                                { staticClass: "typingTextSm d-block" },
                                [_vm._v("\n        Online\n      ")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          this.$root.selectedSpace.type == "Direct" &&
                          _vm.checkIfOnline(
                            this.$root.selectedSpace.userInfo.id
                          )
                            ? _c(
                                "span",
                                { staticClass: "typingTextSm d-block" },
                                [_vm._v(_vm._s(_vm.$t("space.Online")))]
                              )
                            : _vm._e()
                        ]
                      : [
                          _c("span", { staticClass: "typingTextSm d-block" }, [
                            this.$root.selectedSpace.type != "Direct"
                              ? _c("span", [
                                  _vm._v(
                                    " " + _vm._s(this.$root.typinguser) + " is"
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(
                              " typing... \n        \n                         "
                            )
                          ])
                        ]
                  ],
                  2
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ml-auto d-flex flex-row",
              staticStyle: {
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              this.$root.selectedSpace.type != "Direct" &&
              this.$root.selectedSpace.type != "Bot"
                ? [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-2",
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            return _vm.showSideBar("sub_channels")
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi mdi-pound")])],
                      1
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              this.$root.selectedSpace.type == "Bot"
                ? [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            return _vm.gotToBotChannel(
                              _vm.that.$root.selectedSpace.bot_data.bot_channel
                            )
                          }
                        }
                      },
                      [
                        _c("v-icon", { attrs: { color: "#ffffff" } }, [
                          _vm._v("mdi-account-supervisor-outline")
                        ])
                      ],
                      1
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              this.$root.selectedSpace.type != "Bot"
                ? [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-2",
                        attrs: { small: "", icon: "" },
                        on: { click: _vm.openLiveSession }
                      },
                      [
                        _vm.that.$root.remoteLiveHappening
                          ? _c(
                              "v-badge",
                              { attrs: { dot: "", color: "green" } },
                              [_c("v-icon", [_vm._v("mdi-television-play")])],
                              1
                            )
                          : _c("v-icon", [_vm._v("mdi-television-play")])
                      ],
                      1
                    )
                  ]
                : _c(
                    "v-btn",
                    { attrs: { small: "", icon: "" } },
                    [_c("v-icon", [_vm._v("mdi-comment-question-outline")])],
                    1
                  ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { small: "", icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.showMoreOptions()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("las la-ellipsis-v")])],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ChatTop.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/chats/ChatTop.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& */ "./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&");
/* harmony import */ var _ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatTop.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatTop_vue_vue_type_style_index_0_id_62e3880e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css& */ "./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62e3880e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChatTop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatTop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_style_index_0_id_62e3880e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=style&index=0&id=62e3880e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_style_index_0_id_62e3880e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_style_index_0_id_62e3880e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_style_index_0_id_62e3880e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_style_index_0_id_62e3880e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_style_index_0_id_62e3880e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);