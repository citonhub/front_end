(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MoreOptionChat"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptionChat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MoreOptionChat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    controlAction: function controlAction(type) {
      if (type == 'profile') {
        this.goToProfile(this.$root.selectedSpace.userInfo.username);
      }

      if (type == 'channel') {
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/channel_info'
        });
      }

      if (type == 'diary') {
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/channel_info'
        });
      }

      if (type == 'support') {
        this.$root.showProcessorFromChat = true;
        this.$root.fromSupportDirectlink = true;
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/payment'
        });
      }

      if (type == 'support_link') {
        this.copyMessage();
      }

      if (type == 'reset') {
        this.resetChat();
      }
    },
    resetChat: function resetChat() {
      this.$root.chatComponent.messageIsDone = false;
      this.$root.removeLocalStorage('full_space_' + this.$root.selectedSpace.space_id + this.$root.username, 'chat_messages');
    },
    copyMessage: function copyMessage() {
      var copyToClipboard = function copyToClipboard(str) {
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

      copyToClipboard('https://link.citonhub.com/support/' + this.$root.selectedSpace.space_id);
      this.$root.chatComponent.showAlert('Copied!', 'Copied to clipboard', 'success');
    },
    goToProfile: function goToProfile(username) {
      this.$root.selectedUsername = username;
      this.$router.push({
        path: '/profile-view/' + username
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "py-0 px-0 col-lg-12 col-md-8 col-10",
      staticStyle: { "min-width": "200px" }
    },
    [
      _c(
        "div",
        { staticClass: "col-12 px-0 py-1 d-flex flex-column" },
        [
          this.$root.selectedSpace.type == "Channel" ||
          this.$root.selectedSpace.type == "SubSpace" ||
          this.$root.selectedSpace.type == "Team"
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.controlAction("profile")
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-play-circle")
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
                    [_vm._v("Playlists")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          this.$root.selectedSpace.type == "Channel" ||
          this.$root.selectedSpace.type == "SubSpace" ||
          this.$root.selectedSpace.type == "Team"
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.controlAction("profile")
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-folder")
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
                    [_vm._v("Resources")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          this.$root.selectedSpace.type == "Direct"
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.controlAction("profile")
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [_vm._v("las la-cog")]),
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
                    [_vm._v("View profile")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          this.$root.selectedSpace.type == "Bot"
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.controlAction("diary")
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v(" las la-cog")
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
                    [_vm._v("Diary info")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          this.$root.selectedSpace.type == "Channel" ||
          this.$root.selectedSpace.type == "SubSpace" ||
          this.$root.selectedSpace.type == "Team"
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.controlAction("channel")
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [_vm._v("las la-cog")]),
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
                    [_vm._v("Channel info")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          (this.$root.selectedSpace.type == "Channel" ||
            this.$root.selectedSpace.type == "SubSpace" ||
            this.$root.selectedSpace.type == "Team") &&
          this.$root.selectedSpace.payment_option == "support"
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.controlAction("support")
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-hands-helping")
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
                    [_vm._v("Support " + _vm._s(this.$root.selectedSpace.name))]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          (this.$root.selectedSpace.type == "Channel" ||
            this.$root.selectedSpace.type == "SubSpace" ||
            this.$root.selectedSpace.type == "Team") &&
          this.$root.selectedSpace.payment_option == "support"
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.controlAction("support_link")
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-link")
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
                    [_vm._v("Copy support link")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-2 py-2 d-flex flex-row",
              staticStyle: { "align-items": "center" },
              attrs: { tile: "", flat: "" },
              on: {
                click: function($event) {
                  return _vm.controlAction("reset")
                }
              }
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [
                _vm._v(" las la-sync-alt")
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
                [_vm._v("Reset chat")]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/MoreOptionChat.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/chats/MoreOptionChat.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreOptionChat_vue_vue_type_template_id_b50ec5fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true& */ "./resources/js/components/chats/MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true&");
/* harmony import */ var _MoreOptionChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreOptionChat.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/MoreOptionChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoreOptionChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoreOptionChat_vue_vue_type_template_id_b50ec5fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoreOptionChat_vue_vue_type_template_id_b50ec5fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b50ec5fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/MoreOptionChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/MoreOptionChat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chats/MoreOptionChat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptionChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptionChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptionChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptionChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/chats/MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptionChat_vue_vue_type_template_id_b50ec5fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MoreOptionChat.vue?vue&type=template&id=b50ec5fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptionChat_vue_vue_type_template_id_b50ec5fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptionChat_vue_vue_type_template_id_b50ec5fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);