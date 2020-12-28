(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      verifyCode: '',
      loading: false,
      Alert: false,
      alertMsg: '',
      loadingResend: false,
      timer: 30,
      showResend: false
    };
  },
  mounted: function mounted() {
    this.$root.showTabs = false;
    this.$root.itIsHomePage = true;
    this.$root.showHeader = false;
    this.setEmail();
  },
  methods: {
    setEmail: function setEmail() {
      var _this2 = this;

      var storedEmail = this.$root.getLocalStore('user_temp_email');

      if (this.$root.userEmail == '') {
        storedEmail.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);
            _this2.$root.userEmail = finalResult[0];
          }
        });
      }

      var interval = null;
      interval = setInterval(function () {
        if (_this2.timer == 0) {
          _this2.showResend = true;
          clearInterval(interval);
        } else {
          _this2.timer--;
        }
      }, 1000);
    },
    viewPost: function viewPost() {
      this.$router.push({
        path: '/post'
      });
    },
    library: function library() {
      this.$router.push({
        path: '/library'
      });
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    showAlert: function showAlert(duration, text) {
      this.Alert = true;
      this.alertMsg = text;

      var _this = this;

      setTimeout(function () {
        _this.Alert = false;
      }, duration);
    },
    resendMail: function resendMail() {
      var _this3 = this;

      this.loadingResend = true;
      axios.post('/resend-email', {
        email: this.$root.userEmail
      }).then(function (response) {
        if (response.status == 200) {
          _this3.loadingResend = false;
          _this3.showResend = false;
          _this3.timer = 30;

          _this3.setEmail();

          _this3.showAlert(5000, 'Mail Sent');
        }
      })["catch"](function (error) {
        _this3.showAlert(5000, 'Failed- ' + error);

        _this3.loading = false;
      });
    },
    verify: function verify() {
      var _this4 = this;

      this.loading = true;
      axios.post('/verify-user-email', {
        email: this.$root.userEmail,
        code: this.verifyCode
      }).then(function (response) {
        if (response.status == 200) {
          if (response.data == 'verified') {
            var storedTracker = _this4.$root.getLocalStore('is_forget_password');

            storedTracker.then(function (result) {
              if (result != null) {
                var finalResult = JSON.parse(result);

                if (finalResult[0]) {
                  _this4.$router.push({
                    path: '/reset-password'
                  });
                } else {
                  _this4.$router.push({
                    path: '/set-username'
                  });
                }
              }
            });
          } else {
            _this4.loading = false;

            _this4.showAlert(5000, 'Verification code is incorrect,please try again');
          }
        } else {
          console.log(response.status);
        }
      })["catch"](function (error) {
        _this4.showAlert(5000, 'Failed- ' + error);

        _this4.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.morebackground4{\n     position: absolute;\n     width:100%; \n     top: 0;\n     left: 0;\n     height:100%; \n     align-items: center;\n     justify-content: center;\n     background:#ffffff;\n     z-index:100000;\n}\n.login{\n     color: #1e4248;\n     font-size:13px;\n}\n.forgot1{\n     cursor: pointer;\n    \n     color: #4494a2;\n     font-size:12px;\n}\n.baseStyle{\n background: rgb(174,221,228) !important;\nbackground: linear-gradient(90deg, rgba(174,221,228,1) 3%, rgba(255,255,255,1) 88%) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "v-app",
    {
      staticClass: "baseStyle",
      staticStyle: {
        position: "absolute",
        width: "100%",
        height: "100%",
        "z-index": "999999999999999"
      }
    },
    [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row py-0 my-0 px-md-3 px-lg-3" }, [
          _c("div", { staticClass: "col-4 text-left py-0 my-0" }, [
            _c("img", {
              attrs: { src: "/imgs/CitonHub.png", height: "40", width: "auto" }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-8 text-right py-0 pt-2 my-0" },
            [
              _c(
                "v-btn",
                {
                  staticStyle: {
                    "font-size": "12px",
                    "font-weight": "bolder",
                    "font-family": "Headertext",
                    "z-index": "898566897"
                  },
                  attrs: {
                    rounded: "",
                    to: "/login",
                    medium: "",
                    outlined: "",
                    type: "submit",
                    color: "#3E8893"
                  }
                },
                [_vm._v("Login")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ml-3",
                  staticStyle: {
                    "font-size": "12px",
                    "font-weight": "bolder",
                    color: "white",
                    "font-family": "Headertext",
                    "z-index": "898566897"
                  },
                  attrs: {
                    rounded: "",
                    to: "/register",
                    medium: "",
                    type: "submit",
                    color: "#3E8893"
                  }
                },
                [_vm._v("Sign up")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "text-center d-lg-block d-none fixed-top col-md-8 offset-md-2  col-lg-4 offset-lg-4 py-0 my-0 px-0",
              staticStyle: { top: "10%", "z-index": "1000000" }
            },
            [
              _c("h4", { staticStyle: { color: "#26535a" } }, [
                _vm._v(_vm._s(_vm.$t("general.verify_your_email")))
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-md-6 offset-md-3 col-lg-4 offset-lg-4  text-center py-0 pt-0 d-flex ",
              staticStyle: {
                "z-index": "9999",
                top: "8%",
                height: "80%",
                left: "0",
                position: "fixed",
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              _c(
                "v-card",
                {
                  staticClass: "py-1 px-2 row",
                  staticStyle: { "border-radius": "20px" }
                },
                [
                  _c("div", { staticClass: "col-1 px-1" }, [_c("span")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-10 px-0 d-flex",
                      staticStyle: {
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _c("h5", { staticStyle: { color: "#26535a" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.$t("general.verify_email")) +
                            "\n             "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-1 text-center" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 py-2 text-center " }, [
                    _c(
                      "span",
                      {
                        staticClass: "infoclass px-4",
                        staticStyle: { "font-size": "13px" }
                      },
                      [
                        _vm._v(
                          "\n               " +
                            _vm._s(_vm.$t("general.enter_digit")) +
                            ","
                        ),
                        _c("span", { staticStyle: { color: "#4494a2" } }, [
                          _vm._v(" " + _vm._s(this.$root.userEmail))
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 text-center py-1" },
                    [
                      _c("v-form", { staticClass: "row my-2 py-2 px-2 " }, [
                        _c(
                          "div",
                          { staticClass: "col-8 offset-2 py-2 my-0 px-2" },
                          [
                            _c("v-text-field", {
                              staticStyle: { "font-size": "14px" },
                              attrs: {
                                placeholder:
                                  _vm.$t("general.enter_code") + "...",
                                label: _vm.$t("general.verification_code"),
                                outlined: "",
                                counter: "6",
                                dense: "",
                                type: "tel",
                                color: "#4495a2"
                              },
                              model: {
                                value: _vm.verifyCode,
                                callback: function($$v) {
                                  _vm.verifyCode = $$v
                                },
                                expression: "verifyCode"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 py-1 my-0 px-2 text-center" },
                          [
                            _c(
                              "v-btn",
                              {
                                staticStyle: {
                                  "font-size": "11px",
                                  "font-weight": "bolder",
                                  color: "white",
                                  "font-family": "Headertext"
                                },
                                attrs: {
                                  rounded: "",
                                  small: "",
                                  color: "#3E8893",
                                  loading: _vm.loading
                                },
                                on: { click: _vm.verify }
                              },
                              [_vm._v(_vm._s(_vm.$t("general.next")) + " ")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 py-1 my-0 px-2 text-center" },
                          [
                            _c(
                              "span",
                              { staticClass: "forgot1" },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.$t("general.mail_received")) +
                                    " "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    staticStyle: {
                                      "text-decoration": "underline",
                                      "font-family": "HeaderText",
                                      color: "#ffffff",
                                      "text-transform": "lowercase"
                                    },
                                    attrs: {
                                      color: "#3E8893",
                                      "x-small": "",
                                      disabled: !_vm.showResend,
                                      loading: _vm.loadingResend
                                    },
                                    on: { click: _vm.resendMail }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("general.resend")))]
                                ),
                                _vm._v(" "),
                                _vm.timer > 0
                                  ? _c("span", [
                                      _vm._v("  " + _vm._s(_vm.timer) + " sec")
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("bottom"),
      _vm._v(" "),
      _c("v-fade-transition", [
        _c(
          "div",
          {
            staticClass: "d-flex col-md-8 offset-md-2  col-lg-6 offset-lg-3",
            staticStyle: {
              position: "fixed",
              height: "auto: align-items:center",
              left: "0",
              "justify-content": "center",
              bottom: "15%",
              "z-index": "9999999123453566"
            }
          },
          [
            _c(
              "v-alert",
              {
                staticClass: "py-1 px-2",
                staticStyle: {
                  "font-size": "13px",
                  background: "#ffffff",
                  color: "#3E8893",
                  "border-radius": "20px",
                  border: "2px solid #3E8893"
                },
                attrs: {
                  color: "#3E8893",
                  width: "auto",
                  rounded: "",
                  height: "auto",
                  "elevation-10": ""
                },
                model: {
                  value: _vm.Alert,
                  callback: function($$v) {
                    _vm.Alert = $$v
                  },
                  expression: "Alert"
                }
              },
              [_vm._v("\n     " + _vm._s(_vm.alertMsg) + "\n    ")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/Verify.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/auth/Verify.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verify.vue?vue&type=template&id=2f4f1de5& */ "./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&");
/* harmony import */ var _Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verify.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Verify_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Verify.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Verify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/auth/Verify.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Verify.vue?vue&type=template&id=2f4f1de5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=template&id=2f4f1de5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_template_id_2f4f1de5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);