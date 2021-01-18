(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectPanel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectPanel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
var panelSide = function panelSide() {
  return __webpack_require__.e(/*! import() | panel-side */ "panel-side").then(__webpack_require__.bind(null, /*! ./PanelSide.vue */ "./resources/js/components/projects/PanelSide.vue"));
};



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showSideBar: false,
      that: this,
      loadingProject: false
    };
  },
  components: {
    panelSide: panelSide
  },
  mounted: function mounted() {
    this.$root.projectData = [];
    this.$root.codeEditorArray = [];
    this.$root.codeEditorContent = '';
    this.fetchProjectData();
    this.$root.projectPanelComponent = this;
  },
  methods: {
    showCode: function showCode(codeBox) {
      this.$root.codeEditorComponent.showCode(codeBox);
    },
    removeCode: function removeCode() {
      this.$root.codeEditorComponent.removeCode(codeBox);
    },
    languageExtensions: function languageExtensions(language) {
      if (language == 'HTML') {
        return 'html';
      }

      if (language == 'CSS') {
        return 'css';
      }

      if (language == 'VUE') {
        return 'vue';
      }

      if (language == 'MD') {
        return 'md';
      }

      if (language == 'PYTHON(3.8.1)') {
        return 'py';
      }

      if (language == 'PYTHON For ML(3.7.7)') {
        return 'py';
      }

      if (language == 'PYTHON(2.7.17)') {
        return 'py';
      }

      if (language == 'PHP') {
        return 'php';
      }

      if (language == 'JAVASCRIPT(Node)') {
        return 'js';
      }

      if (language == 'JAVASCRIPT') {
        return 'js';
      }

      if (language == 'SQL') {
        return 'sql';
      }

      if (language == 'C') {
        return 'c';
      }

      if (language == 'C++') {
        return 'cpp';
      }

      if (language == 'JAVA') {
        return 'java';
      }

      if (language == 'C#') {
        return 'cs';
      }

      if (language == 'ERLANG') {
        return 'erl';
      }

      if (language == 'KOTLIN') {
        return 'kt';
      }

      if (language == 'FOTRAN') {
        return 'for';
      }

      if (language == 'PERL') {
        return 'pl';
      }

      if (language == 'R') {
        return 'r';
      }

      if (language == 'GO') {
        return 'go';
      }

      if (language == 'HASKELL') {
        return 'hs';
      }

      if (language == 'RUBY') {
        return 'rb';
      }

      if (language == 'LUA') {
        return 'lua';
      }

      if (language == 'PASCAL') {
        return 'pas';
      }

      if (language == 'RUST') {
        return 'rs';
      }

      if (language == 'SCALA') {
        return 'scala';
      }

      if (language == 'SWIFT') {
        return 'swift';
      }

      if (language == 'TYPESCRIPT') {
        return 'ts';
      }
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
          position: 'topRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'topRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'topRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'topRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    },
    fetchProjectData: function fetchProjectData() {
      var _this = this;

      this.loadingProject = true;
      var storedProjectData = this.$root.getLocalStore('user_projects_data_' + this.$route.params.project_slug + this.$root.username);
      storedProjectData.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this.$root.projectData = finalResult;
          _this.loadingProject = false;

          if (_this.$root.projectData.project.is_web) {
            _this.showEditor(_this.$root.projectData.project_files.code_files[0], 'front-end');
          } else {
            _this.showEditor(_this.$root.projectData.project_files.code_files[0], 'code-file');
          } // this.checkForNewProjectData();

        } else {
          axios.get('/fetch-project-data/' + _this.$route.params.project_slug).then(function (response) {
            if (response.status == 200) {
              _this.$root.LocalStore('user_projects_data_' + _this.$route.params.project_slug + _this.$root.username, response.data);

              _this.$root.projectData = response.data;

              if (_this.$root.projectData.project.is_web) {
                _this.showEditor(_this.$root.projectData.project_files.code_files[0], 'front-end');
              } else {
                _this.showEditor(_this.$root.projectData.project_files.code_files[0], 'code-file');
              }

              _this.loadingProject = false;
            }
          })["catch"](function (error) {
            _this.loadingProject = false;
          });
        }
      });
    },
    showEditor: function showEditor(codeBox, catType) {
      this.$root.SelectedCodeBox = codeBox;
      var thiscodebox = this.$root.codeEditorArray.filter(function (code) {
        return code.id == codeBox.id;
      });
      this.$root.codeEditorArray.map(function (codeFile) {
        if (codeFile.id == codeBox.id) {
          codeFile.content = codeBox.content;
        }
      });

      if (thiscodebox.length == 0) {
        this.$root.codeEditorArray.unshift(codeBox);
      }

      this.$root.selectedFileCatType = catType;
      this.$root.EditorLanguage = codeBox.language_type;
      this.$root.codeEditorContent = codeBox.content;
      this.$root.selectedFileId = codeBox.id;
      this.$router.push({
        path: '/board/projects/panel/' + this.$route.params.project_slug + '/editor'
      });
    },
    closePanel: function closePanel() {
      this.$router.push({
        path: '/board/projects/list'
      });
    },
    openSettings: function openSettings() {
      this.$router.push({
        path: '/board/projects/panel/' + this.$route.params.project_slug + '/set-panel'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scroller[data-v-e8448e76]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-e8448e76]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "col-12   px-0 d-block  py-0",
        staticStyle: {
          position: "fixed",
          left: "0",
          height: "100%",
          top: "0%",
          background: "white",
          "z-index": "99999999999999999999"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "col-12 py-0 fixed-top",
            staticStyle: {
              position: "fixed",
              width: "100%",
              "border-bottom": "2px solid #3C87CD",
              "border-radius": "0px",
              background: "white",
              "z-index": "9999999999999999999"
            }
          },
          [
            _c("div", { staticClass: "d-md-block d-none" }, [
              _c("div", { staticClass: "row py-1 my-0" }, [
                _c(
                  "div",
                  { staticClass: "col-2 py-0 my-0 text-left" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            return _vm.closePanel()
                          }
                        }
                      },
                      [
                        _c("v-icon", { staticStyle: { "font-size": "25px" } }, [
                          _vm._v("las la-times")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-2 py-0 my-0 text-right" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            return _vm.openSettings()
                          }
                        }
                      },
                      [
                        _c("v-icon", { staticStyle: { "font-size": "25px" } }, [
                          _vm._v("las la-cog")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-md-none d-block" }, [
              this.$router.currentRoute.path.indexOf("editor") <= 0
                ? _c("div", { staticClass: "row py-1 my-0" }, [
                    _c(
                      "div",
                      { staticClass: "col-2 py-0 my-0 text-left" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.closePanel()
                              }
                            }
                          },
                          [
                            _c(
                              "v-icon",
                              { staticStyle: { "font-size": "25px" } },
                              [_vm._v("las la-times")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-2 py-0 my-0 text-right" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.openSettings()
                              }
                            }
                          },
                          [
                            _c(
                              "v-icon",
                              { staticStyle: { "font-size": "25px" } },
                              [_vm._v("las la-cog")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-md-none d-block" }, [
              _c(
                "div",
                { staticClass: "row", staticStyle: { background: "#F3F8FC" } },
                [
                  _c(
                    "div",
                    { staticClass: "col-2  py-0 " },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              _vm.showSideBar = true
                            }
                          }
                        },
                        [
                          _c(
                            "v-icon",
                            { staticStyle: { "font-size": "20px" } },
                            [_vm._v("las la-bars")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  this.$router.currentRoute.path.indexOf("editor") >= 0
                    ? _c(
                        "div",
                        {
                          staticClass: "col-10 scroller py-1 ",
                          staticStyle: {
                            "overflow-x": "auto",
                            "white-space": "nowrap"
                          }
                        },
                        _vm._l(this.$root.codeEditorArray, function(
                          file,
                          index
                        ) {
                          return _c(
                            "v-chip",
                            {
                              key: index,
                              staticClass: "ma-1 ml-0 fileText d-inline-block",
                              style:
                                _vm.that.$root.selectedFileId == file.id
                                  ? "color:white;background-color:#3C87CD;"
                                  : "",
                              attrs: { close: "", small: "" },
                              on: {
                                "click:close": function($event) {
                                  return _vm.removeCode(file)
                                },
                                click: function($event) {
                                  return _vm.showCode(file)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n      " +
                                  _vm._s(
                                    file.file_name +
                                      "." +
                                      _vm.languageExtensions(file.language_type)
                                  ) +
                                  "\n    "
                              )
                            ]
                          )
                        }),
                        1
                      )
                    : _vm._e()
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 py-1 px-0",
            staticStyle: {
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "white"
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "col-lg-2 col-md-4  scroller d-md-block d-none",
                staticStyle: {
                  position: "absolute",
                  height: "98%",
                  background: "#ffffff",
                  "border-right": "1px solid #c5c5c5",
                  top: "0",
                  "padding-top": "30px",
                  "overflow-y": "auto",
                  "overflow-x": "hidden"
                }
              },
              [_c("panel-side")],
              1
            ),
            _vm._v(" "),
            _c("v-slide-x-transition", [
              _vm.showSideBar
                ? _c(
                    "div",
                    {
                      staticClass: "col-12 d-md-none  py-0 px-0",
                      staticStyle: {
                        position: "fixed",
                        width: "100%",
                        top: "0",
                        height: "100%",
                        background: "rgba(27, 27, 30, 0.32)",
                        "z-index": "9999999999999"
                      },
                      on: {
                        click: function($event) {
                          _vm.showSideBar = false
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            position: "absolute",
                            height: "100%",
                            width: "70%",
                            left: "0"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-md-6 pt-2 scroller",
                              staticStyle: {
                                background: "white",
                                height: "100%",
                                "overflow-y": "auto",
                                "overflow-x": "hidden"
                              },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  _vm.showSideBar = true
                                }
                              }
                            },
                            [_c("panel-side")],
                            1
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: " col-lg-10 offset-lg-2  col-md-8 offset-md-4 ",
                staticStyle: {
                  position: "absolute",
                  height: "95%",
                  background: "#F3F8FC",
                  top: "5%"
                }
              },
              [_c("router-view")],
              1
            )
          ],
          1
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
    return _c(
      "div",
      {
        staticClass: "col-8 py-0 my-0 d-flex",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c(
          "div",
          { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
          [_vm._v("Project title 1 ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-8 py-0 my-0 d-flex",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c(
          "div",
          { staticStyle: { "font-family": "MediumFont", "font-size": "13px" } },
          [_vm._v("Project title 1 ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/ProjectPanel.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/projects/ProjectPanel.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectPanel_vue_vue_type_template_id_e8448e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true& */ "./resources/js/components/projects/ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true&");
/* harmony import */ var _ProjectPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProjectPanel_vue_vue_type_style_index_0_id_e8448e76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css& */ "./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectPanel_vue_vue_type_template_id_e8448e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectPanel_vue_vue_type_template_id_e8448e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e8448e76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectPanel.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectPanel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_style_index_0_id_e8448e76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=style&index=0&id=e8448e76&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_style_index_0_id_e8448e76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_style_index_0_id_e8448e76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_style_index_0_id_e8448e76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_style_index_0_id_e8448e76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_style_index_0_id_e8448e76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_template_id_e8448e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectPanel.vue?vue&type=template&id=e8448e76&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_template_id_e8448e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectPanel_vue_vue_type_template_id_e8448e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);