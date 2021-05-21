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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  return Promise.all(/*! import() | Resource */[__webpack_require__.e("vendors~Board~Hub~LiveSession~ProjectView~Resource~ResourceView"), __webpack_require__.e("vendors~Resource~ResourceUrl"), __webpack_require__.e("Resource")]).then(__webpack_require__.bind(null, /*! ./Resource.vue */ "./resources/js/components/chats/Resource.vue"));
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
      nextPageToken: '',
      showSuggestion: false,
      selectedItems: [],
      allTagStore: [],
      queryContent: '',
      devToPageCount: 1,
      searchTypeYT: 'video,playlist',
      loading: false,
      searchType: 'tags',
      searchFilter: [{
        name: 'by tags',
        value: 'tags'
      }, {
        name: 'by username',
        value: 'username'
      }],
      searchFilterYT: [{
        name: 'videos and playlists',
        value: 'video,playlist'
      }, {
        name: 'videos only',
        value: 'videos'
      }, {
        name: 'playlist only',
        value: 'playlist'
      }]
    };
  },
  components: {
    Resource: Resource
  },
  mounted: function mounted() {
    if (this.$root.fromTemplateView) {
      this.$root.selectedResource = this.$root.formerselectedResource;
    }

    this.$root.resourcesData = this.$root.resourcesDataStore;
    this.$root.componentIsLoading = false;
    this.$root.searchResourceComponent = this;
    this.alterSearch(); // this.fetchDevToTags();

    this.$root.showAddButton = false;
    this.$root.resourcesSearchComponent = this;
    this.$root.selectedItems = [];
  },
  methods: {
    alterSearch: function alterSearch() {
      this.placeholder = 'Search ' + this.$root.resourceSearchType;

      if (this.$root.resourceSearchType == 'youtube' || this.$root.resourceSearchType == 'devto') {
        this.searchQuery = this.$root.selectedResource.name;

        if (this.$root.searchResult.length == 0) {
          this.searchSite();
        }
      }
    },
    selectTag: function selectTag(tag) {
      this.showSuggestion = true;

      if (this.searchQuery.length == 0) {
        this.searchQuery = [];
      }

      this.searchQuery = tag.name;
      this.showSuggestion = false;
    },
    AddItemsToResources: function AddItemsToResources() {
      var _this = this;

      var itemType = '';

      if (this.$root.resourceSearchType == 'devto') {
        itemType = 'devto_article';
      }

      if (this.$root.resourceSearchType == 'youtube') {
        itemType = 'youtube_video';
      }

      this.loading = true;
      axios.post('/add-items-to-resource', {
        resource_id: this.$root.selectedResource.resource_id,
        type: itemType,
        items: this.$root.selectedItems
      }).then(function (response) {
        if (response.status == 200) {
          _this.loading = false;
          _this.$root.forcereloadResource = true;

          if (_this.$root.selectedResource.type == 'playlist') {
            _this.$root.chatComponent.showAlert('Added!', 'video added to playlist', 'success', 'bottomRight', 3000);
          } else {
            _this.$root.chatComponent.showAlert('Added!', 'resource has been added', 'success', 'bottomRight', 3000);
          }

          var responseContent = response.data.content;
          _this.$root.resourcesData = responseContent.concat(_this.$root.resourcesData);

          _this.saveOrder();

          _this.goBack();
        }
      })["catch"](function (error) {
        _this.loading = false;
      });
    },
    saveOrder: function saveOrder() {
      var _this2 = this;

      var ResourcesArray = [];
      this.$root.resourcesData.forEach(function (content) {
        ResourcesArray.push(content.id);
      });
      axios.post('/save-resources-content-order', {
        resource_id: this.$root.selectedResource.resource_id,
        content: ResourcesArray
      }).then(function (response) {
        if (response.status == 200) {
          _this2.$root.LocalStore('channel_resource_content_' + _this2.$root.selectedResource.resource_id + _this2.$root.username, _this2.$root.resourcesData);

          _this2.$root.loadingResourceContent = false;
        }
      })["catch"](function (error) {
        _this2.$root.chatComponent.showAlert('Oops!', 'Unable to save changes,please try again', 'error');

        _this2.$root.loadingResourceContent = false;
      });
    },
    searchTags: function searchTags(e) {
      var _this3 = this;

      if (e.key != 'Backspace') {
        if (e.keyCode == 13) {
          this.showSuggestion = false;
          this.queryContent = '';
          this.devToTags = this.allTagStore;
        } else {
          if (e.key.length == 1) {
            this.queryContent += e.key;
            this.showSuggestion = true;
          }
        }
      } else {
        this.queryContent = this.queryContent.slice(0, -1);
      }

      var searchResult = this.allTagStore.filter(function (tag) {
        var nameValue = '';
        nameValue = tag.name.toLowerCase();
        return nameValue.includes(_this3.queryContent.toLowerCase());
      });
      this.devToTags = searchResult;
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    loadNextSet: function loadNextSet(shown) {
      if (shown && this.$root.searchResult.length > 0) {
        this.loadNextResult();
      }
    },
    fetchDevToTags: function fetchDevToTags() {
      var _this4 = this;

      axios.get('/devto-tags').then(function (response) {
        if (response.status == 200) {
          _this4.devToTags = response.data.tags;
          _this4.allTagStore = response.data.tags;
        }
      })["catch"](function (error) {});
    },
    loadNextResult: function loadNextResult() {
      var _this5 = this;

      if (this.loadingNext) return;
      this.loadingNext = true;

      if (this.$root.resourceSearchType == 'youtube') {
        axios.get("/search-youtube/".concat(this.searchQuery, "/").concat(this.searchTypeYT, "/").concat(this.$root.nextPageToken)).then(function (response) {
          if (response.status == 200) {
            var searchResult = response.data.result;
            _this5.$root.nextPageToken = response.data.nextPageToken;
            var finalResult = [];
            searchResult.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'youtube_video'
              };
              finalResult.push(resultWrapper);
            });
            _this5.$root.searchResult = _this5.$root.searchResult.concat(finalResult);
            _this5.loadingNext = false;
          }
        })["catch"](function (error) {
          _this5.loadingNext = false;
        });
      }

      if (this.$root.resourceSearchType == 'devto') {
        if (this.searchQuery == '') return;
        var lowerCased = this.searchQuery.toLowerCase();
        var searchStringArray = lowerCased.split(" ");
        this.devToPageCount++;
        axios.get("/search-devto/".concat(JSON.stringify(searchStringArray), "/").concat(this.devToPageCount, "/").concat(this.searchType)).then(function (response) {
          if (response.status == 200) {
            var searchResult = response.data.articles;
            var finalResult = [];
            searchResult.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'devto_article'
              };
              finalResult.push(resultWrapper);
            });
            _this5.$root.searchResult = _this5.$root.searchResult.concat(finalResult);
            _this5.loadingNext = false;
          }
        })["catch"](function (error) {
          _this5.loadingNext = false;
        });
      }
    },
    searchSite: function searchSite() {
      var _this6 = this;

      if (this.$root.loadingSearch) return;
      this.$root.searchResult = [];
      this.$root.loadingSearch = true;

      if (this.$root.resourceSearchType == 'youtube') {
        axios.get("/search-youtube/".concat(this.searchQuery, "/").concat(this.searchTypeYT)).then(function (response) {
          if (response.status == 200) {
            var searchResult = response.data.result;
            _this6.$root.nextPageToken = response.data.nextPageToken;
            var finalResult = [];
            searchResult.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'youtube_video'
              };
              finalResult.push(resultWrapper);
            });
            _this6.$root.searchResult = finalResult;
            _this6.$root.loadingSearch = false;
          }
        })["catch"](function (error) {
          _this6.$root.loadingSearch = false;
        });
      }

      if (this.$root.resourceSearchType == 'devto') {
        if (this.searchQuery == '') return;
        var lowerCased = this.searchQuery.toLowerCase();
        var searchStringArray = lowerCased.split(" ");
        this.devToPageCount = 1;
        axios.get("/search-devto/".concat(JSON.stringify(searchStringArray), "/1/").concat(this.searchType)).then(function (response) {
          if (response.status == 200) {
            var searchResult = response.data.articles; // this.nextPageToken =  response.data.nextPageToken

            var finalResult = [];
            searchResult.forEach(function (data) {
              var resultWrapper = {
                content: data,
                type: 'devto_article'
              };
              finalResult.push(resultWrapper);
            });
            _this6.$root.searchResult = finalResult;
            _this6.$root.loadingSearch = false;
          }
        })["catch"](function (error) {
          _this6.$root.loadingSearch = false;
        });
      }

      if (this.$root.resourceSearchType == 'udemy') {
        if (this.$root.resourceSearchType == 'udemy') {
          axios.get("/search-udemy/".concat(this.searchQuery)).then(function (response) {
            if (response.status == 200) {
              console.log(response.data);
              _this6.$root.loadingSearch = false;
            }
          })["catch"](function (error) {
            _this6.$root.loadingSearch = false;
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
            staticClass:
              "col-12 px-1 py-2  fixed-top d-flex flex-row flex-wrap",
            staticStyle: {
              position: "sticky",
              background: "white",
              top: "0%",
              "align-items": "center"
            }
          },
          [
            _c("div", { staticClass: "col-12 py-0 px-0 d-flex flex-row" }, [
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
                  staticClass: " py-0 text-center d-flex flex-row",
                  staticStyle: { width: "100%", "align-items": "center" }
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
                            border: "1px solid grey",
                            "border-radius": "3px",
                            "font-family": "BodyFont"
                          },
                          attrs: {
                            placeholder: _vm.placeholder,
                            type: "search",
                            autofocus: ""
                          },
                          domProps: { value: _vm.searchQuery },
                          on: {
                            keyup: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.searchSite()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.searchQuery = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-3 px-0 py-0 ml-1" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.searchTypeYT,
                                  expression: "searchTypeYT"
                                }
                              ],
                              staticClass: "py-2 px-2",
                              staticStyle: {
                                border: "1px solid grey",
                                width: "100%",
                                "border-radius": "2px",
                                "font-family": "BodyFont",
                                "font-size": "13px",
                                background: "white"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.searchTypeYT = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.searchFilterYT, function(option, index) {
                              return _c(
                                "option",
                                {
                                  key: index + "typeYT",
                                  domProps: { value: option.value }
                                },
                                [_vm._v(_vm._s(option.name))]
                              )
                            }),
                            0
                          )
                        ])
                      ]
                    : [
                        _c(
                          "div",
                          {
                            staticClass: " px-0 py-0",
                            staticStyle: { height: "43px", width: "100%" }
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "mb-0",
                              staticStyle: { "font-size": "13px" },
                              attrs: {
                                placeholder: "Search DevTo",
                                chips: "",
                                outlined: "",
                                dense: "",
                                color: "#3C87CD"
                              },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.searchSite()
                                }
                              },
                              model: {
                                value: _vm.searchQuery,
                                callback: function($$v) {
                                  _vm.searchQuery = $$v
                                },
                                expression: "searchQuery"
                              }
                            }),
                            _vm._v(" "),
                            _vm.showSuggestion
                              ? [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass:
                                        "d-flex flex-column px-1 py-2",
                                      staticStyle: {
                                        position: "absolute",
                                        "border-radius": "0px",
                                        top: "95%",
                                        width: "100%",
                                        "max-height": "250px",
                                        "z-index": "99999999999999",
                                        left: "0px",
                                        height: "auto",
                                        "overflow-y": "auto"
                                      }
                                    },
                                    _vm._l(_vm.devToTags, function(tag) {
                                      return _c(
                                        "v-card",
                                        {
                                          key: tag.id,
                                          staticClass:
                                            "px-1 py-2 d-flex flex-row",
                                          staticStyle: {
                                            "border-bottom":
                                              "1px solid #c5c5c5",
                                            "align-items": "center"
                                          },
                                          attrs: { tile: "", flat: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.selectTag(tag)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
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
                                                  staticClass: "mr-1",
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-family": "BodyFont"
                                                  }
                                                },
                                                [_vm._v(_vm._s(tag.name))]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    }),
                                    1
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-3 px-0 py-0 ml-1" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.searchType,
                                  expression: "searchType"
                                }
                              ],
                              staticClass: "py-2 px-2",
                              staticStyle: {
                                border: "1px solid grey",
                                width: "100%",
                                "border-radius": "2px",
                                "font-family": "BodyFont",
                                "font-size": "13px",
                                background: "white"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.searchType = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.searchFilter, function(option, index) {
                              return _c(
                                "option",
                                {
                                  key: index + "type",
                                  domProps: { value: option.value }
                                },
                                [_vm._v(_vm._s(option.name))]
                              )
                            }),
                            0
                          )
                        ])
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
                      attrs: {
                        icon: "",
                        loading: _vm.that.$root.loadingSearch
                      },
                      on: { click: _vm.searchSite }
                    },
                    [_c("v-icon", [_vm._v("las la-search")])],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12  py-1 d-flex flex-row px-0 mt-1",
                staticStyle: {
                  "align-items": "center",
                  "justify-content": "center"
                }
              },
              [
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
                      'Add to "' +
                        _vm._s(_vm.that.$root.selectedResource.name) +
                        '" '
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "ml-2",
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
                      disabled: _vm.that.$root.selectedItems.length == 0,
                      color: "#3C87CD"
                    },
                    on: {
                      click: function($event) {
                        return _vm.AddItemsToResources()
                      }
                    }
                  },
                  [_vm._v("Add ")]
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
            staticClass: "col-12 py-0 my-0 px-1 px-md-2",
            staticStyle: {
              background: "transparent",
              "font-family": "BodyFont"
            }
          },
          [
            _c("resource", {
              attrs: {
                show_add_icon: true,
                contents: _vm.that.$root.searchResult
              }
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
          1
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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