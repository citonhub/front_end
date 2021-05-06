(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playlist"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      playlists: [],
      loading: false,
      saving: false,
      drag: false,
      loadingPlaylist: false,
      showTextarea: false,
      newPlaylistDesc: '',
      loadingYoutubeConnect: false,
      lists: ['React Tutorial', 'Responsiveness', 'Tech Writing', 'MEVN Projects', 'Code Along', 'New Tech', 'New Tech', 'New Tech', 'New Tech'],
      toggleForm: false,
      removeModal: false,
      showPlaylist: true,
      has_youtube_resource: true,
      youtube_connected: false,
      playName: '',
      contentInWord: '',
      loadingAuthBtn: false
    };
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "playlist",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    compiledMarkdown: function compiledMarkdown() {
      var renderer = new marked.Renderer();

      renderer.link = function (href, title, text) {
        var link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' ");
      };

      marked.setOptions({
        renderer: renderer
      });
      return marked(this.newPlaylistDesc, {
        sanitize: true
      });
    }
  },
  mounted: function mounted() {
    this.$root.showYoutubePlayer = false;
    this.$root.showYoutubePlayerSm = false;
    this.$root.showAddButton = false;
    this.fetchPlaylists();
  },
  methods: {
    processContent: function processContent() {
      this.contentInWord = this.compiledMarkdown;
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = '';
    },
    showContent: function showContent(video) {
      this.$root.selectedResource = video;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_content/' + video.resource_id
      });
      this.$root.resourceContentType = 'videos';
    },
    connectYoutube: function connectYoutube() {
      var _this = this;

      this.loadingYoutubeConnect = true;
      axios.get('/connect-youtube/' + this.$root.selectedSpace.space_id).then(function (response) {
        if (response.status == 200) {
          var newResource = response.data.resource;

          _this.playlists.unshift(newResource);

          _this.has_youtube_resource = true;
          _this.loadingYoutubeConnect = false;

          _this.$root.LocalStore('channel_playlist_' + _this.$root.selectedSpace.space_id + _this.$root.username, _this.playlists);

          _this.saveResourceOrder(false);

          _this.$root.chatComponent.showAlert('Created!', 'Playlist has been created', 'success');
        }
      })["catch"](function (error) {
        _this.$root.chatComponent.showAlert('Oops!', 'Unable to create playlist,please try again', 'error');

        _this.loadingYoutubeConnect = false;
      });
    },
    deleteResource: function deleteResource(resource) {
      var _this2 = this;

      var remainingPlaylist = this.playlists.filter(function (eachresource) {
        return eachresource.resource_id != resource.resource_id;
      });
      this.playlists = remainingPlaylist;
      axios.post('/delete-resources', {
        resource_id: resource.resource_id
      }).then(function (response) {
        if (response.status == 200) {
          _this2.$root.chatComponent.showAlert('Deleted!', 'Playlist has been deleted', 'success');

          _this2.$root.LocalStore('channel_playlist_' + _this2.$root.selectedSpace.space_id + _this2.$root.username, _this2.playlists);

          _this2.saveResourceOrder(false);
        }
      })["catch"](function (error) {
        _this2.$root.chatComponent.showAlert('Oops!', 'Unable to delete playlist,please try again', 'error');
      });
    },
    checkYoutubeStatus: function checkYoutubeStatus() {
      var _this3 = this;

      axios.get('/get-youtube-status').then(function (response) {
        if (response.status == 200) {
          var status = response.data.youtube_connected;

          if (status) {
            _this3.$root.youtube_connected = true;
            _this3.youtube_connected = true;

            _this3.connectYoutube();
          } else {
            setTimeout(function () {
              _this3.checkYoutubeStatus();
            }, 3000);
          }
        }
      })["catch"](function (error) {
        setTimeout(function () {
          _this3.checkYoutubeStatus();
        }, 2000);
      });
    },
    checkIfisOwner: function checkIfisOwner() {
      var _this4 = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this4.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].is_admin;
      } else {
        return false;
      }
    },
    handleYouTubeAuth: function handleYouTubeAuth() {
      this.loadingAuthBtn = true;
      var strWindowFeatures = "location=yes,height=770,width=720,scrollbars=yes,status=yes";
      var URL = 'https://api.citonhub.com/initiate-google-auth/' + this.$root.username;
      var win = window.open(URL, "_blank", strWindowFeatures);
      this.checkYoutubeStatus();
    },
    openModal: function openModal() {
      this.removeModal = true;
      this.toggleForm = true;
    },
    showDelete: function showDelete(resource) {
      this.playlists.map(function (eachresource) {
        eachresource["delete"] = false;
      });
      resource["delete"] = true;
    },
    handleOnDrop: function handleOnDrop() {
      this.drag = false;
      this.saveResourceOrder();
    },
    saveResourceOrder: function saveResourceOrder() {
      var _this5 = this;

      var showAlert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var ResourcesArray = [];
      this.playlists.forEach(function (resource) {
        ResourcesArray.push(resource.resource_id);
      });
      axios.post('/save-resources-order', {
        space_id: this.$root.selectedSpace.space_id,
        resources: ResourcesArray,
        type: 'playlist'
      }).then(function (response) {
        if (response.status == 200) {
          if (showAlert) {
            _this5.$root.chatComponent.showAlert('Saved!', 'Your changes have been saved', 'success');
          }

          _this5.$root.LocalStore('channel_playlist_' + _this5.$root.selectedSpace.space_id + _this5.$root.username, _this5.playlists);
        }
      })["catch"](function (error) {
        _this5.$root.chatComponent.showAlert('Oops!', 'Unable to save changes,please try again', 'error');
      });
    },
    closeModal: function closeModal() {
      this.removeModal = false;
    },
    openForm: function openForm() {
      this.toggleForm = false;
    },
    fetchPlaylists: function fetchPlaylists() {
      var _this6 = this;

      this.loadingPlaylist = true;
      var storedPlaylist = this.$root.getLocalStore('channel_playlist_' + this.$root.selectedSpace.space_id + this.$root.username);
      storedPlaylist.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this6.playlists = finalResult;
          _this6.loadingPlaylist = false;

          _this6.checkForNewPlaylist();
        } else {
          axios.get("/fetch-resource/".concat(_this6.$root.selectedSpace.space_id, "/playlist")).then(function (response) {
            if (response.status == 200) {
              _this6.$root.LocalStore('channel_playlist_' + _this6.$root.selectedSpace.space_id + _this6.$root.username, response.data.resources);

              var _finalResult = response.data.resources;
              _this6.has_youtube_resource = response.data.has_youtube_resource;
              _this6.youtube_connected = response.data.youtube_connected;
              _this6.$root.youtube_connected = response.data.youtube_connected;
              _this6.playlists = _finalResult;
              _this6.loadingPlaylist = false;
            }
          })["catch"](function (error) {
            _this6.loadingPlaylist = false;
          });
        }
      });
    },
    checkForNewPlaylist: function checkForNewPlaylist() {
      var _this7 = this;

      axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id, "/playlist")).then(function (response) {
        if (response.status == 200) {
          _this7.$root.LocalStore('channel_playlist_' + _this7.$root.selectedSpace.space_id + _this7.$root.username, response.data.resources);

          var finalResult = response.data.resources;
          _this7.playlists = finalResult;
          _this7.has_youtube_resource = response.data.has_youtube_resource;
          _this7.youtube_connected = response.data.youtube_connected;
          _this7.$root.youtube_connected = response.data.youtube_connected;
          _this7.$root.forcereloadResource = false;
        }
      })["catch"](function (error) {
        _this7.loadingPlaylist = false;
      });
    },
    createPlaylists: function createPlaylists() {
      var _this8 = this;

      if (this.playName == '' || this.contentInWord == '') return;
      this.saving = true;
      axios.post('/create-resource', {
        space_id: this.$root.selectedSpace.space_id,
        name: this.playName,
        type: 'playlist',
        info: this.contentInWord
      }).then(function (response) {
        if (response.status == 200) {
          _this8.playName = '';
          _this8.saving = false;

          var storedPlaylist = _this8.$root.getLocalStore('channel_playlist_' + _this8.$root.selectedSpace.space_id + _this8.$root.username);

          storedPlaylist.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);
              finalResult = finalResult.unshift(response.data.resource);

              _this8.$root.LocalStore('channel_playlist_' + _this8.$root.selectedSpace.space_id + _this8.$root.username, finalResult);
            } else {}
          });
          _this8.$root.channelHasResources = true;

          _this8.playlists.unshift(response.data.resource);

          _this8.saveResourceOrder(false);

          _this8.showContent(response.data.resource);
        }
      })["catch"](function (err) {
        console.log(err);
        _this8.saving = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.handle[data-v-d342941c]{\n  cursor: move;\n}\n.ghost[data-v-d342941c] {\n  opacity: 0.5;\n  background: white;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-0 px-0" },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-1 py-0 pt-0 fixed-top d-flex flex-row",
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
            { staticClass: " mr-1 col-2 pt-1 pb-0 px-1" },
            [
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.goBack } },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 py-0 mr-1 text-right" })
        ]
      ),
      _vm._v(" "),
      _vm.loadingPlaylist
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
            _vm.checkIfisOwner()
              ? [
                  _c(
                    "div",
                    { staticClass: "  px-2 px-md-2 py-1 " },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "d-flex flex-row px-1 py-1 col-12 ",
                          staticStyle: {
                            background: "rgba(125, 179, 229, 0.4)",
                            "align-items": "center"
                          },
                          attrs: { flat: "" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-column",
                              staticStyle: { width: "100%" }
                            },
                            [
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.playName,
                                      expression: "playName"
                                    }
                                  ],
                                  staticClass: "py-2 px-2",
                                  staticStyle: {
                                    border: "1px solid white",
                                    width: "100%",
                                    "border-radius": "2px",
                                    "font-family": "BodyFont",
                                    "font-size": "13px",
                                    background: "white"
                                  },
                                  attrs: { placeholder: "Create a playlist" },
                                  domProps: { value: _vm.playName },
                                  on: {
                                    focus: function($event) {
                                      _vm.showTextarea = true
                                    },
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
                                      return _vm.createPlaylists()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.playName = $event.target.value
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _vm.showTextarea || _vm.newPlaylistDesc != ""
                                ? _c("div", { staticClass: "mt-2" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newPlaylistDesc,
                                          expression: "newPlaylistDesc"
                                        }
                                      ],
                                      staticClass: "py-2 px-2",
                                      staticStyle: {
                                        border: "1px solid white",
                                        width: "100%",
                                        "border-radius": "2px",
                                        "font-family": "BodyFont",
                                        height: "95px",
                                        "font-size": "13px",
                                        background: "white"
                                      },
                                      attrs: {
                                        placeholder:
                                          "What is this playlist about? Markdown is supported."
                                      },
                                      domProps: { value: _vm.newPlaylistDesc },
                                      on: {
                                        input: [
                                          function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.newPlaylistDesc =
                                              $event.target.value
                                          },
                                          _vm.processContent
                                        ]
                                      }
                                    })
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ml-auto px-2" },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticStyle: { background: "white" },
                                  attrs: {
                                    icon: "",
                                    loading: _vm.saving,
                                    small: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.createPlaylists()
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { staticStyle: { "font-size": "24px" } },
                                    [
                                      _vm._v(
                                        "\n                   las la-arrow-right\n                 "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "draggable",
              _vm._b(
                {
                  staticClass:
                    "d-flex flex-row flex-wrap col-12 py-1 px-2 px-md-2 ",
                  attrs: { tag: "div", handle: ".handle" },
                  on: {
                    start: function($event) {
                      _vm.drag = true
                    },
                    end: _vm.handleOnDrop
                  },
                  model: {
                    value: _vm.playlists,
                    callback: function($$v) {
                      _vm.playlists = $$v
                    },
                    expression: "playlists"
                  }
                },
                "draggable",
                _vm.dragOptions,
                false
              ),
              _vm._l(_vm.playlists, function(playlist, index) {
                return _c(
                  "v-card",
                  {
                    key: index,
                    staticClass: "d-flex flex-row px-1   mb-2 col-12",
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
                            return _vm.showContent(playlist)
                          }
                        }
                      },
                      [
                        _c(
                          "v-icon",
                          { staticClass: "ml-2", attrs: { color: "#000000" } },
                          [_vm._v("las la-play-circle")]
                        )
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
                          width: "100%",
                          "text-overflow": "ellipsis"
                        },
                        on: {
                          click: function($event) {
                            return _vm.showContent(playlist)
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
                          [_vm._v(_vm._s(playlist.name))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.checkIfisOwner()
                      ? [
                          !playlist.delete
                            ? _c(
                                "div",
                                {
                                  staticClass: "ml-auto px-2 d-flex flex-row",
                                  staticStyle: {
                                    cursor: "pointer",
                                    "align-items": "center"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "handle" },
                                    [_c("v-icon", [_vm._v("las la-braille")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "ml-1",
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.showDelete(playlist)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { "x-small": "", icon: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "17px"
                                              }
                                            },
                                            [_vm._v("mdi mdi-close")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          playlist.delete
                            ? _c(
                                "div",
                                {
                                  staticClass: "ml-auto d-flex flex-row",
                                  staticStyle: { "align-items": "center" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "12px",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Delete?")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ml-1" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            "font-size": "10px",
                                            color: "white",
                                            "font-family": "BodyFont"
                                          },
                                          attrs: {
                                            "x-small": "",
                                            color: "error"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteResource(
                                                playlist
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Yes")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ml-1" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            "font-size": "10px",
                                            "font-family": "BodyFont"
                                          },
                                          attrs: { "x-small": "" },
                                          on: {
                                            click: function($event) {
                                              playlist.delete = false
                                            }
                                          }
                                        },
                                        [_vm._v("No")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      : _vm._e()
                  ],
                  2
                )
              }),
              1
            ),
            _vm._v(" "),
            _vm.checkIfisOwner() && !_vm.has_youtube_resource
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 py-1 text-center",
                      staticStyle: { "margin-top": "70px" }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm.youtube_connected
                        ? [
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
                                  loading: _vm.loadingYoutubeConnect,
                                  rounded: "",
                                  medium: "",
                                  outlined: "",
                                  color: "#FF0000"
                                },
                                on: { click: _vm.connectYoutube }
                              },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "px-2",
                                    staticStyle: {
                                      "font-size": "35px",
                                      color: "#FF0000"
                                    }
                                  },
                                  [_vm._v("mdi mdi-youtube")]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Import videos")])
                              ],
                              1
                            )
                          ]
                        : [
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
                                  loading: _vm.loadingAuthBtn,
                                  rounded: "",
                                  medium: "",
                                  outlined: "",
                                  color: "#FF0000"
                                },
                                on: { click: _vm.handleYouTubeAuth }
                              },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "px-2",
                                    staticStyle: {
                                      "font-size": "35px",
                                      color: "#FF0000"
                                    }
                                  },
                                  [_vm._v("mdi mdi-youtube")]
                                ),
                                _vm._v(" "),
                                _c("span", [_vm._v("Sign In")])
                              ],
                              1
                            )
                          ]
                    ],
                    2
                  )
                ]
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 pt-1 pb-0 text-center" }, [
      _c(
        "span",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("Playlists")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-center py-1" }, [
      _c(
        "div",
        {
          staticClass: " text-center",
          staticStyle: {
            "font-family": "BodyFont",
            "font-size": "13px",
            color: "grey"
          }
        },
        [_vm._v("Create playlist from your YouTube channel")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/playlists.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playlists_vue_vue_type_template_id_d342941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists.vue?vue&type=template&id=d342941c&scoped=true& */ "./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&scoped=true&");
/* harmony import */ var _playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlists.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _playlists_vue_vue_type_style_index_0_id_d342941c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css& */ "./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _playlists_vue_vue_type_template_id_d342941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _playlists_vue_vue_type_template_id_d342941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d342941c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/playlists.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./playlists.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_style_index_0_id_d342941c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=style&index=0&id=d342941c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_style_index_0_id_d342941c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_style_index_0_id_d342941c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_style_index_0_id_d342941c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_style_index_0_id_d342941c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_style_index_0_id_d342941c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./playlists.vue?vue&type=template&id=d342941c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);