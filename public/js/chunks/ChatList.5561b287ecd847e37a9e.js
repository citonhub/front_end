(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatList.vue?vue&type=script&lang=js& ***!
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
var _require = __webpack_require__(/*! html-to-text */ "./node_modules/html-to-text/index.js"),
    htmlToText = _require.htmlToText;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['source'],
  data: function data() {
    return {
      that: this
    };
  },
  mounted: function mounted() {
    this.$root.chatListComponent = this;
  },
  methods: {
    openChat: function openChat(space_id) {
      // handle random qoutes
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      this.$root.chatComponent.selectedQuoteId = getRandomInt(0, 9); // ends

      if (this.$root.selectedSpace.general_spaceId != space_id) {
        if (this.$root.TrackLastSubSpace.length != 0 && space_id == this.$root.TrackLastSubSpace[0]) {
          this.$router.push({
            path: '/channels/' + this.$root.TrackLastSubSpace[1] + '/content'
          });
          this.$root.chatComponent.fetchMessages(this.$root.TrackLastSubSpace[1]);
          this.$root.chatComponent.messageIsDone = false;
          this.$root.chatComponent.chatIsOpen = true;
          return;
        } else {
          this.$router.push({
            path: '/channels/' + space_id + '/content'
          });
          this.$root.chatComponent.fetchMessages(space_id);
          this.$root.chatComponent.messageIsDone = false;
          this.$root.chatComponent.chatIsOpen = true;
        }
      }
    },
    generateMessageString: function generateMessageString(Lastmessage) {
      var finalString = '';
      var message = Lastmessage[0];

      if (message.type == null || message.type == 'action' || message.type == 'text') {
        finalString = htmlToText(message.content, {
          wordwrap: 100
        });
      }

      if (message.type == 'image') {
        finalString = 'sent an image';
      }

      if (message.type == 'join') {
        finalString = 'joined';
      }

      if (message.type == 'code') {
        finalString = 'shared a code';
      }

      if (message.type == 'video') {
        finalString = 'sent a video';
      }

      if (message.type == 'audio') {
        finalString = 'sent an audio';
      }

      if (message.type == 'project') {
        finalString = 'share a project';
      }

      return finalString;
    },
    spaceSelected: function spaceSelected(space) {
      if (space.type == 'Channel' || space.type == 'Team') {
        if (space.space_id == this.$root.selectedSpace.general_spaceId) {
          return true;
        }

        return false;
      } else {
        if (space.space_id == this.$root.selectedSpace.space_id) {
          return true;
        }

        return false;
      }
    },
    checkDatereal: function checkDatereal(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      var aWeekAgo = moment().subtract(7, 'days');
      var anHourAgo = moment().subtract(1, 'hours');

      if (moment(realTimeHour) >= aWeekAgo) {
        if (moment(realTimeHour) >= anHourAgo) {
          return moment(realTimeHour).fromNow();
        }

        return moment(realTimeHour).format("h:mm a");
      } else {
        return moment(realTimeHour).calendar();
      }
    },
    imageStyle: function imageStyle(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString;
      }
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
exports.push([module.i, "\n.messagesBadges[data-v-f4121c96]{\r\n    \r\n    color: #ffffff;\r\n    background: #3C87CD;\r\n    font-size: 11px;\r\n    font-family: BodyFont;\r\n    font-weight: bolder;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height:20px;\r\n    width:20px;\r\n    border-radius:50%;\n}\n.messageBox[data-v-f4121c96]:hover{\r\n    background:whitesmoke;\r\n    cursor: pointer;\n}\r\n", ""]);

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
  return _c(
    "div",
    {
      staticClass: "col-12 px-1 d-flex flex-row py-0 messageBox",
      style: _vm.spaceSelected(_vm.source)
        ? "align-items:center; justify-content:center; background:whitesmoke;"
        : "align-items:center; justify-content:center;",
      on: {
        click: function($event) {
          return _vm.openChat(_vm.source.space_id)
        }
      }
    },
    [
      _vm.source.type == "Channel" || _vm.source.type == "Team"
        ? _c("div", {
            staticClass: " mr-2 py-3",
            style: _vm.imageStyle(40, _vm.source, "channel")
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.source.type == "Bot" && _vm.source.bot_data != null
        ? _c("div", {
            staticClass: " mr-2 py-3",
            style: _vm.imageStyle(40, _vm.source.bot_data, "bot")
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.source.type == "Direct" && _vm.source.userInfo != null
        ? _c("div", {
            staticClass: " mr-2 py-3",
            style: _vm.imageStyle(40, _vm.source.userInfo, "direct")
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "px-0 py-3",
          staticStyle: { width: "85%", "border-bottom": "1px solid #e6e6e6" }
        },
        [
          _c(
            "div",
            {
              staticClass: "pr-1 d-flex flex-row",
              staticStyle: { "align-items": "center" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "px-0 py-0 my-0 ",
                  staticStyle: {
                    "white-space": "nowrap",
                    overflow: "hidden",
                    "text-overflow": "ellipsis"
                  }
                },
                [
                  _vm.source.type == "Team" || _vm.source.type == "Channel"
                    ? _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "14px",
                            "font-family": "BodyFont"
                          }
                        },
                        [_vm._v(_vm._s(_vm.source.name))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.source.type == "Bot" && _vm.source.bot_data != null
                    ? _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "14px",
                            "font-family": "BodyFont"
                          }
                        },
                        [_vm._v(_vm._s(_vm.source.bot_data.name))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.source.type == "Direct"
                    ? _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "14px",
                            "font-family": "BodyFont"
                          }
                        },
                        [_vm._v(_vm._s(_vm.source.userInfo.username))]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "px-1 py-0 my-0 text-right ml-auto" }, [
                _vm.source.last_message
                  ? _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "11px",
                          "font-family": "BodyFont",
                          color: "gray",
                          "margin-right": "0px"
                        }
                      },
                      [
                        _vm.source.last_message[0]
                          ? _c("span", [
                              _vm._v(
                                "\n                                               " +
                                  _vm._s(
                                    _vm.checkDatereal(
                                      _vm.source.last_message[0].created_at
                                    )
                                  ) +
                                  "\n                                              "
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  : _vm._e()
              ])
            ]
          ),
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
                  _vm.source.last_message.length != 0 &&
                  _vm.source.last_message[0]
                    ? _c(
                        "span",
                        [
                          _vm.source.last_message[0].deleted
                            ? [_vm._m(0)]
                            : [
                                _vm.that.$root.username !=
                                  _vm.source.last_message[0].username &&
                                _vm.source.type != "Direct" &&
                                _vm.source.type != "Bot"
                                  ? _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.source.last_message[0].username
                                        ) + ":"
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.generateMessageString(
                                        _vm.source.last_message
                                      )
                                    ) +
                                    "\n                                          \n                                                \n                                             "
                                )
                              ]
                        ],
                        2
                      )
                    : _c("span", [
                        _c("i", [_vm._v("Send a message to start chat")])
                      ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: " px-1 py-0 my-0 text-right " }, [
                _vm.source.unread > 0
                  ? _c(
                      "span",
                      {
                        staticClass:
                          "messagesBadges d-flex ml-lg-0 ml-md-5 ml-0"
                      },
                      [_vm._v(_vm._s(_vm.source.unread))]
                    )
                  : _vm._e()
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", [_vm._v("This message was deleted")])])
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

/***/ 3:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);