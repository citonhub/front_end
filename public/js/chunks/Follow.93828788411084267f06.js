(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Follow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
      diaries: ['Intro to PHP', 'Advanced CSS', 'tensorflow', 'python magic', 'html cheats']
    };
  },
  methods: {
    openChatList: function openChatList() {
      this.$router.push({
        path: '/channels'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "col-lg-6 offset-lg-3  col-md-6 offset-md-3 offset-sm-1  col-sm-10   scroller py-0",
      staticStyle: {
        "background-color": "white",
        position: "absolute",
        height: "100%",
        left: "0"
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "scroller",
          staticStyle: {
            "overflow-y": "auto",
            "overflow-x": "hidden",
            position: "absolute",
            height: "80%",
            top: "10%",
            width: "100%",
            "padding-bottom": "20px",
            left: "0"
          }
        },
        _vm._l(_vm.diaries, function(diary, index) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "follow col-lg-12 d-flex mb-2 ",
              staticStyle: {
                "background-color": "rgba( 125,179,229,0.1)",
                "font-size": "1.1rem",
                "font-weight": "bold",
                height: "65px"
              }
            },
            [
              _c("div", { staticClass: "diary col-lg-4 py-2 " }, [
                _c("div", { staticClass: "name" }, [_vm._v(_vm._s(diary))]),
                _vm._v(" "),
                _c("p", { staticClass: "describe" }, [
                  _vm._v("Lorem ipsum dolor")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass:
                    "mt-1 offset-lg-5 offset-md-5 offset-sm-4 offset-4 ",
                  staticStyle: {
                    color: "white",
                    "background-color": "#3C87CD",
                    "border-radius": "10px",
                    height: "30px"
                  }
                },
                [_vm._v("Follow")]
              )
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "buttons mt-2 col-lg-12 offset-8 d-flex ",
          staticStyle: {
            position: "absolute",
            "background-color": "white",
            bottom: "0%",
            right: "0%"
          }
        },
        [
          _c(
            "p",
            {
              staticClass: "offset-lg-9 ",
              staticStyle: { "font-size": "1.2rem", "font-weight": "bold" }
            },
            [_vm._v("Skip")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ml-2 px-2",
              staticStyle: {
                color: "white",
                "background-color": "#3C87CD",
                "border-radius": "10px",
                height: "30px"
              },
              on: {
                click: function($event) {
                  return _vm.openChatList()
                }
              }
            },
            [_vm._v("Done")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "py-2 d-flex flex-column text-center",
        staticStyle: {
          "background-color": "white",
          position: "absolute",
          top: "0",
          "justify-content": "center",
          "align-items": "center",
          width: "90%"
        }
      },
      [
        _c(
          "h1",
          { staticClass: "mb-2 ", staticStyle: { "font-size": "1.5rem" } },
          [_vm._v("Diaries relevant to your interests")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/FollowDiary.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/auth/FollowDiary.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FollowDiary_vue_vue_type_template_id_ef9ab554___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FollowDiary.vue?vue&type=template&id=ef9ab554& */ "./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&");
/* harmony import */ var _FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FollowDiary.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FollowDiary_vue_vue_type_template_id_ef9ab554___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FollowDiary_vue_vue_type_template_id_ef9ab554___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/FollowDiary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowDiary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_template_id_ef9ab554___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowDiary.vue?vue&type=template&id=ef9ab554& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_template_id_ef9ab554___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_template_id_ef9ab554___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);