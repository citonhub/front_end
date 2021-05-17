(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChannelEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChannelEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imagepath: '',
      Alert: false,
      loading: false,
      alertMsg: '',
      wordLimit: 200,
      spaceName: this.$root.selectedSpace.name,
      Rule: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return v.length < 80 || 'Name must be less than 80 characters';
      }],
      DescriptionRule: [function (v) {
        return !!v || 'Description is required';
      }, function (v) {
        return v.length < 400 || 'Description must be less than 300 characters';
      }],
      wordCount: 0,
      mycontent: '',
      editFeild: false,
      progressvalue: 0,
      contentInWord: ''
    };
  },
  components: {},
  mounted: function mounted() {
    this.$root.componentIsLoading = false;

    if (this.$root.selectedSpace.description == null) {
      this.contentInWord = '';
    } else {
      this.contentInWord = this.$root.selectedSpace.description;
    }
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.fromChannelEdit = false;
      this.$root.chatComponent.innerSideBarContent = 'channel_info';
    },
    focusedText: function focusedText() {},
    crophandler: function crophandler(event) {
      var _this = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this.$root.imagepath = e.target.result;
          _this.imagepath = e.target.result;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
        this.$root.fromChannelEdit = true;
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/crop-image'
        });
      }
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
    saveChanges: function saveChanges() {
      var _this2 = this;

      this.loading = true;
      var formData = new FormData();

      if (this.$root.croppedImage != '') {
        var data1 = this.handleBlob(this.$root.croppedImage);
        formData.append('image', data1[0]);
        formData.append('image_ext', data1[1]);
      }

      formData.append('name', this.spaceName);
      formData.append('description', this.contentInWord);
      formData.append('space_id', this.$route.params.spaceId);
      axios.post('/update-space', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.progressvalue = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
        }.bind(this)
      }).then(function (response) {
        if (response.status == 200) {
          _this2.loading = false;
          _this2.$root.croppedImage = '';

          _this2.$root.chatComponent.fetchSpaceInfo();

          _this2.goBack();
        } else {}
      })["catch"](function (error) {
        _this2.$root.chatComponent.showAlert('Oops', 'Something went wrong,please try again', 'error');

        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("v-app", { staticStyle: { background: "transparent" } }, [
    _c("div", { staticClass: "col-12 py-1 my-0 " }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
            staticStyle: {
              position: "sticky",
              background: "white",
              top: "0%",
              "border-bottom": "2px solid #c5c5c5",
              "align-items": "center"
            }
          },
          [
            _c(
              "div",
              { staticClass: " mr-1 col-2 py-0 px-1" },
              [
                _c(
                  "v-btn",
                  { attrs: { icon: "" }, on: { click: _vm.goBack } },
                  [_c("v-icon", [_vm._v("las la-arrow-left")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-8 py-0" }, [
              _c(
                "span",
                {
                  staticStyle: {
                    "font-size": "14px",
                    "font-family": "MediumFont"
                  }
                },
                [_vm._v("Edit Channel")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 py-0 mr-1 text-right" })
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 py-1 my-0" },
          [
            _c(
              "v-form",
              {
                staticClass: "row my-2 py-2 px-2 ",
                staticStyle: { "font-family": "BodyFont" }
              },
              [
                _c(
                  "div",
                  { staticClass: "col-12 py-2 my-0 px-2" },
                  [
                    _c("div", [
                      _c("span", { staticStyle: { "font-size": "13px" } }, [
                        _vm._v(" Channel profile image")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-col",
                          {
                            staticClass: "col-12 d-flex",
                            staticStyle: {
                              "align-items": "center",
                              "justify-content": "center"
                            }
                          },
                          [
                            _c(
                              "v-sheet",
                              {
                                staticClass: "py-0 px-0 sheetbackImg mx-auto",
                                style:
                                  "background-image:url(" +
                                  this.$root.croppedImage +
                                  ");border-radius:50%;cursor:pointer;background-size:contain;",
                                attrs: {
                                  elevation: "0",
                                  height: "104",
                                  width: "104",
                                  color: "whitesmoke"
                                }
                              },
                              [
                                _c("input", {
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
                                  on: { change: _vm.crophandler }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-sheet",
                                  {
                                    staticClass: "py-auto px-auto d-flex",
                                    staticStyle: { "border-radius": "50%" },
                                    attrs: {
                                      elevation: "0",
                                      height: "100%",
                                      width: "100%",
                                      color: "rgba(15, 33, 36, 0.3)"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { staticClass: "mx-auto white-text" },
                                      [_vm._v("mdi-camera-plus")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 py-2 my-0 px-2" },
                  [
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: _vm.$t("general.Name") + "...",
                        label: _vm.$t("general.Name"),
                        rules: _vm.Rule,
                        counter: "80",
                        dense: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.spaceName,
                        callback: function($$v) {
                          _vm.spaceName = $$v
                        },
                        expression: "spaceName"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 py-2 my-0 px-2" },
                  [
                    _c("v-textarea", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        label: _vm.$t("general.description"),
                        dense: "",
                        placeholder: _vm.$t("general.description") + "...",
                        rules: _vm.DescriptionRule,
                        counter: "400",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.contentInWord,
                        callback: function($$v) {
                          _vm.contentInWord = $$v
                        },
                        expression: "contentInWord"
                      }
                    })
                  ],
                  1
                ),
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
                          rounded: "",
                          small: "",
                          loading: _vm.loading,
                          color: "#3C87CD"
                        },
                        on: { click: _vm.saveChanges }
                      },
                      [_vm._v(_vm._s(_vm.$t("general.save")))]
                    )
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ChannelEdit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/ChannelEdit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelEdit_vue_vue_type_template_id_553fba5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true& */ "./resources/js/components/chats/ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true&");
/* harmony import */ var _ChannelEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChannelEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelEdit_vue_vue_type_template_id_553fba5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelEdit_vue_vue_type_template_id_553fba5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "553fba5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChannelEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChannelEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/ChannelEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelEdit_vue_vue_type_template_id_553fba5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelEdit.vue?vue&type=template&id=553fba5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelEdit_vue_vue_type_template_id_553fba5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelEdit_vue_vue_type_template_id_553fba5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);