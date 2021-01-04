(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PanelLoader"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelLoader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/PanelLoader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      Alert: false,
      that: this,
      alertMsg: '',
      pageContent: '',
      saveLoading: false,
      projectData: [],
      rating: 0,
      UserStar: [],
      userLoggedIn: false,
      recheckCodeBox: true
    };
  },
  components: {},
  mounted: function mounted() {
    this.runCode();
  },
  methods: {
    showShare: function showShare() {
      this.$root.shareText = 'Check out this project on CitonHub';
      this.$root.shareLink = 'https://www.citonhub.com/link/project/' + this.$route.params.project_slug + '/user';
      this.$root.showShare = true;
    },
    showFullPage: function showFullPage() {
      window.open('/run-panel/' + this.projectData.panel_id, '_blank');
    },
    showLogin: function showLogin() {
      this.$root.checkIfUserIsLoggedIn('space');
    },
    checkLogin: function checkLogin() {
      if (this.$root.user_temp_id == 0) {
        this.userLoggedIn = false;
      } else {
        this.userLoggedIn = true;
      }
    },
    showComments: function showComments() {
      this.$router.push({
        path: '/' + this.$route.params.project_slug + '/comments'
      });
    },
    showPanel: function showPanel() {
      this.$router.push({
        path: '/board/projects/panel/' + this.$route.params.project_slug + '/editor'
      });
    },
    showAlert: function showAlert(duration, text) {
      this.Alert = true;
      this.alertMsg = text;

      var _this = this;

      setTimeout(function () {
        _this.Alert = false;
      }, duration);
    },
    shortenContent: function shortenContent(content, limit) {
      if (content.length > limit) {
        var shortcontent = content.slice(0, limit);
        return shortcontent + '...';
      } else {
        return content;
      }
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    runCode: function runCode() {
      if (this.$root.projectData.project.is_web == 1) {
        this.loadPageContent();
      } else {
        this.pageContent = 'sending to sandbox...';
        this.runCodeOnSandbox();
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
      var _this2 = this;

      axios.post('/run-code-on-sandbox-project', {
        panel_id: this.$root.projectData.project_panel.panel_id
      }).then(function (response) {
        if (response.status == 200) {
          var token = response.data[0][0].token;

          if (response.data[0][0].status.description == 'Accepted') {
            _this2.pageContent = response.data[0][0].stdout;
          } else if (response.data[0][0].status.description == 'In Queue') {
            _this2.pageContent = 'In Queue...';

            _this2.checkResponse(token, response.data[1]);
          } else if (response.data[0][0].status.description == 'Processing') {
            _this2.pageContent = 'Processing...';

            _this2.checkResponse(token, response.data[1]);
          } else {
            _this2.pageContent = response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr;
          }
        }
      })["catch"](function (error) {
        _this2.pageContent = 'An issue occured,unable to run on sandbox...';
      });
    },
    loadPageContent: function loadPageContent() {
      var _this3 = this;

      axios.get('/run-panel/' + this.$root.projectData.project_panel.panel_id).then(function (response) {
        if (response.status == 200) {
          _this3.pageContent = response.data;
        }
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelLoader.vue?vue&type=template&id=0a467666&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/PanelLoader.vue?vue&type=template&id=0a467666& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { background: "transparent", "font-family": "BodyFont" } },
    [
      _vm.pageContent == ""
        ? _c(
            "div",
            {
              staticClass: " px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex",
              staticStyle: {
                border: "0",
                height: "80%",
                top: "5%",
                position: "absolute",
                left: "0",
                "z-index": "99999999999",
                "align-items": "center",
                "justify-content": "center"
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
        : _vm._e(),
      _vm._v(" "),
      _vm.that.$root.projectData.project.is_web
        ? _c("iframe", {
            staticClass: "col-12 mt-0  px-0 py-0",
            staticStyle: {
              position: "absolute",
              height: "100%",
              left: "0",
              top: "0",
              background: "white",
              border: "1px solid #c5c5c5",
              "border-radius": "0px"
            },
            attrs: {
              sandbox:
                "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
              srcdoc: _vm.pageContent
            }
          })
        : _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.pageContent,
                expression: "pageContent"
              }
            ],
            staticClass: "col-12 mt-0 mt-md-1",
            staticStyle: {
              "font-size": "14px",
              position: "absolute",
              top: "0",
              height: "100%",
              left: "0",
              background: "white",
              border: "1px solid #c5c5c5",
              "border-radius": "0px"
            },
            attrs: { readonly: "" },
            domProps: { value: _vm.pageContent },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.pageContent = $event.target.value
              }
            }
          }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "d-lg-inline-block d-none",
          staticStyle: {
            "z-index": "99999999",
            position: "absolute",
            bottom: "3%",
            right: "3%"
          },
          attrs: { medium: "", fab: "", color: "#3C87CD" },
          on: { click: _vm.showPanel }
        },
        [
          _c(
            "v-icon",
            { staticStyle: { "font-size": "25px", color: "white" } },
            [_vm._v("las la-code")]
          )
        ],
        1
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
            right: "3%"
          },
          attrs: { fab: "", color: "#3C87CD" },
          on: { click: _vm.showPanel }
        },
        [
          _c(
            "v-icon",
            { staticStyle: { "font-size": "24px", color: "white" } },
            [_vm._v("las la-code")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/PanelLoader.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/PanelLoader.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelLoader_vue_vue_type_template_id_0a467666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelLoader.vue?vue&type=template&id=0a467666& */ "./resources/js/components/projects/PanelLoader.vue?vue&type=template&id=0a467666&");
/* harmony import */ var _PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/PanelLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PanelLoader_vue_vue_type_template_id_0a467666___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PanelLoader_vue_vue_type_template_id_0a467666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/PanelLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/PanelLoader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/PanelLoader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/PanelLoader.vue?vue&type=template&id=0a467666&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/projects/PanelLoader.vue?vue&type=template&id=0a467666& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_template_id_0a467666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelLoader.vue?vue&type=template&id=0a467666& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/PanelLoader.vue?vue&type=template&id=0a467666&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_template_id_0a467666___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_template_id_0a467666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);