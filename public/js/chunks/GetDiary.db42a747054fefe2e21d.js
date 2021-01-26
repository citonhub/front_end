(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GetDiary"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      NameRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return v.length <= 60 || 'Diary name must be less than 60 characters';
      }],
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      diaryName: '',
      channel: '',
      selectedChannel: '',
      description: '',
      imageUrl: '',
      channelList: [],
      input: '',
      language: '',
      image: '',
      imageDefault: 0,
      formState: false,
      loading: false,
      accessType: 'private'
    };
  },
  mounted: function mounted() {
    this.$root.showTopBar = false;
    this.fetchChannels();
  },
  methods: {
    selectDefaultImg: function selectDefaultImg(image, number) {
      this.imageDefault = 'default_' + number;
      this.$root.croppedImage = image;
      this.$root.imageExist = false;
    },
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          position: 'bottomRight',
          timeout: 5000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'question') {}
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
    fetchChannels: function fetchChannels() {
      var _this2 = this;

      axios.get('/fetch-user-channels-diary').then(function (response) {
        if (response.status == 200) {
          _this2.channelList = response.data;
        }
      })["catch"](function (error) {});
    },
    goback: function goback() {
      this.$router.push({
        path: '/board/diary/list'
      });
    },
    createDiary: function createDiary() {
      var _this3 = this;

      if (this.$refs.diaryForm.validate()) {
        this.loading = true;
        var formData = new FormData();

        if (this.$root.imageExist) {
          var data1 = this.handleBlob(this.$root.croppedImage);
          formData.append('image', data1[0]);
          formData.append('image_ext', data1[1]);
        } else {
          formData.append('image_default', this.imageDefault);
        }

        formData.append('name', this.diaryName);
        formData.append('channel_id', this.selectedChannel);
        formData.append('description', this.description);
        axios.post('/create-diary', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          if (response.status == 200) {
            _this3.loading = false;

            var storedDiary = _this3.$root.getLocalStore('user_diary_' + _this3.$root.username);

            storedDiary.then(function (result) {
              if (result != null) {
                var finalResult = JSON.parse(result);
                _this3.$root.diaryList = finalResult;

                _this3.$root.diaryList.unshift(response.data.dairy);

                _this3.$root.LocalStore('user_diary_' + _this3.$root.username, _this3.$root.diaryList);

                _this3.$router.push({
                  path: '/board/diary/list'
                });
              } else {
                _this3.$router.push({
                  path: '/board/diary/list'
                });
              }
            });
          }
        })["catch"](function (error) {
          _this3.showAlert('Oops!', ' Unable to create diary', 'error');

          _this3.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/diary/GetDiary.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/diary/GetDiary.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetDiary.vue?vue&type=template&id=03478184&scoped=true& */ "./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&");
/* harmony import */ var _GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetDiary.vue?vue&type=script&lang=js& */ "./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03478184",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/diary/GetDiary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GetDiary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GetDiary.vue?vue&type=template&id=03478184&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/GetDiary.vue?vue&type=template&id=03478184&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetDiary_vue_vue_type_template_id_03478184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);