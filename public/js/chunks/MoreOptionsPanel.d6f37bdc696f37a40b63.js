(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MoreOptionsPanel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingContent: false,
      newGitRepo: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadingDelete: false
    };
  },
  methods: {
    copyWebLink: function copyWebLink() {
      var copyToClipboard = function copyToClipboard(str) {
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

      copyToClipboard('https://www.citonhub.com/run-panel/' + this.$root.projectData.project_panel.panel_id);
      this.$root.projectPanelComponent.showAlert('Copied!', 'Copied to clipboard', 'success');
    },
    shareProject: function shareProject() {
      this.$root.shareLink = 'https://link.citonhub.com/project/' + this.$route.params.project_slug;
      this.$root.shareText = 'Check out this project on Citonhub';
      this.$root.infoText = 'Share your project with others';
      this.$root.alertComponent = this.$root.projectPanelComponent;
      this.$root.showInvitation = true;
    },
    checkIfOwner: function checkIfOwner() {
      var _this = this;

      var member = this.$root.ProjectMembers.filter(function (member) {
        return member.user_id == _this.$root.user_temp_id;
      });

      if (member.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    deleteProject: function deleteProject() {
      var _this2 = this;

      if (this.loadingDelete) return;
      this.loadingDelete = true;
      axios.post('/delete-project', {
        project_slug: this.$route.params.project_slug
      }).then(function (response) {
        if (response.status == 200) {
          var remainingProjects = _this2.$root.projectList.user_projects.filter(function (project) {
            return project.project_slug != _this2.$route.params.project_slug;
          });

          _this2.$root.projectList.user_projects = remainingProjects;

          _this2.$root.LocalStore('user_projects_' + _this2.$root.username, _this2.$root.projectList);
        }

        _this2.$router.push({
          path: '/board/projects/list'
        });
      })["catch"](function (error) {
        _this2.loadingDelete = false;

        _this2.$root.projectPanelComponent.showAlert('Oops!', 'Unable to delete project', 'error');
      });
    },
    gotToSettings: function gotToSettings() {
      this.$root.projectPanelComponent.showSideBar = false; // this.$router.push({ path: '/board/projects/panel/'+  this.$route.params.project_slug +'/set-panel' });

      this.$router.push({
        path: '/board/projects/panel/' + this.$root.projectData.project.project_slug + '/set-panel'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
          staticClass: "col-12 px-1 py-1  fixed-top d-flex flex-row",
          staticStyle: {
            position: "sticky",
            "align-items": "center",
            background: "white",
            top: "0%",
            "border-bottom": "2px solid #c5c5c5"
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.goBack } },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
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
            { staticClass: "  ml-auto" },
            [
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.shareResource } },
                [_c("v-icon", [_vm._v("mdi mdi-share-variant")])],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "col-12",
          staticStyle: {
            height: "93%",
            position: "absolute",
            top: "7%",
            "overflow-y": "auto"
          }
        },
        [
          _vm.loadingContent
            ? [
                _c(
                  "div",
                  {
                    staticClass: "d-flex flex-row",
                    staticStyle: {
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0px",
                      "justify-content": "center",
                      "align-items": "center"
                    }
                  },
                  [
                    _c("v-progress-circular", {
                      attrs: {
                        color: "#3C87CD",
                        indeterminate: "",
                        width: "3",
                        size: "25"
                      }
                    })
                  ],
                  1
                )
              ]
            : [
                _c(
                  "div",
                  [
                    _vm.newGitRepo
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "mb-1 mt-3 text-center col-10 offset-1"
                            },
                            [
                              _c("p", [
                                _vm._v(
                                  "Create a github repository for your project to access version control features."
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-center mb-4" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-2 d-inline-block",
                                      staticStyle: {
                                        color: "white",
                                        "font-family": "BodyFont",
                                        "font-size": "11px"
                                      },
                                      attrs: {
                                        small: "",
                                        color: "#3C87CD",
                                        rounded: ""
                                      }
                                    },
                                    [_vm._v("Create Repo")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      : [
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "col-12 px-2 px-md-2 mt-1 " },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticStyle: {
                                      "text-decoration": "underline"
                                    }
                                  },
                                  [_vm._v("Adenikym/phonetracker")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", [_c("p", [_vm._v("Status")])])
                          ])
                        ]
                  ],
                  2
                )
              ]
        ],
        2
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
    return _c(
      "div",
      {
        staticClass: " text-center",
        staticStyle: {
          "white-space": "nowrap",
          width: "100%",
          overflow: "hidden",
          "text-overflow": "ellipsis"
        }
      },
      [
        _c(
          "span",
          { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
          [_vm._v("Version Control")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& ***!
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
    "v-card",
    { staticClass: "py-0 px-0", staticStyle: { width: "200px" } },
    [
      _c(
        "div",
        { staticClass: "col-12 px-0 py-1 d-flex flex-column" },
        [
          this.$root.projectData.project.is_web
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: { click: _vm.copyWebLink }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-link")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        color: "grey"
                      }
                    },
                    [_vm._v("Web App URL")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-2 py-2 d-flex flex-row",
              staticStyle: { "align-items": "center" },
              attrs: { tile: "", flat: "" },
              on: { click: _vm.shareProject }
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [
                _vm._v("mdi mdi-share-variant")
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "BodyFont",
                    "font-size": "13px",
                    color: "grey"
                  }
                },
                [_vm._v("Share")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-2 py-2 d-flex flex-row",
              staticStyle: { "align-items": "center" },
              attrs: { tile: "", flat: "" },
              on: { click: _vm.gotToSettings }
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [_vm._v("las la-cog")]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "BodyFont",
                    "font-size": "13px",
                    color: "grey"
                  }
                },
                [_vm._v("Settings")]
              )
            ],
            1
          ),
          _vm._v(" "),
          this.$root.projectData.project.user_id == this.$root.user_temp_id
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "", loading: _vm.loadingDelete },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.deleteProject($event)
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-trash")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        color: "grey"
                      }
                    },
                    [_vm._v("Delete")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/AddGit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/projects/AddGit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddGit.vue?vue&type=template&id=44934f6a& */ "./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&");
/* harmony import */ var _AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddGit.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/AddGit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGit.vue?vue&type=template&id=44934f6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/AddGit.vue?vue&type=template&id=44934f6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGit_vue_vue_type_template_id_44934f6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/projects/MoreOptions.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/MoreOptions.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& */ "./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&");
/* harmony import */ var _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10ddbbc2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/MoreOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);