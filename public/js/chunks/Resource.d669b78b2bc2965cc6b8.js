(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Resource"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-screen */ "./node_modules/vue-screen/dist/vue-screen.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.use(vue_screen__WEBPACK_IMPORTED_MODULE_0__["default"], 'bootstrap');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      options: false,
      selected_id: ''
    };
  },
  props: ['show_add_icon', 'contents', 'fromStandalone'],
  mounted: function mounted() {
    this.$root.resourceComponent = this;
  },
  methods: {
    processURL: function processURL(link) {
      var psl = __webpack_require__(/*! psl */ "./node_modules/psl/index.js");

      var FullString = link;

      function extractHostname(url) {
        var hostname; //find & remove protocol (http, ftp, etc.) and get hostname

        if (url.indexOf("//") > -1) {
          hostname = url.split('/')[2];
        } else {
          hostname = url.split('/')[0];
        } //find & remove port number


        hostname = hostname.split(':')[0]; //find & remove "?"

        hostname = hostname.split('?')[0];
        return hostname;
      }

      return psl.get(extractHostname(FullString));
    },
    shortenContent: function shortenContent(content, limit) {
      if (content.length > limit) {
        var shortcontent = content.slice(0, limit);
        return shortcontent + '...';
      } else {
        return content;
      }
    },
    showOptions: function showOptions(content) {
      this.selected_id = content.resource_id;
      console.log(content.resource_id);
      this.options = true;
    },
    handleResource: function handleResource(content, index) {
      this.$root.nextResourceId = index + 1;
      this.$root.prevResourceId = index - 1;

      if (this.$root.nextResourceId >= this.contents.length) {
        this.$root.nextResourceId = null;
      } else {
        this.$root.nextResourceData = this.contents[this.$root.nextResourceId];
      }

      if (this.$root.prevResourceId >= 0) {
        this.$root.prevResourceData = this.contents[this.$root.prevResourceId];
      }

      if (content.type == 'youtube_video') {
        this.$root.playingYoutubeVideo = content;
        this.$root.playingYoutubeVideoId = content.content.id;

        if (this.fromStandalone) {
          this.$root.showYoutubePlayerTemp = true;
        } else {
          if (this.$screen.lg) {
            this.$root.showYoutubePlayer = true;
          } else {
            this.$root.showYoutubePlayerSm = true;
          }
        }
      }

      if (content.type == 'devto_article') {
        var url = content.content.canonical_url;
        window.open(url, '_blank');
      }

      if (content.type == 'shared_link') {
        var _url = content.content.link;
        window.open(_url, '_blank');
      }
    },
    checkIfSelected: function checkIfSelected(content) {
      var thisContent = this.$root.resourcesSearchComponent.selectedItems.filter(function (eachContent) {
        return content.content.id == eachContent.id;
      });

      if (thisContent.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    addToSelected: function addToSelected(content) {
      if (this.checkIfSelected(content)) {
        var remainingContent = this.$root.resourcesSearchComponent.selectedItems.filter(function (eachContent) {
          return content.content.id != eachContent.id;
        });
        this.$root.resourcesSearchComponent.selectedItems = remainingContent;
      } else {
        this.$root.resourcesSearchComponent.selectedItems.push(content.content);
      }
    },
    convertDigit: function convertDigit(num, digits) {
      var si = [{
        value: 1,
        symbol: ""
      }, {
        value: 1E3,
        symbol: "k"
      }, {
        value: 1E6,
        symbol: "M"
      }, {
        value: 1E9,
        symbol: "G"
      }, {
        value: 1E12,
        symbol: "T"
      }, {
        value: 1E15,
        symbol: "P"
      }, {
        value: 1E18,
        symbol: "E"
      }];
      var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var i;

      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
          break;
        }
      }

      return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hoverEffect[data-v-34e6a4a6]:hover{\r\n   background-color: whitesmoke;\r\n   cursor: pointer;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):\nSyntaxError: Unexpected token (1:2596)\n    at Parser.pp$4.raise (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2757:13)\n    at Parser.pp.unexpected (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:647:8)\n    at Parser.pp$3.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2196:10)\n    at Parser.<anonymous> (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOp (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1985:41)\n    at Parser.pp$3.parseExprOps (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1968:91)\n    at Parser.pp$3.parseMaybeConditional (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseParenAndDistinguishExpression (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2238:30)\n    at Parser.pp$3.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2163:41)\n    at Parser.<anonymous> (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExprList (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2663:20)\n    at Parser.pp$3.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2175:26)\n    at Parser.<anonymous> (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2024:17)\n    at Parser.pp$3.parseExprOps (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1966:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1949:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1956:27)\n    at Parser.pp$3.parseMaybeAssign (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:1925:19)\n    at Parser.pp$3.parseExprList (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2663:20)\n    at Parser.pp$3.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2175:26)\n    at Parser.<anonymous> (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6003:24)\n    at Parser.parseExprAtom (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:6129:31)\n    at Parser.pp$3.parseExprSubscripts (C:\\Users\\Maryam\\Documents\\GitHub\\front_end\\node_modules\\vue-template-es2015-compiler\\buble.js:2047:19)");

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& */ "./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&");
/* harmony import */ var _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resource.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34e6a4a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Resource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);