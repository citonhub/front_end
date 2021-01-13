(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReplyView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ReplyView.vue?vue&type=script&lang=js& ***!
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
var _require = __webpack_require__(/*! html-to-text */ "./node_modules/html-to-text/index.js"),
    htmlToText = _require.htmlToText;

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    closeReply: function closeReply() {
      this.$root.showRootReply = false;
      this.$root.replyMessage = [];
    },
    getReplyMsg: function getReplyMsg(replymessage) {
      var finalString = '';
      var message = replymessage;

      if (message.type == null || message.type == 'action') {
        finalString = htmlToText(message.content, {
          wordwrap: 100
        });
      }

      return finalString;
    },
    shortenContent: function shortenContent(content, limit) {
      if (content.length > limit) {
        var shortcontent = content.slice(0, limit);
        return shortcontent + '...';
      } else {
        return content;
      }
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.msgTextReplynew[data-v-6638d2a0]{\n  font-size: 13px;\n  color: #4d4d4d;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "px-2" }, [
    _c(
      "div",
      {
        staticClass: " py-2 px-2  text-left mb-1",
        staticStyle: {
          background: "#3C87CD",
          border: "1px solid transparent",
          "border-radius": "8px"
        }
      },
      [
        this.$root.replyMessage.type == null
          ? _c("div", { staticClass: "col-12 py-1 px-1  text-right" }, [
              _c("span", {
                staticClass: "msgTextReplynew text-left d-block",
                staticStyle: { color: "white" },
                domProps: {
                  innerHTML: _vm._s(
                    _vm.getReplyMsg(this.$root.replyMessage.content)
                  )
                }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$root.replyMessage.type == "action"
          ? _c("div", { staticClass: "col-12 py-1 px-1  text-right" }, [
              _c("span", {
                staticClass: "msgTextReplynew text-left d-block",
                staticStyle: { color: "white" },
                domProps: {
                  innerHTML: _vm._s(
                    _vm.getReplyMsg(this.$root.replyMessage.content)
                  )
                }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$root.replyMessage.type == "image"
          ? _c("div", { staticClass: "row py-0 my-0" }, [
              _c(
                "div",
                { staticClass: "col-3 py-0 my-0" },
                [
                  _c("v-img", {
                    staticClass: "d-inline-block ",
                    attrs: {
                      width: "50",
                      src:
                        "/imgs/space/" +
                        this.$root.replyMessage.image[0].image_name +
                        "." +
                        this.$root.replyMessage.image[0].image_extension
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 py-1 my-0 text-center px-0" }, [
                _c(
                  "span",
                  {
                    staticClass: "msgTextReplynew",
                    staticStyle: { color: "white" }
                  },
                  [
                    _vm._v(
                      _vm._s(this.$root.replyMessage.image.length) + " Images"
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3 py-0 my-0 text-center px-0" })
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$root.replyMessage.type == "project"
          ? _c("div", { staticClass: "row py-0 my-0" }, [
              _c("div", { staticClass: "col-3 py-0 my-0" }, [
                _c(
                  "span",
                  {
                    staticClass: "px-1 py-1",
                    staticStyle: {
                      background: "whitesmoke",
                      border: "1px solid transparent",
                      "border-radius": "50%"
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                      _vm._v("mdi-plus-network-outline mdi-18px")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 py-1 my-0 text-center px-0" }, [
                _c(
                  "span",
                  {
                    staticClass: "msgTextReplynew",
                    staticStyle: { color: "white" }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.shortenContent(
                          this.$root.replyMessage.project.title,
                          30
                        )
                      )
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3 py-0 my-0 text-center px-0" })
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$root.replyMessage.type == "video"
          ? _c("div", { staticClass: "row py-0 my-0" }, [
              _c("div", { staticClass: "col-3 py-0 my-0 text-center" }, [
                _c(
                  "span",
                  {
                    staticClass: "px-1 py-1",
                    staticStyle: {
                      background: "whitesmoke",
                      border: "1px solid transparent",
                      "border-radius": "50%"
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                      _vm._v("mdi-video mdi-18px")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-9 py-0 my-0 text-left px-0" }, [
                _c(
                  "span",
                  {
                    staticClass: "msgTextReplynew",
                    staticStyle: { color: "white" }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.shortenContent(
                          this.$root.replyMessage.video.display_name,
                          30
                        )
                      )
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$root.replyMessage.type == "audio"
          ? _c("div", { staticClass: "row py-0 my-0" }, [
              _c("div", { staticClass: "col-3 py-0 my-0 text-center" }, [
                _c(
                  "span",
                  {
                    staticClass: "px-1 py-1",
                    staticStyle: {
                      background: "whitesmoke",
                      border: "1px solid transparent",
                      "border-radius": "50%"
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                      _vm._v("mdi-music mdi-18px")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-9 py-0 my-0 text-left px-0" }, [
                _c(
                  "span",
                  {
                    staticClass: "msgTextReplynew",
                    staticStyle: { color: "white" }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.shortenContent(
                          this.$root.replyMessage.audio.display_name,
                          30
                        )
                      )
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$root.replyMessage.type == "file"
          ? _c("div", { staticClass: "row py-0 my-0" }, [
              _c("div", { staticClass: "col-3 py-0 my-0 text-center" }, [
                _c(
                  "span",
                  {
                    staticClass: "px-1 py-1",
                    staticStyle: {
                      background: "whitesmoke",
                      border: "1px solid transparent",
                      "border-radius": "50%"
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                      _vm._v("mdi-file mdi-18px")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-9 py-0 my-0 text-left px-0" }, [
                _c(
                  "span",
                  {
                    staticClass: "msgTextReplynew",
                    staticStyle: { color: "white" }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.shortenContent(
                          this.$root.replyMessage.file.display_name,
                          30
                        )
                      )
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        this.$root.replyMessage.type == "code"
          ? _c("div", { staticClass: "row py-0 my-0" }, [
              _c("div", { staticClass: "col-3 py-0 my-0 text-center" }, [
                _c(
                  "span",
                  {
                    staticClass: "px-1 py-1",
                    staticStyle: {
                      background: "whitesmoke",
                      border: "1px solid transparent",
                      "border-radius": "50%"
                    }
                  },
                  [
                    _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                      _vm._v("mdi-file mdi-18px")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-9 py-0 my-0 text-left px-0" }, [
                _c(
                  "span",
                  {
                    staticClass: "msgTextReplynew",
                    staticStyle: { color: "white" }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        this.$root.replyMessage.code.name +
                          "." +
                          _vm.languageExtensions(
                            this.$root.replyMessage.code.language_type
                          )
                      )
                    )
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "text-right label d-block ",
            staticStyle: { color: "white", "font-size": "12px" }
          },
          [_vm._v(_vm._s(this.$root.replyMessage.username))]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticStyle: {
          position: "absolute",
          height: "auto",
          width: "auto",
          right: "2%",
          top: "-5%",
          background: "rgba(38, 82, 89,0.6)",
          "border-radius": "50%",
          padding: "0px",
          "z-index": "99"
        }
      },
      [
        _c(
          "v-btn",
          { attrs: { icon: "" }, on: { click: _vm.closeReply } },
          [
            _c("v-icon", { attrs: { color: "#ffffff" } }, [
              _vm._v("mdi-close mdi-18px")
            ])
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

/***/ "./resources/js/components/chats/ReplyView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chats/ReplyView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReplyView_vue_vue_type_template_id_6638d2a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true& */ "./resources/js/components/chats/ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true&");
/* harmony import */ var _ReplyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplyView.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ReplyView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReplyView_vue_vue_type_style_index_0_id_6638d2a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css& */ "./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReplyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReplyView_vue_vue_type_template_id_6638d2a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReplyView_vue_vue_type_template_id_6638d2a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6638d2a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ReplyView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ReplyView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chats/ReplyView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_style_index_0_id_6638d2a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=style&index=0&id=6638d2a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_style_index_0_id_6638d2a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_style_index_0_id_6638d2a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_style_index_0_id_6638d2a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_style_index_0_id_6638d2a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_style_index_0_id_6638d2a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/chats/ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_template_id_6638d2a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ReplyView.vue?vue&type=template&id=6638d2a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_template_id_6638d2a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyView_vue_vue_type_template_id_6638d2a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);