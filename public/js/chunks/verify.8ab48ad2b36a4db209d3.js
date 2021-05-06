(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Verify.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstraps_globalPackage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bootstraps/globalPackage */ "./resources/js/bootstraps/globalPackage.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      formstate: false,
      timer: 30,
      showResend: false
    };
  },
  mounted: function mounted() {
    this.setEmail();
  },
  methods: {
    setEmail: function setEmail() {
      var _this = this;

      var storedEmail = this.$root.getLocalStore('user_temp_email');

      if (this.$root.userEmail == '') {
        this.$root.fromVerifyPage = true;
        this.$router.push({
          path: '/login'
        });
        return;
        storedEmail.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);

            if (_this.$root.userEmail == '') {
              _this.$root.userEmail = finalResult[0];
            }

            _this.$root.userPassword = finalResult[1];
          }
        });
      }

      var interval = null;
      interval = setInterval(function () {
        if (_this.timer == 0) {
          _this.showResend = true;
          clearInterval(interval);
        } else {
          _this.timer--;
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
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.info({
          title: title,
          timeout: 5000,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.success({
          title: title,
          message: message,
          timeout: 5000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.warning({
          title: title,
          timeout: 5000,
          message: message,
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
          timeout: 5000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    },
    resendMail: function resendMail() {
      var _this2 = this;

      this.loadingResend = true;
      axios.post('/resend-email', {
        email: this.$root.userEmail
      }).then(function (response) {
        if (response.status == 200) {
          _this2.loadingResend = false;
          _this2.showResend = false;
          _this2.timer = 30;

          _this2.setEmail();

          _this2.showAlert('Sent!', 'Mail has been re-sent', 'error');
        }
      })["catch"](function (error) {
        _this2.showAlert('Oops!', 'Something went wrong, please try again.', 'error');

        _this2.loading = false;
      });
    },
    verify: function verify() {
      var _this3 = this;

      this.loading = true;
      axios.post('/verify-user-email', {
        email: this.$root.userEmail,
        code: this.verifyCode
      }).then(function (response) {
        if (response.status == 200) {
          if (response.data.status == 'verified') {
            var storedTracker = _this3.$root.getLocalStore('is_forget_password');

            storedTracker.then(function (result) {
              if (result != null) {
                var finalResult = JSON.parse(result);

                if (finalResult[0]) {
                  _this3.$root.LocalStore('is_forget_password', [false]);

                  _this3.$router.push({
                    path: '/reset-password'
                  });
                } else {
                  _this3.$router.push({
                    path: '/set-username'
                  });
                }
              }
            });
          } else {
            _this3.loading = false;

            _this3.showAlert('Oops!', 'Wrong code, give it another shot.', 'error');
          }
        } else {
          console.log(response.status);
        }
      })["catch"](function (error) {
        _this3.showAlert('Oops!', 'Something went wrong, please try again.', 'error');

        _this3.loading = false;
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
exports.push([module.i, "\n.morebackground4{\r\n     position: absolute;\r\n     width:100%; \r\n     top: 0;\r\n     left: 0;\r\n     height:100%; \r\n     align-items: center;\r\n     justify-content: center;\r\n     background:#ffffff;\r\n     z-index:100000;\n}\n.login{\r\n     color: #1e4248;\r\n     font-size:13px;\n}\n.forgot1{\r\n     cursor: pointer;\r\n    \r\n     color: #4494a2;\r\n     font-size:12px;\n}\r\n\r\n", ""]);

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
    { staticStyle: { position: "absolute", width: "100%", height: "100%" } },
    [
      _c("headerTab"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "d-none col-lg-5 text-center  d-lg-flex",
          staticStyle: {
            "z-index": "99999999",
            "align-items": "center",
            "justify-content": "center",
            position: "fixed",
            height: "70%",
            top: "10%"
          }
        },
        [
          _c("div", { staticClass: "px-5 col-8 offset-2" }, [
            _c(
              "blockquote",
              {
                staticClass: "fill",
                staticStyle: {
                  "font-family": "BodyFont",
                  "font-size": "25px",
                  color: "black"
                }
              },
              [
                _vm._v(
                  "The only impossible journey is the one you never begin."
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "text-center",
                staticStyle: {
                  "font-family": "HeaderFont",
                  "font-size": "25px"
                }
              },
              [_vm._v("\r\n   - Anthony Robbins\r\n ")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: " col-lg-7 offset-lg-5 px-5  d-none d-lg-flex ",
          staticStyle: {
            "z-index": "99999999",
            "align-items": "center",
            "justify-content": "center",
            position: "fixed",
            height: "70%",
            top: "10%"
          }
        },
        [
          _c(
            "div",
            { staticClass: "col-7 " },
            [
              _c(
                "v-card",
                {
                  staticClass: "py-1 pt-2 px-2 row",
                  staticStyle: { "border-radius": "10px" }
                },
                [
                  _c("div", { staticClass: "col-2 px-1" }, [_c("span")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-8 px-0 d-flex",
                      staticStyle: {
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _c(
                        "h4",
                        { staticStyle: { "font-family": "HeaderFont" } },
                        [
                          _vm._v(
                            "\r\n                Verify Your Email\r\n             "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2 text-center" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 py-2 text-center " }, [
                    _c(
                      "span",
                      {
                        staticClass: " px-4",
                        staticStyle: {
                          "font-size": "14px",
                          "font-family": "BodyFont"
                        }
                      },
                      [
                        _c("span", [
                          _vm._v(
                            "A verification code has been sent to your email. kindly check your inbox"
                          )
                        ]),
                        _vm._v(","),
                        _c("span", { staticStyle: { color: "#3C87CD" } }, [
                          _vm._v(" " + _vm._s(this.$root.userEmail))
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-12 text-center py-1",
                      staticStyle: { "font-family": "BodyFont" }
                    },
                    [
                      _c(
                        "v-form",
                        {
                          ref: "verify",
                          staticClass: "row my-2 py-2 px-2 ",
                          model: {
                            value: _vm.formstate,
                            callback: function($$v) {
                              _vm.formstate = $$v
                            },
                            expression: "formstate"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "col-8 offset-2 py-2 my-0 px-2" },
                            [
                              _c("v-text-field", {
                                staticStyle: { "font-size": "13px" },
                                attrs: {
                                  placeholder:
                                    _vm.$t("general.enter_code") + "...",
                                  label: _vm.$t("general.verification_code"),
                                  outlined: "",
                                  counter: "6",
                                  type: "tel",
                                  color: "#3C87CD"
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
                            {
                              staticClass: "col-12 py-1 my-0 px-2 text-center"
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-weight": "bolder",
                                    color: "white",
                                    "font-family": "BodyFont"
                                  },
                                  attrs: {
                                    loading: _vm.loading,
                                    type: "submit",
                                    medium: "",
                                    color: "#3C87CD"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.verify($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                 Verify\r\n                  "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-12 py-1 my-0 mt-2 px-2 text-center"
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "13px",
                                    "font-family": "BodyFont",
                                    color: "#3C87CD"
                                  }
                                },
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
                                        "font-size": "13px",
                                        "font-family": "BodyFont",
                                        color: "#ffffff",
                                        "text-transform": "lowercase"
                                      },
                                      attrs: {
                                        color: "#3C87CD",
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
                                        _vm._v(
                                          "  " + _vm._s(_vm.timer) + " sec"
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "d-lg-none col-md-8 offset-md-2 px-2 ",
          staticStyle: {
            "z-index": "9999999",
            "overflow-y": "auto",
            left: "0",
            position: "fixed",
            height: "100%",
            top: "0%"
          }
        },
        [
          _c("div", { staticClass: "col-12 py-1 px-1" }, [
            _c("a", { attrs: { href: "/" } }, [
              _c("img", {
                staticClass: "d-lg-none d-block",
                attrs: {
                  alt: "citonhub logo",
                  src: "/imgs/logo.png",
                  height: "35px"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "py-1 px-2 col-12",
              staticStyle: {
                background: "transparent",
                "align-items": "center",
                "justify-content": "center"
              },
              attrs: { flat: "" }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-12 px-0 py-1 mt-4 my-2 d-flex",
                    staticStyle: {
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c("h5", { staticStyle: { "font-family": "HeaderFont" } }, [
                      _vm._v(
                        "\r\n                 Verify Your Email\r\n             "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 py-2 text-center " }, [
                  _c(
                    "span",
                    {
                      staticClass: " px-4",
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "BodyFont"
                      }
                    },
                    [
                      _c("span", [
                        _vm._v(
                          "A verification code has been sent to your email,  kindly check your inbox"
                        )
                      ]),
                      _vm._v(","),
                      _c("span", { staticStyle: { color: "#3C87CD" } }, [
                        _vm._v(" " + _vm._s(this.$root.userEmail))
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-12 text-center py-1",
                    staticStyle: { "font-family": "BodyFont" }
                  },
                  [
                    _c(
                      "v-form",
                      {
                        ref: "verify",
                        staticClass: "row my-1 py-2 px-2 ",
                        model: {
                          value: _vm.formstate,
                          callback: function($$v) {
                            _vm.formstate = $$v
                          },
                          expression: "formstate"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-12 py-2 my-0 px-2" },
                          [
                            _c("v-text-field", {
                              staticStyle: { "font-size": "13px" },
                              attrs: {
                                placeholder:
                                  _vm.$t("general.enter_code") + "...",
                                label: _vm.$t("general.verification_code"),
                                outlined: "",
                                counter: "6",
                                type: "tel",
                                color: "#3C87CD"
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
                                  "font-size": "13px",
                                  "font-weight": "bolder",
                                  color: "white",
                                  "font-family": "BodyFont"
                                },
                                attrs: {
                                  loading: _vm.loading,
                                  type: "submit",
                                  small: "",
                                  color: "#3C87CD"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.verify($event)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                 Verify\r\n                  "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 py-1 my-0 mt-2 px-2 text-center"
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "12px",
                                  "font-family": "BodyFont",
                                  color: "#3C87CD"
                                }
                              },
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
                                      "font-size": "13px",
                                      "font-family": "BodyFont",
                                      color: "#ffffff",
                                      "text-transform": "lowercase"
                                    },
                                    attrs: {
                                      color: "#3C87CD",
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
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-12 text-center mt-3 d-flex",
                            staticStyle: {
                              "z-index": "999999999",
                              "align-items": "center",
                              "justify-content": "center"
                            }
                          },
                          [
                            _c("div", { staticClass: "px-5 mt-5" }, [
                              _c(
                                "blockquote",
                                {
                                  staticClass: "fill",
                                  staticStyle: {
                                    "font-family": "BodyFont",
                                    "font-size": "16px",
                                    color: "black"
                                  }
                                },
                                [
                                  _vm._v(
                                    "The only impossible journey is the one you never begin."
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "text-center",
                                  staticStyle: {
                                    "font-family": "HeaderFont",
                                    "font-size": "16px"
                                  }
                                },
                                [_vm._v("\r\n  - Anthony Robbins\r\n ")]
                              )
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("bottom")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/bootstraps/globalPackage.js":
/*!**************************************************!*\
  !*** ./resources/js/bootstraps/globalPackage.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-izitoast */ "./node_modules/vue-izitoast/dist/vue-izitoast.js");
/* harmony import */ var vue_izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
// alert


Vue.use(vue_izitoast__WEBPACK_IMPORTED_MODULE_0___default.a);

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