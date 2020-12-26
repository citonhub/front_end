(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CodeBox"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-codemirror */ "./node_modules/vue-codemirror/dist/vue-codemirror.js");
/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstraps_codeImports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bootstraps/codeImports */ "./resources/js/bootstraps/codeImports.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['codeContent', 'filename', 'codeLanguage', 'codeViewerType', 'messageId', 'color', 'topMargin'],
  components: {
    codemirror: vue_codemirror__WEBPACK_IMPORTED_MODULE_0__["codemirror"]
  },
  computed: {
    codemirror: function codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  mounted: function mounted() {
    this.detectchange(this.codeLanguage);
  },
  data: function data() {
    return {
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        filepath: '',
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: "sublime",
        mode: 'text/html',
        theme: 'base16-dark',
        scrollbarStyle: "overlay",
        readOnly: 'nocursor',
        extraKeys: {
          "F11": function F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          "Esc": function Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }
        }
      },
      items: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'PYTHON', 'SQL', 'VUEJS', 'C', 'C++', 'JAVA', 'C#', 'ERLANG', 'COFFEESCRIPT', 'LIVESCRIPT', 'DJANGO', 'KOTLIN', 'FOTRAN', 'MARKDOWN', 'PERL', 'R', 'RUBY'],
      language: this.codeLanguage,
      code: this.codeContent
    };
  },
  methods: {
    onCmCursorActivity: function onCmCursorActivity(codemirror) {
      console.debug('onCmCursorActivity', codemirror);
    },
    onCmReady: function onCmReady(codemirror) {
      console.debug('onCmReady', codemirror);
    },
    onCmFocus: function onCmFocus(codemirror) {
      console.debug('onCmFocus', codemirror);
    },
    onCmBlur: function onCmBlur(codemirror) {
      console.debug('onCmBlur', codemirror);
    },
    showCodeEditor: function showCodeEditor() {
      this.$root.fullCodeLanguage = this.codeLanguage;
      this.$root.FullcodeContent = this.codeContent;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/editor'
      });
    },
    detectchange: function detectchange(language) {
      if (language == 'HTML') {
        this.cmOption.mode = 'text/html';
      }

      if (language == 'CSS') {
        this.cmOption.mode = 'text/css';
      }

      if (language == 'PYTHON(3.8.1)') {
        this.cmOption.mode = 'text/x-python';
      }

      if (language == 'PYTHON For ML(3.7.7)') {
        this.cmOption.mode = 'text/x-python';
      }

      if (language == 'PYTHON(2.7.17)') {
        this.cmOption.mode = 'text/x-python';
      }

      if (language == 'PHP') {
        this.cmOption.mode = 'text/x-php';
      }

      if (language == 'JAVASCRIPT(Node)') {
        this.cmOption.mode = 'text/javascript';
      }

      if (language == 'SQL') {
        this.cmOption.mode = 'text/x-sql';
      }

      if (language == 'C') {
        this.cmOption.mode = 'text/x-csrc';
      }

      if (language == 'C++') {
        this.cmOption.mode = 'text/x-c++src';
      }

      if (language == 'JAVA') {
        this.cmOption.mode = 'text/x-java';
      }

      if (language == 'C#') {
        this.cmOption.mode = 'text/x-csharp';
      }

      if (language == 'ERLANG') {
        this.cmOption.mode = 'text/x-erlang';
      }

      if (language == 'KOTLIN') {
        this.cmOption.mode = 'x-shader/x-fragment';
      }

      if (language == 'FOTRAN') {
        this.cmOption.mode = 'text/x-fortran';
      }

      if (language == 'PERL') {
        this.cmOption.mode = 'text/x-perl';
      }

      if (language == 'R') {
        this.cmOption.mode = 'text/x-rsrc';
      }

      if (language == 'GO') {
        this.cmOption.mode = 'text/x-go';
      }

      if (language == 'HASKELL') {
        this.cmOption.mode = 'text/x-haskell';
      }

      if (language == 'RUBY') {
        this.cmOption.mode = 'text/x-ruby';
      }

      if (language == 'LUA') {
        this.cmOption.mode = 'text/x-lua';
      }

      if (language == 'PASCAL') {
        this.cmOption.mode = 'text/x-pascal';
      }

      if (language == 'RUST') {
        this.cmOption.mode = 'text/x-rustsrc';
      }

      if (language == 'SCALA') {
        this.cmOption.mode = 'text/x-scala';
      }

      if (language == 'SWIFT') {
        this.cmOption.mode = 'text/x-swift';
      }

      if (language == 'TYPESCRIPT') {
        this.cmOption.mode = 'text/javascript';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".codeboxnew[data-v-007c4562],\n.pre[data-v-007c4562] {\n  width: 100%;\n  margin: 0;\n  height: 100%;\n  display: block;\n  font-size: 13px;\n  line-height: 1.6;\n  word-break: break-all;\n  letter-spacing: 1px !important;\n  word-wrap: break-word;\n  overflow: auto;\n}\n.codeboxnew[data-v-007c4562] {\n  height: auto;\n  border-radius: 10px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.codeboxnew[data-v-007c4562]::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.codeboxnew[data-v-007c4562] {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=template&id=007c4562&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/CodeBox.vue?vue&type=template&id=007c4562&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-2" }, [
    _c(
      "div",
      { staticClass: " codeboxnew" },
      [
        _c("codemirror", {
          staticStyle: {
            height: "190px",
            "overflow-y": "hidden !important",
            "overflow-x": "hidden !important"
          },
          attrs: { options: _vm.cmOption },
          on: {
            cursorActivity: _vm.onCmCursorActivity,
            ready: _vm.onCmReady,
            focus: _vm.onCmFocus,
            blur: _vm.onCmBlur
          },
          model: {
            value: _vm.codeContent,
            callback: function($$v) {
              _vm.codeContent = $$v
            },
            expression: "codeContent"
          }
        }),
        _vm._v(" "),
        _c(
          "v-btn",
          {
            style:
              "position:absolute; top:" +
              _vm.topMargin +
              "%; right:3%;z-index:999;",
            attrs: { icon: "" },
            on: { click: _vm.showCodeEditor }
          },
          [
            _c("v-icon", { attrs: { color: "#ffffff" } }, [
              _vm._v("las la-expand")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "py-2 px-2 d-flex flex-row",
            staticStyle: { position: "absolute", width: "100%" }
          },
          [
            _c(
              "div",
              { staticClass: "mr-2" },
              [
                _c(
                  "v-icon",
                  {
                    staticStyle: { "font-size": "19px" },
                    attrs: { color: _vm.color }
                  },
                  [_vm._v("las la-code")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "ml-3" }, [
              _c(
                "span",
                { style: "color:" + _vm.color + " ;font-size:13px;" },
                [_vm._v("Index.php")]
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/bootstraps/codeImports.js":
/*!************************************************!*\
  !*** ./resources/js/bootstraps/codeImports.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/theme/base16-dark.css */ "./node_modules/codemirror/theme/base16-dark.css");
/* harmony import */ var codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_base16_dark_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/php/php.js */ "./node_modules/codemirror/mode/php/php.js");
/* harmony import */ var codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_php_php_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/selection/active-line.js */ "./node_modules/codemirror/addon/selection/active-line.js");
/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/addon/selection/mark-selection.js */ "./node_modules/codemirror/addon/selection/mark-selection.js");
/* harmony import */ var codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/search/searchcursor.js */ "./node_modules/codemirror/addon/search/searchcursor.js");
/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/addon/scroll/annotatescrollbar.js */ "./node_modules/codemirror/addon/scroll/annotatescrollbar.js");
/* harmony import */ var codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/addon/search/matchesonscrollbar.js */ "./node_modules/codemirror/addon/search/matchesonscrollbar.js");
/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/search/match-highlighter.js */ "./node_modules/codemirror/addon/search/match-highlighter.js");
/* harmony import */ var codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets.js */ "./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/addon/search/search.js */ "./node_modules/codemirror/addon/search/search.js");
/* harmony import */ var codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/keymap/sublime.js */ "./node_modules/codemirror/keymap/sublime.js");
/* harmony import */ var codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.css */ "./node_modules/codemirror/addon/fold/foldgutter.css");
/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/addon/fold/brace-fold.js */ "./node_modules/codemirror/addon/fold/brace-fold.js");
/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/addon/fold/foldcode.js */ "./node_modules/codemirror/addon/fold/foldcode.js");
/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.js */ "./node_modules/codemirror/addon/fold/foldgutter.js");
/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/addon/fold/indent-fold.js */ "./node_modules/codemirror/addon/fold/indent-fold.js");
/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/addon/scroll/simplescrollbars.js */ "./node_modules/codemirror/addon/scroll/simplescrollbars.js");
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_simplescrollbars_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/scroll/simplescrollbars.css */ "./node_modules/codemirror/addon/scroll/simplescrollbars.css");
/* harmony import */ var codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/mode/python/python.js */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/mode/clike/clike.js */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var codemirror_mode_cobol_cobol_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! codemirror/mode/cobol/cobol.js */ "./node_modules/codemirror/mode/cobol/cobol.js");
/* harmony import */ var codemirror_mode_cobol_cobol_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_cobol_cobol_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! codemirror/mode/css/css.js */ "./node_modules/codemirror/mode/css/css.js");
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var codemirror_mode_erlang_erlang_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! codemirror/mode/erlang/erlang.js */ "./node_modules/codemirror/mode/erlang/erlang.js");
/* harmony import */ var codemirror_mode_erlang_erlang_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_erlang_erlang_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var codemirror_mode_fortran_fortran_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! codemirror/mode/fortran/fortran.js */ "./node_modules/codemirror/mode/fortran/fortran.js");
/* harmony import */ var codemirror_mode_fortran_fortran_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_fortran_fortran_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var codemirror_mode_go_go_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! codemirror/mode/go/go.js */ "./node_modules/codemirror/mode/go/go.js");
/* harmony import */ var codemirror_mode_go_go_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_go_go_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! codemirror/mode/javascript/javascript.js */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var codemirror_mode_lua_lua_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! codemirror/mode/lua/lua.js */ "./node_modules/codemirror/mode/lua/lua.js");
/* harmony import */ var codemirror_mode_lua_lua_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_lua_lua_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var codemirror_mode_pascal_pascal_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! codemirror/mode/pascal/pascal.js */ "./node_modules/codemirror/mode/pascal/pascal.js");
/* harmony import */ var codemirror_mode_pascal_pascal_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_pascal_pascal_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! codemirror/mode/perl/perl.js */ "./node_modules/codemirror/mode/perl/perl.js");
/* harmony import */ var codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_perl_perl_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var codemirror_mode_r_r_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! codemirror/mode/r/r.js */ "./node_modules/codemirror/mode/r/r.js");
/* harmony import */ var codemirror_mode_r_r_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_r_r_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var codemirror_mode_ruby_ruby_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! codemirror/mode/ruby/ruby.js */ "./node_modules/codemirror/mode/ruby/ruby.js");
/* harmony import */ var codemirror_mode_ruby_ruby_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_ruby_ruby_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var codemirror_mode_rust_rust_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! codemirror/mode/rust/rust.js */ "./node_modules/codemirror/mode/rust/rust.js");
/* harmony import */ var codemirror_mode_rust_rust_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_rust_rust_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! codemirror/mode/sql/sql.js */ "./node_modules/codemirror/mode/sql/sql.js");
/* harmony import */ var codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var codemirror_mode_haskell_haskell_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! codemirror/mode/haskell/haskell.js */ "./node_modules/codemirror/mode/haskell/haskell.js");
/* harmony import */ var codemirror_mode_haskell_haskell_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_haskell_haskell_js__WEBPACK_IMPORTED_MODULE_34__);
// base style
 // theme css

 // language

 // active-line.js

 // styleSelectedText


 // highlightSelectionMatches




 // keyMap




 // foldGutter





 // scroll


 // languages


















