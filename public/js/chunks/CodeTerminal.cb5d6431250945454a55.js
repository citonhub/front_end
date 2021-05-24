(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CodeTerminal"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/projects/CodeTerminal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xterm */ "./node_modules/xterm/lib/xterm.js");
/* harmony import */ var xterm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xterm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xterm-addon-fit */ "./node_modules/xterm-addon-fit/lib/xterm-addon-fit.js");
/* harmony import */ var xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xterm_css_xterm_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xterm/css/xterm.css */ "./node_modules/xterm/css/xterm.css");
/* harmony import */ var xterm_css_xterm_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xterm_css_xterm_css__WEBPACK_IMPORTED_MODULE_2__);
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
      serverAddress: 'http://app.citonhub.com',
      terminal: null,
      container: undefined,
      socket: ''
    };
  },
  mounted: function mounted() {
    this.inIt();
  },
  methods: {
    setUpTerminal: function setUpTerminal() {
      this.terminal = new xterm__WEBPACK_IMPORTED_MODULE_0__["Terminal"]({
        rendererType: "canvas",
        //Rendering type
        rows: 35,
        //Rows 
        convertEol: true,
        //When enabled, the cursor will be set to the beginning of the next line
        scrollback: 10,
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
      this.terminal.open(document.getElementById("terminal-container"));
      var fitAddon = new xterm_addon_fit__WEBPACK_IMPORTED_MODULE_3__["FitAddon"]();
      this.terminal.loadAddon(fitAddon); //  Support input and paste methods

      var _this = this; //Must redefine onethis,otherwisethisPointing will go wrong


      this.terminal.onData(function (key) {
        var order = ["stdin", key]; //Here the key value is the value you enter, and the data format must be required by the backend! ! ! !

        _this.socket.onsend(JSON.stringify(order)); //Convert to string

      });
    },
    inIt: function inIt() {
      //  Instantiate socket
      this.socket = io(this.serverAddress, {
        transports: ['websocket']
      });
      ; //  Monitor socket connection

      this.socket.onopen = this.open; //  Monitor socket error messages

      this.socket.onerror = this.error; //  Listen for socket messages

      this.socket.onmessage = this.getMessage; //  Send socket message

      this.socket.onsend = this.send;
    },
    open: function open() {
      console.log("Socket connection is successful");
      this.initXterm();
    },
    error: function error() {
      console.log("error in connecting");
    },
    close: function close() {
      this.socket.close();
      console.log("socket is closed");
    },
    getMessage: function getMessage(msg) {
      this.terminal.write(JSON.parse(msg.data)[1]);
    },
    send: function send(order) {
      this.socket.send(order);
    }
  }
});

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
    return _c("div", [_c("div", { attrs: { id: "terminal-container" } })])
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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



/***/ })

}]);