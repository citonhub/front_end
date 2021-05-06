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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loadingDelete: false,
      NameRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return v.length <= 60 || 'Diary name must be less than 60 characters';
      }],
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      diaryName: '',
      tags: [{
        name: 'Web app',
        id: 'web'
      }, {
        name: 'HTML',
        id: 'html'
      }, {
        name: 'CSS',
        id: 'css'
      }, {
        name: 'JavaScript',
        id: 26
      }, {
        name: 'PHP',
        id: 35
      }, {
        name: 'Cloud computing',
        id: 140
      }, {
        name: 'Python',
        id: 39
      }, {
        name: 'Artificial Intelligence',
        id: 100
      }, {
        name: 'Machine Learning',
        id: 110
      }, {
        name: 'C',
        id: 4
      }, {
        name: 'C++',
        id: 11
      }, {
        name: 'Laravel',
        id: 131
      }, {
        name: 'Java',
        id: 25
      }, {
        name: 'C#',
        id: 13
      }, {
        name: 'Technical writing',
        id: 130
      }, {
        name: 'Dev ops',
        id: 130
      }, {
        name: 'Erlang',
        id: 18
      }, {
        name: 'Flask',
        id: 132
      }, {
        name: 'Django',
        id: 133
      }, {
        name: 'Kotlin',
        id: 27
      }, {
        name: 'Fortran',
        id: 21
      }, {
        name: 'Perl',
        id: 34
      }, {
        name: 'R',
        id: 40
      }, {
        name: 'Ruby',
        id: 41
      }, {
        name: 'Go',
        id: 22
      }, {
        name: 'Hashkell',
        id: 24
      }, {
        name: 'Lua',
        id: 28
      }, {
        name: 'Pascal',
        id: 33
      }, {
        name: 'TypeScript',
        id: 46
      }, {
        name: 'Rust',
        id: 42
      }, {
        name: 'Swift',
        id: 45
      }, {
        name: 'Scala',
        id: 43
      }, {
        name: 'Jokes',
        id: 'jokes'
      }, {
        name: 'Others',
        id: 'others'
      }],
      channel: '',
      selectedChannel: '',
      description: '',
      imageUrl: '',
      channelList: [],
      input: '',
      language: '',
      diaryTags: [],
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
    this.setEditValues();
  },
  methods: {
    setEditValues: function setEditValues() {
      if (this.$root.selectedDiary.length != 0 && this.$route.params.type == 'edit') {
        this.diaryName = this.$root.selectedDiary.name;
        this.accessType = this.$root.selectedDiary.access_type;
        this.selectedChannel = this.$root.selectedDiary.bot_channel;
        this.diaryTags = this.$root.selectedDiary.diary_tags.split(',');
        this.description = this.$root.selectedDiary.description;
        var imgLink = this.$root.selectedDiary.image_name + '.' + this.$root.selectedDiary.image_extension;

        if (this.$root.selectedDiary.image_extension) {
          this.$root.croppedImage = '/imgs/space/' + imgLink;
        }
      }
    },
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
          timeout: 2000,
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 2000,
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
          timeout: 2000,
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
          timeout: 2000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'question') {}
    },
    deleteDiary: function deleteDiary() {
      var _this = this;

      this.loadingDelete = true;
      axios.post('/delete-diary', {
        bot_id: this.$root.selectedDiary.bot_id
      }).then(function (response) {
        if (response.status == 200) {
          if (_this.$root.diaryList.length != 0) {
            var remainingDiary = _this.$root.diaryList.filter(function (diary) {
              return diary.bot_id != _this.$root.selectedDiary.bot_id;
            });

            _this.$root.diaryList = remainingDiary;
          }

          _this.loadingDelete = false;

          _this.$router.push({
            path: '/board/diary'
          });
        }
      })["catch"](function (error) {
        _this.showAlert('Oops!', ' Unable to delete diary', 'error');

        _this.loadingDelete = false;
      });
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
    goback: function goback() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    crophandler: function crophandler(event) {
      var _this2 = this;

      this.imageDefault = 0; // Reference to the DOM input element

      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this2.$root.imagepath = e.target.result;
          _this2.imagepath = e.target.result;
          _this2.$root.imageExist = true;
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
      var _this3 = this;

      axios.get('/fetch-user-channels-diary').then(function (response) {
        if (response.status == 200) {
          _this3.channelList = response.data;
        }
      })["catch"](function (error) {});
    },
    createDiary: function createDiary() {
      var _this4 = this;

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
        formData.append('access_type', this.accessType);
        formData.append('tags', this.diaryTags);

        if (this.$route.params.type == 'edit') {
          formData.append('bot_id', this.$root.selectedDiary.bot_id);
        }

        axios.post('/create-diary', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          if (response.status == 200) {
            _this4.loading = false;

            if (_this4.$route.params.type == 'edit') {
              _this4.showAlert('Saved!', ' Your changes has been saved', 'success');

              return;
            }

            var storedDiary = _this4.$root.getLocalStore('user_diary_' + _this4.$root.username);

            storedDiary.then(function (result) {
              if (result != null) {
                var finalResult = JSON.parse(result);
                _this4.$root.diaryList = finalResult;

                _this4.$root.diaryList.unshift(response.data.dairy);

                _this4.$root.LocalStore('user_diary_' + _this4.$root.username, _this4.$root.diaryList);

                _this4.$router.push({
                  path: '/board/diary/list'
                });
              } else {
                _this4.$router.push({
                  path: '/board/diary/list'
                });
              }
            });
          }
        })["catch"](function (error) {
          _this4.showAlert('Oops!', ' Unable to create diary', 'error');

          _this4.loading = false;
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "px-0",
      staticStyle: { background: "transparent", "font-family": "BodyFont" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "col-lg-10 offset-lg-1 py-1 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top",
          staticStyle: {
            position: "sticky",
            "z-index": "9999999999",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-6 py-0 my-0" }, [
              _c(
                "h5",
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.goback } },
                    [_c("v-icon", [_vm._v("las la-arrow-left")])],
                    1
                  ),
                  _vm._v(" "),
                  this.$route.params.type == "new"
                    ? [
                        _vm._v(
                          "\n                  Create a diary\n             "
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  this.$route.params.type == "edit"
                    ? [_vm._v("\n                  Edit diary\n             ")]
                    : _vm._e()
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6 py-0 my-0 text-right" },
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
                      loading: _vm.loading,
                      small: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.createDiary }
                  },
                  [
                    this.$route.params.type == "new"
                      ? [_vm._v("\n                  Done\n             ")]
                      : _vm._e(),
                    _vm._v(" "),
                    this.$route.params.type == "edit"
                      ? [_vm._v("\n                  Save\n             ")]
                      : _vm._e()
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: " px-0 col-12 pb-0 pt-2 d-md-none d-block fixed-top",
          staticStyle: {
            position: "sticky",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "row py-0" }, [
            _c("div", { staticClass: "col-8 py-0 my-0" }, [
              _c(
                "h6",
                { staticStyle: { "font-size": "17px" } },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.goback } },
                    [_c("v-icon", [_vm._v("las la-arrow-left")])],
                    1
                  ),
                  _vm._v(" "),
                  this.$route.params.type == "new"
                    ? [
                        _vm._v(
                          "\n                  Create a diary\n             "
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  this.$route.params.type == "edit"
                    ? [_vm._v("\n                  Edit diary\n             ")]
                    : _vm._e()
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-4 py-0 my-0 text-right" },
              [
                _c(
                  "v-btn",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "font-weight": "bolder",
                      "text-transform": "none",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: {
                      loading: _vm.loading,
                      small: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.createDiary }
                  },
                  [
                    this.$route.params.type == "new"
                      ? [_vm._v("\n                  Done\n             ")]
                      : _vm._e(),
                    _vm._v(" "),
                    this.$route.params.type == "edit"
                      ? [_vm._v("\n                  Save\n             ")]
                      : _vm._e()
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-app",
        {
          staticClass: "col-12 px-0",
          staticStyle: { background: "transparent", "font-family": "BodyFont" }
        },
        [
          _c(
            "v-form",
            {
              ref: "diaryForm",
              staticClass:
                "col-lg-8 offset-lg-2 py-1 col-md-10 offset-md-1 px-2",
              model: {
                value: _vm.formState,
                callback: function($$v) {
                  _vm.formState = $$v
                },
                expression: "formState"
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-8  py-1 my-0 px-2" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mb-1",
                        staticStyle: { "font-size": "14px" }
                      },
                      [_vm._v("1. Name your diary")]
                    ),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        label: "Diary name",
                        counter: "60",
                        rules: _vm.NameRule,
                        "persistent-hint": "",
                        "prepend-inner-icon": "las la-book",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.diaryName,
                        callback: function($$v) {
                          _vm.diaryName = $$v
                        },
                        expression: "diaryName"
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
                    _c(
                      "div",
                      {
                        staticClass: "my-2",
                        staticStyle: { "font-size": "14px" }
                      },
                      [_vm._v("2. Upload your diary photo")]
                    ),
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
                          cursor: "pointer",
                          "background-color": "#c5c5c5",
                          "background-image": "url(/imgs/background3.jpg)",
                          "background-size": "cover",
                          "background-repeat": "no-repeat",
                          border: "1px solid #c5c5c5"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectDefaultImg(
                              "/imgs/background3.jpg",
                              1
                            )
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
                          cursor: "pointer",
                          "background-color": "#c5c5c5",
                          "background-image": "url(/imgs/background1.jpg)",
                          "background-size": "cover",
                          "background-repeat": "no-repeat",
                          border: "1px solid #c5c5c5"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectDefaultImg(
                              "/imgs/background1.jpg",
                              2
                            )
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
                          cursor: "pointer",
                          "background-color": "#c5c5c5",
                          "background-image": "url(/imgs/imgproj2.jpeg)",
                          "background-size": "cover",
                          "background-repeat": "no-repeat",
                          border: "1px solid #c5c5c5"
                        },
                        on: {
                          click: function($event) {
                            return _vm.selectDefaultImg(
                              "/imgs/imgproj2.jpeg",
                              3
                            )
                          }
                        }
                      })
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-8  py-1 mt-3 px-2 mb-3" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mb-2",
                        staticStyle: { "font-size": "14px" }
                      },
                      [_vm._v("3. Control diary access.")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-chip",
                      {
                        staticClass: "d-inline-block ml-2 my-1",
                        style:
                          _vm.accessType != "private"
                            ? "font-size:13px;cursor:pointer;"
                            : "font-size:13px;cursor:pointer;color:white;",
                        attrs: {
                          outlined: _vm.accessType != "private",
                          color: "#3C87CD"
                        },
                        on: {
                          click: function($event) {
                            _vm.accessType = "private"
                          }
                        }
                      },
                      [_vm._v("Private")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-chip",
                      {
                        staticClass: "d-inline-block ml-1 my-1",
                        style:
                          _vm.accessType != "public"
                            ? "font-size:13px;cursor:pointer;"
                            : "font-size:13px;cursor:pointer;color:white;",
                        attrs: {
                          outlined: _vm.accessType != "public",
                          color: "#3C87CD"
                        },
                        on: {
                          click: function($event) {
                            _vm.accessType = "public"
                          }
                        }
                      },
                      [_vm._v("Public")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: " col-lg-12 py-1 my-0 px-2" }, [
                  _c("div", { staticStyle: { "font-size": "14px" } }, [
                    _vm._v("4. Select a channel "),
                    _c(
                      "span",
                      { staticStyle: { "font-size": "12px", color: "grey" } },
                      [_vm._v("(optional)")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-8 py-0 px-0" },
                    [
                      _c("v-select", {
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          dense: "",
                          placeholder: "select channel",
                          "persistent-hint": "",
                          chips: "",
                          items: _vm.channelList,
                          "item-value": "space_id",
                          "item-text": "name",
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
                                      "\n             \n              " +
                                        _vm._s(data.item.name) +
                                        "\n            "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.selectedChannel,
                          callback: function($$v) {
                            _vm.selectedChannel = $$v
                          },
                          expression: "selectedChannel"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: " col-lg-8 " },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mb-3",
                        staticStyle: { "font-size": "14px" }
                      },
                      [
                        _vm._v("5. Select your diary tags  "),
                        _c(
                          "span",
                          {
                            staticStyle: { "font-size": "12px", color: "grey" }
                          },
                          [_vm._v("(optional)")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        dense: "",
                        placeholder: "select tags",
                        chips: "",
                        multiple: "",
                        "item-text": "name",
                        "item-value": "name",
                        items: _vm.tags,
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
                                    "\n             \n              " +
                                      _vm._s(data.item.name) +
                                      "\n            "
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.diaryTags,
                        callback: function($$v) {
                          _vm.diaryTags = $$v
                        },
                        expression: "diaryTags"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-8  py-1 my-0 px-2" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mb-3",
                        staticStyle: { "font-size": "14px" }
                      },
                      [_vm._v("6. About your new diary")]
                    ),
                    _vm._v(" "),
                    _c("v-textarea", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "What is this diary for?",
                        counter: "300",
                        rules: _vm.requiredRule,
                        outlined: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.description,
                        callback: function($$v) {
                          _vm.description = $$v
                        },
                        expression: "description"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                this.$route.params.type == "edit"
                  ? _c(
                      "div",
                      { staticClass: "col-12 py-2 text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticStyle: {
                              "font-size": "12px",
                              "text-transform": "none",
                              "font-weight": "bolder",
                              color: "white",
                              "font-family": "MediumFont"
                            },
                            attrs: {
                              loading: _vm.loadingDelete,
                              small: "",
                              rounded: "",
                              color: "#3C87CD"
                            },
                            on: { click: _vm.deleteDiary }
                          },
                          [_vm._v("\n             Delete\n           ")]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 my-3 py-5" })
              ])
            ]
          )
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