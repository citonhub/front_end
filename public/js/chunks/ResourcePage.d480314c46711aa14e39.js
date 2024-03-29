(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourcePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resourcesdisplay.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resourcesdisplay.vue?vue&type=script&lang=js& ***!
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
var playlist = function playlist() {
  return __webpack_require__.e(/*! import() | playlist */ "playlist").then(__webpack_require__.bind(null, /*! ./playlists */ "./resources/js/components/chats/playlists.vue"));
};

var resources = function resources() {
  return __webpack_require__.e(/*! import() | resource */ "resource").then(__webpack_require__.bind(null, /*! ./resources */ "./resources/js/components/chats/resources.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    playlist: playlist,
    resources: resources
  },
  data: function data() {
    return {
      toggle: true,
      selectedTab: 'playlists'
    };
  },
  mounted: function mounted() {
    this.checkResourceType();
  },
  methods: {
    checkResourceType: function checkResourceType() {
      if (this.$router.currentRoute.path.indexOf('playlists') >= 0) {
        this.selectedTab = 'playlists';
      }

      if (this.$router.currentRoute.path.indexOf('resources') >= 0) {
        this.selectedTab = 'resources';
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = '';
    },
    showPlaylist: function showPlaylist() {
      this.toggle = true;
      this.selectedTab = 'playlists';
    },
    showResources: function showResources() {
      this.toggle = false;
      this.selectedTab = 'resources';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true& ***!
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
    { staticStyle: { background: "transparent", height: "100%:" } },
    [
      _c("div", { staticClass: "col-12 py-1 my-0" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
              staticStyle: {
                position: "sticky",
                background: "white",
                cursor: "pointer",
                top: "0%",
                "align-items": "center"
              }
            },
            [
              _c(
                "div",
                { staticClass: " col-2 px-1 py-0" },
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
              _c(
                "div",
                {
                  staticClass: "col-8 py-0 px-0 d-flex flex-row",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-6 py-1 d-flex",
                      style:
                        _vm.selectedTab == "playlists"
                          ? "align-items:center; justify-content:center;border-bottom:3px solid #3C87CD"
                          : "align-items:center; justify-content:center;border-bottom:1px solid #c5c5c5",
                      on: { click: _vm.showPlaylist }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "14px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Playlists")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-6 py-1 d-flex",
                      style:
                        _vm.selectedTab == "resources"
                          ? "align-items:center; justify-content:center;border-bottom:3px solid #3C87CD"
                          : "align-items:center; justify-content:center;border-bottom:1px solid #c5c5c5",
                      on: { click: _vm.showResources }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "14px",
                            "font-family": "MediumFont"
                          }
                        },
                        [_vm._v("Resources")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: " col-2 px-1 py-0" })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 py-1 my-0",
              staticStyle: {
                background: "transparent",
                "font-family": "BodyFont"
              }
            },
            [_vm.toggle ? _c("playlist") : _c("resources")],
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

/***/ "./resources/js/components/chats/Resourcesdisplay.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/chats/Resourcesdisplay.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resourcesdisplay_vue_vue_type_template_id_845a0bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true& */ "./resources/js/components/chats/Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true&");
/* harmony import */ var _Resourcesdisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resourcesdisplay.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Resourcesdisplay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resourcesdisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resourcesdisplay_vue_vue_type_template_id_845a0bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resourcesdisplay_vue_vue_type_template_id_845a0bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "845a0bc8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Resourcesdisplay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Resourcesdisplay.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chats/Resourcesdisplay.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resourcesdisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resourcesdisplay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resourcesdisplay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resourcesdisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/chats/Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resourcesdisplay_vue_vue_type_template_id_845a0bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resourcesdisplay.vue?vue&type=template&id=845a0bc8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resourcesdisplay_vue_vue_type_template_id_845a0bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resourcesdisplay_vue_vue_type_template_id_845a0bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);