(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingResources: false,
      resourceName: '',
      drag: false
    };
  },
  mounted: function mounted() {
    this.fetchResources();
    this.$root.showYoutubePlayer = false;
    this.$root.showYoutubePlayerSm = false;
    this.$root.showAddButton = false;
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "playlist",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: (_methods = {
    fetchResources: function fetchResources() {
      var _this = this;

      axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id, "/resource")).then(function (response) {
        if (response.status == 200) {
          console.log(response.data);
          _this.resources = response.data.resources;
        }
      });
    },
    handleOnDrop: function handleOnDrop() {
      this.drag = false;
      this.saveResourceOrder();
    }
  }, _defineProperty(_methods, "fetchResources", function fetchResources() {
    var _this2 = this;

    this.loadingResources = true;
    var storedResouces = this.$root.getLocalStore('channel_resource_' + this.$root.selectedSpace.space_id + this.$root.username);
    storedResouces.then(function (result) {
      if (result != null) {
        var finalResult = JSON.parse(result);
        _this2.resources = finalResult;
        _this2.loadingResources = false;

        _this2.checkForNewResource();
      } else {
        axios.get("/fetch-resource/".concat(_this2.$root.selectedSpace.space_id, "/resource")).then(function (response) {
          if (response.status == 200) {
            _this2.$root.LocalStore('channel_resource_' + _this2.$root.selectedSpace.space_id + _this2.$root.username, response.data.resources);

            var _finalResult = response.data.resources;
            _this2.resources = _finalResult;
            _this2.loadingResources = false;
          }
        })["catch"](function (error) {
          _this2.loadingResources = false;
        });
      }
    });
  }), _defineProperty(_methods, "saveResourceOrder", function saveResourceOrder() {
    var _this3 = this;

    var showAlert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var ResourcesArray = [];
    this.resources.forEach(function (resource) {
      ResourcesArray.push(resource.resource_id);
    });
    axios.post('/save-resources-order', {
      space_id: this.$root.selectedSpace.space_id,
      resources: ResourcesArray,
      type: 'resource'
    }).then(function (response) {
      if (response.status == 200) {
        if (showAlert) {
          _this3.$root.chatComponent.showAlert('Saved!', 'Your changes have been saved', 'success');
        }

        _this3.$root.LocalStore('channel_resource_' + _this3.$root.selectedSpace.space_id + _this3.$root.username, _this3.resources);
      }
    })["catch"](function (error) {
      _this3.$root.chatComponent.showAlert('Oops!', 'Unable to save changes,please try again', 'error');
    });
  }), _defineProperty(_methods, "checkForNewResource", function checkForNewResource() {
    var _this4 = this;

    axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id, "/resource")).then(function (response) {
      if (response.status == 200) {
        _this4.$root.LocalStore('channel_resource_' + _this4.$root.selectedSpace.space_id + _this4.$root.username, response.data.resources);

        var finalResult = response.data.resources;
        _this4.resources = finalResult;
      }
    })["catch"](function (error) {
      _this4.loadingResources = false;
    });
  }), _defineProperty(_methods, "showContent", function showContent(resource) {
    this.$root.selectedResource = resource;
    this.$router.push({
      path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_content/' + resource.resource_id
    });
    this.$root.resourceContentType = 'resources';
  }), _defineProperty(_methods, "createResources", function createResources() {
    var _this5 = this;

    if (this.resourceName.length == 0) return;
    this.saving = true;
    axios.post('/create-resource', {
      space_id: this.$root.selectedSpace.space_id,
      name: this.resourceName,
      type: 'resource'
    }).then(function (response) {
      if (response.status == 200) {
        _this5.resourceName = '';

        var storedResouces = _this5.$root.getLocalStore('channel_resource_' + _this5.$root.selectedSpace.space_id + _this5.$root.username);

        storedResouces.then(function (result) {
          if (result != null) {
            var finalResult = JSON.parse(result);
            finalResult = finalResult.unshift(response.data.resource);

            _this5.$root.LocalStore('channel_resource_' + _this5.$root.selectedSpace.space_id + _this5.$root.username, finalResult);
          } else {}
        });

        _this5.resources.unshift(response.data.resource);

        _this5.saving = false;
      }
    })["catch"](function (err) {
      console.log(err);
      _this5.saving = false;
    });
  }), _methods)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.handle[data-v-bfd50d94]{\n  cursor: move;\n}\n.ghost[data-v-bfd50d94] {\n  opacity: 0.5;\n  background: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true& ***!
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
    "div",
    { staticClass: "py-1 px-0" },
    [
      _vm.loadingResources
        ? [
            _c(
              "div",
              { staticClass: "col-12 mt-4 text-center" },
              [
                _c("v-progress-circular", {
                  attrs: {
                    color: "#3C87CD",
                    indeterminate: "",
                    width: "3",
                    size: "25"
                  }
                })
              ],
              1
            )
          ]
        : [
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
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
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
                            _c(
                              "v-icon",
                              { staticStyle: { "font-size": "24px" } },
                              [
                                _vm._v(
                                  "\n                   las la-arrow-right\n                 "
                                )
                              ]
                            )
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
              "draggable",
              _vm._b(
                {
                  staticClass:
                    "d-flex flex-row flex-wrap col-12 py-1 px-1 px-md-2 ",
                  attrs: { tag: "div", handle: ".handle" },
                  on: {
                    start: function($event) {
                      _vm.drag = true
                    },
                    end: _vm.handleOnDrop
                  },
                  model: {
                    value: _vm.resources,
                    callback: function($$v) {
                      _vm.resources = $$v
                    },
                    expression: "resources"
                  }
                },
                "draggable",
                _vm.dragOptions,
                false
              ),
              _vm._l(_vm.resources, function(resource, index) {
                return _c(
                  "v-card",
                  {
                    key: index,
                    staticClass: "d-flex flex-row px-1  mb-2 col-12 ",
                    staticStyle: {
                      background: "rgba(125, 179, 229, 0.4)",
                      cursor: "pointer"
                    },
                    attrs: { ripple: false, flat: "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mr-2 ",
                        on: {
                          click: function($event) {
                            return _vm.showContent(resource)
                          }
                        }
                      },
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
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "white-space": "nowrap",
                          overflow: "hidden",
                          "text-overflow": "ellipsis",
                          width: "100%"
                        },
                        on: {
                          click: function($event) {
                            return _vm.showContent(resource)
                          }
                        }
                      },
                      [
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
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "ml-auto px-2 d-flex flex-row",
                        staticStyle: {
                          cursor: "pointer",
                          "align-items": "center"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "handle" },
                          [_c("v-icon", [_vm._v("las la-braille")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "ml-1" },
                          [
                            _c(
                              "v-btn",
                              { attrs: { "x-small": "", icon: "" } },
                              [
                                _c(
                                  "v-icon",
                                  { staticStyle: { "font-size": "17px" } },
                                  [_vm._v("mdi mdi-close")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
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
                    attrs: {
                      rounded: "",
                      medium: "",
                      outlined: "",
                      color: "#000000"
                    }
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
          ]
    ],
    2
  )
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
        [_vm._v("Create resource from your DevTo articles")]
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
/* harmony import */ var _resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=bfd50d94&scoped=true& */ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&");
/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& */ "./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bfd50d94",
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

/***/ "./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=bfd50d94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);