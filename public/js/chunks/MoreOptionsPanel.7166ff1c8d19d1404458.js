(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MoreOptionsPanel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadingDelete: false
    };
  },
  methods: {
    copyWebLink: function copyWebLink() {
      var copyToClipboard = function copyToClipboard(str) {
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

      copyToClipboard('https://www.citonhub.com/run-panel/' + this.$root.projectData.project_panel.panel_id);
      this.$root.projectPanelComponent.showAlert('Copied!', 'Copied to clipboard', 'success');
    },
    shareProject: function shareProject() {
      this.$root.shareLink = 'https://www.citonhub.com/link/project/' + this.$route.params.project_slug;
      this.$root.shareText = 'Check out this project on Citonhub';
      this.$root.infoText = 'Share your project with others';
      this.$root.alertComponent = this.$root.projectPanelComponent;
      this.$root.showInvitation = true;
    },
    checkIfOwner: function checkIfOwner() {
      var _this = this;

      var member = this.$root.ProjectMembers.filter(function (member) {
        return member.user_id == _this.$root.user_temp_id;
      });

      if (member.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    deleteProject: function deleteProject() {
      var _this2 = this;

      this.loadingDelete = true;
      axios.post('/delete-project', {
        project_slug: this.$route.params.project_slug
      }).then(function (response) {
        if (response.status == 200) {
          var remainingProjects = _this2.$root.projectList.user_projects.filter(function (project) {
            return project.project_slug != _this2.$route.params.project_slug;
          });

          _this2.$root.projectList.user_projects = remainingProjects;

          _this2.$root.LocalStore('user_projects_' + _this2.$root.username, _this2.$root.projectList);
        }

        _this2.$router.push({
          path: '/board/projects/list'
        });
      })["catch"](function (error) {
        _this2.$root.projectPanelComponent.showAlert('Oops!', 'Unable to delete project', 'error');
      });
    },
    gotToSettings: function gotToSettings() {
      this.loadingDelete = false;
      this.$router.push({
        path: '/board/projects/panel/' + this.$route.params.project_slug + '/set-panel'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-0 px-0", staticStyle: { width: "200px" } },
    [
      _c(
        "div",
        { staticClass: "col-12 px-0 py-1 d-flex flex-column" },
        [
          this.$root.projectData.project.is_web
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "" },
                  on: { click: _vm.copyWebLink }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("las la-link")
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
                    [_vm._v("Web App URL")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-2 py-2 d-flex flex-row",
              staticStyle: { "align-items": "center" },
              attrs: { tile: "", flat: "" },
              on: { click: _vm.shareProject }
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
          _c(
            "v-card",
            {
              staticClass: "px-2 py-2 d-flex flex-row",
              staticStyle: { "align-items": "center" },
              attrs: { tile: "", flat: "" },
              on: { click: _vm.gotToSettings }
            },
            [
              _c("v-icon", { staticClass: "mr-1" }, [_vm._v("las la-cog")]),
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
                [_vm._v("Settings")]
              )
            ],
            1
          ),
          _vm._v(" "),
          this.$root.projectData.project.user_id == this.$root.user_temp_id
            ? _c(
                "v-card",
                {
                  staticClass: "px-2 py-2 d-flex flex-row",
                  staticStyle: { "align-items": "center" },
                  attrs: { tile: "", flat: "", loading: _vm.loadingDelete },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.deleteProject($event)
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

/***/ "./resources/js/components/projects/MoreOptions.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/projects/MoreOptions.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& */ "./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&");
/* harmony import */ var _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreOptions.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10ddbbc2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/MoreOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/MoreOptions.vue?vue&type=template&id=10ddbbc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreOptions_vue_vue_type_template_id_10ddbbc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);