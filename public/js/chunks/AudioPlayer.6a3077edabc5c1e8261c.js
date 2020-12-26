(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AudioPlayer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AudioPlayer.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["file", "playerId", 'colorBase'],

  /**
   * playbackTime = local var that syncs to audio.currentTime
   * audioDuration = duration of audio file in seconds
   * isPlaying = boolean (true if audio is playing)
   *
   **/
  data: function data() {
    return {
      playbackTime: 0,
      audioDuration: 100,
      audioLoaded: false,
      isPlaying: false,
      loading: false,
      loaded: false,
      sliderPercent: 0,
      url: ''
    };
  },
  methods: {
    saveFile: function saveFile(url) {
      return new Promise(function (resolve, reject) {
        // Get file name from url.
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = function () {
          resolve(xhr);
        };

        xhr.onerror = reject;
        xhr.open('GET', url);
        xhr.send();
      }).then(function (xhr) {
        return xhr;
      });
    },
    load: function load() {
      var _this = this;

      this.loading = true;
      var audioDownload = this.saveFile(this.file);
      audioDownload.then(function (result) {
        var audioBlob = result.response;
        var audioUrl = URL.createObjectURL(audioBlob);
        var audio = document.querySelector('#audio' + _this.playerId);
        audio.src = audioUrl;
        _this.loading = false;
        _this.loaded = true;
      })["catch"](function (e) {});
      var audio = document.querySelector('#audio' + this.playerId); //Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider 
      // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp

      audio.addEventListener("loadedmetadata", function (e) {
        this.initSlider();
      }.bind(this)); // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp

      audio.addEventListener("canplay", function (e) {
        this.audioLoaded = true;
      }.bind(this)); //Wait for audio to begin play, then start playback listener function

      this.$watch("isPlaying", function () {
        if (this.isPlaying) {
          var audio = document.querySelector('#audio' + this.playerId);
          this.initSlider(); //console.log("Audio playback started.");
          //prevent starting multiple listeners at the same time

          if (!this.listenerActive) {
            this.listenerActive = true; //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'

            audio.addEventListener("timeupdate", this.playbackListener);
          }
        }
      }); //Update current audio position when user drags progress slider

      this.$watch("playbackTime", function () {
        var audio = document.querySelector('#audio' + this.playerId);
        var diff = Math.abs(this.playbackTime - audio.currentTime); //Throttle synchronization to prevent infinite loop between playback listener and this watcher

        if (diff > 0.01) {
          var audio = document.querySelector('#audio' + this.playerId);
          audio.currentTime = this.playbackTime;
        }
      });
    },
    //Set the range slider max value equal to audio duration
    initSlider: function initSlider() {
      var audio = document.querySelector('#audio' + this.playerId);

      if (audio) {
        this.audioDuration = Math.round(audio.duration);
      }
    },
    //Convert audio current time from seconds to min:sec display
    convertTime: function convertTime(seconds) {
      var format = function format(val) {
        return "0".concat(Math.floor(val)).slice(-2);
      };

      var hours = seconds / 3600;
      var minutes = seconds % 3600 / 60;
      return [minutes, seconds % 60].map(format).join(":");
    },
    //Show the total duration of audio file
    totalTime: function totalTime() {
      var audio = document.querySelector('#audio' + this.playerId);

      if (audio && this.loaded) {
        var seconds = audio.duration;
        return this.convertTime(seconds);
      } else {
        return '00:00';
      }
    },
    seek: function seek(value) {
      var audio = document.querySelector('#audio' + this.playerId);
      var goToDuration = value / 100 * audio.duration;
      audio.currentTime = goToDuration;
      this.playbackTime = goToDuration;
      this.sliderPercent = value;
    },
    //Display the audio time elapsed so far
    elapsedTime: function elapsedTime() {
      var audio = document.querySelector('#audio' + this.playerId);

      if (audio) {
        var seconds = audio.currentTime;
        return this.convertTime(seconds);
      } else {
        return '00:00';
      }
    },
    //Playback listener function runs every 100ms while audio is playing
    playbackListener: function playbackListener(e) {
      var audio = document.querySelector('#audio' + this.playerId); //Sync local 'playbackTime' var to audio.currentTime and update global state

      this.playbackTime = audio.currentTime;
      this.sliderPercent = audio.currentTime / audio.duration * 100; //console.log("update: " + audio.currentTime);
      //Add listeners for audio pause and audio end events

      audio.addEventListener("ended", this.endListener);
      audio.addEventListener("pause", this.pauseListener);
    },
    //Function to run when audio is paused by user
    pauseListener: function pauseListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Function to run when audio play reaches the end of file
    endListener: function endListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    //Remove listeners after audio play stops
    cleanupListeners: function cleanupListeners() {
      var audio = document.querySelector('#audio' + this.playerId);
      audio.removeEventListener("timeupdate", this.playbackListener);
      audio.removeEventListener("ended", this.endListener);
      audio.removeEventListener("pause", this.pauseListener); //console.log("All cleaned up!");
    },
    toggleAudio: function toggleAudio() {
      var audio = document.querySelector('#audio' + this.playerId); //var audio = document.getElementById("audio-player");

      if (audio.paused) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.player-slider {\n  width: 10px;\n  height: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioPlayer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=template&id=1360cbf0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/AudioPlayer.vue?vue&type=template&id=1360cbf0& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "col-12 py-0 px-0 my-1 d-flex flex-row",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c("div", { staticClass: "mr-1" }, [
          _c(
            "span",
            [
              _c("v-icon", { attrs: { color: _vm.colorBase } }, [
                _vm._v("las la-microphone")
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", {
            staticClass: "px-1",
            style: "font-size:12px; color:" + _vm.colorBase + ";",
            domProps: { innerHTML: _vm._s(_vm.totalTime()) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mx-1", staticStyle: { width: "100%" } },
          [
            _c("v-progress-linear", {
              attrs: {
                rounded: "",
                height: "7",
                color: _vm.colorBase,
                value: _vm.sliderPercent
              },
              on: { change: _vm.seek }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mr-1" },
          [
            _c("audio", {
              ref: "audiofile",
              staticStyle: { display: "none" },
              attrs: { id: "audio" + _vm.playerId }
            }),
            _vm._v(" "),
            _vm.loading
              ? _c("v-progress-circular", {
                  staticClass: "px-2 py-1",
                  attrs: {
                    indeterminate: "",
                    color: _vm.colorBase,
                    width: "2",
                    size: "20"
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.isPlaying
              ? _c(
                  "v-btn",
                  {
                    staticClass: "mx-0",
                    attrs: { icon: "", color: _vm.colorBase },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.toggleAudio($event)
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      {
                        staticStyle: { "font-size": "24px" },
                        attrs: { color: _vm.colorBase }
                      },
                      [_vm._v(" mdi mdi-pause")]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isPlaying && _vm.loaded
              ? _c(
                  "v-btn",
                  {
                    staticClass: "mx-0",
                    attrs: { icon: "", color: _vm.colorBase },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.toggleAudio($event)
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      {
                        staticStyle: { "font-size": "24px" },
                        attrs: { color: _vm.colorBase }
                      },
                      [_vm._v("mdi mdi-play")]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isPlaying && !_vm.loading && !_vm.loaded
              ? _c(
                  "v-btn",
                  {
                    staticClass: "mx-0",
                    attrs: { icon: "", color: _vm.colorBase },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.load($event)
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      {
                        staticStyle: { "font-size": "24px" },
                        attrs: { color: _vm.colorBase }
                      },
                      [_vm._v("mdi mdi-cloud-download ")]
                    )
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("div", [
          _c("span", {
            style: "font-size:12px;color:" + _vm.colorBase + ";",
            domProps: { innerHTML: _vm._s(_vm.elapsedTime()) }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/AudioPlayer.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/AudioPlayer.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioPlayer_vue_vue_type_template_id_1360cbf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=template&id=1360cbf0& */ "./resources/js/components/chats/AudioPlayer.vue?vue&type=template&id=1360cbf0&");
/* harmony import */ var _AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/AudioPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AudioPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioPlayer_vue_vue_type_template_id_1360cbf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioPlayer_vue_vue_type_template_id_1360cbf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/AudioPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/AudioPlayer.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/AudioPlayer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioPlayer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/AudioPlayer.vue?vue&type=template&id=1360cbf0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/chats/AudioPlayer.vue?vue&type=template&id=1360cbf0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_template_id_1360cbf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioPlayer.vue?vue&type=template&id=1360cbf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/AudioPlayer.vue?vue&type=template&id=1360cbf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_template_id_1360cbf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_template_id_1360cbf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);