(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChannelInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this
    };
  },
  methods: {
    close: function close() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatInnerSideBar = false;
    },
    EditChannel: function EditChannel() {
      var _this = this;

      this.$root.chatComponent.innerSideBarContent = '';
      setTimeout(function () {
        _this.$root.chatComponent.innerSideBarContent = 'channel_edit';
      }, 500);
      this.$router.push({
        path: '/channels/space_id/channel_edit'
      });
    },
    imageStyleSpace: function imageStyleSpace(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString;
      }
    },
    imageStyle: function imageStyle(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        }

        return styleString;
      } else {
        var _styleString2 = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString2 += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString2 += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString2;
      }
    },
    copyLink: function copyLink() {
      var spacelink = document.querySelector('#spacelink');
      spacelink.setAttribute('type', 'text');
      spacelink.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';

        if (msg == 'successful') {
          this.$root.chatComponent.showAlert('', 'Link copied', 'success');
        } else {
          this.$root.chatComponent.showAlert('', 'Unable link copied', 'error');
        }
      } catch (err) {}
      /* unselect the range */


      spacelink.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    },
    shareToWhatsapp: function shareToWhatsapp() {
      var shareText = 'Join ' + this.$root.selectedSpace.name + ' ' + this.$root.selectedSpace.type + ' on Citonhub';
      var shareLink = 'https://www.citonhub.com/link/space/' + this.$root.selectedSpace.space_id;
      var link = 'whatsapp://send?text=' + shareText + ' ' + shareLink + '.';
      var win = window.open(link, '_blank');
      win.focus();
    },
    shareToTwitter: function shareToTwitter() {
      var shareText = 'Join ' + this.$root.selectedSpace.name + ' ' + this.$root.selectedSpace.type + ' on Citonhub';
      var shareLink = 'https://www.citonhub.com/link/space/' + this.$root.selectedSpace.space_id;
      var link = 'https://twitter.com/intent/tweet?text=' + shareText + '&url=' + shareLink;
      var win = window.open(link, '_blank');
      win.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& ***!
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
  return _c("div", { staticClass: "col-12 py-1 my-0 " }, [
    _c(
      "div",
      { staticClass: "row" },
      [
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
              { staticClass: " mr-1 col-2 py-0" },
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
              { staticClass: "col-2 py-0 mr-1 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.EditChannel($event)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("las la-edit")])],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 d-flex",
            staticStyle: {
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c("div", {
              style: _vm.imageStyleSpace(
                150,
                _vm.that.$root.selectedSpace,
                "channel"
              )
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 text-center py-0" }, [
          _c(
            "span",
            {
              staticStyle: { "font-size": "14px", "font-family": "MediumFont" }
            },
            [_vm._v(_vm._s(_vm.that.$root.selectedSpace.name))]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 text-left py-1" },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "14px",
                  "font-family": "MediumFont"
                }
              },
              [_vm._v("Description")]
            ),
            _c("br"),
            _vm._v(" "),
            _vm.that.$root.selectedSpace.description
              ? [
                  _c("span", {
                    staticStyle: { "font-size": "12px" },
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.that.$root.selectedSpace.description
                      )
                    }
                  })
                ]
              : [
                  _c(
                    "span",
                    { staticStyle: { "font-size": "12px", color: "grey" } },
                    [_vm._v("Here is this channel description")]
                  )
                ]
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 py-2" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-6 px-0 py-0" },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-2 d-inline-block",
                    staticStyle: {
                      color: "white",
                      "text-transform": "normal",
                      "font-family": "BodyFont",
                      "font-size": "11px"
                    },
                    attrs: { "x-small": "", color: "#3C87CD", rounded: "" }
                  },
                  [_vm._v("Invite")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6 px-0 py-0 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-2 d-inline-block",
                    staticStyle: {
                      "text-transform": "normal",
                      "font-family": "BodyFont",
                      "font-size": "11px"
                    },
                    attrs: {
                      "x-small": "",
                      color: "#3C87CD",
                      outlined: "",
                      rounded: ""
                    }
                  },
                  [_vm._v("Leave")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 py-2 d-flex flex-row mt-2",
            staticStyle: {
              "border-top": "1px solid #c5c5c5",
              "border-bottom": "1px solid #c5c5c5"
            }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-5 text-right py-0 px-0" }, [
              _c("span", { staticStyle: { "font-size": "13px" } }, [
                _vm._v(_vm._s(_vm.that.$root.selectedSpaceMembers.length))
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.that.$root.selectedSpaceMembers, function(member, index) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "col-12 py-2 d-flex flex-row",
              staticStyle: {
                "align-items": "center",
                "border-bottom": "1px solid #c5c5c5"
              }
            },
            [
              _c("div", {
                staticClass: "mr-2",
                style: _vm.imageStyle(40, member, "user")
              }),
              _vm._v(" "),
              _c("div", [
                _c("span", { staticStyle: { "font-size": "13px" } }, [
                  _vm._v(_vm._s(member.name) + " @" + _vm._s(member.username))
                ])
              ])
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 py-0" }, [
      _c(
        "span",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("Channel Info")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-7 py-0 px-0" }, [
      _c(
        "span",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("Members")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ChannelInfo.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/ChannelInfo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& */ "./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&");
/* harmony import */ var _ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "005dbf02",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChannelInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);