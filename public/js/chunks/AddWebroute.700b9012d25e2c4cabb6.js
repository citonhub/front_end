(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddWebroute"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddWebroute.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddWebroute.vue?vue&type=script&lang=js& ***!
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
//
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
      functionName: '',
      languageCat: [],
      RouteType: '',
      Controllers: [],
      ControllerFile: '',
      path: '',
      Routes: ['get', 'post'],
      front_languages: ['HTML', 'CSS', 'JAVASCRIPT'],
      back_languages: ['PHP', 'PYTHON'],
      programmingLanguage: '',
      Rule: [function (v) {
        return !!v || 'File Name is required';
      }, function (v) {
        return v.length < 30 || 'File Name must be less than 30 characters';
      }, function (v) {
        return v.split(' ').length <= 1 || 'no one space allowed';
      }, function (v) {
        return /^\//.test(v) || 'Must start with \'/\'';
      }],
      requiredRule: [function (v) {
        return !!v || 'This field is required';
      }, function (v) {
        return v.split(' ').length <= 1 || 'no one space allowed';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }],
      loading: false,
      formstate: false,
      disableForm: false
    };
  },
  components: {},
  mounted: function mounted() {
    this.Controllers = this.$root.editorSideComponent.controllers;
    this.setState();
  },
  methods: {
    setState: function setState() {
      if (this.$root.is_route_edit == 'true') {
        this.path = this.$root.selectedRoute.path;
        this.functionName = this.$root.selectedRoute.function_name;
        this.ControllerFile = this.$root.selectedRoute;
        this.RouteType = this.$root.selectedRoute.route_type;
        this.disableForm = true;
      } else {
        this.path = '';
        this.functionName = '';
        this.ControllerFile = '';
        this.RouteType = '';
        this.disableForm = false;
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    saveRoute: function saveRoute() {
      var _this = this;

      var checkFile = this.$root.projectData.project_files.routes.filter(function (route) {
        return route.path == _this.path;
      });

      if (checkFile.length > 0 && checkFile[0].route_type == this.RouteType) {
        this.$root.projectPanelComponent.showAlert('Oops!', 'Route exists,please try again', 'error');
        return;
      }

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post('/save-route-project', {
          project_slug: this.$route.params.project_slug,
          path: this.path,
          route_type: this.RouteType,
          function_name: this.functionName,
          file_name: this.ControllerFile
        }).then(function (response) {
          if (response.status == 200) {
            _this.$root.projectData.project_files.routes.unshift(response.data.route_file);

            _this.$root.LocalStore('user_projects_data_' + _this.$route.params.project_slug + _this.$root.username, _this.$root.projectData);

            _this.$root.projectPanelComponent.showAlert('Happy coding!', 'web route added', 'success');

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddWebroute.vue?vue&type=template&id=d9c4bd68&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddWebroute.vue?vue&type=template&id=d9c4bd68& ***!
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
      _c("div", { staticClass: "col-12 mt-5 mt-md-1 ml-lg-4" }, [
        _c("h6", [_vm._v("Web Route")])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1"
        },
        [
          _c("v-form", { staticClass: "row my-2 py-2 px-2" }, [
            _c(
              "div",
              { staticClass: "col-12 py-2 my-0 px-2" },
              [
                _c("v-select", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    items: _vm.routes,
                    label: "Route type",
                    placeholder: "select...",
                    dense: "",
                    outlined: "",
                    color: "#3C87CD"
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
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    dense: "",
                    placeholder: "path...",
                    outlined: "",
                    color: "#3C87CD",
                    label: "Path"
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
                    items: _vm.files,
                    label: "Controller",
                    placeholder: "select...",
                    dense: "",
                    outlined: "",
                    color: "#3C87CD"
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
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    dense: "",
                    placeholder: "method...",
                    outlined: "",
                    color: "#3C87CD",
                    label: "Method"
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
                    attrs: { type: "submit", small: "", color: "#3C87CD" }
                  },
                  [_vm._v("Add")]
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

/***/ "./resources/js/components/projects/AddWebroute.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/AddWebroute.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddWebroute_vue_vue_type_template_id_d9c4bd68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddWebroute.vue?vue&type=template&id=d9c4bd68& */ "./resources/js/components/projects/AddWebroute.vue?vue&type=template&id=d9c4bd68&");
/* harmony import */ var _AddWebroute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddWebroute.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/AddWebroute.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddWebroute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddWebroute_vue_vue_type_template_id_d9c4bd68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddWebroute_vue_vue_type_template_id_d9c4bd68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/AddWebroute.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/AddWebroute.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/AddWebroute.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddWebroute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddWebroute.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddWebroute.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddWebroute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/AddWebroute.vue?vue&type=template&id=d9c4bd68&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/projects/AddWebroute.vue?vue&type=template&id=d9c4bd68& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddWebroute_vue_vue_type_template_id_d9c4bd68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddWebroute.vue?vue&type=template&id=d9c4bd68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddWebroute.vue?vue&type=template&id=d9c4bd68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddWebroute_vue_vue_type_template_id_d9c4bd68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddWebroute_vue_vue_type_template_id_d9c4bd68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);