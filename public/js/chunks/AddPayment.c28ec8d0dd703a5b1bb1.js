(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddPayment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      payment_option: '',
      loading: false
    };
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    selectPaymentOption: function selectPaymentOption(type) {
      this.payment_option = type;
      this.$root.baseChannelName = this.$root.selectedSpace.name;
      this.$root.payment_option = type;
      this.$root.showPaymentOptionBoard = true;
    },
    addPayment: function addPayment() {
      var _this = this;

      this.loading = true;
      var finalName = '';

      if (this.payment_option == 'subscription') {
        finalName = 'Subscription for ' + this.$root.selectedSpace.name;
      }

      if (this.payment_option == 'support') {
        finalName = 'Support for ' + this.$root.selectedSpace.name;
      }

      axios.post('/add-payment-space', {
        space_id: this.$root.selectedSpace.space_id,
        payment_option: this.payment_option,
        currency: this.$root.payment_currency,
        amount: this.$root.payment_amount,
        name: finalName,
        card_name: this.$root.payment_card_name,
        interval: this.$root.payment_interval
      }).then(function (response) {
        if (response.status == 200) {
          _this.loading = false;

          _this.$root.chatComponent.fetchSpaceInfo();

          _this.$root.chatComponent.showAlert('Added!', 'Payment option has been added', 'success');
        }
      })["catch"](function (error) {
        _this.$root.chatComponent.showAlert('Oops!', 'An error occured, please try again', 'error');

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { background: "transparent" } }, [
    _c("div", { staticClass: "col-12 py-1 my-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
            staticStyle: {
              position: "sticky",
              background: "white",
              top: "0%",
              "border-bottom": "2px solid #c5c5c5",
              "align-items": "center"
            }
          },
          [
            _c(
              "div",
              { staticClass: " mr-1 col-2 px-1 py-0" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.goBack($event)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("las la-arrow-left")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 py-0 mr-1 text-right" })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 py-1 my-0",
            staticStyle: {
              background: "transparent",
              "font-family": "BodyFont"
            }
          },
          [
            _c("div", { staticClass: "col-12 px-1 py-1 d-flex flex-row" }, [
              _c(
                "div",
                { staticClass: "  col-4  px-1 my-0 py-2 " },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "px-1 py-1 appBox",
                      style:
                        "height:100px; border:1px solid #c5c5c5; border-radius:7px;",
                      attrs: {
                        color: _vm.payment_option == "support" ? "#F3F8FC" : ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.selectPaymentOption("support")
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
                              class: "las la-hands-helping",
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
                                [_vm._v("Support")]
                              )
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: {
                            position: "absolute",
                            top: "3%",
                            right: "2%"
                          },
                          attrs: { "x-small": "", icon: "" }
                        },
                        [
                          _c(
                            "v-icon",
                            { staticStyle: { "font-size": "18px" } },
                            [_vm._v("las la-exclamation-circle")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "  col-4  px-1 my-0 py-2 " },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "px-1 py-1 appBox",
                      style:
                        "height:100px; border:1px solid #c5c5c5; border-radius:7px;",
                      attrs: {
                        color:
                          _vm.payment_option == "subscription" ? "#F3F8FC" : ""
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: {
                            position: "absolute",
                            top: "3%",
                            right: "2%"
                          },
                          attrs: { "x-small": "", icon: "" }
                        },
                        [
                          _c(
                            "v-icon",
                            { staticStyle: { "font-size": "18px" } },
                            [_vm._v("las la-exclamation-circle")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "  col-4  px-1 my-0 py-2 " },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "px-1 py-1 appBox",
                      style:
                        "height:100px; border:1px solid #c5c5c5; border-radius:7px;",
                      attrs: {
                        color: _vm.payment_option == "one_time" ? "#F3F8FC" : ""
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: {
                            position: "absolute",
                            top: "3%",
                            right: "2%"
                          },
                          attrs: { "x-small": "", icon: "" }
                        },
                        [
                          _c(
                            "v-icon",
                            { staticStyle: { "font-size": "18px" } },
                            [_vm._v("las la-exclamation-circle")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 py-2 my-0 px-2 text-center" },
          [
            _c(
              "v-btn",
              {
                staticStyle: {
                  "font-size": "12px",
                  "text-transform": "none",
                  color: "white",
                  "font-family": "MediumFont"
                },
                attrs: {
                  type: "submit",
                  disabled: _vm.payment_option == "",
                  small: "",
                  color: "#3C87CD",
                  loading: _vm.loading
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.addPayment($event)
                  }
                }
              },
              [_vm._v("Add")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 py-0 text-center" }, [
      _c(
        "span",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("Add Payment")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/AddPayment.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/AddPayment.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& */ "./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&");
/* harmony import */ var _AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPayment.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "80afaaf8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/AddPayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);