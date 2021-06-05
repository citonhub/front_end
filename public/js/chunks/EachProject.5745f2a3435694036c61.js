(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EachProject"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/Project.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/Project.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['project'],
  data: function data() {
    return {
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-html5',
        id: 'NodeJs'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-html5',
        id: 'PHP'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square',
        id: 26
      }, {
        name: 'PHP',
        icon: 'lab la-php',
        id: 35
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python',
        id: 39
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python',
        id: 100
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c',
        id: 4
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp',
        id: 11
      }, {
        name: 'Java',
        icon: 'lab la-java',
        id: 25
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp',
        id: 13
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang',
        id: 18
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin',
        id: 27
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran',
        id: 21
      }, {
        name: 'Perl',
        icon: 'las la-code',
        id: 34
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r',
        id: 40
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby',
        id: 41
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go',
        id: 22
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell',
        id: 24
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua',
        id: 28
      }, {
        name: 'Pascal',
        icon: 'las la-code',
        id: 33
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript',
        id: 46
      }, {
        name: 'Rust',
        icon: 'las la-code',
        id: 42
      }, {
        name: 'Swift',
        icon: 'lab la-swift',
        id: 45
      }, {
        name: 'Scala',
        icon: 'las la-code',
        id: 43
      }]
    };
  },
  methods: {
    getProjectLanguage: function getProjectLanguage(panel) {
      var iconData = this.languageIcon.filter(function (icon) {
        return icon.id == panel.panel_language;
      });

      if (iconData[0]) {
        return iconData[0].icon;
      } else {
        return 'las la-code';
      }
    },
    goToPanel: function goToPanel(project) {// this.$router.push({ path: '/board/projects/panel/' + project.project_slug });
    },
    loadPage: function loadPage() {
      this.$router.push({
        path: '/board/projects/panel/' + this.$route.params.project_slug + '/panel-loader'
      });
    },
    shareProject: function shareProject(project) {
      this.$root.shareLink = 'https://link.citonhub.com/project/' + project.project_slug;
      this.$root.shareText = 'Check out this project on Citonhub';
      this.$root.infoText = 'Share project with others';
      this.$root.alertComponent = this.$root.projectListComponent;
      this.$root.showInvitation = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/Project.vue?vue&type=template&id=d750aaa2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/Project.vue?vue&type=template&id=d750aaa2&scoped=true& ***!
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
    "div",
    {
      staticClass: "col-lg-4 col-md-6 px-0 mb-2 pt-1 pt-md-2",
      staticStyle: { height: "200px", cursor: "pointer" },
      on: {
        click: function($event) {
          return _vm.goToPanel(_vm.project)
        }
      }
    },
    [
      _c(
        "div",
        {
          staticStyle: {
            height: "185px",
            position: "absolute",
            width: "94%",
            left: "3%",
            border: "1px solid #c5c5c5",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            "box-shadow": "0px 0px 8px -2px rgba(60, 135, 205, 0.25)",
            background: "url(/imgs/background3.jpg)",
            "background-size": "cover"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "py-2 px-2 text-right",
              staticStyle: {
                height: "auto",
                position: "absolute",
                bottom: "16%",
                width: "auto",
                right: "0%",
                border: "1px solid transparent",
                "border-top-left-radius": "8px",
                "align-items": "center",
                "justify-content": "center",
                background: "rgba(27, 27, 30, 0.4)"
              }
            },
            [
              _c("div", [
                _c("span", { staticClass: "d-inline-block mx-1" }, [
                  _c("i", {
                    staticClass: "lar la-heart",
                    staticStyle: { "font-size": "20px", color: "white" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "12px",
                        color: "white"
                      }
                    },
                    [_vm._v(_vm._s(_vm.project.likes))]
                  )
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "d-inline-block mx-1" }, [
                  _c("i", {
                    staticClass: "las la-thumbtack",
                    staticStyle: { "font-size": "20px", color: "white" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-family": "MediumFont",
                        "font-size": "12px",
                        color: "white"
                      }
                    },
                    [_vm._v(_vm._s(_vm.project.pinned))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "d-inline-block mx-1",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.shareProject($event)
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "mdi mdi-share-variant",
                      staticStyle: { "font-size": "20px", color: "white" }
                    })
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "py-1 px-2",
          staticStyle: {
            position: "absolute",
            width: "94%",
            height: "auto",
            left: "3%",
            bottom: "0",
            "border-radius": "0px",
            "border-bottom-left-radius": "20px",
            "border-bottom-right-radius": "20px"
          }
        },
        [
          _c("div", { staticClass: "col-12 py-0 my-0 text-left" }, [
            _c("div", { staticClass: "row py-0 my-0" }, [
              _c(
                "div",
                {
                  staticClass: "col-10 py-0 my-0 d-flex",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "HeaderFont",
                        "font-size": "13px"
                      }
                    },
                    [_vm._v(_vm._s(_vm.project.title))]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-2 text-right py-0 my-0" }, [
                _c("i", {
                  class: _vm.getProjectLanguage(_vm.project.panel),
                  staticStyle: { "font-size": "23px" }
                })
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/Project.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/projects/Project.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_d750aaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=d750aaa2&scoped=true& */ "./resources/js/components/projects/Project.vue?vue&type=template&id=d750aaa2&scoped=true&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Project_vue_vue_type_template_id_d750aaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Project_vue_vue_type_template_id_d750aaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d750aaa2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/Project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/Project.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/projects/Project.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/Project.vue?vue&type=template&id=d750aaa2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/projects/Project.vue?vue&type=template&id=d750aaa2&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_d750aaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=d750aaa2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/Project.vue?vue&type=template&id=d750aaa2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_d750aaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_d750aaa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);