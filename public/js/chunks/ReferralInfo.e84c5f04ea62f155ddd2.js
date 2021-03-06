(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReferralInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/ReferralInfo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/ReferralInfo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
      }]
    };
  },
  methods: {
    closeModal: function closeModal() {
      this.$root.showWalletinfo = false;
      this.$root.infoType = false;
    },
    formatMoney: function formatMoney(number) {
      return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    imageStyle: function imageStyle(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/thumbnails/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/thumbnails/' + imgLink + ');';
        }

        return _styleString;
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            "col-lg-4 offset-lg-4   py-1 pb-2 d-flex flex-column col-md-8 offset-md-2 application application--light",
          attrs: { "data-app": "true" }
        },
        [
          _c(
            "div",
            {
              staticClass: "d-flex flex-row px-1 py-2",
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
                [_vm._v("Referrals")]
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
          _c("div", { staticClass: "d-flex flex-row py-2" }, [
            _c(
              "div",
              {
                staticClass: "col-6 d-flex flex-column",
                staticStyle: {
                  "align-items": "center",
                  "justify-content": "center"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: {
                      color: "grey",
                      "font-size": "14px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v("Your referrals")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "py-2",
                    staticStyle: {
                      "font-size": "17px",
                      "font-family": "HeaderFont"
                    }
                  },
                  [_vm._v("156")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-6 d-flex flex-column",
                staticStyle: {
                  "align-items": "center",
                  "justify-content": "center"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: {
                      color: "grey",
                      "font-size": "14px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v("Amount earned")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "py-2",
                    staticStyle: {
                      "font-size": "17px",
                      "font-family": "HeaderFont"
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
                    _vm._v("345,090.00")
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "py-2 pt-0 d-flex flex-column" }, [
            _c(
              "div",
              {
                staticStyle: {
                  "font-size": "13px",
                  color: "gray",
                  "font-family": "MediumFont"
                }
              },
              [_vm._v("Your referral link")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex flex-row pt-2 px-2",
                staticStyle: { "align-items": "center" }
              },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-3 ",
                    staticStyle: {
                      color: "white",
                      "text-transform": "capitalize",
                      "font-family": "BodyFont",
                      "font-size": "11px"
                    },
                    attrs: { "x-small": "", color: "#3C87CD" }
                  },
                  [_vm._v("Copy")]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  { staticClass: "mr-3 ", attrs: { icon: "", "x-small": "" } },
                  [
                    _c(
                      "v-icon",
                      {
                        staticStyle: { "font-size": "25px" },
                        attrs: { color: "#4FCE5D" }
                      },
                      [_vm._v("las la-whatsapp")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  { staticClass: "mr-3 ", attrs: { icon: "", "x-small": "" } },
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "mx-1",
                        staticStyle: { "font-size": "25px" },
                        attrs: { color: "#00acee" }
                      },
                      [_vm._v("las la-twitter")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "py-2 pt-0 d-flex mt-1 flex-column" }, [
            _c(
              "div",
              {
                staticStyle: {
                  "font-size": "13px",
                  color: "gray",
                  "font-family": "MediumFont"
                }
              },
              [_vm._v("Referred users")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mt-2 d-flex flex-column" }, [
              _c(
                "div",
                {
                  staticClass: "d-flex flex-row",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c("div", {
                    staticClass: "mr-2",
                    style: _vm.imageStyle(40, [], "user")
                  }),
                  _vm._v(" "),
                  _c("div", [
                    _c("span", { staticStyle: { "font-size": "13px" } }, [
                      _vm._v("Akinola Ayomide")
                    ])
                  ])
                ]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Wallet/ReferralInfo.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Wallet/ReferralInfo.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReferralInfo_vue_vue_type_template_id_e62e9c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true& */ "./resources/js/components/Wallet/ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true&");
/* harmony import */ var _ReferralInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReferralInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/ReferralInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReferralInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReferralInfo_vue_vue_type_template_id_e62e9c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReferralInfo_vue_vue_type_template_id_e62e9c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e62e9c74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/ReferralInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/ReferralInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Wallet/ReferralInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReferralInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReferralInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/ReferralInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReferralInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReferralInfo_vue_vue_type_template_id_e62e9c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/ReferralInfo.vue?vue&type=template&id=e62e9c74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReferralInfo_vue_vue_type_template_id_e62e9c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReferralInfo_vue_vue_type_template_id_e62e9c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);