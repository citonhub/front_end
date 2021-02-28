(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CreateChannel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CreateChannel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CreateChannel.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      type: '',
      Alert: false,
      that: this,
      alertMsg: '',
      spaceType: ['Channel'],
      selectedType: 'Channel',
      loading: false,
      name: '',
      formstate: false,
      Rule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return v.length < 80 || 'Name must be less than 50 characters';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }],
      limit: '10000',
      limitRule: [function (v) {
        return !!v || 'Limit is required';
      }, function (v) {
        return !isNaN(parseFloat(v)) && v >= 2 && v <= 500 || 'Members Limit has to be between 2 and 5000';
      }]
    };
  },
  components: {},
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
  },
  methods: {
    close: function close() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatbarContent = 'chat_list';
    },
    showAlert: function showAlert(duration, text) {
      this.Alert = true;
      this.alertMsg = text;

      var _this = this;

      setTimeout(function () {
        _this.Alert = false;
      }, duration);
    },
    createSpace: function createSpace() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post('/create-space', {
          name: this.name,
          limit: this.limit,
          type: this.selectedType
        }).then(function (response) {
          if (response.status == 200) {
            var storedChat = _this2.$root.getLocalStore('user_chat_list' + _this2.$root.username);

            storedChat.then(function (result) {
              if (result != null) {
                var finalResult = JSON.parse(result);
                finalResult.channels.unshift(response.data.space);

                _this2.$root.LocalStore('user_chat_list' + _this2.$root.username, finalResult, false, 'new_channel', response.data.space);
              }
            });
          }
        })["catch"](function (error) {
          _this2.$root.chatComponent.showAlert('Oops', 'Something went wrong,please try again', 'error');

          _this2.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true& ***!
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
    { staticStyle: { background: "transparent", "overflow-y": "hidden" } },
    [
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
                { staticClass: " mr-1 col-2 py-0 px-1" },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.close } },
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
              staticStyle: { "font-family": "BodyFont" }
            },
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  staticClass: "row my-2 mt-0 py-2 px-2 ",
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
                    "v-app",
                    {
                      staticClass:
                        "col-lg-12 col-md-6 offset-md-3 offset-lg-0 py-2 my-0 px-1",
                      staticStyle: { height: "76px", width: "100%" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "mb-2",
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Name")]
                      ),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          placeholder: "Dev community",
                          dense: "",
                          outlined: "",
                          rules: _vm.Rule,
                          counter: "80",
                          color: "#3C87CD"
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-lg-12 col-md-6 offset-md-3 offset-lg-0 py-2 my-0 px-1 "
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Set billing option")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 px-1 py-1 d-flex flex-row" },
                        [
                          _c(
                            "div",
                            { staticClass: "  col-4  px-1 my-0 py-2 " },
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
                                      _c(
                                        "div",
                                        { staticClass: "text-center" },
                                        [
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
                                              [_vm._v("Get Support")]
                                            )
                                          ])
                                        ]
                                      )
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
                                        {
                                          staticStyle: { "font-size": "18px" }
                                        },
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
                                      _c(
                                        "div",
                                        { staticClass: "text-center" },
                                        [
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
                                        ]
                                      )
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
                                        {
                                          staticStyle: { "font-size": "18px" }
                                        },
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
                                      _c(
                                        "div",
                                        { staticClass: "text-center" },
                                        [
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
                                        ]
                                      )
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
                                        {
                                          staticStyle: { "font-size": "18px" }
                                        },
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
                        ]
                      )
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
                            color: "white",
                            "font-family": "MediumFont"
                          },
                          attrs: {
                            type: "submit",
                            rounded: "",
                            small: "",
                            color: "#3C87CD",
                            loading: _vm.loading
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.createSpace($event)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("general.create")))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-5 py-3" })
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ]
  )
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
        [_vm._v("Create a channel")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/CreateChannel.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/chats/CreateChannel.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateChannel_vue_vue_type_template_id_51f485d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true& */ "./resources/js/components/chats/CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true&");
/* harmony import */ var _CreateChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateChannel.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/CreateChannel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateChannel_vue_vue_type_template_id_51f485d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateChannel_vue_vue_type_template_id_51f485d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51f485d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/CreateChannel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/CreateChannel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/chats/CreateChannel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateChannel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CreateChannel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/chats/CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateChannel_vue_vue_type_template_id_51f485d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CreateChannel.vue?vue&type=template&id=51f485d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateChannel_vue_vue_type_template_id_51f485d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateChannel_vue_vue_type_template_id_51f485d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);