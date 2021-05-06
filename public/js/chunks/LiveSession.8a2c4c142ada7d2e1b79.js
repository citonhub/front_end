(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LiveSession"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      liveBoardContent: 'action_list',
      showMemberBoard: false,
      that: this
    };
  },
  computed: {},
  mounted: function mounted() {
    this.$root.componentIsLoading = false;

    if (this.$root.liveIsOn) {
      this.$root.liveBoardContent = 'audio_speaker';

      if (this.$root.remoteLiveHappening) {
        if (this.$root.remoteScreen) {
          this.selectAction('screen_sharing');
        }

        if (this.$root.remoteCode) {
          this.selectAction('live_coding');
        }

        if (this.$root.remoteAudio) {
          this.selectAction('voice_chat');
        }
      }
    } else {
      this.$root.liveBoardContent = 'action_list';
    }
  },
  methods: (_methods = {
    muteAudio: function muteAudio() {
      if (this.$root.audioconnection) {
        this.$root.localAudioMuted = true;
        var localStream = this.$root.audioconnection.attachStreams[0];
        localStream.mute('audio');
      }
    },
    unmuteAudio: function unmuteAudio() {
      if (this.$root.audioconnection) {
        this.$root.localAudioMuted = false;
        var localStream = this.$root.audioconnection.attachStreams[0];
        localStream.unmute('audio');
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.liveSessionIsOpen = false;
    },
    toggleView: function toggleView() {
      if (this.$root.liveBoardContent == 'action_list') {
        if (this.$root.liveIsOn) {
          this.$root.liveBoardContent = 'audio_speaker';
        } else {
          this.$root.liveBoardContent == 'action_list';
        }
      } else {
        this.$root.liveBoardContent = 'action_list';
      }
    },
    closeConnections: function closeConnections() {
      var _this = this;

      if (this.$root.audioconnection != undefined) {
        // disconnect with all users
        this.$root.audioconnection.getAllParticipants().forEach(function (pid) {
          _this.$root.audioconnection.disconnectWith(pid);
        }); // stop all local cameras

        this.$root.audioconnection.attachStreams.forEach(function (localStream) {
          localStream.stop();
        }); // close socket.io connection

        this.$root.audioconnection.closeSocket();
        this.$root.dataconnection.closeSocket();
      }

      if (this.$root.connection != undefined) {
        // disconnect with all users
        this.$root.connection.getAllParticipants().forEach(function (pid) {
          _this.$root.connection.disconnectWith(pid);
        }); // stop all local cameras

        this.$root.connection.attachStreams.forEach(function (localStream) {
          localStream.stop();
        });
        this.$root.connection.closeSocket();
      }

      this.$root.connection = undefined;
      this.$root.audioconnection = undefined;
      this.$root.dataconnection = undefined;
      this.$root.screenSharingOn = false;
      this.$root.liveIsOn = false;
      this.$root.showVideoScreen = false;
      this.$root.codeIsLive = false;
      this.$root.liveInitiated = false;
      this.$root.presentRoomId = null;
      this.$root.remoteLiveHappening = false;
      this.$root.remoteCode = false;
      this.$root.remoteScreen = false;
      this.$root.remoteAudio = false;
      this.$root.connectingToSocket = false;
      this.$root.allAudioParticipant = [];
      this.$root.roomNotExist = false;
      this.$root.localAudioMuted = false;
      this.$root.roomCheckingInitaited = false;
      this.$root.manuallyClosed = true;
      this.goBack();
    }
  }, _defineProperty(_methods, "muteAudio", function muteAudio() {
    var localStream = this.$root.audioconnection.attachStreams[0];
    localStream.mute('audio');
    this.$root.localAudioMuted = true;
  }), _defineProperty(_methods, "unmuteAudio", function unmuteAudio() {
    var localStream = this.$root.audioconnection.attachStreams[0];
    localStream.unmute('audio');
    this.$root.localAudioMuted = false;
  }), _defineProperty(_methods, "imageStyle", function imageStyle(dimension, data) {
    if (data.background_color == null) {
      var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";
      styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
      return styleString;
    } else {
      var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

      var imgLink = data.image_name + '.' + data.image_extension;
      _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
      return _styleString;
    }
  }), _defineProperty(_methods, "imageStyleExtra", function imageStyleExtra(dimension, data) {
    if (data.background_color == null) {
      var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;  border:5px solid #3C87CD; margin-top:-50px;";
      styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
      return styleString;
    } else {
      var _styleString2 = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;  border:5px solid #3C87CD; margin-top:-50px;";

      var imgLink = data.image_name + '.' + data.image_extension;
      _styleString2 += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
      return _styleString2;
    }
  }), _defineProperty(_methods, "selectAction", function selectAction(type) {
    this.$root.manuallyClosed = false;

    if (type == 'voice_chat') {
      this.$root.liveBoardContent = 'audio_speaker';
      this.connectAudio();
      this.$root.sendLiveSignal('audio');
    }

    if (type == 'screen_sharing') {
      this.$root.liveBoardContent = 'audio_speaker';
      this.connectScreen();
      this.$root.sendLiveSignal('screen');
    }

    if (type == 'live_coding') {
      this.$root.liveBoardContent = 'audio_speaker';
      this.connectAudio();
      this.$root.fromLiveSession = true;
      this.$root.chatComponent.liveSessionIsOpen = false;
      this.$root.codeIsLive = true;
      this.$root.sendLiveSignal('code');
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/editor'
      });
    }
  }), _defineProperty(_methods, "checkIfMaster", function checkIfMaster() {
    var _this2 = this;

    var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
      return members.user_id == _this2.$root.user_temp_id;
    });

    if (userMemberData.length != 0) {
      return userMemberData[0].master_user;
    } else {
      return false;
    }
  }), _defineProperty(_methods, "connectAudio", function connectAudio() {
    this.$root.remoteLiveHappening = true;
    this.$root.remoteAudio = true;
    this.$root.liveIsOn = true;

    if (this.$root.audioconnection == undefined) {
      this.$root.setAudioConnection();
      this.$root.setDataConnection();

      if (this.checkIfMaster()) {
        this.$root.checkAudioRoomState(true);
      } else {
        this.$root.checkAudioRoomState(false);
      } //  this.$root.sendLiveSignal('audio');

    } else {//    this.$root.sendLiveSignal('audio');
        //  this.$root.screenSharingOn = true; 
      }
  }), _defineProperty(_methods, "connectScreen", function connectScreen() {
    if (this.$root.connection == undefined) {
      this.$root.setSreenShareConnection();
      this.$root.remoteLiveHappening = true;
      this.$root.remoteScreen = true;

      if (this.checkIfMaster()) {
        this.$root.checkScreenRoomState(true);
      } else {
        this.$root.checkScreenRoomState(false);
      }

      this.$root.showVideoScreen = true; //this.$root.sendLiveSignal('screen');

      this.$root.screenSharingOn = true;
      this.$root.liveIsOn = true;
    } else {
      this.$root.screenSharingOn = true;
      this.$root.remoteLiveHappening = true;
      this.$root.showVideoScreen = true; // this.$root.sendLiveSignal('screen');

      this.$root.remoteScreen = true;
      this.$root.liveIsOn = true;
    }

    this.connectAudio();
  }), _methods)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollerinfo[data-v-7c1a338a]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollerinfo[data-v-7c1a338a]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n.appBox[data-v-7c1a338a] {\n  cursor: pointer;\n}\n.circle-ripple[data-v-7c1a338a] {\n  background-color: #3C87CD;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  animation: ripple-data-v-7c1a338a 0.7s linear infinite;\n}\n@keyframes ripple-data-v-7c1a338a {\n0% {\n    box-shadow: 0 0 0 0 rgba(60, 135, 205, 0.3), 0 0 0 1em rgba(60, 135, 205, 0.3);\n}\n100% {\n    box-shadow: 0 0 0 1em rgba(60, 135, 205, 0.3), 0 0 0 3em rgba(60, 135, 205, 0.3);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "d-flex flex-row",
      staticStyle: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: "0%"
      }
    },
    [
      _c(
        "v-btn",
        {
          staticClass: "d-inline-block  ",
          staticStyle: {
            position: "absolute",
            background: "#3C87CD",
            top: "2%",
            left: "2%",
            "z-index": "990679797879"
          },
          attrs: { icon: "", color: "#ffffff" },
          on: { click: _vm.goBack }
        },
        [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
        1
      ),
      _vm._v(" "),
      !_vm.that.$root.showMemberBoard && _vm.that.$root.liveIsOn
        ? _c(
            "div",
            {
              staticClass: "px-2 py-1 appBox",
              staticStyle: {
                background: "white",
                position: "absolute",
                top: "0",
                right: "0",
                "z-index": "89999999999"
              }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-1",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      _vm.that.$root.showMemberBoard = true
                    }
                  }
                },
                [
                  _c(
                    "v-badge",
                    { attrs: { dot: "", color: "green" } },
                    [_c("v-icon", [_vm._v("las la-user-friends ")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: " d-flex flex-row",
          staticStyle: {
            "align-items": "center",
            "justify-content": "center",
            background: "transparent",
            height: "100%",
            width: "100%",
            "overflow-y": "auto",
            "overflow-x": "hidden"
          }
        },
        [
          this.$root.liveBoardContent == "action_list"
            ? [
                _c(
                  "div",
                  {
                    staticClass: " col-4 col-lg-2 px-2 my-0 py-2 ",
                    staticStyle: { "z-index": "9999999" }
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "px-1 py-1 appBox",
                        staticStyle: {
                          height: "100px",
                          "border-radius": "7px",
                          background: "white"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectAction("voice_chat")
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex",
                            staticStyle: {
                              height: "100%",
                              "align-items": "center",
                              "justify-content": "center",
                              width: "100%"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "text-center" },
                              [
                                _vm.that.$root.remoteAudio &&
                                _vm.that.$root.remoteLiveHappening
                                  ? _c(
                                      "v-badge",
                                      { attrs: { dot: "", color: "green" } },
                                      [
                                        _c("i", {
                                          staticClass: "las la-phone",
                                          staticStyle: { "font-size": "30px" }
                                        })
                                      ]
                                    )
                                  : _c("i", {
                                      staticClass: "las la-phone",
                                      staticStyle: { "font-size": "30px" }
                                    }),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "13px",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Voice Chat")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: " col-4 col-lg-2 px-2 my-0 py-2 ",
                    staticStyle: { "z-index": "9999999" }
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "px-1 py-1 appBox",
                        staticStyle: {
                          height: "100px",
                          "border-radius": "7px",
                          "margin-top": "-150px",
                          background: "white"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectAction("live_coding")
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex",
                            staticStyle: {
                              height: "100%",
                              "align-items": "center",
                              "justify-content": "center",
                              width: "100%"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "text-center" },
                              [
                                _vm.that.$root.remoteCode &&
                                _vm.that.$root.remoteLiveHappening
                                  ? _c(
                                      "v-badge",
                                      { attrs: { dot: "", color: "green" } },
                                      [
                                        _c("i", {
                                          staticClass: "las la-terminal",
                                          staticStyle: { "font-size": "30px" }
                                        })
                                      ]
                                    )
                                  : _c("i", {
                                      staticClass: "las la-terminal",
                                      staticStyle: { "font-size": "30px" }
                                    }),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "13px",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Live Coding")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: " col-4 col-lg-2 px-2 my-0 py-2 ",
                    staticStyle: { "z-index": "9999999" }
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "px-1 py-1 appBox",
                        staticStyle: {
                          height: "100px",
                          "border-radius": "7px",
                          background: "white"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectAction("screen_sharing")
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex",
                            staticStyle: {
                              height: "100%",
                              "align-items": "center",
                              "justify-content": "center",
                              width: "100%"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "text-center" },
                              [
                                _vm.that.$root.remoteScreen &&
                                _vm.that.$root.remoteLiveHappening
                                  ? _c(
                                      "v-badge",
                                      { attrs: { dot: "", color: "green" } },
                                      [
                                        _c("i", {
                                          staticClass: "las la-laptop-code",
                                          staticStyle: { "font-size": "30px" }
                                        })
                                      ]
                                    )
                                  : _c("i", {
                                      staticClass: "las la-laptop-code",
                                      staticStyle: { "font-size": "30px" }
                                    }),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "13px",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Screen Sharing")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          this.$root.liveBoardContent == "audio_speaker"
            ? [
                this.$root.connectingToSocket == true
                  ? _c("div", { staticClass: "col-12 text-center" }, [
                      this.$root.roomNotExist &&
                      this.$root.roomCheckingInitaited
                        ? _c("div", [
                            _c(
                              "div",
                              { staticClass: "py-2" },
                              [
                                _c("v-progress-circular", {
                                  attrs: { indeterminate: "", color: "#3C87CD" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "14px",
                                    color: "white"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("space.wait_for_admin")))]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !this.$root.roomNotExist
                        ? _c("div", [
                            _c(
                              "div",
                              { staticClass: "py-2" },
                              [
                                _c("v-progress-circular", {
                                  attrs: { indeterminate: "", color: "#3C87CD" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "14px",
                                    color: "white"
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("general.connecting")) + "..."
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e()
                    ])
                  : _vm._e(),
                _vm._v(" "),
                this.$root.connectingToSocket == "disconnected"
                  ? _c("div", { staticClass: "col-12 text-center" }, [
                      _c("div", [
                        _c(
                          "div",
                          { staticClass: "py-2" },
                          [
                            _c("v-progress-circular", {
                              attrs: { indeterminate: "", color: "#3C87CD" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("space.disconnected_info")))]
                          )
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                this.$root.connectingToSocket == false && this.$root.liveIsOn
                  ? _c("div", { staticClass: "text-center" }, [
                      _c("div", {
                        class: _vm.that.$root.speakingUser.speaking
                          ? "circle-ripple"
                          : "",
                        style: _vm.imageStyleExtra(
                          120,
                          _vm.that.$root.speakingUser
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "mt-2",
                          staticStyle: { "font-size": "14px", color: "white" }
                        },
                        [
                          _vm._v(
                            " " + _vm._s(_vm.that.$root.speakingUser.name) + " "
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("v-slide-x-reverse-transition", [
        _vm.that.$root.showMemberBoard
          ? _c(
              "div",
              {
                staticClass: "scrollerinfo offset-lg-8 col-lg-4 py-0 pb-2",
                staticStyle: {
                  "border-left": "1px solid #c5c5c5",
                  background: "white",
                  height: "100%",
                  "overflow-y": "auto",
                  "z-index": "9999999999",
                  position: "absolute",
                  "overflow-x": "hidden"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
                        staticStyle: {
                          position: "sticky",
                          background: "white",
                          top: "0%",
                          "border-bottom": "2px solid #c5c5c5",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: " mr-1 col-2 px-1 py-0" },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    _vm.that.$root.showMemberBoard = false
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi mdi-close")])],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-8 py-0 text-center" }, [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Active Members")]
                          ),
                          _vm._v(" ("),
                          _c("span", { staticStyle: { "font-size": "12px" } }, [
                            _vm._v(
                              _vm._s(this.$root.allAudioParticipant.length + 1)
                            )
                          ]),
                          _vm._v(")\n                        ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-2 py-0  text-right" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-12 py-2 d-flex flex-row",
                        staticStyle: {
                          "align-items": "center",
                          "border-bottom": "1px solid #c5c5c5"
                        }
                      },
                      [
                        _c("div", { staticClass: "col-3 mr-2 py-0" }, [
                          _c("div", {
                            style: _vm.imageStyle(
                              40,
                              _vm.that.$root.authProfile
                            )
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-7 py-0" }, [
                          _c("span", { staticStyle: { "font-size": "13px" } }, [
                            _vm._v(_vm._s(_vm.that.$root.authProfile.name))
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-2 text-right py-0" },
                          [
                            _vm.that.$root.localAudioMuted
                              ? _c("v-icon", [
                                  _vm._v("las la-microphone-slash")
                                ])
                              : _c("v-icon", [_vm._v("las la-microphone")])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(this.$root.allAudioParticipant, function(
                      user,
                      index
                    ) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "col-12 py-2 d-flex flex-row",
                          staticStyle: {
                            "align-items": "center",
                            "border-bottom": "1px solid #c5c5c5"
                          }
                        },
                        [
                          _c("div", { staticClass: "col-3 mr-2 py-0" }, [
                            _c("div", {
                              style: _vm.imageStyle(40, user[0].profile)
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-7 py-0" }, [
                            _c(
                              "span",
                              { staticStyle: { "font-size": "13px" } },
                              [_vm._v(_vm._s(user[0].profile.name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-2 text-right py-0" },
                            [
                              user[0].profile.muted
                                ? _c("v-icon", [
                                    _vm._v("las la-microphone-slash")
                                  ])
                                : _c("v-icon", [_vm._v("las la-microphone")])
                            ],
                            1
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      this.$root.liveIsOn
        ? _c(
            "div",
            {
              staticClass: "col-12 py-2 d-flex flex-row",
              staticStyle: {
                background: "white",
                height: "60px",
                "overflow-y": "auto",
                "z-index": "999999999",
                left: "0",
                bottom: "0",
                position: "absolute",
                "overflow-x": "hidden"
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-4 py-0" },
                [
                  _vm.that.$root.localAudioMuted
                    ? [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.unmuteAudio()
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("las la-microphone-slash")])],
                          1
                        )
                      ]
                    : [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.muteAudio()
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("las la-microphone")])],
                          1
                        )
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "col-4 py-0 text-center",
                staticStyle: { background: "white" }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-4 py-0 text-right" },
                [
                  _c(
                    "v-btn",
                    {
                      staticStyle: { "z-index": "999999999999999" },
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.toggleView($event)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-apps")])],
                    1
                  )
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      this.$root.liveIsOn
        ? _c(
            "div",
            {
              staticClass: "text-center",
              staticStyle: {
                position: "absolute",
                bottom: "3%",
                left: "0",
                width: "100%"
              }
            },
            [
              _c(
                "v-btn",
                {
                  staticStyle: {
                    "z-index": "999999999999",
                    background: "white"
                  },
                  attrs: { fab: "" },
                  on: { click: _vm.closeConnections }
                },
                [
                  _c("v-icon", { attrs: { color: "#df4759" } }, [
                    _vm._v("mdi mdi-phone-hangup")
                  ])
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/LiveSession.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/LiveSession.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiveSession_vue_vue_type_template_id_7c1a338a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true& */ "./resources/js/components/chats/LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true&");
/* harmony import */ var _LiveSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveSession.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss& */ "./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LiveSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiveSession_vue_vue_type_template_id_7c1a338a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LiveSession_vue_vue_type_template_id_7c1a338a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c1a338a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/LiveSession.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveSession.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/chats/LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_template_id_7c1a338a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=template&id=7c1a338a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_template_id_7c1a338a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_template_id_7c1a338a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);