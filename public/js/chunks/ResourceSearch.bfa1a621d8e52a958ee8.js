(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceSearch"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_observe_visibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-observe-visibility */ "./node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Resource = function Resource() {
  return Promise.all(/*! import() | Resource */[__webpack_require__.e("vendors~Board~Hub~LiveSession~ProjectView~Resource"), __webpack_require__.e("Resource")]).then(__webpack_require__.bind(null, /*! ./Resource.vue */ "./resources/js/components/chats/Resource.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      placeholder: '',
      searchQuery: '',
      searchResult: [],
      loadingSearch: false,
      loadingNext: false,
      devToTags: [],
      nextPageToken: ''
    };
  },
  components: {
    Resource: Resource,
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
    this.alterSearch();
    this.fetchDevToTags();
    this.$root.showAddButton = false;
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    loadNextSet: function loadNextSet(shown) {
      if (shown && this.searchResult.length > 0) {
        this.loadNextResult();
      }
    },
    fetchDevToTags: function fetchDevToTags() {
      var _this = this;

      axios.get('/devto-tags').then(function (response) {
        if (response.status == 200) {
          _this.devToTags = response.data.tags;
        }
      })["catch"](function (error) {});
    },
    loadNextResult: function loadNextResult() {
      var _this2 = this;

      if (this.loadingNext) return;
      this.loadingNext = true;

      if (this.$root.resourceSearchType == 'youtube') {
        axios.get("/search-youtube/".concat(this.searchQuery, "/").concat(this.nextPageToken)).then(function (response) {
          if (response.status == 200) {
            var searchResult = response.data.result;
            _this2.nextPageToken = response.data.nextPageToken;
            var finalResult = [];
            searchResult.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'youtube_video'
              };
              finalResult.push(resultWrapper);
            });
            _this2.searchResult = _this2.searchResult.concat(finalResult);
            _this2.loadingNext = false;
          }
        })["catch"](function (error) {
          _this2.loadingNext = false;
        });
      }
    },
    alterSearch: function alterSearch() {
      this.placeholder = 'Search ' + this.$root.resourceSearchType;
    },
    searchSite: function searchSite() {
      var _this3 = this;

      this.loadingSearch = true;

      if (this.$root.resourceSearchType == 'youtube') {
        axios.get("/search-youtube/".concat(this.searchQuery)).then(function (response) {
          if (response.status == 200) {
            var searchResult = response.data.result;
            _this3.nextPageToken = response.data.nextPageToken;
            var finalResult = [];
            searchResult.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'youtube_video'
              };
              finalResult.push(resultWrapper);
            });
            _this3.searchResult = finalResult;
            _this3.loadingSearch = false;
          }
        })["catch"](function (error) {
          _this3.loadingSearch = false;
        });
      }

      if (this.$root.resourceSearchType == 'devto') {
        axios.get("/search-devto/".concat(this.searchQuery)).then(function (response) {
          if (response.status == 200) {
            var searchResult = response.data.articles;
            console.log(searchResult); // this.nextPageToken =  response.data.nextPageToken

            var finalResult = [];
            searchResult.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'devto_article'
              };
              finalResult.push(resultWrapper);
            });
            _this3.searchResult = finalResult;
            _this3.loadingSearch = false;
          }
        })["catch"](function (error) {
          _this3.loadingSearch = false;
        });
      }

      if (this.$root.resourceSearchType == 'udemy') {
        if (this.$root.resourceSearchType == 'udemy') {
          axios.get("/search-udemy/".concat(this.searchQuery)).then(function (response) {
            if (response.status == 200) {
              console.log(response.data);
              _this3.loadingSearch = false;
            }
          })["catch"](function (error) {
            _this3.loadingSearch = false;
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& ***!
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
  return _c("div", { staticStyle: { background: "transparent" } }, [
    _c("div", { staticClass: "col-12 py-0 my-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-12 px-1 py-2  fixed-top d-flex flex-row",
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
              "div",
              {
                staticClass: " py-0 text-center",
                staticStyle: { width: "100%" }
              },
              [
                this.$root.resourceSearchType != "devto"
                  ? [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchQuery,
                            expression: "searchQuery"
                          }
                        ],
                        staticClass: "py-2 px-3",
                        staticStyle: {
                          width: "100%",
                          heigth: "100%",
                          "font-size": "13px",
                          background: "whitesmoke",
                          "border-radius": "13px",
                          "font-family": "BodyFont"
                        },
                        attrs: { placeholder: _vm.placeholder, type: "search" },
                        domProps: { value: _vm.searchQuery },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.searchQuery = $event.target.value
                          }
                        }
                      })
                    ]
                  : [
                      _c(
                        "div",
                        {
                          staticClass: "col-12 px-0 py-0",
                          staticStyle: { height: "55px" }
                        },
                        [
                          _c("multiselect", {
                            staticStyle: {
                              "font-size": "13px",
                              "font-family": "BodyFont"
                            },
                            attrs: {
                              multiple: true,
                              placeholder: "Select tags",
                              label: "name",
                              "track-by": "id",
                              options: _vm.devToTags
                            },
                            model: {
                              value: _vm.searchQuery,
                              callback: function($$v) {
                                _vm.searchQuery = $$v
                              },
                              expression: "searchQuery"
                            }
                          })
                        ],
                        1
                      )
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: " py-0 ml-1 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "", loading: _vm.loadingSearch },
                    on: { click: _vm.searchSite }
                  },
                  [_c("v-icon", [_vm._v("las la-search")])],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 py-1 my-0 px-1 px-md-2",
            staticStyle: {
              background: "transparent",
              "font-family": "BodyFont"
            }
          },
          [
            _vm.that.$root.selectedResource.type == "playlist"
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "mt-1 text-center",
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        color: "grey"
                      }
                    },
                    [
                      _vm._v(
                        'Add videos to "' +
                          _vm._s(_vm.that.$root.selectedResource.name) +
                          '" playlist'
                      )
                    ]
                  )
                ]
              : [
                  _c(
                    "div",
                    {
                      staticClass: "mt-1 text-center",
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        color: "grey"
                      }
                    },
                    [
                      _vm._v(
                        'Add articles to "' +
                          _vm._s(_vm.that.$root.selectedResource.name) +
                          '" resource'
                      )
                    ]
                  )
                ],
            _vm._v(" "),
            _c("resource", {
              attrs: { show_add_icon: true, contents: _vm.searchResult }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center col-lg-12" },
              [
                _vm.loadingNext
                  ? _c("v-progress-circular", {
                      attrs: { indeterminate: "", color: "#3C87CD" }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("div", {
                  directives: [
                    {
                      name: "observe-visibility",
                      rawName: "v-observe-visibility",
                      value: _vm.loadNextSet,
                      expression: "loadNextSet"
                    }
                  ]
                })
              ],
              1
            )
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ResourceSearch.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/chats/ResourceSearch.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& */ "./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&");
/* harmony import */ var _ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceSearch.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cdcf1096",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ResourceSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceSearch.vue?vue&type=template&id=cdcf1096&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSearch_vue_vue_type_template_id_cdcf1096_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);