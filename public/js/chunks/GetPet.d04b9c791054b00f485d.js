(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GetPet"],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pets/GetPet.vue?vue&type=template&id=06250b6e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pets/GetPet.vue?vue&type=template&id=06250b6e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("v-app", { staticStyle: { "foont-family": "BodyFont" } }, [
    _c("div", { staticClass: "col-12" }, [
      _c(
        "div",
        {
          staticClass: " col-lg-6 offset-lg-3 text-center",
          staticStyle: {
            "background-color": "#3C87CD",
            color: "white",
            "font-size": "30px"
          }
        },
        [_vm._v("Create Your Pet!")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-8 offset-lg-2 px-2 mt-4 py-1" },
        [
          _c(
            "p",
            {
              staticClass: "col-lg-4 text-left",
              staticStyle: { "font-size": "25px" }
            },
            [_vm._v("1.Name your pet.")]
          ),
          _vm._v(" "),
          _c("v-text-field", {
            staticStyle: { "font-size": "13px" },
            attrs: {
              label: "Name Your Pet",
              outlined: "",
              counter: "30",
              placeholder: "Pet Name",
              "outline-color": "#3C87CD",
              color: "#3C87CD"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pet-pic " },
        [
          _c("p", { staticClass: "text-left" }, [_vm._v("3.Uploas ")]),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "col-12 d-flex",
              staticStyle: {
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              _c(
                "v-sheet",
                {
                  staticClass: "py-0 px-0 sheetbackImg mx-auto",
                  style:
                    "background-image:url(" +
                    this.$root.croppedImage +
                    ");border-radius:50%;cursor:pointer;background-size:contain;",
                  attrs: {
                    elevation: "0",
                    height: "120",
                    width: "120",
                    color: "whitesmoke"
                  }
                },
                [
                  _c("input", {
                    ref: "settingsimage",
                    staticStyle: {
                      opacity: "0",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      position: "absolute",
                      "z-index": "10"
                    },
                    attrs: {
                      type: "file",
                      id: "settingsimage",
                      accept: "image/x-png,image/jpeg,image/jpg"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-sheet",
                    {
                      staticClass: "py-auto px-auto d-flex",
                      staticStyle: { "border-radius": "50%" },
                      attrs: {
                        elevation: "0",
                        height: "100%",
                        width: "100%",
                        color: "rgba(15, 33, 36, 0.3)"
                      }
                    },
                    [
                      _c("v-icon", { staticClass: "mx-auto white-text" }, [
                        _vm._v("mdi-camera-plus")
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
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-8 offset-lg-2 px-2 mt-4 py-1" },
        [
          _c(
            "p",
            {
              staticClass: "col-lg-6 text-left",
              staticStyle: { "font-size": "25px" }
            },
            [_vm._v("3.Select a channel.")]
          ),
          _vm._v(" "),
          _c("v-select", {
            staticStyle: { "font-size": "13px" },
            attrs: {
              label: "Channel",
              outlined: "",
              counter: "30",
              placeholder: "Channel",
              "outline-color": "#3C87CD",
              color: "#3C87CD"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pets/GetPet.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pets/GetPet.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetPet_vue_vue_type_template_id_06250b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetPet.vue?vue&type=template&id=06250b6e& */ "./resources/js/components/pets/GetPet.vue?vue&type=template&id=06250b6e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _GetPet_vue_vue_type_template_id_06250b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GetPet_vue_vue_type_template_id_06250b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pets/GetPet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pets/GetPet.vue?vue&type=template&id=06250b6e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pets/GetPet.vue?vue&type=template&id=06250b6e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetPet_vue_vue_type_template_id_06250b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GetPet.vue?vue&type=template&id=06250b6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pets/GetPet.vue?vue&type=template&id=06250b6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetPet_vue_vue_type_template_id_06250b6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetPet_vue_vue_type_template_id_06250b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);