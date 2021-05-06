(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MentorInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['alertComponent'],
  data: function data() {
    return {
      that: this,
      nextLevel: '',
      presentLevel: '',
      remainingPoints: 0,
      loadingmakeMentor: false,
      languages: []
    };
  },
  mounted: function mounted() {
    this.calculateLevel(this.$root.authProfile.points);
  },
  methods: {
    shareProject: function shareProject() {
      this.$root.showMentorInfo = false;
      this.$root.componentIsLoading = true;
      this.$root.autoOpenAddPost = true;
      this.$router.push({
        path: '/hub'
      });
    },
    BecomeMentor: function BecomeMentor() {
      this.$root.showMentorInfo = false;
      this.$root.showPointDetailsInfo = true;
    },
    viewDiary: function viewDiary() {
      this.$root.showMentorInfo = false;
      this.$router.push({
        path: '/board/diary/list'
      });
    },
    findMentor: function findMentor() {},
    calculateLevel: function calculateLevel(point) {
      this.nextLevel = '';
      this.remainingPoints = 0;

      if (point >= 50 && point <= 99) {
        this.nextLevel = 'a Bronze citon';
        this.remainingPoints = 100 - point;
        this.presentLevel = 'a Steel citon';
        this.newLevelImage = '/imgs/steel.svg';
      } else if (point >= 100 && point <= 299) {
        this.nextLevel = 'a Silver citon';
        this.remainingPoints = 300 - point;
        this.presentLevel = 'a Bronze citon';
        this.newLevelImage = '/imgs/bronze.svg';
      } else if (point >= 300 && point <= 599) {
        this.nextLevel = 'a Gold citon';
        this.remainingPoints = 600 - point;
        this.presentLevel = 'a Silver citon';
        this.newLevelImage = '/imgs/silver.svg';
      } else if (point >= 600 && point <= 999) {
        this.nextLevel = 'a Platinum citon';
        this.remainingPoints = 1000 - point;
        this.presentLevel = 'a Gold citon';
        this.newLevelImage = '/imgs/gold.svg';
      } else if (point >= 1000 && point <= 1499) {
        this.nextLevel = 'a Diamond citon';
        this.remainingPoints = 1500 - point;
        this.presentLevel = 'a Platinum citon';
        this.newLevelImage = '/imgs/platinum.svg';
      } else if (point >= 1500 && point <= 9999) {
        this.nextLevel = 'a Diamond citon';
        this.remainingPoints = 10000 - point;
        this.presentLevel = 'a Diamond citon';
        this.newLevelImage = '/imgs/diamond.svg';
      }

      return [this.nextLevel, this.remainingPoints];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& ***!
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
      staticClass:
        "col-lg-4  py-3 d-flex flex-column col-md-8 px-1 application application--light",
      staticStyle: { "align-items": "center", "justify-content": "center" },
      attrs: { "data-app": "true" }
    },
    [
      _c("div", { staticClass: "d-flex flex-row py-0 col-12 " }, [
        _c("div", { staticClass: "col-8 py-1 text-left px-1" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-4 py-1 text-right px-0" },
          [
            _c(
              "v-btn",
              {
                staticStyle: { "font-family": "BodyFont", "font-size": "11px" },
                attrs: { "x-small": "", text: "" },
                on: {
                  click: function($event) {
                    _vm.that.$root.showMentorInfo = false
                  }
                }
              },
              [_vm._v("Close")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("img", { attrs: { src: "/imgs/teach_dev_new.svg", height: "160" } }),
      _vm._v(" "),
      _vm.that.$root.fromCreateAChannel
        ? [
            _c(
              "div",
              {
                staticClass: "mb-3 px-md-3 px-2 ",
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [
                _vm._v(
                  "\n                  \n                  \n                 Hey "
                ),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "text-transform": "capitalize"
                    }
                  },
                  [_vm._v(_vm._s(_vm.that.$root.authProfile.name))]
                ),
                _vm._v(", "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(
                  "\n                 \n                 To create a channel, you have to be at least a "
                ),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("Bronze citon ")
                ]),
                _vm._v(". You are "),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v(_vm._s(_vm.presentLevel))
                ]),
                _vm._v(" and\n                  have "),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v(_vm._s(_vm.remainingPoints) + " ")
                ]),
                _vm._v("experience points remaining to become "),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("Bronze citon ")
                ]),
                _vm._v(". Get more experience points by \n                  "),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("sharing your works")
                ]),
                _vm._v(
                  " with the community or \n                 by sharing what you know in  "
                ),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("your diaries")
                ]),
                _vm._v(".\n\n\n\n\n\n                  "),
                _c("div", { staticClass: "col-12 py-1 px-2 mt-3" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-6 py-1 px-1 text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-2 d-inline-block",
                            staticStyle: {
                              color: "white",
                              "font-family": "BodyFont",
                              "font-size": "11px"
                            },
                            attrs: { small: "", color: "#3C87CD", rounded: "" },
                            on: { click: _vm.shareProject }
                          },
                          [_vm._v("Share your work")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 py-1 px-1 text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-2 d-inline-block",
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "11px"
                            },
                            attrs: {
                              small: "",
                              color: "#3C87CD",
                              outlined: "",
                              rounded: ""
                            },
                            on: { click: _vm.viewDiary }
                          },
                          [_vm._v("Start a diary")]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ]
            )
          ]
        : [
            _c(
              "div",
              {
                staticClass: "mb-3 px-md-3 px-2",
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [
                _vm._v(
                  "\n                  \n                  \n                 Hey "
                ),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "text-transform": "capitalize"
                    }
                  },
                  [_vm._v(_vm._s(_vm.that.$root.authProfile.name))]
                ),
                _vm._v(", welcome to CitonHub! "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(
                  "\n                 \n                 Channel is where you mentor, engage your community, and earn from "
                ),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("donations, subscriptions or paid sessions")
                ]),
                _vm._v(". "),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n\n                \n                  To create a channel, you have to be at least a "
                ),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("Bronze citon ")
                ]),
                _vm._v(". You are "),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v(_vm._s(_vm.presentLevel))
                ]),
                _vm._v(" and\n                  have "),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v(_vm._s(_vm.remainingPoints) + " ")
                ]),
                _vm._v("experience points remaining to become a "),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("Bronze citon")
                ]),
                _vm._v("."),
                _c("br"),
                _c("br"),
                _vm._v(
                  " \n                  \n                  Get more experience points by \n                  "
                ),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("sharing your works")
                ]),
                _vm._v(
                  " with the community or \n                 by sharing what you know in  "
                ),
                _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
                  _vm._v("your diaries")
                ]),
                _vm._v(".\n\n\n\n                  "),
                _c("div", { staticClass: "col-12 py-1 px-1 mt-3" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-6 py-1 px-1 text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-2 d-inline-block",
                            staticStyle: {
                              color: "white",
                              "font-family": "BodyFont",
                              "font-size": "11px"
                            },
                            attrs: { small: "", color: "#3C87CD", rounded: "" },
                            on: { click: _vm.shareProject }
                          },
                          [_vm._v("Share your works")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 py-1 px-1 text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-2 d-inline-block",
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "11px"
                            },
                            attrs: {
                              small: "",
                              color: "#3C87CD",
                              outlined: "",
                              rounded: ""
                            },
                            on: { click: _vm.viewDiary }
                          },
                          [_vm._v("Start a diary")]
                        )
                      ],
                      1
                    )
                  ])
                ])
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

/***/ "./resources/js/components/chats/MentorInfo.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/MentorInfo.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& */ "./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&");
/* harmony import */ var _MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MentorInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "024fef6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/MentorInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MentorInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);