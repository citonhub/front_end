(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Feedback"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Feedback.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Feedback.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      feedback: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Feedback.vue?vue&type=template&id=abed6b6a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Feedback.vue?vue&type=template&id=abed6b6a& ***!
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
  return _c("div", { staticClass: "top" }, [
    _c(
      "div",
      {
        staticClass: "feed-header col-lg-12 ",
        staticStyle: { "margin-top": "100px", color: "#3C87CD" }
      },
      [
        _c(
          "h1",
          {
            staticClass: "text-center",
            staticStyle: { "font-size": "2.5rem" }
          },
          [_vm._v(" We would love to hear from you!")]
        ),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "text-center mt-4", staticStyle: { color: "black" } },
          [_vm._v("Please help us with feedback to improve citonhub.")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "message form-group col-lg-4 offset-lg-4" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback,
                expression: "feedback"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "",
              id: "",
              cols: "30",
              rows: "10",
              placeholder: "Citonhub is..."
            },
            domProps: { value: _vm.feedback },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.feedback = $event.target.value
              }
            }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/Feedback.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/dashboard/Feedback.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feedback_vue_vue_type_template_id_abed6b6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue?vue&type=template&id=abed6b6a& */ "./resources/js/components/dashboard/Feedback.vue?vue&type=template&id=abed6b6a&");
/* harmony import */ var _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Feedback_vue_vue_type_template_id_abed6b6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Feedback_vue_vue_type_template_id_abed6b6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Feedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Feedback.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dashboard/Feedback.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/Feedback.vue?vue&type=template&id=abed6b6a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Feedback.vue?vue&type=template&id=abed6b6a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_abed6b6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=template&id=abed6b6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Feedback.vue?vue&type=template&id=abed6b6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_abed6b6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_abed6b6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);