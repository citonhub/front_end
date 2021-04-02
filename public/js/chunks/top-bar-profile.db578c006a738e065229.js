(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-bar-profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showSideBar: false,
      searchType: '',
      that: this,
      profileName: '',
      fetchedUser: '',
      searchTable: false
    };
  },
  mounted: function mounted() {
    this.$root.TopBarComponent = this;
  },
  methods: {
    goToNotification: function goToNotification() {
      this.$router.push({
        path: '/board/notifications'
      });
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    fetchSearchResult: function fetchSearchResult() {
      var _this = this;

      axios.get("/profile-search/".concat(this.profileName)).then(function (response) {
        if (response.status == 200) {
          console.log(response.data.profiles[0].username);
          _this.fetchedUser = response.data.profiles;
        }
      });
    },
    goToProfile: function goToProfile(user) {
      if (this.$root.selectedSpace.type == 'Bot') return;
      this.$root.selectedUsername = user.username;
      this.$router.push({
        path: '/profile-view/' + user.username
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\nSyntaxError: Unexpected token (1:3048)\n    at Parser.pp$4.raise (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2757:13)\n    at Parser.pp.unexpected (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:647:8)\n    at Parser.pp$3.parseParenAndDistinguishExpression (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2252:49)\n    at Parser.pp$3.parseExprAtom (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2163:41)\n    at Parser.<anonymous> (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2443:87)\n    at Parser.pp$3.parseProperty (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2434:8)\n    at Parser.pp$3.parseObj (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2179:17)\n    at Parser.<anonymous> (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parsePropertyValue (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2443:87)\n    at Parser.pp$3.parseProperty (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2434:8)\n    at Parser.pp$3.parseObj (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2380:23)\n    at Parser.pp$3.parseExprAtom (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2179:17)\n    at Parser.<anonymous> (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExprList (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2663:20)\n    at Parser.pp$3.parseSubscripts (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2075:29)\n    at Parser.pp$3.parseExprSubscripts (C:\\projects\\for git\\new commit\\New folder\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2050:21)");

/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& */ "./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f8a41a22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);