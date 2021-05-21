(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Resource"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this,
      options: false,
      selected_id: ''
    };
  },
  props: ['show_add_icon', 'contents', 'fromStandalone'],
  mounted: function mounted() {
    this.$root.resourceComponent = this;
  },
  methods: {
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
    shortenContent: function shortenContent(content, limit) {
      if (content.length > limit) {
        var shortcontent = content.slice(0, limit);
        return shortcontent + '...';
      } else {
        return content;
      }
    },
    showOptions: function showOptions(content) {
      console.log(content.ty);
      this.options = true;
    },
    handleResource: function handleResource(content, index) {
      this.$root.nextResourceId = index + 1;
      this.$root.prevResourceId = index - 1;

      if (this.$root.nextResourceId >= this.contents.length) {
        this.$root.nextResourceId = null;
      } else {
        this.$root.nextResourceData = this.contents[this.$root.nextResourceId];
      }

      if (this.$root.prevResourceId >= 0) {
        this.$root.prevResourceData = this.contents[this.$root.prevResourceId];
      }

      if (content.type == 'youtube_video') {
        this.$root.playingYoutubeVideo = content;
        this.$root.playingYoutubeVideoId = content.content.id;

        if (this.fromStandalone) {
          this.$root.showYoutubePlayerTemp = true;
        } else {
          if (this.$screen.lg) {
            this.$root.showYoutubePlayer = true;
          } else {
            this.$root.showYoutubePlayerSm = true;
          }
        }
      }

      if (content.type == 'devto_article') {
        var url = content.content.canonical_url;
        window.open(url, '_blank');
      }

      if (content.type == 'shared_link') {
        var _url = content.content.link;
        window.open(_url, '_blank');
      }
    },
    checkIfSelected: function checkIfSelected(content) {
      var thisContent = this.$root.resourcesSearchComponent.selectedItems.filter(function (eachContent) {
        return content.content.id == eachContent.id;
      });

      if (thisContent.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    addToSelected: function addToSelected(content) {
      if (this.checkIfSelected(content)) {
        var remainingContent = this.$root.resourcesSearchComponent.selectedItems.filter(function (eachContent) {
          return content.content.id != eachContent.id;
        });
        this.$root.resourcesSearchComponent.selectedItems = remainingContent;
      } else {
        this.$root.resourcesSearchComponent.selectedItems.push(content.content);
      }
    },
    convertDigit: function convertDigit(num, digits) {
      var si = [{
        value: 1,
        symbol: ""
      }, {
        value: 1E3,
        symbol: "k"
      }, {
        value: 1E6,
        symbol: "M"
      }, {
        value: 1E9,
        symbol: "G"
      }, {
        value: 1E12,
        symbol: "T"
      }, {
        value: 1E15,
        symbol: "P"
      }, {
        value: 1E18,
        symbol: "E"
      }];
      var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var i;

      for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
          break;
        }
      }

      return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hoverEffect[data-v-34e6a4a6]:hover{\r\n   background-color: whitesmoke;\r\n   cursor: pointer;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      this.$root.forcereloadResource
        ? [
            _c(
              "div",
              { staticClass: "col-12  text-center" },
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
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.contents, function(content, index) {
        return _c(
          "div",
          { key: index, staticClass: "col-12 py-1 px-0 hoverEffect" },
          [
            content.type == "youtube_video"
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 pb-0 pt-0 px-0 d-flex flex-row",
                      style:
                        content.content.id ==
                        _vm.that.$root.playingYoutubeVideoId
                          ? " align-items:center;background:whitesmoke;"
                          : "align-items:center;"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-5 py-1 px-1",
                          staticStyle: { height: "110px" },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              style:
                                "position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(" +
                                content.content.snippet.thumbnails.default.url +
                                ");background-repeat: no-repeat; background-size:100%;"
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
                                        color: "#FF0000"
                                      }
                                    },
                                    [_vm._v("mdi mdi-youtube")]
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
                          staticClass: "col-6 d-flex flex-column pt-1 my-auto",
                          staticStyle: {
                            "justify-content": "center",
                            width: "100%"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "pt-3 mb-1",
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px",
                                overflow: "hidden",
                                width: "100%",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _vm._v(
                                "\n             " +
                                  _vm._s(
                                    _vm.shortenContent(
                                      content.content.snippet.title,
                                      50
                                    )
                                  ) +
                                  "\n           "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mb-1",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "12px",
                                "white-space": "nowrap",
                                color: "grey",
                                overflow: "hidden",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(content.content.snippet.channelTitle) +
                                  "\n           "
                              )
                            ]
                          ),
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
                                "\n             " +
                                  _vm._s(
                                    _vm.convertDigit(
                                      content.content.statistics.viewCount,
                                      1
                                    )
                                  ) +
                                  " views\n           "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _vm.show_add_icon
                            ? [
                                _c("v-checkbox", {
                                  attrs: {
                                    color: "#3C87CD",
                                    dense: "",
                                    small: ""
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.addToSelected(content)
                                    }
                                  }
                                })
                              ]
                            : [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { color: "red" },
                                    on: { click: _vm.showOptions }
                                  },
                                  [_vm._v("las la-ellipsis-v")]
                                ),
                                _vm._v(" "),
                                _vm.options
                                  ? _c(
                                      "v-card",
                                      { staticStyle: { background: "white" } },
                                      [_c("span", [_vm._v("delete")])]
                                    )
                                  : _vm._e()
                              ]
                        ],
                        2
                      )
                    ]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            content.type == "udemy_video"
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 pb-0 pt-0 px-0 d-flex flex-row",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-5 py-1 px-1",
                          staticStyle: { height: "92px" },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                position: "absolute",
                                width: "100%",
                                border: "1px solid white",
                                "border-radius": "8px",
                                height: "100%",
                                "background-color": "#c5c5c5",
                                "background-image": "url(imgs/7.jpg)",
                                "background-repeat": "no-repeat",
                                "background-size": "cover"
                              }
                            },
                            [
                              _vm.show_add_icon
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "px-1 py-1",
                                      staticStyle: {
                                        background: "rgba(0, 0, 0,0.6)",
                                        cursor: "pointer",
                                        position: "absolute",
                                        top: "0px",
                                        right: "0px",
                                        border: "1px solid black",
                                        "border-top-right-radius": "8px"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.addToSelected(content)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: {
                                            "font-size": "18px",
                                            color: "white"
                                          }
                                        },
                                        [_vm._v("las la-plus")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._m(0, true)
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-6 d-flex flex-column pt-1 my-auto",
                          staticStyle: {
                            "justify-content": "center",
                            width: "100%"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "pt-3 mb-1",
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px",
                                overflow: "hidden",
                                width: "100%",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _vm._v(
                                "\n             Python for Data science and Machine\n           "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mb-1",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "12px",
                                "white-space": "nowrap",
                                color: "grey",
                                overflow: "hidden",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Jose Portilla\n           "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "13px",
                                color: "black",
                                overflow: "hidden",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "mr-2",
                                  staticStyle: { "font-family": "MediumFont" }
                                },
                                [_vm._v("$11.99")]
                              ),
                              _vm._v(" "),
                              _c("strike", { staticStyle: { color: "grey" } }, [
                                _vm._v("$94.99")
                              ])
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _vm.show_add_icon
                            ? [
                                _c("v-checkbox", {
                                  attrs: {
                                    color: "#3C87CD",
                                    dense: "",
                                    small: ""
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.addToSelected(content)
                                    }
                                  }
                                })
                              ]
                            : [_c("v-icon", [_vm._v("las la-ellipsis-v")])]
                        ],
                        2
                      )
                    ]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            content.type == "devto_article"
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "col-12  py-1 px-0 d-flex flex-row",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "col-5 py-1 px-1",
                          staticStyle: { height: "110px" },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              style:
                                "position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(" +
                                content.content.cover_image +
                                ");background-repeat: no-repeat; background-size:cover;"
                            },
                            [_vm._m(1, true)]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-6 d-flex flex-column pt-1 my-auto",
                          staticStyle: {
                            "justify-content": "center",
                            width: "100%"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "pt-3 mb-1",
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "13px",
                                overflow: "hidden",
                                width: "100%",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _vm._v(
                                "\n             " +
                                  _vm._s(content.content.title) +
                                  "\n           "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mb-1",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "12px",
                                "white-space": "nowrap",
                                color: "grey",
                                overflow: "hidden",
                                "text-overflow": "ellipsis"
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(content.content.user.username) +
                                  "\n           "
                              )
                            ]
                          ),
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
                                "\n             " +
                                  _vm._s(content.content.reading_time_minutes) +
                                  " min read\n           "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _vm.show_add_icon
                            ? [
                                _c("v-checkbox", {
                                  attrs: {
                                    color: "#3C87CD",
                                    dense: "",
                                    small: ""
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.addToSelected(content)
                                    }
                                  }
                                })
                              ]
                            : [_c("v-icon", [_vm._v("las la-ellipsis-v")])]
                        ],
                        2
                      )
                    ]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            content.type == "shared_link"
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
                          staticStyle: { height: "110px" },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              style:
                                "position:absolute;width:100%; border:1px solid white; border-radius:8px; height:100%; background-color:#c5c5c5;background-image:url(" +
                                content.content.image +
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
                          staticClass: "col-6 d-flex flex-column pt-1 my-auto",
                          staticStyle: {
                            "justify-content": "center",
                            width: "100%"
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleResource(content, index)
                            }
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
                            domProps: {
                              innerHTML: _vm._s(content.content.title)
                            }
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
                              innerHTML: _vm._s(content.content.description)
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
                                  _vm._s(_vm.processURL(content.content.base)) +
                                  "\n           "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _vm.show_add_icon
                            ? [
                                _c("v-checkbox", {
                                  attrs: {
                                    color: "#3C87CD",
                                    dense: "",
                                    small: ""
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.addToSelected(content)
                                    }
                                  }
                                })
                              ]
                            : [_c("v-icon", [_vm._v("las la-ellipsis-v")])]
                        ],
                        2
                      )
                    ]
                  )
                ]
              : _vm._e()
          ],
          2
        )
      })
    ],
    2
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
      [_c("img", { attrs: { src: "/imgs/udemy_logo.png", height: "25px" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
      [_c("img", { attrs: { src: "/imgs/devto.png", height: "35px" } })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/Resource.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& */ "./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&");
/* harmony import */ var _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resource.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34e6a4a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Resource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=style&index=0&id=34e6a4a6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_34e6a4a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=template&id=34e6a4a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Resource.vue?vue&type=template&id=34e6a4a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_34e6a4a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);