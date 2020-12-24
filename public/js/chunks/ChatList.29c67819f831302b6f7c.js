(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-to-text */ "./node_modules/html-to-text/index.js");
/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html_to_text__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {},
  methods: {
    openChat: function openChat() {
      this.$router.push({
        path: '/channels/space_id/content'
      });
      this.$root.chatComponent.chatIsOpen = true;
    },
    getUnread: function getUnread(space_id) {
      var unreadStoredMsg = this.$root.getLocalStore('unread_messages_' + space_id + this.$root.username);
      unreadStoredMsg.then(function (result) {
        if (result != null) {
          var finalResultUnread = JSON.parse(result);
          return finalResultUnread.length;
        } else {
          return 0;
        }
      });
    },
    generateMessageString: function generateMessageString(message, count) {
      var finalString = '';

      if (message.type == null) {
        finalString = html_to_text__WEBPACK_IMPORTED_MODULE_0___default()(message.content, {
          wordwrap: 100
        });
      }

      if (message.type == 'image') {
        finalString = 'sent an images';
      }

      if (message.type == 'code') {
        finalString = 'shared a code';
      }

      if (message.type == 'video') {
        finalString = 'sent a video';
      }

      if (message.type == 'audio') {
        finalString = 'sent a audio';
      }

      if (message.type == 'project') {
        finalString = 'share a project';
      }

      return finalString;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.messagesBadges[data-v-f4121c96]{\n    \n    color: #ffffff;\n    background: #3C87CD;\n    font-size: 11px;\n    font-family: BodyFont;\n    font-weight: bolder;\n    align-items: center;\n    justify-content: center;\n    height:20px;\n    width:20px;\n    border-radius:50%;\n}\n.messageBox[data-v-f4121c96]:hover{\n    background:whitesmoke;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=template&id=f4121c96&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatList.vue?vue&type=template&id=f4121c96&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row px-1" }, [
    _c(
      "div",
      {
        staticClass: "col-12 px-1 d-flex flex-row py-0 messageBox",
        staticStyle: {
          "align-items": "center",
          "justify-content": "center",
          background: "whitesmoke"
        },
        on: { click: _vm.openChat }
      },
      [
        _c("div", {
          staticClass: " mr-2 py-3",
          staticStyle: {
            "border-radius": "50%",
            height: "40px",
            width: "40px",
            "background-color": "#c5c5c5",
            "background-image": "url(/imgs/imgproj3.jpeg)",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            border: "1px solid transparent"
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ]
    ),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "px-0 py-3",
        staticStyle: { width: "85%", "border-bottom": "1px solid #e6e6e6" }
      },
      [
        _c("div", { staticClass: "pr-1" }, [
          _c("div", { staticClass: "row py-0 my-0 px-0" }, [
            _c("div", { staticClass: "col-8 py-0 my-0 " }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "14px",
                    "font-family": "BodyFont"
                  }
                },
                [_vm._v("Channel Name 1")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 py-0 my-0  text-right" }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "11px",
                    "font-family": "BodyFont",
                    color: "gray",
                    "margin-right": "0px"
                  }
                },
                [_vm._v("2:12 PM")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: " d-flex flex-row",
            staticStyle: { "align-items": "center" }
          },
          [
            _c(
              "div",
              {
                staticClass: " px-0 py-0 my-0 pr-1  ",
                staticStyle: {
                  width: "100%",
                  "white-space": "nowrap",
                  overflow: "hidden",
                  "text-overflow": "ellipsis",
                  "font-size": "13px",
                  color: "grey",
                  "font-family": "BodyFont"
                }
              },
              [
                _vm._v(
                  "\n                                         adekunle:great i would love to see you jhjjhjbjhjhjhhjhg\n                                   "
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: " px-0 py-0 my-0 text-right " }, [
              _c(
                "span",
                { staticClass: "messagesBadges d-flex ml-lg-0 ml-md-5 ml-0" },
                [_vm._v("5")]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 px-1 d-flex flex-row py-0 messageBox",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c("div", {
          staticClass: " mr-2 py-3",
          staticStyle: {
            "border-radius": "50%",
            height: "40px",
            width: "40px",
            "background-color": "#c5c5c5",
            "background-image": "url(/imgs/imgproj3.jpeg)",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            border: "1px solid transparent"
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "px-0 py-3",
            staticStyle: { width: "85%", "border-bottom": "1px solid #e6e6e6" }
          },
          [
            _c("div", { staticClass: "pr-1" }, [
              _c("div", { staticClass: "row py-0 my-0 px-0" }, [
                _c("div", { staticClass: "col-8 py-0 my-0 " }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        "font-family": "BodyFont"
                      }
                    },
                    [_vm._v("Channel Name 1")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4 py-0 my-0  text-right" }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "11px",
                        "font-family": "BodyFont",
                        color: "gray",
                        "margin-right": "0px"
                      }
                    },
                    [_vm._v("2:12 PM")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: " " }, [
              _c("div", { staticClass: "row py-0 my-0 px-0" }, [
                _c("div", { staticClass: "col-10 py-0 my-0 " }, [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        color: "grey",
                        "font-family": "BodyFont"
                      }
                    },
                    [_vm._v("adekunle:great i would love to see you")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-2 py-0 my-0  text-right" }, [
                  _c(
                    "span",
                    {
                      staticClass: "messagesBadges d-flex ml-lg-0 ml-md-5 ml-0"
                    },
                    [_vm._v("5")]
                  )
                ])
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ChatList.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chats/ChatList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatList_vue_vue_type_template_id_f4121c96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatList.vue?vue&type=template&id=f4121c96&scoped=true& */ "./resources/js/components/chats/ChatList.vue?vue&type=template&id=f4121c96&scoped=true&");
/* harmony import */ var _ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatList.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatList_vue_vue_type_style_index_0_id_f4121c96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css& */ "./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatList_vue_vue_type_template_id_f4121c96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatList_vue_vue_type_template_id_f4121c96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f4121c96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChatList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_f4121c96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=style&index=0&id=f4121c96&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_f4121c96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_f4121c96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_f4121c96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_f4121c96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_style_index_0_id_f4121c96_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/ChatList.vue?vue&type=template&id=f4121c96&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatList.vue?vue&type=template&id=f4121c96&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_f4121c96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatList.vue?vue&type=template&id=f4121c96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=template&id=f4121c96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_f4121c96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatList_vue_vue_type_template_id_f4121c96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);