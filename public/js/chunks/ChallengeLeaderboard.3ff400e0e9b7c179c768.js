(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChallengeLeaderboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Leaderboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Leaderboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      participants: [],
      that: this
    };
  },
  mounted: function mounted() {
    this.fetchParticipant();
  },
  methods: {
    sortArray: function sortArray(arrayValue) {
      arrayValue.sort(function (a, b) {
        return b.stars - a.stars;
      });
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/thumbnails/' + imgLink + ');';
        return _styleString;
      }
    },
    fetchParticipant: function fetchParticipant() {
      var _this = this;

      axios.get('/fetch-participants/' + this.$route.params.challenge_id).then(function (response) {
        if (response.status == 200) {
          _this.$root.selectedChallenge.duel_participants = response.data.participants;

          _this.$root.selectedChallenge.duel_participants.sort(function (a, b) {
            return b.stars - a.stars;
          });
        } else {
          console.log(response.status);
        }
      })["catch"](function (error) {});
    },
    goToProfile: function goToProfile(user) {
      this.$root.selectedUsername = user.username;
      this.$router.push({
        path: '/profile/' + user.username
      });
    },
    checkIfAdmin: function checkIfAdmin(source) {
      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == source.user_id && members.is_admin;
      });

      if (userMemberData.length != 0) {
        return true;
      } else {
        return false;
      }
    },
    getUserLevel: function getUserLevel(points) {
      var imageUrl = '';

      if (points >= 0 && points <= 99) {
        imageUrl += '/imgs/steel.svg';
      } else if (points >= 100 && points <= 299) {
        imageUrl += '/imgs/bronze.svg';
      } else if (points >= 300 && points <= 599) {
        imageUrl += '/imgs/silver.svg';
      } else if (points >= 600 && points <= 999) {
        imageUrl += '/imgs/gold.svg';
      } else if (points >= 1000 && points <= 1499) {
        imageUrl += '/imgs/platinum.svg';
      } else if (points >= 1500 && points <= 9999) {
        imageUrl += '/imgs/diamond.svg';
      }

      return imageUrl;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "col-lg-10 offset-lg-1 px-md-2 px-1" },
      [
        _vm._l(this.$root.selectedChallenge.duel_participants, function(
          user,
          index
        ) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "col-12 py-0 d-flex flex-row pr-0",
              staticStyle: { "align-items": "center", background: "#F3F8FC" },
              on: {
                click: function($event) {
                  return _vm.goToProfile(user)
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "mr-2 d-flex",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [_c("div", { style: _vm.imageStyleUser(40, user) })]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "py-3 d-flex flex-row",
                  staticStyle: {
                    "border-bottom": "1px solid #c5c5c5",
                    width: "100%",
                    "align-items": "center"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "col-8 py-0 px-0 d-flex flex-row",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "mr-1",
                          staticStyle: {
                            "font-size": "13px",
                            "font-family": "BodyFont"
                          }
                        },
                        [_vm._v(_vm._s(user.username) + " ")]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "mx-1",
                        attrs: {
                          src: _vm.getUserLevel(user.points),
                          height: "22px"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-4 py-0 px-0 d-flex pt-1 pr-2 flex-row-reverse",
                      staticStyle: { "align-items": "center" }
                    },
                    [
                      _c("div", { staticStyle: { "font-size": "12px" } }, [
                        _vm._v(_vm._s(user.stars))
                      ]),
                      _vm._v(" "),
                      _vm._m(0, true)
                    ]
                  )
                ]
              )
            ]
          )
        }),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 py-5 my-2" })
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
    return _c("div", { staticClass: "mr-1" }, [
      _c("i", {
        staticClass: "las la-trophy",
        staticStyle: { "font-size": "20px", color: "gray" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/Leaderboard.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/challenges/Leaderboard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Leaderboard_vue_vue_type_template_id_2d6c9149_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true& */ "./resources/js/components/challenges/Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true&");
/* harmony import */ var _Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leaderboard.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/Leaderboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Leaderboard_vue_vue_type_template_id_2d6c9149_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Leaderboard_vue_vue_type_template_id_2d6c9149_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d6c9149",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/Leaderboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/Leaderboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/challenges/Leaderboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Leaderboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Leaderboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_template_id_2d6c9149_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Leaderboard.vue?vue&type=template&id=2d6c9149&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_template_id_2d6c9149_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_template_id_2d6c9149_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);