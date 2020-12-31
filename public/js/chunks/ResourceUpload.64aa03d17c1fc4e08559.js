(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceUpload"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ResourceUpload.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      Alert: false,
      alertMsg: '',
      disabled: true,
      fileName: '',
      FileBlob: '',
      fileSize: '',
      fileUrl: '',
      progressvalue: 0
    };
  },
  mounted: function mounted() {},
  methods: {
    goBack: function goBack() {},
    fileHandler: function fileHandler(e) {
      var _this = this;

      // gets the uploade file
      var files = e.target.files; // get the file and read through the file using Js fileReader

      this.FileBlob = files[0];
      var fr = new FileReader();
      fr.readAsDataURL(files[0]);
      var fileSize = files[0].size;
      this.fileSize = this.bytesToSize(files[0].size);
      this.fileName = files[0].name; // checks it the file size does not exceeds 10 MB, if it does, raise an alert

      if (fileSize <= 10000000) {
        fr.addEventListener('load', function () {
          _this.fileUrl = fr.result;
        });
      } else {
        this.$root.projectPanelComponent.showAlert('Oops!', 'File size cannot be more than 10MB', 'error');
        return;
      }
    },
    bytesToSize: function bytesToSize(bytes) {
      // handles making the file size humanly readable
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    uploadeFile: function uploadeFile() {
      var _this2 = this;

      // start up the loader
      this.loading = true; // create a new Js formdata

      var formData = new FormData(); //  append the uploaded file into the form

      if (this.fileUrl != '') {
        formData.append('file', this.FileBlob);
      } // append all other data


      formData.append('type', this.$route.params.type);
      formData.append('file_name', this.fileName);
      formData.append('project_slug', this.$route.params.project_slug);
      axios.post('/upload-panel-file', formData, {
        // define the header type to allow for file upload,and monitor the upload
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.progressvalue = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
        }.bind(this)
      }).then(function (response) {
        if (response.status == 201) {
          _this2.loading = false; // push new files into the code file list

          _this2.$root.projectData.project_files.resources.unshift(response.data.route_file);

          _this2.$root.LocalStore('user_projects_data_' + _this2.$route.params.project_slug + _this2.$root.username, _this2.$root.projectData);

          _this2.$root.projectPanelComponent.showAlert('Happy coding!', 'File uploaded', 'success');
        } else {}
      })["catch"](function (error) {
        _this2.$root.projectPanelComponent.showAlert('Oops!', 'Unable to save file,please try again', 'error');

        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pointer{\n  cursor: pointer;\n}\n.pointer:hover{\n  background: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUpload.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=template&id=0fc35389&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/ResourceUpload.vue?vue&type=template&id=0fc35389& ***!
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
    "v-app",
    {
      staticStyle: {
        background: "transparent",
        "font-family": "BodyFont",
        "padding-top": "20px"
      }
    },
    [
      _c("div", { staticClass: "col-12 mt-5 mt-md-1 ml-lg-4" }, [
        _c("h6", [_vm._v("Upload " + _vm._s(this.$route.params.type))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-md-8 col-lg-4 offset-lg-4 offset-md-2 text-center py-1"
        },
        [
          _c("div", { staticClass: "row my-2 py-2 px-2" }, [
            _vm.fileUrl == ""
              ? _c("div", { staticClass: "col-12 py-2 my-0 px-2" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 py-2 my-0 px-2 d-flex pointer",
                      staticStyle: {
                        "align-items": "center",
                        "justify-content": "center",
                        border: "2px dashed #262626",
                        "border-radius": "8px",
                        height: "200px"
                      }
                    },
                    [
                      _c("div", { staticClass: "pointer" }, [
                        this.$route.params.type == "Framework"
                          ? _c("input", {
                              staticStyle: {
                                opacity: "0",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                position: "absolute",
                                "z-index": "10"
                              },
                              attrs: {
                                type: "file",
                                accept: ".css,.json,.jsonp,.js,.ts,.html,.xml"
                              },
                              on: { change: _vm.fileHandler }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        this.$route.params.type == "Images"
                          ? _c("input", {
                              staticStyle: {
                                opacity: "0",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                position: "absolute",
                                "z-index": "10"
                              },
                              attrs: {
                                type: "file",
                                accept: "image/x-png,image/jpeg,image/jpg"
                              },
                              on: { change: _vm.fileHandler }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        this.$route.params.type == "Audios"
                          ? _c("input", {
                              staticStyle: {
                                opacity: "0",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                position: "absolute",
                                "z-index": "10"
                              },
                              attrs: { type: "file", accept: "audio/*" },
                              on: { change: _vm.fileHandler }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        this.$route.params.type == "Videos"
                          ? _c("input", {
                              staticStyle: {
                                opacity: "0",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                position: "absolute",
                                "z-index": "10"
                              },
                              attrs: {
                                type: "file",
                                accept: "video/mp4,video/x-m4v,video/*"
                              },
                              on: { change: _vm.fileHandler }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        this.$route.params.type == "Files"
                          ? _c("input", {
                              staticStyle: {
                                opacity: "0",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                position: "absolute",
                                "z-index": "10"
                              },
                              attrs: {
                                type: "file",
                                accept:
                                  "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n              text/plain, application/pdf"
                              },
                              on: { change: _vm.fileHandler }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        this.$route.params.type != "Framework"
                          ? _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "#262626",
                                  "font-size": "12px"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("general.upload")) +
                                    " " +
                                    _vm._s(this.$route.params.type)
                                )
                              ]
                            )
                          : _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "#262626",
                                  "font-size": "12px"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("general.upload")) +
                                    " code files e.g jquery.js, mdb.css"
                                )
                              ]
                            )
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.fileUrl != ""
              ? _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-6 offset-lg-3  col-md-8 offset-md-2  d-flex py-2 px-1 my-2",
                    staticStyle: {
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticStyle: { height: "100%", width: "100%" } },
                      [
                        _c("v-card", { staticClass: "py-1 px-2" }, [
                          _c("div", { staticClass: "col-12 py-1 px-0" }, [
                            _c("div", { staticClass: "row py-0 my-0" }, [
                              _c(
                                "div",
                                { staticClass: "col-3 py-1 my-0 text-center" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "px-1 py-1",
                                      staticStyle: {
                                        background: "#c5c5c5",
                                        border: "1px solid transparent",
                                        "border-radius": "50%"
                                      }
                                    },
                                    [
                                      this.$route.params.type == "Images"
                                        ? _c(
                                            "v-icon",
                                            { attrs: { color: "gray" } },
                                            [_vm._v("las la-file-image")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      this.$route.params.type == "Framework"
                                        ? _c(
                                            "v-icon",
                                            { attrs: { color: "gray" } },
                                            [_vm._v("las la-file-code")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      this.$route.params.type == "Videos"
                                        ? _c(
                                            "v-icon",
                                            { attrs: { color: "gray" } },
                                            [_vm._v("las la-file-video")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      this.$route.params.type == "Audios"
                                        ? _c(
                                            "v-icon",
                                            { attrs: { color: "gray" } },
                                            [_vm._v("las la-file-audio")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      this.$route.params.type == "Files"
                                        ? _c(
                                            "v-icon",
                                            { attrs: { color: "gray" } },
                                            [_vm._v("las la-file")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-6 py-1 my-0 text-left px-0"
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { "font-size": "12px" } },
                                    [_vm._v(_vm._s(_vm.fileName))]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "col-3 py-0 my-0  d-flex px-1",
                                  staticStyle: {
                                    "align-items": "center",
                                    "justify-content": "center"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { "font-size": "10px" } },
                                    [_vm._v(_vm._s(_vm.fileSize))]
                                  )
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              position: "absolute",
                              height: "auto",
                              width: "auto",
                              right: "5%",
                              top: "5%",
                              background: "rgba(38, 82, 89,0.6)",
                              "border-radius": "50%",
                              padding: "0px"
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    _vm.fileUrl = ""
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { color: "#ffffff" } }, [
                                  _vm._v("mdi-close mdi-18px")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.progressvalue > 0
              ? _c(
                  "div",
                  {
                    staticClass: "col-12 d-flex py-2 px-4",
                    staticStyle: {
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c("v-progress-linear", {
                      attrs: {
                        color: "#3E8893",
                        height: "6px",
                        striped: "",
                        value: _vm.progressvalue,
                        rounded: ""
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 py-2 my-0 px-2 text-center" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "11px",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: {
                      "x-small": "",
                      color: "#3C87CD",
                      loading: _vm.loading,
                      disabled: _vm.fileUrl == ""
                    },
                    on: { click: _vm.uploadeFile }
                  },
                  [_vm._v(_vm._s(_vm.$t("general.upload")))]
                )
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/ResourceUpload.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/projects/ResourceUpload.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceUpload_vue_vue_type_template_id_0fc35389___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceUpload.vue?vue&type=template&id=0fc35389& */ "./resources/js/components/projects/ResourceUpload.vue?vue&type=template&id=0fc35389&");
/* harmony import */ var _ResourceUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/ResourceUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ResourceUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceUpload.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResourceUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceUpload_vue_vue_type_template_id_0fc35389___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceUpload_vue_vue_type_template_id_0fc35389___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/ResourceUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/ResourceUpload.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/projects/ResourceUpload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUpload.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/projects/ResourceUpload.vue?vue&type=template&id=0fc35389&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/projects/ResourceUpload.vue?vue&type=template&id=0fc35389& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_template_id_0fc35389___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceUpload.vue?vue&type=template&id=0fc35389& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/ResourceUpload.vue?vue&type=template&id=0fc35389&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_template_id_0fc35389___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceUpload_vue_vue_type_template_id_0fc35389___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);