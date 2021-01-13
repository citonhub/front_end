(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EditProfile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fullName: '',
      contentInWord: '',
      nameRule: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return v.length <= 80 || 'Name must be less than 80 characters';
      }],
      UsernameRule: [function (v) {
        return !!v || 'Username is required';
      }, function (v) {
        return v.length < 16 || 'Username must be less than 16 characters';
      }],
      aboutRule: [function (v) {
        return !!v || 'About is required';
      }, function (v) {
        return v.length < 250 || 'About must be less than 250 characters';
      }],
      imagepath: '',
      loading: false,
      progressvalue: 0
    };
  },
  mounted: function mounted() {
    this.$root.showMobileHub = false;
    this.setValues();
  },
  methods: {
    preventClose: function preventClose() {},
    setValues: function setValues() {
      this.fullName = this.$root.authProfile.name;
      this.contentInWord = this.$root.authProfile.about;

      if (this.$root.authProfile.image_name) {
        this.$root.croppedImage = '/imgs/profile/' + this.$root.authProfile.image_name + '.' + this.$root.authProfile.image_extension;
      }
    },
    editProfile: function editProfile() {
      axios.post('/update-profile', {
        full_name: this.newName,
        about: this.newBio
      });
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
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
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
        this.$router.push({
          path: '/crop-image'
        });
      }
    },
    saveChanges: function saveChanges() {
      var _this2 = this;

      this.loading = true;
      var formData = new FormData();

      if (this.$root.croppedImage != '') {
        if (!this.$root.imageExist) {
          var data1 = this.handleBlob(this.$root.croppedImage);
          formData.append('image', data1[0]);
          formData.append('image_ext', data1[1]);
        }

        formData.append('full_name', this.fullName);
        formData.append('about', this.contentInWord);
        axios.post('/update-profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: function (progressEvent) {
            this.progressvalue = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
          }.bind(this)
        }).then(function (response) {
          if (response.status == 200) {
            _this2.loading = false;

            _this2.goBack();
          } else {}
        })["catch"](function (error) {
          _this2.$root.profilePageComponent.showAlert('Oops!', 'Unable to save your changes', 'error');

          _this2.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      staticStyle: { "font-family": "BodyFont", background: "transparent" },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.preventClose()
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-md-4 px-3 py-2 pt-0 mt-1 text-left",
          staticStyle: {
            height: "auto !important",
            "font-family": "BodyFont",
            background: "transparent !important"
          }
        },
        [
          _c("v-app", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 py-2 my-0 px-2" },
              [
                _c("div", [
                  _c("span", { staticStyle: { "font-size": "13px" } }, [
                    _vm._v("Profile Image")
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
                              height: "120",
                              width: "120",
                              color: "whitesmoke"
                            }
                          },
                          [
                            _c("input", {
                              ref: "settingsimage",
                              staticStyle: {
                                opacity: "0",
                                width: "120px",
                                height: "120px",
                                overflow: "hidden",
                                position: "absolute",
                                "z-index": "10"
                              },
                              attrs: {
                                type: "file",
                                id: "settingsimage",
                                accept: "image/x-png,image/jpeg,image/jpg"
                              }
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
                    outlined: "",
                    color: "#3C87CD",
                    placeholder: _vm.$t("general.Name") + "...",
                    label: _vm.$t("general.Name"),
                    dense: "",
                    counter: "80",
                    rules: _vm.nameRule
                  },
                  model: {
                    value: _vm.fullName,
                    callback: function($$v) {
                      _vm.fullName = $$v
                    },
                    expression: "fullName"
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
                    dense: "",
                    placeholder: "your bio",
                    rules: _vm.aboutRule,
                    counter: "250",
                    outlined: "",
                    color: "#3C87CD",
                    label: "Bio"
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
              { staticClass: " text-center col-12 py-1 mt-4 my-0 px-2" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "font-family": "MediumFont",
                      "font-weight": "bolder",
                      color: "white"
                    },
                    attrs: {
                      loading: _vm.loading,
                      medium: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.saveChanges }
                  },
                  [_vm._v("\n           Save\n           ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/EditProfile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Profile/EditProfile.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=template&id=2ab4661e& */ "./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&");
/* harmony import */ var _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/EditProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=template&id=2ab4661e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/EditProfile.vue?vue&type=template&id=2ab4661e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_2ab4661e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);