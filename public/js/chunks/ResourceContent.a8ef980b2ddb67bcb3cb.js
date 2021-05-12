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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  return Promise.all(/*! import() | Resource */[__webpack_require__.e("vendors~Board~Hub~LiveSession~ProjectView~Resource~ResourceView"), __webpack_require__.e("vendors~Resource~ResourceUrl"), __webpack_require__.e("Resource")]).then(__webpack_require__.bind(null, /*! ./Resource.vue */ "./resources/js/components/chats/Resource.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      resources: [],
      that: this,
      contentInWord: '',
      title: '',
      showEditTitle: false,
      loadingInfo: false,
      loadingContent: false,
      input: '',
      showEditDesc: false,
      loadingNextPage: false,
      nextPageToken: '',
      resourceTitle: ''
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
    this.resourceTitle = this.$root.selectedResource.name;
    this.setType();
    this.input = htmlToText(this.$root.selectedResource.info, {});
  },
  methods: {
    goToSearch: function goToSearch(type) {
      if (type == 'link') {
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/add_resource_url'
        });
        return;
      }

      if (this.$router.currentRoute.path.indexOf('resource_search') >= 0) {
        this.$root.resourceSearchType = type;
      } else {
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_search'
        });
        this.$root.resourceSearchType = type;
      }
    },
    checkIfisOwner: function checkIfisOwner() {
      var _this = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].is_admin;
      } else {
        return false;
      }
    },
    saveResourceInfo: _.debounce(function () {
      var _this2 = this;

      this.contentInWord = this.compiledMarkdown;
      this.loadingInfo = true;
      axios.post('/save-resource-info', {
        resource_id: this.$root.selectedResource.resource_id,
        info: this.contentInWord
      }).then(function (response) {
        if (response.status == 200) {
          _this2.loadingInfo = false;
          _this2.$root.selectedResource.info = _this2.contentInWord;
        }
      })["catch"](function (error) {
        _this2.$root.chatComponent.showAlert('Oops!', 'Unable to save your changes', 'error', 'bottomRight', 10000);

        _this2.loadingInfo = false;
      });
    }, 500),
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = '';
    },
    fetchResourceContent: function fetchResourceContent() {
      var _this3 = this;

      if (this.$root.selectedResource.youtube_playlist_id) {
        this.$root.showAddButton = false;
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
            _this3.resources = finalResult;
            _this3.nextPageToken = response.data.nextPageToken;
            _this3.loadingContent = false;
          }
        })["catch"](function (error) {
          _this3.loadingContent = false;

          _this3.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }

      if (this.$root.selectedResource.devto_username) {
        this.loadingContent = true;
        this.$root.showAddButton = false;
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
            _this3.resources = finalResult;
            _this3.nextPageToken = 1;
            _this3.loadingContent = false;
          }
        })["catch"](function (error) {
          _this3.loadingContent = false;

          _this3.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }

      if (this.$root.selectedResource.youtube_playlist_id == null && this.$root.selectedResource.devto_username == null) {
        this.loadingContent = true;
        var storedResourceContent = this.$root.getLocalStore('channel_resource_content_' + this.$root.selectedResource.resource_id + this.$root.username);
        storedResourceContent.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);

            if (finalResult.length == 0) {
              _this3.$root.showAddButton = false;
            } else {
              _this3.$root.showAddButton = true;
            }

            _this3.resources = finalResult;
            _this3.loadingContent = false;

            _this3.checkForNewResourceContent();
          } else {
            axios.get('/fetch-resource-content/' + _this3.$root.selectedResource.resource_id).then(function (response) {
              if (response.status == 200) {
                _this3.$root.LocalStore('channel_resource_content_' + _this3.$root.selectedResource.resource_id + _this3.$root.username, response.data.contents);

                _this3.resources = response.data.contents;

                if (_this3.resources.length == 0) {
                  _this3.$root.showAddButton = false;
                } else {
                  _this3.$root.showAddButton = true;
                }

                _this3.loadingContent = false;
              }
            })["catch"](function (error) {
              _this3.loadingContent = false;

              _this3.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
            });
          }
        });
      }
    },
    checkForNewResourceContent: function checkForNewResourceContent() {
      var _this4 = this;

      axios.get('/fetch-resource-content/' + this.$root.selectedResource.resource_id).then(function (response) {
        if (response.status == 200) {
          _this4.$root.LocalStore('channel_resource_content_' + _this4.$root.selectedResource.resource_id + _this4.$root.username, response.data.contents);

          _this4.resources = response.data.contents;

          if (_this4.resources.length == 0) {
            _this4.$root.showAddButton = false;
          } else {
            _this4.$root.showAddButton = true;
          }

          _this4.$root.forcereloadResource = false;
        }
      })["catch"](function (error) {
        _this4.loadingContent = false;
      });
    },
    nextPagehandler: function nextPagehandler(shown) {
      var _this5 = this;

      if (this.nextPageToken && shown) {
        this.loadingNextPage = true;
        axios.get('/fetch-resource-content/' + this.$root.selectedResource.resource_id + '/' + this.nextPageToken).then(function (response) {
          if (response.status == 200) {
            var results = [];

            if (_this5.$root.selectedResource.devto_username) {
              _this5.nextPageToken++;
              results = response.data.articles;
              var finalResult = [];
              results.forEach(function (data) {
                var resultWrapper = {
                  content: data,
                  type: 'devto_article'
                };
                finalResult.push(resultWrapper);
              });
              _this5.resources = finalResult;
            } else {
              _this5.nextPageToken = response.data.nextPageToken;
              results = response.data.result;
              var _finalResult = [];
              results.forEach(function (data) {
                var resultWrapper = {
                  content: data,
                  type: 'youtube_video'
                };

                _finalResult.push(resultWrapper);
              });
              _this5.resources = _finalResult;
            }

            _this5.loadingNextPage = false;
          }
        })["catch"](function (error) {
          _this5.loadingNextPage = false;

          _this5.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }
    },
    setType: function setType() {
      if (this.$root.resourceContentType == 'resources') {
        this.title = 'My Articles';
      } else if (this.$root.resourceContentType == 'videos') {
        this.title = 'My Videos';
      }
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
            { staticClass: " mr-1 col-2 px-1 pt-1 pb-0" },
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
              staticClass: "col-8 pt-1 pb-0 text-center d-flex flex-row",
              staticStyle: {
                "white-space": "nowrap",
                overflow: "hidden",
                "text-overflow": "ellipsis",
                "align-items": "center"
              }
            },
            [
              _vm.showEditTitle
                ? [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.resourceTitle,
                          expression: "resourceTitle"
                        }
                      ],
                      staticClass: "py-1 px-1",
                      staticStyle: {
                        border: "1px solid #c5c5c5",
                        width: "100%",
                        "border-radius": "2px",
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        background: "white"
                      },
                      domProps: { value: _vm.resourceTitle },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.resourceTitle = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { "x-small": "", icon: "" },
                        on: {
                          click: function($event) {
                            _vm.showEditTitle
                              ? (_vm.showEditTitle = false)
                              : (_vm.showEditTitle = true)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("las la-close")])],
                      1
                    )
                  ]
                : [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "14px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v(_vm._s(_vm.that.$root.selectedResource.name))]
                    ),
                    _vm._v(" "),
                    _vm.checkIfisOwner()
                      ? _c(
                          "v-btn",
                          {
                            attrs: { "x-small": "", icon: "" },
                            on: {
                              click: function($event) {
                                _vm.showEditTitle
                                  ? (_vm.showEditTitle = false)
                                  : (_vm.showEditTitle = true)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("las la-edit")])],
                          1
                        )
                      : _vm._e()
                  ]
            ],
            2
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
              _c(
                "div",
                {
                  staticClass: "d-flex flex-row col-12 py-0 px-0",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c(
                    "div",
                    [
                      _c("h6", { staticClass: "d-inline-block" }, [
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      _vm.checkIfisOwner()
                        ? _c(
                            "v-btn",
                            {
                              attrs: { "x-small": "", icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.showEditDesc
                                    ? (_vm.showEditDesc = false)
                                    : (_vm.showEditDesc = true)
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("las la-edit")])],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm.that.$root.selectedResource.user_id !=
              _vm.that.$root.user_temp_id
                ? _c("span", {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "BodyFont",
                      color: "grey"
                    },
                    domProps: {
                      innerHTML: _vm._s(_vm.that.$root.selectedResource.info)
                    }
                  })
                : _c(
                    "div",
                    { staticStyle: { width: "100%" } },
                    [
                      _vm.showEditDesc
                        ? [
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
                          ]
                        : [
                            _c("span", {
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "BodyFont",
                                color: "grey"
                              },
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.that.$root.selectedResource.info
                                )
                              }
                            })
                          ]
                    ],
                    2
                  )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 py-1 my-0 px-2 px-md-2 ",
                staticStyle: {
                  background: "transparent",
                  "font-family": "BodyFont"
                }
              },
              [
                [_c("h6", [_vm._v("Content")])],
                _vm._v(" "),
                _vm.resources.length > 0
                  ? [
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
                      )
                    ]
                  : [
                      [
                        _c(
                          "div",
                          {
                            staticClass: "mt-5 text-center",
                            staticStyle: {
                              "font-family": "BodyFont",
                              "font-size": "13px",
                              color: "grey"
                            }
                          },
                          [_vm._v("No content in this resource yet.")]
                        ),
                        _vm._v(" "),
                        _vm.checkIfisOwner() &&
                        _vm.that.$root.selectedResource.youtube_playlist_id ==
                          null
                          ? _c(
                              "div",
                              { staticClass: "col-12 py-1 text-center mt-2" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticStyle: {
                                      color: "#FF0000",
                                      "font-family": "BodyFont",
                                      "font-size": "13px",
                                      "text-transform": "none"
                                    },
                                    attrs: {
                                      medium: "",
                                      rounded: "",
                                      outlined: "",
                                      color: "#FF0000"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.goToSearch("youtube")
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass: "px-1",
                                        staticStyle: {
                                          "font-size": "35px",
                                          color: "#FF0000"
                                        }
                                      },
                                      [_vm._v("mdi mdi-youtube")]
                                    ),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v("Add videos from YouTube")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.checkIfisOwner() &&
                        _vm.that.$root.selectedResource.devto_username == null
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-12 py-1 text-center d-flex flex-row  flex-wrap"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-12 py-1 text-center" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticStyle: {
                                          "font-family": "BodyFont",
                                          "font-size": "13px",
                                          "text-transform": "none"
                                        },
                                        attrs: {
                                          medium: "",
                                          outlined: "",
                                          rounded: "",
                                          color: "#000000"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.goToSearch("devto")
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "px-1",
                                          attrs: {
                                            src: "/imgs/devto.png",
                                            height: "27px"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v("Add articles from DevTo")
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-12 py-2 text-center" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticStyle: {
                                          "font-family": "BodyFont",
                                          "font-size": "13px",
                                          "text-transform": "none"
                                        },
                                        attrs: {
                                          outlined: "",
                                          medium: "",
                                          rounded: "",
                                          color: "#3C87CD"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.goToSearch("link")
                                          }
                                        }
                                      },
                                      [
                                        _c("v-icon", { staticClass: "px-1" }, [
                                          _vm._v("las la-link  ")
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Add resource URL")])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    ],
                _vm._v(" "),
                _c("div", { staticClass: "col-12 my-5 py-5" })
              ],
              2
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