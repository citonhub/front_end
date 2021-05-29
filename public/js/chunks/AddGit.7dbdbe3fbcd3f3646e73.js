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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingContent: false,
      newGitRepo: false,
      currentBranch: 'Current Branch: main'
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
    "div",
    [
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
          _vm._m(0),
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
      _c(
        "v-card",
        {
          staticClass: "col-12",
          staticStyle: {
            height: "93%",
            position: "absolute",
            top: "7%",
            "overflow-y": "auto"
          }
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
                  [
                    _vm.newGitRepo
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "mb-1 mt-3 text-center col-10 offset-1"
                            },
                            [
                              _c("p", [
                                _vm._v(
                                  "Create a github repository for your project to access version control features."
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-center mb-4" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-2 d-inline-block",
                                      staticStyle: {
                                        color: "white",
                                        "font-family": "BodyFont",
                                        "font-size": "11px"
                                      },
                                      attrs: {
                                        small: "",
                                        color: "#3C87CD",
                                        rounded: ""
                                      }
                                    },
                                    [_vm._v("Create Repo")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      : [
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "col-12 px-2 px-md-2 mt-1 " },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticStyle: {
                                      "text-decoration": "underline"
                                    }
                                  },
                                  [_vm._v("Adenikym/phonetracker")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: " ml-2  " }, [
                              _c("span", [_vm._v(" up to date with main")])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "col-12 py-1 my-0 px-2" },
                                [
                                  _c("v-text-field", {
                                    staticStyle: { "font-size": "13px" },
                                    attrs: { dense: "", color: "#3C87CD" },
                                    model: {
                                      value: _vm.currentBranch,
                                      callback: function($$v) {
                                        _vm.currentBranch = $$v
                                      },
                                      expression: "currentBranch"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ]
                  ],
                  2
                )
              ]
        ],
        2
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
          { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
          [_vm._v("Version Control")]
        )
      ]
    )
  }
]
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