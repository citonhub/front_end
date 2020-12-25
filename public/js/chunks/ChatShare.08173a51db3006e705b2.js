(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatShare"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Share.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatShareIsOpen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-btn",
        {
          staticClass: "d-inline-block  ",
          staticStyle: {
            position: "absolute",
            background: "#3C87CD",
            top: "2%",
            right: "2%",
            "z-index": "990679797879"
          },
          attrs: { icon: "", color: "#ffffff" },
          on: { click: _vm.goBack }
        },
        [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "d-flex flex-wrap mb-2 mt-4 pt-5",
          staticStyle: { "align-items": "center", "justify-content": "center" }
        },
        [
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { title: "Add images", icon: "" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-image")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { title: "Add a video", icon: "" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-video")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", title: "Add an audio" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-music")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", title: "Add a code" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-file-alt")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", title: "Add a code" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-laptop-code")
                  ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/Share.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/chats/Share.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Share.vue?vue&type=template&id=597f2250&scoped=true& */ "./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&");
/* harmony import */ var _Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Share.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "597f2250",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Share.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Share.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/chats/Share.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Share.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Share.vue?vue&type=template&id=597f2250&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);