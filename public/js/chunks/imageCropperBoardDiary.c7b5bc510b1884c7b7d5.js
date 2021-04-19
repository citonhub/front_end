(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageCropperBoardDiary"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/ImageCropper.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/ImageCropper.vue?vue&type=script&lang=js& ***!
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
var ImageCropper = function ImageCropper() {
  return Promise.all(/*! import() | ImageCropperMain */[__webpack_require__.e("vendors~ImageCropperMain"), __webpack_require__.e("ImageCropperMain")]).then(__webpack_require__.bind(null, /*! ./ImageCropperMain.vue */ "./resources/js/components/diary/ImageCropperMain.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imagepath: '',
      cropType: 'rectangle-stencil',
      cropProp: {}
    };
  },
  components: {
    ImageCropper: ImageCropper
  },
  mounted: function mounted() {
    if (this.$root.currentImage == 'image1') {
      this.imagepath = this.$root.imagepath1;
    }

    if (this.$root.currentImage == 'image2') {
      this.imagepath = this.$root.imagepath2;
    }

    if (this.$root.currentImage == 'image3') {
      this.imagepath = this.$root.imagepath3;
    }

    if (this.$root.currentImage == 'image4') {
      this.imagepath = this.$root.imagepath4;
    }
  },
  methods: {
    goBack: function goBack() {
      this.$refs.cropper.crop();

      if (this.$root.currentImage == 'image1') {
        this.$root.imagepath1 = this.$refs.cropper.image;
        this.$root.imageCanvas1 = this.$refs.cropper.canvas;
        this.$root.addDiaryContentComponent.imageHeight1 = this.$refs.cropper.coordinates.height;
        this.$root.addDiaryContentComponent.imageWidth1 = this.$refs.cropper.coordinates.width;
      }

      if (this.$root.currentImage == 'image2') {
        this.$root.imagepath2 = this.$refs.cropper.image;
        this.$root.imageCanvas2 = this.$refs.cropper.canvas;
        this.$root.addDiaryContentComponent.imageHeight2 = this.$refs.cropper.coordinates.height;
        this.$root.addDiaryContentComponent.imageWidth2 = this.$refs.cropper.coordinates.width;
      }

      if (this.$root.currentImage == 'image3') {
        this.$root.imagepath3 = this.$refs.cropper.image;
        this.$root.imageCanvas3 = this.$refs.cropper.canvas;
        this.$root.addDiaryContentComponent.imageHeight3 = this.$refs.cropper.coordinates.height;
        this.$root.addDiaryContentComponent.imageWidth3 = this.$refs.cropper.coordinates.width;
      }

      if (this.$root.currentImage == 'image4') {
        this.$root.imagepath4 = this.$refs.cropper.image;
        this.$root.imageCanvas4 = this.$refs.cropper.canvas;
        this.$root.addDiaryContentComponent.imageHeight4 = this.$refs.cropper.coordinates.height;
        this.$root.addDiaryContentComponent.imageWidth4 = this.$refs.cropper.coordinates.width;
      }

      this.$root.addDiaryContentComponent.image1 = this.$root.imagepath1, this.$root.addDiaryContentComponent.image2 = this.$root.imagepath2, this.$root.addDiaryContentComponent.image3 = this.$root.imagepath3, this.$root.addDiaryContentComponent.image4 = this.$root.imagepath4, this.$root.showImageCropperDiary = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "d-flex px-2 flex-column py-2",
      staticStyle: { height: "90%", weight: "100%", left: "0%" }
    },
    [
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/diary/ImageCropper.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/diary/ImageCropper.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCropper_vue_vue_type_template_id_b18277ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true& */ "./resources/js/components/diary/ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true&");
/* harmony import */ var _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=script&lang=js& */ "./resources/js/components/diary/ImageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageCropper_vue_vue_type_template_id_b18277ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageCropper_vue_vue_type_template_id_b18277ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b18277ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/diary/ImageCropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/diary/ImageCropper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/diary/ImageCropper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/ImageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/diary/ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/diary/ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_b18277ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/ImageCropper.vue?vue&type=template&id=b18277ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_b18277ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_b18277ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);