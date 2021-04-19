(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceSearch"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this
    };
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { background: "transparent" } }, [
    _c("div", { staticClass: "col-12 py-1 my-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
            staticStyle: {
              position: "sticky",
              background: "white",
              top: "0%",
              "align-items": "center"
            }
          },
          [
            _c(
              "div",
              { staticClass: " mr-1 py-0" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.goBack($event)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("las la-arrow-left")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: " py-0 ml-1 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.goBack($event)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("las la-search")])],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: " py-0 text-center", staticStyle: { width: "100%" } },
      [
        _c("input", {
          staticClass: "py-2 px-3",
          staticStyle: {
            width: "100%",
            heigth: "100%",
            "font-size": "13px",
            background: "whitesmoke",
            "border-radius": "13px",
            "font-family": "BodyFont"
          },
          attrs: { placeholder: "Search Youtube", type: "search" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 py-1 my-0 px-1 px-md-2",
        staticStyle: { background: "transparent", "font-family": "BodyFont" }
      },
      [
        _c(
          "div",
          {
            staticClass: "mt-1 text-center",
            staticStyle: {
              "font-family": "BodyFont",
              "font-size": "13px",
              color: "grey"
            }
          },
          [_vm._v('Add videos to "javascript" playlist')]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 py-1 pt-0 px-0 d-flex flex-row",
            staticStyle: { "align-items": "center" }
          },
          [
            _c(
              "div",
              {
                staticClass: "col-5 py-1 px-1",
                staticStyle: { height: "92px" }
              },
              [
                _c("div", {
                  staticStyle: {
                    position: "absolute",
                    width: "100%",
                    border: "1px solid white",
                    "border-radius": "8px",
                    height: "100%",
                    "background-color": "#c5c5c5",
                    "background-image": "url(imgs/youtube_video.jpg)",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-7 d-flex flex-column pt-1 my-auto",
                staticStyle: { "justify-content": "center", width: "100%" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "pt-3 mb-1",
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "13px",
                      overflow: "hidden",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [
                    _vm._v(
                      "\n               5 Javascript Concept You HAVE TO KNOW\n             "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "mb-1",
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "12px",
                      "white-space": "nowrap",
                      color: "grey",
                      overflow: "hidden",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [_vm._v("\n                James Q Quick\n             ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "12px",
                      color: "grey",
                      overflow: "hidden",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [_vm._v("\n               204K views\n             ")]
                )
              ]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ResourceSearch.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/chats/ResourceSearch.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& */ "./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&");
/* harmony import */ var _ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceSearch.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cdcf1096",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ResourceSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);