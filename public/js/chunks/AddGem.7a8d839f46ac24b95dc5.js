(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddGem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var CodeBox = function CodeBox() {
  return Promise.all(/*! import() | CodeBox?v=0.53 */[__webpack_require__.e("vendors~CodeBox~CodeEditor~CodeEditorChat"), __webpack_require__.e("CodeBox")]).then(__webpack_require__.bind(null, /*! ../chats/CodeBox.vue */ "./resources/js/components/chats/CodeBox.vue"));
};

var VideoPlayer = function VideoPlayer() {
  return Promise.all(/*! import() | VideoPlayer?v=0.13 */[__webpack_require__.e("vendors~VideoPlayer"), __webpack_require__.e("VideoPlayer")]).then(__webpack_require__.bind(null, /*! ../chats/VideoPlayer.vue */ "./resources/js/components/chats/VideoPlayer.vue"));
};

var AudioPlayer = function AudioPlayer() {
  return __webpack_require__.e(/*! import() | AudioPlayer?v=0.20 */ "AudioPlayer").then(__webpack_require__.bind(null, /*! ../chats/AudioPlayer.vue */ "./resources/js/components/chats/AudioPlayer.vue"));
};

var Images = function Images() {
  return __webpack_require__.e(/*! import() | Images?v=0.32 */ "Images").then(__webpack_require__.bind(null, /*! ../chats/Images.vue */ "./resources/js/components/chats/Images.vue"));
};

var VPressEditor = function VPressEditor() {
  return Promise.all(/*! import() | VPressEditor?v=0.12 */[__webpack_require__.e("vendors~VPressEditor"), __webpack_require__.e("VPressEditor")]).then(__webpack_require__.bind(null, /*! ../challenges/Editor.vue */ "./resources/js/components/challenges/Editor.vue"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      requiredRule: [function (v) {
        return !!v || 'This feild is required';
      }],
      subjectRule: [function (v) {
        return !!v || 'Add a subject to this note';
      }],
      KeywordsRule: [function (v) {
        return !!v || 'Add atleast one keyword';
      }],
      selectedContentId: 0,
      addNewContentModal: false,
      selectedContentType: 'text',
      imagepath: '',
      Alert: false,
      alertMsg: '',
      image1: this.$root.imagepath1,
      image2: this.$root.imagepath2,
      image3: this.$root.imagepath3,
      image4: this.$root.imagepath4,
      imageHeight1: this.$root.imageHeight1,
      imageHeight2: this.$root.imageHeight2,
      imageHeight3: this.$root.imageHeight3,
      imageHeight4: this.$root.imageHeight4,
      imageWidth1: this.$root.imageWidth1,
      imageWidth2: this.$root.imageWidth2,
      imageWidth3: this.$root.imageWidth3,
      imageWidth4: this.$root.imageWidth4,
      videoUrl: '',
      items: ['cool', 'new'],
      text: '',
      note: {
        subject: '',
        keywords: [],
        contents: [{
          id: 0,
          name: 'New page',
          contents: [{
            type: 'text',
            content: 'Lorem ipsum dolor sit amet consectetur'
          }, {
            type: 'images',
            imageArray: [{
              image_name: 'space_image_1_128',
              image_extension: 'png',
              background_color: '#c5c5c5'
            }, {
              image_name: 'space_image_1_129',
              image_extension: 'png',
              background_color: '#c5c5c5'
            }, {
              image_name: 'space_image_1_130',
              image_extension: 'jpg',
              background_color: '#c5c5c5'
            }, {
              image_name: 'space_image_1_131',
              image_extension: 'jpeg',
              background_color: '#c5c5c5'
            }]
          }, {
            type: 'video'
          }, {
            type: 'audio'
          }, {
            type: 'code'
          }, {
            type: 'project'
          }]
        }]
      },
      ContentValue: '',
      drag: false,
      editFeild: false,
      loading: false,
      is_comment: false,
      attachment_type: null,
      imageTemp1: this.$root.imageTemp1,
      imageTemp2: this.$root.imageTemp2,
      imageTemp3: this.$root.imageTemp3,
      imageTemp4: this.$root.imageTemp4,
      VideoBlob: '',
      AudioBlob: '',
      audioUrl: '',
      progressvalue: 0,
      fileUrl: '',
      projectArray: [],
      documentSize: '',
      VideoName: '',
      documentName: '',
      audioName: '',
      audioSize: '',
      loadingProjects: false,
      showShareProject: false,
      selectedProject: ''
    };
  },
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a,
    CodeBox: CodeBox,
    VideoPlayer: VideoPlayer,
    AudioPlayer: AudioPlayer,
    Images: Images,
    VPressEditor: VPressEditor
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  mounted: function mounted() {
    this.$root.showMobileHub = false;
  },
  methods: {
    closeAddContentModel: function closeAddContentModel() {
      this.addNewContentModal = false;
    },
    addNewContent: function addNewContent() {
      var newContent = {
        name: 'Another page',
        contents: []
      };
      this.note.contents.push(newContent);
    },
    clearData: function clearData() {
      this.image1 = '';
      this.image2 = '';
      this.image3 = '';
      this.image4 = '';
      this.videoUrl = '';
      this.audioUrl = '';
      this.fileUrl = '';
      this.codeContent = '';
      this.showShareProject = false;
    },
    codeEditor: function codeEditor() {
      this.clearData();
    },
    bytesToSize: function bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    audiohandler: function audiohandler(e) {
      var _this = this;

      this.clearData();
      var files = e.target.files;
      this.AudioBlob = files[0];
      var fr = new FileReader();
      fr.readAsDataURL(files[0]);
      var fileSize = files[0].size;
      this.audioName = files[0].name;
      this.audioSize = this.bytesToSize(files[0].size);

      if (fileSize <= 4000000) {
        fr.addEventListener('load', function () {
          _this.audioUrl = fr.result;
        });
        setTimeout(function () {
          _this.sendMessage();
        }, 1500);
      } else {
        this.showAlert('Oops!', 'Audio size cannot be more than 40MB', 'error');
        return;
      }
    },
    filehandler: function filehandler(e) {
      var _this2 = this;

      this.clearData();
      var files = e.target.files;
      this.FileBlob = files[0];
      var fr = new FileReader();
      fr.readAsDataURL(files[0]);
      var fileSize = files[0].size;
      this.documentSize = this.bytesToSize(files[0].size);
      this.documentName = files[0].name;

      if (fileSize <= 400000000) {
        fr.addEventListener('load', function () {
          _this2.fileUrl = fr.result; // send message

          _this2.sendMessage();
        });
      } else {
        this.showAlert('Oops!', 'File size cannot be more than 400MB', 'error');
        return;
      }
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
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
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
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
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
    crophandler: function crophandler(e) {
      var _this3 = this;

      this.clearData();
      this.videoUrl = '';
      this.codeContent = ''; // Reference to the DOM input element

      var input = e.target; // Ensure that you have a file before attempting to read it

      var filesLength = input.files.length;

      if (filesLength > 4) {
        this.showAlert('Oops!', 'Selected images cannot be more than 4', 'error');
        return;
      }

      if (filesLength <= 4) {
        var files = e.target.files;
        this.imageTemp1 = files[0];
        this.imageTemp2 = files[1];
        this.imageTemp3 = files[2];
        this.imageTemp4 = files[3];
        this.$root.imageTemp1 = files[0];
        this.$root.imageTemp2 = files[1];
        this.$root.imageTemp3 = files[2];
        this.$root.imageTemp4 = files[3];
        var fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener('load', function () {
          _this3.image1 = fr.result;
        });

        if (files[1]) {
          var fr2 = new FileReader();
          fr2.readAsDataURL(files[1]);
          fr2.addEventListener('load', function () {
            _this3.image2 = fr2.result;
          });
        }

        if (files[2]) {
          var fr3 = new FileReader();
          fr3.readAsDataURL(files[2]);
          fr3.addEventListener('load', function () {
            _this3.image3 = fr3.result;
          });
        }

        if (files[3]) {
          var fr4 = new FileReader();
          fr4.readAsDataURL(files[3]);
          fr4.addEventListener('load', function () {
            _this3.image4 = fr4.result;
          });
        }
      }
    },
    editImage: function editImage(imageNumber) {
      if (imageNumber == 'image1') {
        this.$root.imagepath1 = this.image1;
        this.$root.imagepath2 = this.image2;
        this.$root.imagepath3 = this.image3;
        this.$root.imagepath4 = this.image4;
        this.$root.currentImage = 'image1';
      }

      if (imageNumber == 'image2') {
        this.$root.imagepath1 = this.image1;
        this.$root.imagepath2 = this.image2;
        this.$root.imagepath3 = this.image3;
        this.$root.imagepath4 = this.image4;
        this.$root.currentImage = 'image2';
      }

      if (imageNumber == 'image3') {
        this.$root.imagepath1 = this.image1;
        this.$root.imagepath2 = this.image2;
        this.$root.imagepath3 = this.image3;
        this.$root.imagepath4 = this.image4;
        this.$root.currentImage = 'image3';
      }

      if (imageNumber == 'image4') {
        this.$root.imagepath1 = this.image1;
        this.$root.imagepath2 = this.image2;
        this.$root.imagepath3 = this.image3;
        this.$root.imagepath4 = this.image4;
        this.$root.currentImage = 'image4';
      }

      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/crop-image'
      });
    },
    vidoehandler: function vidoehandler(e) {
      var _this4 = this;

      this.clearData();
      var files = e.target.files;
      this.VideoBlob = files[0];
      var fr = new FileReader();
      fr.readAsDataURL(files[0]);
      var fileSize = files[0].size;
      this.VideoName = files[0].name;

      if (fileSize <= 100000000) {
        fr.addEventListener('load', function () {
          _this4.videoUrl = fr.result; // send message

          _this4.sendMessage();
        });
      } else {
        this.showAlert('Oops!', 'Video size cannot be more than 100MB', 'error');
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.handle[data-v-3d0939a5]{\n   cursor: move;\n}\n.ghost[data-v-3d0939a5] {\n  opacity: 0.5;\n  background: whitesmoke;\n  border:1px solid whitesmoke;\n  border-radius: 7px;\n}\n.scroller[data-v-3d0939a5]::-webkit-scrollbar {\n  width: 6px;\n  background: transparent;\n}\n.typeBox[data-v-3d0939a5]:hover{\n  background:#E1F0FC;\n}\n.scroller[data-v-3d0939a5]::-webkit-scrollbar-thumb {\n  background-color:  #3C87CD;\n  outline: 1px solid  #3C87CD;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { background: "transparent", "font-size": "BodyFont" } },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-3 px-md-2 scroller",
          staticStyle: {
            position: "absolute",
            height: "95%",
            top: "0%",
            left: "0%",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "padding-bottom": "150px !important"
          }
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-md-6 offset-md-1 py-0 my-0 pl-md-3 text-left"
                },
                [
                  _c(
                    "h5",
                    {
                      staticClass: "d-md-block d-none",
                      staticStyle: { "font-size": "18px" }
                    },
                    [_vm._v(" Add a Note")]
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "d-md-none d-block" }, [
                    _vm._v(" Add a Note")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 offset-lg-1 mb-2" },
                [
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      label: "Subject",
                      counter: "60",
                      rules: _vm.subjectRule,
                      "persistent-hint": "",
                      placeholder: "What new thing do you learn today",
                      dense: "",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.note.subject,
                      callback: function($$v) {
                        _vm.$set(_vm.note, "subject", $$v)
                      },
                      expression: "note.subject"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-11 offset-lg-1 mt-1" }, [
                _c(
                  "div",
                  { staticStyle: { color: "gray", "font-size": "14px" } },
                  [_vm._v("Add Keywords")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 offset-lg-1 mb-2 mt-0" },
                [
                  _c("v-combobox", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      dense: "",
                      label: "Keywords",
                      rules: _vm.KeywordsRule,
                      counter: "80",
                      placeholder:
                        "words or sentences that is related to the above subject",
                      "persistent-hint": "",
                      chips: "",
                      multiple: "",
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
                                    color: "#3C87CD",
                                    "font-family": "BodyFont"
                                  },
                                  attrs: {
                                    "input-value": data.selected,
                                    color: "#3C87CD",
                                    dense: "",
                                    items: _vm.items,
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
                                  "\n         \n          " +
                                    _vm._s(data.item) +
                                    "\n        "
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.note.keywords,
                      callback: function($$v) {
                        _vm.$set(_vm.note, "keywords", $$v)
                      },
                      expression: "note.keywords"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 offset-lg-1 py-1" }, [
                _c(
                  "h5",
                  { staticStyle: { "font-size": "15px", color: "gray" } },
                  [_vm._v("Pages")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-lg-10 offset-lg-1 d-flex flex-row flex-wrap py-0",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _vm._l(_vm.note.contents, function(content, index) {
                    return _c(
                      "v-chip",
                      {
                        key: index,
                        staticClass: "mr-2 my-1",
                        style:
                          index == _vm.selectedContentId
                            ? "font-size:13px; color:#ffffff; font-family:BodyFont;"
                            : "",
                        attrs: {
                          outlined: index != _vm.selectedContentId,
                          close: "",
                          dense: "",
                          color: "#3C87CD"
                        },
                        on: {
                          click: function($event) {
                            _vm.selectedContentId = index
                          }
                        }
                      },
                      [_vm._v(_vm._s(content.name))]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-1",
                      attrs: { icon: "" },
                      on: { click: _vm.addNewContent }
                    },
                    [
                      _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                        _vm._v("las la-plus")
                      ])
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 pb-0 offset-lg-1" },
                [
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      counter: "60",
                      rules: _vm.requiredRule,
                      dense: "",
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.note.contents[_vm.selectedContentId].name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.note.contents[_vm.selectedContentId],
                          "name",
                          $$v
                        )
                      },
                      expression: "note.contents[selectedContentId].name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-lg-10 py-1 offset-lg-1 d-flex flex-row",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "13px",
                        "font-family": "MediumFont"
                      }
                    },
                    [_vm._v("Contents")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-1",
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.addNewContentModal = true
                        }
                      }
                    },
                    [
                      _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                        _vm._v("las la-plus")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.note.contents[_vm.selectedContentId].contents.length > 0
                ? [
                    _c(
                      "draggable",
                      _vm._b(
                        {
                          staticClass:
                            "col-lg-10 py-1 offset-lg-1 px-0 px-md-2 py-0 d-flex flex-row flex-wrap",
                          staticStyle: { background: "#E1F0FC" },
                          attrs: { tag: "div", handle: ".handle" },
                          on: {
                            start: function($event) {
                              _vm.drag = true
                            },
                            end: function($event) {
                              _vm.drag = false
                            }
                          },
                          model: {
                            value:
                              _vm.note.contents[_vm.selectedContentId].contents,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.note.contents[_vm.selectedContentId],
                                "contents",
                                $$v
                              )
                            },
                            expression:
                              "note.contents[selectedContentId].contents"
                          }
                        },
                        "draggable",
                        _vm.dragOptions,
                        false
                      ),
                      _vm._l(
                        _vm.note.contents[_vm.selectedContentId].contents,
                        function(element, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                              staticClass: "col-md-6 col-lg-4 px-1"
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "px-2 py-2" },
                                [
                                  element.type == "text"
                                    ? [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "py-1 px-2 ml-2",
                                            staticStyle: {
                                              "max-width": "100%",
                                              border: "1px solid transparent",
                                              "min-width": "150px",
                                              background: "#ffffff",
                                              "border-radius": "7px",
                                              "border-bottom-left-radius": "0px"
                                            },
                                            attrs: { "elevation-1": "" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "d-flex flex-row",
                                                staticStyle: {
                                                  "align-items": "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-8 py-0 px-0"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "13px",
                                                          "font-weight": "bold"
                                                        }
                                                      },
                                                      [_vm._v("V18")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-4 py-0 px-0 text-right"
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "handle",
                                                        staticStyle: {
                                                          "font-size": "25px"
                                                        },
                                                        attrs: {
                                                          color: "#3C87CD"
                                                        }
                                                      },
                                                      [_vm._v("las la-list")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticStyle: {
                                                  "font-size": "13px"
                                                }
                                              },
                                              [_vm._v(_vm._s(element.content))]
                                            )
                                          ]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  element.type == "images"
                                    ? [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "py-1 pb-2 px-2 ml-2",
                                            staticStyle: {
                                              width: "100%",
                                              border: "1px solid transparent",
                                              "min-width": "150px",
                                              background: "#ffffff",
                                              "border-radius": "7px",
                                              "border-bottom-right-radius":
                                                "0px"
                                            },
                                            attrs: { "elevation-1": "" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "d-flex flex-row",
                                                staticStyle: {
                                                  "align-items": "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-8 py-0 px-0"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "13px",
                                                          "font-weight": "bold"
                                                        }
                                                      },
                                                      [_vm._v("V18")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-4 py-0 px-0 text-right"
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "handle",
                                                        staticStyle: {
                                                          "font-size": "25px"
                                                        },
                                                        attrs: {
                                                          color: "#3C87CD"
                                                        }
                                                      },
                                                      [_vm._v("las la-list")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("images", {
                                              attrs: {
                                                imageArray: element.imageArray
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  element.type == "video"
                                    ? [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "py-1 px-2 ml-2",
                                            staticStyle: {
                                              width: "100%",
                                              border: "1px solid transparent",
                                              "min-width": "150px",
                                              background: "#ffffff",
                                              "border-radius": "7px",
                                              "border-bottom-right-radius":
                                                "0px"
                                            },
                                            attrs: { "elevation-1": "" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "d-flex flex-row",
                                                staticStyle: {
                                                  "align-items": "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-8 py-0 px-0"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "13px",
                                                          "font-weight": "bold"
                                                        }
                                                      },
                                                      [_vm._v("V18")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-4 py-0 px-0 text-right"
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "handle",
                                                        staticStyle: {
                                                          "font-size": "25px"
                                                        },
                                                        attrs: {
                                                          color: "#3C87CD"
                                                        }
                                                      },
                                                      [_vm._v("las la-list")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("video-player", {
                                              staticStyle: { width: "100%" },
                                              attrs: {
                                                videoUrl: "sample.mpd",
                                                backgroundColor: "#c5c5c5",
                                                backgroundImg:
                                                  "/imgs/video.jpeg",
                                                playerId: "small56"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  element.type == "audio"
                                    ? [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "py-1 pb-2 px-2 ml-2",
                                            staticStyle: {
                                              width: "100%",
                                              border: "1px solid transparent",
                                              "min-width": "150px",
                                              background: "#ffffff",
                                              "border-radius": "7px",
                                              "border-bottom-right-radius":
                                                "0px"
                                            },
                                            attrs: { "elevation-1": "" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "d-flex flex-row",
                                                staticStyle: {
                                                  "align-items": "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-8 py-0 px-0"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "13px",
                                                          "font-weight": "bold"
                                                        }
                                                      },
                                                      [_vm._v("V18")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-4 py-0 px-0 text-right"
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "handle",
                                                        staticStyle: {
                                                          "font-size": "25px"
                                                        },
                                                        attrs: {
                                                          color: "#3C87CD"
                                                        }
                                                      },
                                                      [_vm._v("las la-list")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("audio-player", {
                                              staticClass: "mt-n1",
                                              attrs: {
                                                file:
                                                  "/audio/space_audio_2666.mp3",
                                                playerId: "394",
                                                colorBase: "#000000"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  element.type == "code"
                                    ? [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "py-1 px-2 pb-5 ml-2",
                                            staticStyle: {
                                              width: "100%",
                                              border: "1px solid transparent",
                                              "min-width": "150px",
                                              background: "#ffffff",
                                              "border-radius": "7px",
                                              "border-bottom-right-radius":
                                                "0px"
                                            },
                                            attrs: { "elevation-1": "" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "d-flex flex-row",
                                                staticStyle: {
                                                  "align-items": "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-8 py-0 px-0"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "13px",
                                                          "font-weight": "bold"
                                                        }
                                                      },
                                                      [_vm._v("V18")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-4 py-0 px-0 text-right"
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "handle",
                                                        staticStyle: {
                                                          "font-size": "25px"
                                                        },
                                                        attrs: {
                                                          color: "#3C87CD"
                                                        }
                                                      },
                                                      [_vm._v("las la-list")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("code-box", {
                                              attrs: {
                                                color: "#000000",
                                                codeContent: "Hello world",
                                                topMargin: 13,
                                                filename: "index.php",
                                                codeLanguage: "PHP"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  element.type == "project"
                                    ? [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "py-1 pb-2 px-2 ml-2",
                                            staticStyle: {
                                              width: "100%",
                                              border: "1px solid transparent",
                                              "min-width": "150px",
                                              background: "#ffffff",
                                              "border-radius": "7px",
                                              "border-bottom-right-radius":
                                                "0px"
                                            },
                                            attrs: { "elevation-1": "" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "d-flex flex-row",
                                                staticStyle: {
                                                  "align-items": "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-8 py-0 px-0"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "font-size": "13px",
                                                          "font-weight": "bold"
                                                        }
                                                      },
                                                      [_vm._v("V18")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-4 py-0 px-0 text-right"
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "handle",
                                                        staticStyle: {
                                                          "font-size": "25px"
                                                        },
                                                        attrs: {
                                                          color: "#3C87CD"
                                                        }
                                                      },
                                                      [_vm._v("las la-list")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "row" }, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-2 text-center d-flex py-1",
                                                  staticStyle: {
                                                    "align-items": "center",
                                                    "justify-content": "center"
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("las la-laptop-code")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-7 d-flex py-1",
                                                  staticStyle: {
                                                    "align-items": "center"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "13px"
                                                      }
                                                    },
                                                    [_vm._v("Java calculator")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-3 text-right py-1",
                                                  staticStyle: {
                                                    "align-items": "center"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    { attrs: { icon: "" } },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "las la-arrow-circle-right"
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ])
                                          ]
                                        )
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                            ]
                          )
                        }
                      ),
                      0
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _vm.addNewContentModal
        ? _c(
            "div",
            {
              staticClass: "col-12 ",
              staticStyle: {
                position: "absolute",
                height: "100%",
                "z-index": "9999999999999",
                background: "rgba(27, 27, 30, 0.32)",
                "overflow-y": "auto",
                "overflow-x": "hidden"
              }
            },
            [
              _c(
                "v-btn",
                {
                  staticStyle: { position: "absolute", top: "1%", left: "1%" },
                  attrs: { icon: "" },
                  on: { click: _vm.closeAddContentModel }
                },
                [
                  _c("v-icon", { attrs: { color: "#ffffff" } }, [
                    _vm._v("mdi mdi-close")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex flex-wrap mb-2",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1 typeBox",
                          style:
                            _vm.selectedContentType == "text"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { title: "Add a text", icon: "" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-align-left")]
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
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1  typeBox",
                          style:
                            _vm.selectedContentType == "image"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { title: "Add images", icon: "" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-image")]
                              ),
                              _vm._v(" "),
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
                                  multiple: "",
                                  accept: "image/x-png,image/jpeg,image/jpg"
                                },
                                on: { change: _vm.crophandler }
                              })
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
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1  typeBox",
                          style:
                            _vm.selectedContentType == "video"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { title: "Add a video", icon: "" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-video")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticStyle: {
                                  opacity: "0",
                                  width: "100%",
                                  height: "100%",
                                  left: "0",
                                  overflow: "hidden",
                                  position: "absolute",
                                  "z-index": "10"
                                },
                                attrs: {
                                  type: "file",
                                  accept: "video/mp4,video/x-m4v,video/*"
                                },
                                on: { change: _vm.vidoehandler }
                              })
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
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1  typeBox",
                          style:
                            _vm.selectedContentType == "audio"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { icon: "", title: "Add an audio" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-music")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticStyle: {
                                  opacity: "0",
                                  width: "100%",
                                  height: "100%",
                                  left: "0",
                                  overflow: "hidden",
                                  position: "absolute",
                                  "z-index": "10"
                                },
                                attrs: { type: "file", accept: "audio/*" },
                                on: { change: _vm.audiohandler }
                              })
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
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1 typeBox",
                          style:
                            _vm.selectedContentType == "file"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { icon: "", title: "Add a file" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-file-alt")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticStyle: {
                                  opacity: "0",
                                  width: "100%",
                                  height: "100%",
                                  overflow: "hidden",
                                  position: "absolute",
                                  "z-index": "10"
                                },
                                attrs: { type: "file" },
                                on: { change: _vm.filehandler }
                              })
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
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1 typeBox",
                          style:
                            _vm.selectedContentType == "record"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { icon: "", title: "Start recording" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-microphone")]
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
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1  typeBox",
                          style:
                            _vm.selectedContentType == "code"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { icon: "", title: "Add a code" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-code")]
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
                    { staticClass: "py-1" },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "px-1 py-1 mx-1 typeBox",
                          style:
                            _vm.selectedContentType == "project"
                              ? "border-radius:10px;background:#E1F0FC;"
                              : "border-radius:10px;"
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { icon: "", title: "Add a project" } },
                            [
                              _c(
                                "v-icon",
                                { staticStyle: { "font-size": "26px" } },
                                [_vm._v("las la-laptop-code")]
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
                ]
              ),
              _vm._v(" "),
              _vm.selectedContentType == "text"
                ? _c(
                    "div",
                    { staticClass: "col-lg-12 py-1 my-2 px-2 text-center" },
                    [
                      _c("v-press-editor", {
                        attrs: { placeholder: "Type here..." },
                        model: {
                          value: _vm.ContentValue,
                          callback: function($$v) {
                            _vm.ContentValue = $$v
                          },
                          expression: "ContentValue"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.selectedContentType == "image"
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row flex-wrap px-1 px-md-2",
                        staticStyle: { "align-items": "center" }
                      },
                      [
                        _vm.image1 != ""
                          ? _c(
                              "div",
                              {
                                staticClass: "col-6 d-flex py-2 px-2",
                                staticStyle: {
                                  "align-items": "center",
                                  "justify-content": "center"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    style:
                                      "border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url(" +
                                      _vm.image1 +
                                      ");width:100%; background-size:cover;",
                                    on: {
                                      click: function($event) {
                                        return _vm.editImage("image1")
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          position: "absolute",
                                          height: "auto",
                                          width: "auto",
                                          right: "10%",
                                          top: "10%",
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
                                                _vm.image1 = ""
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "#ffffff" } },
                                              [_vm._v("mdi-close mdi-18px")]
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.image2 != ""
                          ? _c(
                              "div",
                              {
                                staticClass: "col-6 d-flex py-2 px-2",
                                staticStyle: {
                                  "align-items": "center",
                                  "justify-content": "center"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    style:
                                      "border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url(" +
                                      _vm.image2 +
                                      ");width:100%; background-size:cover;",
                                    on: {
                                      click: function($event) {
                                        return _vm.editImage("image2")
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          position: "absolute",
                                          height: "auto",
                                          width: "auto",
                                          right: "10%",
                                          top: "10%",
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
                                                _vm.image2 = ""
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "#ffffff" } },
                                              [_vm._v("mdi-close mdi-18px")]
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.image3 != ""
                          ? _c(
                              "div",
                              {
                                staticClass: "col-6 d-flex py-2 px-2",
                                staticStyle: {
                                  "align-items": "center",
                                  "justify-content": "center"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    style:
                                      "border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url(" +
                                      _vm.image3 +
                                      ");width:100%; background-size:cover;",
                                    on: {
                                      click: function($event) {
                                        return _vm.editImage("image3")
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          position: "absolute",
                                          height: "auto",
                                          width: "auto",
                                          right: "10%",
                                          top: "10%",
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
                                                _vm.image3 = ""
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "#ffffff" } },
                                              [_vm._v("mdi-close mdi-18px")]
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.image4 != ""
                          ? _c(
                              "div",
                              {
                                staticClass: "col-6 d-flex py-2 px-2",
                                staticStyle: {
                                  "align-items": "center",
                                  "justify-content": "center"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    style:
                                      "border:2px solid #3C87CD; border-radius:10px; height:170px; background-image:url(" +
                                      _vm.image4 +
                                      ");width:100%; background-size:cover;",
                                    on: {
                                      click: function($event) {
                                        return _vm.editImage("image4")
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          position: "absolute",
                                          height: "auto",
                                          width: "auto",
                                          right: "10%",
                                          top: "10%",
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
                                                _vm.image4 = ""
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "#ffffff" } },
                                              [_vm._v("mdi-close mdi-18px")]
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.image1 != "" ||
                        _vm.image2 != "" ||
                        _vm.image3 != "" ||
                        _vm.image4 != ""
                          ? _c(
                              "div",
                              { staticClass: "col-12 text-center" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticStyle: {
                                      "font-size": "12px",
                                      "font-weight": "bolder",
                                      color: "white",
                                      "font-family": "MediumFont"
                                    },
                                    attrs: {
                                      small: "",
                                      rounded: "",
                                      color: "#3C87CD"
                                    },
                                    on: { click: _vm.sendMessage }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          color: "white",
                                          "text-transform": "none"
                                        }
                                      },
                                      [_vm._v("Send")]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& */ "./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&");
/* harmony import */ var _AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddGem.vue?vue&type=script&lang=js& */ "./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& */ "./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d0939a5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/diary/AddGem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=style&index=0&id=3d0939a5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_style_index_0_id_3d0939a5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddGem.vue?vue&type=template&id=3d0939a5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/diary/AddGem.vue?vue&type=template&id=3d0939a5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGem_vue_vue_type_template_id_3d0939a5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);