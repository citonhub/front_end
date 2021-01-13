(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MoreOptions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptions.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MoreOptions.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showDelete: false,
      showCopy: false,
      contentValue: ''
    };
  },
  components: {},
  mounted: function mounted() {
    this.setOptions();
  },
  methods: {
    setOptions: function setOptions() {
      var message = this.$root.replyMessage;

      if (message.type == null || message.type == 'text' || message.type == 'action' || message.type == 'code') {
        this.showCopy = true;
      }

      if (this.checkOwner(message.user_id)) {
        this.showDelete = true;
      }

      if (message.type == null || message.type == 'text' || message.type == 'action') {
        this.contentValue = message.content;
      }

      if (message.type == 'code') {
        this.contentValue = message.code.content;
      }
    },
    replyMessage: function replyMessage() {
      this.$root.chatComponent.showMoreOptions = false;
      this.$root.showRootReply = true;
      this.$root.is_reply = true;
      this.$root.channelBottomComp.reFocusEditor();
    },
    copyMessage: function copyMessage() {},
    deleteMessage: function deleteMessage() {},
    checkOwner: function checkOwner(message_user_id) {
      if (this.$root.user_temp_id == message_user_id) {
        return true;
      } else {
        return false;
      }
    },
    copyText: function copyText() {
      var spacelink = document.querySelector('#contentContainer');
      spacelink.setAttribute('type', 'text');
      spacelink.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';

        if (msg == 'successful') {
          this.$root.chatComponent.showAlert('Copied!', 'Copied to clipboard', 'error');
        } else {
          this.$root.chatComponent.showAlert('Oops', 'Unable to copy content', 'error');
        }
      } catch (err) {}
      /* unselect the range */


      spacelink.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptions.vue?vue&type=template&id=cc0c9f8c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MoreOptions.vue?vue&type=template&id=cc0c9f8c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-card",
    { staticClass: "py-0 px-0", staticStyle: { width: "200px" } },
    [
      _c(
        "div",
        { staticClass: "col-12 px-0 py-1 d-flex flex-column" },
        [
          _c(
            "v-card",
            {
              staticClass: "px-2 py-2 d-flex flex-row",
              staticStyle: { "align-items": "center" },
              attrs: { tile: "", flat: "" },
              on: {
                click: function($event) {
                  return _vm.replyMessage()
                }
              }
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [_vm._v("las la-reply")]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "BodyFont",
                    "font-size": "13px",
                    color: "grey"
                  }
                },
                [_vm._v("Reply")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.showCopy
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.copyMessage()
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-copy")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        color: "grey"
                      }
                    },
                    [_vm._v("Copy")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showDelete
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.deleteMessage()
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-trash")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        color: "grey"
                      }
                    },
                    [_vm._v("Delete")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("textarea", {
        staticStyle: { display: "none" },
        attrs: { type: "hidden", id: "contentContainer" },
        domProps: { value: _vm.contentValue }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/MoreOptions.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/MoreOptions.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreOptions_vue_vue_type_template_id_cc0c9f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=template&id=cc0c9f8c& */ "./resources/js/components/chats/MoreOptions.vue?vue&type=template&id=cc0c9f8c&");
/* harmony import */ var _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoreOptions_vue_vue_type_template_id_cc0c9f8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoreOptions_vue_vue_type_template_id_cc0c9f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/MoreOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/MoreOptions.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/MoreOptions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/MoreOptions.vue?vue&type=template&id=cc0c9f8c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/chats/MoreOptions.vue?vue&type=template&id=cc0c9f8c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_cc0c9f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=template&id=cc0c9f8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptions.vue?vue&type=template&id=cc0c9f8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_cc0c9f8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_cc0c9f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);