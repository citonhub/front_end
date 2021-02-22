(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NotificationsList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notifications/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      notifications: [],
      loading: false
    };
  },
  mounted: function mounted() {
    this.$root.showTopBar = true;
    this.getNotification();
  },
  methods: {
    checkDatereal: function checkDatereal(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      var aWeekAgo = moment().subtract(7, 'days');
      var anHourAgo = moment().subtract(1, 'hours');

      if (moment(realTimeHour) >= aWeekAgo) {
        if (moment(realTimeHour) >= anHourAgo) {
          return moment(realTimeHour).fromNow();
        }

        return moment(realTimeHour).format("h:mm a");
      } else {
        return moment(realTimeHour).calendar();
      }
    },
    goToNotification: function goToNotification(notification) {
      if (notification.type == 'new_connection') {
        this.$router.push({
          path: '/profile/' + this.$root.username
        });
      }

      if (notification.type == 'diary_changes') {
        this.$root.autoOpenChat = true;
        this.$root.autoOpenChatId = notification.diary_space.space_id;
        this.$router.push({
          path: '/channels'
        });
      }

      if (notification.type == 'post_like' || notification.type == 'post_pinned' || notification.type == 'post_comment') {
        this.$root.autoOpenPost = true;
        this.$root.autoOpenPostId = notification.post_data.post_id;
        this.$router.push({
          path: '/hub/'
        });
      }
    },
    markAsRead: function markAsRead() {
      axios.post('/mark-as-read').then(function (response) {
        if (response.status == 200) {}
      })["catch"](function (error) {});
    },
    getNotification: function getNotification() {
      var _this = this;

      this.loading = true;
      axios.get('/user-notification').then(function (response) {
        if (response.status == 200) {
          _this.notifications = response.data.notifications;
          _this.$root.authProfile.unread = 0;

          _this.markAsRead();

          _this.loading = false;
        }
      })["catch"](function (error) {
        _this.loading = false;
      });
    },
    imageStyle: function imageStyle(size, data, radius, type) {
      if (data.background_color == null) {
        var styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";

        if (data.image_name == null || data.image_name == '0') {
          styleString += 'background-color:whitesmoke; background-image:url(imgs/background1.jpg);';
        } else {
          if (data.image_name == 'default_1') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background3.jpg);';
          }

          if (data.image_name == 'default_2') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/background1.jpg);';
          }

          if (data.image_name == 'default_3') {
            styleString += 'background-color:whitesmoke; background-image:url(/imgs/imgproj2.jpeg);';
          }
        }

        return styleString;
      } else {
        var _styleString = "height:" + size + "px;width:" + size + "px;background-size:cover;border-radius:" + radius + ";background-repeat: no-repeat; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/' + type + '/' + imgLink + ');';
        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/notifications/List.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/notifications/List.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=6951a490&scoped=true& */ "./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/notifications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6951a490",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notifications/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/notifications/List.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/notifications/List.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=6951a490&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/notifications/List.vue?vue&type=template&id=6951a490&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_6951a490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);