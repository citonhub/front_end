(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EditProfile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$root.showMobileHub = false;
  },
  methods: {
    editProfile: function editProfile() {
      axios.post('/update_profile');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "row",
      staticStyle: { "font-family": "BodyFont", background: "transparent" }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left",
          staticStyle: {
            height: "auto !important",
            "font-family": "BodyFont",
            background: "transparent !important"
          }
        },
        [
          _c("v-app", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 py-2 my-0 px-2" },
              [
                _c("div", [
                  _c("span", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v("Profile Image")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      {
                        staticClass: "col-12 d-flex",
                        staticStyle: {
                          "align-items": "center",
                          "justify-content": "center"
                        }
                      },
                      [
                        _c(
                          "v-sheet",
                          {
                            staticClass: "py-0 px-0 sheetbackImg mx-auto",
                            style:
                              "background-image:url(" +
                              this.$root.croppedImage +
                              ");border-radius:50%;cursor:pointer;background-size:contain;",
                            attrs: {
                              elevation: "0",
                              height: "120",
                              width: "120",
                              color: "whitesmoke"
                            }
                          },
                          [
                            _c("input", {
                              ref: "settingsimage",
                              staticStyle: {
                                opacity: "0",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                position: "absolute",
                                "z-index": "10"
                              },
                              attrs: {
                                type: "file",
                                id: "settingsimage",
                                accept: "image/x-png,image/jpeg,image/jpg"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-sheet",
                              {
                                staticClass: "py-auto px-auto d-flex",
                                staticStyle: { "border-radius": "50%" },
                                attrs: {
                                  elevation: "0",
                                  height: "100%",
                                  width: "100%",
                                  color: "rgba(15, 33, 36, 0.3)"
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { staticClass: "mx-auto white-text" },
                                  [_vm._v("mdi-camera-plus")]
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
                  ],
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
                _c("v-text-field", {
                  directives: [{ name: "m", rawName: "v-m" }],
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    dense: "",
                    placeholder: "name",
                    outlined: "",
                    color: "#3C87CD",
                    label: "Name"
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
                _c("v-textarea", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    dense: "",
                    placeholder: "your bio",
                    outlined: "",
                    color: "#3C87CD",
                    label: "Bio"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: " text-center col-12 py-1 mt-4 my-0 px-2" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "font-family": "MediumFont",
                      "font-weight": "bolder",
                      color: "white"
                    },
                    attrs: { medium: "", rounded: "", color: "#3C87CD" }
                  },
                  [_vm._v("\n           Save\n           ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/EditProfile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Profile/EditProfile.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=template&id=2ab4661e& */ "./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&");
/* harmony import */ var _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/EditProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=template&id=2ab4661e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);