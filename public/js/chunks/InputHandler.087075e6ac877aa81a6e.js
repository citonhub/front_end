(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["InputHandler"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/InputHandler.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/InputHandler.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      that: this
    };
  },
  methods: {
    closeModal: function closeModal() {
      this.$root.showProjectInput = false;
    },
    preventDefault: function preventDefault() {},
    SendToSandBox: function SendToSandBox() {
      var _this = this;

      var codeContent = '';

      if (this.$router.currentRoute.path.indexOf('channel') >= 0) {
        codeContent = this.$root.codeboxComponent.code;
      }

      if (this.$router.currentRoute.path.indexOf('panel-loader') >= 0) {
        codeContent = this.$root.projectData.project_files.code_files[0].content;
      }

      if (this.$router.currentRoute.path.indexOf('challenges') >= 0) {
        codeContent = this.$root.panelLoaderProject.participantSelected.main_file_content;
      }

      if (this.$router.currentRoute.path.indexOf('hub') >= 0) {
        codeContent = this.$root.selectedPost.project.project_files.code_files[0].content;
      }

      var finalContent = '';
      this.$root.projectInputData.forEach(function (input) {
        if (_this.$root.selectedLanguageId == '39' || _this.$root.selectedLanguageId == '100' || _this.$root.selectedLanguageId == '38') {
          var inputText = "input\\(\\'" + input.name + "\\'\\)";
          var inputText2 = 'input\\(\\"' + input.name + '\\"\\)';
          var inputRegex = new RegExp(inputText, 'g');
          var inputRegex2 = new RegExp(inputText2, 'g');
          finalContent = codeContent.replace(inputRegex, "\"" + input.value + "\"");
          finalContent = finalContent.replace(inputRegex2, "\"" + input.value + "\"");
        }

        if (_this.$root.selectedLanguageId == '11') {
          var _inputText = "cin >> " + input.name + ';';

          var _ = __webpack_require__(/*! regexgen.js */ "./node_modules/regexgen.js/index.js");

          var regex = _(_.capture(_inputText));

          console.log(regex);
          finalContent = codeContent.replace(regex, input.name + ' = ' + input.value + ';');
        }
      });

      if (this.$router.currentRoute.path.indexOf('channel') >= 0) {
        this.$root.codeboxComponent.runCodeOnSandbox(finalContent);
        this.$root.codeboxComponent.ResultCode = 'sending to sandbox...';
      }

      if (this.$router.currentRoute.path.indexOf('panel-loader') >= 0) {
        this.$root.panelLoaderProject.runCodeOnSandbox(finalContent);
        this.$root.panelLoaderProject.pageContent = 'sending to sandbox...';
      }

      if (this.$router.currentRoute.path.indexOf('challenges') >= 0) {
        this.$root.panelLoaderProject.runCodeOnSandbox(finalContent);
        this.$root.panelLoaderProject.pageContent = 'sending to sandbox...';
      }

      if (this.$router.currentRoute.path.indexOf('hub') >= 0) {
        this.$root.projectViewComponent.runCodeOnSandbox(finalContent);
        this.$root.projectViewComponent.pageContent = 'sending to sandbox...';
      }

      this.closeModal();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/InputHandler.vue?vue&type=template&id=320dc00c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/InputHandler.vue?vue&type=template&id=320dc00c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.preventDefault($event)
        }
      }
    },
    [
      _c(
        "v-card",
        {
          staticClass:
            "col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light",
          attrs: { "data-app": "true" }
        },
        [
          _c(
            "div",
            {
              staticClass: "d-flex flex-row px-1 py-2",
              staticStyle: {
                "border-bottom": "1px solid #c5c5c5",
                "border-radius": "0px",
                "align-items": "center"
              }
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    "font-family": "HeaderFont",
                    "font-size": "14px"
                  }
                },
                [_vm._v("This program needs input")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ml-auto ",
                  staticStyle: { background: "#3C87CD" },
                  attrs: { small: "", icon: "", color: "#ffffff" },
                  on: { click: _vm.closeModal }
                },
                [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.that.$root.projectInputData, function(input, index) {
            return _c(
              "div",
              { key: index },
              [
                _c(
                  "div",
                  {
                    staticClass: "mt-2",
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont"
                    }
                  },
                  [_vm._v(_vm._s(input.name))]
                ),
                _vm._v(" "),
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    autofocus: "",
                    dense: "",
                    outlined: "",
                    color: "#3C87CD"
                  },
                  model: {
                    value: input.value,
                    callback: function($$v) {
                      _vm.$set(input, "value", $$v)
                    },
                    expression: "input.value"
                  }
                })
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 text-center pb-2 py-0" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-2 ",
                  staticStyle: {
                    color: "white",
                    "font-family": "BodyFont",
                    "font-size": "11px"
                  },
                  attrs: { small: "", color: "#3C87CD" },
                  on: { click: _vm.SendToSandBox }
                },
                [_vm._v("Send")]
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/InputHandler.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/projects/InputHandler.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputHandler_vue_vue_type_template_id_320dc00c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputHandler.vue?vue&type=template&id=320dc00c&scoped=true& */ "./resources/js/components/projects/InputHandler.vue?vue&type=template&id=320dc00c&scoped=true&");
/* harmony import */ var _InputHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputHandler.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/InputHandler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputHandler_vue_vue_type_template_id_320dc00c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputHandler_vue_vue_type_template_id_320dc00c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "320dc00c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/InputHandler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/InputHandler.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/InputHandler.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputHandler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/InputHandler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputHandler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/InputHandler.vue?vue&type=template&id=320dc00c&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/projects/InputHandler.vue?vue&type=template&id=320dc00c&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputHandler_vue_vue_type_template_id_320dc00c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputHandler.vue?vue&type=template&id=320dc00c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/InputHandler.vue?vue&type=template&id=320dc00c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputHandler_vue_vue_type_template_id_320dc00c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputHandler_vue_vue_type_template_id_320dc00c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);