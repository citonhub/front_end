(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChannelInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      that: this,
      loadingLeave: false
    };
  },
  mounted: function mounted() {
    this.$root.componentIsLoading = false;
  },
  methods: {
    goToProfile: function goToProfile(member) {
      if (this.$root.username == member.username) return;

      if (this.checkIfisOwner()) {
        this.$root.chatComponent.selectedSpaceMembers = member;
        this.$root.showAdminOption = true;
      } else {
        this.$root.selectedUsername = member.username;
        this.$router.push({
          path: '/profile-view/' + member.username
        });
      }
    },
    close: function close() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.chatInnerSideBar = false;
    },
    EditChannel: function EditChannel() {
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = 'channel_edit';
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/channel_edit'
      });
    },
    leaveSpace: function leaveSpace() {
      var _this = this;

      this.loadingLeave = true;
      axios.post('/leave-space', {
        'space_id': this.$route.params.spaceId
      }).then(function (response) {
        if (response.status == 200) {
          var storedChat = _this.$root.getLocalStore('user_chat_list_new_' + _this.$root.username);

          storedChat.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);

              if (_this.$root.selectedSpace.type == 'Channel' || _this.$root.selectedSpace.type == 'Team') {
                var remainingSpace = finalResult.channels.filter(function (space) {
                  return space.space_id != _this.$root.selectedSpace.space_id;
                });
                finalResult.channels = remainingSpace;
              }

              if (_this.$root.selectedSpace.type == 'Bot') {
                var _remainingSpace = finalResult.pet_spaces.filter(function (space) {
                  return space.space_id != _this.$root.selectedSpace.space_id;
                });

                finalResult.pet_spaces = _remainingSpace;
              }

              _this.$root.LocalStore('user_chat_list_new_' + _this.$root.username, finalResult, false, 'leave_space');
            }
          });
        }
      })["catch"](function (error) {
        _this.loadingLeave = false;

        _this.$root.chatComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
      });
    },
    generateOnlineUsersList: function generateOnlineUsersList() {
      var _this2 = this;

      var onlineUserList = [];
      this.$root.selectedSpaceMembers.forEach(function (member) {
        var userData = _this2.$root.globalUsers.filter(function (user) {
          return user.id == member.user_id;
        });

        if (userData.length != 0) {
          onlineUserList.push(userData[0]);
        }
      });
      return onlineUserList;
    },
    checkIfOnline: function checkIfOnline(user_id) {
      var SpaceUserOnline = this.generateOnlineUsersList();
      var userData = SpaceUserOnline.filter(function (user) {
        return user.id == user_id;
      });

      if (userData.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    showPaymentOptions: function showPaymentOptions() {
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/add_payment'
      });
    },
    imageStyleSpace: function imageStyleSpace(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        }

        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:5px solid #3C87CD; cursor:pointer;";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/' + imgLink + ');';
        } else {
          _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        }

        return _styleString;
      }
    },
    imageStyle: function imageStyle(dimension, data, type) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        if (type == 'channel') {
          styleString += 'background-color:#ffffff; background-image:url(imgs/channel.png);';
        } else {
          styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        }

        return styleString;
      } else {
        var _styleString2 = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;

        if (type == 'channel' || type == 'bot') {
          _styleString2 += 'background-color:' + data.background_color + '; background-image:url(/imgs/space/thumbnails/' + imgLink + ');';
        } else {
          _styleString2 += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/thumbnails/' + imgLink + ');';
        }

        return _styleString2;
      }
    },
    showInvitation: function showInvitation() {
      this.$root.shareText = 'Join ' + this.$root.selectedSpace.name + ' on Citonhub';
      this.$root.shareLink = 'https://link.citonhub.com/channel/' + this.$root.selectedSpace.space_id;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/channel_invitation'
      });
    },
    checkIfisOwner: function checkIfisOwner() {
      var _this3 = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this3.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].is_admin;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/chats/ChannelInfo.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chats/ChannelInfo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& */ "./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&");
/* harmony import */ var _ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "005dbf02",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChannelInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChannelInfo.vue?vue&type=template&id=005dbf02&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelInfo_vue_vue_type_template_id_005dbf02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);