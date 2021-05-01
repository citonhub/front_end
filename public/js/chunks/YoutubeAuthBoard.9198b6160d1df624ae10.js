(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["YoutubeAuthBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    preventClose: function preventClose() {},
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "px-2 py-2 col-12",
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.preventClose($event)
        }
      }
    },
    [
      _c(
        "v-card",
        { staticClass: "col-lg-4 offset-lg-4 py-1  col-md-8 offset-md-2" },
        [
          _c(
            "div",
            { staticClass: "col-12 px-1 text-left" },
            [
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.goBack } },
                [_c("v-icon", [_vm._v("las la-arrow-left ")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 py-0 text-center" }, [
            _c("h5", [_vm._v("Sign in to Youtube")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 text-center" },
            [
              _c(
                "v-icon",
                { staticStyle: { "font-size": "55px", color: "#FF0000" } },
                [_vm._v("mdi mdi-youtube")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 py-1 d-flex flex-row",
              staticStyle: { "align-items": "center" }
            },
            [
              _c(
                "div",
                { staticClass: "mr-2" },
                [
                  _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                    _vm._v("las la-play-circle")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "13px"
                    }
                  },
                  [_vm._v("Import your Youtube videos")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 py-1 d-flex flex-row",
              staticStyle: { "align-items": "center" }
            },
            [
              _c(
                "div",
                { staticClass: "mr-2" },
                [
                  _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                    _vm._v("las la-youtube")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "13px"
                    }
                  },
                  [_vm._v("Subscribe to new channels")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 py-1 d-flex flex-row",
              staticStyle: { "align-items": "center" }
            },
            [
              _c(
                "div",
                { staticClass: "mr-2" },
                [
                  _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                    _vm._v("las la-thumbs-up")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "13px"
                    }
                  },
                  [_vm._v("Like and dislike videos")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 my-2" },
            [
              _c(
                "v-btn",
                {
                  staticStyle: {
                    background: "#3C87CD",
                    "font-family": "MediumFont",
                    color: "white",
                    "font-size": "14px",
                    "text-transform": "none"
                  },
                  attrs: { block: "", medium: "", text: "", rounded: "" }
                },
                [_vm._v("Sign In")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/YoutubeAuthBoard.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/chats/YoutubeAuthBoard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YoutubeAuthBoard_vue_vue_type_template_id_4a554a5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true& */ "./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true&");
/* harmony import */ var _YoutubeAuthBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubeAuthBoard.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _YoutubeAuthBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YoutubeAuthBoard_vue_vue_type_template_id_4a554a5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YoutubeAuthBoard_vue_vue_type_template_id_4a554a5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a554a5a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/YoutubeAuthBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeAuthBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./YoutubeAuthBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeAuthBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeAuthBoard_vue_vue_type_template_id_4a554a5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubeAuthBoard.vue?vue&type=template&id=4a554a5a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeAuthBoard_vue_vue_type_template_id_4a554a5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeAuthBoard_vue_vue_type_template_id_4a554a5a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);