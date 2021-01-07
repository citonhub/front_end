(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DiaryBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/Board.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/Board.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingSaveNote: false
    };
  },
  mounted: function mounted() {
    this.$root.diaryBoardComponent = this;
  },
  methods: {
    goBack: function goBack() {
      if (this.$root.AddModalIsUp) {
        this.$root.AddModalIsUp = false;
        return;
      }

      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    saveNote: function saveNote() {
      var _this = this;

      this.loadingSaveNote = true;
      var pagesArray = [];
      this.$root.noteContent.pages.forEach(function (page) {
        var NewData = {
          name: page.name,
          slug: page.slug
        };
        pagesArray.push(NewData);
      });
      axios.post('/update-diary-data', {
        note: this.$root.noteContent.note,
        keywords: this.$root.noteContent.keywords,
        pages: pagesArray,
        bot_id: this.$route.params.diary_id
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.chatComponent.showAlert('Done!', 'Your diary has been updated', 'success');
        }
      })["catch"](function (error) {
        _this.$root.chatComponent.showAlert('Oops!', 'Unable to update, please try again', 'error');

        _this.loadingSaveNote = false;
      });
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'question') {}
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/Board.vue?vue&type=template&id=01bfff7f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/Board.vue?vue&type=template&id=01bfff7f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "col-lg-10 offset-lg-2 py-0 px-0",
        staticStyle: {
          position: "fixed",
          height: "88%",
          left: "0",
          top: "10%",
          "z-index": "99999999999999",
          "overflow-y": "auto",
          background: "#F5F5FB"
        }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "col-lg-10 offset-lg-1 py-1 mb-0 col-md-10 offset-md-1 px-0 d-md-block d-none py-0 pb-3 px-0 ",
            staticStyle: {
              position: "absolute",
              left: "0%",
              top: "0%",
              height: "100%",
              background: "#ffffff",
              border: "1px solid #c5c5c5",
              "border-radius": "6px",
              "overflow-y": "hidden",
              "overflow-x": "hidden"
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row ",
                staticStyle: {
                  "z-index": "99999999999999999",
                  position: "sticky",
                  background: "white",
                  top: "-1%",
                  "border-bottom": "1px solid #c5c5c5",
                  "align-items": "center"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "px-1 col-3 py-0" },
                  [
                    _c(
                      "v-btn",
                      { attrs: { icon: "" }, on: { click: _vm.goBack } },
                      [_c("v-icon", [_vm._v("mdi mdi-arrow-left")])],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 py-0 text-center" }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        "font-family": "MediumFont"
                      }
                    },
                    [_vm._v(" " + _vm._s(this.$root.selectedDiary.name))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-3 py-0 px-1 text-right" },
                  [
                    this.$router.currentRoute.path.indexOf("edit-note") >= 0
                      ? [
                          _c(
                            "v-btn",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                "font-weight": "bolder",
                                color: "white",
                                "font-family": "MediumFont"
                              },
                              attrs: {
                                small: "",
                                rounded: "",
                                color: "#3C87CD"
                              },
                              on: { click: _vm.saveNote }
                            },
                            [
                              [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "white",
                                      "text-transform": "none"
                                    }
                                  },
                                  [_vm._v("Save")]
                                )
                              ]
                            ],
                            2
                          )
                        ]
                      : [
                          _c(
                            "v-btn",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                "font-weight": "bolder",
                                color: "white",
                                "font-family": "MediumFont"
                              },
                              attrs: {
                                small: "",
                                rounded: "",
                                color: "#3C87CD"
                              }
                            },
                            [
                              [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "white",
                                      "text-transform": "none"
                                    }
                                  },
                                  [_vm._v("Update")]
                                )
                              ]
                            ],
                            2
                          )
                        ]
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c("router-view")
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-12 py-0 mb-0  px-0 d-md-none d-block py-0 px-0 ",
        staticStyle: {
          position: "fixed",
          left: "0%",
          top: "0%",
          height: "100%",
          "z-index": "999999999999999999",
          background: "#ffffff",
          "overflow-y": "hidden",
          "overflow-x": "hidden"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row ",
            staticStyle: {
              position: "sticky",
              background: "white",
              top: "-1%",
              "border-bottom": "1px solid #c5c5c5",
              "align-items": "center"
            }
          },
          [
            _c(
              "div",
              { staticClass: "px-1 col-3 py-0" },
              [
                _c(
                  "v-btn",
                  { attrs: { icon: "" }, on: { click: _vm.goBack } },
                  [_c("v-icon", [_vm._v("mdi mdi-arrow-left")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-6 py-0 text-center" }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "13px",
                    "font-family": "MediumFont"
                  }
                },
                [_vm._v(" " + _vm._s(this.$root.selectedDiary.name))]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-3 py-0 px-1 text-right" },
              [
                this.$router.currentRoute.path.indexOf("edit-note") >= 0
                  ? [
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
                          on: { click: _vm.saveNote }
                        },
                        [
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "white",
                                  "text-transform": "none"
                                }
                              },
                              [_vm._v("Save")]
                            )
                          ]
                        ],
                        2
                      )
                    ]
                  : [
                      _c(
                        "v-btn",
                        {
                          staticStyle: {
                            "font-size": "12px",
                            "font-weight": "bolder",
                            color: "white",
                            "font-family": "MediumFont"
                          },
                          attrs: { small: "", rounded: "", color: "#3C87CD" }
                        },
                        [
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "white",
                                  "text-transform": "none"
                                }
                              },
                              [_vm._v("Update")]
                            )
                          ]
                        ],
                        2
                      )
                    ]
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("router-view")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/diary/Board.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/diary/Board.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_vue_vue_type_template_id_01bfff7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=01bfff7f&scoped=true& */ "./resources/js/components/diary/Board.vue?vue&type=template&id=01bfff7f&scoped=true&");
/* harmony import */ var _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js& */ "./resources/js/components/diary/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Board_vue_vue_type_template_id_01bfff7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Board_vue_vue_type_template_id_01bfff7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01bfff7f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/diary/Board.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/diary/Board.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/diary/Board.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/diary/Board.vue?vue&type=template&id=01bfff7f&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/diary/Board.vue?vue&type=template&id=01bfff7f&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_01bfff7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=template&id=01bfff7f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/Board.vue?vue&type=template&id=01bfff7f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_01bfff7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_01bfff7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);