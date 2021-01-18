(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      imageUrl: '',
      titleRule: [function (v) {
        return !!v || 'Title is required';
      }, function (v) {
        return v.length <= 80 || 'Title must be less than 80 characters';
      }],
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      descriptionRule: [function (v) {
        return !!v || 'description is required';
      }, function (v) {
        return v.length <= 200 || 'description must be less than 200 characters';
      }],
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-node-js'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-php'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square'
      }, {
        name: 'PHP',
        icon: 'lab la-php'
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python'
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python'
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c'
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp'
      }, {
        name: 'Java',
        icon: 'lab la-java'
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp'
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang'
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin'
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran'
      }, {
        name: 'Perl',
        icon: 'las la-code'
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r'
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby'
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go'
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell'
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua'
      }, {
        name: 'Pascal',
        icon: 'las la-code'
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript'
      }, {
        name: 'Rust',
        icon: 'las la-code'
      }, {
        name: 'Swift',
        icon: 'lab la-swift'
      }, {
        name: 'Scala',
        icon: 'las la-code'
      }],
      addlink: false,
      select: true,
      addprojectlink: false,
      postLink: false,
      formState: false,
      post: {
        title: '',
        project_slug: '',
        project_url: '',
        tags: [],
        description: ''
      },
      imageDefault: 0
    };
  },
  methods: {
    displayTab: function displayTab() {
      this.addlink = !this.addlink;
      this.select = !this.select;
      alert(this.addlink);
    },
    displayTab2: function displayTab2() {
      this.addprojectlink = !this.addprojectlink;
      this.select = !this.select;
    },
    crophandler: function crophandler(event) {
      var _this = this;

      this.imageDefault = 0; // Reference to the DOM input element

      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this.$root.imagepath = e.target.result;
          _this.imagepath = e.target.result;
          _this.$root.imageExist = true;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
        this.$router.push({
          path: '/crop-image'
        });
      }
    },
    selectDefaultImg: function selectDefaultImg(image, number) {
      this.imageDefault = 'default_' + number;
      this.$root.croppedImage = image;
      this.$root.imageExist = false;
    },
    handleBlob: function handleBlob(imageString) {
      // Split the base64 string in data and contentType
      var block = imageString.split(";"); // Get the content type of the image

      var contentType = block[0].split(":")[1]; // In this case "image/gif"

      var imgType = contentType.slice(6); // get the real base64 content of the file

      var realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."
      // Convert it to a blob to upload

      var blob = this.b64toBlob(realData, contentType);
      return [blob, imgType];
    },
    b64toBlob: function b64toBlob(b64Data, contentType, sliceSize) {
      contentType = contentType || '';
      sliceSize = sliceSize || 512;
      var byteCharacters = atob(b64Data);
      var byteArrays = [];

      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);

        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      var blob = new Blob(byteArrays, {
        type: contentType
      });
      return blob;
    },
    postData: function postData() {
      if (this.$refs.addPost.validate()) {
        var formData = new FormData();

        if (this.$root.imageExist) {
          var data1 = this.handleBlob(this.$root.croppedImage);
          formData.append('image', data1[0]);
          formData.append('image_ext', data1[1]);
        } else {
          formData.append('image_default', this.imageDefault);
        }

        formData.append('title', this.post.title);
        formData.append('project_slug', this.post.project_slug);
        formData.append('project_url', this.post.project_url);
        formData.append('description', this.post.description);
        formData.append('tags', this.post.tags);
        axios.post('/save-hub-post', formData, this.post.tags, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          if (response.status == 201) {
            console.log(response);
          }
        });
        this.goBack();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      staticClass: "row",
      staticStyle: { "font-family": "BodyFont", background: "transparent" }
    },
    [
      _c(
        "v-form",
        {
          ref: "addPost",
          staticClass: "col-12 px-md-4 px-2 py-2 pt-0 mt-1 text-left",
          staticStyle: {
            height: "auto !important",
            "font-family": "BodyFont",
            background: "transparent !important"
          },
          model: {
            value: _vm.formState,
            callback: function($$v) {
              _vm.formState = $$v
            },
            expression: "formState"
          }
        },
        [
          _c("v-app", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: " col-12 py-1 my-0 px-2 mb-1",
                staticStyle: { "font-family": "BodyFont" }
              },
              [
                _c("v-text-field", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    label: "Project Title",
                    rules: _vm.titleRule,
                    dense: "",
                    counter: "80",
                    outlined: "",
                    placeholder: "title",
                    "persistent-hint": "",
                    hint: "What are you building?",
                    color: "#3C87CD"
                  },
                  model: {
                    value: _vm.post.title,
                    callback: function($$v) {
                      _vm.$set(_vm.post, "title", $$v)
                    },
                    expression: "post.title"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: " col-12 py-1 my-0  ",
                staticStyle: { "font-family": "BodyFont" }
              },
              [
                _c(
                  "v-chip",
                  {
                    staticClass: "d-inline-block mr-1",
                    style: _vm.postLink
                      ? "font-size:13px;cursor:pointer;"
                      : "font-size:13px;cursor:pointer;color:white;",
                    attrs: { outlined: _vm.postLink, color: "#3C87CD" },
                    on: {
                      click: function($event) {
                        _vm.postLink = !_vm.postLink
                      }
                    }
                  },
                  [_vm._v("Select Project")]
                ),
                _vm._v(" "),
                _c(
                  "v-chip",
                  {
                    staticClass: "d-inline-block mr-1",
                    style: _vm.postLink
                      ? "font-size:13px;cursor:pointer;color:white;"
                      : "font-size:13px;cursor:pointer;",
                    attrs: { outlined: !_vm.postLink, color: "#3C87CD" },
                    on: {
                      click: function($event) {
                        _vm.postLink = true
                      }
                    }
                  },
                  [_vm._v("Add Link")]
                ),
                _vm._v(" "),
                _vm.postLink
                  ? _c("v-text-field", {
                      staticClass: "mt-4",
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        label: "Paste Project Link",
                        outlined: "",
                        dense: "",
                        rules: _vm.requiredRule,
                        color: "#3C87CD",
                        placeholder: "paste here"
                      },
                      model: {
                        value: _vm.post.project_url,
                        callback: function($$v) {
                          _vm.$set(_vm.post, "project_url", $$v)
                        },
                        expression: "post.project_url"
                      }
                    })
                  : _c("v-select", {
                      staticClass: "mt-4",
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        label: "Select Project",
                        color: "#3C87CD",
                        dense: "",
                        outlined: "",
                        rules: _vm.requiredRule,
                        placeholder: "select..."
                      },
                      model: {
                        value: _vm.post.project_slug,
                        callback: function($$v) {
                          _vm.$set(_vm.post, "project_slug", $$v)
                        },
                        expression: "post.project_slug"
                      }
                    })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 py-1 my-0 mt-n3 px-2 pl-3" },
              [
                _c("span", { staticStyle: { "font-size": "13px" } }, [
                  _vm._v("Upload Thumbnail")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "mx-1",
                    staticStyle: { "font-size": "12px", color: "grey" }
                  },
                  [_vm._v("(give your project an identity)")]
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "v-sheet",
                  {
                    staticClass: "py-0  px-0 mt-2 sheetbackImg",
                    style:
                      "background-image:url(" +
                      this.$root.croppedImage +
                      ");border-radius:10px;cursor:pointer;background-size:cover;",
                    attrs: { elevation: "0", height: "100", width: "120" }
                  },
                  [
                    _c(
                      "v-sheet",
                      {
                        staticClass: "py-auto px-auto d-flex",
                        staticStyle: { "border-radius": "10px" },
                        attrs: {
                          color: "rgba(15, 33, 36, 0.3)",
                          elevation: "0",
                          height: "100%",
                          width: "100%"
                        }
                      },
                      [
                        _c("input", {
                          ref: "settingsimage",
                          staticStyle: {
                            opacity: "0",
                            width: "120px",
                            height: "100px",
                            overflow: "hidden",
                            position: "absolute",
                            "z-index": "10"
                          },
                          attrs: {
                            type: "file",
                            id: "settingsimage",
                            accept: "image/x-png,image/jpeg,image/jpg"
                          },
                          on: { change: _vm.crophandler }
                        }),
                        _vm._v(" "),
                        _c("v-icon", { staticClass: "mx-auto white-text" }, [
                          _vm._v("mdi-camera-plus")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "mt-3",
                    staticStyle: { "font-size": "13px", color: "grey" }
                  },
                  [_vm._v("Or select from defaults")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex flex-row mt-3" }, [
                  _c("div", {
                    staticClass: "mr-2",
                    staticStyle: {
                      "border-radius": "10px",
                      height: "60px",
                      width: "60px",
                      "background-color": "#c5c5c5",
                      "background-image": "url(/imgs/imgproj3.jpeg)",
                      "background-size": "cover",
                      "background-repeat": "no-repeat",
                      border: "1px solid #c5c5c5"
                    },
                    on: {
                      click: function($event) {
                        return _vm.selectDefaultImg("/imgs/imgproj3.jpeg", 1)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mr-2",
                    staticStyle: {
                      "border-radius": "10px",
                      height: "60px",
                      width: "60px",
                      "background-color": "#c5c5c5",
                      "background-image": "url(/imgs/imgproj2.jpeg)",
                      "background-size": "cover",
                      "background-repeat": "no-repeat",
                      border: "1px solid #c5c5c5"
                    },
                    on: {
                      click: function($event) {
                        return _vm.selectDefaultImg("/imgs/imgproj2.jpeg", 2)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "mr-2",
                    staticStyle: {
                      "border-radius": "10px",
                      height: "60px",
                      width: "60px",
                      "background-color": "#c5c5c5",
                      "background-image": "url(/imgs/imgproj1.jpeg)",
                      "background-size": "cover",
                      "background-repeat": "no-repeat",
                      border: "1px solid #c5c5c5"
                    },
                    on: {
                      click: function($event) {
                        return _vm.selectDefaultImg("/imgs/imgproj1.jpeg", 3)
                      }
                    }
                  })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 py-1" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: " col-12 py-1 mt-5 my-0 px-2 pt-3",
                staticStyle: { height: "auto", "font-family": "BodyFont" }
              },
              [
                _c("v-select", {
                  staticStyle: { "font-size": "13px" },
                  attrs: {
                    dense: "",
                    label: "Tags",
                    counter: "10",
                    placeholder: "add tags",
                    chips: "",
                    multiple: "",
                    outlined: "",
                    rules: _vm.requiredRule,
                    "item-value": "name",
                    "item-text": "name",
                    items: _vm.languageIcon,
                    color: "#3C87CD"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "selection",
                      fn: function(data) {
                        return [
                          _c(
                            "v-chip",
                            _vm._b(
                              {
                                key: JSON.stringify(data.item),
                                staticClass: "my-1",
                                staticStyle: {
                                  "font-size": "12px",
                                  "font-family": "BodyFont"
                                },
                                attrs: {
                                  "input-value": data.selected,
                                  color: "#3C87CD",
                                  dense: "",
                                  outlined: "",
                                  disabled: data.disabled
                                }
                              },
                              "v-chip",
                              data.attrs,
                              false
                            ),
                            [
                              _vm._v(
                                "\n           \n            " +
                                  _vm._s(data.item.name) +
                                  "\n          "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.post.tags,
                    callback: function($$v) {
                      _vm.$set(_vm.post, "tags", $$v)
                    },
                    expression: "post.tags"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 py-4" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 py-1 pt-3 my-0 px-2" },
              [
                _c("v-textarea", {
                  staticStyle: { "font-size": "14px" },
                  attrs: {
                    outlined: "",
                    height: "100px",
                    counter: "200",
                    rules: _vm.descriptionRule,
                    placeholder: "A short description of your project"
                  },
                  model: {
                    value: _vm.post.description,
                    callback: function($$v) {
                      _vm.$set(_vm.post, "description", $$v)
                    },
                    expression: "post.description"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: " text-center col-12 py-1 mt-4 my-0 px-2" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "MediumFont",
                      "font-weight": "bolder",
                      "text-transform": "none",
                      color: "white"
                    },
                    attrs: {
                      medium: "",
                      rounded: "",
                      type: "submit",
                      color: "#3C87CD"
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.postData($event)
                      }
                    }
                  },
                  [_vm._v("\n             Send\n             ")]
                )
              ],
              1
            )
          ])
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

/***/ "./resources/js/components/Hub/AddProjectPage.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Hub/AddProjectPage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProjectPage.vue?vue&type=template&id=634100e8& */ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&");
/* harmony import */ var _AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProjectPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hub/AddProjectPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProjectPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProjectPage.vue?vue&type=template&id=634100e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=template&id=634100e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProjectPage_vue_vue_type_template_id_634100e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);