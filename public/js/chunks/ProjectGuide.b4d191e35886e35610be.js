(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProjectGuide"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectGuide.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectGuide.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      php: [{
        id: 1,
        type: 'Audios',
        link: '{{$home}}/{{$panel}}/Audios/FILENAME'
      }, {
        id: 2,
        type: 'Videos',
        link: '{{$home}}/{{$panel}}/Videos/FILENAME'
      }, {
        id: 3,
        type: 'Images',
        link: '{{$home}}/{{$panel}}/Images/FILENAME'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectGuide.vue?vue&type=template&id=6876adbd&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ProjectGuide.vue?vue&type=template&id=6876adbd& ***!
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
    "div",
    {
      staticClass: "col-lg-12",
      staticStyle: { "overflow-y": "scroll", height: "100%", width: "100%" }
    },
    [
      _c(
        "h1",
        {
          staticClass: "h1 px-1 py-1 mt-4 mb-4",
          staticStyle: { color: "#3C87CD" }
        },
        [_vm._v("Project Creation Guide")]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "php col-lg-12", attrs: { id: "php" } }, [
        _c(
          "h2",
          {
            staticClass: " text-left px-1 py-1 mb-4 ",
            staticStyle: { "font-size": "1.8rem", "font-weight": "500" }
          },
          [_vm._v("Building a static site with PHP backend")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "here col-lg-6" }, [
          _vm._v(
            "Here are answers to some questions you might have on hosting Front-end applications."
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "steps col-lg-12" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "step col-lg-12" }, [
            _c("h4", [_vm._v("Step 2 ")]),
            _vm._v(" "),
            _c("p", [_vm._v("Upload assets and incorporate in your project")]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "col-lg-12" },
              [
                _c("li", { staticClass: "mb-2" }, [
                  _vm._v(
                    "Click on the + icon next to the type of asset you want. click on the upload box to searchthrough your device. select the asset and click the upload button."
                  )
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "col-lg-10",
                  staticStyle: { width: "390px", height: "150px" },
                  attrs: { src: "/imgs/guide/file.png", alt: "" }
                }),
                _vm._v(" "),
                _c("li", { staticClass: "mb-2" }, [
                  _vm._v(
                    "To link the asset you place one the urls below wherever you want it to be. "
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.php, function(link) {
                  return _c(
                    "div",
                    { key: link.id, staticClass: "links col-lg-12" },
                    [
                      _c("h5", [_vm._v("For " + _vm._s(link.type))]),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "col-lg-5 py-0",
                          staticStyle: {
                            "background-color": "#3C87CD",
                            color: "white",
                            height: "25px"
                          }
                        },
                        [_vm._v(_vm._s(link.link))]
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(5)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "col-lg-8" }, [
      _c(
        "ul",
        {
          staticClass: "d-flex col-lg-10",
          staticStyle: { "list-style": "none" }
        },
        [
          _c("li", { staticClass: "ml-4" }, [_vm._v("Basics")]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#node" } }, [
            _c("li", { staticClass: "ml-4" }, [_vm._v("Node")])
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#php" } }, [
            _c("li", { staticClass: "ml-4" }, [_vm._v("PHP")])
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#common" } }, [
            _c("li", { staticClass: "ml-4" }, [_vm._v("Common Errors")])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro col-lg-6" }, [
      _c(
        "h2",
        {
          staticClass: " text-left px-1 py-1 ",
          staticStyle: { "font-size": "1.8rem", "font-weight": "500" }
        },
        [_vm._v("Introduction")]
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Welcome to the project panel. Here you can use all the tools available to bring your project idea to life.\nAs soon as you start you can access a live button which you can use to view your project at any point.\n"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "basics col-lg-6 px-1 py-1" }, [
      _c(
        "h2",
        {
          staticClass: " text-left px-1 py-1 mt-4 mb-4 ",
          staticStyle: { "font-size": "1.8rem", "font-weight": "500" }
        },
        [_vm._v("Project Basics")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "files  col-lg-6 px-1 py-1 mb-4 col-lg-10" }, [
        _c(
          "h3",
          {
            staticClass: "text-left px-1 py-1",
            staticStyle: { "font-size": "1.2rem" }
          },
          [_vm._v("Adding Files")]
        ),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n    There are many ways to add files to your project. On the project panels there are different file types such as views and styles.\n    Cick on the plus button beside the file type you want. Choose your desired options and click save. You will now find the file under the category you selected on the panel.\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "assets col-lg-10 px-1 py-1 mb-4" }, [
        _c(
          "h3",
          {
            staticClass: "text-left px-1 py-1",
            staticStyle: { "font-size": "1.2rem" }
          },
          [_vm._v("Using Assets")]
        ),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n       To add assets to your project you have to upload them. Choose the category that suits the assets you want to upload and click on the add button right beside it.\n       Click on the upload box to open up your device files.You can then browse through to pick the asset you want and click on the upload button to upload it.\n"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "node col-lg-12", attrs: { id: "node" } }, [
      _c(
        "h2",
        {
          staticClass: " text-left px-1 py-1 mb-4 ",
          staticStyle: { "font-size": "1.8rem", "font-weight": "500" }
        },
        [_vm._v("Building a static site with Nodejs")]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "here col-lg-6" }, [
        _vm._v(
          "Here are answers to some questions you might have on hosting Front-end applications."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "steps col-lg-12" }, [
        _c("div", { staticClass: "step col-lg-10" }, [
          _c("h4", [_vm._v("Step 1 ")]),
          _vm._v(" "),
          _c("p", [_vm._v("Create or upload basic files: HTML, CSS and JS")]),
          _vm._v(" "),
          _c("ul", { staticClass: "col-lg-12" }, [
            _c("li", { staticClass: "mb-2" }, [
              _vm._v(
                "Click on the + icon next to the file type you want in the project panel to add a new file."
              )
            ]),
            _vm._v(" "),
            _c("img", {
              staticClass: "col-lg-10",
              staticStyle: { width: "390px", height: "150px" },
              attrs: { src: "/imgs/guide/file.png", alt: "" }
            }),
            _vm._v(" "),
            _c("li", { staticClass: "mb-2" }, [
              _vm._v(
                "Alternatively, you can click on the + icon next to the files section to  upload already created files on your laptop"
              )
            ]),
            _vm._v(" "),
            _c("img", { attrs: { src: "/imgs/guide/upload.png", alt: "" } })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "step" }, [
          _c("h4", [_vm._v("Step 2 ")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Upload assets and files and  incorporate in your project")
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "col-lg-12" }, [
            _c("li", { staticClass: "mb-2" }, [
              _vm._v(
                "Click on the + icon next to the type of asset you want. click on the upload box to searchthrough your device. select the asset and click the upload button."
              )
            ]),
            _vm._v(" "),
            _c("img", {
              staticClass: "col-lg-10",
              staticStyle: { width: "390px", height: "150px" },
              attrs: { src: "/imgs/guide/file.png", alt: "" }
            }),
            _vm._v(" "),
            _c("li", { staticClass: "mb-2" }, [
              _vm._v(
                "To link the asset you place one the urls below wherever you want it to be. "
              )
            ]),
            _vm._v(" "),
            _c("h5", [_vm._v("For videos:")]),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "col-lg-5 py-0",
                staticStyle: {
                  "background-color": "#3C87CD",
                  color: "white",
                  height: "25px"
                }
              },
              [_vm._v("$home/$panel/Videos/FILENAME")]
            ),
            _vm._v(" "),
            _c("h5", [_vm._v("For Audios:")]),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "col-lg-5 py-0",
                staticStyle: {
                  "background-color": "#3C87CD",
                  color: "white",
                  height: "25px"
                }
              },
              [_vm._v("$home/$panel/Audios/FILENAME")]
            ),
            _vm._v(" "),
            _c("h5", [_vm._v("For Images:")]),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "col-lg-5 py-0",
                staticStyle: {
                  "background-color": "#3C87CD",
                  color: "white",
                  height: "25px"
                }
              },
              [_vm._v("$home/$panel/Images/FILENAME")]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "step col-lg-10" }, [
      _c("h4", [_vm._v("Step 1 ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Create or upload basic files: HTML, CSS and JS")]),
      _vm._v(" "),
      _c("ul", { staticClass: "col-lg-12" }, [
        _c("li", { staticClass: "mb-2" }, [
          _vm._v(
            "Click on the + icon next to the file type you want in the project panel to add a new file."
          )
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "col-lg-10",
          staticStyle: { width: "390px", height: "150px" },
          attrs: { src: "/imgs/guide/file.png", alt: "" }
        }),
        _vm._v(" "),
        _c("li", { staticClass: "mb-2" }, [
          _vm._v(
            "Alternatively, you can click on the + icon next to the files section to  upload already created files on your laptop"
          )
        ]),
        _vm._v(" "),
        _c("img", { attrs: { src: "/imgs/guide/upload.png", alt: "" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "common", attrs: { id: "common" } }, [
      _c(
        "h2",
        {
          staticClass: " text-left px-1 py-1 mb-4 ",
          staticStyle: { "font-size": "1.8rem", "font-weight": "500" }
        },
        [_vm._v("Common Errors")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "error" }, [
        _c("p", { staticClass: "err  text-danger" }, [
          _vm._v("\n1.Framework code not working as it should.\n              ")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "solution text-success" }, [
          _vm._v(
            "\n                  Possible solution: Make sure you are bringing in framework via a CDN.\n              "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "error" }, [
        _c("p", { staticClass: "err  text-danger" }, [
          _vm._v("\n2. PHP web app displaying error page.\n              ")
        ]),
        _vm._v(" "),
        _c("figure", [
          _c("img", { attrs: { src: "/imgs/guide/error.jpeg", alt: "" } }),
          _vm._v(" "),
          _c("figcaption", [
            _vm._v("An example of what the error would look like")
          ])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "solution text-success" }, [
          _vm._v("Scroll down to check ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/ProjectGuide.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/projects/ProjectGuide.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectGuide_vue_vue_type_template_id_6876adbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectGuide.vue?vue&type=template&id=6876adbd& */ "./resources/js/components/projects/ProjectGuide.vue?vue&type=template&id=6876adbd&");
/* harmony import */ var _ProjectGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectGuide.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ProjectGuide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectGuide_vue_vue_type_template_id_6876adbd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectGuide_vue_vue_type_template_id_6876adbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ProjectGuide.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ProjectGuide.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectGuide.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectGuide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectGuide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGuide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ProjectGuide.vue?vue&type=template&id=6876adbd&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/projects/ProjectGuide.vue?vue&type=template&id=6876adbd& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGuide_vue_vue_type_template_id_6876adbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectGuide.vue?vue&type=template&id=6876adbd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ProjectGuide.vue?vue&type=template&id=6876adbd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGuide_vue_vue_type_template_id_6876adbd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGuide_vue_vue_type_template_id_6876adbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);