(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DiaryBank"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/bank.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      Diaries: [],
      loadingDiary: false,
      loadingSearchDairy: false
    };
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
    this.$root.diaryBankComponent = this;
    this.fetchDiaryBank();
  },
  methods: {
    goToDiaryList: function goToDiaryList() {
      this.$router.push({
        path: '/board/diary/list'
      });
    },
    viewDiary: function viewDiary(diary) {
      if (this.$root.sideBarComponent) {
        this.$root.sideBarComponent.selectedTab = 'channels';
      }

      this.$root.comingFromDiaryBank = true;
      this.$root.autoOpenDiary = true;
      this.$root.tempDiaryId = diary.bot_id;
      this.$router.push({
        path: '/channels'
      });
    },
    getDiaryContent: function getDiaryContent(diary) {
      this.$router.push({
        path: '/board/diary/board/' + diary.bot_id + '/content'
      });
    },
    imageStyle: function imageStyle(size, data) {
      if (data.background_color == null) {
        var styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:3px;background-repeat: no-repeat;border:1px solid #c5c5c5; ";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:3px;background-repeat: no-repeat; border:1px solid #c5c5c5;";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/thumbnails/' + imgLink + ');';
        return _styleString;
      }
    },
    checkForNewDiary: function checkForNewDiary() {
      var _this = this;

      axios.get('/get-diary-bank').then(function (response) {
        if (response.status == 200) {
          _this.$root.LocalStore('user_diary_bank_' + _this.$root.username, response.data.diaries);

          _this.$root.diaryBankList = response.data.diaries;

          _this.$root.diaryBankList.sort(function (a, b) {
            return b.followers - a.followers;
          });
        }
      })["catch"](function (error) {});
    },
    fetchDiaryBank: function fetchDiaryBank() {
      var _this2 = this;

      this.loadingDiary = true;
      var storedDiary = this.$root.getLocalStore('user_diary_bank_' + this.$root.username);
      storedDiary.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this2.$root.diaryBankList = finalResult;

          _this2.$root.diaryBankList.sort(function (a, b) {
            return b.followers - a.followers;
          });

          _this2.loadingDiary = false;

          _this2.checkForNewDiary();
        } else {
          axios.get('/get-diary-bank').then(function (response) {
            if (response.status == 200) {
              _this2.$root.LocalStore('user_diary_bank_' + _this2.$root.username, response.data.diaries);

              _this2.$root.diaryBankList = response.data.diaries;

              _this2.$root.diaryBankList.sort(function (a, b) {
                return b.followers - a.followers;
              });

              _this2.loadingDiary = false;
            }
          })["catch"](function (error) {
            _this2.loadingDiary = false;
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.challengeBox[data-v-4e59f193]{\n  background:#ffffff !important;\n  cursor: pointer;\n}\n.challengeBox[data-v-4e59f193]:hover{\n  background:transparent !important;\n  cursor: pointer;\n}\n \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=template&id=4e59f193&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/bank.vue?vue&type=template&id=4e59f193&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1 mb-0  px-2 d-md-block d-none fixed-top",
          staticStyle: {
            position: "sticky",
            background: "#F5F5FB",
            "z-index": "999999999999",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6  py-0 my-0 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: { small: "", rounded: "", color: "#3C87CD" },
                    on: {
                      click: function($event) {
                        return _vm.goToDiaryList()
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "white",
                          "text-transform": "none"
                        }
                      },
                      [_vm._v("My diaries")]
                    )
                  ]
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
          staticClass: "d-md-none d-inline-block",
          staticStyle: {
            "z-index": "99999999",
            position: "fixed",
            bottom: "3%",
            right: "3%"
          },
          attrs: { medium: "", rounded: "", color: "#3C87CD" },
          on: {
            click: function($event) {
              return _vm.goToDiaryList()
            }
          }
        },
        [
          _c(
            "v-icon",
            {
              staticStyle: { "font-size": "20px" },
              attrs: { color: "#ffffff" }
            },
            [_vm._v("mdi-book-multiple-outline")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "mr-1",
              staticStyle: {
                "font-size": "12px",
                color: "white",
                "text-transform": "none",
                "font-family": "MediumFont"
              }
            },
            [_vm._v("My diaries")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-10 offset-lg-1 py-0 pb-2 px-2 " }, [
        _c(
          "div",
          { staticClass: "row " },
          [
            _c("div", { staticClass: "col-12 mt-5 mt-md-0 d-md-none d-block" }),
            _vm._v(" "),
            this.$root.TopBarComponentBoard
              ? [
                  this.$root.TopBarComponentBoard.searchContent.length > 0
                    ? [
                        _vm.loadingSearchDairy
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
                          : _vm._l(this.$root.diaryBankSearchList, function(
                              diary
                            ) {
                              return _c(
                                "div",
                                {
                                  key: diary.id + "search",
                                  staticClass:
                                    "col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2"
                                },
                                [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "py-0 px-2 pl-1",
                                      staticStyle: { "border-radius": "7px" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            " py-0 my-0 d-flex flex-row",
                                          staticStyle: {
                                            width: "100%",
                                            "align-items": "center",
                                            height: "auto",
                                            "justify-content": "center"
                                          }
                                        },
                                        [
                                          _c("div", {
                                            staticClass: " mr-2 py-3",
                                            style: _vm.imageStyle(45, diary)
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "px-0 py-3",
                                              staticStyle: { width: "85%" }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex flex-row flex-wrap",
                                                  staticStyle: {
                                                    "align-items": "center"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "px-0 py-0 my-0 col-12 d-flex flex-row",
                                                      staticStyle: {
                                                        "align-items": "center"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticStyle: {
                                                            "font-size": "14px",
                                                            "font-family":
                                                              "BodyFont",
                                                            "white-space":
                                                              "nowrap",
                                                            overflow: "hidden",
                                                            "text-overflow":
                                                              "ellipsis"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(diary.name)
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex flex-row ml-auto",
                                                          staticStyle: {
                                                            "align-items":
                                                              "center"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "mr-1",
                                                              staticStyle: {
                                                                "font-size":
                                                                  "10px"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                  " +
                                                                  _vm._s(
                                                                    diary.views
                                                                  ) +
                                                                  "\n                                                "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "19px"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "las la-eye"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "mx-1",
                                                              staticStyle: {
                                                                "font-size":
                                                                  "10px"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                   " +
                                                                  _vm._s(
                                                                    diary.followers
                                                                  ) +
                                                                  "\n                                                "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "19px"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "las la-user-friends"
                                                              )
                                                            ]
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
                                                      staticClass:
                                                        " d-flex flex-row ",
                                                      staticStyle: {
                                                        "align-items": "center",
                                                        width: "100%"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " px-0 py-0 my-0 pr-1  ",
                                                          staticStyle: {
                                                            width: "100%",
                                                            "white-space":
                                                              "nowrap",
                                                            overflow: "hidden",
                                                            "text-overflow":
                                                              "ellipsis",
                                                            "font-size": "13px",
                                                            color: "grey",
                                                            "font-family":
                                                              "BodyFont"
                                                          }
                                                        },
                                                        [
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                diary.description
                                                              )
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " px-1 py-1  ml-auto "
                                                        },
                                                        [
                                                          diary.following ==
                                                          true
                                                            ? _c(
                                                                "v-btn",
                                                                {
                                                                  staticClass:
                                                                    "ml-1 d-inline-block",
                                                                  staticStyle: {
                                                                    "text-transform":
                                                                      "capitalize",
                                                                    "font-family":
                                                                      "BodyFont",
                                                                    "font-size":
                                                                      "12px"
                                                                  },
                                                                  attrs: {
                                                                    "x-small":
                                                                      "",
                                                                    outlined:
                                                                      "",
                                                                    color:
                                                                      "#3C87CD",
                                                                    rounded: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.viewDiary(
                                                                        diary
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "following"
                                                                  )
                                                                ]
                                                              )
                                                            : _c(
                                                                "v-btn",
                                                                {
                                                                  staticClass:
                                                                    "ml-1 d-inline-block",
                                                                  staticStyle: {
                                                                    "text-transform":
                                                                      "capitalize",
                                                                    "font-family":
                                                                      "BodyFont",
                                                                    "font-size":
                                                                      "12px"
                                                                  },
                                                                  attrs: {
                                                                    "x-small":
                                                                      "",
                                                                    outlined:
                                                                      "",
                                                                    color:
                                                                      "#3C87CD",
                                                                    rounded: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.viewDiary(
                                                                        diary
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "follow"
                                                                  )
                                                                ]
                                                              )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            })
                      ]
                    : [
                        _vm.loadingDiary
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
                              this.$root.diaryBankList.length == 0
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-md-6 offset-md-3 px-md-4 py-1 px-2 mt-3 mt-md-5 text-center d-flex flex-column "
                                      },
                                      [
                                        _vm._m(1),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass:
                                                  "mx-2 d-inline-block",
                                                staticStyle: {
                                                  color: "white",
                                                  "text-transform": "none",
                                                  "font-family": "BodyFont",
                                                  "font-size": "11px"
                                                },
                                                attrs: {
                                                  small: "",
                                                  color: "#3C87CD",
                                                  rounded: ""
                                                },
                                                on: { click: _vm.createDiary }
                                              },
                                              [_vm._v("Create a diary")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._l(this.$root.diaryBankList, function(
                                    diary
                                  ) {
                                    return _c(
                                      "div",
                                      {
                                        key: diary.id,
                                        staticClass:
                                          "col-lg-4 col-md-6 px-2 mb-1 py-1 pt-0 mt-md-2"
                                      },
                                      [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "py-0 px-2 pl-1",
                                            staticStyle: {
                                              "border-radius": "7px"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  " py-0 my-0 d-flex flex-row",
                                                staticStyle: {
                                                  width: "100%",
                                                  "align-items": "center",
                                                  height: "auto",
                                                  "justify-content": "center"
                                                }
                                              },
                                              [
                                                _c("div", {
                                                  staticClass: " mr-2 py-3",
                                                  style: _vm.imageStyle(
                                                    45,
                                                    diary
                                                  )
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-0 py-3",
                                                    staticStyle: {
                                                      width: "85%"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex flex-row flex-wrap",
                                                        staticStyle: {
                                                          "align-items":
                                                            "center"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "px-0 py-0 my-0 col-12 d-flex flex-row",
                                                            staticStyle: {
                                                              "align-items":
                                                                "center"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticStyle: {
                                                                  "font-size":
                                                                    "14px",
                                                                  "font-family":
                                                                    "BodyFont",
                                                                  "white-space":
                                                                    "nowrap",
                                                                  overflow:
                                                                    "hidden",
                                                                  "text-overflow":
                                                                    "ellipsis"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    diary.name
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex flex-row ml-auto",
                                                                staticStyle: {
                                                                  "align-items":
                                                                    "center"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "mr-1",
                                                                    staticStyle: {
                                                                      "font-size":
                                                                        "10px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                  " +
                                                                        _vm._s(
                                                                          diary.views
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    staticStyle: {
                                                                      "font-size":
                                                                        "19px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "las la-eye"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "mx-1",
                                                                    staticStyle: {
                                                                      "font-size":
                                                                        "10px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                   " +
                                                                        _vm._s(
                                                                          diary.followers
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    staticStyle: {
                                                                      "font-size":
                                                                        "19px"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "las la-user-friends"
                                                                    )
                                                                  ]
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
                                                            staticClass:
                                                              " d-flex flex-row ",
                                                            staticStyle: {
                                                              "align-items":
                                                                "center",
                                                              width: "100%"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  " px-0 py-0 my-0 pr-1  ",
                                                                staticStyle: {
                                                                  width: "100%",
                                                                  "white-space":
                                                                    "nowrap",
                                                                  overflow:
                                                                    "hidden",
                                                                  "text-overflow":
                                                                    "ellipsis",
                                                                  "font-size":
                                                                    "13px",
                                                                  color: "grey",
                                                                  "font-family":
                                                                    "BodyFont"
                                                                }
                                                              },
                                                              [
                                                                _c("span", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      diary.description
                                                                    )
                                                                  )
                                                                ])
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  " px-1 py-1  ml-auto "
                                                              },
                                                              [
                                                                diary.following ==
                                                                true
                                                                  ? _c(
                                                                      "v-btn",
                                                                      {
                                                                        staticClass:
                                                                          "ml-1 d-inline-block",
                                                                        staticStyle: {
                                                                          "text-transform":
                                                                            "capitalize",
                                                                          "font-family":
                                                                            "BodyFont",
                                                                          "font-size":
                                                                            "12px"
                                                                        },
                                                                        attrs: {
                                                                          "x-small":
                                                                            "",
                                                                          outlined:
                                                                            "",
                                                                          color:
                                                                            "#3C87CD",
                                                                          rounded:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.viewDiary(
                                                                              diary
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "following"
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _c(
                                                                      "v-btn",
                                                                      {
                                                                        staticClass:
                                                                          "ml-1 d-inline-block",
                                                                        staticStyle: {
                                                                          "text-transform":
                                                                            "capitalize",
                                                                          "font-family":
                                                                            "BodyFont",
                                                                          "font-size":
                                                                            "12px"
                                                                        },
                                                                        attrs: {
                                                                          "x-small":
                                                                            "",
                                                                          outlined:
                                                                            "",
                                                                          color:
                                                                            "#3C87CD",
                                                                          rounded:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.viewDiary(
                                                                              diary
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "follow"
                                                                        )
                                                                      ]
                                                                    )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  })
                            ]
                      ]
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 py-5 my-5" })
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 py-0 my-0" }, [
      _c("h5", [_vm._v("Discover diaries")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "mb-3 px-3",
        staticStyle: {
          "font-size": "13px",
          color: "black",
          "font-family": "BodyFont"
        }
      },
      [
        _vm._v("\n                    Document "),
        _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
          _vm._v("how you learn ")
        ]),
        _vm._v(" , "),
        _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
          _vm._v("what you learn")
        ]),
        _vm._v(" and "),
        _c("span", { staticStyle: { "font-family": "MediumFont" } }, [
          _vm._v("share them with others")
        ]),
        _vm._v(
          ". You can help others improve, by sharing what you know!\n                    "
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/diary/bank.vue":
/*!************************************************!*\
  !*** ./resources/js/components/diary/bank.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bank_vue_vue_type_template_id_4e59f193_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank.vue?vue&type=template&id=4e59f193&scoped=true& */ "./resources/js/components/diary/bank.vue?vue&type=template&id=4e59f193&scoped=true&");
/* harmony import */ var _bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank.vue?vue&type=script&lang=js& */ "./resources/js/components/diary/bank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bank_vue_vue_type_style_index_0_id_4e59f193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css& */ "./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bank_vue_vue_type_template_id_4e59f193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bank_vue_vue_type_template_id_4e59f193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e59f193",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/diary/bank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/diary/bank.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/diary/bank.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./bank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_style_index_0_id_4e59f193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=style&index=0&id=4e59f193&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_style_index_0_id_4e59f193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_style_index_0_id_4e59f193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_style_index_0_id_4e59f193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_style_index_0_id_4e59f193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_style_index_0_id_4e59f193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/diary/bank.vue?vue&type=template&id=4e59f193&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/diary/bank.vue?vue&type=template&id=4e59f193&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_template_id_4e59f193_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./bank.vue?vue&type=template&id=4e59f193&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/bank.vue?vue&type=template&id=4e59f193&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_template_id_4e59f193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_vue_vue_type_template_id_4e59f193_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);