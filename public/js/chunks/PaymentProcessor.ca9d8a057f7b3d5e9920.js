(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PaymentProcessor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flutterwave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flutterwave */ "./node_modules/vue-flutterwave/dist/flutterwave.min.js");
/* harmony import */ var vue_flutterwave__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flutterwave__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.use(vue_flutterwave__WEBPACK_IMPORTED_MODULE_0___default.a, {
  publicKey: 'FLWPUBK_TEST-88988df0b869189dd63c6cd152830ac2-X'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      CurrencyOptions: [{
        name: 'Nigerian Naira (NGN)',
        code: 'NGN'
      }, {
        name: 'Canadian Dollar (CAD)',
        code: 'CAD'
      }, {
        name: 'United State Dollar (USD)',
        code: 'USD'
      }, {
        name: 'Congolese Franc (CDF)',
        code: 'CDF'
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
        name: 'Gambian Dalasi (GMD)',
        code: 'GMD'
      }, {
        name: 'Guinean Franc (GNF)',
        code: 'GNF'
      }, {
        name: 'Kenya Shilling (KES)',
        code: 'KES'
      }, {
        name: 'Liberian Dollar (LRD)',
        code: 'LRD'
      }, {
        name: 'Malawian Kwacha (MWK)',
        code: 'MWK'
      }, {
        name: 'Mozambican Metical (MZN)',
        code: 'MZN'
      }, {
        name: 'Rwandan Franc (RWF)',
        code: 'RWF'
      }, {
        name: 'Sierra Leonean Leone (SLL)',
        code: 'SLL'
      }, {
        name: 'Sao Tome and Principe Dobra (STD)',
        code: 'STD'
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
        name: 'Zambian Kwacha (pre-2013) (ZMK)',
        code: 'ZMK'
      }, {
        name: 'Zambian Kwacha (ZMW)',
        code: 'ZMW'
      }, {
        name: 'Zimbabwean Dollar',
        code: 'ZWD'
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
      supporter_name: '',
      support_type: 'once',
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      loadingContent: true,
      spaceData: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.fetchSpaceInfo();
    }, 1000);
  },
  methods: {
    HandleSupport: function HandleSupport() {
      this.$root.checkIfUserIsLoggedIn();
      this.support_type = 'recurrent';
    },
    makePayment: function makePayment() {
      var _this2 = this;

      var userEmail = '';
      var userName = '';

      if (this.$root.isLogged) {
        userEmail = this.$root.authProfile.email;
        userName = this.$root.authProfile.name;
      } else {
        userName = this.supporter_name;
      }

      var payment_desc = '';

      if (this.spaceData.payment_option == 'support') {
        payment_desc = 'Support ' + this.spaceData.name;
      }

      if (this.spaceData.payment_option == 'subscription') {
        payment_desc = 'Subscription fee for' + this.spaceData.name;
      }

      if (this.spaceData.payment_option == 'one_time') {
        payment_desc = 'Payment to join ' + this.spaceData.name;
      }

      var paymentplan = null;

      if (this.spaceData.payment_option == 'subscription') {
        paymentplan = this.spaceData.payment_data.plan_id;
      }

      if (this.spaceData.payment_option == 'support') {
        if (this.support_type == 'recurrent') {
          paymentplan = this.spaceData.payment_data.plan_id;
        }
      }

      var SpaceImage = 'https://www.citonhub.com/images/icons/logo_android-chrome-192x192.png';

      if (this.spaceData.image_name) {
        SpaceImage = 'http://citonhubnew.com/imgs/space/thumbnails/' + this.spaceData.image_name + '.' + this.spaceData.image_extension;
      }

      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: this.currency,
        payment_options: "card,mobilemoney,ussd",
        payment_plan: this.spaceData.payment_data.plan_id,
        customer: {
          email: userEmail,
          name: userName
        },
        callback: function callback(data) {
          if (data.status == 'successful') {
            axios.post('/save-transaction', {
              data: data,
              type: _this2.spaceData.payment_option,
              card_no: _this2.spaceData.payment_data.card_no,
              narration: payment_desc
            }).then(function (response) {
              if (response.status == 200) {
                _this2.$root.chatComponent.openChat(_this2.$route.params.spaceId, true);

                return;
              } else {
                console.log(response.status);
              }
            })["catch"](function (error) {
              console.log(error);
            });
          } else {
            _this2.$root.chatComponent.showAlert('Oops!', 'Unable to process your payment, please try again', 'error');
          }
        },
        customizations: {
          title: this.spaceData.name,
          description: payment_desc,
          logo: SpaceImage
        }
      });
    },
    fetchSpaceInfo: function fetchSpaceInfo() {
      var _this3 = this;

      this.loadingContent = true;
      axios.get('/fetch-space-info-' + this.$route.params.spaceId).then(function (response) {
        if (response.status == 200) {
          _this3.spaceData = response.data.space;

          if (_this3.spaceData.type != 'Channel' && _this3.spaceData.type != 'Team' && _this3.spaceData.type != 'SubSpace') {
            _this3.$root.chatComponent.openChat(_this3.$route.params.spaceId, true);

            return;
          }

          if (_this3.spaceData.is_member) {
            if (!_this3.$root.showProcessorFromChat) {
              _this3.$root.chatComponent.openChat(_this3.$route.params.spaceId, true);

              return;
            } else {}
          } else {
            if (_this3.spaceData.payment_option == 'support' && _this3.$root.isLogged) {
              if (!_this3.$root.fromSupportDirectlink) {
                _this3.$root.chatComponent.openChat(_this3.$route.params.spaceId, false);

                return;
              }
            } else {}
          }

          if (_this3.spaceData.payment_option == 'subscription') {
            _this3.currency = _this3.spaceData.payment_data.currency;
            _this3.interval = _this3.spaceData.payment_data.interval;
            _this3.amount = _this3.spaceData.payment_data.amount;
            _this3.supporter_name = 'supporter';
          }

          if (_this3.spaceData.payment_option == 'one_time') {
            _this3.currency = _this3.spaceData.payment_data.currency;
            _this3.amount = _this3.spaceData.payment_data.amount;
            _this3.supporter_name = 'supporter';
          }

          if (_this3.$root.isLogged) {
            _this3.supporter_name = _this3.$root.authProfile.name;
          }

          _this3.loadingContent = false;
        }
      })["catch"](function (error) {
        _this3.$root.chatComponent.showAlert('Oops!', 'Something went wrong, please try again', 'error');

        _this3.loadingContent = false;
      });
    },
    imageStyleSpace: function imageStyleSpace(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-flutterwave/dist/flutterwave.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-flutterwave/dist/flutterwave.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return n={},o.m=r=[function(e,t,r){"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function o(o){for(var e=1;e<arguments.length;e++){var u=null!=arguments[e]?arguments[e]:{};e%2?n(Object(u),!0).forEach(function(e){var t,r,n;n=u[r=e],r in(t=o)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):n(Object(u)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(u,e))})}return o}r.r(t),t.default={install:function(e,t){var r=t.publicKey;e.mixin({mounted:function(){var e="https://checkout.flutterwave.com/v3.js",t=document.createElement("script");t.src=e,document.querySelector('[src="'.concat(e,'"]'))||document.body.appendChild(t)},methods:{$launchFlutterwave:function(e){window.FlutterwaveCheckout(o({public_key:r},e))}}})}}}],o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=0);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& ***!
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
    { staticClass: "col-lg-6 col-md-6 d-flex flex-column px-md-2 px-1" },
    [
      _vm.loadingContent
        ? [
            _c(
              "div",
              { staticClass: "text-center mt-5" },
              [
                _c("v-progress-circular", {
                  attrs: {
                    color: "#3C87CD",
                    indeterminate: "",
                    width: "3",
                    size: "28"
                  }
                })
              ],
              1
            )
          ]
        : [
            _c(
              "div",
              {
                staticClass: "text-center mb-2 mt-md-4 mt-0 d-flex",
                staticStyle: {
                  "align-items": "center",
                  "justify-content": "center"
                }
              },
              [
                _c("div", {
                  style: _vm.imageStyleSpace(140, _vm.spaceData, "channel")
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "py-2 mt-1" },
              [
                _c("h6", [_vm._v(_vm._s(_vm.spaceData.name))]),
                _vm._v(" "),
                _vm.spaceData.description
                  ? [
                      _c("span", {
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "BodyFont"
                        },
                        domProps: {
                          innerHTML: _vm._s(_vm.spaceData.description)
                        }
                      })
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "py-2 " },
              [
                _vm.spaceData.payment_option == "support"
                  ? [
                      _c("h6", { staticStyle: { "font-siz": "14px" } }, [
                        _vm._v("Support Us")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.spaceData.payment_option == "subscription"
                  ? [
                      _c("h6", { staticStyle: { "font-siz": "14px" } }, [
                        _vm._v("Subscribe and Join Us")
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.spaceData.payment_option == "one_time"
                  ? [
                      _c("h6", { staticStyle: { "font-siz": "14px" } }, [
                        _vm._v("Join Us")
                      ])
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _vm.spaceData.payment_option == "support"
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
                    [_vm._v("Your name")]
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      placeholder: "name",
                      dense: "",
                      rules: _vm.requiredRule,
                      type: "tel",
                      outlined: "",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.supporter_name,
                      callback: function($$v) {
                        _vm.supporter_name = $$v
                      },
                      expression: "supporter_name"
                    }
                  })
                ]
              : _vm._e(),
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
              [_vm._v("Amount")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-row" },
              [
                _vm.spaceData.payment_option == "support"
                  ? [
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
                            background: "transparent",
                            width: "25%",
                            height: "40px"
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
                            [_vm._v(_vm._s(option.code))]
                          )
                        }),
                        0
                      )
                    ]
                  : [
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
                            background: "transparent",
                            width: "25%",
                            height: "40px"
                          },
                          attrs: { disabled: "" },
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
                            [_vm._v(_vm._s(option.code))]
                          )
                        }),
                        0
                      )
                    ],
                _vm._v(" "),
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px", width: "75%" },
                  attrs: {
                    placeholder: "amount",
                    dense: "",
                    readonly: _vm.spaceData.payment_option != "support",
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
              ],
              2
            ),
            _vm._v(" "),
            _vm.spaceData.payment_option == "subscription"
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
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "BodyFont",
                        color: "gray"
                      }
                    },
                    [_vm._v(_vm._s(_vm.interval))]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.spaceData.payment_option == "support"
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "py-2",
                      staticStyle: {
                        "font-size": "13px",
                        color: "grey",
                        "font-family": "MediumFont"
                      }
                    },
                    [_vm._v("Select support type;")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: " d-flex flex-row flex-wrap " }, [
                    _c(
                      "div",
                      { staticClass: "  col-6  px-1 my-0 py-2 " },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "px-1 py-1 ",
                            style:
                              "height:100px; border:1px solid #c5c5c5; border-radius:7px;",
                            attrs: {
                              color: _vm.support_type == "once" ? "#F3F8FC" : ""
                            },
                            on: {
                              click: function($event) {
                                _vm.support_type = "once"
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
                                  _c("img", {
                                    attrs: {
                                      src: "/imgs/support.png",
                                      height: "40"
                                    }
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
                                      [_vm._v("One-time")]
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
                              "height:100px; border:1px solid #c5c5c5; border-radius:7px;",
                            attrs: {
                              color:
                                _vm.support_type == "recurrent" ? "#F3F8FC" : ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.HandleSupport("recurrent")
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
                                  _c("img", {
                                    attrs: {
                                      src: "/imgs/subscribe.png",
                                      height: "40"
                                    }
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
                                      [_vm._v("Monthly")]
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
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 text-center py-2 mt-3" },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-2 d-inline-block",
                    staticStyle: {
                      color: "white",
                      "text-transform": "none",
                      "font-family": "MediumFont",
                      "font-size": "11px"
                    },
                    attrs: {
                      disabled: _vm.amount == "" || _vm.supporter_name == "",
                      small: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.makePayment }
                  },
                  [
                    _vm.spaceData.payment_option == "support"
                      ? [_c("span", [_vm._v("Support")])]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.spaceData.payment_option == "subscription"
                      ? [_c("span", [_vm._v("Subscribe")])]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.spaceData.payment_option == "one_time"
                      ? [_c("span", [_vm._v("Join")])]
                      : _vm._e()
                  ],
                  2
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/PaymentProcessor.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/chats/PaymentProcessor.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& */ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&");
/* harmony import */ var _PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentProcessor.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2aef566a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/PaymentProcessor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentProcessor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);