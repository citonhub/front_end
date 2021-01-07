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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      titleRule: [function (v) {
        return !!v || 'Title is required';
      }, function (v) {
        return v.length <= 80 || 'Title must be less than 80 characters';
      }],
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      descriptionRule: [function (v) {
        return !!v || 'description is required';
      }, function (v) {
        return v.length <= 200 || 'description must be less than 200 characters';
      }],
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
      addlink: false,
      select: true,
      addprojectlink: false,
      postLink: false,
      formState: false,
      post: {
        title: '',
        project_slug: '',
        project_url: '',
        tags: [],
        description: ''
      }
    };
  },
  methods: {
    displayTab: function displayTab() {
      this.addlink = !this.addlink;
      this.select = !this.select;
      alert(this.addlink);
    },
    displayTab2: function displayTab2() {
      this.addprojectlink = !this.addprojectlink;
      this.select = !this.select;
    },
    postData: function postData() {
      var _this = this;

      console.log(this.post);
      axios.post('/save-hub-post', this.post).then(function (response) {
        if (response.status == 201) {
          console.log(response);
          axios.get('/fetch-posts').then(function (response) {
            if (response.status == 200) {
              _this.$root.posts = response.data.data;
            }
          });
        }
      });
    }
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
var render = function () {}
var staticRenderFns = []



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