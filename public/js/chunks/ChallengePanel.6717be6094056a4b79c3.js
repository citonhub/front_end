(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChallengePanel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selectedTab: ''
    };
  },
  mounted: function mounted() {
    this.setPage();
  },
  methods: {
    setPage: function setPage() {
      if (this.$router.currentRoute.path.indexOf('description') >= 0) {
        this.selectedTab = 'description';
      }

      if (this.$router.currentRoute.path.indexOf('rules') >= 0) {
        this.selectedTab = 'rules';
      }

      if (this.$router.currentRoute.path.indexOf('judges') >= 0) {
        this.selectedTab = 'judges';
      }

      if (this.$router.currentRoute.path.indexOf('leaderboard') >= 0) {
        this.selectedTab = 'leaderboard';
      }

      if (this.$router.currentRoute.path.indexOf('discussion') >= 0) {
        this.selectedTab = 'discussion';
      }
    },
    goToPage: function goToPage(page) {
      this.$router.push({
        path: '/board/challenges/panel/' + page
      });
      this.selectedTab = page;
    },
    goBack: function goBack() {
      this.$router.push({
        path: '/board/challenges/list'
      });
    },
    setContent: function setContent() {
      this.r;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sideBar[data-v-5e8fef50]:hover{\r\n     \r\n      border-bottom:4px solid #3C87CD !important;\r\n      cursor: pointer;\n}\n.scroller[data-v-5e8fef50]::-webkit-scrollbar {\r\n  width: 6px;\n}\n.scroller[data-v-5e8fef50]::-webkit-scrollbar-thumb {\r\n  background-color: #3C87CD;\r\n  outline: 1px solid #3C87CD;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          staticClass: "col-lg-10 offset-lg-2 py-0 px-0",
          staticStyle: {
            position: "fixed",
            height: "88%",
            left: "0",
            top: "10%",
            "z-index": "9999999999999999",
            "overflow-y": "auto"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-block d-none py-0 px-0",
              staticStyle: {
                position: "absolute",
                left: "0%",
                top: "0%",
                height: "98%",
                background: "#ffffff",
                border: "1px solid #c5c5c5",
                "border-radius": "6px"
              }
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    position: "absolute",
                    height: "35%",
                    top: "0",
                    left: "0",
                    width: "100%",
                    "border-bottom": "1px solid #c5c5c5",
                    "background-color": "#c5c5c5",
                    "background-image": "url(/imgs/imgproj3.jpeg)",
                    "background-size": "cover",
                    "border-top-left-radius": "6px",
                    "border-top-right-radius": "6px",
                    "background-repeat": "no-repeat"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-column",
                      staticStyle: {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        top: "0",
                        left: "0",
                        background: "rgba(27, 27, 30, 0.4)",
                        "border-top-left-radius": "6px",
                        "border-top-right-radius": "6px"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-row px-2 pt-2 ",
                          staticStyle: {
                            height: "30%",
                            "z-index": "99999999999999999 !important"
                          }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mr-2 mt-2",
                              staticStyle: {
                                "z-index": "9999999999999999 !important"
                              },
                              attrs: { icon: "" },
                              on: { click: _vm.goBack }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticStyle: {
                                    "font-size": "25px",
                                    color: "#ffffff"
                                  }
                                },
                                [_vm._v("las la-arrow-left")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(0)
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "d-flex px-2 py-2 ",
                          staticStyle: { height: "30%", width: "100%" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-column-reverse text-center",
                              staticStyle: { height: "100%", width: "100%" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex flex-row",
                                  staticStyle: {
                                    "align-items": "center",
                                    width: "100%"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-8 py-0 px-0 d-flex flex-row",
                                      staticStyle: { "align-items": "center" }
                                    },
                                    [
                                      _c("div", {
                                        staticClass: "d-inline-block mx-2 ",
                                        staticStyle: {
                                          "border-radius": "50%",
                                          height: "40px",
                                          width: "40px",
                                          "background-color": "#c5c5c5",
                                          "background-image":
                                            "url(/imgs/imgproj3.jpeg)",
                                          "background-size": "cover",
                                          "background-repeat": "no-repeat"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            "font-size": "13px",
                                            "font-family": "BodyFont",
                                            color: "#ffffff"
                                          }
                                        },
                                        [_vm._v("Akinola Dray ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "mx-1",
                                          staticStyle: {
                                            "font-size": "8px",
                                            color: "#ffffff"
                                          }
                                        },
                                        [_vm._v("mdi-record")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-md-block d-none",
                                          staticStyle: {
                                            "font-size": "13px",
                                            "font-family": "BodyFont",
                                            color: "#ffffff"
                                          }
                                        },
                                        [_vm._v("2331 Participants ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-md-none d-block",
                                          staticStyle: {
                                            "font-size": "12px",
                                            "font-family": "BodyFont",
                                            color: "#ffffff"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "17px"
                                              }
                                            },
                                            [_vm._v("las la-user-friends")]
                                          ),
                                          _vm._v(" 2331 ")
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-4 py-0 px-2 d-flex flex-row-reverse",
                                      staticStyle: { "align-items": "center" }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            "font-size": "13px",
                                            "font-weight": "bolder",
                                            color: "white",
                                            "font-family": "MediumFont"
                                          },
                                          attrs: {
                                            medium: "",
                                            rounded: "",
                                            color: "#3C87CD"
                                          }
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
                                            [_vm._v("Join")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: {
                    position: "absolute",
                    height: "5%",
                    width: "100%",
                    top: "35%",
                    left: "0",
                    "overflow-y": "hidden",
                    "overflow-x": "auto",
                    "border-bottom": "1px solid #c5c5c5",
                    background: "whitesmoke"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 px-0 d-flex flex-row py-0",
                      staticStyle: {
                        "align-items": "center",
                        height: "100%",
                        "border-right": "1px solid #c5c5c5",
                        position: "absolute",
                        top: "0"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "description"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("description")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Description")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "rules"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("rules")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Rules")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "judges"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("judges")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Judges")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "leaderboard"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("leaderboard")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Leaderboard")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-2 px-3 mr-1 sideBar",
                          style:
                            _vm.selectedTab == "discussion"
                              ? " border-bottom:4px solid #3C87CD;"
                              : "",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.goToPage("discussion")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Discussion")]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: {
                    position: "absolute",
                    height: "59%",
                    width: "100%",
                    top: "41%",
                    left: "0",
                    "overflow-y": "auto",
                    "overflow-x": "hidden"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 scroller",
                      staticStyle: {
                        height: "95%",
                        position: "absolute",
                        top: "2%",
                        "overflow-y": "auto",
                        "overflow-x": "hidden"
                      }
                    },
                    [_c("router-view")],
                    1
                  )
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-2 d-md-none d-block py-0 px-0",
          staticStyle: {
            position: "fixed",
            "z-index": "999999999999999999",
            left: "0%",
            top: "0%",
            height: "100%",
            background: "#ffffff"
          }
        },
        [
          _c(
            "v-btn",
            {
              staticClass: "d-inline-block  ",
              staticStyle: {
                position: "fixed",
                background: "#3C87CD",
                top: "1%",
                right: "2%",
                "z-index": "990679797879"
              },
              attrs: { icon: "", color: "#ffffff" },
              on: { click: _vm.goBack }
            },
            [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: {
                position: "absolute",
                height: "250px",
                top: "0",
                left: "0",
                width: "100%",
                "border-bottom": "1px solid #c5c5c5",
                "background-color": "#c5c5c5",
                "background-image": "url(/imgs/imgproj3.jpeg)",
                "background-size": "cover",
                "border-radius": "0px",
                "background-repeat": "no-repeat"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex flex-column",
                  staticStyle: {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: "0",
                    left: "0",
                    background: "rgba(27, 27, 30, 0.4)"
                  }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex px-2 py-2 ",
                      staticStyle: { height: "30%", width: "100%" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-column-reverse text-center",
                          staticStyle: { height: "100%", width: "100%" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-row",
                              staticStyle: {
                                "align-items": "center",
                                width: "100%"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-12 py-0 px-0 d-flex flex-row",
                                  staticStyle: { "align-items": "center" }
                                },
                                [
                                  _c("div", {
                                    staticClass: "d-inline-block mx-2 ",
                                    staticStyle: {
                                      "border-radius": "50%",
                                      height: "40px",
                                      width: "40px",
                                      "background-color": "#c5c5c5",
                                      "background-image":
                                        "url(/imgs/imgproj3.jpeg)",
                                      "background-size": "cover",
                                      "background-repeat": "no-repeat"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "13px",
                                        "font-family": "BodyFont",
                                        color: "#ffffff"
                                      }
                                    },
                                    [_vm._v("Akinola Dray ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "mx-1",
                                      staticStyle: {
                                        "font-size": "8px",
                                        color: "#ffffff"
                                      }
                                    },
                                    [_vm._v("mdi-record")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-md-block d-none",
                                      staticStyle: {
                                        "font-size": "13px",
                                        "font-family": "BodyFont",
                                        color: "#ffffff"
                                      }
                                    },
                                    [_vm._v("2331 Participants ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-md-none d-block",
                                      staticStyle: {
                                        "font-size": "12px",
                                        "font-family": "BodyFont",
                                        color: "#ffffff"
                                      }
                                    },
                                    [_vm._v(" 2331 participants")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "fixed-top",
              staticStyle: {
                position: "absolute",
                height: "40px",
                width: "100%",
                top: "250px",
                left: "0%",
                "overflow-y": "hidden",
                "overflow-x": "auto",
                "white-space": "nowrap",
                "border-bottom": "1px solid #c5c5c5",
                background: "whitesmoke"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-12 px-0 d-flex flex-row py-0",
                  staticStyle: {
                    "align-items": "center",
                    height: "100%",
                    position: "absolute",
                    top: "0"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "py-2 px-3 mr-1 sideBar",
                      style:
                        _vm.selectedTab == "description"
                          ? " border-bottom:4px solid #3C87CD;"
                          : "",
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.goToPage("description")
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Description")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "py-2 px-3 mr-1 sideBar",
                      style:
                        _vm.selectedTab == "rules"
                          ? " border-bottom:4px solid #3C87CD;"
                          : "",
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.goToPage("rules")
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Rules")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "py-2 px-3 mr-1 sideBar",
                      style:
                        _vm.selectedTab == "judges"
                          ? " border-bottom:4px solid #3C87CD;"
                          : "",
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.goToPage("judges")
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Judges")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "py-2 px-3 mr-1 sideBar",
                      style:
                        _vm.selectedTab == "leaderboard"
                          ? " border-bottom:4px solid #3C87CD;"
                          : "",
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.goToPage("leaderboard")
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Leaderboard")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "py-2 px-3 mr-1 sideBar",
                      style:
                        _vm.selectedTab == "discussion"
                          ? " border-bottom:4px solid #3C87CD;"
                          : "",
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.goToPage("discussion")
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Discussion")]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: {
                position: "absolute",
                height: "500px",
                width: "100%",
                top: "290px",
                left: "0",
                "overflow-y": "auto",
                "overflow-x": "hidden",
                background: "white"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-12 scroller",
                  staticStyle: {
                    height: "100%",
                    position: "absolute",
                    top: "0%",
                    "overflow-y": "auto",
                    "overflow-x": "hidden"
                  }
                },
                [_c("router-view")],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      this.$router.currentRoute.path.indexOf("discussion") <= 0
        ? _c(
            "v-btn",
            {
              staticClass: "d-lg-none",
              staticStyle: {
                "z-index": "99999999",
                position: "fixed",
                bottom: "3%",
                right: "3%"
              },
              attrs: { medium: "", fab: "", color: "#3C87CD" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "MediumFont",
                    "font-size": "12px",
                    color: "white",
                    "text-transform": "capitalize"
                  }
                },
                [_vm._v(" Join ")]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column pt-1" }, [
      _c(
        "div",
        {
          staticStyle: {
            "font-size": "18px",
            "font-family": "HeaderFont",
            color: "#ffffff"
          }
        },
        [_vm._v("Create a gift cards with HTML and CSS")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "pt-1",
          staticStyle: {
            "font-size": "14px",
            "font-family": "BodyFont",
            color: "#ffffff"
          }
        },
        [_vm._v("Using pure CSS, design the most beautiful card and win ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-flex px-2 py-2 ",
        staticStyle: {
          height: "40%",
          "align-items": "center",
          "justify-content": "center"
        }
      },
      [
        _c("div", { staticClass: "d-flex flex-column text-center" }, [
          _c(
            "div",
            {
              staticStyle: {
                "font-size": "25px",
                "font-family": "HeaderFont",
                color: "#ffffff"
              }
            },
            [_vm._v("19 : 09 : 23 : 23")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "pt-1",
              staticStyle: {
                "font-size": "14px",
                "font-family": "BodyFont",
                color: "#ffffff"
              }
            },
            [_vm._v("Days : Hours : Minutes : Seconds ")]
          )
        ])
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
        staticClass: "d-flex flex-row px-2 pt-2 ",
        staticStyle: { height: "30%" }
      },
      [
        _c("div", { staticClass: "d-flex flex-column pt-2 pr-2" }, [
          _c(
            "div",
            {
              staticStyle: {
                "font-size": "14px",
                "font-family": "HeaderFont",
                color: "#ffffff"
              }
            },
            [_vm._v("Create a gift cards with HTML and CSS")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "pt-1",
              staticStyle: {
                "font-size": "13px",
                "font-family": "BodyFont",
                color: "#ffffff"
              }
            },
            [_vm._v("Using pure CSS, design the most beautiful card and win ")]
          )
        ])
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
        staticClass: "d-flex px-2 py-2 ",
        staticStyle: {
          height: "40%",
          "align-items": "center",
          "justify-content": "center"
        }
      },
      [
        _c("div", { staticClass: "d-flex flex-column text-center" }, [
          _c(
            "div",
            {
              staticStyle: {
                "font-size": "22px",
                "font-family": "HeaderFont",
                color: "#ffffff"
              }
            },
            [_vm._v("19 : 09 : 23 : 23")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "pt-1",
              staticStyle: {
                "font-size": "12px",
                "font-family": "BodyFont",
                color: "#ffffff"
              }
            },
            [_vm._v("Days : Hours : Minutes : Seconds ")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel.vue?vue&type=template&id=5e8fef50&scoped=true& */ "./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&");
/* harmony import */ var _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& */ "./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e8fef50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/Panel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=style&index=0&id=5e8fef50&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_style_index_0_id_5e8fef50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=template&id=5e8fef50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Panel.vue?vue&type=template&id=5e8fef50&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5e8fef50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);