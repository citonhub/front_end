(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddGit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadingContent: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      class:
        _vm.$screen.lg || _vm.$screen.md
          ? "col-8 offset-md-2  col-lg-4 offset-lg-4 px-0 py-0   "
          : " col-12 py-0 px-0  ",
      style:
        _vm.$screen.lg || _vm.$screen.md
          ? "height:86%; position:absolute; top:7%;overflow-y:auto; "
          : "height:100%;position:absolute; overflow-y:auto; left:0%;",
      attrs: { tile: "" }
    },
    [
      _vm.loadingContent
        ? [
            _c(
              "div",
              {
                staticClass: "d-flex flex-row",
                staticStyle: {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: "0px",
                  "justify-content": "center",
                  "align-items": "center"
                }
              },
              [
                _c("v-progress-circular", {
                  attrs: {
                    color: "#3C87CD",
                    indeterminate: "",
                    width: "3",
                    size: "25"
                  }
                })
              ],
              1
            )
          ]
        : [
            _c(
              "div",
              {
                staticClass: "col-12 px-1 py-1  fixed-top d-flex flex-row",
                staticStyle: {
                  position: "sticky",
                  "align-items": "center",
                  background: "white",
                  top: "0%",
                  "border-bottom": "2px solid #c5c5c5"
                }
              },
              [
                _c(
                  "div",
                  [
                    _c(
                      "v-btn",
                      { attrs: { icon: "" }, on: { click: _vm.goBack } },
                      [_c("v-icon", [_vm._v("las la-arrow-left")])],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                !_vm.that.$root.showResourceViewContent
                  ? _c("div", { staticClass: "ml-1" }, [
                      _c("div", {
                        style: _vm.imageStyleSpace(40, _vm.spaceData, "channel")
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.that.$root.showResourceView
                  ? _c(
                      "div",
                      {
                        staticClass: " text-center",
                        staticStyle: {
                          "white-space": "nowrap",
                          width: "100%",
                          overflow: "hidden",
                          "text-overflow": "ellipsis"
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "font-family": "MediumFont"
                            }
                          },
                          [_vm._v("hello")]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.that.$root.showResourceViewContent
                  ? _c(
                      "div",
                      {
                        staticClass: " text-center",
                        staticStyle: {
                          "white-space": "nowrap",
                          width: "100%",
                          overflow: "hidden",
                          "text-overflow": "ellipsis"
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "font-family": "MediumFont"
                            }
                          },
                          [_vm._v("life in tech")]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "  ml-auto" },
                  [
                    _c(
                      "v-btn",
                      { attrs: { icon: "" }, on: { click: _vm.shareResource } },
                      [_c("v-icon", [_vm._v("mdi mdi-share-variant")])],
                      1
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm.that.$root.showResourceView
              ? [
                  _vm.loadingResources
                    ? [
                        _c(
                          "div",
                          { staticClass: "col-12 mt-4 text-center" },
                          [
                            _c("v-progress-circular", {
                              attrs: {
                                color: "#3C87CD",
                                indeterminate: "",
                                width: "3",
                                size: "25"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    : [
                        _c(
                          "div",
                          { staticClass: "col-12" },
                          [
                            _c(
                              "v-card",
                              {
                                staticClass:
                                  "d-flex flex-row px-1  mb-2 col-12 ",
                                staticStyle: {
                                  background: "rgba(125, 179, 229, 0.4)",
                                  cursor: "pointer"
                                },
                                attrs: { ripple: false, flat: "" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "mr-2 ",
                                    on: {
                                      click: function($event) {
                                        return _vm.showContent(_vm.resource)
                                      }
                                    }
                                  },
                                  [
                                    _vm.resource.type == "playlist"
                                      ? _c(
                                          "v-icon",
                                          {
                                            staticClass: "ml-2",
                                            attrs: { color: "#000000" }
                                          },
                                          [_vm._v("las la-play-circle")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      overflow: "hidden",
                                      "text-overflow": "ellipsis",
                                      width: "100%"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.showContent(_vm.resource)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          "font-family": "BodyFont",
                                          color: "black",
                                          "font-size": "13px"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.resource.name))]
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
                          { staticClass: "col-12 py-3 text-center " },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-2 d-inline-block",
                                staticStyle: {
                                  color: "white",
                                  "text-transform": "none",
                                  "font-family": "MediumFont",
                                  "font-size": "13px"
                                },
                                attrs: { medium: "", color: "#3C87CD" },
                                on: {
                                  click: function($event) {
                                    return _vm.goToChannel()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                   Join Channel\n                 "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.that.$root.showResourceViewContent
              ? [
                  _vm.loadingResourceContent
                    ? [
                        _c(
                          "div",
                          { staticClass: "col-12 mt-4 text-center" },
                          [
                            _c("v-progress-circular", {
                              attrs: {
                                color: "#3C87CD",
                                indeterminate: "",
                                width: "3",
                                size: "25"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    : [
                        _c("div", { staticClass: "col-12 px-2 px-md-2  " }, [
                          _c("h6", [_vm._v("Description")]),
                          _vm._v(" "),
                          _c("div", [
                            _c("span", {
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "BodyFont",
                                color: "grey"
                              },
                              domProps: {
                                innerHTML: _vm._s(_vm.selectedResource.info)
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-12 py-1 px-2 px-md-2 ",
                            staticStyle: {
                              background: "transparent",
                              "font-family": "BodyFont"
                            }
                          },
                          [
                            _vm.selectedResource.type == "playlist"
                              ? [_c("h6", [_vm._v("Videos")])]
                              : [_c("h6", [_vm._v("Links and articles")])],
                            _vm._v(" "),
                            _vm.resourcesContent.length > 0
                              ? [
                                  _c("resource", {
                                    attrs: {
                                      contents: _vm.resourcesContent,
                                      show_add_icon: false,
                                      fromStandalone: true
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-center col-lg-12" },
                                    [
                                      _vm.loadingNextPage
                                        ? _c("v-progress-circular", {
                                            attrs: {
                                              indeterminate: "",
                                              color: "#3C87CD"
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("div", {
                                        directives: [
                                          {
                                            name: "observe-visibility",
                                            rawName: "v-observe-visibility",
                                            value: _vm.nextPagehandler,
                                            expression: "nextPagehandler"
                                          }
                                        ]
                                      })
                                    ],
                                    1
                                  )
                                ]
                              : [
                                  _vm.selectedResource.type == "playlist"
                                    ? [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "mt-4 text-center",
                                            staticStyle: {
                                              "font-family": "BodyFont",
                                              "font-size": "13px",
                                              color: "grey"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "No video in this playlist yet."
                                            )
                                          ]
                                        )
                                      ]
                                    : [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "mt-4 text-center",
                                            staticStyle: {
                                              "font-family": "BodyFont",
                                              "font-size": "13px",
                                              color: "grey"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "No article or resource URL in this resource yet."
                                            )
                                          ]
                                        )
                                      ]
                                ],
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 py-3 text-center " },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-2 d-inline-block",
                                    staticStyle: {
                                      color: "white",
                                      "text-transform": "none",
                                      "font-family": "MediumFont",
                                      "font-size": "13px"
                                    },
                                    attrs: { medium: "", color: "#3C87CD" },
                                    on: {
                                      click: function($event) {
                                        return _vm.goToChannel()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                   Join Channel\n                 "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          2
                        )
                      ]
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 py-4 my-4" }),
            _vm._v(" "),
            _vm.that.$root.showYoutubePlayerTemp
              ? _c(
                  "div",
                  {
                    staticClass: "d-flex flex-row col-12 px-0 py-0 text-center",
                    staticStyle: {
                      background: "rgba(27, 27, 30, 0.32)",
                      left: "0",
                      position: "absolute",
                      height: "100%",
                      top: "0%",
                      "z-index": "999999999999"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: " col-12 px-0 py-0",
                        staticStyle: { height: "auto", left: "0%" }
                      },
                      [
                        _c("youtube-player", {
                          attrs: {
                            screenType: "small",
                            playerHeight: 220,
                            videoId: _vm.that.$root.playingVideoId
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/AddGit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/projects/AddGit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddGit.vue?vue&type=template&id=44934f6a& */ "./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&");
/* harmony import */ var _AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddGit.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/AddGit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGit.vue?vue&type=template&id=44934f6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);