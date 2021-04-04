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
      this.$root.profilePageComponent.mainUserName = user.username;
      this.$root.selectedUsername = user.username;

      if (this.$router.currentRoute.path.indexOf('profile') >= 0) {
        this.$router.push({
          path: '/profile-search/' + user.username
        });
      } else {
        this.$router.push({
          path: '/profile/' + user.username
        });
      }

      this.$root.profilePageComponent.fetchProfileContent();
      this.searchTable = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



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
/* harmony import */ var _TopBar_vue_vue_type_custom_index_0_blockType_div_class_col_lg_2_20pb_1_20col_md_2_20text_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopBar.vue?vue&type=custom&index=0&blockType=div&class=col-lg-2%20pb-1%20col-md-2%20text-right */ "./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=0&blockType=div&class=col-lg-2%20pb-1%20col-md-2%20text-right");
/* harmony import */ var _TopBar_vue_vue_type_custom_index_0_blockType_div_class_col_lg_2_20pb_1_20col_md_2_20text_right__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TopBar_vue_vue_type_custom_index_0_blockType_div_class_col_lg_2_20pb_1_20col_md_2_20text_right__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TopBar_vue_vue_type_custom_index_1_blockType_div_class_col_lg_4_20pb_1_20col_md_5_20py_1_20d_flex_style_justify_content_3Acenter_3B_20align_items_3Acenter_3B__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopBar.vue?vue&type=custom&index=1&blockType=div&class=col-lg-4%20pb-1%20col-md-5%20py-1%20d-flex&style=justify-content%3Acenter%3B%20align-items%3Acenter%3B */ "./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=1&blockType=div&class=col-lg-4%20pb-1%20col-md-5%20py-1%20d-flex&style=justify-content%3Acenter%3B%20align-items%3Acenter%3B");
/* harmony import */ var _TopBar_vue_vue_type_custom_index_1_blockType_div_class_col_lg_4_20pb_1_20col_md_5_20py_1_20d_flex_style_justify_content_3Acenter_3B_20align_items_3Acenter_3B__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TopBar_vue_vue_type_custom_index_1_blockType_div_class_col_lg_4_20pb_1_20col_md_5_20py_1_20d_flex_style_justify_content_3Acenter_3B_20align_items_3Acenter_3B__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TopBar_vue_vue_type_custom_index_2_blockType_div_class_col_12_20_20d_md_none_20d_block_20py_2_20_style_position_3Aabsolute_3B_20top_3A0_3B_20left_3A0_3B_20font_family_3ABodyFont_3B_20z_index_3A99999999999999_3B__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopBar.vue?vue&type=custom&index=2&blockType=div&class=col-12%20%20d-md-none%20d-block%20py-2%20&style=position%3Aabsolute%3B%20top%3A0%3B%20left%3A0%3B%20font-family%3ABodyFont%3B%20z-index%3A99999999999999%3B */ "./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=2&blockType=div&class=col-12%20%20d-md-none%20d-block%20py-2%20&style=position%3Aabsolute%3B%20top%3A0%3B%20left%3A0%3B%20font-family%3ABodyFont%3B%20z-index%3A99999999999999%3B");
/* harmony import */ var _TopBar_vue_vue_type_custom_index_2_blockType_div_class_col_12_20_20d_md_none_20d_block_20py_2_20_style_position_3Aabsolute_3B_20top_3A0_3B_20left_3A0_3B_20font_family_3ABodyFont_3B_20z_index_3A99999999999999_3B__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TopBar_vue_vue_type_custom_index_2_blockType_div_class_col_12_20_20d_md_none_20d_block_20py_2_20_style_position_3Aabsolute_3B_20top_3A0_3B_20left_3A0_3B_20font_family_3ABodyFont_3B_20z_index_3A99999999999999_3B__WEBPACK_IMPORTED_MODULE_5__);





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

/* custom blocks */

if (typeof _TopBar_vue_vue_type_custom_index_0_blockType_div_class_col_lg_2_20pb_1_20col_md_2_20text_right__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') _TopBar_vue_vue_type_custom_index_0_blockType_div_class_col_lg_2_20pb_1_20col_md_2_20text_right__WEBPACK_IMPORTED_MODULE_3___default()(component)

if (typeof _TopBar_vue_vue_type_custom_index_1_blockType_div_class_col_lg_4_20pb_1_20col_md_5_20py_1_20d_flex_style_justify_content_3Acenter_3B_20align_items_3Acenter_3B__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') _TopBar_vue_vue_type_custom_index_1_blockType_div_class_col_lg_4_20pb_1_20col_md_5_20py_1_20d_flex_style_justify_content_3Acenter_3B_20align_items_3Acenter_3B__WEBPACK_IMPORTED_MODULE_4___default()(component)

if (typeof _TopBar_vue_vue_type_custom_index_2_blockType_div_class_col_12_20_20d_md_none_20d_block_20py_2_20_style_position_3Aabsolute_3B_20top_3A0_3B_20left_3A0_3B_20font_family_3ABodyFont_3B_20z_index_3A99999999999999_3B__WEBPACK_IMPORTED_MODULE_5___default.a === 'function') _TopBar_vue_vue_type_custom_index_2_blockType_div_class_col_12_20_20d_md_none_20d_block_20py_2_20_style_position_3Aabsolute_3B_20top_3A0_3B_20left_3A0_3B_20font_family_3ABodyFont_3B_20z_index_3A99999999999999_3B__WEBPACK_IMPORTED_MODULE_5___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=0&blockType=div&class=col-lg-2%20pb-1%20col-md-2%20text-right":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=0&blockType=div&class=col-lg-2%20pb-1%20col-md-2%20text-right ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=1&blockType=div&class=col-lg-4%20pb-1%20col-md-5%20py-1%20d-flex&style=justify-content%3Acenter%3B%20align-items%3Acenter%3B":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=1&blockType=div&class=col-lg-4%20pb-1%20col-md-5%20py-1%20d-flex&style=justify-content%3Acenter%3B%20align-items%3Acenter%3B ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=2&blockType=div&class=col-12%20%20d-md-none%20d-block%20py-2%20&style=position%3Aabsolute%3B%20top%3A0%3B%20left%3A0%3B%20font-family%3ABodyFont%3B%20z-index%3A99999999999999%3B":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue?vue&type=custom&index=2&blockType=div&class=col-12%20%20d-md-none%20d-block%20py-2%20&style=position%3Aabsolute%3B%20top%3A0%3B%20left%3A0%3B%20font-family%3ABodyFont%3B%20z-index%3A99999999999999%3B ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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