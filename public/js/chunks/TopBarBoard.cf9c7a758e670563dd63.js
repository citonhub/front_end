(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TopBarBoard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutAccount.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/PayoutAccount.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formstate: false,
      that: this,
      currencyData: [{
        name: 'Nigerian Naira (NGN)',
        code: 'NGN',
        symbol: '&#8358;',
        iso: 'NG'
      }, {
        name: 'Australian Dollar (AUD)',
        code: 'AUD',
        symbol: 'A$'
      }, {
        name: 'United State Dollar (USD)',
        code: 'USD',
        symbol: '&#36;'
      }, {
        name: 'Congolese Franc (CDF)',
        code: 'CDF',
        symbol: '&#8355;'
      }, {
        name: 'Euro (EUR)',
        code: 'EUR',
        symbol: '&#128;'
      }, {
        name: 'South African Rand (ZAR)',
        code: 'ZAR',
        symbol: 'R',
        iso: 'ZA'
      }, {
        name: 'British Pound Sterling (GBP)',
        code: 'GBP',
        symbol: '&#163;'
      }, {
        name: 'Ghanainan Cedi (GHS)',
        code: 'GHS',
        symbol: '&#8373;',
        iso: 'GH'
      }, {
        name: 'Gambian Dalasi (GMD)',
        code: 'GMD',
        symbol: 'D'
      }, {
        name: 'Guinean Franc (GNF)',
        code: 'GNF',
        symbol: '&#8355;'
      }, {
        name: 'Kenya Shilling (KES)',
        code: 'KES',
        symbol: 'KSh',
        iso: 'KE'
      }, {
        name: 'Liberian Dollar (LRD)',
        code: 'LRD',
        symbol: '&#36;'
      }, {
        name: 'Malawian Kwacha (MWK)',
        code: 'MWK',
        symbol: 'MWK'
      }, {
        name: 'Mozambican Metical (MZN)',
        code: 'MZN',
        symbol: 'MZN'
      }, {
        name: 'Rwandan Franc (RWF)',
        code: 'RWF',
        symbol: '&#8355;',
        iso: 'RW'
      }, {
        name: 'Sierra Leonean Leone (SLL)',
        code: 'SLL',
        symbol: 'Le',
        iso: 'SL'
      }, {
        name: 'Sao Tome and Principe Dobra (STD)',
        code: 'STD',
        symbol: 'STD'
      }, {
        name: 'Tanzanian Shilling (TZS)',
        code: 'TZS',
        symbol: 'TSh',
        iso: 'TZ'
      }, {
        name: 'Ugandan Shilling (UGX)',
        code: 'UGX',
        symbol: 'Ush',
        iso: 'UG'
      }, {
        name: 'CSA Franc BEAC (XAF)',
        code: 'XAF',
        symbol: '&#8355;',
        iso: 'multiple'
      }, {
        name: 'CSA Franc BCEAO (XOF)',
        code: 'XOF',
        symbol: '&#8355;',
        iso: 'multiple'
      }, {
        name: 'Zambian Kwacha (pre-2013) (ZMK)',
        code: 'ZMK',
        symbol: 'ZMK'
      }, {
        name: 'Zambian Kwacha (ZMW)',
        code: 'ZMW',
        symbol: 'ZMW'
      }, {
        name: 'Zimbabwean Dollar',
        code: 'ZWD',
        symbol: 'Z$'
      }],
      requiredRule: [function (v) {
        return !!v || 'Oh! you missed this.';
      }],
      bankData: [],
      bankBranchData: [],
      countryData: [],
      acc_number: '',
      acc_name: '',
      acc_email: '',
      swift_code: '',
      bank_routing: '',
      routing_number: '',
      acc_address: '',
      acc_city: '',
      acc_bank_code: 0,
      acc_portal_code: '',
      bank_name: '',
      loadingBankData: false,
      acc_bank_branch_code: 0,
      acc_country_code: 0,
      xaf_countries: [{
        'name': 'Cameroon',
        'iso': 'CM'
      }, {
        'name': 'Chad',
        'iso': 'TD'
      }, {
        'name': 'Gabon',
        'iso': 'GA'
      }, {
        'name': 'The Rebulic of Congo',
        'iso': 'CG'
      }],
      xof_countries: [{
        'name': 'Benin',
        'iso': 'BJ'
      }, {
        'name': 'cote d\'ivoire',
        'iso': 'CI'
      }],
      loadingsave: false
    };
  },
  mounted: function mounted() {
    this.handleFetchedData();
  },
  methods: {
    savePayoutAccount: function savePayoutAccount() {
      var _this = this;

      if (this.$refs.payout.validate()) {
        if (this.bank_name == '') {
          var selectedBank = this.bankData.filter(function (bank) {
            return bank.code == _this.acc_bank_code;
          });
          var bankId = 0;

          if (selectedBank.length > 0) {
            this.bank_name = selectedBank[0].name;
          } else {}
        }

        this.loadingsave = true;
        axios.post('/save-payout-account', {
          account_number: this.acc_number,
          account_bank: this.acc_bank_code,
          routing_number: this.bank_routing,
          swift_code: this.swift_code,
          bank_name: this.bank_name,
          account_name: this.acc_name,
          account_country: this.acc_country_code,
          portal_code: this.portal_code,
          account_address: this.acc_address,
          account_city: this.acc_city,
          bank_branch_code: this.acc_bank_branch_code
        }).then(function (response) {
          if (response.status == 201) {
            _this.loadingsave = false;

            _this.$root.manageWalletComponent.showAlert('Saved!', 'Your changes has been saved', 'success');

            _this.$root.showPayoutAccount = false;
          }
        })["catch"](function (error) {
          _this.loadingsave = false;

          _this.$root.manageWalletComponent.showAlert('Oops!', 'Something went wrong,please try again', 'error');
        });
      }
    },
    fetchCountriesData: function fetchCountriesData() {
      var _this2 = this;

      axios.get('/fetch_countries').then(function (response) {
        if (response.status == 200) {
          _this2.countryData = response.data.countries;
        }
      })["catch"](function (error) {});
    },
    getBanks: function getBanks() {
      var _this3 = this;

      if (this.$root.selectedPaymentCard.currency == 'XOF' || this.$root.selectedPaymentCard.currency == 'XAF') {
        this.acc_bank_code = 0;
        var selectedCountry = this.countryData.filter(function (country) {
          return country.iso == _this3.acc_country_code;
        });

        if (selectedCountry.length > 0) {
          this.fetchCountryBanks(selectedCountry[0].iso);
        }
      }
    },
    getBankBranches: _.debounce(function () {
      var _this4 = this;

      if (this.$root.selectedPaymentCard.currency == 'GHS' || this.$root.selectedPaymentCard.currency == 'UGX' || this.$root.selectedPaymentCard.currency == 'TZS') {
        this.acc_bank_branch_code = 0;
        var selectedBank = this.bankData.filter(function (bank) {
          return bank.code == _this4.acc_bank_code;
        });
        var bankId = 0;

        if (selectedBank.length > 0) {
          bankId = selectedBank[0].id;
        } else {
          return;
        }

        axios.get('/fetch_country_banks_branches/' + bankId).then(function (response) {
          if (response.status == 200) {
            _this4.bankBranchData = response.data.country_bank_branches;
          }
        })["catch"](function (error) {});
      }
    }, 500),
    handleFetchedData: function handleFetchedData() {
      var _this5 = this;

      if (this.$root.selectedPaymentCard.currency == 'GBP' || this.$root.selectedPaymentCard.currency == 'EUR' || this.$root.selectedPaymentCard.currency == 'USD' || this.$root.selectedPaymentCard.currency == 'AUD') {
        this.fetchCountriesData();
      }

      if (this.$root.selectedPaymentCard.currency == 'XOF') {
        this.countryData = this.xof_countries;
      }

      if (this.$root.selectedPaymentCard.currency == 'XAF') {
        this.countryData = this.xaf_countries;
      }

      var thisCardData = this.currencyData.filter(function (eachCurrency) {
        return eachCurrency.code == _this5.$root.selectedPaymentCard.currency;
      });

      if (thisCardData.length > 0) {
        if (thisCardData[0].iso) {
          var cardIso = thisCardData[0].iso;

          if (cardIso != 'multiple') {
            this.fetchCountryBanks(cardIso);
          }
        }
      }
    },
    fetchCountryBanks: function fetchCountryBanks(iso) {
      var _this6 = this;

      this.loadingBankData = true;
      axios.get('/fetch_country_banks/' + iso).then(function (response) {
        if (response.status == 200) {
          _this6.bankData = response.data.country_banks;
          _this6.loadingBankData = false;
        }
      })["catch"](function (error) {});
    },
    handleDateFormat: function handleDateFormat(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      return moment(realTimeHour).format("MMM D, YYYY");
    },
    handleTime: function handleTime(date) {
      var realTimeHour = moment(date).add(1, 'hours');
      return moment(realTimeHour).format("h:mm a");
    },
    closeModal: function closeModal() {
      this.$root.showPayoutAccount = false;
    },
    formatMoney: function formatMoney(number) {
      return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    currencyToCharacter: function currencyToCharacter(currency) {
      var thisCurrency = this.currencyData.filter(function (eachCurrency) {
        return currency == eachCurrency.code;
      });
      return thisCurrency[0].symbol;
    },
    preventDefault: function preventDefault() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showSideBar: false,
      searchType: '',
      that: this,
      searchContent: ''
    };
  },
  mounted: function mounted() {
    this.$root.TopBarComponentBoard = this;
  },
  methods: {
    showProfile: function showProfile() {
      this.$router.push({
        path: '/profile/' + this.$root.username
      });
    },
    showSideBarHandler: function showSideBarHandler() {
      this.$root.checkIfUserIsLoggedIn();
      this.$root.componentIsLoading = true;
      this.$root.showSideBar = true;
    },
    triggerSearch: function triggerSearch() {
      if (this.$root.searchType == 'challenges') {
        this.getChallenges(this.searchContent);
      }

      if (this.$root.searchType == 'projects') {
        this.searchProject(this.searchContent);
      }

      if (this.$root.searchType == 'diary') {
        this.searchDiary(this.searchContent);
      }

      if (this.$root.searchType == 'leaderboard') {
        this.searchDiary(this.searchContent);
      }
    },
    searchProject: function searchProject(query) {
      var fullProjectList = this.$root.projectList.user_projects.concat(this.$root.projectList.contributor_projects, this.$root.projectList.pinned_projects);
      var projectListResult = fullProjectList.filter(function (project) {
        var nameValue = project.title.toLowerCase();
        return nameValue.includes(query.toLowerCase());
      });
      this.$root.projectSearchList = projectListResult;
    },
    searchDiary: function searchDiary(query) {
      if (this.$router.currentRoute.path.indexOf('bank') >= 0) {
        this.getDiaryBank(query);
        return;
      }

      var diaryListResult = this.$root.diaryList.filter(function (diary) {
        var nameValue = diary.name.toLowerCase();
        return nameValue.includes(query.toLowerCase());
      });
      this.$root.diarySearchList = diaryListResult;
    },
    getDiaryBank: _.debounce(function (query) {
      var _this = this;

      var finalString = '/' + query;

      if (query.length == 0) {
        finalString = '';
      }

      this.$root.diaryBankComponent.loadingSearchDairy = true;
      axios.get('/get-diary-bank' + finalString).then(function (response) {
        if (response.status == 200) {
          _this.$root.diaryBankSearchList = response.data.diaries;
          _this.$root.diaryBankComponent.loadingSearchDairy = false;
        }
      })["catch"](function (error) {
        _this.$root.diaryBankComponent.loadingSearchDairy = false;
      });
    }, 500),
    getChallenges: _.debounce(function (query) {
      var _this2 = this;

      var finalString = '/' + query;

      if (query.length == 0) {
        finalString = '';
      }

      this.$root.challengeListComponent.loadingSearchChallenges = true;
      axios.get('/get-challenges' + finalString).then(function (response) {
        if (response.status == 200) {
          _this2.$root.challengeSearchList = response.data.challenges;
          _this2.$root.challengeListComponent.loadingSearchChallenges = false;
        }
      })["catch"](function (error) {
        _this2.$root.challengeListComponent.loadingSearchChallenges = false;
      });
    }, 500),
    searchLeaderboard: function searchLeaderboard(query) {
      if (this.$router.currentRoute.path.indexOf('leaderboard') >= 0) {
        //filter
        this.$root.leaderboardMembers.filter(function (member) {
          return your_string.indexOf('hello') > -1;
        });
      }
    },
    goToNotification: function goToNotification() {
      this.$router.push({
        path: '/board/notifications'
      });
    },
    imageStyleUser: function imageStyleUser(dimension, data) {
      if (data.background_color == null) {
        var styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5;";
        styleString += 'background-color:#ffffff; background-image:url(imgs/profile_new.png);';
        return styleString;
      } else {
        var _styleString = "border-radius:50%;height:" + dimension + "px;width:" + dimension + "px;background-size:contain;border:1px solid #c5c5c5; ";

        var imgLink = data.image_name + '.' + data.image_extension;
        _styleString += 'background-color:' + data.background_color + '; background-image:url(/imgs/profile/' + imgLink + ');';
        return _styleString;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Wallet/PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    {
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.preventDefault($event)
        }
      }
    },
    [
      _c(
        "v-card",
        {
          staticClass:
            "col-lg-4 offset-lg-4   py-2 d-flex flex-column col-md-8 offset-md-2 application application--light",
          attrs: { "data-app": "true" }
        },
        [
          _c(
            "div",
            {
              staticClass: "d-flex flex-row px-1 py-2",
              staticStyle: {
                "border-bottom": "1px solid #c5c5c5",
                "border-radius": "0px",
                "align-items": "center"
              }
            },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    "font-family": "HeaderFont",
                    "font-size": "16px"
                  }
                },
                [_vm._v("Add Payout Account")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ml-auto ",
                  staticStyle: { background: "#3C87CD" },
                  attrs: { small: "", icon: "", color: "#ffffff" },
                  on: { click: _vm.closeModal }
                },
                [_c("v-icon", [_vm._v("mdi-close mdi-18px")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "payout",
              staticClass: "mt-2",
              model: {
                value: _vm.formstate,
                callback: function($$v) {
                  _vm.formstate = $$v
                },
                expression: "formstate"
              }
            },
            [
              _vm.that.$root.selectedPaymentCard.currency == "XAF" ||
              _vm.that.$root.selectedPaymentCard.currency == "GBP" ||
              _vm.that.$root.selectedPaymentCard.currency == "EUR" ||
              _vm.that.$root.selectedPaymentCard.currency == "USD" ||
              _vm.that.$root.selectedPaymentCard.currency == "AUD" ||
              _vm.that.$root.selectedPaymentCard.currency == "XOF"
                ? [
                    _c(
                      "div",
                      {
                        staticClass: "mb-1",
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v("Country")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.acc_country_code,
                            expression: "acc_country_code"
                          }
                        ],
                        staticClass: "browser-default custom-select mb-4",
                        staticStyle: {
                          "font-size": "13px !important",
                          "font-family": "BodyFont",
                          background: "transparent"
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.acc_country_code = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              return _vm.getBanks()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { domProps: { value: 0 } }, [
                          _vm._v("select...")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.countryData, function(option, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: option.iso } },
                            [_vm._v(_vm._s(option.name))]
                          )
                        })
                      ],
                      2
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mb-1",
                  staticStyle: {
                    "font-size": "13px",
                    "font-family": "MediumFont"
                  }
                },
                [_vm._v("Bank name")]
              ),
              _vm._v(" "),
              _vm.that.$root.selectedPaymentCard.currency == "GBP" ||
              _vm.that.$root.selectedPaymentCard.currency == "EUR" ||
              _vm.that.$root.selectedPaymentCard.currency == "USD" ||
              _vm.that.$root.selectedPaymentCard.currency == "AUD"
                ? [
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "bank name",
                        dense: "",
                        rules: _vm.requiredRule,
                        outlined: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.bank_name,
                        callback: function($$v) {
                          _vm.bank_name = $$v
                        },
                        expression: "bank_name"
                      }
                    })
                  ]
                : [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.acc_bank_code,
                            expression: "acc_bank_code"
                          }
                        ],
                        staticClass: "browser-default custom-select mb-4",
                        staticStyle: {
                          "font-size": "13px !important",
                          "font-family": "BodyFont",
                          background: "transparent"
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.acc_bank_code = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              return _vm.getBankBranches()
                            }
                          ]
                        }
                      },
                      [
                        _c("option", { domProps: { value: 0 } }, [
                          _vm._v("select...")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.bankData, function(option, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: option.code } },
                            [_vm._v(_vm._s(option.name))]
                          )
                        })
                      ],
                      2
                    )
                  ],
              _vm._v(" "),
              _vm.that.$root.selectedPaymentCard.currency == "GHS" ||
              _vm.that.$root.selectedPaymentCard.currency == "UGX" ||
              _vm.that.$root.selectedPaymentCard.currency == "TZS"
                ? [
                    _c(
                      "div",
                      {
                        staticClass: "mb-1",
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v("Bank branch name")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.acc_bank_branch_code,
                            expression: "acc_bank_branch_code"
                          }
                        ],
                        staticClass: "browser-default custom-select mb-4",
                        staticStyle: {
                          "font-size": "13px !important",
                          "font-family": "BodyFont",
                          background: "transparent"
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.acc_bank_branch_code = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { domProps: { value: 0 } }, [
                          _vm._v("select...")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.bankBranchData, function(option, index) {
                          return _c(
                            "option",
                            {
                              key: index,
                              domProps: { value: option.branch_code }
                            },
                            [
                              _vm._v(
                                _vm._s(option.branch_name) +
                                  " -  " +
                                  _vm._s(option.branch_code) +
                                  " "
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mb-1 ",
                  staticStyle: {
                    "font-size": "13px",
                    "font-family": "MediumFont"
                  }
                },
                [_vm._v("Account Number")]
              ),
              _vm._v(" "),
              _c("v-text-field", {
                staticStyle: { "font-size": "13px" },
                attrs: {
                  placeholder: "account number",
                  dense: "",
                  rules: _vm.requiredRule,
                  type: "tel",
                  outlined: "",
                  color: "#3C87CD"
                },
                model: {
                  value: _vm.acc_number,
                  callback: function($$v) {
                    _vm.acc_number = $$v
                  },
                  expression: "acc_number"
                }
              }),
              _vm._v(" "),
              _vm.that.$root.selectedPaymentCard.currency == "GBP" ||
              _vm.that.$root.selectedPaymentCard.currency == "EUR" ||
              _vm.that.$root.selectedPaymentCard.currency == "USD" ||
              _vm.that.$root.selectedPaymentCard.currency == "AUD"
                ? [
                    _c(
                      "div",
                      {
                        staticClass: "mb-1 ",
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v("Account Name")]
                    ),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "account name",
                        dense: "",
                        rules: _vm.requiredRule,
                        outlined: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.acc_name,
                        callback: function($$v) {
                          _vm.acc_name = $$v
                        },
                        expression: "acc_name"
                      }
                    }),
                    _vm._v(" "),
                    _vm.that.$root.selectedPaymentCard.currency != "USD"
                      ? [
                          _c(
                            "div",
                            {
                              staticClass: "mb-1 ",
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("City")]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            staticStyle: { "font-size": "13px" },
                            attrs: {
                              placeholder: "city",
                              dense: "",
                              rules: _vm.requiredRule,
                              outlined: "",
                              color: "#3C87CD"
                            },
                            model: {
                              value: _vm.acc_city,
                              callback: function($$v) {
                                _vm.acc_city = $$v
                              },
                              expression: "acc_city"
                            }
                          })
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "mb-1 ",
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v("Your Address")]
                    ),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "address",
                        dense: "",
                        rules: _vm.requiredRule,
                        outlined: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.acc_address,
                        callback: function($$v) {
                          _vm.acc_address = $$v
                        },
                        expression: "acc_address"
                      }
                    }),
                    _vm._v(" "),
                    _vm.that.$root.selectedPaymentCard.currency != "USD"
                      ? [
                          _c(
                            "div",
                            {
                              staticClass: "mb-1 ",
                              staticStyle: {
                                "font-size": "13px",
                                "font-family": "MediumFont"
                              }
                            },
                            [_vm._v("Portal code")]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            staticStyle: { "font-size": "13px" },
                            attrs: {
                              placeholder: "portal code",
                              dense: "",
                              rules: _vm.requiredRule,
                              outlined: "",
                              color: "#3C87CD"
                            },
                            model: {
                              value: _vm.acc_portal_code,
                              callback: function($$v) {
                                _vm.acc_portal_code = $$v
                              },
                              expression: "acc_portal_code"
                            }
                          })
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "mb-1 ",
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v("Swift code")]
                    ),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "swift code",
                        dense: "",
                        rules: _vm.requiredRule,
                        outlined: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.swift_code,
                        callback: function($$v) {
                          _vm.swift_code = $$v
                        },
                        expression: "swift_code"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "mb-1 ",
                        staticStyle: {
                          "font-size": "13px",
                          "font-family": "MediumFont"
                        }
                      },
                      [_vm._v("Bank Routing Number/Sort Code")]
                    ),
                    _vm._v(" "),
                    _c("v-text-field", {
                      staticStyle: { "font-size": "13px" },
                      attrs: {
                        placeholder: "Bank Routing Number/Sort Code",
                        dense: "",
                        rules: _vm.requiredRule,
                        outlined: "",
                        color: "#3C87CD"
                      },
                      model: {
                        value: _vm.bank_routing,
                        callback: function($$v) {
                          _vm.bank_routing = $$v
                        },
                        expression: "bank_routing"
                      }
                    })
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 text-center pb-2" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-2 ",
                  staticStyle: {
                    color: "white",
                    "font-family": "BodyFont",
                    "font-size": "11px"
                  },
                  attrs: {
                    small: "",
                    loading: _vm.loadingsave,
                    color: "#3C87CD"
                  },
                  on: { click: _vm.savePayoutAccount }
                },
                [_vm._v("Add")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-12  py-3 my-2" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true& ***!
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "col-12 d-none d-md-block py-0",
        staticStyle: {
          position: "absolute",
          background: "#F5F5FB",
          height: "70px",
          top: "0",
          left: "0",
          "font-family": "BodyFont",
          "z-index": "9999999999"
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-5 col-md-1  text-left" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mt-2 d-lg-none ",
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.showSideBarHandler()
                    }
                  }
                },
                [
                  _c(
                    "v-icon",
                    { staticStyle: { "font-size": "25px", color: "black" } },
                    [_vm._v("las la-bars")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-7 col-md-10 offset-md-1 offset-lg-0" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-6 col-md-5 text-center" },
                  [
                    _vm.that.$root.searchType != "notifications" &&
                    _vm.that.$root.searchType != "wallet"
                      ? [
                          _c("v-text-field", {
                            staticStyle: { "font-size": "13px" },
                            attrs: {
                              placeholder:
                                "Search " + _vm.that.$root.searchType,
                              filled: "",
                              dense: "",
                              "append-icon": "las la-search",
                              rounded: ""
                            },
                            on: { input: _vm.triggerSearch },
                            model: {
                              value: _vm.searchContent,
                              callback: function($$v) {
                                _vm.searchContent = $$v
                              },
                              expression: "searchContent"
                            }
                          })
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-2 col-md-2 text-right" },
                  [
                    this.$root.authProfile.name
                      ? [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: { click: _vm.goToNotification }
                            },
                            [
                              this.$root.authProfile.unread > 0
                                ? _c(
                                    "v-badge",
                                    {
                                      attrs: {
                                        content: this.$root.authProfile.unread,
                                        color: "green"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: {
                                            "font-size": "25px",
                                            color: "#263238"
                                          }
                                        },
                                        [_vm._v("las la-bell")]
                                      )
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-icon",
                                    {
                                      staticStyle: {
                                        "font-size": "25px",
                                        color: "#263238"
                                      }
                                    },
                                    [_vm._v("las la-bell")]
                                  )
                            ],
                            1
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-lg-4 col-md-5 py-1 d-flex",
                    staticStyle: {
                      "justify-content": "center",
                      "align-items": "center"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "mb-5",
                        staticStyle: { cursor: "pointer" },
                        on: { click: _vm.showProfile }
                      },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: " d-flex   py-1 px-2",
                            staticStyle: {
                              "border-radius": "30px",
                              "justify-content": "center",
                              "align-items": "center"
                            },
                            attrs: { "elevation-2": "" }
                          },
                          [
                            this.$root.authProfile.name
                              ? [
                                  _c("div", {
                                    staticClass: "d-inline-block mr-2",
                                    style: _vm.imageStyleUser(
                                      30,
                                      this.$root.authProfile
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "pr-1",
                                      staticStyle: {
                                        "font-family": "MediumFont",
                                        "font-size": "13px",
                                        color: "black"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(this.$root.authProfile.name)
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _vm.that.$root.showTopBar
      ? _c(
          "div",
          {
            staticClass: "col-12 d-block d-md-none py-2 ",
            staticStyle: {
              position: "absolute",
              background: "#F5F5FB",
              top: "0",
              left: "0",
              "font-family": "BodyFont",
              "z-index": "99999999999"
            }
          },
          [
            _c(
              "div",
              { staticClass: "row px-2" },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "col-12 py-2 px-1",
                    staticStyle: { "border-radius": "7px" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-2 py-0  text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  return _vm.showSideBarHandler()
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticStyle: {
                                    "font-size": "25px",
                                    color: "#263238"
                                  }
                                },
                                [_vm._v("las la-bars")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-6 d-flex py-0 px-1",
                          staticStyle: { "align-items": "center" }
                        },
                        [
                          _vm.that.$root.searchType != "notifications" &&
                          _vm.that.$root.searchType != "wallet"
                            ? [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.searchContent,
                                      expression: "searchContent"
                                    }
                                  ],
                                  staticClass: "py-2 px-2",
                                  staticStyle: {
                                    width: "100%",
                                    heigth: "100%",
                                    "font-size": "13px"
                                  },
                                  attrs: {
                                    placeholder:
                                      "Search " + _vm.that.$root.searchType,
                                    type: "search"
                                  },
                                  domProps: { value: _vm.searchContent },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.searchContent = $event.target.value
                                      },
                                      _vm.triggerSearch
                                    ]
                                  }
                                })
                              ]
                            : [
                                _c("div", { staticClass: "text-left" }, [
                                  _vm.that.$root.searchType == "wallet"
                                    ? _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "14px",
                                            "text-transfrom": "capitalize",
                                            "font-family": "MediumFont"
                                          }
                                        },
                                        [_vm._v("Wallet")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.that.$root.searchType == "notifications"
                                    ? _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-size": "14px",
                                            "text-transfrom": "capitalize",
                                            "font-family": "MediumFont"
                                          }
                                        },
                                        [_vm._v("Notifications")]
                                      )
                                    : _vm._e()
                                ])
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-2 text-center py-0" },
                        [
                          this.$root.authProfile.name
                            ? [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "" },
                                    on: { click: _vm.goToNotification }
                                  },
                                  [
                                    this.$root.authProfile.unread > 0
                                      ? _c(
                                          "v-badge",
                                          {
                                            attrs: { dot: "", color: "green" }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                staticStyle: {
                                                  "font-size": "23px",
                                                  color: "#263238"
                                                }
                                              },
                                              [_vm._v("las la-bell")]
                                            )
                                          ],
                                          1
                                        )
                                      : _c(
                                          "v-icon",
                                          {
                                            staticStyle: {
                                              "font-size": "23px",
                                              color: "#263238"
                                            }
                                          },
                                          [_vm._v("las la-bell")]
                                        )
                                  ],
                                  1
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-2 d-flex px-1 py-0",
                          staticStyle: {
                            "justify-content": "center",
                            "align-items": "center"
                          }
                        },
                        [
                          this.$root.authProfile.name
                            ? [
                                _c("div", {
                                  style: _vm.imageStyleUser(
                                    32,
                                    this.$root.authProfile
                                  ),
                                  on: { click: _vm.showProfile }
                                })
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Wallet/PayoutAccount.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Wallet/PayoutAccount.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PayoutAccount_vue_vue_type_template_id_bec62348_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true& */ "./resources/js/components/Wallet/PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true&");
/* harmony import */ var _PayoutAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PayoutAccount.vue?vue&type=script&lang=js& */ "./resources/js/components/Wallet/PayoutAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PayoutAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PayoutAccount_vue_vue_type_template_id_bec62348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PayoutAccount_vue_vue_type_template_id_bec62348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bec62348",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Wallet/PayoutAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Wallet/PayoutAccount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Wallet/PayoutAccount.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PayoutAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Wallet/PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Wallet/PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutAccount_vue_vue_type_template_id_bec62348_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Wallet/PayoutAccount.vue?vue&type=template&id=bec62348&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutAccount_vue_vue_type_template_id_bec62348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayoutAccount_vue_vue_type_template_id_bec62348_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/TopBar.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/dashboard/TopBar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=56f75444&scoped=true& */ "./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56f75444",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=56f75444&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/TopBar.vue?vue&type=template&id=56f75444&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_56f75444_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);