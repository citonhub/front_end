(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChallengesList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

moment__WEBPACK_IMPORTED_MODULE_0___default()().format();
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
  mounted: function mounted() {
    this.$root.showTopBar = true;
    this.fetchChallenges();
  },
  methods: {
    fetchChallenges: function fetchChallenges() {
      var _this = this;

      axios.get('/get-challenges').then(function (response) {
        if (response.status == 200) {
          _this.challenges = response.data.challenges;
        } else {
          console.log(response.status);
        }
      });
    },
    appName: function appName(challenge) {
      var ThisApp = this.languageIcon.filter(function (app) {
        return challenge.duel_language_array == app.id.toString();
      });

      if (ThisApp.length > 0) {
        return ThisApp[0].name;
      } else {
        return 'Web';
      }
    },
    imageStyle: function imageStyle(width, data) {
      if (data.background_color == null) {
        var styleString = "height:100%;width:" + width + "px;background-size:cover;border-top-left-radius:7px;border-bottom-left-radius:7px; background-repeat: no-repeat; ";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color:#ffffff; background-image:url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color:#ffffff; background-image:url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:#ffffff; background-image:url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString = "height:100%;width:" + width + "px;background-size:cover;border-top-left-radius:7px;border-bottom-left-radius:7px; background-repeat: no-repeat; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/challenges/' + imgLink + ');';
        return _styleString;
      }
    },
    createChallenge: function createChallenge() {
      this.$router.push({
        path: '/board/challenges/create'
      });
    },
    startChallenge: function startChallenge(box) {
      this.$root.selectedChallenge = box;
      this.$router.push({
        path: '/board/challenges/panel/description'
      });
    },
    setDuration: function setDuration(box) {
      moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(box.duration, 'hours');
    },
    checkDuelStatus: function checkDuelStatus(challenge) {
      if (challenge.started == 0) {
        return 'Pending';
      }

      var now = moment__WEBPACK_IMPORTED_MODULE_0___default()();
      var terminalDateToMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(challenge.duel_terminal_time);
      var votingDateToMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(challenge.duel_voting_time);
      var differenceInSeconds = votingDateToMoment.diff(now, 'seconds');
      var differenceInSecondsForVoting = votingDateToMoment.diff(now, 'seconds');

      if (differenceInSeconds <= 0) {
        return 'Ended';
      } else {
        if (differenceInSecondsForVoting <= 3600) {
          return 'Voting';
        }

        return 'Active';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nspan[data-v-7e881e92]{\n\n   color: #3C87CD;\n   font-weight: bold;\nline-height:21px;\n}\n.challengeBox[data-v-7e881e92]{\n   background:transparent !important;\n   cursor: pointer;\n}\n.challengeBox[data-v-7e881e92]:hover{\n   background:transparent !important;\n   cursor: pointer;\n}\n  \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1 mb-0  pt-3 px-2 d-md-block d-none fixed-top",
          staticStyle: {
            position: "sticky",
            top: "-1%",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6  py-0 my-0 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: { small: "", rounded: "", color: "#3C87CD" },
                    on: { click: _vm.createChallenge }
                  },
                  [
                    _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                      _vm._v("las la-plus")
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "none"
                        }
                      },
                      [_vm._v("Create a challenge")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "d-lg-none d-inline-block",
          staticStyle: {
            "z-index": "99999999",
            position: "fixed",
            bottom: "3%",
            right: "3%"
          },
          attrs: { fab: "", color: "#3C87CD" },
          on: { click: _vm.createChallenge }
        },
        [
          _c(
            "v-icon",
            { staticStyle: { "font-size": "24px", color: "white" } },
            [_vm._v("las la-plus")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-lg-8 offset-lg-2 col-md-10 offset-md-1  pb-1 pt-0   "
        },
        [
          _c(
            "div",
            { staticClass: "row text-center px-1 py-1 pt-md-3" },
            [
              _c("div", {
                staticClass: "col-12 mt-5 mt-md-0 d-md-none d-block"
              }),
              _vm._v(" "),
              _vm._l(_vm.challenges, function(box, index) {
                return _c(
                  "v-card",
                  {
                    key: index,
                    staticClass:
                      "col-12 py-0 px-md-0 px-0 pr-1 d-flex mb-3 flex-row ",
                    staticStyle: { "border-radius": "7px" },
                    on: {
                      click: function($event) {
                        return _vm.startChallenge(box)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: " d-md-block d-none mr-2" }, [
                      _c("div", { style: _vm.imageStyle(100, box) })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mr-1 d-block d-md-none" }, [
                      _c("div", { style: _vm.imageStyle(65, box) })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-left d-flex flex-column py-md-3 py-2",
                        staticStyle: { "overflow-x": "hidden", width: "100%" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "pb-1 d-md-block d-none",
                            staticStyle: {
                              "font-size": "14px",
                              "font-family": "MediumFont",
                              "white-space": "nowrap",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [_vm._v(_vm._s(box.title))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "pb-1  d-md-block d-none",
                            staticStyle: {
                              "font-size": "12px",
                              "font-family": "BodyFont",
                              "white-space": "nowrap",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [_vm._v(_vm._s(box.description))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "pb-1  d-md-none d-block",
                            staticStyle: {
                              "font-size": "13px",
                              "font-family": "MediumFont",
                              "white-space": "nowrap",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [_vm._v(_vm._s(box.title))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "pb-1  d-md-none d-block",
                            staticStyle: {
                              "font-size": "11px",
                              "font-family": "BodyFont",
                              "white-space": "nowrap",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [_vm._v(_vm._s(box.description))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "d-flex flex-row pr-2",
                            staticStyle: {
                              "align-items": "center",
                              "white-space": "nowrap",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "font-size": "12px",
                                  "font-family": "BodyFont"
                                }
                              },
                              [_vm._v(_vm._s(_vm.appName(box)) + " ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                staticClass: "mx-1",
                                staticStyle: { "font-size": "12px" }
                              },
                              [_vm._v("mdi-record")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "font-size": "12px",
                                  "font-family": "BodyFont"
                                }
                              },
                              [_vm._v(_vm._s(_vm.checkDuelStatus(box)))]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                staticClass: "mx-1",
                                staticStyle: { "font-size": "12px" }
                              },
                              [_vm._v("mdi-record")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "d-md-block d-none",
                                staticStyle: {
                                  "font-size": "12px",
                                  "font-family": "BodyFont"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(box.duel_participants.length) +
                                    " Participants "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "d-md-none d-block",
                                staticStyle: {
                                  "font-size": "12px",
                                  "font-family": "BodyFont"
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { staticStyle: { "font-size": "17px" } },
                                  [_vm._v("las la-user-friends")]
                                ),
                                _vm._v(
                                  " " +
                                    _vm._s(box.duel_participants.length) +
                                    " "
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div")
                  ]
                )
              })
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 py-0 my-0" }, [
      _c("h5", [_vm._v("Challenges")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& */ "./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&");
/* harmony import */ var _ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChallengesList.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& */ "./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e881e92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/ChallengesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=style&index=0&id=7e881e92&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_style_index_0_id_7e881e92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/ChallengesList.vue?vue&type=template&id=7e881e92&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChallengesList_vue_vue_type_template_id_7e881e92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);