(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MoreOptionsPost"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/MoreOptions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/MoreOptions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['post', 'alertComponent', 'fromProfile'],
  data: function data() {
    return {
      loadingDelete: false
    };
  },
  methods: {
    share: function share() {
      this.$root.shareLink = 'https://www.citonhub.com/link/post/' + this.post.post_id;
      this.$root.shareText = 'Check out this project on Citonhub';
      this.$root.infoText = 'Share your project with others';
      this.$root.alertComponent = this.alertComponent;
      console.log(this.alertComponent);
      this.$root.showInvitation = true;
    },
    deletePost: function deletePost() {
      var _this = this;

      if (this.loadingDelete) return;
      this.loadingDelete = true;
      axios.post('/delete-hub-post', {
        id: this.post.id
      }).then(function (response) {
        if (response.status == 200) {
          var remainingPost = [];

          if (_this.fromProfile) {
            remainingPost = _this.alertComponent.userProjects.filter(function (eachPost) {
              return eachPost.id != _this.post.id;
            });
            _this.alertComponent.userProjects = remainingPost;
          } else {
            remainingPost = _this.alertComponent.posts.filter(function (eachPost) {
              return eachPost.id != _this.post.id;
            });
            _this.alertComponent.posts = remainingPost;

            var remainingPostSearch = _this.alertComponent.postsSearch.filter(function (eachPost) {
              return eachPost.id != _this.post.id;
            });

            _this.alertComponent.postsSearch = remainingPostSearch;
          }
        }
      })["catch"](function (error) {
        _this.loadingDelete = false;

        _this.alertComponent.showAlert('Oops!', 'Something went wrong', 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true& ***!
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
    "v-card",
    { staticClass: "py-0 px-0", staticStyle: { width: "auto" } },
    [
      _c(
        "div",
        { staticClass: "col-12 px-0 py-1 d-flex flex-column" },
        [
          _c(
            "v-card",
            {
              staticClass: "px-2 py-2 d-flex flex-row",
              staticStyle: { "align-items": "center" },
              attrs: { tile: "", flat: "" },
              on: { click: _vm.share }
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [
                _vm._v("mdi mdi-share-variant")
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "BodyFont",
                    "font-size": "13px",
                    color: "grey"
                  }
                },
                [_vm._v("Share")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.post.user.tempId == this.$root.user_temp_id
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "", loading: _vm.loadingDelete },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.deletePost()
                    }
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-trash")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "BodyFont",
                        "font-size": "13px",
                        color: "grey"
                      }
                    },
                    [_vm._v("Delete")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Hub/MoreOptions.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Hub/MoreOptions.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreOptions_vue_vue_type_template_id_3a51ef98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true& */ "./resources/js/components/Hub/MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true&");
/* harmony import */ var _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoreOptions_vue_vue_type_template_id_3a51ef98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoreOptions_vue_vue_type_template_id_3a51ef98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a51ef98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/MoreOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/MoreOptions.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Hub/MoreOptions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Hub/MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_3a51ef98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/MoreOptions.vue?vue&type=template&id=3a51ef98&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_3a51ef98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_3a51ef98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);