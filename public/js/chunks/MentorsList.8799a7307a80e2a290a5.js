(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MentorsList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mentors/list.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/mentors/list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mentors: [],
      loading: false
    };
  },
  mounted: function mounted() {
    this.$root.showTopBar = true; // this.getMentors();
  },
  methods: {
    imageStyle: function imageStyle(size, data) {
      if (data.background_color == null) {
        var styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:50%; background-repeat: no-repeat; ";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:50%; background-repeat: no-repeat; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/challenges/thumbnails/' + imgLink + ');';
        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mentors/list.vue?vue&type=template&id=2600da06&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/mentors/list.vue?vue&type=template&id=2600da06&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0 pb-2 px-2 "
      },
      [
        _c(
          "div",
          { staticClass: "row " },
          [
            _c("div", { staticClass: "col-12 mt-5 mt-md-0 d-md-none d-block" }),
            _vm._v(" "),
            _vm.loading
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
                  _vm.mentors.length != 0
                    ? [_vm._m(1)]
                    : [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-4 col-md-6 px-2 mb-2 pt-1 pt-md-2"
                          },
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "py-2 px-2 d-flex flex-column",
                                staticStyle: {
                                  "align-items": "center",
                                  "justify-content": "center"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: " py-0 my-0 text-center" },
                                  [_c("div", { style: _vm.imageStyle(90, []) })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: " py-0 my-0 text-center mt-2"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "pb-1 d-md-block d-none",
                                        staticStyle: {
                                          "font-size": "14px",
                                          "font-family": "MediumFont",
                                          "white-space": "nowrap",
                                          overflow: "hidden",
                                          "text-overflow": "ellipsis"
                                        }
                                      },
                                      [_vm._v("Akinola Ayomide")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "pb-1  d-md-none d-block",
                                        staticStyle: {
                                          "font-size": "13px",
                                          "font-family": "MediumFont",
                                          "white-space": "nowrap",
                                          overflow: "hidden",
                                          "text-overflow": "ellipsis"
                                        }
                                      },
                                      [_vm._v("Akinola Ayomide")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: " py-0 my-0 text-center" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "pb-1 d-md-block d-none",
                                        staticStyle: {
                                          "font-size": "13px",
                                          "font-family": "MediumFont",
                                          "white-space": "nowrap",
                                          overflow: "hidden",
                                          color: "grey",
                                          "text-overflow": "ellipsis"
                                        }
                                      },
                                      [_vm._v("345 XP")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "pb-1  d-md-none d-block",
                                        staticStyle: {
                                          "font-size": "12px",
                                          "font-family": "MediumFont",
                                          "white-space": "nowrap",
                                          overflow: "hidden",
                                          "text-overflow": "ellipsis",
                                          color: "grey"
                                        }
                                      },
                                      [_vm._v("345 XP")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: " py-0 my-0 text-center mt-2"
                                  },
                                  [
                                    _c(
                                      "v-chip",
                                      {
                                        staticClass: "my-1",
                                        staticStyle: {
                                          "font-size": "12px",
                                          color: "white",
                                          "font-family": "BodyFont"
                                        },
                                        attrs: {
                                          color: "#3C87CD",
                                          dense: "",
                                          small: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n             \n            Javascript\n            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-chip",
                                      {
                                        staticClass: "my-1",
                                        staticStyle: {
                                          "font-size": "12px",
                                          color: "white",
                                          "font-family": "BodyFont"
                                        },
                                        attrs: {
                                          color: "#3C87CD",
                                          small: "",
                                          dense: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n             \n            Python\n            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-chip",
                                      {
                                        staticClass: "my-1",
                                        staticStyle: {
                                          "font-size": "12px",
                                          color: "white",
                                          "font-family": "BodyFont"
                                        },
                                        attrs: {
                                          color: "#3C87CD",
                                          small: "",
                                          dense: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n             \n            PHP\n            "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                ],
            _vm._v(" "),
            _c("div", { staticClass: "col-12 py-5 my-5" })
          ],
          2
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",
        staticStyle: {
          position: "sticky",
          background: "#F5F5FB",
          "z-index": "999999999999",
          "border-bottom": "1px solid #c5c5c5"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6 py-0 my-0" }, [
            _c("h5", [_vm._v("Mentors")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6  py-0 my-0 text-right" })
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
      { staticClass: "col-12 mt-md-4 text-center  mt-1 px-md-2 px-1" },
      [
        _c("div", {
          staticClass: "mb-3 px-3",
          staticStyle: {
            "font-size": "14px",
            color: "black",
            "font-family": "BodyFont"
          }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/mentors/list.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/mentors/list.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_2600da06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=2600da06&scoped=true& */ "./resources/js/components/mentors/list.vue?vue&type=template&id=2600da06&scoped=true&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/mentors/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_2600da06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_2600da06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2600da06",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/mentors/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/mentors/list.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/mentors/list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mentors/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/mentors/list.vue?vue&type=template&id=2600da06&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/mentors/list.vue?vue&type=template&id=2600da06&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_2600da06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=2600da06&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/mentors/list.vue?vue&type=template&id=2600da06&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_2600da06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_2600da06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);