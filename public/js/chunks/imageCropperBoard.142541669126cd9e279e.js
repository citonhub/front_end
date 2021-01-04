(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageCropperBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ImageCropper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ImageCropper.vue?vue&type=script&lang=js& ***!
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
var ImageCropper = function ImageCropper() {
  return Promise.all(/*! import() | ImageCropperMain */[__webpack_require__.e("vendors~ImageCropperMain"), __webpack_require__.e("ImageCropperMain")]).then(__webpack_require__.bind(null, /*! ./ImageCropperMain.vue */ "./resources/js/components/dashboard/ImageCropperMain.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imagepath: this.$root.imagepath,
      cropType: 'rectangle-stencil',
      cropProp: {
        handlers: {},
        movable: true,
        scalable: false,
        aspectRatio: 1
      }
    };
  },
  components: {
    ImageCropper: ImageCropper
  },
  mounted: function mounted() {},
  methods: {
    goBack: function goBack() {
      this.$refs.cropper.crop();
      this.$root.croppedImage = null;
      this.$root.croppedImage = this.$refs.cropper.image;
      this.$root.showImageCropper = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    crophandler: function crophandler() {},
    defaultSize: function defaultSize() {
      return {
        width: 400,
        height: 400
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true& ***!
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
  return _c("div", { staticClass: "d-flex px-2 flex-column py-2" }, [
    _c(
      "div",
      { staticStyle: { height: "100%" } },
      [
        _c("image-cropper", {
          ref: "cropper",
          staticClass: " d-flex col-12 ",
          staticStyle: {
            "align-items": "center",
            "justify-content": "center",
            height: "100%"
          },
          attrs: {
            img: this.imagepath,
            componentType: _vm.cropType,
            stencilProps: _vm.cropProp
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex flex-row" }, [
      _c(
        "div",
        { staticClass: "col-12 px-2 py-1 text-center" },
        [
          _c(
            "v-btn",
            {
              staticStyle: {
                "font-size": "12px",
                "font-weight": "bolder",
                color: "white",
                "font-family": "MediumFont"
              },
              attrs: { small: "", rounded: "", color: "#3C87CD" },
              on: { click: _vm.goBack }
            },
            [
              _c(
                "span",
                { staticStyle: { color: "white", "text-transform": "none" } },
                [_vm._v("Crop")]
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/ImageCropper.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/dashboard/ImageCropper.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCropper_vue_vue_type_template_id_01e7e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true& */ "./resources/js/components/dashboard/ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true&");
/* harmony import */ var _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/ImageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageCropper_vue_vue_type_template_id_01e7e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageCropper_vue_vue_type_template_id_01e7e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01e7e7f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/ImageCropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/ImageCropper.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dashboard/ImageCropper.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ImageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_01e7e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ImageCropper.vue?vue&type=template&id=01e7e7f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_01e7e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_01e7e7f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);