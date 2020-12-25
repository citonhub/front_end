(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatShare"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Share.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
// alert


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
      VideoBackground: '#c5c5c5',
      VideoImgBackground: '',
      CodeFileName: 'index',
      codeContent: this.$root.codeContent,
      codeLanguage: this.$root.codeLanguage,
      FileBlob: '',
      viewerType: 'postViewer',
      postContent: '',
      wordLimit: 200,
      wordCount: 0,
      mycontent: '',
      contentInWord: '',
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
  components: {},
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatShareIsOpen = false;
    },
    getAllProjects: function getAllProjects() {
      var _this = this;

      if (this.$root.ChatList.length != 0) {
        this.projectArray = this.$root.ChatList[3].data;
      } else {
        this.loadingProjects = true;
        axios.get('/fetch-user-projects').then(function (response) {
          if (response.status == 200) {
            _this.loadingProjects = false;
            _this.projectArray = response.data;
          }
        })["catch"](function (error) {});
      }
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
      this.image1 = '';
      this.image2 = '';
      this.image3 = '';
      this.image4 = '';
      this.videoUrl = '';
      this.$router.push({
        path: '/code-editor'
      });
    },
    bytesToSize: function bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    audiohandler: function audiohandler(e) {
      var _this2 = this;

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
          _this2.audioUrl = fr.result;
        }); // send message

        this.sendMessage();
      } else {
        this.showAlert('Oops!', 'Audio size cannot be more than 40MB', 'error');
        return;
      }
    },
    filehandler: function filehandler(e) {
      var _this3 = this;

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
          _this3.fileUrl = fr.result; // send message

          _this3.sendMessage();
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
    makeUUID: function makeUUID() {
      var id = "id" + Math.random().toString(16).slice(2);
      return id;
    },
    makeMessage: function makeMessage(msgType, data) {
      var NewMessage = {
        content: null,
        created_at: moment().subtract(1, 'hours'),
        is_reply: "false",
        message_id: this.makeUUID(),
        id: this.makeUUID(),
        replied_message: [],
        index_count: this.$root.returnLastIndex() + 1,
        replied_message_id: null,
        showReply: false,
        showDate: null,
        loading: true,
        progressValue: 0,
        space_id: this.$root.selectedSpace.space_id,
        tagged: false,
        type: msgType,
        user_id: this.$root.user_temp_id,
        username: this.$root.username,
        video: {},
        audio: {},
        code: {},
        image: {},
        file: {}
      };

      if (msgType == 'image') {
        NewMessage.image = data;
      }

      if (msgType == 'video') {
        NewMessage.video = data;
      }

      if (msgType == 'audio') {
        NewMessage.audio = data;
      }

      if (msgType == 'code') {
        NewMessage.code = data;
      }

      if (msgType == 'file') {
        NewMessage.file = data;
      }

      return NewMessage;
    },
    ChangeDataToDefaults: function ChangeDataToDefaults() {
      this.$root.imagepath1 = '';
      this.$root.imagepath2 = '';
      this.$root.imagepath3 = '';
      this.$root.imagepath4 = '';
      this.$root.codeContent = '';
      this.contentInWord = '';
      this.$root.postContent = '';
      this.showShareProject = false;
    },
    sendMessage: function sendMessage() {
      var _this4 = this;

      this.loading = true;
      this.$root.showChatBottom = true;
      var formData = new FormData();

      if (this.image1 != '' || this.image2 != '' || this.image3 != '' || this.image4 != '') {
        var Data = null;
        this.$root.NewMsg = this.makeMessage('image', Data);
        this.attachment_type = 'image';

        if (this.image1 != '') {
          if (this.$root.imageCanvas1 == '') {
            formData.append('image1', this.imageTemp1);
          } else {
            var data1 = this.handleBlob(this.image1);
            formData.append('image1', data1[0]);
            formData.append('imageType1', data1[1]);
          }
        }

        if (this.image2 != '') {
          if (this.$root.imageCanvas2 == '') {
            formData.append('image2', this.imageTemp2);
          } else {
            var data2 = this.handleBlob(this.image2);
            formData.append('image2', data2[0]);
            formData.append('imageType2', data2[1]);
          }
        }

        if (this.image3 != '') {
          if (this.$root.imageCanvas3 == '') {
            formData.append('image3', this.imageTemp3);
          } else {
            var data3 = this.handleBlob(this.image3);
            formData.append('image3', data3[0]);
            formData.append('imageType3', data3[1]);
          }
        }

        if (this.image4 != '') {
          if (this.$root.imageCanvas4 == '') {
            formData.append('image4', this.imageTemp4);
          } else {
            var data4 = this.handleBlob(this.image4);
            formData.append('image4', data4[0]);
            formData.append('imageType4', data4[1]);
          }
        } // height


        formData.append('imageHeight1', this.imageHeight1);
        formData.append('imageHeight2', this.imageHeight2);
        formData.append('imageHeight3', this.imageHeight3);
        formData.append('imageHeight4', this.imageHeight4); // width

        formData.append('imageWidth1', this.imageWidth1);
        formData.append('imageWidth2', this.imageWidth2);
        formData.append('imageWidth3', this.imageWidth3);
        formData.append('imageWidth4', this.imageWidth4);
      }

      if (this.videoUrl != '') {
        var _Data = null;
        this.$root.NewMsg = this.makeMessage('video', _Data);
        this.attachment_type = 'video';
        formData.append('video', this.VideoBlob);
        formData.append('display_name', this.VideoName);
      }

      if (this.audioUrl != '') {
        var _Data2 = null;
        this.$root.NewMsg = this.makeMessage('audio', _Data2);
        this.attachment_type = 'audio';
        formData.append('audio', this.AudioBlob);
        formData.append('display_name', this.audioName);
      }

      if (this.fileUrl != '') {
        var _Data3 = null;
        this.$root.NewMsg = this.makeMessage('file', _Data3);
        this.attachment_type = 'file';
        formData.append('file', this.FileBlob);
        formData.append('display_name', this.documentName);
        formData.append('file_size', this.documentSize);
      }

      if (this.showShareProject == true) {
        var _Data4 = null;
        this.$root.NewMsg = this.makeMessage('project', _Data4);
        var projectData = this.projectArray.filter(function (project) {
          return project.project_slug == _this4.selectedProject;
        });
        this.$root.NewMsg.project = projectData[0];
        formData.append('project_data', this.selectedProject);
        this.attachment_type = 'project';
      }

      this.$root.Messages.push(this.$root.NewMsg);
      this.$root.spaceFullData.messages = this.$root.Messages;
      this.$root.LocalStore('full_' + this.$root.selectedSpace.space_id + this.$root.username, this.$root.spaceFullData);
      this.$root.scrollToBottom();

      if (this.$root.SpaceUsers.length == 0) {
        formData.append('current_user', 'empty');
      } else {
        formData.append('current_user', JSON.stringify(this.$root.SpaceUsers));
      }

      formData.append('is_reply', this.$root.is_reply);
      formData.append('attachment_type', this.attachment_type);
      formData.append('space_id', this.$root.selectedSpace.space_id);
      formData.append('temp_id', this.$root.NewMsg.message_id);
      formData.append('device_id', this.$root.userDeviceId);
      this.ChangeDataToDefaults();
      this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id, this.$root.NewMsg);
      this.$root.sendShareMessage(formData);
      this.goBack();
    },
    crophandler: function crophandler(e) {
      var _this5 = this;

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
          _this5.image1 = fr.result;
        });

        if (files[1]) {
          var fr2 = new FileReader();
          fr2.readAsDataURL(files[1]);
          fr2.addEventListener('load', function () {
            _this5.image2 = fr2.result;
          });
        }

        if (files[2]) {
          var fr3 = new FileReader();
          fr3.readAsDataURL(files[2]);
          fr3.addEventListener('load', function () {
            _this5.image3 = fr3.result;
          });
        }

        if (files[3]) {
          var fr4 = new FileReader();
          fr4.readAsDataURL(files[3]);
          fr4.addEventListener('load', function () {
            _this5.image4 = fr4.result;
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
      var _this6 = this;

      this.clearData();
      var files = e.target.files;
      this.VideoBlob = files[0];
      var fr = new FileReader();
      fr.readAsDataURL(files[0]);
      var fileSize = files[0].size;
      this.VideoName = files[0].name;

      if (fileSize <= 100000000) {
        fr.addEventListener('load', function () {
          _this6.videoUrl = fr.result; // send message

          _this6.sendMessage();
        });
      } else {
        this.showAlert('Oops!', 'Video size cannot be more than 100MB', 'error');
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true& ***!
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
    "div",
    { staticStyle: { "font-family": "BodyFont" } },
    [
      _c(
        "v-btn",
        {
          staticClass: "d-inline-block  ",
          staticStyle: {
            position: "absolute",
            background: "#3C87CD",
            top: "2%",
            right: "2%",
            "z-index": "990679797879"
          },
          attrs: { icon: "", color: "#ffffff" },
          on: { click: _vm.goBack }
        },
        [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "d-flex flex-wrap mb-2 mt-4 pt-3",
          staticStyle: { "align-items": "center", "justify-content": "center" }
        },
        [
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { title: "Add images", icon: "" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-image")
                  ]),
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
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { title: "Add a video", icon: "" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-video")
                  ])
                ],
                1
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
                  accept: "video/mp4,video/x-m4v,video/*"
                },
                on: { change: _vm.vidoehandler }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", title: "Add an audio" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-music")
                  ])
                ],
                1
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
                attrs: { type: "file", accept: "audio/*" },
                on: { change: _vm.audiohandler }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", title: "Add a code" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-file-alt")
                  ])
                ],
                1
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
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "px-1 py-1 mx-1",
              staticStyle: { "border-radius": "10px" }
            },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", title: "Add a code" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "26px" } }, [
                    _vm._v("las la-laptop-code")
                  ])
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
      _c("div", [
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
                                _c("v-icon", { attrs: { color: "#ffffff" } }, [
                                  _vm._v("mdi-close mdi-18px")
                                ])
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
                                _c("v-icon", { attrs: { color: "#ffffff" } }, [
                                  _vm._v("mdi-close mdi-18px")
                                ])
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
                                _c("v-icon", { attrs: { color: "#ffffff" } }, [
                                  _vm._v("mdi-close mdi-18px")
                                ])
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
                                _c("v-icon", { attrs: { color: "#ffffff" } }, [
                                  _vm._v("mdi-close mdi-18px")
                                ])
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
                        attrs: { small: "", rounded: "", color: "#3C87CD" },
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/Share.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/chats/Share.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Share.vue?vue&type=template&id=597f2250&scoped=true& */ "./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&");
/* harmony import */ var _Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Share.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/Share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "597f2250",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/Share.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/Share.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/chats/Share.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Share.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Share.vue?vue&type=template&id=597f2250&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/Share.vue?vue&type=template&id=597f2250&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_597f2250_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);