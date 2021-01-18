(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-bar-chat"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/TopBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/TopBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showSideBar: false,
      searchType: '',
      that: this,
      searchValue: ''
    };
  },
  mounted: function mounted() {
    this.$root.TopBarComponent = this;
  },
  methods: {
    searchChatList: function searchChatList() {
      var query = this.searchValue.toLowerCase;
      var chatListResult = this.$root.ChatList.filter(function (chat) {
        var nameValue = '';

        if (chat.type == 'Team' || chat.type == 'Channel') {
          nameValue = chat.name;
        }

        if (chat.type == 'Bot' && chat.bot_data != null) {
          nameValue = chat.bot_data.name;
        }

        if (chat.type == 'Direct') {
          nameValue = chat.userInfo.username;
        }

        nameValue.toLowerCase(); // escapes RegExp special characters

        var escapePattern = function escapePattern(query) {
          return query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        }; // converts ILIKE pattern to a RegExp object


        var ilikeToRegExp = function ilikeToRegExp(pattern) {
          return new RegExp("^".concat(escapePattern(pattern), "$") // convert ILIKE wildcards, don't match escaped
          .replace(/(?<![\\])%/g, '.*').replace(/(?<![\\])_/g, '.') // replace ILIKE escapes
          .replace(/\\%/g, '%').replace(/\\_/g, '_'), 'i');
        };

        return ilikeToRegExp(query).test(nameValue);
      });
      this.$root.searchChatList = chatListResult;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/TopBar.vue?vue&type=template&id=005e4ddd&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/TopBar.vue?vue&type=template&id=005e4ddd&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "col-12 d-block d-md-none py-2 ",
        staticStyle: {
          position: "absolute",
          top: "0",
          left: "0",
          "font-family": "BodyFont",
          "z-index": "99999999999",
          background: "#ffffff"
        }
      },
      [
        _c(
          "div",
          { staticClass: "row px-2" },
          [
            _c(
              "v-card",
              {
                staticClass: "col-12 py-2 px-1",
                staticStyle: { "border-radius": "7px" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-2 py-0  text-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              _vm.that.$root.showSideBar = true
                            }
                          }
                        },
                        [
                          _c(
                            "v-icon",
                            {
                              staticStyle: {
                                "font-size": "25px",
                                color: "#263238"
                              }
                            },
                            [_vm._v("las la-bars")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-6 d-flex py-0 px-1",
                      staticStyle: {
                        "justify-content": "center",
                        "align-items": "center"
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchValue,
                            expression: "searchValue"
                          }
                        ],
                        staticClass: "py-2 px-2",
                        staticStyle: {
                          width: "100%",
                          heigth: "100%",
                          "font-size": "12px"
                        },
                        attrs: { placeholder: "Search", type: "search" },
                        domProps: { value: _vm.searchValue },
                        on: {
                          keydown: _vm.searchChatList,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.searchValue = $event.target.value
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-2 text-center py-0" },
                    [
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [
                          _c(
                            "v-icon",
                            {
                              staticStyle: {
                                "font-size": "25px",
                                color: "#263238"
                              }
                            },
                            [_vm._v("las la-bell")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-2 d-flex px-1 py-0",
                      staticStyle: {
                        "justify-content": "center",
                        "align-items": "center"
                      }
                    },
                    [
                      _c("div", {
                        staticStyle: {
                          "border-radius": "50%",
                          height: "32px",
                          width: "32px",
                          "background-color": "#c5c5c5",
                          "background-image": "url(/imgs/img3.jpg)",
                          "background-size": "100%",
                          border: "1px solid transparent"
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/TopBar.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/chats/TopBar.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_005e4ddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=005e4ddd&scoped=true& */ "./resources/js/components/chats/TopBar.vue?vue&type=template&id=005e4ddd&scoped=true&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_005e4ddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_005e4ddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "005e4ddd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/TopBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/chats/TopBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/TopBar.vue?vue&type=template&id=005e4ddd&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/chats/TopBar.vue?vue&type=template&id=005e4ddd&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_005e4ddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=005e4ddd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/TopBar.vue?vue&type=template&id=005e4ddd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_005e4ddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_005e4ddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);