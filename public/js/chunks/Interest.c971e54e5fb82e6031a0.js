(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Interest"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/InterestPopup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/InterestPopup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      Interests: ['Javascript', 'PHP', 'Python', 'React', 'CSS', 'HTML', 'Flutter', 'Golang', 'Java', 'C++', 'Dart']
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/InterestPopup.vue?vue&type=template&id=ca1c3134&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/InterestPopup.vue?vue&type=template&id=ca1c3134& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      staticClass:
        "col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-6 offset-sm-3 d-md-block d-sm-block d-none"
    },
    [
      _c("h1", { staticClass: "text-center" }, [
        _vm._v(" Select Your Interest")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-center" }, [_vm._v("Pick one or more.")]),
      _vm._v(" "),
      _vm._l(_vm.Interests, function(interest, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "interest col-lg-12 d-flex mb-2",
            staticStyle: {
              "background-color": "rgba( 125,179,229,0.1)",
              "font-size": "1.6rem",
              "font-weight": "bold"
            }
          },
          [
            _c("div", { staticClass: "form-check" }, [
              _c("input", {
                staticClass: "form-check-input mt-2",
                attrs: { type: "checkbox", value: "", id: "defaultCheck1" }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "form-check-label",
                  attrs: { for: "defaultCheck1" }
                },
                [_vm._v("\n   " + _vm._s(interest) + "\n  ")]
              )
            ])
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "buttons mt-2 col-4 offset-8 d-flex" },
        [
          _c(
            "p",
            { staticStyle: { "font-size": "1.2rem", "font-weight": "bold" } },
            [_vm._v("Skip")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { staticClass: "ml-2", staticStyle: { color: "white" } },
            [_vm._v("Done")]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/InterestPopup.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/auth/InterestPopup.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterestPopup_vue_vue_type_template_id_ca1c3134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterestPopup.vue?vue&type=template&id=ca1c3134& */ "./resources/js/components/auth/InterestPopup.vue?vue&type=template&id=ca1c3134&");
/* harmony import */ var _InterestPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterestPopup.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/InterestPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InterestPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InterestPopup_vue_vue_type_template_id_ca1c3134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InterestPopup_vue_vue_type_template_id_ca1c3134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/InterestPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/InterestPopup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/auth/InterestPopup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterestPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InterestPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/InterestPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterestPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/InterestPopup.vue?vue&type=template&id=ca1c3134&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/auth/InterestPopup.vue?vue&type=template&id=ca1c3134& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterestPopup_vue_vue_type_template_id_ca1c3134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InterestPopup.vue?vue&type=template&id=ca1c3134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/InterestPopup.vue?vue&type=template&id=ca1c3134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterestPopup_vue_vue_type_template_id_ca1c3134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterestPopup_vue_vue_type_template_id_ca1c3134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);