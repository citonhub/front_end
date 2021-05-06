(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SettingsMain"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notify: true,
      loadingLogout: false
    };
  },
  methods: {
    logout: function logout() {
      this.loadingLogout = true;
      this.$store.dispatch('logout');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/main.vue?vue&type=template&id=4fd0f96a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/main.vue?vue&type=template&id=4fd0f96a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", {
      staticClass: " mt-1  col-12 d-md-none d-block",
      staticStyle: { background: "#F5F5FB" }
    }),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 mt-3 mt-md-0 d-md-none d-block" }),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-lg-8 offset-lg-2 py-0 application application--light",
        attrs: { "data-app": "true" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row ",
              staticStyle: { "border-bottom": "1px solid #c5c5c5" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-2 col-lg-1 col-md-2 d-flex",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "v-icon",
                    { staticStyle: { "font-size": "20px", color: "#263238" } },
                    [_vm._v("las la-bell")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(1)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row ",
              staticStyle: { "border-bottom": "1px solid #c5c5c5" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-2 col-lg-1 col-md-2 d-flex",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "v-icon",
                    { staticStyle: { "font-size": "20px", color: "#263238" } },
                    [_vm._v("las la-tv")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(2)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 text-center mt-3" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-2 d-inline-block",
                  staticStyle: {
                    color: "white",
                    "text-transform": "normal",
                    "font-family": "BodyFont",
                    "font-size": "11px"
                  },
                  attrs: {
                    small: "",
                    loading: _vm.loadingLogout,
                    color: "#3C87CD"
                  },
                  on: {
                    click: function($event) {
                      return _vm.logout()
                    }
                  }
                },
                [_vm._v("Logout")]
              )
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-10 offset-lg-1 py-1 pt-2 px-2 d-md-block d-none fixed-top",
        staticStyle: {
          position: "sticky",
          top: "0%",
          background: "#F5F5FB",
          "border-bottom": "1px solid #c5c5c5"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6 py-0 my-0" }, [
            _c("h5", [_vm._v("Settings")])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column col-10 col-lg-11 " }, [
      _c(
        "div",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("\n                  Notifications\n             ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
        [
          _vm._v(
            "\n                  Do you want to receive notification on your devices \n                   "
          ),
          _c("div", { staticClass: "form-check d-inline-block ml-2" }, [
            _c("input", {
              staticClass: "form-check-input",
              attrs: {
                type: "checkbox",
                value: "",
                id: "flexCheckChecked",
                checked: ""
              }
            }),
            _vm._v(" "),
            _c("label", {
              staticClass: "form-check-label",
              attrs: { for: "flexCheckChecked" }
            })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column col-10 col-lg-11 " }, [
      _c(
        "div",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("\n                  Dark mode\n             ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: { "font-size": "13px", "font-family": "BodyFont" },
          attrs: { bc: "" }
        },
        [_vm._v("\n                  Coming soon\n             ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/main.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/settings/main.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_4fd0f96a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=4fd0f96a&scoped=true& */ "./resources/js/components/settings/main.vue?vue&type=template&id=4fd0f96a&scoped=true&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_4fd0f96a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_4fd0f96a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fd0f96a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/main.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/settings/main.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/main.vue?vue&type=template&id=4fd0f96a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/settings/main.vue?vue&type=template&id=4fd0f96a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4fd0f96a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=4fd0f96a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/main.vue?vue&type=template&id=4fd0f96a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4fd0f96a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4fd0f96a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);