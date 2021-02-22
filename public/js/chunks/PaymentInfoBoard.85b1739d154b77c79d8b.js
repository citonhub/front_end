(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PaymentInfoBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      IntervalOptions: ["Weekly", "Every 2 weeks", "Monthly", "Every 2 months", "Every 3 months", "Yearly"]
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light",
      staticStyle: { "align-items": "center", "justify-content": "center" },
      attrs: { "data-app": "true" }
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
          attrs: { small: "", icon: "", color: "#ffffff" },
          on: {
            click: function($event) {
              _vm.that.$root.showPaymentOptionBoard = false
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: " text-left" },
        [
          _c(
            "div",
            {},
            [
              _vm.that.$root.payment_option == "support"
                ? [
                    _c("h5", { staticClass: "text-center" }, [
                      _vm._v("Support")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-alert",
                      {
                        staticClass: "bg-info",
                        attrs: { dense: "", type: "info" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "13px",
                              "font-family": "BodyFont"
                            }
                          },
                          [
                            _vm._v(
                              " Your audience or members can donate any amount of money to support you or for the progress of the community. "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.that.$root.payment_option == "subscription"
                ? [
                    _c("h5", { staticClass: "text-center" }, [
                      _vm._v("Subscription")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-alert",
                      {
                        staticClass: "bg-info",
                        attrs: { dense: "", type: "info" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "13px",
                              "font-family": "BodyFont"
                            }
                          },
                          [
                            _vm._v(
                              "For subscription, recurrent payments are made by your members or audience."
                            )
                          ]
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.that.$root.payment_option == "one_time"
                ? [
                    _c("h5", { staticClass: "text-center" }, [
                      _vm._v("One-time fee")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-alert",
                      {
                        staticClass: "bg-info",
                        attrs: { dense: "", type: "info" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "13px",
                              "font-family": "BodyFont"
                            }
                          },
                          [
                            _vm._v(
                              "  This is perfect for activites that require one time payment and gaining lifetime access. An example could be when you are organize a bootcamp for a fee. Members pay once and have access forever. "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "my-2",
              staticStyle: { "font-size": "14px", "font-family": "MediumFont" }
            },
            [_vm._v("Payment setup:")]
          ),
          _vm._v(" "),
          _vm.that.$root.payment_option == "subscription" ||
          _vm.that.$root.payment_option == "one_time"
            ? [
                _c(
                  "div",
                  {
                    staticClass: "mb-2",
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v("Amount")]
                ),
                _vm._v(" "),
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    placeholder: "amount",
                    dense: "",
                    outlined: "",
                    color: "#3C87CD"
                  }
                })
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.that.$root.payment_option == "subscription"
            ? [
                _c(
                  "div",
                  {
                    staticClass: "mb-2",
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v("Interval")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    staticClass: "browser-default custom-select mb-4",
                    staticStyle: {
                      "font-size": "13px !important",
                      "font-family": "BodyFont",
                      background: "transparent"
                    }
                  },
                  _vm._l(_vm.IntervalOptions, function(option, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: option } },
                      [_vm._v(_vm._s(option))]
                    )
                  }),
                  0
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "mb-2",
              staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
            },
            [
              _vm._v(
                "All payments to this channel would be managed in the below payment card in your wallet."
              )
            ]
          ),
          _vm._v(" "),
          _c("v-text-field", {
            staticStyle: { "font-size": "13px" },
            attrs: {
              placeholder: "Payment card name",
              dense: "",
              outlined: "",
              color: "#3C87CD"
            }
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 text-center pt-0" },
        [
          _c(
            "v-btn",
            {
              staticClass: "mx-2 d-inline-block",
              staticStyle: {
                color: "white",
                "text-transform": "normal",
                "font-family": "BodyFont",
                "font-size": "11px"
              },
              attrs: { small: "", color: "#3C87CD" }
            },
            [_vm._v("Done")]
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

/***/ "./resources/js/components/chats/PaymentInfoBoard.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/chats/PaymentInfoBoard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentInfoBoard_vue_vue_type_template_id_364667de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true& */ "./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true&");
/* harmony import */ var _PaymentInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentInfoBoard.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentInfoBoard_vue_vue_type_template_id_364667de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentInfoBoard_vue_vue_type_template_id_364667de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "364667de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/PaymentInfoBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentInfoBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoBoard_vue_vue_type_template_id_364667de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentInfoBoard.vue?vue&type=template&id=364667de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoBoard_vue_vue_type_template_id_364667de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoBoard_vue_vue_type_template_id_364667de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);