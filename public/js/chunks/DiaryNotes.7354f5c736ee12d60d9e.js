(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DiaryNotes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/DiaryNotes.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      loading: false,
      diaryNotes: null
    };
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
    this.fetchDiaryNote();
  },
  methods: {
    selectDiaryNote: function selectDiaryNote(note) {
      if (this.$root.channelBottomComp) {
        this.$root.channelBottomComp.contentInWord = note.patterns[0].pattern_content;
        this.$root.channelBottomComp.input = note.patterns[0].pattern_content;
        this.$root.channelBottomComp.sendMessage(false);
        this.clearTracker(note);
      }

      this.close();
    },
    fetchDiaryNote: function fetchDiaryNote() {
      var _this = this;

      this.loading = true;
      var storedDiaryNotes = this.$root.getLocalStore('diary_notes_' + this.$root.selectedSpace.space_id + this.$root.username);
      storedDiaryNotes.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          finalResult = finalResult.diary_notes;
          _this.diaryNotes = finalResult;
          _this.$root.diaryNotes = finalResult;
          _this.loading = false;

          _this.checkForNewNotes();
        } else {
          axios.get('/fetch-diary-notes-' + _this.$root.selectedSpace.bot_data.bot_id).then(function (response) {
            if (response.status == 200) {
              _this.$root.LocalStore('diary_notes_' + _this.$root.selectedSpace.space_id + _this.$root.username, response.data);

              var _finalResult = response.data.diary_notes;
              _this.diaryNotes = _finalResult;
              _this.$root.diaryNotes = _finalResult;
              _this.loading = false;
            }
          })["catch"](function (error) {
            _this.loading = false;
          });
        }
      });
    },
    clearTracker: function clearTracker(note) {
      var _this2 = this;

      axios.post('/clear-update-track', {
        space_id: this.$root.selectedSpace.space_id,
        note_id: note.tag_unique_id
      }).then(function (response) {
        if (response.status == 200) {
          _this2.$root.diaryNotes.map(function (eachnote) {
            if (note.tag_unique_id == eachnote.tag_unique_id) {
              note.changes = 0;
              note.is_new = false;
            }
          });

          _this2.$root.LocalStore('diary_notes_' + _this2.$root.selectedSpace.space_id + _this2.$root.username, _this2.$root.diaryNotes);
        }
      })["catch"](function (error) {});
    },
    checkForNewNotes: function checkForNewNotes() {
      var _this3 = this;

      axios.get('/fetch-diary-notes-' + this.$root.selectedSpace.bot_data.bot_id).then(function (response) {
        if (response.status == 200) {
          _this3.$root.LocalStore('diary_notes_' + _this3.$root.selectedSpace.space_id + _this3.$root.username, response.data);

          var finalResult = response.data.diary_notes;
          _this3.diaryNotes = finalResult;
          _this3.$root.diaryNotes = finalResult;
        }
      })["catch"](function (error) {});
    },
    close: function close() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatInnerSideBar = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.messagesBadges[data-v-d354eec6]{\n    \n    color: #ffffff;\n    background: #3C87CD;\n    font-size: 11px;\n    font-family: BodyFont;\n    font-weight: bolder;\n    align-items: center;\n    justify-content: center;\n    height:20px;\n    width:20px;\n    border-radius:50%;\n}\n.messageBox[data-v-d354eec6]:hover{\n    background:whitesmoke;\n    cursor: pointer;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true& ***!
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
  return _c("div", { staticStyle: { background: "transparent" } }, [
    _c("div", { staticClass: "col-12 py-1 my-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
            staticStyle: {
              position: "sticky",
              background: "white",
              top: "0%",
              "border-bottom": "2px solid #c5c5c5",
              "align-items": "center"
            }
          },
          [
            _c(
              "div",
              { staticClass: " mr-1 col-2 py-0 px-1" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.close($event)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("mdi mdi-close")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 py-0 mr-1 px-1 text-right" })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 " },
          [
            _vm.diaryNotes == null
              ? _c(
                  "div",
                  { staticClass: "col-12 text-center" },
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
              : _vm._e(),
            _vm._v(" "),
            _vm.diaryNotes != null
              ? [
                  _vm.diaryNotes.length == 0
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 d-flex flex-column text-center"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "13px",
                                color: "gray"
                              }
                            },
                            [_vm._v(" No notes yet")]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.diaryNotes.length > 0
                    ? _c(
                        "div",
                        { staticClass: "row px-2" },
                        _vm._l(_vm.diaryNotes, function(note, index) {
                          return _c(
                            "v-card",
                            {
                              key: index,
                              staticClass: "col-12 py-2 px-1 messageBox",
                              staticStyle: {
                                "border-bottom": "1px solid #cccccc"
                              },
                              attrs: {
                                flat: "",
                                color: note.is_new ? "#E1F0FC" : "",
                                tile: ""
                              },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.selectDiaryNote(note)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row py-0 my-0" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-2 py-0 my-0" },
                                  [
                                    _c(
                                      "v-icon",
                                      { staticStyle: { "font-size": "20px" } },
                                      [_vm._v("lar la-clipboard")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-8 py-0 my-0 text-center"
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          "font-size": "13px",
                                          color: "#1e4148",
                                          "font-family": "MediumFont"
                                        }
                                      },
                                      [_vm._v(" " + _vm._s(note.tag_name))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-2 py-0 my-0 text-center d-flex",
                                    staticStyle: { "align-items": "center" }
                                  },
                                  [
                                    note.changes > 0
                                      ? _c(
                                          "span",
                                          {
                                            staticClass:
                                              "messagesBadges d-flex ml-lg-0 ml-0"
                                          },
                                          [_vm._v(_vm._s(note.changes))]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ])
                            ]
                          )
                        }),
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 py-0 px-0 text-center" }, [
      _c(
        "span",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("Diary Notes")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/DiaryNotes.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/DiaryNotes.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiaryNotes_vue_vue_type_template_id_d354eec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true& */ "./resources/js/components/chats/DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true&");
/* harmony import */ var _DiaryNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiaryNotes.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/DiaryNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DiaryNotes_vue_vue_type_style_index_0_id_d354eec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css& */ "./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DiaryNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiaryNotes_vue_vue_type_template_id_d354eec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiaryNotes_vue_vue_type_template_id_d354eec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d354eec6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/DiaryNotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/DiaryNotes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chats/DiaryNotes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DiaryNotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_style_index_0_id_d354eec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=style&index=0&id=d354eec6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_style_index_0_id_d354eec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_style_index_0_id_d354eec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_style_index_0_id_d354eec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_style_index_0_id_d354eec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_style_index_0_id_d354eec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chats/DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_template_id_d354eec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/DiaryNotes.vue?vue&type=template&id=d354eec6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_template_id_d354eec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiaryNotes_vue_vue_type_template_id_d354eec6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);