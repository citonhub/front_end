(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      resources: ['Vue Routes', 'Props', 'Data Binding', 'Components']
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-1 px-0" },
    [
      _c(
        "div",
        {
          staticClass: "navigate  px-0 py-1 mt-3",
          staticStyle: { "border-bottom": "1px solid #3C87CD" }
        },
        [
          _c("h6", { staticClass: "mt-2" }, [_vm._v("Add new Resour")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group d-flex mt-2" },
            [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text" }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "ml-2", attrs: { color: "#3c97cd" } },
                [_vm._v("Add")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.resources, function(resource, index) {
        return _c("div", { key: index, staticClass: "video-list mt-2" }, [
          _c(
            "div",
            {
              staticClass: "list-item px-0 d-flex py-2",
              staticStyle: {
                background: "rgba(125, 179, 229, 0.5)",
                height: "40px",
                "border-radius": "5px"
              }
            },
            [
              _c("v-icon", { staticClass: "ml-2", attrs: { color: "#000" } }, [
                _vm._v("las la-file")
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "ml-3",
                  staticStyle: { "font-family": "BodyFont", color: "black" }
                },
                [_vm._v(_vm._s(resource))]
              )
            ],
            1
          )
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/resources.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chats/resources.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=bfd50d94& */ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&");
/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/resources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=bfd50d94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);