(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceUrl"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
    var _this = this;

    return {
      searchQuery: '',
      urlRule: [function (v) {
        return _this.isURL(v) || "Link should be valid and secure";
      }],
      formstate: false,
      linkInfo: false,
      loading: false,
      loadingLink: false,
      that: this
    };
  },
  components: {},
  mounted: function mounted() {
    this.$root.showAddButton = false;
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    isURL: function isURL(str) {
      if (str.length == 0) {
        return false;
      }

      var url;

      try {
        url = new URL(str);
      } catch (_) {
        return false;
      }

      return url.protocol === "https:";
    },
    addToResource: function addToResource() {
      var _this2 = this;

      this.loading = true;
      axios.post('/add-items-to-resource', {
        resource_id: this.$root.selectedResource.resource_id,
        type: 'shared_link',
        items: [this.linkInfo]
      }).then(function (response) {
        if (response.status == 200) {
          _this2.loading = false;
          _this2.$root.forcereloadResource = true;

          _this2.$root.chatComponent.showAlert('Added!', 'Resource URL has been added', 'success', 'bottomRight', 3000);

          _this2.goBack();
        }
      })["catch"](function (error) {
        _this2.loading = false;
      });
    },
    processURL: function processURL(link) {
      var psl = __webpack_require__(/*! psl */ "./node_modules/psl/index.js");

      var FullString = link;

      function extractHostname(url) {
        var hostname; //find & remove protocol (http, ftp, etc.) and get hostname

        if (url.indexOf("//") > -1) {
          hostname = url.split('/')[2];
        } else {
          hostname = url.split('/')[0];
        } //find & remove port number


        hostname = hostname.split(':')[0]; //find & remove "?"

        hostname = hostname.split('?')[0];
        return hostname;
      }

      return psl.get(extractHostname(FullString));
    },
    getLinkInfo: function getLinkInfo(e) {
      var _this3 = this;

      this.searchQuery = e.target.value;

      if (this.isURL(this.searchQuery)) {
        this.loadingLink = true;
        axios.post('/url/metadata', {
          url: this.searchQuery
        }).then(function (response) {
          if (response.status == 200) {
            _this3.linkInfo = response.data;
            _this3.loadingLink = false;
          }
        })["catch"](function (err) {
          console.log(err);

          _this3.$root.chatComponent.showAlert('Oops!', 'Unable to fetch URL details', 'error', 'bottomRight', 3000);

          _this3.loadingLink = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-1 px-0" },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-2 py-2  fixed-top d-flex flex-row",
          staticStyle: {
            position: "sticky",
            background: "white",
            top: "0%",
            "align-items": "center"
          }
        },
        [
          _c(
            "div",
            { staticClass: " mr-1 py-0" },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.goBack($event)
                    }
                  }
                },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              staticClass: "py-0 text-center px-0",
              staticStyle: { width: "100%" },
              model: {
                value: _vm.formstate,
                callback: function($$v) {
                  _vm.formstate = $$v
                },
                expression: "formstate"
              }
            },
            [
              _c("input", {
                staticClass: "py-2 px-3",
                staticStyle: {
                  width: "100%",
                  heigth: "100%",
                  "font-size": "13px",
                  background: "whitesmoke",
                  "border-radius": "4px",
                  "font-family": "BodyFont"
                },
                attrs: {
                  placeholder: "Paste resource URL here",
                  type: "search"
                },
                domProps: { value: _vm.searchQuery },
                on: { input: _vm.getLinkInfo }
              })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.loadingLink
        ? [
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
          ]
        : [
            _vm.linkInfo
              ? [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12  pb-0 pt-0 px-0 d-flex flex-row mt-1",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-5 py-1 px-1",
                          staticStyle: { height: "84px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              style:
                                "position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(" +
                                _vm.linkInfo.image +
                                ");background-repeat: no-repeat; background-size:cover;"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "px-1 py-1 d-flex",
                                  staticStyle: {
                                    "align-items": "center",
                                    background: "rgba(0, 0, 0,0.1)",
                                    "justify-content": "center",
                                    cursor: "pointer",
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%"
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticStyle: {
                                        "font-size": "35px",
                                        color: "#ffffff"
                                      }
                                    },
                                    [_vm._v("las la-link")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-7 d-flex flex-column pt-1 my-auto",
                          staticStyle: {
                            "justify-content": "center",
                            width: "100%"
                          }
                        },
                        [
                          _c("div", {
                            staticClass: "pt-3 mb-1",
                            staticStyle: {
                              "font-family": "MediumFont",
                              "font-size": "13px",
                              overflow: "hidden",
                              width: "100%",
                              "text-overflow": "ellipsis"
                            },
                            domProps: { innerHTML: _vm._s(_vm.linkInfo.title) }
                          }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "mb-1",
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "12px",
                              "white-space": "nowrap",
                              color: "grey",
                              overflow: "hidden",
                              "text-overflow": "ellipsis"
                            },
                            domProps: {
                              innerHTML: _vm._s(_vm.linkInfo.description)
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "12px",
                                color: "grey",
                                overflow: "hidden",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.processURL(_vm.linkInfo.base)) +
                                  "\n           "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 text-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticStyle: {
                            "font-size": "11px",
                            "text-transform": "none",
                            "font-weight": "bolder",
                            color: "white",
                            "font-family": "BodyFont"
                          },
                          attrs: {
                            rounded: "",
                            small: "",
                            loading: _vm.loading,
                            disabled: !_vm.linkInfo || _vm.loadingLink,
                            color: "#3C87CD"
                          },
                          on: { click: _vm.addToResource }
                        },
                        [
                          _vm._v(
                            "Add to " +
                              _vm._s(_vm.that.$root.selectedResource.name)
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ResourceUrl.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/ResourceUrl.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& */ "./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&");
/* harmony import */ var _ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceUrl.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14df1d9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ResourceUrl.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUrl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceUrl.vue?vue&type=template&id=14df1d9c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUrl_vue_vue_type_template_id_14df1d9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);