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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      IntervalOptions: ["weekly", "monthly", "quarterly", "yearly"],
      CurrencyOptions: [{
        name: 'Nigerian Naira (NGN)',
        code: 'NGN'
      }, {
        name: 'Australian Dollar (AUD)',
        code: 'AUD'
      }, {
        name: 'United State Dollar (USD)',
        code: 'USD'
      }, {
        name: 'Euro (EUR)',
        code: 'EUR'
      }, {
        name: 'British Pound Sterling (GBP)',
        code: 'GBP'
      }, {
        name: 'Ghanainan Cedi (GHS)',
        code: 'GHS'
      }, {
        name: 'Kenya Shilling (KES)',
        code: 'KES'
      }, {
        name: 'South African Rand (ZAR)',
        code: 'ZAR'
      }, {
        name: 'Rwandan Franc (RWF)',
        code: 'RWF'
      }, {
        name: 'Sierra Leonean Leone (SLL)',
        code: 'SLL'
      }, {
        name: 'Tanzanian Shilling (TZS)',
        code: 'TZS'
      }, {
        name: 'Ugandan Shilling (UGX)',
        code: 'UGX'
      }, {
        name: 'CSA Franc BEAC (XAF)',
        code: 'XAF'
      }, {
        name: 'CSA Franc BCEAO (XOF)',
        code: 'XOF'
      }, {
        name: 'Zambian Kwacha (ZMW)',
        code: 'ZMW'
      }],
      card_name: '',
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      AmountRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }, function (v) {
        return !isNaN(parseFloat(v)) && v >= 5 && v <= 1000000 || 'Amount must be a number between 5 to 1000000';
      }],
      amount: '',
      currency: 'NGN',
      interval: 'monthly',
      name: ''
    };
  },
  mounted: function mounted() {
    this.card_name = this.$root.baseChannelName;
  },
  methods: {
    preventDefault: function preventDefault() {},
    saveDataToRoot: function saveDataToRoot() {
      this.$root.payment_name = this.name;
      this.$root.payment_card_name = this.card_name;
      this.$root.payment_amount = this.amount;
      this.$root.payment_interval = this.interval;
      this.$root.payment_currency = this.currency;
      this.$root.showPaymentOptionBoard = false;
    },
    selectPaymentOption: function selectPaymentOption(type) {
      this.$root.baseChannelName = this.name;
      this.$root.payment_option = type;
      this.$root.showPaymentOptionBoard = true;
    }
  }
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
                right: "2%",
                "z-index": "990679797879"
              },
              attrs: { small: "", icon: "", color: "#ffffff" },
              on: { click: _vm.saveDataToRoot }
            },
            [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
            1
          ),
          _vm._v(" "),
          _vm.that.$root.payment_option == "membership"
            ? [
                _c(
                  "div",
                  { staticClass: "col-12 text-left py-0 px-md-2 px-1" },
                  [
                    _c("h5", { staticClass: "text-left" }, [
                      _vm._v("Membership")
                    ]),
                    _vm._v(" "),
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
                          " Your audience or members will have to pay before they access your channel and the contents in it. "
                        ),
                        _c(
                          "span",
                          { staticStyle: { "font-family": "MediumFont" } },
                          [_vm._v("Subscription")]
                        ),
                        _vm._v(
                          " means they will pay a certain amount of money\n          recurrently. "
                        ),
                        _c(
                          "span",
                          { staticStyle: { "font-family": "MediumFont" } },
                          [_vm._v("One-time fee")]
                        ),
                        _vm._v(
                          " means they will pay once access your channel and it's contents forever."
                        )
                      ]
                    ),
                    _c("br"),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "BodyFont"
                        }
                      },
                      [_vm._v("Select membership type")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 d-flex flex-row" }, [
                      _c(
                        "div",
                        { staticClass: "  col-6  px-1 my-0 py-2 " },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "px-1 py-1 appBox",
                              style:
                                _vm.that.$root.payment_option == "subscription"
                                  ? "height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;"
                                  : "height:100px; border:1px solid #c5c5c5; border-radius:7px;",
                              attrs: {
                                color:
                                  _vm.that.$root.payment_option ==
                                  "subscription"
                                    ? "#3C87CD"
                                    : ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.selectPaymentOption("subscription")
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex",
                                  staticStyle: {
                                    height: "100%",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    width: "100%"
                                  }
                                },
                                [
                                  _c("div", { staticClass: "text-center" }, [
                                    _c("i", {
                                      class: "las la-credit-card",
                                      staticStyle: { "font-size": "30px" }
                                    }),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "13px",
                                            "font-family": "BodyFont"
                                          }
                                        },
                                        [_vm._v("Subscription")]
                                      )
                                    ])
                                  ])
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
                        { staticClass: "  col-6  px-1 my-0 py-2 " },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "px-1 py-1 appBox",
                              style:
                                _vm.that.$root.payment_option == "one_time"
                                  ? "height:100px; border:1px solid #3C87CD; border-radius:7px;color:white;"
                                  : "height:100px; border:1px solid #c5c5c5; border-radius:7px;",
                              attrs: {
                                color:
                                  _vm.that.$root.payment_option == "one_time"
                                    ? "#3C87CD"
                                    : ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.selectPaymentOption("one_time")
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex",
                                  staticStyle: {
                                    height: "100%",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    width: "100%"
                                  }
                                },
                                [
                                  _c("div", { staticClass: "text-center" }, [
                                    _c("i", {
                                      class: "las la-money-bill-wave",
                                      staticStyle: { "font-size": "30px" }
                                    }),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "13px",
                                            "font-family": "BodyFont"
                                          }
                                        },
                                        [_vm._v("One-time fee")]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div")
                  ]
                )
              ]
            : [
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
                              _c("h5", [_vm._v("Donation")]),
                              _vm._v(" "),
                              _c(
                                "v-alert",
                                {
                                  staticStyle: { background: "#3C87CD" },
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
                              _c("h5", [_vm._v("Subscription")]),
                              _vm._v(" "),
                              _c(
                                "v-alert",
                                {
                                  staticStyle: { background: "#3C87CD" },
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
                              _c("h5", [_vm._v("One-time fee")]),
                              _vm._v(" "),
                              _c(
                                "v-alert",
                                {
                                  staticStyle: { background: "#3C87CD" },
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
                        staticClass: "mb-2",
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v("Select currency")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currency,
                            expression: "currency"
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
                            _vm.currency = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      _vm._l(_vm.CurrencyOptions, function(option, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: option.code } },
                          [_vm._v(_vm._s(option.name))]
                        )
                      }),
                      0
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
                            [_vm._v("Set amount")]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            staticStyle: { "font-size": "13px" },
                            attrs: {
                              placeholder: "amount",
                              dense: "",
                              rules: _vm.AmountRule,
                              type: "tel",
                              outlined: "",
                              color: "#3C87CD"
                            },
                            model: {
                              value: _vm.amount,
                              callback: function($$v) {
                                _vm.amount = $$v
                              },
                              expression: "amount"
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
                            [_vm._v("Set interval")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.interval,
                                  expression: "interval"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.interval = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.IntervalOptions, function(
                              option,
                              index
                            ) {
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
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "BodyFont"
                        }
                      },
                      [
                        _vm._v(
                          "All payments to your channel would be managed in this payment card."
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "Payment card name",
                        dense: "",
                        rules: _vm.requiredRule,
                        outlined: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.card_name,
                        callback: function($$v) {
                          _vm.card_name = $$v
                        },
                        expression: "card_name"
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
                        attrs: { small: "", color: "#3C87CD" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.saveDataToRoot($event)
                          }
                        }
                      },
                      [_vm._v("Done")]
                    )
                  ],
                  1
                )
              ]
        ],
        2
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