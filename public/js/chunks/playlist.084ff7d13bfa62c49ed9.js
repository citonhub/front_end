(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playlist"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      videos: ['Vue Routes', 'Props', 'Data Binding', 'Components', 'Code Along', 'Building Databases'],
      lists: ['React Tutorial', 'Responsiveness', 'Tech Writing', 'MEVN Projects', 'Code Along', 'New Tech', 'New Tech', 'New Tech', 'New Tech'],
      toggleForm: false,
      removeModal: false,
      showPlaylist: true,
      playName: ''
    };
  },
  methods: {
    showContent: function showContent() {
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_content/sample'
      });
    },
    handleYouTubeAuth: function handleYouTubeAuth() {
      var _this = this;

      var strWindowFeatures = "location=yes,height=770,width=720,scrollbars=yes,status=yes";
      var URL = 'https://api.beta.citonhub.com/initiate-google-auth/' + this.$root.username;
      var win = window.open(URL, "_blank", strWindowFeatures);
      setTimeout(function () {
        _this.showContent();
      }, 4000);
    },
    openModal: function openModal() {
      this.removeModal = true;
      this.toggleForm = true;
    },
    closeModal: function closeModal() {
      this.removeModal = false;
    },
    openForm: function openForm() {
      this.toggleForm = false;
    },
    createResources: function createResources() {
      axios.post('/create-resource', {
        space_id: '',
        name: this.playName,
        type: 'playlist'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\nSyntaxError: Unexpected token (1:306)\n    at Parser.pp$4.raise (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2757:13)\n    at Parser.pp.unexpected (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:647:8)\n    at Parser.pp$3.parseParenAndDistinguishExpression (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2252:49)\n    at Parser.pp$3.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2163:41)\n    at Parser.<anonymous> (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2443:87)\n    at Parser.pp$3.parseProperty (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2434:8)\n    at Parser.pp$3.parseObj (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2179:17)\n    at Parser.<anonymous> (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2443:87)\n    at Parser.pp$3.parseProperty (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2434:8)\n    at Parser.pp$3.parseObj (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2179:17)\n    at Parser.<anonymous> (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExprList (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2663:20)\n    at Parser.pp$3.parseSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2075:29)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2050:21)");

/***/ }),

/***/ "./resources/js/components/chats/playlists.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists.vue?vue&type=template&id=d342941c& */ "./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&");
/* harmony import */ var _playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlists.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/playlists.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./playlists.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./playlists.vue?vue&type=template&id=d342941c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);