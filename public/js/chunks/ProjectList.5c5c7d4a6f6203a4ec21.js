(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Project = function Project() {
  return __webpack_require__.e(/*! import() | EachProject */ "EachProject").then(__webpack_require__.bind(null, /*! ./Project.vue */ "./resources/js/components/projects/Project.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadingProject: false
    };
  },
  components: {
    Project: Project
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
    this.$root.projectListComponent = this;
    this.fetchProjects();
  },
  methods: {
    fetchProjects: function fetchProjects() {
      var _this = this;

      this.loadingProject = true;
      var storedProjects = this.$root.getLocalStore('user_projects_' + this.$root.username);
      storedProjects.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this.$root.projectList = finalResult;
          _this.loadingProject = false;

          _this.checkForNewProjects();
        } else {
          axios.get('/fetch-user-projects').then(function (response) {
            if (response.status == 200) {
              _this.$root.LocalStore('user_projects_' + _this.$root.username, response.data);

              _this.$root.projectList = response.data;
              _this.loadingProject = false;
            }
          })["catch"](function (error) {
            _this.showAlert('Oops!', 'Something went wrong', 'error');

            _this.loadingProject = false;
          });
        }
      });
    },
    checkForNewProjects: function checkForNewProjects() {
      var _this2 = this;

      axios.get('/fetch-user-projects').then(function (response) {
        if (response.status == 200) {
          _this2.$root.LocalStore('user_projects_' + _this2.$root.username, response.data);

          _this2.$root.projectList = response.data;
        }
      })["catch"](function (error) {});
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 2000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          message: message,
          timeout: 2000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    },
    addProject: function addProject() {
      this.$router.push({
        path: '/board/projects/add'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true& ***!
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
    [
      _c("div", {
        staticClass: " mt-1 col-12 d-md-none d-block",
        staticStyle: { background: "#F5F5FB" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1 pt-2 px-2 d-md-block d-none fixed-top",
          staticStyle: {
            position: "sticky",
            top: "0%",
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
                    on: { click: _vm.addProject }
                  },
                  [
                    _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                      _vm._v("las la-plus")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "text-transform": "none" } }, [
                      _vm._v("Create a project")
                    ])
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
          staticClass: "d-md-none d-inline-block",
          staticStyle: {
            "z-index": "99999999",
            position: "fixed",
            bottom: "3%",
            right: "3%"
          },
          attrs: { fab: "", color: "#3C87CD" },
          on: { click: _vm.addProject }
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
      this.$root.TopBarComponent
        ? [
            this.$root.TopBarComponent.searchContent.length > 0
              ? [
                  _c(
                    "div",
                    { staticClass: "col-md-10 offset-md-1 py-1 px-2 " },
                    [
                      _c(
                        "div",
                        { staticClass: "row text-center " },
                        [
                          _c("div", {
                            staticClass: "col-12 mt-3 mt-md-0 d-md-none d-block"
                          }),
                          _vm._v(" "),
                          _vm._l(this.$root.projectSearchList, function(
                            project,
                            index
                          ) {
                            return _c("project", {
                              key: index + "search",
                              attrs: { project: project }
                            })
                          })
                        ],
                        2
                      )
                    ]
                  )
                ]
              : [
                  _vm.loadingProject
                    ? [
                        _c(
                          "div",
                          { staticClass: "col-md-10 offset-md-1 py-1 px-2 " },
                          [
                            _c("div", { staticClass: "row text-center " }, [
                              _c("div", {
                                staticClass:
                                  "col-12 mt-3 mt-md-0 d-md-none d-block"
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 mt-4 text-center" },
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
                            ])
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loadingProject
                    ? [
                        _c(
                          "div",
                          { staticClass: "col-md-10 offset-md-1 py-1 px-2 " },
                          [
                            _c(
                              "div",
                              { staticClass: "row text-center " },
                              [
                                _c("div", {
                                  staticClass:
                                    "col-12 mt-3 mt-md-0 d-md-none d-block"
                                }),
                                _vm._v(" "),
                                _vm._l(
                                  this.$root.projectList.user_projects,
                                  function(project, index) {
                                    return _c("project", {
                                      key: index + "personal",
                                      attrs: { project: project }
                                    })
                                  }
                                )
                              ],
                              2
                            )
                          ]
                        ),
                        _vm._v(" "),
                        this.$root.projectList.contributor_projects
                          ? [
                              this.$root.projectList.contributor_projects
                                .length > 0
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2"
                                    },
                                    [_c("h6", [_vm._v("Contributions")])]
                                  )
                                : _vm._e()
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-10 offset-md-1 py-1 px-2 " },
                          [
                            _c(
                              "div",
                              { staticClass: "row text-center" },
                              _vm._l(
                                this.$root.projectList.contributor_projects,
                                function(project, index) {
                                  return _c("project", {
                                    key: index + "contribution",
                                    attrs: { project: project }
                                  })
                                }
                              ),
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        this.$root.projectList.pinned_projects
                          ? [
                              this.$root.projectList.pinned_projects.length > 0
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-10 offset-md-1 py-1 px-2 mt-4 mb-2"
                                    },
                                    [_c("h6", [_vm._v("Pinned")])]
                                  )
                                : _vm._e()
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-10 offset-md-1 py-1 px-2 " },
                          [
                            _c(
                              "div",
                              { staticClass: "row text-center" },
                              _vm._l(
                                this.$root.projectList.pinned_projects,
                                function(project, index) {
                                  return _c("project", {
                                    key: index + "pinned",
                                    attrs: { project: project }
                                  })
                                }
                              ),
                              1
                            )
                          ]
                        )
                      ]
                    : _vm._e()
                ]
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "py-5 my-5" })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 py-0 my-0" }, [
      _c("h5", [_vm._v("Projects")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=70475ced&scoped=true& */ "./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70475ced",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectList.vue?vue&type=template&id=70475ced&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectList.vue?vue&type=template&id=70475ced&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_70475ced_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);