(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Notify"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Notify.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Notify.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this
    };
  },
  mounted: function mounted() {},
  methods: {
    enableNoficication: function enableNoficication() {
      this.$root.askPermission();
      this.$root.showUserNotification = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Notify.vue?vue&type=template&id=fd10338c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Notify.vue?vue&type=template&id=fd10338c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      staticClass: "col-lg-4  py-3 d-flex flex-column col-md-8 ",
      staticStyle: { "align-items": "center", "justify-content": "center" }
    },
    [
      _c("img", { attrs: { src: "/imgs/notify.gif", height: "140" } }),
      _vm._v(" "),
      _c("div", { staticClass: "py-3 text-center" }, [
        _c(
          "span",
          { staticStyle: { "font-size": "13px", "font-family": "MediumFont" } },
          [
            _vm._v(
              "Turn on notification to receive updates on your activities on CitonHub "
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-6 text-center" },
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
                  attrs: { small: "", color: "#3C87CD" },
                  on: { click: _vm.enableNoficication }
                },
                [_vm._v("Turn on")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-6 text-center" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-2 d-inline-block",
                  staticStyle: {
                    "text-transform": "normal",
                    "font-family": "BodyFont",
                    "font-size": "11px"
                  },
                  attrs: { small: "" },
                  on: {
                    click: function($event) {
                      _vm.that.$root.showUserNotification = false
                    }
                  }
                },
                [_vm._v("close")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/Notify.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Profile/Notify.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notify_vue_vue_type_template_id_fd10338c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notify.vue?vue&type=template&id=fd10338c&scoped=true& */ "./resources/js/components/Profile/Notify.vue?vue&type=template&id=fd10338c&scoped=true&");
/* harmony import */ var _Notify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notify.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/Notify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notify_vue_vue_type_template_id_fd10338c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notify_vue_vue_type_template_id_fd10338c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fd10338c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/Notify.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/Notify.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Profile/Notify.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notify.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Notify.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/Notify.vue?vue&type=template&id=fd10338c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Profile/Notify.vue?vue&type=template&id=fd10338c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notify_vue_vue_type_template_id_fd10338c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notify.vue?vue&type=template&id=fd10338c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Notify.vue?vue&type=template&id=fd10338c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notify_vue_vue_type_template_id_fd10338c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notify_vue_vue_type_template_id_fd10338c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);