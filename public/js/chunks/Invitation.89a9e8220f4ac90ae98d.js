(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Invitation"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/invitation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/invitation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['infoText', 'fromChat', 'alertComponent', 'extraInfo'],
  data: function data() {
    return {
      Alert: false,
      alertMsg: '',
      mails: [],
      items: [],
      emailRule: [function (v) {
        return !!v || 'Email is required';
      }],
      Emailformstate: false,
      loadingEmail: false,
      selectedConnections: '',
      purpose: '',
      connectionformstate: false,
      Connections: [],
      loadingConnection: false,
      selectedExtraOptions: false,
      that: this
    };
  },
  components: {},
  mounted: function mounted() {
    this.channelHasResources();
  },
  methods: (_methods = {
    channelHasResources: function channelHasResources() {
      var _this2 = this;

      var storedPlaylist = this.$root.getLocalStore('channel_playlist_' + this.$root.selectedSpace.space_id + this.$root.username);
      storedPlaylist.then(function (result) {
        if (result != null) {
          _this2.$root.channelHasResources = true;
        } else {
          _this2.$root.channelHasResources = false;
        }
      });

      if (!this.$root.channelHasResources) {
        var storedResouces = this.$root.getLocalStore('channel_resource_' + this.$root.selectedSpace.space_id + this.$root.username);
        storedResouces.then(function (result) {
          if (result != null) {
            _this2.$root.channelHasResources = true;
          } else {
            _this2.$root.channelHasResources = false;
          }
        });
      }
    },
    sendToConnections: function sendToConnections() {
      this.selectedExtraOptions = true;
      this.purpose = 'connection';
      this.fetchConnected();
    },
    mailInvite: function mailInvite() {
      this.selectedExtraOptions = true;
      this.purpose = 'mail';
    },
    preventClose: function preventClose() {},
    handleSetUp: function handleSetUp(type) {
      if (type == 'youtube') {
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/resources'
        });
      }

      if (type == 'devto') {
        this.$router.push({
          path: '/channels/' + this.$root.selectedSpace.space_id + '/resources'
        });
      }
    },
    sendToConnection: function sendToConnection() {
      var _this3 = this;

      if (this.selectedConnections) {
        this.loadingConnection = true;
        axios.post('/send-to-connections', {
          space_id: this.$route.params.spaceId,
          connections: [this.selectedConnections]
        }).then(function (response) {
          if (response.status == 200) {
            _this3.loadingConnection = false;

            _this3.alertComponent.showAlert('Nice', 'Invitation sent', 'success');
          }
        })["catch"](function (error) {
          _this3.alertComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');

          _this3.loadingConnection = false;
        });
      }
    },
    sendInviteMail: function sendInviteMail() {
      var _this4 = this;

      if (this.mails.length == 0) return;
      this.loadingEmail = true;
      axios.post('/send-space-invite-mail', {
        space_id: this.$route.params.spaceId,
        mails: this.mails
      }).then(function (response) {
        if (response.status == 200) {
          _this4.loadingEmail = false;

          _this4.alertComponent.showAlert('Nice', 'Invitation sent', 'success');
        }
      })["catch"](function (error) {
        _this4.alertComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');

        _this4.loadingEmail = false;
      });
    },
    fetchConnected: function fetchConnected() {
      var _this5 = this;

      this.loadingConnection = true;
      axios.get('/fetch-connected').then(function (response) {
        if (response.status == 200) {
          _this5.Connections = response.data.data;
          _this5.loadingConnection = false;
        }
      })["catch"](function (error) {
        _this5.loadingConnection = false;
      });
    },
    showAlert: function showAlert(duration, text) {
      this.Alert = true;
      this.alertMsg = text;

      var _this = this;

      setTimeout(function () {
        _this.Alert = false;
      }, duration);
    },
    closeShare: function closeShare() {
      this.$root.fromSpaceShare = false;
      this.$root.showShare = false;
    }
  }, _defineProperty(_methods, "preventClose", function preventClose() {}), _defineProperty(_methods, "shareToWhatsapp", function shareToWhatsapp() {
    var link = 'whatsapp://send?text=' + this.$root.shareText + ', ' + this.$root.shareLink;
    window.open(link, '_blank');
  }), _defineProperty(_methods, "shareToTwitter", function shareToTwitter() {
    var link = 'https://twitter.com/intent/tweet?' + 'url=' + this.$root.shareLink + '&text=' + this.$root.shareText;
    window.open(link, '_blank');
  }), _defineProperty(_methods, "showBot", function showBot() {
    window.location = this.$root.shareLink;
  }), _defineProperty(_methods, "copyLink", function copyLink() {
    var copyToClipboard = function copyToClipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    };

    copyToClipboard(this.$root.shareLink);
    this.alertComponent.showAlert('Nice', 'Link copied', 'success');
  }), _methods)
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/components/chats/invitation.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/invitation.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invitation_vue_vue_type_template_id_576b71d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitation.vue?vue&type=template&id=576b71d8& */ "./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&");
/* harmony import */ var _invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitation.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/invitation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invitation_vue_vue_type_template_id_576b71d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invitation_vue_vue_type_template_id_576b71d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/invitation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/invitation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chats/invitation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./invitation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/invitation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_template_id_576b71d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./invitation.vue?vue&type=template&id=576b71d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/invitation.vue?vue&type=template&id=576b71d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_template_id_576b71d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invitation_vue_vue_type_template_id_576b71d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);