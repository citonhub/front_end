(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PointInfoBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js& ***!
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
//
//
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
      that: this,
      nextLevel: '',
      presentLevel: '',
      remainingPoints: 0,
      languages: []
    };
  },
  mounted: function mounted() {
    this.calculateLevel(this.$root.authProfile.points);
  },
  methods: {
    shareProject: function shareProject() {
      this.$root.componentIsLoading = true;
      this.$root.autoOpenAddPost = true;
      this.$router.push({
        path: '/hub'
      });
    },
    calculateLevel: function calculateLevel(point) {
      this.nextLevel = '';
      this.remainingPoints = 0;

      if (point >= 50 && point <= 99) {
        this.nextLevel = 'Junior developer';
        this.remainingPoints = 100 - point;
        this.presentLevel = 'Newbie';
      } else if (point >= 100 && point <= 199) {
        this.presentLevel = 'Junior developer';
        this.nextLevel = 'Intermediate developer';
        this.remainingPoints = 200 - point;
      } else if (point >= 200 && point <= 299) {
        this.presentLevel = 'Intermediate developer';
        this.nextLevel = 'Senior developer';
        this.remainingPoints = 300 - point;
      } else if (point >= 300 && point <= 399) {
        this.presentLevel = 'Senior developer';
        this.nextLevel = 'Expert developer';
        this.remainingPoints = 400 - point;
      } else if (point >= 400 && point <= 499) {
        this.presentLevel = 'Expert developer';
        this.nextLevel = 'Super developer';
        this.remainingPoints = 500 - point;
      } else if (point >= 500 && point <= 599) {
        this.nextLevel = 'Super developer';
        this.presentLevel = 'Super developer';
        this.remainingPoints = 500 - point;
      }

      return [this.nextLevel, this.remainingPoints];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/chats/PointInfoBoard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/chats/PointInfoBoard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& */ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&");
/* harmony import */ var _PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointInfoBoard.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ce6b62f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/PointInfoBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PointInfoBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);