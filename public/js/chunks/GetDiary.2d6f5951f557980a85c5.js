(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GetDiary"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      diaryName: '',
      channel: '',
      description: '',
      imageUrl: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.showTopBar = false;
    axios.get('/fetch-user-channels-diary').then(function (response) {
      if (response.status == 200) {
        _this.channeList = response.data;
      }
    })["catch"](function (error) {});
  },
  methods: {
    goback: function goback() {
      this.$router.push({
        path: '/board/diary/list'
      });
    },
    createDiary: function createDiary() {
      axios.post('/create-diary', {
        name: this.name,
        description: this.description
      }).then(function (response) {
        if (response.status == 200) {
          console.log('posted');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    {
      staticClass: "px-0",
      staticStyle: { background: "transparent", "font-family": "BodyFont" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top",
          staticStyle: {
            position: "sticky",
            "z-index": "9999999999",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-6 py-0 my-0" }, [
              _c(
                "h5",
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.goback } },
                    [_c("v-icon", [_vm._v("las la-arrow-left")])],
                    1
                  ),
                  _vm._v(" Create a diary")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6 py-0 my-0 text-right" },
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
                    on: { click: _vm.createDiary }
                  },
                  [_vm._v("\n             Done\n           ")]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: " px-0 col-12 pb-0 pt-2 d-md-none d-block fixed-top",
          staticStyle: {
            position: "sticky",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row py-0" }, [
            _c("div", { staticClass: "col-8 py-0 my-0" }, [
              _c(
                "h6",
                { staticStyle: { "font-size": "17px" } },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.goback } },
                    [_c("v-icon", [_vm._v("las la-arrow-left")])],
                    1
                  ),
                  _vm._v("Create a diary")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-4 py-0 my-0 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "font-weight": "bolder",
                      "text-transform": "none",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: { small: "", rounded: "", color: "#3C87CD" },
                    on: { click: _vm.createDiary }
                  },
                  [_vm._v("\n             Done\n           ")]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 px-0" }, [
        _c(
          "div",
          {
            staticClass: "col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-2"
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-8  py-1 my-0 px-2" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "mb-1",
                      staticStyle: { "font-size": "14px" }
                    },
                    [_vm._v("1.Name your diary")]
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      label: "Diary name",
                      counter: "60",
                      "persistent-hint": "",
                      "prepend-inner-icon": "las la-book",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.diaryName,
                      callback: function($$v) {
                        _vm.diaryName = $$v
                      },
                      expression: "diaryName"
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
                  _c(
                    "div",
                    {
                      staticClass: "my-2",
                      staticStyle: { "font-size": "14px" }
                    },
                    [_vm._v("2.Upload your diary photo")]
                  ),
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
                        }
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
                          attrs: {
                            elevation: "0",
                            height: "100%",
                            width: "100%"
                          }
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
                        "background-image": "url(/imgs/profile/pet1.png)",
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
              _c("div", { staticClass: " col-lg-12 py-1 my-0 px-2" }, [
                _c(
                  "div",
                  { staticClass: "my-2", staticStyle: { "font-size": "14px" } },
                  [
                    _vm._v("3.Select a channel "),
                    _c(
                      "span",
                      { staticStyle: { "font-size": "12px", color: "grey" } },
                      [_vm._v("(optional)")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-8 px-0" },
                  [
                    _c("v-select", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        dense: "",
                        label: "Channel",
                        counter: "20",
                        placeholder: "select...",
                        "persistent-hint": "",
                        chips: "",
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
                                    "\n             \n              " +
                                      _vm._s(data.item.name) +
                                      "\n            "
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.channel,
                        callback: function($$v) {
                          _vm.channel = $$v
                        },
                        expression: "channel"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-8  py-1 my-0 px-2" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "mb-3",
                      staticStyle: { "font-size": "14px" }
                    },
                    [_vm._v("4.Tell everyone about your new diary")]
                  ),
                  _vm._v(" "),
                  _c("v-textarea", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      placeholder: "What is this diary for?",
                      counter: "100",
                      outlined: "",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.description,
                      callback: function($$v) {
                        _vm.description = $$v
                      },
                      expression: "description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" })
            ])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/diary/GetDiary.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/diary/GetDiary.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetDiary.vue?vue&type=template&id=03478184&scoped=true& */ "./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&");
/* harmony import */ var _GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetDiary.vue?vue&type=script&lang=js& */ "./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03478184",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/diary/GetDiary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GetDiary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GetDiary.vue?vue&type=template&id=03478184&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);