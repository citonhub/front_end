(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Board"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Board.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ImageCropperBoard = function ImageCropperBoard() {
  return __webpack_require__.e(/*! import() | imageCropperBoard */ "imageCropperBoard").then(__webpack_require__.bind(null, /*! ./ImageCropper.vue */ "./resources/js/components/dashboard/ImageCropper.vue"));
};

var Invitation = function Invitation() {
  return __webpack_require__.e(/*! import() | Invitation */ "Invitation").then(__webpack_require__.bind(null, /*! ../chats/invitation.vue */ "./resources/js/components/chats/invitation.vue"));
};

var TransactionInfo = function TransactionInfo() {
  return __webpack_require__.e(/*! import() | TransactionInfo */ "TransactionInfo").then(__webpack_require__.bind(null, /*! ../Wallet/TransactionInfo.vue */ "./resources/js/components/Wallet/TransactionInfo.vue"));
};

var PayoutInfo = function PayoutInfo() {
  return __webpack_require__.e(/*! import() | PayoutInfo */ "PayoutInfo").then(__webpack_require__.bind(null, /*! ../Wallet/PayoutInfo.vue */ "./resources/js/components/Wallet/PayoutInfo.vue"));
};

var FeeInfo = function FeeInfo() {
  return __webpack_require__.e(/*! import() | FeeInfo */ "FeeInfo").then(__webpack_require__.bind(null, /*! ../Wallet/FeeInfo.vue */ "./resources/js/components/Wallet/FeeInfo.vue"));
};

var TopBar = function TopBar() {
  return __webpack_require__.e(/*! import() | TopBarBoard */ "TopBarBoard").then(__webpack_require__.bind(null, /*! ./TopBar.vue */ "./resources/js/components/dashboard/TopBar.vue"));
};

var PayoutAccount = function PayoutAccount() {
  return __webpack_require__.e(/*! import() | TopBarBoard */ "TopBarBoard").then(__webpack_require__.bind(null, /*! ../Wallet/PayoutAccount.vue */ "./resources/js/components/Wallet/PayoutAccount.vue"));
};

var SideBar = function SideBar() {
  return __webpack_require__.e(/*! import() | SideBar */ "SideBar").then(__webpack_require__.bind(null, /*! ./sideBar.vue */ "./resources/js/components/dashboard/sideBar.vue"));
};

