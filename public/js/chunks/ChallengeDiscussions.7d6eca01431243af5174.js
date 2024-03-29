(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChallengeDiscussions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Discussion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      loading: false,
      contentInWord: '',
      comments: []
    };
  },
  mounted: function mounted() {
    this.fetchComments();
    this.$root.discussionComponent = this;
  },
  methods: {
    goToProfile: function goToProfile(username) {
      this.$root.selectedUsername = username;
      this.$router.push({
        path: '/profile-view/' + username
      });
    },
    fetchComments: function fetchComments() {
      var _this = this;

      axios.get('/fetch-challenge-comments/' + this.$route.params.challenge_id).then(function (response) {
        if (response.status == 200) {
          _this.comments = response.data.comments;
        } else {
          console.log(response.status);
        }
      })["catch"](function (error) {});
    },
    saveComment: function saveComment() {
      var _this2 = this;

      if (this.contentInWord.length == 0) return;
      this.loading = true;
      axios.post('/save-challenge-comment', {
        'duel_id': this.$route.params.challenge_id,
        'content': this.contentInWord,
        'is_reply': this.$root.is_reply_comment,
        'replied_comment_id': this.$root.replyCommentId
      }).then(function (response) {
        if (response.status == 200) {
          _this2.$root.replyCommentId = 0;
          _this2.$root.is_reply_comment = false;
          _this2.contentInWord = '';

          _this2.comments.unshift(response.data.comment);

          _this2.loading = false;
        }
      })["catch"](function (error) {
        _this2.loading = false;
      });
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    likeComment: function likeComment(comment) {
      var _this3 = this;

      if (comment.liked_by_user) {
        return;
      }

      axios.post('/save-liked-challenge-comment', {
        "comment_id": comment.id
      }).then(function (response) {
        if (response.status == 200) {
          _this3.comments.map(function (eachcomment) {
            if (eachcomment.id == comment.id) {
              eachcomment.liked_by_user = true;
              eachcomment.likes = parseInt(eachcomment.likes) + 1;
            }
          });
        }
      })["catch"](function (error) {});
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntextarea[data-v-e47edae8] {\n    font-size:13px; \n    background:white;\n    width:100%; \n    height: 60px;\n    max-height: 75px;\n    padding: 6px 6px;\n    resize:none; \n    overflow-x: hidden;\n    border-radius:7px;\n     overflow-y: auto;\n    border:1px solid #e6e6e6; \n    border-radius:2px;\n}\n.scroller[data-v-e47edae8]::-webkit-scrollbar-thumb {\n  background-color: #3C87CD;\n  outline: 1px solid #3C87CD;\n}\n.scroller[data-v-e47edae8]::-webkit-scrollbar {\n  width: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=template&id=e47edae8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Discussion.vue?vue&type=template&id=e47edae8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        staticClass:
          "col-lg-10 offset-lg-1 scroller px-md-2 px-md-1 px-0  py-1 ",
        staticStyle: {
          background: "#E1F0FC",
          position: "absolute",
          height: "100%",
          top: "0%",
          left: "0",
          border: "1px solid #E1F0FC",
          "overflow-y": "auto",
          "overflow-x": "hidden"
        }
      },
      [
        _c(
          "div",
          { staticClass: "row" },
          [
            _vm._l(_vm.comments, function(comment, index) {
              return _c(
                "div",
                { key: index, staticClass: "col-12 py-2 px-1" },
                [
                  comment.username != _vm.that.$root.username
                    ? _c(
                        "div",
                        {
                          staticClass: "col-11 py-0 ",
                          attrs: { "elevation-1": "" }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-lg-9 col-md-10 py-1  d-flex flex-row"
                              },
                              [
                                _c("div", {
                                  style: _vm.imageStyleUser(30, comment)
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "py-1 px-2 ml-2",
                                    staticStyle: {
                                      "max-width": "80%",
                                      border: "1px solid transparent",
                                      "min-width": "150px",
                                      background: "#ffffff",
                                      "border-radius": "7px",
                                      "border-bottom-left-radius": "0px"
                                    },
                                    attrs: { "elevation-1": "" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "text-left my-0 py-0 d-flex flex-row"
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticStyle: {
                                              "font-size": "13px",
                                              "font-weight": "bold",
                                              cursor: "pointer"
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return _vm.goToProfile(
                                                  comment.username
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(comment.username))]
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
                                                _vm.checkDatereal(
                                                  comment.created_at
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("span", {
                                      staticStyle: { "font-size": "13px" },
                                      domProps: {
                                        innerHTML: _vm._s(comment.content)
                                      }
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
                                    comment.liked_by_user
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
                                                return _vm.likeComment(comment)
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
                                      [_vm._v(_vm._s(comment.likes))]
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
                  comment.username == _vm.that.$root.username
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
                                      "min-width": "150px",
                                      background: "#3C87CD",
                                      "border-radius": "7px",
                                      "border-bottom-right-radius": "0px"
                                    },
                                    attrs: { "elevation-1": "" }
                                  },
                                  [
                                    _c("span", {
                                      staticStyle: {
                                        color: "white",
                                        "font-size": "13px"
                                      },
                                      domProps: {
                                        innerHTML: _vm._s(comment.content)
                                      }
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
                                            _vm._s(
                                              _vm.checkDatereal(
                                                comment.created_at
                                              )
                                            )
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
                            _c(
                              "div",
                              { staticClass: "col-12 text-right py-0" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block mx-1" },
                                  [
                                    comment.liked_by_user
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
                                                return _vm.likeComment(comment)
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
                                      [_vm._v(_vm._s(comment.likes))]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    : _vm._e()
                ]
              )
            }),
            _vm._v(" "),
            _c("div", { staticClass: "my-5 py-5 col-12" })
          ],
          2
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "fixed-bottom col-lg-10 py-1 d-md-block d-none offset-lg-1",
        staticStyle: {
          "font-family": "BodyFont",
          position: "absolute",
          background: "white"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: " py-1 my-0 d-flex  px-md-2 px-1 flex-row",
            staticStyle: {
              width: "100%",
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.contentInWord,
                  expression: "contentInWord"
                }
              ],
              ref: "textBottom",
              staticStyle: { "font-size": "13px", height: "50px" },
              attrs: { placeholder: "Type here..." },
              domProps: { value: _vm.contentInWord },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.contentInWord = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                staticClass: "mx-md-1",
                attrs: { icon: "", loading: _vm.loading },
                on: { click: _vm.saveComment }
              },
              [_c("v-icon", [_vm._v("las la-send")])],
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
        staticClass: "fixed-bottom d-md-none d-block ",
        staticStyle: {
          "font-family": "BodyFont",
          position: "fixed",
          width: "100%",
          background: "white"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: " py-1 my-0 d-flex  px-md-2 px-1 flex-row",
            staticStyle: {
              width: "100%",
              "align-items": "center",
              "justify-content": "center"
            }
          },
          [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.contentInWord,
                  expression: "contentInWord"
                }
              ],
              ref: "textBottom",
              staticStyle: { "font-size": "13px", height: "45px" },
              attrs: { placeholder: "Type here..." },
              domProps: { value: _vm.contentInWord },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.contentInWord = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                staticClass: "mx-md-1",
                attrs: { icon: "", loading: _vm.loading },
                on: { click: _vm.saveComment }
              },
              [_c("v-icon", [_vm._v("las la-send")])],
              1
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

/***/ "./resources/js/components/challenges/Discussion.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/challenges/Discussion.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Discussion_vue_vue_type_template_id_e47edae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Discussion.vue?vue&type=template&id=e47edae8&scoped=true& */ "./resources/js/components/challenges/Discussion.vue?vue&type=template&id=e47edae8&scoped=true&");
/* harmony import */ var _Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discussion.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/Discussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Discussion_vue_vue_type_style_index_0_id_e47edae8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css& */ "./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Discussion_vue_vue_type_template_id_e47edae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Discussion_vue_vue_type_template_id_e47edae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e47edae8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/Discussion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/Discussion.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/challenges/Discussion.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_style_index_0_id_e47edae8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=style&index=0&id=e47edae8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_style_index_0_id_e47edae8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_style_index_0_id_e47edae8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_style_index_0_id_e47edae8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_style_index_0_id_e47edae8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_style_index_0_id_e47edae8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/challenges/Discussion.vue?vue&type=template&id=e47edae8&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Discussion.vue?vue&type=template&id=e47edae8&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_e47edae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=template&id=e47edae8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Discussion.vue?vue&type=template&id=e47edae8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_e47edae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_e47edae8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);