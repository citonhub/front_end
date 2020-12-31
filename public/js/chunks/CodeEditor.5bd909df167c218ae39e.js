(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CodeEditor"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeEditor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    this.detectchange(this.$root.EditorLanguage);
    this.$root.codeEditorComponent = this;
    this.$root.projectPanelComponent.showAlert('Happy coding!', 'Your work is auto saved', 'info');
  },
  components: {
    codemirror: vue_codemirror__WEBPACK_IMPORTED_MODULE_0__["codemirror"]
  },
  computed: {
    codemirror: function codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  data: function data() {
    return {
      that: this,
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        filepath: '',
        NewMsg: '',
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        autocorrect: true,
        keyMap: "sublime",
        scrollbarStyle: "overlay",
        mode: 'text/html',
        theme: 'base16-dark',
        extraKeys: {
          "F11": function F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          "Esc": function Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }
        }
      },
      items: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'PYTHON', 'SQL', 'VUEJS'],
      language: this.$root.EditorLanguage,
      code: this.$root.codeEditorContent,
      selectedFileId: this.$root.selectedFileId,
      Alert: false,
      alertMsg: '',
      loading: false,
      canChange: true
    };
  },
  methods: {
    setEditorPosition: function setEditorPosition(codemirror) {
      if (this.canChange) {
        var storedCodePosition = this.$root.getLocalStore('CodeFile' + this.$root.selectedFileId + this.$root.username);
        storedCodePosition.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);
            codemirror.scrollTo(finalResult.left, finalResult.top);
          } else {
            codemirror.scrollTo(0, 0);
          }
        });
      }

      this.canChange = false;
    },
    copyText: function copyText() {
      var spacelink = document.querySelector('#codeBoxContent');
      spacelink.setAttribute('type', 'text');
      spacelink.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';

        if (msg == 'successful') {
          this.showAlert(5000, 'Copied!');
        } else {
          this.showAlert(5000, 'Oops! unable to copy');
        }
      } catch (err) {}
      /* unselect the range */


      spacelink.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    },
    trackUser: function trackUser() {
      var _this2 = this;

      axios.get('/fetch-profile-' + this.$root.username).then(function (response) {
        if (response.status == 200) {
          _this2.$root.userPageTrack = response.data[2];
        }
      })["catch"](function (error) {});
    },
    onCmCursorActivity: function onCmCursorActivity(codemirror) {
      console.debug('onCmCursorActivity', codemirror);
    },
    loadPage: function loadPage() {
      this.$router.push({
        path: '/board/projects/panel/' + this.$route.params.project_slug + '/panel-loader'
      });
    },
    fetchProject: function fetchProject() {
      var _this3 = this;

      if (this.$root.projectData.length != 0) {} else {
        axios.get('/fetch-project-' + this.$route.params.project_slug).then(function (response) {
          if (response.status == 200) {
            _this3.$root.projectData = response.data[0];
            _this3.$root.ProjectMembers = response.data[2];
          }
        })["catch"](function (error) {});
      }
    },
    showAlert: function showAlert(duration, text) {
      this.Alert = true;
      this.alertMsg = text;

      var _this = this;

      setTimeout(function () {
        _this.Alert = false;
      }, duration);
    },
    checkIfOwner: function checkIfOwner() {
      var _this4 = this;

      var member = this.$root.ProjectMembers.filter(function (member) {
        return member.user_id == _this4.$root.user_temp_id;
      });

      if (member.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    showCode: function showCode(codeBox) {
      var _this5 = this;

      this.$root.selectedFileId = codeBox.id;
      this.selectedFileId = codeBox.id;
      this.$root.SelectedCodeBox = codeBox;

      if (this.$root.SelectedCodeBox.type == 'front_end') {
        this.$root.selectedFileCatType = 'front-end';
        var codeData = this.$root.projectData.project_files.code_files.filter(function (file) {
          return file.id == _this5.$root.selectedFileId;
        });
        codeData = codeData[0];
        this.language = codeData.language_type;
        this.detectchange(this.language);
        this.code = codeData.content;
      }

      if (this.$root.SelectedCodeBox.type == 'back-end') {
        this.$root.selectedFileCatType = 'back-end';

        var _codeData = this.$root.projectData.project_files.code_files.filter(function (file) {
          return file.id == _this5.$root.selectedFileId;
        });

        _codeData = _codeData[0];
        this.language = _codeData.language_type;
        this.detectchange(this.language);
        this.code = _codeData.content;
      }

      if (this.$root.SelectedCodeBox.type == 'code_files' || this.$root.SelectedCodeBox.type == 'code_file') {
        this.$root.selectedFileCatType = 'code_files';

        var _codeData2 = this.$root.projectData.project_files.code_files.filter(function (file) {
          return file.id == _this5.$root.selectedFileId;
        });

        _codeData2 = _codeData2[0];
        this.language = _codeData2.language_type;
        this.detectchange(this.language);
        this.code = _codeData2.content;
      }

      this.canChange = true;
    },
    removeCode: function removeCode(codeBox) {
      var newarray = this.$root.codeEditorArray.filter(function (file) {
        return file.id != codeBox.id;
      });
      this.$root.codeEditorArray = newarray;
    },
    saveFileContent: function saveFileContent() {
      var _this6 = this;

      if (this.checkIfOwner()) {} else {
        return;
      }

      this.loading = true;
      axios.post('/save-code-content-project', {
        project_slug: this.$route.params.project_slug,
        file_id: this.$root.selectedFileId,
        content: this.code,
        code_category: this.$root.selectedFileCatType
      }).then(function (response) {
        if (response.status == 200) {
          _this6.$root.codeEditorArray.map(function (codeFile) {
            if (codeFile.id == _this6.selectedFileId) {
              codeFile.content = _this6.code;
            }
          });

          if (_this6.$root.SelectedCodeBox.file_name == 'extensions') {
            var indexFile = _this6.$root.projectData.project_files.code_files.filter(function (codeFile) {
              return codeFile.file_name == 'index' && codeFile.language_type == 'HTML';
            });

            _this6.handleIndexFile(indexFile[0]);
          }

          _this6.loading = false;
        }
      })["catch"](function (error) {
        _this6.showAlert(5000, 'Failed- ' + error);

        _this6.loading = false;
      });
    },
    handleIndexFile: function handleIndexFile(indexFile) {
      axios.post('/save-code-content-project', {
        project_slug: this.$route.params.project_slug,
        file_id: indexFile.id,
        content: indexFile.content,
        code_category: this.$root.selectedFileCatType
      }).then(function (response) {})["catch"](function (error) {});
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
    onCmCodeChange: function onCmCodeChange(code) {
      var _this7 = this;

      this.$root.projectData.project_files.code_files.map(function (file) {
        if (file.id == _this7.$root.selectedFileId) {
          file.content = code;
        }
      });
      this.$root.codeEditorContent = code;
      this.$root.LocalStore('user_projects_data_' + this.$route.params.project_slug + this.$root.username, this.$root.projectData);
      setTimeout(function () {
        _this7.saveFileContent();
      }, 2000);
    },
    saveFileHeight: function saveFileHeight(codemirror) {
      this.$root.LocalStore('CodeFile' + this.$root.selectedFileId + this.$root.username, codemirror.getScrollInfo());
    },
    languageExtensions: function languageExtensions(language) {
      if (language == 'HTML') {
        return 'html';
      }

      if (language == 'CSS') {
        return 'css';
      }

      if (language == 'VUE') {
        return 'vue';
      }

      if (language == 'MD') {
        return 'md';
      }

      if (language == 'PYTHON(3.8.1)') {
        return 'py';
      }

      if (language == 'PYTHON For ML(3.7.7)') {
        return 'py';
      }

      if (language == 'PYTHON(2.7.17)') {
        return 'py';
      }

      if (language == 'PHP') {
        return 'php';
      }

      if (language == 'JAVASCRIPT(Node)') {
        return 'js';
      }

      if (language == 'JAVASCRIPT') {
        return 'js';
      }

      if (language == 'SQL') {
        return 'sql';
      }

      if (language == 'C') {
        return 'c';
      }

      if (language == 'C++') {
        return 'cpp';
      }

      if (language == 'JAVA') {
        return 'java';
      }

      if (language == 'C#') {
        return 'cs';
      }

      if (language == 'ERLANG') {
        return 'erl';
      }

      if (language == 'KOTLIN') {
        return 'kt';
      }

      if (language == 'FOTRAN') {
        return 'for';
      }

      if (language == 'PERL') {
        return 'pl';
      }

      if (language == 'R') {
        return 'r';
      }

      if (language == 'GO') {
        return 'go';
      }

      if (language == 'HASKELL') {
        return 'hs';
      }

      if (language == 'RUBY') {
        return 'rb';
      }

      if (language == 'LUA') {
        return 'lua';
      }

      if (language == 'PASCAL') {
        return 'pas';
      }

      if (language == 'RUST') {
        return 'rs';
      }

      if (language == 'SCALA') {
        return 'scala';
      }

      if (language == 'SWIFT') {
        return 'swift';
      }

      if (language == 'TYPESCRIPT') {
        return 'ts';
      }
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

      if (language == 'VUE') {
        this.cmOption.mode = 'text/x-vue';
      }

      if (language == 'MD') {
        this.cmOption.mode = 'text/x-markdown';
      }

      if (language == 'PYTHON') {
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

      if (language == 'JAVASCRIPT') {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scroller[data-v-4423e114]::-webkit-scrollbar {\n  height: 5px;\n}\n.codeboxnew[data-v-4423e114],\n    .pre[data-v-4423e114] {\n      width: 100%;\n      margin: 0;\n       display: block;\n      font-size: 13px;\n      line-height: 1.6;\n      word-break: break-all;\n      word-wrap: break-word;\n      letter-spacing: 1px !important;\n      overflow: auto;\n}\n.codeboxnew[data-v-4423e114]{\n       height: 100%;\n       border: 1px solid #e6e6e6;\n        position:absolute;\n        width:100%;\n       \n        overflow-x: hidden;\n        overflow-y:hidden;\n}\n.scroller[data-v-4423e114]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=template&id=4423e114&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeEditor.vue?vue&type=template&id=4423e114&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row py-0 my0" }, [
    _c(
      "div",
      {
        staticClass: "col-12 px-0 py-0 mt-2 mt-md-0 d-flex flex-column",
        staticStyle: {
          position: "absolute",
          height: "100%",
          top: "0%",
          left: "0"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "col-12 my-0 py-2 d-md-flex scroller ",
            staticStyle: {
              "overflow-x": "auto",
              "white-space": "nowrap",
              height: "60px",
              left: "0",
              background: "#F3F8FC"
            }
          },
          _vm._l(this.$root.codeEditorArray, function(file, index) {
            return _c(
              "v-chip",
              {
                key: index,
                staticClass: "ma-1 mx-1 ml-0 fileText d-inline-block",
                style:
                  _vm.that.$root.selectedFileId == file.id
                    ? "color:white;background-color:#3C87CD;"
                    : "background:transparent;border:1px solid #3C87CD;",
                attrs: { close: "", small: "" },
                on: {
                  "click:close": function($event) {
                    return _vm.removeCode(file)
                  },
                  click: function($event) {
                    return _vm.showCode(file)
                  }
                }
              },
              [
                _vm._v(
                  "\n   " +
                    _vm._s(
                      file.file_name +
                        "." +
                        _vm.languageExtensions(file.language_type)
                    ) +
                    "\n "
                )
              ]
            )
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "codeboxnew ", staticStyle: { height: "100%" } },
          [
            _c("codemirror", {
              staticStyle: { height: "100%" },
              attrs: { options: _vm.cmOption },
              on: {
                cursorActivity: _vm.onCmCursorActivity,
                ready: _vm.onCmReady,
                focus: _vm.onCmFocus,
                scroll: _vm.saveFileHeight,
                blur: _vm.onCmBlur,
                update: _vm.setEditorPosition,
                input: _vm.onCmCodeChange
              },
              model: {
                value: _vm.code,
                callback: function($$v) {
                  _vm.code = $$v
                },
                expression: "code"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-btn",
          {
            staticClass: "d-lg-inline-block d-none",
            staticStyle: {
              "z-index": "99999999",
              position: "absolute",
              bottom: "3%",
              right: "3%"
            },
            attrs: { medium: "", fab: "", color: "#3C87CD" },
            on: { click: _vm.loadPage }
          },
          [
            _c(
              "v-icon",
              { staticStyle: { "font-size": "25px", color: "white" } },
              [_vm._v("las la-play")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-btn",
          {
            staticClass: "d-lg-none d-inline-block",
            staticStyle: {
              "z-index": "99999999",
              position: "fixed",
              bottom: "3%",
              right: "3%"
            },
            attrs: { fab: "", color: "#3C87CD" },
            on: { click: _vm.loadPage }
          },
          [
            _c(
              "v-icon",
              { staticStyle: { "font-size": "24px", color: "white" } },
              [_vm._v("las la-play")]
            )
          ],
          1
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

/***/ "./resources/js/components/projects/CodeEditor.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/projects/CodeEditor.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeEditor_vue_vue_type_template_id_4423e114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeEditor.vue?vue&type=template&id=4423e114&scoped=true& */ "./resources/js/components/projects/CodeEditor.vue?vue&type=template&id=4423e114&scoped=true&");
/* harmony import */ var _CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/CodeEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CodeEditor_vue_vue_type_style_index_0_id_4423e114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css& */ "./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeEditor_vue_vue_type_template_id_4423e114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CodeEditor_vue_vue_type_template_id_4423e114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4423e114",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/CodeEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/CodeEditor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/projects/CodeEditor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_style_index_0_id_4423e114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=style&index=0&id=4423e114&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_style_index_0_id_4423e114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_style_index_0_id_4423e114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_style_index_0_id_4423e114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_style_index_0_id_4423e114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_style_index_0_id_4423e114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/projects/CodeEditor.vue?vue&type=template&id=4423e114&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/projects/CodeEditor.vue?vue&type=template&id=4423e114&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_template_id_4423e114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditor.vue?vue&type=template&id=4423e114&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeEditor.vue?vue&type=template&id=4423e114&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_template_id_4423e114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_template_id_4423e114_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);