(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PaymentProcessor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
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
    imageStyleSpace: function imageStyleSpace(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:cover;border:5px solid #3C87CD; cursor:pointer;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/sample_new.jpg);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& ***!
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
  return _c("div", { staticClass: "col-lg-6 col-md-6 d-flex flex-column " }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "text-center mb-2 d-flex",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [_c("div", { style: _vm.imageStyleSpace(140, [], "channel") })]
    ),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticStyle: { "font-size": "13px", color: "grey" } }, [
      _vm._v("Select support type;")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: " d-flex flex-row flex-wrap " }, [
      _c(
        "div",
        { staticClass: "  col-6  px-1 my-0 py-2 " },
        [
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 ",
              style:
                "height:100px; border:1px solid #c5c5c5; border-radius:7px;"
            },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex",
                  staticStyle: {
                    height: "100%",
                    "align-items": "center",
                    "justify-content": "center",
                    width: "100%"
                  }
                },
                [
                  _c("div", { staticClass: "text-center" }, [
                    _c("img", {
                      attrs: { src: "/imgs/support.png", height: "40" }
                    }),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "BodyFont"
                          }
                        },
                        [_vm._v("One-time")]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "  col-6  px-1 my-0 py-2 " },
        [
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 appBox",
              style:
                "height:100px; border:1px solid #c5c5c5; border-radius:7px;"
            },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex",
                  staticStyle: {
                    height: "100%",
                    "align-items": "center",
                    "justify-content": "center",
                    width: "100%"
                  }
                },
                [
                  _c("div", { staticClass: "text-center" }, [
                    _c("img", {
                      attrs: { src: "/imgs/subscribe.png", height: "40" }
                    }),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "BodyFont"
                          }
                        },
                        [_vm._v("Recurrent")]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-2  mt-4 text-center" }, [
      _c("h5", [_vm._v("Support DSC Landmark")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-2" }, [
      _c("h6", [_vm._v("DSC Landmark")]),
      _vm._v(" "),
      _c(
        "span",
        { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
        [
          _vm._v(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure ipsam dolores explicabo earum expedita reiciendis eos? Incidunt qui, amet minus facilis distincti!"
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/PaymentProcessor.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/chats/PaymentProcessor.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& */ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&");
/* harmony import */ var _PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentProcessor.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2aef566a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/PaymentProcessor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentProcessor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PaymentProcessor.vue?vue&type=template&id=2aef566a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentProcessor_vue_vue_type_template_id_2aef566a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);