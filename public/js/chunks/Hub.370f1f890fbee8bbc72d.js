(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Hub"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/Hub.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstraps_globalPackage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bootstraps/globalPackage */ "./resources/js/bootstraps/globalPackage.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var TopBar = function TopBar() {
  return __webpack_require__.e(/*! import() | top-bar */ "top-bar").then(__webpack_require__.bind(null, /*! ./TopBar.vue */ "./resources/js/components/Hub/TopBar.vue"));
};

var addPage = function addPage() {
  return __webpack_require__.e(/*! import() | addPage */ "addPage").then(__webpack_require__.bind(null, /*! ./AddProjectPage.vue */ "./resources/js/components/Hub/AddProjectPage.vue"));
};

var ProjectView = function ProjectView() {
  return __webpack_require__.e(/*! import() | ProjectView */ "ProjectView").then(__webpack_require__.bind(null, /*! ./ProjectView.vue */ "./resources/js/components/Hub/ProjectView.vue"));
};

var ImageCropperBoard = function ImageCropperBoard() {
  return __webpack_require__.e(/*! import() | imageCropperBoard */ "imageCropperBoard").then(__webpack_require__.bind(null, /*! ../dashboard/ImageCropper.vue */ "./resources/js/components/dashboard/ImageCropper.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  data: function data() {
    return {
      that: this,
      absolute: true,
      opacity: 0.4,
      overlay: false,
      zIndex: 1,
      addProjectModal: false,
      viewProjectModal: false,
      posts: [],
      currentPost: this.$root.currentPost,
      project: {}
    };
  },
  components: {
    TopBar: TopBar,
    addPage: addPage,
    ProjectView: ProjectView,
    ImageCropperBoard: ImageCropperBoard
  },
  mounted: function mounted() {
    this.fetchPost();
  },
  methods: {
    showProject: function showProject(id, postId) {
      this.$router.push({
        path: "/hub/post/".concat(postId)
      });
      this.$root.currentPost = id; // this.project = project;

      this.viewProjectModal = true;
    },
    goBack: function goBack() {
      // this.viewProjectModal = false;
      this.$root.showViewPost = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    closeCropper: function closeCropper() {
      this.$root.showImageCropper = false;
      this.$root.imagepath = '';
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    showAddPost: function showAddPost() {
      this.$router.push({
        path: '/hub/new-post'
      });
    },
    imageStyle: function imageStyle(width, data) {
      if (data.image_extension == null) {
        var styleString = "height: " + width + "px; width: 94%;  position:absolute; left: 3%; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color: whitesmoke; background-image: url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color: whitesmoke; background-image: url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color: whitesmoke; background-image: url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:whitesmoke; background-image: url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString = "height: " + width + "px; width: 94%; left: 3%;  position:absolute; border: 1px solid #c5c5c5;  background-repeat: no-repeat; border-radius: 20px; box-shadow: 0px 0px 8px -2px rgba(60, 135, 205, 0.25); background-size: cover;";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-image:url(/imgs/posts/' + imgLink + ');';
        return _styleString;
      }
    },
    closeAddPost: function closeAddPost() {
      this.$root.showAddNewPost = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    fetchPost: function fetchPost() {
      var _this = this;

      axios.get('/fetch-posts').then(function (response) {
        if (response.status == 200) {
          _this.$root.posts = response.data.data;
        }
      });
    }
  }
}, "mounted", function mounted() {
  this.fetchPost();
}));

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scroller[data-v-7c74e0a0]::-webkit-scrollbar {\n  width: 6px;\n}\n.scroller[data-v-7c74e0a0]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n.scrollerAddProject[data-v-7c74e0a0]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollerAddProject[data-v-7c74e0a0]::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n.scrollerViewProject[data-v-7c74e0a0]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollerViewProject[data-v-7c74e0a0]::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n.projectBox[data-v-7c74e0a0]{\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=template&id=7c74e0a0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/Hub.vue?vue&type=template&id=7c74e0a0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      staticStyle: {
        position: "fixed",
        height: "100%",
        background: "#F5F5FB",
        width: "100%"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-12 py-0 fixed-top",
          staticStyle: {
            position: "sticky",
            width: "100%",
            height: "auto",
            "z-index": "999999999999999999"
          }
        },
        [_c("top-bar")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-lg-10 offset-lg-1 col-12 px-0 d-md-block d-none",
          staticStyle: {
            background: "#F5F5FB",
            position: "absolute",
            height: "92%",
            top: "8%"
          }
        },
        [
          _c("div", { staticClass: "row px-md-4 px-4" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-6 px-0 pb-1 text-right d-none d-lg-block",
                staticStyle: {
                  "border-bottom": "1px solid #263238",
                  "z-index": "99999999999999"
                }
              },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "text-transform": "none",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: { small: "", rounded: "", color: "#3C87CD" },
                    on: { click: _vm.showAddPost }
                  },
                  [
                    _vm._v("\n           Post your project "),
                    _c(
                      "v-icon",
                      { staticStyle: { "font-size": "19px", color: "white" } },
                      [_vm._v("las la-plus")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "d-lg-none d-inline-block",
          staticStyle: {
            "z-index": "99999999",
            position: "fixed",
            bottom: "3%",
            right: "2%"
          },
          attrs: { fab: "", color: "#3C87CD" },
          on: { click: _vm.showAddPost }
        },
        [
          _c(
            "v-icon",
            { staticStyle: { "font-size": "24px", color: "white" } },
            [_vm._v("las la-plus")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: " col-12 scroller",
          staticStyle: {
            position: "absolute",
            height: "90%",
            top: "10%",
            "overflow-y": "auto",
            "padding-bottom": "60px",
            "padding-top": "20px"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "col-lg-10 offset-lg-1 col-12 py-0 pt-md-5 mt-md-3"
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(this.$root.posts, function(post) {
                  return _c(
                    "div",
                    {
                      key: post.id,
                      staticClass:
                        "col-lg-3 col-md-6 px-0 mb-5 pt-1 pt-md-2 projectBox",
                      staticStyle: { height: "200px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          style: _vm.imageStyle(190, post),
                          on: {
                            click: function($event) {
                              return _vm.showProject(post.id, post.post_id)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "pt-3 px-2  pl-3",
                              staticStyle: {
                                position: "absolute",
                                width: "100%",
                                height: "35%",
                                left: "0",
                                bottom: "0%",
                                "border-radius": "0px",
                                "border-bottom-left-radius": "20px",
                                "border-bottom-right-radius": "20px",
                                background:
                                  "linear-gradient(180deg, rgba(60, 135, 205, 0.0053) 0%, rgba(0, 0, 0, 0.53) 100%)"
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-8 py-0 my-0" }, [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-family": "MediumFont",
                                        "font-size": "13px",
                                        color: "white"
                                      }
                                    },
                                    [_vm._v(_vm._s(post.title))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-4 py-0 my-0 text-right" },
                                  _vm._l(post.tags, function(tag, i) {
                                    return _c("i", {
                                      key: i,
                                      class: tag.icon,
                                      staticStyle: {
                                        "font-size": "25px",
                                        color: "white"
                                      }
                                    })
                                  }),
                                  0
                                )
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "py-1 px-2",
                          staticStyle: {
                            position: "absolute",
                            width: "94%",
                            height: "auto",
                            left: "3%",
                            top: "0",
                            "border-radius": "0px",
                            "border-top-left-radius": "20px",
                            "border-top-right-radius": "20px"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "col-12 py-0 my-0 text-left" },
                            [
                              _c("div", { staticClass: "row py-0 my-0" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-2 py-0 my-0 d-flex px-0",
                                    staticStyle: {
                                      "align-items": "center",
                                      "justify-content": "center"
                                    }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "d-inline-block",
                                      staticStyle: {
                                        "border-radius": "50%",
                                        height: "30px",
                                        width: "30px",
                                        "background-color": "#c5c5c5",
                                        "background-image":
                                          "url(/imgs/img3.jpg)",
                                        "background-size": "100%",
                                        border: "1px solid transparent"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-8 py-0 my-0 d-flex",
                                    staticStyle: { "align-items": "center" }
                                  },
                                  [
                                    _c("div", [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "d-inline-block",
                                          staticStyle: {
                                            "font-family": "MediumFont",
                                            "font-size": "13px"
                                          }
                                        },
                                        [_vm._v("Akinola Dray")]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-2 text-right py-0 my-0" },
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { icon: "" } },
                                      [
                                        _c(
                                          "v-icon",
                                          {
                                            staticStyle: { "font-size": "25px" }
                                          },
                                          [_vm._v("las la-ellipsis-v")]
                                        )
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "py-1 px-2",
                          staticStyle: {
                            position: "absolute",
                            width: "94%",
                            height: "auto",
                            left: "3%",
                            top: "100%"
                          }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-12 py-0 my-0 text-right" },
                              [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block mx-1" },
                                  [
                                    _c("i", {
                                      staticClass: "lar la-heart",
                                      staticStyle: {
                                        "font-size": "20px",
                                        color: "#3C87CD"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          "font-family": "MediumFont",
                                          "font-size": "12px",
                                          color: "#000000"
                                        }
                                      },
                                      [_vm._v(_vm._s(post.likes))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block mx-1" },
                                  [
                                    _c("i", {
                                      staticClass: "las la-comment",
                                      staticStyle: {
                                        "font-size": "20px",
                                        color: "#3C87CD"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          "font-family": "MediumFont",
                                          "font-size": "12px",
                                          color: "#000000"
                                        }
                                      },
                                      [_vm._v(_vm._s(post.comments))]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                }),
                0
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("v-slide-x-transition", [
        _vm.that.$root.showSideBar
          ? _c(
              "div",
              {
                staticClass: "col-12  py-0 px-0",
                staticStyle: {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  "z-index": "9999999999999",
                  background: "rgba(27, 27, 30, 0.32)"
                },
                on: {
                  click: function($event) {
                    _vm.that.$root.showSideBar = false
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: {
                      position: "absolute",
                      height: "100%",
                      width: "70%",
                      left: "0"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-6 col-lg-3 pt-2",
                        staticStyle: { background: "white", height: "100%" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.that.$root.showSideBar = true
                          }
                        }
                      },
                      [_c("sidebar")],
                      1
                    )
                  ]
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("v-slide-x-reverse-transition", [
        _vm.that.$root.showAddNewPost
          ? _c(
              "div",
              {
                staticClass: "col-12  py-0 px-0",
                staticStyle: {
                  position: "fixed",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  "z-index": "9999999999999",
                  background: "rgba(27, 27, 30, 0.32)"
                },
                on: { click: _vm.closeAddPost }
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: {
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: "0",
                      background: "transparent",
                      "overflow-y": "auto",
                      "overflow-x": "hidden"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-4 col-md-6 offset-lg-8 offset-md-6 pt-0 pb-3 scrollerAddProject px-md-2 px-0 ",
                        staticStyle: {
                          height: "100%",
                          top: "0%",
                          position: "absolute",
                          background: "white",
                          border: "1px solid white",
                          "border-radius": "0px",
                          "overflow-y": "auto",
                          "overflow-x": "hidden"
                        },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.that.$root.showAddNewPost = true
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 px-md-2 px-0 py-2 pt-0 fixed-top d-flex flex-row",
                            staticStyle: {
                              "border-top-left-radius": "10px",
                              "border-top-right-radius": "10px",
                              left: "0",
                              position: "sticky",
                              background: "white",
                              top: "0%",
                              "border-bottom": "1px solid #c5c5c5",
                              "align-items": "center"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: " col-2 py-0 " },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.closeAddPost($event)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi mdi-close")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-8 text-center py-0" },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass: "d-md-block d-none",
                                    staticStyle: {
                                      "font-size": "17px",
                                      "font-family": "HeaderFont"
                                    }
                                  },
                                  [_vm._v("Post your project")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "d-md-none d-block",
                                    staticStyle: {
                                      "font-size": "15px",
                                      "font-family": "HeaderFont"
                                    }
                                  },
                                  [_vm._v("Post your project")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "px-1 py-0 col-2 text-right "
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 px-3 px-md-1 py-1" },
                          [_c("addPage")],
                          1
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      this.$root.showViewPost
        ? _c(
            "div",
            {
              staticClass: "col-12  py-0 px-0",
              staticStyle: {
                position: "fixed",
                left: "0",
                width: "100%",
                height: "100%",
                "z-index": "9999999999999",
                background: "rgba(27, 27, 30, 0.32)"
              },
              on: {
                click: function($event) {
                  _vm.viewProjectModal = false
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    background: "transparent",
                    "overflow-y": "hidden",
                    "overflow-x": "hidden"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticStyle: {
                        position: "absolute",
                        top: "1%",
                        right: "2%"
                      },
                      attrs: { icon: "", color: "#ffffff" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.goBack($event)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-12 pt-0 pb-3 scrollerViewProject px-md-2 px-0",
                      staticStyle: {
                        background: "white",
                        height: "93%",
                        top: "7%",
                        border: "1px solid white",
                        "border-radius": "0px",
                        "border-top-left-radius": "10px",
                        "overflow-y": "auto",
                        "overflow-x": "hidden"
                      },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.viewProjectModal = true
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "col-12  py-2 pt-0" },
                        [
                          _c("project-view", {
                            attrs: { post: _vm.currentPost }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.that.$root.showImageCropper
        ? _c(
            "div",
            {
              staticClass: "py-0 px-0",
              staticStyle: {
                position: "fixed",
                width: "100%",
                height: "100%",
                "z-index": "99999999999999999",
                background: "rgba(27, 27, 30, 0.32)"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex",
                  staticStyle: {
                    position: "absolute",
                    height: "90%",
                    top: "5%",
                    width: "94%",
                    left: "3%",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        " col-lg-6  pt-2 col-md-8  d-flex flex-column",
                      staticStyle: { background: "white", height: "100%" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "text-center d-flex flex-row",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "col-2 px-1 py-1 text-left" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: { click: _vm.closeCropper }
                                },
                                [_c("v-icon", [_vm._v("mdi mdi-close")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-2 px-1 py-1" })
                        ]
                      ),
                      _vm._v(" "),
                      _c("image-cropper-board")
                    ],
                    1
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
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
        staticClass: "col-lg-6 px-0 pb-1 ",
        staticStyle: {
          "border-bottom": "1px solid #263238",
          "z-index": "99999999999999"
        }
      },
      [_c("h3", { staticClass: "d-none d-md-block" }, [_vm._v("Hub")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "text-center col-8 py-1", staticStyle: { width: "100%" } },
      [_c("h6", [_vm._v("Crop Image")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/bootstraps/globalPackage.js":
/*!**************************************************!*\
  !*** ./resources/js/bootstraps/globalPackage.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-izitoast */ "./node_modules/vue-izitoast/dist/vue-izitoast.js");
/* harmony import */ var vue_izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
// alert


Vue.use(vue_izitoast__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./resources/js/components/Hub/Hub.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Hub/Hub.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hub_vue_vue_type_template_id_7c74e0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hub.vue?vue&type=template&id=7c74e0a0&scoped=true& */ "./resources/js/components/Hub/Hub.vue?vue&type=template&id=7c74e0a0&scoped=true&");
/* harmony import */ var _Hub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hub.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/Hub.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Hub_vue_vue_type_style_index_0_id_7c74e0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css& */ "./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Hub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hub_vue_vue_type_template_id_7c74e0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hub_vue_vue_type_template_id_7c74e0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c74e0a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/Hub.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/Hub.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Hub/Hub.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hub.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_style_index_0_id_7c74e0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=style&index=0&id=7c74e0a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_style_index_0_id_7c74e0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_style_index_0_id_7c74e0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_style_index_0_id_7c74e0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_style_index_0_id_7c74e0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_style_index_0_id_7c74e0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Hub/Hub.vue?vue&type=template&id=7c74e0a0&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Hub/Hub.vue?vue&type=template&id=7c74e0a0&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_template_id_7c74e0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hub.vue?vue&type=template&id=7c74e0a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/Hub.vue?vue&type=template&id=7c74e0a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_template_id_7c74e0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hub_vue_vue_type_template_id_7c74e0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);