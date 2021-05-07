(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-screen */ "./node_modules/vue-screen/dist/vue-screen.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.use(vue_screen__WEBPACK_IMPORTED_MODULE_0__["default"], 'bootstrap');

var Resource = function Resource() {
  return Promise.all(/*! import() | Resource */[__webpack_require__.e("vendors~Board~Hub~LiveSession~ProjectView~Resource~ResourceView"), __webpack_require__.e("vendors~Resource~ResourceUrl"), __webpack_require__.e("Resource")]).then(__webpack_require__.bind(null, /*! ./Resource.vue */ "./resources/js/components/chats/Resource.vue"));
};

var YoutubePlayer = function YoutubePlayer() {
  return __webpack_require__.e(/*! import() | YoutubePlayer */ "YoutubePlayer").then(__webpack_require__.bind(null, /*! ./YoutubePlayer.vue */ "./resources/js/components/chats/YoutubePlayer.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      spaceData: [],
      loadingBtn: false,
      loadingContent: false,
      loadingResourceContent: false,
      resources: [],
      resourcesContent: [],
      loadingResources: false,
      titleContent: '',
      that: this,
      mainContent: '',
      loadingNextPage: false,
      showYoutubePlayerTemp: false,
      selectedResource: [],
      nextPageToken: ''
    };
  },
  components: {
    Resource: Resource,
    YoutubePlayer: YoutubePlayer
  },
  mounted: function mounted() {
    if (this.$root.isLogged) {
      this.$router.push({
        path: '/channels/' + this.$route.params.spaceId + '/content'
      });
      this.$root.chatComponent.chatIsOpen = true;
      this.$root.chatComponent.openChat(this.$route.params.spaceId, false);
    } else {
      this.fetchSpaceInfo();
    }
  },
  methods: {
    shareResource: function shareResource() {
      this.$root.shareLink = 'https://link.citonhub.com/resources/' + this.$route.params.spaceId;
      this.$root.shareText = 'Check out ' + this.spaceData.name + ' on CitonHub';
      this.$root.infoText = 'Share resources with others';
      this.$root.alertComponent = this.$root.chatComponent;
      this.$root.showInvitation = true;
    },
    goToChannel: function goToChannel() {
      this.$router.push({
        path: '/channels/' + this.$route.params.spaceId + '/content'
      });
      this.$root.checkIfUserIsLoggedIn();
    },
    showContent: function showContent(content) {
      this.$router.push({
        path: '/channels/resources/content/' + this.$route.params.spaceId
      });
      this.titleContent = content.name;
      this.selectedResource = content;
      this.fetchResourceContent();
    },
    goBack: function goBack() {
      this.$router.push({
        path: '/channels/resources/view/' + this.$route.params.spaceId
      });
    },
    fetchResourceContent: function fetchResourceContent() {
      var _this = this;

      if (this.selectedResource.youtube_playlist_id) {
        this.loadingResourceContent = true;
        axios.get('/fetch-resource-content/' + this.selectedResource.resource_id).then(function (response) {
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
            _this.resourcesContent = finalResult;
            _this.nextPageToken = response.data.nextPageToken;
            _this.loadingResourceContent = false;
          }
        })["catch"](function (error) {
          _this.loadingResourceContent = false;

          _this.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }

      if (this.selectedResource.devto_username) {
        this.loadingResourceContent = true;
        axios.get('/fetch-resource-content/' + this.selectedResource.resource_id).then(function (response) {
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
            _this.resourcesContent = finalResult;
            _this.nextPageToken = 1;
            _this.loadingResourceContent = false;
          }
        })["catch"](function (error) {
          _this.loadingResourceContent = false;

          _this.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }

      if (this.selectedResource.youtube_playlist_id == null && this.selectedResource.devto_username == null) {
        this.loadingResourceContent = true;
        axios.get('/fetch-resource-content/' + this.selectedResource.resource_id).then(function (response) {
          if (response.status == 200) {
            _this.resourcesContent = response.data.contents;
            _this.loadingResourceContent = false;
          }
        })["catch"](function (error) {
          _this.loadingResourceContent = false;

          _this.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }
    },
    fetchSpaceInfo: function fetchSpaceInfo() {
      var _this2 = this;

      this.loadingContent = true;
      axios.get('/fetch-space-info-' + this.$route.params.spaceId).then(function (response) {
        if (response.status == 200) {
          _this2.spaceData = response.data.space;
          _this2.loadingContent = false;
          _this2.$root.showResourceView = true;
          _this2.mainContent = _this2.spaceData.name + ' Channel Resources';

          _this2.fetchResources();
        }
      })["catch"](function (error) {
        _this2.$root.chatComponent.showAlert('Oops!', 'Something went wrong, please try again', 'error');

        _this2.loadingContent = false;
      });
    },
    nextPagehandler: function nextPagehandler(shown) {
      var _this3 = this;

      if (this.nextPageToken && shown) {
        this.loadingNextPage = true;
        axios.get('/fetch-resource-content/' + this.selectedResource.resource_id + '/' + this.nextPageToken).then(function (response) {
          if (response.status == 200) {
            var results = [];

            if (_this3.selectedResource.devto_username) {
              _this3.nextPageToken++;
              results = response.data.articles;
              var finalResult = [];
              results.forEach(function (data) {
                var resultWrapper = {
                  content: data,
                  type: 'devto_article'
                };
                finalResult.push(resultWrapper);
              });
              _this3.resourcesContent = finalResult;
            } else {
              _this3.nextPageToken = response.data.nextPageToken;
              results = response.data.result;
              var _finalResult = [];
              results.forEach(function (data) {
                var resultWrapper = {
                  content: data,
                  type: 'youtube_video'
                };

                _finalResult.push(resultWrapper);
              });
              _this3.resourcesContent = _finalResult;
            }

            _this3.loadingNextPage = false;
          }
        })["catch"](function (error) {
          _this3.loadingNextPage = false;

          _this3.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }
    },
    fetchResources: function fetchResources() {
      var _this4 = this;

      this.loadingResources = true;
      axios.get("/fetch-resource/".concat(this.$route.params.spaceId, "/resource")).then(function (response) {
        if (response.status == 200) {
          var finalResult = response.data.resources;
          _this4.resources = finalResult;
          _this4.loadingResources = false;
        }
      })["catch"](function (error) {
        _this4.loadingResources = false;
      });
    },
    imageStyleSpace: function imageStyleSpace(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:2px solid #3C87CD; cursor:pointer;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:2px solid #3C87CD; cursor:pointer;";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceView.vue?vue&type=template&id=4038df72&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceView.vue?vue&type=template&id=4038df72&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    {
      class:
        _vm.$screen.lg || _vm.$screen.md
          ? "col-8 offset-md-2  col-lg-4 offset-lg-4 px-0 py-0   "
          : " col-12 py-0 px-0  ",
      style:
        _vm.$screen.lg || _vm.$screen.md
          ? "height:86%; position:absolute; top:7%; "
          : "height:100%;position:absolute;  left:0%;",
      attrs: { tile: "" }
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
                _vm.that.$root.showResourceViewContent
                  ? _c(
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
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "ml-1" }, [
                  _c("div", {
                    style: _vm.imageStyleSpace(40, _vm.spaceData, "channel")
                  })
                ]),
                _vm._v(" "),
                _vm.that.$root.showResourceView
                  ? _c(
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
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "font-family": "MediumFont"
                            }
                          },
                          [_vm._v(_vm._s(_vm.mainContent))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.that.$root.showResourceViewContent
                  ? _c(
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
                          {
                            staticStyle: {
                              "font-size": "14px",
                              "font-family": "MediumFont"
                            }
                          },
                          [_vm._v(_vm._s(_vm.titleContent))]
                        )
                      ]
                    )
                  : _vm._e(),
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
            _vm.that.$root.showResourceView
              ? [
                  _vm.loadingResources
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
                        _c(
                          "div",
                          { staticClass: "col-12" },
                          _vm._l(_vm.resources, function(resource, index) {
                            return _c(
                              "v-card",
                              {
                                key: index,
                                staticClass:
                                  "d-flex flex-row px-1  mb-2 col-12 ",
                                staticStyle: {
                                  background: "rgba(125, 179, 229, 0.4)",
                                  cursor: "pointer"
                                },
                                attrs: { ripple: false, flat: "" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "mr-2 ",
                                    on: {
                                      click: function($event) {
                                        return _vm.showContent(resource)
                                      }
                                    }
                                  },
                                  [
                                    resource.type == "resource"
                                      ? _c(
                                          "v-icon",
                                          {
                                            staticClass: "ml-2",
                                            attrs: { color: "#000000" }
                                          },
                                          [_vm._v("las la-folder")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    resource.type == "playlist"
                                      ? _c(
                                          "v-icon",
                                          {
                                            staticClass: "ml-2",
                                            attrs: { color: "#000000" }
                                          },
                                          [_vm._v("las la-play-circle")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "white-space": "nowrap",
                                      overflow: "hidden",
                                      "text-overflow": "ellipsis",
                                      width: "100%"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.showContent(resource)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          "font-family": "BodyFont",
                                          color: "black",
                                          "font-size": "13px"
                                        }
                                      },
                                      [_vm._v(_vm._s(resource.name))]
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          1
                        )
                      ]
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.that.$root.showResourceViewContent
              ? [
                  _vm.loadingResourceContent
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
                        _c("div", { staticClass: "col-12 px-2 px-md-2  " }, [
                          _c("h6", [_vm._v("Description")]),
                          _vm._v(" "),
                          _c("div", [
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
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-12 py-1 px-2 px-md-2 ",
                            staticStyle: {
                              background: "transparent",
                              "font-family": "BodyFont"
                            }
                          },
                          [
                            _vm.selectedResource.type == "playlist"
                              ? [_c("h6", [_vm._v("Videos")])]
                              : [_c("h6", [_vm._v("Links and articles")])],
                            _vm._v(" "),
                            _vm.resourcesContent.length > 0
                              ? [
                                  _c("resource", {
                                    attrs: {
                                      contents: _vm.resourcesContent,
                                      show_add_icon: false,
                                      fromStandalone: true
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-center col-lg-12" },
                                    [
                                      _vm.loadingNextPage
                                        ? _c("v-progress-circular", {
                                            attrs: {
                                              indeterminate: "",
                                              color: "#3C87CD"
                                            }
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
                                  _vm.selectedResource.type == "playlist"
                                    ? [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "mt-4 text-center",
                                            staticStyle: {
                                              "font-family": "BodyFont",
                                              "font-size": "13px",
                                              color: "grey"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "No video in this playlist yet."
                                            )
                                          ]
                                        )
                                      ]
                                    : [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "mt-4 text-center",
                                            staticStyle: {
                                              "font-family": "BodyFont",
                                              "font-size": "13px",
                                              color: "grey"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "No article or resource URL in this resource yet."
                                            )
                                          ]
                                        )
                                      ]
                                ],
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 my-5 py-5" })
                          ],
                          2
                        )
                      ]
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-12 py-3 text-center",
                staticStyle: {
                  position: "absolute",
                  bottom: "0%",
                  left: "0%",
                  background: "white"
                }
              },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-2 d-inline-block",
                    staticStyle: {
                      color: "white",
                      "text-transform": "none",
                      "font-family": "MediumFont",
                      "font-size": "13px"
                    },
                    attrs: { medium: "", color: "#3C87CD" },
                    on: {
                      click: function($event) {
                        return _vm.goToChannel()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                   Join Channel\n                 "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.that.$root.showYoutubePlayerTemp
              ? _c(
                  "div",
                  {
                    staticClass: "d-flex flex-row col-12 px-0 py-0 text-center",
                    staticStyle: {
                      background: "rgba(27, 27, 30, 0.32)",
                      left: "0",
                      position: "absolute",
                      height: "100%",
                      top: "0%",
                      "z-index": "999999999999"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: " col-12 px-0 py-0",
                        staticStyle: { height: "auto", left: "0%" }
                      },
                      [
                        _c("youtube-player", {
                          attrs: {
                            screenType: "small",
                            playerHeight: 220,
                            videoId: _vm.that.$root.playingVideoId
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ResourceView.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/chats/ResourceView.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceView_vue_vue_type_template_id_4038df72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceView.vue?vue&type=template&id=4038df72&scoped=true& */ "./resources/js/components/chats/ResourceView.vue?vue&type=template&id=4038df72&scoped=true&");
/* harmony import */ var _ResourceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceView.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ResourceView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceView_vue_vue_type_template_id_4038df72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceView_vue_vue_type_template_id_4038df72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4038df72",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ResourceView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ResourceView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ResourceView.vue?vue&type=template&id=4038df72&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceView.vue?vue&type=template&id=4038df72&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceView_vue_vue_type_template_id_4038df72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceView.vue?vue&type=template&id=4038df72&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceView.vue?vue&type=template&id=4038df72&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceView_vue_vue_type_template_id_4038df72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceView_vue_vue_type_template_id_4038df72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);