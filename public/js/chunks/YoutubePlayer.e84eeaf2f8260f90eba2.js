(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["YoutubePlayer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['screenType', 'playerHeight'],
  data: function data() {
    return {
      videoScr: '',
      player: undefined
    };
  },
  mounted: function mounted() {
    this.setVideoData();
  },
  computed: {
    playerState: function playerState() {}
  },
  watch: {
    playerState: function playerState(newValue, oldValue) {}
  },
  methods: {
    preventClose: function preventClose() {},
    setVideoData: function setVideoData() {
      var _this = this;

      var tag = document.createElement('script');
      tag.id = 'iframe-youtube';
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var intevalVideoSetting = null;
      intevalVideoSetting = setInterval(function () {
        if (_this.player == undefined) {
          _this.player = new YT.Player('YTplayer' + _this.screenType, {
            events: {
              'onReady': _this.onPlayerReady,
              'onStateChange': _this.onPlayerStateChange
            }
          });
        } else {
          clearInterval(intevalVideoSetting);
        }
      }, 3000);
    },
    playnext: function playnext() {
      if (this.player == undefined) {
        this.player = new YT.Player('YTplayer' + this.screenType, {
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          }
        });
      } else {
        console.log(this.player);
        this.player.loadVideoById('ezXqzmtzKX0');
      }
    },
    onPlayerReady: function onPlayerReady(event) {
      console.log('ready');
      this.player.playVideo();
    },
    onPlayerStateChange: function onPlayerStateChange(event) {
      if (event.data == -1) {
        this.player.playVideo();
      }

      console.log('state change', event);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      staticStyle: { background: "white" },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.preventClose()
        }
      }
    },
    [
      _c("iframe", {
        staticStyle: { "z-index": "99999999999999999" },
        attrs: {
          id: "YTplayer" + _vm.screenType,
          type: "text/html",
          width: "100%",
          height: _vm.playerHeight,
          src: "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&rel=0",
          frameborder: "0"
        },
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.preventClose()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-12 px-1 py-1 d-flex flex-row",
          staticStyle: { "align-items": "center", background: "white" }
        },
        [
          _c(
            "div",
            {
              staticStyle: { "font-family": "MediumFont", "font-size": "14px" }
            },
            [_vm._v("\n                How to work with WebRTC\n          ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ml-auto" },
            [
              _c(
                "v-btn",
                { attrs: { small: "", icon: "" } },
                [
                  _c("v-icon", { staticStyle: { "font-size": "20px" } }, [
                    _vm._v("mdi mdi-menu-down")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/YoutubePlayer.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/chats/YoutubePlayer.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& */ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&");
/* harmony import */ var _YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubePlayer.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12aa6ad5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/YoutubePlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./YoutubePlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/YoutubePlayer.vue?vue&type=template&id=12aa6ad5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubePlayer_vue_vue_type_template_id_12aa6ad5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);