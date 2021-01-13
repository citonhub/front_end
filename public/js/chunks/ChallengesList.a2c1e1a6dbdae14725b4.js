(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChallengesList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-virtual-scroller/dist/vue-virtual-scroller.css */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.component('DynamicScroller', vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__["DynamicScroller"]);
Vue.component('DynamicScrollerItem', vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__["DynamicScrollerItem"]);

var Challenge = function Challenge() {
  return __webpack_require__.e(/*! import() | Challenge */ "Challenge").then(__webpack_require__.bind(null, /*! ./Challenge.vue */ "./resources/js/components/challenges/Challenge.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pending: true,
      loadingChallenges: false,
      loadingSearchChallenges: false
    };
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
    this.$root.challengeListComponent = this;
    this.fetchChallenges();
  },
  components: {
    Challenge: Challenge
  },
  methods: {
    fetchChallenges: function fetchChallenges() {
      var _this = this;

      this.loadingChallenges = true;
      var storedChallenges = this.$root.getLocalStore('user_challenges_' + this.$root.username);
      storedChallenges.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this.$root.challengesList = finalResult;
          _this.loadingChallenges = false;

          _this.checkForNewChallenges();
        } else {
          axios.get('/get-challenges').then(function (response) {
            if (response.status == 200) {
              _this.$root.challengesList = response.data.challenges;

              _this.$root.LocalStore('user_challenges_' + _this.$root.username, response.data.challenges);

              _this.loadingChallenges = false;
            }
          })["catch"](function (error) {
            _this.loadingChallenges = false;
          });
        }
      });
    },
    checkForNewChallenges: function checkForNewChallenges() {
      var _this2 = this;

      axios.get('/get-challenges').then(function (response) {
        if (response.status == 200) {
          _this2.$root.challengesList = response.data.challenges;

          _this2.$root.LocalStore('user_challenges_' + _this2.$root.username, response.data.challenges);
        }
      })["catch"](function (error) {});
    },
    createChallenge: function createChallenge() {
      this.$router.push({
        path: '/board/challenges/create/new'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nspan[data-v-7e881e92]{\n\n   color: #3C87CD;\n   font-weight: bold;\nline-height:21px;\n}\n.challengeBox[data-v-7e881e92]{\n   background:transparent !important;\n   cursor: pointer;\n}\n.challengeBox[data-v-7e881e92]:hover{\n   background:transparent !important;\n   cursor: pointer;\n}\n  \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1 mb-0  pt-3 px-2 d-md-block d-none fixed-top",
          staticStyle: {
            position: "sticky",
            top: "-1%",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6  py-0 my-0 text-right" },
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
                    on: { click: _vm.createChallenge }
                  },
                  [
                    _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                      _vm._v("las la-plus")
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "none"
                        }
                      },
                      [_vm._v("Create a challenge")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "d-lg-none d-inline-block",
          staticStyle: {
            "z-index": "99999999",
            position: "fixed",
            bottom: "3%",
            right: "3%"
          },
          attrs: { fab: "", color: "#3C87CD" },
          on: { click: _vm.createChallenge }
        },
        [
          _c(
            "v-icon",
            { staticStyle: { "font-size": "24px", color: "white" } },
            [_vm._v("las la-plus")]
          )
        ],
        1
      ),
      _vm._v(" "),
      this.$root.TopBarComponent
        ? _c(
            "div",
            {
              staticClass:
                "col-lg-8 offset-lg-2 col-md-10 offset-md-1 px-2  pb-1 pt-0   "
            },
            [
              this.$root.TopBarComponent.searchContent.length > 0
                ? [
                    !_vm.loadingSearchChallenges
                      ? [
                          _c("DynamicScroller", {
                            staticClass: "col-12 text-center px-0 py-1 pt-md-3",
                            attrs: {
                              items: this.$root.challengeSearchList,
                              keyField: "duel_id",
                              "min-item-size": 36,
                              buffer: 5000
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var item = ref.item
                                    var index = ref.index
                                    var active = ref.active
                                    return [
                                      _c(
                                        "DynamicScrollerItem",
                                        {
                                          attrs: {
                                            item: item,
                                            active: active,
                                            "size-dependencies": [
                                              item.description
                                            ],
                                            "data-index": index
                                          }
                                        },
                                        [
                                          _c("challenge", {
                                            attrs: { source: item }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                },
                                {
                                  key: "before",
                                  fn: function() {
                                    return [
                                      _c("div", {
                                        staticClass:
                                          "col-12 mt-5 mt-md-0 d-md-none d-block"
                                      })
                                    ]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "after",
                                  fn: function() {
                                    return [
                                      _c("div", {
                                        staticClass: "col-12 my-5 mt-md-0 "
                                      })
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              false,
                              3080554579
                            )
                          })
                        ]
                      : [
                          _c("div", {
                            staticClass: "col-12 mt-5 mt-md-0 d-md-none d-block"
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-12 mt-3 mt-md-4   text-center"
                            },
                            [
                              _c("v-progress-circular", {
                                attrs: {
                                  color: "#3C87CD",
                                  indeterminate: "",
                                  width: "3",
                                  size: "25"
                                }
                              })
                            ],
                            1
                          )
                        ]
                  ]
                : [
                    !_vm.loadingChallenges
                      ? [
                          _c("DynamicScroller", {
                            staticClass: "col-12 text-center px-0 py-1 pt-md-3",
                            attrs: {
                              items: this.$root.challengesList,
                              keyField: "duel_id",
                              "min-item-size": 36,
                              buffer: 5000
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var item = ref.item
                                    var index = ref.index
                                    var active = ref.active
                                    return [
                                      _c(
                                        "DynamicScrollerItem",
                                        {
                                          attrs: {
                                            item: item,
                                            active: active,
                                            "size-dependencies": [
                                              item.description
                                            ],
                                            "data-index": index
                                          }
                                        },
                                        [
                                          _c("challenge", {
                                            attrs: { source: item }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                },
                                {
                                  key: "before",
                                  fn: function() {
                                    return [
                                      _c("div", {
                                        staticClass:
                                          "col-12 mt-5 mt-md-0 d-md-none d-block"
                                      })
                                    ]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "after",
                                  fn: function() {
                                    return [
                                      _c("div", {
                                        staticClass: "col-12 my-5 mt-md-0 "
                                      })
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              false,
                              3080554579
                            )
                          })
                        ]
                      : [
                          _c("div", {
                            staticClass: "col-12 mt-5 mt-md-0 d-md-none d-block"
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-12 mt-3 mt-md-4   text-center"
                            },
                            [
                              _c("v-progress-circular", {
                                attrs: {
                                  color: "#3C87CD",
                                  indeterminate: "",
                                  width: "3",
                                  size: "25"
                                }
                              })
                            ],
                            1
                          )
                        ]
                  ]
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 py-0 my-0" }, [
      _c("h5", [_vm._v("Challenges")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& */ "./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&");
/* harmony import */ var _ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChallengesList.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& */ "./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e881e92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/ChallengesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);