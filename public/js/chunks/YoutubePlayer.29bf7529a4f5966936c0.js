(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["YoutubePlayer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
var Resource = function Resource() {
  return Promise.all(/*! import() | Resource */[__webpack_require__.e("vendors~Board~Hub~LiveSession~ProjectView~Resource~ResourceView"), __webpack_require__.e("vendors~Resource~ResourceUrl"), __webpack_require__.e("Resource")]).then(__webpack_require__.bind(null, /*! ./Resource.vue */ "./resources/js/components/chats/Resource.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['screenType', 'playerHeight', 'video'],
  data: function data() {
    return {
      videoScr: '',
      player: undefined,
      that: this,
      showDescription: false,
      loadingVideo: false,
      showYTPlayer: true
    };
  },
  components: {
    Resource: Resource
  },
  mounted: function mounted() {
    this.$root.YoutubeComponent = this;
    this.loadVideoData(true);
  },
  computed: {
    playerState: function playerState() {}
  },
  watch: {
    playerState: function playerState(newValue, oldValue) {}
  },
  methods: {
    loadVideoData: function loadVideoData() {
      var _this = this;

      var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var videoId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.loadingVideo = true;
      axios.post('/get-video-data', {
        videoId: this.$root.playingYoutubeVideo.content.id,
        resourceContentId: this.$root.playingYoutubeVideo.id,
        video_channel_id: this.$root.playingYoutubeVideo.content.snippet.channelId
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.playingYoutubeVideo.content = response.data.video_data;
          _this.$root.playingVideoSubState = response.data.subscription_state;
          _this.$root.playingVideoRating = response.data.video_ratings;
          _this.$root.playVideoAuthState = response.data.userIsAuth;

          if (initial) {
            _this.setVideoData();
          } else {
            _this.player.loadVideoById(videoId);
          }

          _this.loadingVideo = false;
        }
      })["catch"](function (error) {
        _this.loadingVideo = false;
      });
    },
    subscribeToChannel: function subscribeToChannel() {
      var _this2 = this;

      this.$root.checkIfUserIsLoggedIn();

      if (this.$root.youtube_connected) {
        this.$root.playingVideoSubState = 'subscribed';
        axios.post('/subscribe-toChannel', {
          channelId: this.$root.playingYoutubeVideo.content.snippet.channelId
        }).then(function (response) {
          if (response.status == 200) {}
        })["catch"](function (error) {
          _this2.loadingVideo = false;
        });
      } else {
        this.$root.showYoutubePlayer = false;
        this.$root.showYoutubePlayerSm = false;
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/youtube_auth'
        });
      }
    },
    rateVideo: function rateVideo(type) {
      this.$root.checkIfUserIsLoggedIn();

      if (this.$root.youtube_connected) {
        if (this.$root.playingVideoRating == 'like' || this.$root.playingVideoRating == 'dislike') {
          type = 'none';
        }

        this.$root.playingVideoRating = type;
        axios.post('/rate-video', {
          videoId: this.$root.playingYoutubeVideo.content.id,
          type: type
        }).then(function (response) {
          if (response.status == 200) {}
        })["catch"](function (error) {});
      } else {
        this.$root.showYoutubePlayer = false;
        this.$root.showYoutubePlayerSm = false;
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/youtube_auth'
        });
      }
    },
    preventClose: function preventClose() {},
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
    },
    setVideoData: function setVideoData() {
      var _this3 = this;

      var tag = document.createElement('script');
      tag.id = 'iframe-youtube';
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var intevalVideoSetting = null;
      intevalVideoSetting = setInterval(function () {
        if (_this3.player == undefined) {
          _this3.player = new YT.Player('YTplayer' + _this3.screenType, {
            events: {
              'onReady': _this3.onPlayerReady,
              'onStateChange': _this3.onPlayerStateChange
            }
          });
        } else {
          clearInterval(intevalVideoSetting);
        }
      }, 3000);
    },
    playerAction: function playerAction(type) {
      var data = null;
      var playingIndex = 0;

      if (type == 'next') {
        data = this.$root.nextResourceData;
        playingIndex = this.$root.nextResourceId;
      } else {
        data = this.$root.prevResourceData;
        playingIndex = this.$root.prevResourceId;
      }

      this.$root.playingYoutubeVideo = data;
      this.$root.playingYoutubeVideoId = data.content.id;

      if (data.type == 'youtube_video') {
        if (this.player == undefined) {
          this.player = new YT.Player('YTplayer' + this.screenType, {
            events: {
              'onReady': this.onPlayerReady,
              'onStateChange': this.onPlayerStateChange
            }
          });
        } else {
          this.loadVideoData(false, data.content.id);
        }

        this.showYTPlayer = true; // set new next and prev data

        this.$root.resourceComponent.handleResource(data, playingIndex);
      } else {
        this.showYTPlayer = false;
      }
    },
    onPlayerReady: function onPlayerReady(event) {
      this.player.playVideo();
    },
    onPlayerStateChange: function onPlayerStateChange(event) {
      if (event.data == -1) {
        this.player.playVideo();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    {
      staticStyle: { background: "white" },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.preventClose()
        }
      }
    },
    [
      _c(
        "v-btn",
        {
          staticClass: "d-lg-inline-flex d-none",
          staticStyle: {
            position: "absolute",
            background: "#3C87CD",
            "margin-top": "-24px",
            left: "2%",
            "z-index": "999999999999"
          },
          attrs: { icon: "", color: "#ffffff" },
          on: {
            click: function($event) {
              _vm.that.$root.showYoutubePlayer = false
              _vm.that.$root.showYoutubePlayerTemp = false
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "d-block-flex d-lg-none",
          staticStyle: {
            position: "absolute",
            background: "#3C87CD",
            "margin-top": "4px",
            left: "4px",
            "z-index": "999999999999"
          },
          attrs: { icon: "", color: "#ffffff" },
          on: {
            click: function($event) {
              _vm.that.$root.showYoutubePlayerSm = false
              _vm.that.$root.showYoutubePlayerTemp = false
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
        1
      ),
      _vm._v(" "),
      _vm.showYTPlayer
        ? [
            _vm.loadingVideo
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-row",
                      style:
                        "height:" +
                        _vm.playerHeight +
                        "px;  background:white; align-items:center;justify-content:center;"
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
                  _c("iframe", {
                    staticStyle: { "z-index": "99999999999999999" },
                    attrs: {
                      id: "YTplayer" + _vm.screenType,
                      allowfullscreen: "allowfullscreen",
                      mozallowfullscreen: "mozallowfullscreen",
                      msallowfullscreen: "msallowfullscreen",
                      oallowfullscreen: "oallowfullscreen",
                      webkitallowfullscreen: "webkitallowfullscreen",
                      type: "text/html",
                      width: "100%",
                      height: _vm.playerHeight,
                      src:
                        "https://www.youtube.com/embed/" +
                        _vm.that.$root.playingYoutubeVideo.content.id +
                        "?enablejsapi=1&rel=0",
                      frameborder: "0"
                    },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.preventClose()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-12 px-2 py-1 d-flex flex-column",
                      staticStyle: { background: "white" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-row",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "MediumFont",
                                "font-size": "14px",
                                "text-align": "left"
                              }
                            },
                            [
                              _vm._v(
                                "\n               " +
                                  _vm._s(
                                    _vm.that.$root.playingYoutubeVideo.content
                                      .snippet.title
                                  ) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ml-auto" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { small: "", icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.showDescription
                                        ? (_vm.showDescription = false)
                                        : (_vm.showDescription = true)
                                    }
                                  }
                                },
                                [
                                  !_vm.showDescription
                                    ? _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "20px" }
                                        },
                                        [_vm._v("mdi mdi-menu-down")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.showDescription
                                    ? _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "20px" }
                                        },
                                        [_vm._v("mdi mdi-menu-up")]
                                      )
                                    : _vm._e()
                                ],
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
                          staticClass: "col-12 text-left py-0 px-0",
                          staticStyle: {
                            "font-family": "BodyFont",
                            "font-size": "12px",
                            "white-space": "nowrap",
                            color: "grey"
                          }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.convertDigit(
                                  _vm.that.$root.playingYoutubeVideo.content
                                    .statistics.viewCount,
                                  1
                                )
                              ) +
                              " views\n           "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: " d-flex flex-row",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-6 py-0 px-0 text-left",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "12px",
                                "white-space": "nowrap",
                                color: "grey"
                              }
                            },
                            [
                              _vm._v(
                                "\n               " +
                                  _vm._s(
                                    _vm.that.$root.playingYoutubeVideo.content
                                      .snippet.channelTitle
                                  ) +
                                  "\n           "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-6 py-0 text-right px-0" },
                            [
                              _vm.that.$root.playingVideoSubState ==
                              "subscribed"
                                ? [
                                    _c(
                                      "v-btn",
                                      {
                                        staticStyle: {
                                          "font-family": "BodyFont",
                                          "font-size": "12px",
                                          "white-space": "nowrap",
                                          color: "grey"
                                        },
                                        attrs: { text: "", disabled: "" }
                                      },
                                      [_vm._v(" SUBSCRIBED")]
                                    )
                                  ]
                                : [
                                    _c(
                                      "v-btn",
                                      {
                                        staticStyle: {
                                          "font-family": "BodyFont",
                                          "font-size": "12px",
                                          "white-space": "nowrap",
                                          color: "red"
                                        },
                                        attrs: { text: "", color: "red" },
                                        on: {
                                          click: function($event) {
                                            return _vm.subscribeToChannel()
                                          }
                                        }
                                      },
                                      [_vm._v(" SUBSCRIBE")]
                                    )
                                  ]
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "d-flex flex-row",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "col-3 py-1 d-flex flex-column",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "11px",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        icon: "",
                                        disabled: this.$root.prevResourceId < 0
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.playerAction("prev")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "23px" }
                                        },
                                        [_vm._v("las la-arrow-left")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v("\n               Prev\n             ")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-3 d-flex py-1 flex-column",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "11px",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.rateVideo("like")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "23px" },
                                          attrs: {
                                            color:
                                              _vm.that.$root
                                                .playingVideoRating == "like"
                                                ? "#FF0000"
                                                : ""
                                          }
                                        },
                                        [_vm._v("las la-thumbs-up")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.convertDigit(
                                        _vm.that.$root.playingYoutubeVideo
                                          .content.statistics.likeCount,
                                        1
                                      )
                                    ) +
                                    " \n             "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-3  d-flex py-1 flex-column",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "11px",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.rateVideo("unlike")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "23px" },
                                          attrs: {
                                            color:
                                              _vm.that.$root
                                                .playingVideoRating == "dislike"
                                                ? "#FF0000"
                                                : ""
                                          }
                                        },
                                        [_vm._v("las la-thumbs-down")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.convertDigit(
                                        _vm.that.$root.playingYoutubeVideo
                                          .content.statistics.dislikeCount,
                                        1
                                      )
                                    ) +
                                    " \n             "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-3 py-1 d-flex flex-column",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "12px",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        icon: "",
                                        disabled:
                                          this.$root.nextResourceId == null
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.playerAction("next")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "23px" }
                                        },
                                        [_vm._v("las la-arrow-right")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v("\n               Next\n             ")
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.showDescription
                        ? _c(
                            "div",
                            {
                              staticClass: "col-12 text-left px-0",
                              staticStyle: {
                                "font-family": "BodyFont",
                                "font-size": "13px"
                              }
                            },
                            [
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.that.$root.playingYoutubeVideo.content
                                        .snippet.description,
                                    expression:
                                      "that.$root.playingYoutubeVideo.content.snippet.description"
                                  }
                                ],
                                staticClass: "col-12 mt-0 mt-md-1",
                                staticStyle: { height: "250px" },
                                attrs: { readonly: "" },
                                domProps: {
                                  value:
                                    _vm.that.$root.playingYoutubeVideo.content
                                      .snippet.description
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.that.$root.playingYoutubeVideo.content
                                        .snippet,
                                      "description",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
          ]
        : [
            _c(
              "div",
              {
                staticClass: "col-12 d-flex flex-row",
                staticStyle: {
                  "align-items": "center",
                  "justify-content": "center",
                  "border-bottom": "1px solid #c5c5c5"
                }
              },
              [
                _c("resource", {
                  attrs: {
                    show_add_icon: false,
                    contents: [_vm.that.$root.playingYoutubeVideo]
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex flex-row",
                staticStyle: { "align-items": "center" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-6 py-1 d-flex flex-column",
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "11px",
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              icon: "",
                              disabled: this.$root.prevResourceId < 0
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.playerAction("prev")
                              }
                            }
                          },
                          [
                            _c(
                              "v-icon",
                              { staticStyle: { "font-size": "23px" } },
                              [_vm._v("las la-arrow-left")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", [_vm._v("\n               Prev\n             ")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-6 py-1 d-flex flex-column",
                    staticStyle: {
                      "font-family": "BodyFont",
                      "font-size": "12px",
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              icon: "",
                              disabled: this.$root.nextResourceId == null
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.playerAction("next")
                              }
                            }
                          },
                          [
                            _c(
                              "v-icon",
                              { staticStyle: { "font-size": "23px" } },
                              [_vm._v("las la-arrow-right")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", [_vm._v("\n               Next\n             ")])
                  ]
                )
              ]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/YoutubePlayer.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/chats/YoutubePlayer.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& */ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&");
/* harmony import */ var _YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubePlayer.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12aa6ad5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/YoutubePlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./YoutubePlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);