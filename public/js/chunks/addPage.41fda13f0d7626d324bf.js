(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      imageUrl: '',
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-node-js'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-php'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square'
      }, {
        name: 'PHP',
        icon: 'lab la-php'
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python'
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python'
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c'
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp'
      }, {
        name: 'Java',
        icon: 'lab la-java'
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp'
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang'
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin'
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran'
      }, {
        name: 'Perl',
        icon: 'las la-code'
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r'
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby'
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go'
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell'
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua'
      }, {
        name: 'Pascal',
        icon: 'las la-code'
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript'
      }, {
        name: 'Rust',
        icon: 'las la-code'
      }, {
        name: 'Swift',
        icon: 'lab la-swift'
      }, {
        name: 'Scala',
        icon: 'las la-code'
      }],
      projects: ['Quizapp', 'BookFinder'],
      addlink: false,
      select: true,
      addprojectlink: false
    };
  },
  methods: {
    displayTab: function displayTab() {
      this.addlink = !this.addlink;
      this.select = !this.select;
    },
    displayTab2: function displayTab2() {
      this.addprojectlink = !this.addprojectlink;
      this.select = !this.select;
    }
  },
  created: function created() {
    axios.post('/save-hub-post', data).then(function (response) {
      if (response.status == 201) {
        console.log(response);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "row",
      staticStyle: { "font-family": "BodyFont", background: "transparent" }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left",
          staticStyle: {
            height: "auto !important",
            "font-family": "BodyFont",
            background: "transparent !important"
          }
        },
        [
          _c("v-app", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: " col-12 py-1 my-0 px-2",
                staticStyle: { "font-family": "BodyFont" }
              },
              [
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    rounded: "",
                    label: "Project Title",
                    filled: "",
                    counter: "80",
                    placeholder: "title",
                    "persistent-hint": "",
                    hint: "What are you building?",
                    color: "#3C87CD"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: " col-12 py-1 my-0 px-2",
                staticStyle: { "font-family": "BodyFont" }
              },
              [
                _c("v-combobox", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    rounded: "",
                    filled: "",
                    label: "Select project or Paste project link",
                    placeholder: "select",
                    "persistent-hint": "",
                    color: "#3C87CD"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 py-1 my-0 mt-n3 px-2 pl-3" },
              [
                _c("span", { staticStyle: { "font-size": "13px" } }, [
                  _vm._v("Upload Thumbnail")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "mx-1",
                    staticStyle: { "font-size": "12px", color: "grey" }
                  },
                  [_vm._v("(give your project an identity)")]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "v-sheet",
                  {
                    staticClass: "py-0  px-0 mt-2 sheetbackImg",
                    style:
                      "background-image:url(" +
                      _vm.imageUrl +
                      ");border-radius:10px;cursor:pointer;background-size:contain;",
                    attrs: {
                      elevation: "0",
                      height: "100",
                      width: "120",
                      color: "whitesmoke"
                    }
                  },
                  [
                    _c("input", {
                      ref: "settingsimage",
                      staticStyle: {
                        opacity: "0",
                        width: "100%",
                        height: "10px",
                        overflow: "hidden",
                        position: "absolute",
                        "z-index": "10"
                      },
                      attrs: {
                        type: "file",
                        id: "settingsimage",
                        accept: "image/x-png,image/jpeg,image/jpg"
                      },
                      on: { change: _vm.crophandler }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-sheet",
                      {
                        staticClass: "py-auto px-auto d-flex",
                        staticStyle: {
                          "border-radius": "10px",
                          background: "#c5c5c5"
                        },
                        attrs: { elevation: "0", height: "100%", width: "100%" }
                      },
                      [
                        _c("v-icon", { staticClass: "mx-auto white-text" }, [
                          _vm._v("mdi-camera-plus")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "mt-3",
                    staticStyle: { "font-size": "13px", color: "grey" }
                  },
                  [_vm._v("Or select from defaults")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex flex-row mt-3" }, [
                  _c("div", {
                    staticClass: "mr-2",
                    staticStyle: {
                      "border-radius": "10px",
                      height: "60px",
                      width: "60px",
                      "background-color": "#c5c5c5",
                      "background-image": "url(/imgs/imgproj3.jpeg)",
                      "background-size": "cover",
                      "background-repeat": "no-repeat",
                      border: "1px solid #c5c5c5"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mr-2",
                    staticStyle: {
                      "border-radius": "10px",
                      height: "60px",
                      width: "60px",
                      "background-color": "#c5c5c5",
                      "background-image": "url(/imgs/imgproj2.jpeg)",
                      "background-size": "cover",
                      "background-repeat": "no-repeat",
                      border: "1px solid #c5c5c5"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mr-2",
                    staticStyle: {
                      "border-radius": "10px",
                      height: "60px",
                      width: "60px",
                      "background-color": "#c5c5c5",
                      "background-image": "url(/imgs/imgproj1.jpeg)",
                      "background-size": "cover",
                      "background-repeat": "no-repeat",
                      border: "1px solid #c5c5c5"
                    }
                  })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 py-1" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: " col-12 py-1 mt-5 my-0 px-2 pt-3",
                staticStyle: { height: "auto", "font-family": "BodyFont" }
              },
              [
                _c("v-combobox", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    dense: "",
                    label: "Tags",
                    counter: "10",
                    placeholder: "add tags",
                    hint: "e.g php, nodejs, html5",
                    "persistent-hint": "",
                    chips: "",
                    multiple: "",
                    rounded: "",
                    filled: "",
                    "item-value": "name",
                    "item-text": "name",
                    items: _vm.languageIcon,
                    color: "#3C87CD"
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
                                "\n           \n            " +
                                  _vm._s(data.item.name) +
                                  "\n          "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 py-4" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 py-1 pt-3 my-0 px-2" },
              [
                _c("v-textarea", {
                  staticStyle: { "font-size": "14px" },
                  attrs: {
                    filled: "",
                    height: "100px",
                    counter: "100",
                    placeholder: "A short description of your project"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: " text-center col-12 py-1 mt-4 my-0 px-2" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont",
                      "font-weight": "bolder",
                      "text-transform": "none",
                      color: "white"
                    },
                    attrs: { medium: "", rounded: "", color: "#3C87CD" }
                  },
                  [_vm._v("\n             Send\n             ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Hub/AddProjectPage.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Hub/AddProjectPage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProjectPage.vue?vue&type=template&id=634100e8& */ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&");
/* harmony import */ var _AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProjectPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/AddProjectPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProjectPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProjectPage.vue?vue&type=template&id=634100e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);