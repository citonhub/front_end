(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Follow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getInterests();
    this.$root.followDiariesLoaded = true;
  },
  data: function data() {
    return {
      diaries: [],
      loading: false
    };
  },
  methods: {
    openChatList: function openChatList() {
      this.$router.push({
        path: '/channels'
      });
    },
    canProceed: function canProceed() {
      if (this.$root.suggestedDiaries.length == 0) {
        return true;
      }

      var followedDiary = this.$root.suggestedDiaries.filter(function (diary) {
        return diary.following == true;
      });

      if (followedDiary.length >= 3) {
        return false;
      } else {
        return true;
      }
    },
    imageStyle: function imageStyle(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:10px;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:10px;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/thumbnails/' + imgLink + ');';
        return _styleString;
      }
    },
    getInterests: function getInterests() {
      var _this = this;

      this.loading = true;
      axios.post('/save-user-interest').then(function (response) {
        if (response.status == 200) {
          _this.$root.suggestedDiaries = response.data.suggested_diaries;

          _this.$root.suggestedDiaries.map(function (diary) {
            diary.following = false;
          });

          _this.$root.suggestedDiaries.sort(function (a, b) {
            return b.followers - a.followers;
          });

          _this.loading = false;
        } else {
          _this.$root.chatComponent.showAlert('Oops!', 'Something went wrong, please try again', 'error');
        }
      });
    },
    fetchDiaries: function fetchDiaries() {
      this.diaries = this.$root.suggestedDiaries;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scroller[data-v-ef9ab554]::-webkit-scrollbar {\n  width: 5px;\n}\n.scroller[data-v-ef9ab554]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true& ***!
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
      staticClass: "col-lg-5  py-0 col-md-8 px-0",
      staticStyle: {
        height: "90%",
        "overflow-y": "hidden",
        "overflow-x": "hidden"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "text-center col-12 py-1 py-md-2 pt-2 fixed-top",
          staticStyle: { position: "sticky", background: "whitesmoke" }
        },
        [
          _c("h5", { staticClass: "text-center d-md-block d-none" }, [
            _vm._v("Follow diaries of your interest")
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: " text-center d-block d-md-none" }, [
            _vm._v("Follow diaries of your interest")
          ]),
          _vm._v(" "),
          _c("span", { staticStyle: { "font-size": "13px" } }, [
            _vm._v("Follow at least three")
          ])
        ]
      ),
      _vm._v(" "),
      !_vm.loading
        ? [
            _c(
              "div",
              {
                staticClass: "scroller",
                staticStyle: {
                  position: "absolute",
                  width: "100%",
                  height: "96%",
                  "overflow-y": "auto",
                  "overflow-x": "hidden",
                  "padding-bottom": "70px"
                }
              },
              _vm._l(this.$root.suggestedDiaries, function(diary, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "col-12 px-1 pl-2 d-flex flex-row py-1",
                    staticStyle: {
                      "align-items": "center",
                      height: "auto",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c("div", {
                      staticClass: " mr-2 py-3",
                      style: _vm.imageStyle(45, diary)
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "px-0 py-3",
                        staticStyle: {
                          width: "85%",
                          "border-bottom": "1px solid #e6e6e6"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row flex-wrap",
                            staticStyle: { "align-items": "center" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "px-0 py-0 my-0 col-12",
                                staticStyle: {
                                  "white-space": "nowrap",
                                  overflow: "hidden",
                                  "text-overflow": "ellipsis"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-size": "14px",
                                      "font-family": "BodyFont"
                                    }
                                  },
                                  [_vm._v(_vm._s(diary.name))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: " d-flex flex-row ",
                                staticStyle: {
                                  "align-items": "center",
                                  width: "100%"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: " px-0 py-0 my-0 pr-1  ",
                                    staticStyle: {
                                      width: "100%",
                                      "white-space": "nowrap",
                                      overflow: "hidden",
                                      "text-overflow": "ellipsis",
                                      "font-size": "13px",
                                      color: "grey",
                                      "font-family": "BodyFont"
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(diary.description))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: " px-1 py-0  ml-auto " },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "mx-2 d-inline-block",
                                        staticStyle: {
                                          color: "white",
                                          "text-transform": "lowercase",
                                          "font-family": "BodyFont",
                                          "font-size": "12px"
                                        },
                                        attrs: {
                                          "x-small": "",
                                          color: "#3C87CD",
                                          rounded: ""
                                        }
                                      },
                                      [_vm._v("follow")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            )
          ]
        : [
            _c(
              "div",
              {
                staticClass: "d-flex",
                staticStyle: {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  "align-items": "center",
                  "justify-content": "center"
                }
              },
              [
                _c("v-progress-circular", {
                  attrs: {
                    color: "#3C87CD",
                    indeterminate: "",
                    width: "3",
                    size: "28"
                  }
                })
              ],
              1
            )
          ],
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "text-center py-1 py-md-2 col-12 fixed-bottom",
          staticStyle: { position: "absolute", background: "whitesmoke" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 py-1 text-center" },
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
                    attrs: {
                      small: "",
                      color: "#3C87CD",
                      disabled: _vm.canProceed()
                    }
                  },
                  [_vm._v("Done")]
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/FollowDiary.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/auth/FollowDiary.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FollowDiary_vue_vue_type_template_id_ef9ab554_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true& */ "./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true&");
/* harmony import */ var _FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FollowDiary.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FollowDiary_vue_vue_type_style_index_0_id_ef9ab554_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css& */ "./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FollowDiary_vue_vue_type_template_id_ef9ab554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FollowDiary_vue_vue_type_template_id_ef9ab554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef9ab554",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/FollowDiary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowDiary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_style_index_0_id_ef9ab554_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=style&index=0&id=ef9ab554&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_style_index_0_id_ef9ab554_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_style_index_0_id_ef9ab554_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_style_index_0_id_ef9ab554_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_style_index_0_id_ef9ab554_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_style_index_0_id_ef9ab554_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_template_id_ef9ab554_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/FollowDiary.vue?vue&type=template&id=ef9ab554&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_template_id_ef9ab554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FollowDiary_vue_vue_type_template_id_ef9ab554_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);