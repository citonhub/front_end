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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: '',
      contributor: '',
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
      loading: false
    };
  },
  mounted: function mounted() {
    this.fetchConnected();
    this.title = this.$root.projectData.project.title;
  },
  methods: {
    saveSettings: function saveSettings() {
      var _this = this;

      this.loading = true;
      axios.post('/add-contributors', {
        'contributors': this.Contributors,
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
                                  _vm._s(data.item.name) +
                                  "\n            "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.contributor,
                    callback: function($$v) {
                      _vm.contributor = $$v
                    },
                    expression: "contributor"
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
                    attrs: { type: "submit", small: "", color: "#3C87CD" },
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
      )
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