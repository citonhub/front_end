(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SetUsername"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SetUsername.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstraps_globalPackage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bootstraps/globalPackage */ "./resources/js/bootstraps/globalPackage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      usernameValue: '',
      loading: false,
      Alert: false,
      alertMsg: '',
      formstate: false,
      usernameExist: false,
      UsernameRule: [function (v) {
        return !!v || 'Username is required';
      }, function (v) {
        return v.length < 16 || 'Username must be less than 16 characters';
      }, function (v) {
        return v.split(' ').length <= 1 || 'no one space allowed';
      }]
    };
  },
  mounted: function mounted() {// this.$root.showTabs=false;
    //  this.$root.showHeader = false;
    //  this.setEmail();
    //  this.$root.itIsHomePage = true;
    //  this.checkIfLogin();
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
            _this2.$root.userPassword = finalResult[1];
          }
        });
      }
    },
    checkIfLogin: function checkIfLogin() {
      if (this.$root.checkauthroot == 'auth' && this.$root.frompage == 'space') {
        this.$router.push({
          path: '/space'
        });
      }

      if (this.$root.checkauthroot == 'auth' && this.$root.frompage == 'hub') {
        this.$router.push({
          path: '/hub'
        });
      }

      if (this.$root.checkauthroot == 'auth' && this.$root.frompage == 'profile') {
        this.$router.push({
          path: '/profile'
        });
      }

      if (this.$root.checkauthroot == 'auth' && this.$root.frompage == 'duels') {
        this.$router.push({
          path: '/panel'
        });
      }
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
    showVerifiedAlert: function showVerifiedAlert() {
      this.showAlert(5000, 'Welcome your highness 🤴 👸 , my kingdoom awaits your awesome codes 🥰.');
    },
    setUsername: function setUsername() {
      var _this3 = this;

      this.usernameExist = false;
      this.$refs.username.validate();

      if (this.formstate) {
        this.loading = true;
        axios.post('/check-if-username-exist', {
          email: this.$root.userEmail,
          username: this.usernameValue
        }).then(function (response) {
          if (response.status == 200) {
            if (response.data == 'exist') {
              _this3.loading = false;
              _this3.usernameExist = true;

              _this3.showAlert(5000, 'Username exists. please, change username and try again');
            } else {
              _this3.loginuser();
            }
          } else {
            console.log(response.status);
          }
        })["catch"](function (error) {
          _this3.showAlert(5000, 'Failed- ' + '😬 ' + error);

          _this3.loading = false;
        });
      }
    },
    loginuser: function loginuser() {
      var _this4 = this;

      this.$store.dispatch('login', {
        username: this.usernameValue,
        password: this.$root.userPassword
      }).then(function () {
        var userInfo = localStorage.getItem('user');

        if (userInfo) {
          var userData = JSON.parse(userInfo);
          _this4.$root.username = userData.user.username;
          _this4.$root.user_temp_id = userData.user.id;
          _this4.$root.returnedToken = userData.token;
        }

        _this4.$root.checkauthroot = 'auth';

        _this4.$root.fetchUserDetails();

        _this4.$root.setEcho();

        if (_this4.$root.frompage == 'space') {
          _this4.$root.checkUserDevice();
        }

        var storedTracker = _this4.$root.getLocalStore('route_tracker');

        storedTracker.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);

            _this4.$router.push({
              path: finalResult[0]
            });

            _this4.$root.itIsHomePage = false;
          } else {
            _this4.checkIfLogin();

            _this4.$root.itIsHomePage = false;
          }
        });
      })["catch"](function (err) {
        _this4.showAlert(5000, '😬 ' + 'Unable to login, please check your login details');

        _this4.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.morebackground4{\r\n     position: absolute;\r\n     width:100%; \r\n     top: 0;\r\n     left: 0;\r\n     height:100%; \r\n     align-items: center;\r\n     justify-content: center;\r\n     background:#ffffff;\r\n     z-index:100000;\n}\n.login{\r\n     color: #1e4248;\r\n     font-size:13px;\n}\n.forgot{\r\n     cursor: pointer;\r\n     text-decoration: underline;\r\n     color: #4494a2;\r\n     font-size:12px;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetUsername.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=template&id=5d6fc9c8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SetUsername.vue?vue&type=template&id=5d6fc9c8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                  "Knowing is not enough; we must apply. Wishing is not enough; we must do."
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
              [_vm._v("\r\n   - Rob Siltanen\r\n ")]
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
                        "h5",
                        { staticStyle: { "font-family": "HeaderFont" } },
                        [
                          _vm._v(
                            "\r\n                 Set your username\r\n             "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2 text-center" }),
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
                          ref: "password",
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
                            { staticClass: "col-12 py-2 my-0 px-2" },
                            [
                              _c("v-text-field", {
                                staticStyle: { "font-size": "13px" },
                                attrs: {
                                  label: "Username",
                                  outlined: "",
                                  "persistent-hint": "",
                                  hint: "What do you want us to call you?",
                                  error: _vm.usernameExist,
                                  "prepend-inner-icon": "las la-user",
                                  color: "#3C87CD"
                                },
                                model: {
                                  value: _vm.usernameValue,
                                  callback: function($$v) {
                                    _vm.usernameValue = $$v
                                  },
                                  expression: "usernameValue"
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
                                      return _vm.setUsername($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                 Set\r\n                  "
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
          staticClass: "d-lg-none col-md-8 offset-md-2 px-2  ",
          staticStyle: {
            "z-index": "99999999",
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
              staticClass: "py-1 px-2 col-12 mt-5",
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
                    staticClass: "col-12 px-0 py-0 mt-4 my-0 d-flex",
                    staticStyle: {
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c("h5", { staticStyle: { "font-family": "HeaderFont" } }, [
                      _vm._v(
                        "\r\n                 Set your username\r\n             "
                      )
                    ])
                  ]
                ),
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
                        ref: "password",
                        staticClass: "row my-1 py-1 px-2 ",
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
                          { staticClass: "col-12 py-1 my-0 px-2" },
                          [
                            _c("v-text-field", {
                              staticStyle: { "font-size": "12px" },
                              attrs: {
                                label: "Username",
                                outlined: "",
                                "persistent-hint": "",
                                "prepend-inner-icon": "las la-user",
                                hint: "What do you want us to call you?",
                                error: _vm.usernameExist,
                                color: "#3C87CD"
                              },
                              model: {
                                value: _vm.usernameValue,
                                callback: function($$v) {
                                  _vm.usernameValue = $$v
                                },
                                expression: "usernameValue"
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
                                  "font-size": "12px",
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
                                    return _vm.checkemail($event)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                 Set\r\n                  "
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
                            staticClass: "col-12 text-center mt-3 d-flex",
                            staticStyle: {
                              "z-index": "999999999",
                              "align-items": "center",
                              "justify-content": "center"
                            }
                          },
                          [
                            _c("div", { staticClass: "px-5" }, [
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
                                    "Knowing is not enough; we must apply. Wishing is not enough; we must do."
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
                                [_vm._v("\r\n   - Rob Siltanen\r\n ")]
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
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-izitoast'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'izitoast/dist/css/iziToast.min.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// alert


Vue.use(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-izitoast'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "./resources/js/components/auth/SetUsername.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/auth/SetUsername.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetUsername_vue_vue_type_template_id_5d6fc9c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetUsername.vue?vue&type=template&id=5d6fc9c8& */ "./resources/js/components/auth/SetUsername.vue?vue&type=template&id=5d6fc9c8&");
/* harmony import */ var _SetUsername_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetUsername.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/SetUsername.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SetUsername_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetUsername.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SetUsername_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetUsername_vue_vue_type_template_id_5d6fc9c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SetUsername_vue_vue_type_template_id_5d6fc9c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/SetUsername.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/SetUsername.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/SetUsername.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetUsername.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetUsername.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/auth/SetUsername.vue?vue&type=template&id=5d6fc9c8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/auth/SetUsername.vue?vue&type=template&id=5d6fc9c8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_template_id_5d6fc9c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SetUsername.vue?vue&type=template&id=5d6fc9c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SetUsername.vue?vue&type=template&id=5d6fc9c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_template_id_5d6fc9c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetUsername_vue_vue_type_template_id_5d6fc9c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);