(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WalletCard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_horizontal_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-horizontal-list */ "./node_modules/vue-horizontal-list/dist/vue-horizontal-list.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      items: [{
        name: 'cool'
      }, {
        name: 'nice'
      }, {
        name: 'nice'
      }, {
        name: 'nice'
      }],
      scrollOption: {
        list: {
          "class": 'col-9 py-0',
          padding: 2
        },
        responsive: [{
          end: 340,
          size: 1
        }, {
          start: 340,
          end: 680,
          size: 2
        }, {
          size: 3
        }],
        item: ""
      }
    };
  },
  components: {
    VueHorizontalList: vue_horizontal_list__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-lg-10 offset-lg-1 py-0 pb-2 px-2 " }, [
      _c("div", { staticClass: "row " }, [
        _c("div", { staticClass: "col-12 mt-5 mt-md-0 d-md-none d-block" }),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("vue-horizontal-list", {
              attrs: { items: _vm.items, options: _vm.scrollOption },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-card",
                        {
                          class: item,
                          staticStyle: {
                            "background-repeat": "no-repeat",
                            "border-radius": "10px",
                            background: "url(/imgs/card_bg_2.jpg)",
                            "background-size": "cover"
                          },
                          attrs: { height: "200" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-row",
                              staticStyle: {
                                position: "absolute",
                                width: "100%",
                                top: "0%",
                                left: "0%",
                                height: "25%",
                                "align-items": "center"
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "pl-2 pt-2",
                                attrs: {
                                  height: "50",
                                  src: "/imgs/credit-card-chip.png"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-row",
                              staticStyle: {
                                position: "absolute",
                                width: "100%",
                                top: "25%",
                                left: "0%",
                                height: "50%",
                                "align-items": "center"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex px-2 flex-column text-left",
                                  staticStyle: { width: "50%" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "12px",
                                        color: "white",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Name")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "14px",
                                        color: "white",
                                        "font-family": "HeaderFont"
                                      }
                                    },
                                    [_vm._v("Akinola Raymond")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex px-2 flex-column text-right",
                                  staticStyle: { width: "50%" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "12px",
                                        color: "white",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Number")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "14px",
                                        color: "white",
                                        "font-family": "HeaderFont"
                                      }
                                    },
                                    [_vm._v("**** **** 4567")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-row",
                              staticStyle: {
                                position: "absolute",
                                width: "100%",
                                top: "75%",
                                left: "0%",
                                height: "25%",
                                "align-items": "center"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex px-2 pb-2 flex-column text-left"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "12px",
                                        color: "white",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Balance")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "font-size": "26px",
                                        color: "white",
                                        "font-family": "HeaderFont"
                                      }
                                    },
                                    [_vm._v("$ 1,078.00")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "pr-2 pb-2 ml-auto",
                                attrs: { height: "40", src: "/imgs/logo.png" }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 py-5 my-5" })
      ])
    ])
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
            _c("h5", [_vm._v("Wallet")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6  py-0 my-0 text-right" })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Wallet/card.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=6b20396a&scoped=true& */ "./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b20396a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=6b20396a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/card.vue?vue&type=template&id=6b20396a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_6b20396a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);