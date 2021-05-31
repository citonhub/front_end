(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CodeTerminal"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TerminalUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TerminalUI */ "./resources/js/components/projects/TerminalUI.js");
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
      serverAddress: 'http://app.citonhub.com:8080',
      terminal: null,
      container: undefined
    };
  },
  mounted: function mounted() {
    this.start();
  },
  methods: {
    connectToSocket: function connectToSocket(serverAddress) {
      return new Promise(function (res) {
        var socket = io(serverAddress, {
          transports: ['websocket', 'polling', 'flashsocket']
        });
        res(socket);
      });
    },
    startTerminal: function startTerminal(container, socket) {
      // Create an xterm.js instance.
      this.terminal = new _TerminalUI__WEBPACK_IMPORTED_MODULE_0__["TerminalUI"](socket); // Attach created terminal to a DOM element.

      this.terminal.attachTo(container); // When terminal attached to DOM, start listening for input, output events.
      // Check TerminalUI startListening() function for details.

      this.terminal.startListening();
    },
    start: function start() {
      var _this = this;

      this.container = document.getElementById("terminal-container"); // Connect to socket and when it is available, start terminal.

      this.connectToSocket(this.serverAddress).then(function (socket) {
        _this.startTerminal(_this.container, socket);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#terminal[data-v-6f2d8ae3]{\n     font-family: \"DejaVu Sans Mono\", \"Liberation Mono\", monospace;\n\t\tfont-size: 11px;\n\t\tcolor: rgb(240, 240, 240);\n\t\tbackground: #383734 !important; \n\t\tpadding: 3px;\n\t\tborder: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", {
        staticStyle: { "z-index": "9999999999999999999999999" },
        attrs: { id: "terminal-container" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/projects/CodeTerminal.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/projects/CodeTerminal.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodeTerminal_vue_vue_type_template_id_6f2d8ae3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true& */ "./resources/js/components/projects/CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true&");
/* harmony import */ var _CodeTerminal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeTerminal.vue?vue&type=script&lang=js& */ "./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CodeTerminal_vue_vue_type_style_index_0_id_6f2d8ae3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css& */ "./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CodeTerminal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeTerminal_vue_vue_type_template_id_6f2d8ae3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CodeTerminal_vue_vue_type_template_id_6f2d8ae3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f2d8ae3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/projects/CodeTerminal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeTerminal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_style_index_0_id_6f2d8ae3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=style&index=0&id=6f2d8ae3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_style_index_0_id_6f2d8ae3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_style_index_0_id_6f2d8ae3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_style_index_0_id_6f2d8ae3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_style_index_0_id_6f2d8ae3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_style_index_0_id_6f2d8ae3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/projects/CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/projects/CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_template_id_6f2d8ae3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=template&id=6f2d8ae3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_template_id_6f2d8ae3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeTerminal_vue_vue_type_template_id_6f2d8ae3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/projects/TerminalUI.js":
/*!********************************************************!*\
  !*** ./resources/js/components/projects/TerminalUI.js ***!
  \********************************************************/
/*! exports provided: TerminalUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalUI", function() { return TerminalUI; });
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xterm */ "./node_modules/xterm/lib/xterm.js");
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xterm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xterm_css_xterm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xterm/css/xterm.css */ "./node_modules/xterm/css/xterm.css");
/* harmony import */ var xterm_css_xterm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xterm_css_xterm_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // DO NOT forget importing xterm.css

var TerminalUI = /*#__PURE__*/function () {
  function TerminalUI(socket) {
    _classCallCheck(this, TerminalUI);

    this.terminal = new xterm__WEBPACK_IMPORTED_MODULE_0__["Terminal"]({
      rendererType: "canvas",
      //Rendering type
      rows: 100,
      //Rows 
      convertEol: true,
      //When enabled, the cursor will be set to the beginning of the next line
      scrollback: 20,
      //The amount of rollback in the terminal
      disableStdin: false,
      //Whether input should be disabled
      cursorStyle: "underline",
      //Cursor style
      cursorBlink: true,
      //Cursor blinks
      theme: {
        foreground: "yellow",
        //Font
        background: "#060101",
        //Background color
        cursor: "help" //Set cursor

      }
    });
    /* You can make your terminals colorful :) */

    this.socket = socket;
  }
  /**
   * Attach event listeners for terminal UI and socket.io client
   */


  _createClass(TerminalUI, [{
    key: "startListening",
    value: function startListening() {
      var _this = this;

      this.terminal.onData(function (data) {
        return _this.sendInput(data);
      });
      this.socket.on("output", function (data) {
        // When there is data from PTY on server, print that on Terminal.
        _this.write(data);
      });
    }
    /**
     * Print something to terminal UI.
     */

  }, {
    key: "write",
    value: function write(text) {
      this.terminal.write(text);
    }
    /**
     * Utility function to print new line on terminal.
     */

  }, {
    key: "prompt",
    value: function prompt() {
      this.terminal.write("\\r\\n$ ");
    }
    /**
     * Send whatever you type in Terminal UI to PTY process in server.
     * @param {*} input Input to send to server
     */

  }, {
    key: "sendInput",
    value: function sendInput(input) {
      this.socket.emit("input", input);
    }
    /**
     *
     * container is a HTMLElement where xterm can attach terminal ui instance.
     * div#terminal-container in this example.
     */

  }, {
    key: "attachTo",
    value: function attachTo(container) {
      this.terminal.open(container); // Default text to display on terminal.

      this.terminal.write(""); // this.prompt();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.terminal.clear();
    }
  }]);

  return TerminalUI;
}();

/***/ })

}]);