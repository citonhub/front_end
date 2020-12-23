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
var convertTimeHHMMSS = function convertTimeHHMMSS(val) {
  var hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
  return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    file: {
      type: String,
      "default": null
    },
    autoPlay: {
      type: Boolean,
      "default": true
    },
    loop: {
      type: Boolean,
      "default": false
    },
    playerId: {
      "default": null
    },
    colorBase: {
      "default": '#3E8893'
    }
  },
  data: function data() {
    return {
      audio: undefined,
      currentSeconds: 0,
      durationSeconds: 0,
      innerLoop: false,
      loaded: false,
      showplay: true,
      playing: false,
      loading: false,
      fileurl: '',
      previousVolume: 35,
      showVolume: false,
      volume: 100,
      audioProgress: 0
    };
  },
  computed: {
    currentTime: function currentTime() {
      return convertTimeHHMMSS(this.currentSeconds);
    },
    durationTime: function durationTime() {
      return convertTimeHHMMSS(this.durationSeconds);
    },
    percentComplete: function percentComplete() {
      this.audioProgress = parseInt(this.currentSeconds / this.durationSeconds * 100);
      return parseInt(this.currentSeconds / this.durationSeconds * 100);
    },
    muted: function muted() {
      return this.volume / 100 === 0;
    }
  },
  watch: {
    volume: function volume(value) {
      this.showVolume = false;
      this.audio.volume = this.volume / 100;
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      this.loading = true;
      this.fileurl = this.file;
      setTimeout(function () {
        if (_this.audio.readyState >= 2) {
          _this.loaded = true;
          _this.loading = false;
          _this.durationSeconds = parseInt(_this.audio.duration);

          _this.audio.play();

          return _this.playing = true;
        }
      }, 2000);
      throw new Error('Failed to load audio file.');
    },
    togglePlay: function togglePlay() {
      if (!this.loaded) {
        this.load();
      }

      var playState = this.audio.paused ? 'play' : 'pause';

      if (playState == 'play') {
        this.playing = true;
      } else {
        this.playing = false;
      }

      this.audio[playState](); // Call play or paused method 
    },
    mute: function mute() {
      if (this.muted) {
        return this.volume = this.previousVolume;
      }

      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek: function seek(e) {
      var seekPos = this.audioProgress / 100;
      this.audio.currentTime = parseInt(this.audio.duration * seekPos);
    },
    stop: function stop() {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    update: function update(e) {
      this.currentSeconds = parseInt(this.audio.currentTime);
    }
  },
  created: function created() {
    this.innerLoop = this.loop;
  },
  mounted: function mounted() {
    this.audio = document.querySelector('#audio' + this.playerId);
    this.audio.addEventListener('timeupdate', this.update);
  }
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
        staticClass: "col-12 py-0 px-1 my-1 d-flex flex-row",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        _c("div", { staticClass: "mr-1" }, [
          _c(
            "span",
            {
              staticClass: "px-1 py-1",
              staticStyle: {
                border: "1px solid transparent",
                "border-radius": "50%"
              }
            },
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
          _c(
            "span",
            {
              staticClass: "px-1",
              style: "font-size:12px; color:" + _vm.colorBase + ";"
            },
            [_vm._v(" " + _vm._s(_vm.durationTime))]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mx-1", staticStyle: { width: "100%" } },
          [
            _c("v-progress-linear", {
              attrs: {
                rounded: "",
                value: _vm.percentComplete,
                height: "7",
                color: _vm.colorBase
              },
              on: { change: _vm.seek },
              model: {
                value: _vm.audioProgress,
                callback: function($$v) {
                  _vm.audioProgress = $$v
                },
                expression: "audioProgress"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("audio", {
              ref: "audiofile",
              staticStyle: { display: "none" },
              attrs: {
                loop: _vm.innerLoop,
                src: _vm.fileurl,
                preload: "auto",
                id: "audio" + _vm.playerId
              }
            }),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                staticClass: "mx-0",
                attrs: { icon: "", color: _vm.colorBase },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.togglePlay($event)
                  }
                }
              },
              [
                _vm.loading
                  ? _c(
                      "v-progress-circular",
                      {
                        staticClass: "px-2 py-1",
                        attrs: { indeterminate: "", color: _vm.colorBase }
                      },
                      [
                        _c("v-icon", { attrs: { color: _vm.colorBase } }, [
                          _vm._v("mdi mdi-play ")
                        ])
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.playing && !_vm.loading
                  ? _c("v-icon", { attrs: { color: _vm.colorBase } }, [
                      _vm._v("mdi mdi-cloud-download ")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.playing && _vm.percentComplete < 100
                  ? _c("v-icon", { attrs: { color: _vm.colorBase } }, [
                      _vm._v(" mdi mdi-pause")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.percentComplete == 100
                  ? _c("v-icon", { attrs: { color: _vm.colorBase } }, [
                      _vm._v("mdi mdi-play")
                    ])
                  : _vm._e()
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", [
          _c("span", { style: "font-size:12px;color:" + _vm.colorBase + ";" }, [
            _vm._v(" " + _vm._s(_vm.currentTime))
          ])
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