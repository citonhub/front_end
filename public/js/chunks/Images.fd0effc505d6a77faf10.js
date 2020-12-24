(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Images"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Images.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Images.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
var ImageLoader = function ImageLoader() {
  return __webpack_require__.e(/*! import() | ImageLoader */ "ImageLoader").then(__webpack_require__.bind(null, /*! ./ImageLoader.vue */ "./resources/js/components/chats/ImageLoader.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['imageArray'],
  data: function data() {
    return {
      color: '#c5c5c5',
      imageUrl1: 'http://citonhubnew.com/imgs/public.jpg',
      imageUrl2: 'http://citonhubnew.com/imgs/public2.jpg',
      sliderState: ''
    };
  },
  components: {
    ImageLoader: ImageLoader
  },
  methods: {
    showImageGallery: function showImageGallery(index) {
      this.$root.imageSlidestate = index;
      this.$root.imageArrayView = this.imageArray;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/image_viewer'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Images.vue?vue&type=template&id=22b80652&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Images.vue?vue&type=template&id=22b80652& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _vm.imageArray.length == 1
      ? _c(
          "div",
          { staticStyle: { height: "200px", width: "100%" } },
          _vm._l(_vm.imageArray, function(imageData, index) {
            return _c(
              "div",
              {
                key: index,
                staticStyle: {
                  width: "100%",
                  height: "100%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(0)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      imageData.image_name +
                      "." +
                      imageData.image_extension,
                    backgroundColor: imageData.background_color
                  }
                })
              ],
              1
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.imageArray.length == 2
      ? _c(
          "div",
          {
            staticClass: " d-flex flex-row",
            staticStyle: { height: "200px", width: "100%" }
          },
          _vm._l(_vm.imageArray, function(imageData, index) {
            return _c(
              "div",
              {
                key: index,
                staticStyle: {
                  width: "50%",
                  height: "100%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(index)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      imageData.image_name +
                      "." +
                      imageData.image_extension,
                    backgroundColor: imageData.background_color
                  }
                })
              ],
              1
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.imageArray.length == 3
      ? _c(
          "div",
          {
            staticClass: " d-flex  flex-wrap",
            staticStyle: { height: "200px", width: "100%" }
          },
          [
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  height: "50%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(0)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      _vm.imageArray[0].image_name +
                      "." +
                      _vm.imageArray[0].image_extension,
                    backgroundColor: _vm.imageArray[0].background_color
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  height: "50%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(1)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      _vm.imageArray[1].image_name +
                      "." +
                      _vm.imageArray[1].image_extension,
                    backgroundColor: _vm.imageArray[1].background_color
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  width: "100%",
                  height: "50%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(2)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      _vm.imageArray[2].image_name +
                      "." +
                      _vm.imageArray[2].image_extension,
                    backgroundColor: _vm.imageArray[2].background_color
                  }
                })
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.imageArray.length == 4
      ? _c(
          "div",
          {
            staticClass: " d-flex  flex-wrap",
            staticStyle: { height: "200px", width: "100%" }
          },
          [
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  height: "50%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(0)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      _vm.imageArray[0].image_name +
                      "." +
                      _vm.imageArray[0].image_extension,
                    backgroundColor: _vm.imageArray[0].background_color
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  height: "50%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(1)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      _vm.imageArray[1].image_name +
                      "." +
                      _vm.imageArray[1].image_extension,
                    backgroundColor: _vm.imageArray[1].background_color
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  height: "50%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(2)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      _vm.imageArray[2].image_name +
                      "." +
                      _vm.imageArray[2].image_extension,
                    backgroundColor: _vm.imageArray[2].background_color
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  height: "50%",
                  border: "1px solid #c5c5c5",
                  cursor: "pointer"
                },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showImageGallery(3)
                  }
                }
              },
              [
                _c("image-loader", {
                  attrs: {
                    externalUrl:
                      "/imgs/space/" +
                      _vm.imageArray[3].image_name +
                      "." +
                      _vm.imageArray[3].image_extension,
                    backgroundColor: _vm.imageArray[3].background_color
                  }
                })
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/Images.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/chats/Images.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Images_vue_vue_type_template_id_22b80652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images.vue?vue&type=template&id=22b80652& */ "./resources/js/components/chats/Images.vue?vue&type=template&id=22b80652&");
/* harmony import */ var _Images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Images.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Images_vue_vue_type_template_id_22b80652___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Images_vue_vue_type_template_id_22b80652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Images.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Images.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/chats/Images.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Images.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Images.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Images.vue?vue&type=template&id=22b80652&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/chats/Images.vue?vue&type=template&id=22b80652& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Images_vue_vue_type_template_id_22b80652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Images.vue?vue&type=template&id=22b80652& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Images.vue?vue&type=template&id=22b80652&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Images_vue_vue_type_template_id_22b80652___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Images_vue_vue_type_template_id_22b80652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);