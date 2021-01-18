(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingProject: false,
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-html5',
        id: 'NodeJs'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-html5',
        id: 'PHP'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square',
        id: 26
      }, {
        name: 'PHP',
        icon: 'lab la-php',
        id: 35
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python',
        id: 39
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python',
        id: 100
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c',
        id: 4
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp',
        id: 11
      }, {
        name: 'Java',
        icon: 'lab la-java',
        id: 25
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp',
        id: 13
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang',
        id: 18
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin',
        id: 27
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran',
        id: 21
      }, {
        name: 'Perl',
        icon: 'las la-code',
        id: 34
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r',
        id: 40
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby',
        id: 41
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go',
        id: 22
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell',
        id: 24
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua',
        id: 28
      }, {
        name: 'Pascal',
        icon: 'las la-code',
        id: 33
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript',
        id: 46
      }, {
        name: 'Rust',
        icon: 'las la-code',
        id: 42
      }, {
        name: 'Swift',
        icon: 'lab la-swift',
        id: 45
      }, {
        name: 'Scala',
        icon: 'las la-code',
        id: 43
      }]
    };
  },
  computed: {},
  mounted: function mounted() {
    this.$root.showTopBar = true;
    this.fetchProjects();
  },
  methods: {
    getProjectLanguage: function getProjectLanguage(panel) {
      var iconData = this.languageIcon.filter(function (icon) {
        return icon.id == panel.panel_language;
      });

      if (iconData[0]) {
        return iconData[0].icon;
      } else {
        return 'las la-code';
      }
    },
    goToPanel: function goToPanel(project) {
      this.$router.push({
        path: '/board/projects/panel/' + project.project_slug
      });
    },
    fetchProjects: function fetchProjects() {
      var _this = this;

      this.loadingProject = true;
      var storedProjects = this.$root.getLocalStore('user_projects_' + this.$root.username);
      storedProjects.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this.$root.projectList = finalResult;
          _this.loadingProject = false; // this.checkForNewProjects();
        } else {
          axios.get('/fetch-user-projects').then(function (response) {
            if (response.status == 200) {
              _this.$root.LocalStore('user_projects_' + _this.$root.username, response.data);

              _this.$root.projectList = response.data;
              _this.loadingProject = false;
            }
          })["catch"](function (error) {
            _this.loadingProject = false;
          });
        }
      });
    },
    addProject: function addProject() {
      this.$router.push({
        path: '/board/projects/add'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=70475ced&scoped=true& */ "./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _ProjectList_vue_vue_type_custom_index_0_blockType_div_class_py_5_20my_5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=custom&index=0&blockType=div&class=py-5%20my-5 */ "./resources/js/components/projects/ProjectList.vue?vue&type=custom&index=0&blockType=div&class=py-5%20my-5");
/* harmony import */ var _ProjectList_vue_vue_type_custom_index_0_blockType_div_class_py_5_20my_5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProjectList_vue_vue_type_custom_index_0_blockType_div_class_py_5_20my_5__WEBPACK_IMPORTED_MODULE_3__);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70475ced",
  null
  
)

/* custom blocks */

if (typeof _ProjectList_vue_vue_type_custom_index_0_blockType_div_class_py_5_20my_5__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') _ProjectList_vue_vue_type_custom_index_0_blockType_div_class_py_5_20my_5__WEBPACK_IMPORTED_MODULE_3___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue?vue&type=custom&index=0&blockType=div&class=py-5%20my-5":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue?vue&type=custom&index=0&blockType=div&class=py-5%20my-5 ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=template&id=70475ced&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);