(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manageWallet"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/manage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_horizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-horizontal */ "./node_modules/vue-horizontal/dist/vue-horizontal.esm.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      currency: '',
      that: this,
      loadingCurrency: false
    };
  },
  mounted: function mounted() {
    this.currency = this.$root.selectedPaymentCard.currency;
    this.$root.showTopBar = false;
    this.checkForPaymentCard();
  },
  methods: {
    changeCardCurrency: function changeCardCurrency() {
      var _this = this;

      this.loadingCurrency = true;
      axios.post('/update-card-currency', {
        card_no: this.$root.selectedPaymentCard.card_no,
        destination_currency: this.$root.selectedPaymentCard.currency,
        origin_currency: this.currency
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.selectedPaymentCard.currency = _this.currency;
          _this.loadingCurrency = false;

          _this.showAlert('Saved!', 'Your changes has been saved', 'success');
        }
      })["catch"](function (error) {
        _this.showAlert('Oops!', 'Something went wrong,please try again', 'error');
      });
    },
    addPayoutAccount: function addPayoutAccount() {
      this.$root.showPayoutAccount = true;
    },
    checkForPaymentCard: function checkForPaymentCard() {
      var _this2 = this;

      if (this.$root.selectedPaymentCard.length == 0) {
        axios.get('/payment-cards/' + this.$route.params.card_no).then(function (response) {
          if (response.status == 200) {
            _this2.$root.LocalStore('user_payment_card_' + _this2.$route.params.card_no + _this2.$root.username, response.data);

            _this2.$root.selectedPaymentCard = response.data.payment_card;
            _this2.currency = _this2.$root.selectedPaymentCard.currency;
          }
        })["catch"](function (error) {});
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 2000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.warning({
          title: title,
          message: message,
          timeout: 2000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.circle-1{\n    position:absolute;\n    left:35%;\n    top:21px;\n    background: #3C87CD;\n}\n.circle-2{\n    position:absolute;\n    left:61%;\n    top:21px;\n      background: #3C87CD;\n}\n.circle-3{\n    position:absolute;\n    left:88%;\n    top:21px;\n      background: #3C87CD;\n}\n.steps > *{\n    background: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./manage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=template&id=ca401340&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/manage.vue?vue&type=template&id=ca401340& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { "overflow-x": "hidden" } }, [
    _c(
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
          _c(
            "div",
            {
              staticClass: "col-6 py-0 my-0 d-flex flex-row",
              staticStyle: { "align-items": "center" }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-1",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.goBack()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
                1
              ),
              _vm._v(" "),
              _c("h5", [_vm._v("DSC Landmark")])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-6  py-0 my-0 text-right" })
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: " px-1 col-12 pb-0 d-md-none d-block fixed-top",
        staticStyle: {
          position: "sticky",
          background: "#F5F5FB",
          "border-bottom": "1px solid #c5c5c5"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-11 py-0 my-0",
              staticStyle: {
                "align-items": "center",
                "white-space": "nowrap",
                overflow: "hidden",
                "text-overflow": "ellipsis"
              }
            },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.goBack()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
                1
              ),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-lg-10 offset-lg-1 py-0 application application--light px-0",
        attrs: { "data-app": "true" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row ",
              staticStyle: { "border-bottom": "1px solid #c5c5c5" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-2 col-lg-1 col-md-2 d-flex",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "v-icon",
                    { staticStyle: { "font-size": "20px", color: "#263238" } },
                    [_vm._v("las la-money-check")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-column col-10 col-lg-11 " },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        "font-family": "MediumFont"
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Payout Accounts\n               "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mt-1",
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "BodyFont"
                      }
                    },
                    [
                      _c(
                        "v-alert",
                        {
                          staticClass: "mb-1",
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "BodyFont"
                          },
                          attrs: {
                            border: "left",
                            color: "#3C87CD",
                            dark: "",
                            dense: ""
                          }
                        },
                        [
                          _c(
                            "b",
                            { staticStyle: { "font-family": "MediumFont" } },
                            [_vm._v(" Bank:")]
                          ),
                          _vm._v(" First Bank of Nigeria , "),
                          _c(
                            "b",
                            { staticStyle: { "font-family": "MediumFont" } },
                            [_vm._v(" Account Number:")]
                          ),
                          _vm._v(" 3111070416\n    ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-alert",
                        {
                          staticClass: "mb-1",
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "BodyFont"
                          },
                          attrs: {
                            border: "left",
                            color: "#3C87CD",
                            dark: "",
                            dense: ""
                          }
                        },
                        [
                          _c(
                            "b",
                            { staticStyle: { "font-family": "MediumFont" } },
                            [_vm._v(" Bank:")]
                          ),
                          _vm._v(" First Bank of Nigeria , "),
                          _c(
                            "b",
                            { staticStyle: { "font-family": "MediumFont" } },
                            [_vm._v(" Account Number:")]
                          ),
                          _vm._v(" 3111070416\n    ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mt-2",
                          staticStyle: {
                            "font-size": "11px",
                            "font-family": "MediumFont",
                            color: "white",
                            "text-transform": "none"
                          },
                          attrs: {
                            loading:
                              _vm.that.$root.selectedPaymentCard.length == 0,
                            "x-small": "",
                            color: "#3C87CD"
                          },
                          on: { click: _vm.addPayoutAccount }
                        },
                        [
                          _vm._v("Add "),
                          _c(
                            "v-icon",
                            { staticStyle: { "font-size": "16px" } },
                            [_vm._v("las la-plus")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row ",
              staticStyle: { "border-bottom": "1px solid #c5c5c5" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-2 col-lg-1 col-md-2 d-flex",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "v-icon",
                    { staticStyle: { "font-size": "20px", color: "#263238" } },
                    [_vm._v("las la-sync")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-column col-10 col-lg-11 " },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        "font-family": "MediumFont"
                      }
                    },
                    [
                      _vm._v(
                        "\n                   Recurring bills\n               "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mt-1",
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "BodyFont"
                      }
                    },
                    [
                      _c(
                        "v-alert",
                        {
                          staticClass: "mb-1",
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "BodyFont"
                          },
                          attrs: {
                            border: "left",
                            color: "success",
                            dark: "",
                            dismissible: "",
                            dense: ""
                          }
                        },
                        [
                          _c(
                            "b",
                            { staticStyle: { "font-family": "MediumFont" } },
                            [_vm._v("$3,000.00")]
                          ),
                          _vm._v(" Support for DSC Landmark\n    ")
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row ",
              staticStyle: { "border-bottom": "1px solid #c5c5c5" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-2 col-lg-1 col-md-2 d-flex",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "v-icon",
                    { staticStyle: { "font-size": "20px", color: "#263238" } },
                    [_vm._v("las la-cog")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-column col-10 col-lg-11 " },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        "font-family": "MediumFont"
                      }
                    },
                    [_vm._v("\n                  Others\n               ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mt-2",
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "BodyFont"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "mb-2",
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "BodyFont"
                          }
                        },
                        [_vm._v("Default Currency")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-lg-5 col-md-6  px-0 py-0 d-flex flex-row",
                          staticStyle: { "align-items": "center" }
                        },
                        [
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
                              staticClass: "browser-default custom-select",
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
                                  _vm.currency = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.CurrencyOptions, function(
                              option,
                              index
                            ) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: { value: option.code }
                                },
                                [_vm._v(_vm._s(option.name))]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2 ",
                              staticStyle: {
                                color: "white",
                                "text-transform": "normal",
                                "font-family": "BodyFont",
                                "font-size": "11px"
                              },
                              attrs: {
                                small: "",
                                loading: _vm.loadingCurrency,
                                disabled:
                                  _vm.that.$root.selectedPaymentCard.length ==
                                  0,
                                color: "#3C87CD"
                              },
                              on: { click: _vm.changeCardCurrency }
                            },
                            [_vm._v("save")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "d-inline-block" }, [
      _c("h6", [_vm._v("DSC Landmark")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Wallet/manage.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Wallet/manage.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manage_vue_vue_type_template_id_ca401340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage.vue?vue&type=template&id=ca401340& */ "./resources/js/components/Wallet/manage.vue?vue&type=template&id=ca401340&");
/* harmony import */ var _manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _manage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _manage_vue_vue_type_template_id_ca401340___WEBPACK_IMPORTED_MODULE_0__["render"],
  _manage_vue_vue_type_template_id_ca401340___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/manage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/manage.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Wallet/manage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./manage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./manage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Wallet/manage.vue?vue&type=template&id=ca401340&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Wallet/manage.vue?vue&type=template&id=ca401340& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_ca401340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./manage.vue?vue&type=template&id=ca401340& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/manage.vue?vue&type=template&id=ca401340&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_ca401340___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_ca401340___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);