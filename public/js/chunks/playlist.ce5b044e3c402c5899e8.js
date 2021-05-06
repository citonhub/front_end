(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playlist"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingPlaylist: false,
      lists: ['React Tutorial', 'Responsiveness', 'Tech Writing', 'MEVN Projects', 'Code Along', 'New Tech', 'New Tech', 'New Tech', 'New Tech'],
      toggleForm: false,
      removeModal: false,
      showPlaylist: true,
      playName: ''
    };
  },
  mounted: function mounted() {
    this.$root.showYoutubePlayer = false;
    this.$root.showYoutubePlayerSm = false;
    this.$root.showAddButton = false;
    this.fetchPlaylists();
  },
  methods: {
    showContent: function showContent(video) {
      this.$root.selectedResource = video;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_content/' + video.resource_id
      });
      this.$root.resourceContentType = 'videos';
    },
    handleYouTubeAuth: function handleYouTubeAuth() {
      var _this = this;

      var strWindowFeatures = "location=yes,height=770,width=720,scrollbars=yes,status=yes";
      var URL = 'https://api.beta.citonhub.com/initiate-google-auth/' + this.$root.username;
      var win = window.open(URL, "_blank", strWindowFeatures);
      setTimeout(function () {
        _this.showContent();
      }, 4000);
    },
    openModal: function openModal() {
      this.removeModal = true;
      this.toggleForm = true;
    },
    closeModal: function closeModal() {
      this.removeModal = false;
    },
    openForm: function openForm() {
      this.toggleForm = false;
    },
    fetchPlaylists: function fetchPlaylists() {
      var _this2 = this;

      this.loadingPlaylist = true;
      var storedPlaylist = this.$root.getLocalStore('channel_playlist_' + this.$root.selectedSpace.space_id + this.$root.username);
      storedPlaylist.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          finalResult = finalResult.resources;
          _this2.playlists = finalResult;
          _this2.loadingPlaylist = false;

          _this2.checkForNewPlaylist();
        } else {
          axios.get("/fetch-resource/".concat(_this2.$root.selectedSpace.space_id, "/playlist")).then(function (response) {
            if (response.status == 200) {
              _this2.$root.LocalStore('channel_playlist_' + _this2.$root.selectedSpace.space_id + _this2.$root.username, response.data);

              var _finalResult = response.data.resources;
              _this2.playlists = _finalResult;
              _this2.loadingPlaylist = false;
            }
          })["catch"](function (error) {
            _this2.loadingPlaylist = false;
          });
        }
      });
    },
    checkForNewPlaylist: function checkForNewPlaylist() {
      var _this3 = this;

      axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id, "/playlist")).then(function (response) {
        if (response.status == 200) {
          _this3.$root.LocalStore('channel_playlist_' + _this3.$root.selectedSpace.space_id + _this3.$root.username, response.data);

          var finalResult = response.data.resources;
          _this3.playlists = finalResult;
        }
      })["catch"](function (error) {
        _this3.loadingPlaylist = false;
      });
    },
    createPlaylists: function createPlaylists() {
      var _this4 = this;

      this.saving = true;
      axios.post('/create-resource', {
        space_id: this.$root.selectedSpace.space_id,
        name: this.playName,
        type: 'playlist'
      }).then(function (response) {
        if (response.status == 200) {
          _this4.playName = '';
          _this4.saving = false;

          var storedPlaylist = _this4.$root.getLocalStore('channel_playlist_' + _this4.$root.selectedSpace.space_id + _this4.$root.username);

          storedPlaylist.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);
              finalResult = finalResult.resources.unshift(response.data.resource);

              _this4.$root.LocalStore('channel_playlist_' + _this4.$root.selectedSpace.space_id + _this4.$root.username, finalResult);
            } else {}
          });

          _this4.playlists.unshift(response.data.resource);
        }
      })["catch"](function (err) {
        console.log(err);
        _this4.saving = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "  px-1 px-md-2 py-1 " },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "d-flex flex-row px-1 py-1 col-12",
                    staticStyle: {
                      background: "rgba(125, 179, 229, 0.4)",
                      "align-items": "center"
                    },
                    attrs: { flat: "" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mr-2 " },
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
                    _c("div", { staticStyle: { width: "100%" } }, [
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
                    _c(
                      "div",
                      { staticClass: "ml-auto px-2" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticStyle: { background: "white" },
                            attrs: { icon: "", loading: _vm.saving, small: "" },
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
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2 "
              },
              [
                _vm.showPlaylist
                  ? _vm._l(_vm.playlists, function(playlist, index) {
                      return _c(
                        "v-card",
                        {
                          key: index,
                          staticClass: "d-flex flex-row px-1  mb-2 col-12",
                          staticStyle: {
                            background: "rgba(125, 179, 229, 0.4)"
                          },
                          attrs: { flat: "" },
                          on: {
                            click: function($event) {
                              return _vm.showContent(playlist)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "mr-2 " },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "ml-2",
                                  attrs: { color: "#000000" }
                                },
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
                                "text-overflow": "ellipsis"
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
                          _c(
                            "div",
                            {
                              staticClass: "ml-auto px-2 d-flex flex-row",
                              staticStyle: {
                                cursor: "pointer",
                                "align-items": "center"
                              }
                            },
                            [
                              _c("v-icon", [_vm._v("las la-braille")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "ml-1" },
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { "x-small": "", icon: "" } },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "20px" }
                                        },
                                        [_vm._v("mdi mdi-close")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 text-center" },
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
                  ],
                  1
                )
              ],
              2
            )
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
    return _c("div", { staticClass: "col-12 text-center" }, [
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
/* harmony import */ var _playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists.vue?vue&type=template&id=d342941c& */ "./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&");
/* harmony import */ var _playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlists.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/playlists.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _playlists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./playlists.vue?vue&type=template&id=d342941c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/playlists.vue?vue&type=template&id=d342941c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_playlists_vue_vue_type_template_id_d342941c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);