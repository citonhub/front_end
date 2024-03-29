(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddSubChannel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddSubChannel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AddSubChannel.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imagepath: '',
      Alert: false,
      loading: false,
      alertMsg: '',
      wordLimit: 200,
      formstate: false,
      requiredRule: [function (v) {
        return !!v || 'Oh!, you miss this.';
      }],
      subType: 'Public',
      subSpaceType: ['Public', 'Private'],
      spaceName: '',
      Rule: [function (v) {
        return !!v || 'Oh!, you miss this.';
      }, function (v) {
        return v.length < 80 || 'Name must be less than 80 characters';
      }],
      DescriptionRule: [function (v) {
        return !!v || 'Oh!, you miss this.';
      }, function (v) {
        return v.length < 300 || 'Description must be less than 300 characters';
      }],
      wordCount: 0,
      mycontent: '',
      editFeild: false,
      progressvalue: 0,
      contentInWord: ''
    };
  },
  methods: {
    goBack: function goBack() {
      var _this = this;

      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      setTimeout(function () {
        _this.$root.chatComponent.innerSideBarContent = 'sub_channels';
      }, 500);
    },
    createSubSpace: function createSubSpace() {
      var _this2 = this;

      if (this.$refs.subspace.validate()) {
        this.loading = true;
        axios.post('/create-sub-space', {
          name: this.spaceName,
          general_spaceId: this.$root.selectedSpace.general_spaceId,
          type: this.subType,
          description: this.contentInWord
        }).then(function (response) {
          if (response.status == 200) {
            _this2.loading = false;

            var storedSubChat = _this2.$root.getLocalStore('sub_channels_' + _this2.$root.selectedSpace.general_spaceId + _this2.$root.username);

            storedSubChat.then(function (result) {
              if (result != null) {
                var finalResult = JSON.parse(result);
                finalResult.sub_channels.unshift(response.data.subspace);

                _this2.$root.LocalStore('sub_channels_' + _this2.$root.selectedSpace.general_spaceId + _this2.$root.username, finalResult);

                _this2.goBack();
              }
            });
          }
        })["catch"](function (error) {
          _this2.$root.chatComponent.showAlert('Oops!', 'An error occured, please try again', 'error');

          _this2.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true& ***!
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
  return _c("div", { staticStyle: { background: "transparent" } }, [
    _c("div", { staticClass: "col-12 py-1 my-0 " }, [
      _c(
        "div",
        { staticClass: "row" },
        [
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
            "v-app",
            {
              staticClass: "col-12 py-1 my-0",
              staticStyle: {
                background: "transparent",
                "font-family": "BodyFont"
              }
            },
            [
              _c(
                "v-form",
                {
                  ref: "subspace",
                  staticClass: "row my-2 py-2 px-2 ",
                  staticStyle: { "font-family": "BodyFont" },
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
                          placeholder: "e.g fun",
                          label: _vm.$t("general.Name"),
                          rules: _vm.Rule,
                          counter: "80",
                          dense: "",
                          color: "#3C87CD"
                        },
                        model: {
                          value: _vm.spaceName,
                          callback: function($$v) {
                            _vm.spaceName = $$v
                          },
                          expression: "spaceName"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 " }, [
                    _c("span", { staticStyle: { "font-size": "14px" } }, [
                      _vm._v("Choose type")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-12 py-0 my-0 px-2 text-left" },
                    [
                      _c(
                        "v-chip",
                        {
                          staticClass: "d-inline-block mr-1",
                          style:
                            _vm.subType != "Public"
                              ? "font-size:13px;cursor:pointer;"
                              : "font-size:13px;cursor:pointer;color:white;",
                          attrs: {
                            outlined: _vm.subType != "Public",
                            color: "#3C87CD"
                          },
                          on: {
                            click: function($event) {
                              _vm.subType = "Public"
                            }
                          }
                        },
                        [_vm._v("Public")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-chip",
                        {
                          staticClass: "d-inline-block mr-1",
                          style:
                            _vm.subType != "Private"
                              ? "font-size:13px;cursor:pointer;"
                              : "font-size:13px;cursor:pointer;color:white;",
                          attrs: {
                            outlined: _vm.subType != "Private",
                            color: "#3C87CD"
                          },
                          on: {
                            click: function($event) {
                              _vm.subType = "Private"
                            }
                          }
                        },
                        [_vm._v("Private")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "span",
                      { staticStyle: { "font-size": "12px", color: "gray" } },
                      [
                        _vm._v(
                          "Public is for everyone and private for those you invite"
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 py-2 my-0 mt-3 px-2" },
                    [
                      _c("v-textarea", {
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          label: _vm.$t("general.description"),
                          dense: "",
                          placeholder: "what is this sub-channel for?",
                          rules: _vm.DescriptionRule,
                          counter: "300",
                          color: "#3C87CD"
                        },
                        model: {
                          value: _vm.contentInWord,
                          callback: function($$v) {
                            _vm.contentInWord = $$v
                          },
                          expression: "contentInWord"
                        }
                      })
                    ],
                    1
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
                            "font-size": "11px",
                            "font-weight": "bolder",
                            color: "white",
                            "font-family": "MediumFont",
                            "text-transform": "none"
                          },
                          attrs: {
                            rounded: "",
                            small: "",
                            loading: _vm.loading,
                            type: "submit",
                            color: "#3C87CD"
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.createSubSpace($event)
                            }
                          }
                        },
                        [_vm._v("Add")]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
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
        [_vm._v("Add a sub-channel")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/AddSubChannel.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/chats/AddSubChannel.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddSubChannel_vue_vue_type_template_id_7e184d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true& */ "./resources/js/components/chats/AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true&");
/* harmony import */ var _AddSubChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddSubChannel.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/AddSubChannel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddSubChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddSubChannel_vue_vue_type_template_id_7e184d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddSubChannel_vue_vue_type_template_id_7e184d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e184d15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/AddSubChannel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/AddSubChannel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/chats/AddSubChannel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSubChannel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddSubChannel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubChannel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/chats/AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubChannel_vue_vue_type_template_id_7e184d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddSubChannel.vue?vue&type=template&id=7e184d15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubChannel_vue_vue_type_template_id_7e184d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSubChannel_vue_vue_type_template_id_7e184d15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);