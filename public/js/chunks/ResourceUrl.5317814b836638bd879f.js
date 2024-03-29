(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceUrl"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      searchQuery: '',
      urlRule: [function (v) {
        return _this.isURL(v) || "Link should be valid and secure";
      }],
      formstate: false,
      linkInfo: []
    };
  },
  components: {},
  mounted: function mounted() {
    this.$root.showAddButton = false;
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    isURL: function isURL(str) {
      if (str.length == 0) {
        return false;
      }

      var url;

      try {
        url = new URL(str);
      } catch (_) {
        return false;
      }

      return url.protocol === "https:";
    },
    processURL: function processURL(link) {
      var FullString = link;
      var firstProcess = FullString.substring(8);
      var finalProcess = firstProcess.slice(0, -1);
      return finalProcess;
    },
    getLinkInfo: function getLinkInfo() {
      var _this2 = this;

      if (this.formstate) {
        axios.post('/url/metadata', {
          url: this.searchQuery
        }).then(function (response) {
          if (response.status == 200) {
            _this2.linkInfo = response.data;
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-1 px-0" }, [
    _c(
      "div",
      {
        staticClass: "col-12 px-2 py-2  fixed-top d-flex flex-row",
        staticStyle: {
          position: "sticky",
          background: "white",
          top: "0%",
          "align-items": "center"
        }
      },
      [
        _c(
          "div",
          { staticClass: " mr-1 py-0" },
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
        _c(
          "v-form",
          {
            staticClass: "py-0 text-center px-0",
            staticStyle: { width: "100%", height: "40px" },
            model: {
              value: _vm.formstate,
              callback: function($$v) {
                _vm.formstate = $$v
              },
              expression: "formstate"
            }
          },
          [
            _c("v-text-field", {
              staticStyle: { "font-size": "13px" },
              attrs: {
                dense: "",
                filled: "",
                placeholder: "Paste resource URL here",
                rules: _vm.urlRule,
                color: "#3C87CD"
              },
              on: { input: _vm.getLinkInfo },
              model: {
                value: _vm.searchQuery,
                callback: function($$v) {
                  _vm.searchQuery = $$v
                },
                expression: "searchQuery"
              }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm.linkInfo
      ? _c(
          "div",
          {
            staticClass: "col-12  pb-0 pt-0 px-0 d-flex flex-row",
            staticStyle: { "align-items": "center" }
          },
          [
            _c(
              "div",
              {
                staticClass: "col-5 py-1 px-1",
                staticStyle: { height: "92px" }
              },
              [
                _c(
                  "div",
                  {
                    style:
                      "position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(" +
                      _vm.linkInfo.image +
                      ");background-repeat: no-repeat; background-size:cover;"
                  },
                  [
                    _vm.show_add_icon
                      ? _c(
                          "div",
                          {
                            staticClass: "px-1 py-1",
                            staticStyle: {
                              background: "rgba(0, 0, 0,0.6)",
                              cursor: "pointer",
                              position: "absolute",
                              top: "0px",
                              right: "0px",
                              border: "1px solid black",
                              "border-top-right-radius": "8px"
                            }
                          },
                          [
                            _c(
                              "v-icon",
                              {
                                staticStyle: {
                                  "font-size": "18px",
                                  color: "white"
                                }
                              },
                              [_vm._v("las la-plus")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "px-1 py-1 d-flex",
                        staticStyle: {
                          "align-items": "center",
                          background: "rgba(0, 0, 0,0.1)",
                          "justify-content": "center",
                          cursor: "pointer",
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%"
                        }
                      },
                      [
                        _c(
                          "v-icon",
                          {
                            staticStyle: {
                              "font-size": "35px",
                              color: "#ffffff"
                            }
                          },
                          [_vm._v("las la-link")]
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
              {
                staticClass: "col-7 d-flex flex-column pt-1 my-auto",
                staticStyle: { "justify-content": "center", width: "100%" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "pt-3 mb-1",
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "13px",
                      overflow: "hidden",
                      width: "100%",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [
                    _vm._v(
                      "\n             " +
                        _vm._s(_vm.linkInfo.title) +
                        "\n           "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "mb-1",
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "12px",
                      "white-space": "nowrap",
                      color: "grey",
                      overflow: "hidden",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [
                    _vm._v(
                      "\n             " +
                        _vm._s(_vm.linkInfo.description) +
                        "\n           "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "12px",
                      color: "grey",
                      overflow: "hidden",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.processURL(_vm.linkInfo.base)) +
                        "\n           "
                    )
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ResourceUrl.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/ResourceUrl.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& */ "./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&");
/* harmony import */ var _ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceUrl.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14df1d9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ResourceUrl.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUrl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);