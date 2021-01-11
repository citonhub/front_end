(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      post: '',
      id: this.$root.currentPost,
      loadingPost: false,
      that: this,
      pageContent: '',
      loadingCode: false,
      showFullLoader: false,
      selectedLangId: ''
    };
  },
  mounted: function mounted() {
    this.fetchPost();
  },
  methods: {
    likePost: function likePost() {
      var _this2 = this;

      axios.post('/like-hub-post').then(function (response) {
        if (response.status == 201) {
          if (response.data.liked == "liked") {
            _this2.$root.selectedPost.isLiked = 1;
          } else {
            _this2.liked = 0;
          }
        }
      });
    },
    pinPost: function pinPost() {
      var _this3 = this;

      axios.post('/pin-hub-post').then(function (response) {
        if (response.status == 201) {
          if (response.data.liked == "liked") {
            _this3.liked = 1;
          } else {
            _this3.liked = 0;
          }
        }
      });
    },
    showPage: function showPage() {
      this.pageContent = '';
      this.loadingCode = true;
      this.selecetedPanelId = this.$root.selectedPost.project.panel_id;

      if (this.$root.selectedPost.project.is_web) {
        this.loadPageContent(this.selecetedPanelId);
      } else {
        this.runCodeOnSandbox();
      }
    },
    loadPageContent: function loadPageContent(panelId) {
      var _this4 = this;

      axios.get('/run-panel/' + panelId).then(function (response) {
        if (response.status == 200) {
          _this4.loadingCode = false;
          _this4.pageContent = response.data;
        }
      })["catch"](function (error) {
        _this4.showAlert('Oops!', 'Unable to load page content', 'error');
      });
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          message: message,
          timeout: 5000,
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
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    },
    checkResponse: function checkResponse(token) {
      var _this = this;

      axios.post('/check-for-submission', {
        token: token,
        langId: _this.selectedLangId
      }).then(function (response) {
        if (response.status == 200) {
          if (response.data[0].status.description == 'Accepted') {
            _this.pageContent = response.data[0].stdout;
          } else if (response.data[0].status.description == 'In Queue') {
            _this.pageContent = 'In Queue...';

            _this.checkResponse(response.data[0].token);
          } else if (response.data[0].status.description == 'Processing') {
            _this.pageContent = 'Processing...';

            _this.checkResponse(response.data[0].token);
          } else {
            _this.pageContent = response.data[0].stdout + '\n Error: \n' + response.data[0].stderr;
          }

          if (_this.$root.codeBoxOpened == false) {}

          _this.recheckCodeBox = true;
        }
      })["catch"](function (error) {
        _this.pageContent = 'An issue occured,unable to run on sandbox...';
      });
    },
    runCodeOnSandbox: function runCodeOnSandbox() {
      var _this5 = this;

      axios.post('/run-code-on-sandbox-project', {
        panel_id: this.selecetedPanelId
      }).then(function (response) {
        if (response.status == 200) {
          var token = response.data[0][0].token;

          if (response.data[0][0].status.description == 'Accepted') {
            _this5.pageContent = response.data[0][0].stdout;
          } else if (response.data[0][0].status.description == 'In Queue') {
            _this5.pageContent = 'In Queue...';

            _this5.checkResponse(token, response.data[1]);
          } else if (response.data[0][0].status.description == 'Processing') {
            _this5.pageContent = 'Processing...';

            _this5.checkResponse(token, response.data[1]);
          } else {
            _this5.pageContent = response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr;
          }
        }
      })["catch"](function (error) {
        _this5.pageContent = 'An issue occured,unable to run on sandbox...';
      });
    },
    fetchPost: function fetchPost() {
      var _this6 = this;

      this.loadingPost = true;
      var storedPostData = this.$root.getLocalStore('post_data_' + this.$route.params.post_id + this.$root.username);
      storedPostData.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this6.$root.selectedPost = finalResult;

          if (!_this6.$root.selectedPost.link) {
            _this6.showPage();
          }

          _this6.loadingPost = false; // this.updatePost();
        } else {
          axios.get('/fetch-post/' + _this6.$route.params.post_id).then(function (response) {
            if (response.status == 200) {
              _this6.$root.LocalStore('post_data_' + _this6.$route.params.post_id + _this6.$root.username, response.data.data);

              _this6.$root.selectedPost = response.data.data;

              if (!_this6.$root.selectedPost.link) {
                _this6.showPage();
              }

              _this6.loadingPost = false;
            }
          })["catch"](function (error) {
            _this6.loadingPost = false;
          });
        }
      });
    },
    getUserLevel: function getUserLevel(points) {
      var imageUrl = '';

      if (points >= 0 && points <= 99) {
        imageUrl += '/imgs/newbie.svg';
      } else if (points >= 100 && points <= 999) {
        imageUrl += '/imgs/junior.svg';
      } else if (points >= 1000 && points <= 4999) {
        imageUrl += '/imgs/intermediate.svg';
      } else if (points >= 5000 && points <= 9999) {
        imageUrl += '/imgs/senior.svg';
      } else if (points >= 10000 && points <= 14999) {
        imageUrl += '/imgs/expert.svg';
      } else if (points >= 15000 && points <= 100000) {
        imageUrl += '/imgs/super_dev.svg';
      }

      return imageUrl;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntextarea[data-v-529f7189] {\r\n    font-size:13px; \r\n    background:whitesmoke;\r\n    width:100%; \r\n    height: 60px;\r\n    max-height: 75px;\r\n    padding: 6px 6px;\r\n    resize:none; \r\n    overflow-x: hidden;\r\n     overflow-y: auto;\r\n    border:1px solid #e6e6e6; \r\n    border-radius:2px;\n}\n.scroller[data-v-529f7189]::-webkit-scrollbar-thumb {\r\n  background-color: #3C87CD;\r\n  outline: 1px solid #3C87CD;\n}\n.scrollerinfo[data-v-529f7189]::-webkit-scrollbar {\r\n  width: 6px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true& ***!
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
  return _c("div", { staticClass: "row px-2" }, [
    _c(
      "div",
      {
        staticClass: "col-lg-6 offset-lg-3 py-1 fixed-top d-flex flex-row px-1",
        staticStyle: {
          position: "sticky",
          background: "white",
          "z-index": "99999999",
          "border-bottom": "1px solid #c5c5c5",
          top: "0%"
        }
      },
      [
        _c(
          "div",
          { staticClass: "col-6 py-0 px-0 d-flex flew-row" },
          [
            this.$root.selectedPost.user
              ? [
                  _c("div", {
                    staticClass: "mr-2",
                    style: _vm.imageStyleUser(35, this.$root.selectedPost.user)
                  })
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex ",
                staticStyle: { "align-items": "center" }
              },
              [
                this.$root.selectedPost.user
                  ? [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "14px",
                            "font-family": "MediumFont"
                          }
                        },
                        [
                          _vm._v(
                            "\n             " +
                              _vm._s(this.$root.selectedPost.user.username) +
                              "   "
                          ),
                          _c("img", {
                            staticClass: "mx-1",
                            attrs: {
                              src: _vm.getUserLevel(
                                this.$root.selectedPost.user.points
                              ),
                              height: "22px"
                            }
                          })
                        ]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6 py-0 px-0 text-right" },
          [
            _c(
              "v-btn",
              { attrs: { icon: "" } },
              [
                _c("v-icon", { staticStyle: { "font-size": "25px" } }, [
                  _vm._v("las la-thumbtack")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              { staticStyle: { "font-size": "12px", color: "grey" } },
              [_vm._v(_vm._s(this.$root.selectedPost.pinned))]
            ),
            _vm._v(" "),
            _c("v-btn", { attrs: { icon: "" } }, [
              _c("i", {
                class: this.$root.selectedPost.isLiked
                  ? "lar la-heart"
                  : "lar la-heart-outline",
                staticStyle: { "font-size": "25px" },
                on: { click: _vm.likePost }
              })
            ]),
            _vm._v(" "),
            _c(
              "span",
              { staticStyle: { "font-size": "12px", color: "grey" } },
              [_vm._v(_vm._s(this.$root.selectedPost.likes))]
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-6 offset-lg-3 mt-2 px-0 text-center" }, [
      _c(
        "span",
        {
          staticClass: "d-md-block d-none",
          staticStyle: { "font-size": "17px", "font-family": "MediumFont" }
        },
        [_vm._v(_vm._s(this.$root.selectedPost.title))]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "d-md-none d-block",
          staticStyle: { "font-size": "14px", "font-family": "MediumFont" }
        },
        [_vm._v(_vm._s(this.$root.selectedPost.title))]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-lg-6 offset-lg-3 py-2 px-0 pt-1 mt-1",
        staticStyle: { height: "450px" }
      },
      [
        this.$root.selectedPost.link
          ? [
              _c("iframe", {
                staticClass: "col-12 px-0 py-0",
                staticStyle: {
                  position: "absolute",
                  height: "100%",
                  background: "white",
                  border: "1px solid #c5c5c5",
                  "border-radius": "7px"
                },
                attrs: {
                  sandbox:
                    "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                  src: this.$root.selectedPost.project_url
                }
              })
            ]
          : [
              _vm.pageContent == "" && _vm.loadingCode
                ? [
                    _c(
                      "div",
                      {
                        staticClass: "col-12 d-flex ",
                        staticStyle: {
                          position: "absolute",
                          height: "100%",
                          "align-items": "center",
                          "justify-content": "center",
                          background: "white",
                          border: "1px solid #c5c5c5",
                          "border-radius": "7px"
                        }
                      },
                      [
                        _c("v-progress-circular", {
                          attrs: {
                            color: "#3C87CD",
                            indeterminate: "",
                            width: "3",
                            size: "28"
                          }
                        })
                      ],
                      1
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.pageContent != "" && this.$root.selectedPost.project.is_web
                ? [
                    _c("iframe", {
                      staticClass: "col-12  px-0 py-0",
                      staticStyle: {
                        position: "absolute",
                        height: "100%",
                        background: "white",
                        border: "1px solid #c5c5c5",
                        "border-radius": "7px"
                      },
                      attrs: {
                        sandbox:
                          "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                        srcdoc: _vm.pageContent
                      }
                    })
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.pageContent != "" && !this.$root.selectedPost.project.is_web
                ? [
                    _c("textarea", {
                      staticClass: "col-12",
                      staticStyle: {
                        "font-size": "14px",
                        position: "absolute",
                        height: "100%",
                        background: "white",
                        border: "1px solid #c5c5c5",
                        "border-radius": "7px"
                      },
                      attrs: { readonly: "" }
                    })
                  ]
                : _vm._e()
            ],
        _vm._v(" "),
        _c(
          "v-btn",
          {
            staticClass: "d-inline-block  ",
            staticStyle: {
              "border-radius": "0px",
              "border-top-right-radius": "7px",
              position: "absolute",
              background: "rgba(27, 27, 30, 0.4)",
              right: "0%",
              "z-index": "879"
            },
            attrs: { icon: "", color: "#ffffff" },
            on: {
              click: function($event) {
                _vm.showFullLoader = true
              }
            }
          },
          [_c("v-icon", [_vm._v("las la-expand")])],
          1
        )
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6 offset-lg-3 px-2 mt-3 text-right" },
      [
        this.$root.selectedPost.project
          ? _c(
              "v-btn",
              {
                staticStyle: {
                  "text-transform": "none",
                  color: "white",
                  "font-size": "12px",
                  "font-family": "BodyFont"
                },
                attrs: { color: "#3C87CD", small: "" }
              },
              [
                _vm._v("View source "),
                _c("v-icon", { staticClass: "ml-1" }, [
                  _vm._v("mdi-launch mdi-18px")
                ])
              ],
              1
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-6 offset-lg-3 px-2 mt-3 text-left" }, [
      _c(
        "p",
        { staticStyle: { "font-size": "14px", "font-family": "BodyFont" } },
        [
          _vm._v(
            "\n            " +
              _vm._s(this.$root.selectedPost.description) +
              "\n         "
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-lg-6 offset-lg-3 px-2 px-md-3 scroller",
        staticStyle: {
          background: "#E1F0FC",
          "font-family": "BodyFont",
          "min-height": "200px",
          "max-height": "500px",
          "overflow-y": "auto",
          "overflow-x": "hidden"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-11 py-0 mt-2", attrs: { "elevation-1": "" } },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-9 col-md-10   d-flex flex-row" },
                  [
                    _c("div", {
                      staticStyle: {
                        "border-radius": "50%",
                        height: "30px",
                        width: "30px",
                        "background-color": "#c5c5c5",
                        "background-image": "url(/imgs/img2.jpg)",
                        "background-size": "cover",
                        "background-repeat": "no-repeat",
                        border: "1px solid transparent"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-card",
                      {
                        staticClass: "py-1 px-2 ml-2",
                        staticStyle: {
                          "max-width": "80%",
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
                            staticClass: "d-flex",
                            staticStyle: { "align-items": "center" }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "mr-1",
                                staticStyle: {
                                  "font-size": "13px",
                                  "font-weight": "bold"
                                }
                              },
                              [_vm._v("Bisola23")]
                            ),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "las la-award",
                              staticStyle: {
                                "font-size": "20px",
                                color: "#ef476f"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticStyle: { "font-size": "13px" } }, [
                          _vm._v("Lorem ipsum dolor sit amet consectetur ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right" }, [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "11px",
                                color: "grey"
                              }
                            },
                            [_vm._v("3:14 PM")]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(1)
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-11 py-0 offset-1",
              attrs: { "elevation-1": "" }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-9 col-md-10  offset-lg-3 offset-md-2 d-flex flex-row-reverse"
                  },
                  [
                    _c("div", {
                      staticStyle: {
                        "border-radius": "50%",
                        height: "30px",
                        width: "30px",
                        "background-color": "#c5c5c5",
                        "background-image": "url(/imgs/img3.jpg)",
                        "background-size": "cover",
                        "background-repeat": "no-repeat",
                        border: "1px solid transparent"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-card",
                      {
                        staticClass: "py-1 px-2 mr-2",
                        staticStyle: {
                          "max-width": "80%",
                          border: "1px solid transparent",
                          "min-width": "150px",
                          background: "#3C87CD",
                          "border-radius": "7px",
                          "border-bottom-right-radius": "0px"
                        },
                        attrs: { "elevation-1": "" }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: { color: "white", "font-size": "13px" }
                          },
                          [
                            _vm._v(
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right" }, [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                color: "white",
                                "font-size": "11px"
                              }
                            },
                            [_vm._v("3:14 PM")]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(2)
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-lg-6 offset-lg-3 px-2 py-1",
        staticStyle: {
          "z-index": "999999999999",
          background: "white",
          "font-family": "BodyFont"
        }
      },
      [
        _c("div", { staticClass: "row px-md-3 py-0" }, [
          _c(
            "div",
            {
              staticClass: "col-12 py-1 my-0 d-flex px-md-2 px-2 flex-row",
              staticStyle: {
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              _c(
                "v-btn",
                { staticClass: "mx-md-1", attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("las la-grin")])],
                1
              ),
              _vm._v(" "),
              _c("textarea", {
                ref: "textBottom",
                staticStyle: { "font-size": "13px" },
                attrs: { placeholder: "please,be nice" }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "mx-md-1", attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("las la-send")])],
                1
              )
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _vm.showFullLoader
      ? _c(
          "div",
          {
            staticStyle: {
              position: "fixed",
              "z-index": "999999999999999",
              height: "100%",
              width: "100%",
              top: "0",
              left: "0",
              background: "white"
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "d-flex flex-column",
                staticStyle: {
                  position: "absolute",
                  width: "100%",
                  height: "100%"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-12 px-0 py-0",
                    staticStyle: { height: "100%" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "col-12 px-1 py-1 pt-0  d-flex flex-row",
                        staticStyle: {
                          background: "white",
                          "border-bottom": "2px solid #c5c5c5",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: " mr-1 col-2 py-0 px-0" },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    _vm.showFullLoader = false
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
                        _c("div", { staticClass: "col-8 py-0 text-center" }, [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "14px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v(_vm._s(this.$root.selectedPost.title))]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    this.$root.selectedPost.link
                      ? [
                          _c("iframe", {
                            staticClass: "col-12 px-0 py-0",
                            staticStyle: {
                              height: "100%",
                              background: "white",
                              border: "1px solid #c5c5c5"
                            },
                            attrs: {
                              sandbox:
                                "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                              src: this.$root.selectedPost.project_url
                            }
                          })
                        ]
                      : [
                          _vm.pageContent == "" && _vm.loadingCode
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-12 d-flex ",
                                    staticStyle: {
                                      height: "100%",
                                      "align-items": "center",
                                      "justify-content": "center",
                                      background: "white",
                                      border: "1px solid #c5c5c5",
                                      "border-radius": "7px"
                                    }
                                  },
                                  [
                                    _c("v-progress-circular", {
                                      attrs: {
                                        color: "#3C87CD",
                                        indeterminate: "",
                                        width: "3",
                                        size: "28"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pageContent != "" &&
                          this.$root.selectedPost.project.is_web
                            ? [
                                _c("iframe", {
                                  staticClass: "col-12  px-0 py-0",
                                  staticStyle: {
                                    height: "100%",
                                    background: "white",
                                    border: "1px solid #c5c5c5"
                                  },
                                  attrs: {
                                    sandbox:
                                      "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
                                    srcdoc: _vm.pageContent
                                  }
                                })
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pageContent != "" &&
                          !this.$root.selectedPost.project.is_web
                            ? [
                                _c("textarea", {
                                  staticClass: "col-12",
                                  staticStyle: {
                                    "font-size": "14px",
                                    height: "100%",
                                    background: "white",
                                    border: "1px solid #c5c5c5"
                                  },
                                  attrs: { readonly: "" }
                                })
                              ]
                            : _vm._e()
                        ]
                  ],
                  2
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-lg-6 offset-lg-3 px-1 mt-1 ",
        staticStyle: { "border-bottom": "1px solid #c5c5c5" }
      },
      [
        _c(
          "div",
          { staticStyle: { "font-size": "16px", "font-family": "MediumFont" } },
          [_vm._v("Comments")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 py-0 d-flex",
        staticStyle: { "padding-left": "45px", "align-items": "center" }
      },
      [
        _c("span", { staticClass: "d-inline-block mx-1" }, [
          _c("i", {
            staticClass: "lar la-heart",
            staticStyle: { "font-size": "20px", color: "#3C87CD" }
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
            [_vm._v("231")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 text-right py-0",
        staticStyle: { "padding-right": "45px" }
      },
      [
        _c("span", { staticClass: "d-inline-block mx-1" }, [
          _c("i", {
            staticClass: "lar la-heart",
            staticStyle: { "font-size": "20px", color: "#3C87CD" }
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
            [_vm._v("231")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectView.vue?vue&type=template&id=529f7189&scoped=true& */ "./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&");
/* harmony import */ var _ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectView.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& */ "./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "529f7189",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/ProjectView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=style&index=0&id=529f7189&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_style_index_0_id_529f7189_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectView.vue?vue&type=template&id=529f7189&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/ProjectView.vue?vue&type=template&id=529f7189&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectView_vue_vue_type_template_id_529f7189_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);