/***/ }),

/***/ "./resources/js/components/chats/CodeBox.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/chats/CodeBox.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeBox_vue_vue_type_template_id_007c4562_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBox.vue?vue&type=template&id=007c4562&scoped=true& */ "./resources/js/components/chats/CodeBox.vue?vue&type=template&id=007c4562&scoped=true&");
/* harmony import */ var _CodeBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeBox.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/CodeBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CodeBox_vue_vue_type_style_index_0_id_007c4562_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true& */ "./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CodeBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeBox_vue_vue_type_template_id_007c4562_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CodeBox_vue_vue_type_template_id_007c4562_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "007c4562",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/CodeBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/CodeBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/chats/CodeBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_style_index_0_id_007c4562_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=style&index=0&id=007c4562&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_style_index_0_id_007c4562_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_style_index_0_id_007c4562_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_style_index_0_id_007c4562_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_style_index_0_id_007c4562_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_style_index_0_id_007c4562_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/CodeBox.vue?vue&type=template&id=007c4562&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/chats/CodeBox.vue?vue&type=template&id=007c4562&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_template_id_007c4562_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeBox.vue?vue&type=template&id=007c4562&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/CodeBox.vue?vue&type=template&id=007c4562&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_template_id_007c4562_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeBox_vue_vue_type_template_id_007c4562_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);