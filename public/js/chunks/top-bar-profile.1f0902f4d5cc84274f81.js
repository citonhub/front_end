(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-bar-profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js& ***!
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
      showSideBar: false,
      searchType: '',
      that: this,
      profileName: '',
      fetchedUser: '',
      searchTable: false
    };
  },
  mounted: function mounted() {
    this.$root.TopBarComponent = this;
  },
  methods: {
    goToNotification: function goToNotification() {
      this.$router.push({
        path: '/board/notifications'
      });
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    fetchSearchResult: function fetchSearchResult() {
      var _this = this;

      axios.get("/profile-search/".concat(this.profileName)).then(function (response) {
        if (response.status == 200) {
          console.log(response.data.profiles[0].username);
          _this.fetchedUser = response.data.profiles;
        }
      });
    },
    goToProfile: function goToProfile(user) {
      if (this.$root.selectedSpace.type == 'Bot') return;
      this.$root.selectedUsername = user.username;
      this.$router.push({
        path: '/profile-view/' + user.username
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "col-12 d-none d-md-block py-0 px-2",
        staticStyle: {
          position: "absolute",
          top: "0",
          left: "0",
          "font-family": "BodyFont"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-5 col-md-1 pb-0  text-left px-lg-4" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mt-2  ",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      _vm.that.$root.showSideBar = true
                    }
                  }
                },
                [
                  _c(
                    "v-icon",
                    { staticStyle: { "font-size": "25px", color: "black" } },
                    [_vm._v("las la-bars")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-7 pb-0 col-md-10 offset-md-1 offset-lg-0" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-6 col-md-5 pb-1 text-center" },
                  [
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "Search for People",
                        filled: "",
                        dense: "",
                        "append-icon": "las la-search",
                        rounded: ""
                      },
                      on: {
                        input: _vm.fetchSearchResult,
                        keydown: function($event) {
                          _vm.searchTable = true
                        }
                      },
                      model: {
                        value: _vm.profileName,
                        callback: function($$v) {
                          _vm.profileName = $$v
                        },
                        expression: "profileName"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-2 pb-1 col-md-2 text-right" },
                  [
                    this.$root.authProfile.name
                      ? [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: { click: _vm.goToNotification }
                            },
                            [
                              this.$root.authProfile.unread > 0
                                ? _c(
                                    "v-badge",
                                    {
                                      attrs: {
                                        content: this.$root.authProfile.unread,
                                        color: "green"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: {
                                            "font-size": "25px",
                                            color: "#263238"
                                          }
                                        },
                                        [_vm._v("las la-bell")]
                                      )
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-icon",
                                    {
                                      staticStyle: {
                                        "font-size": "25px",
                                        color: "#263238"
                                      }
                                    },
                                    [_vm._v("las la-bell")]
                                  )
                            ],
                            1
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-lg-4 pb-1 col-md-5 py-1 d-flex",
                    staticStyle: {
                      "justify-content": "center",
                      "align-items": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mb-5",
                        staticStyle: { cursor: "pointer" }
                      },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: " d-flex   py-1 px-2",
                            staticStyle: {
                              "border-radius": "30px",
                              "justify-content": "center",
                              "align-items": "center"
                            },
                            attrs: { "elevation-2": "" }
                          },
                          [
                            this.$root.authProfile.name
                              ? [
                                  _c("div", {
                                    staticClass: "d-inline-block mr-2",
                                    style: _vm.imageStyleUser(
                                      30,
                                      this.$root.authProfile
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "pr-1",
                                      staticStyle: {
                                        "font-family": "MediumFont",
                                        "font-size": "13px",
                                        color: "black"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(this.$root.authProfile.name)
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-12  d-md-none d-block py-2 ",
        staticStyle: {
          position: "absolute",
          top: "0",
          left: "0",
          "font-family": "BodyFont",
          "z-index": "99999999999999"
        }
      },
      [
        _c(
          "div",
          { staticClass: "row px-2" },
          [
            _c(
              "v-card",
              {
                staticClass: "col-12 py-2 px-1",
                staticStyle: { "border-radius": "7px" }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-2 py-0  text-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              _vm.that.$root.showSideBar = true
                            }
                          }
                        },
                        [
                          _c(
                            "v-icon",
                            {
                              staticStyle: {
                                "font-size": "25px",
                                color: "#263238"
                              }
                            },
                            [_vm._v("las la-bars")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-6 d-flex py-0 px-1",
                      staticStyle: {
                        "justify-content": "center",
                        "align-items": "center"
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profileName,
                            expression: "profileName"
                          }
                        ],
                        staticClass: "py-2 px-2",
                        staticStyle: {
                          width: "100%",
                          heigth: "100%",
                          "font-size": "12px"
                        },
                        attrs: {
                          placeholder: "Search for people",
                          type: "search"
                        },
                        domProps: { value: _vm.profileName },
                        on: {
                          keydown: function($event) {
                            _vm.searchTable = true
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.profileName = $event.target.value
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-2 text-center py-0" },
                    [
                      this.$root.authProfile.name
                        ? [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: { click: _vm.goToNotification }
                              },
                              [
                                this.$root.authProfile.unread > 0
                                  ? _c(
                                      "v-badge",
                                      { attrs: { dot: "", color: "green" } },
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            staticStyle: {
                                              "font-size": "23px",
                                              color: "#263238"
                                            }
                                          },
                                          [_vm._v("las la-bell")]
                                        )
                                      ],
                                      1
                                    )
                                  : _c(
                                      "v-icon",
                                      {
                                        staticStyle: {
                                          "font-size": "23px",
                                          color: "#263238"
                                        }
                                      },
                                      [_vm._v("las la-bell")]
                                    )
                              ],
                              1
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-2 d-flex px-1 py-0",
                      staticStyle: {
                        "justify-content": "center",
                        "align-items": "center"
                      }
                    },
                    [
                      this.$root.authProfile.name
                        ? [
                            _c("div", {
                              style: _vm.imageStyleUser(
                                32,
                                this.$root.authProfile
                              )
                            })
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ]
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _vm.searchTable
      ? _c(
          "div",
          {
            staticClass: "box d-lg-block  d-sm-none",
            staticStyle: {
              position: "absolute",
              background: "white",
              height: "390px",
              width: "380px",
              top: "66px",
              left: "580px",
              "border-radius": "20px 20px 0px 0px",
              "overflow-y": "scroll"
            }
          },
          [
            _c("div", { staticClass: "mt-1 ml-4" }, [
              _vm._v(_vm._s(_vm.profileName))
            ]),
            _vm._v(" "),
            _vm._l(_vm.fetchedUser, function(user) {
              return _c(
                "div",
                {
                  key: user.user_temp_id,
                  staticClass: "ml-4 mt-1",
                  on: {
                    click: function($event) {
                      return _vm.goToProfile(user)
                    }
                  }
                },
                [_vm._v("\n" + _vm._s(user.username) + "\n  ")]
              )
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.searchTable
      ? _c(
          "div",
          {
            staticClass: "box d-lg-none d-md-block  d-sm-none",
            staticStyle: {
              position: "absolute",
              background: "white",
              height: "340px",
              width: "240px",
              top: "66px",
              left: "150px",
              "border-radius": "20px 20px 0px 0px",
              "overflow-y": "scroll"
            }
          },
          [
            _c("div", { staticClass: "mt-1 ml-4" }, [
              _vm._v(_vm._s(_vm.profileName))
            ]),
            _vm._v(" "),
            _vm._l(_vm.fetchedUser, function(user) {
              return _c(
                "div",
                {
                  key: user.user_temp_id,
                  staticClass: "ml-4 mt-1",
                  on: {
                    click: function($event) {
                      return _vm.goToProfile(user)
                    }
                  }
                },
                [_vm._v("\n" + _vm._s(user.username) + "\n  ")]
              )
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.searchTable
      ? _c(
          "div",
          {
            staticClass: "box d-lg-none d-md-none  d-sm-block",
            staticStyle: {
              position: "absolute",
              background: "white",
              height: "340px",
              width: "340px",
              top: "64px",
              left: "130px",
              "overflow-y": "scroll"
            }
          },
          [
            _c("div", { staticClass: "mt-1 ml-4" }, [
              _vm._v(_vm._s(_vm.profileName))
            ]),
            _vm._v(" "),
            _vm._l(_vm.fetchedUser, function(user) {
              return _c(
                "div",
                {
                  key: user.user_temp_id,
                  staticClass: "ml-4 mt-1",
                  on: {
                    click: function($event) {
                      return _vm.goToProfile(user)
                    }
                  }
                },
                [_vm._v("\n" + _vm._s(user.username) + "\n  ")]
              )
            })
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& */ "./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f8a41a22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=f8a41a22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/TopBar.vue?vue&type=template&id=f8a41a22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_f8a41a22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);