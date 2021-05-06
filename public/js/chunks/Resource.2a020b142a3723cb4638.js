(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Resource"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['show_add_icon', 'contents'],
  methods: {
    shortenContent: function shortenContent(content, limit) {
      if (content.length > limit) {
        var shortcontent = content.slice(0, limit);
        return shortcontent + '...';
      } else {
        return content;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hoverEffect[data-v-34e6a4a6]:hover{\n   background-color: whitesmoke;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& ***!
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
    _vm._l(_vm.contents, function(content, index) {
      return _c(
        "div",
        { key: index, staticClass: "col-12 py-0 px-0 hoverEffect" },
        [
          content.type == "youtube_video"
            ? [
                _c(
                  "div",
                  {
                    staticClass: "col-12 pb-0 pt-0 px-0 d-flex flex-row",
                    staticStyle: { "align-items": "center" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-5 py-1 px-1",
                        staticStyle: { height: "92px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            style:
                              "position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(" +
                              content.content.snippet.thumbnails.standard.url +
                              ");background-repeat: no-repeat; background-size:100%;"
                          },
                          [
                            _vm.show_add_icon
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "px-1 py-1",
                                    staticStyle: {
                                      background: "rgba(0, 0, 0,0.6)",
                                      cursor: "pointer",
                                      position: "absolute",
                                      top: "0px",
                                      right: "0px",
                                      border: "1px solid black",
                                      "border-top-right-radius": "8px"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticStyle: {
                                          "font-size": "18px",
                                          color: "white"
                                        }
                                      },
                                      [_vm._v("las la-plus")]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "px-1 py-1 d-flex",
                                staticStyle: {
                                  "align-items": "center",
                                  background: "rgba(0, 0, 0,0.1)",
                                  "justify-content": "center",
                                  cursor: "pointer",
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                  width: "100%",
                                  height: "100%"
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    staticStyle: {
                                      "font-size": "35px",
                                      color: "#FF0000"
                                    }
                                  },
                                  [_vm._v("mdi mdi-youtube")]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-7 d-flex flex-column pt-1 my-auto",
                        staticStyle: {
                          "justify-content": "center",
                          width: "100%"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "pt-3 mb-1",
                            staticStyle: {
                              "font-family": "MediumFont",
                              "font-size": "13px",
                              overflow: "hidden",
                              width: "100%",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [
                            _vm._v(
                              "\n             " +
                                _vm._s(
                                  _vm.shortenContent(
                                    content.content.snippet.title,
                                    50
                                  )
                                ) +
                                "\n           "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "mb-1",
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "12px",
                              "white-space": "nowrap",
                              color: "grey",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(content.content.snippet.channelTitle) +
                                "\n           "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "12px",
                              color: "grey",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [
                            _vm._v(
                              "\n             " +
                                _vm._s(content.content.statistics.viewCount) +
                                " views\n           "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          content.type == "udemy_video"
            ? [
                _c(
                  "div",
                  {
                    staticClass: "col-12 pb-0 pt-0 px-0 d-flex flex-row",
                    staticStyle: { "align-items": "center" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-5 py-1 px-1",
                        staticStyle: { height: "92px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              position: "absolute",
                              width: "100%",
                              border: "1px solid white",
                              "border-radius": "8px",
                              height: "100%",
                              "background-color": "#c5c5c5",
                              "background-image": "url(imgs/7.jpg)",
                              "background-repeat": "no-repeat",
                              "background-size": "cover"
                            }
                          },
                          [
                            _vm.show_add_icon
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "px-1 py-1",
                                    staticStyle: {
                                      background: "rgba(0, 0, 0,0.6)",
                                      cursor: "pointer",
                                      position: "absolute",
                                      top: "0px",
                                      right: "0px",
                                      border: "1px solid black",
                                      "border-top-right-radius": "8px"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticStyle: {
                                          "font-size": "18px",
                                          color: "white"
                                        }
                                      },
                                      [_vm._v("las la-plus")]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(0, true)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-7 d-flex flex-column pt-1 my-auto",
                        staticStyle: {
                          "justify-content": "center",
                          width: "100%"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "pt-3 mb-1",
                            staticStyle: {
                              "font-family": "MediumFont",
                              "font-size": "13px",
                              overflow: "hidden",
                              width: "100%",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [
                            _vm._v(
                              "\n             Python for Data science and Machine\n           "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "mb-1",
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "12px",
                              "white-space": "nowrap",
                              color: "grey",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [_vm._v("\n              Jose Portilla\n           ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "13px",
                              color: "black",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "mr-2",
                                staticStyle: { "font-family": "MediumFont" }
                              },
                              [_vm._v("$11.99")]
                            ),
                            _vm._v(" "),
                            _c("strike", { staticStyle: { color: "grey" } }, [
                              _vm._v("$94.99")
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          content.type == "devto_article"
            ? [
                _c(
                  "div",
                  {
                    staticClass: "col-12  pb-0 pt-0 px-0 d-flex flex-row",
                    staticStyle: { "align-items": "center" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-5 py-1 px-1",
                        staticStyle: { height: "92px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              position: "absolute",
                              width: "100%",
                              border: "1px solid white",
                              "border-radius": "8px",
                              height: "100%",
                              "background-color": "#c5c5c5",
                              "background-image": "url(imgs/7.jpg)",
                              "background-repeat": "no-repeat",
                              "background-size": "cover"
                            }
                          },
                          [
                            _vm.show_add_icon
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "px-1 py-1",
                                    staticStyle: {
                                      background: "rgba(0, 0, 0,0.6)",
                                      cursor: "pointer",
                                      position: "absolute",
                                      top: "0px",
                                      right: "0px",
                                      border: "1px solid black",
                                      "border-top-right-radius": "8px"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticStyle: {
                                          "font-size": "18px",
                                          color: "white"
                                        }
                                      },
                                      [_vm._v("las la-plus")]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._m(1, true)
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(2, true)
                  ]
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          content.type == "shared_link"
            ? [
                _c(
                  "div",
                  {
                    staticClass: "col-12  pb-0 pt-0 px-0 d-flex flex-row",
                    staticStyle: { "align-items": "center" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-5 py-1 px-1",
                        staticStyle: { height: "92px" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              position: "absolute",
                              width: "100%",
                              border: "1px solid white",
                              "border-radius": "8px",
                              height: "100%",
                              "background-color": "#c5c5c5",
                              "background-image": "url(imgs/5.jpg)",
                              "background-repeat": "no-repeat",
                              "background-size": "cover"
                            }
                          },
                          [
                            _vm.show_add_icon
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "px-1 py-1",
                                    staticStyle: {
                                      background: "rgba(0, 0, 0,0.6)",
                                      cursor: "pointer",
                                      position: "absolute",
                                      top: "0px",
                                      right: "0px",
                                      border: "1px solid black",
                                      "border-top-right-radius": "8px"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticStyle: {
                                          "font-size": "18px",
                                          color: "white"
                                        }
                                      },
                                      [_vm._v("las la-plus")]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "px-1 py-1 d-flex",
                                staticStyle: {
                                  "align-items": "center",
                                  background: "rgba(0, 0, 0,0.1)",
                                  "justify-content": "center",
                                  cursor: "pointer",
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                  width: "100%",
                                  height: "100%"
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    staticStyle: {
                                      "font-size": "35px",
                                      color: "#ffffff"
                                    }
                                  },
                                  [_vm._v("las la-link")]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(3, true)
                  ]
                )
              ]
            : _vm._e()
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "px-1 py-1 d-flex",
        staticStyle: {
          "align-items": "center",
          background: "rgba(0, 0, 0,0.1)",
          "justify-content": "center",
          cursor: "pointer",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%"
        }
      },
      [_c("img", { attrs: { src: "/imgs/udemy_logo.png", height: "25px" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "px-1 py-1 d-flex",
        staticStyle: {
          "align-items": "center",
          background: "rgba(0, 0, 0,0.1)",
          "justify-content": "center",
          cursor: "pointer",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%"
        }
      },
      [_c("img", { attrs: { src: "/imgs/devto.png", height: "35px" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-7 d-flex flex-column pt-1 my-auto",
        staticStyle: { "justify-content": "center", width: "100%" }
      },
      [
        _c(
          "div",
          {
            staticClass: "pt-3 mb-1",
            staticStyle: {
              "font-family": "MediumFont",
              "font-size": "13px",
              overflow: "hidden",
              width: "100%",
              "text-overflow": "ellipsis"
            }
          },
          [
            _vm._v(
              "\n             CSS Variables: What are they & How to use\n           "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "mb-1",
            staticStyle: {
              "font-family": "BodyFont",
              "font-size": "12px",
              "white-space": "nowrap",
              color: "grey",
              overflow: "hidden",
              "text-overflow": "ellipsis"
            }
          },
          [_vm._v("\n              Zachary Fetters\n           ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              "font-family": "BodyFont",
              "font-size": "12px",
              color: "grey",
              overflow: "hidden",
              "text-overflow": "ellipsis"
            }
          },
          [_vm._v("\n             5 min read\n           ")]
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
        staticClass: "col-7 d-flex flex-column pt-1 my-auto",
        staticStyle: { "justify-content": "center", width: "100%" }
      },
      [
        _c(
          "div",
          {
            staticClass: "pt-3 mb-1",
            staticStyle: {
              "font-family": "MediumFont",
              "font-size": "13px",
              overflow: "hidden",
              width: "100%",
              "text-overflow": "ellipsis"
            }
          },
          [
            _vm._v(
              "\n             Working with SSH on Ubuntu: Try it out \n           "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "mb-1",
            staticStyle: {
              "font-family": "BodyFont",
              "font-size": "12px",
              "white-space": "nowrap",
              color: "grey",
              overflow: "hidden",
              "text-overflow": "ellipsis"
            }
          },
          [
            _vm._v(
              "\n             Lorem ipsum dolor sit amet consectetur adipisicing elit...\n           "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              "font-family": "BodyFont",
              "font-size": "12px",
              color: "grey",
              overflow: "hidden",
              "text-overflow": "ellipsis"
            }
          },
          [_vm._v("\n             medium.com\n           ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/Resource.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& */ "./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&");
/* harmony import */ var _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resource.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34e6a4a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Resource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);