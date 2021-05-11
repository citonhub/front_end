(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Invitation"],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&v-else=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&v-else=true& ***!
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
  return _c(
    "v-app",
    {
      staticClass: "col-12 px-0 py-1",
      staticStyle: {
        background: "transparent",
        "font-family": "BodyFont",
        height: "200px"
      }
    },
    [
      _vm.purpose == "mail"
        ? _c(
            "v-form",
            {
              ref: "emailform",
              staticClass: "col-12 py-0 my-0 text-center",
              model: {
                value: _vm.Emailformstate,
                callback: function($$v) {
                  _vm.Emailformstate = $$v
                },
                expression: "Emailformstate"
              }
            },
            [
              _c("div", { staticClass: "row py-0 my-0" }, [
                _c(
                  "div",
                  { staticClass: "col-12 px-1 py-0 pb-2 text-left" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.selectedExtraOptions = false
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
                _c(
                  "div",
                  { staticClass: "col-12 py-2 my-0 px-2" },
                  [
                    _c("v-combobox", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        items: _vm.items,
                        label: "E-mails",
                        rules: _vm.emailRule,
                        multiple: "",
                        placeholder: "Type e-mails",
                        dense: "",
                        color: "#3C87CD",
                        chips: ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "selection",
                            fn: function(data) {
                              return [
                                _c(
                                  "v-chip",
                                  _vm._b(
                                    {
                                      key: JSON.stringify(data.item),
                                      staticClass: "my-1",
                                      staticStyle: {
                                        "font-size": "12px",
                                        "font-family": "BodyFont"
                                      },
                                      attrs: {
                                        "input-value": data.selected,
                                        color: "#3C87CD",
                                        dense: "",
                                        outlined: "",
                                        disabled: data.disabled
                                      }
                                    },
                                    "v-chip",
                                    data.attrs,
                                    false
                                  ),
                                  [
                                    _vm._v(
                                      "\n       \n        " +
                                        _vm._s(data.item) +
                                        "\n      "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3626390017
                      ),
                      model: {
                        value: _vm.mails,
                        callback: function($$v) {
                          _vm.mails = $$v
                        },
                        expression: "mails"
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
                          color: "white",
                          "font-family": "MediumFont"
                        },
                        attrs: {
                          rounded: "",
                          loading: _vm.loadingEmail,
                          small: "",
                          color: "#3C87CD"
                        },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.sendInviteMail($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("general.invite")) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.purpose == "connection"
        ? _c(
            "v-form",
            {
              ref: "connectionform",
              staticClass: "col-12 py-0 my-0 text-center",
              model: {
                value: _vm.connectionformstate,
                callback: function($$v) {
                  _vm.connectionformstate = $$v
                },
                expression: "connectionformstate"
              }
            },
            [
              _c("div", { staticClass: "row py-0 my-0" }, [
                _c(
                  "div",
                  { staticClass: "col-12 px-1 py-0 pb-2 text-left" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.selectedExtraOptions = false
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
                _c("div", { staticClass: "col-12 py-2 my-0 px-2" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedConnections,
                          expression: "selectedConnections"
                        }
                      ],
                      staticClass: "browser-default custom-select",
                      staticStyle: { "font-size": "14px !important" },
                      attrs: { placeholder: _vm.$t("general.select") + "..." },
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
                          _vm.selectedConnections = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(_vm.Connections, function(option, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: option.username } },
                        [_vm._v(_vm._s(option.name))]
                      )
                    }),
                    0
                  )
                ]),
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
                          color: "white",
                          "font-family": "MediumFont"
                        },
                        attrs: {
                          rounded: "",
                          loading: _vm.loadingEmail,
                          small: "",
                          color: "#3C87CD"
                        },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.sendToConnection($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n             " +
                            _vm._s(_vm.$t("general.invite")) +
                            "\n            "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/invitation.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/invitation.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invitation_vue_vue_type_template_id_576b71d8_v_else_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitation.vue?vue&type=template&id=576b71d8&v-else=true& */ "./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&v-else=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _invitation_vue_vue_type_custom_index_0_blockType_input_3Avalue_this_24root_shareLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invitation.vue?vue&type=custom&index=0&blockType=input&%3Avalue=this.%24root.shareLink */ "./resources/js/components/chats/invitation.vue?vue&type=custom&index=0&blockType=input&%3Avalue=this.%24root.shareLink");
/* harmony import */ var _invitation_vue_vue_type_custom_index_0_blockType_input_3Avalue_this_24root_shareLink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_invitation_vue_vue_type_custom_index_0_blockType_input_3Avalue_this_24root_shareLink__WEBPACK_IMPORTED_MODULE_2__);

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _invitation_vue_vue_type_template_id_576b71d8_v_else_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invitation_vue_vue_type_template_id_576b71d8_v_else_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _invitation_vue_vue_type_custom_index_0_blockType_input_3Avalue_this_24root_shareLink__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') _invitation_vue_vue_type_custom_index_0_blockType_input_3Avalue_this_24root_shareLink__WEBPACK_IMPORTED_MODULE_2___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/invitation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/invitation.vue?vue&type=custom&index=0&blockType=input&%3Avalue=this.%24root.shareLink":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/chats/invitation.vue?vue&type=custom&index=0&blockType=input&%3Avalue=this.%24root.shareLink ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&v-else=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&v-else=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_template_id_576b71d8_v_else_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./invitation.vue?vue&type=template&id=576b71d8&v-else=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&v-else=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_template_id_576b71d8_v_else_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_template_id_576b71d8_v_else_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);