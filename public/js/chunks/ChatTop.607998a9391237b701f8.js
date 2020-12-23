(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatTop"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
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
    showSideBar: function showSideBar(type) {
      var _this = this;

      this.chatInnerConent = false;
      this.$root.chatComponent.innerSideBarContent = '';
      setTimeout(function () {
        _this.$root.chatComponent.chatInnerSideBar = true;
        _this.$root.chatComponent.innerSideBarContent = type;
      }, 500);
    },
    openLiveSession: function openLiveSession() {
      var _this2 = this;

      this.chatInnerConent = false;
      this.$root.chatComponent.chatInnerSideBar = false;
      setTimeout(function () {
        _this2.$root.chatComponent.liveSessionIsOpen = true;
      }, 500);
    },
    goback: function goback() {
      this.$root.chatComponent.chatIsOpen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      {
        staticClass: "col-md-8 py-0 d-md-flex px-md-1 flex-row  d-none",
        staticStyle: { "align-items": "center" }
      },
      [
        _c("div", {
          staticClass: "d-inline-block mr-2",
          staticStyle: {
            "border-radius": "50%",
            height: "40px",
            width: "40px",
            "background-color": "#c5c5c5",
            "background-image": "url(/imgs/imgproj3.jpeg)",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            border: "1px solid transparent",
            cursor: "pointer"
          },
          on: {
            click: function($event) {
              return _vm.showSideBar("channel_info")
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "d-inline-block" }, [
          _c("div", [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "14px",
                  "font-family": "BodyFont",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    return _vm.showSideBar("channel_info")
                  }
                }
              },
              [_vm._v("Channel Name 1")]
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2 py-1 d-md-block d-none" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-2 py-1 pt-2 text-right d-md-block d-none" },
      [
        _c(
          "v-btn",
          {
            staticClass: "mr-2",
            attrs: { icon: "" },
            on: {
              click: function($event) {
                return _vm.showSideBar("sub_channels")
              }
            }
          },
          [_c("v-icon", [_vm._v("mdi mdi-pound")])],
          1
        ),
        _vm._v(" "),
        _c(
          "v-btn",
          {
            staticClass: "mr-2",
            attrs: { icon: "" },
            on: { click: _vm.openLiveSession }
          },
          [_c("v-icon", [_vm._v("mdi-television-play")])],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-9 py-0 d-flex  flex-row d-md-none px-1",
        staticStyle: { "align-items": "center" }
      },
      [
        _c(
          "v-btn",
          {
            staticClass: "d-lg-none d-inline-block mr-1",
            attrs: { icon: "" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goback($event)
              }
            }
          },
          [_c("v-icon", [_vm._v("las la-arrow-left")])],
          1
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "d-inline-block mr-1",
          staticStyle: {
            "border-radius": "50%",
            height: "38px",
            width: "38px",
            "background-color": "#c5c5c5",
            "background-image": "url(/imgs/imgproj3.jpeg)",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            border: "1px solid transparent"
          },
          on: {
            click: function($event) {
              return _vm.showSideBar("channel_info")
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "d-inline-block" }, [
          _c("div", [
            _c(
              "span",
              {
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" },
                on: {
                  click: function($event) {
                    return _vm.showSideBar("channel_info")
                  }
                }
              },
              [_vm._v("Channel Name 1")]
            )
          ]),
          _vm._v(" "),
          _vm._m(1)
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-1 py-0 px-0 d-md-none d-block pt-1 text-right" },
      [
        _c(
          "v-btn",
          {
            attrs: { icon: "" },
            on: {
              click: function($event) {
                return _vm.showSideBar("sub_channels")
              }
            }
          },
          [_c("v-icon", [_vm._v("mdi mdi-pound")])],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-2 py-0 px-0 text-right pt-1 d-md-none d-block" },
      [
        _c(
          "v-btn",
          {
            staticClass: "mr-2",
            attrs: { icon: "" },
            on: { click: _vm.openLiveSession }
          },
          [_c("v-icon", [_vm._v("mdi-television-play")])],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "span",
        {
          staticStyle: {
            "font-size": "12px",
            color: "grey",
            "font-family": "BodyFont"
          }
        },
        [_vm._v("220 Members ,120 Online")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "span",
        {
          staticStyle: {
            "font-size": "11px",
            color: "grey",
            "font-family": "BodyFont"
          }
        },
        [_vm._v("220 Members ,120 Online")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ChatTop.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/chats/ChatTop.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& */ "./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&");
/* harmony import */ var _ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatTop.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62e3880e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChatTop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatTop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatTop.vue?vue&type=template&id=62e3880e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatTop.vue?vue&type=template&id=62e3880e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatTop_vue_vue_type_template_id_62e3880e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);