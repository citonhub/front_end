(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
  },
  methods: {
    addProject: function addProject() {
      this.$router.push({
        path: '/board/projects/add'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("div", {
        staticClass: "my-md-1 mt-4 mb-3 col-12",
        staticStyle: { background: "#F5F5FB" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1  px-2 d-md-block d-none fixed-top",
          staticStyle: {
            position: "sticky",
            top: "-1%",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6  py-0 my-0 text-right" },
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
                    attrs: { small: "", rounded: "", color: "#3C87CD" },
                    on: { click: _vm.addProject }
                  },
                  [
                    _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                      _vm._v("las la-plus")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "text-transform": "none" } }, [
                      _vm._v("Create a project")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "d-md-none d-inline-block",
          staticStyle: {
            "z-index": "99999999",
            position: "fixed",
            bottom: "3%",
            right: "3%"
          },
          attrs: { fab: "", color: "#3C87CD" }
        },
        [
          _c(
            "v-icon",
            { staticStyle: { "font-size": "24px", color: "white" } },
            [_vm._v("las la-plus")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 offset-md-1 py-1 px-2 " }, [
        _c("div", { staticClass: "row text-center " }, [
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 offset-md-1 py-1 px-2 " }, [
        _c("div", { staticClass: "row text-center" }, [
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(8),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(9),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 offset-md-1 py-1 px-2 " }, [
        _c("div", { staticClass: "row text-center" }, [
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(11),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
              staticStyle: { height: "200px" }
            },
            [
              _vm._m(12),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "py-2 px-2",
                  staticStyle: {
                    position: "absolute",
                    width: "94%",
                    height: "auto",
                    left: "3%",
                    bottom: "0",
                    "border-radius": "0px",
                    "border-bottom-left-radius": "20px",
                    "border-bottom-right-radius": "20px"
                  }
                },
                [
                  _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
                    _c("div", { staticClass: "row py-0 my-0" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-10 py-0 my-0 d-flex",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px"
                              }
                            },
                            [_vm._v("Project title 1")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                        _c("i", {
                          staticClass: "lab la-python",
                          staticStyle: { "font-size": "25px" }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-5 my-5" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 py-0 my-0" }, [
      _c("h5", [_vm._v("Projects")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
      { staticClass: "col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2" },
      [_c("h6", [_vm._v("Contributions")])]
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
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
      { staticClass: "col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2" },
      [_c("h6", [_vm._v("Pinned")])]
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
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
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
        staticStyle: {
          height: "185px",
          position: "absolute",
          width: "94%",
          left: "3%",
          border: "1px solid #c5c5c5",
          "background-repeat": "no-repeat",
          "border-radius": "20px",
          "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
          background: "url(/imgs/background3.jpg)",
          "background-size": "cover"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "py-2 px-2 text-right",
            staticStyle: {
              height: "auto",
              position: "absolute",
              bottom: "16%",
              width: "auto",
              right: "0%",
              border: "1px solid transparent",
              "border-top-left-radius": "8px",
              "align-items": "center",
              "justify-content": "center",
              background: "rgba(27, 27, 30, 0.4)"
            }
          },
          [
            _c("div", [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("231")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-thumbtack",
                  staticStyle: { "font-size": "20px", color: "white" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "white"
                    }
                  },
                  [_vm._v("200")]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "mdi mdi-share-variant",
                  staticStyle: { "font-size": "20px", color: "white" }
                })
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=70475ced&scoped=true& */ "./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70475ced",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=template&id=70475ced&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);