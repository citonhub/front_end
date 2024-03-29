(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PayoutInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/PayoutInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      currencyData: [{
        name: 'Nigerian Naira (NGN)',
        code: 'NGN',
        symbol: '&#8358;'
      }, {
        name: 'Australian Dollar (AUD)',
        code: 'AUD',
        symbol: 'A$'
      }, {
        name: 'South African Rand (ZAR)',
        code: 'ZAR',
        symbol: 'R'
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
      }],
      loadingpayout: false,
      payout_account: 0
    };
  },
  methods: {
    closeModal: function closeModal() {
      this.$root.showWalletinfo = false;
      this.$root.infoType = false;
    },
    addPayoutAccount: function addPayoutAccount() {
      this.$root.infoType = false;
      this.$root.showWalletinfo = false;
      this.$router.push({
        path: '/board/wallet/manage/' + this.$root.selectedPaymentCard.card_no
      });
    },
    PayoutToAccount: function PayoutToAccount() {
      var _this = this;

      this.loadingpayout = true;
      axios.post('/make-payout', {
        card_no: this.$root.selectedPaymentCard.card_no,
        payout_account: this.payout_account
      }).then(function (response) {
        if (response.status == 200) {
          _this.loadingpayout = false;

          _this.$root.cardViewComponent.showAlert('Initiated!', 'Your payout has been initiated', 'success');

          _this.$root.selectedPaymentCard.payout_status = 'pending';

          _this.closeModal();
        }
      })["catch"](function (error) {
        _this.loadingpayout = false;

        _this.$root.cardViewComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
      });
    },
    formatMoney: function formatMoney(number) {
      return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            "col-lg-4 offset-lg-4 pb-2  py-1 d-flex flex-column col-md-8 offset-md-2 application application--light",
          attrs: { "data-app": "true" }
        },
        [
          _c(
            "div",
            {
              staticClass: "d-flex flex-row px-0 py-1",
              staticStyle: {
                "border-bottom": "1px solid #c5c5c5",
                "border-radius": "0px",
                "align-items": "center"
              }
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    "font-family": "HeaderFont",
                    "font-size": "16px"
                  }
                },
                [_vm._v("Payout to you bank")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ml-auto ",
                  staticStyle: { background: "#3C87CD" },
                  attrs: { small: "", icon: "", color: "#ffffff" },
                  on: { click: _vm.closeModal }
                },
                [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "mt-3 mb-2",
              staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "MediumFont",
                    "font-size": "16px"
                  }
                },
                [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.currencyToCharacter(
                          _vm.that.$root.selectedPaymentCard.currency
                        )
                      )
                    }
                  }),
                  _vm._v(
                    _vm._s(
                      _vm.formatMoney(
                        _vm.that.$root.selectedPaymentCard.payable_amount -
                          _vm.that.$root.selectedPaymentCard.payout_fee
                      )
                    )
                  )
                ]
              ),
              _vm._v(", Would be paid into your payout account.\n     ")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "text-left",
              staticStyle: { "font-family": "MediumFont", "font-size": "16px" }
            },
            [
              _c("span", { staticStyle: { "font-size": "14px" } }, [
                _vm._v("Payout fee:")
              ]),
              _vm._v(" "),
              _c("span", {
                domProps: {
                  innerHTML: _vm._s(
                    _vm.currencyToCharacter(
                      _vm.that.$root.selectedPaymentCard.currency
                    )
                  )
                }
              }),
              _vm._v(
                _vm._s(
                  _vm.formatMoney(_vm.that.$root.selectedPaymentCard.payout_fee)
                )
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
            [
              _vm._v(
                "\n       Payout fee is the charge of moving your funds from your wallet on CitonHub to your bank.\n     "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "text-left mb-1 mt-1",
              staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
            },
            [_vm._v("Select payout account ")]
          ),
          _vm._v(" "),
          _vm.that.$root.payoutAccounts.length > 0
            ? _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.payout_account,
                      expression: "payout_account"
                    }
                  ],
                  staticClass: "browser-default custom-select mb-4",
                  staticStyle: {
                    "font-size": "13px !important",
                    "font-family": "BodyFont",
                    background: "transparent"
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.payout_account = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { domProps: { value: 0 } }, [
                    _vm._v("select...")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.that.$root.payoutAccounts, function(
                    option,
                    index
                  ) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: option.id } },
                      [
                        _vm._v(
                          _vm._s(option.bank_name) +
                            " -  " +
                            _vm._s(option.account_number) +
                            " "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            : _c(
                "div",
                {
                  staticClass: " px-3 py-3 text-center",
                  staticStyle: {
                    "font-size": "13px",
                    color: "gray",
                    "font-family": "BodyFont"
                  }
                },
                [
                  _vm._v(
                    "\n                   No payout account found.\n                    "
                  ),
                  _c(
                    "v-btn",
                    {
                      staticStyle: {
                        "font-size": "11px",
                        "font-family": "MediumFont",
                        color: "white",
                        "text-transform": "none"
                      },
                      attrs: { "x-small": "", color: "#3C87CD" },
                      on: { click: _vm.addPayoutAccount }
                    },
                    [
                      _vm._v("Add "),
                      _c("v-icon", { staticStyle: { "font-size": "16px" } }, [
                        _vm._v("las la-plus")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 text-center pb-2 pt-1" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-2 ",
                  staticStyle: {
                    color: "white",
                    "font-family": "BodyFont",
                    "font-size": "11px"
                  },
                  attrs: {
                    small: "",
                    loading: _vm.loadingpayout,
                    disabled: _vm.payout_account == 0,
                    color: "#3C87CD"
                  },
                  on: { click: _vm.PayoutToAccount }
                },
                [_vm._v("Payout")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Wallet/PayoutInfo.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Wallet/PayoutInfo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PayoutInfo_vue_vue_type_template_id_723d60e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true& */ "./resources/js/components/Wallet/PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true&");
/* harmony import */ var _PayoutInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PayoutInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/PayoutInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PayoutInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PayoutInfo_vue_vue_type_template_id_723d60e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PayoutInfo_vue_vue_type_template_id_723d60e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "723d60e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/PayoutInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/PayoutInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Wallet/PayoutInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PayoutInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutInfo_vue_vue_type_template_id_723d60e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutInfo.vue?vue&type=template&id=723d60e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutInfo_vue_vue_type_template_id_723d60e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutInfo_vue_vue_type_template_id_723d60e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);