(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PostView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/PostView.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MoreOptions = function MoreOptions() {
  return __webpack_require__.e(/*! import() | MoreOptionsPost */ "MoreOptionsPost").then(__webpack_require__.bind(null, /*! ./MoreOptions.vue */ "./resources/js/components/Hub/MoreOptions.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['post', 'fromProfile', 'alertComponent'],
  components: {
    MoreOptions: MoreOptions
  },
  methods: {
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;cursor:pointer; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    imageStyle: function imageStyle(width, data) {
      if (data.image_extension == null) {
        var styleString = "height: " + width + "px; width: 94%;  position:absolute; left: 3%; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color: white; background-image: url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color: white; background-image: url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color: white; background-image: url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:white; background-image: url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString2 = "height: " + width + "px; width: 94%; left: 3%;  position:absolute; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString2 += ' background-color:' + data.background_color + ';background-image:url(/imgs/posts/' + imgLink + ');';
        return _styleString2;
      }
    },
    getUserLevel: function getUserLevel(points) {
      var imageUrl = '';

      if (points >= 0 && points <= 99) {
        imageUrl += '/imgs/newbie.svg';
      } else if (points >= 100 && points <= 999) {
        imageUrl += '/imgs/junior.svg';
      } else if (points >= 1000 && points <= 4999) {
        imageUrl += '/imgs/intermediate.svg';
      } else if (points >= 5000 && points <= 9999) {
        imageUrl += '/imgs/senior.svg';
      } else if (points >= 10000 && points <= 14999) {
        imageUrl += '/imgs/expert.svg';
      } else if (points >= 15000 && points <= 100000) {
        imageUrl += '/imgs/super_dev.svg';
      }

      return imageUrl;
    },
    showProject: function showProject(id, postId) {
      this.$router.push({
        path: "/hub/post/".concat(postId)
      });
      this.$root.currentPost = id; // this.project = project;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.projectBox[data-v-e3ccd06c]{\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=template&id=e3ccd06c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/PostView.vue?vue&type=template&id=e3ccd06c&scoped=true& ***!
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
  return _c(
    "div",
    {
      class: _vm.fromProfile
        ? "col-lg-4 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox"
        : "col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox",
      staticStyle: { height: "200px" }
    },
    [
      _c(
        "div",
        {
          style: _vm.imageStyle(190, _vm.post),
          on: {
            click: function($event) {
              return _vm.showProject(_vm.post.id, _vm.post.post_id)
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "pt-3 px-2  pl-3",
              staticStyle: {
                position: "absolute",
                width: "100%",
                height: "35%",
                left: "0",
                bottom: "0%",
                "border-radius": "0px",
                "border-bottom-left-radius": "20px",
                "border-bottom-right-radius": "20px",
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)"
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-8 py-0 my-0 d-flex flex-column" },
                  [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "font-family": "MediumFont",
                          "font-size": "13px",
                          color: "white",
                          "white-space": "nowrap",
                          overflow: "hidden",
                          "text-overflow": "ellipsis"
                        }
                      },
                      [_vm._v(_vm._s(_vm.post.title))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "font-family": "BodyFont",
                          "font-size": "13px",
                          color: "white",
                          "white-space": "nowrap",
                          overflow: "hidden",
                          "text-overflow": "ellipsis"
                        }
                      },
                      [_vm._v(_vm._s(_vm.post.description))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-4 py-0 my-0 text-right" },
                  _vm._l(JSON.parse(_vm.post.tags), function(tag, i) {
                    return _c("i", {
                      key: i,
                      class: tag.icon,
                      staticStyle: { "font-size": "25px", color: "white" }
                    })
                  }),
                  0
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "py-1 px-1",
          staticStyle: {
            position: "absolute",
            width: "94%",
            height: "auto",
            left: "3%",
            top: "0",
            "border-radius": "0px",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px"
          }
        },
        [
          _c("div", { staticClass: "col-12 py-0 my-0 px-1 text-left" }, [
            _c("div", { staticClass: "row py-0 my-0" }, [
              _c(
                "div",
                {
                  staticClass: "col-10 py-0 my-0 d-flex flex-row",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c("div", {
                    staticClass: "mr-1",
                    style: _vm.imageStyleUser(30, _vm.post.user),
                    on: {
                      click: function($event) {
                        return _vm.goToProfile(_vm.post.user.username)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "13px"
                      },
                      on: {
                        click: function($event) {
                          return _vm.goToProfile(_vm.post.user.username)
                        }
                      }
                    },
                    [
                      _vm._v(_vm._s(_vm.post.user.username) + "  "),
                      _c("img", {
                        staticClass: "mx-1",
                        attrs: {
                          src: _vm.getUserLevel(_vm.post.user.points),
                          height: "22px"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-2 text-right py-0 my-0" },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "", id: "activatorPost" + _vm.post.id } },
                    [
                      _c("v-icon", { staticStyle: { "font-size": "25px" } }, [
                        _vm._v("las la-ellipsis-v")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    {
                      staticStyle: { "z-index": "99999999999999999999" },
                      attrs: {
                        absolute: "",
                        activator: "#activatorPost" + _vm.post.id,
                        right: "",
                        "offset-y": ""
                      }
                    },
                    [
                      _c("more-options", {
                        attrs: {
                          post: _vm.post,
                          alertComponent: _vm.alertComponent,
                          fromProfile: _vm.fromProfile
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "py-1 px-2",
          staticStyle: {
            position: "absolute",
            width: "94%",
            height: "auto",
            left: "3%",
            top: "100%"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 py-0 my-0 text-right" }, [
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "lar la-heart",
                  staticStyle: { "font-size": "20px", color: "#3C87CD" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "#000000"
                    }
                  },
                  [_vm._v(_vm._s(_vm.post.likes))]
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "d-inline-block mx-1" }, [
                _c("i", {
                  staticClass: "las la-comment",
                  staticStyle: { "font-size": "20px", color: "#3C87CD" }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-family": "MediumFont",
                      "font-size": "12px",
                      color: "#000000"
                    }
                  },
                  [_vm._v(_vm._s(_vm.post.comments))]
                )
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Hub/PostView.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Hub/PostView.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostView_vue_vue_type_template_id_e3ccd06c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostView.vue?vue&type=template&id=e3ccd06c&scoped=true& */ "./resources/js/components/Hub/PostView.vue?vue&type=template&id=e3ccd06c&scoped=true&");
/* harmony import */ var _PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostView.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/PostView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostView_vue_vue_type_style_index_0_id_e3ccd06c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css& */ "./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostView_vue_vue_type_template_id_e3ccd06c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostView_vue_vue_type_template_id_e3ccd06c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e3ccd06c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/PostView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/PostView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Hub/PostView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_style_index_0_id_e3ccd06c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=style&index=0&id=e3ccd06c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_style_index_0_id_e3ccd06c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_style_index_0_id_e3ccd06c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_style_index_0_id_e3ccd06c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_style_index_0_id_e3ccd06c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_style_index_0_id_e3ccd06c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Hub/PostView.vue?vue&type=template&id=e3ccd06c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Hub/PostView.vue?vue&type=template&id=e3ccd06c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_template_id_e3ccd06c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostView.vue?vue&type=template&id=e3ccd06c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/PostView.vue?vue&type=template&id=e3ccd06c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_template_id_e3ccd06c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostView_vue_vue_type_template_id_e3ccd06c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);