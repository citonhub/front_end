(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceContent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
var _require = __webpack_require__(/*! html-to-text */ "./node_modules/html-to-text/index.js"),
    htmlToText = _require.htmlToText;

var Resource = function Resource() {
  return Promise.all(/*! import() | Resource */[__webpack_require__.e("vendors~Board~Hub~LiveSession~ProjectView~Resource"), __webpack_require__.e("Resource")]).then(__webpack_require__.bind(null, /*! ./Resource.vue */ "./resources/js/components/chats/Resource.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      resources: [],
      that: this,
      contentInWord: '',
      title: '',
      loadingInfo: false,
      loadingContent: false,
      input: '',
      loadingNextPage: false,
      nextPageToken: ''
    };
  },
  computed: {
    compiledMarkdown: function compiledMarkdown() {
      var renderer = new marked.Renderer();

      renderer.link = function (href, title, text) {
        var link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' ");
      };

      marked.setOptions({
        renderer: renderer
      });
      return marked(this.input, {
        sanitize: true
      });
    }
  },
  components: {
    Resource: Resource
  },
  mounted: function mounted() {
    this.fetchResourceContent();
    this.$root.showAddButton = true;
    this.setType();
    this.input = htmlToText(this.$root.selectedResource.info, {});
  },
  methods: {
    saveResourceInfo: _.debounce(function () {
      var _this = this;

      this.contentInWord = this.compiledMarkdown;
      this.loadingInfo = true;
      axios.post('/save-resource-info', {
        resource_id: this.$root.selectedResource.resource_id,
        info: this.contentInWord
      }).then(function (response) {
        if (response.status == 200) {
          _this.loadingInfo = false;
        }
      })["catch"](function (error) {
        _this.$root.chatComponent.showAlert('Oops!', 'Unable to save your changes', 'error', 'bottomRight', 10000);

        _this.loadingInfo = false;
      });
    }, 500),
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = '';
    },
    fetchResourceContent: function fetchResourceContent() {
      var _this2 = this;

      if (this.$root.selectedResource.youtube_playlist_id) {
        this.loadingContent = true;
        axios.get('/fetch-resource-content/' + this.$root.selectedResource.resource_id).then(function (response) {
          if (response.status == 200) {
            var results = response.data.result;
            var finalResult = [];
            results.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'youtube_video'
              };
              finalResult.push(resultWrapper);
            });
            _this2.resources = finalResult;
            _this2.nextPageToken = response.data.nextPageToken;
            _this2.loadingContent = false;
          }
        })["catch"](function (error) {
          _this2.loadingContent = false;

          _this2.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }

      if (this.$root.selectedResource.devto_username) {
        this.loadingContent = true;
        axios.get('/fetch-resource-content/' + this.$root.selectedResource.resource_id).then(function (response) {
          if (response.status == 200) {
            var results = response.data.articles;
            var finalResult = [];
            results.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'devto_article'
              };
              finalResult.push(resultWrapper);
            });
            _this2.resources = finalResult;
            _this2.nextPageToken = 1;
            _this2.loadingContent = false;
          }
        })["catch"](function (error) {
          _this2.loadingContent = false;

          _this2.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }

      if (this.$root.selectedResource.youtube_playlist_id == null && this.$root.selectedResource.devto_username == null) {
        this.loadingContent = true;
        var storedResourceContent = this.$root.getLocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id + this.$root.username);
        storedResourceContent.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);
            _this2.resources = finalResult;
            _this2.loadingContent = false;

            _this2.checkForNewResourceContent();
          } else {
            axios.get('/fetch-resource-content/' + _this2.$root.selectedResource.resource_id).then(function (response) {
              if (response.status == 200) {
                _this2.$root.LocalStore('channel_resource_content_' + _this2.$root.selectedResource.resource_id + _this2.$root.username, response.data.contents);

                _this2.resources = response.data.contents;
                _this2.loadingContent = false;
              }
            })["catch"](function (error) {
              _this2.loadingContent = false;

              _this2.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
            });
          }
        });
      }
    },
    checkForNewResourceContent: function checkForNewResourceContent() {
      var _this3 = this;

      axios.get('/fetch-resource-content/' + this.$root.selectedResource.resource_id).then(function (response) {
        if (response.status == 200) {
          _this3.$root.LocalStore('channel_resource_content_' + _this3.$root.selectedResource.resource_id + _this3.$root.username, response.data.contents);

          _this3.resources = response.data.contents;
          _this3.$root.forcereloadResource = false;
        }
      })["catch"](function (error) {
        _this3.loadingContent = false;
      });
    },
    nextPagehandler: function nextPagehandler(shown) {
      var _this4 = this;

      if (this.nextPageToken && shown) {
        this.loadingNextPage = true;
        axios.get('/fetch-resource-content/' + this.$root.selectedResource.resource_id + '/' + this.nextPageToken).then(function (response) {
          if (response.status == 200) {
            var results = [];

            if (_this4.$root.selectedResource.devto_username) {
              _this4.nextPageToken++;
              results = response.data.articles;
              var finalResult = [];
              results.forEach(function (data) {
                var resultWrapper = {
                  content: data,
                  type: 'devto_article'
                };
                finalResult.push(resultWrapper);
              });
              _this4.resources = finalResult;
            } else {
              _this4.nextPageToken = response.data.nextPageToken;
              results = response.data.result;
              var _finalResult = [];
              results.forEach(function (data) {
                var resultWrapper = {
                  content: data,
                  type: 'youtube_video'
                };

                _finalResult.push(resultWrapper);
              });
              _this4.resources = _finalResult;
            }

            _this4.loadingNextPage = false;
          }
        })["catch"](function (error) {
          _this4.loadingNextPage = false;

          _this4.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }
    },
    setType: function setType() {
      if (this.$root.resourceContentType == 'resources') {
        this.title = 'My Articles';
      } else if (this.$root.resourceContentType == 'videos') {
        this.title = 'My Videos';
      }
    },
    goToSearch: function goToSearch() {
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_search'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-0" },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
          staticStyle: {
            position: "sticky",
            background: "white",
            top: "0%",
            "border-bottom": "2px solid #c5c5c5",
            "align-items": "center"
          }
        },
        [
          _c(
            "div",
            { staticClass: " mr-1 col-2 px-1 py-0" },
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
              staticClass: "col-8 py-0 text-center",
              staticStyle: {
                "white-space": "nowrap",
                overflow: "hidden",
                "text-overflow": "ellipsis"
              }
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "14px",
                    "font-family": "MediumFont"
                  }
                },
                [_vm._v(_vm._s(_vm.that.$root.selectedResource.name))]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.loadingContent
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
            _c("div", { staticClass: "col-12 px-2 px-md-2" }, [
              _vm.that.$root.selectedResource.user_id !=
              _vm.that.$root.user_temp_id
                ? _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "BodyFont"
                      },
                      domProps: {
                        innerHTML: _vm._s(_vm.that.$root.selectedResource.info)
                      }
                    },
                    [
                      _vm._v(
                        "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam praesentium sequi, suscipit officia numquam aut, voluptatibus culpa cumque ducimus ab quasi necessitatibus nulla omnis assumenda, ratione enim! Odit, quod?\n         "
                      )
                    ]
                  )
                : _c(
                    "div",
                    { staticStyle: { width: "100%", height: "100px" } },
                    [
                      _c("v-textarea", {
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "BodyFont"
                        },
                        attrs: {
                          dense: "",
                          placeholder:
                            "What is this " +
                            _vm.that.$root.selectedResource.type +
                            " about? Markdown is supported.",
                          filled: "",
                          height: "100",
                          loading: _vm.loadingInfo,
                          counter: "700",
                          color: "#3C87CD"
                        },
                        on: { input: _vm.saveResourceInfo },
                        model: {
                          value: _vm.input,
                          callback: function($$v) {
                            _vm.input = $$v
                          },
                          expression: "input"
                        }
                      })
                    ],
                    1
                  )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 py-1 my-0 px-1 px-md-2 ",
                staticStyle: {
                  background: "transparent",
                  "font-family": "BodyFont"
                }
              },
              [
                _c("resource", {
                  attrs: { contents: _vm.resources, show_add_icon: false }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center col-lg-12" },
                  [
                    _vm.loadingNextPage
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
                          value: _vm.nextPagehandler,
                          expression: "nextPagehandler"
                        }
                      ]
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 my-5 py-5" })
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ResourceContent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/chats/ResourceContent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& */ "./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&");
/* harmony import */ var _ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceContent.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d4ee0488",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ResourceContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);