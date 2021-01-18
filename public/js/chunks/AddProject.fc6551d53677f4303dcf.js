(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddProject"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddProject.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      Rule: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return v.length < 80 || 'Name must be less than 60 characters';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }],
      title: '',
      owner: '',
      owners: ['You', 'CitonHub'],
      app: '',
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
      }],
      languages: ["Web app with NodeJs", "Web app with PHP", "JAVASCRIPT(Node)", "PYTHON(3.8.1)", "PYTHON FOR ML(3.7.7)", "SQL", "C", "C++", "JAVA", "C#", "ERLANG", "COBOL", "KOTLIN", "FOTRAN", "PERL", "R", "RUBY", "GO", "HASKELL", "LUA", "PASCAL", "RUST", "SCALA", "SWIFT"],
      loading: false,
      selectLangValue: []
    };
  },
  mounted: function mounted() {
    this.$root.showTopBar = false;
  },
  methods: {
    selectLang: function selectLang(lang) {
      this.selectLangValue = lang;
      this.languageIcon.map(function (app) {
        if (lang.name == app.name) {
          app.border_color = '#3C87CD';
          app.background = '#F3F8FC';
        } else {
          app.border_color = '#263238';
          app.background = '#ffffff';
        }
      });
    },
    createProject: function createProject() {
      var _this = this;

      this.loading = true;
      axios.post('/create-project', {
        project_slug: this.$route.params.project_slug,
        app_type: 'Multiple-pages',
        title: this.title,
        panel_language: this.selectLangValue.id,
        language_name: this.selectLangValue.name.toUpperCase()
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.projectList.user_projects.unshift(response.data.project);

          _this.$root.LocalStore('user_projects_' + _this.$root.username, _this.$root.projectList);

          _this.$router.push({
            path: '/board/projects/panel/' + response.data.project.project_slug
          });
        }
      })["catch"](function (error) {
        _this.showAlert('Oops!', 'Unable to create project,please try again', 'error');

        _this.loading = false;
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
    },
    goToProjectList: function goToProjectList() {
      this.$router.push({
        path: '/board/projects/list'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.appBox[data-v-d83880dc]:hover{\n   background: #F3F8FC;\n   cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=template&id=d83880dc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddProject.vue?vue&type=template&id=d83880dc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "px-0", staticStyle: { background: "transparent" } },
    [
      _c("div", {
        staticClass: "my-lg-3 my-md-3 py-0 py-md-2 col-12 ",
        staticStyle: { background: "#F5F5FB" }
      }),
      _vm._v(" "),
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
                    { attrs: { icon: "" }, on: { click: _vm.goToProjectList } },
                    [_c("v-icon", [_vm._v("las la-arrow-left")])],
                    1
                  ),
                  _vm._v(" Create a project")
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
                      "font-family": "HeaderFont"
                    },
                    attrs: {
                      loading: _vm.loading,
                      disabled:
                        _vm.selectLangValue.length == 0 || _vm.title == "",
                      small: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.createProject }
                  },
                  [_vm._v("\n             Create\n           ")]
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
          staticClass: " px-1 col-12 py-2 d-md-none d-block fixed-top",
          staticStyle: {
            position: "sticky",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-8 py-0 my-0" },
              [
                _c(
                  "v-btn",
                  { attrs: { icon: "" }, on: { click: _vm.goToProjectList } },
                  [_c("v-icon", [_vm._v("las la-arrow-left")])],
                  1
                ),
                _vm._v(" "),
                _c("h6", { staticClass: "d-inline-block" }, [
                  _vm._v("Create a project")
                ])
              ],
              1
            ),
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
                      color: "white",
                      "font-family": "HeaderFont"
                    },
                    attrs: {
                      loading: _vm.loading,
                      small: "",
                      rounded: "",
                      disabled:
                        _vm.selectLangValue.length == 0 || _vm.title == "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.createProject }
                  },
                  [_vm._v("\n             Create\n           ")]
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
          staticClass:
            "col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-4 px-md-2 "
        },
        [
          _c("div", { staticClass: "row text-center" }, [
            _c(
              "div",
              { staticClass: "col-lg-6 py-1 my-0 px-2" },
              [
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    label: "Title",
                    counter: "60",
                    "persistent-hint": "",
                    hint: "What do you want to build?",
                    "prepend-inner-icon": "las la-laptop-code",
                    rules: _vm.Rule,
                    color: "#3C87CD"
                  },
                  model: {
                    value: _vm.title,
                    callback: function($$v) {
                      _vm.title = $$v
                    },
                    expression: "title"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12 py-1 my-2 px-2 text-left" }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "13px",
                    "font-family": "BodyFont"
                  }
                },
                [_vm._v("Choose application type")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-12 py-1 my-2 mt-0 px-2 text-left" },
              [
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.languageIcon, function(app, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "  col-4 col-lg-2 px-2 my-0 py-2 "
                      },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "px-1 py-1 appBox",
                            style:
                              "height:100px; border:1px solid " +
                              app.border_color +
                              "; border-radius:7px;",
                            attrs: { color: app.background },
                            on: {
                              click: function($event) {
                                return _vm.selectLang(app)
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "d-flex",
                                staticStyle: {
                                  height: "100%",
                                  "align-items": "center",
                                  "justify-content": "center",
                                  width: "100%"
                                }
                              },
                              [
                                _c("div", { staticClass: "text-center" }, [
                                  _c("i", {
                                    class: app.icon,
                                    staticStyle: { "font-size": "30px" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          "font-size": "13px",
                                          "font-family": "BodyFont"
                                        }
                                      },
                                      [_vm._v(_vm._s(app.name))]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/AddProject.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/projects/AddProject.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProject_vue_vue_type_template_id_d83880dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProject.vue?vue&type=template&id=d83880dc&scoped=true& */ "./resources/js/components/projects/AddProject.vue?vue&type=template&id=d83880dc&scoped=true&");
/* harmony import */ var _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProject.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/AddProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddProject_vue_vue_type_style_index_0_id_d83880dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css& */ "./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProject_vue_vue_type_template_id_d83880dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProject_vue_vue_type_template_id_d83880dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d83880dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/AddProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/AddProject.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/projects/AddProject.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_d83880dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=style&index=0&id=d83880dc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_d83880dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_d83880dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_d83880dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_d83880dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_style_index_0_id_d83880dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/projects/AddProject.vue?vue&type=template&id=d83880dc&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/projects/AddProject.vue?vue&type=template&id=d83880dc&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_d83880dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProject.vue?vue&type=template&id=d83880dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddProject.vue?vue&type=template&id=d83880dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_d83880dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProject_vue_vue_type_template_id_d83880dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);