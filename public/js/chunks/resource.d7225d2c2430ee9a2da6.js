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
//
//
//
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
      resources: ['Java Routes', 'Props in Java', 'Data Binding JS', 'Components VueJs']
    };
  },
  methods: {
    showContent: function showContent() {
      axios.get('/fetch-resource-content/{resource_id}').then();
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_content/sample'
      });
    },
    createResources: function createResources() {
      axios.post('/create-resource');
    }
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
  return _c("div", { staticClass: "py-1 px-0" }, [
    _c(
      "div",
      {
        staticClass: "navigate px-2 py-1 mt-3 mb-3 ",
        staticStyle: { height: "50px" }
      },
      [
        _c("v-text-field", {
          staticStyle: { height: "70%" },
          attrs: {
            placeholder: "Upload a resource",
            outlined: "",
            color: "#3C87CD"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2" },
      _vm._l(_vm.resources, function(resource, index) {
        return _c(
          "v-card",
          {
            key: index,
            staticClass: "d-flex flex-row px-1  mb-2 col-12 ",
            staticStyle: { background: "rgba(125, 179, 229, 0.4)" },
            attrs: { flat: "" },
            on: { click: _vm.showContent }
          },
          [
            _c(
              "div",
              { staticClass: "mr-2 " },
              [
                _c(
                  "v-icon",
                  { staticClass: "ml-2", attrs: { color: "#000000" } },
                  [_vm._v("las la-folder")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "BodyFont",
                    color: "black",
                    "font-size": "13px"
                  }
                },
                [_vm._v(_vm._s(resource))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ml-auto px-2" }, [
              _c(
                "span",
                {
                  staticClass: "d-flex flex-row",
                  staticStyle: {
                    "font-family": "BodyFont",
                    "align-items": "center",
                    "justify-content": "center",
                    color: "black",
                    "font-size": "13px",
                    background: "white",
                    height: "26px",
                    width: "26px",
                    border: "1px solid #ffffff",
                    "border-radius": "50%"
                  }
                },
                [_vm._v("12")]
              )
            ])
          ]
        )
      }),
      1
    )
  ])
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