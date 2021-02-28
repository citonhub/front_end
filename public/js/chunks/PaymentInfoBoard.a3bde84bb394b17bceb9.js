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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this
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
        "col-lg-4 offset-lg-4   py-3 d-flex flex-column col-md-8 offset-md-2 ",
      staticStyle: { "align-items": "center", "justify-content": "center" }
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
            right: "1%",
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
          _c("div", {}, [
            _c("h6", [_vm._v("Support")]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [
                _vm._v(
                  " Your audience or members can donate any amount of money to support you or for the progress of the community. "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "pt-1",
              staticStyle: { "font-size": "13px", "font-family": "MediumFont" }
            },
            [_vm._v("Select or create a payment card")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
            [
              _vm._v(
                "All the funds this payment this channel would be managed in this payment card in your wallet."
              )
            ]
          ),
          _vm._v(" "),
          _c("v-combobox", {
            staticStyle: { "font-size": "13px" },
            attrs: {
              dense: "",
              placeholder: "Payment card name",
              "persistent-hint": "",
              chips: "",
              multiple: "",
              color: "#3C87CD"
            },
            scopedSlots: _vm._u([
              {
                key: "selection",
                fn: function(data) {
                  return [
                    _c(
                      "v-chip",
                      _vm._b(
                        {
                          key: JSON.stringify(data.item),
                          staticClass: "my-1",
                          staticStyle: {
                            "font-size": "12px",
                            "font-family": "BodyFont"
                          },
                          attrs: {
                            "input-value": data.selected,
                            color: "#3C87CD",
                            dense: "",
                            outlined: "",
                            disabled: data.disabled
                          }
                        },
                        "v-chip",
                        data.attrs,
                        false
                      ),
                      [
                        _vm._v(
                          "\n          \n           " +
                            _vm._s(data.item) +
                            "\n         "
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