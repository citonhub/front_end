(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NotificationsList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notifications/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
  },
  methods: {
    imageStyle: function imageStyle(size, data, radius) {
      if (data.background_color == null) {
        var styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-lg-8 offset-lg-2 col-md-10 offset-md-1 py-0 pb-2 px-2 "
      },
      [
        _c("div", { staticClass: "row " }, [
          _c("div", { staticClass: "col-12 mt-5 mt-md-0 d-md-none d-block" }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row px-0",
              staticStyle: {
                "align-items": "center",
                "border-bottom": "1px solid #c5c5c5"
              }
            },
            [
              _c("div", { staticClass: "mx-2" }, [
                _c("div", { style: _vm.imageStyle(40, ["data"], "8px") })
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row px-0",
              staticStyle: {
                "align-items": "center",
                "border-bottom": "1px solid #c5c5c5"
              }
            },
            [
              _c("div", { staticClass: "mx-2" }, [
                _c("div", { style: _vm.imageStyle(40, ["data"], "8px") })
              ]),
              _vm._v(" "),
              _vm._m(2)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row px-0",
              staticStyle: {
                "align-items": "center",
                "border-bottom": "1px solid #c5c5c5"
              }
            },
            [
              _c("div", { staticClass: "mx-2" }, [
                _c("div", { style: _vm.imageStyle(40, ["data"], "8px") })
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row px-0",
              staticStyle: {
                "align-items": "center",
                "border-bottom": "1px solid #c5c5c5"
              }
            },
            [
              _c("div", { staticClass: "mx-2" }, [
                _c("div", { style: _vm.imageStyle(35, ["data"], "50%") })
              ]),
              _vm._v(" "),
              _vm._m(4)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 d-flex flex-row px-0",
              staticStyle: {
                "align-items": "center",
                "border-bottom": "1px solid #c5c5c5"
              }
            },
            [
              _c("div", { staticClass: "mx-2" }, [
                _c("div", { style: _vm.imageStyle(35, ["data"], "50%") })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pr-2" },
                [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "13px"
                      }
                    },
                    [_vm._v("Adenike")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px"
                      }
                    },
                    [_vm._v(" is inviting you to join ")]
                  ),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "13px"
                      }
                    },
                    [_vm._v("Js Interns")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2 d-inline-block",
                      staticStyle: {
                        color: "white",
                        "text-transform": "normal",
                        "font-family": "BodyFont",
                        "font-size": "12px"
                      },
                      attrs: { small: "", color: "#3C87CD", rounded: "" }
                    },
                    [_vm._v("Accept")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2 d-inline-block",
                      staticStyle: {
                        "text-transform": "normal",
                        "font-family": "BodyFont",
                        "font-size": "12px"
                      },
                      attrs: {
                        small: "",
                        color: "#3C87CD",
                        outlined: "",
                        rounded: ""
                      }
                    },
                    [_vm._v("Decline")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "mx-1",
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "12px",
                        color: "grey"
                      }
                    },
                    [_vm._v("12:30 AM")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 py-5 my-5" })
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",
        staticStyle: {
          position: "sticky",
          background: "#F5F5FB",
          "z-index": "999999999999",
          "border-bottom": "1px solid #c5c5c5"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6 py-0 my-0" }, [
            _c("h5", [_vm._v("Notifications")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6  py-0 my-0 text-right" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pr-2" }, [
      _c(
        "span",
        { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
        [_vm._v("David Adebola and 23 others")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-family": "BodyFont", "font-size": "13px" } },
        [_vm._v(" liked your project,")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
        [_vm._v("Music player")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "mx-1",
          staticStyle: {
            "font-family": "BodyFont",
            "font-size": "12px",
            color: "grey"
          }
        },
        [_vm._v("12:34 PM")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pr-2" }, [
      _c(
        "span",
        { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
        [_vm._v("Jude Prince and 14 others")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-family": "BodyFont", "font-size": "13px" } },
        [_vm._v(" liked your pinned,")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
        [_vm._v("Music player")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "mx-1",
          staticStyle: {
            "font-family": "BodyFont",
            "font-size": "12px",
            color: "grey"
          }
        },
        [_vm._v("2:34 PM")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pr-2" }, [
      _c(
        "span",
        { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
        [_vm._v("John Haskell and 114 others")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-family": "BodyFont", "font-size": "13px" } },
        [_vm._v(" commented your pinned,")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
        [_vm._v("Music player")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "mx-1",
          staticStyle: {
            "font-family": "BodyFont",
            "font-size": "12px",
            color: "grey"
          }
        },
        [_vm._v("2:30 PM")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pr-2" }, [
      _c(
        "span",
        { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
        [_vm._v("Michell and 4 others")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-family": "BodyFont", "font-size": "13px" } },
        [_vm._v(" are now following you")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "mx-1",
          staticStyle: {
            "font-family": "BodyFont",
            "font-size": "12px",
            color: "grey"
          }
        },
        [_vm._v("12:30 AM")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/notifications/List.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/notifications/List.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=6951a490&scoped=true& */ "./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/notifications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6951a490",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notifications/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/notifications/List.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/notifications/List.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=6951a490&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);