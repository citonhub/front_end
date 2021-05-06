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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      videos: [],
      loading: false,
      saving: false,
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

      axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id, "/playlist")).then(function (response) {
        if (response.status == 200) {
          _this2.videos = response.data.resources;
        } else {
          _this2.showAlert('oops', 'something went wrong', 'warning');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    createPlaylists: function createPlaylists() {
      var _this3 = this;

      axios.post('/create-resource', {
        space_id: this.$root.selectedSpace.space_id,
        name: this.playName,
        type: 'playlist'
      }).then(function (response) {
        if (response.status == 200) {
          console.log('playlist created!');

          _this3.showAlert('sucessful!', 'the playlist has been created', 'success');

          _this3.playName = '';

          _this3.videos.push(response.data);
        }
      });
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          timeout: 5000,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          timeout: 5000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          timeout: 5000,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 5000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
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
  return _c("div", { staticClass: "py-1 px-0" }, [
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
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
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
                    _c("v-icon", { staticStyle: { "font-size": "24px" } }, [
                      _vm._v(
                        "\n                     las la-arrow-right\n                   "
                      )
                    ])
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
      { staticClass: "d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2 " },
      [
        _vm.showPlaylist
          ? _vm._l(_vm.videos, function(video, index) {
              return _c(
                "v-card",
                {
                  key: index,
                  staticClass: "d-flex flex-row px-1  mb-2 col-12",
                  staticStyle: { background: "rgba(125, 179, 229, 0.4)" },
                  attrs: { flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.showContent(video)
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
                        { staticClass: "ml-2", attrs: { color: "#000000" } },
                        [_vm._v("las la-play-circle")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-family": "BodyFont",
                          color: "black",
                          "font-size": "13px"
                        }
                      },
                      [_vm._v(_vm._s(video.name))]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "ml-auto px-2",
                      staticStyle: { cursor: "pointer" }
                    },
                    [_c("v-icon", [_vm._v("las la-braille")])],
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
                    staticStyle: { "font-size": "35px", color: "#FF0000" }
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
        ),
        _vm._v(" "),
        _vm.removeModal
          ? _c(
              "div",
              {
                staticClass: "playlist-modal",
                staticStyle: {
                  position: "absolute",
                  background: "rgba(0,0,0,0.5)",
                  top: "0",
                  width: "100%",
                  height: "600px"
                }
              },
              [
                _vm.toggleForm
                  ? _c(
                      "div",
                      {
                        staticClass: "created-lists mt-4 ml-2 col-lg-11",
                        staticStyle: { background: "white", height: "380px" }
                      },
                      [
                        _c("div", { staticClass: "top  mt-2" }, [
                          _c(
                            "div",
                            { on: { click: _vm.openForm } },
                            [
                              _c("v-icon", [_vm._v("las la-plus")]),
                              _vm._v(" "),
                              _c("span", [_vm._v("Add to New Playlist")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "offset-lg-4 mb-2" }, [
                            _vm._v("or")
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", [_vm._v("Save video to...")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "max-height": "200px",
                              "overflow-y": "scroll"
                            }
                          },
                          _vm._l(_vm.lists, function(list, index) {
                            return _c(
                              "div",
                              { key: index, staticClass: "lists d-flex mt-2" },
                              [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { color: "rgba(125, 179, 229, 0.5)" }
                                  },
                                  [_vm._v("las la-stop")]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v(_vm._s(list))
                                ])
                              ],
                              1
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "mt-4 offset-4",
                            attrs: { color: "#3C87CD" },
                            on: { click: _vm.closeModal }
                          },
                          [_vm._v("Done")]
                        )
                      ],
                      1
                    )
                  : _c(
                      "div",
                      {
                        staticClass:
                          "playlist-form py-1 mt-4 col-lg-10 offset-1",
                        staticStyle: {
                          background: "white",
                          height: "200px",
                          "border-radius": "5px"
                        }
                      },
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "offset-10",
                            attrs: { color: "black" },
                            on: { click: _vm.closeForm }
                          },
                          [_vm._v("las la-times")]
                        ),
                        _vm._v(" "),
                        _c("v-text-field", {
                          staticClass: "mt-4 col-lg-11 ml-2",
                          attrs: { placeholder: "Title" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "action-buttons  mt-1 offset-3" },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "#3C87CD" },
                                on: { click: _vm.closeModal }
                              },
                              [_vm._v("Create")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
              ]
            )
          : _vm._e()
      ],
      2
    )
  ])
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