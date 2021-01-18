(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PanelSettings"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelSettings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/PanelSettings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '',
      contributors: [],
      app: '',
      Connections: [],
      loadingConnection: '',
      Rule: [function (v) {
        return !!v || 'Title is required';
      }, function (v) {
        return v.length < 80 || 'Title must be less than 80 characters';
      }, function (v) {
        return /^[A-Za-z0-9 ]+$/.test(v) || 'Cannot contain special character';
      }],
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      loading: false,
      showConnection: false
    };
  },
  mounted: function mounted() {
    this.fetchConnected();
    this.title = this.$root.projectData.project.title;
  },
  methods: {
    toggleData: function toggleData(username) {
      var selectedArray = this.contributors.filter(function (contributor) {
        return contributor == username;
      });

      if (selectedArray.length > 0) {
        var remainingContributor = this.contributors.filter(function (contributor) {
          return contributor != username;
        });
        this.contributors = remainingContributor;
        return;
      } else {
        this.contributors.push(username);
      }
    },
    checkIfSelected: function checkIfSelected(username) {
      var selectedArray = this.contributors.filter(function (contributor) {
        return contributor == username;
      });

      if (selectedArray.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    saveSettings: function saveSettings() {
      var _this = this;

      this.loading = true;
      axios.post('/save-panel-settings', {
        'contributors': this.contributor,
        'project_slug': this.$route.params.project_slug,
        'title': this.title
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.projectPanelComponent.showAlert('Saved', 'Your changes have been saved', 'success');
        }
      })["catch"](function (error) {
        _this.$root.projectPanelComponent.showAlert('Oops!', 'Something went wrong', 'error');

        _this.loading = false;
      });
    },
    fetchConnected: function fetchConnected() {
      var _this2 = this;

      this.loadingConnection = true;
      axios.get('/fetch-connected').then(function (response) {
        if (response.status == 200) {
          _this2.Connections = response.data.data;
          _this2.loadingConnection = false;
        }
      })["catch"](function (error) {
        _this2.loadingConnection = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelSettings.vue?vue&type=template&id=a3692f46&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/PanelSettings.vue?vue&type=template&id=a3692f46& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    {
      staticStyle: {
        background: "transparent",
        "font-family": "BodyFont",
        "padding-top": "20px"
      }
    },
    [
      _c("div", { staticClass: "col-12 mt-5 mt-md-1 ml-lg-4" }, [
        _c("h6", [_vm._v("Panel Settings")])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1"
        },
        [
          _c("v-form", { staticClass: "row my-2 py-2 px-2" }, [
            _c(
              "div",
              { staticClass: "col-12 py-2 my-0 px-2" },
              [
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    rules: _vm.Rule,
                    "prepend-inner-icon": "las la-laptop-code",
                    dense: "",
                    placeholder: "title...",
                    outlined: "",
                    color: "#3C87CD",
                    label: "Project Title"
                  },
                  model: {
                    value: _vm.title,
                    callback: function($$v) {
                      _vm.title = $$v
                    },
                    expression: "title"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 py-2 my-0 px-2" },
              [
                _c("v-select", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    dense: "",
                    label: "Contributors",
                    counter: "20",
                    placeholder: "select...",
                    rules: _vm.requiredRule,
                    outlined: "",
                    "persistent-hint": "",
                    hint: "Add people you are following",
                    chips: "",
                    loading: _vm.loadingConnection,
                    items: _vm.Connections,
                    "item-text": "username",
                    "item-value": "username",
                    multiple: "",
                    color: "#3C87CD"
                  },
                  on: {
                    focus: function($event) {
                      _vm.showConnection = true
                    }
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "selection",
                      fn: function(data) {
                        return [
                          _c(
                            "v-chip",
                            _vm._b(
                              {
                                key: JSON.stringify(data.item),
                                staticClass: "my-1",
                                staticStyle: {
                                  "font-size": "12px",
                                  "font-family": "BodyFont"
                                },
                                attrs: {
                                  "input-value": data.selected,
                                  color: "#3C87CD",
                                  dense: "",
                                  outlined: "",
                                  disabled: data.disabled
                                }
                              },
                              "v-chip",
                              data.attrs,
                              false
                            ),
                            [
                              _vm._v(
                                "\n             \n              " +
                                  _vm._s(data.item.username) +
                                  "\n            "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.contributors,
                    callback: function($$v) {
                      _vm.contributors = $$v
                    },
                    expression: "contributors"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 py-1 my-0 px-2 text-center" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "HeaderFont"
                    },
                    attrs: {
                      type: "submit",
                      small: "",
                      color: "#3C87CD",
                      loading: _vm.loading
                    },
                    on: { click: _vm.saveSettings }
                  },
                  [_vm._v("save")]
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.showConnection
        ? _c(
            "div",
            {
              staticClass: "col-12 d-lg-none py-0 px-0 d-flex",
              staticStyle: {
                "align-items": "center",
                left: "0",
                "justify-content": "center",
                background: "rgba(27, 27, 30, 0.1)",
                position: "fixed",
                height: "100%",
                top: "0%",
                "z-index": "999999999999"
              },
              on: {
                click: function($event) {
                  _vm.showConnection = false
                }
              }
            },
            [
              _c(
                "v-card",
                {
                  staticClass: "py-2",
                  staticStyle: {
                    width: "260px",
                    "max-height": "400px",
                    "overflow-x": "auto"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "col-12 px-0 py-1 d-flex flex-column" },
                    _vm._l(_vm.Connections, function(connected, index) {
                      return _c(
                        "v-card",
                        {
                          key: index,
                          staticClass: "px-2 py-2 d-flex flex-row",
                          staticStyle: { "align-items": "center" },
                          attrs: { tile: "", flat: "" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.toggleData(connected.username)
                            }
                          }
                        },
                        [
                          _vm.checkIfSelected(connected.username)
                            ? [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-1",
                                    attrs: { color: "#3C87CD" }
                                  },
                                  [_vm._v("las la-check-square")]
                                )
                              ]
                            : [
                                _c("v-icon", { staticClass: "mr-1" }, [
                                  _vm._v("las la-minus-square")
                                ])
                              ],
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
                            [_vm._v(_vm._s(connected.username))]
                          )
                        ],
                        2
                      )
                    }),
                    1
                  )
                ]
              )
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/PanelSettings.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/projects/PanelSettings.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelSettings_vue_vue_type_template_id_a3692f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelSettings.vue?vue&type=template&id=a3692f46& */ "./resources/js/components/projects/PanelSettings.vue?vue&type=template&id=a3692f46&");
/* harmony import */ var _PanelSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/PanelSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PanelSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PanelSettings_vue_vue_type_template_id_a3692f46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PanelSettings_vue_vue_type_template_id_a3692f46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/PanelSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/PanelSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/projects/PanelSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/PanelSettings.vue?vue&type=template&id=a3692f46&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/projects/PanelSettings.vue?vue&type=template&id=a3692f46& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelSettings_vue_vue_type_template_id_a3692f46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelSettings.vue?vue&type=template&id=a3692f46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelSettings.vue?vue&type=template&id=a3692f46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelSettings_vue_vue_type_template_id_a3692f46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelSettings_vue_vue_type_template_id_a3692f46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);