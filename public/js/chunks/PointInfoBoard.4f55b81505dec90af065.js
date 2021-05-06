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
      languageIcon: ['Javascript', 'NodeJs', 'PHP', 'VueJs', 'ReactJs', 'Python', 'C', 'C++', 'Java', 'C#', 'Erlang', 'Kotlin', 'Fortran', 'Perl', 'R', 'Ruby', 'Go', 'Hashkell', 'Lua', 'Pascal', 'Typescript', 'Rust', 'Swift', 'Scala']
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
    makeMentor: function makeMentor() {
      var _this = this;

      this.loadingmakeMentor = true;
      axios.post('/make-mentor', {
        language: this.languages
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.authProfile.is_mentor = true;
          _this.loadingmakeMentor = false;

          if (_this.$root.fromMentorPage) {
            _this.$root.MentorPageComponent.getMentors();
          }
        }
      })["catch"](function (error) {
        _this.alertComponent.showAlert('Oops!', 'Something went wrong, please try again', 'error');

        _this.loadingmakeMentor = false;
      });
    },
    shareProject: function shareProject() {
      this.$root.showPointDetailsInfo = false;
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
                    [_vm._v("Bronze citon")]
                  ),
                  _vm._v(". As a mentor, you can "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "MediumFont"
                      }
                    },
                    [_vm._v("create a channel to mentor and earn")]
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
                _vm.that.$root.authProfile.is_mentor
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
                          "You are now a mentor on CitonHub.\n     Create a channel to start "
                        ),
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
                              "mentoring and earn from donation, subscription or paid sessions"
                            )
                          ]
                        ),
                        _vm._v(".")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-center col-12 d-flex flex-row py-1 px-1 mt-2"
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
                                  on: { click: _vm.createChannel }
                                },
                                [_vm._v("Create a channel")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  : [
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
                        _vm._v(",")
                      ]),
                      _c("br"),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "mb-2",
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "MediumFont"
                          }
                        },
                        [
                          _vm._v(
                            "Which programming languages would you like to help others in?"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-combobox", {
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          color: "#3C87CD",
                          items: _vm.languageIcon,
                          dense: "",
                          outlined: "",
                          multiple: "",
                          placeholder: "select..."
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "selection",
                            fn: function(data) {
                              return [
                                _c(
                                  "v-chip",
                                  _vm._b(
                                    {
                                      key: JSON.stringify(data.item),
                                      staticClass: "my-1",
                                      staticStyle: {
                                        "font-size": "12px",
                                        "font-family": "BodyFont"
                                      },
                                      attrs: {
                                        "input-value": data.selected,
                                        color: "#3C87CD",
                                        dense: "",
                                        outlined: "",
                                        disabled: data.disabled
                                      }
                                    },
                                    "v-chip",
                                    data.attrs,
                                    false
                                  ),
                                  [
                                    _vm._v(
                                      "\n          \n           " +
                                        _vm._s(data.item) +
                                        "\n         "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.languages,
                          callback: function($$v) {
                            _vm.languages = $$v
                          },
                          expression: "languages"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-center col-12 d-flex flex-row py-0 px-1"
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
                                    disabled: _vm.languages.length == 0,
                                    loading: _vm.loadingmakeMentor,
                                    color: "#3C87CD"
                                  },
                                  on: { click: _vm.makeMentor }
                                },
                                [_vm._v("Done")]
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