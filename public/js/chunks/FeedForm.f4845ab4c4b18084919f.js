(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FeedForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback/FeedbackForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Feedback/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      feedback: '',
      loading: false
    };
  },
  methods: {
    sendFeedback: function sendFeedback() {
      var _this = this;

      axios.post('/send-feedback', {
        message: this.feedback
      }).then(function (response) {
        if (response.status == 200) {
          _this.showAlert('Thanks!', 'You message has been sent', 'success');

          _this.loading = false;
        }
      })["catch"](function (error) {
        _this.showAlert('Oops!', 'Something went wrong, please try again', 'error');

        _this.loading = false;
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
          timeout: 2000,
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
          timeout: 2000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          timeout: 2000,
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
          timeout: 2000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback/FeedbackForm.vue?vue&type=template&id=11b48d10&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Feedback/FeedbackForm.vue?vue&type=template&id=11b48d10& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "top",
      staticStyle: { background: "transparent", "font-family": "BodyFont" }
    },
    [
      _c("div", { staticClass: "col-12 mt-5" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "feed-header col-md-8 offset-md-2 mt-4  ",
          staticStyle: { color: "#3C87CD" }
        },
        [
          _c(
            "h1",
            {
              staticClass: "text-center",
              staticStyle: { "font-size": "17px" }
            },
            [_vm._v(" We would love to hear from you!")]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "text-center mt-4",
              staticStyle: {
                color: "grey",
                "font-size": "14px",
                "font-family": "BodyFont"
              }
            },
            [_vm._v("Please help us with feedback to improve citonhub.")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                " form-group col-lg-8 offset-lg-2 col-sm-8 offset-sm-2 "
            },
            [
              _c("v-textarea", {
                staticStyle: { "font-size": "13px" },
                attrs: {
                  clearable: "",
                  "clear-icon": "las la-times-circle",
                  filled: "",
                  color: "#3C87CD",
                  label: "Your message",
                  "auto-grow": ""
                },
                model: {
                  value: _vm.feedback,
                  callback: function($$v) {
                    _vm.feedback = $$v
                  },
                  expression: "feedback"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 pt-0 mt-n2 text-center" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-2 d-inline-block",
                  staticStyle: {
                    color: "white",
                    "text-transform": "normal",
                    "font-family": "BodyFont",
                    "font-size": "11px"
                  },
                  attrs: {
                    small: "",
                    loading: _vm.loading,
                    disabled: _vm.feedback == "",
                    color: "#3C87CD"
                  },
                  on: {
                    click: function($event) {
                      return _vm.sendFeedback()
                    }
                  }
                },
                [_vm._v("Send")]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Feedback/FeedbackForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Feedback/FeedbackForm.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeedbackForm_vue_vue_type_template_id_11b48d10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=template&id=11b48d10& */ "./resources/js/components/Feedback/FeedbackForm.vue?vue&type=template&id=11b48d10&");
/* harmony import */ var _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Feedback/FeedbackForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeedbackForm_vue_vue_type_template_id_11b48d10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeedbackForm_vue_vue_type_template_id_11b48d10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Feedback/FeedbackForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Feedback/FeedbackForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Feedback/FeedbackForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback/FeedbackForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Feedback/FeedbackForm.vue?vue&type=template&id=11b48d10&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Feedback/FeedbackForm.vue?vue&type=template&id=11b48d10& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_11b48d10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeedbackForm.vue?vue&type=template&id=11b48d10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Feedback/FeedbackForm.vue?vue&type=template&id=11b48d10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_11b48d10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeedbackForm_vue_vue_type_template_id_11b48d10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);