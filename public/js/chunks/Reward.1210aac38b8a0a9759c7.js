(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Reward"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/reward.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/reward.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      nextLevel: '',
      remainingPoints: 0
    };
  },
  mounted: function mounted() {
    this.calculateLevel(this.$root.authProfile.points);
  },
  methods: {
    calculateLevel: function calculateLevel(point) {
      this.nextLevel = '';
      this.remainingPoints = 0;

      if (point >= 50 && point <= 99) {
        this.nextLevel = 'Junior';
        this.remainingPoints = 100 - point;
      } else if (point >= 100 && point <= 999) {
        this.nextLevel = 'Intermediate';
        this.remainingPoints = 1000 - point;
      } else if (point >= 1000 && point <= 4999) {
        this.nextLevel = 'Senior';
        this.remainingPoints = 5000 - point;
      } else if (point >= 5000 && point <= 9999) {
        this.nextLevel = 'Expert';
        this.remainingPoints = 10000 - point;
      } else if (point >= 10000 && point <= 14999) {
        this.nextLevel = 'Super ';
        this.remainingPoints = 15000 - point;
      } else if (point >= 15000 && point <= 100000) {
        this.nextLevel = 'Super';
        this.remainingPoints = 100000 - point;
      }

      return [this.nextLevel, this.remainingPoints];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/reward.vue?vue&type=template&id=efa67f56&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/reward.vue?vue&type=template&id=efa67f56&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      staticClass: "col-lg-4  py-2 pt-4 d-flex flex-column col-md-8 ",
      staticStyle: { "align-items": "center", "justify-content": "center" }
    },
    [
      _c("img", { attrs: { src: "/imgs/congrat.gif", height: "140" } }),
      _vm._v(" "),
      _c("div", { staticClass: "py-3 text-center" }, [
        _c(
          "span",
          { staticStyle: { "font-size": "13px", "font-family": "MediumFont" } },
          [_vm._v("Congratulations!")]
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
          [_vm._v("You received ")]
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticStyle: { "font-size": "13px", "font-family": "MediumFont" } },
          [_vm._v("10 experience points.")]
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticStyle: { "font-size": "13px", "font-family": "BodyFont" } },
          [
            _vm._v("You have \n       "),
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "13px",
                  "font-family": "MediumFont"
                }
              },
              [_vm._v(_vm._s(_vm.remainingPoints) + " experience points")]
            ),
            _vm._v(" left \n       to become a ")
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticStyle: { "font-size": "13px", "font-family": "MediumFont" } },
          [_vm._v(_vm._s(_vm.nextLevel) + " dev")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-btn",
            {
              staticClass: "mx-2 d-inline-block",
              staticStyle: {
                color: "white",
                "text-transform": "normal",
                "font-family": "BodyFont",
                "font-size": "11px"
              },
              attrs: { small: "", color: "#3C87CD" }
            },
            [_vm._v("Got it!")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/reward.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/dashboard/reward.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reward_vue_vue_type_template_id_efa67f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward.vue?vue&type=template&id=efa67f56&scoped=true& */ "./resources/js/components/dashboard/reward.vue?vue&type=template&id=efa67f56&scoped=true&");
/* harmony import */ var _reward_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/reward.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reward_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reward_vue_vue_type_template_id_efa67f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reward_vue_vue_type_template_id_efa67f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "efa67f56",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/reward.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/reward.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/dashboard/reward.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reward_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reward.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/reward.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reward_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/reward.vue?vue&type=template&id=efa67f56&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/reward.vue?vue&type=template&id=efa67f56&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reward_vue_vue_type_template_id_efa67f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./reward.vue?vue&type=template&id=efa67f56&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/reward.vue?vue&type=template&id=efa67f56&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reward_vue_vue_type_template_id_efa67f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reward_vue_vue_type_template_id_efa67f56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);