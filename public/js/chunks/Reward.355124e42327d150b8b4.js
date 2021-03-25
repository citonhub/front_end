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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      remainingPoints: 0,
      presentLevel: '',
      newLevelImage: ''
    };
  },
  mounted: function mounted() {
    this.calculateLevel(this.$root.authProfile.points);
  },
  methods: {
    createChannel: function createChannel() {
      this.$root.componentIsLoading = true;

      if (this.$router.currentRoute.path.indexOf('channel') >= 0) {
        this.$root.showPointDetailsInfo = false;
        this.$router.push({
          path: '/channels/create'
        });
      } else {
        this.$root.showCreateChannel = true;
        this.$root.showPointDetailsInfo = false;
        this.$router.push({
          path: '/channels'
        });
      }
    },
    returnFormalLevel: function returnFormalLevel() {
      var point = this.$root.formerPoint;

      if (point >= 50 && point <= 99) {
        return 'a Steel developer';
      } else if (point >= 100 && point <= 299) {
        return 'a Bronze developer';
      } else if (point >= 300 && point <= 599) {
        return 'a Silver developer';
      } else if (point >= 600 && point <= 999) {
        return 'a Gold developer';
      } else if (point >= 1000 && point <= 1499) {
        return 'a Platinum developer';
      } else if (point >= 1500 && point <= 9999) {
        return 'a Diamond developer';
      }
    },
    makeMentor: function makeMentor() {
      this.$root.showRewardBoard = false;
      this.$root.showPointDetailsInfo = true;
    },
    shareProject: function shareProject() {
      this.$root.showRewardBoard = false;
      this.$root.componentIsLoading = true;
      this.$router.push({
        path: '/hub/new-post'
      });
    },
    calculateLevel: function calculateLevel(point) {
      this.nextLevel = '';
      this.remainingPoints = 0;

      if (point >= 50 && point <= 99) {
        this.nextLevel = 'a Bronze developer';
        this.remainingPoints = 100 - point;
        this.presentLevel = 'a Steel developer';
        this.newLevelImage = '/imgs/steel.svg';
      } else if (point >= 100 && point <= 299) {
        this.nextLevel = 'a Silver developer';
        this.remainingPoints = 300 - point;
        this.presentLevel = 'a Bronze developer';
        this.newLevelImage = '/imgs/bronze.svg';
      } else if (point >= 300 && point <= 599) {
        this.nextLevel = 'a Gold developer';
        this.remainingPoints = 600 - point;
        this.presentLevel = 'a Silver developer';
        this.newLevelImage = '/imgs/silver.svg';
      } else if (point >= 600 && point <= 999) {
        this.nextLevel = 'a Platinum developer';
        this.remainingPoints = 1000 - point;
        this.presentLevel = 'a Gold developer';
        this.newLevelImage = '/imgs/gold.svg';
      } else if (point >= 1000 && point <= 1499) {
        this.nextLevel = 'a Diamond developer';
        this.remainingPoints = 1500 - point;
        this.presentLevel = 'a Platinum developer';
        this.newLevelImage = '/imgs/platinum.svg';
      } else if (point >= 1500 && point <= 9999) {
        this.nextLevel = 'a Diamond developer';
        this.remainingPoints = 10000 - point;
        this.presentLevel = 'a Diamond developer';
        this.newLevelImage = '/imgs/diamond.svg';
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
      staticClass: "col-lg-4 px-1 py-3 d-flex flex-column col-md-8 ",
      staticStyle: { "align-items": "center", "justify-content": "center" }
    },
    [
      _c(
        "div",
        { staticClass: "col-12 py-1 text-right px-0" },
        [
          _c(
            "v-btn",
            {
              staticStyle: { "font-family": "BodyFont", "font-size": "11px" },
              attrs: { small: "", text: "" },
              on: {
                click: function($event) {
                  _vm.that.$root.showRewardBoard = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.presentLevel == _vm.returnFormalLevel()
        ? [_c("img", { attrs: { src: "/imgs/progress.png", height: "190" } })]
        : [_c("img", { attrs: { src: _vm.newLevelImage, height: "150" } })],
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pb-3 pt-2 text-center px-2" },
        [
          _vm.presentLevel == _vm.returnFormalLevel()
            ? [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v("You are progressing!")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont"
                    }
                  },
                  [_vm._v("Your XP has increased by")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v(_vm._s(_vm.that.$root.addedPoint) + " ,")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont"
                    }
                  },
                  [_vm._v(" You now have")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v(_vm._s(this.$root.authProfile.points) + " XP.")]
                ),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont"
                    }
                  },
                  [
                    _vm._v(
                      " Get more by sharing more of your projects. You have \n       "
                    ),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v(_vm._s(_vm.remainingPoints) + " XP")]
                    ),
                    _vm._v(" remaining \n       to become  ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v(_vm._s(_vm.nextLevel) + " ")]
                )
              ]
            : [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v("Congratulation!")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont"
                    }
                  },
                  [_vm._v("You are now ")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v(_vm._s(_vm.presentLevel))]
                ),
                _vm._v(". "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont"
                    }
                  },
                  [_vm._v(" You have")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v(_vm._s(this.$root.authProfile.points) + " XP.")]
                ),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont"
                    }
                  },
                  [
                    _vm._v(
                      " Get more by sharing more of your projects. You have \n       "
                    ),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v(_vm._s(_vm.remainingPoints) + " XP")]
                    ),
                    _vm._v(" remaining \n       to become  ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v(_vm._s(_vm.nextLevel) + " ")]
                )
              ]
        ],
        2
      ),
      _vm._v(" "),
      _vm.presentLevel == "a Steel developer"
        ? [
            _c(
              "div",
              { staticClass: "text-center mb-2" },
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
                    attrs: { small: "", color: "#3C87CD" },
                    on: { click: _vm.shareProject }
                  },
                  [_vm._v("Share more projects")]
                )
              ],
              1
            )
          ]
        : [
            _c(
              "div",
              { staticClass: "text-center  d-flex flex-row col-12 px-1" },
              [
                _c(
                  "div",
                  { staticClass: "col-6 px-0 py-0 text-center" },
                  [
                    _vm.that.$root.authProfile.is_mentor
                      ? [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2 d-inline-block",
                              staticStyle: {
                                color: "white",
                                "text-transform": "normal",
                                "font-family": "BodyFont",
                                "font-size": "10px"
                              },
                              attrs: { small: "", color: "#3C87CD" },
                              on: { click: _vm.createChannel }
                            },
                            [_vm._v("Create a channel")]
                          )
                        ]
                      : [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2 d-inline-block",
                              staticStyle: {
                                color: "white",
                                "text-transform": "normal",
                                "font-family": "BodyFont",
                                "font-size": "10px"
                              },
                              attrs: { small: "", color: "#3C87CD" },
                              on: { click: _vm.makeMentor }
                            },
                            [_vm._v("Become a mentor")]
                          )
                        ]
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6 px-0 py-0 text-center" },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mx-2 d-inline-block",
                        staticStyle: {
                          "text-transform": "normal",
                          "font-family": "BodyFont",
                          "font-size": "10px"
                        },
                        attrs: { small: "", color: "#3C87CD", outlined: "" },
                        on: { click: _vm.shareProject }
                      },
                      [_vm._v("Share project")]
                    )
                  ],
                  1
                )
              ]
            )
          ]
    ],
    2
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