var ProfileView = function ProfileView() {
  return Promise.all(/*! import() | ProfileView */[__webpack_require__.e("vendors~AddGem~AddProject~ChallengePanel~ChallengesCreate~Chats~DiaryBoard~FeedForm~ForgotPassword~G~00bea193"), __webpack_require__.e("vendors~ForgotPassword~Hub~ProfilePage~ResetPassword~SetUsername~register~verify"), __webpack_require__.e("ProfilePage")]).then(__webpack_require__.bind(null, /*! ../Profile/ProfilePage.vue */ "./resources/js/components/Profile/ProfilePage.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showSideBar: false,
      searchType: '',
      that: this
    };
  },
  components: {
    ImageCropperBoard: ImageCropperBoard,
    Invitation: Invitation,
    TransactionInfo: TransactionInfo,
    FeeInfo: FeeInfo,
    TopBar: TopBar,
    SideBar: SideBar,
    ProfileView: ProfileView,
    PayoutAccount: PayoutAccount,
    PayoutInfo: PayoutInfo
  },
  mounted: function mounted() {
    this.$root.boardComponent = this;
  },
  methods: {
    closeCropper: function closeCropper() {
      this.$root.showImageCropper = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fixed-layout[data-v-5296f690]{\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.scroller[data-v-5296f690]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-5296f690]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n  \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=template&id=5296f690&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Board.vue?vue&type=template&id=5296f690&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "fixed-layout" }, [
    _c(
      "div",
      {
        staticStyle: {
          width: "100%",
          height: "auto",
          "overflow-y": "hidden",
          "overflow-x": "hidden"
        }
      },
      [
        _c(
          "v-card",
          {
            staticClass: "d-none col-lg-2  d-lg-block",
            staticStyle: {
              "z-index": "999",
              "border-radius": "0px",
              "align-items": "center",
              background: "white",
              "justify-content": "center",
              position: "fixed",
              height: "100%",
              top: "0%"
            }
          },
          [
            [
              _vm.that.$root.componentIsLoading
                ? _c(
                    "div",
                    {
                      staticClass: "d-flex",
                      staticStyle: {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    [
                      _c("img", {
                        attrs: { src: "/imgs/diary_loading.svg", height: "50" }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("side-bar")
            ]
          ],
          2
        ),
        _vm._v(" "),
        _c("v-slide-x-transition", [
          _vm.that.$root.showSideBar
            ? _c(
                "div",
                {
                  staticClass: "col-12 d-lg-none d-block py-0 px-0",
                  staticStyle: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    "z-index": "99999999999999999",
                    background: "rgba(27, 27, 30, 0.32)"
                  },
                  on: {
                    click: function($event) {
                      _vm.that.$root.showSideBar = false
                    }
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        position: "absolute",
                        height: "100%",
                        width: "70%",
                        left: "0"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-6 pt-2",
                          staticStyle: { background: "white", height: "100%" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              _vm.that.$root.showSideBar = true
                            }
                          }
                        },
                        [
                          [
                            _vm.that.$root.componentIsLoading
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "d-flex",
                                    staticStyle: {
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      "align-items": "center",
                                      "justify-content": "center"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: "/imgs/diary_loading.svg",
                                        height: "50"
                                      }
                                    })
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("side-bar")
                          ]
                        ],
                        2
                      )
                    ]
                  )
                ]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.that.$root.showImageCropper
          ? _c(
              "div",
              {
                staticClass: "py-0 px-0",
                staticStyle: {
                  position: "fixed",
                  width: "100%",
                  height: "100%",
                  "z-index": "99999999999999999",
                  background: "rgba(27, 27, 30, 0.32)"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "d-flex",
                    staticStyle: {
                      position: "absolute",
                      height: "90%",
                      top: "5%",
                      width: "94%",
                      left: "3%",
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          " col-lg-6  pt-2 col-md-8  d-flex flex-column",
                        staticStyle: { background: "white", height: "100%" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "text-center d-flex flex-row",
                            staticStyle: { "align-items": "center" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col-2 px-1 py-1 text-left" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "" },
                                    on: { click: _vm.closeCropper }
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
                            _c("div", { staticClass: "col-2 px-1 py-1" })
                          ]
                        ),
                        _vm._v(" "),
                        _c("image-cropper-board")
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        this.$root.showInvitation
          ? _c(
              "div",
              {
                staticClass: "py-0 px-0",
                staticStyle: {
                  position: "fixed",
                  width: "100%",
                  height: "100%",
                  "z-index": "99999999999999999",
                  background: "rgba(27, 27, 30, 0.32)"
                },
                on: {
                  click: function($event) {
                    _vm.that.$root.showInvitation = false
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "d-flex",
                    staticStyle: {
                      position: "absolute",
                      height: "90%",
                      top: "5%",
                      width: "94%",
                      left: "3%",
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c("invitation", {
                      attrs: {
                        infoText: this.$root.infoText,
                        extraInfo: this.$root.extraInfo,
                        fromChat: false,
                        alertComponent: this.$root.alertComponent
                      }
                    })
                  ],
                  1
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: " col-lg-10  offset-lg-2 ",
            staticStyle: {
              "z-index": "999999",
              background: "#F5F5FB",
              "align-items": "center",
              "justify-content": "center",
              position: "fixed",
              height: "100%",
              top: "0%"
            }
          },
          [
            _c("top-bar"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 py-0 pb-3 px-0 mt-md-5",
                staticStyle: {
                  position: "absolute",
                  background: "#F5F5FB",
                  left: "0%",
                  top: "0%",
                  height: "100%",
                  "overflow-y": "hidden",
                  "overflow-x": "hidden"
                }
              },
              [_c("router-view")],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    this.$root.showProfileView
      ? _c(
          "div",
          {
            staticClass: "py-0 px-0",
            staticStyle: {
              position: "fixed",
              width: "100%",
              height: "100%",
              "z-index": "99999999999999999",
              background: "#F5F5FB"
            }
          },
          [_c("profile-view", { attrs: { fromModal: true } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    this.$root.showWalletinfo
      ? _c(
          "div",
          {
            staticClass: "py-0 px-0",
            staticStyle: {
              position: "fixed",
              width: "100%",
              height: "100%",
              "z-index": "99999999999999999",
              background: "rgba(27, 27, 30, 0.32)"
            },
            on: {
              click: function($event) {
                _vm.that.$root.showWalletinfo = false
              }
            }
          },
          [
            _c(
              "div",
              {
                staticStyle: {
                  position: "absolute",
                  height: "90%",
                  top: "10%",
                  width: "94%",
                  left: "3%"
                }
              },
              [
                _vm.that.$root.infoType == "fee" ? [_c("fee-info")] : _vm._e(),
                _vm._v(" "),
                _vm.that.$root.infoType == "transaction"
                  ? [_c("transaction-info")]
                  : _vm._e(),
                _vm._v(" "),
                _vm.that.$root.infoType == "payout"
                  ? [_c("payout-info")]
                  : _vm._e()
              ],
              2
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.that.$root.showPayoutAccount
      ? _c(
          "div",
          {
            staticClass: " px-0",
            staticStyle: {
              position: "fixed",
              width: "100%",
              height: "100%",
              "z-index": "99999999999999999",
              background: "rgba(27, 27, 30, 0.32)",
              "overflow-y": "auto",
              "padding-bottom": "100px !important"
            },
            on: {
              click: function($event) {
                _vm.that.$root.showPayoutAccount = false
              }
            }
          },
          [
            _c(
              "div",
              {
                staticStyle: {
                  position: "absolute",
                  height: "90%",
                  top: "5%",
                  width: "94%",
                  left: "3%"
                }
              },
              [_c("payout-account")],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "text-center col-8 py-1", staticStyle: { width: "100%" } },
      [_c("h6", [_vm._v("Crop Image")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/Board.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/dashboard/Board.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board_vue_vue_type_template_id_5296f690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.vue?vue&type=template&id=5296f690&scoped=true& */ "./resources/js/components/dashboard/Board.vue?vue&type=template&id=5296f690&scoped=true&");
/* harmony import */ var _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Board_vue_vue_type_style_index_0_id_5296f690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css& */ "./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Board_vue_vue_type_template_id_5296f690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Board_vue_vue_type_template_id_5296f690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5296f690",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Board.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Board.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/dashboard/Board.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_id_5296f690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=style&index=0&id=5296f690&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_id_5296f690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_id_5296f690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_id_5296f690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_id_5296f690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_style_index_0_id_5296f690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/Board.vue?vue&type=template&id=5296f690&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Board.vue?vue&type=template&id=5296f690&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_5296f690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Board.vue?vue&type=template&id=5296f690&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Board.vue?vue&type=template&id=5296f690&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_5296f690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Board_vue_vue_type_template_id_5296f690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);