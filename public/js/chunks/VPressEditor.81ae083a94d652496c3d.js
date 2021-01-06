(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VPressEditor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Editor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Editor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kangc_v_md_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kangc/v-md-editor */ "./node_modules/@kangc/v-md-editor/lib/base-editor.js");
/* harmony import */ var _kangc_v_md_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kangc_v_md_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kangc_v_md_editor_lib_style_base_editor_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kangc/v-md-editor/lib/style/base-editor.css */ "./node_modules/@kangc/v-md-editor/lib/style/base-editor.css");
/* harmony import */ var _kangc_v_md_editor_lib_style_base_editor_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kangc_v_md_editor_lib_style_base_editor_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kangc_v_md_editor_lib_theme_vuepress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kangc/v-md-editor/lib/theme/vuepress.js */ "./node_modules/@kangc/v-md-editor/lib/theme/vuepress.js");
/* harmony import */ var _kangc_v_md_editor_lib_theme_vuepress_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kangc_v_md_editor_lib_theme_vuepress_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kangc_v_md_editor_lib_lang_en_US__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kangc/v-md-editor/lib/lang/en-US */ "./node_modules/@kangc/v-md-editor/lib/lang/en-US.js");
/* harmony import */ var _kangc_v_md_editor_lib_lang_en_US__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kangc_v_md_editor_lib_lang_en_US__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//




_kangc_v_md_editor__WEBPACK_IMPORTED_MODULE_1___default.a.use(_kangc_v_md_editor_lib_theme_vuepress_js__WEBPACK_IMPORTED_MODULE_3___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_kangc_v_md_editor__WEBPACK_IMPORTED_MODULE_1___default.a);

_kangc_v_md_editor__WEBPACK_IMPORTED_MODULE_1___default.a.lang.use('en-US', _kangc_v_md_editor_lib_lang_en_US__WEBPACK_IMPORTED_MODULE_4___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['placeholder', 'content'],
  model: {
    prop: 'content',
    event: 'textChange'
  },
  computed: {
    listLocal: {
      get: function get() {
        return this.content;
      },
      set: function set(value) {
        this.$emit('textChange', value);
      }
    }
  },
  data: function data() {
    return {
      text: this.content
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Editor.vue?vue&type=template&id=6831d15e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Editor.vue?vue&type=template&id=6831d15e&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("v-md-editor", {
        attrs: {
          height: "400px",
          mode: "edit",
          placeholder: _vm.placeholder,
          "left-toolbar":
            "h bold italic strikethrough quote ul ol  hr image link",
          "right-toolbar": "preview"
        },
        model: {
          value: _vm.listLocal,
          callback: function($$v) {
            _vm.listLocal = $$v
          },
          expression: "listLocal"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/Editor.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/challenges/Editor.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor_vue_vue_type_template_id_6831d15e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=6831d15e&scoped=true& */ "./resources/js/components/challenges/Editor.vue?vue&type=template&id=6831d15e&scoped=true&");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editor_vue_vue_type_template_id_6831d15e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editor_vue_vue_type_template_id_6831d15e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6831d15e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/Editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/Editor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/challenges/Editor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/Editor.vue?vue&type=template&id=6831d15e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Editor.vue?vue&type=template&id=6831d15e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_6831d15e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=template&id=6831d15e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Editor.vue?vue&type=template&id=6831d15e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_6831d15e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_6831d15e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);