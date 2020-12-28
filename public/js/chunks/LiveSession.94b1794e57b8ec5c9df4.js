(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LiveSession"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/LiveSession.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      liveBoardContent: 'action_list',
      showMemberBoard: false
    };
  },
  computed: {},
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.liveSessionIsOpen = false;
    },
    selectAction: function selectAction(type) {
      if (type == 'voice_chat') {
        this.liveBoardContent = 'audio_speaker';
      }
    },
    checkIfMaster: function checkIfMaster() {
      var _this = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].master_user;
      } else {
        return false;
      }
    },
    connectAudio: function connectAudio() {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scrollerinfo[data-v-7c1a338a]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollerinfo[data-v-7c1a338a]::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n.appBox[data-v-7c1a338a]{\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css&");

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
      !_vm.showMemberBoard
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
                      _vm.showMemberBoard = true
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
          _vm.liveBoardContent == "action_list"
            ? [
                _c(
                  "div",
                  { staticClass: " col-4 col-lg-2 px-2 my-0 py-2 " },
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
                            _c("div", { staticClass: "text-center" }, [
                              _c("i", {
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
                            ])
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
                  { staticClass: " col-4 col-lg-2 px-2 my-0 py-2 " },
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
                            _c("div", { staticClass: "text-center" }, [
                              _c("i", {
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
                            ])
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
                  { staticClass: " col-4 col-lg-2 px-2 my-0 py-2 " },
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
                            _c("div", { staticClass: "text-center" }, [
                              _c("i", {
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
                            ])
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
          _vm.liveBoardContent == "audio_speaker"
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
                this.$root.connectingToSocket == false
                  ? _c("div", { staticClass: "text-center" }, [
                      _c("div", {
                        staticStyle: {
                          "border-radius": "50%",
                          height: "120px",
                          width: "120px",
                          "background-color": "#c5c5c5",
                          "background-image": "url(/imgs/img3.jpg)",
                          "background-size": "cover",
                          "background-repeat": "no-repeat",
                          border: "5px solid #3C87CD",
                          "margin-top": "-50px"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "mt-2",
                          staticStyle: { "font-size": "14px", color: "white" }
                        },
                        [_vm._v("Akinola Babs")]
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
        _vm.showMemberBoard
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
                _c("div", { staticClass: "row" }, [
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
                                  _vm.showMemberBoard = false
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
                      _c("div", { staticClass: "col-8 py-0" }, [
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
                          _vm._v("23")
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
                          staticStyle: {
                            "border-radius": "50%",
                            height: "40px",
                            width: "40px",
                            "background-color": "#c5c5c5",
                            "background-image": "url(/imgs/img3.jpg)",
                            "background-size": "cover",
                            "background-repeat": "no-repeat"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-7 py-0" }, [
                        _c("span", { staticStyle: { "font-size": "13px" } }, [
                          _vm._v("Abisola James ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-2 text-right py-0" },
                        [_c("v-icon", [_vm._v("las la-microphone")])],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  false
                    ? undefined
                    : _vm._e()
                ])
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
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
              _c(
                "v-btn",
                {
                  staticStyle: { "z-index": "999999999999999" },
                  attrs: { icon: "" }
                },
                [_c("v-icon", [_vm._v("las la-microphone")])],
                1
              )
            ],
            1
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
                  attrs: { icon: "" }
                },
                [_c("v-icon", [_vm._v("mdi-apps")])],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
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
              staticStyle: { "z-index": "999999999999" },
              attrs: { fab: "", color: "#3C87CD" }
            },
            [
              _c("v-icon", { attrs: { color: "#ffffff" } }, [
                _vm._v("mdi mdi-phone-hangup")
              ])
            ],
            1
          )
        ],
        1
      )
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
/* empty/unused harmony star reexport *//* harmony import */ var _LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css& */ "./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css&");
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

/***/ "./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/LiveSession.vue?vue&type=style&index=0&id=7c1a338a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveSession_vue_vue_type_style_index_0_id_7c1a338a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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