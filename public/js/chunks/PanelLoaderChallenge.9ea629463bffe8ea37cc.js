(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PanelLoaderChallenge"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/challenges/PanelLoader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {// this.checkState();
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
      duelPanelIsWeb: true
    };
  },
  methods: {
    goTopanel: function goTopanel() {
      this.$router.push({
        path: '/panel/' + this.$route.params.duelId + '/panel/user/user/view/' + this.selecetedPanelId
      });
    },
    checkState: function checkState() {
      if (this.$route.params.actionType == "vote") {
        this.fetchParticipants();
      } else {
        this.fetchResults();
      }
    },
    goBack: function goBack() {
      this.$router.push({
        path: '/panel/' + this.$route.params.duelId + '/board' + '/user'
      });
    },
    showPage: function showPage(participant) {
      this.pageContent = '';
      this.loading = true;
      this.participantSelected = participant;
      this.selectedParticipantId = participant.id;
      this.selecetedPanelId = participant.panel_id;
      this.duelPanelIsWeb = participant.duelIsWeb;

      if (participant.duelIsWeb) {
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
      })["catch"](function (error) {});
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

            _this3.checkResponse(token, response.data[1]);
          } else if (response.data[0][0].status.description == 'Processing') {
            _this3.pageContent = 'Processing...';

            _this3.checkResponse(token, response.data[1]);
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

      axios.get('/fetch-duel-participants/' + this.$route.params.duelId).then(function (response) {
        if (response.status == 200) {
          _this4.participants = response.data[0];
          _this4.votes = response.data[1];
          var duel = response.data[2];

          var status = _this4.checkDuelStatus(duel.duel_terminal_time, duel.duel_voting_time);

          _this4.fetchResults();

          _this4.selectedParticipantId = '';
        }
      })["catch"](function (error) {});
    },
    fetchResults: function fetchResults() {
      var _this5 = this;

      this.$root.checkIfUserIsLoggedIn('duels');
      axios.get('/fetch-duel-results/' + this.$route.params.duelId).then(function (response) {
        if (response.status == 200) {
          _this5.participants = response.data[0];
          var duel = response.data[1];

          var status = _this5.checkDuelStatus(duel.duel_terminal_time, duel.duel_voting_time);

          if (status == 'Active') {
            _this5.fetchParticipants();

            _this5.$router.push({
              path: '/panel/' + _this5.$route.params.duelId + '/participant/vote'
            });
          }
        }
      })["catch"](function (error) {});
    },
    checkDuelStatus: function checkDuelStatus(terminalDate, votingDate) {
      var now = moment();
      var terminalDateToMoment = moment(terminalDate);
      var votingDateToMoment = moment(votingDate);
      var differenceInSeconds = votingDateToMoment.diff(now, 'seconds');
      var differenceInSecondsForVoting = votingDateToMoment.diff(terminalDateToMoment, 'seconds');

      if (differenceInSeconds <= 0) {
        return 'Ended';
      } else {
        if (differenceInSecondsForVoting > 0) {
          return 'Voting';
        }

        return 'Active';
      }
    },
    SaveVotes: function SaveVotes() {
      var _this6 = this;

      setTimeout(function () {
        if (_this6.votes.length == 0) {
          return;
        }

        _this6.saveLoading = true;
        axios.post('/save-duel-votes', {
          votes: _this6.votes
        }).then(function (response) {
          if (response.status == 200) {
            _this6.saveLoading = false;

            _this6.showAlert(5000, 'Votes saved');
          }
        })["catch"](function (error) {
          _this6.saveLoading = false;

          _this6.showAlert(5000, 'Error-' + error);
        });
      }, 1000);
    }
  }
});

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
        "v-btn",
        {
          staticClass: "d-inline-block",
          staticStyle: {
            position: "absolute",
            "z-index": "9999999999999999",
            top: "2%",
            left: "2%"
          },
          attrs: { small: "", icon: "" }
        },
        [
          _c("v-icon", { attrs: { color: "#3C87CD" } }, [
            _vm._v("mdi mdi-close mdi-18px")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-12 my-0 py-2 d-lg-flex  d-none scroller ",
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
            "v-chip",
            {
              staticClass: "ma-1 mx-1 ml-0 fileText d-inline-block",
              style: true
                ? "color:white;background-color:#3C87CD;"
                : undefined,
              attrs: { close: "", small: "" }
            },
            [_vm._v("\n    sample\n  ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      false
        ? undefined
        : _vm._e(),
      _vm._v(" "),
      true
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
              srcdoc: "pageContent"
            }
          })
        : undefined,
      _vm._v(" "),
      false
        ? undefined
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
            background: "rgba(27, 27, 30, 0.4)",
            "z-index": "9999999999999999999"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 py-0 px-0" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6 py-0 px-0 text-center" },
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
                        : _c("div", { staticClass: "row py-0 my-0" }, [
                            _c(
                              "div",
                              { staticClass: "col-8 py-0 my-0 text-center" },
                              _vm._l(_vm.votes, function(vote, index) {
                                return _c(
                                  "div",
                                  { key: index },
                                  [
                                    vote.participant_id ==
                                    _vm.selectedParticipantId
                                      ? _c("v-rating", {
                                          attrs: {
                                            "background-color": "#edf6f7",
                                            color: "#edf6f7"
                                          },
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
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-4 py-2 my-0 text-center" },
                              [
                                _c(
                                  "span",
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "#ffffff" } },
                                      [_vm._v("mdi-star")]
                                    ),
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
                                          _vm._s(
                                            _vm.participantSelected.votes
                                          ) +
                                            " " +
                                            _vm._s(_vm.$t("duels.votes"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                    ]
                  : [
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
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-3 py-0 px-0" })
          ])
        ]
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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