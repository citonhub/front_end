(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contribute"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/contributors.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/contributors.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: ['Yusuf', 'Maryam'],
      incall: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/projectDisplay.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/projectDisplay.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
    this.$root.panelLoaderProject = this;
  },
  methods: {
    showShare: function showShare() {
      this.$root.shareText = 'Check out this project on CitonHub';
      this.$root.shareLink = 'https://link.citonhub.com/project/' + this.$route.params.project_slug;
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
        var status = this.$root.checkCodeForInput(this.$root.projectData.project_files.code_files[0].content, this.$root.projectData.project_panel.panel_language);

        if (status == 'present') {
          return;
        }

        this.pageContent = 'sending to sandbox...';
        this.runCodeOnSandbox(null);
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
            _this.pageContent = response.data[0].stdout + '\n Error: \n' + response.data[0].stderr + ' \n' + response.data[0].compile_output + '\n' + response.data[0].error;
          }

          if (_this.$root.codeBoxOpened == false) {}

          _this.recheckCodeBox = true;
        }
      })["catch"](function (error) {
        _this.pageContent = 'An issue occured,unable to run on sandbox...';
      });
    },
    runCodeOnSandbox: function runCodeOnSandbox(codeContent) {
      var _this2 = this;

      axios.post('/run-code-on-sandbox-project', {
        panel_id: this.$root.projectData.project_panel.panel_id,
        code_content: codeContent
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
            _this2.pageContent = response.data[0].stdout + '\n Error: \n' + response.data[0].stderr + ' \n' + response.data[0].compile_output + '\n' + response.data[0].error;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/contributors.vue?vue&type=template&id=62ad6a9c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/contributors.vue?vue&type=template&id=62ad6a9c& ***!
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
  return _c("div", [
    _c(
      "div",
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.users, function(user, index) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "col-12 py-2 d-flex flex-row",
              staticStyle: {
                "align-items": "center",
                "border-bottom": "1px solid #c5c5c5"
              }
            },
            [
              _vm._m(1, true),
              _vm._v(" "),
              _c("div", { staticClass: "col-7 py-0" }, [
                _c("span", { staticStyle: { "font-size": "13px" } }, [
                  _vm._v(_vm._s(user))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-2 text-right py-0" },
                [
                  _vm.incall
                    ? _c("v-icon", [_vm._v("las la-microphone")])
                    : _vm._e()
                ],
                1
              )
            ]
          )
        })
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
    return _c("div", { staticClass: "col-12 px-2 px-md-2  " }, [
      _c("h5", { staticClass: "mt-4 ml-3" }, [_vm._v("Contributors list")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 mr-2 py-0" }, [_c("div")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/projectDisplay.vue?vue&type=template&id=0f92d3ba&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/projectDisplay.vue?vue&type=template&id=0f92d3ba& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      staticStyle: { background: "transparent", "font-family": "BodyFont" },
      attrs: { c: "" }
    },
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
            staticClass: "col-12 mt-0 mt-md-1 ",
            staticStyle: {
              "font-size": "14px",
              "padding-top": "15px",
              position: "absolute",
              top: "0",
              height: "100%",
              left: "0",
              color: "white",
              background: "black",
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

/***/ "./resources/js/components/projects/contributors.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/projects/contributors.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contributors_vue_vue_type_template_id_62ad6a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contributors.vue?vue&type=template&id=62ad6a9c& */ "./resources/js/components/projects/contributors.vue?vue&type=template&id=62ad6a9c&");
/* harmony import */ var _contributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contributors.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/contributors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contributors_vue_vue_type_template_id_62ad6a9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contributors_vue_vue_type_template_id_62ad6a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/contributors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/contributors.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/contributors.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./contributors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/contributors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contributors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/contributors.vue?vue&type=template&id=62ad6a9c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/projects/contributors.vue?vue&type=template&id=62ad6a9c& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contributors_vue_vue_type_template_id_62ad6a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./contributors.vue?vue&type=template&id=62ad6a9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/contributors.vue?vue&type=template&id=62ad6a9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contributors_vue_vue_type_template_id_62ad6a9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contributors_vue_vue_type_template_id_62ad6a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/projects/projectDisplay.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/projects/projectDisplay.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectDisplay_vue_vue_type_template_id_0f92d3ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDisplay.vue?vue&type=template&id=0f92d3ba& */ "./resources/js/components/projects/projectDisplay.vue?vue&type=template&id=0f92d3ba&");
/* harmony import */ var _projectDisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDisplay.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/projectDisplay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _projectDisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _projectDisplay_vue_vue_type_template_id_0f92d3ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _projectDisplay_vue_vue_type_template_id_0f92d3ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/projectDisplay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/projectDisplay.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/projects/projectDisplay.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./projectDisplay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/projectDisplay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDisplay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/projectDisplay.vue?vue&type=template&id=0f92d3ba&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/projects/projectDisplay.vue?vue&type=template&id=0f92d3ba& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDisplay_vue_vue_type_template_id_0f92d3ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./projectDisplay.vue?vue&type=template&id=0f92d3ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/projectDisplay.vue?vue&type=template&id=0f92d3ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDisplay_vue_vue_type_template_id_0f92d3ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_projectDisplay_vue_vue_type_template_id_0f92d3ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);