(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      resources: [],
      loading: false,
      saving: false,
      loadingResources: false,
      resourceName: '',
      has_devto_resource: true,
      drag: false,
      showAddArticle: false,
      devtoUsername: '',
      showTextarea: false,
      newPlaylistDesc: '',
      loadingDevtoConnect: false
    };
  },
  mounted: function mounted() {
    this.fetchResources();
    this.$root.showYoutubePlayer = false;
    this.$root.showYoutubePlayerSm = false;
    this.$root.showAddButton = false;
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "playlist",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    compiledMarkdown: function compiledMarkdown() {
      var renderer = new marked.Renderer();

      renderer.link = function (href, title, text) {
        var link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' ");
      };

      marked.setOptions({
        renderer: renderer
      });
      return marked(this.newPlaylistDesc, {
        sanitize: true
      });
    }
  },
  methods: {
    processContent: function processContent() {
      this.contentInWord = this.compiledMarkdown;
    },
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      this.$root.chatComponent.innerSideBarContent = '';
      this.$root.chatComponent.innerSideBarContent = '';
    },
    importDevtoArticle: function importDevtoArticle() {
      var _this = this;

      this.loadingDevtoConnect = true;
      axios.get('/connect-devto/' + this.$root.selectedSpace.space_id + '/' + this.devtoUsername).then(function (response) {
        if (response.status == 200) {
          var newResource = response.data.resource;

          _this.resources.unshift(newResource);

          _this.has_devto_resource = true;
          _this.loadingDevtoConnect = false;

          _this.$root.LocalStore('channel_resource_' + _this.$root.selectedSpace.space_id + _this.$root.username, _this.resources);

          _this.saveResourceOrder(false);

          _this.$root.chatComponent.showAlert('Created!', 'Resource has been created', 'success');
        }
      })["catch"](function (error) {
        _this.$root.chatComponent.showAlert('Oops!', 'Unable to create resource,please try again', 'error');

        _this.loadingDevtoConnect = false;
      });
    },
    checkIfisOwner: function checkIfisOwner() {
      var _this2 = this;

      var userMemberData = this.$root.selectedSpaceMembers.filter(function (members) {
        return members.user_id == _this2.$root.user_temp_id;
      });

      if (userMemberData.length != 0) {
        return userMemberData[0].is_admin;
      } else {
        return false;
      }
    },
    deleteResource: function deleteResource(resource) {
      var _this3 = this;

      var remainingResources = this.resources.filter(function (eachresource) {
        return eachresource.resource_id != resource.resource_id;
      });
      this.resources = remainingResources;
      axios.post('/delete-resources', {
        resource_id: resource.resource_id
      }).then(function (response) {
        if (response.status == 200) {
          _this3.$root.chatComponent.showAlert('Deleted!', 'Resource has been deleted', 'success');

          _this3.$root.LocalStore('channel_resource_' + _this3.$root.selectedSpace.space_id + _this3.$root.username, _this3.response);

          _this3.saveResourceOrder(false);
        }
      })["catch"](function (error) {
        _this3.$root.chatComponent.showAlert('Oops!', 'Unable to delete resource,please try again', 'error');
      });
    },
    showDelete: function showDelete(resource) {
      this.resources.map(function (eachresource) {
        eachresource["delete"] = false;
      });
      resource["delete"] = true;
    },
    handleOnDrop: function handleOnDrop() {
      this.drag = false;
      this.saveResourceOrder();
    },
    fetchResources: function fetchResources() {
      var _this4 = this;

      this.loadingResources = true;
      var storedResouces = this.$root.getLocalStore('channel_resource_' + this.$root.selectedSpace.space_id + this.$root.username);
      storedResouces.then(function (result) {
        if (result != null) {
          var finalResult = JSON.parse(result);
          _this4.resources = finalResult;
          _this4.loadingResources = false;

          _this4.checkForNewResource();
        } else {
          axios.get("/fetch-resource/".concat(_this4.$root.selectedSpace.space_id, "/resource")).then(function (response) {
            if (response.status == 200) {
              _this4.$root.LocalStore('channel_resource_' + _this4.$root.selectedSpace.space_id + _this4.$root.username, response.data.resources);

              var _finalResult = response.data.resources;
              _this4.has_devto_resource = response.data.has_devto_resource;
              _this4.resources = _finalResult;
              _this4.loadingResources = false;
            }
          })["catch"](function (error) {
            _this4.loadingResources = false;
          });
        }
      });
    },
    saveResourceOrder: function saveResourceOrder() {
      var _this5 = this;

      var showAlert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var ResourcesArray = [];
      this.resources.forEach(function (resource) {
        ResourcesArray.push(resource.resource_id);
      });
      axios.post('/save-resources-order', {
        space_id: this.$root.selectedSpace.space_id,
        resources: ResourcesArray,
        type: 'resource'
      }).then(function (response) {
        if (response.status == 200) {
          if (showAlert) {
            _this5.$root.chatComponent.showAlert('Saved!', 'Your changes have been saved', 'success');
          }

          _this5.$root.LocalStore('channel_resource_' + _this5.$root.selectedSpace.space_id + _this5.$root.username, _this5.resources);
        }
      })["catch"](function (error) {
        _this5.$root.chatComponent.showAlert('Oops!', 'Unable to save changes,please try again', 'error');
      });
    },
    checkForNewResource: function checkForNewResource() {
      var _this6 = this;

      axios.get("/fetch-resource/".concat(this.$root.selectedSpace.space_id, "/resource")).then(function (response) {
        if (response.status == 200) {
          _this6.$root.LocalStore('channel_resource_' + _this6.$root.selectedSpace.space_id + _this6.$root.username, response.data.resources);

          var finalResult = response.data.resources;
          _this6.resources = finalResult;
          _this6.has_devto_resource = response.data.has_devto_resource;
          _this6.$root.forcereloadResource = false;
        }
      })["catch"](function (error) {
        _this6.loadingResources = false;
      });
    },
    showContent: function showContent(resource) {
      this.$root.selectedResource = resource;
      this.$router.push({
        path: '/channels/' + this.$root.selectedSpace.space_id + '/resource_content/' + resource.resource_id
      });
      this.$root.resourceContentType = 'resources';
    },
    createResources: function createResources() {
      var _this7 = this;

      if (this.resourceName == '' || this.contentInWord == '') return;
      this.saving = true;
      axios.post('/create-resource', {
        space_id: this.$root.selectedSpace.space_id,
        name: this.resourceName,
        type: 'resource',
        info: this.contentInWord
      }).then(function (response) {
        if (response.status == 200) {
          _this7.resourceName = '';

          var storedResouces = _this7.$root.getLocalStore('channel_resource_' + _this7.$root.selectedSpace.space_id + _this7.$root.username);

          storedResouces.then(function (result) {
            if (result != null) {
              var finalResult = JSON.parse(result);
              finalResult = finalResult.unshift(response.data.resource);

              _this7.$root.LocalStore('channel_resource_' + _this7.$root.selectedSpace.space_id + _this7.$root.username, finalResult);
            } else {}
          });
          _this7.$root.channelHasResources = true;

          _this7.resources.unshift(response.data.resource);

          _this7.saveResourceOrder(false);

          _this7.showContent(response.data.resource);

          _this7.saving = false;
        }
      })["catch"](function (err) {
        console.log(err);
        _this7.saving = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.handle[data-v-bfd50d94]{\r\n  cursor: move;\n}\n.ghost[data-v-bfd50d94] {\r\n  opacity: 0.5;\r\n  background: white;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "py-0 px-0" },
    [
      _c(
        "div",
        {
          staticClass: "col-12 px-1 py-0 pt-0 fixed-top d-flex flex-row",
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
            { staticClass: " mr-1 col-2 py-1 px-1" },
            [
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.goBack } },
                [_c("v-icon", [_vm._v("las la-arrow-left")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 py-0 mr-1 text-right" })
        ]
      ),
      _vm._v(" "),
      _vm.loadingResources
        ? [
            _c(
              "div",
              { staticClass: "col-12 mt-4 text-center" },
              [
                _c("v-progress-circular", {
                  attrs: {
                    color: "#3C87CD",
                    indeterminate: "",
                    width: "3",
                    size: "25"
                  }
                })
              ],
              1
            )
          ]
        : [
            _vm.checkIfisOwner()
              ? [
                  _c(
                    "div",
                    { staticClass: " px-2 px-md-2 py-1  " },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "d-flex flex-row px-1 py-1 col-12 ",
                          staticStyle: {
                            background: "rgba(125, 179, 229, 0.4)",
                            "align-items": "center"
                          },
                          attrs: { flat: "" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "d-flex flex-column",
                              staticStyle: { width: "100%" }
                            },
                            [
                              _c("div", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.resourceName,
                                      expression: "resourceName"
                                    }
                                  ],
                                  staticClass: "py-2 px-2",
                                  staticStyle: {
                                    border: "1px solid white",
                                    width: "100%",
                                    "border-radius": "2px",
                                    "font-family": "BodyFont",
                                    "font-size": "13px",
                                    background: "white"
                                  },
                                  attrs: { placeholder: "Create a resource" },
                                  domProps: { value: _vm.resourceName },
                                  on: {
                                    focus: function($event) {
                                      _vm.showTextarea = true
                                    },
                                    keyup: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.createResources()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.resourceName = $event.target.value
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _vm.showTextarea || _vm.newPlaylistDesc != ""
                                ? _c("div", { staticClass: "mt-2" }, [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newPlaylistDesc,
                                          expression: "newPlaylistDesc"
                                        }
                                      ],
                                      staticClass: "py-2 px-2",
                                      staticStyle: {
                                        border: "1px solid white",
                                        width: "100%",
                                        "border-radius": "2px",
                                        "font-family": "BodyFont",
                                        height: "95px",
                                        "font-size": "13px",
                                        background: "white"
                                      },
                                      attrs: {
                                        placeholder:
                                          "What is this resource about? Markdown is supported."
                                      },
                                      domProps: { value: _vm.newPlaylistDesc },
                                      on: {
                                        input: [
                                          function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.newPlaylistDesc =
                                              $event.target.value
                                          },
                                          _vm.processContent
                                        ]
                                      }
                                    })
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ml-auto px-2" },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticStyle: { background: "white" },
                                  attrs: {
                                    loading: _vm.saving,
                                    icon: "",
                                    small: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.createResources()
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { staticStyle: { "font-size": "24px" } },
                                    [
                                      _vm._v(
                                        "\n                   las la-arrow-right\n                 "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "draggable",
              _vm._b(
                {
                  staticClass:
                    "d-flex flex-row flex-wrap col-12 py-1 px-2 px-md-2 ",
                  attrs: { tag: "div", handle: ".handle" },
                  on: {
                    start: function($event) {
                      _vm.drag = true
                    },
                    end: _vm.handleOnDrop
                  },
                  model: {
                    value: _vm.resources,
                    callback: function($$v) {
                      _vm.resources = $$v
                    },
                    expression: "resources"
                  }
                },
                "draggable",
                _vm.dragOptions,
                false
              ),
              _vm._l(_vm.resources, function(resource, index) {
                return _c(
                  "v-card",
                  {
                    key: index,
                    staticClass: "d-flex flex-row px-1  mb-2 col-12 ",
                    staticStyle: {
                      background: "rgba(125, 179, 229, 0.4)",
                      cursor: "pointer"
                    },
                    attrs: { ripple: false, flat: "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mr-2 ",
                        on: {
                          click: function($event) {
                            return _vm.showContent(resource)
                          }
                        }
                      },
                      [
                        _c(
                          "v-icon",
                          { staticClass: "ml-2", attrs: { color: "#000000" } },
                          [_vm._v("las la-folder")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "white-space": "nowrap",
                          overflow: "hidden",
                          "text-overflow": "ellipsis",
                          width: "100%"
                        },
                        on: {
                          click: function($event) {
                            return _vm.showContent(resource)
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-family": "BodyFont",
                              color: "black",
                              "font-size": "13px"
                            }
                          },
                          [_vm._v(_vm._s(resource.name))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.checkIfisOwner()
                      ? [
                          !resource.delete
                            ? _c(
                                "div",
                                {
                                  staticClass: "ml-auto px-2 d-flex flex-row",
                                  staticStyle: {
                                    cursor: "pointer",
                                    "align-items": "center"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "handle" },
                                    [_c("v-icon", [_vm._v("las la-braille")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "ml-1",
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.showDelete(resource)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { "x-small": "", icon: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticStyle: {
                                                "font-size": "17px"
                                              }
                                            },
                                            [_vm._v("mdi mdi-close")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          resource.delete
                            ? _c(
                                "div",
                                {
                                  staticClass: "ml-auto d-flex flex-row",
                                  staticStyle: { "align-items": "center" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "12px",
                                        "font-family": "BodyFont"
                                      }
                                    },
                                    [_vm._v("Delete?")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ml-1" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            "font-size": "10px",
                                            color: "white",
                                            "font-family": "BodyFont"
                                          },
                                          attrs: {
                                            "x-small": "",
                                            color: "error"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteResource(
                                                resource
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Yes")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ml-1" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            "font-size": "10px",
                                            "font-family": "BodyFont"
                                          },
                                          attrs: { "x-small": "" },
                                          on: {
                                            click: function($event) {
                                              resource.delete = false
                                            }
                                          }
                                        },
                                        [_vm._v("No")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      : _vm._e()
                  ],
                  2
                )
              }),
              1
            ),
            _vm._v(" "),
            _vm.checkIfisOwner() && !_vm.has_devto_resource
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 py-1 text-center",
                      staticStyle: { "margin-top": "70px" }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm.showAddArticle
                        ? _c(
                            "div",
                            {
                              staticClass: "col-12 px-1 py-1 d-flex flex-row",
                              staticStyle: { "align-items": "center" }
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.devtoUsername,
                                    expression: "devtoUsername"
                                  }
                                ],
                                staticClass: "py-2 px-3",
                                staticStyle: {
                                  width: "100%",
                                  heigth: "100%",
                                  "font-size": "13px",
                                  background: "whitesmoke",
                                  "border-radius": "2px",
                                  "font-family": "BodyFont",
                                  "text-transform": "none"
                                },
                                attrs: {
                                  placeholder: "Your devto username",
                                  type: "search"
                                },
                                domProps: { value: _vm.devtoUsername },
                                on: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.importDevtoArticle()
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.devtoUsername = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "ml-1" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticStyle: {
                                        "font-size": "10px",
                                        color: "white",
                                        "font-family": "BodyFont"
                                      },
                                      attrs: {
                                        loading: _vm.loadingDevtoConnect,
                                        small: "",
                                        color: "#3C87CD"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.importDevtoArticle()
                                        }
                                      }
                                    },
                                    [_vm._v("Import articles")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        : _c(
                            "div",
                            { staticClass: "col-12 py-1 text-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticStyle: {
                                    "font-family": "BodyFont",
                                    "font-size": "13px",
                                    "text-transform": "none"
                                  },
                                  attrs: {
                                    rounded: "",
                                    medium: "",
                                    outlined: "",
                                    color: "#000000"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.showAddArticle = true
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "px-2",
                                    attrs: {
                                      src: "/imgs/devto.png",
                                      height: "27px"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Import articles")])
                                ]
                              )
                            ],
                            1
                          )
                    ]
                  )
                ]
              : _vm._e()
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 py-1 text-center" }, [
      _c(
        "span",
        { staticStyle: { "font-size": "14px", "font-family": "MediumFont" } },
        [_vm._v("Resources")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 py-1 text-center" }, [
      _c(
        "div",
        {
          staticClass: "mt-1 text-center",
          staticStyle: {
            "font-family": "BodyFont",
            "font-size": "13px",
            color: "grey"
          }
        },
        [_vm._v("Create resource from your DevTo articles")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chats/resources.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chats/resources.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=bfd50d94&scoped=true& */ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&");
/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ "./resources/js/components/chats/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& */ "./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bfd50d94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chats/resources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=style&index=0&id=bfd50d94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_bfd50d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=bfd50d94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chats/resources.vue?vue&type=template&id=bfd50d94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_bfd50d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);