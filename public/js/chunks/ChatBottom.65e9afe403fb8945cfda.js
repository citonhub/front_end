(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatBottom"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatBottom.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_textarea_autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-textarea-autosize */ "./node_modules/vue-textarea-autosize/dist/vue-textarea-autosize.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.use(vue_textarea_autosize__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['screenType'],
  data: function data() {
    return {
      wordCount: 0,
      showSend: false,
      audioChunks: [],
      Alert: true,
      typingText: '',
      content: this.$root.postContent,
      alertMsg: '',
      recording: false,
      audioBlob: '',
      mediaRecorder: null,
      contentInWord: '',
      NewMsg: '',
      input: '',
      timer: '0:00',
      shiftIsPressed: false,
      showAttachment: true,
      seconds: 0,
      minute: 0,
      recorderInterval: null
    };
  },
  components: {},
  mounted: function mounted() {
    this.$root.bottomEditorValue = this.$refs.textBottom.$el;
    this.$root.channelBottomComp = this;
  },
  computed: {
    compiledMarkdown: function compiledMarkdown() {
      var renderer = new marked.Renderer();

      renderer.link = function (href, title, text) {
        var link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' ");
      };

      marked.setOptions({
        renderer: renderer
      });
      return marked(this.input, {
        sanitize: true
      });
    }
  },
  methods: {
    showShareBoard: function showShareBoard() {
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/share'
      });
    },
    reFocusEditor: function reFocusEditor() {
      this.$refs.textBottom.focus();
    },
    toggleEmoji: function toggleEmoji() {
      if (this.$root.showEmojiBox) {
        this.$root.showEmojiBox = false;
      } else {
        this.$root.showEmojiBox = true;
      }
    },
    handelkeyAct: function handelkeyAct(e) {
      if (e.keyCode == 16) {
        this.shiftIsPressed = true;
      }

      if (e.keyCode != 16 && e.keyCode != 13) {
        this.shiftIsPressed = false;
      }

      if (e.keyCode == 13 && this.shiftIsPressed) {
        e.preventDefault();
        this.sendMessage();
        this.shiftIsPressed = false;
      }
    },
    shareHandler: function shareHandler() {
      this.$root.sharePage = true;
      this.$root.showChatBottom = false;
    },
    update: function update(e) {
      this.wordCount = this.input.length;

      if (this.wordCount > 0) {
        this.showSend = true;
        this.isTyping();
      } else {
        this.showSend = false;
      }

      this.contentInWord = this.compiledMarkdown;
    },
    reFocus: function reFocus() {
      this.editor.focus();
    },
    toggleRecording: function toggleRecording() {
      if (this.recording) {
        this.stoprecord();
        this.recording = false;
      } else {
        this.recording = true;
        this.startrecord();
      }
    },
    startrecord: function startrecord() {
      var _this = this;

      this.recording = true;
      this.$root.recordUrl = '';
      this.audioChunks = [];
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(function (stream) {
        _this.mediaRecorder = new MediaRecorder(stream);

        _this.mediaRecorder.start();

        _this.startCounter();

        _this.audioChunks = [];

        _this.mediaRecorder.addEventListener("dataavailable", function (event) {
          _this.audioChunks.push(event.data);
        });

        _this.mediaRecorder.addEventListener("stop", function () {
          _this.audioBlob = new Blob(_this.audioChunks);
          _this.$root.recorderBlob = new Blob(_this.audioChunks);
          _this.$root.recordUrl = URL.createObjectURL(_this.audioBlob);
        });
      });
    },
    startCounter: function startCounter() {
      var _this2 = this;

      this.recorderInterval = null;
      this.recorderInterval = setInterval(function () {
        _this2.seconds++;
        var secondsString = '';

        if (_this2.seconds < 10) {
          secondsString = '0' + _this2.seconds;
        } else {
          if (_this2.seconds == 60) {
            _this2.seconds = 0;
            _this2.minute++;
            secondsString = '00';
          } else {
            secondsString = _this2.seconds;
          }
        }

        _this2.timer = _this2.minute + ':' + secondsString;
      }, 1000);
    },
    stoprecord: function stoprecord(type) {
      var _this3 = this;

      this.mediaRecorder.stop();
      clearInterval(this.recorderInterval);
      this.recording = false;
      this.seconds = 0;
      this.minute = 0;
      this.timer = '0:00';
      setTimeout(function () {
        if (type == 'send') {
          _this3.sendRecord();
        }
      }, 1000);
    },
    makeUUID: function makeUUID() {
      var id = "id" + Math.random().toString(16).slice(2);
      return id;
    },
    makeMessage: function makeMessage(msgType, data, reply, replied_message) {
      var NewMessage = {
        content: null,
        created_at: moment().subtract(1, 'hours'),
        is_reply: reply,
        message_id: this.makeUUID(),
        id: this.makeUUID(),
        initialSize: 200,
        index_count: this.$root.returnLastIndex() + 1,
        replied_message: replied_message,
        replied_message_id: null,
        showReply: false,
        showDate: null,
        loading: true,
        progressValue: 0,
        space_id: this.$route.params.spaceId,
        tagged: false,
        type: msgType,
        user_id: this.$root.user_temp_id,
        username: this.$root.username,
        video: {},
        audio: {},
        code: {},
        image: {},
        file: {}
      };

      if (msgType == 'image') {
        NewMessage.image = data;
      }

      if (msgType == 'video') {
        NewMessage.video = data;
      }

      if (msgType == 'audio') {
        NewMessage.audio = data;
      }

      if (msgType == 'code') {
        NewMessage.code = data;
      }

      if (msgType == 'file') {
        NewMessage.file = data;
      }

      return NewMessage;
    },
    isTyping: function isTyping() {
      var _this4 = this;

      var channel = window.Echo.join('global');
      setTimeout(function () {
        channel.whisper('typing', {
          user: _this4.$root.username,
          typing: true,
          spaceId: _this4.$route.params.spaceId
        });
      }, 500);
    },
    sendRecord: function sendRecord() {
      var formData = new FormData();
      var Data = null;
      this.$root.NewMsg = this.makeMessage('audio', Data, null, []);
      this.attachment_type = 'voiceRecord';
      formData.append('audio', this.$root.recorderBlob);
      formData.append('display_name', 'Voice Record');
      this.$root.Messages.push(this.$root.NewMsg);
      this.$root.spaceFullData.messages = this.$root.Messages;
      this.$root.LocalStore('full_' + this.$route.params.spaceId + this.$root.username, this.$root.spaceFullData);
      this.$root.scrollToBottom();
      formData.append('current_user', JSON.stringify(this.generateOnlineUsersList()));
      formData.append('is_reply', this.$root.is_reply);
      formData.append('attachment_type', this.attachment_type);
      formData.append('space_id', this.$route.params.spaceId);
      formData.append('temp_id', this.$root.NewMsg.message_id);
      formData.append('device_id', this.$root.userDeviceId);
      this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id, this.$root.NewMsg);
      this.$root.sendShareMessage(formData);
    },
    generateOnlineUsersList: function generateOnlineUsersList() {
      var _this5 = this;

      var onlineUserList = [];
      this.$root.selectedSpaceMembers.forEach(function (member) {
        var userData = _this5.$root.globalUsers.filter(function (user) {
          return user.id == member.user_id;
        });

        if (userData.length != 0) {
          onlineUserList.push(userData[0]);
        }
      });
      return onlineUserList;
    },
    sendMessage: function sendMessage() {
      var refocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.input.length == 0) return;
      this.input = '';
      this.showSend = false;
      this.$root.showRootReply = false;

      if (refocus) {
        this.$refs.textBottom.focus();
      }

      var Data = [];

      if (this.$root.is_reply) {
        this.$root.NewMsg = this.makeMessage(null, Data, '1', this.$root.replyMessage);
      } else {
        this.$root.NewMsg = this.makeMessage(null, Data, null, []);
      }

      this.$root.NewMsg.content = this.contentInWord;
      this.$root.Messages.push(this.$root.NewMsg);
      this.$root.spaceFullData.messages = this.$root.Messages;
      this.$root.LocalStore('full_' + this.$route.params.spaceId + this.$root.username, this.$root.spaceFullData);
      this.$root.scrollToBottom();
      var postData = {
        content: this.contentInWord,
        space_id: this.$route.params.spaceId,
        is_reply: this.$root.is_reply,
        current_user: JSON.stringify(this.generateOnlineUsersList()),
        replied_message_id: this.$root.replyMessage.message_id,
        attachment_type: null,
        temp_id: this.$root.NewMsg.message_id,
        device_id: this.$root.userDeviceId
      };
      this.$root.is_reply = false;
      this.$root.updateSpaceTracker(this.$root.selectedSpace.space_id, this.$root.NewMsg);
      this.$root.sendTextMessage(postData);
    },
    focusEditor: function focusEditor() {
      this.showAttachment = false;
      this.$root.showEmojiBox = false;
    },
    blurEditor: function blurEditor() {
      this.showAttachment = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.textareaLg[data-v-ae2a2dfc]{\n    font-size:13px; \n    background:whitesmoke;\n    width:100%; \n    height: 55px;\n    padding: 4px 6px;\n    resize:none; \n    overflow-x: hidden;\n     overflow-y: auto;\n    border:1px solid #e6e6e6; \n    border-radius:2px;\n}\n.textareaSm[data-v-ae2a2dfc] {\n    font-size:13px; \n    background:whitesmoke;\n    width:100%; \n    height: 55px;\n    padding: 4px 6px;\n    resize:none; \n    overflow-x: hidden;\n     overflow-y: auto;\n    border:1px solid #e6e6e6; \n    border-radius:2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row px-md-3 py-0" }, [
    _c(
      "div",
      {
        staticClass: "col-12 py-1 my-0 d-flex px-md-2 px-2 flex-row",
        staticStyle: { "align-items": "center", "justify-content": "center" }
      },
      [
        !_vm.recording
          ? [
              _vm.showAttachment && this.$root.selectedSpace.type != "Bot"
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-md-1",
                      attrs: { icon: "" },
                      on: { click: _vm.showShareBoard }
                    },
                    [_c("v-icon", [_vm._v("las la-paperclip")])],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mx-md-1 mr-1",
                  attrs: { icon: "" },
                  on: { click: _vm.toggleEmoji }
                },
                [_c("v-icon", [_vm._v("las la-grin")])],
                1
              ),
              _vm._v(" "),
              _c("textarea-autosize", {
                ref: "textBottom",
                class: _vm.screenType == "large" ? "textareaLg" : "textareaSm",
                attrs: {
                  placeholder: "Type here...",
                  "min-height": _vm.screenType == "large" ? 50 : 35,
                  "max-height": _vm.screenType == "large" ? 80 : 70
                },
                on: { input: _vm.update },
                nativeOn: {
                  keydown: function($event) {
                    return _vm.handelkeyAct($event)
                  },
                  focus: function($event) {
                    return _vm.focusEditor($event)
                  },
                  blur: function($event) {
                    return _vm.blurEditor($event)
                  }
                },
                model: {
                  value: _vm.input,
                  callback: function($$v) {
                    _vm.input = $$v
                  },
                  expression: "input"
                }
              }),
              _vm._v(" "),
              this.$root.selectedSpace.type != "Bot"
                ? [
                    _vm.showSend
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "mx-md-1",
                            attrs: { icon: "" },
                            on: { click: _vm.sendMessage }
                          },
                          [_c("v-icon", [_vm._v("las la-send")])],
                          1
                        )
                      : _c(
                          "v-btn",
                          {
                            staticClass: "mx-md-1",
                            attrs: { icon: "" },
                            on: { click: _vm.startrecord }
                          },
                          [_c("v-icon", [_vm._v("las la-microphone")])],
                          1
                        )
                  ]
                : [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mx-md-1",
                        attrs: { icon: "" },
                        on: { click: _vm.sendMessage }
                      },
                      [_c("v-icon", [_vm._v("las la-send")])],
                      1
                    )
                  ]
            ]
          : [
              _c(
                "div",
                {
                  staticClass: "ml-auto d-flex flex-row",
                  staticStyle: {
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "bg-danger",
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.stoprecord("cancle")
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { color: "#ffffff" } }, [
                        _vm._v("mdi-close")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mx-3 ",
                      staticStyle: {
                        "font-size": "14px",
                        color: "gray",
                        "font-family": "BodyFont"
                      }
                    },
                    [_vm._v(_vm._s(_vm.timer))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "bg-success",
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.stoprecord("send")
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { color: "#ffffff" } }, [
                        _vm._v("mdi-check")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { staticClass: "mx-1", attrs: { icon: "" } },
                    [_c("v-icon", [_vm._v("las la-microphone")])],
                    1
                  )
                ],
                1
              )
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-textarea-autosize/dist/vue-textarea-autosize.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-textarea-autosize/dist/vue-textarea-autosize.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-textarea-autosize v1.1.1 
 * (c) 2019 Saymon
 * Released under the MIT License.
 */
//
//
//
//
//
//
//
var script = {
  name: 'TextareaAutosize',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    autosize: {
      type: Boolean,
      default: true
    },
    minHeight: {
      type: [Number],
      'default': null
    },
    maxHeight: {
      type: [Number],
      'default': null
    },

    /*
     * Force !important for style properties
     */
    important: {
      type: [Boolean, Array],
      default: false
    }
  },
  data: function data() {
    return {
      // data property for v-model binding with real textarea tag
      val: null,
      // works when content height becomes more then value of the maxHeight property
      maxHeightScroll: false,
      height: 'auto'
    };
  },
  computed: {
    computedStyles: function computedStyles() {
      if (!this.autosize) return {};
      return {
        resize: !this.isResizeImportant ? 'none' : 'none !important',
        height: this.height,
        overflow: this.maxHeightScroll ? 'auto' : !this.isOverflowImportant ? 'hidden' : 'hidden !important'
      };
    },
    isResizeImportant: function isResizeImportant() {
      var imp = this.important;
      return imp === true || Array.isArray(imp) && imp.includes('resize');
    },
    isOverflowImportant: function isOverflowImportant() {
      var imp = this.important;
      return imp === true || Array.isArray(imp) && imp.includes('overflow');
    },
    isHeightImportant: function isHeightImportant() {
      var imp = this.important;
      return imp === true || Array.isArray(imp) && imp.includes('height');
    }
  },
  watch: {
    value: function value(val) {
      this.val = val;
    },
    val: function val(_val) {
      this.$nextTick(this.resize);
      this.$emit('input', _val);
    },
    minHeight: function minHeight() {
      this.$nextTick(this.resize);
    },
    maxHeight: function maxHeight() {
      this.$nextTick(this.resize);
    },
    autosize: function autosize(val) {
      if (val) this.resize();
    }
  },
  methods: {
    resize: function resize() {
      var _this = this;

      var important = this.isHeightImportant ? 'important' : '';
      this.height = "auto".concat(important ? ' !important' : '');
      this.$nextTick(function () {
        var contentHeight = _this.$el.scrollHeight + 1;

        if (_this.minHeight) {
          contentHeight = contentHeight < _this.minHeight ? _this.minHeight : contentHeight;
        }

        if (_this.maxHeight) {
          if (contentHeight > _this.maxHeight) {
            contentHeight = _this.maxHeight;
            _this.maxHeightScroll = true;
          } else {
            _this.maxHeightScroll = false;
          }
        }

        var heightVal = contentHeight + 'px';
        _this.height = "".concat(heightVal).concat(important ? ' !important' : '');
      });
      return this;
    }
  },
  created: function created() {
    this.val = this.value;
  },
  mounted: function mounted() {
    this.resize();
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.val),expression:"val"}],style:(_vm.computedStyles),domProps:{"value":(_vm.val)},on:{"focus":_vm.resize,"input":function($event){if($event.target.composing){ return; }_vm.val=$event.target.value;}}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextareaAutosize = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var version = '1.1.1';

var install = function install(Vue) {
  Vue.component('TextareaAutosize', TextareaAutosize);
};

var plugin = {
  install: install,
  version: version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),

/***/ "./resources/js/components/chats/ChatBottom.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chats/ChatBottom.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatBottom_vue_vue_type_template_id_ae2a2dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true& */ "./resources/js/components/chats/ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true&");
/* harmony import */ var _ChatBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatBottom.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ChatBottom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChatBottom_vue_vue_type_style_index_0_id_ae2a2dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css& */ "./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChatBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatBottom_vue_vue_type_template_id_ae2a2dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatBottom_vue_vue_type_template_id_ae2a2dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ae2a2dfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ChatBottom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ChatBottom.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chats/ChatBottom.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatBottom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_style_index_0_id_ae2a2dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=style&index=0&id=ae2a2dfc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_style_index_0_id_ae2a2dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_style_index_0_id_ae2a2dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_style_index_0_id_ae2a2dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_style_index_0_id_ae2a2dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_style_index_0_id_ae2a2dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chats/ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_template_id_ae2a2dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ChatBottom.vue?vue&type=template&id=ae2a2dfc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_template_id_ae2a2dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatBottom_vue_vue_type_template_id_ae2a2dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);