(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProfilePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ProfilePage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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


var TopBar = function TopBar() {
  return __webpack_require__.e(/*! import() | top-bar-profile */ "top-bar-profile").then(__webpack_require__.bind(null, /*! ./TopBar.vue */ "./resources/js/components/Profile/TopBar.vue"));
};

var EditProfile = function EditProfile() {
  return __webpack_require__.e(/*! import() | EditProfile */ "EditProfile").then(__webpack_require__.bind(null, /*! ./EditProfile.vue */ "./resources/js/components/Profile/EditProfile.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TopBar: TopBar,
    EditProfile: EditProfile
  },
  mounted: function mounted() {
    this.$root.showMobileHub = false;
  },
  data: function data() {
    return {
      that: this,
      projects: [{
        id: 1,
        type: 'Ecommerce Website'
      }, {
        id: 2,
        type: 'Social media website'
      }]
    };
  },
  methods: {
    fetchProfileContent: function fetchProfileContent() {
      axios.get('/fetch-profile').then;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scroller[data-v-150abd92]::-webkit-scrollbar {\n  width: 6px;\n  background: transparent;\n}\n.scroller[data-v-150abd92]::-webkit-scrollbar-thumb {\n  background-color:   darkgrey;\n  outline: 1px solid darkgrey;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=template&id=150abd92&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ProfilePage.vue?vue&type=template&id=150abd92&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        width: "100%"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-12 py-0 fixed-top",
          staticStyle: {
            position: "sticky",
            width: "100%",
            height: "auto",
            "z-index": "999999999999999999"
          }
        },
        [_c("top-bar")],
        1
      ),
      _vm._v(" "),
      _c("v-slide-x-transition", [
        _vm.that.$root.showSideBar
          ? _c(
              "div",
              {
                staticClass: "col-12  py-0 px-0",
                staticStyle: {
                  position: "absolut",
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
      ]),
      _vm._v(" "),
      _c("v-slide-x-reverse-transition", [
        false
          ? undefined
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: " col-12 scroller",
          staticStyle: {
            position: "fixed",
            height: "90%",
            top: "8%",
            "overflow-y": "auto",
            "padding-bottom": "60px",
            "overflow-x": "hidden"
          }
        },
        [
          _c(
            "div",
            { staticClass: "col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-row flex-wrap col-12 pb-2 text-center"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex flex-column py-0 pb-1 col-lg-6 offset-lg-3 ",
                        staticStyle: {
                          "align-items": "center",
                          "justify-content": "center"
                        }
                      },
                      [
                        _c("div", {
                          staticClass: "mb-2",
                          staticStyle: {
                            "border-radius": "50%",
                            height: "150px",
                            width: "150px",
                            "background-color": "#c5c5c5",
                            "background-image": "url(/imgs/img3.jpg)",
                            "background-size": "cover",
                            "background-repeat": "no-repeat",
                            border: "5px solid #3C87CD"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-family": "HeaderFont",
                              "font-size": "16px"
                            }
                          },
                          [_vm._v("Akinola Ayomide")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-family": "MediumFont",
                              color: "grey",
                              "font-size": "14px"
                            }
                          },
                          [_vm._v("@dray")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-8 col-md-8 py-0 my-0 d-flex",
                            staticStyle: {
                              "align-items": "center",
                              "justify-content": "center"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _vm._m(0),
                              _vm._v(" "),
                              _vm._m(1),
                              _vm._v(" "),
                              _c("div", { staticClass: " col-12 py-1 pt-2 " }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "d-flex flex-column",
                                    staticStyle: {
                                      "align-items": "center",
                                      "justify-content": "center"
                                    }
                                  },
                                  [
                                    _c("v-progress-linear", {
                                      attrs: {
                                        height: "7px",
                                        width: "100%",
                                        rounded: "",
                                        color: "#3C87CD",
                                        value: "80"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm._m(2)
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-4 py-0 my-lg-0 px-1 d-flex text-center flex-row my-2",
                    staticStyle: {
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-6 py-0 px-1 d-flex flex-row",
                        staticStyle: {
                          "align-items": "center",
                          "justify-content": "center"
                        }
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            staticStyle: {
                              "font-size": "12px",
                              "font-weight": "bolder",
                              "font-family": "MediumFont"
                            },
                            attrs: {
                              small: "",
                              outlined: "",
                              rounded: "",
                              color: "#3C87CD"
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: { "text-transform": "capitalize" }
                              },
                              [_vm._v("Chat")]
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
                        staticClass: "col-6 py-0 px-1 d-flex flex-row",
                        staticStyle: {
                          "align-items": "center",
                          "justify-content": "center"
                        }
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            staticStyle: {
                              "font-size": "12px",
                              "font-weight": "bolder",
                              color: "white",
                              "font-family": "MediumFont"
                            },
                            attrs: { small: "", rounded: "", color: "#3C87CD" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "white",
                                  "text-transform": "capitalize"
                                }
                              },
                              [_vm._v("follow")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 px-1 mt-2" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "py-1",
                      staticStyle: { "border-bottom": "1px solid #c5c5c5" }
                    },
                    [_vm._v("Projects")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mt-3" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-4 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox",
                        staticStyle: { height: "200px" }
                      },
                      [
                        _vm._m(5),
                        _vm._v(" "),
                        _c(
                          "v-card",
                          {
                            staticClass: "py-1 px-2",
                            staticStyle: {
                              position: "absolute",
                              width: "94%",
                              height: "auto",
                              left: "3%",
                              top: "0",
                              "border-radius": "0px",
                              "border-top-left-radius": "20px",
                              "border-top-right-radius": "20px"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col-12 py-0 my-0 text-left" },
                              [
                                _c("div", { staticClass: "row py-0 my-0" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-2 py-0 my-0 d-flex px-0",
                                      staticStyle: {
                                        "align-items": "center",
                                        "justify-content": "center"
                                      }
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "d-inline-block",
                                        staticStyle: {
                                          "border-radius": "50%",
                                          height: "30px",
                                          width: "30px",
                                          "background-color": "#c5c5c5",
                                          "background-image":
                                            "url(/imgs/img3.jpg)",
                                          "background-size": "100%",
                                          border: "1px solid transparent"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-8 py-0 my-0 d-flex",
                                      staticStyle: { "align-items": "center" }
                                    },
                                    [
                                      _c("div", [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "d-inline-block",
                                            staticStyle: {
                                              "font-family": "MediumFont",
                                              "font-size": "13px"
                                            }
                                          },
                                          [_vm._v("Akinola Dray")]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-2 text-right py-0 my-0"
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "25px"
                                              }
                                            },
                                            [_vm._v("las la-ellipsis-v")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(6)
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      )
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
        staticClass: "col-6 py-0 d-flex",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c(
          "div",
          {
            staticClass: "d-flex flex-column",
            staticStyle: {
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c("img", { attrs: { src: "/imgs/newbie.svg", height: "40px" } }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: {
                  "font-family": "MediumFont",
                  "font-size": "12px",
                  color: "#333333"
                }
              },
              [_vm._v("Newbie")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-6  py-0 d-flex ",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c(
          "div",
          {
            staticClass: "d-flex flex-column",
            staticStyle: {
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c("img", { attrs: { src: "/imgs/junior.svg", height: "40px" } }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: {
                  "font-family": "MediumFont",
                  "font-size": "12px",
                  color: "#333333"
                }
              },
              [_vm._v("Junior")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticStyle: {
          "font-family": "BodyFont",
          "font-size": "12px",
          color: "#333333"
        }
      },
      [
        _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
          _vm._v("234")
        ]),
        _vm._v(" XP Points to Junior dev")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-lg-4 py-0 my-0 px-1 d-flex",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c(
          "div",
          {
            staticClass: "col-6 py-0 px-1 d-flex flex-row",
            staticStyle: {
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c(
              "span",
              {
                staticClass: "mx-1",
                staticStyle: {
                  "font-family": "MediumFont",
                  "font-size": "13px",
                  color: "#333333"
                }
              },
              [_vm._v("234")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [_vm._v("Following")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-6 py-0 px-1 d-flex flex-row",
            staticStyle: {
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c(
              "span",
              {
                staticClass: "mx-1",
                staticStyle: {
                  "font-family": "MediumFont",
                  "font-size": "13px",
                  color: "#333333"
                }
              },
              [_vm._v("25k")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [_vm._v("Followers")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-lg-4 py-0 my-lg-1 px-1 d-flex text-center my-2",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c(
          "div",
          {
            staticClass: "mt-2",
            staticStyle: { "font-family": "BodyFont", "font-size": "13px" }
          },
          [
            _vm._v(
              "\n             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus voluptate ea eum iste quam odio, reprehenderit, animi aliquid eligendi\n         "
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          height: "190px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background1.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "pt-3 px-2  pl-3",
            staticStyle: {
              position: "absolute",
              width: "100%",
              height: "35%",
              left: "0",
              bottom: "0%",
              "border-radius": "0px",
              "border-bottom-left-radius": "20px",
              "border-bottom-right-radius": "20px",
              background:
                "linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%)"
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-8 py-0 my-0" }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "13px",
                      color: "white"
                    }
                  },
                  [_vm._v("Python calculator")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 py-0 my-0 text-right" }, [
                _c("i", {
                  staticClass: "lab la-python",
                  staticStyle: { "font-size": "25px", color: "white" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "lab la-html5",
                  staticStyle: { "font-size": "25px", color: "white" }
                })
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "py-1 px-2",
        staticStyle: {
          position: "absolute",
          width: "94%",
          height: "auto",
          left: "3%",
          top: "100%"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 py-0 my-0 text-right" }, [
            _c("span", { staticClass: "d-inline-block mx-1" }, [
              _c("i", {
                staticClass: "lar la-heart",
                staticStyle: { "font-size": "20px", color: "#3C87CD" }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "MediumFont",
                    "font-size": "12px",
                    color: "#000000"
                  }
                },
                [_vm._v("231")]
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "d-inline-block mx-1" }, [
              _c("i", {
                staticClass: "las la-comment",
                staticStyle: { "font-size": "20px", color: "#3C87CD" }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "MediumFont",
                    "font-size": "12px",
                    color: "#000000"
                  }
                },
                [_vm._v("32")]
              )
            ])
          ])
        ])
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

/***/ "./resources/js/components/Profile/ProfilePage.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Profile/ProfilePage.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfilePage_vue_vue_type_template_id_150abd92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=template&id=150abd92&scoped=true& */ "./resources/js/components/Profile/ProfilePage.vue?vue&type=template&id=150abd92&scoped=true&");
/* harmony import */ var _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/ProfilePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfilePage_vue_vue_type_style_index_0_id_150abd92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css& */ "./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfilePage_vue_vue_type_template_id_150abd92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfilePage_vue_vue_type_template_id_150abd92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "150abd92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/ProfilePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/ProfilePage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Profile/ProfilePage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_150abd92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=style&index=0&id=150abd92&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_150abd92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_150abd92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_150abd92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_150abd92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_150abd92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Profile/ProfilePage.vue?vue&type=template&id=150abd92&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Profile/ProfilePage.vue?vue&type=template&id=150abd92&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_150abd92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePage.vue?vue&type=template&id=150abd92&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ProfilePage.vue?vue&type=template&id=150abd92&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_150abd92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_150abd92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);