(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MentorInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['alertComponent'],
  data: function data() {
    return {
      that: this,
      nextLevel: '',
      presentLevel: '',
      remainingPoints: 0,
      loadingmakeMentor: false,
      languages: []
    };
  },
  mounted: function mounted() {},
  methods: {
    shareProject: function shareProject() {
      this.$root.componentIsLoading = true;
      this.$root.autoOpenAddPost = true;
      this.$router.push({
        path: '/hub'
      });
    },
    calculateLevel: function calculateLevel(point) {
      this.nextLevel = '';
      this.remainingPoints = 0;

      if (point >= 50 && point <= 99) {
        this.nextLevel = 'Bronze developer';
        this.remainingPoints = 100 - point;
        this.presentLevel = 'Steel';
      } else if (point >= 100 && point <= 199) {
        this.presentLevel = 'Bronze developer';
        this.nextLevel = 'Silver developer';
        this.remainingPoints = 200 - point;
      } else if (point >= 200 && point <= 299) {
        this.presentLevel = 'Silver developer';
        this.nextLevel = 'Gold developer';
        this.remainingPoints = 300 - point;
      } else if (point >= 300 && point <= 399) {
        this.presentLevel = 'Gold developer';
        this.nextLevel = 'Platinum developer';
        this.remainingPoints = 400 - point;
      } else if (point >= 400 && point <= 499) {
        this.presentLevel = 'Platinum developer';
        this.nextLevel = 'Diamond developer';
        this.remainingPoints = 500 - point;
      } else if (point >= 500 && point <= 599) {
        this.nextLevel = 'Diamond developer';
        this.presentLevel = 'Diamond developer';
        this.remainingPoints = 500 - point;
      }

      return [this.nextLevel, this.remainingPoints];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      staticClass:
        "col-lg-4  py-3 d-flex flex-column col-md-8 px-1 application application--light",
      staticStyle: { "align-items": "center", "justify-content": "center" },
      attrs: { "data-app": "true" }
    },
    [
      _c("div", { staticClass: "d-flex flex-row py-0 col-12 " }, [
        _c("div", { staticClass: "col-8 py-1 text-left px-1" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-4 py-1 text-right px-0" },
          [
            _c(
              "v-btn",
              {
                staticStyle: { "font-family": "BodyFont", "font-size": "11px" },
                attrs: { "x-small": "", text: "" },
                on: {
                  click: function($event) {
                    _vm.that.$root.showMentorInfo = false
                  }
                }
              },
              [_vm._v("Close")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "mb-3 px-1",
          staticStyle: {
            "font-size": "13px",
            color: "gray",
            "font-family": "BodyFont"
          }
        },
        [
          _vm._v(
            "\n                  \n                  \n                 Hey "
          ),
          _c(
            "span",
            {
              staticStyle: {
                "font-family": "MediumFont",
                "text-transform": "capitalize"
              }
            },
            [_vm._v(_vm._s(_vm.that.$root.authProfile.name))]
          ),
          _vm._v(", welcome to CitonHub! "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(
            "\n                 \n                We believe we can improve the way developers mentor and get mentored on the internet. Join us,\n\n\n\n                  "
          ),
          _c("div", { staticClass: "col-12 py-1 px-1 mt-3" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-6 py-1 px-1 " },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2 d-inline-block",
                      staticStyle: {
                        color: "white",
                        "font-family": "BodyFont",
                        "font-size": "11px"
                      },
                      attrs: { small: "", color: "#3C87CD", rounded: "" },
                      on: { click: _vm.shareProject }
                    },
                    [_vm._v("Find a mentor")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-6 py-1 px-1 " },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2 d-inline-block",
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "11px"
                      },
                      attrs: {
                        small: "",
                        color: "#3C87CD",
                        outlined: "",
                        rounded: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.that.$root.showPointDetailsInfo = true
                        }
                      }
                    },
                    [_vm._v("Become a mentor")]
                  )
                ],
                1
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/MentorInfo.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/MentorInfo.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& */ "./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&");
/* harmony import */ var _MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MentorInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "024fef6e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/MentorInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MentorInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/MentorInfo.vue?vue&type=template&id=024fef6e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MentorInfo_vue_vue_type_template_id_024fef6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);