(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SideBar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/sideBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selectedTab: ''
    };
  },
  mounted: function mounted() {
    this.setPage();
  },
  methods: {
    setPage: function setPage() {
      if (this.$router.currentRoute.path.indexOf('projects') >= 0) {
        this.selectedTab = 'projects';
        this.$root.searchType = 'projects';
      }

      if (this.$router.currentRoute.path.indexOf('channels') >= 0) {
        this.selectedTab = 'channels';
        this.$root.searchType = 'channels';
      }

      if (this.$router.currentRoute.path.indexOf('diary') >= 0) {
        this.selectedTab = 'diary';
        this.$root.searchType = 'diary';
      }

      if (this.$router.currentRoute.path.indexOf('challenges') >= 0) {
        this.selectedTab = 'challenges';
        this.$root.searchType = 'challenges';
      }

      if (this.$router.currentRoute.path.indexOf('hub') >= 0) {
        this.selectedTab = 'hub';
        this.$root.searchType = 'hub';
      }

      if (this.$router.currentRoute.path.indexOf('hub') >= 0) {
        this.selectedTab = 'hub';
        this.$root.searchType = 'hub';
      }

      if (this.$router.currentRoute.path.indexOf('wallet') >= 0) {
        this.selectedTab = 'wallet';
        this.$root.searchType = 'wallet';
      }
    },
    goToPage: function goToPage(page) {
      if (page == 'channels') {
        this.$router.push({
          path: '/channels'
        });
        this.$root.showSideBar = false;
        return;
      }

      if (page == 'hub') {
        this.$router.push({
          path: '/hub'
        });
        this.$root.showSideBar = false;
        return;
      }

      this.$router.push({
        path: '/board/' + page
      });
      this.selectedTab = page;
      this.$root.searchType = page;
      this.$root.showSideBar = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btnStyle[data-v-d58bc8f4]{\r\n    background: #3C87CD;\r\n    color: white;\r\n    border-radius: 30px;\r\n    font-family: MediumFont;\r\n    font-size: 15px;\n}\n.sideBar[data-v-d58bc8f4]{\r\n      cursor: pointer;\n}\n.sideBar[data-v-d58bc8f4]:hover{\r\n      background: #F3F8FC;\r\n      border-right:4px solid #3C87CD !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-12  py-2 px-0" }, [
      _c("div", { staticClass: "row px-0" }, [
        _c(
          "div",
          {
            staticClass: "col-12  px-0 py-1 py-md-2 sideBar",
            style:
              _vm.selectedTab == "hub"
                ? "background:#F3F8FC; border-right:4px solid #3C87CD;"
                : "",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goToPage("hub")
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-4 py-1 text-center" },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "30px" },
                      attrs: {
                        color: _vm.selectedTab == "hub" ? "#3C87CD" : "#A4A4A5"
                      }
                    },
                    [_vm._v("las la-home")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "  py-1 col-8 d-flex",
                  style:
                    _vm.selectedTab == "hub"
                      ? "align-items:center;"
                      : "align-items:center; color:#A4A4A5;"
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "14px"
                      }
                    },
                    [_vm._v("Hub")]
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12  px-0 py-1 py-md-2 mt-1 sideBar",
            style:
              _vm.selectedTab == "channels"
                ? "background:#F3F8FC; border-right:4px solid #3C87CD;"
                : "",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goToPage("channels")
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-4 py-1 text-center" },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "30px" },
                      attrs: {
                        color:
                          _vm.selectedTab == "channels" ? "#3C87CD" : "#A4A4A5"
                      }
                    },
                    [_vm._v("las la-comments")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "  py-1 col-8 d-flex",
                  style:
                    _vm.selectedTab == "channels"
                      ? "align-items:center;"
                      : "align-items:center; color:#A4A4A5;"
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "14px"
                      }
                    },
                    [_vm._v("Channels")]
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12  px-0 py-1 py-md-2 mt-1 sideBar",
            style:
              _vm.selectedTab == "challenges"
                ? "background:#F3F8FC; border-right:4px solid #3C87CD;"
                : "",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goToPage("challenges")
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-4 py-1 text-center" },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "30px" },
                      attrs: {
                        color:
                          _vm.selectedTab == "challenges"
                            ? "#3C87CD"
                            : "#A4A4A5"
                      }
                    },
                    [_vm._v("las la-trophy")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "  py-1 col-8 d-flex",
                  style:
                    _vm.selectedTab == "challenges"
                      ? "align-items:center;"
                      : "align-items:center; color:#A4A4A5;"
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "14px"
                      }
                    },
                    [_vm._v("Challenges")]
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12  px-0 py-1 py-md-2 sideBar mt-1 ",
            style:
              _vm.selectedTab == "projects"
                ? "background:#F3F8FC; border-right:4px solid #3C87CD;"
                : "",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goToPage("projects")
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-4 py-1 text-center" },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "30px" },
                      attrs: {
                        color:
                          _vm.selectedTab == "projects" ? "#3C87CD" : "#A4A4A5"
                      }
                    },
                    [_vm._v("las la-laptop-code")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "  py-1 col-8 d-flex",
                  style:
                    _vm.selectedTab == "projects"
                      ? "align-items:center;"
                      : "align-items:center; color:#A4A4A5;"
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "14px"
                      }
                    },
                    [_vm._v("Projects")]
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12  px-0 py-1 py-md-2 mt-1 sideBar",
            style:
              _vm.selectedTab == "diary"
                ? "background:#F3F8FC; border-right:4px solid #3C87CD;"
                : "",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goToPage("diary")
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-4 py-1 text-center" },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "30px" },
                      attrs: {
                        color:
                          _vm.selectedTab == "diary" ? "#3C87CD" : "#A4A4A5"
                      }
                    },
                    [_vm._v("mdi-book-multiple-outline")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "  py-1 col-8 d-flex",
                  style:
                    _vm.selectedTab == "diary"
                      ? "align-items:center;"
                      : "align-items:center; color:#A4A4A5;"
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "14px"
                      }
                    },
                    [_vm._v("Diary")]
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12  px-0 py-1 py-md-2 mt-1 sideBar",
            style:
              _vm.selectedTab == "wallet"
                ? "background:#F3F8FC; border-right:4px solid #3C87CD;"
                : "",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goToPage("wallet")
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-4 py-1 text-center" },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "30px" },
                      attrs: {
                        color:
                          _vm.selectedTab == "wallet" ? "#3C87CD" : "#A4A4A5"
                      }
                    },
                    [_vm._v("las la-wallet")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "  py-1 col-8 d-flex",
                  style:
                    _vm.selectedTab == "wallet"
                      ? "align-items:center;"
                      : "align-items:center; color:#A4A4A5;"
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "14px"
                      }
                    },
                    [_vm._v("Wallet")]
                  )
                ]
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-12 px-0 py-2 mt-2",
        staticStyle: { position: "absolute", bottom: "0%", left: "0" }
      },
      [
        _c("div", { staticClass: "col-12 px-0  mb-1 py-1 py-md-2 sideBar" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-4 py-1 text-center" },
              [
                _c(
                  "v-icon",
                  {
                    staticStyle: { "font-size": "30px" },
                    attrs: { color: "#A4A4A5" }
                  },
                  [_vm._v("las la-cog")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 px-0 sideBar py-1 py-md-2",
            style:
              _vm.selectedTab == "feedback"
                ? "background:#F3F8FC; border-right:4px solid #3C87CD;"
                : "",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.goToPage("feedback")
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-4 py-1 text-center" },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "30px" },
                      attrs: {
                        color:
                          _vm.selectedTab == "feedback" ? "#3C87CD" : "#A4A4A5"
                      }
                    },
                    [_vm._v("las la-question-circle")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "  py-1 col-8 d-flex",
                  style:
                    _vm.selectedTab == "feedback"
                      ? "align-items:center;"
                      : "align-items:center; color:#A4A4A5;"
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "14px"
                      }
                    },
                    [_vm._v("Feedback")]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12  py-2 mb-lg-3" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 text-center px-0 d-lg-block d-none" },
          [
            _c("img", {
              staticClass: "d-inline-block mr-1 mb-2",
              attrs: {
                alt: "citonhub logo",
                src: "/imgs/logo.png",
                height: "38px"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-inline-block mt-2",
                staticStyle: {
                  "font-family": "HeaderFont",
                  "font-size": "19px"
                }
              },
              [_vm._v("CitonHub")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 text-center px-0 d-block d-lg-none" },
          [
            _c("img", {
              staticClass: "d-inline-block mr-1 mb-2",
              attrs: {
                alt: "citonhub logo",
                src: "/imgs/logo.png",
                height: "30px"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-inline-block mt-2",
                staticStyle: {
                  "font-family": "HeaderFont",
                  "font-size": "15px"
                }
              },
              [_vm._v("CitonHub")]
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "  py-1 col-8 d-flex",
        staticStyle: { "align-items": "center", color: "#A4A4A5" }
      },
      [
        _c(
          "div",
          { staticStyle: { "font-family": "MediumFont", "font-size": "14px" } },
          [_vm._v("Setings")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/sideBar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/dashboard/sideBar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sideBar_vue_vue_type_template_id_d58bc8f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true& */ "./resources/js/components/dashboard/sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true&");
/* harmony import */ var _sideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideBar.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/sideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _sideBar_vue_vue_type_style_index_0_id_d58bc8f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css& */ "./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sideBar_vue_vue_type_template_id_d58bc8f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sideBar_vue_vue_type_template_id_d58bc8f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d58bc8f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/sideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/sideBar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/dashboard/sideBar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_style_index_0_id_d58bc8f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=style&index=0&id=d58bc8f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_style_index_0_id_d58bc8f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_style_index_0_id_d58bc8f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_style_index_0_id_d58bc8f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_style_index_0_id_d58bc8f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_style_index_0_id_d58bc8f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_template_id_d58bc8f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/sideBar.vue?vue&type=template&id=d58bc8f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_template_id_d58bc8f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sideBar_vue_vue_type_template_id_d58bc8f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);