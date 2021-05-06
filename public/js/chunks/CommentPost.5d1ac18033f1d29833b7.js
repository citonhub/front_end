(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CommentPost"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/comment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/comment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['source', 'username'],
  data: function data() {
    return {
      that: this
    };
  },
  methods: {
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    checkDatereal: function checkDatereal(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      var aWeekAgo = moment().subtract(7, 'days');

      if (moment(realTimeHour) >= aWeekAgo) {
        return moment(realTimeHour).format("h:mm a");
      } else {
        return moment(realTimeHour).format("h:mm a");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/comment.vue?vue&type=template&id=497a68ac&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/comment.vue?vue&type=template&id=497a68ac&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      staticClass: "col-12 py-2 px-1",
      style: true ? "background:rgba(60, 135, 205, 0.32)" : undefined
    },
    [
      _vm.source.username != _vm.username
        ? _c(
            "div",
            { staticClass: "col-11 py-0 ", attrs: { "elevation-1": "" } },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-9 col-md-10 py-1  d-flex flex-row" },
                  [
                    _c("div", {
                      style: _vm.imageStyleUser(30, _vm.source),
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.that.$root.projectViewComponent.goToProfile(
                            _vm.source.username
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-card",
                      {
                        staticClass: "py-1 px-2 ml-2",
                        staticStyle: {
                          "max-width": "80%",
                          border: "1px solid transparent",
                          "min-width": "190px",
                          background: "#E1F0FC",
                          "border-radius": "7px",
                          "border-bottom-left-radius": "0px"
                        },
                        attrs: { "elevation-1": "", flat: "" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "text-left my-0 py-0 d-flex flex-row"
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "13px",
                                  "font-weight": "bold"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.that.$root.projectViewComponent.goToProfile(
                                      _vm.source.username
                                    )
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.source.username))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "ml-auto",
                                staticStyle: { "font-size": "11px" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.checkDatereal(_vm.source.created_at)
                                  )
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.source.is_reply
                          ? _c(
                              "div",
                              {
                                staticClass: "d-flex flex-column py-2 px-1",
                                staticStyle: {
                                  "border-left": "3px solid #3C87CD",
                                  background: "#d6e6f5",
                                  "border-radius": "0px"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.scrollToComment(
                                      _vm.source.replied_comment
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "13px",
                                      "white-space": "nowrap",
                                      overflow: "hidden",
                                      "text-overflow": "ellipsis"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.source.replied_comment.comment)
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("span", {
                          staticStyle: { "font-size": "13px" },
                          domProps: { innerHTML: _vm._s(_vm.source.content) }
                        })
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-12 py-0 d-flex",
                    staticStyle: {
                      "padding-left": "45px",
                      "align-items": "center"
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "d-inline-block mx-1" },
                      [
                        _vm.source.liked_by_user
                          ? _c(
                              "v-btn",
                              {
                                staticClass: "d-inline-block",
                                attrs: { icon: "" }
                              },
                              [
                                _c("i", {
                                  staticClass: "las la-heart",
                                  staticStyle: {
                                    "font-size": "20px",
                                    color: "#ff6666"
                                  }
                                })
                              ]
                            )
                          : _c(
                              "v-btn",
                              {
                                staticClass: "d-inline-block",
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.that.$root.projectViewComponent.likeComment(
                                      _vm.source
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "lar la-heart",
                                  staticStyle: {
                                    "font-size": "20px",
                                    color: "#3C87CD"
                                  }
                                })
                              ]
                            ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "12px",
                              color: "#000000"
                            }
                          },
                          [_vm._v(_vm._s(_vm.source.likes))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "d-inline-block mx-1" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "d-inline-block",
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.that.$root.projectViewComponent.showReplyAction(
                                  _vm.source
                                )
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "las la-reply",
                              staticStyle: { "font-size": "20px" }
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.source.username == _vm.that.$root.username
        ? _c(
            "div",
            {
              staticClass: "col-11 py-0 offset-1",
              attrs: { "elevation-1": "" }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-9 col-md-10 py-1 offset-lg-3 offset-md-2 d-flex flex-row-reverse"
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "py-1 px-2 mr-2",
                        staticStyle: {
                          "max-width": "80%",
                          border: "1px solid transparent",
                          "min-width": "190px",
                          background: "#3C87CD",
                          "border-radius": "7px",
                          "border-bottom-right-radius": "0px"
                        },
                        attrs: { "elevation-1": "", flat: "" }
                      },
                      [
                        _vm.source.is_reply == 1
                          ? _c(
                              "div",
                              {
                                staticClass: "d-flex flex-column py-2 px-1",
                                staticStyle: {
                                  "border-left": "3px solid #E1F0FC",
                                  "border-radius": "0px",
                                  background: "#d6e6f5"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.that.$root.projectViewComponent.scrollToComment(
                                      _vm.source.replied_comment
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "font-size": "13px",
                                      "white-space": "nowrap",
                                      overflow: "hidden",
                                      "text-overflow": "ellipsis"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.source.replied_comment.comment)
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("span", {
                          staticStyle: { color: "white", "font-size": "13px" },
                          domProps: { innerHTML: _vm._s(_vm.source.content) }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right" }, [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                color: "white",
                                "font-size": "11px"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.checkDatereal(_vm.source.created_at))
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 text-right py-0" }, [
                  _c(
                    "span",
                    { staticClass: "d-inline-block mx-1" },
                    [
                      _vm.source.liked_by_user
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "d-inline-block",
                              attrs: { icon: "" }
                            },
                            [
                              _c("i", {
                                staticClass: "las la-heart",
                                staticStyle: {
                                  "font-size": "20px",
                                  color: "#ff6666"
                                }
                              })
                            ]
                          )
                        : _c(
                            "v-btn",
                            {
                              staticClass: "d-inline-block",
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  return _vm.that.$root.projectViewComponent.likeComment(
                                    _vm.source
                                  )
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "lar la-heart",
                                staticStyle: {
                                  "font-size": "20px",
                                  color: "#3C87CD"
                                }
                              })
                            ]
                          ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-family": "BodyFont",
                            "font-size": "12px",
                            color: "#000000"
                          }
                        },
                        [_vm._v(_vm._s(_vm.source.likes))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "d-inline-block mx-1" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "d-inline-block",
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              return _vm.that.$root.projectViewComponent.showReplyAction(
                                _vm.source
                              )
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "las la-reply",
                            staticStyle: { "font-size": "20px" }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Hub/comment.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Hub/comment.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_vue_vue_type_template_id_497a68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.vue?vue&type=template&id=497a68ac&scoped=true& */ "./resources/js/components/Hub/comment.vue?vue&type=template&id=497a68ac&scoped=true&");
/* harmony import */ var _comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _comment_vue_vue_type_template_id_497a68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _comment_vue_vue_type_template_id_497a68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "497a68ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/comment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/comment.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Hub/comment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./comment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/comment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/comment.vue?vue&type=template&id=497a68ac&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Hub/comment.vue?vue&type=template&id=497a68ac&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_template_id_497a68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./comment.vue?vue&type=template&id=497a68ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/comment.vue?vue&type=template&id=497a68ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_template_id_497a68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_template_id_497a68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);