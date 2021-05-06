(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TopBarBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showSideBar: false,
      searchType: '',
      that: this,
      searchContent: ''
    };
  },
  mounted: function mounted() {
    this.$root.TopBarComponentBoard = this;
  },
  methods: {
    showProfile: function showProfile() {
      this.$router.push({
        path: '/profile/' + this.$root.username
      });
    },
    showSideBarHandler: function showSideBarHandler() {
      this.$root.componentIsLoading = true;
      this.$root.showSideBar = true;
    },
    triggerSearch: function triggerSearch() {
      if (this.$root.searchType == 'challenges') {
        this.getChallenges(this.searchContent);
      }

      if (this.$root.searchType == 'projects') {
        this.searchProject(this.searchContent);
      }

      if (this.$root.searchType == 'diary') {
        this.searchDiary(this.searchContent);
      }
    },
    searchProject: function searchProject(query) {
      var fullProjectList = this.$root.projectList.user_projects.concat(this.$root.projectList.contributor_projects, this.$root.projectList.pinned_projects);
      var projectListResult = fullProjectList.filter(function (project) {
        var nameValue = project.title.toLowerCase();
        return nameValue.includes(query.toLowerCase());
      });
      this.$root.projectSearchList = projectListResult;
    },
    searchDiary: function searchDiary(query) {
      if (this.$router.currentRoute.path.indexOf('bank') >= 0) {
        this.getDiaryBank(query);
        return;
      }

      var diaryListResult = this.$root.diaryList.filter(function (diary) {
        var nameValue = diary.name.toLowerCase();
        return nameValue.includes(query.toLowerCase());
      });
      this.$root.diarySearchList = diaryListResult;
    },
    getDiaryBank: _.debounce(function (query) {
      var _this = this;

      var finalString = '/' + query;

      if (query.length == 0) {
        finalString = '';
      }

      this.$root.diaryBankComponent.loadingSearchDairy = true;
      axios.get('/get-diary-bank' + finalString).then(function (response) {
        if (response.status == 200) {
          _this.$root.diaryBankSearchList = response.data.diaries;
          _this.$root.diaryBankComponent.loadingSearchDairy = false;
        }
      })["catch"](function (error) {
        _this.$root.diaryBankComponent.loadingSearchDairy = false;
      });
    }, 500),
    getChallenges: _.debounce(function (query) {
      var _this2 = this;

      var finalString = '/' + query;

      if (query.length == 0) {
        finalString = '';
      }

      this.$root.challengeListComponent.loadingSearchChallenges = true;
      axios.get('/get-challenges' + finalString).then(function (response) {
        if (response.status == 200) {
          _this2.$root.challengeSearchList = response.data.challenges;
          _this2.$root.challengeListComponent.loadingSearchChallenges = false;
        }
      })["catch"](function (error) {
        _this2.$root.challengeListComponent.loadingSearchChallenges = false;
      });
    }, 500),
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        staticClass: "col-12 d-none d-md-block py-0",
        staticStyle: {
          position: "absolute",
          background: "#F5F5FB",
          height: "70px",
          top: "0",
          left: "0",
          "font-family": "BodyFont",
          "z-index": "9999999999"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-5 col-md-1  text-left" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mt-2 d-lg-none ",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.showSideBarHandler()
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
            { staticClass: "col-lg-7 col-md-10 offset-md-1 offset-lg-0" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-6 col-md-5 text-center" },
                  [
                    _vm.that.$root.searchType != "notifications" &&
                    _vm.that.$root.searchType != "wallet"
                      ? [
                          _c("v-text-field", {
                            staticStyle: { "font-size": "13px" },
                            attrs: {
                              placeholder:
                                "Search " + _vm.that.$root.searchType,
                              filled: "",
                              dense: "",
                              "append-icon": "las la-search",
                              rounded: ""
                            },
                            on: { input: _vm.triggerSearch },
                            model: {
                              value: _vm.searchContent,
                              callback: function($$v) {
                                _vm.searchContent = $$v
                              },
                              expression: "searchContent"
                            }
                          })
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-2 col-md-2 text-right" },
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
                    staticClass: "col-lg-4 col-md-5 py-1 d-flex",
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
                        staticStyle: { cursor: "pointer" },
                        on: { click: _vm.showProfile }
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
    _vm.that.$root.showTopBar
      ? _c(
          "div",
          {
            staticClass: "col-12 d-block d-md-none py-2 ",
            staticStyle: {
              position: "absolute",
              background: "#F5F5FB",
              top: "0",
              left: "0",
              "font-family": "BodyFont",
              "z-index": "99999999999"
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
                                  return _vm.showSideBarHandler()
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
                          _vm.that.$root.searchType != "notifications" &&
                          _vm.that.$root.searchType != "wallet"
                            ? [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.searchContent,
                                      expression: "searchContent"
                                    }
                                  ],
                                  staticClass: "py-2 px-2",
                                  staticStyle: {
                                    width: "100%",
                                    heigth: "100%",
                                    "font-size": "13px"
                                  },
                                  attrs: {
                                    placeholder:
                                      "Search " + _vm.that.$root.searchType,
                                    type: "search"
                                  },
                                  domProps: { value: _vm.searchContent },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.searchContent = $event.target.value
                                      },
                                      _vm.triggerSearch
                                    ]
                                  }
                                })
                              ]
                            : [
                                _c("div", { staticClass: "text-left" }, [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "13px",
                                        "text-transfrom": "capitalize"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.that.$root.searchType))]
                                  )
                                ])
                              ]
                        ],
                        2
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
                                          {
                                            attrs: { dot: "", color: "green" }
                                          },
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
                                  ),
                                  on: { click: _vm.showProfile }
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
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/TopBar.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/dashboard/TopBar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=56f75444&scoped=true& */ "./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56f75444",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=56f75444&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);