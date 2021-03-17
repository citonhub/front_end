(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChallengesCreate"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var VPressEditor = function VPressEditor() {
  return Promise.all(/*! import() | VPressEditor */[__webpack_require__.e("vendors~VPressEditor"), __webpack_require__.e("VPressEditor")]).then(__webpack_require__.bind(null, /*! ./Editor.vue */ "./resources/js/components/challenges/Editor.vue"));
};



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      text: '',
      everyone: false,
      custom: false,
      selectJudgeType: 0,
      switch2: true,
      switch1: false,
      rulesContent: '',
      channelList: [],
      loadingDelete: false,
      new_channel: '',
      titleRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return v.length <= 50 || 'Name must be less than 50 characters';
      }],
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      summaryRules: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return v.length <= 101 || 'Name must be less than 100 characters';
      }],
      max_participantRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }, function (v) {
        return !isNaN(parseFloat(v)) && v >= 2 && v <= 500 || 'Number has to be between 2 and 500';
      }],
      durationRule: [function (v) {
        return !isNaN(parseFloat(v)) && v >= 0 && v <= 1000 || 'Days has to be between 0 and 1000 hours';
      }],
      durationRule2: [function (v) {
        return !isNaN(parseFloat(v)) && v >= 0 && v <= 23.9 || 'Duration has to be between 0 and 23.9 hours';
      }],
      participant: ['Individuals', 'Teams'],
      searchUsername: '',
      judgeType: 'everyone',
      JudgesItems: [],
      Judges: '',
      preMatchTime: '',
      Alert: false,
      alertMsg: '',
      programmingLanguage: [],
      languageIcon: [{
        name: 'Web app NodeJs',
        icon: 'lab la-node-js',
        border_color: '#263238',
        background: '#ffffff',
        id: 'NodeJs'
      }, {
        name: 'Web app PHP',
        icon: 'lab la-php',
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
      title: '',
      summary: '',
      max_participant: '4',
      durationValue: '2',
      description: '',
      formstate: false,
      loading: false,
      rulesValue: '',
      loadingConnection: false
    }, _defineProperty(_ref, "loadingDelete", false), _defineProperty(_ref, "durationValueDay", 0), _defineProperty(_ref, "durationValueHr", 2), _defineProperty(_ref, "input", ''), _defineProperty(_ref, "language", ''), _defineProperty(_ref, "image", ''), _defineProperty(_ref, "imageDefault", 0), _defineProperty(_ref, "challengeIsActive", false), _defineProperty(_ref, "Connections", []), _defineProperty(_ref, "SelectedJudges", []), _ref;
  },
  mounted: function mounted() {
    if (!this.$root.isLogged) {
      this.$root.checkIfUserIsLoggedIn();
      return;
    }

    this.$root.showTopBar = false;
    this.setEditValues();
    this.fetchChannels();
    this.fetchConnected();
  },
  components: {
    VPressEditor: VPressEditor
  },
  methods: (_methods = {
    setEditValues: function setEditValues() {
      if (this.$root.selectedChallenge.length != 0 && this.$route.params.type == 'edit') {
        this.title = this.$root.selectedChallenge.title;
        this.durationValue = this.$root.selectedChallenge.duration;
        this.durationValueHr = this.durationValue % 24;
        this.durationValueDay = (this.durationValue - this.durationValueHr) / 24;
        this.summary = this.$root.selectedChallenge.summary;
        this.description = this.$root.selectedChallenge.description;
        this.rulesContent = this.$root.selectedChallenge.rules;

        if (this.$root.selectedChallenge.languages) {
          var challengeLang = this.$root.selectedChallenge.languages.toString();
          this.language = challengeLang.split(',');
        }

        this.judgeType = this.$root.selectedChallenge.judges;
        var imgLink = this.$root.selectedChallenge.image_name + '.' + this.$root.selectedChallenge.image_extension;
        this.$root.croppedImage = '/imgs/challenges/' + imgLink;

        if (this.checkDuelStatus(this.$root.selectedChallenge) == 'Active') {
          this.challengeIsActive = true;
        } else {
          this.challengeIsActive = false;
        }
      }
    },
    fetchConnected: function fetchConnected() {
      var _this = this;

      this.loadingConnection = true;
      axios.get('/fetch-connected').then(function (response) {
        if (response.status == 200) {
          _this.Connections = response.data.data; // get existing contributors

          var contributors = [];

          _this.$root.ProjectMembers.forEach(function (member) {
            _this.Connections.forEach(function (connected) {
              if (connected.user_temp_id == member.user_id) {
                contributors.push(connected.username);
              }
            });
          });

          _this.contributors = contributors;
          _this.loadingConnection = false;
        }
      })["catch"](function (error) {
        _this.loadingConnection = false;
      });
    },
    deleteChallenge: function deleteChallenge() {
      var _this2 = this;

      this.loadingDelete = true;
      axios.post('/delete-challenge', {
        duelId: this.$root.selectedChallenge.duel_id
      }).then(function (response) {
        if (response.status == 200) {
          if (_this2.$root.challengesList.length != 0) {
            var remainingChallenges = _this2.$root.challengesList.filter(function (challenge) {
              return challenge.duel_id != _this2.$root.selectedChallenge.duel_id;
            });

            _this2.$root.challengesList = remainingChallenges;
          }

          _this2.loadingDelete = false;

          _this2.$router.push({
            path: '/board/challenges'
          });
        }
      })["catch"](function (error) {
        _this2.showAlert('Oops!', ' Unable to delete challenge', 'error');

        _this2.loadingDelete = false;
      });
    },
    checkDuelStatus: function checkDuelStatus(duel) {
      if (duel.started == 0) {
        return 'Pending';
      }

      var now = moment();
      var terminalDateToMoment = moment(duel.duel_terminal_time);
      var differenceInSeconds = terminalDateToMoment.diff(now, 'seconds');

      if (differenceInSeconds <= 0) {
        return 'Ended';
      } else {
        return 'Active';
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
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    crophandler: function crophandler(event) {
      var _this3 = this;

      this.imageDefault = 0; // Reference to the DOM input element

      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this3.$root.imagepath = e.target.result;
          _this3.imagepath = e.target.result;
          _this3.$root.imageExist = true;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
        this.$router.push({
          path: '/crop-image'
        });
      }
    },
    enableEvery: function enableEvery() {
      this.judgeType = 'everyone';
      this.custom = false;
      this.SelectedJudges = [];
    },
    disableEvery: function disableEvery() {
      this.judgeType = 'custom';
      this.custom = 'true';
    }
  }, _defineProperty(_methods, "goBack", function goBack() {
    this.$router.push({
      path: '/board/challenges/list'
    });
  }), _defineProperty(_methods, "setDuration", function setDuration(durationValue) {
    durationValue = this.durationValueDay * 24 + this.durationValueHr;
    console.log(durationValue);
  }), _defineProperty(_methods, "showAlert", function showAlert() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 ? arguments[1] : undefined;
    var type = arguments.length > 2 ? arguments[2] : undefined;

    if (type == 'info') {
      izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
        title: title,
        timeout: 2000,
        message: message,
        zindex: '9999999999',
        position: 'bottomRigh  t',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      });
    }

    if (type == 'success') {
      izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
        title: title,
        message: message,
        timeout: 2000,
        zindex: '9999999999',
        position: 'bottomRight',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      });
    }

    if (type == 'warning') {
      izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
        title: title,
        timeout: 2000,
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
        timeout: 2000,
        zindex: '9999999999',
        position: 'bottomRight',
        transitionInMobile: 'fadeIn',
        transitionOutMobile: 'fadeOut'
      });
    }

    if (type == 'question') {}
  }), _defineProperty(_methods, "b64toBlob", function b64toBlob(b64Data, contentType, sliceSize) {
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
  }), _defineProperty(_methods, "createChallenge", function createChallenge() {
    var _this4 = this;

    if (this.$refs.create.validate()) {
      this.loading = true;
      var formData = new FormData();

      if (this.$root.imageExist) {
        var data1 = this.handleBlob(this.$root.croppedImage);
        formData.append('image', data1[0]);
        formData.append('image_ext', data1[1]);
      }

      if (this.imageDefault != 0) {
        if (this.$route.params.type != 'edit') {
          formData.append('image_default', this.imageDefault);
        }
      }

      this.durationValue = this.durationValueDay * 24 + parseInt(this.durationValueHr);
      formData.append('title', this.title);
      formData.append('summary', this.summary);
      formData.append('description', this.description);
      formData.append('rules', this.rulesContent);
      formData.append('duration', this.durationValue);
      formData.append('challenge_language', this.language);
      formData.append('judges', this.judgeType);

      if (this.SelectedJudges.length > 0) {
        formData.append('selected_judges', this.SelectedJudges);
      }

      formData.append('channel_id', this.new_channel);

      if (this.$route.params.type == 'edit') {
        formData.append('challengeId', this.$root.selectedChallenge.duel_id);
      }

      axios.post('/save-challenge', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        if (response.status == 200) {
          // edit mode
          if (_this4.$route.params.type == 'edit') {
            _this4.showAlert('Saved', ' Your changes has been saved', 'success');

            _this4.loading = false;
            return;
          } // save to database


          var storedChallenges = _this4.$root.getLocalStore('user_challenges_' + _this4.$root.username);

          storedChallenges.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);
              finalResult.unshift(response.data.challenge);
              _this4.$root.challengesList = finalResult;

              _this4.$root.LocalStore('user_challenges_' + _this4.$root.username, finalResult);
            }

            _this4.$router.push({
              path: '/board/challenges/panel/' + response.data.challenge.duel_id + '/description'
            });
          });
        }
      })["catch"](function (error) {
        _this4.showAlert('Oops!', ' Unable to create challenge', 'error');

        _this4.loading = false;
      });
    }
  }), _defineProperty(_methods, "fetchChannels", function fetchChannels() {
    var _this5 = this;

    axios.get('/fetch-user-channels-diary').then(function (response) {
      if (response.status == 200) {
        _this5.channelList = response.data;
      }
    })["catch"](function (error) {});
  }), _methods)
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Create.vue?vue&type=template&id=7a483760&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/Create.vue?vue&type=template&id=7a483760&scoped=true& ***!
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
            "col-lg-10 offset-lg-1 py-2 col-md-10 offset-md-1 px-2 d-md-block d-none fixed-top",
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
                    { attrs: { icon: "" }, on: { click: _vm.goBack } },
                    [_c("v-icon", [_vm._v("las la-arrow-left")])],
                    1
                  ),
                  _vm._v(" "),
                  this.$route.params.type == "new"
                    ? [
                        _vm._v(
                          "\n                  Create a challenge\n             "
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  this.$route.params.type == "edit"
                    ? [
                        _vm._v(
                          "\n                  Edit challenge\n             "
                        )
                      ]
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
                      "text-transform": "none",
                      "font-weight": "bolder",
                      color: "white",
                      "font-family": "MediumFont"
                    },
                    attrs: {
                      disabled: !_vm.formstate,
                      loading: _vm.loading,
                      small: "",
                      rounded: "",
                      color: "#3C87CD"
                    },
                    on: { click: _vm.createChallenge }
                  },
                  [
                    this.$route.params.type == "new"
                      ? [_vm._v("\n                  Create\n             ")]
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
          staticClass:
            " px-0 col-12 py-1 pt-2 d-md-none d-block fixed-top d-flex flex-row",
          staticStyle: {
            position: "sticky",
            background: "#F5F5FB",
            "border-bottom": "1px solid #c5c5c5"
          }
        },
        [
          _c("div", { staticClass: "col-8 py-0 my-0 px-0" }, [
            _c(
              "div",
              {
                staticStyle: {
                  "font-size": "16px",
                  "font-family": "HeaderFont"
                }
              },
              [
                _c(
                  "v-btn",
                  { attrs: { icon: "" }, on: { click: _vm.goBack } },
                  [_c("v-icon", [_vm._v("las la-arrow-left")])],
                  1
                ),
                _vm._v(" "),
                this.$route.params.type == "new"
                  ? [
                      _vm._v(
                        "\n                  Create a challenge\n             "
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                this.$route.params.type == "edit"
                  ? [
                      _vm._v(
                        "\n                  Edit challenge\n             "
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-4 py-0 my-0 text-right px-0" },
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
                    disabled: !_vm.formstate,
                    small: "",
                    rounded: "",
                    loading: _vm.loading,
                    color: "#3C87CD"
                  },
                  on: { click: _vm.createChallenge }
                },
                [
                  this.$route.params.type == "new"
                    ? [_vm._v("\n                  Create\n             ")]
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
        ]
      ),
      _vm._v(" "),
      _c(
        "v-app",
        {
          staticClass:
            "col-lg-8 offset-lg-2 py-1 mt-2 col-md-10 offset-md-1 px-2 ",
          staticStyle: { background: "transparent", "font-family": "BodyFont" }
        },
        [
          _c(
            "v-form",
            {
              ref: "create",
              staticClass: "row",
              model: {
                value: _vm.formstate,
                callback: function($$v) {
                  _vm.formstate = $$v
                },
                expression: "formstate"
              }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-8  py-1 my-0 px-2" },
                [
                  _c("v-text-field", {
                    staticStyle: { "font-size": "13px" },
                    attrs: {
                      label: "Title",
                      counter: "60",
                      "persistent-hint": "",
                      dense: "",
                      outlined: "",
                      placeholder: "CitonHub weekly challenge",
                      "prepend-inner-icon": "las la-trophy",
                      rules: _vm.titleRule,
                      color: "#3C87CD"
                    },
                    model: {
                      value: _vm.title,
                      callback: function($$v) {
                        _vm.title = $$v
                      },
                      expression: "title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: " col-lg-12 py-1 my-0 px-2" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-8 px-0" },
                  [
                    _c("v-textarea", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        height: "80px",
                        counter: "100",
                        rules: _vm.summaryRules,
                        outlined: "",
                        label: "Summary",
                        placeholder: "Build a social currency app"
                      },
                      model: {
                        value: _vm.summary,
                        callback: function($$v) {
                          _vm.summary = $$v
                        },
                        expression: "summary"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 py-1 my-0 mt-n3 px-2 pl-3" },
                [
                  _c("span", { staticStyle: { "font-size": "14px" } }, [
                    _vm._v("Cover Image")
                  ]),
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
                          return _vm.selectDefaultImg("/imgs/imgproj2.jpeg", 3)
                        }
                      }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: " col-lg-12 py-1 my-0 px-2" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-8 px-0" },
                  [
                    _c("v-select", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        label: "Application type",
                        items: _vm.languageIcon,
                        "item-text": "name",
                        disabled: _vm.challengeIsActive,
                        "item-value": "id",
                        multiple: "",
                        outlined: "",
                        rules: _vm.requiredRule,
                        placeholder: "select challenge app type"
                      },
                      model: {
                        value: _vm.language,
                        callback: function($$v) {
                          _vm.language = $$v
                        },
                        expression: "language"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: " col-lg-12 py-1 my-0 px-2" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-8 px-0" },
                  [
                    _c("v-select", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        label: " Challenge Channel",
                        placeholder:
                          "Select existing channel or enter new channel name",
                        outlined: "",
                        items: _vm.channelList,
                        "item-value": "space_id",
                        "item-text": "name"
                      },
                      model: {
                        value: _vm.new_channel,
                        callback: function($$v) {
                          _vm.new_channel = $$v
                        },
                        expression: "new_channel"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-12 py-1 my-2 px-2 text-left" }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "14px",
                      "font-family": "BodyFont"
                    }
                  },
                  [_vm._v("Description")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12 py-1 my-2 px-2 text-left" },
                [
                  _c("v-press-editor", {
                    attrs: {
                      height: "400px",
                      placeholder:
                        "The aim of this project is to test your ability in using local storage"
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
              _c("div", { staticClass: "col-lg-12 py-1 my-2 px-2 text-left" }, [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-size": "14px",
                      "font-family": "BodyFont"
                    }
                  },
                  [_vm._v("Rules")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12 py-1 my-2 px-2 text-left" },
                [
                  _c("v-press-editor", {
                    attrs: {
                      height: "400px",
                      placeholder: "Make sure most of the codes are yours"
                    },
                    model: {
                      value: _vm.rulesContent,
                      callback: function($$v) {
                        _vm.rulesContent = $$v
                      },
                      expression: "rulesContent"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12 py-1 my-2 mb-0 px-2 text-left" },
                [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        "font-family": "BodyFont"
                      }
                    },
                    [_vm._v("Who will Judge?")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12 py-0 my-0 px-2 text-left" },
                [
                  _c(
                    "v-chip",
                    {
                      staticClass: "d-inline-block mr-1",
                      style:
                        _vm.judgeType != "everyone"
                          ? "font-size:13px;cursor:pointer;"
                          : "font-size:13px;cursor:pointer;color:white;",
                      attrs: {
                        outlined: _vm.judgeType != "everyone",
                        color: "#3C87CD"
                      },
                      on: { click: _vm.enableEvery }
                    },
                    [_vm._v("Everyone")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-chip",
                    {
                      staticClass: "d-inline-block mr-1",
                      style:
                        _vm.judgeType != "custom"
                          ? "font-size:13px;cursor:pointer;"
                          : "font-size:13px;cursor:pointer;color:white;",
                      attrs: {
                        outlined: _vm.judgeType != "custom",
                        color: "#3C87CD"
                      },
                      on: { click: _vm.disableEvery }
                    },
                    [_vm._v("Select Judges")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.custom
                ? _c("div", { staticClass: " col-lg-12 py-1 my-0 px-2" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-8 px-0" },
                      [
                        _c("v-select", {
                          staticStyle: { "font-size": "13px" },
                          attrs: {
                            dense: "",
                            outlined: "",
                            placeholder: "select...",
                            counter: "20",
                            rules: _vm.requiredRule,
                            hint: "You can only add people you follow",
                            "persistent-hint": "",
                            "item-text": "username",
                            "item-value": "user_temp_id",
                            multiple: "",
                            items: _vm.Connections,
                            loading: _vm.loadingConnection,
                            color: "#3C87CD"
                          },
                          model: {
                            value: _vm.SelectedJudges,
                            callback: function($$v) {
                              _vm.SelectedJudges = $$v
                            },
                            expression: "SelectedJudges"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12 py-1 my-2 mt-4 mb-0 px-2 text-left" },
                [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        "font-family": "BodyFont"
                      }
                    },
                    [_vm._v("Set Duration")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 py-2 my-0 px-2" }, [
                _c("div", { staticClass: "row py-0 my-0" }, [
                  _c(
                    "div",
                    { staticClass: "col-6 text-center py-0 my-0" },
                    [
                      _c("v-text-field", {
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          disabled: _vm.challengeIsActive,
                          placeholder: _vm.$t("duels.days") + "...",
                          label: _vm.$t("duels.days"),
                          rules: _vm.durationRule2,
                          outlined: "",
                          type: "tel",
                          dense: "",
                          color: "#3C87CD"
                        },
                        model: {
                          value: _vm.durationValueDay,
                          callback: function($$v) {
                            _vm.durationValueDay = $$v
                          },
                          expression: "durationValueDay"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-6 text-center py-0 my-0" },
                    [
                      _c("v-text-field", {
                        staticStyle: { "font-size": "13px" },
                        attrs: {
                          placeholder: _vm.$t("duels.hours") + "...",
                          label: _vm.$t("duels.hours"),
                          disabled: _vm.challengeIsActive,
                          rules: _vm.durationRule,
                          outlined: "",
                          type: "tel",
                          dense: "",
                          color: "#3C87CD"
                        },
                        model: {
                          value: _vm.durationValueHr,
                          callback: function($$v) {
                            _vm.durationValueHr = $$v
                          },
                          expression: "durationValueHr"
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
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
                          on: { click: _vm.deleteChallenge }
                        },
                        [_vm._v("\n             Delete\n           ")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 py-5 my-5" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 py-5 my-5" })
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

/***/ "./resources/js/components/challenges/Create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/challenges/Create.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_7a483760_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=7a483760&scoped=true& */ "./resources/js/components/challenges/Create.vue?vue&type=template&id=7a483760&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_7a483760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_7a483760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a483760",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/challenges/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/Create.vue?vue&type=template&id=7a483760&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/challenges/Create.vue?vue&type=template&id=7a483760&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7a483760_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=7a483760&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/Create.vue?vue&type=template&id=7a483760&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7a483760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7a483760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);