(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PanelLoaderChallenge"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    this.checkState();
  },
  components: {},
  computed: {},
  data: function data() {
    return {
      participants: [],
      selecetedPanelId: '',
      pageContent: '',
      selectedParticipantId: '',
      loading: false,
      saveLoading: false,
      Alert: false,
      alertMsg: '',
      rating: 0,
      participantSelected: [],
      recheckCodeBox: true,
      votes: [],
      PanelIsWeb: true
    };
  },
  methods: {
    showAlert: function showAlert() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments.length > 1 ? arguments[1] : undefined;
      var type = arguments.length > 2 ? arguments[2] : undefined;

      if (type == 'info') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.info({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'success') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.success({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'warning') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.warning({
          title: title,
          message: message,
          timeout: 5000,
          zindex: '9999999999',
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }

      if (type == 'error') {
        izitoast__WEBPACK_IMPORTED_MODULE_0___default.a.error({
          title: title,
          message: message,
          zindex: '9999999999',
          timeout: 5000,
          position: 'bottomRight',
          transitionInMobile: 'fadeIn',
          transitionOutMobile: 'fadeOut'
        });
      }
    },
    goTopanel: function goTopanel() {
      this.$root.panelFromChallenges = true;
      this.$router.push({
        path: '/board/projects/panel/' + this.participantSelected.project_slug
      });
    },
    checkState: function checkState() {
      this.loading = true;
      this.fetchParticipants();
    },
    goBack: function goBack() {
      this.$root.showResultPage = false;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    showPage: function showPage(participant) {
      this.pageContent = '';
      this.loading = true;
      this.participantSelected = participant;
      this.selectedParticipantId = participant.id;
      this.selecetedPanelId = participant.panel_id;

      if (participant.is_web) {
        this.loadPageContent(this.selecetedPanelId);
      } else {
        this.runCodeOnSandbox();
      }
    },
    loadPageContent: function loadPageContent(panelId) {
      var _this2 = this;

      axios.get('/run-panel/' + panelId).then(function (response) {
        if (response.status == 200) {
          _this2.loading = false;
          _this2.pageContent = response.data;
        }
      })["catch"](function (error) {
        _this2.showAlert('Oops!', 'Unable to load page content', 'error');
      });
    },
    checkResponse: function checkResponse(token) {
      var _this = this;

      axios.post('/check-for-submission', {
        token: token,
        langId: _this.selectedLangId
      }).then(function (response) {
        if (response.status == 200) {
          if (response.data[0].status.description == 'Accepted') {
            _this.pageContent = response.data[0].stdout;
          } else if (response.data[0].status.description == 'In Queue') {
            _this.pageContent = 'In Queue...';

            _this.checkResponse(response.data[0].token);
          } else if (response.data[0].status.description == 'Processing') {
            _this.pageContent = 'Processing...';

            _this.checkResponse(response.data[0].token);
          } else {
            _this.pageContent = response.data[0].stdout + '\n Error: \n' + response.data[0].stderr;
          }

          if (_this.$root.codeBoxOpened == false) {}

          _this.recheckCodeBox = true;
        }
      })["catch"](function (error) {
        _this.pageContent = 'An issue occured,unable to run on sandbox...';
      });
    },
    runCodeOnSandbox: function runCodeOnSandbox() {
      var _this3 = this;

      axios.post('/run-code-on-sandbox-project', {
        panel_id: this.selecetedPanelId
      }).then(function (response) {
        if (response.status == 200) {
          var token = response.data[0][0].token;

          if (response.data[0][0].status.description == 'Accepted') {
            _this3.pageContent = response.data[0][0].stdout;
          } else if (response.data[0][0].status.description == 'In Queue') {
            _this3.pageContent = 'In Queue...';
            setTimeout(function () {
              _this3.checkResponse(token, response.data[1]);
            }, 1000);
          } else if (response.data[0][0].status.description == 'Processing') {
            _this3.pageContent = 'Processing...';
            setTimeout(function () {
              _this3.checkResponse(token, response.data[1]);
            }, 1000);
          } else {
            _this3.pageContent = response.data[0][0].stdout + '\n Error: \n' + response.data[0][0].stderr;
          }
        }
      })["catch"](function (error) {
        _this3.pageContent = 'An issue occured,unable to run on sandbox...';
      });
    },
    fetchParticipants: function fetchParticipants() {
      var _this4 = this;

      axios.get('/fetch-challenge-participants/' + this.$route.params.challenge_id).then(function (response) {
        if (response.status == 200) {
          _this4.participants = response.data.participants;
          _this4.votes = response.data.votes;
          _this4.selectedParticipantId = ''; // show first result

          if (_this4.participants[0]) {
            _this4.showPage(_this4.participants[0]);
          }
        }
      })["catch"](function (error) {
        _this4.showAlert('Oops!', 'Unable to fetch participants', 'error');
      });
    },
    SaveVotes: function SaveVotes() {
      var _this5 = this;

      setTimeout(function () {
        if (_this5.votes.length == 0) {
          return;
        }

        _this5.saveLoading = true;
        axios.post('/save-challenge-votes', {
          votes: _this5.votes
        }).then(function (response) {
          if (response.status == 200) {
            _this5.saveLoading = false;

            _this5.showAlert('Nice!', 'Your votes have been save', 'success');
          }
        })["catch"](function (error) {
          _this5.saveLoading = false;

          _this5.showAlert('Oops!', 'Unable to save votes', 'error');
        });
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.scroller[data-v-63885003]::-webkit-scrollbar {\n  height: 5px;\n}\n.scroller[data-v-63885003]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid darkgrey;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=template&id=63885003&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/PanelLoader.vue?vue&type=template&id=63885003&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { position: "absolute", height: "100%", width: "100%" } },
    [
      _c(
        "div",
        {
          staticClass: "col-12 my-0 py-2 d-flex  scroller ",
          staticStyle: {
            "overflow-x": "auto",
            "white-space": "nowrap",
            "z-index": "9999999999",
            "border-top-left-radius": "6px",
            "border-top-right-radius": "6px",
            left: "0",
            background: "#F3F8FC"
          }
        },
        [
          _c(
            "v-btn",
            {
              staticClass: "d-inline-block",
              staticStyle: { position: "sticky", left: "0px" },
              attrs: { small: "", icon: "" },
              on: { click: _vm.goBack }
            },
            [
              _c("v-icon", { attrs: { color: "#3C87CD" } }, [
                _vm._v("mdi mdi-close mdi-18px")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.participants, function(participant, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "ma-1 mx-1 ml-0 py-1 px-2 fileText d-inline-block",
                style:
                  _vm.selecetedPanelId == participant.panel_id
                    ? "color:white;background-color:#3C87CD;"
                    : "background:transparent;border:1px solid #3C87CD;",
                attrs: { small: "" },
                on: {
                  click: function($event) {
                    return _vm.showPage(participant)
                  }
                }
              },
              [
                participant.type == "user"
                  ? _c("span", [_vm._v(_vm._s(participant.username))])
                  : _vm._e(),
                _vm._v(" "),
                participant.type == "team"
                  ? _c("span", [_vm._v(_vm._s(participant.team.name))])
                  : _vm._e()
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.pageContent == "" && _vm.loading
        ? _c(
            "div",
            {
              staticClass: " px-5 col-lg-4 offset-lg-4 px-1 py-0 d-flex",
              staticStyle: {
                border: "0",
                height: "80%",
                top: "5%",
                left: "0",
                "z-index": "99999999999",
                "align-items": "center",
                "justify-content": "center"
              }
            },
            [
              _c("v-progress-circular", {
                attrs: {
                  color: "#3C87CD",
                  indeterminate: "",
                  width: "3",
                  size: "28"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.pageContent != "" && _vm.participantSelected.is_web
        ? _c("iframe", {
            staticClass: "col-12 mt-0  px-0 py-0",
            staticStyle: {
              height: "100%",
              background: "white",
              border: "1px solid transparent",
              "border-radius": "0px",
              "z-index": "9999999999"
            },
            attrs: {
              sandbox:
                "allow-same-origin allow-scripts allow-popups allow-forms allow-modals",
              srcdoc: _vm.pageContent
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.pageContent != "" && !_vm.participantSelected.is_web
        ? _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.pageContent,
                expression: "pageContent"
              }
            ],
            staticClass: "col-12 mt-0 mt-md-1",
            staticStyle: {
              "font-size": "14px",
              top: "0",
              height: "100%",
              left: "0",
              background: "white",
              border: "1px solid transparent",
              "border-radius": "0px"
            },
            attrs: { readonly: "" },
            domProps: { value: _vm.pageContent },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.pageContent = $event.target.value
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "py-2 px-2",
          staticStyle: {
            position: "absolute",
            width: "100%",
            left: "0%",
            bottom: "0%",
            background: "rgba(60, 135, 205)",
            "z-index": "9999999999999999999"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 py-0 px-0" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-6 py-0 px-0 d-flex flex-row",
                staticStyle: {
                  "align-items": "center",
                  "justify-content": "center"
                }
              },
              [
                _vm.votes.length != 0
                  ? [
                      _vm.selectedParticipantId == ""
                        ? _c(
                            "span",
                            [
                              _c("v-icon", { attrs: { color: "#ffffff" } }, [
                                _vm._v("mdi-star")
                              ]),
                              _c(
                                "span",
                                {
                                  staticClass: "px-1",
                                  staticStyle: {
                                    "font-size": "12px",
                                    color: "white"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("duels.votes")))]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      this.$route.params.type == "vote"
                        ? _vm._l(_vm.votes, function(vote, index) {
                            return _c(
                              "div",
                              { key: index },
                              [
                                vote.participant_id == _vm.selectedParticipantId
                                  ? _c("v-rating", {
                                      attrs: { color: "#ffffff" },
                                      on: {
                                        input: function($event) {
                                          return _vm.SaveVotes()
                                        }
                                      },
                                      model: {
                                        value: vote.stars,
                                        callback: function($$v) {
                                          _vm.$set(vote, "stars", $$v)
                                        },
                                        expression: "vote.stars"
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          })
                        : _c("div", [
                            _c(
                              "span",
                              [
                                _c("v-icon", { attrs: { color: "#ffffff" } }, [
                                  _vm._v("mdi-star")
                                ]),
                                _c(
                                  "span",
                                  {
                                    staticClass: "px-1",
                                    staticStyle: {
                                      "font-size": "13px",
                                      color: "white"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.participantSelected.votes) +
                                        " " +
                                        _vm._s(_vm.$t("duels.votes"))
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                    ]
                  : _c("div", [
                      _c(
                        "span",
                        [
                          _c("v-icon", { attrs: { color: "#ffffff" } }, [
                            _vm._v("mdi-star")
                          ]),
                          _c(
                            "span",
                            {
                              staticClass: "px-1",
                              staticStyle: {
                                "font-size": "13px",
                                color: "white"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.participantSelected.votes) +
                                  " " +
                                  _vm._s(_vm.$t("duels.votes"))
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-3 py-0 px-0" })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "d-inline-block ",
          staticStyle: {
            "z-index": "999999999999999",
            position: "absolute",
            bottom: "12%",
            right: "2%"
          },
          attrs: { medium: "", fab: "", color: "#3C87CD" },
          on: { click: _vm.goTopanel }
        },
        [
          _c(
            "v-icon",
            { staticStyle: { "font-size": "25px", color: "white" } },
            [_vm._v("las la-laptop-code")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/challenges/PanelLoader.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/challenges/PanelLoader.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PanelLoader_vue_vue_type_template_id_63885003_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PanelLoader.vue?vue&type=template&id=63885003&scoped=true& */ "./resources/js/components/challenges/PanelLoader.vue?vue&type=template&id=63885003&scoped=true&");
/* harmony import */ var _PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PanelLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PanelLoader_vue_vue_type_style_index_0_id_63885003_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css& */ "./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PanelLoader_vue_vue_type_template_id_63885003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PanelLoader_vue_vue_type_template_id_63885003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63885003",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/challenges/PanelLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_style_index_0_id_63885003_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=style&index=0&id=63885003&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_style_index_0_id_63885003_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_style_index_0_id_63885003_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_style_index_0_id_63885003_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_style_index_0_id_63885003_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_style_index_0_id_63885003_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/challenges/PanelLoader.vue?vue&type=template&id=63885003&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/challenges/PanelLoader.vue?vue&type=template&id=63885003&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_template_id_63885003_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PanelLoader.vue?vue&type=template&id=63885003&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=template&id=63885003&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_template_id_63885003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PanelLoader_vue_vue_type_template_id_63885003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);