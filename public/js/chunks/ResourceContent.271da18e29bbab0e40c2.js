(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResourceContent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
var Resource = function Resource() {
  return Promise.all(/*! import() | Resource */[__webpack_require__.e("vendors~Board~Hub~LiveSession~ProjectView~Resource"), __webpack_require__.e("Resource")]).then(__webpack_require__.bind(null, /*! ./Resource.vue */ "./resources/js/components/chats/Resource.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      resources: [],
      that: this,
      contentInWord: '',
      title: ''
    };
  },
  components: {
    Resource: Resource
  },
  mounted: function mounted() {
    this.fetchResourceContent();
    this.setType();
  },
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = '';
    },
    fetchResourceContent: function fetchResourceContent() {
      var _this = this;

      axios.get('/fetch-resource-content/' + this.$route.params.resource_id).then(function (response) {
        if (response.status == 200) {
          console.log(response.data.contents);
          _this.resources = response.data.contents;
        }
      })["catch"](function (error) {});
    },
    setType: function setType() {
      if (this.$root.resourceContentType == 'resources') {
        this.title = 'My Articles';
      } else if (this.$root.resourceContentType == 'videos') {
        this.title = 'My Videos';
      }
    },
    goToSearch: function goToSearch() {
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_search'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& ***!
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
  return _c("div", { staticClass: "py-1" }, [
    _c(
      "div",
      {
        staticClass: "col-12 px-1 py-1 pt-0 fixed-top d-flex flex-row",
        staticStyle: {
          position: "sticky",
          background: "white",
          top: "0%",
          "border-bottom": "2px solid #c5c5c5",
          "align-items": "center"
        }
      },
      [
        _c(
          "div",
          { staticClass: " mr-1 col-2 px-1 py-0" },
          [
            _c(
              "v-btn",
              {
                attrs: { icon: "" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.goBack($event)
                  }
                }
              },
              [_c("v-icon", [_vm._v("las la-arrow-left")])],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-8 py-0 text-center",
            staticStyle: {
              "white-space": "nowrap",
              overflow: "hidden",
              "text-overflow": "ellipsis"
            }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "14px",
                  "font-family": "MediumFont"
                }
              },
              [_vm._v(_vm._s(_vm.that.$root.selectedResource.name))]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 px-2 px-md-2" },
      [
        _vm.that.$root.selectedResource.info
          ? _c(
              "span",
              {
                staticStyle: { "font-size": "13px", "font-family": "BodyFont" }
              },
              [
                _vm._v(
                  "\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam praesentium sequi, suscipit officia numquam aut, voluptatibus culpa cumque ducimus ab quasi necessitatibus nulla omnis assumenda, ratione enim! Odit, quod?\n         "
                )
              ]
            )
          : _c("v-textarea", {
              staticStyle: {
                "font-size": "13px",
                "font-family": "BodyFont",
                height: "100px"
              },
              attrs: {
                dense: "",
                placeholder:
                  "What is this " +
                  _vm.that.$root.selectedResource.type +
                  " about?",
                filled: "",
                height: "100",
                counter: "300",
                color: "#3C87CD"
              },
              model: {
                value: _vm.contentInWord,
                callback: function($$v) {
                  _vm.contentInWord = $$v
                },
                expression: "contentInWord"
              }
            })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "col-12 py-1 my-0 px-1 px-md-2 ",
        staticStyle: { background: "transparent", "font-family": "BodyFont" }
      },
      [
        _c("resource", {
          attrs: { contents: _vm.resources, show_add_icon: false }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/ResourceContent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/chats/ResourceContent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& */ "./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&");
/* harmony import */ var _ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceContent.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d4ee0488",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/ResourceContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/ResourceContent.vue?vue&type=template&id=d4ee0488&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceContent_vue_vue_type_template_id_d4ee0488_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);