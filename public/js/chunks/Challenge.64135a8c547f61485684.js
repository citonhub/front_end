(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Challenge"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Challenge.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Challenge.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      challenges: [],
      pending: true,
      selected: {},
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-node-js',
        border_color: '#263238',
        background: '#ffffff',
        id: 'NodeJs'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-php',
        border_color: '#263238',
        background: '#ffffff',
        id: 'PHP'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square',
        border_color: '#263238',
        background: '#ffffff',
        id: 26
      }, {
        name: 'PHP',
        icon: 'lab la-php',
        border_color: '#263238',
        background: '#ffffff',
        id: 35
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 39
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 100
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c',
        border_color: '#263238',
        background: '#ffffff',
        id: 4
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp',
        border_color: '#263238',
        background: '#ffffff',
        id: 11
      }, {
        name: 'Java',
        icon: 'lab la-java',
        border_color: '#263238',
        background: '#ffffff',
        id: 25
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp',
        border_color: '#263238',
        background: '#ffffff',
        id: 13
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang',
        border_color: '#263238',
        background: '#ffffff',
        id: 18
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin',
        border_color: '#263238',
        background: '#ffffff',
        id: 27
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran',
        border_color: '#263238',
        background: '#ffffff',
        id: 21
      }, {
        name: 'Perl',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 34
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r',
        border_color: '#263238',
        background: '#ffffff',
        id: 40
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby',
        border_color: '#263238',
        background: '#ffffff',
        id: 41
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go',
        border_color: '#263238',
        background: '#ffffff',
        id: 22
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell',
        border_color: '#263238',
        background: '#ffffff',
        id: 24
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua',
        border_color: '#263238',
        background: '#ffffff',
        id: 28
      }, {
        name: 'Pascal',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 33
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript',
        border_color: '#263238',
        background: '#ffffff',
        id: 46
      }, {
        name: 'Rust',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 42
      }, {
        name: 'Swift',
        icon: 'lab la-swift',
        border_color: '#263238',
        background: '#ffffff',
        id: 45
      }, {
        name: 'Scala',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 43
      }]
    };
  },
  props: ['source'],
  methods: {
    appName: function appName(challenge) {
      var _this = this;

      var languageArray = challenge.duel_language_array.split(',');
      var finalLanguages = [];

      if (languageArray.length <= 3) {
        finalLanguages = languageArray;
      } else {
        finalLanguages = languageArray.slice(0, 3);
      }

      var languageIconArray = [];
      finalLanguages.forEach(function (language) {
        var ThisApp = _this.languageIcon.filter(function (app) {
          return language == app.id.toString();
        });

        languageIconArray.push(ThisApp);
      });
      return languageIconArray;
    },
    imageStyle: function imageStyle(height, data) {
      if (data.background_color == null) {
        var styleString = "width:100%;height:" + height + "px;position:absolute; left:0%; top:0%;  border:1px solid transparent;background-repeat: no-repeat; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background-size:cover; ";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString = "width:100%;height:" + height + "px;position:absolute; left:0%; top:0%; border:1px solid transparent; background-repeat: no-repeat; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25);background-size:cover; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/challenges/thumbnails/' + imgLink + ');';
        return _styleString;
      }
    },
    startChallenge: function startChallenge(challenge) {
      this.$router.push({
        path: '/board/challenges/panel/' + challenge.duel_id + '/description'
      });
    },
    checkDuelStatus: function checkDuelStatus(challenge) {
      if (challenge.started == 0) {
        return 'Pending';
      }

      var now = moment();
      var terminalDateToMoment = moment(challenge.duel_terminal_time);
      var differenceInSeconds = terminalDateToMoment.diff(now, 'seconds');

      if (differenceInSeconds <= 0) {
        return 'Ended';
      } else {
        return 'Ends ' + terminalDateToMoment.fromNow();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Challenge.vue?vue&type=template&id=7562a02f&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Challenge.vue?vue&type=template&id=7562a02f&scoped=true& ***!
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
    "div",
    { staticClass: "col-lg-4 col-md-6 px-2 mb-2 pt-1 pt-md-2" },
    [
      _c(
        "v-card",
        {
          staticClass: "py-0 px-0 d-flex flex-column",
          staticStyle: { "border-radius": "0px" },
          attrs: { ripple: false },
          on: {
            click: function($event) {
              return _vm.appName(_vm.source)
            }
          }
        },
        [
          _c("div", { style: _vm.imageStyle(120, _vm.source) }, [
            _c(
              "div",
              {
                staticClass: "py-2 px-2 text-right",
                staticStyle: {
                  position: "absolute",
                  height: "100%",
                  left: "0%",
                  width: "100%",
                  background: "rgba(27, 27, 30, 0.3)",
                  border: "1px solid transparent"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "py-1 px-2",
                    staticStyle: {
                      position: "absolute",
                      top: "0%",
                      width: "100%",
                      height: "auto"
                    }
                  },
                  [
                    _vm.checkDuelStatus(_vm.source) == "Pending"
                      ? [
                          _c(
                            "v-chip",
                            {
                              staticClass: "mx-2",
                              staticStyle: {
                                "font-size": "12px",
                                color: "white",
                                "font-family": "BodyFont"
                              },
                              attrs: {
                                color: "#ffc107",
                                dense: "",
                                "x-small": ""
                              }
                            },
                            [
                              _vm._v(
                                "\n     \n    " +
                                  _vm._s(_vm.checkDuelStatus(_vm.source)) +
                                  "\n    "
                              )
                            ]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.checkDuelStatus(_vm.source) == "Ended"
                      ? [
                          _c(
                            "v-chip",
                            {
                              staticClass: "mx-2",
                              staticStyle: {
                                "font-size": "12px",
                                color: "white",
                                "font-family": "BodyFont"
                              },
                              attrs: {
                                color: "#17a2b8",
                                dense: "",
                                "x-small": ""
                              }
                            },
                            [
                              _vm._v(
                                "\n     \n    " +
                                  _vm._s(_vm.checkDuelStatus(_vm.source)) +
                                  "\n    "
                              )
                            ]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.checkDuelStatus(_vm.source) != "Ended" &&
                    _vm.checkDuelStatus(_vm.source) != "Pending"
                      ? [
                          _c(
                            "v-chip",
                            {
                              staticClass: "mx-2",
                              staticStyle: {
                                "font-size": "12px",
                                color: "white",
                                "font-family": "BodyFont"
                              },
                              attrs: {
                                color: "#28a745",
                                dense: "",
                                "x-small": ""
                              }
                            },
                            [
                              _vm._v(
                                "\n     \n    " +
                                  _vm._s(_vm.checkDuelStatus(_vm.source)) +
                                  "\n    "
                              )
                            ]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "py-1 px-2",
                  staticStyle: {
                    position: "absolute",
                    bottom: "0%",
                    width: "100%",
                    height: "auto"
                  }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "px-2 pb-2",
              staticStyle: { "margin-top": "115px" }
            },
            [
              _c("div", { staticClass: " py-0 my-0 text-left mt-2" }, [
                _c(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont",
                      "white-space": "nowrap",
                      overflow: "hidden",
                      "text-overflow": "ellipsis"
                    }
                  },
                  [_vm._v(_vm._s(_vm.source.title))]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: " py-0 my-0 px-0 text-left",
                  staticStyle: {
                    height: "60px",
                    "text-overflow": "ellipsis",
                    "overflow-y": "hidden"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "BodyFont",
                        color: "grey"
                      }
                    },
                    [_vm._v(_vm._s(_vm.source.summary))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: " py-0 my-0 text-center mt-1 mb-1" },
                [
                  _c(
                    "v-chip",
                    {
                      staticClass: "mx-2",
                      staticStyle: {
                        "font-size": "12px",
                        "font-family": "BodyFont"
                      },
                      attrs: {
                        outlined: "",
                        color: "#3C87CD",
                        dense: "",
                        small: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n     \n   " +
                          _vm._s(_vm.source.duel_participants.length) +
                          " participants\n    "
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/Challenge.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/challenges/Challenge.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Challenge_vue_vue_type_template_id_7562a02f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Challenge.vue?vue&type=template&id=7562a02f&scoped=true& */ "./resources/js/components/challenges/Challenge.vue?vue&type=template&id=7562a02f&scoped=true&");
/* harmony import */ var _Challenge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Challenge.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/Challenge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Challenge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Challenge_vue_vue_type_template_id_7562a02f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Challenge_vue_vue_type_template_id_7562a02f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7562a02f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/Challenge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/Challenge.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/challenges/Challenge.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Challenge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Challenge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Challenge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Challenge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/Challenge.vue?vue&type=template&id=7562a02f&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Challenge.vue?vue&type=template&id=7562a02f&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Challenge_vue_vue_type_template_id_7562a02f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Challenge.vue?vue&type=template&id=7562a02f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Challenge.vue?vue&type=template&id=7562a02f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Challenge_vue_vue_type_template_id_7562a02f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Challenge_vue_vue_type_template_id_7562a02f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);