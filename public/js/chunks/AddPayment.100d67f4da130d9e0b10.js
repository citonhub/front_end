(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddPayment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      that: this,
      payment_option: '',
      loading: false
    };
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    selectPaymentOption: function selectPaymentOption(type) {
      this.payment_option = type;
      this.$root.baseChannelName = this.$root.selectedSpace.name;
      this.$root.payment_option = type;
      this.$root.showPaymentOptionBoard = true;
    },
    addPayment: function addPayment() {
      var _this = this;

      this.loading = true;
      var finalName = '';

      if (this.payment_option == 'subscription') {
        finalName = 'Subscription for ' + this.$root.selectedSpace.name;
      }

      if (this.payment_option == 'support') {
        finalName = 'Support for ' + this.$root.selectedSpace.name;
      }

      axios.post('/add-payment-space', {
        space_id: this.$root.selectedSpace.space_id,
        payment_option: this.payment_option,
        currency: this.$root.payment_currency,
        amount: this.$root.payment_amount,
        name: finalName,
        card_name: this.$root.payment_card_name,
        interval: this.$root.payment_interval
      }).then(function (response) {
        if (response.status == 200) {
          _this.loading = false;

          _this.$root.chatComponent.fetchSpaceInfo();

          _this.$root.chatComponent.showAlert('Added!', 'Payment option has been added', 'success');
        }
      })["catch"](function (error) {
        _this.$root.chatComponent.showAlert('Oops!', 'An error occured, please try again', 'error');

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/chats/AddPayment.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/AddPayment.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& */ "./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&");
/* harmony import */ var _AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPayment.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "80afaaf8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/AddPayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AddPayment.vue?vue&type=template&id=80afaaf8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPayment_vue_vue_type_template_id_80afaaf8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);