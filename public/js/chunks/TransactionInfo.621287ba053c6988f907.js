(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TransactionInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/TransactionInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/TransactionInfo.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      currencyData: [{
        name: 'Nigerian Naira (NGN)',
        code: 'NGN',
        symbol: '&#8358;'
      }, {
        name: 'Canadian Dollar (CAD)',
        code: 'CAD',
        symbol: '&#36;'
      }, {
        name: 'United State Dollar (USD)',
        code: 'USD',
        symbol: '&#36;'
      }, {
        name: 'Congolese Franc (CDF)',
        code: 'CDF',
        symbol: '&#8355;'
      }, {
        name: 'Euro (EUR)',
        code: 'EUR',
        symbol: '&#128;'
      }, {
        name: 'British Pound Sterling (GBP)',
        code: 'GBP',
        symbol: '&#163;'
      }, {
        name: 'Ghanainan Cedi (GHS)',
        code: 'GHS',
        symbol: '&#8373;'
      }, {
        name: 'Gambian Dalasi (GMD)',
        code: 'GMD',
        symbol: 'D'
      }, {
        name: 'Guinean Franc (GNF)',
        code: 'GNF',
        symbol: '&#8355;'
      }, {
        name: 'Kenya Shilling (KES)',
        code: 'KES',
        symbol: 'KSh'
      }, {
        name: 'Liberian Dollar (LRD)',
        code: 'LRD',
        symbol: '&#36;'
      }, {
        name: 'Malawian Kwacha (MWK)',
        code: 'MWK',
        symbol: 'MWK'
      }, {
        name: 'Mozambican Metical (MZN)',
        code: 'MZN',
        symbol: 'MZN'
      }, {
        name: 'Rwandan Franc (RWF)',
        code: 'RWF',
        symbol: '&#8355;'
      }, {
        name: 'Sierra Leonean Leone (SLL)',
        code: 'SLL',
        symbol: 'Le'
      }, {
        name: 'Sao Tome and Principe Dobra (STD)',
        code: 'STD',
        symbol: 'STD'
      }, {
        name: 'Tanzanian Shilling (TZS)',
        code: 'TZS',
        symbol: 'TSh'
      }, {
        name: 'Ugandan Shilling (UGX)',
        code: 'UGX',
        symbol: 'Ush'
      }, {
        name: 'CSA Franc BEAC (XAF)',
        code: 'XAF',
        symbol: '&#8355;'
      }, {
        name: 'CSA Franc BCEAO (XOF)',
        code: 'XOF',
        symbol: '&#8355;'
      }, {
        name: 'Zambian Kwacha (pre-2013) (ZMK)',
        code: 'ZMK',
        symbol: 'ZMK'
      }, {
        name: 'Zambian Kwacha (ZMW)',
        code: 'ZMW',
        symbol: 'ZMW'
      }, {
        name: 'Zimbabwean Dollar',
        code: 'ZWD',
        symbol: 'Z$'
      }]
    };
  },
  methods: {
    formatMoney: function formatMoney(number, decPlaces, decSep, thouSep) {
      decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces, decSep = typeof decSep === "undefined" ? "." : decSep;
      thouSep = typeof thouSep === "undefined" ? "," : thouSep;
      var sign = number < 0 ? "-" : "";
      var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
      var j = (j = i.length) > 3 ? j % 3 : 0;
      return sign + (j ? i.substr(0, j) + thouSep : "") + i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) + (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    },
    currencyToCharacter: function currencyToCharacter(currency) {
      var thisCurrency = this.currencyData.filter(function (eachCurrency) {
        return currency == eachCurrency.code;
      });
      return thisCurrency[0].symbol;
    },
    preventDefault: function preventDefault() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true& ***!
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
    "div",
    {
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.preventDefault($event)
        }
      }
    },
    [
      _c(
        "v-card",
        {
          staticClass:
            "col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light",
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
                right: "2%",
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
            "h5",
            {
              staticClass: "py-1 mb-2",
              staticStyle: { "border-bottom": "1px solid #000000" }
            },
            [_vm._v("Transaction")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "d-flex flex-row",
              staticStyle: { "border-bottom": "1px solid #c5c5c5" }
            },
            [
              _c("div", [
                _c(
                  "span",
                  { staticStyle: { "font-size": "13px", color: "grey" } },
                  [_vm._v("Amount")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "ml-auto" }, [
                _c("span", { staticStyle: { "font-size": "13px" } }, [
                  _vm._v("$56.90")
                ])
              ])
            ]
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

/***/ "./resources/js/components/Wallet/TransactionInfo.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Wallet/TransactionInfo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionInfo_vue_vue_type_template_id_0694bfa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true& */ "./resources/js/components/Wallet/TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true&");
/* harmony import */ var _TransactionInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/TransactionInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionInfo_vue_vue_type_template_id_0694bfa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionInfo_vue_vue_type_template_id_0694bfa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0694bfa1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/TransactionInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/TransactionInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Wallet/TransactionInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/TransactionInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionInfo_vue_vue_type_template_id_0694bfa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/TransactionInfo.vue?vue&type=template&id=0694bfa1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionInfo_vue_vue_type_template_id_0694bfa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionInfo_vue_vue_type_template_id_0694bfa1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);