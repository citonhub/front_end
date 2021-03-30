(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PointInfoBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['alertComponent'],
  data: function data() {
    return {
      that: this,
      nextLevel: '',
      presentLevel: '',
      remainingPoints: 0,
      loadingmakeMentor: false,
      languages: [],
      languageIcon: ['Javascript', 'NodeJs', 'PHP', 'VueJs', 'ReactJs', 'Python', 'C', 'C++', 'Java', 'C#', 'Erlang', 'Kotlin', 'Fortran', 'Perl', 'R', 'Ruby', 'Go', 'Hashkell', 'Lua', 'Pascal', 'Typescript', 'Rust', 'Swift', 'Scala'],
      level: '',
      xpLeft: 0,
      barValue: 0,
      pic: '',
      pic1: ''
    };
  },
  mounted: function mounted() {
    this.calculateLevel(this.$root.authProfile.points);
    this.calculateLevelNew(this.$root.authProfile.points);
  },
  methods: {
    calculateLevelNew: function calculateLevelNew(point) {
      if (point >= 50 && point <= 99) {
        this.level = 'Steel';
        this.nextLevel = 'Bronze';
        this.xpLeft = 100 - point;
        this.barValue = point / 100 * 100;
        this.pic = '/imgs/bronze.svg';
        this.pic1 = '/imgs/steel.svg';
      } else if (point >= 100 && point <= 299) {
        this.level = 'Bronze';
        this.nextLevel = 'Silver';
        this.xpLeft = 300 - point;
        this.barValue = point / 300 * 100;
        this.pic = '/imgs/silver.svg';
        this.pic1 = '/imgs/bronze.svg';
      } else if (point >= 300 && point <= 599) {
        this.level = 'Silver';
        this.nextLevel = 'Gold';
        this.xpLeft = 600 - point;
        this.barValue = point / 600 * 100;
        this.pic = '/imgs/gold.svg';
        this.pic1 = '/imgs/silver.svg';
      } else if (point >= 600 && point <= 999) {
        this.level = 'Gold';
        this.nextLevel = 'Platinum';
        this.xpLeft = 1000 - point;
        this.barValue = point / 1000 * 100;
        this.pic = '/imgs/platinum.svg';
        this.pic1 = '/imgs/gold.svg';
      } else if (point >= 1000 && point <= 1499) {
        this.level = 'Platinum';
        this.nextLevel = 'Diamond';
        this.xpLeft = 1500 - point;
        this.barValue = point / 1500 * 100;
        this.pic = '/imgs/diamond.svg';
        this.pic1 = '/imgs/platinum.svg';
      } else if (point >= 1500 && point <= 9999) {
        this.level = 'Platinum';
        this.nextLevel = 'Diamond';
        this.xpLeft = 10000 - point;
        this.barValue = point / 10000 * 100;
        this.pic = '/imgs/diamond.svg';
        this.pic1 = '/imgs/platinum.svg';
      }
    },
    createChannel: function createChannel() {
      this.$root.componentIsLoading = true;

      if (this.$router.currentRoute.path.indexOf('channel') >= 0) {
        this.$root.showPointDetailsInfo = false;
        this.$router.push({
          path: '/channels/create'
        });
      } else {
        this.$root.showCreateChannel = true;
        this.$root.showPointDetailsInfo = false;
        this.$router.push({
          path: '/channels'
        });
      }
    },
    makeMentor: function makeMentor() {
      var _this = this;

      this.loadingmakeMentor = true;
      axios.post('/make-mentor', {
        language: this.languages
      }).then(function (response) {
        if (response.status == 200) {
          _this.$root.authProfile.is_mentor = true;
          _this.loadingmakeMentor = false;

          if (_this.$root.fromMentorPage) {
            _this.$root.MentorPageComponent.getMentors();
          }
        }
      })["catch"](function (error) {
        _this.alertComponent.showAlert('Oops!', 'Something went wrong, please try again', 'error');

        _this.loadingmakeMentor = false;
      });
    },
    shareProject: function shareProject() {
      this.$root.showPointDetailsInfo = false;
      this.$root.componentIsLoading = true;
      this.$root.autoOpenAddPost = true;
      this.$router.push({
        path: '/hub'
      });
    },
    calculateLevel: function calculateLevel(point) {
      this.nextLevel = '';
      this.remainingPoints = 0;

      if (point >= 50 && point <= 99) {
        this.nextLevel = 'a Bronze citon';
        this.remainingPoints = 100 - point;
        this.presentLevel = 'a Steel citon';
        this.newLevelImage = '/imgs/steel.svg';
      } else if (point >= 100 && point <= 299) {
        this.nextLevel = 'a Silver citon';
        this.remainingPoints = 300 - point;
        this.presentLevel = 'a Bronze citon';
        this.newLevelImage = '/imgs/bronze.svg';
      } else if (point >= 300 && point <= 599) {
        this.nextLevel = 'a Gold citon';
        this.remainingPoints = 600 - point;
        this.presentLevel = 'a Silver citon';
        this.newLevelImage = '/imgs/silver.svg';
      } else if (point >= 600 && point <= 999) {
        this.nextLevel = 'a Platinum citon';
        this.remainingPoints = 1000 - point;
        this.presentLevel = 'a Gold citon';
        this.newLevelImage = '/imgs/gold.svg';
      } else if (point >= 1000 && point <= 1499) {
        this.nextLevel = 'a Diamond citon';
        this.remainingPoints = 1500 - point;
        this.presentLevel = 'a Platinum citon';
        this.newLevelImage = '/imgs/platinum.svg';
      } else if (point >= 1500 && point <= 9999) {
        this.nextLevel = 'a Diamond citon';
        this.remainingPoints = 10000 - point;
        this.presentLevel = 'a Diamond citon';
        this.newLevelImage = '/imgs/diamond.svg';
      }

      return [this.nextLevel, this.remainingPoints];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/chats/PointInfoBoard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/chats/PointInfoBoard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& */ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&");
/* harmony import */ var _PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointInfoBoard.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ce6b62f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/PointInfoBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PointInfoBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/PointInfoBoard.vue?vue&type=template&id=ce6b62f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PointInfoBoard_vue_vue_type_template_id_ce6b62f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);