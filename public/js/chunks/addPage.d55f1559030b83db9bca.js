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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      imageUrl: '',
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
      projects: ['Quizapp', 'BookFinder'],
      addlink: false,
      select: true,
      addprojectlink: false,
      postLink: false,
      post: {
        title: ''
      },
      test: 0
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
    test: function test() {
      this.test = this.test + 1;
      console.log(this.test);
    }
  },
  created: function created() {
    axios.post('/save-hub-post', data).then(function (response) {
      if (response.status == 201) {
        console.log(response);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\nSyntaxError: Assigning to rvalue (1:1540)\n    at Parser.pp$4.raise (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2757:13)\n    at Parser.pp$2.toAssignable (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1624:12)\n    at Parser.pp$3.parseMaybeAssign (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1930:47)\n    at Parser.pp$3.parseExpression (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1896:19)\n    at Parser.pp$1.parseStatement (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:815:45)\n    at Parser.parseStatement (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6116:31)\n    at Parser.pp$1.parseBlock (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1112:23)\n    at Parser.pp$3.parseFunctionBody (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2600:22)\n    at Parser.pp$1.parseFunction (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1219:8)\n    at Parser.pp$3.parseExprAtom (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2184:17)\n    at Parser.<anonymous> (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2443:87)\n    at Parser.pp$3.parseProperty (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2434:8)\n    at Parser.pp$3.parseObj (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2179:17)\n    at Parser.<anonymous> (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2443:87)\n    at Parser.pp$3.parseProperty (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2434:8)\n    at Parser.pp$3.parseObj (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2179:17)\n    at Parser.<anonymous> (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\xampp\\htdocs\\citonhub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)");

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