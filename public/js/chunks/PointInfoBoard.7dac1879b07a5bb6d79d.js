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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      languages: [],
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-node-js',
        border_color: '#263238',
        background: '#ffffff',
        id: 'NodeJs'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-php',
        border_color: '#263238',
        background: '#ffffff',
        id: 'PHP'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square',
        border_color: '#263238',
        background: '#ffffff',
        id: 26
      }, {
        name: 'PHP',
        icon: 'lab la-php',
        border_color: '#263238',
        background: '#ffffff',
        id: 35
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 39
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 100
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c',
        border_color: '#263238',
        background: '#ffffff',
        id: 4
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp',
        border_color: '#263238',
        background: '#ffffff',
        id: 11
      }, {
        name: 'Java',
        icon: 'lab la-java',
        border_color: '#263238',
        background: '#ffffff',
        id: 25
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp',
        border_color: '#263238',
        background: '#ffffff',
        id: 13
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang',
        border_color: '#263238',
        background: '#ffffff',
        id: 18
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin',
        border_color: '#263238',
        background: '#ffffff',
        id: 27
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran',
        border_color: '#263238',
        background: '#ffffff',
        id: 21
      }, {
        name: 'Perl',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 34
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r',
        border_color: '#263238',
        background: '#ffffff',
        id: 40
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby',
        border_color: '#263238',
        background: '#ffffff',
        id: 41
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go',
        border_color: '#263238',
        background: '#ffffff',
        id: 22
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell',
        border_color: '#263238',
        background: '#ffffff',
        id: 24
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua',
        border_color: '#263238',
        background: '#ffffff',
        id: 28
      }, {
        name: 'Pascal',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 33
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript',
        border_color: '#263238',
        background: '#ffffff',
        id: 46
      }, {
        name: 'Rust',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 42
      }, {
        name: 'Swift',
        icon: 'lab la-swift',
        border_color: '#263238',
        background: '#ffffff',
        id: 45
      }, {
        name: 'Scala',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 43
      }]
    };
  },
  mounted: function mounted() {
    this.calculateLevel(this.$root.authProfile.points);
  },
  methods: {
    makeMentor: function makeMentor() {
      var _this = this;

      this.loadingmakeMentor = true;
      axios.post('/make-mentor', {
        language: this.languages
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.authProfile.is_mentor = true;
          _this.loadingmakeMentor = false;
        }
      })["catch"](function (error) {
        _this.alertComponent.showAlert('Oops!', 'Something went wrong, please try again', 'error');

        _this.loadingmakeMentor = false;
      });
    },
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
        _c("div", { staticClass: "col-8 py-1 text-left px-1" }, [
          _c(
            "span",
            {
              staticStyle: { "font-size": "17px", "font-family": "HeaderFont" }
            },
            [_vm._v("Become a mentor")]
          )
        ]),
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
                    _vm.that.$root.showPointDetailsInfo = false
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
      _vm.that.$root.authProfile.points < 100
        ? [
            _c(
              "div",
              {
                staticClass: "py-3   px-md-3 px-2",
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [
                _c("span", [
                  _vm._v("Hey "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
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
                    "\n     To become a mentor , you need to be \n     at least a "
                  ),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "MediumFont"
                      }
                    },
                    [_vm._v("Junior developer")]
                  ),
                  _vm._v(" On CitonHub. As a mentor, you can "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "MediumFont"
                      }
                    },
                    [
                      _vm._v(
                        "create a channel to mentor, grow your community and earn"
                      )
                    ]
                  ),
                  _vm._v(".\n      You have "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "MediumFont"
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.remainingPoints) + " experience points (XP)"
                      )
                    ]
                  ),
                  _vm._v(" remaining to become a "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "MediumFont"
                      }
                    },
                    [_vm._v(_vm._s(_vm.nextLevel) + ".")]
                  )
                ]),
                _vm._v(
                  " Share your works with\n     the community to get more experience points. \n\n"
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center col-12 d-flex flex-row py-0 px-1" },
              [
                _c(
                  "div",
                  { staticClass: "col-12 text-center" },
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
                        attrs: { small: "", color: "#3C87CD" },
                        on: { click: _vm.shareProject }
                      },
                      [_vm._v("Share your work")]
                    )
                  ],
                  1
                )
              ]
            )
          ]
        : [
            _c(
              "div",
              {
                staticClass: "py-3 col-12  px-md-3 px-2",
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [
                true
                  ? [
                      _c("span", [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "13px",
                              "font-family": "MediumFont",
                              "text-transform": "capitalize"
                            }
                          },
                          [_vm._v("Congratulations! ")]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "You are now a mentor on CitonHub.\n     Create a channel to mentor, grow your community and earn."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-center col-12 d-flex flex-row py-1 px-1"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "col-12 text-center py-1" },
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
                                  attrs: {
                                    small: "",
                                    loading: _vm.loadingmakeMentor,
                                    color: "#3C87CD"
                                  },
                                  on: { click: _vm.makeMentor }
                                },
                                [_vm._v("Create a channel")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  : undefined
              ],
              2
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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