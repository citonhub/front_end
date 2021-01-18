(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddDatabase"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddDatabase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddDatabase.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      shelveName: '',
      Alert: false,
      FileName: '',
      alertMsg: '',
      languageCat: [],
      TableName: '',
      Rule: [function (v) {
        return !!v || 'Table Name is required';
      }, function (v) {
        return v.length < 30 || 'Table Name must be less than 30 characters';
      }, function (v) {
        return v.split(' ').length <= 1 || 'no one space allowed';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }],
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      loading: false,
      formstate: false
    };
  },
  components: {},
  mounted: function mounted() {},
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    createTable: function createTable() {
      var _this = this;

      var checkFile = this.$root.projectData.project_files.dbtables.filter(function (table) {
        return table.name == _this.TableName;
      });

      if (checkFile.length > 0) {
        this.$root.projectPanelComponent.showAlert('Oops!', 'Table Name exists,please try again', 'error');
        return;
      }

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post('/save-db-table-project', {
          project_slug: this.$route.params.project_slug,
          table_name: this.TableName
        }).then(function (response) {
          if (response.status == 200) {
            _this.$root.projectData.project_files.dbtables.push(response.data.dbtable);

            _this.$root.LocalStore('user_projects_data_' + _this.$route.params.project_slug + _this.$root.username, _this.$root.projectData);

            _this.$root.projectPanelComponent.showAlert('Happy coding!', 'Database table added', 'success');

            _this.loading = false;
          }
        })["catch"](function (error) {
          _this.$root.projectPanelComponent.showAlert('Oops!', 'Unable to save file,please try again', 'error');

          _this.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddDatabase.vue?vue&type=template&id=d04d375c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddDatabase.vue?vue&type=template&id=d04d375c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-12 mt-5 mt-md-1" }, [
        _c("h6", [_vm._v("Create Database")])
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
                      dense: "",
                      placeholder: "name...",
                      rules: _vm.Rule,
                      counter: "30",
                      outlined: "",
                      color: "#3C87CD",
                      label: "Table Name"
                    },
                    model: {
                      value: _vm.TableName,
                      callback: function($$v) {
                        _vm.TableName = $$v
                      },
                      expression: "TableName"
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
                        "font-size": "13px",
                        "font-weight": "bolder",
                        color: "white",
                        "font-family": "HeaderFont"
                      },
                      attrs: {
                        type: "submit",
                        small: "",
                        color: "#3C87CD",
                        loading: _vm.loading
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.createTable($event)
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

/***/ "./resources/js/components/projects/AddDatabase.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/AddDatabase.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddDatabase_vue_vue_type_template_id_d04d375c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDatabase.vue?vue&type=template&id=d04d375c& */ "./resources/js/components/projects/AddDatabase.vue?vue&type=template&id=d04d375c&");
/* harmony import */ var _AddDatabase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDatabase.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/AddDatabase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddDatabase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddDatabase_vue_vue_type_template_id_d04d375c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddDatabase_vue_vue_type_template_id_d04d375c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/AddDatabase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/AddDatabase.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/AddDatabase.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDatabase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDatabase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddDatabase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDatabase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/AddDatabase.vue?vue&type=template&id=d04d375c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/projects/AddDatabase.vue?vue&type=template&id=d04d375c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDatabase_vue_vue_type_template_id_d04d375c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddDatabase.vue?vue&type=template&id=d04d375c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddDatabase.vue?vue&type=template&id=d04d375c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDatabase_vue_vue_type_template_id_d04d375c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDatabase_vue_vue_type_template_id_d04d375c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);