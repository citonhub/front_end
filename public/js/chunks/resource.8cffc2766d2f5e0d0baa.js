(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      resources: [],
      loading: false,
      saving: false,
      resourceName: ''
    };
  },
  mounted: function mounted() {
    this.fetchResources();
    this.$root.showYoutubePlayer = false;
    this.$root.showYoutubePlayerSm = false;
    this.$root.showAddButton = false;
  },
  methods: {
    fetchResources: function fetchResources() {
      var _this = this;

      axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id, "/resource")).then(function (response) {
        if (response.status == 200) {
          console.log(response.data);
          _this.resources = response.data.resources;
        }
      });
    },
    showContent: function showContent(resource) {
      this.$root.selectedResource = resource;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_content/' + resource.resource_id
      });
      this.$root.resourceContentType = 'resources';
    },
    createResources: function createResources() {
      if (this.resourceName.length == 0) return;
      this.saving = true;
      axios.post('/create-resource', {
        space_id: this.$root.selectedSpace.space_id,
        name: this.resourceName,
        type: 'resource'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-1 px-0" }, [
    _c(
      "div",
      { staticClass: " px-1 px-md-2 py-1  " },
      [
        _c(
          "v-card",
          {
            staticClass: "d-flex flex-row px-1 py-1 col-12 ",
            staticStyle: {
              background: "rgba(125, 179, 229, 0.4)",
              "align-items": "center"
            },
            attrs: { flat: "" }
          },
          [
            _c(
              "div",
              { staticClass: "mr-2 " },
              [
                _c(
                  "v-icon",
                  { staticClass: "ml-2", attrs: { color: "#000000" } },
                  [_vm._v("las la-play-circle")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticStyle: { width: "100%" } }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.resourceName,
                    expression: "resourceName"
                  }
                ],
                staticClass: "py-2 px-2",
                staticStyle: {
                  border: "1px solid white",
                  width: "100%",
                  "border-radius": "2px",
                  "font-family": "BodyFont",
                  "font-size": "13px",
                  background: "white"
                },
                attrs: { placeholder: "Create a resource" },
                domProps: { value: _vm.resourceName },
                on: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.createResources()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.resourceName = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ml-auto px-2" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: { background: "white" },
                    attrs: { loading: _vm.saving, icon: "", small: "" },
                    on: {
                      click: function($event) {
                        return _vm.createResources()
                      }
                    }
                  },
                  [
                    _c("v-icon", { staticStyle: { "font-size": "24px" } }, [
                      _vm._v(
                        "\n                   las la-arrow-right\n                 "
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2" },
      _vm._l(_vm.resources, function(resource, index) {
        return _c(
          "v-card",
          {
            key: index,
            staticClass: "d-flex flex-row px-1  mb-2 col-12 ",
            staticStyle: { background: "rgba(125, 179, 229, 0.4)" },
            attrs: { flat: "" },
            on: {
              click: function($event) {
                return _vm.showContent(resource)
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "mr-2 " },
              [
                _c(
                  "v-icon",
                  { staticClass: "ml-2", attrs: { color: "#000000" } },
                  [_vm._v("las la-folder")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-family": "BodyFont",
                    color: "black",
                    "font-size": "13px"
                  }
                },
                [_vm._v(_vm._s(resource.name))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ml-auto px-2" }, [
              _c(
                "span",
                {
                  staticClass: "d-flex flex-row",
                  staticStyle: {
                    "font-family": "BodyFont",
                    "align-items": "center",
                    "justify-content": "center",
                    color: "black",
                    "font-size": "13px",
                    background: "white",
                    height: "26px",
                    width: "26px",
                    border: "1px solid #ffffff",
                    "border-radius": "50%"
                  }
                },
                [_vm._v("12")]
              )
            ])
          ]
        )
      }),
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 text-center" },
      [
        _c(
          "v-btn",
          {
            staticStyle: {
              "font-family": "BodyFont",
              "font-size": "13px",
              "text-transform": "none"
            },
            attrs: { rounded: "", medium: "", outlined: "", color: "#000000" }
          },
          [
            _c("img", {
              staticClass: "px-2",
              attrs: { src: "/imgs/devto.png", height: "27px" }
            }),
            _vm._v(" "),
            _c("span", [_vm._v("Connect DevTo")])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-center" }, [
      _c(
        "div",
        {
          staticClass: "mt-1 text-center",
          staticStyle: {
            "font-family": "BodyFont",
            "font-size": "13px",
            color: "grey"
          }
        },
        [_vm._v("Create resource from your DevTo article")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/resources.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chats/resources.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=bfd50d94& */ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&");
/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/resources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=bfd50d94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);