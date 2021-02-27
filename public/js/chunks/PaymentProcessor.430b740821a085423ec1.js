(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PaymentProcessor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js& ***!
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
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      loadingContent: false,
      spaceData: []
    };
  },
  mounted: function mounted() {},
  methods: {
    fetchSpaceInfo: function fetchSpaceInfo() {
      var _this = this;

      this.loadingContent = true;
      axios.get('/fetch-space-info-' + this.$route.params.spaceId).then(function (response) {
        if (response.status == 200) {
          _this.spaceData = response.data.space;
          _this.loadingContent = false;
        }
      })["catch"](function (error) {
        _this.$root.chatComponent.showAlert('Oops!', 'Something went wrong, please try again', 'error');

        _this.loadingContent = false;
      });
    },
    imageStyleSpace: function imageStyleSpace(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:cover;border:5px solid #3C87CD; cursor:pointer;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/sample_new.jpg);';
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
      _c(
        "div",
        {
          staticClass: "text-center mb-2 mt-md-4 mt-0 d-flex",
          staticStyle: { "align-items": "center", "justify-content": "center" }
        },
        [_c("div", { style: _vm.imageStyleSpace(140, [], "channel") })]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "mb-2",
          staticStyle: { "font-size": "13px", "font-family": "MediumFont" }
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
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "mb-2",
          staticStyle: { "font-size": "13px", "font-family": "MediumFont" }
        },
        [_vm._v("Amount")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-row" },
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
          ),
          _vm._v(" "),
          _c("v-text-field", {
            staticStyle: { "font-size": "13px", width: "75%" },
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
        ],
        1
      ),
      _vm._v(" "),
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
                  "height:100px; border:1px solid #c5c5c5; border-radius:7px;"
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
                        attrs: { src: "/imgs/support.png", height: "40" }
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
                  "height:100px; border:1px solid #c5c5c5; border-radius:7px;"
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
                        attrs: { src: "/imgs/subscribe.png", height: "40" }
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
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 text-center py-2 mt-2" },
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
              attrs: { small: "", color: "#3C87CD" }
            },
            [_vm._v("Support")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-2 mt-1" }, [
      _c("h6", [_vm._v("DSC Landmark")]),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
        [
          _vm._v(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure ipsam dolores explicabo earum expedita reiciendis eos? Incidunt qui, amet minus facilis distincti!"
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-2 " }, [
      _c("h6", { staticStyle: { "font-siz": "15px" } }, [_vm._v("Support Us")])
    ])
  }
]
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