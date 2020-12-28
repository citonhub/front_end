(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      usernameValue: '',
      password: '',
      loading: false,
      Alert: false,
      alertMsg: '',
      errorState: false,
      formstate: false,
      passwordRule: [function (v) {
        return !!v || 'password is required';
      }, function (v) {
        return v.length >= 8 || 'Password must be more than 8 characters';
      }],
      UsernameRule: [function (v) {
        return !!v || 'Username is required';
      }, function (v) {
        return v.length < 16 || 'Username must be less than 16 characters';
      }]
    };
  },
  mounted: function mounted() {
    this.$root.showTabs = false;
    this.$root.itIsHomePage = true;
    this.$root.showHeader = false;
    this.checkIfLogin();
  },
  methods: {
    showRegister: function showRegister() {
      this.$router.push({
        path: '/register'
      });
    },
    showForgot: function showForgot() {
      this.$router.push({
        path: '/forgot-password'
      });
    },
    checkIfLogin: function checkIfLogin() {
      // check if user is logged in , if yes redirect
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
    loginuser: function loginuser() {
      var _this2 = this;

      // this log in the user, save the user details and token on the browser. 
      // it is manage using VueX (vue state management system)
      this.errorState = false;

      if (this.$refs.loginform.validate()) {
        this.loading = true;
        this.$root.userPassword = this.password;
        this.$root.userEmail = this.usernameValue;
        this.$root.LocalStore('user_temp_email', [this.usernameValue, this.password]);
        this.$store.dispatch('login', {
          username: this.usernameValue,
          password: this.password
        }).then(function () {
          var userInfo = localStorage.getItem('user');

          if (userInfo) {
            var userData = JSON.parse(userInfo);
            _this2.$root.username = userData.user.username;
            _this2.$root.user_temp_id = userData.user.id;
            _this2.$root.returnedToken = userData.token;
          }

          _this2.$root.checkauthroot = 'auth';

          if (_this2.$root.frompage == 'space') {
            _this2.$root.checkUserDevice();
          }

          _this2.$root.fetchUserDetails();

          _this2.$root.setEcho();

          var storedTracker = _this2.$root.getLocalStore('route_tracker');

          storedTracker.then(function (result) {
            _this2.$root.connectToChannel();

            if (result != null) {
              var finalResult = JSON.parse(result);

              _this2.$router.push({
                path: finalResult[0]
              });

              _this2.$root.itIsHomePage = false;
            } else {
              _this2.checkIfLogin();

              _this2.$root.itIsHomePage = false;
            }
          });
        })["catch"](function (err) {
          _this2.showAlert(5000, '😬 ' + 'Unable to login, please check your login details');

          _this2.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.morebackground4{\n     position: absolute;\n     width:100%; \n     top: 0;\n     left: 0;\n     height:100%; \n     align-items: center;\n     justify-content: center;\n     background:#ffffff;\n     z-index:100000;\n}\n.login{\n     color: #1e4248;\n     font-size:13px;\n}\n.forgot{\n     cursor: pointer;\n     text-decoration: underline;\n     color: #4494a2;\n     font-size:12px;\n}\n.baseStyle{\n background: rgb(174,221,228) !important;\nbackground: linear-gradient(90deg, rgba(174,221,228,1) 3%, rgba(255,255,255,1) 88%) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
  \*************************************************************************************************************************************************************************************************************/
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
                _vm._v(_vm._s(_vm.$t("general.login_to")))
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
                  _c("div", { staticClass: "col-2 px-1" }),
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
                      _c("h5", { staticStyle: { color: "#26535a" } }, [
                        _vm._v(
                          "\n                 " +
                            _vm._s(_vm.$t("general.sign_in")) +
                            "\n             "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2 text-center" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 text-center py-1" },
                    [
                      _c(
                        "v-form",
                        {
                          ref: "loginform",
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
                                staticStyle: { "font-size": "12px" },
                                attrs: {
                                  placeholder: "JsRoland",
                                  label: _vm.$t("general.email_username"),
                                  dense: "",
                                  error: _vm.errorState,
                                  color: "#4495a2"
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
                            { staticClass: "col-12 py-2 my-0 px-2" },
                            [
                              _c("v-text-field", {
                                staticStyle: { "font-size": "12px" },
                                attrs: {
                                  placeholder: "Javascript",
                                  label: _vm.$t("general.password"),
                                  dense: "",
                                  error: _vm.errorState,
                                  counter: "20",
                                  rules: _vm.passwordRule,
                                  type: "password",
                                  color: "#4495a2"
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
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
                                    "font-size": "11px",
                                    "font-weight": "bolder",
                                    color: "white",
                                    "font-family": "Headertext"
                                  },
                                  attrs: {
                                    rounded: "",
                                    small: "",
                                    type: "submit",
                                    color: "#3E8893",
                                    loading: _vm.loading
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.loginuser($event)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("general.login")))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-12 px-0 py-0 pt-2 d-flex",
                              staticStyle: {
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            [
                              _c("div", { staticClass: "row py-0 my-0" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-6 text-center py-0 my-0",
                                    on: { click: _vm.showRegister }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "forgot",
                                        staticStyle: { cursor: "pointer" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                 " +
                                            _vm._s(
                                              _vm.$t(
                                                "general.create_an_account"
                                              )
                                            ) +
                                            "\n               "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-6 text-center py-0 my-0"
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "forgot",
                                        staticStyle: { cursor: "pointer" },
                                        on: { click: _vm.showForgot }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              _vm.$t("general.forgot_password")
                                            ) +
                                            "\n             \n             "
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
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

/***/ "./resources/js/components/auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/auth/Login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4221c3ad& */ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4221c3ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Login.vue?vue&type=template&id=4221c3ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4221c3ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);