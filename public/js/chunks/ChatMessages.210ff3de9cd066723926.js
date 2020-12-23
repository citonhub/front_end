(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatMessages"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatMessages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatMessages.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var CodeBox = function CodeBox() {
  return Promise.all(/*! import() | CodeBox */[__webpack_require__.e("vendors~CodeBox~CodeEditor~CodeEditorChat"), __webpack_require__.e("CodeBox")]).then(__webpack_require__.bind(null, /*! ./CodeBox.vue */ "./resources/js/components/chats/CodeBox.vue"));
};

var VideoPlayer = function VideoPlayer() {
  return Promise.all(/*! import() | VideoPlayer */[__webpack_require__.e("vendors~VideoPlayer"), __webpack_require__.e("VideoPlayer")]).then(__webpack_require__.bind(null, /*! ./VideoPlayer.vue */ "./resources/js/components/chats/VideoPlayer.vue"));
};

var AudioPlayer = function AudioPlayer() {
  return __webpack_require__.e(/*! import() | AudioPlayer */ "AudioPlayer").then(__webpack_require__.bind(null, /*! ./AudioPlayer.vue */ "./resources/js/components/chats/AudioPlayer.vue"));
};

var Images = function Images() {
  return __webpack_require__.e(/*! import() | Images */ "Images").then(__webpack_require__.bind(null, /*! ./Images.vue */ "./resources/js/components/chats/Images.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imageArray: [{
        image_name: 'space_image_1_128',
        image_extension: 'png',
        background_color: '#c5c5c5'
      }, {
        image_name: 'space_image_1_129',
        image_extension: 'png',
        background_color: '#c5c5c5'
      }, {
        image_name: 'space_image_1_130',
        image_extension: 'jpg',
        background_color: '#c5c5c5'
      }, {
        image_name: 'space_image_1_131',
        image_extension: 'jpeg',
        background_color: '#c5c5c5'
      }]
    };
  },
  components: {
    CodeBox: CodeBox,
    VideoPlayer: VideoPlayer,
    AudioPlayer: AudioPlayer,
    Images: Images
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatMessages.vue?vue&type=template&id=f257383a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatMessages.vue?vue&type=template&id=f257383a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-11 py-0 offset-1", attrs: { "elevation-1": "" } },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "col-lg-7 col-md-8  offset-lg-5 offset-md-4 d-flex flex-row-reverse"
            },
            [
              _c("div", {
                staticStyle: {
                  "border-radius": "50%",
                  height: "30px",
                  width: "30px",
                  "background-color": "#c5c5c5",
                  "background-image": "url(/imgs/img3.jpg)",
                  "background-size": "cover",
                  "background-repeat": "no-repeat",
                  border: "1px solid transparent"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-1 px-2 mr-2",
                  staticStyle: {
                    "max-width": "80%",
                    border: "1px solid transparent",
                    "min-width": "150px",
                    background: "#3C87CD",
                    "border-radius": "7px",
                    "border-bottom-right-radius": "0px"
                  },
                  attrs: { "elevation-1": "" }
                },
                [
                  _c(
                    "span",
                    { staticStyle: { color: "white", "font-size": "13px" } },
                    [
                      _vm._v(
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque perferendis unde beatae provident ea inventore quaerat, cum cumque vero facilis dolorum a iusto voluptatibus esse corporis eaque pariatur? Voluptas."
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "span",
                      { staticStyle: { color: "white", "font-size": "11px" } },
                      [_vm._v("3:14 PM")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-11 py-0 mt-2", attrs: { "elevation-1": "" } },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-7 col-md-8   d-flex flex-row" },
            [
              _c("div", {
                staticStyle: {
                  "border-radius": "50%",
                  height: "30px",
                  width: "30px",
                  "background-color": "#c5c5c5",
                  "background-image": "url(/imgs/img2.jpg)",
                  "background-size": "cover",
                  "background-repeat": "no-repeat",
                  border: "1px solid transparent"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-1 px-2 ml-2",
                  staticStyle: {
                    "max-width": "80%",
                    border: "1px solid transparent",
                    "min-width": "150px",
                    background: "#ffffff",
                    "border-radius": "7px",
                    "border-bottom-left-radius": "0px"
                  },
                  attrs: { "elevation-1": "" }
                },
                [
                  _c("div", { staticClass: "text-left" }, [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "13px",
                          "font-weight": "bold"
                        }
                      },
                      [_vm._v("Bisola23")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v("Lorem ipsum dolor sit amet consectetur ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "span",
                      { staticStyle: { "font-size": "11px", color: "grey" } },
                      [_vm._v("3:14 PM")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-11 py-0 mt-2", attrs: { "elevation-1": "" } },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-7 col-md-8   d-flex flex-row" },
            [
              _c("div", {
                staticStyle: {
                  "border-radius": "50%",
                  height: "30px",
                  width: "30px",
                  "background-color": "#c5c5c5",
                  "background-image": "url(/imgs/img2.jpg)",
                  "background-size": "cover",
                  "background-repeat": "no-repeat",
                  border: "1px solid transparent"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-1 px-2 ml-2",
                  staticStyle: {
                    "max-width": "80%",
                    border: "1px solid transparent",
                    "min-width": "150px",
                    background: "#ffffff",
                    "border-radius": "7px",
                    "border-bottom-left-radius": "0px"
                  },
                  attrs: { "elevation-1": "" }
                },
                [
                  _c("div", { staticClass: "text-left" }, [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "13px",
                          "font-weight": "bold"
                        }
                      },
                      [_vm._v("Bisola23")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v(
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam dignissimos ipsam sunt magnam ab earum, aliquam beatae. Perferendis quis nesciunt illum sed, natus consectetur eius repellat sunt et nam. "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "span",
                      { staticStyle: { "font-size": "11px", color: "grey" } },
                      [_vm._v("3:14 PM")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-11 py-0 offset-1", attrs: { "elevation-1": "" } },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "col-lg-7 col-md-8  offset-lg-5 offset-md-4 d-flex flex-row-reverse"
            },
            [
              _c("div", {
                staticStyle: {
                  "border-radius": "50%",
                  height: "30px",
                  width: "30px",
                  "background-color": "#c5c5c5",
                  "background-image": "url(/imgs/img3.jpg)",
                  "background-size": "cover",
                  "background-repeat": "no-repeat",
                  border: "1px solid transparent"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-1 px-2 mr-2",
                  staticStyle: {
                    "max-width": "80%",
                    border: "1px solid transparent",
                    "min-width": "150px",
                    background: "#3C87CD",
                    "border-radius": "7px",
                    "border-bottom-right-radius": "0px"
                  },
                  attrs: { "elevation-1": "" }
                },
                [
                  _c(
                    "span",
                    { staticStyle: { color: "white", "font-size": "13px" } },
                    [_vm._v("Hello")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "span",
                      { staticStyle: { color: "white", "font-size": "11px" } },
                      [_vm._v("3:14 PM")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-11 py-0 mt-2", attrs: { "elevation-1": "" } },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-7 col-md-8   d-flex flex-row" },
            [
              _c("div", {
                staticStyle: {
                  "border-radius": "50%",
                  height: "30px",
                  width: "30px",
                  "background-color": "#c5c5c5",
                  "background-image": "url(/imgs/img2.jpg)",
                  "background-size": "cover",
                  "background-repeat": "no-repeat",
                  border: "1px solid transparent"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-1 px-2 ml-2",
                  staticStyle: {
                    "max-width": "80%",
                    border: "1px solid transparent",
                    "min-width": "150px",
                    background: "#ffffff",
                    "border-radius": "7px",
                    "border-bottom-left-radius": "0px"
                  },
                  attrs: { "elevation-1": "" }
                },
                [
                  _c("div", { staticClass: "text-left" }, [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "13px",
                          "font-weight": "bold"
                        }
                      },
                      [_vm._v("Bisola23")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "text-left py-2 px-1",
                      staticStyle: {
                        "border-left": "3px solid #3C87CD",
                        background: "#d6e6f5"
                      }
                    },
                    [
                      _c("span", { staticStyle: { "font-size": "13px" } }, [
                        _vm._v("Lorem, ipsum dolor sit amet consectetur")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "pt-1",
                      staticStyle: { "font-size": "13px" }
                    },
                    [
                      _vm._v(
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "span",
                      { staticStyle: { "font-size": "11px", color: "grey" } },
                      [_vm._v("3:14 PM")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-11 py-0 offset-1", attrs: { "elevation-1": "" } },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "col-lg-7 col-md-8  offset-lg-5 offset-md-4 d-flex flex-row-reverse"
            },
            [
              _c("div", {
                staticStyle: {
                  "border-radius": "50%",
                  height: "30px",
                  width: "30px",
                  "background-color": "#c5c5c5",
                  "background-image": "url(/imgs/img3.jpg)",
                  "background-size": "cover",
                  "background-repeat": "no-repeat",
                  border: "1px solid transparent"
                }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-1 px-2 mr-2",
                  staticStyle: {
                    "max-width": "80%",
                    border: "1px solid transparent",
                    "min-width": "150px",
                    background: "#3C87CD",
                    "border-radius": "7px",
                    "border-bottom-right-radius": "0px"
                  },
                  attrs: { "elevation-1": "" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "text-left py-2 px-1",
                      staticStyle: {
                        "border-left": "3px solid #ffffff",
                        "border-radius": "0px",
                        background: "#d6e6f5"
                      }
                    },
                    [
                      _c("span", { staticStyle: { "font-size": "13px" } }, [
                        _vm._v("Lorem, ipsum dolor sit amet consectetur  ")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticStyle: { color: "white", "font-size": "13px" } },
                    [
                      _vm._v(
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque perferendis unde beatae provident ea inventore quaerat, cum cumque vero facilis dolorum a iusto voluptatibus esse corporis eaque pariatur? Voluptas."
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-right" }, [
                    _c(
                      "span",
                      { staticStyle: { color: "white", "font-size": "11px" } },
                      [_vm._v("3:14 PM")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 offset-2" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-5 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"
          },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 px-2 mr-2",
                staticStyle: {
                  width: "90%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#3C87CD",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("code-box", {
                  attrs: {
                    color: "#ffffff",
                    codeContent: "Hello world",
                    topMargin: 5,
                    filename: "index.php",
                    codeLanguage: "PHP"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "white", "font-size": "11px" } },
                    [_vm._v("3:14 PM")]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-5 col-md-6  d-flex flex-row" },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 px-2 ml-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#ffffff",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("div", { staticClass: "text-left" }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Bisola23")]
                  )
                ]),
                _vm._v(" "),
                _c("code-box", {
                  attrs: {
                    color: "#000000",
                    codeContent: "Hello world",
                    topMargin: 13,
                    filename: "index.php",
                    codeLanguage: "PHP"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "grey", "font-size": "11px" } },
                    [_vm._v("3:14 PM")]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 offset-2" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-5 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"
          },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 px-2 mr-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#3C87CD",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("video-player", {
                  staticStyle: { width: "100%" },
                  attrs: {
                    videoUrl: "sample.mpd",
                    backgroundColor: "#c5c5c5",
                    backgroundImg: "/imgs/video.jpeg",
                    playerId: "small56"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "white", "font-size": "11px" } },
                    [_vm._v("3:14 PM")]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-5 col-md-6  d-flex flex-row" },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 px-2 ml-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#ffffff",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("div", { staticClass: "text-left" }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Bisola23")]
                  )
                ]),
                _vm._v(" "),
                _c("video-player", {
                  staticStyle: { width: "100%" },
                  attrs: {
                    videoUrl: "sample.mpd",
                    backgroundColor: "#c5c5c5",
                    backgroundImg: "/imgs/video.jpeg",
                    playerId: "small56"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "grey", "font-size": "11px" } },
                    [_vm._v("3:14 PM")]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 offset-2" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-5 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"
          },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-2 pt-3 px-2 mr-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#3C87CD",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("audio-player", {
                  attrs: {
                    file: "/audio/space_audio_2666.mp3",
                    playerId: "34",
                    colorBase: "#ffffff"
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      color: "white",
                      "font-size": "11px",
                      position: "absolute",
                      right: "2%",
                      top: "9%"
                    }
                  },
                  [_vm._v("3:14 PM")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-5 col-md-6  d-flex flex-row" },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 pb-2 px-2 ml-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#ffffff",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("div", { staticClass: "text-left my-0 py-0" }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Bisola23")]
                  )
                ]),
                _vm._v(" "),
                _c("audio-player", {
                  staticClass: "mt-n1",
                  attrs: {
                    file: "/audio/space_audio_2666.mp3",
                    playerId: "394",
                    colorBase: "#333333"
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      color: "grey",
                      "font-size": "11px",
                      position: "absolute",
                      right: "2%",
                      top: "9%"
                    }
                  },
                  [_vm._v("3:14 PM")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 offset-2" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-5 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"
          },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 px-2 mr-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#3C87CD",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("images", { attrs: { imageArray: _vm.imageArray } }),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "white", "font-size": "11px" } },
                    [_vm._v("3:14 PM")]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-5 col-md-6  d-flex flex-row" },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 pb-2 px-2 ml-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#ffffff",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("div", { staticClass: "text-left my-0 py-0" }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Bisola23")]
                  )
                ]),
                _vm._v(" "),
                _c("images", { attrs: { imageArray: _vm.imageArray } }),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "grey", "font-size": "11px" } },
                    [_vm._v("3:14 PM")]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 offset-2" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-5 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"
          },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-2 pt-3 px-2 mr-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#3C87CD",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-2 text-center d-flex py-1",
                      staticStyle: {
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _c("v-icon", { attrs: { color: "#ffffff" } }, [
                        _vm._v("las la-laptop-code")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-7 d-flex py-1",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: { color: "white", "font-size": "13px" }
                        },
                        [_vm._v("Java calculator")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-3 text-right py-1",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "v-btn",
                        { attrs: { icon: "", color: "#ffffff" } },
                        [_c("v-icon", [_vm._v("las la-arrow-circle-right")])],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      color: "white",
                      "font-size": "11px",
                      position: "absolute",
                      right: "2%",
                      top: "9%"
                    }
                  },
                  [_vm._v("3:14 PM")]
                )
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-5 col-md-6  d-flex flex-row" },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-1 pb-2 px-2 ml-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#ffffff",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("div", { staticClass: "text-left my-0 py-0" }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-weight": "bold"
                      }
                    },
                    [_vm._v("Bisola23")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-2 text-center d-flex py-1",
                      staticStyle: {
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [_c("v-icon", [_vm._v("las la-laptop-code")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-7 d-flex py-1",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c("span", { staticStyle: { "font-size": "13px" } }, [
                        _vm._v("Java calculator")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-3 text-right py-1",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("las la-arrow-circle-right")])],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      color: "grey",
                      "font-size": "11px",
                      position: "absolute",
                      right: "2%",
                      top: "9%"
                    }
                  },
                  [_vm._v("3:14 PM")]
                )
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-10 py-0 offset-2" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-5 col-md-6  offset-lg-7 offset-md-6 d-flex flex-row-reverse"
          },
          [
            _c("div", {
              staticStyle: {
                "border-radius": "50%",
                height: "30px",
                width: "30px",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/img3.jpg)",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                border: "1px solid transparent"
              }
            }),
            _vm._v(" "),
            _c(
              "v-card",
              {
                staticClass: "py-2 pt-3 px-2 mr-2",
                staticStyle: {
                  width: "100%",
                  border: "1px solid transparent",
                  "min-width": "150px",
                  background: "#3C87CD",
                  "border-radius": "7px",
                  "border-bottom-right-radius": "0px"
                },
                attrs: { "elevation-1": "" }
              },
              [
                _c("div", { staticClass: "row py-1" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-2 text-center d-flex py-1",
                      staticStyle: {
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _c("v-icon", { attrs: { color: "#ffffff" } }, [
                        _vm._v("las la-file-alt")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-7 d-flex py-1",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: { color: "white", "font-size": "13px" }
                        },
                        [_vm._v("my_document.pdf")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-3 text-right py-1 pr-2",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c("v-icon", { attrs: { color: "#ffffff" } }, [
                        _vm._v("mdi mdi-cloud-download")
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      color: "white",
                      "font-size": "11px",
                      position: "absolute",
                      right: "2%",
                      top: "9%"
                    }
                  },
                  [_vm._v("3:14 PM")]
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ChatMessages.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/chats/ChatMessages.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatMessages_vue_vue_type_template_id_f257383a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatMessages.vue?vue&type=template&id=f257383a&scoped=true& */ "./resources/js/components/chats/ChatMessages.vue?vue&type=template&id=f257383a&scoped=true&");
/* harmony import */ var _ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatMessages.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChatMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatMessages_vue_vue_type_template_id_f257383a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatMessages_vue_vue_type_template_id_f257383a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f257383a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChatMessages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChatMessages.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/chats/ChatMessages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatMessages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChatMessages.vue?vue&type=template&id=f257383a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatMessages.vue?vue&type=template&id=f257383a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_template_id_f257383a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessages.vue?vue&type=template&id=f257383a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatMessages.vue?vue&type=template&id=f257383a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_template_id_f257383a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessages_vue_vue_type_template_id_f257383a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);