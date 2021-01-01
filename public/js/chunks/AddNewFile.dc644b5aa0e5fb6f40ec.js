(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddNewFile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddNewFile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddNewFile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      shelveName: '',
      Alert: false,
      FileName: '',
      alertMsg: '',
      languageCat: [],
      front_languages: ['HTML', 'CSS', 'JAVASCRIPT', 'MD'],
      back_languages: ['PHP', 'JAVASCRIPT'],
      programmingLanguage: '',
      Rule: [function (v) {
        return !!v || 'File Name is required';
      }, function (v) {
        return v.length < 30 || 'File Name must be less than 30 characters';
      }, function (v) {
        return v.split(' ').length <= 1 || 'no one space allowed';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }],
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      loading: false,
      formstate: false,
      appTypeList: [{
        "id": 'NodeJs',
        "name": 'Web app with NodeJs'
      }, {
        "id": 'PHP',
        "name": 'Web app with PHP'
      }, {
        "id": 26,
        "name": 'JAVASCRIPT(Node)'
      }, {
        "id": 35,
        "name": 'PHP'
      }, {
        "id": 39,
        "name": 'PYTHON(3.8.1)'
      }, {
        "id": 100,
        "name": 'PYTHON For ML(3.7.7)'
      }, {
        "id": 38,
        "name": 'PYTHON(2.7.17)'
      }, {
        "id": 44,
        "name": 'SQL'
      }, {
        "id": 4,
        "name": 'C'
      }, {
        "id": 11,
        "name": 'C++'
      }, {
        "id": 25,
        "name": 'JAVA'
      }, {
        "id": 13,
        "name": 'C#'
      }, {
        "id": 18,
        "name": 'ERLANG'
      }, {
        "id": 14,
        "name": 'COBOL'
      }, {
        "id": 27,
        "name": 'KOTLIN'
      }, {
        "id": 21,
        "name": 'FOTRAN'
      }, {
        "id": 34,
        "name": 'PERL'
      }, {
        "id": 40,
        "name": 'R'
      }, {
        "id": 41,
        "name": 'RUBY'
      }, {
        "id": 22,
        "name": 'GO'
      }, {
        "id": 24,
        "name": 'HASKELL'
      }, {
        "id": 28,
        "name": 'LUA'
      }, {
        "id": 33,
        "name": 'PASCAL'
      }, {
        "id": 42,
        "name": 'RUST'
      }, {
        "id": 43,
        "name": 'SCALA'
      }, {
        "id": 45,
        "name": 'SWIFT'
      }, {
        "id": 46,
        "name": 'TYPESCRIPT'
      }],
      sandboxCodeId: ''
    };
  },
  components: {},
  mounted: function mounted() {
    this.$root.showTabs = true;
    this.$root.showHeader = false;
    this.setLanguageType();
  },
  methods: {
    setLanguageType: function setLanguageType() {
      var _this = this;

      if (this.$route.params.language_type == 'front_end') {
        this.languageCat = this.front_languages;
      }

      if (this.$route.params.language_type == 'code_files') {
        var codeLang = this.appTypeList.filter(function (code) {
          return code.id == _this.$root.projectData.project_panel.panel_language;
        });
        this.languageCat = [codeLang[0].name];
      }

      if (this.$route.params.language_type == 'back_end') {
        this.programmingLanguage = this.$root.projectData.project_panel.panel_language;

        if (this.programmingLanguage == 'NodeJs') {
          this.languageCat = ['JAVASCRIPT'];
        }

        if (this.programmingLanguage == 'PHP') {
          this.languageCat = ['PHP'];
        }
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    saveCodeFile: function saveCodeFile() {
      var _this2 = this;

      var checkFile = this.$root.projectData.project_files.code_files.filter(function (file) {
        return file.file_name == _this2.FileName;
      });

      if (checkFile.length > 0 && checkFile[0].language_type == this.programmingLanguage) {
        this.$root.projectPanelComponent.showAlert('Oops!', 'file exist,please try again', 'error');
        return;
      }

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post('/save-code-file', {
          project_slug: this.$route.params.project_slug,
          file_name: this.FileName,
          language_type: this.programmingLanguage,
          code_category: this.$route.params.language_type
        }).then(function (response) {
          if (response.status == 200) {
            _this2.$root.projectData.project_files.code_files.push(response.data.code_file);

            _this2.$root.editorSideComponent.separateCodeFiles();

            _this2.$root.LocalStore('user_projects_data_' + _this2.$route.params.project_slug + _this2.$root.username, _this2.$root.projectData);

            if (_this2.$root.projectData.project.is_web) {
              _this2.$root.projectPanelComponent.showEditor(response.data.code_file, 'front-end');
            } else {
              _this2.$root.projectPanelComponent.showEditor(response.data.code_file, 'code-file');
            }
          }
        })["catch"](function (error) {
          _this2.$root.projectPanelComponent.showAlert('Oops!', 'unable to save file,please try again', 'error');

          _this2.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddNewFile.vue?vue&type=template&id=2a0c2396&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddNewFile.vue?vue&type=template&id=2a0c2396& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      staticStyle: {
        background: "transparent",
        "font-family": "BodyFont",
        "padding-top": "20px"
      }
    },
    [
      _c("div", { staticClass: "col-12 mt-5 mt-md-1 ml-lg-4" }, [
        _c("h6", [_vm._v("Add Code File")])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1"
        },
        [
          _c(
            "v-form",
            {
              ref: "form",
              staticClass: "row my-2 py-2 px-2",
              model: {
                value: _vm.formstate,
                callback: function($$v) {
                  _vm.formstate = $$v
                },
                expression: "formstate"
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-12 py-2 my-0 px-2" },
                [
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      rules: _vm.Rule,
                      counter: "30",
                      dense: "",
                      placeholder: "name...",
                      outlined: "",
                      color: "#3C87CD",
                      label: "File Name"
                    },
                    model: {
                      value: _vm.FileName,
                      callback: function($$v) {
                        _vm.FileName = $$v
                      },
                      expression: "FileName"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 py-2 my-0 px-2" },
                [
                  _c("v-select", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      items: _vm.languageCat,
                      label: "Language",
                      placeholder: "select...",
                      dense: "",
                      outlined: "",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.programmingLanguage,
                      callback: function($$v) {
                        _vm.programmingLanguage = $$v
                      },
                      expression: "programmingLanguage"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 py-1 my-0 px-2 text-center" },
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
                        type: "submit",
                        loading: _vm.loading,
                        small: "",
                        color: "#3C87CD"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveCodeFile($event)
                        }
                      }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/AddNewFile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/projects/AddNewFile.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddNewFile_vue_vue_type_template_id_2a0c2396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNewFile.vue?vue&type=template&id=2a0c2396& */ "./resources/js/components/projects/AddNewFile.vue?vue&type=template&id=2a0c2396&");
/* harmony import */ var _AddNewFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNewFile.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/AddNewFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddNewFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNewFile_vue_vue_type_template_id_2a0c2396___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddNewFile_vue_vue_type_template_id_2a0c2396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/AddNewFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/AddNewFile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/projects/AddNewFile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewFile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddNewFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/AddNewFile.vue?vue&type=template&id=2a0c2396&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/projects/AddNewFile.vue?vue&type=template&id=2a0c2396& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewFile_vue_vue_type_template_id_2a0c2396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewFile.vue?vue&type=template&id=2a0c2396& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddNewFile.vue?vue&type=template&id=2a0c2396&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewFile_vue_vue_type_template_id_2a0c2396___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewFile_vue_vue_type_template_id_2a0c2396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);