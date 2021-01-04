(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddGem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var CodeBox = function CodeBox() {
  return Promise.all(/*! import() | CodeBox?v=0.53 */[__webpack_require__.e("vendors~CodeBox~CodeEditor~CodeEditorChat"), __webpack_require__.e("CodeBox")]).then(__webpack_require__.bind(null, /*! ../chats/CodeBox.vue */ "./resources/js/components/chats/CodeBox.vue"));
};

var VideoPlayer = function VideoPlayer() {
  return Promise.all(/*! import() | VideoPlayer?v=0.13 */[__webpack_require__.e("vendors~VideoPlayer"), __webpack_require__.e("VideoPlayer")]).then(__webpack_require__.bind(null, /*! ../chats/VideoPlayer.vue */ "./resources/js/components/chats/VideoPlayer.vue"));
};

var AudioPlayer = function AudioPlayer() {
  return __webpack_require__.e(/*! import() | AudioPlayer?v=0.20 */ "AudioPlayer").then(__webpack_require__.bind(null, /*! ../chats/AudioPlayer.vue */ "./resources/js/components/chats/AudioPlayer.vue"));
};

var Images = function Images() {
  return __webpack_require__.e(/*! import() | Images?v=0.32 */ "Images").then(__webpack_require__.bind(null, /*! ../chats/Images.vue */ "./resources/js/components/chats/Images.vue"));
};

var VPressEditor = function VPressEditor() {
  return Promise.all(/*! import() | VPressEditor?v=0.12 */[__webpack_require__.e("vendors~VPressEditor"), __webpack_require__.e("VPressEditor")]).then(__webpack_require__.bind(null, /*! ../challenges/Editor.vue */ "./resources/js/components/challenges/Editor.vue"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      subjectRule: [function (v) {
        return !!v || 'Add a subject to this note';
      }],
      KeywordsRule: [function (v) {
        return !!v || 'Add atleast one keyword';
      }],
      selectedContentId: 0,
      items: ['cool', 'new'],
      text: '',
      note: {
        subject: '',
        keywords: [],
        contents: [{
          id: 0,
          name: 'New page',
          contents: [{
            type: 'text',
            content: 'Lorem ipsum dolor sit amet consectetur'
          }, {
            type: 'images',
            imageArray: [{
              image_name: 'space_image_1_128',
              image_extension: 'png',
              background_color: '#c5c5c5'
            }, {
              image_name: 'space_image_1_129',
              image_extension: 'png',
              background_color: '#c5c5c5'
            }, {
              image_name: 'space_image_1_130',
              image_extension: 'jpg',
              background_color: '#c5c5c5'
            }, {
              image_name: 'space_image_1_131',
              image_extension: 'jpeg',
              background_color: '#c5c5c5'
            }]
          }, {
            type: 'video'
          }, {
            type: 'audio'
          }, {
            type: 'code'
          }, {
            type: 'project'
          }]
        }]
      },
      drag: false
    };
  },
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a,
    CodeBox: CodeBox,
    VideoPlayer: VideoPlayer,
    AudioPlayer: AudioPlayer,
    Images: Images,
    VPressEditor: VPressEditor
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  mounted: function mounted() {
    this.$root.showMobileHub = false;
  },
  methods: {
    addNewContent: function addNewContent() {
      var newContent = {
        name: 'Another page',
        contents: []
      };
      this.note.contents.push(newContent);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.handle[data-v-3d0939a5]{\n   cursor: move;\n}\n.ghost[data-v-3d0939a5] {\n  opacity: 0.5;\n  background: whitesmoke;\n  border:1px solid whitesmoke;\n  border-radius: 7px;\n}\n.scroller[data-v-3d0939a5]::-webkit-scrollbar {\n  width: 6px;\n  background: transparent;\n}\n.scroller[data-v-3d0939a5]::-webkit-scrollbar-thumb {\n  background-color:  #3C87CD;\n  outline: 1px solid  #3C87CD;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    { staticStyle: { background: "transparent", "font-size": "BodyFont" } },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-3 px-md-2 scroller",
          staticStyle: {
            position: "absolute",
            height: "95%",
            top: "0%",
            left: "0%",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "padding-bottom": "150px !important"
          }
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-md-6 offset-md-1 py-0 my-0 pl-md-3 text-left"
                },
                [
                  _c(
                    "h5",
                    {
                      staticClass: "d-md-block d-none",
                      staticStyle: { "font-size": "18px" }
                    },
                    [_vm._v(" Add a Note")]
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "d-md-none d-block" }, [
                    _vm._v(" Add a Note")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 offset-lg-1 mb-2" },
                [
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      label: "Subject",
                      counter: "60",
                      rules: _vm.subjectRule,
                      "persistent-hint": "",
                      placeholder: "What new thing do you learn today",
                      dense: "",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.note.subject,
                      callback: function($$v) {
                        _vm.$set(_vm.note, "subject", $$v)
                      },
                      expression: "note.subject"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 offset-lg-1 mb-2" },
                [
                  _c("v-combobox", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      dense: "",
                      label: "Keywords",
                      rules: _vm.KeywordsRule,
                      counter: "80",
                      placeholder:
                        "words or sentences that is related to the above topic",
                      "persistent-hint": "",
                      chips: "",
                      multiple: "",
                      color: "#3C87CD"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selection",
                        fn: function(data) {
                          return [
                            _c(
                              "v-chip",
                              _vm._b(
                                {
                                  key: JSON.stringify(data.item),
                                  staticClass: "my-1",
                                  staticStyle: {
                                    "font-size": "12px",
                                    color: "#3C87CD",
                                    "font-family": "BodyFont"
                                  },
                                  attrs: {
                                    "input-value": data.selected,
                                    color: "#3C87CD",
                                    dense: "",
                                    items: _vm.items,
                                    outlined: "",
                                    disabled: data.disabled
                                  }
                                },
                                "v-chip",
                                data.attrs,
                                false
                              ),
                              [
                                _vm._v(
                                  "\n         \n          " +
                                    _vm._s(data.item) +
                                    "\n        "
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.note.keywords,
                      callback: function($$v) {
                        _vm.$set(_vm.note, "keywords", $$v)
                      },
                      expression: "note.keywords"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 offset-lg-1 py-1" }, [
                _c(
                  "h5",
                  { staticStyle: { "font-size": "15px", color: "gray" } },
                  [_vm._v("Pages")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-10 offset-lg-1 d-flex flex-row flex-wrap py-0",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _vm._l(_vm.note.contents, function(content, index) {
                    return _c(
                      "v-chip",
                      {
                        key: index,
                        staticClass: "mr-2 my-1",
                        style:
                          index == _vm.selectedContentId
                            ? "font-size:13px; color:#ffffff; font-family:BodyFont;"
                            : "",
                        attrs: {
                          outlined: index != _vm.selectedContentId,
                          close: "",
                          dense: "",
                          color: "#3C87CD"
                        },
                        on: {
                          click: function($event) {
                            _vm.selectedContentId = index
                          }
                        }
                      },
                      [_vm._v(_vm._s(content.name))]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-1",
                      attrs: { icon: "" },
                      on: { click: _vm.addNewContent }
                    },
                    [
                      _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                        _vm._v("las la-plus")
                      ])
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 pb-0 offset-lg-1" },
                [
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      counter: "60",
                      rules: _vm.requiredRule,
                      dense: "",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.note.contents[_vm.selectedContentId].name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.note.contents[_vm.selectedContentId],
                          "name",
                          $$v
                        )
                      },
                      expression: "note.contents[selectedContentId].name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-10 py-1 offset-lg-1 d-flex px-0 flex-row",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c(
                    "v-btn",
                    { staticClass: "mx-1", attrs: { icon: "" } },
                    [
                      _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                        _vm._v("las la-plus")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.note.contents[_vm.selectedContentId].contents.length > 0
                ? void 0
                : _vm._e(),
              _vm._v(" "),
              _c(
                "draggable",
                _vm._b(
                  {
                    staticClass:
                      "col-lg-10 py-1 offset-lg-1 px-0 px-md-2 py-0 d-flex flex-row flex-wrap",
                    staticStyle: { background: "#E1F0FC" },
                    attrs: { tag: "div", handle: ".handle" },
                    on: {
                      start: function($event) {
                        _vm.drag = true
                      },
                      end: function($event) {
                        _vm.drag = false
                      }
                    },
                    model: {
                      value: _vm.note.contents[_vm.selectedContentId].contents,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.note.contents[_vm.selectedContentId],
                          "contents",
                          $$v
                        )
                      },
                      expression: "note.contents[selectedContentId].contents"
                    }
                  },
                  "draggable",
                  _vm.dragOptions,
                  false
                ),
                _vm._l(
                  _vm.note.contents[_vm.selectedContentId].contents,
                  function(element, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "col-md-6 col-lg-4 px-1" },
                      [
                        _c(
                          "div",
                          { staticClass: "px-2 py-2" },
                          [
                            element.type == "text"
                              ? [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "py-1 px-2 ml-2",
                                      staticStyle: {
                                        "max-width": "100%",
                                        border: "1px solid transparent",
                                        "min-width": "150px",
                                        background: "#ffffff",
                                        "border-radius": "7px",
                                        "border-bottom-left-radius": "0px"
                                      },
                                      attrs: { "elevation-1": "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-flex flex-row",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-8 py-0 px-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bold"
                                                  }
                                                },
                                                [_vm._v("V18")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-4 py-0 px-0 text-right"
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "handle",
                                                  staticStyle: {
                                                    "font-size": "25px"
                                                  },
                                                  attrs: { color: "#3C87CD" }
                                                },
                                                [_vm._v("las la-list")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticStyle: { "font-size": "13px" }
                                        },
                                        [_vm._v(_vm._s(element.content))]
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            element.type == "images"
                              ? [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "py-1 pb-2 px-2 ml-2",
                                      staticStyle: {
                                        width: "100%",
                                        border: "1px solid transparent",
                                        "min-width": "150px",
                                        background: "#ffffff",
                                        "border-radius": "7px",
                                        "border-bottom-right-radius": "0px"
                                      },
                                      attrs: { "elevation-1": "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-flex flex-row",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-8 py-0 px-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bold"
                                                  }
                                                },
                                                [_vm._v("V18")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-4 py-0 px-0 text-right"
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "handle",
                                                  staticStyle: {
                                                    "font-size": "25px"
                                                  },
                                                  attrs: { color: "#3C87CD" }
                                                },
                                                [_vm._v("las la-list")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("images", {
                                        attrs: {
                                          imageArray: element.imageArray
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            element.type == "video"
                              ? [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "py-1 px-2 ml-2",
                                      staticStyle: {
                                        width: "100%",
                                        border: "1px solid transparent",
                                        "min-width": "150px",
                                        background: "#ffffff",
                                        "border-radius": "7px",
                                        "border-bottom-right-radius": "0px"
                                      },
                                      attrs: { "elevation-1": "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-flex flex-row",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-8 py-0 px-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bold"
                                                  }
                                                },
                                                [_vm._v("V18")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-4 py-0 px-0 text-right"
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "handle",
                                                  staticStyle: {
                                                    "font-size": "25px"
                                                  },
                                                  attrs: { color: "#3C87CD" }
                                                },
                                                [_vm._v("las la-list")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("video-player", {
                                        staticStyle: { width: "100%" },
                                        attrs: {
                                          videoUrl: "sample.mpd",
                                          backgroundColor: "#c5c5c5",
                                          backgroundImg: "/imgs/video.jpeg",
                                          playerId: "small56"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            element.type == "audio"
                              ? [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "py-1 pb-2 px-2 ml-2",
                                      staticStyle: {
                                        width: "100%",
                                        border: "1px solid transparent",
                                        "min-width": "150px",
                                        background: "#ffffff",
                                        "border-radius": "7px",
                                        "border-bottom-right-radius": "0px"
                                      },
                                      attrs: { "elevation-1": "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-flex flex-row",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-8 py-0 px-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bold"
                                                  }
                                                },
                                                [_vm._v("V18")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-4 py-0 px-0 text-right"
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "handle",
                                                  staticStyle: {
                                                    "font-size": "25px"
                                                  },
                                                  attrs: { color: "#3C87CD" }
                                                },
                                                [_vm._v("las la-list")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("audio-player", {
                                        staticClass: "mt-n1",
                                        attrs: {
                                          file: "/audio/space_audio_2666.mp3",
                                          playerId: "394",
                                          colorBase: "#000000"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            element.type == "code"
                              ? [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "py-1 px-2 pb-5 ml-2",
                                      staticStyle: {
                                        width: "100%",
                                        border: "1px solid transparent",
                                        "min-width": "150px",
                                        background: "#ffffff",
                                        "border-radius": "7px",
                                        "border-bottom-right-radius": "0px"
                                      },
                                      attrs: { "elevation-1": "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-flex flex-row",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-8 py-0 px-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bold"
                                                  }
                                                },
                                                [_vm._v("V18")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-4 py-0 px-0 text-right"
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "handle",
                                                  staticStyle: {
                                                    "font-size": "25px"
                                                  },
                                                  attrs: { color: "#3C87CD" }
                                                },
                                                [_vm._v("las la-list")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("code-box", {
                                        attrs: {
                                          color: "#000000",
                                          codeContent: "Hello world",
                                          topMargin: 13,
                                          filename: "index.php",
                                          codeLanguage: "PHP"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            element.type == "project"
                              ? [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "py-1 pb-2 px-2 ml-2",
                                      staticStyle: {
                                        width: "100%",
                                        border: "1px solid transparent",
                                        "min-width": "150px",
                                        background: "#ffffff",
                                        "border-radius": "7px",
                                        "border-bottom-right-radius": "0px"
                                      },
                                      attrs: { "elevation-1": "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-flex flex-row",
                                          staticStyle: {
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-8 py-0 px-0" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                    "font-weight": "bold"
                                                  }
                                                },
                                                [_vm._v("V18")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-4 py-0 px-0 text-right"
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "handle",
                                                  staticStyle: {
                                                    "font-size": "25px"
                                                  },
                                                  attrs: { color: "#3C87CD" }
                                                },
                                                [_vm._v("las la-list")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-2 text-center d-flex py-1",
                                            staticStyle: {
                                              "align-items": "center",
                                              "justify-content": "center"
                                            }
                                          },
                                          [
                                            _c("v-icon", [
                                              _vm._v("las la-laptop-code")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "col-7 d-flex py-1",
                                            staticStyle: {
                                              "align-items": "center"
                                            }
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "font-size": "13px"
                                                }
                                              },
                                              [_vm._v("Java calculator")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-3 text-right py-1",
                                            staticStyle: {
                                              "align-items": "center"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              { attrs: { icon: "" } },
                                              [
                                                _c("v-icon", [
                                                  _vm._v(
                                                    "las la-arrow-circle-right"
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]
                    )
                  }
                ),
                0
              )
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      false
        ? undefined
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& */ "./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&");
/* harmony import */ var _AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddGem.vue?vue&type=script&lang=js& */ "./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& */ "./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d0939a5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/diary/AddGem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);