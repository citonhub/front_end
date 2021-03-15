(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SubChannels"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/SubChannels.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      that: this,
      loadingSubSpace: false,
      subSpaces: null
    };
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
    this.fetchSubSpaces();
  },
  methods: {
    gotoGeneral: function gotoGeneral() {
      var spaceId = this.$root.selectedSpace.general_spaceId;
      this.$root.chatComponent.chatInnerSideBar = false;
      this.$root.chatComponent.chatIsOpen = false;
      this.$root.chatComponent.innerSideBarContent = '';
      this.$router.push({
        path: '/channels/' + spaceId + '/content'
      });
      this.$root.chatComponent.fetchMessages(spaceId);
      this.$root.chatComponent.messageIsDone = false;
      this.$root.chatComponent.chatIsOpen = true;
    },
    selectSubSpace: function selectSubSpace(subSpace) {
      var _this = this;

      this.$root.chatComponent.chatInnerSideBar = false;
      this.$root.chatComponent.innerSideBarContent = '';
      var storedMsg = this.$root.getLocalStore('full_space_' + subSpace.space_id + this.$root.username);
      storedMsg.then(function (result) {
        if (result != null) {
          _this.$router.push({
            path: '/channels/' + subSpace.space_id + '/content'
          });

          _this.$root.chatComponent.fetchMessages(subSpace.space_id);

          _this.$root.chatComponent.messageIsDone = false;
          _this.$root.chatComponent.chatIsOpen = true;
        } else {
          _this.$root.fromSupportDirectlink = false;
          _this.$root.showProcessorFromChat = false;

          _this.$router.push({
            path: '/channels/' + subSpace.space_id + '/payment'
          });
        }
      });
    },
    fetchSubSpaces: function fetchSubSpaces() {
      var _this2 = this;

      this.loadingSubSpace = true;
      var storedSubChat = this.$root.getLocalStore('sub_channels_' + this.$root.selectedSpace.general_spaceId + this.$root.username);
      storedSubChat.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          finalResult = finalResult.sub_channels;

          if (_this2.checkIfisOwner()) {
            _this2.$root.subSpaces = finalResult;
          } else {
            _this2.$root.subSpaces = finalResult.filter(function (space) {
              return space.type == 'Public' || space.type == 'Private' && space.is_member == true;
            });
          }

          _this2.checkForUnread();

          _this2.sortList();

          _this2.loadingSubSpace = false;

          _this2.checkForNewSubSpace();
        } else {
          axios.get('/fetch-sub-spaces-' + _this2.$root.selectedSpace.general_spaceId + '-' + _this2.$root.userDeviceId).then(function (response) {
            if (response.status == 200) {
              _this2.$root.LocalStore('sub_channels_' + _this2.$root.selectedSpace.general_spaceId + _this2.$root.username, response.data);

              var _finalResult = response.data.sub_channels;

              if (_this2.checkIfisOwner()) {
                _this2.$root.subSpaces = _finalResult;
              } else {
                _this2.$root.subSpaces = _finalResult.filter(function (space) {
                  return space.type == 'Public' || space.type == 'Private' && space.is_member == true;
                });
              }

              _this2.sortList();

              _this2.loadingSubSpace = false;
            }
          })["catch"](function (error) {
            _this2.loadingSubSpace = false;
          });
        }
      });
    },
    checkForNewSubSpace: function checkForNewSubSpace() {
      var _this3 = this;

      axios.get('/fetch-sub-spaces-' + this.$root.selectedSpace.general_spaceId + '-' + this.$root.userDeviceId).then(function (response) {
        if (response.status == 200) {
          _this3.$root.LocalStore('sub_channels_' + _this3.$root.selectedSpace.general_spaceId + _this3.$root.username, response.data);

          var finalResult = response.data.sub_channels; //      this.$root.subSpaces =  finalResult;

          _this3.sortList();
        }
      })["catch"](function (error) {});
    },
    checkForUnread: function checkForUnread() {
      var _this4 = this;

      this.$root.subSpaces.map(function (space) {
        var unreadStoredMsg = _this4.$root.getLocalStore('unread_messages_' + space.space_id + _this4.$root.username);

        unreadStoredMsg.then(function (result) {
          if (result != null) {
            var finalResultUnread = JSON.parse(result);
            space.unread = finalResultUnread.length;
          } else {
            space.unread = 0;
          }
        });
      });
    },
    sortList: function sortList() {
      this.$root.sortArray(this.$root.subSpaces);
    },
    checkIfisOwner: function checkIfisOwner() {
      var _this5 = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this5.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].is_admin;
      } else {
        return false;
      }
    },
    close: function close() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatInnerSideBar = false;
    },
    addSubChannel: function addSubChannel() {
      this.$root.componentIsLoading = true;
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = 'add_sub_channel';
      this.$router.push({
        path: '/channels/space_id/add_sub_channel'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.messagesBadges[data-v-7418bd3e]{\n    \n    color: #ffffff;\n    background: #5cb85c;\n    font-size: 11px;\n    font-family: BodyFont;\n    font-weight: bolder;\n    align-items: center;\n    justify-content: center;\n    height:20px;\n    width:20px;\n    border-radius:50%;\n}\n.messageBox[data-v-7418bd3e]:hover{\n    background:whitesmoke;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { background: "transparent" } }, [
    _c("div", { staticClass: "col-12 py-1 my-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
            staticStyle: {
              position: "sticky",
              background: "white",
              top: "0%",
              "border-bottom": "2px solid #c5c5c5",
              "align-items": "center"
            }
          },
          [
            _c(
              "div",
              { staticClass: " mr-1 col-2 py-0 px-1" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.close($event)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("mdi mdi-close")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-2 py-0 mr-1 px-1 text-right" },
              [
                _vm.checkIfisOwner()
                  ? _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.addSubChannel($event)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("las la-plus-circle")])],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 " },
          [
            this.$root.subSpaces == null
              ? _c(
                  "div",
                  { staticClass: "col-12 text-center" },
                  [
                    _c("v-progress-circular", {
                      attrs: {
                        color: "#3C87CD",
                        indeterminate: "",
                        width: "3",
                        size: "28"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            this.$root.subSpaces != null
              ? [
                  this.$root.subSpaces.length == 0
                    ? _c(
                        "div",
                        {
                          staticClass: "col-12 d-flex flex-column text-center"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "13px",
                                color: "gray"
                              }
                            },
                            [_vm._v(" No sub channels yet")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-2" },
                            [
                              _vm.checkIfisOwner()
                                ? _c(
                                    "v-btn",
                                    {
                                      staticStyle: {
                                        "font-size": "12px",
                                        "font-weight": "bolder",
                                        color: "white",
                                        "font-family": "MediumFont"
                                      },
                                      attrs: {
                                        small: "",
                                        rounded: "",
                                        color: "#3C87CD"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.addSubChannel($event)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            color: "white",
                                            "text-transform": "none"
                                          }
                                        },
                                        [_vm._v("Add")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.$root.subSpaces.length > 0
                    ? _c(
                        "div",
                        { staticClass: "row px-2" },
                        [
                          _vm.that.$root.selectedSpace.type == "SubSpace"
                            ? _c(
                                "v-card",
                                {
                                  staticClass: "col-12 py-2 px-1 messageBox",
                                  staticStyle: {
                                    "border-bottom": "1px solid #cccccc"
                                  },
                                  attrs: { flat: "", tile: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.gotoGeneral($event)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "row py-0 my-0" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-2 py-0 my-0" },
                                      [
                                        _c("v-icon", [
                                          _vm._v(
                                            "mdi-google-circles-extended mdi-18px"
                                          )
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-8 py-0 my-0 text-center"
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticStyle: {
                                              "font-size": "13px",
                                              color: "#1e4148",
                                              "font-family": "MediumFont"
                                            }
                                          },
                                          [_vm._v(" General")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "py-0 my-0 d-flex col-2",
                                      staticStyle: { "align-items": "center" }
                                    })
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(this.$root.subSpaces, function(space, index) {
                            return _c(
                              "v-card",
                              {
                                key: index,
                                staticClass: "col-12 py-2 px-1 messageBox",
                                staticStyle: {
                                  "border-bottom": "1px solid #cccccc"
                                },
                                attrs: { flat: "", tile: "" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.selectSubSpace(space)
                                  }
                                }
                              },
                              [
                                _c("div", { staticClass: "row py-0 my-0" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-2 py-0 my-0" },
                                    [
                                      space.type == "Public"
                                        ? _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "20px"
                                              }
                                            },
                                            [_vm._v("mdi-pound")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      space.type == "Private"
                                        ? _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "20px"
                                              }
                                            },
                                            [_vm._v("mdi-lock")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-8 py-0 my-0 text-center"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "13px",
                                            color: "#1e4148",
                                            "font-family": "MediumFont"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            " " + _vm._s(space.space_info.name)
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "py-0 my-0 d-flex col-2",
                                      staticStyle: { "align-items": "center" }
                                    },
                                    [
                                      space.unread > 0
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "messagesBadges d-flex ml-lg-0 ml-0"
                                            },
                                            [_vm._v(_vm._s(space.unread))]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    : _vm._e()
                ]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 py-0 px-0 text-center" }, [
      _c(
        "span",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("Sub Channels")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/SubChannels.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/SubChannels.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubChannels_vue_vue_type_template_id_7418bd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true& */ "./resources/js/components/chats/SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true&");
/* harmony import */ var _SubChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubChannels.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/SubChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubChannels_vue_vue_type_style_index_0_id_7418bd3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css& */ "./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubChannels_vue_vue_type_template_id_7418bd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubChannels_vue_vue_type_template_id_7418bd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7418bd3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/SubChannels.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/SubChannels.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/SubChannels.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubChannels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_style_index_0_id_7418bd3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=style&index=0&id=7418bd3e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_style_index_0_id_7418bd3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_style_index_0_id_7418bd3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_style_index_0_id_7418bd3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_style_index_0_id_7418bd3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_style_index_0_id_7418bd3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/chats/SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_template_id_7418bd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/SubChannels.vue?vue&type=template&id=7418bd3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_template_id_7418bd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubChannels_vue_vue_type_template_id_7418bd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);