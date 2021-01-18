(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hub/AddProjectPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      imageUrl: '',
      titleRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return v.length <= 80 || 'Title must be less than 80 characters';
      }],
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      descriptionRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return v.length <= 300 || 'description must be less than 300 characters';
      }],
      urlRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return _this.isURL(v) || "Link should be valid and secure";
      }],
      languageIcon: [{
        name: 'Web app',
        icon: 'lab la-html5',
        border_color: '#263238',
        background: '#ffffff',
        id: 'web'
      }, {
        name: 'Web app NodeJs',
        icon: 'lab la-html5',
        border_color: '#263238',
        background: '#ffffff',
        id: 'NodeJs'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-html5',
        border_color: '#263238',
        background: '#ffffff',
        id: 'PHP'
      }, {
        name: 'JavaScript',
        icon: 'lab la-js-square',
        border_color: '#263238',
        background: '#ffffff',
        id: 26
      }, {
        name: 'PHP',
        icon: 'lab la-php',
        border_color: '#263238',
        background: '#ffffff',
        id: 35
      }, {
        name: 'Python 3.81',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 39
      }, {
        name: 'Python for ML(3.7.7)',
        icon: 'lab la-python',
        border_color: '#263238',
        background: '#ffffff',
        id: 100
      }, {
        name: 'C',
        icon: 'mdi mdi-language-c',
        border_color: '#263238',
        background: '#ffffff',
        id: 4
      }, {
        name: 'C++',
        icon: 'mdi mdi-language-cpp',
        border_color: '#263238',
        background: '#ffffff',
        id: 11
      }, {
        name: 'Java',
        icon: 'lab la-java',
        border_color: '#263238',
        background: '#ffffff',
        id: 25
      }, {
        name: 'C#',
        icon: 'mdi mdi-language-csharp',
        border_color: '#263238',
        background: '#ffffff',
        id: 13
      }, {
        name: 'Erlang',
        icon: 'lab la-erlang',
        border_color: '#263238',
        background: '#ffffff',
        id: 18
      }, {
        name: 'Kotlin',
        icon: 'mdi mdi-language-kotlin',
        border_color: '#263238',
        background: '#ffffff',
        id: 27
      }, {
        name: 'Fortran',
        icon: 'mdi mdi-language-fortran',
        border_color: '#263238',
        background: '#ffffff',
        id: 21
      }, {
        name: 'Perl',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 34
      }, {
        name: 'R',
        icon: 'mdi mdi-language-r',
        border_color: '#263238',
        background: '#ffffff',
        id: 40
      }, {
        name: 'Ruby',
        icon: 'mdi mdi-language-ruby',
        border_color: '#263238',
        background: '#ffffff',
        id: 41
      }, {
        name: 'Go',
        icon: 'mdi mdi-language-go',
        border_color: '#263238',
        background: '#ffffff',
        id: 22
      }, {
        name: 'Hashkell',
        icon: 'mdi mdi-language-haskell',
        border_color: '#263238',
        background: '#ffffff',
        id: 24
      }, {
        name: 'Lua',
        icon: 'mdi mdi-language-lua',
        border_color: '#263238',
        background: '#ffffff',
        id: 28
      }, {
        name: 'Pascal',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 33
      }, {
        name: 'TypeScript',
        icon: 'mdi mdi-language-typescript',
        border_color: '#263238',
        background: '#ffffff',
        id: 46
      }, {
        name: 'Rust',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 42
      }, {
        name: 'Swift',
        icon: 'lab la-swift',
        border_color: '#263238',
        background: '#ffffff',
        id: 45
      }, {
        name: 'Scala',
        icon: 'las la-code',
        border_color: '#263238',
        background: '#ffffff',
        id: 43
      }],
      addlink: false,
      select: true,
      addprojectlink: false,
      postLink: true,
      formState: false,
      post: {
        title: '',
        project_slug: '',
        project_url: '',
        tags: ['Web app'],
        description: ''
      },
      imageDefault: 0,
      loadingProjects: false,
      loading: false,
      projectArray: [],
      setTag: []
    };
  },
  mounted: function mounted() {
    this.getAllProjects();
  },
  methods: {
    isURL: function isURL(str) {
      var url;

      try {
        url = new URL(str);
      } catch (_) {
        return false;
      }

      return url.protocol === "https:";
    },
    displayTab: function displayTab() {
      this.addlink = !this.addlink;
      this.select = !this.select;
      alert(this.addlink);
    },
    goBack: function goBack() {
      this.$root.showAddNewPost = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    displayTab2: function displayTab2() {
      this.addprojectlink = !this.addprojectlink;
      this.select = !this.select;
    },
    setTagHandler: function setTagHandler() {
      var _this2 = this;

      var selectedProject = this.projectArray.filter(function (project) {
        return project.project_slug == _this2.post.project_slug;
      });
      var selectedTag = this.languageIcon.filter(function (language) {
        return language.id == selectedProject[0].panel_language;
      });
      this.post.tags = [selectedTag[0].name];
    },
    getAllProjects: function getAllProjects() {
      var _this3 = this;

      this.loadingProjects = true;
      axios.get('/fetch-personal-projects').then(function (response) {
        if (response.status == 200) {
          _this3.loadingProjects = false;
          _this3.projectArray = response.data.projects;
        }
      })["catch"](function (error) {});
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
    crophandler: function crophandler(event) {
      var _this4 = this;

      this.imageDefault = 0; // Reference to the DOM input element

      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this4.$root.imagepath = e.target.result;
          _this4.imagepath = e.target.result;
          _this4.$root.imageExist = true;
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
      var _this5 = this;

      if (this.$refs.addPost.validate()) {
        this.loading = true;
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
        var languageList = this.post.tags;
        var finalLanguageArray = [];
        languageList.forEach(function (lang) {
          var langData = _this5.languageIcon.filter(function (data) {
            return data.name == lang;
          });

          finalLanguageArray.push(langData[0]);
        });
        formData.append('tags', JSON.stringify(finalLanguageArray));
        axios.post('/save-hub-post', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          if (response.status == 200) {
            _this5.$root.posts.unshift(response.data.data);

            _this5.loading = false;

            _this5.showAlert('Awesome!', 'Your project has been shared', 'success');

            _this5.goBack();

            _this5.$root.authProfile.points += 10;
            _this5.$root.showRewardBoard = true;
          }
        })["catch"](function (error) {
          _this5.showAlert('Oops!', 'Unable to save post,please try again', 'error');

          _this5.loading = false;
        });
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
          _c(
            "div",
            {
              staticClass: "row application application--light",
              attrs: { "data-app": "true" }
            },
            [
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
                      rules: _vm.titleRule,
                      dense: "",
                      counter: "80",
                      outlined: "",
                      placeholder: "my portfolio",
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
                  _vm.postLink
                    ? _c("v-text-field", {
                        staticClass: "mt-4",
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          label: "Paste Project Link",
                          outlined: "",
                          dense: "",
                          rules: _vm.urlRule,
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
                          items: _vm.projectArray,
                          "item-text": "title",
                          "item-value": "project_slug",
                          loading: _vm.loadingProjects,
                          dense: "",
                          outlined: "",
                          rules: _vm.requiredRule,
                          placeholder: "select..."
                        },
                        on: { change: _vm.setTagHandler },
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
                        "background-image": "url(/imgs/background3.jpg)",
                        "background-size": "cover",
                        "background-repeat": "no-repeat",
                        border: "1px solid #c5c5c5"
                      },
                      on: {
                        click: function($event) {
                          return _vm.selectDefaultImg(
                            "/imgs/background3.jpg",
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
                          return _vm.selectDefaultImg("/imgs/imgproj2.jpeg", 3)
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
                      "item-text": "name",
                      "item-value": "name",
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
                { staticClass: "col-12 py-1 pt-0 my-0 px-2" },
                [
                  _c("v-textarea", {
                    staticStyle: { "font-size": "14px" },
                    attrs: {
                      outlined: "",
                      height: "100px",
                      counter: "300",
                      rules: _vm.descriptionRule,
                      placeholder:
                        "A collection of my all the projects I have built"
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
                        color: "#3C87CD",
                        loading: _vm.loading
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
            ]
          )
        ]
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